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

  public applyEnvironmentManagedAction(input: shapes.ElasticBeanstalkApplyEnvironmentManagedActionRequest): ElasticBeanstalkApplyEnvironmentManagedAction {
    return new ElasticBeanstalkApplyEnvironmentManagedAction(this, 'ApplyEnvironmentManagedAction', this.__resources, input);
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

  public checkDnsAvailability(input: shapes.ElasticBeanstalkCheckDnsAvailabilityMessage): ElasticBeanstalkCheckDnsAvailability {
    return new ElasticBeanstalkCheckDnsAvailability(this, 'CheckDnsAvailability', this.__resources, input);
  }

  public composeEnvironments(input: shapes.ElasticBeanstalkComposeEnvironmentsMessage): ElasticBeanstalkComposeEnvironments {
    return new ElasticBeanstalkComposeEnvironments(this, 'ComposeEnvironments', this.__resources, input);
  }

  public createApplication(input: shapes.ElasticBeanstalkCreateApplicationMessage): ElasticBeanstalkCreateApplication {
    return new ElasticBeanstalkCreateApplication(this, 'CreateApplication', this.__resources, input);
  }

  public createApplicationVersion(input: shapes.ElasticBeanstalkCreateApplicationVersionMessage): ElasticBeanstalkCreateApplicationVersion {
    return new ElasticBeanstalkCreateApplicationVersion(this, 'CreateApplicationVersion', this.__resources, input);
  }

  public createConfigurationTemplate(input: shapes.ElasticBeanstalkCreateConfigurationTemplateMessage): ElasticBeanstalkCreateConfigurationTemplate {
    return new ElasticBeanstalkCreateConfigurationTemplate(this, 'CreateConfigurationTemplate', this.__resources, input);
  }

  public createEnvironment(input: shapes.ElasticBeanstalkCreateEnvironmentMessage): ElasticBeanstalkCreateEnvironment {
    return new ElasticBeanstalkCreateEnvironment(this, 'CreateEnvironment', this.__resources, input);
  }

  public createPlatformVersion(input: shapes.ElasticBeanstalkCreatePlatformVersionRequest): ElasticBeanstalkCreatePlatformVersion {
    return new ElasticBeanstalkCreatePlatformVersion(this, 'CreatePlatformVersion', this.__resources, input);
  }

  public createStorageLocation(): ElasticBeanstalkCreateStorageLocation {
    return new ElasticBeanstalkCreateStorageLocation(this, 'CreateStorageLocation', this.__resources);
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

  public deletePlatformVersion(input: shapes.ElasticBeanstalkDeletePlatformVersionRequest): ElasticBeanstalkDeletePlatformVersion {
    return new ElasticBeanstalkDeletePlatformVersion(this, 'DeletePlatformVersion', this.__resources, input);
  }

  public describeAccountAttributes(): ElasticBeanstalkDescribeAccountAttributes {
    return new ElasticBeanstalkDescribeAccountAttributes(this, 'DescribeAccountAttributes', this.__resources);
  }

  public describeApplicationVersions(input: shapes.ElasticBeanstalkDescribeApplicationVersionsMessage): ElasticBeanstalkDescribeApplicationVersions {
    return new ElasticBeanstalkDescribeApplicationVersions(this, 'DescribeApplicationVersions', this.__resources, input);
  }

  public describeApplications(input: shapes.ElasticBeanstalkDescribeApplicationsMessage): ElasticBeanstalkDescribeApplications {
    return new ElasticBeanstalkDescribeApplications(this, 'DescribeApplications', this.__resources, input);
  }

  public describeConfigurationOptions(input: shapes.ElasticBeanstalkDescribeConfigurationOptionsMessage): ElasticBeanstalkDescribeConfigurationOptions {
    return new ElasticBeanstalkDescribeConfigurationOptions(this, 'DescribeConfigurationOptions', this.__resources, input);
  }

  public describeConfigurationSettings(input: shapes.ElasticBeanstalkDescribeConfigurationSettingsMessage): ElasticBeanstalkDescribeConfigurationSettings {
    return new ElasticBeanstalkDescribeConfigurationSettings(this, 'DescribeConfigurationSettings', this.__resources, input);
  }

  public describeEnvironmentHealth(input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest): ElasticBeanstalkDescribeEnvironmentHealth {
    return new ElasticBeanstalkDescribeEnvironmentHealth(this, 'DescribeEnvironmentHealth', this.__resources, input);
  }

  public describeEnvironmentManagedActionHistory(input: shapes.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest): ElasticBeanstalkDescribeEnvironmentManagedActionHistory {
    return new ElasticBeanstalkDescribeEnvironmentManagedActionHistory(this, 'DescribeEnvironmentManagedActionHistory', this.__resources, input);
  }

  public describeEnvironmentManagedActions(input: shapes.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest): ElasticBeanstalkDescribeEnvironmentManagedActions {
    return new ElasticBeanstalkDescribeEnvironmentManagedActions(this, 'DescribeEnvironmentManagedActions', this.__resources, input);
  }

  public describeEnvironmentResources(input: shapes.ElasticBeanstalkDescribeEnvironmentResourcesMessage): ElasticBeanstalkDescribeEnvironmentResources {
    return new ElasticBeanstalkDescribeEnvironmentResources(this, 'DescribeEnvironmentResources', this.__resources, input);
  }

  public describeEnvironments(input: shapes.ElasticBeanstalkDescribeEnvironmentsMessage): ElasticBeanstalkDescribeEnvironments {
    return new ElasticBeanstalkDescribeEnvironments(this, 'DescribeEnvironments', this.__resources, input);
  }

  public describeEvents(input: shapes.ElasticBeanstalkDescribeEventsMessage): ElasticBeanstalkDescribeEvents {
    return new ElasticBeanstalkDescribeEvents(this, 'DescribeEvents', this.__resources, input);
  }

  public describeInstancesHealth(input: shapes.ElasticBeanstalkDescribeInstancesHealthRequest): ElasticBeanstalkDescribeInstancesHealth {
    return new ElasticBeanstalkDescribeInstancesHealth(this, 'DescribeInstancesHealth', this.__resources, input);
  }

  public describePlatformVersion(input: shapes.ElasticBeanstalkDescribePlatformVersionRequest): ElasticBeanstalkDescribePlatformVersion {
    return new ElasticBeanstalkDescribePlatformVersion(this, 'DescribePlatformVersion', this.__resources, input);
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

  public listAvailableSolutionStacks(): ElasticBeanstalkListAvailableSolutionStacks {
    return new ElasticBeanstalkListAvailableSolutionStacks(this, 'ListAvailableSolutionStacks', this.__resources);
  }

  public listPlatformBranches(input: shapes.ElasticBeanstalkListPlatformBranchesRequest): ElasticBeanstalkListPlatformBranches {
    return new ElasticBeanstalkListPlatformBranches(this, 'ListPlatformBranches', this.__resources, input);
  }

  public listPlatformVersions(input: shapes.ElasticBeanstalkListPlatformVersionsRequest): ElasticBeanstalkListPlatformVersions {
    return new ElasticBeanstalkListPlatformVersions(this, 'ListPlatformVersions', this.__resources, input);
  }

  public listTagsForResource(input: shapes.ElasticBeanstalkListTagsForResourceMessage): ElasticBeanstalkListTagsForResource {
    return new ElasticBeanstalkListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

  public retrieveEnvironmentInfo(input: shapes.ElasticBeanstalkRetrieveEnvironmentInfoMessage): ElasticBeanstalkRetrieveEnvironmentInfo {
    return new ElasticBeanstalkRetrieveEnvironmentInfo(this, 'RetrieveEnvironmentInfo', this.__resources, input);
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

  public terminateEnvironment(input: shapes.ElasticBeanstalkTerminateEnvironmentMessage): ElasticBeanstalkTerminateEnvironment {
    return new ElasticBeanstalkTerminateEnvironment(this, 'TerminateEnvironment', this.__resources, input);
  }

  public updateApplication(input: shapes.ElasticBeanstalkUpdateApplicationMessage): ElasticBeanstalkUpdateApplication {
    return new ElasticBeanstalkUpdateApplication(this, 'UpdateApplication', this.__resources, input);
  }

  public updateApplicationResourceLifecycle(input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage): ElasticBeanstalkUpdateApplicationResourceLifecycle {
    return new ElasticBeanstalkUpdateApplicationResourceLifecycle(this, 'UpdateApplicationResourceLifecycle', this.__resources, input);
  }

  public updateApplicationVersion(input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage): ElasticBeanstalkUpdateApplicationVersion {
    return new ElasticBeanstalkUpdateApplicationVersion(this, 'UpdateApplicationVersion', this.__resources, input);
  }

  public updateConfigurationTemplate(input: shapes.ElasticBeanstalkUpdateConfigurationTemplateMessage): ElasticBeanstalkUpdateConfigurationTemplate {
    return new ElasticBeanstalkUpdateConfigurationTemplate(this, 'UpdateConfigurationTemplate', this.__resources, input);
  }

  public updateEnvironment(input: shapes.ElasticBeanstalkUpdateEnvironmentMessage): ElasticBeanstalkUpdateEnvironment {
    return new ElasticBeanstalkUpdateEnvironment(this, 'UpdateEnvironment', this.__resources, input);
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

  public validateConfigurationSettings(input: shapes.ElasticBeanstalkValidateConfigurationSettingsMessage): ElasticBeanstalkValidateConfigurationSettings {
    return new ElasticBeanstalkValidateConfigurationSettings(this, 'ValidateConfigurationSettings', this.__resources, input);
  }

}

export class ElasticBeanstalkApplyEnvironmentManagedAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkApplyEnvironmentManagedActionRequest) {
    super(scope, id);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ApplyEnvironmentManagedAction.ActionId', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ApplyEnvironmentManagedAction.ActionDescription', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ApplyEnvironmentManagedAction.ActionType', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ApplyEnvironmentManagedAction.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ElasticBeanstalkCheckDnsAvailability extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCheckDnsAvailabilityMessage) {
    super(scope, id);
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
          CNAMEPrefix: this.input.cnamePrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CheckDNSAvailability.Available', props);
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
          CNAMEPrefix: this.input.cnamePrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CheckDNSAvailability.FullyQualifiedCNAME', props);
    return resource.getResponseField('FullyQualifiedCNAME') as unknown as string;
  }

}

export class ElasticBeanstalkComposeEnvironments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkComposeEnvironmentsMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          GroupName: this.input.groupName,
          VersionLabels: this.input.versionLabels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ComposeEnvironments.Environments', props);
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
          ApplicationName: this.input.applicationName,
          GroupName: this.input.groupName,
          VersionLabels: this.input.versionLabels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ComposeEnvironments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkCreateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationMessage) {
    super(scope, id);
  }

  public get application(): ElasticBeanstalkCreateApplicationApplication {
    return new ElasticBeanstalkCreateApplicationApplication(this, 'Application', this.__resources, this.input);
  }

}

export class ElasticBeanstalkCreateApplicationApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ApplicationArn', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.Description', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.DateCreated', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.DateUpdated', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.Versions', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ConfigurationTemplates', props);
    return resource.getResponseField('Application.ConfigurationTemplates') as unknown as string[];
  }

  public get resourceLifecycleConfig(): ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfig {
    return new ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfig(this, 'ResourceLifecycleConfig', this.__resources, this.input);
  }

}

export class ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ResourceLifecycleConfig.ServiceRole', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.ServiceRole') as unknown as string;
  }

  public get versionLifecycleConfig(): ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig {
    return new ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig(this, 'VersionLifecycleConfig', this.__resources, this.input);
  }

}

export class ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationMessage) {
    super(scope, id);
  }

  public get maxCountRule(): ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {
    return new ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(this, 'MaxCountRule', this.__resources, this.input);
  }

  public get maxAgeRule(): ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {
    return new ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(this, 'MaxAgeRule', this.__resources, this.input);
  }

}

export class ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig?.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig?.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkCreateApplicationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationVersionMessage) {
    super(scope, id);
  }

  public get applicationVersion(): ElasticBeanstalkCreateApplicationVersionApplicationVersion {
    return new ElasticBeanstalkCreateApplicationVersionApplicationVersion(this, 'ApplicationVersion', this.__resources, this.input);
  }

}

export class ElasticBeanstalkCreateApplicationVersionApplicationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationVersionMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.ApplicationVersionArn', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.Description', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.VersionLabel', props);
    return resource.getResponseField('ApplicationVersion.VersionLabel') as unknown as string;
  }

  public get sourceBuildInformation(): ElasticBeanstalkCreateApplicationVersionApplicationVersionSourceBuildInformation {
    return new ElasticBeanstalkCreateApplicationVersionApplicationVersionSourceBuildInformation(this, 'SourceBuildInformation', this.__resources, this.input);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.BuildArn', props);
    return resource.getResponseField('ApplicationVersion.BuildArn') as unknown as string;
  }

  public get sourceBundle(): ElasticBeanstalkCreateApplicationVersionApplicationVersionSourceBundle {
    return new ElasticBeanstalkCreateApplicationVersionApplicationVersionSourceBundle(this, 'SourceBundle', this.__resources, this.input);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.DateCreated', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.DateUpdated', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.Status', props);
    return resource.getResponseField('ApplicationVersion.Status') as unknown as string;
  }

}

export class ElasticBeanstalkCreateApplicationVersionApplicationVersionSourceBuildInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationVersionMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceType', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceRepository', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceLocation', props);
    return resource.getResponseField('ApplicationVersion.SourceBuildInformation.SourceLocation') as unknown as string;
  }

}

export class ElasticBeanstalkCreateApplicationVersionApplicationVersionSourceBundle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateApplicationVersionMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.SourceBundle.S3Bucket', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
          SourceBuildInformation: {
            SourceType: this.input.sourceBuildInformation?.sourceType,
            SourceRepository: this.input.sourceBuildInformation?.sourceRepository,
            SourceLocation: this.input.sourceBuildInformation?.sourceLocation,
          },
          SourceBundle: {
            S3Bucket: this.input.sourceBundle?.s3Bucket,
            S3Key: this.input.sourceBundle?.s3Key,
          },
          BuildConfiguration: {
            ArtifactName: this.input.buildConfiguration?.artifactName,
            CodeBuildServiceRole: this.input.buildConfiguration?.codeBuildServiceRole,
            ComputeType: this.input.buildConfiguration?.computeType,
            Image: this.input.buildConfiguration?.image,
            TimeoutInMinutes: this.input.buildConfiguration?.timeoutInMinutes,
          },
          AutoCreateApplication: this.input.autoCreateApplication,
          Process: this.input.process,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationVersion.ApplicationVersion.SourceBundle.S3Key', props);
    return resource.getResponseField('ApplicationVersion.SourceBundle.S3Key') as unknown as string;
  }

}

export class ElasticBeanstalkCreateConfigurationTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateConfigurationTemplateMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.SolutionStackName', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.PlatformArn', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.TemplateName', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.Description', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.EnvironmentName', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.DeploymentStatus', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.DateCreated', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.DateUpdated', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          SourceConfiguration: {
            ApplicationName: this.input.sourceConfiguration?.applicationName,
            TemplateName: this.input.sourceConfiguration?.templateName,
          },
          EnvironmentId: this.input.environmentId,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationTemplate.OptionSettings', props);
    return resource.getResponseField('OptionSettings') as unknown as shapes.ElasticBeanstalkConfigurationOptionSetting[];
  }

}

export class ElasticBeanstalkCreateEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateEnvironmentMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.EnvironmentName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.EnvironmentId', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.VersionLabel', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.SolutionStackName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.PlatformArn', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.TemplateName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Description', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.EndpointURL', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.CNAME', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.DateCreated', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.DateUpdated', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Status', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.AbortableOperationInProgress', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Health', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.HealthStatus', props);
    return resource.getResponseField('HealthStatus') as unknown as string;
  }

  public get resources(): ElasticBeanstalkCreateEnvironmentResources {
    return new ElasticBeanstalkCreateEnvironmentResources(this, 'Resources', this.__resources, this.input);
  }

  public get tier(): ElasticBeanstalkCreateEnvironmentTier {
    return new ElasticBeanstalkCreateEnvironmentTier(this, 'Tier', this.__resources, this.input);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.EnvironmentLinks', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.EnvironmentArn', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.OperationsRole', props);
    return resource.getResponseField('OperationsRole') as unknown as string;
  }

}

export class ElasticBeanstalkCreateEnvironmentResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateEnvironmentMessage) {
    super(scope, id);
  }

  public get loadBalancer(): ElasticBeanstalkCreateEnvironmentResourcesLoadBalancer {
    return new ElasticBeanstalkCreateEnvironmentResourcesLoadBalancer(this, 'LoadBalancer', this.__resources, this.input);
  }

}

export class ElasticBeanstalkCreateEnvironmentResourcesLoadBalancer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateEnvironmentMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Resources.LoadBalancer.LoadBalancerName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Resources.LoadBalancer.Domain', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Resources.LoadBalancer.Listeners', props);
    return resource.getResponseField('Resources.LoadBalancer.Listeners') as unknown as shapes.ElasticBeanstalkListener[];
  }

}

export class ElasticBeanstalkCreateEnvironmentTier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreateEnvironmentMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Tier.Name', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Tier.Type', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          CNAMEPrefix: this.input.cnamePrefix,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          Tags: this.input.tags,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
          OperationsRole: this.input.operationsRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Tier.Version', props);
    return resource.getResponseField('Tier.Version') as unknown as string;
  }

}

export class ElasticBeanstalkCreatePlatformVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreatePlatformVersionRequest) {
    super(scope, id);
  }

  public get platformSummary(): ElasticBeanstalkCreatePlatformVersionPlatformSummary {
    return new ElasticBeanstalkCreatePlatformVersionPlatformSummary(this, 'PlatformSummary', this.__resources, this.input);
  }

  public get builder(): ElasticBeanstalkCreatePlatformVersionBuilder {
    return new ElasticBeanstalkCreatePlatformVersionBuilder(this, 'Builder', this.__resources, this.input);
  }

}

export class ElasticBeanstalkCreatePlatformVersionPlatformSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreatePlatformVersionRequest) {
    super(scope, id);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.PlatformArn', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.PlatformOwner', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.PlatformStatus', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.PlatformCategory', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.OperatingSystemName', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.OperatingSystemVersion', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.SupportedTierList', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.SupportedAddonList', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.PlatformLifecycleState', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.PlatformVersion', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.PlatformBranchName', props);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.PlatformSummary.PlatformBranchLifecycleState', props);
    return resource.getResponseField('PlatformSummary.PlatformBranchLifecycleState') as unknown as string;
  }

}

export class ElasticBeanstalkCreatePlatformVersionBuilder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkCreatePlatformVersionRequest) {
    super(scope, id);
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
          PlatformName: this.input.platformName,
          PlatformVersion: this.input.platformVersion,
          PlatformDefinitionBundle: {
            S3Bucket: this.input.platformDefinitionBundle.s3Bucket,
            S3Key: this.input.platformDefinitionBundle.s3Key,
          },
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlatformVersion.Builder.ARN', props);
    return resource.getResponseField('Builder.ARN') as unknown as string;
  }

}

export class ElasticBeanstalkCreateStorageLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'CreateStorageLocation.S3Bucket', props);
    return resource.getResponseField('S3Bucket') as unknown as string;
  }

}

export class ElasticBeanstalkDeletePlatformVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDeletePlatformVersionRequest) {
    super(scope, id);
  }

  public get platformSummary(): ElasticBeanstalkDeletePlatformVersionPlatformSummary {
    return new ElasticBeanstalkDeletePlatformVersionPlatformSummary(this, 'PlatformSummary', this.__resources, this.input);
  }

}

export class ElasticBeanstalkDeletePlatformVersionPlatformSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDeletePlatformVersionRequest) {
    super(scope, id);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.PlatformArn', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.PlatformOwner', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.PlatformStatus', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.PlatformCategory', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.OperatingSystemName', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.OperatingSystemVersion', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.SupportedTierList', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.SupportedAddonList', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.PlatformLifecycleState', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.PlatformVersion', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.PlatformBranchName', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePlatformVersion.PlatformSummary.PlatformBranchLifecycleState', props);
    return resource.getResponseField('PlatformSummary.PlatformBranchLifecycleState') as unknown as string;
  }

}

export class ElasticBeanstalkDescribeAccountAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get resourceQuotas(): ElasticBeanstalkDescribeAccountAttributesResourceQuotas {
    return new ElasticBeanstalkDescribeAccountAttributesResourceQuotas(this, 'ResourceQuotas', this.__resources);
  }

}

export class ElasticBeanstalkDescribeAccountAttributesResourceQuotas extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get applicationQuota(): ElasticBeanstalkDescribeAccountAttributesResourceQuotasApplicationQuota {
    return new ElasticBeanstalkDescribeAccountAttributesResourceQuotasApplicationQuota(this, 'ApplicationQuota', this.__resources);
  }

  public get applicationVersionQuota(): ElasticBeanstalkDescribeAccountAttributesResourceQuotasApplicationVersionQuota {
    return new ElasticBeanstalkDescribeAccountAttributesResourceQuotasApplicationVersionQuota(this, 'ApplicationVersionQuota', this.__resources);
  }

  public get environmentQuota(): ElasticBeanstalkDescribeAccountAttributesResourceQuotasEnvironmentQuota {
    return new ElasticBeanstalkDescribeAccountAttributesResourceQuotasEnvironmentQuota(this, 'EnvironmentQuota', this.__resources);
  }

  public get configurationTemplateQuota(): ElasticBeanstalkDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota {
    return new ElasticBeanstalkDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota(this, 'ConfigurationTemplateQuota', this.__resources);
  }

  public get customPlatformQuota(): ElasticBeanstalkDescribeAccountAttributesResourceQuotasCustomPlatformQuota {
    return new ElasticBeanstalkDescribeAccountAttributesResourceQuotasCustomPlatformQuota(this, 'CustomPlatformQuota', this.__resources);
  }

}

export class ElasticBeanstalkDescribeAccountAttributesResourceQuotasApplicationQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAttributes.ResourceQuotas.ApplicationQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.ApplicationQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkDescribeAccountAttributesResourceQuotasApplicationVersionQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAttributes.ResourceQuotas.ApplicationVersionQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.ApplicationVersionQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkDescribeAccountAttributesResourceQuotasEnvironmentQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAttributes.ResourceQuotas.EnvironmentQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.EnvironmentQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAttributes.ResourceQuotas.ConfigurationTemplateQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.ConfigurationTemplateQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkDescribeAccountAttributesResourceQuotasCustomPlatformQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAttributes.ResourceQuotas.CustomPlatformQuota.Maximum', props);
    return resource.getResponseField('ResourceQuotas.CustomPlatformQuota.Maximum') as unknown as number;
  }

}

export class ElasticBeanstalkDescribeApplicationVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeApplicationVersionsMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          VersionLabels: this.input.versionLabels,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplicationVersions.ApplicationVersions', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabels: this.input.versionLabels,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplicationVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkDescribeApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeApplicationsMessage) {
    super(scope, id);
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
          ApplicationNames: this.input.applicationNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplications.Applications', props);
    return resource.getResponseField('Applications') as unknown as shapes.ElasticBeanstalkApplicationDescription[];
  }

}

export class ElasticBeanstalkDescribeConfigurationOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeConfigurationOptionsMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          EnvironmentName: this.input.environmentName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          Options: this.input.options,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationOptions.SolutionStackName', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          EnvironmentName: this.input.environmentName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          Options: this.input.options,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationOptions.PlatformArn', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          EnvironmentName: this.input.environmentName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          Options: this.input.options,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationOptions.Options', props);
    return resource.getResponseField('Options') as unknown as shapes.ElasticBeanstalkConfigurationOptionDescription[];
  }

}

export class ElasticBeanstalkDescribeConfigurationSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeConfigurationSettingsMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          EnvironmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationSettings.ConfigurationSettings', props);
    return resource.getResponseField('ConfigurationSettings') as unknown as shapes.ElasticBeanstalkConfigurationSettingsDescription[];
  }

}

export class ElasticBeanstalkDescribeEnvironmentHealth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
    super(scope, id);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.EnvironmentName', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.HealthStatus', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.Status', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.Color', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.Causes', props);
    return resource.getResponseField('Causes') as unknown as string[];
  }

  public get applicationMetrics(): ElasticBeanstalkDescribeEnvironmentHealthApplicationMetrics {
    return new ElasticBeanstalkDescribeEnvironmentHealthApplicationMetrics(this, 'ApplicationMetrics', this.__resources, this.input);
  }

  public get instancesHealth(): ElasticBeanstalkDescribeEnvironmentHealthInstancesHealth {
    return new ElasticBeanstalkDescribeEnvironmentHealthInstancesHealth(this, 'InstancesHealth', this.__resources, this.input);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.RefreshedAt', props);
    return resource.getResponseField('RefreshedAt') as unknown as string;
  }

}

export class ElasticBeanstalkDescribeEnvironmentHealthApplicationMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
    super(scope, id);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.Duration', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.RequestCount', props);
    return resource.getResponseField('ApplicationMetrics.RequestCount') as unknown as number;
  }

  public get statusCodes(): ElasticBeanstalkDescribeEnvironmentHealthApplicationMetricsStatusCodes {
    return new ElasticBeanstalkDescribeEnvironmentHealthApplicationMetricsStatusCodes(this, 'StatusCodes', this.__resources, this.input);
  }

  public get latency(): ElasticBeanstalkDescribeEnvironmentHealthApplicationMetricsLatency {
    return new ElasticBeanstalkDescribeEnvironmentHealthApplicationMetricsLatency(this, 'Latency', this.__resources, this.input);
  }

}

export class ElasticBeanstalkDescribeEnvironmentHealthApplicationMetricsStatusCodes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
    super(scope, id);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status2xx', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status3xx', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status4xx', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.StatusCodes.Status5xx', props);
    return resource.getResponseField('ApplicationMetrics.StatusCodes.Status5xx') as unknown as number;
  }

}

export class ElasticBeanstalkDescribeEnvironmentHealthApplicationMetricsLatency extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
    super(scope, id);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P999', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P99', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P95', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P90', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P85', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P75', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P50', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.ApplicationMetrics.Latency.P10', props);
    return resource.getResponseField('ApplicationMetrics.Latency.P10') as unknown as number;
  }

}

export class ElasticBeanstalkDescribeEnvironmentHealthInstancesHealth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentHealthRequest) {
    super(scope, id);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.InstancesHealth.NoData', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.InstancesHealth.Unknown', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.InstancesHealth.Pending', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.InstancesHealth.Ok', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.InstancesHealth.Info', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.InstancesHealth.Warning', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.InstancesHealth.Degraded', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentHealth.InstancesHealth.Severe', props);
    return resource.getResponseField('InstancesHealth.Severe') as unknown as number;
  }

}

export class ElasticBeanstalkDescribeEnvironmentManagedActionHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest) {
    super(scope, id);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          NextToken: this.input.nextToken,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentManagedActionHistory.ManagedActionHistoryItems', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          NextToken: this.input.nextToken,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentManagedActionHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkDescribeEnvironmentManagedActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest) {
    super(scope, id);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentManagedActions.ManagedActions', props);
    return resource.getResponseField('ManagedActions') as unknown as shapes.ElasticBeanstalkManagedAction[];
  }

}

export class ElasticBeanstalkDescribeEnvironmentResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentResourcesMessage) {
    super(scope, id);
  }

  public get environmentResources(): ElasticBeanstalkDescribeEnvironmentResourcesEnvironmentResources {
    return new ElasticBeanstalkDescribeEnvironmentResourcesEnvironmentResources(this, 'EnvironmentResources', this.__resources, this.input);
  }

}

export class ElasticBeanstalkDescribeEnvironmentResourcesEnvironmentResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentResourcesMessage) {
    super(scope, id);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentResources.EnvironmentResources.EnvironmentName', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentResources.EnvironmentResources.AutoScalingGroups', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentResources.EnvironmentResources.Instances', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentResources.EnvironmentResources.LaunchConfigurations', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentResources.EnvironmentResources.LaunchTemplates', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentResources.EnvironmentResources.LoadBalancers', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentResources.EnvironmentResources.Triggers', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentResources.EnvironmentResources.Queues', props);
    return resource.getResponseField('EnvironmentResources.Queues') as unknown as shapes.ElasticBeanstalkQueue[];
  }

}

export class ElasticBeanstalkDescribeEnvironments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEnvironmentsMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          EnvironmentIds: this.input.environmentIds,
          EnvironmentNames: this.input.environmentNames,
          IncludeDeleted: this.input.includeDeleted,
          IncludedDeletedBackTo: this.input.includedDeletedBackTo,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironments.Environments', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          EnvironmentIds: this.input.environmentIds,
          EnvironmentNames: this.input.environmentNames,
          IncludeDeleted: this.input.includeDeleted,
          IncludedDeletedBackTo: this.input.includedDeletedBackTo,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkDescribeEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeEventsMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          PlatformArn: this.input.platformArn,
          RequestId: this.input.requestId,
          Severity: this.input.severity,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.Events', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          PlatformArn: this.input.platformArn,
          RequestId: this.input.requestId,
          Severity: this.input.severity,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkDescribeInstancesHealth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribeInstancesHealthRequest) {
    super(scope, id);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstancesHealth.InstanceHealthList', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstancesHealth.RefreshedAt', props);
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
          EnvironmentName: this.input.environmentName,
          EnvironmentId: this.input.environmentId,
          AttributeNames: this.input.attributeNames,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstancesHealth.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkDescribePlatformVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribePlatformVersionRequest) {
    super(scope, id);
  }

  public get platformDescription(): ElasticBeanstalkDescribePlatformVersionPlatformDescription {
    return new ElasticBeanstalkDescribePlatformVersionPlatformDescription(this, 'PlatformDescription', this.__resources, this.input);
  }

}

export class ElasticBeanstalkDescribePlatformVersionPlatformDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkDescribePlatformVersionRequest) {
    super(scope, id);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.PlatformArn', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.PlatformOwner', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.PlatformName', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.PlatformVersion', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.SolutionStackName', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.PlatformStatus', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.DateCreated', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.DateUpdated', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.PlatformCategory', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.Description', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.Maintainer', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.OperatingSystemName', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.OperatingSystemVersion', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.ProgrammingLanguages', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.Frameworks', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.CustomAmiList', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.SupportedTierList', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.SupportedAddonList', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.PlatformLifecycleState', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.PlatformBranchName', props);
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
          PlatformArn: this.input.platformArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlatformVersion.PlatformDescription.PlatformBranchLifecycleState', props);
    return resource.getResponseField('PlatformDescription.PlatformBranchLifecycleState') as unknown as string;
  }

}

export class ElasticBeanstalkListAvailableSolutionStacks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'ListAvailableSolutionStacks.SolutionStacks', props);
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
    const resource = new cr.AwsCustomResource(this, 'ListAvailableSolutionStacks.SolutionStackDetails', props);
    return resource.getResponseField('SolutionStackDetails') as unknown as shapes.ElasticBeanstalkSolutionStackDescription[];
  }

}

export class ElasticBeanstalkListPlatformBranches extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkListPlatformBranchesRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlatformBranches.PlatformBranchSummaryList', props);
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
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlatformBranches.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkListPlatformVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkListPlatformVersionsRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlatformVersions.PlatformSummaryList', props);
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
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlatformVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ElasticBeanstalkListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkListTagsForResourceMessage) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.ResourceArn', props);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.ResourceTags', props);
    return resource.getResponseField('ResourceTags') as unknown as shapes.ElasticBeanstalkTag[];
  }

}

export class ElasticBeanstalkRetrieveEnvironmentInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkRetrieveEnvironmentInfoMessage) {
    super(scope, id);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          InfoType: this.input.infoType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RetrieveEnvironmentInfo.EnvironmentInfo', props);
    return resource.getResponseField('EnvironmentInfo') as unknown as shapes.ElasticBeanstalkEnvironmentInfoDescription[];
  }

}

export class ElasticBeanstalkTerminateEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkTerminateEnvironmentMessage) {
    super(scope, id);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.EnvironmentName', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.EnvironmentId', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.ApplicationName', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.VersionLabel', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.SolutionStackName', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.PlatformArn', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.TemplateName', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.Description', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.EndpointURL', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.CNAME', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.DateCreated', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.DateUpdated', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.Status', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.AbortableOperationInProgress', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.Health', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.HealthStatus', props);
    return resource.getResponseField('HealthStatus') as unknown as string;
  }

  public get resources(): ElasticBeanstalkTerminateEnvironmentResources {
    return new ElasticBeanstalkTerminateEnvironmentResources(this, 'Resources', this.__resources, this.input);
  }

  public get tier(): ElasticBeanstalkTerminateEnvironmentTier {
    return new ElasticBeanstalkTerminateEnvironmentTier(this, 'Tier', this.__resources, this.input);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.EnvironmentLinks', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.EnvironmentArn', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.OperationsRole', props);
    return resource.getResponseField('OperationsRole') as unknown as string;
  }

}

export class ElasticBeanstalkTerminateEnvironmentResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkTerminateEnvironmentMessage) {
    super(scope, id);
  }

  public get loadBalancer(): ElasticBeanstalkTerminateEnvironmentResourcesLoadBalancer {
    return new ElasticBeanstalkTerminateEnvironmentResourcesLoadBalancer(this, 'LoadBalancer', this.__resources, this.input);
  }

}

export class ElasticBeanstalkTerminateEnvironmentResourcesLoadBalancer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkTerminateEnvironmentMessage) {
    super(scope, id);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.Resources.LoadBalancer.LoadBalancerName', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.Resources.LoadBalancer.Domain', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.Resources.LoadBalancer.Listeners', props);
    return resource.getResponseField('Resources.LoadBalancer.Listeners') as unknown as shapes.ElasticBeanstalkListener[];
  }

}

export class ElasticBeanstalkTerminateEnvironmentTier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkTerminateEnvironmentMessage) {
    super(scope, id);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.Tier.Name', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.Tier.Type', props);
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
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          TerminateResources: this.input.terminateResources,
          ForceTerminate: this.input.forceTerminate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateEnvironment.Tier.Version', props);
    return resource.getResponseField('Tier.Version') as unknown as string;
  }

}

export class ElasticBeanstalkUpdateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
    super(scope, id);
  }

  public get application(): ElasticBeanstalkUpdateApplicationApplication {
    return new ElasticBeanstalkUpdateApplicationApplication(this, 'Application', this.__resources, this.input);
  }

}

export class ElasticBeanstalkUpdateApplicationApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ApplicationArn', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.Description', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.DateCreated', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.DateUpdated', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.Versions', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ConfigurationTemplates', props);
    return resource.getResponseField('Application.ConfigurationTemplates') as unknown as string[];
  }

  public get resourceLifecycleConfig(): ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfig {
    return new ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfig(this, 'ResourceLifecycleConfig', this.__resources, this.input);
  }

}

export class ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ResourceLifecycleConfig.ServiceRole', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.ServiceRole') as unknown as string;
  }

  public get versionLifecycleConfig(): ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig {
    return new ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig(this, 'VersionLifecycleConfig', this.__resources, this.input);
  }

}

export class ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
    super(scope, id);
  }

  public get maxCountRule(): ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {
    return new ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(this, 'MaxCountRule', this.__resources, this.input);
  }

  public get maxAgeRule(): ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {
    return new ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(this, 'MaxAgeRule', this.__resources, this.input);
  }

}

export class ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays', props);
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
          ApplicationName: this.input.applicationName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3', props);
    return resource.getResponseField('Application.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkUpdateApplicationResourceLifecycle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationResourceLifecycle.ApplicationName', props);
    return resource.getResponseField('ApplicationName') as unknown as string;
  }

  public get resourceLifecycleConfig(): ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfig {
    return new ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfig(this, 'ResourceLifecycleConfig', this.__resources, this.input);
  }

}

export class ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.ServiceRole', props);
    return resource.getResponseField('ResourceLifecycleConfig.ServiceRole') as unknown as string;
  }

  public get versionLifecycleConfig(): ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig {
    return new ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig(this, 'VersionLifecycleConfig', this.__resources, this.input);
  }

}

export class ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
    super(scope, id);
  }

  public get maxCountRule(): ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {
    return new ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(this, 'MaxCountRule', this.__resources, this.input);
  }

  public get maxAgeRule(): ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {
    return new ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(this, 'MaxAgeRule', this.__resources, this.input);
  }

}

export class ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.Enabled', props);
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
          ApplicationName: this.input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.MaxCount', props);
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
          ApplicationName: this.input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3', props);
    return resource.getResponseField('ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.Enabled', props);
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
          ApplicationName: this.input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.MaxAgeInDays', props);
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
          ApplicationName: this.input.applicationName,
          ResourceLifecycleConfig: {
            ServiceRole: this.input.resourceLifecycleConfig.serviceRole,
            VersionLifecycleConfig: {
              MaxCountRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.enabled,
                MaxCount: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.maxCount,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxCountRule?.deleteSourceFromS3,
              },
              MaxAgeRule: {
                Enabled: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.enabled,
                MaxAgeInDays: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.maxAgeInDays,
                DeleteSourceFromS3: this.input.resourceLifecycleConfig.versionLifecycleConfig?.maxAgeRule?.deleteSourceFromS3,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationResourceLifecycle.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3', props);
    return resource.getResponseField('ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule.DeleteSourceFromS3') as unknown as boolean;
  }

}

export class ElasticBeanstalkUpdateApplicationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage) {
    super(scope, id);
  }

  public get applicationVersion(): ElasticBeanstalkUpdateApplicationVersionApplicationVersion {
    return new ElasticBeanstalkUpdateApplicationVersionApplicationVersion(this, 'ApplicationVersion', this.__resources, this.input);
  }

}

export class ElasticBeanstalkUpdateApplicationVersionApplicationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.ApplicationVersionArn', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.Description', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.VersionLabel', props);
    return resource.getResponseField('ApplicationVersion.VersionLabel') as unknown as string;
  }

  public get sourceBuildInformation(): ElasticBeanstalkUpdateApplicationVersionApplicationVersionSourceBuildInformation {
    return new ElasticBeanstalkUpdateApplicationVersionApplicationVersionSourceBuildInformation(this, 'SourceBuildInformation', this.__resources, this.input);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.BuildArn', props);
    return resource.getResponseField('ApplicationVersion.BuildArn') as unknown as string;
  }

  public get sourceBundle(): ElasticBeanstalkUpdateApplicationVersionApplicationVersionSourceBundle {
    return new ElasticBeanstalkUpdateApplicationVersionApplicationVersionSourceBundle(this, 'SourceBundle', this.__resources, this.input);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.DateCreated', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.DateUpdated', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.Status', props);
    return resource.getResponseField('ApplicationVersion.Status') as unknown as string;
  }

}

export class ElasticBeanstalkUpdateApplicationVersionApplicationVersionSourceBuildInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceType', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceRepository', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.SourceBuildInformation.SourceLocation', props);
    return resource.getResponseField('ApplicationVersion.SourceBuildInformation.SourceLocation') as unknown as string;
  }

}

export class ElasticBeanstalkUpdateApplicationVersionApplicationVersionSourceBundle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateApplicationVersionMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.SourceBundle.S3Bucket', props);
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
          ApplicationName: this.input.applicationName,
          VersionLabel: this.input.versionLabel,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplicationVersion.ApplicationVersion.SourceBundle.S3Key', props);
    return resource.getResponseField('ApplicationVersion.SourceBundle.S3Key') as unknown as string;
  }

}

export class ElasticBeanstalkUpdateConfigurationTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateConfigurationTemplateMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.SolutionStackName', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.PlatformArn', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.TemplateName', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.Description', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.EnvironmentName', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.DeploymentStatus', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.DateCreated', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.DateUpdated', props);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          Description: this.input.description,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationTemplate.OptionSettings', props);
    return resource.getResponseField('OptionSettings') as unknown as shapes.ElasticBeanstalkConfigurationOptionSetting[];
  }

}

export class ElasticBeanstalkUpdateEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateEnvironmentMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.EnvironmentName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.EnvironmentId', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.VersionLabel', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.SolutionStackName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.PlatformArn', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.TemplateName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Description', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.EndpointURL', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.CNAME', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.DateCreated', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.DateUpdated', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Status', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.AbortableOperationInProgress', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Health', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.HealthStatus', props);
    return resource.getResponseField('HealthStatus') as unknown as string;
  }

  public get resources(): ElasticBeanstalkUpdateEnvironmentResources {
    return new ElasticBeanstalkUpdateEnvironmentResources(this, 'Resources', this.__resources, this.input);
  }

  public get tier(): ElasticBeanstalkUpdateEnvironmentTier {
    return new ElasticBeanstalkUpdateEnvironmentTier(this, 'Tier', this.__resources, this.input);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.EnvironmentLinks', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.EnvironmentArn', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.OperationsRole', props);
    return resource.getResponseField('OperationsRole') as unknown as string;
  }

}

export class ElasticBeanstalkUpdateEnvironmentResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateEnvironmentMessage) {
    super(scope, id);
  }

  public get loadBalancer(): ElasticBeanstalkUpdateEnvironmentResourcesLoadBalancer {
    return new ElasticBeanstalkUpdateEnvironmentResourcesLoadBalancer(this, 'LoadBalancer', this.__resources, this.input);
  }

}

export class ElasticBeanstalkUpdateEnvironmentResourcesLoadBalancer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateEnvironmentMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Resources.LoadBalancer.LoadBalancerName', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Resources.LoadBalancer.Domain', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Resources.LoadBalancer.Listeners', props);
    return resource.getResponseField('Resources.LoadBalancer.Listeners') as unknown as shapes.ElasticBeanstalkListener[];
  }

}

export class ElasticBeanstalkUpdateEnvironmentTier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkUpdateEnvironmentMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Tier.Name', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Tier.Type', props);
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
          ApplicationName: this.input.applicationName,
          EnvironmentId: this.input.environmentId,
          EnvironmentName: this.input.environmentName,
          GroupName: this.input.groupName,
          Description: this.input.description,
          Tier: {
            Name: this.input.tier?.name,
            Type: this.input.tier?.type,
            Version: this.input.tier?.version,
          },
          VersionLabel: this.input.versionLabel,
          TemplateName: this.input.templateName,
          SolutionStackName: this.input.solutionStackName,
          PlatformArn: this.input.platformArn,
          OptionSettings: this.input.optionSettings,
          OptionsToRemove: this.input.optionsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Tier.Version', props);
    return resource.getResponseField('Tier.Version') as unknown as string;
  }

}

export class ElasticBeanstalkValidateConfigurationSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticBeanstalkValidateConfigurationSettingsMessage) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          TemplateName: this.input.templateName,
          EnvironmentName: this.input.environmentName,
          OptionSettings: this.input.optionSettings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateConfigurationSettings.Messages', props);
    return resource.getResponseField('Messages') as unknown as shapes.ElasticBeanstalkValidationMessage[];
  }

}

