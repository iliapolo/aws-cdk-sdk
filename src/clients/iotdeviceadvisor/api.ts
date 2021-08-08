import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IotDeviceAdvisorClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createSuiteDefinition(input: shapes.IotDeviceAdvisorCreateSuiteDefinitionRequest): IotDeviceAdvisorResponsesCreateSuiteDefinition {
    return new IotDeviceAdvisorResponsesCreateSuiteDefinition(this, this.__resources, input);
  }

  public deleteSuiteDefinition(input: shapes.IotDeviceAdvisorDeleteSuiteDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.DeleteSuiteDefinition'),
        parameters: {
          suiteDefinitionId: input.suiteDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSuiteDefinition', props);
  }

  public fetchSuiteDefinition(input: shapes.IotDeviceAdvisorGetSuiteDefinitionRequest): IotDeviceAdvisorResponsesFetchSuiteDefinition {
    return new IotDeviceAdvisorResponsesFetchSuiteDefinition(this, this.__resources, input);
  }

  public fetchSuiteRun(input: shapes.IotDeviceAdvisorGetSuiteRunRequest): IotDeviceAdvisorResponsesFetchSuiteRun {
    return new IotDeviceAdvisorResponsesFetchSuiteRun(this, this.__resources, input);
  }

  public fetchSuiteRunReport(input: shapes.IotDeviceAdvisorGetSuiteRunReportRequest): IotDeviceAdvisorResponsesFetchSuiteRunReport {
    return new IotDeviceAdvisorResponsesFetchSuiteRunReport(this, this.__resources, input);
  }

  public listSuiteDefinitions(input: shapes.IotDeviceAdvisorListSuiteDefinitionsRequest): IotDeviceAdvisorResponsesListSuiteDefinitions {
    return new IotDeviceAdvisorResponsesListSuiteDefinitions(this, this.__resources, input);
  }

  public listSuiteRuns(input: shapes.IotDeviceAdvisorListSuiteRunsRequest): IotDeviceAdvisorResponsesListSuiteRuns {
    return new IotDeviceAdvisorResponsesListSuiteRuns(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IotDeviceAdvisorListTagsForResourceRequest): IotDeviceAdvisorResponsesListTagsForResource {
    return new IotDeviceAdvisorResponsesListTagsForResource(this, this.__resources, input);
  }

  public startSuiteRun(input: shapes.IotDeviceAdvisorStartSuiteRunRequest): IotDeviceAdvisorResponsesStartSuiteRun {
    return new IotDeviceAdvisorResponsesStartSuiteRun(this, this.__resources, input);
  }

  public stopSuiteRun(input: shapes.IotDeviceAdvisorStopSuiteRunRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.StopSuiteRun'),
        parameters: {
          suiteDefinitionId: input.suiteDefinitionId,
          suiteRunId: input.suiteRunId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopSuiteRun', props);
  }

  public tagResource(input: shapes.IotDeviceAdvisorTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.IotDeviceAdvisorUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateSuiteDefinition(input: shapes.IotDeviceAdvisorUpdateSuiteDefinitionRequest): IotDeviceAdvisorResponsesUpdateSuiteDefinition {
    return new IotDeviceAdvisorResponsesUpdateSuiteDefinition(this, this.__resources, input);
  }

}

export class IotDeviceAdvisorResponsesCreateSuiteDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorCreateSuiteDefinitionRequest) {
  }

  public get suiteDefinitionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.CreateSuiteDefinition.suiteDefinitionId'),
        outputPath: 'suiteDefinitionId',
        parameters: {
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSuiteDefinition.suiteDefinitionId', props);
    return resource.getResponseField('suiteDefinitionId') as unknown as string;
  }

  public get suiteDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.CreateSuiteDefinition.suiteDefinitionArn'),
        outputPath: 'suiteDefinitionArn',
        parameters: {
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSuiteDefinition.suiteDefinitionArn', props);
    return resource.getResponseField('suiteDefinitionArn') as unknown as string;
  }

  public get suiteDefinitionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.CreateSuiteDefinition.suiteDefinitionName'),
        outputPath: 'suiteDefinitionName',
        parameters: {
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSuiteDefinition.suiteDefinitionName', props);
    return resource.getResponseField('suiteDefinitionName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.CreateSuiteDefinition.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSuiteDefinition.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

}

export class IotDeviceAdvisorResponsesFetchSuiteDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorGetSuiteDefinitionRequest) {
  }

  public get suiteDefinitionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.suiteDefinitionId'),
        outputPath: 'suiteDefinitionId',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.suiteDefinitionId', props);
    return resource.getResponseField('suiteDefinitionId') as unknown as string;
  }

  public get suiteDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.suiteDefinitionArn'),
        outputPath: 'suiteDefinitionArn',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.suiteDefinitionArn', props);
    return resource.getResponseField('suiteDefinitionArn') as unknown as string;
  }

  public get suiteDefinitionVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.suiteDefinitionVersion'),
        outputPath: 'suiteDefinitionVersion',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.suiteDefinitionVersion', props);
    return resource.getResponseField('suiteDefinitionVersion') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.latestVersion'),
        outputPath: 'latestVersion',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.latestVersion', props);
    return resource.getResponseField('latestVersion') as unknown as string;
  }

  public get suiteDefinitionConfiguration(): IotDeviceAdvisorResponsesFetchSuiteDefinitionSuiteDefinitionConfiguration {
    return new IotDeviceAdvisorResponsesFetchSuiteDefinitionSuiteDefinitionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.lastModifiedAt'),
        outputPath: 'lastModifiedAt',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.lastModifiedAt', props);
    return resource.getResponseField('lastModifiedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class IotDeviceAdvisorResponsesFetchSuiteDefinitionSuiteDefinitionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorGetSuiteDefinitionRequest) {
  }

  public get suiteDefinitionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.suiteDefinitionConfiguration.suiteDefinitionName'),
        outputPath: 'suiteDefinitionConfiguration.suiteDefinitionName',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.suiteDefinitionConfiguration.suiteDefinitionName', props);
    return resource.getResponseField('suiteDefinitionConfiguration.suiteDefinitionName') as unknown as string;
  }

  public get devices(): shapes.IotDeviceAdvisorDeviceUnderTest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.suiteDefinitionConfiguration.devices'),
        outputPath: 'suiteDefinitionConfiguration.devices',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.suiteDefinitionConfiguration.devices', props);
    return resource.getResponseField('suiteDefinitionConfiguration.devices') as unknown as shapes.IotDeviceAdvisorDeviceUnderTest[];
  }

  public get intendedForQualification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.suiteDefinitionConfiguration.intendedForQualification'),
        outputPath: 'suiteDefinitionConfiguration.intendedForQualification',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.suiteDefinitionConfiguration.intendedForQualification', props);
    return resource.getResponseField('suiteDefinitionConfiguration.intendedForQualification') as unknown as boolean;
  }

  public get rootGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.suiteDefinitionConfiguration.rootGroup'),
        outputPath: 'suiteDefinitionConfiguration.rootGroup',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.suiteDefinitionConfiguration.rootGroup', props);
    return resource.getResponseField('suiteDefinitionConfiguration.rootGroup') as unknown as string;
  }

  public get devicePermissionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteDefinition.suiteDefinitionConfiguration.devicePermissionRoleArn'),
        outputPath: 'suiteDefinitionConfiguration.devicePermissionRoleArn',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteDefinition.suiteDefinitionConfiguration.devicePermissionRoleArn', props);
    return resource.getResponseField('suiteDefinitionConfiguration.devicePermissionRoleArn') as unknown as string;
  }

}

export class IotDeviceAdvisorResponsesFetchSuiteRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorGetSuiteRunRequest) {
  }

  public get suiteDefinitionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.suiteDefinitionId'),
        outputPath: 'suiteDefinitionId',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.suiteDefinitionId', props);
    return resource.getResponseField('suiteDefinitionId') as unknown as string;
  }

  public get suiteDefinitionVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.suiteDefinitionVersion'),
        outputPath: 'suiteDefinitionVersion',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.suiteDefinitionVersion', props);
    return resource.getResponseField('suiteDefinitionVersion') as unknown as string;
  }

  public get suiteRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.suiteRunId'),
        outputPath: 'suiteRunId',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.suiteRunId', props);
    return resource.getResponseField('suiteRunId') as unknown as string;
  }

  public get suiteRunArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.suiteRunArn'),
        outputPath: 'suiteRunArn',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.suiteRunArn', props);
    return resource.getResponseField('suiteRunArn') as unknown as string;
  }

  public get suiteRunConfiguration(): IotDeviceAdvisorResponsesFetchSuiteRunSuiteRunConfiguration {
    return new IotDeviceAdvisorResponsesFetchSuiteRunSuiteRunConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get testResult(): IotDeviceAdvisorResponsesFetchSuiteRunTestResult {
    return new IotDeviceAdvisorResponsesFetchSuiteRunTestResult(this.__scope, this.__resources, this.__input);
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.startTime'),
        outputPath: 'startTime',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.startTime', props);
    return resource.getResponseField('startTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.endTime'),
        outputPath: 'endTime',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.endTime', props);
    return resource.getResponseField('endTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.status'),
        outputPath: 'status',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get errorReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.errorReason'),
        outputPath: 'errorReason',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.errorReason', props);
    return resource.getResponseField('errorReason') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.tags'),
        outputPath: 'tags',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class IotDeviceAdvisorResponsesFetchSuiteRunSuiteRunConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorGetSuiteRunRequest) {
  }

  public get primaryDevice(): IotDeviceAdvisorResponsesFetchSuiteRunSuiteRunConfigurationPrimaryDevice {
    return new IotDeviceAdvisorResponsesFetchSuiteRunSuiteRunConfigurationPrimaryDevice(this.__scope, this.__resources, this.__input);
  }

  public get selectedTestList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.suiteRunConfiguration.selectedTestList'),
        outputPath: 'suiteRunConfiguration.selectedTestList',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.suiteRunConfiguration.selectedTestList', props);
    return resource.getResponseField('suiteRunConfiguration.selectedTestList') as unknown as string[];
  }

}

export class IotDeviceAdvisorResponsesFetchSuiteRunSuiteRunConfigurationPrimaryDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorGetSuiteRunRequest) {
  }

  public get thingArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.suiteRunConfiguration.primaryDevice.thingArn'),
        outputPath: 'suiteRunConfiguration.primaryDevice.thingArn',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.suiteRunConfiguration.primaryDevice.thingArn', props);
    return resource.getResponseField('suiteRunConfiguration.primaryDevice.thingArn') as unknown as string;
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.suiteRunConfiguration.primaryDevice.certificateArn'),
        outputPath: 'suiteRunConfiguration.primaryDevice.certificateArn',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.suiteRunConfiguration.primaryDevice.certificateArn', props);
    return resource.getResponseField('suiteRunConfiguration.primaryDevice.certificateArn') as unknown as string;
  }

}

export class IotDeviceAdvisorResponsesFetchSuiteRunTestResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorGetSuiteRunRequest) {
  }

  public get groups(): shapes.IotDeviceAdvisorGroupResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRun.testResult.groups'),
        outputPath: 'testResult.groups',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRun.testResult.groups', props);
    return resource.getResponseField('testResult.groups') as unknown as shapes.IotDeviceAdvisorGroupResult[];
  }

}

export class IotDeviceAdvisorResponsesFetchSuiteRunReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorGetSuiteRunReportRequest) {
  }

  public get qualificationReportDownloadUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuiteRunReport',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.GetSuiteRunReport.qualificationReportDownloadUrl'),
        outputPath: 'qualificationReportDownloadUrl',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteRunId: this.__input.suiteRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuiteRunReport.qualificationReportDownloadUrl', props);
    return resource.getResponseField('qualificationReportDownloadUrl') as unknown as string;
  }

}

export class IotDeviceAdvisorResponsesListSuiteDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorListSuiteDefinitionsRequest) {
  }

  public get suiteDefinitionInformationList(): shapes.IotDeviceAdvisorSuiteDefinitionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSuiteDefinitions',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.ListSuiteDefinitions.suiteDefinitionInformationList'),
        outputPath: 'suiteDefinitionInformationList',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSuiteDefinitions.suiteDefinitionInformationList', props);
    return resource.getResponseField('suiteDefinitionInformationList') as unknown as shapes.IotDeviceAdvisorSuiteDefinitionInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSuiteDefinitions',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.ListSuiteDefinitions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSuiteDefinitions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotDeviceAdvisorResponsesListSuiteRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorListSuiteRunsRequest) {
  }

  public get suiteRunsList(): shapes.IotDeviceAdvisorSuiteRunInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSuiteRuns',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.ListSuiteRuns.suiteRunsList'),
        outputPath: 'suiteRunsList',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSuiteRuns.suiteRunsList', props);
    return resource.getResponseField('suiteRunsList') as unknown as shapes.IotDeviceAdvisorSuiteRunInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSuiteRuns',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.ListSuiteRuns.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSuiteRuns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotDeviceAdvisorResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.ListTagsForResource.tags'),
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

export class IotDeviceAdvisorResponsesStartSuiteRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorStartSuiteRunRequest) {
  }

  public get suiteRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.StartSuiteRun.suiteRunId'),
        outputPath: 'suiteRunId',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
          suiteRunConfiguration: {
            primaryDevice: {
              thingArn: this.__input.suiteRunConfiguration?.primaryDevice?.thingArn,
              certificateArn: this.__input.suiteRunConfiguration?.primaryDevice?.certificateArn,
            },
            selectedTestList: this.__input.suiteRunConfiguration?.selectedTestList,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSuiteRun.suiteRunId', props);
    return resource.getResponseField('suiteRunId') as unknown as string;
  }

  public get suiteRunArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.StartSuiteRun.suiteRunArn'),
        outputPath: 'suiteRunArn',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
          suiteRunConfiguration: {
            primaryDevice: {
              thingArn: this.__input.suiteRunConfiguration?.primaryDevice?.thingArn,
              certificateArn: this.__input.suiteRunConfiguration?.primaryDevice?.certificateArn,
            },
            selectedTestList: this.__input.suiteRunConfiguration?.selectedTestList,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSuiteRun.suiteRunArn', props);
    return resource.getResponseField('suiteRunArn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSuiteRun',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.StartSuiteRun.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionVersion: this.__input.suiteDefinitionVersion,
          suiteRunConfiguration: {
            primaryDevice: {
              thingArn: this.__input.suiteRunConfiguration?.primaryDevice?.thingArn,
              certificateArn: this.__input.suiteRunConfiguration?.primaryDevice?.certificateArn,
            },
            selectedTestList: this.__input.suiteRunConfiguration?.selectedTestList,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSuiteRun.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

}

export class IotDeviceAdvisorResponsesUpdateSuiteDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDeviceAdvisorUpdateSuiteDefinitionRequest) {
  }

  public get suiteDefinitionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.UpdateSuiteDefinition.suiteDefinitionId'),
        outputPath: 'suiteDefinitionId',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSuiteDefinition.suiteDefinitionId', props);
    return resource.getResponseField('suiteDefinitionId') as unknown as string;
  }

  public get suiteDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.UpdateSuiteDefinition.suiteDefinitionArn'),
        outputPath: 'suiteDefinitionArn',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSuiteDefinition.suiteDefinitionArn', props);
    return resource.getResponseField('suiteDefinitionArn') as unknown as string;
  }

  public get suiteDefinitionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.UpdateSuiteDefinition.suiteDefinitionName'),
        outputPath: 'suiteDefinitionName',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSuiteDefinition.suiteDefinitionName', props);
    return resource.getResponseField('suiteDefinitionName') as unknown as string;
  }

  public get suiteDefinitionVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.UpdateSuiteDefinition.suiteDefinitionVersion'),
        outputPath: 'suiteDefinitionVersion',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSuiteDefinition.suiteDefinitionVersion', props);
    return resource.getResponseField('suiteDefinitionVersion') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.UpdateSuiteDefinition.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSuiteDefinition.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSuiteDefinition',
        service: 'IotDeviceAdvisor',
        physicalResourceId: cr.PhysicalResourceId.of('IotDeviceAdvisor.UpdateSuiteDefinition.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          suiteDefinitionId: this.__input.suiteDefinitionId,
          suiteDefinitionConfiguration: {
            suiteDefinitionName: this.__input.suiteDefinitionConfiguration?.suiteDefinitionName,
            devices: this.__input.suiteDefinitionConfiguration?.devices,
            intendedForQualification: this.__input.suiteDefinitionConfiguration?.intendedForQualification,
            rootGroup: this.__input.suiteDefinitionConfiguration?.rootGroup,
            devicePermissionRoleArn: this.__input.suiteDefinitionConfiguration?.devicePermissionRoleArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSuiteDefinition.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

}

