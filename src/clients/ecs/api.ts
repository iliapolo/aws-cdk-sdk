import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EcsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCapacityProvider(input: shapes.EcsCreateCapacityProviderRequest): ECSResponsesCreateCapacityProvider {
    return new ECSResponsesCreateCapacityProvider(this, this.__resources, input);
  }

  public createCluster(input: shapes.EcsCreateClusterRequest): ECSResponsesCreateCluster {
    return new ECSResponsesCreateCluster(this, this.__resources, input);
  }

  public createService(input: shapes.EcsCreateServiceRequest): ECSResponsesCreateService {
    return new ECSResponsesCreateService(this, this.__resources, input);
  }

  public createTaskSet(input: shapes.EcsCreateTaskSetRequest): ECSResponsesCreateTaskSet {
    return new ECSResponsesCreateTaskSet(this, this.__resources, input);
  }

  public deleteAccountSetting(input: shapes.EcsDeleteAccountSettingRequest): ECSResponsesDeleteAccountSetting {
    return new ECSResponsesDeleteAccountSetting(this, this.__resources, input);
  }

  public deleteAttributes(input: shapes.EcsDeleteAttributesRequest): ECSResponsesDeleteAttributes {
    return new ECSResponsesDeleteAttributes(this, this.__resources, input);
  }

  public deleteCapacityProvider(input: shapes.EcsDeleteCapacityProviderRequest): ECSResponsesDeleteCapacityProvider {
    return new ECSResponsesDeleteCapacityProvider(this, this.__resources, input);
  }

  public deleteCluster(input: shapes.EcsDeleteClusterRequest): ECSResponsesDeleteCluster {
    return new ECSResponsesDeleteCluster(this, this.__resources, input);
  }

  public deleteService(input: shapes.EcsDeleteServiceRequest): ECSResponsesDeleteService {
    return new ECSResponsesDeleteService(this, this.__resources, input);
  }

  public deleteTaskSet(input: shapes.EcsDeleteTaskSetRequest): ECSResponsesDeleteTaskSet {
    return new ECSResponsesDeleteTaskSet(this, this.__resources, input);
  }

  public deregisterContainerInstance(input: shapes.EcsDeregisterContainerInstanceRequest): ECSResponsesDeregisterContainerInstance {
    return new ECSResponsesDeregisterContainerInstance(this, this.__resources, input);
  }

  public deregisterTaskDefinition(input: shapes.EcsDeregisterTaskDefinitionRequest): ECSResponsesDeregisterTaskDefinition {
    return new ECSResponsesDeregisterTaskDefinition(this, this.__resources, input);
  }

  public describeCapacityProviders(input: shapes.EcsDescribeCapacityProvidersRequest): ECSResponsesDescribeCapacityProviders {
    return new ECSResponsesDescribeCapacityProviders(this, this.__resources, input);
  }

  public describeClusters(input: shapes.EcsDescribeClustersRequest): ECSResponsesDescribeClusters {
    return new ECSResponsesDescribeClusters(this, this.__resources, input);
  }

  public describeContainerInstances(input: shapes.EcsDescribeContainerInstancesRequest): ECSResponsesDescribeContainerInstances {
    return new ECSResponsesDescribeContainerInstances(this, this.__resources, input);
  }

  public describeServices(input: shapes.EcsDescribeServicesRequest): ECSResponsesDescribeServices {
    return new ECSResponsesDescribeServices(this, this.__resources, input);
  }

  public describeTaskDefinition(input: shapes.EcsDescribeTaskDefinitionRequest): ECSResponsesDescribeTaskDefinition {
    return new ECSResponsesDescribeTaskDefinition(this, this.__resources, input);
  }

  public describeTaskSets(input: shapes.EcsDescribeTaskSetsRequest): ECSResponsesDescribeTaskSets {
    return new ECSResponsesDescribeTaskSets(this, this.__resources, input);
  }

  public describeTasks(input: shapes.EcsDescribeTasksRequest): ECSResponsesDescribeTasks {
    return new ECSResponsesDescribeTasks(this, this.__resources, input);
  }

  public discoverPollEndpoint(input: shapes.EcsDiscoverPollEndpointRequest): ECSResponsesDiscoverPollEndpoint {
    return new ECSResponsesDiscoverPollEndpoint(this, this.__resources, input);
  }

  public executeCommand(input: shapes.EcsExecuteCommandRequest): ECSResponsesExecuteCommand {
    return new ECSResponsesExecuteCommand(this, this.__resources, input);
  }

  public listAccountSettings(input: shapes.EcsListAccountSettingsRequest): ECSResponsesListAccountSettings {
    return new ECSResponsesListAccountSettings(this, this.__resources, input);
  }

  public listAttributes(input: shapes.EcsListAttributesRequest): ECSResponsesListAttributes {
    return new ECSResponsesListAttributes(this, this.__resources, input);
  }

  public listClusters(input: shapes.EcsListClustersRequest): ECSResponsesListClusters {
    return new ECSResponsesListClusters(this, this.__resources, input);
  }

  public listContainerInstances(input: shapes.EcsListContainerInstancesRequest): ECSResponsesListContainerInstances {
    return new ECSResponsesListContainerInstances(this, this.__resources, input);
  }

  public listServices(input: shapes.EcsListServicesRequest): ECSResponsesListServices {
    return new ECSResponsesListServices(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.EcsListTagsForResourceRequest): ECSResponsesListTagsForResource {
    return new ECSResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTaskDefinitionFamilies(input: shapes.EcsListTaskDefinitionFamiliesRequest): ECSResponsesListTaskDefinitionFamilies {
    return new ECSResponsesListTaskDefinitionFamilies(this, this.__resources, input);
  }

  public listTaskDefinitions(input: shapes.EcsListTaskDefinitionsRequest): ECSResponsesListTaskDefinitions {
    return new ECSResponsesListTaskDefinitions(this, this.__resources, input);
  }

  public listTasks(input: shapes.EcsListTasksRequest): ECSResponsesListTasks {
    return new ECSResponsesListTasks(this, this.__resources, input);
  }

  public putAccountSetting(input: shapes.EcsPutAccountSettingRequest): ECSResponsesPutAccountSetting {
    return new ECSResponsesPutAccountSetting(this, this.__resources, input);
  }

  public putAccountSettingDefault(input: shapes.EcsPutAccountSettingDefaultRequest): ECSResponsesPutAccountSettingDefault {
    return new ECSResponsesPutAccountSettingDefault(this, this.__resources, input);
  }

  public putAttributes(input: shapes.EcsPutAttributesRequest): ECSResponsesPutAttributes {
    return new ECSResponsesPutAttributes(this, this.__resources, input);
  }

  public putClusterCapacityProviders(input: shapes.EcsPutClusterCapacityProvidersRequest): ECSResponsesPutClusterCapacityProviders {
    return new ECSResponsesPutClusterCapacityProviders(this, this.__resources, input);
  }

  public registerContainerInstance(input: shapes.EcsRegisterContainerInstanceRequest): ECSResponsesRegisterContainerInstance {
    return new ECSResponsesRegisterContainerInstance(this, this.__resources, input);
  }

  public registerTaskDefinition(input: shapes.EcsRegisterTaskDefinitionRequest): ECSResponsesRegisterTaskDefinition {
    return new ECSResponsesRegisterTaskDefinition(this, this.__resources, input);
  }

  public runTask(input: shapes.EcsRunTaskRequest): ECSResponsesRunTask {
    return new ECSResponsesRunTask(this, this.__resources, input);
  }

  public startTask(input: shapes.EcsStartTaskRequest): ECSResponsesStartTask {
    return new ECSResponsesStartTask(this, this.__resources, input);
  }

  public stopTask(input: shapes.EcsStopTaskRequest): ECSResponsesStopTask {
    return new ECSResponsesStopTask(this, this.__resources, input);
  }

  public submitAttachmentStateChanges(input: shapes.EcsSubmitAttachmentStateChangesRequest): ECSResponsesSubmitAttachmentStateChanges {
    return new ECSResponsesSubmitAttachmentStateChanges(this, this.__resources, input);
  }

  public submitContainerStateChange(input: shapes.EcsSubmitContainerStateChangeRequest): ECSResponsesSubmitContainerStateChange {
    return new ECSResponsesSubmitContainerStateChange(this, this.__resources, input);
  }

  public submitTaskStateChange(input: shapes.EcsSubmitTaskStateChangeRequest): ECSResponsesSubmitTaskStateChange {
    return new ECSResponsesSubmitTaskStateChange(this, this.__resources, input);
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

  public updateCapacityProvider(input: shapes.EcsUpdateCapacityProviderRequest): ECSResponsesUpdateCapacityProvider {
    return new ECSResponsesUpdateCapacityProvider(this, this.__resources, input);
  }

  public updateCluster(input: shapes.EcsUpdateClusterRequest): ECSResponsesUpdateCluster {
    return new ECSResponsesUpdateCluster(this, this.__resources, input);
  }

  public updateClusterSettings(input: shapes.EcsUpdateClusterSettingsRequest): ECSResponsesUpdateClusterSettings {
    return new ECSResponsesUpdateClusterSettings(this, this.__resources, input);
  }

  public updateContainerAgent(input: shapes.EcsUpdateContainerAgentRequest): ECSResponsesUpdateContainerAgent {
    return new ECSResponsesUpdateContainerAgent(this, this.__resources, input);
  }

  public updateContainerInstancesState(input: shapes.EcsUpdateContainerInstancesStateRequest): ECSResponsesUpdateContainerInstancesState {
    return new ECSResponsesUpdateContainerInstancesState(this, this.__resources, input);
  }

  public updateService(input: shapes.EcsUpdateServiceRequest): ECSResponsesUpdateService {
    return new ECSResponsesUpdateService(this, this.__resources, input);
  }

  public updateServicePrimaryTaskSet(input: shapes.EcsUpdateServicePrimaryTaskSetRequest): ECSResponsesUpdateServicePrimaryTaskSet {
    return new ECSResponsesUpdateServicePrimaryTaskSet(this, this.__resources, input);
  }

  public updateTaskSet(input: shapes.EcsUpdateTaskSetRequest): ECSResponsesUpdateTaskSet {
    return new ECSResponsesUpdateTaskSet(this, this.__resources, input);
  }

}

export class ECSResponsesCreateCapacityProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateCapacityProviderRequest) {
  }

  public get capacityProvider(): ECSResponsesCreateCapacityProviderCapacityProvider {
    return new ECSResponsesCreateCapacityProviderCapacityProvider(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesCreateCapacityProviderCapacityProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateCapacityProviderRequest) {
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.capacityProviderArn', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.name', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.status', props);
    return resource.getResponseField('capacityProvider.status') as unknown as string;
  }

  public get autoScalingGroupProvider(): ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider {
    return new ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.updateStatus', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.updateStatusReason', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.tags', props);
    return resource.getResponseField('capacityProvider.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateCapacityProviderRequest) {
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.autoScalingGroupArn', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.autoScalingGroupArn') as unknown as string;
  }

  public get managedScaling(): ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling {
    return new ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedTerminationProtection', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedTerminationProtection') as unknown as string;
  }

}

export class ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateCapacityProviderRequest) {
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.status', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            autoScalingGroupArn: this.__input.autoScalingGroupProvider.autoScalingGroupArn,
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod') as unknown as number;
  }

}

export class ECSResponsesCreateCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateClusterRequest) {
  }

  public get cluster(): ECSResponsesCreateClusterCluster {
    return new ECSResponsesCreateClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesCreateClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateClusterRequest) {
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.clusterArn', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.clusterName', props);
    return resource.getResponseField('cluster.clusterName') as unknown as string;
  }

  public get configuration(): ECSResponsesCreateClusterClusterConfiguration {
    return new ECSResponsesCreateClusterClusterConfiguration(this.__scope, this.__resources, this.__input);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.status', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.registeredContainerInstancesCount', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.runningTasksCount', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.pendingTasksCount', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.activeServicesCount', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.statistics', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.tags', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.settings', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.capacityProviders', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.defaultCapacityProviderStrategy', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.attachments', props);
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
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.attachmentsStatus', props);
    return resource.getResponseField('cluster.attachmentsStatus') as unknown as string;
  }

}

export class ECSResponsesCreateClusterClusterConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateClusterRequest) {
  }

  public get executeCommandConfiguration(): ECSResponsesCreateClusterClusterConfigurationExecuteCommandConfiguration {
    return new ECSResponsesCreateClusterClusterConfigurationExecuteCommandConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesCreateClusterClusterConfigurationExecuteCommandConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateClusterRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.configuration.executeCommandConfiguration.kmsKeyId'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.kmsKeyId',
        parameters: {
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.configuration.executeCommandConfiguration.kmsKeyId', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.kmsKeyId') as unknown as string;
  }

  public get logging(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.configuration.executeCommandConfiguration.logging'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logging',
        parameters: {
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.configuration.executeCommandConfiguration.logging', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logging') as unknown as string;
  }

  public get logConfiguration(): ECSResponsesCreateClusterClusterConfigurationExecuteCommandConfigurationLogConfiguration {
    return new ECSResponsesCreateClusterClusterConfigurationExecuteCommandConfigurationLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesCreateClusterClusterConfigurationExecuteCommandConfigurationLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateClusterRequest) {
  }

  public get cloudWatchLogGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName',
        parameters: {
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName') as unknown as string;
  }

  public get cloudWatchEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled',
        parameters: {
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled') as unknown as boolean;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName',
        parameters: {
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName') as unknown as string;
  }

  public get s3EncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled',
        parameters: {
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled') as unknown as boolean;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix',
        parameters: {
          clusterName: this.__input.clusterName,
          tags: this.__input.tags,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix') as unknown as string;
  }

}

export class ECSResponsesCreateService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateServiceRequest) {
  }

  public get service(): ECSResponsesCreateServiceService {
    return new ECSResponsesCreateServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesCreateServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateServiceRequest) {
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.serviceArn', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.serviceName', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.clusterArn', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.loadBalancers', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.serviceRegistries', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.status', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.desiredCount', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.runningCount', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pendingCount', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.launchType', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.capacityProviderStrategy', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.platformVersion', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.taskDefinition', props);
    return resource.getResponseField('service.taskDefinition') as unknown as string;
  }

  public get deploymentConfiguration(): ECSResponsesCreateServiceServiceDeploymentConfiguration {
    return new ECSResponsesCreateServiceServiceDeploymentConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.taskSets', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.deployments', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.roleArn', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.events', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.createdAt', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.placementConstraints', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.placementStrategy', props);
    return resource.getResponseField('service.placementStrategy') as unknown as shapes.EcsPlacementStrategy[];
  }

  public get networkConfiguration(): ECSResponsesCreateServiceServiceNetworkConfiguration {
    return new ECSResponsesCreateServiceServiceNetworkConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.healthCheckGracePeriodSeconds', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.schedulingStrategy', props);
    return resource.getResponseField('service.schedulingStrategy') as unknown as string;
  }

  public get deploymentController(): ECSResponsesCreateServiceServiceDeploymentController {
    return new ECSResponsesCreateServiceServiceDeploymentController(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.tags', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.createdBy', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.enableECSManagedTags', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.propagateTags', props);
    return resource.getResponseField('service.propagateTags') as unknown as string;
  }

  public get enableExecuteCommand(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.CreateService.service.enableExecuteCommand'),
        outputPath: 'service.enableExecuteCommand',
        parameters: {
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.enableExecuteCommand', props);
    return resource.getResponseField('service.enableExecuteCommand') as unknown as boolean;
  }

}

export class ECSResponsesCreateServiceServiceDeploymentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateServiceRequest) {
  }

  public get deploymentCircuitBreaker(): ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker {
    return new ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.deploymentConfiguration.maximumPercent', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.deploymentConfiguration.minimumHealthyPercent', props);
    return resource.getResponseField('service.deploymentConfiguration.minimumHealthyPercent') as unknown as number;
  }

}

export class ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateServiceRequest) {
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.deploymentConfiguration.deploymentCircuitBreaker.enable', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.deploymentConfiguration.deploymentCircuitBreaker.rollback', props);
    return resource.getResponseField('service.deploymentConfiguration.deploymentCircuitBreaker.rollback') as unknown as boolean;
  }

}

export class ECSResponsesCreateServiceServiceNetworkConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateServiceRequest) {
  }

  public get awsvpcConfiguration(): ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration {
    return new ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateServiceRequest) {
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.networkConfiguration.awsvpcConfiguration.subnets', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.networkConfiguration.awsvpcConfiguration.securityGroups', props);
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSResponsesCreateServiceServiceDeploymentController {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateServiceRequest) {
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
          cluster: this.__input.cluster,
          serviceName: this.__input.serviceName,
          taskDefinition: this.__input.taskDefinition,
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          desiredCount: this.__input.desiredCount,
          clientToken: this.__input.clientToken,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          role: this.__input.role,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          schedulingStrategy: this.__input.schedulingStrategy,
          deploymentController: {
            type: this.__input.deploymentController?.type,
          },
          tags: this.__input.tags,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          propagateTags: this.__input.propagateTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.deploymentController.type', props);
    return resource.getResponseField('service.deploymentController.type') as unknown as string;
  }

}

export class ECSResponsesCreateTaskSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateTaskSetRequest) {
  }

  public get taskSet(): ECSResponsesCreateTaskSetTaskSet {
    return new ECSResponsesCreateTaskSetTaskSet(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesCreateTaskSetTaskSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateTaskSetRequest) {
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.id', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.taskSetArn', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.serviceArn', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.clusterArn', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.startedBy', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.externalId', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.status', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.taskDefinition', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.computedDesiredCount', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.pendingCount', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.runningCount', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.createdAt', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.updatedAt', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.launchType', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.capacityProviderStrategy', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.platformVersion', props);
    return resource.getResponseField('taskSet.platformVersion') as unknown as string;
  }

  public get networkConfiguration(): ECSResponsesCreateTaskSetTaskSetNetworkConfiguration {
    return new ECSResponsesCreateTaskSetTaskSetNetworkConfiguration(this.__scope, this.__resources, this.__input);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.loadBalancers', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.serviceRegistries', props);
    return resource.getResponseField('taskSet.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get scale(): ECSResponsesCreateTaskSetTaskSetScale {
    return new ECSResponsesCreateTaskSetTaskSetScale(this.__scope, this.__resources, this.__input);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.stabilityStatus', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.stabilityStatusAt', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.tags', props);
    return resource.getResponseField('taskSet.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesCreateTaskSetTaskSetNetworkConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateTaskSetRequest) {
  }

  public get awsvpcConfiguration(): ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {
    return new ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateTaskSetRequest) {
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSResponsesCreateTaskSetTaskSetScale {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsCreateTaskSetRequest) {
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.scale.value', props);
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
          service: this.__input.service,
          cluster: this.__input.cluster,
          externalId: this.__input.externalId,
          taskDefinition: this.__input.taskDefinition,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          loadBalancers: this.__input.loadBalancers,
          serviceRegistries: this.__input.serviceRegistries,
          launchType: this.__input.launchType,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          platformVersion: this.__input.platformVersion,
          scale: {
            value: this.__input.scale?.value,
            unit: this.__input.scale?.unit,
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTaskSet.taskSet.scale.unit', props);
    return resource.getResponseField('taskSet.scale.unit') as unknown as string;
  }

}

export class ECSResponsesDeleteAccountSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteAccountSettingRequest) {
  }

  public get setting(): ECSResponsesDeleteAccountSettingSetting {
    return new ECSResponsesDeleteAccountSettingSetting(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeleteAccountSettingSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteAccountSettingRequest) {
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
          name: this.__input.name,
          principalArn: this.__input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountSetting.setting.name', props);
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
          name: this.__input.name,
          principalArn: this.__input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountSetting.setting.value', props);
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
          name: this.__input.name,
          principalArn: this.__input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountSetting.setting.principalArn', props);
    return resource.getResponseField('setting.principalArn') as unknown as string;
  }

}

export class ECSResponsesDeleteAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteAttributesRequest) {
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
          cluster: this.__input.cluster,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAttributes.attributes', props);
    return resource.getResponseField('attributes') as unknown as shapes.EcsAttribute[];
  }

}

export class ECSResponsesDeleteCapacityProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteCapacityProviderRequest) {
  }

  public get capacityProvider(): ECSResponsesDeleteCapacityProviderCapacityProvider {
    return new ECSResponsesDeleteCapacityProviderCapacityProvider(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeleteCapacityProviderCapacityProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteCapacityProviderRequest) {
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.capacityProviderArn', props);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.name', props);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.status', props);
    return resource.getResponseField('capacityProvider.status') as unknown as string;
  }

  public get autoScalingGroupProvider(): ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider {
    return new ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider(this.__scope, this.__resources, this.__input);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.updateStatus', props);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.updateStatusReason', props);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.tags', props);
    return resource.getResponseField('capacityProvider.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteCapacityProviderRequest) {
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.autoScalingGroupArn', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.autoScalingGroupArn') as unknown as string;
  }

  public get managedScaling(): ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling {
    return new ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling(this.__scope, this.__resources, this.__input);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedTerminationProtection', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedTerminationProtection') as unknown as string;
  }

}

export class ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteCapacityProviderRequest) {
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.status', props);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity', props);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize', props);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize', props);
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
          capacityProvider: this.__input.capacityProvider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod') as unknown as number;
  }

}

export class ECSResponsesDeleteCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteClusterRequest) {
  }

  public get cluster(): ECSResponsesDeleteClusterCluster {
    return new ECSResponsesDeleteClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeleteClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteClusterRequest) {
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.clusterArn', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.clusterName', props);
    return resource.getResponseField('cluster.clusterName') as unknown as string;
  }

  public get configuration(): ECSResponsesDeleteClusterClusterConfiguration {
    return new ECSResponsesDeleteClusterClusterConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.status', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.registeredContainerInstancesCount', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.runningTasksCount', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.pendingTasksCount', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.activeServicesCount', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.statistics', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.tags', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.settings', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.capacityProviders', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.defaultCapacityProviderStrategy', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.attachments', props);
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
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.attachmentsStatus', props);
    return resource.getResponseField('cluster.attachmentsStatus') as unknown as string;
  }

}

export class ECSResponsesDeleteClusterClusterConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteClusterRequest) {
  }

  public get executeCommandConfiguration(): ECSResponsesDeleteClusterClusterConfigurationExecuteCommandConfiguration {
    return new ECSResponsesDeleteClusterClusterConfigurationExecuteCommandConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeleteClusterClusterConfigurationExecuteCommandConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteClusterRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.configuration.executeCommandConfiguration.kmsKeyId'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.kmsKeyId',
        parameters: {
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.configuration.executeCommandConfiguration.kmsKeyId', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.kmsKeyId') as unknown as string;
  }

  public get logging(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.configuration.executeCommandConfiguration.logging'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logging',
        parameters: {
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.configuration.executeCommandConfiguration.logging', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logging') as unknown as string;
  }

  public get logConfiguration(): ECSResponsesDeleteClusterClusterConfigurationExecuteCommandConfigurationLogConfiguration {
    return new ECSResponsesDeleteClusterClusterConfigurationExecuteCommandConfigurationLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeleteClusterClusterConfigurationExecuteCommandConfigurationLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteClusterRequest) {
  }

  public get cloudWatchLogGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName',
        parameters: {
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName') as unknown as string;
  }

  public get cloudWatchEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled',
        parameters: {
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled') as unknown as boolean;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName',
        parameters: {
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName') as unknown as string;
  }

  public get s3EncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled',
        parameters: {
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled') as unknown as boolean;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix',
        parameters: {
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix') as unknown as string;
  }

}

export class ECSResponsesDeleteService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteServiceRequest) {
  }

  public get service(): ECSResponsesDeleteServiceService {
    return new ECSResponsesDeleteServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeleteServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteServiceRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.serviceArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.serviceName', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.clusterArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.loadBalancers', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.serviceRegistries', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.status', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.desiredCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.runningCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pendingCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.launchType', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.capacityProviderStrategy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.platformVersion', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.taskDefinition', props);
    return resource.getResponseField('service.taskDefinition') as unknown as string;
  }

  public get deploymentConfiguration(): ECSResponsesDeleteServiceServiceDeploymentConfiguration {
    return new ECSResponsesDeleteServiceServiceDeploymentConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.taskSets', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.deployments', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.roleArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.events', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.createdAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.placementConstraints', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.placementStrategy', props);
    return resource.getResponseField('service.placementStrategy') as unknown as shapes.EcsPlacementStrategy[];
  }

  public get networkConfiguration(): ECSResponsesDeleteServiceServiceNetworkConfiguration {
    return new ECSResponsesDeleteServiceServiceNetworkConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.healthCheckGracePeriodSeconds', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.schedulingStrategy', props);
    return resource.getResponseField('service.schedulingStrategy') as unknown as string;
  }

  public get deploymentController(): ECSResponsesDeleteServiceServiceDeploymentController {
    return new ECSResponsesDeleteServiceServiceDeploymentController(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.tags', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.createdBy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.enableECSManagedTags', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.propagateTags', props);
    return resource.getResponseField('service.propagateTags') as unknown as string;
  }

  public get enableExecuteCommand(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeleteService.service.enableExecuteCommand'),
        outputPath: 'service.enableExecuteCommand',
        parameters: {
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.enableExecuteCommand', props);
    return resource.getResponseField('service.enableExecuteCommand') as unknown as boolean;
  }

}

export class ECSResponsesDeleteServiceServiceDeploymentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteServiceRequest) {
  }

  public get deploymentCircuitBreaker(): ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker {
    return new ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.deploymentConfiguration.maximumPercent', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.deploymentConfiguration.minimumHealthyPercent', props);
    return resource.getResponseField('service.deploymentConfiguration.minimumHealthyPercent') as unknown as number;
  }

}

export class ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteServiceRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.deploymentConfiguration.deploymentCircuitBreaker.enable', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.deploymentConfiguration.deploymentCircuitBreaker.rollback', props);
    return resource.getResponseField('service.deploymentConfiguration.deploymentCircuitBreaker.rollback') as unknown as boolean;
  }

}

export class ECSResponsesDeleteServiceServiceNetworkConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteServiceRequest) {
  }

  public get awsvpcConfiguration(): ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration {
    return new ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteServiceRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.networkConfiguration.awsvpcConfiguration.subnets', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.networkConfiguration.awsvpcConfiguration.securityGroups', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSResponsesDeleteServiceServiceDeploymentController {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteServiceRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.deploymentController.type', props);
    return resource.getResponseField('service.deploymentController.type') as unknown as string;
  }

}

export class ECSResponsesDeleteTaskSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteTaskSetRequest) {
  }

  public get taskSet(): ECSResponsesDeleteTaskSetTaskSet {
    return new ECSResponsesDeleteTaskSetTaskSet(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeleteTaskSetTaskSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteTaskSetRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.id', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.taskSetArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.serviceArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.clusterArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.startedBy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.externalId', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.status', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.taskDefinition', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.computedDesiredCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.pendingCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.runningCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.createdAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.updatedAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.launchType', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.capacityProviderStrategy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.platformVersion', props);
    return resource.getResponseField('taskSet.platformVersion') as unknown as string;
  }

  public get networkConfiguration(): ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration {
    return new ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.loadBalancers', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.serviceRegistries', props);
    return resource.getResponseField('taskSet.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get scale(): ECSResponsesDeleteTaskSetTaskSetScale {
    return new ECSResponsesDeleteTaskSetTaskSetScale(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.stabilityStatus', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.stabilityStatusAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.tags', props);
    return resource.getResponseField('taskSet.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteTaskSetRequest) {
  }

  public get awsvpcConfiguration(): ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {
    return new ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteTaskSetRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSResponsesDeleteTaskSetTaskSetScale {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeleteTaskSetRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.scale.value', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTaskSet.taskSet.scale.unit', props);
    return resource.getResponseField('taskSet.scale.unit') as unknown as string;
  }

}

export class ECSResponsesDeregisterContainerInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeregisterContainerInstanceRequest) {
  }

  public get containerInstance(): ECSResponsesDeregisterContainerInstanceContainerInstance {
    return new ECSResponsesDeregisterContainerInstanceContainerInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeregisterContainerInstanceContainerInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeregisterContainerInstanceRequest) {
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.containerInstanceArn', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.ec2InstanceId', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.capacityProviderName', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.version', props);
    return resource.getResponseField('containerInstance.version') as unknown as number;
  }

  public get versionInfo(): ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo {
    return new ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.remainingResources', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.registeredResources', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.status', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.statusReason', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.agentConnected', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.runningTasksCount', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.pendingTasksCount', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.agentUpdateStatus', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.attributes', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.registeredAt', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.attachments', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.tags', props);
    return resource.getResponseField('containerInstance.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeregisterContainerInstanceRequest) {
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.versionInfo.agentVersion', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.versionInfo.agentHash', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterContainerInstance.containerInstance.versionInfo.dockerVersion', props);
    return resource.getResponseField('containerInstance.versionInfo.dockerVersion') as unknown as string;
  }

}

export class ECSResponsesDeregisterTaskDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeregisterTaskDefinitionRequest) {
  }

  public get taskDefinition(): ECSResponsesDeregisterTaskDefinitionTaskDefinition {
    return new ECSResponsesDeregisterTaskDefinitionTaskDefinition(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeregisterTaskDefinitionTaskDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeregisterTaskDefinitionRequest) {
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.taskDefinitionArn', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.containerDefinitions', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.family', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.taskRoleArn', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.executionRoleArn', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.networkMode', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.revision', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.volumes', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.status', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.requiresAttributes', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.placementConstraints', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.compatibilities', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.requiresCompatibilities', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.cpu', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.memory', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.inferenceAccelerators', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.pidMode', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.ipcMode', props);
    return resource.getResponseField('taskDefinition.ipcMode') as unknown as string;
  }

  public get proxyConfiguration(): ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration {
    return new ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get registeredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.registeredAt'),
        outputPath: 'taskDefinition.registeredAt',
        parameters: {
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.registeredAt', props);
    return resource.getResponseField('taskDefinition.registeredAt') as unknown as string;
  }

  public get deregisteredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.deregisteredAt'),
        outputPath: 'taskDefinition.deregisteredAt',
        parameters: {
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.deregisteredAt', props);
    return resource.getResponseField('taskDefinition.deregisteredAt') as unknown as string;
  }

  public get registeredBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.registeredBy'),
        outputPath: 'taskDefinition.registeredBy',
        parameters: {
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.registeredBy', props);
    return resource.getResponseField('taskDefinition.registeredBy') as unknown as string;
  }

  public get ephemeralStorage(): ECSResponsesDeregisterTaskDefinitionTaskDefinitionEphemeralStorage {
    return new ECSResponsesDeregisterTaskDefinitionTaskDefinitionEphemeralStorage(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeregisterTaskDefinitionRequest) {
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.proxyConfiguration.type', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.proxyConfiguration.containerName', props);
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
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.proxyConfiguration.properties', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.properties') as unknown as shapes.EcsKeyValuePair[];
  }

}

export class ECSResponsesDeregisterTaskDefinitionTaskDefinitionEphemeralStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDeregisterTaskDefinitionRequest) {
  }

  public get sizeInGiB(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DeregisterTaskDefinition.taskDefinition.ephemeralStorage.sizeInGiB'),
        outputPath: 'taskDefinition.ephemeralStorage.sizeInGiB',
        parameters: {
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskDefinition.taskDefinition.ephemeralStorage.sizeInGiB', props);
    return resource.getResponseField('taskDefinition.ephemeralStorage.sizeInGiB') as unknown as number;
  }

}

export class ECSResponsesDescribeCapacityProviders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeCapacityProvidersRequest) {
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
          capacityProviders: this.__input.capacityProviders,
          include: this.__input.include,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCapacityProviders.capacityProviders', props);
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
          capacityProviders: this.__input.capacityProviders,
          include: this.__input.include,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCapacityProviders.failures', props);
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
          capacityProviders: this.__input.capacityProviders,
          include: this.__input.include,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCapacityProviders.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSResponsesDescribeClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeClustersRequest) {
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
          clusters: this.__input.clusters,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusters.clusters', props);
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
          clusters: this.__input.clusters,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusters.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSResponsesDescribeContainerInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeContainerInstancesRequest) {
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
          cluster: this.__input.cluster,
          containerInstances: this.__input.containerInstances,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContainerInstances.containerInstances', props);
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
          cluster: this.__input.cluster,
          containerInstances: this.__input.containerInstances,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContainerInstances.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSResponsesDescribeServices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeServicesRequest) {
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
          cluster: this.__input.cluster,
          services: this.__input.services,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServices.services', props);
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
          cluster: this.__input.cluster,
          services: this.__input.services,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServices.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSResponsesDescribeTaskDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeTaskDefinitionRequest) {
  }

  public get taskDefinition(): ECSResponsesDescribeTaskDefinitionTaskDefinition {
    return new ECSResponsesDescribeTaskDefinitionTaskDefinition(this.__scope, this.__resources, this.__input);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesDescribeTaskDefinitionTaskDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeTaskDefinitionRequest) {
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.taskDefinitionArn', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.containerDefinitions', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.family', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.taskRoleArn', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.executionRoleArn', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.networkMode', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.revision', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.volumes', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.status', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.requiresAttributes', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.placementConstraints', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.compatibilities', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.requiresCompatibilities', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.cpu', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.memory', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.inferenceAccelerators', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.pidMode', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.ipcMode', props);
    return resource.getResponseField('taskDefinition.ipcMode') as unknown as string;
  }

  public get proxyConfiguration(): ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration {
    return new ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get registeredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.registeredAt'),
        outputPath: 'taskDefinition.registeredAt',
        parameters: {
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.registeredAt', props);
    return resource.getResponseField('taskDefinition.registeredAt') as unknown as string;
  }

  public get deregisteredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.deregisteredAt'),
        outputPath: 'taskDefinition.deregisteredAt',
        parameters: {
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.deregisteredAt', props);
    return resource.getResponseField('taskDefinition.deregisteredAt') as unknown as string;
  }

  public get registeredBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.registeredBy'),
        outputPath: 'taskDefinition.registeredBy',
        parameters: {
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.registeredBy', props);
    return resource.getResponseField('taskDefinition.registeredBy') as unknown as string;
  }

  public get ephemeralStorage(): ECSResponsesDescribeTaskDefinitionTaskDefinitionEphemeralStorage {
    return new ECSResponsesDescribeTaskDefinitionTaskDefinitionEphemeralStorage(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeTaskDefinitionRequest) {
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.proxyConfiguration.type', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.proxyConfiguration.containerName', props);
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
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.proxyConfiguration.properties', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.properties') as unknown as shapes.EcsKeyValuePair[];
  }

}

export class ECSResponsesDescribeTaskDefinitionTaskDefinitionEphemeralStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeTaskDefinitionRequest) {
  }

  public get sizeInGiB(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.DescribeTaskDefinition.taskDefinition.ephemeralStorage.sizeInGiB'),
        outputPath: 'taskDefinition.ephemeralStorage.sizeInGiB',
        parameters: {
          taskDefinition: this.__input.taskDefinition,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskDefinition.taskDefinition.ephemeralStorage.sizeInGiB', props);
    return resource.getResponseField('taskDefinition.ephemeralStorage.sizeInGiB') as unknown as number;
  }

}

export class ECSResponsesDescribeTaskSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeTaskSetsRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSets: this.__input.taskSets,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskSets.taskSets', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSets: this.__input.taskSets,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskSets.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSResponsesDescribeTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDescribeTasksRequest) {
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
          cluster: this.__input.cluster,
          tasks: this.__input.tasks,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTasks.tasks', props);
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
          cluster: this.__input.cluster,
          tasks: this.__input.tasks,
          include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTasks.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSResponsesDiscoverPollEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsDiscoverPollEndpointRequest) {
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
          containerInstance: this.__input.containerInstance,
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverPollEndpoint.endpoint', props);
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
          containerInstance: this.__input.containerInstance,
          cluster: this.__input.cluster,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverPollEndpoint.telemetryEndpoint', props);
    return resource.getResponseField('telemetryEndpoint') as unknown as string;
  }

}

export class ECSResponsesExecuteCommand {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsExecuteCommandRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeCommand',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ExecuteCommand.clusterArn'),
        outputPath: 'clusterArn',
        parameters: {
          cluster: this.__input.cluster,
          container: this.__input.container,
          command: this.__input.command,
          interactive: this.__input.interactive,
          task: this.__input.task,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteCommand.clusterArn', props);
    return resource.getResponseField('clusterArn') as unknown as string;
  }

  public get containerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeCommand',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ExecuteCommand.containerArn'),
        outputPath: 'containerArn',
        parameters: {
          cluster: this.__input.cluster,
          container: this.__input.container,
          command: this.__input.command,
          interactive: this.__input.interactive,
          task: this.__input.task,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteCommand.containerArn', props);
    return resource.getResponseField('containerArn') as unknown as string;
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeCommand',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ExecuteCommand.containerName'),
        outputPath: 'containerName',
        parameters: {
          cluster: this.__input.cluster,
          container: this.__input.container,
          command: this.__input.command,
          interactive: this.__input.interactive,
          task: this.__input.task,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteCommand.containerName', props);
    return resource.getResponseField('containerName') as unknown as string;
  }

  public get interactive(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeCommand',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ExecuteCommand.interactive'),
        outputPath: 'interactive',
        parameters: {
          cluster: this.__input.cluster,
          container: this.__input.container,
          command: this.__input.command,
          interactive: this.__input.interactive,
          task: this.__input.task,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteCommand.interactive', props);
    return resource.getResponseField('interactive') as unknown as boolean;
  }

  public get session(): ECSResponsesExecuteCommandSession {
    return new ECSResponsesExecuteCommandSession(this.__scope, this.__resources, this.__input);
  }

  public get taskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeCommand',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ExecuteCommand.taskArn'),
        outputPath: 'taskArn',
        parameters: {
          cluster: this.__input.cluster,
          container: this.__input.container,
          command: this.__input.command,
          interactive: this.__input.interactive,
          task: this.__input.task,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteCommand.taskArn', props);
    return resource.getResponseField('taskArn') as unknown as string;
  }

}

export class ECSResponsesExecuteCommandSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsExecuteCommandRequest) {
  }

  public get sessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeCommand',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ExecuteCommand.session.sessionId'),
        outputPath: 'session.sessionId',
        parameters: {
          cluster: this.__input.cluster,
          container: this.__input.container,
          command: this.__input.command,
          interactive: this.__input.interactive,
          task: this.__input.task,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteCommand.session.sessionId', props);
    return resource.getResponseField('session.sessionId') as unknown as string;
  }

  public get streamUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeCommand',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ExecuteCommand.session.streamUrl'),
        outputPath: 'session.streamUrl',
        parameters: {
          cluster: this.__input.cluster,
          container: this.__input.container,
          command: this.__input.command,
          interactive: this.__input.interactive,
          task: this.__input.task,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteCommand.session.streamUrl', props);
    return resource.getResponseField('session.streamUrl') as unknown as string;
  }

  public get tokenValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeCommand',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.ExecuteCommand.session.tokenValue'),
        outputPath: 'session.tokenValue',
        parameters: {
          cluster: this.__input.cluster,
          container: this.__input.container,
          command: this.__input.command,
          interactive: this.__input.interactive,
          task: this.__input.task,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteCommand.session.tokenValue', props);
    return resource.getResponseField('session.tokenValue') as unknown as string;
  }

}

export class ECSResponsesListAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsListAccountSettingsRequest) {
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
          name: this.__input.name,
          value: this.__input.value,
          principalArn: this.__input.principalArn,
          effectiveSettings: this.__input.effectiveSettings,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountSettings.settings', props);
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
          name: this.__input.name,
          value: this.__input.value,
          principalArn: this.__input.principalArn,
          effectiveSettings: this.__input.effectiveSettings,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountSettings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSResponsesListAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsListAttributesRequest) {
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
          cluster: this.__input.cluster,
          targetType: this.__input.targetType,
          attributeName: this.__input.attributeName,
          attributeValue: this.__input.attributeValue,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttributes.attributes', props);
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
          cluster: this.__input.cluster,
          targetType: this.__input.targetType,
          attributeName: this.__input.attributeName,
          attributeValue: this.__input.attributeValue,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttributes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSResponsesListClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsListClustersRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.clusterArns', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSResponsesListContainerInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsListContainerInstancesRequest) {
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
          cluster: this.__input.cluster,
          filter: this.__input.filter,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContainerInstances.containerInstanceArns', props);
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
          cluster: this.__input.cluster,
          filter: this.__input.filter,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContainerInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSResponsesListServices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsListServicesRequest) {
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
          cluster: this.__input.cluster,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          launchType: this.__input.launchType,
          schedulingStrategy: this.__input.schedulingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.serviceArns', props);
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
          cluster: this.__input.cluster,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          launchType: this.__input.launchType,
          schedulingStrategy: this.__input.schedulingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesListTaskDefinitionFamilies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsListTaskDefinitionFamiliesRequest) {
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
          familyPrefix: this.__input.familyPrefix,
          status: this.__input.status,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTaskDefinitionFamilies.families', props);
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
          familyPrefix: this.__input.familyPrefix,
          status: this.__input.status,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTaskDefinitionFamilies.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSResponsesListTaskDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsListTaskDefinitionsRequest) {
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
          familyPrefix: this.__input.familyPrefix,
          status: this.__input.status,
          sort: this.__input.sort,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTaskDefinitions.taskDefinitionArns', props);
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
          familyPrefix: this.__input.familyPrefix,
          status: this.__input.status,
          sort: this.__input.sort,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTaskDefinitions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSResponsesListTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsListTasksRequest) {
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          family: this.__input.family,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          startedBy: this.__input.startedBy,
          serviceName: this.__input.serviceName,
          desiredStatus: this.__input.desiredStatus,
          launchType: this.__input.launchType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTasks.taskArns', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
          family: this.__input.family,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          startedBy: this.__input.startedBy,
          serviceName: this.__input.serviceName,
          desiredStatus: this.__input.desiredStatus,
          launchType: this.__input.launchType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECSResponsesPutAccountSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutAccountSettingRequest) {
  }

  public get setting(): ECSResponsesPutAccountSettingSetting {
    return new ECSResponsesPutAccountSettingSetting(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesPutAccountSettingSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutAccountSettingRequest) {
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
          name: this.__input.name,
          value: this.__input.value,
          principalArn: this.__input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAccountSetting.setting.name', props);
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
          name: this.__input.name,
          value: this.__input.value,
          principalArn: this.__input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAccountSetting.setting.value', props);
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
          name: this.__input.name,
          value: this.__input.value,
          principalArn: this.__input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAccountSetting.setting.principalArn', props);
    return resource.getResponseField('setting.principalArn') as unknown as string;
  }

}

export class ECSResponsesPutAccountSettingDefault {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutAccountSettingDefaultRequest) {
  }

  public get setting(): ECSResponsesPutAccountSettingDefaultSetting {
    return new ECSResponsesPutAccountSettingDefaultSetting(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesPutAccountSettingDefaultSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutAccountSettingDefaultRequest) {
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
          name: this.__input.name,
          value: this.__input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAccountSettingDefault.setting.name', props);
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
          name: this.__input.name,
          value: this.__input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAccountSettingDefault.setting.value', props);
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
          name: this.__input.name,
          value: this.__input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAccountSettingDefault.setting.principalArn', props);
    return resource.getResponseField('setting.principalArn') as unknown as string;
  }

}

export class ECSResponsesPutAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutAttributesRequest) {
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
          cluster: this.__input.cluster,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAttributes.attributes', props);
    return resource.getResponseField('attributes') as unknown as shapes.EcsAttribute[];
  }

}

export class ECSResponsesPutClusterCapacityProviders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutClusterCapacityProvidersRequest) {
  }

  public get cluster(): ECSResponsesPutClusterCapacityProvidersCluster {
    return new ECSResponsesPutClusterCapacityProvidersCluster(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesPutClusterCapacityProvidersCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutClusterCapacityProvidersRequest) {
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.clusterArn', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.clusterName', props);
    return resource.getResponseField('cluster.clusterName') as unknown as string;
  }

  public get configuration(): ECSResponsesPutClusterCapacityProvidersClusterConfiguration {
    return new ECSResponsesPutClusterCapacityProvidersClusterConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.status', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.registeredContainerInstancesCount', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.runningTasksCount', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.pendingTasksCount', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.activeServicesCount', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.statistics', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.tags', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.settings', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.capacityProviders', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.defaultCapacityProviderStrategy', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.attachments', props);
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
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.attachmentsStatus', props);
    return resource.getResponseField('cluster.attachmentsStatus') as unknown as string;
  }

}

export class ECSResponsesPutClusterCapacityProvidersClusterConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutClusterCapacityProvidersRequest) {
  }

  public get executeCommandConfiguration(): ECSResponsesPutClusterCapacityProvidersClusterConfigurationExecuteCommandConfiguration {
    return new ECSResponsesPutClusterCapacityProvidersClusterConfigurationExecuteCommandConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesPutClusterCapacityProvidersClusterConfigurationExecuteCommandConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutClusterCapacityProvidersRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.kmsKeyId'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.kmsKeyId',
        parameters: {
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.kmsKeyId', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.kmsKeyId') as unknown as string;
  }

  public get logging(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logging'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logging',
        parameters: {
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logging', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logging') as unknown as string;
  }

  public get logConfiguration(): ECSResponsesPutClusterCapacityProvidersClusterConfigurationExecuteCommandConfigurationLogConfiguration {
    return new ECSResponsesPutClusterCapacityProvidersClusterConfigurationExecuteCommandConfigurationLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesPutClusterCapacityProvidersClusterConfigurationExecuteCommandConfigurationLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsPutClusterCapacityProvidersRequest) {
  }

  public get cloudWatchLogGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName',
        parameters: {
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName') as unknown as string;
  }

  public get cloudWatchEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled',
        parameters: {
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled') as unknown as boolean;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName',
        parameters: {
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName') as unknown as string;
  }

  public get s3EncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled',
        parameters: {
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled') as unknown as boolean;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClusterCapacityProviders',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix',
        parameters: {
          cluster: this.__input.cluster,
          capacityProviders: this.__input.capacityProviders,
          defaultCapacityProviderStrategy: this.__input.defaultCapacityProviderStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClusterCapacityProviders.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix') as unknown as string;
  }

}

export class ECSResponsesRegisterContainerInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsRegisterContainerInstanceRequest) {
  }

  public get containerInstance(): ECSResponsesRegisterContainerInstanceContainerInstance {
    return new ECSResponsesRegisterContainerInstanceContainerInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesRegisterContainerInstanceContainerInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsRegisterContainerInstanceRequest) {
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.containerInstanceArn', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.ec2InstanceId', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.capacityProviderName', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.version', props);
    return resource.getResponseField('containerInstance.version') as unknown as number;
  }

  public get versionInfo(): ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo {
    return new ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.remainingResources', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.registeredResources', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.status', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.statusReason', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.agentConnected', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.runningTasksCount', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.pendingTasksCount', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.agentUpdateStatus', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.attributes', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.registeredAt', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.attachments', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.tags', props);
    return resource.getResponseField('containerInstance.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsRegisterContainerInstanceRequest) {
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.versionInfo.agentVersion', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.versionInfo.agentHash', props);
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
          cluster: this.__input.cluster,
          instanceIdentityDocument: this.__input.instanceIdentityDocument,
          instanceIdentityDocumentSignature: this.__input.instanceIdentityDocumentSignature,
          totalResources: this.__input.totalResources,
          versionInfo: {
            agentVersion: this.__input.versionInfo?.agentVersion,
            agentHash: this.__input.versionInfo?.agentHash,
            dockerVersion: this.__input.versionInfo?.dockerVersion,
          },
          containerInstanceArn: this.__input.containerInstanceArn,
          attributes: this.__input.attributes,
          platformDevices: this.__input.platformDevices,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerInstance.containerInstance.versionInfo.dockerVersion', props);
    return resource.getResponseField('containerInstance.versionInfo.dockerVersion') as unknown as string;
  }

}

export class ECSResponsesRegisterTaskDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsRegisterTaskDefinitionRequest) {
  }

  public get taskDefinition(): ECSResponsesRegisterTaskDefinitionTaskDefinition {
    return new ECSResponsesRegisterTaskDefinitionTaskDefinition(this.__scope, this.__resources, this.__input);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesRegisterTaskDefinitionTaskDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsRegisterTaskDefinitionRequest) {
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.taskDefinitionArn', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.containerDefinitions', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.family', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.taskRoleArn', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.executionRoleArn', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.networkMode', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.revision', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.volumes', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.status', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.requiresAttributes', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.placementConstraints', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.compatibilities', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.requiresCompatibilities', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.cpu', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.memory', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.inferenceAccelerators', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.pidMode', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.ipcMode', props);
    return resource.getResponseField('taskDefinition.ipcMode') as unknown as string;
  }

  public get proxyConfiguration(): ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration {
    return new ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get registeredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.registeredAt'),
        outputPath: 'taskDefinition.registeredAt',
        parameters: {
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.registeredAt', props);
    return resource.getResponseField('taskDefinition.registeredAt') as unknown as string;
  }

  public get deregisteredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.deregisteredAt'),
        outputPath: 'taskDefinition.deregisteredAt',
        parameters: {
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.deregisteredAt', props);
    return resource.getResponseField('taskDefinition.deregisteredAt') as unknown as string;
  }

  public get registeredBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.registeredBy'),
        outputPath: 'taskDefinition.registeredBy',
        parameters: {
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.registeredBy', props);
    return resource.getResponseField('taskDefinition.registeredBy') as unknown as string;
  }

  public get ephemeralStorage(): ECSResponsesRegisterTaskDefinitionTaskDefinitionEphemeralStorage {
    return new ECSResponsesRegisterTaskDefinitionTaskDefinitionEphemeralStorage(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsRegisterTaskDefinitionRequest) {
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.proxyConfiguration.type', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.proxyConfiguration.containerName', props);
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
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.proxyConfiguration.properties', props);
    return resource.getResponseField('taskDefinition.proxyConfiguration.properties') as unknown as shapes.EcsKeyValuePair[];
  }

}

export class ECSResponsesRegisterTaskDefinitionTaskDefinitionEphemeralStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsRegisterTaskDefinitionRequest) {
  }

  public get sizeInGiB(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskDefinition',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.RegisterTaskDefinition.taskDefinition.ephemeralStorage.sizeInGiB'),
        outputPath: 'taskDefinition.ephemeralStorage.sizeInGiB',
        parameters: {
          family: this.__input.family,
          taskRoleArn: this.__input.taskRoleArn,
          executionRoleArn: this.__input.executionRoleArn,
          networkMode: this.__input.networkMode,
          containerDefinitions: this.__input.containerDefinitions,
          volumes: this.__input.volumes,
          placementConstraints: this.__input.placementConstraints,
          requiresCompatibilities: this.__input.requiresCompatibilities,
          cpu: this.__input.cpu,
          memory: this.__input.memory,
          tags: this.__input.tags,
          pidMode: this.__input.pidMode,
          ipcMode: this.__input.ipcMode,
          proxyConfiguration: {
            type: this.__input.proxyConfiguration?.type,
            containerName: this.__input.proxyConfiguration?.containerName,
            properties: this.__input.proxyConfiguration?.properties,
          },
          inferenceAccelerators: this.__input.inferenceAccelerators,
          ephemeralStorage: {
            sizeInGiB: this.__input.ephemeralStorage?.sizeInGiB,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskDefinition.taskDefinition.ephemeralStorage.sizeInGiB', props);
    return resource.getResponseField('taskDefinition.ephemeralStorage.sizeInGiB') as unknown as number;
  }

}

export class ECSResponsesRunTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsRunTaskRequest) {
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
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          cluster: this.__input.cluster,
          count: this.__input.count,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
          group: this.__input.group,
          launchType: this.__input.launchType,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          overrides: {
            containerOverrides: this.__input.overrides?.containerOverrides,
            cpu: this.__input.overrides?.cpu,
            inferenceAcceleratorOverrides: this.__input.overrides?.inferenceAcceleratorOverrides,
            executionRoleArn: this.__input.overrides?.executionRoleArn,
            memory: this.__input.overrides?.memory,
            taskRoleArn: this.__input.overrides?.taskRoleArn,
            ephemeralStorage: {
              sizeInGiB: this.__input.overrides?.ephemeralStorage?.sizeInGiB,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          propagateTags: this.__input.propagateTags,
          referenceId: this.__input.referenceId,
          startedBy: this.__input.startedBy,
          tags: this.__input.tags,
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RunTask.tasks', props);
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
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          cluster: this.__input.cluster,
          count: this.__input.count,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
          group: this.__input.group,
          launchType: this.__input.launchType,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          overrides: {
            containerOverrides: this.__input.overrides?.containerOverrides,
            cpu: this.__input.overrides?.cpu,
            inferenceAcceleratorOverrides: this.__input.overrides?.inferenceAcceleratorOverrides,
            executionRoleArn: this.__input.overrides?.executionRoleArn,
            memory: this.__input.overrides?.memory,
            taskRoleArn: this.__input.overrides?.taskRoleArn,
            ephemeralStorage: {
              sizeInGiB: this.__input.overrides?.ephemeralStorage?.sizeInGiB,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          propagateTags: this.__input.propagateTags,
          referenceId: this.__input.referenceId,
          startedBy: this.__input.startedBy,
          tags: this.__input.tags,
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RunTask.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSResponsesStartTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsStartTaskRequest) {
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
          cluster: this.__input.cluster,
          containerInstances: this.__input.containerInstances,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
          group: this.__input.group,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          overrides: {
            containerOverrides: this.__input.overrides?.containerOverrides,
            cpu: this.__input.overrides?.cpu,
            inferenceAcceleratorOverrides: this.__input.overrides?.inferenceAcceleratorOverrides,
            executionRoleArn: this.__input.overrides?.executionRoleArn,
            memory: this.__input.overrides?.memory,
            taskRoleArn: this.__input.overrides?.taskRoleArn,
            ephemeralStorage: {
              sizeInGiB: this.__input.overrides?.ephemeralStorage?.sizeInGiB,
            },
          },
          propagateTags: this.__input.propagateTags,
          referenceId: this.__input.referenceId,
          startedBy: this.__input.startedBy,
          tags: this.__input.tags,
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTask.tasks', props);
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
          cluster: this.__input.cluster,
          containerInstances: this.__input.containerInstances,
          enableECSManagedTags: this.__input.enableECSManagedTags,
          enableExecuteCommand: this.__input.enableExecuteCommand,
          group: this.__input.group,
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          overrides: {
            containerOverrides: this.__input.overrides?.containerOverrides,
            cpu: this.__input.overrides?.cpu,
            inferenceAcceleratorOverrides: this.__input.overrides?.inferenceAcceleratorOverrides,
            executionRoleArn: this.__input.overrides?.executionRoleArn,
            memory: this.__input.overrides?.memory,
            taskRoleArn: this.__input.overrides?.taskRoleArn,
            ephemeralStorage: {
              sizeInGiB: this.__input.overrides?.ephemeralStorage?.sizeInGiB,
            },
          },
          propagateTags: this.__input.propagateTags,
          referenceId: this.__input.referenceId,
          startedBy: this.__input.startedBy,
          tags: this.__input.tags,
          taskDefinition: this.__input.taskDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTask.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSResponsesStopTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsStopTaskRequest) {
  }

  public get task(): ECSResponsesStopTaskTask {
    return new ECSResponsesStopTaskTask(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesStopTaskTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsStopTaskRequest) {
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.attachments', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.attributes', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.availabilityZone', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.capacityProviderName', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.clusterArn', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.connectivity', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.connectivityAt', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.containerInstanceArn', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.containers', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.cpu', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.createdAt', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.desiredStatus', props);
    return resource.getResponseField('task.desiredStatus') as unknown as string;
  }

  public get enableExecuteCommand(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.enableExecuteCommand'),
        outputPath: 'task.enableExecuteCommand',
        parameters: {
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.enableExecuteCommand', props);
    return resource.getResponseField('task.enableExecuteCommand') as unknown as boolean;
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.executionStoppedAt', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.group', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.healthStatus', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.inferenceAccelerators', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.lastStatus', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.launchType', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.memory', props);
    return resource.getResponseField('task.memory') as unknown as string;
  }

  public get overrides(): ECSResponsesStopTaskTaskOverrides {
    return new ECSResponsesStopTaskTaskOverrides(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.platformVersion', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.pullStartedAt', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.pullStoppedAt', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.startedAt', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.startedBy', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.stopCode', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.stoppedAt', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.stoppedReason', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.stoppingAt', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.tags', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.taskArn', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.taskDefinitionArn', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.version', props);
    return resource.getResponseField('task.version') as unknown as number;
  }

  public get ephemeralStorage(): ECSResponsesStopTaskTaskEphemeralStorage {
    return new ECSResponsesStopTaskTaskEphemeralStorage(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesStopTaskTaskOverrides {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsStopTaskRequest) {
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.overrides.containerOverrides', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.overrides.cpu', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.overrides.inferenceAcceleratorOverrides', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.overrides.executionRoleArn', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.overrides.memory', props);
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.overrides.taskRoleArn', props);
    return resource.getResponseField('task.overrides.taskRoleArn') as unknown as string;
  }

  public get ephemeralStorage(): ECSResponsesStopTaskTaskOverridesEphemeralStorage {
    return new ECSResponsesStopTaskTaskOverridesEphemeralStorage(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesStopTaskTaskOverridesEphemeralStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsStopTaskRequest) {
  }

  public get sizeInGiB(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.overrides.ephemeralStorage.sizeInGiB'),
        outputPath: 'task.overrides.ephemeralStorage.sizeInGiB',
        parameters: {
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.overrides.ephemeralStorage.sizeInGiB', props);
    return resource.getResponseField('task.overrides.ephemeralStorage.sizeInGiB') as unknown as number;
  }

}

export class ECSResponsesStopTaskTaskEphemeralStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsStopTaskRequest) {
  }

  public get sizeInGiB(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTask',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.StopTask.task.ephemeralStorage.sizeInGiB'),
        outputPath: 'task.ephemeralStorage.sizeInGiB',
        parameters: {
          cluster: this.__input.cluster,
          task: this.__input.task,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTask.task.ephemeralStorage.sizeInGiB', props);
    return resource.getResponseField('task.ephemeralStorage.sizeInGiB') as unknown as number;
  }

}

export class ECSResponsesSubmitAttachmentStateChanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsSubmitAttachmentStateChangesRequest) {
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
          cluster: this.__input.cluster,
          attachments: this.__input.attachments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SubmitAttachmentStateChanges.acknowledgment', props);
    return resource.getResponseField('acknowledgment') as unknown as string;
  }

}

export class ECSResponsesSubmitContainerStateChange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsSubmitContainerStateChangeRequest) {
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          containerName: this.__input.containerName,
          runtimeId: this.__input.runtimeId,
          status: this.__input.status,
          exitCode: this.__input.exitCode,
          reason: this.__input.reason,
          networkBindings: this.__input.networkBindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SubmitContainerStateChange.acknowledgment', props);
    return resource.getResponseField('acknowledgment') as unknown as string;
  }

}

export class ECSResponsesSubmitTaskStateChange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsSubmitTaskStateChangeRequest) {
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
          cluster: this.__input.cluster,
          task: this.__input.task,
          status: this.__input.status,
          reason: this.__input.reason,
          containers: this.__input.containers,
          attachments: this.__input.attachments,
          managedAgents: this.__input.managedAgents,
          pullStartedAt: this.__input.pullStartedAt,
          pullStoppedAt: this.__input.pullStoppedAt,
          executionStoppedAt: this.__input.executionStoppedAt,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SubmitTaskStateChange.acknowledgment', props);
    return resource.getResponseField('acknowledgment') as unknown as string;
  }

}

export class ECSResponsesUpdateCapacityProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateCapacityProviderRequest) {
  }

  public get capacityProvider(): ECSResponsesUpdateCapacityProviderCapacityProvider {
    return new ECSResponsesUpdateCapacityProviderCapacityProvider(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateCapacityProviderCapacityProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateCapacityProviderRequest) {
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.capacityProviderArn', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.name', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.status', props);
    return resource.getResponseField('capacityProvider.status') as unknown as string;
  }

  public get autoScalingGroupProvider(): ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider {
    return new ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.updateStatus', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.updateStatusReason', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.tags', props);
    return resource.getResponseField('capacityProvider.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateCapacityProviderRequest) {
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.autoScalingGroupArn', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.autoScalingGroupArn') as unknown as string;
  }

  public get managedScaling(): ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling {
    return new ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedTerminationProtection', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedTerminationProtection') as unknown as string;
  }

}

export class ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateCapacityProviderRequest) {
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.status', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.targetCapacity', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.minimumScalingStepSize', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.maximumScalingStepSize', props);
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
          name: this.__input.name,
          autoScalingGroupProvider: {
            managedScaling: {
              status: this.__input.autoScalingGroupProvider.managedScaling?.status,
              targetCapacity: this.__input.autoScalingGroupProvider.managedScaling?.targetCapacity,
              minimumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.minimumScalingStepSize,
              maximumScalingStepSize: this.__input.autoScalingGroupProvider.managedScaling?.maximumScalingStepSize,
              instanceWarmupPeriod: this.__input.autoScalingGroupProvider.managedScaling?.instanceWarmupPeriod,
            },
            managedTerminationProtection: this.__input.autoScalingGroupProvider.managedTerminationProtection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCapacityProvider.capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod', props);
    return resource.getResponseField('capacityProvider.autoScalingGroupProvider.managedScaling.instanceWarmupPeriod') as unknown as number;
  }

}

export class ECSResponsesUpdateCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterRequest) {
  }

  public get cluster(): ECSResponsesUpdateClusterCluster {
    return new ECSResponsesUpdateClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.clusterArn'),
        outputPath: 'cluster.clusterArn',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.clusterArn', props);
    return resource.getResponseField('cluster.clusterArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.clusterName'),
        outputPath: 'cluster.clusterName',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.clusterName', props);
    return resource.getResponseField('cluster.clusterName') as unknown as string;
  }

  public get configuration(): ECSResponsesUpdateClusterClusterConfiguration {
    return new ECSResponsesUpdateClusterClusterConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.status'),
        outputPath: 'cluster.status',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get registeredContainerInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.registeredContainerInstancesCount'),
        outputPath: 'cluster.registeredContainerInstancesCount',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.registeredContainerInstancesCount', props);
    return resource.getResponseField('cluster.registeredContainerInstancesCount') as unknown as number;
  }

  public get runningTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.runningTasksCount'),
        outputPath: 'cluster.runningTasksCount',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.runningTasksCount', props);
    return resource.getResponseField('cluster.runningTasksCount') as unknown as number;
  }

  public get pendingTasksCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.pendingTasksCount'),
        outputPath: 'cluster.pendingTasksCount',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.pendingTasksCount', props);
    return resource.getResponseField('cluster.pendingTasksCount') as unknown as number;
  }

  public get activeServicesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.activeServicesCount'),
        outputPath: 'cluster.activeServicesCount',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.activeServicesCount', props);
    return resource.getResponseField('cluster.activeServicesCount') as unknown as number;
  }

  public get statistics(): shapes.EcsKeyValuePair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.statistics'),
        outputPath: 'cluster.statistics',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.statistics', props);
    return resource.getResponseField('cluster.statistics') as unknown as shapes.EcsKeyValuePair[];
  }

  public get tags(): shapes.EcsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.tags'),
        outputPath: 'cluster.tags',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.tags', props);
    return resource.getResponseField('cluster.tags') as unknown as shapes.EcsTag[];
  }

  public get settings(): shapes.EcsClusterSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.settings'),
        outputPath: 'cluster.settings',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.settings', props);
    return resource.getResponseField('cluster.settings') as unknown as shapes.EcsClusterSetting[];
  }

  public get capacityProviders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.capacityProviders'),
        outputPath: 'cluster.capacityProviders',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.capacityProviders', props);
    return resource.getResponseField('cluster.capacityProviders') as unknown as string[];
  }

  public get defaultCapacityProviderStrategy(): shapes.EcsCapacityProviderStrategyItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.defaultCapacityProviderStrategy'),
        outputPath: 'cluster.defaultCapacityProviderStrategy',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.defaultCapacityProviderStrategy', props);
    return resource.getResponseField('cluster.defaultCapacityProviderStrategy') as unknown as shapes.EcsCapacityProviderStrategyItem[];
  }

  public get attachments(): shapes.EcsAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.attachments'),
        outputPath: 'cluster.attachments',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.attachments', props);
    return resource.getResponseField('cluster.attachments') as unknown as shapes.EcsAttachment[];
  }

  public get attachmentsStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.attachmentsStatus'),
        outputPath: 'cluster.attachmentsStatus',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.attachmentsStatus', props);
    return resource.getResponseField('cluster.attachmentsStatus') as unknown as string;
  }

}

export class ECSResponsesUpdateClusterClusterConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterRequest) {
  }

  public get executeCommandConfiguration(): ECSResponsesUpdateClusterClusterConfigurationExecuteCommandConfiguration {
    return new ECSResponsesUpdateClusterClusterConfigurationExecuteCommandConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateClusterClusterConfigurationExecuteCommandConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.configuration.executeCommandConfiguration.kmsKeyId'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.kmsKeyId',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.configuration.executeCommandConfiguration.kmsKeyId', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.kmsKeyId') as unknown as string;
  }

  public get logging(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.configuration.executeCommandConfiguration.logging'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logging',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.configuration.executeCommandConfiguration.logging', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logging') as unknown as string;
  }

  public get logConfiguration(): ECSResponsesUpdateClusterClusterConfigurationExecuteCommandConfigurationLogConfiguration {
    return new ECSResponsesUpdateClusterClusterConfigurationExecuteCommandConfigurationLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateClusterClusterConfigurationExecuteCommandConfigurationLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterRequest) {
  }

  public get cloudWatchLogGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName') as unknown as string;
  }

  public get cloudWatchEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled') as unknown as boolean;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName') as unknown as string;
  }

  public get s3EncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled') as unknown as boolean;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
          configuration: {
            executeCommandConfiguration: {
              kmsKeyId: this.__input.configuration?.executeCommandConfiguration?.kmsKeyId,
              logging: this.__input.configuration?.executeCommandConfiguration?.logging,
              logConfiguration: {
                cloudWatchLogGroupName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchLogGroupName,
                cloudWatchEncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled,
                s3BucketName: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3BucketName,
                s3EncryptionEnabled: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3EncryptionEnabled,
                s3KeyPrefix: this.__input.configuration?.executeCommandConfiguration?.logConfiguration?.s3KeyPrefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix') as unknown as string;
  }

}

export class ECSResponsesUpdateClusterSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterSettingsRequest) {
  }

  public get cluster(): ECSResponsesUpdateClusterSettingsCluster {
    return new ECSResponsesUpdateClusterSettingsCluster(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateClusterSettingsCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterSettingsRequest) {
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.clusterArn', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.clusterName', props);
    return resource.getResponseField('cluster.clusterName') as unknown as string;
  }

  public get configuration(): ECSResponsesUpdateClusterSettingsClusterConfiguration {
    return new ECSResponsesUpdateClusterSettingsClusterConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.status', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.registeredContainerInstancesCount', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.runningTasksCount', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.pendingTasksCount', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.activeServicesCount', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.statistics', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.tags', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.settings', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.capacityProviders', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.defaultCapacityProviderStrategy', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.attachments', props);
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
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.attachmentsStatus', props);
    return resource.getResponseField('cluster.attachmentsStatus') as unknown as string;
  }

}

export class ECSResponsesUpdateClusterSettingsClusterConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterSettingsRequest) {
  }

  public get executeCommandConfiguration(): ECSResponsesUpdateClusterSettingsClusterConfigurationExecuteCommandConfiguration {
    return new ECSResponsesUpdateClusterSettingsClusterConfigurationExecuteCommandConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateClusterSettingsClusterConfigurationExecuteCommandConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterSettingsRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.kmsKeyId'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.kmsKeyId',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.kmsKeyId', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.kmsKeyId') as unknown as string;
  }

  public get logging(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logging'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logging',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logging', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logging') as unknown as string;
  }

  public get logConfiguration(): ECSResponsesUpdateClusterSettingsClusterConfigurationExecuteCommandConfigurationLogConfiguration {
    return new ECSResponsesUpdateClusterSettingsClusterConfigurationExecuteCommandConfigurationLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateClusterSettingsClusterConfigurationExecuteCommandConfigurationLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateClusterSettingsRequest) {
  }

  public get cloudWatchLogGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchLogGroupName') as unknown as string;
  }

  public get cloudWatchEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.cloudWatchEncryptionEnabled') as unknown as boolean;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3BucketName') as unknown as string;
  }

  public get s3EncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3EncryptionEnabled') as unknown as boolean;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterSettings',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix'),
        outputPath: 'cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix',
        parameters: {
          cluster: this.__input.cluster,
          settings: this.__input.settings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterSettings.cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix', props);
    return resource.getResponseField('cluster.configuration.executeCommandConfiguration.logConfiguration.s3KeyPrefix') as unknown as string;
  }

}

export class ECSResponsesUpdateContainerAgent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateContainerAgentRequest) {
  }

  public get containerInstance(): ECSResponsesUpdateContainerAgentContainerInstance {
    return new ECSResponsesUpdateContainerAgentContainerInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateContainerAgentContainerInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateContainerAgentRequest) {
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.containerInstanceArn', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.ec2InstanceId', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.capacityProviderName', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.version', props);
    return resource.getResponseField('containerInstance.version') as unknown as number;
  }

  public get versionInfo(): ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo {
    return new ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.remainingResources', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.registeredResources', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.status', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.statusReason', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.agentConnected', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.runningTasksCount', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.pendingTasksCount', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.agentUpdateStatus', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.attributes', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.registeredAt', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.attachments', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.tags', props);
    return resource.getResponseField('containerInstance.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateContainerAgentRequest) {
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.versionInfo.agentVersion', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.versionInfo.agentHash', props);
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
          cluster: this.__input.cluster,
          containerInstance: this.__input.containerInstance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerAgent.containerInstance.versionInfo.dockerVersion', props);
    return resource.getResponseField('containerInstance.versionInfo.dockerVersion') as unknown as string;
  }

}

export class ECSResponsesUpdateContainerInstancesState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateContainerInstancesStateRequest) {
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
          cluster: this.__input.cluster,
          containerInstances: this.__input.containerInstances,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerInstancesState.containerInstances', props);
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
          cluster: this.__input.cluster,
          containerInstances: this.__input.containerInstances,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerInstancesState.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcsFailure[];
  }

}

export class ECSResponsesUpdateService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServiceRequest) {
  }

  public get service(): ECSResponsesUpdateServiceService {
    return new ECSResponsesUpdateServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServiceRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.serviceArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.serviceName', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.clusterArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.loadBalancers', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.serviceRegistries', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.status', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.desiredCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.runningCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pendingCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.launchType', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.capacityProviderStrategy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.platformVersion', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.taskDefinition', props);
    return resource.getResponseField('service.taskDefinition') as unknown as string;
  }

  public get deploymentConfiguration(): ECSResponsesUpdateServiceServiceDeploymentConfiguration {
    return new ECSResponsesUpdateServiceServiceDeploymentConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.taskSets', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.deployments', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.roleArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.events', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.createdAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.placementConstraints', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.placementStrategy', props);
    return resource.getResponseField('service.placementStrategy') as unknown as shapes.EcsPlacementStrategy[];
  }

  public get networkConfiguration(): ECSResponsesUpdateServiceServiceNetworkConfiguration {
    return new ECSResponsesUpdateServiceServiceNetworkConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.healthCheckGracePeriodSeconds', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.schedulingStrategy', props);
    return resource.getResponseField('service.schedulingStrategy') as unknown as string;
  }

  public get deploymentController(): ECSResponsesUpdateServiceServiceDeploymentController {
    return new ECSResponsesUpdateServiceServiceDeploymentController(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.tags', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.createdBy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.enableECSManagedTags', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.propagateTags', props);
    return resource.getResponseField('service.propagateTags') as unknown as string;
  }

  public get enableExecuteCommand(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ECS',
        physicalResourceId: cr.PhysicalResourceId.of('ECS.UpdateService.service.enableExecuteCommand'),
        outputPath: 'service.enableExecuteCommand',
        parameters: {
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.enableExecuteCommand', props);
    return resource.getResponseField('service.enableExecuteCommand') as unknown as boolean;
  }

}

export class ECSResponsesUpdateServiceServiceDeploymentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServiceRequest) {
  }

  public get deploymentCircuitBreaker(): ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker {
    return new ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.deploymentConfiguration.maximumPercent', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.deploymentConfiguration.minimumHealthyPercent', props);
    return resource.getResponseField('service.deploymentConfiguration.minimumHealthyPercent') as unknown as number;
  }

}

export class ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServiceRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.deploymentConfiguration.deploymentCircuitBreaker.enable', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.deploymentConfiguration.deploymentCircuitBreaker.rollback', props);
    return resource.getResponseField('service.deploymentConfiguration.deploymentCircuitBreaker.rollback') as unknown as boolean;
  }

}

export class ECSResponsesUpdateServiceServiceNetworkConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServiceRequest) {
  }

  public get awsvpcConfiguration(): ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration {
    return new ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServiceRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.networkConfiguration.awsvpcConfiguration.subnets', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.networkConfiguration.awsvpcConfiguration.securityGroups', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('service.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSResponsesUpdateServiceServiceDeploymentController {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServiceRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          desiredCount: this.__input.desiredCount,
          taskDefinition: this.__input.taskDefinition,
          capacityProviderStrategy: this.__input.capacityProviderStrategy,
          deploymentConfiguration: {
            deploymentCircuitBreaker: {
              enable: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.enable,
              rollback: this.__input.deploymentConfiguration?.deploymentCircuitBreaker?.rollback,
            },
            maximumPercent: this.__input.deploymentConfiguration?.maximumPercent,
            minimumHealthyPercent: this.__input.deploymentConfiguration?.minimumHealthyPercent,
          },
          networkConfiguration: {
            awsvpcConfiguration: {
              subnets: this.__input.networkConfiguration?.awsvpcConfiguration?.subnets,
              securityGroups: this.__input.networkConfiguration?.awsvpcConfiguration?.securityGroups,
              assignPublicIp: this.__input.networkConfiguration?.awsvpcConfiguration?.assignPublicIp,
            },
          },
          placementConstraints: this.__input.placementConstraints,
          placementStrategy: this.__input.placementStrategy,
          platformVersion: this.__input.platformVersion,
          forceNewDeployment: this.__input.forceNewDeployment,
          healthCheckGracePeriodSeconds: this.__input.healthCheckGracePeriodSeconds,
          enableExecuteCommand: this.__input.enableExecuteCommand,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.deploymentController.type', props);
    return resource.getResponseField('service.deploymentController.type') as unknown as string;
  }

}

export class ECSResponsesUpdateServicePrimaryTaskSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
  }

  public get taskSet(): ECSResponsesUpdateServicePrimaryTaskSetTaskSet {
    return new ECSResponsesUpdateServicePrimaryTaskSetTaskSet(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateServicePrimaryTaskSetTaskSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.id', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.taskSetArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.serviceArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.clusterArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.startedBy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.externalId', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.status', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.taskDefinition', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.computedDesiredCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.pendingCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.runningCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.createdAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.updatedAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.launchType', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.capacityProviderStrategy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.platformVersion', props);
    return resource.getResponseField('taskSet.platformVersion') as unknown as string;
  }

  public get networkConfiguration(): ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration {
    return new ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.loadBalancers', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.serviceRegistries', props);
    return resource.getResponseField('taskSet.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get scale(): ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale {
    return new ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.stabilityStatus', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.stabilityStatusAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.tags', props);
    return resource.getResponseField('taskSet.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
  }

  public get awsvpcConfiguration(): ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {
    return new ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateServicePrimaryTaskSetRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.scale.value', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          primaryTaskSet: this.__input.primaryTaskSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePrimaryTaskSet.taskSet.scale.unit', props);
    return resource.getResponseField('taskSet.scale.unit') as unknown as string;
  }

}

export class ECSResponsesUpdateTaskSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateTaskSetRequest) {
  }

  public get taskSet(): ECSResponsesUpdateTaskSetTaskSet {
    return new ECSResponsesUpdateTaskSetTaskSet(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateTaskSetTaskSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateTaskSetRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.id', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.taskSetArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.serviceArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.clusterArn', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.startedBy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.externalId', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.status', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.taskDefinition', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.computedDesiredCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.pendingCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.runningCount', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.createdAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.updatedAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.launchType', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.capacityProviderStrategy', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.platformVersion', props);
    return resource.getResponseField('taskSet.platformVersion') as unknown as string;
  }

  public get networkConfiguration(): ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration {
    return new ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.loadBalancers', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.serviceRegistries', props);
    return resource.getResponseField('taskSet.serviceRegistries') as unknown as shapes.EcsServiceRegistry[];
  }

  public get scale(): ECSResponsesUpdateTaskSetTaskSetScale {
    return new ECSResponsesUpdateTaskSetTaskSetScale(this.__scope, this.__resources, this.__input);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.stabilityStatus', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.stabilityStatusAt', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.tags', props);
    return resource.getResponseField('taskSet.tags') as unknown as shapes.EcsTag[];
  }

}

export class ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateTaskSetRequest) {
  }

  public get awsvpcConfiguration(): ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {
    return new ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateTaskSetRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.subnets', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.securityGroups', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp', props);
    return resource.getResponseField('taskSet.networkConfiguration.awsvpcConfiguration.assignPublicIp') as unknown as string;
  }

}

export class ECSResponsesUpdateTaskSetTaskSetScale {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcsUpdateTaskSetRequest) {
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.scale.value', props);
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
          cluster: this.__input.cluster,
          service: this.__input.service,
          taskSet: this.__input.taskSet,
          scale: {
            value: this.__input.scale.value,
            unit: this.__input.scale.unit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTaskSet.taskSet.scale.unit', props);
    return resource.getResponseField('taskSet.scale.unit') as unknown as string;
  }

}

