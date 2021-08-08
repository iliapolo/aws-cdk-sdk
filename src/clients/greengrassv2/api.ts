import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GreengrassV2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchAssociateClientDeviceWithCoreDevice(input: shapes.GreengrassV2BatchAssociateClientDeviceWithCoreDeviceRequest): GreengrassV2ResponsesBatchAssociateClientDeviceWithCoreDevice {
    return new GreengrassV2ResponsesBatchAssociateClientDeviceWithCoreDevice(this, this.__resources, input);
  }

  public batchDisassociateClientDeviceFromCoreDevice(input: shapes.GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceRequest): GreengrassV2ResponsesBatchDisassociateClientDeviceFromCoreDevice {
    return new GreengrassV2ResponsesBatchDisassociateClientDeviceFromCoreDevice(this, this.__resources, input);
  }

  public cancelDeployment(input: shapes.GreengrassV2CancelDeploymentRequest): GreengrassV2ResponsesCancelDeployment {
    return new GreengrassV2ResponsesCancelDeployment(this, this.__resources, input);
  }

  public createComponentVersion(input: shapes.GreengrassV2CreateComponentVersionRequest): GreengrassV2ResponsesCreateComponentVersion {
    return new GreengrassV2ResponsesCreateComponentVersion(this, this.__resources, input);
  }

  public createDeployment(input: shapes.GreengrassV2CreateDeploymentRequest): GreengrassV2ResponsesCreateDeployment {
    return new GreengrassV2ResponsesCreateDeployment(this, this.__resources, input);
  }

  public deleteComponent(input: shapes.GreengrassV2DeleteComponentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DeleteComponent'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteComponent', props);
  }

  public deleteCoreDevice(input: shapes.GreengrassV2DeleteCoreDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DeleteCoreDevice'),
        parameters: {
          coreDeviceThingName: input.coreDeviceThingName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCoreDevice', props);
  }

  public describeComponent(input: shapes.GreengrassV2DescribeComponentRequest): GreengrassV2ResponsesDescribeComponent {
    return new GreengrassV2ResponsesDescribeComponent(this, this.__resources, input);
  }

  public fetchComponent(input: shapes.GreengrassV2GetComponentRequest): GreengrassV2ResponsesFetchComponent {
    return new GreengrassV2ResponsesFetchComponent(this, this.__resources, input);
  }

  public fetchComponentVersionArtifact(input: shapes.GreengrassV2GetComponentVersionArtifactRequest): GreengrassV2ResponsesFetchComponentVersionArtifact {
    return new GreengrassV2ResponsesFetchComponentVersionArtifact(this, this.__resources, input);
  }

  public fetchCoreDevice(input: shapes.GreengrassV2GetCoreDeviceRequest): GreengrassV2ResponsesFetchCoreDevice {
    return new GreengrassV2ResponsesFetchCoreDevice(this, this.__resources, input);
  }

  public fetchDeployment(input: shapes.GreengrassV2GetDeploymentRequest): GreengrassV2ResponsesFetchDeployment {
    return new GreengrassV2ResponsesFetchDeployment(this, this.__resources, input);
  }

  public listClientDevicesAssociatedWithCoreDevice(input: shapes.GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest): GreengrassV2ResponsesListClientDevicesAssociatedWithCoreDevice {
    return new GreengrassV2ResponsesListClientDevicesAssociatedWithCoreDevice(this, this.__resources, input);
  }

  public listComponentVersions(input: shapes.GreengrassV2ListComponentVersionsRequest): GreengrassV2ResponsesListComponentVersions {
    return new GreengrassV2ResponsesListComponentVersions(this, this.__resources, input);
  }

  public listComponents(input: shapes.GreengrassV2ListComponentsRequest): GreengrassV2ResponsesListComponents {
    return new GreengrassV2ResponsesListComponents(this, this.__resources, input);
  }

  public listCoreDevices(input: shapes.GreengrassV2ListCoreDevicesRequest): GreengrassV2ResponsesListCoreDevices {
    return new GreengrassV2ResponsesListCoreDevices(this, this.__resources, input);
  }

  public listDeployments(input: shapes.GreengrassV2ListDeploymentsRequest): GreengrassV2ResponsesListDeployments {
    return new GreengrassV2ResponsesListDeployments(this, this.__resources, input);
  }

  public listEffectiveDeployments(input: shapes.GreengrassV2ListEffectiveDeploymentsRequest): GreengrassV2ResponsesListEffectiveDeployments {
    return new GreengrassV2ResponsesListEffectiveDeployments(this, this.__resources, input);
  }

  public listInstalledComponents(input: shapes.GreengrassV2ListInstalledComponentsRequest): GreengrassV2ResponsesListInstalledComponents {
    return new GreengrassV2ResponsesListInstalledComponents(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.GreengrassV2ListTagsForResourceRequest): GreengrassV2ResponsesListTagsForResource {
    return new GreengrassV2ResponsesListTagsForResource(this, this.__resources, input);
  }

  public resolveComponentCandidates(input: shapes.GreengrassV2ResolveComponentCandidatesRequest): GreengrassV2ResponsesResolveComponentCandidates {
    return new GreengrassV2ResponsesResolveComponentCandidates(this, this.__resources, input);
  }

  public tagResource(input: shapes.GreengrassV2TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.GreengrassV2UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class GreengrassV2ResponsesBatchAssociateClientDeviceWithCoreDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2BatchAssociateClientDeviceWithCoreDeviceRequest) {
  }

  public get errorEntries(): shapes.GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateClientDeviceWithCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.BatchAssociateClientDeviceWithCoreDevice.errorEntries'),
        outputPath: 'errorEntries',
        parameters: {
          entries: this.__input.entries,
          coreDeviceThingName: this.__input.coreDeviceThingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateClientDeviceWithCoreDevice.errorEntries', props);
    return resource.getResponseField('errorEntries') as unknown as shapes.GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry[];
  }

}

export class GreengrassV2ResponsesBatchDisassociateClientDeviceFromCoreDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceRequest) {
  }

  public get errorEntries(): shapes.GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateClientDeviceFromCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.BatchDisassociateClientDeviceFromCoreDevice.errorEntries'),
        outputPath: 'errorEntries',
        parameters: {
          entries: this.__input.entries,
          coreDeviceThingName: this.__input.coreDeviceThingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateClientDeviceFromCoreDevice.errorEntries', props);
    return resource.getResponseField('errorEntries') as unknown as shapes.GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry[];
  }

}

export class GreengrassV2ResponsesCancelDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2CancelDeploymentRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CancelDeployment.message'),
        outputPath: 'message',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelDeployment.message', props);
    return resource.getResponseField('message') as unknown as string;
  }

}

export class GreengrassV2ResponsesCreateComponentVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2CreateComponentVersionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponentVersion',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateComponentVersion.arn'),
        outputPath: 'arn',
        parameters: {
          inlineRecipe: {
          },
          lambdaFunction: {
            lambdaArn: this.__input.lambdaFunction?.lambdaArn,
            componentName: this.__input.lambdaFunction?.componentName,
            componentVersion: this.__input.lambdaFunction?.componentVersion,
            componentPlatforms: this.__input.lambdaFunction?.componentPlatforms,
            componentDependencies: this.__input.lambdaFunction?.componentDependencies,
            componentLambdaParameters: {
              eventSources: this.__input.lambdaFunction?.componentLambdaParameters?.eventSources,
              maxQueueSize: this.__input.lambdaFunction?.componentLambdaParameters?.maxQueueSize,
              maxInstancesCount: this.__input.lambdaFunction?.componentLambdaParameters?.maxInstancesCount,
              maxIdleTimeInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.maxIdleTimeInSeconds,
              timeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.timeoutInSeconds,
              statusTimeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.statusTimeoutInSeconds,
              pinned: this.__input.lambdaFunction?.componentLambdaParameters?.pinned,
              inputPayloadEncodingType: this.__input.lambdaFunction?.componentLambdaParameters?.inputPayloadEncodingType,
              execArgs: this.__input.lambdaFunction?.componentLambdaParameters?.execArgs,
              environmentVariables: this.__input.lambdaFunction?.componentLambdaParameters?.environmentVariables,
              linuxProcessParams: {
                isolationMode: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.isolationMode,
                containerParams: {
                  memorySizeInKB: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.memorySizeInKB,
                  mountROSysfs: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.mountROSysfs,
                  volumes: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.volumes,
                  devices: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.devices,
                },
              },
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponentVersion.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get componentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponentVersion',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateComponentVersion.componentName'),
        outputPath: 'componentName',
        parameters: {
          inlineRecipe: {
          },
          lambdaFunction: {
            lambdaArn: this.__input.lambdaFunction?.lambdaArn,
            componentName: this.__input.lambdaFunction?.componentName,
            componentVersion: this.__input.lambdaFunction?.componentVersion,
            componentPlatforms: this.__input.lambdaFunction?.componentPlatforms,
            componentDependencies: this.__input.lambdaFunction?.componentDependencies,
            componentLambdaParameters: {
              eventSources: this.__input.lambdaFunction?.componentLambdaParameters?.eventSources,
              maxQueueSize: this.__input.lambdaFunction?.componentLambdaParameters?.maxQueueSize,
              maxInstancesCount: this.__input.lambdaFunction?.componentLambdaParameters?.maxInstancesCount,
              maxIdleTimeInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.maxIdleTimeInSeconds,
              timeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.timeoutInSeconds,
              statusTimeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.statusTimeoutInSeconds,
              pinned: this.__input.lambdaFunction?.componentLambdaParameters?.pinned,
              inputPayloadEncodingType: this.__input.lambdaFunction?.componentLambdaParameters?.inputPayloadEncodingType,
              execArgs: this.__input.lambdaFunction?.componentLambdaParameters?.execArgs,
              environmentVariables: this.__input.lambdaFunction?.componentLambdaParameters?.environmentVariables,
              linuxProcessParams: {
                isolationMode: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.isolationMode,
                containerParams: {
                  memorySizeInKB: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.memorySizeInKB,
                  mountROSysfs: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.mountROSysfs,
                  volumes: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.volumes,
                  devices: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.devices,
                },
              },
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponentVersion.componentName', props);
    return resource.getResponseField('componentName') as unknown as string;
  }

  public get componentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponentVersion',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateComponentVersion.componentVersion'),
        outputPath: 'componentVersion',
        parameters: {
          inlineRecipe: {
          },
          lambdaFunction: {
            lambdaArn: this.__input.lambdaFunction?.lambdaArn,
            componentName: this.__input.lambdaFunction?.componentName,
            componentVersion: this.__input.lambdaFunction?.componentVersion,
            componentPlatforms: this.__input.lambdaFunction?.componentPlatforms,
            componentDependencies: this.__input.lambdaFunction?.componentDependencies,
            componentLambdaParameters: {
              eventSources: this.__input.lambdaFunction?.componentLambdaParameters?.eventSources,
              maxQueueSize: this.__input.lambdaFunction?.componentLambdaParameters?.maxQueueSize,
              maxInstancesCount: this.__input.lambdaFunction?.componentLambdaParameters?.maxInstancesCount,
              maxIdleTimeInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.maxIdleTimeInSeconds,
              timeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.timeoutInSeconds,
              statusTimeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.statusTimeoutInSeconds,
              pinned: this.__input.lambdaFunction?.componentLambdaParameters?.pinned,
              inputPayloadEncodingType: this.__input.lambdaFunction?.componentLambdaParameters?.inputPayloadEncodingType,
              execArgs: this.__input.lambdaFunction?.componentLambdaParameters?.execArgs,
              environmentVariables: this.__input.lambdaFunction?.componentLambdaParameters?.environmentVariables,
              linuxProcessParams: {
                isolationMode: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.isolationMode,
                containerParams: {
                  memorySizeInKB: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.memorySizeInKB,
                  mountROSysfs: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.mountROSysfs,
                  volumes: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.volumes,
                  devices: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.devices,
                },
              },
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponentVersion.componentVersion', props);
    return resource.getResponseField('componentVersion') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponentVersion',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateComponentVersion.creationTimestamp'),
        outputPath: 'creationTimestamp',
        parameters: {
          inlineRecipe: {
          },
          lambdaFunction: {
            lambdaArn: this.__input.lambdaFunction?.lambdaArn,
            componentName: this.__input.lambdaFunction?.componentName,
            componentVersion: this.__input.lambdaFunction?.componentVersion,
            componentPlatforms: this.__input.lambdaFunction?.componentPlatforms,
            componentDependencies: this.__input.lambdaFunction?.componentDependencies,
            componentLambdaParameters: {
              eventSources: this.__input.lambdaFunction?.componentLambdaParameters?.eventSources,
              maxQueueSize: this.__input.lambdaFunction?.componentLambdaParameters?.maxQueueSize,
              maxInstancesCount: this.__input.lambdaFunction?.componentLambdaParameters?.maxInstancesCount,
              maxIdleTimeInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.maxIdleTimeInSeconds,
              timeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.timeoutInSeconds,
              statusTimeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.statusTimeoutInSeconds,
              pinned: this.__input.lambdaFunction?.componentLambdaParameters?.pinned,
              inputPayloadEncodingType: this.__input.lambdaFunction?.componentLambdaParameters?.inputPayloadEncodingType,
              execArgs: this.__input.lambdaFunction?.componentLambdaParameters?.execArgs,
              environmentVariables: this.__input.lambdaFunction?.componentLambdaParameters?.environmentVariables,
              linuxProcessParams: {
                isolationMode: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.isolationMode,
                containerParams: {
                  memorySizeInKB: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.memorySizeInKB,
                  mountROSysfs: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.mountROSysfs,
                  volumes: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.volumes,
                  devices: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.devices,
                },
              },
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponentVersion.creationTimestamp', props);
    return resource.getResponseField('creationTimestamp') as unknown as string;
  }

  public get status(): GreengrassV2ResponsesCreateComponentVersionStatus {
    return new GreengrassV2ResponsesCreateComponentVersionStatus(this.__scope, this.__resources, this.__input);
  }

}

export class GreengrassV2ResponsesCreateComponentVersionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2CreateComponentVersionRequest) {
  }

  public get componentState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponentVersion',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateComponentVersion.status.componentState'),
        outputPath: 'status.componentState',
        parameters: {
          inlineRecipe: {
          },
          lambdaFunction: {
            lambdaArn: this.__input.lambdaFunction?.lambdaArn,
            componentName: this.__input.lambdaFunction?.componentName,
            componentVersion: this.__input.lambdaFunction?.componentVersion,
            componentPlatforms: this.__input.lambdaFunction?.componentPlatforms,
            componentDependencies: this.__input.lambdaFunction?.componentDependencies,
            componentLambdaParameters: {
              eventSources: this.__input.lambdaFunction?.componentLambdaParameters?.eventSources,
              maxQueueSize: this.__input.lambdaFunction?.componentLambdaParameters?.maxQueueSize,
              maxInstancesCount: this.__input.lambdaFunction?.componentLambdaParameters?.maxInstancesCount,
              maxIdleTimeInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.maxIdleTimeInSeconds,
              timeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.timeoutInSeconds,
              statusTimeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.statusTimeoutInSeconds,
              pinned: this.__input.lambdaFunction?.componentLambdaParameters?.pinned,
              inputPayloadEncodingType: this.__input.lambdaFunction?.componentLambdaParameters?.inputPayloadEncodingType,
              execArgs: this.__input.lambdaFunction?.componentLambdaParameters?.execArgs,
              environmentVariables: this.__input.lambdaFunction?.componentLambdaParameters?.environmentVariables,
              linuxProcessParams: {
                isolationMode: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.isolationMode,
                containerParams: {
                  memorySizeInKB: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.memorySizeInKB,
                  mountROSysfs: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.mountROSysfs,
                  volumes: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.volumes,
                  devices: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.devices,
                },
              },
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponentVersion.status.componentState', props);
    return resource.getResponseField('status.componentState') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponentVersion',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateComponentVersion.status.message'),
        outputPath: 'status.message',
        parameters: {
          inlineRecipe: {
          },
          lambdaFunction: {
            lambdaArn: this.__input.lambdaFunction?.lambdaArn,
            componentName: this.__input.lambdaFunction?.componentName,
            componentVersion: this.__input.lambdaFunction?.componentVersion,
            componentPlatforms: this.__input.lambdaFunction?.componentPlatforms,
            componentDependencies: this.__input.lambdaFunction?.componentDependencies,
            componentLambdaParameters: {
              eventSources: this.__input.lambdaFunction?.componentLambdaParameters?.eventSources,
              maxQueueSize: this.__input.lambdaFunction?.componentLambdaParameters?.maxQueueSize,
              maxInstancesCount: this.__input.lambdaFunction?.componentLambdaParameters?.maxInstancesCount,
              maxIdleTimeInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.maxIdleTimeInSeconds,
              timeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.timeoutInSeconds,
              statusTimeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.statusTimeoutInSeconds,
              pinned: this.__input.lambdaFunction?.componentLambdaParameters?.pinned,
              inputPayloadEncodingType: this.__input.lambdaFunction?.componentLambdaParameters?.inputPayloadEncodingType,
              execArgs: this.__input.lambdaFunction?.componentLambdaParameters?.execArgs,
              environmentVariables: this.__input.lambdaFunction?.componentLambdaParameters?.environmentVariables,
              linuxProcessParams: {
                isolationMode: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.isolationMode,
                containerParams: {
                  memorySizeInKB: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.memorySizeInKB,
                  mountROSysfs: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.mountROSysfs,
                  volumes: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.volumes,
                  devices: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.devices,
                },
              },
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponentVersion.status.message', props);
    return resource.getResponseField('status.message') as unknown as string;
  }

  public get errors(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponentVersion',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateComponentVersion.status.errors'),
        outputPath: 'status.errors',
        parameters: {
          inlineRecipe: {
          },
          lambdaFunction: {
            lambdaArn: this.__input.lambdaFunction?.lambdaArn,
            componentName: this.__input.lambdaFunction?.componentName,
            componentVersion: this.__input.lambdaFunction?.componentVersion,
            componentPlatforms: this.__input.lambdaFunction?.componentPlatforms,
            componentDependencies: this.__input.lambdaFunction?.componentDependencies,
            componentLambdaParameters: {
              eventSources: this.__input.lambdaFunction?.componentLambdaParameters?.eventSources,
              maxQueueSize: this.__input.lambdaFunction?.componentLambdaParameters?.maxQueueSize,
              maxInstancesCount: this.__input.lambdaFunction?.componentLambdaParameters?.maxInstancesCount,
              maxIdleTimeInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.maxIdleTimeInSeconds,
              timeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.timeoutInSeconds,
              statusTimeoutInSeconds: this.__input.lambdaFunction?.componentLambdaParameters?.statusTimeoutInSeconds,
              pinned: this.__input.lambdaFunction?.componentLambdaParameters?.pinned,
              inputPayloadEncodingType: this.__input.lambdaFunction?.componentLambdaParameters?.inputPayloadEncodingType,
              execArgs: this.__input.lambdaFunction?.componentLambdaParameters?.execArgs,
              environmentVariables: this.__input.lambdaFunction?.componentLambdaParameters?.environmentVariables,
              linuxProcessParams: {
                isolationMode: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.isolationMode,
                containerParams: {
                  memorySizeInKB: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.memorySizeInKB,
                  mountROSysfs: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.mountROSysfs,
                  volumes: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.volumes,
                  devices: this.__input.lambdaFunction?.componentLambdaParameters?.linuxProcessParams?.containerParams?.devices,
                },
              },
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponentVersion.status.errors', props);
    return resource.getResponseField('status.errors') as unknown as Record<string, string>;
  }

}

export class GreengrassV2ResponsesCreateDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2CreateDeploymentRequest) {
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateDeployment.deploymentId'),
        outputPath: 'deploymentId',
        parameters: {
          targetArn: this.__input.targetArn,
          deploymentName: this.__input.deploymentName,
          components: this.__input.components,
          iotJobConfiguration: {
            jobExecutionsRolloutConfig: {
              exponentialRate: {
                baseRatePerMinute: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
                incrementFactor: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
                rateIncreaseCriteria: {
                  numberOfNotifiedThings: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                  numberOfSucceededThings: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
                },
              },
              maximumPerMinute: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.maximumPerMinute,
            },
            abortConfig: {
              criteriaList: this.__input.iotJobConfiguration?.abortConfig?.criteriaList,
            },
            timeoutConfig: {
              inProgressTimeoutInMinutes: this.__input.iotJobConfiguration?.timeoutConfig?.inProgressTimeoutInMinutes,
            },
          },
          deploymentPolicies: {
            failureHandlingPolicy: this.__input.deploymentPolicies?.failureHandlingPolicy,
            componentUpdatePolicy: {
              timeoutInSeconds: this.__input.deploymentPolicies?.componentUpdatePolicy?.timeoutInSeconds,
              action: this.__input.deploymentPolicies?.componentUpdatePolicy?.action,
            },
            configurationValidationPolicy: {
              timeoutInSeconds: this.__input.deploymentPolicies?.configurationValidationPolicy?.timeoutInSeconds,
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.deploymentId', props);
    return resource.getResponseField('deploymentId') as unknown as string;
  }

  public get iotJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateDeployment.iotJobId'),
        outputPath: 'iotJobId',
        parameters: {
          targetArn: this.__input.targetArn,
          deploymentName: this.__input.deploymentName,
          components: this.__input.components,
          iotJobConfiguration: {
            jobExecutionsRolloutConfig: {
              exponentialRate: {
                baseRatePerMinute: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
                incrementFactor: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
                rateIncreaseCriteria: {
                  numberOfNotifiedThings: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                  numberOfSucceededThings: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
                },
              },
              maximumPerMinute: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.maximumPerMinute,
            },
            abortConfig: {
              criteriaList: this.__input.iotJobConfiguration?.abortConfig?.criteriaList,
            },
            timeoutConfig: {
              inProgressTimeoutInMinutes: this.__input.iotJobConfiguration?.timeoutConfig?.inProgressTimeoutInMinutes,
            },
          },
          deploymentPolicies: {
            failureHandlingPolicy: this.__input.deploymentPolicies?.failureHandlingPolicy,
            componentUpdatePolicy: {
              timeoutInSeconds: this.__input.deploymentPolicies?.componentUpdatePolicy?.timeoutInSeconds,
              action: this.__input.deploymentPolicies?.componentUpdatePolicy?.action,
            },
            configurationValidationPolicy: {
              timeoutInSeconds: this.__input.deploymentPolicies?.configurationValidationPolicy?.timeoutInSeconds,
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.iotJobId', props);
    return resource.getResponseField('iotJobId') as unknown as string;
  }

  public get iotJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.CreateDeployment.iotJobArn'),
        outputPath: 'iotJobArn',
        parameters: {
          targetArn: this.__input.targetArn,
          deploymentName: this.__input.deploymentName,
          components: this.__input.components,
          iotJobConfiguration: {
            jobExecutionsRolloutConfig: {
              exponentialRate: {
                baseRatePerMinute: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
                incrementFactor: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
                rateIncreaseCriteria: {
                  numberOfNotifiedThings: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                  numberOfSucceededThings: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
                },
              },
              maximumPerMinute: this.__input.iotJobConfiguration?.jobExecutionsRolloutConfig?.maximumPerMinute,
            },
            abortConfig: {
              criteriaList: this.__input.iotJobConfiguration?.abortConfig?.criteriaList,
            },
            timeoutConfig: {
              inProgressTimeoutInMinutes: this.__input.iotJobConfiguration?.timeoutConfig?.inProgressTimeoutInMinutes,
            },
          },
          deploymentPolicies: {
            failureHandlingPolicy: this.__input.deploymentPolicies?.failureHandlingPolicy,
            componentUpdatePolicy: {
              timeoutInSeconds: this.__input.deploymentPolicies?.componentUpdatePolicy?.timeoutInSeconds,
              action: this.__input.deploymentPolicies?.componentUpdatePolicy?.action,
            },
            configurationValidationPolicy: {
              timeoutInSeconds: this.__input.deploymentPolicies?.configurationValidationPolicy?.timeoutInSeconds,
            },
          },
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.iotJobArn', props);
    return resource.getResponseField('iotJobArn') as unknown as string;
  }

}

export class GreengrassV2ResponsesDescribeComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2DescribeComponentRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.arn'),
        outputPath: 'arn',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get componentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.componentName'),
        outputPath: 'componentName',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.componentName', props);
    return resource.getResponseField('componentName') as unknown as string;
  }

  public get componentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.componentVersion'),
        outputPath: 'componentVersion',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.componentVersion', props);
    return resource.getResponseField('componentVersion') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.creationTimestamp'),
        outputPath: 'creationTimestamp',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.creationTimestamp', props);
    return resource.getResponseField('creationTimestamp') as unknown as string;
  }

  public get publisher(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.publisher'),
        outputPath: 'publisher',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.publisher', props);
    return resource.getResponseField('publisher') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.description'),
        outputPath: 'description',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get status(): GreengrassV2ResponsesDescribeComponentStatus {
    return new GreengrassV2ResponsesDescribeComponentStatus(this.__scope, this.__resources, this.__input);
  }

  public get platforms(): shapes.GreengrassV2ComponentPlatform[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.platforms'),
        outputPath: 'platforms',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.platforms', props);
    return resource.getResponseField('platforms') as unknown as shapes.GreengrassV2ComponentPlatform[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.tags'),
        outputPath: 'tags',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassV2ResponsesDescribeComponentStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2DescribeComponentRequest) {
  }

  public get componentState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.status.componentState'),
        outputPath: 'status.componentState',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.status.componentState', props);
    return resource.getResponseField('status.componentState') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.status.message'),
        outputPath: 'status.message',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.status.message', props);
    return resource.getResponseField('status.message') as unknown as string;
  }

  public get errors(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.DescribeComponent.status.errors'),
        outputPath: 'status.errors',
        parameters: {
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.status.errors', props);
    return resource.getResponseField('status.errors') as unknown as Record<string, string>;
  }

}

export class GreengrassV2ResponsesFetchComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetComponentRequest) {
  }

  public get recipeOutputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetComponent.recipeOutputFormat'),
        outputPath: 'recipeOutputFormat',
        parameters: {
          recipeOutputFormat: this.__input.recipeOutputFormat,
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.recipeOutputFormat', props);
    return resource.getResponseField('recipeOutputFormat') as unknown as string;
  }

  public get recipe(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetComponent.recipe'),
        outputPath: 'recipe',
        parameters: {
          recipeOutputFormat: this.__input.recipeOutputFormat,
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.recipe', props);
    return resource.getResponseField('recipe') as unknown as any;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetComponent.tags'),
        outputPath: 'tags',
        parameters: {
          recipeOutputFormat: this.__input.recipeOutputFormat,
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassV2ResponsesFetchComponentVersionArtifact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetComponentVersionArtifactRequest) {
  }

  public get preSignedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponentVersionArtifact',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetComponentVersionArtifact.preSignedUrl'),
        outputPath: 'preSignedUrl',
        parameters: {
          arn: this.__input.arn,
          artifactName: this.__input.artifactName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponentVersionArtifact.preSignedUrl', props);
    return resource.getResponseField('preSignedUrl') as unknown as string;
  }

}

export class GreengrassV2ResponsesFetchCoreDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetCoreDeviceRequest) {
  }

  public get coreDeviceThingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetCoreDevice.coreDeviceThingName'),
        outputPath: 'coreDeviceThingName',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDevice.coreDeviceThingName', props);
    return resource.getResponseField('coreDeviceThingName') as unknown as string;
  }

  public get coreVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetCoreDevice.coreVersion'),
        outputPath: 'coreVersion',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDevice.coreVersion', props);
    return resource.getResponseField('coreVersion') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetCoreDevice.platform'),
        outputPath: 'platform',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDevice.platform', props);
    return resource.getResponseField('platform') as unknown as string;
  }

  public get architecture(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetCoreDevice.architecture'),
        outputPath: 'architecture',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDevice.architecture', props);
    return resource.getResponseField('architecture') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetCoreDevice.status'),
        outputPath: 'status',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDevice.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get lastStatusUpdateTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetCoreDevice.lastStatusUpdateTimestamp'),
        outputPath: 'lastStatusUpdateTimestamp',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDevice.lastStatusUpdateTimestamp', props);
    return resource.getResponseField('lastStatusUpdateTimestamp') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetCoreDevice.tags'),
        outputPath: 'tags',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDevice.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassV2ResponsesFetchDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.targetArn'),
        outputPath: 'targetArn',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.targetArn', props);
    return resource.getResponseField('targetArn') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.deploymentId'),
        outputPath: 'deploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentId', props);
    return resource.getResponseField('deploymentId') as unknown as string;
  }

  public get deploymentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.deploymentName'),
        outputPath: 'deploymentName',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentName', props);
    return resource.getResponseField('deploymentName') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.deploymentStatus'),
        outputPath: 'deploymentStatus',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentStatus', props);
    return resource.getResponseField('deploymentStatus') as unknown as string;
  }

  public get iotJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.iotJobId'),
        outputPath: 'iotJobId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.iotJobId', props);
    return resource.getResponseField('iotJobId') as unknown as string;
  }

  public get iotJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.iotJobArn'),
        outputPath: 'iotJobArn',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.iotJobArn', props);
    return resource.getResponseField('iotJobArn') as unknown as string;
  }

  public get components(): Record<string, shapes.GreengrassV2ComponentDeploymentSpecification> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.components'),
        outputPath: 'components',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.components', props);
    return resource.getResponseField('components') as unknown as Record<string, shapes.GreengrassV2ComponentDeploymentSpecification>;
  }

  public get deploymentPolicies(): GreengrassV2ResponsesFetchDeploymentDeploymentPolicies {
    return new GreengrassV2ResponsesFetchDeploymentDeploymentPolicies(this.__scope, this.__resources, this.__input);
  }

  public get iotJobConfiguration(): GreengrassV2ResponsesFetchDeploymentIotJobConfiguration {
    return new GreengrassV2ResponsesFetchDeploymentIotJobConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.creationTimestamp'),
        outputPath: 'creationTimestamp',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.creationTimestamp', props);
    return resource.getResponseField('creationTimestamp') as unknown as string;
  }

  public get isLatestForTarget(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.isLatestForTarget'),
        outputPath: 'isLatestForTarget',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.isLatestForTarget', props);
    return resource.getResponseField('isLatestForTarget') as unknown as boolean;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.tags'),
        outputPath: 'tags',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassV2ResponsesFetchDeploymentDeploymentPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get failureHandlingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.deploymentPolicies.failureHandlingPolicy'),
        outputPath: 'deploymentPolicies.failureHandlingPolicy',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentPolicies.failureHandlingPolicy', props);
    return resource.getResponseField('deploymentPolicies.failureHandlingPolicy') as unknown as string;
  }

  public get componentUpdatePolicy(): GreengrassV2ResponsesFetchDeploymentDeploymentPoliciesComponentUpdatePolicy {
    return new GreengrassV2ResponsesFetchDeploymentDeploymentPoliciesComponentUpdatePolicy(this.__scope, this.__resources, this.__input);
  }

  public get configurationValidationPolicy(): GreengrassV2ResponsesFetchDeploymentDeploymentPoliciesConfigurationValidationPolicy {
    return new GreengrassV2ResponsesFetchDeploymentDeploymentPoliciesConfigurationValidationPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class GreengrassV2ResponsesFetchDeploymentDeploymentPoliciesComponentUpdatePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get timeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.deploymentPolicies.componentUpdatePolicy.timeoutInSeconds'),
        outputPath: 'deploymentPolicies.componentUpdatePolicy.timeoutInSeconds',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentPolicies.componentUpdatePolicy.timeoutInSeconds', props);
    return resource.getResponseField('deploymentPolicies.componentUpdatePolicy.timeoutInSeconds') as unknown as number;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.deploymentPolicies.componentUpdatePolicy.action'),
        outputPath: 'deploymentPolicies.componentUpdatePolicy.action',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentPolicies.componentUpdatePolicy.action', props);
    return resource.getResponseField('deploymentPolicies.componentUpdatePolicy.action') as unknown as string;
  }

}

export class GreengrassV2ResponsesFetchDeploymentDeploymentPoliciesConfigurationValidationPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get timeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.deploymentPolicies.configurationValidationPolicy.timeoutInSeconds'),
        outputPath: 'deploymentPolicies.configurationValidationPolicy.timeoutInSeconds',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentPolicies.configurationValidationPolicy.timeoutInSeconds', props);
    return resource.getResponseField('deploymentPolicies.configurationValidationPolicy.timeoutInSeconds') as unknown as number;
  }

}

export class GreengrassV2ResponsesFetchDeploymentIotJobConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get jobExecutionsRolloutConfig(): GreengrassV2ResponsesFetchDeploymentIotJobConfigurationJobExecutionsRolloutConfig {
    return new GreengrassV2ResponsesFetchDeploymentIotJobConfigurationJobExecutionsRolloutConfig(this.__scope, this.__resources, this.__input);
  }

  public get abortConfig(): GreengrassV2ResponsesFetchDeploymentIotJobConfigurationAbortConfig {
    return new GreengrassV2ResponsesFetchDeploymentIotJobConfigurationAbortConfig(this.__scope, this.__resources, this.__input);
  }

  public get timeoutConfig(): GreengrassV2ResponsesFetchDeploymentIotJobConfigurationTimeoutConfig {
    return new GreengrassV2ResponsesFetchDeploymentIotJobConfigurationTimeoutConfig(this.__scope, this.__resources, this.__input);
  }

}

export class GreengrassV2ResponsesFetchDeploymentIotJobConfigurationJobExecutionsRolloutConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get exponentialRate(): GreengrassV2ResponsesFetchDeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate {
    return new GreengrassV2ResponsesFetchDeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate(this.__scope, this.__resources, this.__input);
  }

  public get maximumPerMinute(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.maximumPerMinute'),
        outputPath: 'iotJobConfiguration.jobExecutionsRolloutConfig.maximumPerMinute',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.maximumPerMinute', props);
    return resource.getResponseField('iotJobConfiguration.jobExecutionsRolloutConfig.maximumPerMinute') as unknown as number;
  }

}

export class GreengrassV2ResponsesFetchDeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get baseRatePerMinute(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute'),
        outputPath: 'iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute', props);
    return resource.getResponseField('iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute') as unknown as number;
  }

  public get incrementFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.incrementFactor'),
        outputPath: 'iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.incrementFactor',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.incrementFactor', props);
    return resource.getResponseField('iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.incrementFactor') as unknown as number;
  }

  public get rateIncreaseCriteria(): GreengrassV2ResponsesFetchDeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
    return new GreengrassV2ResponsesFetchDeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria(this.__scope, this.__resources, this.__input);
  }

}

export class GreengrassV2ResponsesFetchDeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get numberOfNotifiedThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings'),
        outputPath: 'iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings', props);
    return resource.getResponseField('iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings') as unknown as number;
  }

  public get numberOfSucceededThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings'),
        outputPath: 'iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings', props);
    return resource.getResponseField('iotJobConfiguration.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings') as unknown as number;
  }

}

export class GreengrassV2ResponsesFetchDeploymentIotJobConfigurationAbortConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get criteriaList(): shapes.GreengrassV2IoTJobAbortCriteria[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.iotJobConfiguration.abortConfig.criteriaList'),
        outputPath: 'iotJobConfiguration.abortConfig.criteriaList',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.iotJobConfiguration.abortConfig.criteriaList', props);
    return resource.getResponseField('iotJobConfiguration.abortConfig.criteriaList') as unknown as shapes.GreengrassV2IoTJobAbortCriteria[];
  }

}

export class GreengrassV2ResponsesFetchDeploymentIotJobConfigurationTimeoutConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2GetDeploymentRequest) {
  }

  public get inProgressTimeoutInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.GetDeployment.iotJobConfiguration.timeoutConfig.inProgressTimeoutInMinutes'),
        outputPath: 'iotJobConfiguration.timeoutConfig.inProgressTimeoutInMinutes',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.iotJobConfiguration.timeoutConfig.inProgressTimeoutInMinutes', props);
    return resource.getResponseField('iotJobConfiguration.timeoutConfig.inProgressTimeoutInMinutes') as unknown as number;
  }

}

export class GreengrassV2ResponsesListClientDevicesAssociatedWithCoreDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest) {
  }

  public get associatedClientDevices(): shapes.GreengrassV2AssociatedClientDevice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClientDevicesAssociatedWithCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListClientDevicesAssociatedWithCoreDevice.associatedClientDevices'),
        outputPath: 'associatedClientDevices',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClientDevicesAssociatedWithCoreDevice.associatedClientDevices', props);
    return resource.getResponseField('associatedClientDevices') as unknown as shapes.GreengrassV2AssociatedClientDevice[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClientDevicesAssociatedWithCoreDevice',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListClientDevicesAssociatedWithCoreDevice.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClientDevicesAssociatedWithCoreDevice.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GreengrassV2ResponsesListComponentVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2ListComponentVersionsRequest) {
  }

  public get componentVersions(): shapes.GreengrassV2ComponentVersionListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponentVersions',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListComponentVersions.componentVersions'),
        outputPath: 'componentVersions',
        parameters: {
          arn: this.__input.arn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponentVersions.componentVersions', props);
    return resource.getResponseField('componentVersions') as unknown as shapes.GreengrassV2ComponentVersionListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponentVersions',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListComponentVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.__input.arn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponentVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GreengrassV2ResponsesListComponents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2ListComponentsRequest) {
  }

  public get components(): shapes.GreengrassV2Component[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponents',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListComponents.components'),
        outputPath: 'components',
        parameters: {
          scope: this.__input.scope,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponents.components', props);
    return resource.getResponseField('components') as unknown as shapes.GreengrassV2Component[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponents',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListComponents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          scope: this.__input.scope,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GreengrassV2ResponsesListCoreDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2ListCoreDevicesRequest) {
  }

  public get coreDevices(): shapes.GreengrassV2CoreDevice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCoreDevices',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListCoreDevices.coreDevices'),
        outputPath: 'coreDevices',
        parameters: {
          thingGroupArn: this.__input.thingGroupArn,
          status: this.__input.status,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCoreDevices.coreDevices', props);
    return resource.getResponseField('coreDevices') as unknown as shapes.GreengrassV2CoreDevice[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCoreDevices',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListCoreDevices.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          thingGroupArn: this.__input.thingGroupArn,
          status: this.__input.status,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCoreDevices.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GreengrassV2ResponsesListDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2ListDeploymentsRequest) {
  }

  public get deployments(): shapes.GreengrassV2Deployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeployments',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListDeployments.deployments'),
        outputPath: 'deployments',
        parameters: {
          targetArn: this.__input.targetArn,
          historyFilter: this.__input.historyFilter,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeployments.deployments', props);
    return resource.getResponseField('deployments') as unknown as shapes.GreengrassV2Deployment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeployments',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListDeployments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          targetArn: this.__input.targetArn,
          historyFilter: this.__input.historyFilter,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeployments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GreengrassV2ResponsesListEffectiveDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2ListEffectiveDeploymentsRequest) {
  }

  public get effectiveDeployments(): shapes.GreengrassV2EffectiveDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEffectiveDeployments',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListEffectiveDeployments.effectiveDeployments'),
        outputPath: 'effectiveDeployments',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEffectiveDeployments.effectiveDeployments', props);
    return resource.getResponseField('effectiveDeployments') as unknown as shapes.GreengrassV2EffectiveDeployment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEffectiveDeployments',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListEffectiveDeployments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEffectiveDeployments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GreengrassV2ResponsesListInstalledComponents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2ListInstalledComponentsRequest) {
  }

  public get installedComponents(): shapes.GreengrassV2InstalledComponent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstalledComponents',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListInstalledComponents.installedComponents'),
        outputPath: 'installedComponents',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstalledComponents.installedComponents', props);
    return resource.getResponseField('installedComponents') as unknown as shapes.GreengrassV2InstalledComponent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstalledComponents',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListInstalledComponents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          coreDeviceThingName: this.__input.coreDeviceThingName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstalledComponents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class GreengrassV2ResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2ListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ListTagsForResource.tags'),
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

export class GreengrassV2ResponsesResolveComponentCandidates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassV2ResolveComponentCandidatesRequest) {
  }

  public get resolvedComponentVersions(): shapes.GreengrassV2ResolvedComponentVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resolveComponentCandidates',
        service: 'GreengrassV2',
        physicalResourceId: cr.PhysicalResourceId.of('GreengrassV2.ResolveComponentCandidates.resolvedComponentVersions'),
        outputPath: 'resolvedComponentVersions',
        parameters: {
          platform: {
            name: this.__input.platform.name,
            attributes: this.__input.platform.attributes,
          },
          componentCandidates: this.__input.componentCandidates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResolveComponentCandidates.resolvedComponentVersions', props);
    return resource.getResponseField('resolvedComponentVersions') as unknown as shapes.GreengrassV2ResolvedComponentVersion[];
  }

}

