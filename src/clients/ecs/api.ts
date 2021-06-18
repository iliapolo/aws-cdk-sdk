import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EcsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCapacityProvider(input: shapes.EcsCreateCapacityProviderRequest): ECSCreateCapacityProvider {
    return new ECSCreateCapacityProvider(this, 'CreateCapacityProvider', this.__resources, input);
  }

  public createCluster(input: shapes.EcsCreateClusterRequest): ECSCreateCluster {
    return new ECSCreateCluster(this, 'CreateCluster', this.__resources, input);
  }

  public createService(input: shapes.EcsCreateServiceRequest): ECSCreateService {
    return new ECSCreateService(this, 'CreateService', this.__resources, input);
  }

  public createTaskSet(input: shapes.EcsCreateTaskSetRequest): ECSCreateTaskSet {
    return new ECSCreateTaskSet(this, 'CreateTaskSet', this.__resources, input);
  }

  public deleteAccountSetting(input: shapes.EcsDeleteAccountSettingRequest): ECSDeleteAccountSetting {
    return new ECSDeleteAccountSetting(this, 'DeleteAccountSetting', this.__resources, input);
  }

  public deleteAttributes(input: shapes.EcsDeleteAttributesRequest): ECSDeleteAttributes {
    return new ECSDeleteAttributes(this, 'DeleteAttributes', this.__resources, input);
  }

  public deleteCapacityProvider(input: shapes.EcsDeleteCapacityProviderRequest): ECSDeleteCapacityProvider {
    return new ECSDeleteCapacityProvider(this, 'DeleteCapacityProvider', this.__resources, input);
  }

  public deleteCluster(input: shapes.EcsDeleteClusterRequest): ECSDeleteCluster {
    return new ECSDeleteCluster(this, 'DeleteCluster', this.__resources, input);
  }

  public deleteService(input: shapes.EcsDeleteServiceRequest): ECSDeleteService {
    return new ECSDeleteService(this, 'DeleteService', this.__resources, input);
  }

  public deleteTaskSet(input: shapes.EcsDeleteTaskSetRequest): ECSDeleteTaskSet {
    return new ECSDeleteTaskSet(this, 'DeleteTaskSet', this.__resources, input);
  }

  public deregisterContainerInstance(input: shapes.EcsDeregisterContainerInstanceRequest): ECSDeregisterContainerInstance {
    return new ECSDeregisterContainerInstance(this, 'DeregisterContainerInstance', this.__resources, input);
  }

  public deregisterTaskDefinition(input: shapes.EcsDeregisterTaskDefinitionRequest): ECSDeregisterTaskDefinition {
    return new ECSDeregisterTaskDefinition(this, 'DeregisterTaskDefinition', this.__resources, input);
  }

  public describeCapacityProviders(input: shapes.EcsDescribeCapacityProvidersRequest): ECSDescribeCapacityProviders {
    return new ECSDescribeCapacityProviders(this, 'DescribeCapacityProviders', this.__resources, input);
  }

  public describeClusters(input: shapes.EcsDescribeClustersRequest): ECSDescribeClusters {
    return new ECSDescribeClusters(this, 'DescribeClusters', this.__resources, input);
  }

  public describeContainerInstances(input: shapes.EcsDescribeContainerInstancesRequest): ECSDescribeContainerInstances {
    return new ECSDescribeContainerInstances(this, 'DescribeContainerInstances', this.__resources, input);
  }

  public describeServices(input: shapes.EcsDescribeServicesRequest): ECSDescribeServices {
    return new ECSDescribeServices(this, 'DescribeServices', this.__resources, input);
  }

  public describeTaskDefinition(input: shapes.EcsDescribeTaskDefinitionRequest): ECSDescribeTaskDefinition {
    return new ECSDescribeTaskDefinition(this, 'DescribeTaskDefinition', this.__resources, input);
  }

  public describeTaskSets(input: shapes.EcsDescribeTaskSetsRequest): ECSDescribeTaskSets {
    return new ECSDescribeTaskSets(this, 'DescribeTaskSets', this.__resources, input);
  }

  public describeTasks(input: shapes.EcsDescribeTasksRequest): ECSDescribeTasks {
    return new ECSDescribeTasks(this, 'DescribeTasks', this.__resources, input);
  }

  public discoverPollEndpoint(input: shapes.EcsDiscoverPollEndpointRequest): ECSDiscoverPollEndpoint {
    return new ECSDiscoverPollEndpoint(this, 'DiscoverPollEndpoint', this.__resources, input);
  }

  public listAccountSettings(input: shapes.EcsListAccountSettingsRequest): ECSListAccountSettings {
    return new ECSListAccountSettings(this, 'ListAccountSettings', this.__resources, input);
  }

  public listAttributes(input: shapes.EcsListAttributesRequest): ECSListAttributes {
    return new ECSListAttributes(this, 'ListAttributes', this.__resources, input);
  }

  public listClusters(input: shapes.EcsListClustersRequest): ECSListClusters {
    return new ECSListClusters(this, 'ListClusters', this.__resources, input);
  }

  public listContainerInstances(input: shapes.EcsListContainerInstancesRequest): ECSListContainerInstances {
    return new ECSListContainerInstances(this, 'ListContainerInstances', this.__resources, input);
  }

  public listServices(input: shapes.EcsListServicesRequest): ECSListServices {
    return new ECSListServices(this, 'ListServices', this.__resources, input);
  }

  public listTagsForResource(input: shapes.EcsListTagsForResourceRequest): ECSListTagsForResource {
    return new ECSListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTaskDefinitionFamilies(input: shapes.EcsListTaskDefinitionFamiliesRequest): ECSListTaskDefinitionFamilies {
    return new ECSListTaskDefinitionFamilies(this, 'ListTaskDefinitionFamilies', this.__resources, input);
  }

  public listTaskDefinitions(input: shapes.EcsListTaskDefinitionsRequest): ECSListTaskDefinitions {
    return new ECSListTaskDefinitions(this, 'ListTaskDefinitions', this.__resources, input);
  }

  public listTasks(input: shapes.EcsListTasksRequest): ECSListTasks {
    return new ECSListTasks(this, 'ListTasks', this.__resources, input);
  }

  public putAccountSetting(input: shapes.EcsPutAccountSettingRequest): ECSPutAccountSetting {
    return new ECSPutAccountSetting(this, 'PutAccountSetting', this.__resources, input);
  }

  public putAccountSettingDefault(input: shapes.EcsPutAccountSettingDefaultRequest): ECSPutAccountSettingDefault {
    return new ECSPutAccountSettingDefault(this, 'PutAccountSettingDefault', this.__resources, input);
  }

  public putAttributes(input: shapes.EcsPutAttributesRequest): ECSPutAttributes {
    return new ECSPutAttributes(this, 'PutAttributes', this.__resources, input);
  }

  public putClusterCapacityProviders(input: shapes.EcsPutClusterCapacityProvidersRequest): ECSPutClusterCapacityProviders {
    return new ECSPutClusterCapacityProviders(this, 'PutClusterCapacityProviders', this.__resources, input);
  }

  public registerContainerInstance(input: shapes.EcsRegisterContainerInstanceRequest): ECSRegisterContainerInstance {
    return new ECSRegisterContainerInstance(this, 'RegisterContainerInstance', this.__resources, input);
  }

  public registerTaskDefinition(input: shapes.EcsRegisterTaskDefinitionRequest): ECSRegisterTaskDefinition {
    return new ECSRegisterTaskDefinition(this, 'RegisterTaskDefinition', this.__resources, input);
  }

  public runTask(input: shapes.EcsRunTaskRequest): ECSRunTask {
    return new ECSRunTask(this, 'RunTask', this.__resources, input);
  }

  public startTask(input: shapes.EcsStartTaskRequest): ECSStartTask {
    return new ECSStartTask(this, 'StartTask', this.__resources, input);
  }

  public stopTask(input: shapes.EcsStopTaskRequest): ECSStopTask {
    return new ECSStopTask(this, 'StopTask', this.__resources, input);
  }

  public submitAttachmentStateChanges(input: shapes.EcsSubmitAttachmentStateChangesRequest): ECSSubmitAttachmentStateChanges {
    return new ECSSubmitAttachmentStateChanges(this, 'SubmitAttachmentStateChanges', this.__resources, input);
  }

  public submitContainerStateChange(input: shapes.EcsSubmitContainerStateChangeRequest): ECSSubmitContainerStateChange {
    return new ECSSubmitContainerStateChange(this, 'SubmitContainerStateChange', this.__resources, input);
  }

  public submitTaskStateChange(input: shapes.EcsSubmitTaskStateChangeRequest): ECSSubmitTaskStateChange {
    return new ECSSubmitTaskStateChange(this, 'SubmitTaskStateChange', this.__resources, input);
  }

  public tagResource(input: shapes.EcsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.EcsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateCapacityProvider(input: shapes.EcsUpdateCapacityProviderRequest): ECSUpdateCapacityProvider {
    return new ECSUpdateCapacityProvider(this, 'UpdateCapacityProvider', this.__resources, input);
  }

  public updateClusterSettings(input: shapes.EcsUpdateClusterSettingsRequest): ECSUpdateClusterSettings {
    return new ECSUpdateClusterSettings(this, 'UpdateClusterSettings', this.__resources, input);
  }

  public updateContainerAgent(input: shapes.EcsUpdateContainerAgentRequest): ECSUpdateContainerAgent {
    return new ECSUpdateContainerAgent(this, 'UpdateContainerAgent', this.__resources, input);
  }

  public updateContainerInstancesState(input: shapes.EcsUpdateContainerInstancesStateRequest): ECSUpdateContainerInstancesState {
    return new ECSUpdateContainerInstancesState(this, 'UpdateContainerInstancesState', this.__resources, input);
  }

  public updateService(input: shapes.EcsUpdateServiceRequest): ECSUpdateService {
    return new ECSUpdateService(this, 'UpdateService', this.__resources, input);
  }

  public updateServicePrimaryTaskSet(input: shapes.EcsUpdateServicePrimaryTaskSetRequest): ECSUpdateServicePrimaryTaskSet {
    return new ECSUpdateServicePrimaryTaskSet(this, 'UpdateServicePrimaryTaskSet', this.__resources, input);
  }

  public updateTaskSet(input: shapes.EcsUpdateTaskSetRequest): ECSUpdateTaskSet {
    return new ECSUpdateTaskSet(this, 'UpdateTaskSet', this.__resources, input);
  }

}

export class ECSCreateCapacityProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateCapacityProviderRequest) {
    super(scope, id);
  }

  public get capacityProvider(): ECSCreateCapacityProviderCapacityProvider {
    return new ECSCreateCapacityProviderCapacityProvider(this, 'CapacityProvider', this.__resources, this.input);
  }

}

export class ECSCreateCapacityProviderCapacityProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateCapacityProviderRequest) {
    super(scope, id);
  }

  public get capacityProviderArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.capacityProviderArn'),
        outputPath: 'capacityProvider.capacityProviderArn',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.capacityProviderArn', props);
    return resource.getResponseField('capacityProvider.capacityProviderArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.name'),
        outputPath: 'capacityProvider.name',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.name', props);
    return resource.getResponseField('capacityProvider.name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.status'),
        outputPath: 'capacityProvider.status',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.status', props);
    return resource.getResponseField('capacityProvider.status') as unknown as string;
  }

  public get autoScalingGroupProvider(): ECSCreateCapacityProviderCapacityProviderAutoScalingGroupProvider {
    return new ECSCreateCapacityProviderCapacityProviderAutoScalingGroupProvider(this, 'AutoScalingGroupProvider', this.__resources, this.input);
  }

  public get updateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.updateStatus'),
        outputPath: 'capacityProvider.updateStatus',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.updateStatus', props);
    return resource.getResponseField('capacityProvider.updateStatus') as unknown as string;
  }

  public get updateStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.updateStatusReason'),
        outputPath: 'capacityProvider.updateStatusReason',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.updateStatusReason', props);
    return resource.getResponseField('capacityProvider.updateStatusReason') as unknown as string;
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.tags'),
        outputPath: 'capacityProvider.tags',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.tags', props);
    return resource.getResponseField('capacityProvider.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSCreateCapacityProviderCapacityProviderAutoScalingGroupProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateCapacityProviderRequest) {
    super(scope, id);
  }

  public get autoScalingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.autoScalingGroupArn'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.autoScalingGroupArn',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.autoScalingGroupArn', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.autoScalingGroupArn') as unknown as string;
  }

  public get managedScaling(): ECSCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling {
    return new ECSCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling(this, 'ManagedScaling', this.__resources, this.input);
  }

  public get managedTerminationProtection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedTerminationProtection'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedTerminationProtection',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedTerminationProtection', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedTerminationProtection') as unknown as string;
  }

}

export class ECSCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateCapacityProviderRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.status'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.status',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.status', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.status') as unknown as string;
  }

  public get targetCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity') as unknown as number;
  }

  public get minimumScalingStepSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize') as unknown as number;
  }

  public get maximumScalingStepSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize') as unknown as number;
  }

  public get instanceWarmupPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod') as unknown as number;
  }

}

export class ECSCreateCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateClusterRequest) {
    super(scope, id);
  }

  public get cluster(): ECSCreateClusterCluster {
    return new ECSCreateClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class ECSCreateClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateClusterRequest) {
    super(scope, id);
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.clusterArn'),
        outputPath: 'cluster.clusterArn',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.clusterArn', props);
    return resource.getResponseField('cluster.clusterArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.clusterName'),
        outputPath: 'cluster.clusterName',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.clusterName', props);
    return resource.getResponseField('cluster.clusterName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.status'),
        outputPath: 'cluster.status',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get registeredContainerInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.registeredContainerInstancesCount'),
        outputPath: 'cluster.registeredContainerInstancesCount',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.registeredContainerInstancesCount', props);
    return resource.getResponseField('cluster.registeredContainerInstancesCount') as unknown as number;
  }

  public get runningTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.runningTasksCount'),
        outputPath: 'cluster.runningTasksCount',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.runningTasksCount', props);
    return resource.getResponseField('cluster.runningTasksCount') as unknown as number;
  }

  public get pendingTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.pendingTasksCount'),
        outputPath: 'cluster.pendingTasksCount',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.pendingTasksCount', props);
    return resource.getResponseField('cluster.pendingTasksCount') as unknown as number;
  }

  public get activeServicesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.activeServicesCount'),
        outputPath: 'cluster.activeServicesCount',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.activeServicesCount', props);
    return resource.getResponseField('cluster.activeServicesCount') as unknown as number;
  }

  public get statistics(): shapes.EcsKeyValuePair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.statistics'),
        outputPath: 'cluster.statistics',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.statistics', props);
    return resource.getResponseField('cluster.statistics') as unknown as shapes.EcsKeyValuePair[];
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.tags'),
        outputPath: 'cluster.tags',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.tags', props);
    return resource.getResponseField('cluster.tags') as unknown as shapes.EcsTag[];
  }

  public get settings(): shapes.EcsClusterSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.settings'),
        outputPath: 'cluster.settings',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.settings', props);
    return resource.getResponseField('cluster.settings') as unknown as shapes.EcsClusterSetting[];
  }

  public get capacityProviders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.capacityProviders'),
        outputPath: 'cluster.capacityProviders',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.capacityProviders', props);
    return resource.getResponseField('cluster.capacityProviders') as unknown as string[];
  }

  public get defaultCapacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.defaultCapacityProviderStrategy'),
        outputPath: 'cluster.defaultCapacityProviderStrategy',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.defaultCapacityProviderStrategy', props);
    return resource.getResponseField('cluster.defaultCapacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get attachments(): shapes.EcsAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.attachments'),
        outputPath: 'cluster.attachments',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.attachments', props);
    return resource.getResponseField('cluster.attachments') as unknown as shapes.EcsAttachment[];
  }

  public get attachmentsStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.attachmentsStatus'),
        outputPath: 'cluster.attachmentsStatus',
        parameters: {
          clusterName: this.input.clusterName,
          tags: this.input.tags,
          settings: this.input.settings,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.attachmentsStatus', props);
    return resource.getResponseField('cluster.attachmentsStatus') as unknown as string;
  }

}

export class ECSCreateService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateServiceRequest) {
    super(scope, id);
  }

  public get service(): ECSCreateServiceService {
    return new ECSCreateServiceService(this, 'Service', this.__resources, this.input);
  }

}

export class ECSCreateServiceService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateServiceRequest) {
    super(scope, id);
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.serviceArn'),
        outputPath: 'service.serviceArn',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.serviceArn', props);
    return resource.getResponseField('service.serviceArn') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.serviceName'),
        outputPath: 'service.serviceName',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.serviceName', props);
    return resource.getResponseField('service.serviceName') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.clusterArn'),
        outputPath: 'service.clusterArn',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.clusterArn', props);
    return resource.getResponseField('service.clusterArn') as unknown as string;
  }

  public get loadBalancers(): shapes.EcsLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.loadBalancers'),
        outputPath: 'service.loadBalancers',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.loadBalancers', props);
    return resource.getResponseField('service.loadBalancers') as unknown as shapes.EcsLoadBalancer[];
  }

  public get serviceRegistries(): shapes.EcsServiceRegistry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.serviceRegistries'),
        outputPath: 'service.serviceRegistries',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.serviceRegistries', props);
    return resource.getResponseField('service.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.status'),
        outputPath: 'service.status',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.status', props);
    return resource.getResponseField('service.status') as unknown as string;
  }

  public get desiredCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.desiredCount'),
        outputPath: 'service.desiredCount',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.desiredCount', props);
    return resource.getResponseField('service.desiredCount') as unknown as number;
  }

  public get runningCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.runningCount'),
        outputPath: 'service.runningCount',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.runningCount', props);
    return resource.getResponseField('service.runningCount') as unknown as number;
  }

  public get pendingCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.pendingCount'),
        outputPath: 'service.pendingCount',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.pendingCount', props);
    return resource.getResponseField('service.pendingCount') as unknown as number;
  }

  public get launchType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.launchType'),
        outputPath: 'service.launchType',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.launchType', props);
    return resource.getResponseField('service.launchType') as unknown as string;
  }

  public get capacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.capacityProviderStrategy'),
        outputPath: 'service.capacityProviderStrategy',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.capacityProviderStrategy', props);
    return resource.getResponseField('service.capacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.platformVersion'),
        outputPath: 'service.platformVersion',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.platformVersion', props);
    return resource.getResponseField('service.platformVersion') as unknown as string;
  }

  public get taskDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.taskDefinition'),
        outputPath: 'service.taskDefinition',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.taskDefinition', props);
    return resource.getResponseField('service.taskDefinition') as unknown as string;
  }

  public get deploymentConfiguration(): ECSCreateServiceServiceDeploymentConfiguration {
    return new ECSCreateServiceServiceDeploymentConfiguration(this, 'DeploymentConfiguration', this.__resources, this.input);
  }

  public get taskSets(): shapes.EcsTaskSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.taskSets'),
        outputPath: 'service.taskSets',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.taskSets', props);
    return resource.getResponseField('service.taskSets') as unknown as shapes.EcsTaskSet[];
  }

  public get deployments(): shapes.EcsDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.deployments'),
        outputPath: 'service.deployments',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.deployments', props);
    return resource.getResponseField('service.deployments') as unknown as shapes.EcsDeployment[];
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.roleArn'),
        outputPath: 'service.roleArn',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.roleArn', props);
    return resource.getResponseField('service.roleArn') as unknown as string;
  }

  public get events(): shapes.EcsServiceEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.events'),
        outputPath: 'service.events',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.events', props);
    return resource.getResponseField('service.events') as unknown as shapes.EcsServiceEvent[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.createdAt'),
        outputPath: 'service.createdAt',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.createdAt', props);
    return resource.getResponseField('service.createdAt') as unknown as string;
  }

  public get placementConstraints(): shapes.EcsPlacementConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.placementConstraints'),
        outputPath: 'service.placementConstraints',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.placementConstraints', props);
    return resource.getResponseField('service.placementConstraints') as unknown as shapes.EcsPlacementConstraint[];
  }

  public get placementStrategy(): shapes.EcsPlacementStrategy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.placementStrategy'),
        outputPath: 'service.placementStrategy',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.placementStrategy', props);
    return resource.getResponseField('service.placementStrategy') as unknown as shapes.EcsPlacementStrategy[];
  }

  public get networkConfiguration(): ECSCreateServiceServiceNetworkConfiguration {
    return new ECSCreateServiceServiceNetworkConfiguration(this, 'NetworkConfiguration', this.__resources, this.input);
  }

  public get healthCheckGracePeriodSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.healthCheckGracePeriodSeconds'),
        outputPath: 'service.healthCheckGracePeriodSeconds',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.healthCheckGracePeriodSeconds', props);
    return resource.getResponseField('service.healthCheckGracePeriodSeconds') as unknown as number;
  }

  public get schedulingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.schedulingStrategy'),
        outputPath: 'service.schedulingStrategy',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.schedulingStrategy', props);
    return resource.getResponseField('service.schedulingStrategy') as unknown as string;
  }

  public get deploymentController(): ECSCreateServiceServiceDeploymentController {
    return new ECSCreateServiceServiceDeploymentController(this, 'DeploymentController', this.__resources, this.input);
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.tags'),
        outputPath: 'service.tags',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.tags', props);
    return resource.getResponseField('service.tags') as unknown as shapes.EcsTag[];
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.createdBy'),
        outputPath: 'service.createdBy',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.createdBy', props);
    return resource.getResponseField('service.createdBy') as unknown as string;
  }

  public get enableEcsManagedTags(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.enableECSManagedTags'),
        outputPath: 'service.enableECSManagedTags',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.enableECSManagedTags', props);
    return resource.getResponseField('service.enableECSManagedTags') as unknown as boolean;
  }

  public get propagateTags(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.propagateTags'),
        outputPath: 'service.propagateTags',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.propagateTags', props);
    return resource.getResponseField('service.propagateTags') as unknown as string;
  }

}

export class ECSCreateServiceServiceDeploymentConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateServiceRequest) {
    super(scope, id);
  }

  public get deploymentCircuitBreaker(): ECSCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker {
    return new ECSCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker(this, 'DeploymentCircuitBreaker', this.__resources, this.input);
  }

  public get maximumPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.deploymentConfiguration.maximumPercent'),
        outputPath: 'service.deploymentConfiguration.maximumPercent',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.deploymentConfiguration.maximumPercent', props);
    return resource.getResponseField('service.deploymentConfiguration.maximumPercent') as unknown as number;
  }

  public get minimumHealthyPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.deploymentConfiguration.minimumHealthyPercent'),
        outputPath: 'service.deploymentConfiguration.minimumHealthyPercent',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.deploymentConfiguration.minimumHealthyPercent', props);
    return resource.getResponseField('service.deploymentConfiguration.minimumHealthyPercent') as unknown as number;
  }

}

export class ECSCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateServiceRequest) {
    super(scope, id);
  }

  public get enable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.deploymentConfiguration.deploymentCircuitBreaker.enable'),
        outputPath: 'service.deploymentConfiguration.deploymentCircuitBreaker.enable',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.deploymentConfiguration.deploymentCircuitBreaker.enable', props);
    return resource.getResponseField('service.deploymentConfiguration.deploymentCircuitBreaker.enable') as unknown as boolean;
  }

  public get rollback(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.deploymentConfiguration.deploymentCircuitBreaker.rollback'),
        outputPath: 'service.deploymentConfiguration.deploymentCircuitBreaker.rollback',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.deploymentConfiguration.deploymentCircuitBreaker.rollback', props);
    return resource.getResponseField('service.deploymentConfiguration.deploymentCircuitBreaker.rollback') as unknown as boolean;
  }

}

export class ECSCreateServiceServiceNetworkConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateServiceRequest) {
    super(scope, id);
  }

  public get awsvpcConfiguration(): ECSCreateServiceServiceNetworkConfigurationAwsvpcConfiguration {
    return new ECSCreateServiceServiceNetworkConfigurationAwsvpcConfiguration(this, 'AwsvpcConfiguration', this.__resources, this.input);
  }

}

export class ECSCreateServiceServiceNetworkConfigurationAwsvpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateServiceRequest) {
    super(scope, id);
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.networkConfiguration.awsvpcConfiguration.subnets'),
        outputPath: 'service.networkConfiguration.awsvpcConfiguration.subnets',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.networkConfiguration.awsvpcConfiguration.subnets', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.subnets') as unknown as string[];
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.networkConfiguration.awsvpcConfiguration.securityGroups'),
        outputPath: 'service.networkConfiguration.awsvpcConfiguration.securityGroups',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.networkConfiguration.awsvpcConfiguration.securityGroups', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.securityGroups') as unknown as string[];
  }

  public get assignPublicIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.networkConfiguration.awsvpcConfiguration.assignPublicIp'),
        outputPath: 'service.networkConfiguration.awsvpcConfiguration.assignPublicIp',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSCreateServiceServiceDeploymentController extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateServiceRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.deploymentController.type'),
        outputPath: 'service.deploymentController.type',
        parameters: {
          cluster: this.input.cluster,
          serviceName: this.input.serviceName,
          taskDefinition: this.input.taskDefinition,
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          desiredCount: this.input.desiredCount,
          clientToken: this.input.clientToken,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          role: this.input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.input.schedulingStrategy,
          deploymentController: {
            type: this.input.deploymentController?.type,
          },
          tags: this.input.tags,
          enableECSManagedTags: this.input.enableECSManagedTags,
          propagateTags: this.input.propagateTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.service.deploymentController.type', props);
    return resource.getResponseField('service.deploymentController.type') as unknown as string;
  }

}

export class ECSCreateTaskSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateTaskSetRequest) {
    super(scope, id);
  }

  public get taskSet(): ECSCreateTaskSetTaskSet {
    return new ECSCreateTaskSetTaskSet(this, 'TaskSet', this.__resources, this.input);
  }

}

export class ECSCreateTaskSetTaskSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateTaskSetRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.id'),
        outputPath: 'taskSet.id',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.id', props);
    return resource.getResponseField('taskSet.id') as unknown as string;
  }

  public get taskSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.taskSetArn'),
        outputPath: 'taskSet.taskSetArn',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.taskSetArn', props);
    return resource.getResponseField('taskSet.taskSetArn') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.serviceArn'),
        outputPath: 'taskSet.serviceArn',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.serviceArn', props);
    return resource.getResponseField('taskSet.serviceArn') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.clusterArn'),
        outputPath: 'taskSet.clusterArn',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.clusterArn', props);
    return resource.getResponseField('taskSet.clusterArn') as unknown as string;
  }

  public get startedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.startedBy'),
        outputPath: 'taskSet.startedBy',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.startedBy', props);
    return resource.getResponseField('taskSet.startedBy') as unknown as string;
  }

  public get externalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.externalId'),
        outputPath: 'taskSet.externalId',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.externalId', props);
    return resource.getResponseField('taskSet.externalId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.status'),
        outputPath: 'taskSet.status',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.status', props);
    return resource.getResponseField('taskSet.status') as unknown as string;
  }

  public get taskDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.taskDefinition'),
        outputPath: 'taskSet.taskDefinition',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.taskDefinition', props);
    return resource.getResponseField('taskSet.taskDefinition') as unknown as string;
  }

  public get computedDesiredCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.computedDesiredCount'),
        outputPath: 'taskSet.computedDesiredCount',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.computedDesiredCount', props);
    return resource.getResponseField('taskSet.computedDesiredCount') as unknown as number;
  }

  public get pendingCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.pendingCount'),
        outputPath: 'taskSet.pendingCount',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.pendingCount', props);
    return resource.getResponseField('taskSet.pendingCount') as unknown as number;
  }

  public get runningCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.runningCount'),
        outputPath: 'taskSet.runningCount',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.runningCount', props);
    return resource.getResponseField('taskSet.runningCount') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.createdAt'),
        outputPath: 'taskSet.createdAt',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.createdAt', props);
    return resource.getResponseField('taskSet.createdAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.updatedAt'),
        outputPath: 'taskSet.updatedAt',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.updatedAt', props);
    return resource.getResponseField('taskSet.updatedAt') as unknown as string;
  }

  public get launchType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.launchType'),
        outputPath: 'taskSet.launchType',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.launchType', props);
    return resource.getResponseField('taskSet.launchType') as unknown as string;
  }

  public get capacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.capacityProviderStrategy'),
        outputPath: 'taskSet.capacityProviderStrategy',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.capacityProviderStrategy', props);
    return resource.getResponseField('taskSet.capacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.platformVersion'),
        outputPath: 'taskSet.platformVersion',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.platformVersion', props);
    return resource.getResponseField('taskSet.platformVersion') as unknown as string;
  }

  public get networkConfiguration(): ECSCreateTaskSetTaskSetNetworkConfiguration {
    return new ECSCreateTaskSetTaskSetNetworkConfiguration(this, 'NetworkConfiguration', this.__resources, this.input);
  }

  public get loadBalancers(): shapes.EcsLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.loadBalancers'),
        outputPath: 'taskSet.loadBalancers',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.loadBalancers', props);
    return resource.getResponseField('taskSet.loadBalancers') as unknown as shapes.EcsLoadBalancer[];
  }

  public get serviceRegistries(): shapes.EcsServiceRegistry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.serviceRegistries'),
        outputPath: 'taskSet.serviceRegistries',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.serviceRegistries', props);
    return resource.getResponseField('taskSet.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get scale(): ECSCreateTaskSetTaskSetScale {
    return new ECSCreateTaskSetTaskSetScale(this, 'Scale', this.__resources, this.input);
  }

  public get stabilityStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.stabilityStatus'),
        outputPath: 'taskSet.stabilityStatus',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.stabilityStatus', props);
    return resource.getResponseField('taskSet.stabilityStatus') as unknown as string;
  }

  public get stabilityStatusAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.stabilityStatusAt'),
        outputPath: 'taskSet.stabilityStatusAt',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.stabilityStatusAt', props);
    return resource.getResponseField('taskSet.stabilityStatusAt') as unknown as string;
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.tags'),
        outputPath: 'taskSet.tags',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.tags', props);
    return resource.getResponseField('taskSet.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSCreateTaskSetTaskSetNetworkConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateTaskSetRequest) {
    super(scope, id);
  }

  public get awsvpcConfiguration(): ECSCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {
    return new ECSCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(this, 'AwsvpcConfiguration', this.__resources, this.input);
  }

}

export class ECSCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateTaskSetRequest) {
    super(scope, id);
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.subnets',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.subnets') as unknown as string[];
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.securityGroups',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.securityGroups') as unknown as string[];
  }

  public get assignPublicIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSCreateTaskSetTaskSetScale extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsCreateTaskSetRequest) {
    super(scope, id);
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.scale.value'),
        outputPath: 'taskSet.scale.value',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.scale.value', props);
    return resource.getResponseField('taskSet.scale.value') as unknown as number;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateTaskSet.taskSet.scale.unit'),
        outputPath: 'taskSet.scale.unit',
        parameters: {
          service: this.input.service,
          cluster: this.input.cluster,
          externalId: this.input.externalId,
          taskDefinition: this.input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.input.loadBalancers,
          serviceRegistries: this.input.serviceRegistries,
          launchType: this.input.launchType,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          platformVersion: this.input.platformVersion,
          scale: {
            value: this.input.scale?.value,
            unit: this.input.scale?.unit,
          },
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTaskSet.taskSet.scale.unit', props);
    return resource.getResponseField('taskSet.scale.unit') as unknown as string;
  }

}

export class ECSDeleteAccountSetting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteAccountSettingRequest) {
    super(scope, id);
  }

  public get setting(): ECSDeleteAccountSettingSetting {
    return new ECSDeleteAccountSettingSetting(this, 'Setting', this.__resources, this.input);
  }

}

export class ECSDeleteAccountSettingSetting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteAccountSettingRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountSetting',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteAccountSetting.setting.name'),
        outputPath: 'setting.name',
        parameters: {
          name: this.input.name,
          principalArn: this.input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountSetting.setting.name', props);
    return resource.getResponseField('setting.name') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountSetting',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteAccountSetting.setting.value'),
        outputPath: 'setting.value',
        parameters: {
          name: this.input.name,
          principalArn: this.input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountSetting.setting.value', props);
    return resource.getResponseField('setting.value') as unknown as string;
  }

  public get principalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountSetting',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteAccountSetting.setting.principalArn'),
        outputPath: 'setting.principalArn',
        parameters: {
          name: this.input.name,
          principalArn: this.input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountSetting.setting.principalArn', props);
    return resource.getResponseField('setting.principalArn') as unknown as string;
  }

}

export class ECSDeleteAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteAttributesRequest) {
    super(scope, id);
  }

  public get attributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAttributes',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteAttributes.attributes'),
        outputPath: 'attributes',
        parameters: {
          cluster: this.input.cluster,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAttributes.attributes', props);
    return resource.getResponseField('attributes') as unknown as shapes.EcsAttribute[];
  }

}

export class ECSDeleteCapacityProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteCapacityProviderRequest) {
    super(scope, id);
  }

  public get capacityProvider(): ECSDeleteCapacityProviderCapacityProvider {
    return new ECSDeleteCapacityProviderCapacityProvider(this, 'CapacityProvider', this.__resources, this.input);
  }

}

export class ECSDeleteCapacityProviderCapacityProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteCapacityProviderRequest) {
    super(scope, id);
  }

  public get capacityProviderArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.capacityProviderArn'),
        outputPath: 'capacityProvider.capacityProviderArn',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.capacityProviderArn', props);
    return resource.getResponseField('capacityProvider.capacityProviderArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.name'),
        outputPath: 'capacityProvider.name',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.name', props);
    return resource.getResponseField('capacityProvider.name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.status'),
        outputPath: 'capacityProvider.status',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.status', props);
    return resource.getResponseField('capacityProvider.status') as unknown as string;
  }

  public get autoScalingGroupProvider(): ECSDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider {
    return new ECSDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider(this, 'AutoScalingGroupProvider', this.__resources, this.input);
  }

  public get updateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.updateStatus'),
        outputPath: 'capacityProvider.updateStatus',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.updateStatus', props);
    return resource.getResponseField('capacityProvider.updateStatus') as unknown as string;
  }

  public get updateStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.updateStatusReason'),
        outputPath: 'capacityProvider.updateStatusReason',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.updateStatusReason', props);
    return resource.getResponseField('capacityProvider.updateStatusReason') as unknown as string;
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.tags'),
        outputPath: 'capacityProvider.tags',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.tags', props);
    return resource.getResponseField('capacityProvider.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteCapacityProviderRequest) {
    super(scope, id);
  }

  public get autoScalingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.autoScalingGroupArn'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.autoScalingGroupArn',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.autoScalingGroupArn', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.autoScalingGroupArn') as unknown as string;
  }

  public get managedScaling(): ECSDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling {
    return new ECSDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling(this, 'ManagedScaling', this.__resources, this.input);
  }

  public get managedTerminationProtection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedTerminationProtection'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedTerminationProtection',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedTerminationProtection', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedTerminationProtection') as unknown as string;
  }

}

export class ECSDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteCapacityProviderRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.status'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.status',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.status', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.status') as unknown as string;
  }

  public get targetCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity') as unknown as number;
  }

  public get minimumScalingStepSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize') as unknown as number;
  }

  public get maximumScalingStepSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize') as unknown as number;
  }

  public get instanceWarmupPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod',
        parameters: {
          capacityProvider: this.input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod') as unknown as number;
  }

}

export class ECSDeleteCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteClusterRequest) {
    super(scope, id);
  }

  public get cluster(): ECSDeleteClusterCluster {
    return new ECSDeleteClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class ECSDeleteClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteClusterRequest) {
    super(scope, id);
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.clusterArn'),
        outputPath: 'cluster.clusterArn',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.clusterArn', props);
    return resource.getResponseField('cluster.clusterArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.clusterName'),
        outputPath: 'cluster.clusterName',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.clusterName', props);
    return resource.getResponseField('cluster.clusterName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.status'),
        outputPath: 'cluster.status',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get registeredContainerInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.registeredContainerInstancesCount'),
        outputPath: 'cluster.registeredContainerInstancesCount',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.registeredContainerInstancesCount', props);
    return resource.getResponseField('cluster.registeredContainerInstancesCount') as unknown as number;
  }

  public get runningTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.runningTasksCount'),
        outputPath: 'cluster.runningTasksCount',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.runningTasksCount', props);
    return resource.getResponseField('cluster.runningTasksCount') as unknown as number;
  }

  public get pendingTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.pendingTasksCount'),
        outputPath: 'cluster.pendingTasksCount',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.pendingTasksCount', props);
    return resource.getResponseField('cluster.pendingTasksCount') as unknown as number;
  }

  public get activeServicesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.activeServicesCount'),
        outputPath: 'cluster.activeServicesCount',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.activeServicesCount', props);
    return resource.getResponseField('cluster.activeServicesCount') as unknown as number;
  }

  public get statistics(): shapes.EcsKeyValuePair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.statistics'),
        outputPath: 'cluster.statistics',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.statistics', props);
    return resource.getResponseField('cluster.statistics') as unknown as shapes.EcsKeyValuePair[];
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.tags'),
        outputPath: 'cluster.tags',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.tags', props);
    return resource.getResponseField('cluster.tags') as unknown as shapes.EcsTag[];
  }

  public get settings(): shapes.EcsClusterSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.settings'),
        outputPath: 'cluster.settings',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.settings', props);
    return resource.getResponseField('cluster.settings') as unknown as shapes.EcsClusterSetting[];
  }

  public get capacityProviders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.capacityProviders'),
        outputPath: 'cluster.capacityProviders',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.capacityProviders', props);
    return resource.getResponseField('cluster.capacityProviders') as unknown as string[];
  }

  public get defaultCapacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.defaultCapacityProviderStrategy'),
        outputPath: 'cluster.defaultCapacityProviderStrategy',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.defaultCapacityProviderStrategy', props);
    return resource.getResponseField('cluster.defaultCapacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get attachments(): shapes.EcsAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.attachments'),
        outputPath: 'cluster.attachments',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.attachments', props);
    return resource.getResponseField('cluster.attachments') as unknown as shapes.EcsAttachment[];
  }

  public get attachmentsStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.attachmentsStatus'),
        outputPath: 'cluster.attachmentsStatus',
        parameters: {
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.attachmentsStatus', props);
    return resource.getResponseField('cluster.attachmentsStatus') as unknown as string;
  }

}

export class ECSDeleteService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteServiceRequest) {
    super(scope, id);
  }

  public get service(): ECSDeleteServiceService {
    return new ECSDeleteServiceService(this, 'Service', this.__resources, this.input);
  }

}

export class ECSDeleteServiceService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteServiceRequest) {
    super(scope, id);
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.serviceArn'),
        outputPath: 'service.serviceArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.serviceArn', props);
    return resource.getResponseField('service.serviceArn') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.serviceName'),
        outputPath: 'service.serviceName',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.serviceName', props);
    return resource.getResponseField('service.serviceName') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.clusterArn'),
        outputPath: 'service.clusterArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.clusterArn', props);
    return resource.getResponseField('service.clusterArn') as unknown as string;
  }

  public get loadBalancers(): shapes.EcsLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.loadBalancers'),
        outputPath: 'service.loadBalancers',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.loadBalancers', props);
    return resource.getResponseField('service.loadBalancers') as unknown as shapes.EcsLoadBalancer[];
  }

  public get serviceRegistries(): shapes.EcsServiceRegistry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.serviceRegistries'),
        outputPath: 'service.serviceRegistries',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.serviceRegistries', props);
    return resource.getResponseField('service.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.status'),
        outputPath: 'service.status',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.status', props);
    return resource.getResponseField('service.status') as unknown as string;
  }

  public get desiredCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.desiredCount'),
        outputPath: 'service.desiredCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.desiredCount', props);
    return resource.getResponseField('service.desiredCount') as unknown as number;
  }

  public get runningCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.runningCount'),
        outputPath: 'service.runningCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.runningCount', props);
    return resource.getResponseField('service.runningCount') as unknown as number;
  }

  public get pendingCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.pendingCount'),
        outputPath: 'service.pendingCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.pendingCount', props);
    return resource.getResponseField('service.pendingCount') as unknown as number;
  }

  public get launchType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.launchType'),
        outputPath: 'service.launchType',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.launchType', props);
    return resource.getResponseField('service.launchType') as unknown as string;
  }

  public get capacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.capacityProviderStrategy'),
        outputPath: 'service.capacityProviderStrategy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.capacityProviderStrategy', props);
    return resource.getResponseField('service.capacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.platformVersion'),
        outputPath: 'service.platformVersion',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.platformVersion', props);
    return resource.getResponseField('service.platformVersion') as unknown as string;
  }

  public get taskDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.taskDefinition'),
        outputPath: 'service.taskDefinition',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.taskDefinition', props);
    return resource.getResponseField('service.taskDefinition') as unknown as string;
  }

  public get deploymentConfiguration(): ECSDeleteServiceServiceDeploymentConfiguration {
    return new ECSDeleteServiceServiceDeploymentConfiguration(this, 'DeploymentConfiguration', this.__resources, this.input);
  }

  public get taskSets(): shapes.EcsTaskSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.taskSets'),
        outputPath: 'service.taskSets',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.taskSets', props);
    return resource.getResponseField('service.taskSets') as unknown as shapes.EcsTaskSet[];
  }

  public get deployments(): shapes.EcsDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.deployments'),
        outputPath: 'service.deployments',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.deployments', props);
    return resource.getResponseField('service.deployments') as unknown as shapes.EcsDeployment[];
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.roleArn'),
        outputPath: 'service.roleArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.roleArn', props);
    return resource.getResponseField('service.roleArn') as unknown as string;
  }

  public get events(): shapes.EcsServiceEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.events'),
        outputPath: 'service.events',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.events', props);
    return resource.getResponseField('service.events') as unknown as shapes.EcsServiceEvent[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.createdAt'),
        outputPath: 'service.createdAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.createdAt', props);
    return resource.getResponseField('service.createdAt') as unknown as string;
  }

  public get placementConstraints(): shapes.EcsPlacementConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.placementConstraints'),
        outputPath: 'service.placementConstraints',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.placementConstraints', props);
    return resource.getResponseField('service.placementConstraints') as unknown as shapes.EcsPlacementConstraint[];
  }

  public get placementStrategy(): shapes.EcsPlacementStrategy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.placementStrategy'),
        outputPath: 'service.placementStrategy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.placementStrategy', props);
    return resource.getResponseField('service.placementStrategy') as unknown as shapes.EcsPlacementStrategy[];
  }

  public get networkConfiguration(): ECSDeleteServiceServiceNetworkConfiguration {
    return new ECSDeleteServiceServiceNetworkConfiguration(this, 'NetworkConfiguration', this.__resources, this.input);
  }

  public get healthCheckGracePeriodSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.healthCheckGracePeriodSeconds'),
        outputPath: 'service.healthCheckGracePeriodSeconds',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.healthCheckGracePeriodSeconds', props);
    return resource.getResponseField('service.healthCheckGracePeriodSeconds') as unknown as number;
  }

  public get schedulingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.schedulingStrategy'),
        outputPath: 'service.schedulingStrategy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.schedulingStrategy', props);
    return resource.getResponseField('service.schedulingStrategy') as unknown as string;
  }

  public get deploymentController(): ECSDeleteServiceServiceDeploymentController {
    return new ECSDeleteServiceServiceDeploymentController(this, 'DeploymentController', this.__resources, this.input);
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.tags'),
        outputPath: 'service.tags',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.tags', props);
    return resource.getResponseField('service.tags') as unknown as shapes.EcsTag[];
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.createdBy'),
        outputPath: 'service.createdBy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.createdBy', props);
    return resource.getResponseField('service.createdBy') as unknown as string;
  }

  public get enableEcsManagedTags(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.enableECSManagedTags'),
        outputPath: 'service.enableECSManagedTags',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.enableECSManagedTags', props);
    return resource.getResponseField('service.enableECSManagedTags') as unknown as boolean;
  }

  public get propagateTags(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.propagateTags'),
        outputPath: 'service.propagateTags',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.propagateTags', props);
    return resource.getResponseField('service.propagateTags') as unknown as string;
  }

}

export class ECSDeleteServiceServiceDeploymentConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteServiceRequest) {
    super(scope, id);
  }

  public get deploymentCircuitBreaker(): ECSDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker {
    return new ECSDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker(this, 'DeploymentCircuitBreaker', this.__resources, this.input);
  }

  public get maximumPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.deploymentConfiguration.maximumPercent'),
        outputPath: 'service.deploymentConfiguration.maximumPercent',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.deploymentConfiguration.maximumPercent', props);
    return resource.getResponseField('service.deploymentConfiguration.maximumPercent') as unknown as number;
  }

  public get minimumHealthyPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.deploymentConfiguration.minimumHealthyPercent'),
        outputPath: 'service.deploymentConfiguration.minimumHealthyPercent',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.deploymentConfiguration.minimumHealthyPercent', props);
    return resource.getResponseField('service.deploymentConfiguration.minimumHealthyPercent') as unknown as number;
  }

}

export class ECSDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteServiceRequest) {
    super(scope, id);
  }

  public get enable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.deploymentConfiguration.deploymentCircuitBreaker.enable'),
        outputPath: 'service.deploymentConfiguration.deploymentCircuitBreaker.enable',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.deploymentConfiguration.deploymentCircuitBreaker.enable', props);
    return resource.getResponseField('service.deploymentConfiguration.deploymentCircuitBreaker.enable') as unknown as boolean;
  }

  public get rollback(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.deploymentConfiguration.deploymentCircuitBreaker.rollback'),
        outputPath: 'service.deploymentConfiguration.deploymentCircuitBreaker.rollback',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.deploymentConfiguration.deploymentCircuitBreaker.rollback', props);
    return resource.getResponseField('service.deploymentConfiguration.deploymentCircuitBreaker.rollback') as unknown as boolean;
  }

}

export class ECSDeleteServiceServiceNetworkConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteServiceRequest) {
    super(scope, id);
  }

  public get awsvpcConfiguration(): ECSDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration {
    return new ECSDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration(this, 'AwsvpcConfiguration', this.__resources, this.input);
  }

}

export class ECSDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteServiceRequest) {
    super(scope, id);
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.networkConfiguration.awsvpcConfiguration.subnets'),
        outputPath: 'service.networkConfiguration.awsvpcConfiguration.subnets',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.networkConfiguration.awsvpcConfiguration.subnets', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.subnets') as unknown as string[];
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.networkConfiguration.awsvpcConfiguration.securityGroups'),
        outputPath: 'service.networkConfiguration.awsvpcConfiguration.securityGroups',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.networkConfiguration.awsvpcConfiguration.securityGroups', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.securityGroups') as unknown as string[];
  }

  public get assignPublicIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.networkConfiguration.awsvpcConfiguration.assignPublicIp'),
        outputPath: 'service.networkConfiguration.awsvpcConfiguration.assignPublicIp',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSDeleteServiceServiceDeploymentController extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteServiceRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.deploymentController.type'),
        outputPath: 'service.deploymentController.type',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteService.service.deploymentController.type', props);
    return resource.getResponseField('service.deploymentController.type') as unknown as string;
  }

}

export class ECSDeleteTaskSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteTaskSetRequest) {
    super(scope, id);
  }

  public get taskSet(): ECSDeleteTaskSetTaskSet {
    return new ECSDeleteTaskSetTaskSet(this, 'TaskSet', this.__resources, this.input);
  }

}

export class ECSDeleteTaskSetTaskSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteTaskSetRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.id'),
        outputPath: 'taskSet.id',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.id', props);
    return resource.getResponseField('taskSet.id') as unknown as string;
  }

  public get taskSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.taskSetArn'),
        outputPath: 'taskSet.taskSetArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.taskSetArn', props);
    return resource.getResponseField('taskSet.taskSetArn') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.serviceArn'),
        outputPath: 'taskSet.serviceArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.serviceArn', props);
    return resource.getResponseField('taskSet.serviceArn') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.clusterArn'),
        outputPath: 'taskSet.clusterArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.clusterArn', props);
    return resource.getResponseField('taskSet.clusterArn') as unknown as string;
  }

  public get startedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.startedBy'),
        outputPath: 'taskSet.startedBy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.startedBy', props);
    return resource.getResponseField('taskSet.startedBy') as unknown as string;
  }

  public get externalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.externalId'),
        outputPath: 'taskSet.externalId',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.externalId', props);
    return resource.getResponseField('taskSet.externalId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.status'),
        outputPath: 'taskSet.status',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.status', props);
    return resource.getResponseField('taskSet.status') as unknown as string;
  }

  public get taskDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.taskDefinition'),
        outputPath: 'taskSet.taskDefinition',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.taskDefinition', props);
    return resource.getResponseField('taskSet.taskDefinition') as unknown as string;
  }

  public get computedDesiredCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.computedDesiredCount'),
        outputPath: 'taskSet.computedDesiredCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.computedDesiredCount', props);
    return resource.getResponseField('taskSet.computedDesiredCount') as unknown as number;
  }

  public get pendingCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.pendingCount'),
        outputPath: 'taskSet.pendingCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.pendingCount', props);
    return resource.getResponseField('taskSet.pendingCount') as unknown as number;
  }

  public get runningCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.runningCount'),
        outputPath: 'taskSet.runningCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.runningCount', props);
    return resource.getResponseField('taskSet.runningCount') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.createdAt'),
        outputPath: 'taskSet.createdAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.createdAt', props);
    return resource.getResponseField('taskSet.createdAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.updatedAt'),
        outputPath: 'taskSet.updatedAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.updatedAt', props);
    return resource.getResponseField('taskSet.updatedAt') as unknown as string;
  }

  public get launchType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.launchType'),
        outputPath: 'taskSet.launchType',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.launchType', props);
    return resource.getResponseField('taskSet.launchType') as unknown as string;
  }

  public get capacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.capacityProviderStrategy'),
        outputPath: 'taskSet.capacityProviderStrategy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.capacityProviderStrategy', props);
    return resource.getResponseField('taskSet.capacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.platformVersion'),
        outputPath: 'taskSet.platformVersion',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.platformVersion', props);
    return resource.getResponseField('taskSet.platformVersion') as unknown as string;
  }

  public get networkConfiguration(): ECSDeleteTaskSetTaskSetNetworkConfiguration {
    return new ECSDeleteTaskSetTaskSetNetworkConfiguration(this, 'NetworkConfiguration', this.__resources, this.input);
  }

  public get loadBalancers(): shapes.EcsLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.loadBalancers'),
        outputPath: 'taskSet.loadBalancers',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.loadBalancers', props);
    return resource.getResponseField('taskSet.loadBalancers') as unknown as shapes.EcsLoadBalancer[];
  }

  public get serviceRegistries(): shapes.EcsServiceRegistry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.serviceRegistries'),
        outputPath: 'taskSet.serviceRegistries',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.serviceRegistries', props);
    return resource.getResponseField('taskSet.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get scale(): ECSDeleteTaskSetTaskSetScale {
    return new ECSDeleteTaskSetTaskSetScale(this, 'Scale', this.__resources, this.input);
  }

  public get stabilityStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.stabilityStatus'),
        outputPath: 'taskSet.stabilityStatus',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.stabilityStatus', props);
    return resource.getResponseField('taskSet.stabilityStatus') as unknown as string;
  }

  public get stabilityStatusAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.stabilityStatusAt'),
        outputPath: 'taskSet.stabilityStatusAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.stabilityStatusAt', props);
    return resource.getResponseField('taskSet.stabilityStatusAt') as unknown as string;
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.tags'),
        outputPath: 'taskSet.tags',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.tags', props);
    return resource.getResponseField('taskSet.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSDeleteTaskSetTaskSetNetworkConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteTaskSetRequest) {
    super(scope, id);
  }

  public get awsvpcConfiguration(): ECSDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {
    return new ECSDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(this, 'AwsvpcConfiguration', this.__resources, this.input);
  }

}

export class ECSDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteTaskSetRequest) {
    super(scope, id);
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.subnets',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.subnets') as unknown as string[];
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.securityGroups',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.securityGroups') as unknown as string[];
  }

  public get assignPublicIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSDeleteTaskSetTaskSetScale extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeleteTaskSetRequest) {
    super(scope, id);
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.scale.value'),
        outputPath: 'taskSet.scale.value',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.scale.value', props);
    return resource.getResponseField('taskSet.scale.value') as unknown as number;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteTaskSet.taskSet.scale.unit'),
        outputPath: 'taskSet.scale.unit',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTaskSet.taskSet.scale.unit', props);
    return resource.getResponseField('taskSet.scale.unit') as unknown as string;
  }

}

export class ECSDeregisterContainerInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeregisterContainerInstanceRequest) {
    super(scope, id);
  }

  public get containerInstance(): ECSDeregisterContainerInstanceContainerInstance {
    return new ECSDeregisterContainerInstanceContainerInstance(this, 'ContainerInstance', this.__resources, this.input);
  }

}

export class ECSDeregisterContainerInstanceContainerInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeregisterContainerInstanceRequest) {
    super(scope, id);
  }

  public get containerInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.containerInstanceArn'),
        outputPath: 'containerInstance.containerInstanceArn',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.containerInstanceArn', props);
    return resource.getResponseField('containerInstance.containerInstanceArn') as unknown as string;
  }

  public get ec2InstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.ec2InstanceId'),
        outputPath: 'containerInstance.ec2InstanceId',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.ec2InstanceId', props);
    return resource.getResponseField('containerInstance.ec2InstanceId') as unknown as string;
  }

  public get capacityProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.capacityProviderName'),
        outputPath: 'containerInstance.capacityProviderName',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.capacityProviderName', props);
    return resource.getResponseField('containerInstance.capacityProviderName') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.version'),
        outputPath: 'containerInstance.version',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.version', props);
    return resource.getResponseField('containerInstance.version') as unknown as number;
  }

  public get versionInfo(): ECSDeregisterContainerInstanceContainerInstanceVersionInfo {
    return new ECSDeregisterContainerInstanceContainerInstanceVersionInfo(this, 'VersionInfo', this.__resources, this.input);
  }

  public get remainingResources(): shapes.EcsResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.remainingResources'),
        outputPath: 'containerInstance.remainingResources',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.remainingResources', props);
    return resource.getResponseField('containerInstance.remainingResources') as unknown as shapes.EcsResource[];
  }

  public get registeredResources(): shapes.EcsResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.registeredResources'),
        outputPath: 'containerInstance.registeredResources',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.registeredResources', props);
    return resource.getResponseField('containerInstance.registeredResources') as unknown as shapes.EcsResource[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.status'),
        outputPath: 'containerInstance.status',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.status', props);
    return resource.getResponseField('containerInstance.status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.statusReason'),
        outputPath: 'containerInstance.statusReason',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.statusReason', props);
    return resource.getResponseField('containerInstance.statusReason') as unknown as string;
  }

  public get agentConnected(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.agentConnected'),
        outputPath: 'containerInstance.agentConnected',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.agentConnected', props);
    return resource.getResponseField('containerInstance.agentConnected') as unknown as boolean;
  }

  public get runningTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.runningTasksCount'),
        outputPath: 'containerInstance.runningTasksCount',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.runningTasksCount', props);
    return resource.getResponseField('containerInstance.runningTasksCount') as unknown as number;
  }

  public get pendingTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.pendingTasksCount'),
        outputPath: 'containerInstance.pendingTasksCount',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.pendingTasksCount', props);
    return resource.getResponseField('containerInstance.pendingTasksCount') as unknown as number;
  }

  public get agentUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.agentUpdateStatus'),
        outputPath: 'containerInstance.agentUpdateStatus',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.agentUpdateStatus', props);
    return resource.getResponseField('containerInstance.agentUpdateStatus') as unknown as string;
  }

  public get attributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.attributes'),
        outputPath: 'containerInstance.attributes',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.attributes', props);
    return resource.getResponseField('containerInstance.attributes') as unknown as shapes.EcsAttribute[];
  }

  public get registeredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.registeredAt'),
        outputPath: 'containerInstance.registeredAt',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.registeredAt', props);
    return resource.getResponseField('containerInstance.registeredAt') as unknown as string;
  }

  public get attachments(): shapes.EcsAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.attachments'),
        outputPath: 'containerInstance.attachments',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.attachments', props);
    return resource.getResponseField('containerInstance.attachments') as unknown as shapes.EcsAttachment[];
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.tags'),
        outputPath: 'containerInstance.tags',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.tags', props);
    return resource.getResponseField('containerInstance.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSDeregisterContainerInstanceContainerInstanceVersionInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeregisterContainerInstanceRequest) {
    super(scope, id);
  }

  public get agentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.versionInfo.agentVersion'),
        outputPath: 'containerInstance.versionInfo.agentVersion',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.versionInfo.agentVersion', props);
    return resource.getResponseField('containerInstance.versionInfo.agentVersion') as unknown as string;
  }

  public get agentHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.versionInfo.agentHash'),
        outputPath: 'containerInstance.versionInfo.agentHash',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.versionInfo.agentHash', props);
    return resource.getResponseField('containerInstance.versionInfo.agentHash') as unknown as string;
  }

  public get dockerVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterContainerInstance.containerInstance.versionInfo.dockerVersion'),
        outputPath: 'containerInstance.versionInfo.dockerVersion',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterContainerInstance.containerInstance.versionInfo.dockerVersion', props);
    return resource.getResponseField('containerInstance.versionInfo.dockerVersion') as unknown as string;
  }

}

export class ECSDeregisterTaskDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeregisterTaskDefinitionRequest) {
    super(scope, id);
  }

  public get taskDefinition(): ECSDeregisterTaskDefinitionTaskDefinition {
    return new ECSDeregisterTaskDefinitionTaskDefinition(this, 'TaskDefinition', this.__resources, this.input);
  }

}

export class ECSDeregisterTaskDefinitionTaskDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeregisterTaskDefinitionRequest) {
    super(scope, id);
  }

  public get taskDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.taskDefinitionArn'),
        outputPath: 'taskDefinition.taskDefinitionArn',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.taskDefinitionArn', props);
    return resource.getResponseField('taskDefinition.taskDefinitionArn') as unknown as string;
  }

  public get containerDefinitions(): shapes.EcsContainerDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.containerDefinitions'),
        outputPath: 'taskDefinition.containerDefinitions',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.containerDefinitions', props);
    return resource.getResponseField('taskDefinition.containerDefinitions') as unknown as shapes.EcsContainerDefinition[];
  }

  public get family(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.family'),
        outputPath: 'taskDefinition.family',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.family', props);
    return resource.getResponseField('taskDefinition.family') as unknown as string;
  }

  public get taskRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.taskRoleArn'),
        outputPath: 'taskDefinition.taskRoleArn',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.taskRoleArn', props);
    return resource.getResponseField('taskDefinition.taskRoleArn') as unknown as string;
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.executionRoleArn'),
        outputPath: 'taskDefinition.executionRoleArn',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.executionRoleArn', props);
    return resource.getResponseField('taskDefinition.executionRoleArn') as unknown as string;
  }

  public get networkMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.networkMode'),
        outputPath: 'taskDefinition.networkMode',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.networkMode', props);
    return resource.getResponseField('taskDefinition.networkMode') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.revision'),
        outputPath: 'taskDefinition.revision',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.revision', props);
    return resource.getResponseField('taskDefinition.revision') as unknown as number;
  }

  public get volumes(): shapes.EcsVolume[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.volumes'),
        outputPath: 'taskDefinition.volumes',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.volumes', props);
    return resource.getResponseField('taskDefinition.volumes') as unknown as shapes.EcsVolume[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.status'),
        outputPath: 'taskDefinition.status',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.status', props);
    return resource.getResponseField('taskDefinition.status') as unknown as string;
  }

  public get requiresAttributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.requiresAttributes'),
        outputPath: 'taskDefinition.requiresAttributes',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.requiresAttributes', props);
    return resource.getResponseField('taskDefinition.requiresAttributes') as unknown as shapes.EcsAttribute[];
  }

  public get placementConstraints(): shapes.EcsTaskDefinitionPlacementConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.placementConstraints'),
        outputPath: 'taskDefinition.placementConstraints',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.placementConstraints', props);
    return resource.getResponseField('taskDefinition.placementConstraints') as unknown as shapes.EcsTaskDefinitionPlacementConstraint[];
  }

  public get compatibilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.compatibilities'),
        outputPath: 'taskDefinition.compatibilities',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.compatibilities', props);
    return resource.getResponseField('taskDefinition.compatibilities') as unknown as string[];
  }

  public get requiresCompatibilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.requiresCompatibilities'),
        outputPath: 'taskDefinition.requiresCompatibilities',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.requiresCompatibilities', props);
    return resource.getResponseField('taskDefinition.requiresCompatibilities') as unknown as string[];
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.cpu'),
        outputPath: 'taskDefinition.cpu',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.cpu', props);
    return resource.getResponseField('taskDefinition.cpu') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.memory'),
        outputPath: 'taskDefinition.memory',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.memory', props);
    return resource.getResponseField('taskDefinition.memory') as unknown as string;
  }

  public get inferenceAccelerators(): shapes.EcsInferenceAccelerator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.inferenceAccelerators'),
        outputPath: 'taskDefinition.inferenceAccelerators',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.inferenceAccelerators', props);
    return resource.getResponseField('taskDefinition.inferenceAccelerators') as unknown as shapes.EcsInferenceAccelerator[];
  }

  public get pidMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.pidMode'),
        outputPath: 'taskDefinition.pidMode',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.pidMode', props);
    return resource.getResponseField('taskDefinition.pidMode') as unknown as string;
  }

  public get ipcMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.ipcMode'),
        outputPath: 'taskDefinition.ipcMode',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.ipcMode', props);
    return resource.getResponseField('taskDefinition.ipcMode') as unknown as string;
  }

  public get proxyConfiguration(): ECSDeregisterTaskDefinitionTaskDefinitionProxyConfiguration {
    return new ECSDeregisterTaskDefinitionTaskDefinitionProxyConfiguration(this, 'ProxyConfiguration', this.__resources, this.input);
  }

}

export class ECSDeregisterTaskDefinitionTaskDefinitionProxyConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDeregisterTaskDefinitionRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.proxyConfiguration.type'),
        outputPath: 'taskDefinition.proxyConfiguration.type',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.proxyConfiguration.type', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.type') as unknown as string;
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.proxyConfiguration.containerName'),
        outputPath: 'taskDefinition.proxyConfiguration.containerName',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.proxyConfiguration.containerName', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.containerName') as unknown as string;
  }

  public get properties(): shapes.EcsKeyValuePair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.proxyConfiguration.properties'),
        outputPath: 'taskDefinition.proxyConfiguration.properties',
        parameters: {
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskDefinition.taskDefinition.proxyConfiguration.properties', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.properties') as unknown as shapes.EcsKeyValuePair[];
  }

}

export class ECSDescribeCapacityProviders extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDescribeCapacityProvidersRequest) {
    super(scope, id);
  }

  public get capacityProviders(): shapes.EcsCapacityProvider[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeCapacityProviders.capacityProviders'),
        outputPath: 'capacityProviders',
        parameters: {
          capacityProviders: this.input.capacityProviders,
          include: this.input.include,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCapacityProviders.capacityProviders', props);
    return resource.getResponseField('capacityProviders') as unknown as shapes.EcsCapacityProvider[];
  }

  public get failures(): shapes.EcsFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeCapacityProviders.failures'),
        outputPath: 'failures',
        parameters: {
          capacityProviders: this.input.capacityProviders,
          include: this.input.include,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCapacityProviders.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeCapacityProviders.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          capacityProviders: this.input.capacityProviders,
          include: this.input.include,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCapacityProviders.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSDescribeClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDescribeClustersRequest) {
    super(scope, id);
  }

  public get clusters(): shapes.EcsCluster[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusters',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeClusters.clusters'),
        outputPath: 'clusters',
        parameters: {
          clusters: this.input.clusters,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusters.clusters', props);
    return resource.getResponseField('clusters') as unknown as shapes.EcsCluster[];
  }

  public get failures(): shapes.EcsFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusters',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeClusters.failures'),
        outputPath: 'failures',
        parameters: {
          clusters: this.input.clusters,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusters.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSDescribeContainerInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDescribeContainerInstancesRequest) {
    super(scope, id);
  }

  public get containerInstances(): shapes.EcsContainerInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContainerInstances',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeContainerInstances.containerInstances'),
        outputPath: 'containerInstances',
        parameters: {
          cluster: this.input.cluster,
          containerInstances: this.input.containerInstances,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContainerInstances.containerInstances', props);
    return resource.getResponseField('containerInstances') as unknown as shapes.EcsContainerInstance[];
  }

  public get failures(): shapes.EcsFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContainerInstances',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeContainerInstances.failures'),
        outputPath: 'failures',
        parameters: {
          cluster: this.input.cluster,
          containerInstances: this.input.containerInstances,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContainerInstances.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSDescribeServices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDescribeServicesRequest) {
    super(scope, id);
  }

  public get services(): shapes.EcsService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServices',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeServices.services'),
        outputPath: 'services',
        parameters: {
          cluster: this.input.cluster,
          services: this.input.services,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServices.services', props);
    return resource.getResponseField('services') as unknown as shapes.EcsService[];
  }

  public get failures(): shapes.EcsFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServices',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeServices.failures'),
        outputPath: 'failures',
        parameters: {
          cluster: this.input.cluster,
          services: this.input.services,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServices.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSDescribeTaskDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDescribeTaskDefinitionRequest) {
    super(scope, id);
  }

  public get taskDefinition(): ECSDescribeTaskDefinitionTaskDefinition {
    return new ECSDescribeTaskDefinitionTaskDefinition(this, 'TaskDefinition', this.__resources, this.input);
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSDescribeTaskDefinitionTaskDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDescribeTaskDefinitionRequest) {
    super(scope, id);
  }

  public get taskDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.taskDefinitionArn'),
        outputPath: 'taskDefinition.taskDefinitionArn',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.taskDefinitionArn', props);
    return resource.getResponseField('taskDefinition.taskDefinitionArn') as unknown as string;
  }

  public get containerDefinitions(): shapes.EcsContainerDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.containerDefinitions'),
        outputPath: 'taskDefinition.containerDefinitions',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.containerDefinitions', props);
    return resource.getResponseField('taskDefinition.containerDefinitions') as unknown as shapes.EcsContainerDefinition[];
  }

  public get family(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.family'),
        outputPath: 'taskDefinition.family',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.family', props);
    return resource.getResponseField('taskDefinition.family') as unknown as string;
  }

  public get taskRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.taskRoleArn'),
        outputPath: 'taskDefinition.taskRoleArn',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.taskRoleArn', props);
    return resource.getResponseField('taskDefinition.taskRoleArn') as unknown as string;
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.executionRoleArn'),
        outputPath: 'taskDefinition.executionRoleArn',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.executionRoleArn', props);
    return resource.getResponseField('taskDefinition.executionRoleArn') as unknown as string;
  }

  public get networkMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.networkMode'),
        outputPath: 'taskDefinition.networkMode',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.networkMode', props);
    return resource.getResponseField('taskDefinition.networkMode') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.revision'),
        outputPath: 'taskDefinition.revision',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.revision', props);
    return resource.getResponseField('taskDefinition.revision') as unknown as number;
  }

  public get volumes(): shapes.EcsVolume[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.volumes'),
        outputPath: 'taskDefinition.volumes',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.volumes', props);
    return resource.getResponseField('taskDefinition.volumes') as unknown as shapes.EcsVolume[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.status'),
        outputPath: 'taskDefinition.status',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.status', props);
    return resource.getResponseField('taskDefinition.status') as unknown as string;
  }

  public get requiresAttributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.requiresAttributes'),
        outputPath: 'taskDefinition.requiresAttributes',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.requiresAttributes', props);
    return resource.getResponseField('taskDefinition.requiresAttributes') as unknown as shapes.EcsAttribute[];
  }

  public get placementConstraints(): shapes.EcsTaskDefinitionPlacementConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.placementConstraints'),
        outputPath: 'taskDefinition.placementConstraints',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.placementConstraints', props);
    return resource.getResponseField('taskDefinition.placementConstraints') as unknown as shapes.EcsTaskDefinitionPlacementConstraint[];
  }

  public get compatibilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.compatibilities'),
        outputPath: 'taskDefinition.compatibilities',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.compatibilities', props);
    return resource.getResponseField('taskDefinition.compatibilities') as unknown as string[];
  }

  public get requiresCompatibilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.requiresCompatibilities'),
        outputPath: 'taskDefinition.requiresCompatibilities',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.requiresCompatibilities', props);
    return resource.getResponseField('taskDefinition.requiresCompatibilities') as unknown as string[];
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.cpu'),
        outputPath: 'taskDefinition.cpu',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.cpu', props);
    return resource.getResponseField('taskDefinition.cpu') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.memory'),
        outputPath: 'taskDefinition.memory',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.memory', props);
    return resource.getResponseField('taskDefinition.memory') as unknown as string;
  }

  public get inferenceAccelerators(): shapes.EcsInferenceAccelerator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.inferenceAccelerators'),
        outputPath: 'taskDefinition.inferenceAccelerators',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.inferenceAccelerators', props);
    return resource.getResponseField('taskDefinition.inferenceAccelerators') as unknown as shapes.EcsInferenceAccelerator[];
  }

  public get pidMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.pidMode'),
        outputPath: 'taskDefinition.pidMode',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.pidMode', props);
    return resource.getResponseField('taskDefinition.pidMode') as unknown as string;
  }

  public get ipcMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.ipcMode'),
        outputPath: 'taskDefinition.ipcMode',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.ipcMode', props);
    return resource.getResponseField('taskDefinition.ipcMode') as unknown as string;
  }

  public get proxyConfiguration(): ECSDescribeTaskDefinitionTaskDefinitionProxyConfiguration {
    return new ECSDescribeTaskDefinitionTaskDefinitionProxyConfiguration(this, 'ProxyConfiguration', this.__resources, this.input);
  }

}

export class ECSDescribeTaskDefinitionTaskDefinitionProxyConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDescribeTaskDefinitionRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.proxyConfiguration.type'),
        outputPath: 'taskDefinition.proxyConfiguration.type',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.proxyConfiguration.type', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.type') as unknown as string;
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.proxyConfiguration.containerName'),
        outputPath: 'taskDefinition.proxyConfiguration.containerName',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.proxyConfiguration.containerName', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.containerName') as unknown as string;
  }

  public get properties(): shapes.EcsKeyValuePair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.proxyConfiguration.properties'),
        outputPath: 'taskDefinition.proxyConfiguration.properties',
        parameters: {
          taskDefinition: this.input.taskDefinition,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskDefinition.taskDefinition.proxyConfiguration.properties', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.properties') as unknown as shapes.EcsKeyValuePair[];
  }

}

export class ECSDescribeTaskSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDescribeTaskSetsRequest) {
    super(scope, id);
  }

  public get taskSets(): shapes.EcsTaskSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskSets',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskSets.taskSets'),
        outputPath: 'taskSets',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSets: this.input.taskSets,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskSets.taskSets', props);
    return resource.getResponseField('taskSets') as unknown as shapes.EcsTaskSet[];
  }

  public get failures(): shapes.EcsFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskSets',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskSets.failures'),
        outputPath: 'failures',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSets: this.input.taskSets,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskSets.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSDescribeTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDescribeTasksRequest) {
    super(scope, id);
  }

  public get tasks(): shapes.EcsTask[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTasks',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTasks.tasks'),
        outputPath: 'tasks',
        parameters: {
          cluster: this.input.cluster,
          tasks: this.input.tasks,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTasks.tasks', props);
    return resource.getResponseField('tasks') as unknown as shapes.EcsTask[];
  }

  public get failures(): shapes.EcsFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTasks',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTasks.failures'),
        outputPath: 'failures',
        parameters: {
          cluster: this.input.cluster,
          tasks: this.input.tasks,
          include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTasks.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSDiscoverPollEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsDiscoverPollEndpointRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverPollEndpoint',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DiscoverPollEndpoint.endpoint'),
        outputPath: 'endpoint',
        parameters: {
          containerInstance: this.input.containerInstance,
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverPollEndpoint.endpoint', props);
    return resource.getResponseField('endpoint') as unknown as string;
  }

  public get telemetryEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverPollEndpoint',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DiscoverPollEndpoint.telemetryEndpoint'),
        outputPath: 'telemetryEndpoint',
        parameters: {
          containerInstance: this.input.containerInstance,
          cluster: this.input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverPollEndpoint.telemetryEndpoint', props);
    return resource.getResponseField('telemetryEndpoint') as unknown as string;
  }

}

export class ECSListAccountSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsListAccountSettingsRequest) {
    super(scope, id);
  }

  public get settings(): shapes.EcsSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListAccountSettings.settings'),
        outputPath: 'settings',
        parameters: {
          name: this.input.name,
          value: this.input.value,
          principalArn: this.input.principalArn,
          effectiveSettings: this.input.effectiveSettings,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountSettings.settings', props);
    return resource.getResponseField('settings') as unknown as shapes.EcsSetting[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListAccountSettings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          name: this.input.name,
          value: this.input.value,
          principalArn: this.input.principalArn,
          effectiveSettings: this.input.effectiveSettings,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountSettings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSListAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsListAttributesRequest) {
    super(scope, id);
  }

  public get attributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttributes',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListAttributes.attributes'),
        outputPath: 'attributes',
        parameters: {
          cluster: this.input.cluster,
          targetType: this.input.targetType,
          attributeName: this.input.attributeName,
          attributeValue: this.input.attributeValue,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttributes.attributes', props);
    return resource.getResponseField('attributes') as unknown as shapes.EcsAttribute[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttributes',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListAttributes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          cluster: this.input.cluster,
          targetType: this.input.targetType,
          attributeName: this.input.attributeName,
          attributeValue: this.input.attributeValue,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttributes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSListClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsListClustersRequest) {
    super(scope, id);
  }

  public get clusterArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListClusters.clusterArns'),
        outputPath: 'clusterArns',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusters.clusterArns', props);
    return resource.getResponseField('clusterArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListClusters.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSListContainerInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsListContainerInstancesRequest) {
    super(scope, id);
  }

  public get containerInstanceArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContainerInstances',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListContainerInstances.containerInstanceArns'),
        outputPath: 'containerInstanceArns',
        parameters: {
          cluster: this.input.cluster,
          filter: this.input.filter,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContainerInstances.containerInstanceArns', props);
    return resource.getResponseField('containerInstanceArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContainerInstances',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListContainerInstances.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          cluster: this.input.cluster,
          filter: this.input.filter,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContainerInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSListServices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsListServicesRequest) {
    super(scope, id);
  }

  public get serviceArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListServices.serviceArns'),
        outputPath: 'serviceArns',
        parameters: {
          cluster: this.input.cluster,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          launchType: this.input.launchType,
          schedulingStrategy: this.input.schedulingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServices.serviceArns', props);
    return resource.getResponseField('serviceArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListServices.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          cluster: this.input.cluster,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          launchType: this.input.launchType,
          schedulingStrategy: this.input.schedulingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServices.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSListTaskDefinitionFamilies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsListTaskDefinitionFamiliesRequest) {
    super(scope, id);
  }

  public get families(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTaskDefinitionFamilies',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListTaskDefinitionFamilies.families'),
        outputPath: 'families',
        parameters: {
          familyPrefix: this.input.familyPrefix,
          status: this.input.status,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTaskDefinitionFamilies.families', props);
    return resource.getResponseField('families') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTaskDefinitionFamilies',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListTaskDefinitionFamilies.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          familyPrefix: this.input.familyPrefix,
          status: this.input.status,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTaskDefinitionFamilies.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSListTaskDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsListTaskDefinitionsRequest) {
    super(scope, id);
  }

  public get taskDefinitionArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTaskDefinitions',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListTaskDefinitions.taskDefinitionArns'),
        outputPath: 'taskDefinitionArns',
        parameters: {
          familyPrefix: this.input.familyPrefix,
          status: this.input.status,
          sort: this.input.sort,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTaskDefinitions.taskDefinitionArns', props);
    return resource.getResponseField('taskDefinitionArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTaskDefinitions',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListTaskDefinitions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          familyPrefix: this.input.familyPrefix,
          status: this.input.status,
          sort: this.input.sort,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTaskDefinitions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSListTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsListTasksRequest) {
    super(scope, id);
  }

  public get taskArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTasks',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListTasks.taskArns'),
        outputPath: 'taskArns',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          family: this.input.family,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          startedBy: this.input.startedBy,
          serviceName: this.input.serviceName,
          desiredStatus: this.input.desiredStatus,
          launchType: this.input.launchType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTasks.taskArns', props);
    return resource.getResponseField('taskArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTasks',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ListTasks.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
          family: this.input.family,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          startedBy: this.input.startedBy,
          serviceName: this.input.serviceName,
          desiredStatus: this.input.desiredStatus,
          launchType: this.input.launchType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSPutAccountSetting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsPutAccountSettingRequest) {
    super(scope, id);
  }

  public get setting(): ECSPutAccountSettingSetting {
    return new ECSPutAccountSettingSetting(this, 'Setting', this.__resources, this.input);
  }

}

export class ECSPutAccountSettingSetting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsPutAccountSettingRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountSetting',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutAccountSetting.setting.name'),
        outputPath: 'setting.name',
        parameters: {
          name: this.input.name,
          value: this.input.value,
          principalArn: this.input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAccountSetting.setting.name', props);
    return resource.getResponseField('setting.name') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountSetting',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutAccountSetting.setting.value'),
        outputPath: 'setting.value',
        parameters: {
          name: this.input.name,
          value: this.input.value,
          principalArn: this.input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAccountSetting.setting.value', props);
    return resource.getResponseField('setting.value') as unknown as string;
  }

  public get principalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountSetting',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutAccountSetting.setting.principalArn'),
        outputPath: 'setting.principalArn',
        parameters: {
          name: this.input.name,
          value: this.input.value,
          principalArn: this.input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAccountSetting.setting.principalArn', props);
    return resource.getResponseField('setting.principalArn') as unknown as string;
  }

}

export class ECSPutAccountSettingDefault extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsPutAccountSettingDefaultRequest) {
    super(scope, id);
  }

  public get setting(): ECSPutAccountSettingDefaultSetting {
    return new ECSPutAccountSettingDefaultSetting(this, 'Setting', this.__resources, this.input);
  }

}

export class ECSPutAccountSettingDefaultSetting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsPutAccountSettingDefaultRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountSettingDefault',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutAccountSettingDefault.setting.name'),
        outputPath: 'setting.name',
        parameters: {
          name: this.input.name,
          value: this.input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAccountSettingDefault.setting.name', props);
    return resource.getResponseField('setting.name') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountSettingDefault',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutAccountSettingDefault.setting.value'),
        outputPath: 'setting.value',
        parameters: {
          name: this.input.name,
          value: this.input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAccountSettingDefault.setting.value', props);
    return resource.getResponseField('setting.value') as unknown as string;
  }

  public get principalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountSettingDefault',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutAccountSettingDefault.setting.principalArn'),
        outputPath: 'setting.principalArn',
        parameters: {
          name: this.input.name,
          value: this.input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAccountSettingDefault.setting.principalArn', props);
    return resource.getResponseField('setting.principalArn') as unknown as string;
  }

}

export class ECSPutAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsPutAttributesRequest) {
    super(scope, id);
  }

  public get attributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAttributes',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutAttributes.attributes'),
        outputPath: 'attributes',
        parameters: {
          cluster: this.input.cluster,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAttributes.attributes', props);
    return resource.getResponseField('attributes') as unknown as shapes.EcsAttribute[];
  }

}

export class ECSPutClusterCapacityProviders extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsPutClusterCapacityProvidersRequest) {
    super(scope, id);
  }

  public get cluster(): ECSPutClusterCapacityProvidersCluster {
    return new ECSPutClusterCapacityProvidersCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class ECSPutClusterCapacityProvidersCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsPutClusterCapacityProvidersRequest) {
    super(scope, id);
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.clusterArn'),
        outputPath: 'cluster.clusterArn',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.clusterArn', props);
    return resource.getResponseField('cluster.clusterArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.clusterName'),
        outputPath: 'cluster.clusterName',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.clusterName', props);
    return resource.getResponseField('cluster.clusterName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.status'),
        outputPath: 'cluster.status',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get registeredContainerInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.registeredContainerInstancesCount'),
        outputPath: 'cluster.registeredContainerInstancesCount',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.registeredContainerInstancesCount', props);
    return resource.getResponseField('cluster.registeredContainerInstancesCount') as unknown as number;
  }

  public get runningTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.runningTasksCount'),
        outputPath: 'cluster.runningTasksCount',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.runningTasksCount', props);
    return resource.getResponseField('cluster.runningTasksCount') as unknown as number;
  }

  public get pendingTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.pendingTasksCount'),
        outputPath: 'cluster.pendingTasksCount',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.pendingTasksCount', props);
    return resource.getResponseField('cluster.pendingTasksCount') as unknown as number;
  }

  public get activeServicesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.activeServicesCount'),
        outputPath: 'cluster.activeServicesCount',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.activeServicesCount', props);
    return resource.getResponseField('cluster.activeServicesCount') as unknown as number;
  }

  public get statistics(): shapes.EcsKeyValuePair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.statistics'),
        outputPath: 'cluster.statistics',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.statistics', props);
    return resource.getResponseField('cluster.statistics') as unknown as shapes.EcsKeyValuePair[];
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.tags'),
        outputPath: 'cluster.tags',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.tags', props);
    return resource.getResponseField('cluster.tags') as unknown as shapes.EcsTag[];
  }

  public get settings(): shapes.EcsClusterSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.settings'),
        outputPath: 'cluster.settings',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.settings', props);
    return resource.getResponseField('cluster.settings') as unknown as shapes.EcsClusterSetting[];
  }

  public get capacityProviders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.capacityProviders'),
        outputPath: 'cluster.capacityProviders',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.capacityProviders', props);
    return resource.getResponseField('cluster.capacityProviders') as unknown as string[];
  }

  public get defaultCapacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.defaultCapacityProviderStrategy'),
        outputPath: 'cluster.defaultCapacityProviderStrategy',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.defaultCapacityProviderStrategy', props);
    return resource.getResponseField('cluster.defaultCapacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get attachments(): shapes.EcsAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.attachments'),
        outputPath: 'cluster.attachments',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.attachments', props);
    return resource.getResponseField('cluster.attachments') as unknown as shapes.EcsAttachment[];
  }

  public get attachmentsStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.attachmentsStatus'),
        outputPath: 'cluster.attachmentsStatus',
        parameters: {
          cluster: this.input.cluster,
          capacityProviders: this.input.capacityProviders,
          defaultCapacityProviderStrategy: this.input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClusterCapacityProviders.cluster.attachmentsStatus', props);
    return resource.getResponseField('cluster.attachmentsStatus') as unknown as string;
  }

}

export class ECSRegisterContainerInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsRegisterContainerInstanceRequest) {
    super(scope, id);
  }

  public get containerInstance(): ECSRegisterContainerInstanceContainerInstance {
    return new ECSRegisterContainerInstanceContainerInstance(this, 'ContainerInstance', this.__resources, this.input);
  }

}

export class ECSRegisterContainerInstanceContainerInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsRegisterContainerInstanceRequest) {
    super(scope, id);
  }

  public get containerInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.containerInstanceArn'),
        outputPath: 'containerInstance.containerInstanceArn',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.containerInstanceArn', props);
    return resource.getResponseField('containerInstance.containerInstanceArn') as unknown as string;
  }

  public get ec2InstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.ec2InstanceId'),
        outputPath: 'containerInstance.ec2InstanceId',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.ec2InstanceId', props);
    return resource.getResponseField('containerInstance.ec2InstanceId') as unknown as string;
  }

  public get capacityProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.capacityProviderName'),
        outputPath: 'containerInstance.capacityProviderName',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.capacityProviderName', props);
    return resource.getResponseField('containerInstance.capacityProviderName') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.version'),
        outputPath: 'containerInstance.version',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.version', props);
    return resource.getResponseField('containerInstance.version') as unknown as number;
  }

  public get versionInfo(): ECSRegisterContainerInstanceContainerInstanceVersionInfo {
    return new ECSRegisterContainerInstanceContainerInstanceVersionInfo(this, 'VersionInfo', this.__resources, this.input);
  }

  public get remainingResources(): shapes.EcsResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.remainingResources'),
        outputPath: 'containerInstance.remainingResources',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.remainingResources', props);
    return resource.getResponseField('containerInstance.remainingResources') as unknown as shapes.EcsResource[];
  }

  public get registeredResources(): shapes.EcsResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.registeredResources'),
        outputPath: 'containerInstance.registeredResources',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.registeredResources', props);
    return resource.getResponseField('containerInstance.registeredResources') as unknown as shapes.EcsResource[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.status'),
        outputPath: 'containerInstance.status',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.status', props);
    return resource.getResponseField('containerInstance.status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.statusReason'),
        outputPath: 'containerInstance.statusReason',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.statusReason', props);
    return resource.getResponseField('containerInstance.statusReason') as unknown as string;
  }

  public get agentConnected(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.agentConnected'),
        outputPath: 'containerInstance.agentConnected',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.agentConnected', props);
    return resource.getResponseField('containerInstance.agentConnected') as unknown as boolean;
  }

  public get runningTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.runningTasksCount'),
        outputPath: 'containerInstance.runningTasksCount',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.runningTasksCount', props);
    return resource.getResponseField('containerInstance.runningTasksCount') as unknown as number;
  }

  public get pendingTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.pendingTasksCount'),
        outputPath: 'containerInstance.pendingTasksCount',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.pendingTasksCount', props);
    return resource.getResponseField('containerInstance.pendingTasksCount') as unknown as number;
  }

  public get agentUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.agentUpdateStatus'),
        outputPath: 'containerInstance.agentUpdateStatus',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.agentUpdateStatus', props);
    return resource.getResponseField('containerInstance.agentUpdateStatus') as unknown as string;
  }

  public get attributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.attributes'),
        outputPath: 'containerInstance.attributes',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.attributes', props);
    return resource.getResponseField('containerInstance.attributes') as unknown as shapes.EcsAttribute[];
  }

  public get registeredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.registeredAt'),
        outputPath: 'containerInstance.registeredAt',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.registeredAt', props);
    return resource.getResponseField('containerInstance.registeredAt') as unknown as string;
  }

  public get attachments(): shapes.EcsAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.attachments'),
        outputPath: 'containerInstance.attachments',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.attachments', props);
    return resource.getResponseField('containerInstance.attachments') as unknown as shapes.EcsAttachment[];
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.tags'),
        outputPath: 'containerInstance.tags',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.tags', props);
    return resource.getResponseField('containerInstance.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSRegisterContainerInstanceContainerInstanceVersionInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsRegisterContainerInstanceRequest) {
    super(scope, id);
  }

  public get agentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.versionInfo.agentVersion'),
        outputPath: 'containerInstance.versionInfo.agentVersion',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.versionInfo.agentVersion', props);
    return resource.getResponseField('containerInstance.versionInfo.agentVersion') as unknown as string;
  }

  public get agentHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.versionInfo.agentHash'),
        outputPath: 'containerInstance.versionInfo.agentHash',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.versionInfo.agentHash', props);
    return resource.getResponseField('containerInstance.versionInfo.agentHash') as unknown as string;
  }

  public get dockerVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerInstance',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterContainerInstance.containerInstance.versionInfo.dockerVersion'),
        outputPath: 'containerInstance.versionInfo.dockerVersion',
        parameters: {
          cluster: this.input.cluster,
          instanceIdentityDocument: this.input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.input.instanceIdentityDocumentSignature,
          totalResources: this.input.totalResources,
          versionInfo: {
            agentVersion: this.input.versionInfo?.agentVersion,
            agentHash: this.input.versionInfo?.agentHash,
            dockerVersion: this.input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.input.containerInstanceArn,
          attributes: this.input.attributes,
          platformDevices: this.input.platformDevices,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerInstance.containerInstance.versionInfo.dockerVersion', props);
    return resource.getResponseField('containerInstance.versionInfo.dockerVersion') as unknown as string;
  }

}

export class ECSRegisterTaskDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsRegisterTaskDefinitionRequest) {
    super(scope, id);
  }

  public get taskDefinition(): ECSRegisterTaskDefinitionTaskDefinition {
    return new ECSRegisterTaskDefinitionTaskDefinition(this, 'TaskDefinition', this.__resources, this.input);
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSRegisterTaskDefinitionTaskDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsRegisterTaskDefinitionRequest) {
    super(scope, id);
  }

  public get taskDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.taskDefinitionArn'),
        outputPath: 'taskDefinition.taskDefinitionArn',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.taskDefinitionArn', props);
    return resource.getResponseField('taskDefinition.taskDefinitionArn') as unknown as string;
  }

  public get containerDefinitions(): shapes.EcsContainerDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.containerDefinitions'),
        outputPath: 'taskDefinition.containerDefinitions',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.containerDefinitions', props);
    return resource.getResponseField('taskDefinition.containerDefinitions') as unknown as shapes.EcsContainerDefinition[];
  }

  public get family(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.family'),
        outputPath: 'taskDefinition.family',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.family', props);
    return resource.getResponseField('taskDefinition.family') as unknown as string;
  }

  public get taskRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.taskRoleArn'),
        outputPath: 'taskDefinition.taskRoleArn',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.taskRoleArn', props);
    return resource.getResponseField('taskDefinition.taskRoleArn') as unknown as string;
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.executionRoleArn'),
        outputPath: 'taskDefinition.executionRoleArn',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.executionRoleArn', props);
    return resource.getResponseField('taskDefinition.executionRoleArn') as unknown as string;
  }

  public get networkMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.networkMode'),
        outputPath: 'taskDefinition.networkMode',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.networkMode', props);
    return resource.getResponseField('taskDefinition.networkMode') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.revision'),
        outputPath: 'taskDefinition.revision',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.revision', props);
    return resource.getResponseField('taskDefinition.revision') as unknown as number;
  }

  public get volumes(): shapes.EcsVolume[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.volumes'),
        outputPath: 'taskDefinition.volumes',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.volumes', props);
    return resource.getResponseField('taskDefinition.volumes') as unknown as shapes.EcsVolume[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.status'),
        outputPath: 'taskDefinition.status',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.status', props);
    return resource.getResponseField('taskDefinition.status') as unknown as string;
  }

  public get requiresAttributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.requiresAttributes'),
        outputPath: 'taskDefinition.requiresAttributes',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.requiresAttributes', props);
    return resource.getResponseField('taskDefinition.requiresAttributes') as unknown as shapes.EcsAttribute[];
  }

  public get placementConstraints(): shapes.EcsTaskDefinitionPlacementConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.placementConstraints'),
        outputPath: 'taskDefinition.placementConstraints',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.placementConstraints', props);
    return resource.getResponseField('taskDefinition.placementConstraints') as unknown as shapes.EcsTaskDefinitionPlacementConstraint[];
  }

  public get compatibilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.compatibilities'),
        outputPath: 'taskDefinition.compatibilities',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.compatibilities', props);
    return resource.getResponseField('taskDefinition.compatibilities') as unknown as string[];
  }

  public get requiresCompatibilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.requiresCompatibilities'),
        outputPath: 'taskDefinition.requiresCompatibilities',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.requiresCompatibilities', props);
    return resource.getResponseField('taskDefinition.requiresCompatibilities') as unknown as string[];
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.cpu'),
        outputPath: 'taskDefinition.cpu',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.cpu', props);
    return resource.getResponseField('taskDefinition.cpu') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.memory'),
        outputPath: 'taskDefinition.memory',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.memory', props);
    return resource.getResponseField('taskDefinition.memory') as unknown as string;
  }

  public get inferenceAccelerators(): shapes.EcsInferenceAccelerator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.inferenceAccelerators'),
        outputPath: 'taskDefinition.inferenceAccelerators',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.inferenceAccelerators', props);
    return resource.getResponseField('taskDefinition.inferenceAccelerators') as unknown as shapes.EcsInferenceAccelerator[];
  }

  public get pidMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.pidMode'),
        outputPath: 'taskDefinition.pidMode',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.pidMode', props);
    return resource.getResponseField('taskDefinition.pidMode') as unknown as string;
  }

  public get ipcMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.ipcMode'),
        outputPath: 'taskDefinition.ipcMode',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.ipcMode', props);
    return resource.getResponseField('taskDefinition.ipcMode') as unknown as string;
  }

  public get proxyConfiguration(): ECSRegisterTaskDefinitionTaskDefinitionProxyConfiguration {
    return new ECSRegisterTaskDefinitionTaskDefinitionProxyConfiguration(this, 'ProxyConfiguration', this.__resources, this.input);
  }

}

export class ECSRegisterTaskDefinitionTaskDefinitionProxyConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsRegisterTaskDefinitionRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.proxyConfiguration.type'),
        outputPath: 'taskDefinition.proxyConfiguration.type',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.proxyConfiguration.type', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.type') as unknown as string;
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.proxyConfiguration.containerName'),
        outputPath: 'taskDefinition.proxyConfiguration.containerName',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.proxyConfiguration.containerName', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.containerName') as unknown as string;
  }

  public get properties(): shapes.EcsKeyValuePair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.proxyConfiguration.properties'),
        outputPath: 'taskDefinition.proxyConfiguration.properties',
        parameters: {
          family: this.input.family,
          taskRoleArn: this.input.taskRoleArn,
          executionRoleArn: this.input.executionRoleArn,
          networkMode: this.input.networkMode,
          containerDefinitions: this.input.containerDefinitions,
          volumes: this.input.volumes,
          placementConstraints: this.input.placementConstraints,
          requiresCompatibilities: this.input.requiresCompatibilities,
          cpu: this.input.cpu,
          memory: this.input.memory,
          tags: this.input.tags,
          pidMode: this.input.pidMode,
          ipcMode: this.input.ipcMode,
          proxyConfiguration: {
            type: this.input.proxyConfiguration?.type,
            containerName: this.input.proxyConfiguration?.containerName,
            properties: this.input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.input.inferenceAccelerators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskDefinition.taskDefinition.proxyConfiguration.properties', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.properties') as unknown as shapes.EcsKeyValuePair[];
  }

}

export class ECSRunTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsRunTaskRequest) {
    super(scope, id);
  }

  public get tasks(): shapes.EcsTask[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'runTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RunTask.tasks'),
        outputPath: 'tasks',
        parameters: {
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          cluster: this.input.cluster,
          count: this.input.count,
          enableECSManagedTags: this.input.enableECSManagedTags,
          group: this.input.group,
          launchType: this.input.launchType,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          overrides: {
            containerOverrides: this.input.overrides?.containerOverrides,
            cpu: this.input.overrides?.cpu,
            inferenceAcceleratorOverrides: this.input.overrides?.inferenceAcceleratorOverrides,
            executionRoleArn: this.input.overrides?.executionRoleArn,
            memory: this.input.overrides?.memory,
            taskRoleArn: this.input.overrides?.taskRoleArn,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          propagateTags: this.input.propagateTags,
          referenceId: this.input.referenceId,
          startedBy: this.input.startedBy,
          tags: this.input.tags,
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RunTask.tasks', props);
    return resource.getResponseField('tasks') as unknown as shapes.EcsTask[];
  }

  public get failures(): shapes.EcsFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'runTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RunTask.failures'),
        outputPath: 'failures',
        parameters: {
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          cluster: this.input.cluster,
          count: this.input.count,
          enableECSManagedTags: this.input.enableECSManagedTags,
          group: this.input.group,
          launchType: this.input.launchType,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          overrides: {
            containerOverrides: this.input.overrides?.containerOverrides,
            cpu: this.input.overrides?.cpu,
            inferenceAcceleratorOverrides: this.input.overrides?.inferenceAcceleratorOverrides,
            executionRoleArn: this.input.overrides?.executionRoleArn,
            memory: this.input.overrides?.memory,
            taskRoleArn: this.input.overrides?.taskRoleArn,
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          propagateTags: this.input.propagateTags,
          referenceId: this.input.referenceId,
          startedBy: this.input.startedBy,
          tags: this.input.tags,
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RunTask.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSStartTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsStartTaskRequest) {
    super(scope, id);
  }

  public get tasks(): shapes.EcsTask[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StartTask.tasks'),
        outputPath: 'tasks',
        parameters: {
          cluster: this.input.cluster,
          containerInstances: this.input.containerInstances,
          enableECSManagedTags: this.input.enableECSManagedTags,
          group: this.input.group,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          overrides: {
            containerOverrides: this.input.overrides?.containerOverrides,
            cpu: this.input.overrides?.cpu,
            inferenceAcceleratorOverrides: this.input.overrides?.inferenceAcceleratorOverrides,
            executionRoleArn: this.input.overrides?.executionRoleArn,
            memory: this.input.overrides?.memory,
            taskRoleArn: this.input.overrides?.taskRoleArn,
          },
          propagateTags: this.input.propagateTags,
          referenceId: this.input.referenceId,
          startedBy: this.input.startedBy,
          tags: this.input.tags,
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartTask.tasks', props);
    return resource.getResponseField('tasks') as unknown as shapes.EcsTask[];
  }

  public get failures(): shapes.EcsFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StartTask.failures'),
        outputPath: 'failures',
        parameters: {
          cluster: this.input.cluster,
          containerInstances: this.input.containerInstances,
          enableECSManagedTags: this.input.enableECSManagedTags,
          group: this.input.group,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          overrides: {
            containerOverrides: this.input.overrides?.containerOverrides,
            cpu: this.input.overrides?.cpu,
            inferenceAcceleratorOverrides: this.input.overrides?.inferenceAcceleratorOverrides,
            executionRoleArn: this.input.overrides?.executionRoleArn,
            memory: this.input.overrides?.memory,
            taskRoleArn: this.input.overrides?.taskRoleArn,
          },
          propagateTags: this.input.propagateTags,
          referenceId: this.input.referenceId,
          startedBy: this.input.startedBy,
          tags: this.input.tags,
          taskDefinition: this.input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartTask.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSStopTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsStopTaskRequest) {
    super(scope, id);
  }

  public get task(): ECSStopTaskTask {
    return new ECSStopTaskTask(this, 'Task', this.__resources, this.input);
  }

}

export class ECSStopTaskTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsStopTaskRequest) {
    super(scope, id);
  }

  public get attachments(): shapes.EcsAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.attachments'),
        outputPath: 'task.attachments',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.attachments', props);
    return resource.getResponseField('task.attachments') as unknown as shapes.EcsAttachment[];
  }

  public get attributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.attributes'),
        outputPath: 'task.attributes',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.attributes', props);
    return resource.getResponseField('task.attributes') as unknown as shapes.EcsAttribute[];
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.availabilityZone'),
        outputPath: 'task.availabilityZone',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.availabilityZone', props);
    return resource.getResponseField('task.availabilityZone') as unknown as string;
  }

  public get capacityProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.capacityProviderName'),
        outputPath: 'task.capacityProviderName',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.capacityProviderName', props);
    return resource.getResponseField('task.capacityProviderName') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.clusterArn'),
        outputPath: 'task.clusterArn',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.clusterArn', props);
    return resource.getResponseField('task.clusterArn') as unknown as string;
  }

  public get connectivity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.connectivity'),
        outputPath: 'task.connectivity',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.connectivity', props);
    return resource.getResponseField('task.connectivity') as unknown as string;
  }

  public get connectivityAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.connectivityAt'),
        outputPath: 'task.connectivityAt',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.connectivityAt', props);
    return resource.getResponseField('task.connectivityAt') as unknown as string;
  }

  public get containerInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.containerInstanceArn'),
        outputPath: 'task.containerInstanceArn',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.containerInstanceArn', props);
    return resource.getResponseField('task.containerInstanceArn') as unknown as string;
  }

  public get containers(): shapes.EcsContainer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.containers'),
        outputPath: 'task.containers',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.containers', props);
    return resource.getResponseField('task.containers') as unknown as shapes.EcsContainer[];
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.cpu'),
        outputPath: 'task.cpu',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.cpu', props);
    return resource.getResponseField('task.cpu') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.createdAt'),
        outputPath: 'task.createdAt',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.createdAt', props);
    return resource.getResponseField('task.createdAt') as unknown as string;
  }

  public get desiredStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.desiredStatus'),
        outputPath: 'task.desiredStatus',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.desiredStatus', props);
    return resource.getResponseField('task.desiredStatus') as unknown as string;
  }

  public get executionStoppedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.executionStoppedAt'),
        outputPath: 'task.executionStoppedAt',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.executionStoppedAt', props);
    return resource.getResponseField('task.executionStoppedAt') as unknown as string;
  }

  public get group(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.group'),
        outputPath: 'task.group',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.group', props);
    return resource.getResponseField('task.group') as unknown as string;
  }

  public get healthStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.healthStatus'),
        outputPath: 'task.healthStatus',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.healthStatus', props);
    return resource.getResponseField('task.healthStatus') as unknown as string;
  }

  public get inferenceAccelerators(): shapes.EcsInferenceAccelerator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.inferenceAccelerators'),
        outputPath: 'task.inferenceAccelerators',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.inferenceAccelerators', props);
    return resource.getResponseField('task.inferenceAccelerators') as unknown as shapes.EcsInferenceAccelerator[];
  }

  public get lastStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.lastStatus'),
        outputPath: 'task.lastStatus',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.lastStatus', props);
    return resource.getResponseField('task.lastStatus') as unknown as string;
  }

  public get launchType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.launchType'),
        outputPath: 'task.launchType',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.launchType', props);
    return resource.getResponseField('task.launchType') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.memory'),
        outputPath: 'task.memory',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.memory', props);
    return resource.getResponseField('task.memory') as unknown as string;
  }

  public get overrides(): ECSStopTaskTaskOverrides {
    return new ECSStopTaskTaskOverrides(this, 'Overrides', this.__resources, this.input);
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.platformVersion'),
        outputPath: 'task.platformVersion',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.platformVersion', props);
    return resource.getResponseField('task.platformVersion') as unknown as string;
  }

  public get pullStartedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.pullStartedAt'),
        outputPath: 'task.pullStartedAt',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.pullStartedAt', props);
    return resource.getResponseField('task.pullStartedAt') as unknown as string;
  }

  public get pullStoppedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.pullStoppedAt'),
        outputPath: 'task.pullStoppedAt',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.pullStoppedAt', props);
    return resource.getResponseField('task.pullStoppedAt') as unknown as string;
  }

  public get startedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.startedAt'),
        outputPath: 'task.startedAt',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.startedAt', props);
    return resource.getResponseField('task.startedAt') as unknown as string;
  }

  public get startedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.startedBy'),
        outputPath: 'task.startedBy',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.startedBy', props);
    return resource.getResponseField('task.startedBy') as unknown as string;
  }

  public get stopCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.stopCode'),
        outputPath: 'task.stopCode',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.stopCode', props);
    return resource.getResponseField('task.stopCode') as unknown as string;
  }

  public get stoppedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.stoppedAt'),
        outputPath: 'task.stoppedAt',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.stoppedAt', props);
    return resource.getResponseField('task.stoppedAt') as unknown as string;
  }

  public get stoppedReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.stoppedReason'),
        outputPath: 'task.stoppedReason',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.stoppedReason', props);
    return resource.getResponseField('task.stoppedReason') as unknown as string;
  }

  public get stoppingAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.stoppingAt'),
        outputPath: 'task.stoppingAt',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.stoppingAt', props);
    return resource.getResponseField('task.stoppingAt') as unknown as string;
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.tags'),
        outputPath: 'task.tags',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.tags', props);
    return resource.getResponseField('task.tags') as unknown as shapes.EcsTag[];
  }

  public get taskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.taskArn'),
        outputPath: 'task.taskArn',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.taskArn', props);
    return resource.getResponseField('task.taskArn') as unknown as string;
  }

  public get taskDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.taskDefinitionArn'),
        outputPath: 'task.taskDefinitionArn',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.taskDefinitionArn', props);
    return resource.getResponseField('task.taskDefinitionArn') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.version'),
        outputPath: 'task.version',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.version', props);
    return resource.getResponseField('task.version') as unknown as number;
  }

}

export class ECSStopTaskTaskOverrides extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsStopTaskRequest) {
    super(scope, id);
  }

  public get containerOverrides(): shapes.EcsContainerOverride[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.overrides.containerOverrides'),
        outputPath: 'task.overrides.containerOverrides',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.overrides.containerOverrides', props);
    return resource.getResponseField('task.overrides.containerOverrides') as unknown as shapes.EcsContainerOverride[];
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.overrides.cpu'),
        outputPath: 'task.overrides.cpu',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.overrides.cpu', props);
    return resource.getResponseField('task.overrides.cpu') as unknown as string;
  }

  public get inferenceAcceleratorOverrides(): shapes.EcsInferenceAcceleratorOverride[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.overrides.inferenceAcceleratorOverrides'),
        outputPath: 'task.overrides.inferenceAcceleratorOverrides',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.overrides.inferenceAcceleratorOverrides', props);
    return resource.getResponseField('task.overrides.inferenceAcceleratorOverrides') as unknown as shapes.EcsInferenceAcceleratorOverride[];
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.overrides.executionRoleArn'),
        outputPath: 'task.overrides.executionRoleArn',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.overrides.executionRoleArn', props);
    return resource.getResponseField('task.overrides.executionRoleArn') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.overrides.memory'),
        outputPath: 'task.overrides.memory',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.overrides.memory', props);
    return resource.getResponseField('task.overrides.memory') as unknown as string;
  }

  public get taskRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.overrides.taskRoleArn'),
        outputPath: 'task.overrides.taskRoleArn',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTask.task.overrides.taskRoleArn', props);
    return resource.getResponseField('task.overrides.taskRoleArn') as unknown as string;
  }

}

export class ECSSubmitAttachmentStateChanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsSubmitAttachmentStateChangesRequest) {
    super(scope, id);
  }

  public get acknowledgment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'submitAttachmentStateChanges',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.SubmitAttachmentStateChanges.acknowledgment'),
        outputPath: 'acknowledgment',
        parameters: {
          cluster: this.input.cluster,
          attachments: this.input.attachments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SubmitAttachmentStateChanges.acknowledgment', props);
    return resource.getResponseField('acknowledgment') as unknown as string;
  }

}

export class ECSSubmitContainerStateChange extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsSubmitContainerStateChangeRequest) {
    super(scope, id);
  }

  public get acknowledgment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'submitContainerStateChange',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.SubmitContainerStateChange.acknowledgment'),
        outputPath: 'acknowledgment',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          containerName: this.input.containerName,
          runtimeId: this.input.runtimeId,
          status: this.input.status,
          exitCode: this.input.exitCode,
          reason: this.input.reason,
          networkBindings: this.input.networkBindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SubmitContainerStateChange.acknowledgment', props);
    return resource.getResponseField('acknowledgment') as unknown as string;
  }

}

export class ECSSubmitTaskStateChange extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsSubmitTaskStateChangeRequest) {
    super(scope, id);
  }

  public get acknowledgment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'submitTaskStateChange',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.SubmitTaskStateChange.acknowledgment'),
        outputPath: 'acknowledgment',
        parameters: {
          cluster: this.input.cluster,
          task: this.input.task,
          status: this.input.status,
          reason: this.input.reason,
          containers: this.input.containers,
          attachments: this.input.attachments,
          pullStartedAt: this.input.pullStartedAt,
          pullStoppedAt: this.input.pullStoppedAt,
          executionStoppedAt: this.input.executionStoppedAt,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SubmitTaskStateChange.acknowledgment', props);
    return resource.getResponseField('acknowledgment') as unknown as string;
  }

}

export class ECSUpdateCapacityProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateCapacityProviderRequest) {
    super(scope, id);
  }

  public get capacityProvider(): ECSUpdateCapacityProviderCapacityProvider {
    return new ECSUpdateCapacityProviderCapacityProvider(this, 'CapacityProvider', this.__resources, this.input);
  }

}

export class ECSUpdateCapacityProviderCapacityProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateCapacityProviderRequest) {
    super(scope, id);
  }

  public get capacityProviderArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.capacityProviderArn'),
        outputPath: 'capacityProvider.capacityProviderArn',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.capacityProviderArn', props);
    return resource.getResponseField('capacityProvider.capacityProviderArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.name'),
        outputPath: 'capacityProvider.name',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.name', props);
    return resource.getResponseField('capacityProvider.name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.status'),
        outputPath: 'capacityProvider.status',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.status', props);
    return resource.getResponseField('capacityProvider.status') as unknown as string;
  }

  public get autoScalingGroupProvider(): ECSUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider {
    return new ECSUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider(this, 'AutoScalingGroupProvider', this.__resources, this.input);
  }

  public get updateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.updateStatus'),
        outputPath: 'capacityProvider.updateStatus',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.updateStatus', props);
    return resource.getResponseField('capacityProvider.updateStatus') as unknown as string;
  }

  public get updateStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.updateStatusReason'),
        outputPath: 'capacityProvider.updateStatusReason',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.updateStatusReason', props);
    return resource.getResponseField('capacityProvider.updateStatusReason') as unknown as string;
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.tags'),
        outputPath: 'capacityProvider.tags',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.tags', props);
    return resource.getResponseField('capacityProvider.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateCapacityProviderRequest) {
    super(scope, id);
  }

  public get autoScalingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.autoScalingGroupArn'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.autoScalingGroupArn',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.autoScalingGroupArn', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.autoScalingGroupArn') as unknown as string;
  }

  public get managedScaling(): ECSUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling {
    return new ECSUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling(this, 'ManagedScaling', this.__resources, this.input);
  }

  public get managedTerminationProtection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedTerminationProtection'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedTerminationProtection',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedTerminationProtection', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedTerminationProtection') as unknown as string;
  }

}

export class ECSUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateCapacityProviderRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.status'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.status',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.status', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.status') as unknown as string;
  }

  public get targetCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity') as unknown as number;
  }

  public get minimumScalingStepSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize') as unknown as number;
  }

  public get maximumScalingStepSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize') as unknown as number;
  }

  public get instanceWarmupPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCapacityProvider',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod'),
        outputPath: 'capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod',
        parameters: {
          name: this.input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod') as unknown as number;
  }

}

export class ECSUpdateClusterSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateClusterSettingsRequest) {
    super(scope, id);
  }

  public get cluster(): ECSUpdateClusterSettingsCluster {
    return new ECSUpdateClusterSettingsCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class ECSUpdateClusterSettingsCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateClusterSettingsRequest) {
    super(scope, id);
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.clusterArn'),
        outputPath: 'cluster.clusterArn',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.clusterArn', props);
    return resource.getResponseField('cluster.clusterArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.clusterName'),
        outputPath: 'cluster.clusterName',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.clusterName', props);
    return resource.getResponseField('cluster.clusterName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.status'),
        outputPath: 'cluster.status',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get registeredContainerInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.registeredContainerInstancesCount'),
        outputPath: 'cluster.registeredContainerInstancesCount',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.registeredContainerInstancesCount', props);
    return resource.getResponseField('cluster.registeredContainerInstancesCount') as unknown as number;
  }

  public get runningTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.runningTasksCount'),
        outputPath: 'cluster.runningTasksCount',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.runningTasksCount', props);
    return resource.getResponseField('cluster.runningTasksCount') as unknown as number;
  }

  public get pendingTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.pendingTasksCount'),
        outputPath: 'cluster.pendingTasksCount',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.pendingTasksCount', props);
    return resource.getResponseField('cluster.pendingTasksCount') as unknown as number;
  }

  public get activeServicesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.activeServicesCount'),
        outputPath: 'cluster.activeServicesCount',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.activeServicesCount', props);
    return resource.getResponseField('cluster.activeServicesCount') as unknown as number;
  }

  public get statistics(): shapes.EcsKeyValuePair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.statistics'),
        outputPath: 'cluster.statistics',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.statistics', props);
    return resource.getResponseField('cluster.statistics') as unknown as shapes.EcsKeyValuePair[];
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.tags'),
        outputPath: 'cluster.tags',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.tags', props);
    return resource.getResponseField('cluster.tags') as unknown as shapes.EcsTag[];
  }

  public get settings(): shapes.EcsClusterSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.settings'),
        outputPath: 'cluster.settings',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.settings', props);
    return resource.getResponseField('cluster.settings') as unknown as shapes.EcsClusterSetting[];
  }

  public get capacityProviders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.capacityProviders'),
        outputPath: 'cluster.capacityProviders',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.capacityProviders', props);
    return resource.getResponseField('cluster.capacityProviders') as unknown as string[];
  }

  public get defaultCapacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.defaultCapacityProviderStrategy'),
        outputPath: 'cluster.defaultCapacityProviderStrategy',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.defaultCapacityProviderStrategy', props);
    return resource.getResponseField('cluster.defaultCapacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get attachments(): shapes.EcsAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.attachments'),
        outputPath: 'cluster.attachments',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.attachments', props);
    return resource.getResponseField('cluster.attachments') as unknown as shapes.EcsAttachment[];
  }

  public get attachmentsStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.attachmentsStatus'),
        outputPath: 'cluster.attachmentsStatus',
        parameters: {
          cluster: this.input.cluster,
          settings: this.input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterSettings.cluster.attachmentsStatus', props);
    return resource.getResponseField('cluster.attachmentsStatus') as unknown as string;
  }

}

export class ECSUpdateContainerAgent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateContainerAgentRequest) {
    super(scope, id);
  }

  public get containerInstance(): ECSUpdateContainerAgentContainerInstance {
    return new ECSUpdateContainerAgentContainerInstance(this, 'ContainerInstance', this.__resources, this.input);
  }

}

export class ECSUpdateContainerAgentContainerInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateContainerAgentRequest) {
    super(scope, id);
  }

  public get containerInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.containerInstanceArn'),
        outputPath: 'containerInstance.containerInstanceArn',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.containerInstanceArn', props);
    return resource.getResponseField('containerInstance.containerInstanceArn') as unknown as string;
  }

  public get ec2InstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.ec2InstanceId'),
        outputPath: 'containerInstance.ec2InstanceId',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.ec2InstanceId', props);
    return resource.getResponseField('containerInstance.ec2InstanceId') as unknown as string;
  }

  public get capacityProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.capacityProviderName'),
        outputPath: 'containerInstance.capacityProviderName',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.capacityProviderName', props);
    return resource.getResponseField('containerInstance.capacityProviderName') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.version'),
        outputPath: 'containerInstance.version',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.version', props);
    return resource.getResponseField('containerInstance.version') as unknown as number;
  }

  public get versionInfo(): ECSUpdateContainerAgentContainerInstanceVersionInfo {
    return new ECSUpdateContainerAgentContainerInstanceVersionInfo(this, 'VersionInfo', this.__resources, this.input);
  }

  public get remainingResources(): shapes.EcsResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.remainingResources'),
        outputPath: 'containerInstance.remainingResources',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.remainingResources', props);
    return resource.getResponseField('containerInstance.remainingResources') as unknown as shapes.EcsResource[];
  }

  public get registeredResources(): shapes.EcsResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.registeredResources'),
        outputPath: 'containerInstance.registeredResources',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.registeredResources', props);
    return resource.getResponseField('containerInstance.registeredResources') as unknown as shapes.EcsResource[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.status'),
        outputPath: 'containerInstance.status',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.status', props);
    return resource.getResponseField('containerInstance.status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.statusReason'),
        outputPath: 'containerInstance.statusReason',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.statusReason', props);
    return resource.getResponseField('containerInstance.statusReason') as unknown as string;
  }

  public get agentConnected(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.agentConnected'),
        outputPath: 'containerInstance.agentConnected',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.agentConnected', props);
    return resource.getResponseField('containerInstance.agentConnected') as unknown as boolean;
  }

  public get runningTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.runningTasksCount'),
        outputPath: 'containerInstance.runningTasksCount',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.runningTasksCount', props);
    return resource.getResponseField('containerInstance.runningTasksCount') as unknown as number;
  }

  public get pendingTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.pendingTasksCount'),
        outputPath: 'containerInstance.pendingTasksCount',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.pendingTasksCount', props);
    return resource.getResponseField('containerInstance.pendingTasksCount') as unknown as number;
  }

  public get agentUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.agentUpdateStatus'),
        outputPath: 'containerInstance.agentUpdateStatus',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.agentUpdateStatus', props);
    return resource.getResponseField('containerInstance.agentUpdateStatus') as unknown as string;
  }

  public get attributes(): shapes.EcsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.attributes'),
        outputPath: 'containerInstance.attributes',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.attributes', props);
    return resource.getResponseField('containerInstance.attributes') as unknown as shapes.EcsAttribute[];
  }

  public get registeredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.registeredAt'),
        outputPath: 'containerInstance.registeredAt',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.registeredAt', props);
    return resource.getResponseField('containerInstance.registeredAt') as unknown as string;
  }

  public get attachments(): shapes.EcsAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.attachments'),
        outputPath: 'containerInstance.attachments',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.attachments', props);
    return resource.getResponseField('containerInstance.attachments') as unknown as shapes.EcsAttachment[];
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.tags'),
        outputPath: 'containerInstance.tags',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.tags', props);
    return resource.getResponseField('containerInstance.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSUpdateContainerAgentContainerInstanceVersionInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateContainerAgentRequest) {
    super(scope, id);
  }

  public get agentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.versionInfo.agentVersion'),
        outputPath: 'containerInstance.versionInfo.agentVersion',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.versionInfo.agentVersion', props);
    return resource.getResponseField('containerInstance.versionInfo.agentVersion') as unknown as string;
  }

  public get agentHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.versionInfo.agentHash'),
        outputPath: 'containerInstance.versionInfo.agentHash',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.versionInfo.agentHash', props);
    return resource.getResponseField('containerInstance.versionInfo.agentHash') as unknown as string;
  }

  public get dockerVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerAgent',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerAgent.containerInstance.versionInfo.dockerVersion'),
        outputPath: 'containerInstance.versionInfo.dockerVersion',
        parameters: {
          cluster: this.input.cluster,
          containerInstance: this.input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerAgent.containerInstance.versionInfo.dockerVersion', props);
    return resource.getResponseField('containerInstance.versionInfo.dockerVersion') as unknown as string;
  }

}

export class ECSUpdateContainerInstancesState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateContainerInstancesStateRequest) {
    super(scope, id);
  }

  public get containerInstances(): shapes.EcsContainerInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerInstancesState',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerInstancesState.containerInstances'),
        outputPath: 'containerInstances',
        parameters: {
          cluster: this.input.cluster,
          containerInstances: this.input.containerInstances,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerInstancesState.containerInstances', props);
    return resource.getResponseField('containerInstances') as unknown as shapes.EcsContainerInstance[];
  }

  public get failures(): shapes.EcsFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerInstancesState',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateContainerInstancesState.failures'),
        outputPath: 'failures',
        parameters: {
          cluster: this.input.cluster,
          containerInstances: this.input.containerInstances,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerInstancesState.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSUpdateService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServiceRequest) {
    super(scope, id);
  }

  public get service(): ECSUpdateServiceService {
    return new ECSUpdateServiceService(this, 'Service', this.__resources, this.input);
  }

}

export class ECSUpdateServiceService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServiceRequest) {
    super(scope, id);
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.serviceArn'),
        outputPath: 'service.serviceArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.serviceArn', props);
    return resource.getResponseField('service.serviceArn') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.serviceName'),
        outputPath: 'service.serviceName',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.serviceName', props);
    return resource.getResponseField('service.serviceName') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.clusterArn'),
        outputPath: 'service.clusterArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.clusterArn', props);
    return resource.getResponseField('service.clusterArn') as unknown as string;
  }

  public get loadBalancers(): shapes.EcsLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.loadBalancers'),
        outputPath: 'service.loadBalancers',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.loadBalancers', props);
    return resource.getResponseField('service.loadBalancers') as unknown as shapes.EcsLoadBalancer[];
  }

  public get serviceRegistries(): shapes.EcsServiceRegistry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.serviceRegistries'),
        outputPath: 'service.serviceRegistries',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.serviceRegistries', props);
    return resource.getResponseField('service.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.status'),
        outputPath: 'service.status',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.status', props);
    return resource.getResponseField('service.status') as unknown as string;
  }

  public get desiredCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.desiredCount'),
        outputPath: 'service.desiredCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.desiredCount', props);
    return resource.getResponseField('service.desiredCount') as unknown as number;
  }

  public get runningCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.runningCount'),
        outputPath: 'service.runningCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.runningCount', props);
    return resource.getResponseField('service.runningCount') as unknown as number;
  }

  public get pendingCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.pendingCount'),
        outputPath: 'service.pendingCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.pendingCount', props);
    return resource.getResponseField('service.pendingCount') as unknown as number;
  }

  public get launchType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.launchType'),
        outputPath: 'service.launchType',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.launchType', props);
    return resource.getResponseField('service.launchType') as unknown as string;
  }

  public get capacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.capacityProviderStrategy'),
        outputPath: 'service.capacityProviderStrategy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.capacityProviderStrategy', props);
    return resource.getResponseField('service.capacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.platformVersion'),
        outputPath: 'service.platformVersion',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.platformVersion', props);
    return resource.getResponseField('service.platformVersion') as unknown as string;
  }

  public get taskDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.taskDefinition'),
        outputPath: 'service.taskDefinition',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.taskDefinition', props);
    return resource.getResponseField('service.taskDefinition') as unknown as string;
  }

  public get deploymentConfiguration(): ECSUpdateServiceServiceDeploymentConfiguration {
    return new ECSUpdateServiceServiceDeploymentConfiguration(this, 'DeploymentConfiguration', this.__resources, this.input);
  }

  public get taskSets(): shapes.EcsTaskSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.taskSets'),
        outputPath: 'service.taskSets',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.taskSets', props);
    return resource.getResponseField('service.taskSets') as unknown as shapes.EcsTaskSet[];
  }

  public get deployments(): shapes.EcsDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.deployments'),
        outputPath: 'service.deployments',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.deployments', props);
    return resource.getResponseField('service.deployments') as unknown as shapes.EcsDeployment[];
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.roleArn'),
        outputPath: 'service.roleArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.roleArn', props);
    return resource.getResponseField('service.roleArn') as unknown as string;
  }

  public get events(): shapes.EcsServiceEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.events'),
        outputPath: 'service.events',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.events', props);
    return resource.getResponseField('service.events') as unknown as shapes.EcsServiceEvent[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.createdAt'),
        outputPath: 'service.createdAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.createdAt', props);
    return resource.getResponseField('service.createdAt') as unknown as string;
  }

  public get placementConstraints(): shapes.EcsPlacementConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.placementConstraints'),
        outputPath: 'service.placementConstraints',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.placementConstraints', props);
    return resource.getResponseField('service.placementConstraints') as unknown as shapes.EcsPlacementConstraint[];
  }

  public get placementStrategy(): shapes.EcsPlacementStrategy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.placementStrategy'),
        outputPath: 'service.placementStrategy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.placementStrategy', props);
    return resource.getResponseField('service.placementStrategy') as unknown as shapes.EcsPlacementStrategy[];
  }

  public get networkConfiguration(): ECSUpdateServiceServiceNetworkConfiguration {
    return new ECSUpdateServiceServiceNetworkConfiguration(this, 'NetworkConfiguration', this.__resources, this.input);
  }

  public get healthCheckGracePeriodSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.healthCheckGracePeriodSeconds'),
        outputPath: 'service.healthCheckGracePeriodSeconds',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.healthCheckGracePeriodSeconds', props);
    return resource.getResponseField('service.healthCheckGracePeriodSeconds') as unknown as number;
  }

  public get schedulingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.schedulingStrategy'),
        outputPath: 'service.schedulingStrategy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.schedulingStrategy', props);
    return resource.getResponseField('service.schedulingStrategy') as unknown as string;
  }

  public get deploymentController(): ECSUpdateServiceServiceDeploymentController {
    return new ECSUpdateServiceServiceDeploymentController(this, 'DeploymentController', this.__resources, this.input);
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.tags'),
        outputPath: 'service.tags',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.tags', props);
    return resource.getResponseField('service.tags') as unknown as shapes.EcsTag[];
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.createdBy'),
        outputPath: 'service.createdBy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.createdBy', props);
    return resource.getResponseField('service.createdBy') as unknown as string;
  }

  public get enableEcsManagedTags(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.enableECSManagedTags'),
        outputPath: 'service.enableECSManagedTags',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.enableECSManagedTags', props);
    return resource.getResponseField('service.enableECSManagedTags') as unknown as boolean;
  }

  public get propagateTags(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.propagateTags'),
        outputPath: 'service.propagateTags',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.propagateTags', props);
    return resource.getResponseField('service.propagateTags') as unknown as string;
  }

}

export class ECSUpdateServiceServiceDeploymentConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServiceRequest) {
    super(scope, id);
  }

  public get deploymentCircuitBreaker(): ECSUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker {
    return new ECSUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker(this, 'DeploymentCircuitBreaker', this.__resources, this.input);
  }

  public get maximumPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.deploymentConfiguration.maximumPercent'),
        outputPath: 'service.deploymentConfiguration.maximumPercent',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.deploymentConfiguration.maximumPercent', props);
    return resource.getResponseField('service.deploymentConfiguration.maximumPercent') as unknown as number;
  }

  public get minimumHealthyPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.deploymentConfiguration.minimumHealthyPercent'),
        outputPath: 'service.deploymentConfiguration.minimumHealthyPercent',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.deploymentConfiguration.minimumHealthyPercent', props);
    return resource.getResponseField('service.deploymentConfiguration.minimumHealthyPercent') as unknown as number;
  }

}

export class ECSUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServiceRequest) {
    super(scope, id);
  }

  public get enable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.deploymentConfiguration.deploymentCircuitBreaker.enable'),
        outputPath: 'service.deploymentConfiguration.deploymentCircuitBreaker.enable',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.deploymentConfiguration.deploymentCircuitBreaker.enable', props);
    return resource.getResponseField('service.deploymentConfiguration.deploymentCircuitBreaker.enable') as unknown as boolean;
  }

  public get rollback(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.deploymentConfiguration.deploymentCircuitBreaker.rollback'),
        outputPath: 'service.deploymentConfiguration.deploymentCircuitBreaker.rollback',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.deploymentConfiguration.deploymentCircuitBreaker.rollback', props);
    return resource.getResponseField('service.deploymentConfiguration.deploymentCircuitBreaker.rollback') as unknown as boolean;
  }

}

export class ECSUpdateServiceServiceNetworkConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServiceRequest) {
    super(scope, id);
  }

  public get awsvpcConfiguration(): ECSUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration {
    return new ECSUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration(this, 'AwsvpcConfiguration', this.__resources, this.input);
  }

}

export class ECSUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServiceRequest) {
    super(scope, id);
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.networkConfiguration.awsvpcConfiguration.subnets'),
        outputPath: 'service.networkConfiguration.awsvpcConfiguration.subnets',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.networkConfiguration.awsvpcConfiguration.subnets', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.subnets') as unknown as string[];
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.networkConfiguration.awsvpcConfiguration.securityGroups'),
        outputPath: 'service.networkConfiguration.awsvpcConfiguration.securityGroups',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.networkConfiguration.awsvpcConfiguration.securityGroups', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.securityGroups') as unknown as string[];
  }

  public get assignPublicIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.networkConfiguration.awsvpcConfiguration.assignPublicIp'),
        outputPath: 'service.networkConfiguration.awsvpcConfiguration.assignPublicIp',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSUpdateServiceServiceDeploymentController extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServiceRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.deploymentController.type'),
        outputPath: 'service.deploymentController.type',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          desiredCount: this.input.desiredCount,
          taskDefinition: this.input.taskDefinition,
          capacityProviderStrategy: this.input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.input.placementConstraints,
          placementStrategy: this.input.placementStrategy,
          platformVersion: this.input.platformVersion,
          forceNewDeployment: this.input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.input.healthCheckGracePeriodSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.service.deploymentController.type', props);
    return resource.getResponseField('service.deploymentController.type') as unknown as string;
  }

}

export class ECSUpdateServicePrimaryTaskSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
    super(scope, id);
  }

  public get taskSet(): ECSUpdateServicePrimaryTaskSetTaskSet {
    return new ECSUpdateServicePrimaryTaskSetTaskSet(this, 'TaskSet', this.__resources, this.input);
  }

}

export class ECSUpdateServicePrimaryTaskSetTaskSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.id'),
        outputPath: 'taskSet.id',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.id', props);
    return resource.getResponseField('taskSet.id') as unknown as string;
  }

  public get taskSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.taskSetArn'),
        outputPath: 'taskSet.taskSetArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.taskSetArn', props);
    return resource.getResponseField('taskSet.taskSetArn') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.serviceArn'),
        outputPath: 'taskSet.serviceArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.serviceArn', props);
    return resource.getResponseField('taskSet.serviceArn') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.clusterArn'),
        outputPath: 'taskSet.clusterArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.clusterArn', props);
    return resource.getResponseField('taskSet.clusterArn') as unknown as string;
  }

  public get startedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.startedBy'),
        outputPath: 'taskSet.startedBy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.startedBy', props);
    return resource.getResponseField('taskSet.startedBy') as unknown as string;
  }

  public get externalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.externalId'),
        outputPath: 'taskSet.externalId',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.externalId', props);
    return resource.getResponseField('taskSet.externalId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.status'),
        outputPath: 'taskSet.status',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.status', props);
    return resource.getResponseField('taskSet.status') as unknown as string;
  }

  public get taskDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.taskDefinition'),
        outputPath: 'taskSet.taskDefinition',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.taskDefinition', props);
    return resource.getResponseField('taskSet.taskDefinition') as unknown as string;
  }

  public get computedDesiredCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.computedDesiredCount'),
        outputPath: 'taskSet.computedDesiredCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.computedDesiredCount', props);
    return resource.getResponseField('taskSet.computedDesiredCount') as unknown as number;
  }

  public get pendingCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.pendingCount'),
        outputPath: 'taskSet.pendingCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.pendingCount', props);
    return resource.getResponseField('taskSet.pendingCount') as unknown as number;
  }

  public get runningCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.runningCount'),
        outputPath: 'taskSet.runningCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.runningCount', props);
    return resource.getResponseField('taskSet.runningCount') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.createdAt'),
        outputPath: 'taskSet.createdAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.createdAt', props);
    return resource.getResponseField('taskSet.createdAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.updatedAt'),
        outputPath: 'taskSet.updatedAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.updatedAt', props);
    return resource.getResponseField('taskSet.updatedAt') as unknown as string;
  }

  public get launchType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.launchType'),
        outputPath: 'taskSet.launchType',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.launchType', props);
    return resource.getResponseField('taskSet.launchType') as unknown as string;
  }

  public get capacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.capacityProviderStrategy'),
        outputPath: 'taskSet.capacityProviderStrategy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.capacityProviderStrategy', props);
    return resource.getResponseField('taskSet.capacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.platformVersion'),
        outputPath: 'taskSet.platformVersion',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.platformVersion', props);
    return resource.getResponseField('taskSet.platformVersion') as unknown as string;
  }

  public get networkConfiguration(): ECSUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration {
    return new ECSUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration(this, 'NetworkConfiguration', this.__resources, this.input);
  }

  public get loadBalancers(): shapes.EcsLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.loadBalancers'),
        outputPath: 'taskSet.loadBalancers',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.loadBalancers', props);
    return resource.getResponseField('taskSet.loadBalancers') as unknown as shapes.EcsLoadBalancer[];
  }

  public get serviceRegistries(): shapes.EcsServiceRegistry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.serviceRegistries'),
        outputPath: 'taskSet.serviceRegistries',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.serviceRegistries', props);
    return resource.getResponseField('taskSet.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get scale(): ECSUpdateServicePrimaryTaskSetTaskSetScale {
    return new ECSUpdateServicePrimaryTaskSetTaskSetScale(this, 'Scale', this.__resources, this.input);
  }

  public get stabilityStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.stabilityStatus'),
        outputPath: 'taskSet.stabilityStatus',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.stabilityStatus', props);
    return resource.getResponseField('taskSet.stabilityStatus') as unknown as string;
  }

  public get stabilityStatusAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.stabilityStatusAt'),
        outputPath: 'taskSet.stabilityStatusAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.stabilityStatusAt', props);
    return resource.getResponseField('taskSet.stabilityStatusAt') as unknown as string;
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.tags'),
        outputPath: 'taskSet.tags',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.tags', props);
    return resource.getResponseField('taskSet.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
    super(scope, id);
  }

  public get awsvpcConfiguration(): ECSUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {
    return new ECSUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(this, 'AwsvpcConfiguration', this.__resources, this.input);
  }

}

export class ECSUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
    super(scope, id);
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.subnets',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.subnets') as unknown as string[];
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.securityGroups',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.securityGroups') as unknown as string[];
  }

  public get assignPublicIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSUpdateServicePrimaryTaskSetTaskSetScale extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
    super(scope, id);
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.scale.value'),
        outputPath: 'taskSet.scale.value',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.scale.value', props);
    return resource.getResponseField('taskSet.scale.value') as unknown as number;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePrimaryTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateServicePrimaryTaskSet.taskSet.scale.unit'),
        outputPath: 'taskSet.scale.unit',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          primaryTaskSet: this.input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServicePrimaryTaskSet.taskSet.scale.unit', props);
    return resource.getResponseField('taskSet.scale.unit') as unknown as string;
  }

}

export class ECSUpdateTaskSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateTaskSetRequest) {
    super(scope, id);
  }

  public get taskSet(): ECSUpdateTaskSetTaskSet {
    return new ECSUpdateTaskSetTaskSet(this, 'TaskSet', this.__resources, this.input);
  }

}

export class ECSUpdateTaskSetTaskSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateTaskSetRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.id'),
        outputPath: 'taskSet.id',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.id', props);
    return resource.getResponseField('taskSet.id') as unknown as string;
  }

  public get taskSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.taskSetArn'),
        outputPath: 'taskSet.taskSetArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.taskSetArn', props);
    return resource.getResponseField('taskSet.taskSetArn') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.serviceArn'),
        outputPath: 'taskSet.serviceArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.serviceArn', props);
    return resource.getResponseField('taskSet.serviceArn') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.clusterArn'),
        outputPath: 'taskSet.clusterArn',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.clusterArn', props);
    return resource.getResponseField('taskSet.clusterArn') as unknown as string;
  }

  public get startedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.startedBy'),
        outputPath: 'taskSet.startedBy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.startedBy', props);
    return resource.getResponseField('taskSet.startedBy') as unknown as string;
  }

  public get externalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.externalId'),
        outputPath: 'taskSet.externalId',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.externalId', props);
    return resource.getResponseField('taskSet.externalId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.status'),
        outputPath: 'taskSet.status',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.status', props);
    return resource.getResponseField('taskSet.status') as unknown as string;
  }

  public get taskDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.taskDefinition'),
        outputPath: 'taskSet.taskDefinition',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.taskDefinition', props);
    return resource.getResponseField('taskSet.taskDefinition') as unknown as string;
  }

  public get computedDesiredCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.computedDesiredCount'),
        outputPath: 'taskSet.computedDesiredCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.computedDesiredCount', props);
    return resource.getResponseField('taskSet.computedDesiredCount') as unknown as number;
  }

  public get pendingCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.pendingCount'),
        outputPath: 'taskSet.pendingCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.pendingCount', props);
    return resource.getResponseField('taskSet.pendingCount') as unknown as number;
  }

  public get runningCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.runningCount'),
        outputPath: 'taskSet.runningCount',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.runningCount', props);
    return resource.getResponseField('taskSet.runningCount') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.createdAt'),
        outputPath: 'taskSet.createdAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.createdAt', props);
    return resource.getResponseField('taskSet.createdAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.updatedAt'),
        outputPath: 'taskSet.updatedAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.updatedAt', props);
    return resource.getResponseField('taskSet.updatedAt') as unknown as string;
  }

  public get launchType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.launchType'),
        outputPath: 'taskSet.launchType',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.launchType', props);
    return resource.getResponseField('taskSet.launchType') as unknown as string;
  }

  public get capacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.capacityProviderStrategy'),
        outputPath: 'taskSet.capacityProviderStrategy',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.capacityProviderStrategy', props);
    return resource.getResponseField('taskSet.capacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.platformVersion'),
        outputPath: 'taskSet.platformVersion',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.platformVersion', props);
    return resource.getResponseField('taskSet.platformVersion') as unknown as string;
  }

  public get networkConfiguration(): ECSUpdateTaskSetTaskSetNetworkConfiguration {
    return new ECSUpdateTaskSetTaskSetNetworkConfiguration(this, 'NetworkConfiguration', this.__resources, this.input);
  }

  public get loadBalancers(): shapes.EcsLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.loadBalancers'),
        outputPath: 'taskSet.loadBalancers',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.loadBalancers', props);
    return resource.getResponseField('taskSet.loadBalancers') as unknown as shapes.EcsLoadBalancer[];
  }

  public get serviceRegistries(): shapes.EcsServiceRegistry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.serviceRegistries'),
        outputPath: 'taskSet.serviceRegistries',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.serviceRegistries', props);
    return resource.getResponseField('taskSet.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get scale(): ECSUpdateTaskSetTaskSetScale {
    return new ECSUpdateTaskSetTaskSetScale(this, 'Scale', this.__resources, this.input);
  }

  public get stabilityStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.stabilityStatus'),
        outputPath: 'taskSet.stabilityStatus',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.stabilityStatus', props);
    return resource.getResponseField('taskSet.stabilityStatus') as unknown as string;
  }

  public get stabilityStatusAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.stabilityStatusAt'),
        outputPath: 'taskSet.stabilityStatusAt',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.stabilityStatusAt', props);
    return resource.getResponseField('taskSet.stabilityStatusAt') as unknown as string;
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.tags'),
        outputPath: 'taskSet.tags',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.tags', props);
    return resource.getResponseField('taskSet.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSUpdateTaskSetTaskSetNetworkConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateTaskSetRequest) {
    super(scope, id);
  }

  public get awsvpcConfiguration(): ECSUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {
    return new ECSUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(this, 'AwsvpcConfiguration', this.__resources, this.input);
  }

}

export class ECSUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateTaskSetRequest) {
    super(scope, id);
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.subnets',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.subnets') as unknown as string[];
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.securityGroups',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.securityGroups') as unknown as string[];
  }

  public get assignPublicIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp'),
        outputPath: 'taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSUpdateTaskSetTaskSetScale extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcsUpdateTaskSetRequest) {
    super(scope, id);
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.scale.value'),
        outputPath: 'taskSet.scale.value',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.scale.value', props);
    return resource.getResponseField('taskSet.scale.value') as unknown as number;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskSet',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateTaskSet.taskSet.scale.unit'),
        outputPath: 'taskSet.scale.unit',
        parameters: {
          cluster: this.input.cluster,
          service: this.input.service,
          taskSet: this.input.taskSet,
          scale: {
            value: this.input.scale.value,
            unit: this.input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTaskSet.taskSet.scale.unit', props);
    return resource.getResponseField('taskSet.scale.unit') as unknown as string;
  }

}

