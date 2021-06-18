import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MwaaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCliToken(input: shapes.MwaaCreateCliTokenRequest): MWAACreateCliToken {
    return new MWAACreateCliToken(this, 'CreateCliToken', this.__resources, input);
  }

  public createEnvironment(input: shapes.MwaaCreateEnvironmentInput): MWAACreateEnvironment {
    return new MWAACreateEnvironment(this, 'CreateEnvironment', this.__resources, input);
  }

  public createWebLoginToken(input: shapes.MwaaCreateWebLoginTokenRequest): MWAACreateWebLoginToken {
    return new MWAACreateWebLoginToken(this, 'CreateWebLoginToken', this.__resources, input);
  }

  public deleteEnvironment(input: shapes.MwaaDeleteEnvironmentInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.DeleteEnvironment'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEnvironment', props);
  }

  public fetchEnvironment(input: shapes.MwaaGetEnvironmentInput): MWAAFetchEnvironment {
    return new MWAAFetchEnvironment(this, 'FetchEnvironment', this.__resources, input);
  }

  public listEnvironments(input: shapes.MwaaListEnvironmentsInput): MWAAListEnvironments {
    return new MWAAListEnvironments(this, 'ListEnvironments', this.__resources, input);
  }

  public listTagsForResource(input: shapes.MwaaListTagsForResourceInput): MWAAListTagsForResource {
    return new MWAAListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public publishMetrics(input: shapes.MwaaPublishMetricsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishMetrics',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.PublishMetrics'),
        parameters: {
          EnvironmentName: input.environmentName,
          MetricData: input.metricData,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PublishMetrics', props);
  }

  public tagResource(input: shapes.MwaaTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.MwaaUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateEnvironment(input: shapes.MwaaUpdateEnvironmentInput): MWAAUpdateEnvironment {
    return new MWAAUpdateEnvironment(this, 'UpdateEnvironment', this.__resources, input);
  }

}

export class MWAACreateCliToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaCreateCliTokenRequest) {
    super(scope, id);
  }

  public get cliToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCliToken',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.CreateCliToken.CliToken'),
        outputPath: 'CliToken',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCliToken.CliToken', props);
    return resource.getResponseField('CliToken') as unknown as string;
  }

  public get webServerHostname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCliToken',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.CreateCliToken.WebServerHostname'),
        outputPath: 'WebServerHostname',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCliToken.WebServerHostname', props);
    return resource.getResponseField('WebServerHostname') as unknown as string;
  }

}

export class MWAACreateEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaCreateEnvironmentInput) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.CreateEnvironment.Arn'),
        outputPath: 'Arn',
        parameters: {
          AirflowConfigurationOptions: this.input.airflowConfigurationOptions,
          AirflowVersion: this.input.airflowVersion,
          DagS3Path: this.input.dagS3Path,
          EnvironmentClass: this.input.environmentClass,
          ExecutionRoleArn: this.input.executionRoleArn,
          KmsKey: this.input.kmsKey,
          LoggingConfiguration: {
            DagProcessingLogs: {
              Enabled: this.input.loggingConfiguration?.dagProcessingLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.dagProcessingLogs?.logLevel,
            },
            SchedulerLogs: {
              Enabled: this.input.loggingConfiguration?.schedulerLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.schedulerLogs?.logLevel,
            },
            TaskLogs: {
              Enabled: this.input.loggingConfiguration?.taskLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.taskLogs?.logLevel,
            },
            WebserverLogs: {
              Enabled: this.input.loggingConfiguration?.webserverLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.webserverLogs?.logLevel,
            },
            WorkerLogs: {
              Enabled: this.input.loggingConfiguration?.workerLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.workerLogs?.logLevel,
            },
          },
          MaxWorkers: this.input.maxWorkers,
          Name: this.input.name,
          NetworkConfiguration: {
            SecurityGroupIds: this.input.networkConfiguration.securityGroupIds,
            SubnetIds: this.input.networkConfiguration.subnetIds,
          },
          PluginsS3ObjectVersion: this.input.pluginsS3ObjectVersion,
          PluginsS3Path: this.input.pluginsS3Path,
          RequirementsS3ObjectVersion: this.input.requirementsS3ObjectVersion,
          RequirementsS3Path: this.input.requirementsS3Path,
          SourceBucketArn: this.input.sourceBucketArn,
          Tags: this.input.tags,
          WebserverAccessMode: this.input.webserverAccessMode,
          WeeklyMaintenanceWindowStart: this.input.weeklyMaintenanceWindowStart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class MWAACreateWebLoginToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaCreateWebLoginTokenRequest) {
    super(scope, id);
  }

  public get webServerHostname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebLoginToken',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.CreateWebLoginToken.WebServerHostname'),
        outputPath: 'WebServerHostname',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebLoginToken.WebServerHostname', props);
    return resource.getResponseField('WebServerHostname') as unknown as string;
  }

  public get webToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebLoginToken',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.CreateWebLoginToken.WebToken'),
        outputPath: 'WebToken',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebLoginToken.WebToken', props);
    return resource.getResponseField('WebToken') as unknown as string;
  }

}

export class MWAAFetchEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get environment(): MWAAFetchEnvironmentEnvironment {
    return new MWAAFetchEnvironmentEnvironment(this, 'Environment', this.__resources, this.input);
  }

}

export class MWAAFetchEnvironmentEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get airflowConfigurationOptions(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.AirflowConfigurationOptions'),
        outputPath: 'Environment.AirflowConfigurationOptions',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.AirflowConfigurationOptions', props);
    return resource.getResponseField('Environment.AirflowConfigurationOptions') as unknown as Record<string, string>;
  }

  public get airflowVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.AirflowVersion'),
        outputPath: 'Environment.AirflowVersion',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.AirflowVersion', props);
    return resource.getResponseField('Environment.AirflowVersion') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.Arn'),
        outputPath: 'Environment.Arn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.Arn', props);
    return resource.getResponseField('Environment.Arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.CreatedAt'),
        outputPath: 'Environment.CreatedAt',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.CreatedAt', props);
    return resource.getResponseField('Environment.CreatedAt') as unknown as string;
  }

  public get dagS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.DagS3Path'),
        outputPath: 'Environment.DagS3Path',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.DagS3Path', props);
    return resource.getResponseField('Environment.DagS3Path') as unknown as string;
  }

  public get environmentClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.EnvironmentClass'),
        outputPath: 'Environment.EnvironmentClass',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.EnvironmentClass', props);
    return resource.getResponseField('Environment.EnvironmentClass') as unknown as string;
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.ExecutionRoleArn'),
        outputPath: 'Environment.ExecutionRoleArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.ExecutionRoleArn', props);
    return resource.getResponseField('Environment.ExecutionRoleArn') as unknown as string;
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.KmsKey'),
        outputPath: 'Environment.KmsKey',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.KmsKey', props);
    return resource.getResponseField('Environment.KmsKey') as unknown as string;
  }

  public get lastUpdate(): MWAAFetchEnvironmentEnvironmentLastUpdate {
    return new MWAAFetchEnvironmentEnvironmentLastUpdate(this, 'LastUpdate', this.__resources, this.input);
  }

  public get loggingConfiguration(): MWAAFetchEnvironmentEnvironmentLoggingConfiguration {
    return new MWAAFetchEnvironmentEnvironmentLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.input);
  }

  public get maxWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.MaxWorkers'),
        outputPath: 'Environment.MaxWorkers',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.MaxWorkers', props);
    return resource.getResponseField('Environment.MaxWorkers') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.Name'),
        outputPath: 'Environment.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.Name', props);
    return resource.getResponseField('Environment.Name') as unknown as string;
  }

  public get networkConfiguration(): MWAAFetchEnvironmentEnvironmentNetworkConfiguration {
    return new MWAAFetchEnvironmentEnvironmentNetworkConfiguration(this, 'NetworkConfiguration', this.__resources, this.input);
  }

  public get pluginsS3ObjectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.PluginsS3ObjectVersion'),
        outputPath: 'Environment.PluginsS3ObjectVersion',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.PluginsS3ObjectVersion', props);
    return resource.getResponseField('Environment.PluginsS3ObjectVersion') as unknown as string;
  }

  public get pluginsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.PluginsS3Path'),
        outputPath: 'Environment.PluginsS3Path',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.PluginsS3Path', props);
    return resource.getResponseField('Environment.PluginsS3Path') as unknown as string;
  }

  public get requirementsS3ObjectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.RequirementsS3ObjectVersion'),
        outputPath: 'Environment.RequirementsS3ObjectVersion',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.RequirementsS3ObjectVersion', props);
    return resource.getResponseField('Environment.RequirementsS3ObjectVersion') as unknown as string;
  }

  public get requirementsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.RequirementsS3Path'),
        outputPath: 'Environment.RequirementsS3Path',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.RequirementsS3Path', props);
    return resource.getResponseField('Environment.RequirementsS3Path') as unknown as string;
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.ServiceRoleArn'),
        outputPath: 'Environment.ServiceRoleArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.ServiceRoleArn', props);
    return resource.getResponseField('Environment.ServiceRoleArn') as unknown as string;
  }

  public get sourceBucketArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.SourceBucketArn'),
        outputPath: 'Environment.SourceBucketArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.SourceBucketArn', props);
    return resource.getResponseField('Environment.SourceBucketArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.Status'),
        outputPath: 'Environment.Status',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.Status', props);
    return resource.getResponseField('Environment.Status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.Tags'),
        outputPath: 'Environment.Tags',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.Tags', props);
    return resource.getResponseField('Environment.Tags') as unknown as Record<string, string>;
  }

  public get webserverAccessMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.WebserverAccessMode'),
        outputPath: 'Environment.WebserverAccessMode',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.WebserverAccessMode', props);
    return resource.getResponseField('Environment.WebserverAccessMode') as unknown as string;
  }

  public get webserverUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.WebserverUrl'),
        outputPath: 'Environment.WebserverUrl',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.WebserverUrl', props);
    return resource.getResponseField('Environment.WebserverUrl') as unknown as string;
  }

  public get weeklyMaintenanceWindowStart(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.WeeklyMaintenanceWindowStart'),
        outputPath: 'Environment.WeeklyMaintenanceWindowStart',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.WeeklyMaintenanceWindowStart', props);
    return resource.getResponseField('Environment.WeeklyMaintenanceWindowStart') as unknown as string;
  }

}

export class MWAAFetchEnvironmentEnvironmentLastUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LastUpdate.CreatedAt'),
        outputPath: 'Environment.LastUpdate.CreatedAt',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LastUpdate.CreatedAt', props);
    return resource.getResponseField('Environment.LastUpdate.CreatedAt') as unknown as string;
  }

  public get error(): MWAAFetchEnvironmentEnvironmentLastUpdateError {
    return new MWAAFetchEnvironmentEnvironmentLastUpdateError(this, 'Error', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LastUpdate.Status'),
        outputPath: 'Environment.LastUpdate.Status',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LastUpdate.Status', props);
    return resource.getResponseField('Environment.LastUpdate.Status') as unknown as string;
  }

}

export class MWAAFetchEnvironmentEnvironmentLastUpdateError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LastUpdate.Error.ErrorCode'),
        outputPath: 'Environment.LastUpdate.Error.ErrorCode',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LastUpdate.Error.ErrorCode', props);
    return resource.getResponseField('Environment.LastUpdate.Error.ErrorCode') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LastUpdate.Error.ErrorMessage'),
        outputPath: 'Environment.LastUpdate.Error.ErrorMessage',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LastUpdate.Error.ErrorMessage', props);
    return resource.getResponseField('Environment.LastUpdate.Error.ErrorMessage') as unknown as string;
  }

}

export class MWAAFetchEnvironmentEnvironmentLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get dagProcessingLogs(): MWAAFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs {
    return new MWAAFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs(this, 'DagProcessingLogs', this.__resources, this.input);
  }

  public get schedulerLogs(): MWAAFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs {
    return new MWAAFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs(this, 'SchedulerLogs', this.__resources, this.input);
  }

  public get taskLogs(): MWAAFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs {
    return new MWAAFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs(this, 'TaskLogs', this.__resources, this.input);
  }

  public get webserverLogs(): MWAAFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs {
    return new MWAAFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs(this, 'WebserverLogs', this.__resources, this.input);
  }

  public get workerLogs(): MWAAFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs {
    return new MWAAFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs(this, 'WorkerLogs', this.__resources, this.input);
  }

}

export class MWAAFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get cloudWatchLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.DagProcessingLogs.CloudWatchLogGroupArn'),
        outputPath: 'Environment.LoggingConfiguration.DagProcessingLogs.CloudWatchLogGroupArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.DagProcessingLogs.CloudWatchLogGroupArn', props);
    return resource.getResponseField('Environment.LoggingConfiguration.DagProcessingLogs.CloudWatchLogGroupArn') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.DagProcessingLogs.Enabled'),
        outputPath: 'Environment.LoggingConfiguration.DagProcessingLogs.Enabled',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.DagProcessingLogs.Enabled', props);
    return resource.getResponseField('Environment.LoggingConfiguration.DagProcessingLogs.Enabled') as unknown as boolean;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.DagProcessingLogs.LogLevel'),
        outputPath: 'Environment.LoggingConfiguration.DagProcessingLogs.LogLevel',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.DagProcessingLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.DagProcessingLogs.LogLevel') as unknown as string;
  }

}

export class MWAAFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get cloudWatchLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.SchedulerLogs.CloudWatchLogGroupArn'),
        outputPath: 'Environment.LoggingConfiguration.SchedulerLogs.CloudWatchLogGroupArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.SchedulerLogs.CloudWatchLogGroupArn', props);
    return resource.getResponseField('Environment.LoggingConfiguration.SchedulerLogs.CloudWatchLogGroupArn') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.SchedulerLogs.Enabled'),
        outputPath: 'Environment.LoggingConfiguration.SchedulerLogs.Enabled',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.SchedulerLogs.Enabled', props);
    return resource.getResponseField('Environment.LoggingConfiguration.SchedulerLogs.Enabled') as unknown as boolean;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.SchedulerLogs.LogLevel'),
        outputPath: 'Environment.LoggingConfiguration.SchedulerLogs.LogLevel',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.SchedulerLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.SchedulerLogs.LogLevel') as unknown as string;
  }

}

export class MWAAFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get cloudWatchLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.TaskLogs.CloudWatchLogGroupArn'),
        outputPath: 'Environment.LoggingConfiguration.TaskLogs.CloudWatchLogGroupArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.TaskLogs.CloudWatchLogGroupArn', props);
    return resource.getResponseField('Environment.LoggingConfiguration.TaskLogs.CloudWatchLogGroupArn') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.TaskLogs.Enabled'),
        outputPath: 'Environment.LoggingConfiguration.TaskLogs.Enabled',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.TaskLogs.Enabled', props);
    return resource.getResponseField('Environment.LoggingConfiguration.TaskLogs.Enabled') as unknown as boolean;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.TaskLogs.LogLevel'),
        outputPath: 'Environment.LoggingConfiguration.TaskLogs.LogLevel',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.TaskLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.TaskLogs.LogLevel') as unknown as string;
  }

}

export class MWAAFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get cloudWatchLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.WebserverLogs.CloudWatchLogGroupArn'),
        outputPath: 'Environment.LoggingConfiguration.WebserverLogs.CloudWatchLogGroupArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.WebserverLogs.CloudWatchLogGroupArn', props);
    return resource.getResponseField('Environment.LoggingConfiguration.WebserverLogs.CloudWatchLogGroupArn') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.WebserverLogs.Enabled'),
        outputPath: 'Environment.LoggingConfiguration.WebserverLogs.Enabled',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.WebserverLogs.Enabled', props);
    return resource.getResponseField('Environment.LoggingConfiguration.WebserverLogs.Enabled') as unknown as boolean;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.WebserverLogs.LogLevel'),
        outputPath: 'Environment.LoggingConfiguration.WebserverLogs.LogLevel',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.WebserverLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.WebserverLogs.LogLevel') as unknown as string;
  }

}

export class MWAAFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get cloudWatchLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.WorkerLogs.CloudWatchLogGroupArn'),
        outputPath: 'Environment.LoggingConfiguration.WorkerLogs.CloudWatchLogGroupArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.WorkerLogs.CloudWatchLogGroupArn', props);
    return resource.getResponseField('Environment.LoggingConfiguration.WorkerLogs.CloudWatchLogGroupArn') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.WorkerLogs.Enabled'),
        outputPath: 'Environment.LoggingConfiguration.WorkerLogs.Enabled',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.WorkerLogs.Enabled', props);
    return resource.getResponseField('Environment.LoggingConfiguration.WorkerLogs.Enabled') as unknown as boolean;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.LoggingConfiguration.WorkerLogs.LogLevel'),
        outputPath: 'Environment.LoggingConfiguration.WorkerLogs.LogLevel',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.LoggingConfiguration.WorkerLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.WorkerLogs.LogLevel') as unknown as string;
  }

}

export class MWAAFetchEnvironmentEnvironmentNetworkConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaGetEnvironmentInput) {
    super(scope, id);
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.NetworkConfiguration.SecurityGroupIds'),
        outputPath: 'Environment.NetworkConfiguration.SecurityGroupIds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.NetworkConfiguration.SecurityGroupIds', props);
    return resource.getResponseField('Environment.NetworkConfiguration.SecurityGroupIds') as unknown as string[];
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.NetworkConfiguration.SubnetIds'),
        outputPath: 'Environment.NetworkConfiguration.SubnetIds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Environment.NetworkConfiguration.SubnetIds', props);
    return resource.getResponseField('Environment.NetworkConfiguration.SubnetIds') as unknown as string[];
  }

}

export class MWAAListEnvironments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaListEnvironmentsInput) {
    super(scope, id);
  }

  public get environments(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.ListEnvironments.Environments'),
        outputPath: 'Environments',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEnvironments.Environments', props);
    return resource.getResponseField('Environments') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.ListEnvironments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEnvironments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MWAAListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaListTagsForResourceInput) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MWAAUpdateEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MwaaUpdateEnvironmentInput) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.UpdateEnvironment.Arn'),
        outputPath: 'Arn',
        parameters: {
          AirflowConfigurationOptions: this.input.airflowConfigurationOptions,
          AirflowVersion: this.input.airflowVersion,
          DagS3Path: this.input.dagS3Path,
          EnvironmentClass: this.input.environmentClass,
          ExecutionRoleArn: this.input.executionRoleArn,
          LoggingConfiguration: {
            DagProcessingLogs: {
              Enabled: this.input.loggingConfiguration?.dagProcessingLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.dagProcessingLogs?.logLevel,
            },
            SchedulerLogs: {
              Enabled: this.input.loggingConfiguration?.schedulerLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.schedulerLogs?.logLevel,
            },
            TaskLogs: {
              Enabled: this.input.loggingConfiguration?.taskLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.taskLogs?.logLevel,
            },
            WebserverLogs: {
              Enabled: this.input.loggingConfiguration?.webserverLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.webserverLogs?.logLevel,
            },
            WorkerLogs: {
              Enabled: this.input.loggingConfiguration?.workerLogs?.enabled,
              LogLevel: this.input.loggingConfiguration?.workerLogs?.logLevel,
            },
          },
          MaxWorkers: this.input.maxWorkers,
          Name: this.input.name,
          NetworkConfiguration: {
            SecurityGroupIds: this.input.networkConfiguration?.securityGroupIds,
          },
          PluginsS3ObjectVersion: this.input.pluginsS3ObjectVersion,
          PluginsS3Path: this.input.pluginsS3Path,
          RequirementsS3ObjectVersion: this.input.requirementsS3ObjectVersion,
          RequirementsS3Path: this.input.requirementsS3Path,
          SourceBucketArn: this.input.sourceBucketArn,
          WebserverAccessMode: this.input.webserverAccessMode,
          WeeklyMaintenanceWindowStart: this.input.weeklyMaintenanceWindowStart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

