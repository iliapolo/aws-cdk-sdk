import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class BraketClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelQuantumTask(input: shapes.BraketCancelQuantumTaskRequest): BraketResponsesCancelQuantumTask {
    return new BraketResponsesCancelQuantumTask(this, this.__resources, input);
  }

  public createQuantumTask(input: shapes.BraketCreateQuantumTaskRequest): BraketResponsesCreateQuantumTask {
    return new BraketResponsesCreateQuantumTask(this, this.__resources, input);
  }

  public fetchDevice(input: shapes.BraketGetDeviceRequest): BraketResponsesFetchDevice {
    return new BraketResponsesFetchDevice(this, this.__resources, input);
  }

  public fetchQuantumTask(input: shapes.BraketGetQuantumTaskRequest): BraketResponsesFetchQuantumTask {
    return new BraketResponsesFetchQuantumTask(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.BraketListTagsForResourceRequest): BraketResponsesListTagsForResource {
    return new BraketResponsesListTagsForResource(this, this.__resources, input);
  }

  public searchDevices(input: shapes.BraketSearchDevicesRequest): BraketResponsesSearchDevices {
    return new BraketResponsesSearchDevices(this, this.__resources, input);
  }

  public searchQuantumTasks(input: shapes.BraketSearchQuantumTasksRequest): BraketResponsesSearchQuantumTasks {
    return new BraketResponsesSearchQuantumTasks(this, this.__resources, input);
  }

  public tagResource(input: shapes.BraketTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.BraketUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class BraketResponsesCancelQuantumTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BraketCancelQuantumTaskRequest) {
  }

  public get cancellationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.CancelQuantumTask.cancellationStatus'),
        outputPath: 'cancellationStatus',
        parameters: {
          clientToken: this.__input.clientToken,
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelQuantumTask.cancellationStatus', props);
    return resource.getResponseField('cancellationStatus') as unknown as string;
  }

  public get quantumTaskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.CancelQuantumTask.quantumTaskArn'),
        outputPath: 'quantumTaskArn',
        parameters: {
          clientToken: this.__input.clientToken,
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelQuantumTask.quantumTaskArn', props);
    return resource.getResponseField('quantumTaskArn') as unknown as string;
  }

}

export class BraketResponsesCreateQuantumTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BraketCreateQuantumTaskRequest) {
  }

  public get quantumTaskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.CreateQuantumTask.quantumTaskArn'),
        outputPath: 'quantumTaskArn',
        parameters: {
          action: this.__input.action,
          clientToken: this.__input.clientToken,
          deviceArn: this.__input.deviceArn,
          deviceParameters: this.__input.deviceParameters,
          outputS3Bucket: this.__input.outputS3Bucket,
          outputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          shots: this.__input.shots,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateQuantumTask.quantumTaskArn', props);
    return resource.getResponseField('quantumTaskArn') as unknown as string;
  }

}

export class BraketResponsesFetchDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BraketGetDeviceRequest) {
  }

  public get deviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetDevice.deviceArn'),
        outputPath: 'deviceArn',
        parameters: {
          deviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.deviceArn', props);
    return resource.getResponseField('deviceArn') as unknown as string;
  }

  public get deviceCapabilities(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetDevice.deviceCapabilities'),
        outputPath: 'deviceCapabilities',
        parameters: {
          deviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.deviceCapabilities', props);
    return resource.getResponseField('deviceCapabilities') as unknown as string;
  }

  public get deviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetDevice.deviceName'),
        outputPath: 'deviceName',
        parameters: {
          deviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.deviceName', props);
    return resource.getResponseField('deviceName') as unknown as string;
  }

  public get deviceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetDevice.deviceStatus'),
        outputPath: 'deviceStatus',
        parameters: {
          deviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.deviceStatus', props);
    return resource.getResponseField('deviceStatus') as unknown as string;
  }

  public get deviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetDevice.deviceType'),
        outputPath: 'deviceType',
        parameters: {
          deviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.deviceType', props);
    return resource.getResponseField('deviceType') as unknown as string;
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetDevice.providerName'),
        outputPath: 'providerName',
        parameters: {
          deviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class BraketResponsesFetchQuantumTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BraketGetQuantumTaskRequest) {
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get deviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.deviceArn'),
        outputPath: 'deviceArn',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.deviceArn', props);
    return resource.getResponseField('deviceArn') as unknown as string;
  }

  public get deviceParameters(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.deviceParameters'),
        outputPath: 'deviceParameters',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.deviceParameters', props);
    return resource.getResponseField('deviceParameters') as unknown as string;
  }

  public get endedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.endedAt'),
        outputPath: 'endedAt',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.endedAt', props);
    return resource.getResponseField('endedAt') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string;
  }

  public get outputS3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.outputS3Bucket'),
        outputPath: 'outputS3Bucket',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.outputS3Bucket', props);
    return resource.getResponseField('outputS3Bucket') as unknown as string;
  }

  public get outputS3Directory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.outputS3Directory'),
        outputPath: 'outputS3Directory',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.outputS3Directory', props);
    return resource.getResponseField('outputS3Directory') as unknown as string;
  }

  public get quantumTaskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.quantumTaskArn'),
        outputPath: 'quantumTaskArn',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.quantumTaskArn', props);
    return resource.getResponseField('quantumTaskArn') as unknown as string;
  }

  public get shots(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.shots'),
        outputPath: 'shots',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.shots', props);
    return resource.getResponseField('shots') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.status'),
        outputPath: 'status',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQuantumTask',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.GetQuantumTask.tags'),
        outputPath: 'tags',
        parameters: {
          quantumTaskArn: this.__input.quantumTaskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQuantumTask.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class BraketResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BraketListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class BraketResponsesSearchDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BraketSearchDevicesRequest) {
  }

  public get devices(): shapes.BraketDeviceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchDevices',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.SearchDevices.devices'),
        outputPath: 'devices',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchDevices.devices', props);
    return resource.getResponseField('devices') as unknown as shapes.BraketDeviceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchDevices',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.SearchDevices.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchDevices.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class BraketResponsesSearchQuantumTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BraketSearchQuantumTasksRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchQuantumTasks',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.SearchQuantumTasks.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchQuantumTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get quantumTasks(): shapes.BraketQuantumTaskSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchQuantumTasks',
        service: 'Braket',
        physicalResourceId: cr.PhysicalResourceId.of('Braket.SearchQuantumTasks.quantumTasks'),
        outputPath: 'quantumTasks',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchQuantumTasks.quantumTasks', props);
    return resource.getResponseField('quantumTasks') as unknown as shapes.BraketQuantumTaskSummary[];
  }

}

