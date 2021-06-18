import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SmsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApp(input: shapes.SmsCreateAppRequest): SMSCreateApp {
    return new SMSCreateApp(this, 'CreateApp', this.__resources, input);
  }

  public createReplicationJob(input: shapes.SmsCreateReplicationJobRequest): SMSCreateReplicationJob {
    return new SMSCreateReplicationJob(this, 'CreateReplicationJob', this.__resources, input);
  }

  public deleteApp(input: shapes.SmsDeleteAppRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.DeleteApp'),
        parameters: {
          appId: input.appId,
          forceStopAppReplication: input.forceStopAppReplication,
          forceTerminateApp: input.forceTerminateApp,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApp', props);
  }

  public deleteAppLaunchConfiguration(input: shapes.SmsDeleteAppLaunchConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppLaunchConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.DeleteAppLaunchConfiguration'),
        parameters: {
          appId: input.appId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppLaunchConfiguration', props);
  }

  public deleteAppReplicationConfiguration(input: shapes.SmsDeleteAppReplicationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppReplicationConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.DeleteAppReplicationConfiguration'),
        parameters: {
          appId: input.appId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppReplicationConfiguration', props);
  }

  public deleteAppValidationConfiguration(input: shapes.SmsDeleteAppValidationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppValidationConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.DeleteAppValidationConfiguration'),
        parameters: {
          appId: input.appId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppValidationConfiguration', props);
  }

  public deleteReplicationJob(input: shapes.SmsDeleteReplicationJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationJob',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.DeleteReplicationJob'),
        parameters: {
          replicationJobId: input.replicationJobId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteReplicationJob', props);
  }

  public deleteServerCatalog(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServerCatalog',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.DeleteServerCatalog'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteServerCatalog', props);
  }

  public disassociateConnector(input: shapes.SmsDisassociateConnectorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnector',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.DisassociateConnector'),
        parameters: {
          connectorId: input.connectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateConnector', props);
  }

  public generateChangeSet(input: shapes.SmsGenerateChangeSetRequest): SMSGenerateChangeSet {
    return new SMSGenerateChangeSet(this, 'GenerateChangeSet', this.__resources, input);
  }

  public generateTemplate(input: shapes.SmsGenerateTemplateRequest): SMSGenerateTemplate {
    return new SMSGenerateTemplate(this, 'GenerateTemplate', this.__resources, input);
  }

  public fetchApp(input: shapes.SmsGetAppRequest): SMSFetchApp {
    return new SMSFetchApp(this, 'FetchApp', this.__resources, input);
  }

  public fetchAppLaunchConfiguration(input: shapes.SmsGetAppLaunchConfigurationRequest): SMSFetchAppLaunchConfiguration {
    return new SMSFetchAppLaunchConfiguration(this, 'FetchAppLaunchConfiguration', this.__resources, input);
  }

  public fetchAppReplicationConfiguration(input: shapes.SmsGetAppReplicationConfigurationRequest): SMSFetchAppReplicationConfiguration {
    return new SMSFetchAppReplicationConfiguration(this, 'FetchAppReplicationConfiguration', this.__resources, input);
  }

  public fetchAppValidationConfiguration(input: shapes.SmsGetAppValidationConfigurationRequest): SMSFetchAppValidationConfiguration {
    return new SMSFetchAppValidationConfiguration(this, 'FetchAppValidationConfiguration', this.__resources, input);
  }

  public fetchAppValidationOutput(input: shapes.SmsGetAppValidationOutputRequest): SMSFetchAppValidationOutput {
    return new SMSFetchAppValidationOutput(this, 'FetchAppValidationOutput', this.__resources, input);
  }

  public fetchConnectors(input: shapes.SmsGetConnectorsRequest): SMSFetchConnectors {
    return new SMSFetchConnectors(this, 'FetchConnectors', this.__resources, input);
  }

  public fetchReplicationJobs(input: shapes.SmsGetReplicationJobsRequest): SMSFetchReplicationJobs {
    return new SMSFetchReplicationJobs(this, 'FetchReplicationJobs', this.__resources, input);
  }

  public fetchReplicationRuns(input: shapes.SmsGetReplicationRunsRequest): SMSFetchReplicationRuns {
    return new SMSFetchReplicationRuns(this, 'FetchReplicationRuns', this.__resources, input);
  }

  public fetchServers(input: shapes.SmsGetServersRequest): SMSFetchServers {
    return new SMSFetchServers(this, 'FetchServers', this.__resources, input);
  }

  public importAppCatalog(input: shapes.SmsImportAppCatalogRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAppCatalog',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.ImportAppCatalog'),
        parameters: {
          roleName: input.roleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ImportAppCatalog', props);
  }

  public importServerCatalog(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importServerCatalog',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.ImportServerCatalog'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'ImportServerCatalog', props);
  }

  public launchApp(input: shapes.SmsLaunchAppRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'launchApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.LaunchApp'),
        parameters: {
          appId: input.appId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'LaunchApp', props);
  }

  public listApps(input: shapes.SmsListAppsRequest): SMSListApps {
    return new SMSListApps(this, 'ListApps', this.__resources, input);
  }

  public notifyAppValidationOutput(input: shapes.SmsNotifyAppValidationOutputRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'notifyAppValidationOutput',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.NotifyAppValidationOutput'),
        parameters: {
          appId: input.appId,
          notificationContext: {
            validationId: input.notificationContext?.validationId,
            status: input.notificationContext?.status,
            statusMessage: input.notificationContext?.statusMessage,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'NotifyAppValidationOutput', props);
  }

  public putAppLaunchConfiguration(input: shapes.SmsPutAppLaunchConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppLaunchConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.PutAppLaunchConfiguration'),
        parameters: {
          appId: input.appId,
          roleName: input.roleName,
          autoLaunch: input.autoLaunch,
          serverGroupLaunchConfigurations: input.serverGroupLaunchConfigurations,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAppLaunchConfiguration', props);
  }

  public putAppReplicationConfiguration(input: shapes.SmsPutAppReplicationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppReplicationConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.PutAppReplicationConfiguration'),
        parameters: {
          appId: input.appId,
          serverGroupReplicationConfigurations: input.serverGroupReplicationConfigurations,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAppReplicationConfiguration', props);
  }

  public putAppValidationConfiguration(input: shapes.SmsPutAppValidationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppValidationConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.PutAppValidationConfiguration'),
        parameters: {
          appId: input.appId,
          appValidationConfigurations: input.appValidationConfigurations,
          serverGroupValidationConfigurations: input.serverGroupValidationConfigurations,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAppValidationConfiguration', props);
  }

  public startAppReplication(input: shapes.SmsStartAppReplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startAppReplication',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.StartAppReplication'),
        parameters: {
          appId: input.appId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartAppReplication', props);
  }

  public startOnDemandAppReplication(input: shapes.SmsStartOnDemandAppReplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startOnDemandAppReplication',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.StartOnDemandAppReplication'),
        parameters: {
          appId: input.appId,
          description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartOnDemandAppReplication', props);
  }

  public startOnDemandReplicationRun(input: shapes.SmsStartOnDemandReplicationRunRequest): SMSStartOnDemandReplicationRun {
    return new SMSStartOnDemandReplicationRun(this, 'StartOnDemandReplicationRun', this.__resources, input);
  }

  public stopAppReplication(input: shapes.SmsStopAppReplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopAppReplication',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.StopAppReplication'),
        parameters: {
          appId: input.appId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopAppReplication', props);
  }

  public terminateApp(input: shapes.SmsTerminateAppRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.TerminateApp'),
        parameters: {
          appId: input.appId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TerminateApp', props);
  }

  public updateApp(input: shapes.SmsUpdateAppRequest): SMSUpdateApp {
    return new SMSUpdateApp(this, 'UpdateApp', this.__resources, input);
  }

  public updateReplicationJob(input: shapes.SmsUpdateReplicationJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationJob',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateReplicationJob'),
        parameters: {
          replicationJobId: input.replicationJobId,
          frequency: input.frequency,
          nextReplicationRunStartTime: input.nextReplicationRunStartTime,
          licenseType: input.licenseType,
          roleName: input.roleName,
          description: input.description,
          numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep,
          encrypted: input.encrypted,
          kmsKeyId: input.kmsKeyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateReplicationJob', props);
  }

}

export class SMSCreateApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsCreateAppRequest) {
    super(scope, id);
  }

  public get appSummary(): SMSCreateAppAppSummary {
    return new SMSCreateAppAppSummary(this, 'AppSummary', this.__resources, this.input);
  }

  public get serverGroups(): shapes.SmsServerGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.serverGroups'),
        outputPath: 'serverGroups',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.serverGroups', props);
    return resource.getResponseField('serverGroups') as unknown as shapes.SmsServerGroup[];
  }

  public get tags(): shapes.SmsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.tags'),
        outputPath: 'tags',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.SmsTag[];
  }

}

export class SMSCreateAppAppSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsCreateAppRequest) {
    super(scope, id);
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.appId'),
        outputPath: 'appSummary.appId',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.appId', props);
    return resource.getResponseField('appSummary.appId') as unknown as string;
  }

  public get importedAppId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.importedAppId'),
        outputPath: 'appSummary.importedAppId',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.importedAppId', props);
    return resource.getResponseField('appSummary.importedAppId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.name'),
        outputPath: 'appSummary.name',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.name', props);
    return resource.getResponseField('appSummary.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.description'),
        outputPath: 'appSummary.description',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.description', props);
    return resource.getResponseField('appSummary.description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.status'),
        outputPath: 'appSummary.status',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.status', props);
    return resource.getResponseField('appSummary.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.statusMessage'),
        outputPath: 'appSummary.statusMessage',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.statusMessage', props);
    return resource.getResponseField('appSummary.statusMessage') as unknown as string;
  }

  public get replicationConfigurationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.replicationConfigurationStatus'),
        outputPath: 'appSummary.replicationConfigurationStatus',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.replicationConfigurationStatus', props);
    return resource.getResponseField('appSummary.replicationConfigurationStatus') as unknown as string;
  }

  public get replicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.replicationStatus'),
        outputPath: 'appSummary.replicationStatus',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.replicationStatus', props);
    return resource.getResponseField('appSummary.replicationStatus') as unknown as string;
  }

  public get replicationStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.replicationStatusMessage'),
        outputPath: 'appSummary.replicationStatusMessage',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.replicationStatusMessage', props);
    return resource.getResponseField('appSummary.replicationStatusMessage') as unknown as string;
  }

  public get latestReplicationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.latestReplicationTime'),
        outputPath: 'appSummary.latestReplicationTime',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.latestReplicationTime', props);
    return resource.getResponseField('appSummary.latestReplicationTime') as unknown as string;
  }

  public get launchConfigurationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.launchConfigurationStatus'),
        outputPath: 'appSummary.launchConfigurationStatus',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.launchConfigurationStatus', props);
    return resource.getResponseField('appSummary.launchConfigurationStatus') as unknown as string;
  }

  public get launchStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.launchStatus'),
        outputPath: 'appSummary.launchStatus',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.launchStatus', props);
    return resource.getResponseField('appSummary.launchStatus') as unknown as string;
  }

  public get launchStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.launchStatusMessage'),
        outputPath: 'appSummary.launchStatusMessage',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.launchStatusMessage', props);
    return resource.getResponseField('appSummary.launchStatusMessage') as unknown as string;
  }

  public get launchDetails(): SMSCreateAppAppSummaryLaunchDetails {
    return new SMSCreateAppAppSummaryLaunchDetails(this, 'LaunchDetails', this.__resources, this.input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.creationTime'),
        outputPath: 'appSummary.creationTime',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.creationTime', props);
    return resource.getResponseField('appSummary.creationTime') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.lastModified'),
        outputPath: 'appSummary.lastModified',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.lastModified', props);
    return resource.getResponseField('appSummary.lastModified') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.roleName'),
        outputPath: 'appSummary.roleName',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.roleName', props);
    return resource.getResponseField('appSummary.roleName') as unknown as string;
  }

  public get totalServerGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.totalServerGroups'),
        outputPath: 'appSummary.totalServerGroups',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.totalServerGroups', props);
    return resource.getResponseField('appSummary.totalServerGroups') as unknown as number;
  }

  public get totalServers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.totalServers'),
        outputPath: 'appSummary.totalServers',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.totalServers', props);
    return resource.getResponseField('appSummary.totalServers') as unknown as number;
  }

}

export class SMSCreateAppAppSummaryLaunchDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsCreateAppRequest) {
    super(scope, id);
  }

  public get latestLaunchTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.launchDetails.latestLaunchTime'),
        outputPath: 'appSummary.launchDetails.latestLaunchTime',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.launchDetails.latestLaunchTime', props);
    return resource.getResponseField('appSummary.launchDetails.latestLaunchTime') as unknown as string;
  }

  public get stackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.launchDetails.stackName'),
        outputPath: 'appSummary.launchDetails.stackName',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.launchDetails.stackName', props);
    return resource.getResponseField('appSummary.launchDetails.stackName') as unknown as string;
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateApp.appSummary.launchDetails.stackId'),
        outputPath: 'appSummary.launchDetails.stackId',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          clientToken: this.input.clientToken,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.appSummary.launchDetails.stackId', props);
    return resource.getResponseField('appSummary.launchDetails.stackId') as unknown as string;
  }

}

export class SMSCreateReplicationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsCreateReplicationJobRequest) {
    super(scope, id);
  }

  public get replicationJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationJob',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.CreateReplicationJob.replicationJobId'),
        outputPath: 'replicationJobId',
        parameters: {
          serverId: this.input.serverId,
          seedReplicationTime: this.input.seedReplicationTime,
          frequency: this.input.frequency,
          runOnce: this.input.runOnce,
          licenseType: this.input.licenseType,
          roleName: this.input.roleName,
          description: this.input.description,
          numberOfRecentAmisToKeep: this.input.numberOfRecentAmisToKeep,
          encrypted: this.input.encrypted,
          kmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationJob.replicationJobId', props);
    return resource.getResponseField('replicationJobId') as unknown as string;
  }

}

export class SMSGenerateChangeSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGenerateChangeSetRequest) {
    super(scope, id);
  }

  public get s3Location(): SMSGenerateChangeSetS3Location {
    return new SMSGenerateChangeSetS3Location(this, 'S3Location', this.__resources, this.input);
  }

}

export class SMSGenerateChangeSetS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGenerateChangeSetRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateChangeSet',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GenerateChangeSet.s3Location.bucket'),
        outputPath: 's3Location.bucket',
        parameters: {
          appId: this.input.appId,
          changesetFormat: this.input.changesetFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateChangeSet.s3Location.bucket', props);
    return resource.getResponseField('s3Location.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateChangeSet',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GenerateChangeSet.s3Location.key'),
        outputPath: 's3Location.key',
        parameters: {
          appId: this.input.appId,
          changesetFormat: this.input.changesetFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateChangeSet.s3Location.key', props);
    return resource.getResponseField('s3Location.key') as unknown as string;
  }

}

export class SMSGenerateTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGenerateTemplateRequest) {
    super(scope, id);
  }

  public get s3Location(): SMSGenerateTemplateS3Location {
    return new SMSGenerateTemplateS3Location(this, 'S3Location', this.__resources, this.input);
  }

}

export class SMSGenerateTemplateS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGenerateTemplateRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateTemplate',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GenerateTemplate.s3Location.bucket'),
        outputPath: 's3Location.bucket',
        parameters: {
          appId: this.input.appId,
          templateFormat: this.input.templateFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateTemplate.s3Location.bucket', props);
    return resource.getResponseField('s3Location.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateTemplate',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GenerateTemplate.s3Location.key'),
        outputPath: 's3Location.key',
        parameters: {
          appId: this.input.appId,
          templateFormat: this.input.templateFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateTemplate.s3Location.key', props);
    return resource.getResponseField('s3Location.key') as unknown as string;
  }

}

export class SMSFetchApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetAppRequest) {
    super(scope, id);
  }

  public get appSummary(): SMSFetchAppAppSummary {
    return new SMSFetchAppAppSummary(this, 'AppSummary', this.__resources, this.input);
  }

  public get serverGroups(): shapes.SmsServerGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.serverGroups'),
        outputPath: 'serverGroups',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.serverGroups', props);
    return resource.getResponseField('serverGroups') as unknown as shapes.SmsServerGroup[];
  }

  public get tags(): shapes.SmsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.tags'),
        outputPath: 'tags',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.SmsTag[];
  }

}

export class SMSFetchAppAppSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetAppRequest) {
    super(scope, id);
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.appId'),
        outputPath: 'appSummary.appId',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.appId', props);
    return resource.getResponseField('appSummary.appId') as unknown as string;
  }

  public get importedAppId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.importedAppId'),
        outputPath: 'appSummary.importedAppId',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.importedAppId', props);
    return resource.getResponseField('appSummary.importedAppId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.name'),
        outputPath: 'appSummary.name',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.name', props);
    return resource.getResponseField('appSummary.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.description'),
        outputPath: 'appSummary.description',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.description', props);
    return resource.getResponseField('appSummary.description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.status'),
        outputPath: 'appSummary.status',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.status', props);
    return resource.getResponseField('appSummary.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.statusMessage'),
        outputPath: 'appSummary.statusMessage',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.statusMessage', props);
    return resource.getResponseField('appSummary.statusMessage') as unknown as string;
  }

  public get replicationConfigurationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.replicationConfigurationStatus'),
        outputPath: 'appSummary.replicationConfigurationStatus',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.replicationConfigurationStatus', props);
    return resource.getResponseField('appSummary.replicationConfigurationStatus') as unknown as string;
  }

  public get replicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.replicationStatus'),
        outputPath: 'appSummary.replicationStatus',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.replicationStatus', props);
    return resource.getResponseField('appSummary.replicationStatus') as unknown as string;
  }

  public get replicationStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.replicationStatusMessage'),
        outputPath: 'appSummary.replicationStatusMessage',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.replicationStatusMessage', props);
    return resource.getResponseField('appSummary.replicationStatusMessage') as unknown as string;
  }

  public get latestReplicationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.latestReplicationTime'),
        outputPath: 'appSummary.latestReplicationTime',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.latestReplicationTime', props);
    return resource.getResponseField('appSummary.latestReplicationTime') as unknown as string;
  }

  public get launchConfigurationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.launchConfigurationStatus'),
        outputPath: 'appSummary.launchConfigurationStatus',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.launchConfigurationStatus', props);
    return resource.getResponseField('appSummary.launchConfigurationStatus') as unknown as string;
  }

  public get launchStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.launchStatus'),
        outputPath: 'appSummary.launchStatus',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.launchStatus', props);
    return resource.getResponseField('appSummary.launchStatus') as unknown as string;
  }

  public get launchStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.launchStatusMessage'),
        outputPath: 'appSummary.launchStatusMessage',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.launchStatusMessage', props);
    return resource.getResponseField('appSummary.launchStatusMessage') as unknown as string;
  }

  public get launchDetails(): SMSFetchAppAppSummaryLaunchDetails {
    return new SMSFetchAppAppSummaryLaunchDetails(this, 'LaunchDetails', this.__resources, this.input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.creationTime'),
        outputPath: 'appSummary.creationTime',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.creationTime', props);
    return resource.getResponseField('appSummary.creationTime') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.lastModified'),
        outputPath: 'appSummary.lastModified',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.lastModified', props);
    return resource.getResponseField('appSummary.lastModified') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.roleName'),
        outputPath: 'appSummary.roleName',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.roleName', props);
    return resource.getResponseField('appSummary.roleName') as unknown as string;
  }

  public get totalServerGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.totalServerGroups'),
        outputPath: 'appSummary.totalServerGroups',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.totalServerGroups', props);
    return resource.getResponseField('appSummary.totalServerGroups') as unknown as number;
  }

  public get totalServers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.totalServers'),
        outputPath: 'appSummary.totalServers',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.totalServers', props);
    return resource.getResponseField('appSummary.totalServers') as unknown as number;
  }

}

export class SMSFetchAppAppSummaryLaunchDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetAppRequest) {
    super(scope, id);
  }

  public get latestLaunchTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.launchDetails.latestLaunchTime'),
        outputPath: 'appSummary.launchDetails.latestLaunchTime',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.launchDetails.latestLaunchTime', props);
    return resource.getResponseField('appSummary.launchDetails.latestLaunchTime') as unknown as string;
  }

  public get stackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.launchDetails.stackName'),
        outputPath: 'appSummary.launchDetails.stackName',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.launchDetails.stackName', props);
    return resource.getResponseField('appSummary.launchDetails.stackName') as unknown as string;
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetApp.appSummary.launchDetails.stackId'),
        outputPath: 'appSummary.launchDetails.stackId',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.appSummary.launchDetails.stackId', props);
    return resource.getResponseField('appSummary.launchDetails.stackId') as unknown as string;
  }

}

export class SMSFetchAppLaunchConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetAppLaunchConfigurationRequest) {
    super(scope, id);
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppLaunchConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetAppLaunchConfiguration.appId'),
        outputPath: 'appId',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppLaunchConfiguration.appId', props);
    return resource.getResponseField('appId') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppLaunchConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetAppLaunchConfiguration.roleName'),
        outputPath: 'roleName',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppLaunchConfiguration.roleName', props);
    return resource.getResponseField('roleName') as unknown as string;
  }

  public get autoLaunch(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppLaunchConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetAppLaunchConfiguration.autoLaunch'),
        outputPath: 'autoLaunch',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppLaunchConfiguration.autoLaunch', props);
    return resource.getResponseField('autoLaunch') as unknown as boolean;
  }

  public get serverGroupLaunchConfigurations(): shapes.SmsServerGroupLaunchConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppLaunchConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetAppLaunchConfiguration.serverGroupLaunchConfigurations'),
        outputPath: 'serverGroupLaunchConfigurations',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppLaunchConfiguration.serverGroupLaunchConfigurations', props);
    return resource.getResponseField('serverGroupLaunchConfigurations') as unknown as shapes.SmsServerGroupLaunchConfiguration[];
  }

}

export class SMSFetchAppReplicationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetAppReplicationConfigurationRequest) {
    super(scope, id);
  }

  public get serverGroupReplicationConfigurations(): shapes.SmsServerGroupReplicationConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppReplicationConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetAppReplicationConfiguration.serverGroupReplicationConfigurations'),
        outputPath: 'serverGroupReplicationConfigurations',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppReplicationConfiguration.serverGroupReplicationConfigurations', props);
    return resource.getResponseField('serverGroupReplicationConfigurations') as unknown as shapes.SmsServerGroupReplicationConfiguration[];
  }

}

export class SMSFetchAppValidationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetAppValidationConfigurationRequest) {
    super(scope, id);
  }

  public get appValidationConfigurations(): shapes.SmsAppValidationConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppValidationConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetAppValidationConfiguration.appValidationConfigurations'),
        outputPath: 'appValidationConfigurations',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppValidationConfiguration.appValidationConfigurations', props);
    return resource.getResponseField('appValidationConfigurations') as unknown as shapes.SmsAppValidationConfiguration[];
  }

  public get serverGroupValidationConfigurations(): shapes.SmsServerGroupValidationConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppValidationConfiguration',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetAppValidationConfiguration.serverGroupValidationConfigurations'),
        outputPath: 'serverGroupValidationConfigurations',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppValidationConfiguration.serverGroupValidationConfigurations', props);
    return resource.getResponseField('serverGroupValidationConfigurations') as unknown as shapes.SmsServerGroupValidationConfiguration[];
  }

}

export class SMSFetchAppValidationOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetAppValidationOutputRequest) {
    super(scope, id);
  }

  public get validationOutputList(): shapes.SmsValidationOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppValidationOutput',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetAppValidationOutput.validationOutputList'),
        outputPath: 'validationOutputList',
        parameters: {
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppValidationOutput.validationOutputList', props);
    return resource.getResponseField('validationOutputList') as unknown as shapes.SmsValidationOutput[];
  }

}

export class SMSFetchConnectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetConnectorsRequest) {
    super(scope, id);
  }

  public get connectorList(): shapes.SmsConnector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectors',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetConnectors.connectorList'),
        outputPath: 'connectorList',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectors.connectorList', props);
    return resource.getResponseField('connectorList') as unknown as shapes.SmsConnector[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectors',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetConnectors.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectors.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SMSFetchReplicationJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetReplicationJobsRequest) {
    super(scope, id);
  }

  public get replicationJobList(): shapes.SmsReplicationJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationJobs',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationJobs.replicationJobList'),
        outputPath: 'replicationJobList',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationJobs.replicationJobList', props);
    return resource.getResponseField('replicationJobList') as unknown as shapes.SmsReplicationJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationJobs',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SMSFetchReplicationRuns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetReplicationRunsRequest) {
    super(scope, id);
  }

  public get replicationJob(): SMSFetchReplicationRunsReplicationJob {
    return new SMSFetchReplicationRunsReplicationJob(this, 'ReplicationJob', this.__resources, this.input);
  }

  public get replicationRunList(): shapes.SmsReplicationRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationRunList'),
        outputPath: 'replicationRunList',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationRunList', props);
    return resource.getResponseField('replicationRunList') as unknown as shapes.SmsReplicationRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SMSFetchReplicationRunsReplicationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetReplicationRunsRequest) {
    super(scope, id);
  }

  public get replicationJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.replicationJobId'),
        outputPath: 'replicationJob.replicationJobId',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.replicationJobId', props);
    return resource.getResponseField('replicationJob.replicationJobId') as unknown as string;
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.serverId'),
        outputPath: 'replicationJob.serverId',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.serverId', props);
    return resource.getResponseField('replicationJob.serverId') as unknown as string;
  }

  public get serverType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.serverType'),
        outputPath: 'replicationJob.serverType',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.serverType', props);
    return resource.getResponseField('replicationJob.serverType') as unknown as string;
  }

  public get vmServer(): SMSFetchReplicationRunsReplicationJobVmServer {
    return new SMSFetchReplicationRunsReplicationJobVmServer(this, 'VmServer', this.__resources, this.input);
  }

  public get seedReplicationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.seedReplicationTime'),
        outputPath: 'replicationJob.seedReplicationTime',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.seedReplicationTime', props);
    return resource.getResponseField('replicationJob.seedReplicationTime') as unknown as string;
  }

  public get frequency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.frequency'),
        outputPath: 'replicationJob.frequency',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.frequency', props);
    return resource.getResponseField('replicationJob.frequency') as unknown as number;
  }

  public get runOnce(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.runOnce'),
        outputPath: 'replicationJob.runOnce',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.runOnce', props);
    return resource.getResponseField('replicationJob.runOnce') as unknown as boolean;
  }

  public get nextReplicationRunStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.nextReplicationRunStartTime'),
        outputPath: 'replicationJob.nextReplicationRunStartTime',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.nextReplicationRunStartTime', props);
    return resource.getResponseField('replicationJob.nextReplicationRunStartTime') as unknown as string;
  }

  public get licenseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.licenseType'),
        outputPath: 'replicationJob.licenseType',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.licenseType', props);
    return resource.getResponseField('replicationJob.licenseType') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.roleName'),
        outputPath: 'replicationJob.roleName',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.roleName', props);
    return resource.getResponseField('replicationJob.roleName') as unknown as string;
  }

  public get latestAmiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.latestAmiId'),
        outputPath: 'replicationJob.latestAmiId',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.latestAmiId', props);
    return resource.getResponseField('replicationJob.latestAmiId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.state'),
        outputPath: 'replicationJob.state',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.state', props);
    return resource.getResponseField('replicationJob.state') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.statusMessage'),
        outputPath: 'replicationJob.statusMessage',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.statusMessage', props);
    return resource.getResponseField('replicationJob.statusMessage') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.description'),
        outputPath: 'replicationJob.description',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.description', props);
    return resource.getResponseField('replicationJob.description') as unknown as string;
  }

  public get numberOfRecentAmisToKeep(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.numberOfRecentAmisToKeep'),
        outputPath: 'replicationJob.numberOfRecentAmisToKeep',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.numberOfRecentAmisToKeep', props);
    return resource.getResponseField('replicationJob.numberOfRecentAmisToKeep') as unknown as number;
  }

  public get encrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.encrypted'),
        outputPath: 'replicationJob.encrypted',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.encrypted', props);
    return resource.getResponseField('replicationJob.encrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.kmsKeyId'),
        outputPath: 'replicationJob.kmsKeyId',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.kmsKeyId', props);
    return resource.getResponseField('replicationJob.kmsKeyId') as unknown as string;
  }

  public get replicationRunList(): shapes.SmsReplicationRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.replicationRunList'),
        outputPath: 'replicationJob.replicationRunList',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.replicationRunList', props);
    return resource.getResponseField('replicationJob.replicationRunList') as unknown as shapes.SmsReplicationRun[];
  }

}

export class SMSFetchReplicationRunsReplicationJobVmServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetReplicationRunsRequest) {
    super(scope, id);
  }

  public get vmServerAddress(): SMSFetchReplicationRunsReplicationJobVmServerVmServerAddress {
    return new SMSFetchReplicationRunsReplicationJobVmServerVmServerAddress(this, 'VmServerAddress', this.__resources, this.input);
  }

  public get vmName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.vmServer.vmName'),
        outputPath: 'replicationJob.vmServer.vmName',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.vmServer.vmName', props);
    return resource.getResponseField('replicationJob.vmServer.vmName') as unknown as string;
  }

  public get vmManagerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.vmServer.vmManagerName'),
        outputPath: 'replicationJob.vmServer.vmManagerName',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.vmServer.vmManagerName', props);
    return resource.getResponseField('replicationJob.vmServer.vmManagerName') as unknown as string;
  }

  public get vmManagerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.vmServer.vmManagerType'),
        outputPath: 'replicationJob.vmServer.vmManagerType',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.vmServer.vmManagerType', props);
    return resource.getResponseField('replicationJob.vmServer.vmManagerType') as unknown as string;
  }

  public get vmPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.vmServer.vmPath'),
        outputPath: 'replicationJob.vmServer.vmPath',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.vmServer.vmPath', props);
    return resource.getResponseField('replicationJob.vmServer.vmPath') as unknown as string;
  }

}

export class SMSFetchReplicationRunsReplicationJobVmServerVmServerAddress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetReplicationRunsRequest) {
    super(scope, id);
  }

  public get vmManagerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.vmServer.vmServerAddress.vmManagerId'),
        outputPath: 'replicationJob.vmServer.vmServerAddress.vmManagerId',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.vmServer.vmServerAddress.vmManagerId', props);
    return resource.getResponseField('replicationJob.vmServer.vmServerAddress.vmManagerId') as unknown as string;
  }

  public get vmId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationRuns',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetReplicationRuns.replicationJob.vmServer.vmServerAddress.vmId'),
        outputPath: 'replicationJob.vmServer.vmServerAddress.vmId',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReplicationRuns.replicationJob.vmServer.vmServerAddress.vmId', props);
    return resource.getResponseField('replicationJob.vmServer.vmServerAddress.vmId') as unknown as string;
  }

}

export class SMSFetchServers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsGetServersRequest) {
    super(scope, id);
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServers',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetServers.lastModifiedOn'),
        outputPath: 'lastModifiedOn',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          vmServerAddressList: this.input.vmServerAddressList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServers.lastModifiedOn', props);
    return resource.getResponseField('lastModifiedOn') as unknown as string;
  }

  public get serverCatalogStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServers',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetServers.serverCatalogStatus'),
        outputPath: 'serverCatalogStatus',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          vmServerAddressList: this.input.vmServerAddressList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServers.serverCatalogStatus', props);
    return resource.getResponseField('serverCatalogStatus') as unknown as string;
  }

  public get serverList(): shapes.SmsServer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServers',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetServers.serverList'),
        outputPath: 'serverList',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          vmServerAddressList: this.input.vmServerAddressList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServers.serverList', props);
    return resource.getResponseField('serverList') as unknown as shapes.SmsServer[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServers',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.GetServers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          vmServerAddressList: this.input.vmServerAddressList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SMSListApps extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsListAppsRequest) {
    super(scope, id);
  }

  public get apps(): shapes.SmsAppSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApps',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.ListApps.apps'),
        outputPath: 'apps',
        parameters: {
          appIds: this.input.appIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApps.apps', props);
    return resource.getResponseField('apps') as unknown as shapes.SmsAppSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApps',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.ListApps.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          appIds: this.input.appIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApps.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SMSStartOnDemandReplicationRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsStartOnDemandReplicationRunRequest) {
    super(scope, id);
  }

  public get replicationRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startOnDemandReplicationRun',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.StartOnDemandReplicationRun.replicationRunId'),
        outputPath: 'replicationRunId',
        parameters: {
          replicationJobId: this.input.replicationJobId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartOnDemandReplicationRun.replicationRunId', props);
    return resource.getResponseField('replicationRunId') as unknown as string;
  }

}

export class SMSUpdateApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsUpdateAppRequest) {
    super(scope, id);
  }

  public get appSummary(): SMSUpdateAppAppSummary {
    return new SMSUpdateAppAppSummary(this, 'AppSummary', this.__resources, this.input);
  }

  public get serverGroups(): shapes.SmsServerGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.serverGroups'),
        outputPath: 'serverGroups',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.serverGroups', props);
    return resource.getResponseField('serverGroups') as unknown as shapes.SmsServerGroup[];
  }

  public get tags(): shapes.SmsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.tags'),
        outputPath: 'tags',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.SmsTag[];
  }

}

export class SMSUpdateAppAppSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsUpdateAppRequest) {
    super(scope, id);
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.appId'),
        outputPath: 'appSummary.appId',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.appId', props);
    return resource.getResponseField('appSummary.appId') as unknown as string;
  }

  public get importedAppId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.importedAppId'),
        outputPath: 'appSummary.importedAppId',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.importedAppId', props);
    return resource.getResponseField('appSummary.importedAppId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.name'),
        outputPath: 'appSummary.name',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.name', props);
    return resource.getResponseField('appSummary.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.description'),
        outputPath: 'appSummary.description',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.description', props);
    return resource.getResponseField('appSummary.description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.status'),
        outputPath: 'appSummary.status',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.status', props);
    return resource.getResponseField('appSummary.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.statusMessage'),
        outputPath: 'appSummary.statusMessage',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.statusMessage', props);
    return resource.getResponseField('appSummary.statusMessage') as unknown as string;
  }

  public get replicationConfigurationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.replicationConfigurationStatus'),
        outputPath: 'appSummary.replicationConfigurationStatus',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.replicationConfigurationStatus', props);
    return resource.getResponseField('appSummary.replicationConfigurationStatus') as unknown as string;
  }

  public get replicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.replicationStatus'),
        outputPath: 'appSummary.replicationStatus',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.replicationStatus', props);
    return resource.getResponseField('appSummary.replicationStatus') as unknown as string;
  }

  public get replicationStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.replicationStatusMessage'),
        outputPath: 'appSummary.replicationStatusMessage',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.replicationStatusMessage', props);
    return resource.getResponseField('appSummary.replicationStatusMessage') as unknown as string;
  }

  public get latestReplicationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.latestReplicationTime'),
        outputPath: 'appSummary.latestReplicationTime',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.latestReplicationTime', props);
    return resource.getResponseField('appSummary.latestReplicationTime') as unknown as string;
  }

  public get launchConfigurationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.launchConfigurationStatus'),
        outputPath: 'appSummary.launchConfigurationStatus',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.launchConfigurationStatus', props);
    return resource.getResponseField('appSummary.launchConfigurationStatus') as unknown as string;
  }

  public get launchStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.launchStatus'),
        outputPath: 'appSummary.launchStatus',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.launchStatus', props);
    return resource.getResponseField('appSummary.launchStatus') as unknown as string;
  }

  public get launchStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.launchStatusMessage'),
        outputPath: 'appSummary.launchStatusMessage',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.launchStatusMessage', props);
    return resource.getResponseField('appSummary.launchStatusMessage') as unknown as string;
  }

  public get launchDetails(): SMSUpdateAppAppSummaryLaunchDetails {
    return new SMSUpdateAppAppSummaryLaunchDetails(this, 'LaunchDetails', this.__resources, this.input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.creationTime'),
        outputPath: 'appSummary.creationTime',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.creationTime', props);
    return resource.getResponseField('appSummary.creationTime') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.lastModified'),
        outputPath: 'appSummary.lastModified',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.lastModified', props);
    return resource.getResponseField('appSummary.lastModified') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.roleName'),
        outputPath: 'appSummary.roleName',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.roleName', props);
    return resource.getResponseField('appSummary.roleName') as unknown as string;
  }

  public get totalServerGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.totalServerGroups'),
        outputPath: 'appSummary.totalServerGroups',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.totalServerGroups', props);
    return resource.getResponseField('appSummary.totalServerGroups') as unknown as number;
  }

  public get totalServers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.totalServers'),
        outputPath: 'appSummary.totalServers',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.totalServers', props);
    return resource.getResponseField('appSummary.totalServers') as unknown as number;
  }

}

export class SMSUpdateAppAppSummaryLaunchDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SmsUpdateAppRequest) {
    super(scope, id);
  }

  public get latestLaunchTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.launchDetails.latestLaunchTime'),
        outputPath: 'appSummary.launchDetails.latestLaunchTime',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.launchDetails.latestLaunchTime', props);
    return resource.getResponseField('appSummary.launchDetails.latestLaunchTime') as unknown as string;
  }

  public get stackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.launchDetails.stackName'),
        outputPath: 'appSummary.launchDetails.stackName',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.launchDetails.stackName', props);
    return resource.getResponseField('appSummary.launchDetails.stackName') as unknown as string;
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'SMS',
        physicalResourceId: cr.PhysicalResourceId.of('SMS.UpdateApp.appSummary.launchDetails.stackId'),
        outputPath: 'appSummary.launchDetails.stackId',
        parameters: {
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          roleName: this.input.roleName,
          serverGroups: this.input.serverGroups,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.appSummary.launchDetails.stackId', props);
    return resource.getResponseField('appSummary.launchDetails.stackId') as unknown as string;
  }

}

