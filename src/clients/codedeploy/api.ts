import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeDeployClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToOnPremisesInstances(input: shapes.CodeDeployAddTagsToOnPremisesInstancesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToOnPremisesInstances',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.AddTagsToOnPremisesInstances'),
        parameters: {
          tags: input.tags,
          instanceNames: input.instanceNames,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddTagsToOnPremisesInstances', props);
  }

  public batchGetApplicationRevisions(input: shapes.CodeDeployBatchGetApplicationRevisionsInput): CodeDeployResponsesBatchGetApplicationRevisions {
    return new CodeDeployResponsesBatchGetApplicationRevisions(this, this.__resources, input);
  }

  public batchGetApplications(input: shapes.CodeDeployBatchGetApplicationsInput): CodeDeployResponsesBatchGetApplications {
    return new CodeDeployResponsesBatchGetApplications(this, this.__resources, input);
  }

  public batchGetDeploymentGroups(input: shapes.CodeDeployBatchGetDeploymentGroupsInput): CodeDeployResponsesBatchGetDeploymentGroups {
    return new CodeDeployResponsesBatchGetDeploymentGroups(this, this.__resources, input);
  }

  public batchGetDeploymentInstances(input: shapes.CodeDeployBatchGetDeploymentInstancesInput): CodeDeployResponsesBatchGetDeploymentInstances {
    return new CodeDeployResponsesBatchGetDeploymentInstances(this, this.__resources, input);
  }

  public batchGetDeploymentTargets(input: shapes.CodeDeployBatchGetDeploymentTargetsInput): CodeDeployResponsesBatchGetDeploymentTargets {
    return new CodeDeployResponsesBatchGetDeploymentTargets(this, this.__resources, input);
  }

  public batchGetDeployments(input: shapes.CodeDeployBatchGetDeploymentsInput): CodeDeployResponsesBatchGetDeployments {
    return new CodeDeployResponsesBatchGetDeployments(this, this.__resources, input);
  }

  public batchGetOnPremisesInstances(input: shapes.CodeDeployBatchGetOnPremisesInstancesInput): CodeDeployResponsesBatchGetOnPremisesInstances {
    return new CodeDeployResponsesBatchGetOnPremisesInstances(this, this.__resources, input);
  }

  public continueDeployment(input: shapes.CodeDeployContinueDeploymentInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'continueDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ContinueDeployment'),
        parameters: {
          deploymentId: input.deploymentId,
          deploymentWaitType: input.deploymentWaitType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ContinueDeployment', props);
  }

  public createApplication(input: shapes.CodeDeployCreateApplicationInput): CodeDeployResponsesCreateApplication {
    return new CodeDeployResponsesCreateApplication(this, this.__resources, input);
  }

  public createDeployment(input: shapes.CodeDeployCreateDeploymentInput): CodeDeployResponsesCreateDeployment {
    return new CodeDeployResponsesCreateDeployment(this, this.__resources, input);
  }

  public createDeploymentConfig(input: shapes.CodeDeployCreateDeploymentConfigInput): CodeDeployResponsesCreateDeploymentConfig {
    return new CodeDeployResponsesCreateDeploymentConfig(this, this.__resources, input);
  }

  public createDeploymentGroup(input: shapes.CodeDeployCreateDeploymentGroupInput): CodeDeployResponsesCreateDeploymentGroup {
    return new CodeDeployResponsesCreateDeploymentGroup(this, this.__resources, input);
  }

  public deleteApplication(input: shapes.CodeDeployDeleteApplicationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.DeleteApplication'),
        parameters: {
          applicationName: input.applicationName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplication', props);
  }

  public deleteDeploymentConfig(input: shapes.CodeDeployDeleteDeploymentConfigInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.DeleteDeploymentConfig'),
        parameters: {
          deploymentConfigName: input.deploymentConfigName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDeploymentConfig', props);
  }

  public deleteDeploymentGroup(input: shapes.CodeDeployDeleteDeploymentGroupInput): CodeDeployResponsesDeleteDeploymentGroup {
    return new CodeDeployResponsesDeleteDeploymentGroup(this, this.__resources, input);
  }

  public deleteGitHubAccountToken(input: shapes.CodeDeployDeleteGitHubAccountTokenInput): CodeDeployResponsesDeleteGitHubAccountToken {
    return new CodeDeployResponsesDeleteGitHubAccountToken(this, this.__resources, input);
  }

  public deleteResourcesByExternalId(input: shapes.CodeDeployDeleteResourcesByExternalIdInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourcesByExternalId',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.DeleteResourcesByExternalId'),
        parameters: {
          externalId: input.externalId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourcesByExternalId', props);
  }

  public deregisterOnPremisesInstance(input: shapes.CodeDeployDeregisterOnPremisesInstanceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterOnPremisesInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.DeregisterOnPremisesInstance'),
        parameters: {
          instanceName: input.instanceName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterOnPremisesInstance', props);
  }

  public fetchApplication(input: shapes.CodeDeployGetApplicationInput): CodeDeployResponsesFetchApplication {
    return new CodeDeployResponsesFetchApplication(this, this.__resources, input);
  }

  public fetchApplicationRevision(input: shapes.CodeDeployGetApplicationRevisionInput): CodeDeployResponsesFetchApplicationRevision {
    return new CodeDeployResponsesFetchApplicationRevision(this, this.__resources, input);
  }

  public fetchDeployment(input: shapes.CodeDeployGetDeploymentInput): CodeDeployResponsesFetchDeployment {
    return new CodeDeployResponsesFetchDeployment(this, this.__resources, input);
  }

  public fetchDeploymentConfig(input: shapes.CodeDeployGetDeploymentConfigInput): CodeDeployResponsesFetchDeploymentConfig {
    return new CodeDeployResponsesFetchDeploymentConfig(this, this.__resources, input);
  }

  public fetchDeploymentGroup(input: shapes.CodeDeployGetDeploymentGroupInput): CodeDeployResponsesFetchDeploymentGroup {
    return new CodeDeployResponsesFetchDeploymentGroup(this, this.__resources, input);
  }

  public fetchDeploymentInstance(input: shapes.CodeDeployGetDeploymentInstanceInput): CodeDeployResponsesFetchDeploymentInstance {
    return new CodeDeployResponsesFetchDeploymentInstance(this, this.__resources, input);
  }

  public fetchDeploymentTarget(input: shapes.CodeDeployGetDeploymentTargetInput): CodeDeployResponsesFetchDeploymentTarget {
    return new CodeDeployResponsesFetchDeploymentTarget(this, this.__resources, input);
  }

  public fetchOnPremisesInstance(input: shapes.CodeDeployGetOnPremisesInstanceInput): CodeDeployResponsesFetchOnPremisesInstance {
    return new CodeDeployResponsesFetchOnPremisesInstance(this, this.__resources, input);
  }

  public listApplicationRevisions(input: shapes.CodeDeployListApplicationRevisionsInput): CodeDeployResponsesListApplicationRevisions {
    return new CodeDeployResponsesListApplicationRevisions(this, this.__resources, input);
  }

  public listApplications(input: shapes.CodeDeployListApplicationsInput): CodeDeployResponsesListApplications {
    return new CodeDeployResponsesListApplications(this, this.__resources, input);
  }

  public listDeploymentConfigs(input: shapes.CodeDeployListDeploymentConfigsInput): CodeDeployResponsesListDeploymentConfigs {
    return new CodeDeployResponsesListDeploymentConfigs(this, this.__resources, input);
  }

  public listDeploymentGroups(input: shapes.CodeDeployListDeploymentGroupsInput): CodeDeployResponsesListDeploymentGroups {
    return new CodeDeployResponsesListDeploymentGroups(this, this.__resources, input);
  }

  public listDeploymentInstances(input: shapes.CodeDeployListDeploymentInstancesInput): CodeDeployResponsesListDeploymentInstances {
    return new CodeDeployResponsesListDeploymentInstances(this, this.__resources, input);
  }

  public listDeploymentTargets(input: shapes.CodeDeployListDeploymentTargetsInput): CodeDeployResponsesListDeploymentTargets {
    return new CodeDeployResponsesListDeploymentTargets(this, this.__resources, input);
  }

  public listDeployments(input: shapes.CodeDeployListDeploymentsInput): CodeDeployResponsesListDeployments {
    return new CodeDeployResponsesListDeployments(this, this.__resources, input);
  }

  public listGitHubAccountTokenNames(input: shapes.CodeDeployListGitHubAccountTokenNamesInput): CodeDeployResponsesListGitHubAccountTokenNames {
    return new CodeDeployResponsesListGitHubAccountTokenNames(this, this.__resources, input);
  }

  public listOnPremisesInstances(input: shapes.CodeDeployListOnPremisesInstancesInput): CodeDeployResponsesListOnPremisesInstances {
    return new CodeDeployResponsesListOnPremisesInstances(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeDeployListTagsForResourceInput): CodeDeployResponsesListTagsForResource {
    return new CodeDeployResponsesListTagsForResource(this, this.__resources, input);
  }

  public putLifecycleEventHookExecutionStatus(input: shapes.CodeDeployPutLifecycleEventHookExecutionStatusInput): CodeDeployResponsesPutLifecycleEventHookExecutionStatus {
    return new CodeDeployResponsesPutLifecycleEventHookExecutionStatus(this, this.__resources, input);
  }

  public registerApplicationRevision(input: shapes.CodeDeployRegisterApplicationRevisionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.RegisterApplicationRevision'),
        parameters: {
          applicationName: input.applicationName,
          description: input.description,
          revision: {
            revisionType: input.revision.revisionType,
            s3Location: {
              bucket: input.revision.s3Location?.bucket,
              key: input.revision.s3Location?.key,
              bundleType: input.revision.s3Location?.bundleType,
              version: input.revision.s3Location?.version,
              eTag: input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: input.revision.gitHubLocation?.repository,
              commitId: input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: input.revision.string?.content,
              sha256: input.revision.string?.sha256,
            },
            appSpecContent: {
              content: input.revision.appSpecContent?.content,
              sha256: input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterApplicationRevision', props);
  }

  public registerOnPremisesInstance(input: shapes.CodeDeployRegisterOnPremisesInstanceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerOnPremisesInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.RegisterOnPremisesInstance'),
        parameters: {
          instanceName: input.instanceName,
          iamSessionArn: input.iamSessionArn,
          iamUserArn: input.iamUserArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterOnPremisesInstance', props);
  }

  public removeTagsFromOnPremisesInstances(input: shapes.CodeDeployRemoveTagsFromOnPremisesInstancesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromOnPremisesInstances',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.RemoveTagsFromOnPremisesInstances'),
        parameters: {
          tags: input.tags,
          instanceNames: input.instanceNames,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveTagsFromOnPremisesInstances', props);
  }

  public skipWaitTimeForInstanceTermination(input: shapes.CodeDeploySkipWaitTimeForInstanceTerminationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'skipWaitTimeForInstanceTermination',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.SkipWaitTimeForInstanceTermination'),
        parameters: {
          deploymentId: input.deploymentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SkipWaitTimeForInstanceTermination', props);
  }

  public stopDeployment(input: shapes.CodeDeployStopDeploymentInput): CodeDeployResponsesStopDeployment {
    return new CodeDeployResponsesStopDeployment(this, this.__resources, input);
  }

  public tagResource(input: shapes.CodeDeployTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.CodeDeployUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApplication(input: shapes.CodeDeployUpdateApplicationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.UpdateApplication'),
        parameters: {
          applicationName: input.applicationName,
          newApplicationName: input.newApplicationName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateApplication', props);
  }

  public updateDeploymentGroup(input: shapes.CodeDeployUpdateDeploymentGroupInput): CodeDeployResponsesUpdateDeploymentGroup {
    return new CodeDeployResponsesUpdateDeploymentGroup(this, this.__resources, input);
  }

}

export class CodeDeployResponsesBatchGetApplicationRevisions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployBatchGetApplicationRevisionsInput) {
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetApplicationRevisions',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetApplicationRevisions.applicationName'),
        outputPath: 'applicationName',
        parameters: {
          applicationName: this.__input.applicationName,
          revisions: this.__input.revisions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetApplicationRevisions.applicationName', props);
    return resource.getResponseField('applicationName') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetApplicationRevisions',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetApplicationRevisions.errorMessage'),
        outputPath: 'errorMessage',
        parameters: {
          applicationName: this.__input.applicationName,
          revisions: this.__input.revisions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetApplicationRevisions.errorMessage', props);
    return resource.getResponseField('errorMessage') as unknown as string;
  }

  public get revisions(): shapes.CodeDeployRevisionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetApplicationRevisions',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetApplicationRevisions.revisions'),
        outputPath: 'revisions',
        parameters: {
          applicationName: this.__input.applicationName,
          revisions: this.__input.revisions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetApplicationRevisions.revisions', props);
    return resource.getResponseField('revisions') as unknown as shapes.CodeDeployRevisionInfo[];
  }

}

export class CodeDeployResponsesBatchGetApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployBatchGetApplicationsInput) {
  }

  public get applicationsInfo(): shapes.CodeDeployApplicationInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetApplications',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetApplications.applicationsInfo'),
        outputPath: 'applicationsInfo',
        parameters: {
          applicationNames: this.__input.applicationNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetApplications.applicationsInfo', props);
    return resource.getResponseField('applicationsInfo') as unknown as shapes.CodeDeployApplicationInfo[];
  }

}

export class CodeDeployResponsesBatchGetDeploymentGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployBatchGetDeploymentGroupsInput) {
  }

  public get deploymentGroupsInfo(): shapes.CodeDeployDeploymentGroupInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDeploymentGroups',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetDeploymentGroups.deploymentGroupsInfo'),
        outputPath: 'deploymentGroupsInfo',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupNames: this.__input.deploymentGroupNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDeploymentGroups.deploymentGroupsInfo', props);
    return resource.getResponseField('deploymentGroupsInfo') as unknown as shapes.CodeDeployDeploymentGroupInfo[];
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDeploymentGroups',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetDeploymentGroups.errorMessage'),
        outputPath: 'errorMessage',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupNames: this.__input.deploymentGroupNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDeploymentGroups.errorMessage', props);
    return resource.getResponseField('errorMessage') as unknown as string;
  }

}

export class CodeDeployResponsesBatchGetDeploymentInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployBatchGetDeploymentInstancesInput) {
  }

  public get instancesSummary(): shapes.CodeDeployInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDeploymentInstances',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetDeploymentInstances.instancesSummary'),
        outputPath: 'instancesSummary',
        parameters: {
          deploymentId: this.__input.deploymentId,
          instanceIds: this.__input.instanceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDeploymentInstances.instancesSummary', props);
    return resource.getResponseField('instancesSummary') as unknown as shapes.CodeDeployInstanceSummary[];
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDeploymentInstances',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetDeploymentInstances.errorMessage'),
        outputPath: 'errorMessage',
        parameters: {
          deploymentId: this.__input.deploymentId,
          instanceIds: this.__input.instanceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDeploymentInstances.errorMessage', props);
    return resource.getResponseField('errorMessage') as unknown as string;
  }

}

export class CodeDeployResponsesBatchGetDeploymentTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployBatchGetDeploymentTargetsInput) {
  }

  public get deploymentTargets(): shapes.CodeDeployDeploymentTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDeploymentTargets',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetDeploymentTargets.deploymentTargets'),
        outputPath: 'deploymentTargets',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetIds: this.__input.targetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDeploymentTargets.deploymentTargets', props);
    return resource.getResponseField('deploymentTargets') as unknown as shapes.CodeDeployDeploymentTarget[];
  }

}

export class CodeDeployResponsesBatchGetDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployBatchGetDeploymentsInput) {
  }

  public get deploymentsInfo(): shapes.CodeDeployDeploymentInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDeployments',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetDeployments.deploymentsInfo'),
        outputPath: 'deploymentsInfo',
        parameters: {
          deploymentIds: this.__input.deploymentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDeployments.deploymentsInfo', props);
    return resource.getResponseField('deploymentsInfo') as unknown as shapes.CodeDeployDeploymentInfo[];
  }

}

export class CodeDeployResponsesBatchGetOnPremisesInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployBatchGetOnPremisesInstancesInput) {
  }

  public get instanceInfos(): shapes.CodeDeployInstanceInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetOnPremisesInstances',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.BatchGetOnPremisesInstances.instanceInfos'),
        outputPath: 'instanceInfos',
        parameters: {
          instanceNames: this.__input.instanceNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetOnPremisesInstances.instanceInfos', props);
    return resource.getResponseField('instanceInfos') as unknown as shapes.CodeDeployInstanceInfo[];
  }

}

export class CodeDeployResponsesCreateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployCreateApplicationInput) {
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.CreateApplication.applicationId'),
        outputPath: 'applicationId',
        parameters: {
          applicationName: this.__input.applicationName,
          computePlatform: this.__input.computePlatform,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.applicationId', props);
    return resource.getResponseField('applicationId') as unknown as string;
  }

}

export class CodeDeployResponsesCreateDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployCreateDeploymentInput) {
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.CreateDeployment.deploymentId'),
        outputPath: 'deploymentId',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
          revision: {
            revisionType: this.__input.revision?.revisionType,
            s3Location: {
              bucket: this.__input.revision?.s3Location?.bucket,
              key: this.__input.revision?.s3Location?.key,
              bundleType: this.__input.revision?.s3Location?.bundleType,
              version: this.__input.revision?.s3Location?.version,
              eTag: this.__input.revision?.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision?.gitHubLocation?.repository,
              commitId: this.__input.revision?.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision?.string?.content,
              sha256: this.__input.revision?.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision?.appSpecContent?.content,
              sha256: this.__input.revision?.appSpecContent?.sha256,
            },
          },
          deploymentConfigName: this.__input.deploymentConfigName,
          description: this.__input.description,
          ignoreApplicationStopFailures: this.__input.ignoreApplicationStopFailures,
          targetInstances: {
            tagFilters: this.__input.targetInstances?.tagFilters,
            autoScalingGroups: this.__input.targetInstances?.autoScalingGroups,
            ec2TagSet: {
              ec2TagSetList: this.__input.targetInstances?.ec2TagSet?.ec2TagSetList,
            },
          },
          autoRollbackConfiguration: {
            enabled: this.__input.autoRollbackConfiguration?.enabled,
            events: this.__input.autoRollbackConfiguration?.events,
          },
          updateOutdatedInstancesOnly: this.__input.updateOutdatedInstancesOnly,
          fileExistsBehavior: this.__input.fileExistsBehavior,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.deploymentId', props);
    return resource.getResponseField('deploymentId') as unknown as string;
  }

}

export class CodeDeployResponsesCreateDeploymentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployCreateDeploymentConfigInput) {
  }

  public get deploymentConfigId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.CreateDeploymentConfig.deploymentConfigId'),
        outputPath: 'deploymentConfigId',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
          minimumHealthyHosts: {
            type: this.__input.minimumHealthyHosts?.type,
            value: this.__input.minimumHealthyHosts?.value,
          },
          trafficRoutingConfig: {
            type: this.__input.trafficRoutingConfig?.type,
            timeBasedCanary: {
              canaryPercentage: this.__input.trafficRoutingConfig?.timeBasedCanary?.canaryPercentage,
              canaryInterval: this.__input.trafficRoutingConfig?.timeBasedCanary?.canaryInterval,
            },
            timeBasedLinear: {
              linearPercentage: this.__input.trafficRoutingConfig?.timeBasedLinear?.linearPercentage,
              linearInterval: this.__input.trafficRoutingConfig?.timeBasedLinear?.linearInterval,
            },
          },
          computePlatform: this.__input.computePlatform,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentConfig.deploymentConfigId', props);
    return resource.getResponseField('deploymentConfigId') as unknown as string;
  }

}

export class CodeDeployResponsesCreateDeploymentGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployCreateDeploymentGroupInput) {
  }

  public get deploymentGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.CreateDeploymentGroup.deploymentGroupId'),
        outputPath: 'deploymentGroupId',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
          deploymentConfigName: this.__input.deploymentConfigName,
          ec2TagFilters: this.__input.ec2TagFilters,
          onPremisesInstanceTagFilters: this.__input.onPremisesInstanceTagFilters,
          autoScalingGroups: this.__input.autoScalingGroups,
          serviceRoleArn: this.__input.serviceRoleArn,
          triggerConfigurations: this.__input.triggerConfigurations,
          alarmConfiguration: {
            enabled: this.__input.alarmConfiguration?.enabled,
            ignorePollAlarmFailure: this.__input.alarmConfiguration?.ignorePollAlarmFailure,
            alarms: this.__input.alarmConfiguration?.alarms,
          },
          autoRollbackConfiguration: {
            enabled: this.__input.autoRollbackConfiguration?.enabled,
            events: this.__input.autoRollbackConfiguration?.events,
          },
          outdatedInstancesStrategy: this.__input.outdatedInstancesStrategy,
          deploymentStyle: {
            deploymentType: this.__input.deploymentStyle?.deploymentType,
            deploymentOption: this.__input.deploymentStyle?.deploymentOption,
          },
          blueGreenDeploymentConfiguration: {
            terminateBlueInstancesOnDeploymentSuccess: {
              action: this.__input.blueGreenDeploymentConfiguration?.terminateBlueInstancesOnDeploymentSuccess?.action,
              terminationWaitTimeInMinutes: this.__input.blueGreenDeploymentConfiguration?.terminateBlueInstancesOnDeploymentSuccess?.terminationWaitTimeInMinutes,
            },
            deploymentReadyOption: {
              actionOnTimeout: this.__input.blueGreenDeploymentConfiguration?.deploymentReadyOption?.actionOnTimeout,
              waitTimeInMinutes: this.__input.blueGreenDeploymentConfiguration?.deploymentReadyOption?.waitTimeInMinutes,
            },
            greenFleetProvisioningOption: {
              action: this.__input.blueGreenDeploymentConfiguration?.greenFleetProvisioningOption?.action,
            },
          },
          loadBalancerInfo: {
            elbInfoList: this.__input.loadBalancerInfo?.elbInfoList,
            targetGroupInfoList: this.__input.loadBalancerInfo?.targetGroupInfoList,
            targetGroupPairInfoList: this.__input.loadBalancerInfo?.targetGroupPairInfoList,
          },
          ec2TagSet: {
            ec2TagSetList: this.__input.ec2TagSet?.ec2TagSetList,
          },
          ecsServices: this.__input.ecsServices,
          onPremisesTagSet: {
            onPremisesTagSetList: this.__input.onPremisesTagSet?.onPremisesTagSetList,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentGroup.deploymentGroupId', props);
    return resource.getResponseField('deploymentGroupId') as unknown as string;
  }

}

export class CodeDeployResponsesDeleteDeploymentGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployDeleteDeploymentGroupInput) {
  }

  public get hooksNotCleanedUp(): shapes.CodeDeployAutoScalingGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.DeleteDeploymentGroup.hooksNotCleanedUp'),
        outputPath: 'hooksNotCleanedUp',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDeploymentGroup.hooksNotCleanedUp', props);
    return resource.getResponseField('hooksNotCleanedUp') as unknown as shapes.CodeDeployAutoScalingGroup[];
  }

}

export class CodeDeployResponsesDeleteGitHubAccountToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployDeleteGitHubAccountTokenInput) {
  }

  public get tokenName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGitHubAccountToken',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.DeleteGitHubAccountToken.tokenName'),
        outputPath: 'tokenName',
        parameters: {
          tokenName: this.__input.tokenName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGitHubAccountToken.tokenName', props);
    return resource.getResponseField('tokenName') as unknown as string;
  }

}

export class CodeDeployResponsesFetchApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetApplicationInput) {
  }

  public get application(): CodeDeployResponsesFetchApplicationApplication {
    return new CodeDeployResponsesFetchApplicationApplication(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchApplicationApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetApplicationInput) {
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplication.application.applicationId'),
        outputPath: 'application.applicationId',
        parameters: {
          applicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.application.applicationId', props);
    return resource.getResponseField('application.applicationId') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplication.application.applicationName'),
        outputPath: 'application.applicationName',
        parameters: {
          applicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.application.applicationName', props);
    return resource.getResponseField('application.applicationName') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplication.application.createTime'),
        outputPath: 'application.createTime',
        parameters: {
          applicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.application.createTime', props);
    return resource.getResponseField('application.createTime') as unknown as string;
  }

  public get linkedToGitHub(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplication.application.linkedToGitHub'),
        outputPath: 'application.linkedToGitHub',
        parameters: {
          applicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.application.linkedToGitHub', props);
    return resource.getResponseField('application.linkedToGitHub') as unknown as boolean;
  }

  public get gitHubAccountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplication.application.gitHubAccountName'),
        outputPath: 'application.gitHubAccountName',
        parameters: {
          applicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.application.gitHubAccountName', props);
    return resource.getResponseField('application.gitHubAccountName') as unknown as string;
  }

  public get computePlatform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplication.application.computePlatform'),
        outputPath: 'application.computePlatform',
        parameters: {
          applicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.application.computePlatform', props);
    return resource.getResponseField('application.computePlatform') as unknown as string;
  }

}

export class CodeDeployResponsesFetchApplicationRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetApplicationRevisionInput) {
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.applicationName'),
        outputPath: 'applicationName',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.applicationName', props);
    return resource.getResponseField('applicationName') as unknown as string;
  }

  public get revision(): CodeDeployResponsesFetchApplicationRevisionRevision {
    return new CodeDeployResponsesFetchApplicationRevisionRevision(this.__scope, this.__resources, this.__input);
  }

  public get revisionInfo(): CodeDeployResponsesFetchApplicationRevisionRevisionInfo {
    return new CodeDeployResponsesFetchApplicationRevisionRevisionInfo(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchApplicationRevisionRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetApplicationRevisionInput) {
  }

  public get revisionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.revisionType'),
        outputPath: 'revision.revisionType',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.revisionType', props);
    return resource.getResponseField('revision.revisionType') as unknown as string;
  }

  public get s3Location(): CodeDeployResponsesFetchApplicationRevisionRevisionS3Location {
    return new CodeDeployResponsesFetchApplicationRevisionRevisionS3Location(this.__scope, this.__resources, this.__input);
  }

  public get gitHubLocation(): CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation {
    return new CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation(this.__scope, this.__resources, this.__input);
  }

  public get string(): CodeDeployResponsesFetchApplicationRevisionRevisionString {
    return new CodeDeployResponsesFetchApplicationRevisionRevisionString(this.__scope, this.__resources, this.__input);
  }

  public get appSpecContent(): CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent {
    return new CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchApplicationRevisionRevisionS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetApplicationRevisionInput) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.s3Location.bucket'),
        outputPath: 'revision.s3Location.bucket',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.s3Location.bucket', props);
    return resource.getResponseField('revision.s3Location.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.s3Location.key'),
        outputPath: 'revision.s3Location.key',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.s3Location.key', props);
    return resource.getResponseField('revision.s3Location.key') as unknown as string;
  }

  public get bundleType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.s3Location.bundleType'),
        outputPath: 'revision.s3Location.bundleType',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.s3Location.bundleType', props);
    return resource.getResponseField('revision.s3Location.bundleType') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.s3Location.version'),
        outputPath: 'revision.s3Location.version',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.s3Location.version', props);
    return resource.getResponseField('revision.s3Location.version') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.s3Location.eTag'),
        outputPath: 'revision.s3Location.eTag',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.s3Location.eTag', props);
    return resource.getResponseField('revision.s3Location.eTag') as unknown as string;
  }

}

export class CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetApplicationRevisionInput) {
  }

  public get repository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.gitHubLocation.repository'),
        outputPath: 'revision.gitHubLocation.repository',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.gitHubLocation.repository', props);
    return resource.getResponseField('revision.gitHubLocation.repository') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.gitHubLocation.commitId'),
        outputPath: 'revision.gitHubLocation.commitId',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.gitHubLocation.commitId', props);
    return resource.getResponseField('revision.gitHubLocation.commitId') as unknown as string;
  }

}

export class CodeDeployResponsesFetchApplicationRevisionRevisionString {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetApplicationRevisionInput) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.string.content'),
        outputPath: 'revision.string.content',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.string.content', props);
    return resource.getResponseField('revision.string.content') as unknown as string;
  }

  public get sha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.string.sha256'),
        outputPath: 'revision.string.sha256',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.string.sha256', props);
    return resource.getResponseField('revision.string.sha256') as unknown as string;
  }

}

export class CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetApplicationRevisionInput) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.appSpecContent.content'),
        outputPath: 'revision.appSpecContent.content',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.appSpecContent.content', props);
    return resource.getResponseField('revision.appSpecContent.content') as unknown as string;
  }

  public get sha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revision.appSpecContent.sha256'),
        outputPath: 'revision.appSpecContent.sha256',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revision.appSpecContent.sha256', props);
    return resource.getResponseField('revision.appSpecContent.sha256') as unknown as string;
  }

}

export class CodeDeployResponsesFetchApplicationRevisionRevisionInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetApplicationRevisionInput) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revisionInfo.description'),
        outputPath: 'revisionInfo.description',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revisionInfo.description', props);
    return resource.getResponseField('revisionInfo.description') as unknown as string;
  }

  public get deploymentGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revisionInfo.deploymentGroups'),
        outputPath: 'revisionInfo.deploymentGroups',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revisionInfo.deploymentGroups', props);
    return resource.getResponseField('revisionInfo.deploymentGroups') as unknown as string[];
  }

  public get firstUsedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revisionInfo.firstUsedTime'),
        outputPath: 'revisionInfo.firstUsedTime',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revisionInfo.firstUsedTime', props);
    return resource.getResponseField('revisionInfo.firstUsedTime') as unknown as string;
  }

  public get lastUsedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revisionInfo.lastUsedTime'),
        outputPath: 'revisionInfo.lastUsedTime',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revisionInfo.lastUsedTime', props);
    return resource.getResponseField('revisionInfo.lastUsedTime') as unknown as string;
  }

  public get registerTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplicationRevision',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetApplicationRevision.revisionInfo.registerTime'),
        outputPath: 'revisionInfo.registerTime',
        parameters: {
          applicationName: this.__input.applicationName,
          revision: {
            revisionType: this.__input.revision.revisionType,
            s3Location: {
              bucket: this.__input.revision.s3Location?.bucket,
              key: this.__input.revision.s3Location?.key,
              bundleType: this.__input.revision.s3Location?.bundleType,
              version: this.__input.revision.s3Location?.version,
              eTag: this.__input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.__input.revision.gitHubLocation?.repository,
              commitId: this.__input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.__input.revision.string?.content,
              sha256: this.__input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.__input.revision.appSpecContent?.content,
              sha256: this.__input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplicationRevision.revisionInfo.registerTime', props);
    return resource.getResponseField('revisionInfo.registerTime') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get deploymentInfo(): CodeDeployResponsesFetchDeploymentDeploymentInfo {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfo(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.applicationName'),
        outputPath: 'deploymentInfo.applicationName',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.applicationName', props);
    return resource.getResponseField('deploymentInfo.applicationName') as unknown as string;
  }

  public get deploymentGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentGroupName'),
        outputPath: 'deploymentInfo.deploymentGroupName',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentGroupName', props);
    return resource.getResponseField('deploymentInfo.deploymentGroupName') as unknown as string;
  }

  public get deploymentConfigName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentConfigName'),
        outputPath: 'deploymentInfo.deploymentConfigName',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentConfigName', props);
    return resource.getResponseField('deploymentInfo.deploymentConfigName') as unknown as string;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentId'),
        outputPath: 'deploymentInfo.deploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentId', props);
    return resource.getResponseField('deploymentInfo.deploymentId') as unknown as string;
  }

  public get previousRevision(): CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision(this.__scope, this.__resources, this.__input);
  }

  public get revision(): CodeDeployResponsesFetchDeploymentDeploymentInfoRevision {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoRevision(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.status'),
        outputPath: 'deploymentInfo.status',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.status', props);
    return resource.getResponseField('deploymentInfo.status') as unknown as string;
  }

  public get errorInformation(): CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation(this.__scope, this.__resources, this.__input);
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.createTime'),
        outputPath: 'deploymentInfo.createTime',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.createTime', props);
    return resource.getResponseField('deploymentInfo.createTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.startTime'),
        outputPath: 'deploymentInfo.startTime',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.startTime', props);
    return resource.getResponseField('deploymentInfo.startTime') as unknown as string;
  }

  public get completeTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.completeTime'),
        outputPath: 'deploymentInfo.completeTime',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.completeTime', props);
    return resource.getResponseField('deploymentInfo.completeTime') as unknown as string;
  }

  public get deploymentOverview(): CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview(this.__scope, this.__resources, this.__input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.description'),
        outputPath: 'deploymentInfo.description',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.description', props);
    return resource.getResponseField('deploymentInfo.description') as unknown as string;
  }

  public get creator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.creator'),
        outputPath: 'deploymentInfo.creator',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.creator', props);
    return resource.getResponseField('deploymentInfo.creator') as unknown as string;
  }

  public get ignoreApplicationStopFailures(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.ignoreApplicationStopFailures'),
        outputPath: 'deploymentInfo.ignoreApplicationStopFailures',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.ignoreApplicationStopFailures', props);
    return resource.getResponseField('deploymentInfo.ignoreApplicationStopFailures') as unknown as boolean;
  }

  public get autoRollbackConfiguration(): CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get updateOutdatedInstancesOnly(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.updateOutdatedInstancesOnly'),
        outputPath: 'deploymentInfo.updateOutdatedInstancesOnly',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.updateOutdatedInstancesOnly', props);
    return resource.getResponseField('deploymentInfo.updateOutdatedInstancesOnly') as unknown as boolean;
  }

  public get rollbackInfo(): CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo(this.__scope, this.__resources, this.__input);
  }

  public get deploymentStyle(): CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle(this.__scope, this.__resources, this.__input);
  }

  public get targetInstances(): CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances(this.__scope, this.__resources, this.__input);
  }

  public get instanceTerminationWaitTimeStarted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.instanceTerminationWaitTimeStarted'),
        outputPath: 'deploymentInfo.instanceTerminationWaitTimeStarted',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.instanceTerminationWaitTimeStarted', props);
    return resource.getResponseField('deploymentInfo.instanceTerminationWaitTimeStarted') as unknown as boolean;
  }

  public get blueGreenDeploymentConfiguration(): CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get loadBalancerInfo(): CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo(this.__scope, this.__resources, this.__input);
  }

  public get additionalDeploymentStatusInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.additionalDeploymentStatusInfo'),
        outputPath: 'deploymentInfo.additionalDeploymentStatusInfo',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.additionalDeploymentStatusInfo', props);
    return resource.getResponseField('deploymentInfo.additionalDeploymentStatusInfo') as unknown as string;
  }

  public get fileExistsBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.fileExistsBehavior'),
        outputPath: 'deploymentInfo.fileExistsBehavior',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.fileExistsBehavior', props);
    return resource.getResponseField('deploymentInfo.fileExistsBehavior') as unknown as string;
  }

  public get deploymentStatusMessages(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentStatusMessages'),
        outputPath: 'deploymentInfo.deploymentStatusMessages',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentStatusMessages', props);
    return resource.getResponseField('deploymentInfo.deploymentStatusMessages') as unknown as string[];
  }

  public get computePlatform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.computePlatform'),
        outputPath: 'deploymentInfo.computePlatform',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.computePlatform', props);
    return resource.getResponseField('deploymentInfo.computePlatform') as unknown as string;
  }

  public get externalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.externalId'),
        outputPath: 'deploymentInfo.externalId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.externalId', props);
    return resource.getResponseField('deploymentInfo.externalId') as unknown as string;
  }

  public get relatedDeployments(): CodeDeployResponsesFetchDeploymentDeploymentInfoRelatedDeployments {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoRelatedDeployments(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get revisionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.revisionType'),
        outputPath: 'deploymentInfo.previousRevision.revisionType',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.revisionType', props);
    return resource.getResponseField('deploymentInfo.previousRevision.revisionType') as unknown as string;
  }

  public get s3Location(): CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location(this.__scope, this.__resources, this.__input);
  }

  public get gitHubLocation(): CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation(this.__scope, this.__resources, this.__input);
  }

  public get string(): CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString(this.__scope, this.__resources, this.__input);
  }

  public get appSpecContent(): CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.s3Location.bucket'),
        outputPath: 'deploymentInfo.previousRevision.s3Location.bucket',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.s3Location.bucket', props);
    return resource.getResponseField('deploymentInfo.previousRevision.s3Location.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.s3Location.key'),
        outputPath: 'deploymentInfo.previousRevision.s3Location.key',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.s3Location.key', props);
    return resource.getResponseField('deploymentInfo.previousRevision.s3Location.key') as unknown as string;
  }

  public get bundleType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.s3Location.bundleType'),
        outputPath: 'deploymentInfo.previousRevision.s3Location.bundleType',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.s3Location.bundleType', props);
    return resource.getResponseField('deploymentInfo.previousRevision.s3Location.bundleType') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.s3Location.version'),
        outputPath: 'deploymentInfo.previousRevision.s3Location.version',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.s3Location.version', props);
    return resource.getResponseField('deploymentInfo.previousRevision.s3Location.version') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.s3Location.eTag'),
        outputPath: 'deploymentInfo.previousRevision.s3Location.eTag',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.s3Location.eTag', props);
    return resource.getResponseField('deploymentInfo.previousRevision.s3Location.eTag') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get repository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.gitHubLocation.repository'),
        outputPath: 'deploymentInfo.previousRevision.gitHubLocation.repository',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.gitHubLocation.repository', props);
    return resource.getResponseField('deploymentInfo.previousRevision.gitHubLocation.repository') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.gitHubLocation.commitId'),
        outputPath: 'deploymentInfo.previousRevision.gitHubLocation.commitId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.gitHubLocation.commitId', props);
    return resource.getResponseField('deploymentInfo.previousRevision.gitHubLocation.commitId') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.string.content'),
        outputPath: 'deploymentInfo.previousRevision.string.content',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.string.content', props);
    return resource.getResponseField('deploymentInfo.previousRevision.string.content') as unknown as string;
  }

  public get sha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.string.sha256'),
        outputPath: 'deploymentInfo.previousRevision.string.sha256',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.string.sha256', props);
    return resource.getResponseField('deploymentInfo.previousRevision.string.sha256') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.appSpecContent.content'),
        outputPath: 'deploymentInfo.previousRevision.appSpecContent.content',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.appSpecContent.content', props);
    return resource.getResponseField('deploymentInfo.previousRevision.appSpecContent.content') as unknown as string;
  }

  public get sha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.previousRevision.appSpecContent.sha256'),
        outputPath: 'deploymentInfo.previousRevision.appSpecContent.sha256',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.previousRevision.appSpecContent.sha256', props);
    return resource.getResponseField('deploymentInfo.previousRevision.appSpecContent.sha256') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get revisionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.revisionType'),
        outputPath: 'deploymentInfo.revision.revisionType',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.revisionType', props);
    return resource.getResponseField('deploymentInfo.revision.revisionType') as unknown as string;
  }

  public get s3Location(): CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location(this.__scope, this.__resources, this.__input);
  }

  public get gitHubLocation(): CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation(this.__scope, this.__resources, this.__input);
  }

  public get string(): CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString(this.__scope, this.__resources, this.__input);
  }

  public get appSpecContent(): CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.s3Location.bucket'),
        outputPath: 'deploymentInfo.revision.s3Location.bucket',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.s3Location.bucket', props);
    return resource.getResponseField('deploymentInfo.revision.s3Location.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.s3Location.key'),
        outputPath: 'deploymentInfo.revision.s3Location.key',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.s3Location.key', props);
    return resource.getResponseField('deploymentInfo.revision.s3Location.key') as unknown as string;
  }

  public get bundleType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.s3Location.bundleType'),
        outputPath: 'deploymentInfo.revision.s3Location.bundleType',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.s3Location.bundleType', props);
    return resource.getResponseField('deploymentInfo.revision.s3Location.bundleType') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.s3Location.version'),
        outputPath: 'deploymentInfo.revision.s3Location.version',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.s3Location.version', props);
    return resource.getResponseField('deploymentInfo.revision.s3Location.version') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.s3Location.eTag'),
        outputPath: 'deploymentInfo.revision.s3Location.eTag',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.s3Location.eTag', props);
    return resource.getResponseField('deploymentInfo.revision.s3Location.eTag') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get repository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.gitHubLocation.repository'),
        outputPath: 'deploymentInfo.revision.gitHubLocation.repository',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.gitHubLocation.repository', props);
    return resource.getResponseField('deploymentInfo.revision.gitHubLocation.repository') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.gitHubLocation.commitId'),
        outputPath: 'deploymentInfo.revision.gitHubLocation.commitId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.gitHubLocation.commitId', props);
    return resource.getResponseField('deploymentInfo.revision.gitHubLocation.commitId') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.string.content'),
        outputPath: 'deploymentInfo.revision.string.content',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.string.content', props);
    return resource.getResponseField('deploymentInfo.revision.string.content') as unknown as string;
  }

  public get sha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.string.sha256'),
        outputPath: 'deploymentInfo.revision.string.sha256',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.string.sha256', props);
    return resource.getResponseField('deploymentInfo.revision.string.sha256') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.appSpecContent.content'),
        outputPath: 'deploymentInfo.revision.appSpecContent.content',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.appSpecContent.content', props);
    return resource.getResponseField('deploymentInfo.revision.appSpecContent.content') as unknown as string;
  }

  public get sha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.revision.appSpecContent.sha256'),
        outputPath: 'deploymentInfo.revision.appSpecContent.sha256',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.revision.appSpecContent.sha256', props);
    return resource.getResponseField('deploymentInfo.revision.appSpecContent.sha256') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.errorInformation.code'),
        outputPath: 'deploymentInfo.errorInformation.code',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.errorInformation.code', props);
    return resource.getResponseField('deploymentInfo.errorInformation.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.errorInformation.message'),
        outputPath: 'deploymentInfo.errorInformation.message',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.errorInformation.message', props);
    return resource.getResponseField('deploymentInfo.errorInformation.message') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get pending(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentOverview.Pending'),
        outputPath: 'deploymentInfo.deploymentOverview.Pending',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentOverview.Pending', props);
    return resource.getResponseField('deploymentInfo.deploymentOverview.Pending') as unknown as number;
  }

  public get inProgress(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentOverview.InProgress'),
        outputPath: 'deploymentInfo.deploymentOverview.InProgress',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentOverview.InProgress', props);
    return resource.getResponseField('deploymentInfo.deploymentOverview.InProgress') as unknown as number;
  }

  public get succeeded(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentOverview.Succeeded'),
        outputPath: 'deploymentInfo.deploymentOverview.Succeeded',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentOverview.Succeeded', props);
    return resource.getResponseField('deploymentInfo.deploymentOverview.Succeeded') as unknown as number;
  }

  public get failed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentOverview.Failed'),
        outputPath: 'deploymentInfo.deploymentOverview.Failed',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentOverview.Failed', props);
    return resource.getResponseField('deploymentInfo.deploymentOverview.Failed') as unknown as number;
  }

  public get skipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentOverview.Skipped'),
        outputPath: 'deploymentInfo.deploymentOverview.Skipped',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentOverview.Skipped', props);
    return resource.getResponseField('deploymentInfo.deploymentOverview.Skipped') as unknown as number;
  }

  public get ready(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentOverview.Ready'),
        outputPath: 'deploymentInfo.deploymentOverview.Ready',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentOverview.Ready', props);
    return resource.getResponseField('deploymentInfo.deploymentOverview.Ready') as unknown as number;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.autoRollbackConfiguration.enabled'),
        outputPath: 'deploymentInfo.autoRollbackConfiguration.enabled',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.autoRollbackConfiguration.enabled', props);
    return resource.getResponseField('deploymentInfo.autoRollbackConfiguration.enabled') as unknown as boolean;
  }

  public get events(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.autoRollbackConfiguration.events'),
        outputPath: 'deploymentInfo.autoRollbackConfiguration.events',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.autoRollbackConfiguration.events', props);
    return resource.getResponseField('deploymentInfo.autoRollbackConfiguration.events') as unknown as string[];
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get rollbackDeploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.rollbackInfo.rollbackDeploymentId'),
        outputPath: 'deploymentInfo.rollbackInfo.rollbackDeploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.rollbackInfo.rollbackDeploymentId', props);
    return resource.getResponseField('deploymentInfo.rollbackInfo.rollbackDeploymentId') as unknown as string;
  }

  public get rollbackTriggeringDeploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.rollbackInfo.rollbackTriggeringDeploymentId'),
        outputPath: 'deploymentInfo.rollbackInfo.rollbackTriggeringDeploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.rollbackInfo.rollbackTriggeringDeploymentId', props);
    return resource.getResponseField('deploymentInfo.rollbackInfo.rollbackTriggeringDeploymentId') as unknown as string;
  }

  public get rollbackMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.rollbackInfo.rollbackMessage'),
        outputPath: 'deploymentInfo.rollbackInfo.rollbackMessage',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.rollbackInfo.rollbackMessage', props);
    return resource.getResponseField('deploymentInfo.rollbackInfo.rollbackMessage') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentStyle.deploymentType'),
        outputPath: 'deploymentInfo.deploymentStyle.deploymentType',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentStyle.deploymentType', props);
    return resource.getResponseField('deploymentInfo.deploymentStyle.deploymentType') as unknown as string;
  }

  public get deploymentOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.deploymentStyle.deploymentOption'),
        outputPath: 'deploymentInfo.deploymentStyle.deploymentOption',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.deploymentStyle.deploymentOption', props);
    return resource.getResponseField('deploymentInfo.deploymentStyle.deploymentOption') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get tagFilters(): shapes.CodeDeployEc2TagFilter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.targetInstances.tagFilters'),
        outputPath: 'deploymentInfo.targetInstances.tagFilters',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.targetInstances.tagFilters', props);
    return resource.getResponseField('deploymentInfo.targetInstances.tagFilters') as unknown as shapes.CodeDeployEc2TagFilter[];
  }

  public get autoScalingGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.targetInstances.autoScalingGroups'),
        outputPath: 'deploymentInfo.targetInstances.autoScalingGroups',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.targetInstances.autoScalingGroups', props);
    return resource.getResponseField('deploymentInfo.targetInstances.autoScalingGroups') as unknown as string[];
  }

  public get ec2TagSet(): CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get ec2TagSetList(): shapes.CodeDeployEc2TagFilter[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.targetInstances.ec2TagSet.ec2TagSetList'),
        outputPath: 'deploymentInfo.targetInstances.ec2TagSet.ec2TagSetList',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.targetInstances.ec2TagSet.ec2TagSetList', props);
    return resource.getResponseField('deploymentInfo.targetInstances.ec2TagSet.ec2TagSetList') as unknown as shapes.CodeDeployEc2TagFilter[][];
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get terminateBlueInstancesOnDeploymentSuccess(): CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess(this.__scope, this.__resources, this.__input);
  }

  public get deploymentReadyOption(): CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption(this.__scope, this.__resources, this.__input);
  }

  public get greenFleetProvisioningOption(): CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {
    return new CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action'),
        outputPath: 'deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action', props);
    return resource.getResponseField('deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action') as unknown as string;
  }

  public get terminationWaitTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes'),
        outputPath: 'deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes', props);
    return resource.getResponseField('deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes') as unknown as number;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get actionOnTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout'),
        outputPath: 'deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout', props);
    return resource.getResponseField('deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout') as unknown as string;
  }

  public get waitTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes'),
        outputPath: 'deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes', props);
    return resource.getResponseField('deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes') as unknown as number;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action'),
        outputPath: 'deploymentInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action', props);
    return resource.getResponseField('deploymentInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get elbInfoList(): shapes.CodeDeployElbInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.loadBalancerInfo.elbInfoList'),
        outputPath: 'deploymentInfo.loadBalancerInfo.elbInfoList',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.loadBalancerInfo.elbInfoList', props);
    return resource.getResponseField('deploymentInfo.loadBalancerInfo.elbInfoList') as unknown as shapes.CodeDeployElbInfo[];
  }

  public get targetGroupInfoList(): shapes.CodeDeployTargetGroupInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.loadBalancerInfo.targetGroupInfoList'),
        outputPath: 'deploymentInfo.loadBalancerInfo.targetGroupInfoList',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.loadBalancerInfo.targetGroupInfoList', props);
    return resource.getResponseField('deploymentInfo.loadBalancerInfo.targetGroupInfoList') as unknown as shapes.CodeDeployTargetGroupInfo[];
  }

  public get targetGroupPairInfoList(): shapes.CodeDeployTargetGroupPairInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.loadBalancerInfo.targetGroupPairInfoList'),
        outputPath: 'deploymentInfo.loadBalancerInfo.targetGroupPairInfoList',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.loadBalancerInfo.targetGroupPairInfoList', props);
    return resource.getResponseField('deploymentInfo.loadBalancerInfo.targetGroupPairInfoList') as unknown as shapes.CodeDeployTargetGroupPairInfo[];
  }

}

export class CodeDeployResponsesFetchDeploymentDeploymentInfoRelatedDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInput) {
  }

  public get autoUpdateOutdatedInstancesRootDeploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.relatedDeployments.autoUpdateOutdatedInstancesRootDeploymentId'),
        outputPath: 'deploymentInfo.relatedDeployments.autoUpdateOutdatedInstancesRootDeploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.relatedDeployments.autoUpdateOutdatedInstancesRootDeploymentId', props);
    return resource.getResponseField('deploymentInfo.relatedDeployments.autoUpdateOutdatedInstancesRootDeploymentId') as unknown as string;
  }

  public get autoUpdateOutdatedInstancesDeploymentIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeployment.deploymentInfo.relatedDeployments.autoUpdateOutdatedInstancesDeploymentIds'),
        outputPath: 'deploymentInfo.relatedDeployments.autoUpdateOutdatedInstancesDeploymentIds',
        parameters: {
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.deploymentInfo.relatedDeployments.autoUpdateOutdatedInstancesDeploymentIds', props);
    return resource.getResponseField('deploymentInfo.relatedDeployments.autoUpdateOutdatedInstancesDeploymentIds') as unknown as string[];
  }

}

export class CodeDeployResponsesFetchDeploymentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentConfigInput) {
  }

  public get deploymentConfigInfo(): CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo {
    return new CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentConfigInput) {
  }

  public get deploymentConfigId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.deploymentConfigId'),
        outputPath: 'deploymentConfigInfo.deploymentConfigId',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.deploymentConfigId', props);
    return resource.getResponseField('deploymentConfigInfo.deploymentConfigId') as unknown as string;
  }

  public get deploymentConfigName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.deploymentConfigName'),
        outputPath: 'deploymentConfigInfo.deploymentConfigName',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.deploymentConfigName', props);
    return resource.getResponseField('deploymentConfigInfo.deploymentConfigName') as unknown as string;
  }

  public get minimumHealthyHosts(): CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts {
    return new CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts(this.__scope, this.__resources, this.__input);
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.createTime'),
        outputPath: 'deploymentConfigInfo.createTime',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.createTime', props);
    return resource.getResponseField('deploymentConfigInfo.createTime') as unknown as string;
  }

  public get computePlatform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.computePlatform'),
        outputPath: 'deploymentConfigInfo.computePlatform',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.computePlatform', props);
    return resource.getResponseField('deploymentConfigInfo.computePlatform') as unknown as string;
  }

  public get trafficRoutingConfig(): CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig {
    return new CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentConfigInput) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.minimumHealthyHosts.type'),
        outputPath: 'deploymentConfigInfo.minimumHealthyHosts.type',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.minimumHealthyHosts.type', props);
    return resource.getResponseField('deploymentConfigInfo.minimumHealthyHosts.type') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.minimumHealthyHosts.value'),
        outputPath: 'deploymentConfigInfo.minimumHealthyHosts.value',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.minimumHealthyHosts.value', props);
    return resource.getResponseField('deploymentConfigInfo.minimumHealthyHosts.value') as unknown as number;
  }

}

export class CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentConfigInput) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.type'),
        outputPath: 'deploymentConfigInfo.trafficRoutingConfig.type',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.type', props);
    return resource.getResponseField('deploymentConfigInfo.trafficRoutingConfig.type') as unknown as string;
  }

  public get timeBasedCanary(): CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary {
    return new CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary(this.__scope, this.__resources, this.__input);
  }

  public get timeBasedLinear(): CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear {
    return new CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentConfigInput) {
  }

  public get canaryPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryPercentage'),
        outputPath: 'deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryPercentage',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryPercentage', props);
    return resource.getResponseField('deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryPercentage') as unknown as number;
  }

  public get canaryInterval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryInterval'),
        outputPath: 'deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryInterval',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryInterval', props);
    return resource.getResponseField('deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryInterval') as unknown as number;
  }

}

export class CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentConfigInput) {
  }

  public get linearPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearPercentage'),
        outputPath: 'deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearPercentage',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearPercentage', props);
    return resource.getResponseField('deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearPercentage') as unknown as number;
  }

  public get linearInterval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentConfig',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearInterval'),
        outputPath: 'deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearInterval',
        parameters: {
          deploymentConfigName: this.__input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearInterval', props);
    return resource.getResponseField('deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearInterval') as unknown as number;
  }

}

export class CodeDeployResponsesFetchDeploymentGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get deploymentGroupInfo(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.applicationName'),
        outputPath: 'deploymentGroupInfo.applicationName',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.applicationName', props);
    return resource.getResponseField('deploymentGroupInfo.applicationName') as unknown as string;
  }

  public get deploymentGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.deploymentGroupId'),
        outputPath: 'deploymentGroupInfo.deploymentGroupId',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.deploymentGroupId', props);
    return resource.getResponseField('deploymentGroupInfo.deploymentGroupId') as unknown as string;
  }

  public get deploymentGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.deploymentGroupName'),
        outputPath: 'deploymentGroupInfo.deploymentGroupName',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.deploymentGroupName', props);
    return resource.getResponseField('deploymentGroupInfo.deploymentGroupName') as unknown as string;
  }

  public get deploymentConfigName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.deploymentConfigName'),
        outputPath: 'deploymentGroupInfo.deploymentConfigName',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.deploymentConfigName', props);
    return resource.getResponseField('deploymentGroupInfo.deploymentConfigName') as unknown as string;
  }

  public get ec2TagFilters(): shapes.CodeDeployEc2TagFilter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.ec2TagFilters'),
        outputPath: 'deploymentGroupInfo.ec2TagFilters',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.ec2TagFilters', props);
    return resource.getResponseField('deploymentGroupInfo.ec2TagFilters') as unknown as shapes.CodeDeployEc2TagFilter[];
  }

  public get onPremisesInstanceTagFilters(): shapes.CodeDeployTagFilter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.onPremisesInstanceTagFilters'),
        outputPath: 'deploymentGroupInfo.onPremisesInstanceTagFilters',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.onPremisesInstanceTagFilters', props);
    return resource.getResponseField('deploymentGroupInfo.onPremisesInstanceTagFilters') as unknown as shapes.CodeDeployTagFilter[];
  }

  public get autoScalingGroups(): shapes.CodeDeployAutoScalingGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.autoScalingGroups'),
        outputPath: 'deploymentGroupInfo.autoScalingGroups',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.autoScalingGroups', props);
    return resource.getResponseField('deploymentGroupInfo.autoScalingGroups') as unknown as shapes.CodeDeployAutoScalingGroup[];
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.serviceRoleArn'),
        outputPath: 'deploymentGroupInfo.serviceRoleArn',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.serviceRoleArn', props);
    return resource.getResponseField('deploymentGroupInfo.serviceRoleArn') as unknown as string;
  }

  public get targetRevision(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision(this.__scope, this.__resources, this.__input);
  }

  public get triggerConfigurations(): shapes.CodeDeployTriggerConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.triggerConfigurations'),
        outputPath: 'deploymentGroupInfo.triggerConfigurations',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.triggerConfigurations', props);
    return resource.getResponseField('deploymentGroupInfo.triggerConfigurations') as unknown as shapes.CodeDeployTriggerConfig[];
  }

  public get alarmConfiguration(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get autoRollbackConfiguration(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get deploymentStyle(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle(this.__scope, this.__resources, this.__input);
  }

  public get outdatedInstancesStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.outdatedInstancesStrategy'),
        outputPath: 'deploymentGroupInfo.outdatedInstancesStrategy',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.outdatedInstancesStrategy', props);
    return resource.getResponseField('deploymentGroupInfo.outdatedInstancesStrategy') as unknown as string;
  }

  public get blueGreenDeploymentConfiguration(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get loadBalancerInfo(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo(this.__scope, this.__resources, this.__input);
  }

  public get lastSuccessfulDeployment(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment(this.__scope, this.__resources, this.__input);
  }

  public get lastAttemptedDeployment(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment(this.__scope, this.__resources, this.__input);
  }

  public get ec2TagSet(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet(this.__scope, this.__resources, this.__input);
  }

  public get onPremisesTagSet(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet(this.__scope, this.__resources, this.__input);
  }

  public get computePlatform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.computePlatform'),
        outputPath: 'deploymentGroupInfo.computePlatform',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.computePlatform', props);
    return resource.getResponseField('deploymentGroupInfo.computePlatform') as unknown as string;
  }

  public get ecsServices(): shapes.CodeDeployEcsService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.ecsServices'),
        outputPath: 'deploymentGroupInfo.ecsServices',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.ecsServices', props);
    return resource.getResponseField('deploymentGroupInfo.ecsServices') as unknown as shapes.CodeDeployEcsService[];
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get revisionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.revisionType'),
        outputPath: 'deploymentGroupInfo.targetRevision.revisionType',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.revisionType', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.revisionType') as unknown as string;
  }

  public get s3Location(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location(this.__scope, this.__resources, this.__input);
  }

  public get gitHubLocation(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation(this.__scope, this.__resources, this.__input);
  }

  public get string(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString(this.__scope, this.__resources, this.__input);
  }

  public get appSpecContent(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.bucket'),
        outputPath: 'deploymentGroupInfo.targetRevision.s3Location.bucket',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.bucket', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.s3Location.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.key'),
        outputPath: 'deploymentGroupInfo.targetRevision.s3Location.key',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.key', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.s3Location.key') as unknown as string;
  }

  public get bundleType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.bundleType'),
        outputPath: 'deploymentGroupInfo.targetRevision.s3Location.bundleType',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.bundleType', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.s3Location.bundleType') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.version'),
        outputPath: 'deploymentGroupInfo.targetRevision.s3Location.version',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.version', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.s3Location.version') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.eTag'),
        outputPath: 'deploymentGroupInfo.targetRevision.s3Location.eTag',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.eTag', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.s3Location.eTag') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get repository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.gitHubLocation.repository'),
        outputPath: 'deploymentGroupInfo.targetRevision.gitHubLocation.repository',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.gitHubLocation.repository', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.gitHubLocation.repository') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.gitHubLocation.commitId'),
        outputPath: 'deploymentGroupInfo.targetRevision.gitHubLocation.commitId',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.gitHubLocation.commitId', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.gitHubLocation.commitId') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.string.content'),
        outputPath: 'deploymentGroupInfo.targetRevision.string.content',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.string.content', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.string.content') as unknown as string;
  }

  public get sha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.string.sha256'),
        outputPath: 'deploymentGroupInfo.targetRevision.string.sha256',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.string.sha256', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.string.sha256') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.appSpecContent.content'),
        outputPath: 'deploymentGroupInfo.targetRevision.appSpecContent.content',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.appSpecContent.content', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.appSpecContent.content') as unknown as string;
  }

  public get sha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.targetRevision.appSpecContent.sha256'),
        outputPath: 'deploymentGroupInfo.targetRevision.appSpecContent.sha256',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.appSpecContent.sha256', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.appSpecContent.sha256') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.alarmConfiguration.enabled'),
        outputPath: 'deploymentGroupInfo.alarmConfiguration.enabled',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.alarmConfiguration.enabled', props);
    return resource.getResponseField('deploymentGroupInfo.alarmConfiguration.enabled') as unknown as boolean;
  }

  public get ignorePollAlarmFailure(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.alarmConfiguration.ignorePollAlarmFailure'),
        outputPath: 'deploymentGroupInfo.alarmConfiguration.ignorePollAlarmFailure',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.alarmConfiguration.ignorePollAlarmFailure', props);
    return resource.getResponseField('deploymentGroupInfo.alarmConfiguration.ignorePollAlarmFailure') as unknown as boolean;
  }

  public get alarms(): shapes.CodeDeployAlarm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.alarmConfiguration.alarms'),
        outputPath: 'deploymentGroupInfo.alarmConfiguration.alarms',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.alarmConfiguration.alarms', props);
    return resource.getResponseField('deploymentGroupInfo.alarmConfiguration.alarms') as unknown as shapes.CodeDeployAlarm[];
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.autoRollbackConfiguration.enabled'),
        outputPath: 'deploymentGroupInfo.autoRollbackConfiguration.enabled',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.autoRollbackConfiguration.enabled', props);
    return resource.getResponseField('deploymentGroupInfo.autoRollbackConfiguration.enabled') as unknown as boolean;
  }

  public get events(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.autoRollbackConfiguration.events'),
        outputPath: 'deploymentGroupInfo.autoRollbackConfiguration.events',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.autoRollbackConfiguration.events', props);
    return resource.getResponseField('deploymentGroupInfo.autoRollbackConfiguration.events') as unknown as string[];
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.deploymentStyle.deploymentType'),
        outputPath: 'deploymentGroupInfo.deploymentStyle.deploymentType',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.deploymentStyle.deploymentType', props);
    return resource.getResponseField('deploymentGroupInfo.deploymentStyle.deploymentType') as unknown as string;
  }

  public get deploymentOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.deploymentStyle.deploymentOption'),
        outputPath: 'deploymentGroupInfo.deploymentStyle.deploymentOption',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.deploymentStyle.deploymentOption', props);
    return resource.getResponseField('deploymentGroupInfo.deploymentStyle.deploymentOption') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get terminateBlueInstancesOnDeploymentSuccess(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess(this.__scope, this.__resources, this.__input);
  }

  public get deploymentReadyOption(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption(this.__scope, this.__resources, this.__input);
  }

  public get greenFleetProvisioningOption(): CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {
    return new CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action'),
        outputPath: 'deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action', props);
    return resource.getResponseField('deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action') as unknown as string;
  }

  public get terminationWaitTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes'),
        outputPath: 'deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes', props);
    return resource.getResponseField('deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes') as unknown as number;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get actionOnTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout'),
        outputPath: 'deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout', props);
    return resource.getResponseField('deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout') as unknown as string;
  }

  public get waitTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes'),
        outputPath: 'deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes', props);
    return resource.getResponseField('deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes') as unknown as number;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action'),
        outputPath: 'deploymentGroupInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action', props);
    return resource.getResponseField('deploymentGroupInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get elbInfoList(): shapes.CodeDeployElbInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.loadBalancerInfo.elbInfoList'),
        outputPath: 'deploymentGroupInfo.loadBalancerInfo.elbInfoList',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.loadBalancerInfo.elbInfoList', props);
    return resource.getResponseField('deploymentGroupInfo.loadBalancerInfo.elbInfoList') as unknown as shapes.CodeDeployElbInfo[];
  }

  public get targetGroupInfoList(): shapes.CodeDeployTargetGroupInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.loadBalancerInfo.targetGroupInfoList'),
        outputPath: 'deploymentGroupInfo.loadBalancerInfo.targetGroupInfoList',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.loadBalancerInfo.targetGroupInfoList', props);
    return resource.getResponseField('deploymentGroupInfo.loadBalancerInfo.targetGroupInfoList') as unknown as shapes.CodeDeployTargetGroupInfo[];
  }

  public get targetGroupPairInfoList(): shapes.CodeDeployTargetGroupPairInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.loadBalancerInfo.targetGroupPairInfoList'),
        outputPath: 'deploymentGroupInfo.loadBalancerInfo.targetGroupPairInfoList',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.loadBalancerInfo.targetGroupPairInfoList', props);
    return resource.getResponseField('deploymentGroupInfo.loadBalancerInfo.targetGroupPairInfoList') as unknown as shapes.CodeDeployTargetGroupPairInfo[];
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.deploymentId'),
        outputPath: 'deploymentGroupInfo.lastSuccessfulDeployment.deploymentId',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.deploymentId', props);
    return resource.getResponseField('deploymentGroupInfo.lastSuccessfulDeployment.deploymentId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.status'),
        outputPath: 'deploymentGroupInfo.lastSuccessfulDeployment.status',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.status', props);
    return resource.getResponseField('deploymentGroupInfo.lastSuccessfulDeployment.status') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.endTime'),
        outputPath: 'deploymentGroupInfo.lastSuccessfulDeployment.endTime',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.endTime', props);
    return resource.getResponseField('deploymentGroupInfo.lastSuccessfulDeployment.endTime') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.createTime'),
        outputPath: 'deploymentGroupInfo.lastSuccessfulDeployment.createTime',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.createTime', props);
    return resource.getResponseField('deploymentGroupInfo.lastSuccessfulDeployment.createTime') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.deploymentId'),
        outputPath: 'deploymentGroupInfo.lastAttemptedDeployment.deploymentId',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.deploymentId', props);
    return resource.getResponseField('deploymentGroupInfo.lastAttemptedDeployment.deploymentId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.status'),
        outputPath: 'deploymentGroupInfo.lastAttemptedDeployment.status',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.status', props);
    return resource.getResponseField('deploymentGroupInfo.lastAttemptedDeployment.status') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.endTime'),
        outputPath: 'deploymentGroupInfo.lastAttemptedDeployment.endTime',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.endTime', props);
    return resource.getResponseField('deploymentGroupInfo.lastAttemptedDeployment.endTime') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.createTime'),
        outputPath: 'deploymentGroupInfo.lastAttemptedDeployment.createTime',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.createTime', props);
    return resource.getResponseField('deploymentGroupInfo.lastAttemptedDeployment.createTime') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get ec2TagSetList(): shapes.CodeDeployEc2TagFilter[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.ec2TagSet.ec2TagSetList'),
        outputPath: 'deploymentGroupInfo.ec2TagSet.ec2TagSetList',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.ec2TagSet.ec2TagSetList', props);
    return resource.getResponseField('deploymentGroupInfo.ec2TagSet.ec2TagSetList') as unknown as shapes.CodeDeployEc2TagFilter[][];
  }

}

export class CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentGroupInput) {
  }

  public get onPremisesTagSetList(): shapes.CodeDeployTagFilter[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentGroup.deploymentGroupInfo.onPremisesTagSet.onPremisesTagSetList'),
        outputPath: 'deploymentGroupInfo.onPremisesTagSet.onPremisesTagSetList',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentGroup.deploymentGroupInfo.onPremisesTagSet.onPremisesTagSetList', props);
    return resource.getResponseField('deploymentGroupInfo.onPremisesTagSet.onPremisesTagSetList') as unknown as shapes.CodeDeployTagFilter[][];
  }

}

export class CodeDeployResponsesFetchDeploymentInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInstanceInput) {
  }

  public get instanceSummary(): CodeDeployResponsesFetchDeploymentInstanceInstanceSummary {
    return new CodeDeployResponsesFetchDeploymentInstanceInstanceSummary(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentInstanceInstanceSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentInstanceInput) {
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentInstance.instanceSummary.deploymentId'),
        outputPath: 'instanceSummary.deploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          instanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentInstance.instanceSummary.deploymentId', props);
    return resource.getResponseField('instanceSummary.deploymentId') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentInstance.instanceSummary.instanceId'),
        outputPath: 'instanceSummary.instanceId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          instanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentInstance.instanceSummary.instanceId', props);
    return resource.getResponseField('instanceSummary.instanceId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentInstance.instanceSummary.status'),
        outputPath: 'instanceSummary.status',
        parameters: {
          deploymentId: this.__input.deploymentId,
          instanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentInstance.instanceSummary.status', props);
    return resource.getResponseField('instanceSummary.status') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentInstance.instanceSummary.lastUpdatedAt'),
        outputPath: 'instanceSummary.lastUpdatedAt',
        parameters: {
          deploymentId: this.__input.deploymentId,
          instanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentInstance.instanceSummary.lastUpdatedAt', props);
    return resource.getResponseField('instanceSummary.lastUpdatedAt') as unknown as string;
  }

  public get lifecycleEvents(): shapes.CodeDeployLifecycleEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentInstance.instanceSummary.lifecycleEvents'),
        outputPath: 'instanceSummary.lifecycleEvents',
        parameters: {
          deploymentId: this.__input.deploymentId,
          instanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentInstance.instanceSummary.lifecycleEvents', props);
    return resource.getResponseField('instanceSummary.lifecycleEvents') as unknown as shapes.CodeDeployLifecycleEvent[];
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentInstance.instanceSummary.instanceType'),
        outputPath: 'instanceSummary.instanceType',
        parameters: {
          deploymentId: this.__input.deploymentId,
          instanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentInstance.instanceSummary.instanceType', props);
    return resource.getResponseField('instanceSummary.instanceType') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentTargetInput) {
  }

  public get deploymentTarget(): CodeDeployResponsesFetchDeploymentTargetDeploymentTarget {
    return new CodeDeployResponsesFetchDeploymentTargetDeploymentTarget(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentTargetDeploymentTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentTargetInput) {
  }

  public get deploymentTargetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.deploymentTargetType'),
        outputPath: 'deploymentTarget.deploymentTargetType',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.deploymentTargetType', props);
    return resource.getResponseField('deploymentTarget.deploymentTargetType') as unknown as string;
  }

  public get instanceTarget(): CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget {
    return new CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget(this.__scope, this.__resources, this.__input);
  }

  public get lambdaTarget(): CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget {
    return new CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget(this.__scope, this.__resources, this.__input);
  }

  public get ecsTarget(): CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget {
    return new CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget(this.__scope, this.__resources, this.__input);
  }

  public get cloudFormationTarget(): CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget {
    return new CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentTargetInput) {
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.instanceTarget.deploymentId'),
        outputPath: 'deploymentTarget.instanceTarget.deploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.instanceTarget.deploymentId', props);
    return resource.getResponseField('deploymentTarget.instanceTarget.deploymentId') as unknown as string;
  }

  public get targetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.instanceTarget.targetId'),
        outputPath: 'deploymentTarget.instanceTarget.targetId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.instanceTarget.targetId', props);
    return resource.getResponseField('deploymentTarget.instanceTarget.targetId') as unknown as string;
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.instanceTarget.targetArn'),
        outputPath: 'deploymentTarget.instanceTarget.targetArn',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.instanceTarget.targetArn', props);
    return resource.getResponseField('deploymentTarget.instanceTarget.targetArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.instanceTarget.status'),
        outputPath: 'deploymentTarget.instanceTarget.status',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.instanceTarget.status', props);
    return resource.getResponseField('deploymentTarget.instanceTarget.status') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.instanceTarget.lastUpdatedAt'),
        outputPath: 'deploymentTarget.instanceTarget.lastUpdatedAt',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.instanceTarget.lastUpdatedAt', props);
    return resource.getResponseField('deploymentTarget.instanceTarget.lastUpdatedAt') as unknown as string;
  }

  public get lifecycleEvents(): shapes.CodeDeployLifecycleEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.instanceTarget.lifecycleEvents'),
        outputPath: 'deploymentTarget.instanceTarget.lifecycleEvents',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.instanceTarget.lifecycleEvents', props);
    return resource.getResponseField('deploymentTarget.instanceTarget.lifecycleEvents') as unknown as shapes.CodeDeployLifecycleEvent[];
  }

  public get instanceLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.instanceTarget.instanceLabel'),
        outputPath: 'deploymentTarget.instanceTarget.instanceLabel',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.instanceTarget.instanceLabel', props);
    return resource.getResponseField('deploymentTarget.instanceTarget.instanceLabel') as unknown as string;
  }

}

export class CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentTargetInput) {
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.deploymentId'),
        outputPath: 'deploymentTarget.lambdaTarget.deploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.deploymentId', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.deploymentId') as unknown as string;
  }

  public get targetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.targetId'),
        outputPath: 'deploymentTarget.lambdaTarget.targetId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.targetId', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.targetId') as unknown as string;
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.targetArn'),
        outputPath: 'deploymentTarget.lambdaTarget.targetArn',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.targetArn', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.targetArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.status'),
        outputPath: 'deploymentTarget.lambdaTarget.status',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.status', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.status') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.lastUpdatedAt'),
        outputPath: 'deploymentTarget.lambdaTarget.lastUpdatedAt',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lastUpdatedAt', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.lastUpdatedAt') as unknown as string;
  }

  public get lifecycleEvents(): shapes.CodeDeployLifecycleEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.lifecycleEvents'),
        outputPath: 'deploymentTarget.lambdaTarget.lifecycleEvents',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lifecycleEvents', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.lifecycleEvents') as unknown as shapes.CodeDeployLifecycleEvent[];
  }

  public get lambdaFunctionInfo(): CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo {
    return new CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentTargetInput) {
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionName'),
        outputPath: 'deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionName',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionName', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionName') as unknown as string;
  }

  public get functionAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionAlias'),
        outputPath: 'deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionAlias',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionAlias', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionAlias') as unknown as string;
  }

  public get currentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.currentVersion'),
        outputPath: 'deploymentTarget.lambdaTarget.lambdaFunctionInfo.currentVersion',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.currentVersion', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.lambdaFunctionInfo.currentVersion') as unknown as string;
  }

  public get targetVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersion'),
        outputPath: 'deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersion',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersion', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersion') as unknown as string;
  }

  public get targetVersionWeight(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersionWeight'),
        outputPath: 'deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersionWeight',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersionWeight', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersionWeight') as unknown as number;
  }

}

export class CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentTargetInput) {
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.ecsTarget.deploymentId'),
        outputPath: 'deploymentTarget.ecsTarget.deploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.ecsTarget.deploymentId', props);
    return resource.getResponseField('deploymentTarget.ecsTarget.deploymentId') as unknown as string;
  }

  public get targetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.ecsTarget.targetId'),
        outputPath: 'deploymentTarget.ecsTarget.targetId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.ecsTarget.targetId', props);
    return resource.getResponseField('deploymentTarget.ecsTarget.targetId') as unknown as string;
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.ecsTarget.targetArn'),
        outputPath: 'deploymentTarget.ecsTarget.targetArn',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.ecsTarget.targetArn', props);
    return resource.getResponseField('deploymentTarget.ecsTarget.targetArn') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.ecsTarget.lastUpdatedAt'),
        outputPath: 'deploymentTarget.ecsTarget.lastUpdatedAt',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.ecsTarget.lastUpdatedAt', props);
    return resource.getResponseField('deploymentTarget.ecsTarget.lastUpdatedAt') as unknown as string;
  }

  public get lifecycleEvents(): shapes.CodeDeployLifecycleEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.ecsTarget.lifecycleEvents'),
        outputPath: 'deploymentTarget.ecsTarget.lifecycleEvents',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.ecsTarget.lifecycleEvents', props);
    return resource.getResponseField('deploymentTarget.ecsTarget.lifecycleEvents') as unknown as shapes.CodeDeployLifecycleEvent[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.ecsTarget.status'),
        outputPath: 'deploymentTarget.ecsTarget.status',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.ecsTarget.status', props);
    return resource.getResponseField('deploymentTarget.ecsTarget.status') as unknown as string;
  }

  public get taskSetsInfo(): shapes.CodeDeployEcsTaskSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.ecsTarget.taskSetsInfo'),
        outputPath: 'deploymentTarget.ecsTarget.taskSetsInfo',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.ecsTarget.taskSetsInfo', props);
    return resource.getResponseField('deploymentTarget.ecsTarget.taskSetsInfo') as unknown as shapes.CodeDeployEcsTaskSet[];
  }

}

export class CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetDeploymentTargetInput) {
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.cloudFormationTarget.deploymentId'),
        outputPath: 'deploymentTarget.cloudFormationTarget.deploymentId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.deploymentId', props);
    return resource.getResponseField('deploymentTarget.cloudFormationTarget.deploymentId') as unknown as string;
  }

  public get targetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.cloudFormationTarget.targetId'),
        outputPath: 'deploymentTarget.cloudFormationTarget.targetId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.targetId', props);
    return resource.getResponseField('deploymentTarget.cloudFormationTarget.targetId') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.cloudFormationTarget.lastUpdatedAt'),
        outputPath: 'deploymentTarget.cloudFormationTarget.lastUpdatedAt',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.lastUpdatedAt', props);
    return resource.getResponseField('deploymentTarget.cloudFormationTarget.lastUpdatedAt') as unknown as string;
  }

  public get lifecycleEvents(): shapes.CodeDeployLifecycleEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.cloudFormationTarget.lifecycleEvents'),
        outputPath: 'deploymentTarget.cloudFormationTarget.lifecycleEvents',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.lifecycleEvents', props);
    return resource.getResponseField('deploymentTarget.cloudFormationTarget.lifecycleEvents') as unknown as shapes.CodeDeployLifecycleEvent[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.cloudFormationTarget.status'),
        outputPath: 'deploymentTarget.cloudFormationTarget.status',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.status', props);
    return resource.getResponseField('deploymentTarget.cloudFormationTarget.status') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.cloudFormationTarget.resourceType'),
        outputPath: 'deploymentTarget.cloudFormationTarget.resourceType',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.resourceType', props);
    return resource.getResponseField('deploymentTarget.cloudFormationTarget.resourceType') as unknown as string;
  }

  public get targetVersionWeight(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentTarget',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetDeploymentTarget.deploymentTarget.cloudFormationTarget.targetVersionWeight'),
        outputPath: 'deploymentTarget.cloudFormationTarget.targetVersionWeight',
        parameters: {
          deploymentId: this.__input.deploymentId,
          targetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.targetVersionWeight', props);
    return resource.getResponseField('deploymentTarget.cloudFormationTarget.targetVersionWeight') as unknown as number;
  }

}

export class CodeDeployResponsesFetchOnPremisesInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetOnPremisesInstanceInput) {
  }

  public get instanceInfo(): CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo {
    return new CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo(this.__scope, this.__resources, this.__input);
  }

}

export class CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployGetOnPremisesInstanceInput) {
  }

  public get instanceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOnPremisesInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetOnPremisesInstance.instanceInfo.instanceName'),
        outputPath: 'instanceInfo.instanceName',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOnPremisesInstance.instanceInfo.instanceName', props);
    return resource.getResponseField('instanceInfo.instanceName') as unknown as string;
  }

  public get iamSessionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOnPremisesInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetOnPremisesInstance.instanceInfo.iamSessionArn'),
        outputPath: 'instanceInfo.iamSessionArn',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOnPremisesInstance.instanceInfo.iamSessionArn', props);
    return resource.getResponseField('instanceInfo.iamSessionArn') as unknown as string;
  }

  public get iamUserArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOnPremisesInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetOnPremisesInstance.instanceInfo.iamUserArn'),
        outputPath: 'instanceInfo.iamUserArn',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOnPremisesInstance.instanceInfo.iamUserArn', props);
    return resource.getResponseField('instanceInfo.iamUserArn') as unknown as string;
  }

  public get instanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOnPremisesInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetOnPremisesInstance.instanceInfo.instanceArn'),
        outputPath: 'instanceInfo.instanceArn',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOnPremisesInstance.instanceInfo.instanceArn', props);
    return resource.getResponseField('instanceInfo.instanceArn') as unknown as string;
  }

  public get registerTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOnPremisesInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetOnPremisesInstance.instanceInfo.registerTime'),
        outputPath: 'instanceInfo.registerTime',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOnPremisesInstance.instanceInfo.registerTime', props);
    return resource.getResponseField('instanceInfo.registerTime') as unknown as string;
  }

  public get deregisterTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOnPremisesInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetOnPremisesInstance.instanceInfo.deregisterTime'),
        outputPath: 'instanceInfo.deregisterTime',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOnPremisesInstance.instanceInfo.deregisterTime', props);
    return resource.getResponseField('instanceInfo.deregisterTime') as unknown as string;
  }

  public get tags(): shapes.CodeDeployTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOnPremisesInstance',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.GetOnPremisesInstance.instanceInfo.tags'),
        outputPath: 'instanceInfo.tags',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOnPremisesInstance.instanceInfo.tags', props);
    return resource.getResponseField('instanceInfo.tags') as unknown as shapes.CodeDeployTag[];
  }

}

export class CodeDeployResponsesListApplicationRevisions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListApplicationRevisionsInput) {
  }

  public get revisions(): shapes.CodeDeployRevisionLocation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplicationRevisions',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListApplicationRevisions.revisions'),
        outputPath: 'revisions',
        parameters: {
          applicationName: this.__input.applicationName,
          sortBy: this.__input.sortBy,
          sortOrder: this.__input.sortOrder,
          s3Bucket: this.__input.s3Bucket,
          s3KeyPrefix: this.__input.s3KeyPrefix,
          deployed: this.__input.deployed,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplicationRevisions.revisions', props);
    return resource.getResponseField('revisions') as unknown as shapes.CodeDeployRevisionLocation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplicationRevisions',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListApplicationRevisions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          applicationName: this.__input.applicationName,
          sortBy: this.__input.sortBy,
          sortOrder: this.__input.sortOrder,
          s3Bucket: this.__input.s3Bucket,
          s3KeyPrefix: this.__input.s3KeyPrefix,
          deployed: this.__input.deployed,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplicationRevisions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployResponsesListApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListApplicationsInput) {
  }

  public get applications(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListApplications.applications'),
        outputPath: 'applications',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.applications', props);
    return resource.getResponseField('applications') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListApplications.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployResponsesListDeploymentConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListDeploymentConfigsInput) {
  }

  public get deploymentConfigsList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentConfigs',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeploymentConfigs.deploymentConfigsList'),
        outputPath: 'deploymentConfigsList',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentConfigs.deploymentConfigsList', props);
    return resource.getResponseField('deploymentConfigsList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentConfigs',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeploymentConfigs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentConfigs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployResponsesListDeploymentGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListDeploymentGroupsInput) {
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentGroups',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeploymentGroups.applicationName'),
        outputPath: 'applicationName',
        parameters: {
          applicationName: this.__input.applicationName,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentGroups.applicationName', props);
    return resource.getResponseField('applicationName') as unknown as string;
  }

  public get deploymentGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentGroups',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeploymentGroups.deploymentGroups'),
        outputPath: 'deploymentGroups',
        parameters: {
          applicationName: this.__input.applicationName,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentGroups.deploymentGroups', props);
    return resource.getResponseField('deploymentGroups') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentGroups',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeploymentGroups.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          applicationName: this.__input.applicationName,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployResponsesListDeploymentInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListDeploymentInstancesInput) {
  }

  public get instancesList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentInstances',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeploymentInstances.instancesList'),
        outputPath: 'instancesList',
        parameters: {
          deploymentId: this.__input.deploymentId,
          nextToken: this.__input.nextToken,
          instanceStatusFilter: this.__input.instanceStatusFilter,
          instanceTypeFilter: this.__input.instanceTypeFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentInstances.instancesList', props);
    return resource.getResponseField('instancesList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentInstances',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeploymentInstances.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          deploymentId: this.__input.deploymentId,
          nextToken: this.__input.nextToken,
          instanceStatusFilter: this.__input.instanceStatusFilter,
          instanceTypeFilter: this.__input.instanceTypeFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployResponsesListDeploymentTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListDeploymentTargetsInput) {
  }

  public get targetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentTargets',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeploymentTargets.targetIds'),
        outputPath: 'targetIds',
        parameters: {
          deploymentId: this.__input.deploymentId,
          nextToken: this.__input.nextToken,
          targetFilters: this.__input.targetFilters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentTargets.targetIds', props);
    return resource.getResponseField('targetIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentTargets',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeploymentTargets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          deploymentId: this.__input.deploymentId,
          nextToken: this.__input.nextToken,
          targetFilters: this.__input.targetFilters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentTargets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployResponsesListDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListDeploymentsInput) {
  }

  public get deployments(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeployments',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeployments.deployments'),
        outputPath: 'deployments',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
          externalId: this.__input.externalId,
          includeOnlyStatuses: this.__input.includeOnlyStatuses,
          createTimeRange: {
            start: this.__input.createTimeRange?.start,
            end: this.__input.createTimeRange?.end,
          },
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeployments.deployments', props);
    return resource.getResponseField('deployments') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeployments',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListDeployments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          applicationName: this.__input.applicationName,
          deploymentGroupName: this.__input.deploymentGroupName,
          externalId: this.__input.externalId,
          includeOnlyStatuses: this.__input.includeOnlyStatuses,
          createTimeRange: {
            start: this.__input.createTimeRange?.start,
            end: this.__input.createTimeRange?.end,
          },
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeployments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployResponsesListGitHubAccountTokenNames {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListGitHubAccountTokenNamesInput) {
  }

  public get tokenNameList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGitHubAccountTokenNames',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListGitHubAccountTokenNames.tokenNameList'),
        outputPath: 'tokenNameList',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGitHubAccountTokenNames.tokenNameList', props);
    return resource.getResponseField('tokenNameList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGitHubAccountTokenNames',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListGitHubAccountTokenNames.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGitHubAccountTokenNames.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployResponsesListOnPremisesInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListOnPremisesInstancesInput) {
  }

  public get instanceNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOnPremisesInstances',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListOnPremisesInstances.instanceNames'),
        outputPath: 'instanceNames',
        parameters: {
          registrationStatus: this.__input.registrationStatus,
          tagFilters: this.__input.tagFilters,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOnPremisesInstances.instanceNames', props);
    return resource.getResponseField('instanceNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOnPremisesInstances',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListOnPremisesInstances.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          registrationStatus: this.__input.registrationStatus,
          tagFilters: this.__input.tagFilters,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOnPremisesInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployListTagsForResourceInput) {
  }

  public get tags(): shapes.CodeDeployTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.CodeDeployTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeDeployResponsesPutLifecycleEventHookExecutionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployPutLifecycleEventHookExecutionStatusInput) {
  }

  public get lifecycleEventHookExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLifecycleEventHookExecutionStatus',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.PutLifecycleEventHookExecutionStatus.lifecycleEventHookExecutionId'),
        outputPath: 'lifecycleEventHookExecutionId',
        parameters: {
          deploymentId: this.__input.deploymentId,
          lifecycleEventHookExecutionId: this.__input.lifecycleEventHookExecutionId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLifecycleEventHookExecutionStatus.lifecycleEventHookExecutionId', props);
    return resource.getResponseField('lifecycleEventHookExecutionId') as unknown as string;
  }

}

export class CodeDeployResponsesStopDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployStopDeploymentInput) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.StopDeployment.status'),
        outputPath: 'status',
        parameters: {
          deploymentId: this.__input.deploymentId,
          autoRollbackEnabled: this.__input.autoRollbackEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.StopDeployment.statusMessage'),
        outputPath: 'statusMessage',
        parameters: {
          deploymentId: this.__input.deploymentId,
          autoRollbackEnabled: this.__input.autoRollbackEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.statusMessage', props);
    return resource.getResponseField('statusMessage') as unknown as string;
  }

}

export class CodeDeployResponsesUpdateDeploymentGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeDeployUpdateDeploymentGroupInput) {
  }

  public get hooksNotCleanedUp(): shapes.CodeDeployAutoScalingGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeploymentGroup',
        service: 'CodeDeploy',
        physicalResourceId: cr.PhysicalResourceId.of('CodeDeploy.UpdateDeploymentGroup.hooksNotCleanedUp'),
        outputPath: 'hooksNotCleanedUp',
        parameters: {
          applicationName: this.__input.applicationName,
          currentDeploymentGroupName: this.__input.currentDeploymentGroupName,
          newDeploymentGroupName: this.__input.newDeploymentGroupName,
          deploymentConfigName: this.__input.deploymentConfigName,
          ec2TagFilters: this.__input.ec2TagFilters,
          onPremisesInstanceTagFilters: this.__input.onPremisesInstanceTagFilters,
          autoScalingGroups: this.__input.autoScalingGroups,
          serviceRoleArn: this.__input.serviceRoleArn,
          triggerConfigurations: this.__input.triggerConfigurations,
          alarmConfiguration: {
            enabled: this.__input.alarmConfiguration?.enabled,
            ignorePollAlarmFailure: this.__input.alarmConfiguration?.ignorePollAlarmFailure,
            alarms: this.__input.alarmConfiguration?.alarms,
          },
          autoRollbackConfiguration: {
            enabled: this.__input.autoRollbackConfiguration?.enabled,
            events: this.__input.autoRollbackConfiguration?.events,
          },
          outdatedInstancesStrategy: this.__input.outdatedInstancesStrategy,
          deploymentStyle: {
            deploymentType: this.__input.deploymentStyle?.deploymentType,
            deploymentOption: this.__input.deploymentStyle?.deploymentOption,
          },
          blueGreenDeploymentConfiguration: {
            terminateBlueInstancesOnDeploymentSuccess: {
              action: this.__input.blueGreenDeploymentConfiguration?.terminateBlueInstancesOnDeploymentSuccess?.action,
              terminationWaitTimeInMinutes: this.__input.blueGreenDeploymentConfiguration?.terminateBlueInstancesOnDeploymentSuccess?.terminationWaitTimeInMinutes,
            },
            deploymentReadyOption: {
              actionOnTimeout: this.__input.blueGreenDeploymentConfiguration?.deploymentReadyOption?.actionOnTimeout,
              waitTimeInMinutes: this.__input.blueGreenDeploymentConfiguration?.deploymentReadyOption?.waitTimeInMinutes,
            },
            greenFleetProvisioningOption: {
              action: this.__input.blueGreenDeploymentConfiguration?.greenFleetProvisioningOption?.action,
            },
          },
          loadBalancerInfo: {
            elbInfoList: this.__input.loadBalancerInfo?.elbInfoList,
            targetGroupInfoList: this.__input.loadBalancerInfo?.targetGroupInfoList,
            targetGroupPairInfoList: this.__input.loadBalancerInfo?.targetGroupPairInfoList,
          },
          ec2TagSet: {
            ec2TagSetList: this.__input.ec2TagSet?.ec2TagSetList,
          },
          ecsServices: this.__input.ecsServices,
          onPremisesTagSet: {
            onPremisesTagSetList: this.__input.onPremisesTagSet?.onPremisesTagSetList,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeploymentGroup.hooksNotCleanedUp', props);
    return resource.getResponseField('hooksNotCleanedUp') as unknown as shapes.CodeDeployAutoScalingGroup[];
  }

}

