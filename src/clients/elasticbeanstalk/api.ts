import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ElasticBeanstalkClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public abortEnvironmentUpdate(input: shapes.ElasticBeanstalkAbortEnvironmentUpdateMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'abortEnvironmentUpdate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.AbortEnvironmentUpdate'),
        parameters: {
          EnvironmentId: input.environmentId,
          EnvironmentName: input.environmentName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AbortEnvironmentUpdate', props);
  }

  public applyEnvironmentManagedAction(input: shapes.ElasticBeanstalkApplyEnvironmentManagedActionRequest): ElasticBeanstalkResponsesApplyEnvironmentManagedAction {
    return new ElasticBeanstalkResponsesApplyEnvironmentManagedAction(this, this.__resources, input);
  }

  public associateEnvironmentOperationsRole(input: shapes.ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateEnvironmentOperationsRole',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.AssociateEnvironmentOperationsRole'),
        parameters: {
          EnvironmentName: input.environmentName,
          OperationsRole: input.operationsRole,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateEnvironmentOperationsRole', props);
  }

  public checkDnsAvailability(input: shapes.ElasticBeanstalkCheckDnsAvailabilityMessage): ElasticBeanstalkResponsesCheckDnsAvailability {
    return new ElasticBeanstalkResponsesCheckDnsAvailability(this, this.__resources, input);
  }

  public composeEnvironments(input: shapes.ElasticBeanstalkComposeEnvironmentsMessage): ElasticBeanstalkResponsesComposeEnvironments {
    return new ElasticBeanstalkResponsesComposeEnvironments(this, this.__resources, input);
  }

  public createApplication(input: shapes.ElasticBeanstalkCreateApplicationMessage): ElasticBeanstalkResponsesCreateApplication {
    return new ElasticBeanstalkResponsesCreateApplication(this, this.__resources, input);
  }

  public createApplicationVersion(input: shapes.ElasticBeanstalkCreateApplicationVersionMessage): ElasticBeanstalkResponsesCreateApplicationVersion {
    return new ElasticBeanstalkResponsesCreateApplicationVersion(this, this.__resources, input);
  }

  public createConfigurationTemplate(input: shapes.ElasticBeanstalkCreateConfigurationTemplateMessage): ElasticBeanstalkResponsesCreateConfigurationTemplate {
    return new ElasticBeanstalkResponsesCreateConfigurationTemplate(this, this.__resources, input);
  }

  public createEnvironment(input: shapes.ElasticBeanstalkCreateEnvironmentMessage): ElasticBeanstalkResponsesCreateEnvironment {
    return new ElasticBeanstalkResponsesCreateEnvironment(this, this.__resources, input);
  }

  public createPlatformVersion(input: shapes.ElasticBeanstalkCreatePlatformVersionRequest): ElasticBeanstalkResponsesCreatePlatformVersion {
    return new ElasticBeanstalkResponsesCreatePlatformVersion(this, this.__resources, input);
  }

  public createStorageLocation(): ElasticBeanstalkResponsesCreateStorageLocation {
    return new ElasticBeanstalkResponsesCreateStorageLocation(this, this.__resources);
  }

  public deleteApplication(input: shapes.ElasticBeanstalkDeleteApplicationMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeleteApplication'),
        parameters: {
          ApplicationName: input.applicationName,
          TerminateEnvByForce: input.terminateEnvByForce,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplication', props);
  }

  public deleteApplicationVersion(input: shapes.ElasticBeanstalkDeleteApplicationVersionMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeleteApplicationVersion'),
        parameters: {
          ApplicationName: input.applicationName,
          VersionLabel: input.versionLabel,
          DeleteSourceBundle: input.deleteSourceBundle,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplicationVersion', props);
  }

  public deleteConfigurationTemplate(input: shapes.ElasticBeanstalkDeleteConfigurationTemplateMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeleteConfigurationTemplate'),
        parameters: {
          ApplicationName: input.applicationName,
          TemplateName: input.templateName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConfigurationTemplate', props);
  }

  public deleteEnvironmentConfiguration(input: shapes.ElasticBeanstalkDeleteEnvironmentConfigurationMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentConfiguration',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeleteEnvironmentConfiguration'),
        parameters: {
          ApplicationName: input.applicationName,
          EnvironmentName: input.environmentName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEnvironmentConfiguration', props);
  }

  public deletePlatformVersion(input: shapes.ElasticBeanstalkDeletePlatformVersionRequest): ElasticBeanstalkResponsesDeletePlatformVersion {
    return new ElasticBeanstalkResponsesDeletePlatformVersion(this, this.__resources, input);
  }

  public describeAccountAttributes(): ElasticBeanstalkResponsesDescribeAccountAttributes {
    return new ElasticBeanstalkResponsesDescribeAccountAttributes(this, this.__resources);
  }

  public describeApplicationVersions(input: shapes.ElasticBeanstalkDescribeApplicationVersionsMessage): ElasticBeanstalkResponsesDescribeApplicationVersions {
    return new ElasticBeanstalkResponsesDescribeApplicationVersions(this, this.__resources, input);
  }

  public describeApplications(input: shapes.ElasticBeanstalkDescribeApplicationsMessage): ElasticBeanstalkResponsesDescribeApplications {
    return new ElasticBeanstalkResponsesDescribeApplications(this, this.__resources, input);
  }

  public describeConfigurationOptions(input: shapes.ElasticBeanstalkDescribeConfigurationOptionsMessage): ElasticBeanstalkResponsesDescribeConfigurationOptions {
    return new ElasticBeanstalkResponsesDescribeConfigurationOptions(this, this.__resources, input);
  }

  public describeConfigurationSettings(input: shapes.ElasticBeanstalkDescribeConfigurationSettingsMessage): ElasticBeanstalkResponsesDescribeConfigurationSettings {
    return new ElasticBeanstalkResponsesDescribeConfigurationSettings(this, this.__resources, input);
  }

  public describeEnvironmentHealth(input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest): ElasticBeanstalkResponsesDescribeEnvironmentHealth {
    return new ElasticBeanstalkResponsesDescribeEnvironmentHealth(this, this.__resources, input);
  }

  public describeEnvironmentManagedActionHistory(input: shapes.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest): ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory {
    return new ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory(this, this.__resources, input);
  }

  public describeEnvironmentManagedActions(input: shapes.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest): ElasticBeanstalkResponsesDescribeEnvironmentManagedActions {
    return new ElasticBeanstalkResponsesDescribeEnvironmentManagedActions(this, this.__resources, input);
  }

  public describeEnvironmentResources(input: shapes.ElasticBeanstalkDescribeEnvironmentResourcesMessage): ElasticBeanstalkResponsesDescribeEnvironmentResources {
    return new ElasticBeanstalkResponsesDescribeEnvironmentResources(this, this.__resources, input);
  }

  public describeEnvironments(input: shapes.ElasticBeanstalkDescribeEnvironmentsMessage): ElasticBeanstalkResponsesDescribeEnvironments {
    return new ElasticBeanstalkResponsesDescribeEnvironments(this, this.__resources, input);
  }

  public describeEvents(input: shapes.ElasticBeanstalkDescribeEventsMessage): ElasticBeanstalkResponsesDescribeEvents {
    return new ElasticBeanstalkResponsesDescribeEvents(this, this.__resources, input);
  }

  public describeInstancesHealth(input: shapes.ElasticBeanstalkDescribeInstancesHealthRequest): ElasticBeanstalkResponsesDescribeInstancesHealth {
    return new ElasticBeanstalkResponsesDescribeInstancesHealth(this, this.__resources, input);
  }

  public describePlatformVersion(input: shapes.ElasticBeanstalkDescribePlatformVersionRequest): ElasticBeanstalkResponsesDescribePlatformVersion {
    return new ElasticBeanstalkResponsesDescribePlatformVersion(this, this.__resources, input);
  }

  public disassociateEnvironmentOperationsRole(input: shapes.ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateEnvironmentOperationsRole',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DisassociateEnvironmentOperationsRole'),
        parameters: {
          EnvironmentName: input.environmentName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateEnvironmentOperationsRole', props);
  }

  public listAvailableSolutionStacks(): ElasticBeanstalkResponsesListAvailableSolutionStacks {
    return new ElasticBeanstalkResponsesListAvailableSolutionStacks(this, this.__resources);
  }

  public listPlatformBranches(input: shapes.ElasticBeanstalkListPlatformBranchesRequest): ElasticBeanstalkResponsesListPlatformBranches {
    return new ElasticBeanstalkResponsesListPlatformBranches(this, this.__resources, input);
  }

  public listPlatformVersions(input: shapes.ElasticBeanstalkListPlatformVersionsRequest): ElasticBeanstalkResponsesListPlatformVersions {
    return new ElasticBeanstalkResponsesListPlatformVersions(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ElasticBeanstalkListTagsForResourceMessage): ElasticBeanstalkResponsesListTagsForResource {
    return new ElasticBeanstalkResponsesListTagsForResource(this, this.__resources, input);
  }

  public rebuildEnvironment(input: shapes.ElasticBeanstalkRebuildEnvironmentMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebuildEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.RebuildEnvironment'),
        parameters: {
          EnvironmentId: input.environmentId,
          EnvironmentName: input.environmentName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RebuildEnvironment', props);
  }

  public requestEnvironmentInfo(input: shapes.ElasticBeanstalkRequestEnvironmentInfoMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestEnvironmentInfo',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.RequestEnvironmentInfo'),
        parameters: {
          EnvironmentId: input.environmentId,
          EnvironmentName: input.environmentName,
          InfoType: input.infoType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RequestEnvironmentInfo', props);
  }

  public restartAppServer(input: shapes.ElasticBeanstalkRestartAppServerMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restartAppServer',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.RestartAppServer'),
        parameters: {
          EnvironmentId: input.environmentId,
          EnvironmentName: input.environmentName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RestartAppServer', props);
  }

  public retrieveEnvironmentInfo(input: shapes.ElasticBeanstalkRetrieveEnvironmentInfoMessage): ElasticBeanstalkResponsesRetrieveEnvironmentInfo {
    return new ElasticBeanstalkResponsesRetrieveEnvironmentInfo(this, this.__resources, input);
  }

  public swapEnvironmentCnamEs(input: shapes.ElasticBeanstalkSwapEnvironmentCnamEsMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'swapEnvironmentCnamEs',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.SwapEnvironmentCNAMEs'),
        parameters: {
          SourceEnvironmentId: input.sourceEnvironmentId,
          SourceEnvironmentName: input.sourceEnvironmentName,
          DestinationEnvironmentId: input.destinationEnvironmentId,
          DestinationEnvironmentName: input.destinationEnvironmentName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SwapEnvironmentCNAMEs', props);
  }

  public terminateEnvironment(input: shapes.ElasticBeanstalkTerminateEnvironmentMessage): ElasticBeanstalkResponsesTerminateEnvironment {
    return new ElasticBeanstalkResponsesTerminateEnvironment(this, this.__resources, input);
  }

  public updateApplication(input: shapes.ElasticBeanstalkUpdateApplicationMessage): ElasticBeanstalkResponsesUpdateApplication {
    return new ElasticBeanstalkResponsesUpdateApplication(this, this.__resources, input);
  }

  public updateApplicationResourceLifecycle(input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage): ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle {
    return new ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle(this, this.__resources, input);
  }

  public updateApplicationVersion(input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage): ElasticBeanstalkResponsesUpdateApplicationVersion {
    return new ElasticBeanstalkResponsesUpdateApplicationVersion(this, this.__resources, input);
  }

  public updateConfigurationTemplate(input: shapes.ElasticBeanstalkUpdateConfigurationTemplateMessage): ElasticBeanstalkResponsesUpdateConfigurationTemplate {
    return new ElasticBeanstalkResponsesUpdateConfigurationTemplate(this, this.__resources, input);
  }

  public updateEnvironment(input: shapes.ElasticBeanstalkUpdateEnvironmentMessage): ElasticBeanstalkResponsesUpdateEnvironment {
    return new ElasticBeanstalkResponsesUpdateEnvironment(this, this.__resources, input);
  }

  public updateTagsForResource(input: shapes.ElasticBeanstalkUpdateTagsForResourceMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTagsForResource',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateTagsForResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagsToAdd: input.tagsToAdd,
          TagsToRemove: input.tagsToRemove,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateTagsForResource', props);
  }

  public validateConfigurationSettings(input: shapes.ElasticBeanstalkValidateConfigurationSettingsMessage): ElasticBeanstalkResponsesValidateConfigurationSettings {
    return new ElasticBeanstalkResponsesValidateConfigurationSettings(this, this.__resources, input);
  }

}

export class ElasticBeanstalkResponsesApplyEnvironmentManagedAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkApplyEnvironmentManagedActionRequest) {
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'applyEnvironmentManagedAction',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ApplyEnvironmentManagedAction.ActionId'),
        outputPath: 'ActionId',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ApplyEnvironmentManagedAction.ActionId', props);
    return resource.getResponseField('ActionId') as unknown as string;
  }

  public get actionDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'applyEnvironmentManagedAction',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ApplyEnvironmentManagedAction.ActionDescription'),
        outputPath: 'ActionDescription',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ApplyEnvironmentManagedAction.ActionDescription', props);
    return resource.getResponseField('ActionDescription') as unknown as string;
  }

  public get actionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'applyEnvironmentManagedAction',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ApplyEnvironmentManagedAction.ActionType'),
        outputPath: 'ActionType',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ApplyEnvironmentManagedAction.ActionType', props);
    return resource.getResponseField('ActionType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'applyEnvironmentManagedAction',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ApplyEnvironmentManagedAction.Status'),
        outputPath: 'Status',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ApplyEnvironmentManagedAction.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesCheckDnsAvailability {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCheckDnsAvailabilityMessage) {
  }

  public get available(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkDnsAvailability',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CheckDNSAvailability.Available'),
        outputPath: 'Available',
        parameters: {
          CNAMEPrefix: this.__input.cnamePrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckDNSAvailability.Available', props);
    return resource.getResponseField('Available') as unknown as boolean;
  }

  public get fullyQualifiedCname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkDnsAvailability',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CheckDNSAvailability.FullyQualifiedCNAME'),
        outputPath: 'FullyQualifiedCNAME',
        parameters: {
          CNAMEPrefix: this.__input.cnamePrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckDNSAvailability.FullyQualifiedCNAME', props);
    return resource.getResponseField('FullyQualifiedCNAME') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesComposeEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkComposeEnvironmentsMessage) {
  }

  public get environments(): shapes.ElasticBeanstalkEnvironmentDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'composeEnvironments',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ComposeEnvironments.Environments'),
        outputPath: 'Environments',
        parameters: {
          ApplicationName: this.__input.applicationName,
          GroupName: this.__input.groupName,
          VersionLabels: this.__input.versionLabels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ComposeEnvironments.Environments', props);
    return resource.getResponseField('Environments') as unknown as shapes.ElasticBeanstalkEnvironmentDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'composeEnvironments',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ComposeEnvironments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApplicationName: this.__input.applicationName,
          GroupName: this.__input.groupName,
          VersionLabels: this.__input.versionLabels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ComposeEnvironments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesCreateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationMessage) {
  }

  public get application(): ElasticBeanstalkResponsesCreateApplicationApplication {
    return new ElasticBeanstalkResponsesCreateApplicationApplication(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesCreateApplicationApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationMessage) {
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ApplicationArn'),
        outputPath: 'Application.ApplicationArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ApplicationArn', props);
    return resource.getResponseField('Application.ApplicationArn') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ApplicationName'),
        outputPath: 'Application.ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ApplicationName', props);
    return resource.getResponseField('Application.ApplicationName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.Description'),
        outputPath: 'Application.Description',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.Description', props);
    return resource.getResponseField('Application.Description') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.DateCreated'),
        outputPath: 'Application.DateCreated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.DateCreated', props);
    return resource.getResponseField('Application.DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.DateUpdated'),
        outputPath: 'Application.DateUpdated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.DateUpdated', props);
    return resource.getResponseField('Application.DateUpdated') as unknown as string;
  }

  public get versions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.Versions'),
        outputPath: 'Application.Versions',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.Versions', props);
    return resource.getResponseField('Application.Versions') as unknown as string[];
  }

  public get configurationTemplates(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ConfigurationTemplates'),
        outputPath: 'Application.ConfigurationTemplates',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ConfigurationTemplates', props);
    return resource.getResponseField('Application.ConfigurationTemplates') as unknown as string[];
  }

  public get resourceLifecycleConfig(): ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig {
    return new ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationMessage) {
  }

  public get serviceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ResourceLifecycleConfig.ServiceRole'),
        outputPath: 'Application.ResourceLifecycleConfig.ServiceRole',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ResourceLifecycleConfig.ServiceRole', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.ServiceRole') as unknown as string;
  }

  public get versionLifecycleConfig(): ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig {
    return new ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationMessage) {
  }

  public get maxCountRule(): ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {
    return new ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(this.__scope, this.__resources, this.__input);
  }

  public get maxAgeRule(): ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {
    return new ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationMessage) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled') as unknown as boolean;
  }

  public get maxCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount') as unknown as number;
  }

  public get deleteSourceFromS3(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationMessage) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled') as unknown as boolean;
  }

  public get maxAgeInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays') as unknown as number;
  }

  public get deleteSourceFromS3(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkResponsesCreateApplicationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationVersionMessage) {
  }

  public get applicationVersion(): ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion {
    return new ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationVersionMessage) {
  }

  public get applicationVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.ApplicationVersionArn'),
        outputPath: 'ApplicationVersion.ApplicationVersionArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.ApplicationVersionArn', props);
    return resource.getResponseField('ApplicationVersion.ApplicationVersionArn') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.ApplicationName'),
        outputPath: 'ApplicationVersion.ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.ApplicationName', props);
    return resource.getResponseField('ApplicationVersion.ApplicationName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.Description'),
        outputPath: 'ApplicationVersion.Description',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.Description', props);
    return resource.getResponseField('ApplicationVersion.Description') as unknown as string;
  }

  public get versionLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.VersionLabel'),
        outputPath: 'ApplicationVersion.VersionLabel',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.VersionLabel', props);
    return resource.getResponseField('ApplicationVersion.VersionLabel') as unknown as string;
  }

  public get sourceBuildInformation(): ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation {
    return new ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation(this.__scope, this.__resources, this.__input);
  }

  public get buildArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.BuildArn'),
        outputPath: 'ApplicationVersion.BuildArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.BuildArn', props);
    return resource.getResponseField('ApplicationVersion.BuildArn') as unknown as string;
  }

  public get sourceBundle(): ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle {
    return new ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle(this.__scope, this.__resources, this.__input);
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.DateCreated'),
        outputPath: 'ApplicationVersion.DateCreated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.DateCreated', props);
    return resource.getResponseField('ApplicationVersion.DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.DateUpdated'),
        outputPath: 'ApplicationVersion.DateUpdated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.DateUpdated', props);
    return resource.getResponseField('ApplicationVersion.DateUpdated') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.Status'),
        outputPath: 'ApplicationVersion.Status',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.Status', props);
    return resource.getResponseField('ApplicationVersion.Status') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationVersionMessage) {
  }

  public get sourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceType'),
        outputPath: 'ApplicationVersion.SourceBuildInformation.SourceType',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceType', props);
    return resource.getResponseField('ApplicationVersion.SourceBuildInformation.SourceType') as unknown as string;
  }

  public get sourceRepository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceRepository'),
        outputPath: 'ApplicationVersion.SourceBuildInformation.SourceRepository',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceRepository', props);
    return resource.getResponseField('ApplicationVersion.SourceBuildInformation.SourceRepository') as unknown as string;
  }

  public get sourceLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceLocation'),
        outputPath: 'ApplicationVersion.SourceBuildInformation.SourceLocation',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceLocation', props);
    return resource.getResponseField('ApplicationVersion.SourceBuildInformation.SourceLocation') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateApplicationVersionMessage) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.SourceBundle.S3Bucket'),
        outputPath: 'ApplicationVersion.SourceBundle.S3Bucket',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.SourceBundle.S3Bucket', props);
    return resource.getResponseField('ApplicationVersion.SourceBundle.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateApplicationVersion.ApplicationVersion.SourceBundle.S3Key'),
        outputPath: 'ApplicationVersion.SourceBundle.S3Key',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
          SourceBuildInformation: {
            SourceType: this.__input.sourceBuildInformation?.sourceType,
            SourceRepository: this.__input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.__input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.__input.sourceBundle?.s3Bucket,
            S3Key: this.__input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.__input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.__input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.__input.buildConfiguration?.computeType,
            Image: this.__input.buildConfiguration?.image,
            TimeoutInMinutes: this.__input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.__input.autoCreateApplication,
          Process: this.__input.process,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationVersion.ApplicationVersion.SourceBundle.S3Key', props);
    return resource.getResponseField('ApplicationVersion.SourceBundle.S3Key') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesCreateConfigurationTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateConfigurationTemplateMessage) {
  }

  public get solutionStackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.SolutionStackName'),
        outputPath: 'SolutionStackName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.SolutionStackName', props);
    return resource.getResponseField('SolutionStackName') as unknown as string;
  }

  public get platformArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.PlatformArn'),
        outputPath: 'PlatformArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.PlatformArn', props);
    return resource.getResponseField('PlatformArn') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.ApplicationName'),
        outputPath: 'ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.ApplicationName', props);
    return resource.getResponseField('ApplicationName') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.TemplateName'),
        outputPath: 'TemplateName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.TemplateName', props);
    return resource.getResponseField('TemplateName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.EnvironmentName'),
        outputPath: 'EnvironmentName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.EnvironmentName', props);
    return resource.getResponseField('EnvironmentName') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.DeploymentStatus'),
        outputPath: 'DeploymentStatus',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.DeploymentStatus', props);
    return resource.getResponseField('DeploymentStatus') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.DateCreated'),
        outputPath: 'DateCreated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.DateCreated', props);
    return resource.getResponseField('DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.DateUpdated'),
        outputPath: 'DateUpdated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.DateUpdated', props);
    return resource.getResponseField('DateUpdated') as unknown as string;
  }

  public get optionSettings(): shapes.ElasticBeanstalkConfigurationOptionSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateConfigurationTemplate.OptionSettings'),
        outputPath: 'OptionSettings',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.__input.sourceConfiguration?.applicationName,
            TemplateName: this.__input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.__input.environmentId,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationTemplate.OptionSettings', props);
    return resource.getResponseField('OptionSettings') as unknown as shapes.ElasticBeanstalkConfigurationOptionSetting[];
  }

}

export class ElasticBeanstalkResponsesCreateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateEnvironmentMessage) {
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.EnvironmentName'),
        outputPath: 'EnvironmentName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.EnvironmentName', props);
    return resource.getResponseField('EnvironmentName') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.EnvironmentId'),
        outputPath: 'EnvironmentId',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.EnvironmentId', props);
    return resource.getResponseField('EnvironmentId') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.ApplicationName'),
        outputPath: 'ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.ApplicationName', props);
    return resource.getResponseField('ApplicationName') as unknown as string;
  }

  public get versionLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.VersionLabel'),
        outputPath: 'VersionLabel',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.VersionLabel', props);
    return resource.getResponseField('VersionLabel') as unknown as string;
  }

  public get solutionStackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.SolutionStackName'),
        outputPath: 'SolutionStackName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.SolutionStackName', props);
    return resource.getResponseField('SolutionStackName') as unknown as string;
  }

  public get platformArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.PlatformArn'),
        outputPath: 'PlatformArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.PlatformArn', props);
    return resource.getResponseField('PlatformArn') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.TemplateName'),
        outputPath: 'TemplateName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.TemplateName', props);
    return resource.getResponseField('TemplateName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get endpointUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.EndpointURL'),
        outputPath: 'EndpointURL',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.EndpointURL', props);
    return resource.getResponseField('EndpointURL') as unknown as string;
  }

  public get cname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.CNAME'),
        outputPath: 'CNAME',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.CNAME', props);
    return resource.getResponseField('CNAME') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.DateCreated'),
        outputPath: 'DateCreated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.DateCreated', props);
    return resource.getResponseField('DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.DateUpdated'),
        outputPath: 'DateUpdated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.DateUpdated', props);
    return resource.getResponseField('DateUpdated') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.Status'),
        outputPath: 'Status',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get abortableOperationInProgress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.AbortableOperationInProgress'),
        outputPath: 'AbortableOperationInProgress',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.AbortableOperationInProgress', props);
    return resource.getResponseField('AbortableOperationInProgress') as unknown as boolean;
  }

  public get health(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.Health'),
        outputPath: 'Health',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Health', props);
    return resource.getResponseField('Health') as unknown as string;
  }

  public get healthStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.HealthStatus'),
        outputPath: 'HealthStatus',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.HealthStatus', props);
    return resource.getResponseField('HealthStatus') as unknown as string;
  }

  public get resources(): ElasticBeanstalkResponsesCreateEnvironmentResources {
    return new ElasticBeanstalkResponsesCreateEnvironmentResources(this.__scope, this.__resources, this.__input);
  }

  public get tier(): ElasticBeanstalkResponsesCreateEnvironmentTier {
    return new ElasticBeanstalkResponsesCreateEnvironmentTier(this.__scope, this.__resources, this.__input);
  }

  public get environmentLinks(): shapes.ElasticBeanstalkEnvironmentLink[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.EnvironmentLinks'),
        outputPath: 'EnvironmentLinks',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.EnvironmentLinks', props);
    return resource.getResponseField('EnvironmentLinks') as unknown as shapes.ElasticBeanstalkEnvironmentLink[];
  }

  public get environmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.EnvironmentArn'),
        outputPath: 'EnvironmentArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.EnvironmentArn', props);
    return resource.getResponseField('EnvironmentArn') as unknown as string;
  }

  public get operationsRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.OperationsRole'),
        outputPath: 'OperationsRole',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.OperationsRole', props);
    return resource.getResponseField('OperationsRole') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesCreateEnvironmentResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateEnvironmentMessage) {
  }

  public get loadBalancer(): ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer {
    return new ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateEnvironmentMessage) {
  }

  public get loadBalancerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.Resources.LoadBalancer.LoadBalancerName'),
        outputPath: 'Resources.LoadBalancer.LoadBalancerName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Resources.LoadBalancer.LoadBalancerName', props);
    return resource.getResponseField('Resources.LoadBalancer.LoadBalancerName') as unknown as string;
  }

  public get domain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.Resources.LoadBalancer.Domain'),
        outputPath: 'Resources.LoadBalancer.Domain',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Resources.LoadBalancer.Domain', props);
    return resource.getResponseField('Resources.LoadBalancer.Domain') as unknown as string;
  }

  public get listeners(): shapes.ElasticBeanstalkListener[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.Resources.LoadBalancer.Listeners'),
        outputPath: 'Resources.LoadBalancer.Listeners',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Resources.LoadBalancer.Listeners', props);
    return resource.getResponseField('Resources.LoadBalancer.Listeners') as unknown as shapes.ElasticBeanstalkListener[];
  }

}

export class ElasticBeanstalkResponsesCreateEnvironmentTier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreateEnvironmentMessage) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.Tier.Name'),
        outputPath: 'Tier.Name',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Tier.Name', props);
    return resource.getResponseField('Tier.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.Tier.Type'),
        outputPath: 'Tier.Type',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Tier.Type', props);
    return resource.getResponseField('Tier.Type') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateEnvironment.Tier.Version'),
        outputPath: 'Tier.Version',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          CNAMEPrefix: this.__input.cnamePrefix,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          Tags: this.__input.tags,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
          OperationsRole: this.__input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Tier.Version', props);
    return resource.getResponseField('Tier.Version') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesCreatePlatformVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreatePlatformVersionRequest) {
  }

  public get platformSummary(): ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary {
    return new ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary(this.__scope, this.__resources, this.__input);
  }

  public get builder(): ElasticBeanstalkResponsesCreatePlatformVersionBuilder {
    return new ElasticBeanstalkResponsesCreatePlatformVersionBuilder(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreatePlatformVersionRequest) {
  }

  public get platformArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.PlatformArn'),
        outputPath: 'PlatformSummary.PlatformArn',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.PlatformArn', props);
    return resource.getResponseField('PlatformSummary.PlatformArn') as unknown as string;
  }

  public get platformOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.PlatformOwner'),
        outputPath: 'PlatformSummary.PlatformOwner',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.PlatformOwner', props);
    return resource.getResponseField('PlatformSummary.PlatformOwner') as unknown as string;
  }

  public get platformStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.PlatformStatus'),
        outputPath: 'PlatformSummary.PlatformStatus',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.PlatformStatus', props);
    return resource.getResponseField('PlatformSummary.PlatformStatus') as unknown as string;
  }

  public get platformCategory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.PlatformCategory'),
        outputPath: 'PlatformSummary.PlatformCategory',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.PlatformCategory', props);
    return resource.getResponseField('PlatformSummary.PlatformCategory') as unknown as string;
  }

  public get operatingSystemName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.OperatingSystemName'),
        outputPath: 'PlatformSummary.OperatingSystemName',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.OperatingSystemName', props);
    return resource.getResponseField('PlatformSummary.OperatingSystemName') as unknown as string;
  }

  public get operatingSystemVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.OperatingSystemVersion'),
        outputPath: 'PlatformSummary.OperatingSystemVersion',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.OperatingSystemVersion', props);
    return resource.getResponseField('PlatformSummary.OperatingSystemVersion') as unknown as string;
  }

  public get supportedTierList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.SupportedTierList'),
        outputPath: 'PlatformSummary.SupportedTierList',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.SupportedTierList', props);
    return resource.getResponseField('PlatformSummary.SupportedTierList') as unknown as string[];
  }

  public get supportedAddonList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.SupportedAddonList'),
        outputPath: 'PlatformSummary.SupportedAddonList',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.SupportedAddonList', props);
    return resource.getResponseField('PlatformSummary.SupportedAddonList') as unknown as string[];
  }

  public get platformLifecycleState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.PlatformLifecycleState'),
        outputPath: 'PlatformSummary.PlatformLifecycleState',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.PlatformLifecycleState', props);
    return resource.getResponseField('PlatformSummary.PlatformLifecycleState') as unknown as string;
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.PlatformVersion'),
        outputPath: 'PlatformSummary.PlatformVersion',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.PlatformVersion', props);
    return resource.getResponseField('PlatformSummary.PlatformVersion') as unknown as string;
  }

  public get platformBranchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.PlatformBranchName'),
        outputPath: 'PlatformSummary.PlatformBranchName',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.PlatformBranchName', props);
    return resource.getResponseField('PlatformSummary.PlatformBranchName') as unknown as string;
  }

  public get platformBranchLifecycleState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.PlatformSummary.PlatformBranchLifecycleState'),
        outputPath: 'PlatformSummary.PlatformBranchLifecycleState',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.PlatformSummary.PlatformBranchLifecycleState', props);
    return resource.getResponseField('PlatformSummary.PlatformBranchLifecycleState') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesCreatePlatformVersionBuilder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkCreatePlatformVersionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreatePlatformVersion.Builder.ARN'),
        outputPath: 'Builder.ARN',
        parameters: {
          PlatformName: this.__input.platformName,
          PlatformVersion: this.__input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.__input.platformDefinitionBundle.s3Bucket,
            S3Key: this.__input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlatformVersion.Builder.ARN', props);
    return resource.getResponseField('Builder.ARN') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesCreateStorageLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStorageLocation',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.CreateStorageLocation.S3Bucket'),
        outputPath: 'S3Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStorageLocation.S3Bucket', props);
    return resource.getResponseField('S3Bucket') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesDeletePlatformVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDeletePlatformVersionRequest) {
  }

  public get platformSummary(): ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary {
    return new ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDeletePlatformVersionRequest) {
  }

  public get platformArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.PlatformArn'),
        outputPath: 'PlatformSummary.PlatformArn',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.PlatformArn', props);
    return resource.getResponseField('PlatformSummary.PlatformArn') as unknown as string;
  }

  public get platformOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.PlatformOwner'),
        outputPath: 'PlatformSummary.PlatformOwner',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.PlatformOwner', props);
    return resource.getResponseField('PlatformSummary.PlatformOwner') as unknown as string;
  }

  public get platformStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.PlatformStatus'),
        outputPath: 'PlatformSummary.PlatformStatus',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.PlatformStatus', props);
    return resource.getResponseField('PlatformSummary.PlatformStatus') as unknown as string;
  }

  public get platformCategory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.PlatformCategory'),
        outputPath: 'PlatformSummary.PlatformCategory',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.PlatformCategory', props);
    return resource.getResponseField('PlatformSummary.PlatformCategory') as unknown as string;
  }

  public get operatingSystemName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.OperatingSystemName'),
        outputPath: 'PlatformSummary.OperatingSystemName',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.OperatingSystemName', props);
    return resource.getResponseField('PlatformSummary.OperatingSystemName') as unknown as string;
  }

  public get operatingSystemVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.OperatingSystemVersion'),
        outputPath: 'PlatformSummary.OperatingSystemVersion',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.OperatingSystemVersion', props);
    return resource.getResponseField('PlatformSummary.OperatingSystemVersion') as unknown as string;
  }

  public get supportedTierList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.SupportedTierList'),
        outputPath: 'PlatformSummary.SupportedTierList',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.SupportedTierList', props);
    return resource.getResponseField('PlatformSummary.SupportedTierList') as unknown as string[];
  }

  public get supportedAddonList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.SupportedAddonList'),
        outputPath: 'PlatformSummary.SupportedAddonList',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.SupportedAddonList', props);
    return resource.getResponseField('PlatformSummary.SupportedAddonList') as unknown as string[];
  }

  public get platformLifecycleState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.PlatformLifecycleState'),
        outputPath: 'PlatformSummary.PlatformLifecycleState',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.PlatformLifecycleState', props);
    return resource.getResponseField('PlatformSummary.PlatformLifecycleState') as unknown as string;
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.PlatformVersion'),
        outputPath: 'PlatformSummary.PlatformVersion',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.PlatformVersion', props);
    return resource.getResponseField('PlatformSummary.PlatformVersion') as unknown as string;
  }

  public get platformBranchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.PlatformBranchName'),
        outputPath: 'PlatformSummary.PlatformBranchName',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.PlatformBranchName', props);
    return resource.getResponseField('PlatformSummary.PlatformBranchName') as unknown as string;
  }

  public get platformBranchLifecycleState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DeletePlatformVersion.PlatformSummary.PlatformBranchLifecycleState'),
        outputPath: 'PlatformSummary.PlatformBranchLifecycleState',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePlatformVersion.PlatformSummary.PlatformBranchLifecycleState', props);
    return resource.getResponseField('PlatformSummary.PlatformBranchLifecycleState') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesDescribeAccountAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get resourceQuotas(): ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas {
    return new ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas(this.__scope, this.__resources);
  }

}

export class ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get applicationQuota(): ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota {
    return new ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota(this.__scope, this.__resources);
  }

  public get applicationVersionQuota(): ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota {
    return new ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota(this.__scope, this.__resources);
  }

  public get environmentQuota(): ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota {
    return new ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota(this.__scope, this.__resources);
  }

  public get configurationTemplateQuota(): ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota {
    return new ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota(this.__scope, this.__resources);
  }

  public get customPlatformQuota(): ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota {
    return new ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota(this.__scope, this.__resources);
  }

}

export class ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get maximum(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAttributes',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeAccountAttributes.ResourceQuotas.ApplicationQuota.Maximum'),
        outputPath: 'ResourceQuotas.ApplicationQuota.Maximum',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAttributes.ResourceQuotas.ApplicationQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.ApplicationQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get maximum(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAttributes',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeAccountAttributes.ResourceQuotas.ApplicationVersionQuota.Maximum'),
        outputPath: 'ResourceQuotas.ApplicationVersionQuota.Maximum',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAttributes.ResourceQuotas.ApplicationVersionQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.ApplicationVersionQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get maximum(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAttributes',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeAccountAttributes.ResourceQuotas.EnvironmentQuota.Maximum'),
        outputPath: 'ResourceQuotas.EnvironmentQuota.Maximum',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAttributes.ResourceQuotas.EnvironmentQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.EnvironmentQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get maximum(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAttributes',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeAccountAttributes.ResourceQuotas.ConfigurationTemplateQuota.Maximum'),
        outputPath: 'ResourceQuotas.ConfigurationTemplateQuota.Maximum',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAttributes.ResourceQuotas.ConfigurationTemplateQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.ConfigurationTemplateQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get maximum(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAttributes',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeAccountAttributes.ResourceQuotas.CustomPlatformQuota.Maximum'),
        outputPath: 'ResourceQuotas.CustomPlatformQuota.Maximum',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAttributes.ResourceQuotas.CustomPlatformQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.CustomPlatformQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkResponsesDescribeApplicationVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeApplicationVersionsMessage) {
  }

  public get applicationVersions(): shapes.ElasticBeanstalkApplicationVersionDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplicationVersions',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeApplicationVersions.ApplicationVersions'),
        outputPath: 'ApplicationVersions',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabels: this.__input.versionLabels,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplicationVersions.ApplicationVersions', props);
    return resource.getResponseField('ApplicationVersions') as unknown as shapes.ElasticBeanstalkApplicationVersionDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplicationVersions',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeApplicationVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabels: this.__input.versionLabels,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplicationVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesDescribeApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeApplicationsMessage) {
  }

  public get applications(): shapes.ElasticBeanstalkApplicationDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplications',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeApplications.Applications'),
        outputPath: 'Applications',
        parameters: {
          ApplicationNames: this.__input.applicationNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplications.Applications', props);
    return resource.getResponseField('Applications') as unknown as shapes.ElasticBeanstalkApplicationDescription[];
  }

}

export class ElasticBeanstalkResponsesDescribeConfigurationOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeConfigurationOptionsMessage) {
  }

  public get solutionStackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationOptions',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeConfigurationOptions.SolutionStackName'),
        outputPath: 'SolutionStackName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          EnvironmentName: this.__input.environmentName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          Options: this.__input.options,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationOptions.SolutionStackName', props);
    return resource.getResponseField('SolutionStackName') as unknown as string;
  }

  public get platformArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationOptions',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeConfigurationOptions.PlatformArn'),
        outputPath: 'PlatformArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          EnvironmentName: this.__input.environmentName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          Options: this.__input.options,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationOptions.PlatformArn', props);
    return resource.getResponseField('PlatformArn') as unknown as string;
  }

  public get options(): shapes.ElasticBeanstalkConfigurationOptionDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationOptions',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeConfigurationOptions.Options'),
        outputPath: 'Options',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          EnvironmentName: this.__input.environmentName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          Options: this.__input.options,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationOptions.Options', props);
    return resource.getResponseField('Options') as unknown as shapes.ElasticBeanstalkConfigurationOptionDescription[];
  }

}

export class ElasticBeanstalkResponsesDescribeConfigurationSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeConfigurationSettingsMessage) {
  }

  public get configurationSettings(): shapes.ElasticBeanstalkConfigurationSettingsDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationSettings',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeConfigurationSettings.ConfigurationSettings'),
        outputPath: 'ConfigurationSettings',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          EnvironmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationSettings.ConfigurationSettings', props);
    return resource.getResponseField('ConfigurationSettings') as unknown as shapes.ElasticBeanstalkConfigurationSettingsDescription[];
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironmentHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.EnvironmentName'),
        outputPath: 'EnvironmentName',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.EnvironmentName', props);
    return resource.getResponseField('EnvironmentName') as unknown as string;
  }

  public get healthStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.HealthStatus'),
        outputPath: 'HealthStatus',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.HealthStatus', props);
    return resource.getResponseField('HealthStatus') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.Status'),
        outputPath: 'Status',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get color(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.Color'),
        outputPath: 'Color',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.Color', props);
    return resource.getResponseField('Color') as unknown as string;
  }

  public get causes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.Causes'),
        outputPath: 'Causes',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.Causes', props);
    return resource.getResponseField('Causes') as unknown as string[];
  }

  public get applicationMetrics(): ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics {
    return new ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics(this.__scope, this.__resources, this.__input);
  }

  public get instancesHealth(): ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth {
    return new ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth(this.__scope, this.__resources, this.__input);
  }

  public get refreshedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.RefreshedAt'),
        outputPath: 'RefreshedAt',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.RefreshedAt', props);
    return resource.getResponseField('RefreshedAt') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.Duration'),
        outputPath: 'ApplicationMetrics.Duration',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.Duration', props);
    return resource.getResponseField('ApplicationMetrics.Duration') as unknown as number;
  }

  public get requestCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.RequestCount'),
        outputPath: 'ApplicationMetrics.RequestCount',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.RequestCount', props);
    return resource.getResponseField('ApplicationMetrics.RequestCount') as unknown as number;
  }

  public get statusCodes(): ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes {
    return new ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes(this.__scope, this.__resources, this.__input);
  }

  public get latency(): ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency {
    return new ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
  }

  public get status2Xx(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status2xx'),
        outputPath: 'ApplicationMetrics.StatusCodes.Status2xx',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status2xx', props);
    return resource.getResponseField('ApplicationMetrics.StatusCodes.Status2xx') as unknown as number;
  }

  public get status3Xx(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status3xx'),
        outputPath: 'ApplicationMetrics.StatusCodes.Status3xx',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status3xx', props);
    return resource.getResponseField('ApplicationMetrics.StatusCodes.Status3xx') as unknown as number;
  }

  public get status4Xx(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status4xx'),
        outputPath: 'ApplicationMetrics.StatusCodes.Status4xx',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status4xx', props);
    return resource.getResponseField('ApplicationMetrics.StatusCodes.Status4xx') as unknown as number;
  }

  public get status5Xx(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status5xx'),
        outputPath: 'ApplicationMetrics.StatusCodes.Status5xx',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status5xx', props);
    return resource.getResponseField('ApplicationMetrics.StatusCodes.Status5xx') as unknown as number;
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
  }

  public get p999(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.Latency.P999'),
        outputPath: 'ApplicationMetrics.Latency.P999',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P999', props);
    return resource.getResponseField('ApplicationMetrics.Latency.P999') as unknown as number;
  }

  public get p99(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.Latency.P99'),
        outputPath: 'ApplicationMetrics.Latency.P99',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P99', props);
    return resource.getResponseField('ApplicationMetrics.Latency.P99') as unknown as number;
  }

  public get p95(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.Latency.P95'),
        outputPath: 'ApplicationMetrics.Latency.P95',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P95', props);
    return resource.getResponseField('ApplicationMetrics.Latency.P95') as unknown as number;
  }

  public get p90(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.Latency.P90'),
        outputPath: 'ApplicationMetrics.Latency.P90',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P90', props);
    return resource.getResponseField('ApplicationMetrics.Latency.P90') as unknown as number;
  }

  public get p85(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.Latency.P85'),
        outputPath: 'ApplicationMetrics.Latency.P85',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P85', props);
    return resource.getResponseField('ApplicationMetrics.Latency.P85') as unknown as number;
  }

  public get p75(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.Latency.P75'),
        outputPath: 'ApplicationMetrics.Latency.P75',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P75', props);
    return resource.getResponseField('ApplicationMetrics.Latency.P75') as unknown as number;
  }

  public get p50(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.Latency.P50'),
        outputPath: 'ApplicationMetrics.Latency.P50',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P50', props);
    return resource.getResponseField('ApplicationMetrics.Latency.P50') as unknown as number;
  }

  public get p10(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.ApplicationMetrics.Latency.P10'),
        outputPath: 'ApplicationMetrics.Latency.P10',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P10', props);
    return resource.getResponseField('ApplicationMetrics.Latency.P10') as unknown as number;
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
  }

  public get noData(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.InstancesHealth.NoData'),
        outputPath: 'InstancesHealth.NoData',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.InstancesHealth.NoData', props);
    return resource.getResponseField('InstancesHealth.NoData') as unknown as number;
  }

  public get unknown(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.InstancesHealth.Unknown'),
        outputPath: 'InstancesHealth.Unknown',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.InstancesHealth.Unknown', props);
    return resource.getResponseField('InstancesHealth.Unknown') as unknown as number;
  }

  public get pending(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.InstancesHealth.Pending'),
        outputPath: 'InstancesHealth.Pending',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.InstancesHealth.Pending', props);
    return resource.getResponseField('InstancesHealth.Pending') as unknown as number;
  }

  public get ok(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.InstancesHealth.Ok'),
        outputPath: 'InstancesHealth.Ok',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.InstancesHealth.Ok', props);
    return resource.getResponseField('InstancesHealth.Ok') as unknown as number;
  }

  public get info(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.InstancesHealth.Info'),
        outputPath: 'InstancesHealth.Info',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.InstancesHealth.Info', props);
    return resource.getResponseField('InstancesHealth.Info') as unknown as number;
  }

  public get warning(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.InstancesHealth.Warning'),
        outputPath: 'InstancesHealth.Warning',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.InstancesHealth.Warning', props);
    return resource.getResponseField('InstancesHealth.Warning') as unknown as number;
  }

  public get degraded(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.InstancesHealth.Degraded'),
        outputPath: 'InstancesHealth.Degraded',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.InstancesHealth.Degraded', props);
    return resource.getResponseField('InstancesHealth.Degraded') as unknown as number;
  }

  public get severe(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentHealth.InstancesHealth.Severe'),
        outputPath: 'InstancesHealth.Severe',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentHealth.InstancesHealth.Severe', props);
    return resource.getResponseField('InstancesHealth.Severe') as unknown as number;
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest) {
  }

  public get managedActionHistoryItems(): shapes.ElasticBeanstalkManagedActionHistoryItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentManagedActionHistory',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentManagedActionHistory.ManagedActionHistoryItems'),
        outputPath: 'ManagedActionHistoryItems',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          NextToken: this.__input.nextToken,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentManagedActionHistory.ManagedActionHistoryItems', props);
    return resource.getResponseField('ManagedActionHistoryItems') as unknown as shapes.ElasticBeanstalkManagedActionHistoryItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentManagedActionHistory',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentManagedActionHistory.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          NextToken: this.__input.nextToken,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentManagedActionHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironmentManagedActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest) {
  }

  public get managedActions(): shapes.ElasticBeanstalkManagedAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentManagedActions',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentManagedActions.ManagedActions'),
        outputPath: 'ManagedActions',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentManagedActions.ManagedActions', props);
    return resource.getResponseField('ManagedActions') as unknown as shapes.ElasticBeanstalkManagedAction[];
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironmentResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentResourcesMessage) {
  }

  public get environmentResources(): ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources {
    return new ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentResourcesMessage) {
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentResources',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentResources.EnvironmentResources.EnvironmentName'),
        outputPath: 'EnvironmentResources.EnvironmentName',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentResources.EnvironmentResources.EnvironmentName', props);
    return resource.getResponseField('EnvironmentResources.EnvironmentName') as unknown as string;
  }

  public get autoScalingGroups(): shapes.ElasticBeanstalkAutoScalingGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentResources',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentResources.EnvironmentResources.AutoScalingGroups'),
        outputPath: 'EnvironmentResources.AutoScalingGroups',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentResources.EnvironmentResources.AutoScalingGroups', props);
    return resource.getResponseField('EnvironmentResources.AutoScalingGroups') as unknown as shapes.ElasticBeanstalkAutoScalingGroup[];
  }

  public get instances(): shapes.ElasticBeanstalkInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentResources',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentResources.EnvironmentResources.Instances'),
        outputPath: 'EnvironmentResources.Instances',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentResources.EnvironmentResources.Instances', props);
    return resource.getResponseField('EnvironmentResources.Instances') as unknown as shapes.ElasticBeanstalkInstance[];
  }

  public get launchConfigurations(): shapes.ElasticBeanstalkLaunchConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentResources',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentResources.EnvironmentResources.LaunchConfigurations'),
        outputPath: 'EnvironmentResources.LaunchConfigurations',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentResources.EnvironmentResources.LaunchConfigurations', props);
    return resource.getResponseField('EnvironmentResources.LaunchConfigurations') as unknown as shapes.ElasticBeanstalkLaunchConfiguration[];
  }

  public get launchTemplates(): shapes.ElasticBeanstalkLaunchTemplate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentResources',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentResources.EnvironmentResources.LaunchTemplates'),
        outputPath: 'EnvironmentResources.LaunchTemplates',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentResources.EnvironmentResources.LaunchTemplates', props);
    return resource.getResponseField('EnvironmentResources.LaunchTemplates') as unknown as shapes.ElasticBeanstalkLaunchTemplate[];
  }

  public get loadBalancers(): shapes.ElasticBeanstalkLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentResources',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentResources.EnvironmentResources.LoadBalancers'),
        outputPath: 'EnvironmentResources.LoadBalancers',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentResources.EnvironmentResources.LoadBalancers', props);
    return resource.getResponseField('EnvironmentResources.LoadBalancers') as unknown as shapes.ElasticBeanstalkLoadBalancer[];
  }

  public get triggers(): shapes.ElasticBeanstalkTrigger[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentResources',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentResources.EnvironmentResources.Triggers'),
        outputPath: 'EnvironmentResources.Triggers',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentResources.EnvironmentResources.Triggers', props);
    return resource.getResponseField('EnvironmentResources.Triggers') as unknown as shapes.ElasticBeanstalkTrigger[];
  }

  public get queues(): shapes.ElasticBeanstalkQueue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentResources',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironmentResources.EnvironmentResources.Queues'),
        outputPath: 'EnvironmentResources.Queues',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentResources.EnvironmentResources.Queues', props);
    return resource.getResponseField('EnvironmentResources.Queues') as unknown as shapes.ElasticBeanstalkQueue[];
  }

}

export class ElasticBeanstalkResponsesDescribeEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEnvironmentsMessage) {
  }

  public get environments(): shapes.ElasticBeanstalkEnvironmentDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironments',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironments.Environments'),
        outputPath: 'Environments',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          EnvironmentIds: this.__input.environmentIds,
          EnvironmentNames: this.__input.environmentNames,
          IncludeDeleted: this.__input.includeDeleted,
          IncludedDeletedBackTo: this.__input.includedDeletedBackTo,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironments.Environments', props);
    return resource.getResponseField('Environments') as unknown as shapes.ElasticBeanstalkEnvironmentDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironments',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEnvironments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          EnvironmentIds: this.__input.environmentIds,
          EnvironmentNames: this.__input.environmentNames,
          IncludeDeleted: this.__input.includeDeleted,
          IncludedDeletedBackTo: this.__input.includedDeletedBackTo,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesDescribeEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeEventsMessage) {
  }

  public get events(): shapes.ElasticBeanstalkEventDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEvents.Events'),
        outputPath: 'Events',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          PlatformArn: this.__input.platformArn,
          RequestId: this.__input.requestId,
          Severity: this.__input.severity,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.ElasticBeanstalkEventDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeEvents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          PlatformArn: this.__input.platformArn,
          RequestId: this.__input.requestId,
          Severity: this.__input.severity,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesDescribeInstancesHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribeInstancesHealthRequest) {
  }

  public get instanceHealthList(): shapes.ElasticBeanstalkSingleInstanceHealth[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstancesHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeInstancesHealth.InstanceHealthList'),
        outputPath: 'InstanceHealthList',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstancesHealth.InstanceHealthList', props);
    return resource.getResponseField('InstanceHealthList') as unknown as shapes.ElasticBeanstalkSingleInstanceHealth[];
  }

  public get refreshedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstancesHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeInstancesHealth.RefreshedAt'),
        outputPath: 'RefreshedAt',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstancesHealth.RefreshedAt', props);
    return resource.getResponseField('RefreshedAt') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstancesHealth',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribeInstancesHealth.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          EnvironmentName: this.__input.environmentName,
          EnvironmentId: this.__input.environmentId,
          AttributeNames: this.__input.attributeNames,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstancesHealth.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesDescribePlatformVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribePlatformVersionRequest) {
  }

  public get platformDescription(): ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription {
    return new ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkDescribePlatformVersionRequest) {
  }

  public get platformArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.PlatformArn'),
        outputPath: 'PlatformDescription.PlatformArn',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.PlatformArn', props);
    return resource.getResponseField('PlatformDescription.PlatformArn') as unknown as string;
  }

  public get platformOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.PlatformOwner'),
        outputPath: 'PlatformDescription.PlatformOwner',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.PlatformOwner', props);
    return resource.getResponseField('PlatformDescription.PlatformOwner') as unknown as string;
  }

  public get platformName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.PlatformName'),
        outputPath: 'PlatformDescription.PlatformName',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.PlatformName', props);
    return resource.getResponseField('PlatformDescription.PlatformName') as unknown as string;
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.PlatformVersion'),
        outputPath: 'PlatformDescription.PlatformVersion',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.PlatformVersion', props);
    return resource.getResponseField('PlatformDescription.PlatformVersion') as unknown as string;
  }

  public get solutionStackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.SolutionStackName'),
        outputPath: 'PlatformDescription.SolutionStackName',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.SolutionStackName', props);
    return resource.getResponseField('PlatformDescription.SolutionStackName') as unknown as string;
  }

  public get platformStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.PlatformStatus'),
        outputPath: 'PlatformDescription.PlatformStatus',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.PlatformStatus', props);
    return resource.getResponseField('PlatformDescription.PlatformStatus') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.DateCreated'),
        outputPath: 'PlatformDescription.DateCreated',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.DateCreated', props);
    return resource.getResponseField('PlatformDescription.DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.DateUpdated'),
        outputPath: 'PlatformDescription.DateUpdated',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.DateUpdated', props);
    return resource.getResponseField('PlatformDescription.DateUpdated') as unknown as string;
  }

  public get platformCategory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.PlatformCategory'),
        outputPath: 'PlatformDescription.PlatformCategory',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.PlatformCategory', props);
    return resource.getResponseField('PlatformDescription.PlatformCategory') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.Description'),
        outputPath: 'PlatformDescription.Description',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.Description', props);
    return resource.getResponseField('PlatformDescription.Description') as unknown as string;
  }

  public get maintainer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.Maintainer'),
        outputPath: 'PlatformDescription.Maintainer',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.Maintainer', props);
    return resource.getResponseField('PlatformDescription.Maintainer') as unknown as string;
  }

  public get operatingSystemName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.OperatingSystemName'),
        outputPath: 'PlatformDescription.OperatingSystemName',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.OperatingSystemName', props);
    return resource.getResponseField('PlatformDescription.OperatingSystemName') as unknown as string;
  }

  public get operatingSystemVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.OperatingSystemVersion'),
        outputPath: 'PlatformDescription.OperatingSystemVersion',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.OperatingSystemVersion', props);
    return resource.getResponseField('PlatformDescription.OperatingSystemVersion') as unknown as string;
  }

  public get programmingLanguages(): shapes.ElasticBeanstalkPlatformProgrammingLanguage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.ProgrammingLanguages'),
        outputPath: 'PlatformDescription.ProgrammingLanguages',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.ProgrammingLanguages', props);
    return resource.getResponseField('PlatformDescription.ProgrammingLanguages') as unknown as shapes.ElasticBeanstalkPlatformProgrammingLanguage[];
  }

  public get frameworks(): shapes.ElasticBeanstalkPlatformFramework[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.Frameworks'),
        outputPath: 'PlatformDescription.Frameworks',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.Frameworks', props);
    return resource.getResponseField('PlatformDescription.Frameworks') as unknown as shapes.ElasticBeanstalkPlatformFramework[];
  }

  public get customAmiList(): shapes.ElasticBeanstalkCustomAmi[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.CustomAmiList'),
        outputPath: 'PlatformDescription.CustomAmiList',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.CustomAmiList', props);
    return resource.getResponseField('PlatformDescription.CustomAmiList') as unknown as shapes.ElasticBeanstalkCustomAmi[];
  }

  public get supportedTierList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.SupportedTierList'),
        outputPath: 'PlatformDescription.SupportedTierList',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.SupportedTierList', props);
    return resource.getResponseField('PlatformDescription.SupportedTierList') as unknown as string[];
  }

  public get supportedAddonList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.SupportedAddonList'),
        outputPath: 'PlatformDescription.SupportedAddonList',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.SupportedAddonList', props);
    return resource.getResponseField('PlatformDescription.SupportedAddonList') as unknown as string[];
  }

  public get platformLifecycleState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.PlatformLifecycleState'),
        outputPath: 'PlatformDescription.PlatformLifecycleState',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.PlatformLifecycleState', props);
    return resource.getResponseField('PlatformDescription.PlatformLifecycleState') as unknown as string;
  }

  public get platformBranchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.PlatformBranchName'),
        outputPath: 'PlatformDescription.PlatformBranchName',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.PlatformBranchName', props);
    return resource.getResponseField('PlatformDescription.PlatformBranchName') as unknown as string;
  }

  public get platformBranchLifecycleState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlatformVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.DescribePlatformVersion.PlatformDescription.PlatformBranchLifecycleState'),
        outputPath: 'PlatformDescription.PlatformBranchLifecycleState',
        parameters: {
          PlatformArn: this.__input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlatformVersion.PlatformDescription.PlatformBranchLifecycleState', props);
    return resource.getResponseField('PlatformDescription.PlatformBranchLifecycleState') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesListAvailableSolutionStacks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get solutionStacks(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAvailableSolutionStacks',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ListAvailableSolutionStacks.SolutionStacks'),
        outputPath: 'SolutionStacks',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAvailableSolutionStacks.SolutionStacks', props);
    return resource.getResponseField('SolutionStacks') as unknown as string[];
  }

  public get solutionStackDetails(): shapes.ElasticBeanstalkSolutionStackDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAvailableSolutionStacks',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ListAvailableSolutionStacks.SolutionStackDetails'),
        outputPath: 'SolutionStackDetails',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAvailableSolutionStacks.SolutionStackDetails', props);
    return resource.getResponseField('SolutionStackDetails') as unknown as shapes.ElasticBeanstalkSolutionStackDescription[];
  }

}

export class ElasticBeanstalkResponsesListPlatformBranches {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkListPlatformBranchesRequest) {
  }

  public get platformBranchSummaryList(): shapes.ElasticBeanstalkPlatformBranchSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlatformBranches',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ListPlatformBranches.PlatformBranchSummaryList'),
        outputPath: 'PlatformBranchSummaryList',
        parameters: {
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlatformBranches.PlatformBranchSummaryList', props);
    return resource.getResponseField('PlatformBranchSummaryList') as unknown as shapes.ElasticBeanstalkPlatformBranchSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlatformBranches',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ListPlatformBranches.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlatformBranches.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesListPlatformVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkListPlatformVersionsRequest) {
  }

  public get platformSummaryList(): shapes.ElasticBeanstalkPlatformSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlatformVersions',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ListPlatformVersions.PlatformSummaryList'),
        outputPath: 'PlatformSummaryList',
        parameters: {
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlatformVersions.PlatformSummaryList', props);
    return resource.getResponseField('PlatformSummaryList') as unknown as shapes.ElasticBeanstalkPlatformSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlatformVersions',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ListPlatformVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlatformVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkListTagsForResourceMessage) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ListTagsForResource.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get resourceTags(): shapes.ElasticBeanstalkTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ListTagsForResource.ResourceTags'),
        outputPath: 'ResourceTags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.ResourceTags', props);
    return resource.getResponseField('ResourceTags') as unknown as shapes.ElasticBeanstalkTag[];
  }

}

export class ElasticBeanstalkResponsesRetrieveEnvironmentInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkRetrieveEnvironmentInfoMessage) {
  }

  public get environmentInfo(): shapes.ElasticBeanstalkEnvironmentInfoDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retrieveEnvironmentInfo',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.RetrieveEnvironmentInfo.EnvironmentInfo'),
        outputPath: 'EnvironmentInfo',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          InfoType: this.__input.infoType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetrieveEnvironmentInfo.EnvironmentInfo', props);
    return resource.getResponseField('EnvironmentInfo') as unknown as shapes.ElasticBeanstalkEnvironmentInfoDescription[];
  }

}

export class ElasticBeanstalkResponsesTerminateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkTerminateEnvironmentMessage) {
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.EnvironmentName'),
        outputPath: 'EnvironmentName',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.EnvironmentName', props);
    return resource.getResponseField('EnvironmentName') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.EnvironmentId'),
        outputPath: 'EnvironmentId',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.EnvironmentId', props);
    return resource.getResponseField('EnvironmentId') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.ApplicationName'),
        outputPath: 'ApplicationName',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.ApplicationName', props);
    return resource.getResponseField('ApplicationName') as unknown as string;
  }

  public get versionLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.VersionLabel'),
        outputPath: 'VersionLabel',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.VersionLabel', props);
    return resource.getResponseField('VersionLabel') as unknown as string;
  }

  public get solutionStackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.SolutionStackName'),
        outputPath: 'SolutionStackName',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.SolutionStackName', props);
    return resource.getResponseField('SolutionStackName') as unknown as string;
  }

  public get platformArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.PlatformArn'),
        outputPath: 'PlatformArn',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.PlatformArn', props);
    return resource.getResponseField('PlatformArn') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.TemplateName'),
        outputPath: 'TemplateName',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.TemplateName', props);
    return resource.getResponseField('TemplateName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.Description'),
        outputPath: 'Description',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get endpointUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.EndpointURL'),
        outputPath: 'EndpointURL',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.EndpointURL', props);
    return resource.getResponseField('EndpointURL') as unknown as string;
  }

  public get cname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.CNAME'),
        outputPath: 'CNAME',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.CNAME', props);
    return resource.getResponseField('CNAME') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.DateCreated'),
        outputPath: 'DateCreated',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.DateCreated', props);
    return resource.getResponseField('DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.DateUpdated'),
        outputPath: 'DateUpdated',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.DateUpdated', props);
    return resource.getResponseField('DateUpdated') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.Status'),
        outputPath: 'Status',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get abortableOperationInProgress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.AbortableOperationInProgress'),
        outputPath: 'AbortableOperationInProgress',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.AbortableOperationInProgress', props);
    return resource.getResponseField('AbortableOperationInProgress') as unknown as boolean;
  }

  public get health(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.Health'),
        outputPath: 'Health',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.Health', props);
    return resource.getResponseField('Health') as unknown as string;
  }

  public get healthStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.HealthStatus'),
        outputPath: 'HealthStatus',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.HealthStatus', props);
    return resource.getResponseField('HealthStatus') as unknown as string;
  }

  public get resources(): ElasticBeanstalkResponsesTerminateEnvironmentResources {
    return new ElasticBeanstalkResponsesTerminateEnvironmentResources(this.__scope, this.__resources, this.__input);
  }

  public get tier(): ElasticBeanstalkResponsesTerminateEnvironmentTier {
    return new ElasticBeanstalkResponsesTerminateEnvironmentTier(this.__scope, this.__resources, this.__input);
  }

  public get environmentLinks(): shapes.ElasticBeanstalkEnvironmentLink[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.EnvironmentLinks'),
        outputPath: 'EnvironmentLinks',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.EnvironmentLinks', props);
    return resource.getResponseField('EnvironmentLinks') as unknown as shapes.ElasticBeanstalkEnvironmentLink[];
  }

  public get environmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.EnvironmentArn'),
        outputPath: 'EnvironmentArn',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.EnvironmentArn', props);
    return resource.getResponseField('EnvironmentArn') as unknown as string;
  }

  public get operationsRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.OperationsRole'),
        outputPath: 'OperationsRole',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.OperationsRole', props);
    return resource.getResponseField('OperationsRole') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesTerminateEnvironmentResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkTerminateEnvironmentMessage) {
  }

  public get loadBalancer(): ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer {
    return new ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkTerminateEnvironmentMessage) {
  }

  public get loadBalancerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.Resources.LoadBalancer.LoadBalancerName'),
        outputPath: 'Resources.LoadBalancer.LoadBalancerName',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.Resources.LoadBalancer.LoadBalancerName', props);
    return resource.getResponseField('Resources.LoadBalancer.LoadBalancerName') as unknown as string;
  }

  public get domain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.Resources.LoadBalancer.Domain'),
        outputPath: 'Resources.LoadBalancer.Domain',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.Resources.LoadBalancer.Domain', props);
    return resource.getResponseField('Resources.LoadBalancer.Domain') as unknown as string;
  }

  public get listeners(): shapes.ElasticBeanstalkListener[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.Resources.LoadBalancer.Listeners'),
        outputPath: 'Resources.LoadBalancer.Listeners',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.Resources.LoadBalancer.Listeners', props);
    return resource.getResponseField('Resources.LoadBalancer.Listeners') as unknown as shapes.ElasticBeanstalkListener[];
  }

}

export class ElasticBeanstalkResponsesTerminateEnvironmentTier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkTerminateEnvironmentMessage) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.Tier.Name'),
        outputPath: 'Tier.Name',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.Tier.Name', props);
    return resource.getResponseField('Tier.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.Tier.Type'),
        outputPath: 'Tier.Type',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.Tier.Type', props);
    return resource.getResponseField('Tier.Type') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.TerminateEnvironment.Tier.Version'),
        outputPath: 'Tier.Version',
        parameters: {
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          TerminateResources: this.__input.terminateResources,
          ForceTerminate: this.__input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateEnvironment.Tier.Version', props);
    return resource.getResponseField('Tier.Version') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesUpdateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
  }

  public get application(): ElasticBeanstalkResponsesUpdateApplicationApplication {
    return new ElasticBeanstalkResponsesUpdateApplicationApplication(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ApplicationArn'),
        outputPath: 'Application.ApplicationArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ApplicationArn', props);
    return resource.getResponseField('Application.ApplicationArn') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ApplicationName'),
        outputPath: 'Application.ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ApplicationName', props);
    return resource.getResponseField('Application.ApplicationName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.Description'),
        outputPath: 'Application.Description',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.Description', props);
    return resource.getResponseField('Application.Description') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.DateCreated'),
        outputPath: 'Application.DateCreated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.DateCreated', props);
    return resource.getResponseField('Application.DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.DateUpdated'),
        outputPath: 'Application.DateUpdated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.DateUpdated', props);
    return resource.getResponseField('Application.DateUpdated') as unknown as string;
  }

  public get versions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.Versions'),
        outputPath: 'Application.Versions',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.Versions', props);
    return resource.getResponseField('Application.Versions') as unknown as string[];
  }

  public get configurationTemplates(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ConfigurationTemplates'),
        outputPath: 'Application.ConfigurationTemplates',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ConfigurationTemplates', props);
    return resource.getResponseField('Application.ConfigurationTemplates') as unknown as string[];
  }

  public get resourceLifecycleConfig(): ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig {
    return new ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
  }

  public get serviceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ResourceLifecycleConfig.ServiceRole'),
        outputPath: 'Application.ResourceLifecycleConfig.ServiceRole',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ResourceLifecycleConfig.ServiceRole', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.ServiceRole') as unknown as string;
  }

  public get versionLifecycleConfig(): ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig {
    return new ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
  }

  public get maxCountRule(): ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {
    return new ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(this.__scope, this.__resources, this.__input);
  }

  public get maxAgeRule(): ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {
    return new ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled') as unknown as boolean;
  }

  public get maxCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount') as unknown as number;
  }

  public get deleteSourceFromS3(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled') as unknown as boolean;
  }

  public get maxAgeInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays') as unknown as number;
  }

  public get deleteSourceFromS3(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3'),
        outputPath: 'Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3',
        parameters: {
          ApplicationName: this.__input.applicationName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationResourceLifecycle',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationResourceLifecycle.ApplicationName'),
        outputPath: 'ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationResourceLifecycle.ApplicationName', props);
    return resource.getResponseField('ApplicationName') as unknown as string;
  }

  public get resourceLifecycleConfig(): ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig {
    return new ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
  }

  public get serviceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationResourceLifecycle',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.ServiceRole'),
        outputPath: 'ResourceLifecycleConfig.ServiceRole',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.ServiceRole', props);
    return resource.getResponseField('ResourceLifecycleConfig.ServiceRole') as unknown as string;
  }

  public get versionLifecycleConfig(): ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig {
    return new ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
  }

  public get maxCountRule(): ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {
    return new ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(this.__scope, this.__resources, this.__input);
  }

  public get maxAgeRule(): ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {
    return new ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationResourceLifecycle',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled'),
        outputPath: 'ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled', props);
    return resource.getResponseField('ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled') as unknown as boolean;
  }

  public get maxCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationResourceLifecycle',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount'),
        outputPath: 'ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount', props);
    return resource.getResponseField('ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount') as unknown as number;
  }

  public get deleteSourceFromS3(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationResourceLifecycle',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3'),
        outputPath: 'ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3', props);
    return resource.getResponseField('ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationResourceLifecycle',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled'),
        outputPath: 'ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled', props);
    return resource.getResponseField('ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled') as unknown as boolean;
  }

  public get maxAgeInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationResourceLifecycle',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays'),
        outputPath: 'ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays', props);
    return resource.getResponseField('ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays') as unknown as number;
  }

  public get deleteSourceFromS3(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationResourceLifecycle',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3'),
        outputPath: 'ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.__input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.__input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3', props);
    return resource.getResponseField('ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage) {
  }

  public get applicationVersion(): ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion {
    return new ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage) {
  }

  public get applicationVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.ApplicationVersionArn'),
        outputPath: 'ApplicationVersion.ApplicationVersionArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.ApplicationVersionArn', props);
    return resource.getResponseField('ApplicationVersion.ApplicationVersionArn') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.ApplicationName'),
        outputPath: 'ApplicationVersion.ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.ApplicationName', props);
    return resource.getResponseField('ApplicationVersion.ApplicationName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.Description'),
        outputPath: 'ApplicationVersion.Description',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.Description', props);
    return resource.getResponseField('ApplicationVersion.Description') as unknown as string;
  }

  public get versionLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.VersionLabel'),
        outputPath: 'ApplicationVersion.VersionLabel',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.VersionLabel', props);
    return resource.getResponseField('ApplicationVersion.VersionLabel') as unknown as string;
  }

  public get sourceBuildInformation(): ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation {
    return new ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation(this.__scope, this.__resources, this.__input);
  }

  public get buildArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.BuildArn'),
        outputPath: 'ApplicationVersion.BuildArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.BuildArn', props);
    return resource.getResponseField('ApplicationVersion.BuildArn') as unknown as string;
  }

  public get sourceBundle(): ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle {
    return new ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle(this.__scope, this.__resources, this.__input);
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.DateCreated'),
        outputPath: 'ApplicationVersion.DateCreated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.DateCreated', props);
    return resource.getResponseField('ApplicationVersion.DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.DateUpdated'),
        outputPath: 'ApplicationVersion.DateUpdated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.DateUpdated', props);
    return resource.getResponseField('ApplicationVersion.DateUpdated') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.Status'),
        outputPath: 'ApplicationVersion.Status',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.Status', props);
    return resource.getResponseField('ApplicationVersion.Status') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage) {
  }

  public get sourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceType'),
        outputPath: 'ApplicationVersion.SourceBuildInformation.SourceType',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceType', props);
    return resource.getResponseField('ApplicationVersion.SourceBuildInformation.SourceType') as unknown as string;
  }

  public get sourceRepository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceRepository'),
        outputPath: 'ApplicationVersion.SourceBuildInformation.SourceRepository',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceRepository', props);
    return resource.getResponseField('ApplicationVersion.SourceBuildInformation.SourceRepository') as unknown as string;
  }

  public get sourceLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceLocation'),
        outputPath: 'ApplicationVersion.SourceBuildInformation.SourceLocation',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceLocation', props);
    return resource.getResponseField('ApplicationVersion.SourceBuildInformation.SourceLocation') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.SourceBundle.S3Bucket'),
        outputPath: 'ApplicationVersion.SourceBundle.S3Bucket',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.SourceBundle.S3Bucket', props);
    return resource.getResponseField('ApplicationVersion.SourceBundle.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplicationVersion',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateApplicationVersion.ApplicationVersion.SourceBundle.S3Key'),
        outputPath: 'ApplicationVersion.SourceBundle.S3Key',
        parameters: {
          ApplicationName: this.__input.applicationName,
          VersionLabel: this.__input.versionLabel,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplicationVersion.ApplicationVersion.SourceBundle.S3Key', props);
    return resource.getResponseField('ApplicationVersion.SourceBundle.S3Key') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesUpdateConfigurationTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateConfigurationTemplateMessage) {
  }

  public get solutionStackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.SolutionStackName'),
        outputPath: 'SolutionStackName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.SolutionStackName', props);
    return resource.getResponseField('SolutionStackName') as unknown as string;
  }

  public get platformArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.PlatformArn'),
        outputPath: 'PlatformArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.PlatformArn', props);
    return resource.getResponseField('PlatformArn') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.ApplicationName'),
        outputPath: 'ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.ApplicationName', props);
    return resource.getResponseField('ApplicationName') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.TemplateName'),
        outputPath: 'TemplateName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.TemplateName', props);
    return resource.getResponseField('TemplateName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.EnvironmentName'),
        outputPath: 'EnvironmentName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.EnvironmentName', props);
    return resource.getResponseField('EnvironmentName') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.DeploymentStatus'),
        outputPath: 'DeploymentStatus',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.DeploymentStatus', props);
    return resource.getResponseField('DeploymentStatus') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.DateCreated'),
        outputPath: 'DateCreated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.DateCreated', props);
    return resource.getResponseField('DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.DateUpdated'),
        outputPath: 'DateUpdated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.DateUpdated', props);
    return resource.getResponseField('DateUpdated') as unknown as string;
  }

  public get optionSettings(): shapes.ElasticBeanstalkConfigurationOptionSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationTemplate',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateConfigurationTemplate.OptionSettings'),
        outputPath: 'OptionSettings',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          Description: this.__input.description,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationTemplate.OptionSettings', props);
    return resource.getResponseField('OptionSettings') as unknown as shapes.ElasticBeanstalkConfigurationOptionSetting[];
  }

}

export class ElasticBeanstalkResponsesUpdateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateEnvironmentMessage) {
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.EnvironmentName'),
        outputPath: 'EnvironmentName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.EnvironmentName', props);
    return resource.getResponseField('EnvironmentName') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.EnvironmentId'),
        outputPath: 'EnvironmentId',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.EnvironmentId', props);
    return resource.getResponseField('EnvironmentId') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.ApplicationName'),
        outputPath: 'ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.ApplicationName', props);
    return resource.getResponseField('ApplicationName') as unknown as string;
  }

  public get versionLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.VersionLabel'),
        outputPath: 'VersionLabel',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.VersionLabel', props);
    return resource.getResponseField('VersionLabel') as unknown as string;
  }

  public get solutionStackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.SolutionStackName'),
        outputPath: 'SolutionStackName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.SolutionStackName', props);
    return resource.getResponseField('SolutionStackName') as unknown as string;
  }

  public get platformArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.PlatformArn'),
        outputPath: 'PlatformArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.PlatformArn', props);
    return resource.getResponseField('PlatformArn') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.TemplateName'),
        outputPath: 'TemplateName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.TemplateName', props);
    return resource.getResponseField('TemplateName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get endpointUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.EndpointURL'),
        outputPath: 'EndpointURL',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.EndpointURL', props);
    return resource.getResponseField('EndpointURL') as unknown as string;
  }

  public get cname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.CNAME'),
        outputPath: 'CNAME',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.CNAME', props);
    return resource.getResponseField('CNAME') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.DateCreated'),
        outputPath: 'DateCreated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.DateCreated', props);
    return resource.getResponseField('DateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.DateUpdated'),
        outputPath: 'DateUpdated',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.DateUpdated', props);
    return resource.getResponseField('DateUpdated') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.Status'),
        outputPath: 'Status',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get abortableOperationInProgress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.AbortableOperationInProgress'),
        outputPath: 'AbortableOperationInProgress',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.AbortableOperationInProgress', props);
    return resource.getResponseField('AbortableOperationInProgress') as unknown as boolean;
  }

  public get health(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.Health'),
        outputPath: 'Health',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Health', props);
    return resource.getResponseField('Health') as unknown as string;
  }

  public get healthStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.HealthStatus'),
        outputPath: 'HealthStatus',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.HealthStatus', props);
    return resource.getResponseField('HealthStatus') as unknown as string;
  }

  public get resources(): ElasticBeanstalkResponsesUpdateEnvironmentResources {
    return new ElasticBeanstalkResponsesUpdateEnvironmentResources(this.__scope, this.__resources, this.__input);
  }

  public get tier(): ElasticBeanstalkResponsesUpdateEnvironmentTier {
    return new ElasticBeanstalkResponsesUpdateEnvironmentTier(this.__scope, this.__resources, this.__input);
  }

  public get environmentLinks(): shapes.ElasticBeanstalkEnvironmentLink[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.EnvironmentLinks'),
        outputPath: 'EnvironmentLinks',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.EnvironmentLinks', props);
    return resource.getResponseField('EnvironmentLinks') as unknown as shapes.ElasticBeanstalkEnvironmentLink[];
  }

  public get environmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.EnvironmentArn'),
        outputPath: 'EnvironmentArn',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.EnvironmentArn', props);
    return resource.getResponseField('EnvironmentArn') as unknown as string;
  }

  public get operationsRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.OperationsRole'),
        outputPath: 'OperationsRole',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.OperationsRole', props);
    return resource.getResponseField('OperationsRole') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesUpdateEnvironmentResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateEnvironmentMessage) {
  }

  public get loadBalancer(): ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer {
    return new ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer(this.__scope, this.__resources, this.__input);
  }

}

export class ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateEnvironmentMessage) {
  }

  public get loadBalancerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.Resources.LoadBalancer.LoadBalancerName'),
        outputPath: 'Resources.LoadBalancer.LoadBalancerName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Resources.LoadBalancer.LoadBalancerName', props);
    return resource.getResponseField('Resources.LoadBalancer.LoadBalancerName') as unknown as string;
  }

  public get domain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.Resources.LoadBalancer.Domain'),
        outputPath: 'Resources.LoadBalancer.Domain',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Resources.LoadBalancer.Domain', props);
    return resource.getResponseField('Resources.LoadBalancer.Domain') as unknown as string;
  }

  public get listeners(): shapes.ElasticBeanstalkListener[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.Resources.LoadBalancer.Listeners'),
        outputPath: 'Resources.LoadBalancer.Listeners',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Resources.LoadBalancer.Listeners', props);
    return resource.getResponseField('Resources.LoadBalancer.Listeners') as unknown as shapes.ElasticBeanstalkListener[];
  }

}

export class ElasticBeanstalkResponsesUpdateEnvironmentTier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkUpdateEnvironmentMessage) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.Tier.Name'),
        outputPath: 'Tier.Name',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Tier.Name', props);
    return resource.getResponseField('Tier.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.Tier.Type'),
        outputPath: 'Tier.Type',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Tier.Type', props);
    return resource.getResponseField('Tier.Type') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.UpdateEnvironment.Tier.Version'),
        outputPath: 'Tier.Version',
        parameters: {
          ApplicationName: this.__input.applicationName,
          EnvironmentId: this.__input.environmentId,
          EnvironmentName: this.__input.environmentName,
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          Tier: {
            Name: this.__input.tier?.name,
            Type: this.__input.tier?.type,
            Version: this.__input.tier?.version,
          },
          VersionLabel: this.__input.versionLabel,
          TemplateName: this.__input.templateName,
          SolutionStackName: this.__input.solutionStackName,
          PlatformArn: this.__input.platformArn,
          OptionSettings: this.__input.optionSettings,
          OptionsToRemove: this.__input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Tier.Version', props);
    return resource.getResponseField('Tier.Version') as unknown as string;
  }

}

export class ElasticBeanstalkResponsesValidateConfigurationSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticBeanstalkValidateConfigurationSettingsMessage) {
  }

  public get messages(): shapes.ElasticBeanstalkValidationMessage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateConfigurationSettings',
        service: 'ElasticBeanstalk',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticBeanstalk.ValidateConfigurationSettings.Messages'),
        outputPath: 'Messages',
        parameters: {
          ApplicationName: this.__input.applicationName,
          TemplateName: this.__input.templateName,
          EnvironmentName: this.__input.environmentName,
          OptionSettings: this.__input.optionSettings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateConfigurationSettings.Messages', props);
    return resource.getResponseField('Messages') as unknown as shapes.ElasticBeanstalkValidationMessage[];
  }

}

