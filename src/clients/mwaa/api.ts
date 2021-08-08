import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MwaaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCliToken(input: shapes.MwaaCreateCliTokenRequest): MWAAResponsesCreateCliToken {
    return new MWAAResponsesCreateCliToken(this, this.__resources, input);
  }

  public createEnvironment(input: shapes.MwaaCreateEnvironmentInput): MWAAResponsesCreateEnvironment {
    return new MWAAResponsesCreateEnvironment(this, this.__resources, input);
  }

  public createWebLoginToken(input: shapes.MwaaCreateWebLoginTokenRequest): MWAAResponsesCreateWebLoginToken {
    return new MWAAResponsesCreateWebLoginToken(this, this.__resources, input);
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

  public fetchEnvironment(input: shapes.MwaaGetEnvironmentInput): MWAAResponsesFetchEnvironment {
    return new MWAAResponsesFetchEnvironment(this, this.__resources, input);
  }

  public listEnvironments(input: shapes.MwaaListEnvironmentsInput): MWAAResponsesListEnvironments {
    return new MWAAResponsesListEnvironments(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.MwaaListTagsForResourceInput): MWAAResponsesListTagsForResource {
    return new MWAAResponsesListTagsForResource(this, this.__resources, input);
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

  public updateEnvironment(input: shapes.MwaaUpdateEnvironmentInput): MWAAResponsesUpdateEnvironment {
    return new MWAAResponsesUpdateEnvironment(this, this.__resources, input);
  }

}

export class MWAAResponsesCreateCliToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaCreateCliTokenRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCliToken.CliToken', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCliToken.WebServerHostname', props);
    return resource.getResponseField('WebServerHostname') as unknown as string;
  }

}

export class MWAAResponsesCreateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaCreateEnvironmentInput) {
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
          AirflowConfigurationOptions: this.__input.airflowConfigurationOptions,
          AirflowVersion: this.__input.airflowVersion,
          DagS3Path: this.__input.dagS3Path,
          EnvironmentClass: this.__input.environmentClass,
          ExecutionRoleArn: this.__input.executionRoleArn,
          KmsKey: this.__input.kmsKey,
          LoggingConfiguration: {
            DagProcessingLogs: {
              Enabled: this.__input.loggingConfiguration?.dagProcessingLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.dagProcessingLogs?.logLevel,
            },
            SchedulerLogs: {
              Enabled: this.__input.loggingConfiguration?.schedulerLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.schedulerLogs?.logLevel,
            },
            TaskLogs: {
              Enabled: this.__input.loggingConfiguration?.taskLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.taskLogs?.logLevel,
            },
            WebserverLogs: {
              Enabled: this.__input.loggingConfiguration?.webserverLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.webserverLogs?.logLevel,
            },
            WorkerLogs: {
              Enabled: this.__input.loggingConfiguration?.workerLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.workerLogs?.logLevel,
            },
          },
          MaxWorkers: this.__input.maxWorkers,
          MinWorkers: this.__input.minWorkers,
          Name: this.__input.name,
          NetworkConfiguration: {
            SecurityGroupIds: this.__input.networkConfiguration.securityGroupIds,
            SubnetIds: this.__input.networkConfiguration.subnetIds,
          },
          PluginsS3ObjectVersion: this.__input.pluginsS3ObjectVersion,
          PluginsS3Path: this.__input.pluginsS3Path,
          RequirementsS3ObjectVersion: this.__input.requirementsS3ObjectVersion,
          RequirementsS3Path: this.__input.requirementsS3Path,
          Schedulers: this.__input.schedulers,
          SourceBucketArn: this.__input.sourceBucketArn,
          Tags: this.__input.tags,
          WebserverAccessMode: this.__input.webserverAccessMode,
          WeeklyMaintenanceWindowStart: this.__input.weeklyMaintenanceWindowStart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class MWAAResponsesCreateWebLoginToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaCreateWebLoginTokenRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebLoginToken.WebServerHostname', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebLoginToken.WebToken', props);
    return resource.getResponseField('WebToken') as unknown as string;
  }

}

export class MWAAResponsesFetchEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
  }

  public get environment(): MWAAResponsesFetchEnvironmentEnvironment {
    return new MWAAResponsesFetchEnvironmentEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class MWAAResponsesFetchEnvironmentEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.AirflowConfigurationOptions', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.AirflowVersion', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.Arn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.CreatedAt', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.DagS3Path', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.EnvironmentClass', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.ExecutionRoleArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.KmsKey', props);
    return resource.getResponseField('Environment.KmsKey') as unknown as string;
  }

  public get lastUpdate(): MWAAResponsesFetchEnvironmentEnvironmentLastUpdate {
    return new MWAAResponsesFetchEnvironmentEnvironmentLastUpdate(this.__scope, this.__resources, this.__input);
  }

  public get loggingConfiguration(): MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration {
    return new MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.MaxWorkers', props);
    return resource.getResponseField('Environment.MaxWorkers') as unknown as number;
  }

  public get minWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.MinWorkers'),
        outputPath: 'Environment.MinWorkers',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.MinWorkers', props);
    return resource.getResponseField('Environment.MinWorkers') as unknown as number;
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.Name', props);
    return resource.getResponseField('Environment.Name') as unknown as string;
  }

  public get networkConfiguration(): MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration {
    return new MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.PluginsS3ObjectVersion', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.PluginsS3Path', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.RequirementsS3ObjectVersion', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.RequirementsS3Path', props);
    return resource.getResponseField('Environment.RequirementsS3Path') as unknown as string;
  }

  public get schedulers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'MWAA',
        physicalResourceId: cr.PhysicalResourceId.of('MWAA.GetEnvironment.Environment.Schedulers'),
        outputPath: 'Environment.Schedulers',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.Schedulers', props);
    return resource.getResponseField('Environment.Schedulers') as unknown as number;
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.ServiceRoleArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.SourceBucketArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.Status', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.Tags', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.WebserverAccessMode', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.WebserverUrl', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.WeeklyMaintenanceWindowStart', props);
    return resource.getResponseField('Environment.WeeklyMaintenanceWindowStart') as unknown as string;
  }

}

export class MWAAResponsesFetchEnvironmentEnvironmentLastUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LastUpdate.CreatedAt', props);
    return resource.getResponseField('Environment.LastUpdate.CreatedAt') as unknown as string;
  }

  public get error(): MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError {
    return new MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LastUpdate.Status', props);
    return resource.getResponseField('Environment.LastUpdate.Status') as unknown as string;
  }

}

export class MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LastUpdate.Error.ErrorCode', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LastUpdate.Error.ErrorMessage', props);
    return resource.getResponseField('Environment.LastUpdate.Error.ErrorMessage') as unknown as string;
  }

}

export class MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
  }

  public get dagProcessingLogs(): MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs {
    return new MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs(this.__scope, this.__resources, this.__input);
  }

  public get schedulerLogs(): MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs {
    return new MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs(this.__scope, this.__resources, this.__input);
  }

  public get taskLogs(): MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs {
    return new MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs(this.__scope, this.__resources, this.__input);
  }

  public get webserverLogs(): MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs {
    return new MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs(this.__scope, this.__resources, this.__input);
  }

  public get workerLogs(): MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs {
    return new MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs(this.__scope, this.__resources, this.__input);
  }

}

export class MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.DagProcessingLogs.CloudWatchLogGroupArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.DagProcessingLogs.Enabled', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.DagProcessingLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.DagProcessingLogs.LogLevel') as unknown as string;
  }

}

export class MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.SchedulerLogs.CloudWatchLogGroupArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.SchedulerLogs.Enabled', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.SchedulerLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.SchedulerLogs.LogLevel') as unknown as string;
  }

}

export class MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.TaskLogs.CloudWatchLogGroupArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.TaskLogs.Enabled', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.TaskLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.TaskLogs.LogLevel') as unknown as string;
  }

}

export class MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.WebserverLogs.CloudWatchLogGroupArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.WebserverLogs.Enabled', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.WebserverLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.WebserverLogs.LogLevel') as unknown as string;
  }

}

export class MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.WorkerLogs.CloudWatchLogGroupArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.WorkerLogs.Enabled', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.LoggingConfiguration.WorkerLogs.LogLevel', props);
    return resource.getResponseField('Environment.LoggingConfiguration.WorkerLogs.LogLevel') as unknown as string;
  }

}

export class MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaGetEnvironmentInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.NetworkConfiguration.SecurityGroupIds', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Environment.NetworkConfiguration.SubnetIds', props);
    return resource.getResponseField('Environment.NetworkConfiguration.SubnetIds') as unknown as string[];
  }

}

export class MWAAResponsesListEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaListEnvironmentsInput) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.Environments', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MWAAResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaListTagsForResourceInput) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MWAAResponsesUpdateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MwaaUpdateEnvironmentInput) {
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
          AirflowConfigurationOptions: this.__input.airflowConfigurationOptions,
          AirflowVersion: this.__input.airflowVersion,
          DagS3Path: this.__input.dagS3Path,
          EnvironmentClass: this.__input.environmentClass,
          ExecutionRoleArn: this.__input.executionRoleArn,
          LoggingConfiguration: {
            DagProcessingLogs: {
              Enabled: this.__input.loggingConfiguration?.dagProcessingLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.dagProcessingLogs?.logLevel,
            },
            SchedulerLogs: {
              Enabled: this.__input.loggingConfiguration?.schedulerLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.schedulerLogs?.logLevel,
            },
            TaskLogs: {
              Enabled: this.__input.loggingConfiguration?.taskLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.taskLogs?.logLevel,
            },
            WebserverLogs: {
              Enabled: this.__input.loggingConfiguration?.webserverLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.webserverLogs?.logLevel,
            },
            WorkerLogs: {
              Enabled: this.__input.loggingConfiguration?.workerLogs?.enabled,
              LogLevel: this.__input.loggingConfiguration?.workerLogs?.logLevel,
            },
          },
          MaxWorkers: this.__input.maxWorkers,
          MinWorkers: this.__input.minWorkers,
          Name: this.__input.name,
          NetworkConfiguration: {
            SecurityGroupIds: this.__input.networkConfiguration?.securityGroupIds,
          },
          PluginsS3ObjectVersion: this.__input.pluginsS3ObjectVersion,
          PluginsS3Path: this.__input.pluginsS3Path,
          RequirementsS3ObjectVersion: this.__input.requirementsS3ObjectVersion,
          RequirementsS3Path: this.__input.requirementsS3Path,
          Schedulers: this.__input.schedulers,
          SourceBucketArn: this.__input.sourceBucketArn,
          WebserverAccessMode: this.__input.webserverAccessMode,
          WeeklyMaintenanceWindowStart: this.__input.weeklyMaintenanceWindowStart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

