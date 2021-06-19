import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MediaStoreClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createContainer(input: shapes.MediaStoreCreateContainerInput): MediaStoreResponsesCreateContainer {
    return new MediaStoreResponsesCreateContainer(this, this.__resources, input);
  }

  public deleteContainer(input: shapes.MediaStoreDeleteContainerInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DeleteContainer'),
        parameters: {
          ContainerName: input.containerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteContainer', props);
  }

  public deleteContainerPolicy(input: shapes.MediaStoreDeleteContainerPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContainerPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DeleteContainerPolicy'),
        parameters: {
          ContainerName: input.containerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteContainerPolicy', props);
  }

  public deleteCorsPolicy(input: shapes.MediaStoreDeleteCorsPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCorsPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DeleteCorsPolicy'),
        parameters: {
          ContainerName: input.containerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCorsPolicy', props);
  }

  public deleteLifecyclePolicy(input: shapes.MediaStoreDeleteLifecyclePolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLifecyclePolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DeleteLifecyclePolicy'),
        parameters: {
          ContainerName: input.containerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLifecyclePolicy', props);
  }

  public deleteMetricPolicy(input: shapes.MediaStoreDeleteMetricPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMetricPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DeleteMetricPolicy'),
        parameters: {
          ContainerName: input.containerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMetricPolicy', props);
  }

  public describeContainer(input: shapes.MediaStoreDescribeContainerInput): MediaStoreResponsesDescribeContainer {
    return new MediaStoreResponsesDescribeContainer(this, this.__resources, input);
  }

  public fetchContainerPolicy(input: shapes.MediaStoreGetContainerPolicyInput): MediaStoreResponsesFetchContainerPolicy {
    return new MediaStoreResponsesFetchContainerPolicy(this, this.__resources, input);
  }

  public fetchCorsPolicy(input: shapes.MediaStoreGetCorsPolicyInput): MediaStoreResponsesFetchCorsPolicy {
    return new MediaStoreResponsesFetchCorsPolicy(this, this.__resources, input);
  }

  public fetchLifecyclePolicy(input: shapes.MediaStoreGetLifecyclePolicyInput): MediaStoreResponsesFetchLifecyclePolicy {
    return new MediaStoreResponsesFetchLifecyclePolicy(this, this.__resources, input);
  }

  public fetchMetricPolicy(input: shapes.MediaStoreGetMetricPolicyInput): MediaStoreResponsesFetchMetricPolicy {
    return new MediaStoreResponsesFetchMetricPolicy(this, this.__resources, input);
  }

  public listContainers(input: shapes.MediaStoreListContainersInput): MediaStoreResponsesListContainers {
    return new MediaStoreResponsesListContainers(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.MediaStoreListTagsForResourceInput): MediaStoreResponsesListTagsForResource {
    return new MediaStoreResponsesListTagsForResource(this, this.__resources, input);
  }

  public putContainerPolicy(input: shapes.MediaStorePutContainerPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putContainerPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.PutContainerPolicy'),
        parameters: {
          ContainerName: input.containerName,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutContainerPolicy', props);
  }

  public putCorsPolicy(input: shapes.MediaStorePutCorsPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCorsPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.PutCorsPolicy'),
        parameters: {
          ContainerName: input.containerName,
          CorsPolicy: input.corsPolicy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutCorsPolicy', props);
  }

  public putLifecyclePolicy(input: shapes.MediaStorePutLifecyclePolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLifecyclePolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.PutLifecyclePolicy'),
        parameters: {
          ContainerName: input.containerName,
          LifecyclePolicy: input.lifecyclePolicy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutLifecyclePolicy', props);
  }

  public putMetricPolicy(input: shapes.MediaStorePutMetricPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMetricPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.PutMetricPolicy'),
        parameters: {
          ContainerName: input.containerName,
          MetricPolicy: {
            ContainerLevelMetrics: input.metricPolicy.containerLevelMetrics,
            MetricPolicyRules: input.metricPolicy.metricPolicyRules,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutMetricPolicy', props);
  }

  public startAccessLogging(input: shapes.MediaStoreStartAccessLoggingInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startAccessLogging',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.StartAccessLogging'),
        parameters: {
          ContainerName: input.containerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartAccessLogging', props);
  }

  public stopAccessLogging(input: shapes.MediaStoreStopAccessLoggingInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopAccessLogging',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.StopAccessLogging'),
        parameters: {
          ContainerName: input.containerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopAccessLogging', props);
  }

  public tagResource(input: shapes.MediaStoreTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.TagResource'),
        parameters: {
          Resource: input.resource,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.MediaStoreUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.UntagResource'),
        parameters: {
          Resource: input.resource,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class MediaStoreResponsesCreateContainer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreCreateContainerInput) {
  }

  public get container(): MediaStoreResponsesCreateContainerContainer {
    return new MediaStoreResponsesCreateContainerContainer(this.__scope, this.__resources, this.__input);
  }

}

export class MediaStoreResponsesCreateContainerContainer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreCreateContainerInput) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.CreateContainer.Container.Endpoint'),
        outputPath: 'Container.Endpoint',
        parameters: {
          ContainerName: this.__input.containerName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainer.Container.Endpoint', props);
    return resource.getResponseField('Container.Endpoint') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.CreateContainer.Container.CreationTime'),
        outputPath: 'Container.CreationTime',
        parameters: {
          ContainerName: this.__input.containerName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainer.Container.CreationTime', props);
    return resource.getResponseField('Container.CreationTime') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.CreateContainer.Container.ARN'),
        outputPath: 'Container.ARN',
        parameters: {
          ContainerName: this.__input.containerName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainer.Container.ARN', props);
    return resource.getResponseField('Container.ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.CreateContainer.Container.Name'),
        outputPath: 'Container.Name',
        parameters: {
          ContainerName: this.__input.containerName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainer.Container.Name', props);
    return resource.getResponseField('Container.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.CreateContainer.Container.Status'),
        outputPath: 'Container.Status',
        parameters: {
          ContainerName: this.__input.containerName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainer.Container.Status', props);
    return resource.getResponseField('Container.Status') as unknown as string;
  }

  public get accessLoggingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.CreateContainer.Container.AccessLoggingEnabled'),
        outputPath: 'Container.AccessLoggingEnabled',
        parameters: {
          ContainerName: this.__input.containerName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainer.Container.AccessLoggingEnabled', props);
    return resource.getResponseField('Container.AccessLoggingEnabled') as unknown as boolean;
  }

}

export class MediaStoreResponsesDescribeContainer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreDescribeContainerInput) {
  }

  public get container(): MediaStoreResponsesDescribeContainerContainer {
    return new MediaStoreResponsesDescribeContainerContainer(this.__scope, this.__resources, this.__input);
  }

}

export class MediaStoreResponsesDescribeContainerContainer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreDescribeContainerInput) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DescribeContainer.Container.Endpoint'),
        outputPath: 'Container.Endpoint',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContainer.Container.Endpoint', props);
    return resource.getResponseField('Container.Endpoint') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DescribeContainer.Container.CreationTime'),
        outputPath: 'Container.CreationTime',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContainer.Container.CreationTime', props);
    return resource.getResponseField('Container.CreationTime') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DescribeContainer.Container.ARN'),
        outputPath: 'Container.ARN',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContainer.Container.ARN', props);
    return resource.getResponseField('Container.ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DescribeContainer.Container.Name'),
        outputPath: 'Container.Name',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContainer.Container.Name', props);
    return resource.getResponseField('Container.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DescribeContainer.Container.Status'),
        outputPath: 'Container.Status',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContainer.Container.Status', props);
    return resource.getResponseField('Container.Status') as unknown as string;
  }

  public get accessLoggingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContainer',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.DescribeContainer.Container.AccessLoggingEnabled'),
        outputPath: 'Container.AccessLoggingEnabled',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContainer.Container.AccessLoggingEnabled', props);
    return resource.getResponseField('Container.AccessLoggingEnabled') as unknown as boolean;
  }

}

export class MediaStoreResponsesFetchContainerPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreGetContainerPolicyInput) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.GetContainerPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class MediaStoreResponsesFetchCorsPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreGetCorsPolicyInput) {
  }

  public get corsPolicy(): shapes.MediaStoreCorsRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCorsPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.GetCorsPolicy.CorsPolicy'),
        outputPath: 'CorsPolicy',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCorsPolicy.CorsPolicy', props);
    return resource.getResponseField('CorsPolicy') as unknown as shapes.MediaStoreCorsRule[];
  }

}

export class MediaStoreResponsesFetchLifecyclePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreGetLifecyclePolicyInput) {
  }

  public get lifecyclePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.GetLifecyclePolicy.LifecyclePolicy'),
        outputPath: 'LifecyclePolicy',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.LifecyclePolicy', props);
    return resource.getResponseField('LifecyclePolicy') as unknown as string;
  }

}

export class MediaStoreResponsesFetchMetricPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreGetMetricPolicyInput) {
  }

  public get metricPolicy(): MediaStoreResponsesFetchMetricPolicyMetricPolicy {
    return new MediaStoreResponsesFetchMetricPolicyMetricPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class MediaStoreResponsesFetchMetricPolicyMetricPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreGetMetricPolicyInput) {
  }

  public get containerLevelMetrics(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMetricPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.GetMetricPolicy.MetricPolicy.ContainerLevelMetrics'),
        outputPath: 'MetricPolicy.ContainerLevelMetrics',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMetricPolicy.MetricPolicy.ContainerLevelMetrics', props);
    return resource.getResponseField('MetricPolicy.ContainerLevelMetrics') as unknown as string;
  }

  public get metricPolicyRules(): shapes.MediaStoreMetricPolicyRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMetricPolicy',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.GetMetricPolicy.MetricPolicy.MetricPolicyRules'),
        outputPath: 'MetricPolicy.MetricPolicyRules',
        parameters: {
          ContainerName: this.__input.containerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMetricPolicy.MetricPolicy.MetricPolicyRules', props);
    return resource.getResponseField('MetricPolicy.MetricPolicyRules') as unknown as shapes.MediaStoreMetricPolicyRule[];
  }

}

export class MediaStoreResponsesListContainers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreListContainersInput) {
  }

  public get containers(): shapes.MediaStoreContainer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContainers',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.ListContainers.Containers'),
        outputPath: 'Containers',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContainers.Containers', props);
    return resource.getResponseField('Containers') as unknown as shapes.MediaStoreContainer[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContainers',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.ListContainers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContainers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaStoreResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreListTagsForResourceInput) {
  }

  public get tags(): shapes.MediaStoreTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'MediaStore',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStore.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          Resource: this.__input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.MediaStoreTag[];
  }

}

