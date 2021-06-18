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

  public batchGetApplicationRevisions(input: shapes.CodeDeployBatchGetApplicationRevisionsInput): CodeDeployBatchGetApplicationRevisions {
    return new CodeDeployBatchGetApplicationRevisions(this, 'BatchGetApplicationRevisions', this.__resources, input);
  }

  public batchGetApplications(input: shapes.CodeDeployBatchGetApplicationsInput): CodeDeployBatchGetApplications {
    return new CodeDeployBatchGetApplications(this, 'BatchGetApplications', this.__resources, input);
  }

  public batchGetDeploymentGroups(input: shapes.CodeDeployBatchGetDeploymentGroupsInput): CodeDeployBatchGetDeploymentGroups {
    return new CodeDeployBatchGetDeploymentGroups(this, 'BatchGetDeploymentGroups', this.__resources, input);
  }

  public batchGetDeploymentInstances(input: shapes.CodeDeployBatchGetDeploymentInstancesInput): CodeDeployBatchGetDeploymentInstances {
    return new CodeDeployBatchGetDeploymentInstances(this, 'BatchGetDeploymentInstances', this.__resources, input);
  }

  public batchGetDeploymentTargets(input: shapes.CodeDeployBatchGetDeploymentTargetsInput): CodeDeployBatchGetDeploymentTargets {
    return new CodeDeployBatchGetDeploymentTargets(this, 'BatchGetDeploymentTargets', this.__resources, input);
  }

  public batchGetDeployments(input: shapes.CodeDeployBatchGetDeploymentsInput): CodeDeployBatchGetDeployments {
    return new CodeDeployBatchGetDeployments(this, 'BatchGetDeployments', this.__resources, input);
  }

  public batchGetOnPremisesInstances(input: shapes.CodeDeployBatchGetOnPremisesInstancesInput): CodeDeployBatchGetOnPremisesInstances {
    return new CodeDeployBatchGetOnPremisesInstances(this, 'BatchGetOnPremisesInstances', this.__resources, input);
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

  public createApplication(input: shapes.CodeDeployCreateApplicationInput): CodeDeployCreateApplication {
    return new CodeDeployCreateApplication(this, 'CreateApplication', this.__resources, input);
  }

  public createDeployment(input: shapes.CodeDeployCreateDeploymentInput): CodeDeployCreateDeployment {
    return new CodeDeployCreateDeployment(this, 'CreateDeployment', this.__resources, input);
  }

  public createDeploymentConfig(input: shapes.CodeDeployCreateDeploymentConfigInput): CodeDeployCreateDeploymentConfig {
    return new CodeDeployCreateDeploymentConfig(this, 'CreateDeploymentConfig', this.__resources, input);
  }

  public createDeploymentGroup(input: shapes.CodeDeployCreateDeploymentGroupInput): CodeDeployCreateDeploymentGroup {
    return new CodeDeployCreateDeploymentGroup(this, 'CreateDeploymentGroup', this.__resources, input);
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

  public deleteDeploymentGroup(input: shapes.CodeDeployDeleteDeploymentGroupInput): CodeDeployDeleteDeploymentGroup {
    return new CodeDeployDeleteDeploymentGroup(this, 'DeleteDeploymentGroup', this.__resources, input);
  }

  public deleteGitHubAccountToken(input: shapes.CodeDeployDeleteGitHubAccountTokenInput): CodeDeployDeleteGitHubAccountToken {
    return new CodeDeployDeleteGitHubAccountToken(this, 'DeleteGitHubAccountToken', this.__resources, input);
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

  public fetchApplication(input: shapes.CodeDeployGetApplicationInput): CodeDeployFetchApplication {
    return new CodeDeployFetchApplication(this, 'FetchApplication', this.__resources, input);
  }

  public fetchApplicationRevision(input: shapes.CodeDeployGetApplicationRevisionInput): CodeDeployFetchApplicationRevision {
    return new CodeDeployFetchApplicationRevision(this, 'FetchApplicationRevision', this.__resources, input);
  }

  public fetchDeployment(input: shapes.CodeDeployGetDeploymentInput): CodeDeployFetchDeployment {
    return new CodeDeployFetchDeployment(this, 'FetchDeployment', this.__resources, input);
  }

  public fetchDeploymentConfig(input: shapes.CodeDeployGetDeploymentConfigInput): CodeDeployFetchDeploymentConfig {
    return new CodeDeployFetchDeploymentConfig(this, 'FetchDeploymentConfig', this.__resources, input);
  }

  public fetchDeploymentGroup(input: shapes.CodeDeployGetDeploymentGroupInput): CodeDeployFetchDeploymentGroup {
    return new CodeDeployFetchDeploymentGroup(this, 'FetchDeploymentGroup', this.__resources, input);
  }

  public fetchDeploymentInstance(input: shapes.CodeDeployGetDeploymentInstanceInput): CodeDeployFetchDeploymentInstance {
    return new CodeDeployFetchDeploymentInstance(this, 'FetchDeploymentInstance', this.__resources, input);
  }

  public fetchDeploymentTarget(input: shapes.CodeDeployGetDeploymentTargetInput): CodeDeployFetchDeploymentTarget {
    return new CodeDeployFetchDeploymentTarget(this, 'FetchDeploymentTarget', this.__resources, input);
  }

  public fetchOnPremisesInstance(input: shapes.CodeDeployGetOnPremisesInstanceInput): CodeDeployFetchOnPremisesInstance {
    return new CodeDeployFetchOnPremisesInstance(this, 'FetchOnPremisesInstance', this.__resources, input);
  }

  public listApplicationRevisions(input: shapes.CodeDeployListApplicationRevisionsInput): CodeDeployListApplicationRevisions {
    return new CodeDeployListApplicationRevisions(this, 'ListApplicationRevisions', this.__resources, input);
  }

  public listApplications(input: shapes.CodeDeployListApplicationsInput): CodeDeployListApplications {
    return new CodeDeployListApplications(this, 'ListApplications', this.__resources, input);
  }

  public listDeploymentConfigs(input: shapes.CodeDeployListDeploymentConfigsInput): CodeDeployListDeploymentConfigs {
    return new CodeDeployListDeploymentConfigs(this, 'ListDeploymentConfigs', this.__resources, input);
  }

  public listDeploymentGroups(input: shapes.CodeDeployListDeploymentGroupsInput): CodeDeployListDeploymentGroups {
    return new CodeDeployListDeploymentGroups(this, 'ListDeploymentGroups', this.__resources, input);
  }

  public listDeploymentInstances(input: shapes.CodeDeployListDeploymentInstancesInput): CodeDeployListDeploymentInstances {
    return new CodeDeployListDeploymentInstances(this, 'ListDeploymentInstances', this.__resources, input);
  }

  public listDeploymentTargets(input: shapes.CodeDeployListDeploymentTargetsInput): CodeDeployListDeploymentTargets {
    return new CodeDeployListDeploymentTargets(this, 'ListDeploymentTargets', this.__resources, input);
  }

  public listDeployments(input: shapes.CodeDeployListDeploymentsInput): CodeDeployListDeployments {
    return new CodeDeployListDeployments(this, 'ListDeployments', this.__resources, input);
  }

  public listGitHubAccountTokenNames(input: shapes.CodeDeployListGitHubAccountTokenNamesInput): CodeDeployListGitHubAccountTokenNames {
    return new CodeDeployListGitHubAccountTokenNames(this, 'ListGitHubAccountTokenNames', this.__resources, input);
  }

  public listOnPremisesInstances(input: shapes.CodeDeployListOnPremisesInstancesInput): CodeDeployListOnPremisesInstances {
    return new CodeDeployListOnPremisesInstances(this, 'ListOnPremisesInstances', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeDeployListTagsForResourceInput): CodeDeployListTagsForResource {
    return new CodeDeployListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putLifecycleEventHookExecutionStatus(input: shapes.CodeDeployPutLifecycleEventHookExecutionStatusInput): CodeDeployPutLifecycleEventHookExecutionStatus {
    return new CodeDeployPutLifecycleEventHookExecutionStatus(this, 'PutLifecycleEventHookExecutionStatus', this.__resources, input);
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

  public stopDeployment(input: shapes.CodeDeployStopDeploymentInput): CodeDeployStopDeployment {
    return new CodeDeployStopDeployment(this, 'StopDeployment', this.__resources, input);
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

  public updateDeploymentGroup(input: shapes.CodeDeployUpdateDeploymentGroupInput): CodeDeployUpdateDeploymentGroup {
    return new CodeDeployUpdateDeploymentGroup(this, 'UpdateDeploymentGroup', this.__resources, input);
  }

}

export class CodeDeployBatchGetApplicationRevisions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployBatchGetApplicationRevisionsInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          revisions: this.input.revisions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetApplicationRevisions.applicationName', props);
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
          applicationName: this.input.applicationName,
          revisions: this.input.revisions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetApplicationRevisions.errorMessage', props);
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
          applicationName: this.input.applicationName,
          revisions: this.input.revisions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetApplicationRevisions.revisions', props);
    return resource.getResponseField('revisions') as unknown as shapes.CodeDeployRevisionInfo[];
  }

}

export class CodeDeployBatchGetApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployBatchGetApplicationsInput) {
    super(scope, id);
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
          applicationNames: this.input.applicationNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetApplications.applicationsInfo', props);
    return resource.getResponseField('applicationsInfo') as unknown as shapes.CodeDeployApplicationInfo[];
  }

}

export class CodeDeployBatchGetDeploymentGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployBatchGetDeploymentGroupsInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupNames: this.input.deploymentGroupNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetDeploymentGroups.deploymentGroupsInfo', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupNames: this.input.deploymentGroupNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetDeploymentGroups.errorMessage', props);
    return resource.getResponseField('errorMessage') as unknown as string;
  }

}

export class CodeDeployBatchGetDeploymentInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployBatchGetDeploymentInstancesInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          instanceIds: this.input.instanceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetDeploymentInstances.instancesSummary', props);
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
          deploymentId: this.input.deploymentId,
          instanceIds: this.input.instanceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetDeploymentInstances.errorMessage', props);
    return resource.getResponseField('errorMessage') as unknown as string;
  }

}

export class CodeDeployBatchGetDeploymentTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployBatchGetDeploymentTargetsInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          targetIds: this.input.targetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetDeploymentTargets.deploymentTargets', props);
    return resource.getResponseField('deploymentTargets') as unknown as shapes.CodeDeployDeploymentTarget[];
  }

}

export class CodeDeployBatchGetDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployBatchGetDeploymentsInput) {
    super(scope, id);
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
          deploymentIds: this.input.deploymentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetDeployments.deploymentsInfo', props);
    return resource.getResponseField('deploymentsInfo') as unknown as shapes.CodeDeployDeploymentInfo[];
  }

}

export class CodeDeployBatchGetOnPremisesInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployBatchGetOnPremisesInstancesInput) {
    super(scope, id);
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
          instanceNames: this.input.instanceNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetOnPremisesInstances.instanceInfos', props);
    return resource.getResponseField('instanceInfos') as unknown as shapes.CodeDeployInstanceInfo[];
  }

}

export class CodeDeployCreateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployCreateApplicationInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          computePlatform: this.input.computePlatform,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.applicationId', props);
    return resource.getResponseField('applicationId') as unknown as string;
  }

}

export class CodeDeployCreateDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployCreateDeploymentInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
          revision: {
            revisionType: this.input.revision?.revisionType,
            s3Location: {
              bucket: this.input.revision?.s3Location?.bucket,
              key: this.input.revision?.s3Location?.key,
              bundleType: this.input.revision?.s3Location?.bundleType,
              version: this.input.revision?.s3Location?.version,
              eTag: this.input.revision?.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision?.gitHubLocation?.repository,
              commitId: this.input.revision?.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision?.string?.content,
              sha256: this.input.revision?.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision?.appSpecContent?.content,
              sha256: this.input.revision?.appSpecContent?.sha256,
            },
          },
          deploymentConfigName: this.input.deploymentConfigName,
          description: this.input.description,
          ignoreApplicationStopFailures: this.input.ignoreApplicationStopFailures,
          targetInstances: {
            tagFilters: this.input.targetInstances?.tagFilters,
            autoScalingGroups: this.input.targetInstances?.autoScalingGroups,
            ec2TagSet: {
              ec2TagSetList: this.input.targetInstances?.ec2TagSet?.ec2TagSetList,
            },
          },
          autoRollbackConfiguration: {
            enabled: this.input.autoRollbackConfiguration?.enabled,
            events: this.input.autoRollbackConfiguration?.events,
          },
          updateOutdatedInstancesOnly: this.input.updateOutdatedInstancesOnly,
          fileExistsBehavior: this.input.fileExistsBehavior,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.deploymentId', props);
    return resource.getResponseField('deploymentId') as unknown as string;
  }

}

export class CodeDeployCreateDeploymentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployCreateDeploymentConfigInput) {
    super(scope, id);
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
          deploymentConfigName: this.input.deploymentConfigName,
          minimumHealthyHosts: {
            value: this.input.minimumHealthyHosts?.value,
            type: this.input.minimumHealthyHosts?.type,
          },
          trafficRoutingConfig: {
            type: this.input.trafficRoutingConfig?.type,
            timeBasedCanary: {
              canaryPercentage: this.input.trafficRoutingConfig?.timeBasedCanary?.canaryPercentage,
              canaryInterval: this.input.trafficRoutingConfig?.timeBasedCanary?.canaryInterval,
            },
            timeBasedLinear: {
              linearPercentage: this.input.trafficRoutingConfig?.timeBasedLinear?.linearPercentage,
              linearInterval: this.input.trafficRoutingConfig?.timeBasedLinear?.linearInterval,
            },
          },
          computePlatform: this.input.computePlatform,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentConfig.deploymentConfigId', props);
    return resource.getResponseField('deploymentConfigId') as unknown as string;
  }

}

export class CodeDeployCreateDeploymentGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployCreateDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
          deploymentConfigName: this.input.deploymentConfigName,
          ec2TagFilters: this.input.ec2TagFilters,
          onPremisesInstanceTagFilters: this.input.onPremisesInstanceTagFilters,
          autoScalingGroups: this.input.autoScalingGroups,
          serviceRoleArn: this.input.serviceRoleArn,
          triggerConfigurations: this.input.triggerConfigurations,
          alarmConfiguration: {
            enabled: this.input.alarmConfiguration?.enabled,
            ignorePollAlarmFailure: this.input.alarmConfiguration?.ignorePollAlarmFailure,
            alarms: this.input.alarmConfiguration?.alarms,
          },
          autoRollbackConfiguration: {
            enabled: this.input.autoRollbackConfiguration?.enabled,
            events: this.input.autoRollbackConfiguration?.events,
          },
          deploymentStyle: {
            deploymentType: this.input.deploymentStyle?.deploymentType,
            deploymentOption: this.input.deploymentStyle?.deploymentOption,
          },
          blueGreenDeploymentConfiguration: {
            terminateBlueInstancesOnDeploymentSuccess: {
              action: this.input.blueGreenDeploymentConfiguration?.terminateBlueInstancesOnDeploymentSuccess?.action,
              terminationWaitTimeInMinutes: this.input.blueGreenDeploymentConfiguration?.terminateBlueInstancesOnDeploymentSuccess?.terminationWaitTimeInMinutes,
            },
            deploymentReadyOption: {
              actionOnTimeout: this.input.blueGreenDeploymentConfiguration?.deploymentReadyOption?.actionOnTimeout,
              waitTimeInMinutes: this.input.blueGreenDeploymentConfiguration?.deploymentReadyOption?.waitTimeInMinutes,
            },
            greenFleetProvisioningOption: {
              action: this.input.blueGreenDeploymentConfiguration?.greenFleetProvisioningOption?.action,
            },
          },
          loadBalancerInfo: {
            elbInfoList: this.input.loadBalancerInfo?.elbInfoList,
            targetGroupInfoList: this.input.loadBalancerInfo?.targetGroupInfoList,
            targetGroupPairInfoList: this.input.loadBalancerInfo?.targetGroupPairInfoList,
          },
          ec2TagSet: {
            ec2TagSetList: this.input.ec2TagSet?.ec2TagSetList,
          },
          ecsServices: this.input.ecsServices,
          onPremisesTagSet: {
            onPremisesTagSetList: this.input.onPremisesTagSet?.onPremisesTagSetList,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentGroup.deploymentGroupId', props);
    return resource.getResponseField('deploymentGroupId') as unknown as string;
  }

}

export class CodeDeployDeleteDeploymentGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployDeleteDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDeploymentGroup.hooksNotCleanedUp', props);
    return resource.getResponseField('hooksNotCleanedUp') as unknown as shapes.CodeDeployAutoScalingGroup[];
  }

}

export class CodeDeployDeleteGitHubAccountToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployDeleteGitHubAccountTokenInput) {
    super(scope, id);
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
          tokenName: this.input.tokenName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGitHubAccountToken.tokenName', props);
    return resource.getResponseField('tokenName') as unknown as string;
  }

}

export class CodeDeployFetchApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetApplicationInput) {
    super(scope, id);
  }

  public get application(): CodeDeployFetchApplicationApplication {
    return new CodeDeployFetchApplicationApplication(this, 'Application', this.__resources, this.input);
  }

}

export class CodeDeployFetchApplicationApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetApplicationInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.application.applicationId', props);
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
          applicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.application.applicationName', props);
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
          applicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.application.createTime', props);
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
          applicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.application.linkedToGitHub', props);
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
          applicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.application.gitHubAccountName', props);
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
          applicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.application.computePlatform', props);
    return resource.getResponseField('application.computePlatform') as unknown as string;
  }

}

export class CodeDeployFetchApplicationRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetApplicationRevisionInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.applicationName', props);
    return resource.getResponseField('applicationName') as unknown as string;
  }

  public get revision(): CodeDeployFetchApplicationRevisionRevision {
    return new CodeDeployFetchApplicationRevisionRevision(this, 'Revision', this.__resources, this.input);
  }

  public get revisionInfo(): CodeDeployFetchApplicationRevisionRevisionInfo {
    return new CodeDeployFetchApplicationRevisionRevisionInfo(this, 'RevisionInfo', this.__resources, this.input);
  }

}

export class CodeDeployFetchApplicationRevisionRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetApplicationRevisionInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.revisionType', props);
    return resource.getResponseField('revision.revisionType') as unknown as string;
  }

  public get s3Location(): CodeDeployFetchApplicationRevisionRevisionS3Location {
    return new CodeDeployFetchApplicationRevisionRevisionS3Location(this, 'S3Location', this.__resources, this.input);
  }

  public get gitHubLocation(): CodeDeployFetchApplicationRevisionRevisionGitHubLocation {
    return new CodeDeployFetchApplicationRevisionRevisionGitHubLocation(this, 'GitHubLocation', this.__resources, this.input);
  }

  public get string(): CodeDeployFetchApplicationRevisionRevisionString {
    return new CodeDeployFetchApplicationRevisionRevisionString(this, 'String', this.__resources, this.input);
  }

  public get appSpecContent(): CodeDeployFetchApplicationRevisionRevisionAppSpecContent {
    return new CodeDeployFetchApplicationRevisionRevisionAppSpecContent(this, 'AppSpecContent', this.__resources, this.input);
  }

}

export class CodeDeployFetchApplicationRevisionRevisionS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetApplicationRevisionInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.s3Location.bucket', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.s3Location.key', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.s3Location.bundleType', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.s3Location.version', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.s3Location.eTag', props);
    return resource.getResponseField('revision.s3Location.eTag') as unknown as string;
  }

}

export class CodeDeployFetchApplicationRevisionRevisionGitHubLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetApplicationRevisionInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.gitHubLocation.repository', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.gitHubLocation.commitId', props);
    return resource.getResponseField('revision.gitHubLocation.commitId') as unknown as string;
  }

}

export class CodeDeployFetchApplicationRevisionRevisionString extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetApplicationRevisionInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.string.content', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.string.sha256', props);
    return resource.getResponseField('revision.string.sha256') as unknown as string;
  }

}

export class CodeDeployFetchApplicationRevisionRevisionAppSpecContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetApplicationRevisionInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.appSpecContent.content', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revision.appSpecContent.sha256', props);
    return resource.getResponseField('revision.appSpecContent.sha256') as unknown as string;
  }

}

export class CodeDeployFetchApplicationRevisionRevisionInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetApplicationRevisionInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revisionInfo.description', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revisionInfo.deploymentGroups', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revisionInfo.firstUsedTime', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revisionInfo.lastUsedTime', props);
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
          applicationName: this.input.applicationName,
          revision: {
            revisionType: this.input.revision.revisionType,
            s3Location: {
              bucket: this.input.revision.s3Location?.bucket,
              key: this.input.revision.s3Location?.key,
              bundleType: this.input.revision.s3Location?.bundleType,
              version: this.input.revision.s3Location?.version,
              eTag: this.input.revision.s3Location?.eTag,
            },
            gitHubLocation: {
              repository: this.input.revision.gitHubLocation?.repository,
              commitId: this.input.revision.gitHubLocation?.commitId,
            },
            string: {
              content: this.input.revision.string?.content,
              sha256: this.input.revision.string?.sha256,
            },
            appSpecContent: {
              content: this.input.revision.appSpecContent?.content,
              sha256: this.input.revision.appSpecContent?.sha256,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplicationRevision.revisionInfo.registerTime', props);
    return resource.getResponseField('revisionInfo.registerTime') as unknown as string;
  }

}

export class CodeDeployFetchDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
  }

  public get deploymentInfo(): CodeDeployFetchDeploymentDeploymentInfo {
    return new CodeDeployFetchDeploymentDeploymentInfo(this, 'DeploymentInfo', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentDeploymentInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.applicationName', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentGroupName', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentConfigName', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentId', props);
    return resource.getResponseField('deploymentInfo.deploymentId') as unknown as string;
  }

  public get previousRevision(): CodeDeployFetchDeploymentDeploymentInfoPreviousRevision {
    return new CodeDeployFetchDeploymentDeploymentInfoPreviousRevision(this, 'PreviousRevision', this.__resources, this.input);
  }

  public get revision(): CodeDeployFetchDeploymentDeploymentInfoRevision {
    return new CodeDeployFetchDeploymentDeploymentInfoRevision(this, 'Revision', this.__resources, this.input);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.status', props);
    return resource.getResponseField('deploymentInfo.status') as unknown as string;
  }

  public get errorInformation(): CodeDeployFetchDeploymentDeploymentInfoErrorInformation {
    return new CodeDeployFetchDeploymentDeploymentInfoErrorInformation(this, 'ErrorInformation', this.__resources, this.input);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.createTime', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.startTime', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.completeTime', props);
    return resource.getResponseField('deploymentInfo.completeTime') as unknown as string;
  }

  public get deploymentOverview(): CodeDeployFetchDeploymentDeploymentInfoDeploymentOverview {
    return new CodeDeployFetchDeploymentDeploymentInfoDeploymentOverview(this, 'DeploymentOverview', this.__resources, this.input);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.description', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.creator', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.ignoreApplicationStopFailures', props);
    return resource.getResponseField('deploymentInfo.ignoreApplicationStopFailures') as unknown as boolean;
  }

  public get autoRollbackConfiguration(): CodeDeployFetchDeploymentDeploymentInfoAutoRollbackConfiguration {
    return new CodeDeployFetchDeploymentDeploymentInfoAutoRollbackConfiguration(this, 'AutoRollbackConfiguration', this.__resources, this.input);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.updateOutdatedInstancesOnly', props);
    return resource.getResponseField('deploymentInfo.updateOutdatedInstancesOnly') as unknown as boolean;
  }

  public get rollbackInfo(): CodeDeployFetchDeploymentDeploymentInfoRollbackInfo {
    return new CodeDeployFetchDeploymentDeploymentInfoRollbackInfo(this, 'RollbackInfo', this.__resources, this.input);
  }

  public get deploymentStyle(): CodeDeployFetchDeploymentDeploymentInfoDeploymentStyle {
    return new CodeDeployFetchDeploymentDeploymentInfoDeploymentStyle(this, 'DeploymentStyle', this.__resources, this.input);
  }

  public get targetInstances(): CodeDeployFetchDeploymentDeploymentInfoTargetInstances {
    return new CodeDeployFetchDeploymentDeploymentInfoTargetInstances(this, 'TargetInstances', this.__resources, this.input);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.instanceTerminationWaitTimeStarted', props);
    return resource.getResponseField('deploymentInfo.instanceTerminationWaitTimeStarted') as unknown as boolean;
  }

  public get blueGreenDeploymentConfiguration(): CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration {
    return new CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration(this, 'BlueGreenDeploymentConfiguration', this.__resources, this.input);
  }

  public get loadBalancerInfo(): CodeDeployFetchDeploymentDeploymentInfoLoadBalancerInfo {
    return new CodeDeployFetchDeploymentDeploymentInfoLoadBalancerInfo(this, 'LoadBalancerInfo', this.__resources, this.input);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.additionalDeploymentStatusInfo', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.fileExistsBehavior', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentStatusMessages', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.computePlatform', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.externalId', props);
    return resource.getResponseField('deploymentInfo.externalId') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoPreviousRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.revisionType', props);
    return resource.getResponseField('deploymentInfo.previousRevision.revisionType') as unknown as string;
  }

  public get s3Location(): CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionS3Location {
    return new CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionS3Location(this, 'S3Location', this.__resources, this.input);
  }

  public get gitHubLocation(): CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation {
    return new CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation(this, 'GitHubLocation', this.__resources, this.input);
  }

  public get string(): CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionString {
    return new CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionString(this, 'String', this.__resources, this.input);
  }

  public get appSpecContent(): CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent {
    return new CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent(this, 'AppSpecContent', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.s3Location.bucket', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.s3Location.key', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.s3Location.bundleType', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.s3Location.version', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.s3Location.eTag', props);
    return resource.getResponseField('deploymentInfo.previousRevision.s3Location.eTag') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.gitHubLocation.repository', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.gitHubLocation.commitId', props);
    return resource.getResponseField('deploymentInfo.previousRevision.gitHubLocation.commitId') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionString extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.string.content', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.string.sha256', props);
    return resource.getResponseField('deploymentInfo.previousRevision.string.sha256') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.appSpecContent.content', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.previousRevision.appSpecContent.sha256', props);
    return resource.getResponseField('deploymentInfo.previousRevision.appSpecContent.sha256') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.revisionType', props);
    return resource.getResponseField('deploymentInfo.revision.revisionType') as unknown as string;
  }

  public get s3Location(): CodeDeployFetchDeploymentDeploymentInfoRevisionS3Location {
    return new CodeDeployFetchDeploymentDeploymentInfoRevisionS3Location(this, 'S3Location', this.__resources, this.input);
  }

  public get gitHubLocation(): CodeDeployFetchDeploymentDeploymentInfoRevisionGitHubLocation {
    return new CodeDeployFetchDeploymentDeploymentInfoRevisionGitHubLocation(this, 'GitHubLocation', this.__resources, this.input);
  }

  public get string(): CodeDeployFetchDeploymentDeploymentInfoRevisionString {
    return new CodeDeployFetchDeploymentDeploymentInfoRevisionString(this, 'String', this.__resources, this.input);
  }

  public get appSpecContent(): CodeDeployFetchDeploymentDeploymentInfoRevisionAppSpecContent {
    return new CodeDeployFetchDeploymentDeploymentInfoRevisionAppSpecContent(this, 'AppSpecContent', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoRevisionS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.s3Location.bucket', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.s3Location.key', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.s3Location.bundleType', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.s3Location.version', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.s3Location.eTag', props);
    return resource.getResponseField('deploymentInfo.revision.s3Location.eTag') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoRevisionGitHubLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.gitHubLocation.repository', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.gitHubLocation.commitId', props);
    return resource.getResponseField('deploymentInfo.revision.gitHubLocation.commitId') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoRevisionString extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.string.content', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.string.sha256', props);
    return resource.getResponseField('deploymentInfo.revision.string.sha256') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoRevisionAppSpecContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.appSpecContent.content', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.revision.appSpecContent.sha256', props);
    return resource.getResponseField('deploymentInfo.revision.appSpecContent.sha256') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoErrorInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.errorInformation.code', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.errorInformation.message', props);
    return resource.getResponseField('deploymentInfo.errorInformation.message') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoDeploymentOverview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentOverview.Pending', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentOverview.InProgress', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentOverview.Succeeded', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentOverview.Failed', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentOverview.Skipped', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentOverview.Ready', props);
    return resource.getResponseField('deploymentInfo.deploymentOverview.Ready') as unknown as number;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoAutoRollbackConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.autoRollbackConfiguration.enabled', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.autoRollbackConfiguration.events', props);
    return resource.getResponseField('deploymentInfo.autoRollbackConfiguration.events') as unknown as string[];
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoRollbackInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.rollbackInfo.rollbackDeploymentId', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.rollbackInfo.rollbackTriggeringDeploymentId', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.rollbackInfo.rollbackMessage', props);
    return resource.getResponseField('deploymentInfo.rollbackInfo.rollbackMessage') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoDeploymentStyle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentStyle.deploymentType', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.deploymentStyle.deploymentOption', props);
    return resource.getResponseField('deploymentInfo.deploymentStyle.deploymentOption') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoTargetInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.targetInstances.tagFilters', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.targetInstances.autoScalingGroups', props);
    return resource.getResponseField('deploymentInfo.targetInstances.autoScalingGroups') as unknown as string[];
  }

  public get ec2TagSet(): CodeDeployFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet {
    return new CodeDeployFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet(this, 'Ec2TagSet', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.targetInstances.ec2TagSet.ec2TagSetList', props);
    return resource.getResponseField('deploymentInfo.targetInstances.ec2TagSet.ec2TagSetList') as unknown as shapes.CodeDeployEc2TagFilter[][];
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
  }

  public get terminateBlueInstancesOnDeploymentSuccess(): CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {
    return new CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess(this, 'TerminateBlueInstancesOnDeploymentSuccess', this.__resources, this.input);
  }

  public get deploymentReadyOption(): CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption {
    return new CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption(this, 'DeploymentReadyOption', this.__resources, this.input);
  }

  public get greenFleetProvisioningOption(): CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {
    return new CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption(this, 'GreenFleetProvisioningOption', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes', props);
    return resource.getResponseField('deploymentInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes') as unknown as number;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes', props);
    return resource.getResponseField('deploymentInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes') as unknown as number;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action', props);
    return resource.getResponseField('deploymentInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentDeploymentInfoLoadBalancerInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.loadBalancerInfo.elbInfoList', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.loadBalancerInfo.targetGroupInfoList', props);
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
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.deploymentInfo.loadBalancerInfo.targetGroupPairInfoList', props);
    return resource.getResponseField('deploymentInfo.loadBalancerInfo.targetGroupPairInfoList') as unknown as shapes.CodeDeployTargetGroupPairInfo[];
  }

}

export class CodeDeployFetchDeploymentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentConfigInput) {
    super(scope, id);
  }

  public get deploymentConfigInfo(): CodeDeployFetchDeploymentConfigDeploymentConfigInfo {
    return new CodeDeployFetchDeploymentConfigDeploymentConfigInfo(this, 'DeploymentConfigInfo', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentConfigDeploymentConfigInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentConfigInput) {
    super(scope, id);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.deploymentConfigId', props);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.deploymentConfigName', props);
    return resource.getResponseField('deploymentConfigInfo.deploymentConfigName') as unknown as string;
  }

  public get minimumHealthyHosts(): CodeDeployFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts {
    return new CodeDeployFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts(this, 'MinimumHealthyHosts', this.__resources, this.input);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.createTime', props);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.computePlatform', props);
    return resource.getResponseField('deploymentConfigInfo.computePlatform') as unknown as string;
  }

  public get trafficRoutingConfig(): CodeDeployFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig {
    return new CodeDeployFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig(this, 'TrafficRoutingConfig', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentConfigInput) {
    super(scope, id);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.minimumHealthyHosts.value', props);
    return resource.getResponseField('deploymentConfigInfo.minimumHealthyHosts.value') as unknown as number;
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.minimumHealthyHosts.type', props);
    return resource.getResponseField('deploymentConfigInfo.minimumHealthyHosts.type') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentConfigInput) {
    super(scope, id);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.type', props);
    return resource.getResponseField('deploymentConfigInfo.trafficRoutingConfig.type') as unknown as string;
  }

  public get timeBasedCanary(): CodeDeployFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary {
    return new CodeDeployFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary(this, 'TimeBasedCanary', this.__resources, this.input);
  }

  public get timeBasedLinear(): CodeDeployFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear {
    return new CodeDeployFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear(this, 'TimeBasedLinear', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentConfigInput) {
    super(scope, id);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryPercentage', props);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryInterval', props);
    return resource.getResponseField('deploymentConfigInfo.trafficRoutingConfig.timeBasedCanary.canaryInterval') as unknown as number;
  }

}

export class CodeDeployFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentConfigInput) {
    super(scope, id);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearPercentage', props);
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
          deploymentConfigName: this.input.deploymentConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentConfig.deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearInterval', props);
    return resource.getResponseField('deploymentConfigInfo.trafficRoutingConfig.timeBasedLinear.linearInterval') as unknown as number;
  }

}

export class CodeDeployFetchDeploymentGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
  }

  public get deploymentGroupInfo(): CodeDeployFetchDeploymentGroupDeploymentGroupInfo {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfo(this, 'DeploymentGroupInfo', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.applicationName', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.deploymentGroupId', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.deploymentGroupName', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.deploymentConfigName', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.ec2TagFilters', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.onPremisesInstanceTagFilters', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.autoScalingGroups', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.serviceRoleArn', props);
    return resource.getResponseField('deploymentGroupInfo.serviceRoleArn') as unknown as string;
  }

  public get targetRevision(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevision {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevision(this, 'TargetRevision', this.__resources, this.input);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.triggerConfigurations', props);
    return resource.getResponseField('deploymentGroupInfo.triggerConfigurations') as unknown as shapes.CodeDeployTriggerConfig[];
  }

  public get alarmConfiguration(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration(this, 'AlarmConfiguration', this.__resources, this.input);
  }

  public get autoRollbackConfiguration(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration(this, 'AutoRollbackConfiguration', this.__resources, this.input);
  }

  public get deploymentStyle(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle(this, 'DeploymentStyle', this.__resources, this.input);
  }

  public get blueGreenDeploymentConfiguration(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration(this, 'BlueGreenDeploymentConfiguration', this.__resources, this.input);
  }

  public get loadBalancerInfo(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo(this, 'LoadBalancerInfo', this.__resources, this.input);
  }

  public get lastSuccessfulDeployment(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment(this, 'LastSuccessfulDeployment', this.__resources, this.input);
  }

  public get lastAttemptedDeployment(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment(this, 'LastAttemptedDeployment', this.__resources, this.input);
  }

  public get ec2TagSet(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoEc2TagSet {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoEc2TagSet(this, 'Ec2TagSet', this.__resources, this.input);
  }

  public get onPremisesTagSet(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet(this, 'OnPremisesTagSet', this.__resources, this.input);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.computePlatform', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.ecsServices', props);
    return resource.getResponseField('deploymentGroupInfo.ecsServices') as unknown as shapes.CodeDeployEcsService[];
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.revisionType', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.revisionType') as unknown as string;
  }

  public get s3Location(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location(this, 'S3Location', this.__resources, this.input);
  }

  public get gitHubLocation(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation(this, 'GitHubLocation', this.__resources, this.input);
  }

  public get string(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString(this, 'String', this.__resources, this.input);
  }

  public get appSpecContent(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent(this, 'AppSpecContent', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.bucket', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.key', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.bundleType', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.version', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.s3Location.eTag', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.s3Location.eTag') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.gitHubLocation.repository', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.gitHubLocation.commitId', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.gitHubLocation.commitId') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.string.content', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.string.sha256', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.string.sha256') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.appSpecContent.content', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.targetRevision.appSpecContent.sha256', props);
    return resource.getResponseField('deploymentGroupInfo.targetRevision.appSpecContent.sha256') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.alarmConfiguration.enabled', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.alarmConfiguration.ignorePollAlarmFailure', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.alarmConfiguration.alarms', props);
    return resource.getResponseField('deploymentGroupInfo.alarmConfiguration.alarms') as unknown as shapes.CodeDeployAlarm[];
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.autoRollbackConfiguration.enabled', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.autoRollbackConfiguration.events', props);
    return resource.getResponseField('deploymentGroupInfo.autoRollbackConfiguration.events') as unknown as string[];
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.deploymentStyle.deploymentType', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.deploymentStyle.deploymentOption', props);
    return resource.getResponseField('deploymentGroupInfo.deploymentStyle.deploymentOption') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
  }

  public get terminateBlueInstancesOnDeploymentSuccess(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess(this, 'TerminateBlueInstancesOnDeploymentSuccess', this.__resources, this.input);
  }

  public get deploymentReadyOption(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption(this, 'DeploymentReadyOption', this.__resources, this.input);
  }

  public get greenFleetProvisioningOption(): CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {
    return new CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption(this, 'GreenFleetProvisioningOption', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.action', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes', props);
    return resource.getResponseField('deploymentGroupInfo.blueGreenDeploymentConfiguration.terminateBlueInstancesOnDeploymentSuccess.terminationWaitTimeInMinutes') as unknown as number;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.actionOnTimeout', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes', props);
    return resource.getResponseField('deploymentGroupInfo.blueGreenDeploymentConfiguration.deploymentReadyOption.waitTimeInMinutes') as unknown as number;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action', props);
    return resource.getResponseField('deploymentGroupInfo.blueGreenDeploymentConfiguration.greenFleetProvisioningOption.action') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.loadBalancerInfo.elbInfoList', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.loadBalancerInfo.targetGroupInfoList', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.loadBalancerInfo.targetGroupPairInfoList', props);
    return resource.getResponseField('deploymentGroupInfo.loadBalancerInfo.targetGroupPairInfoList') as unknown as shapes.CodeDeployTargetGroupPairInfo[];
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.deploymentId', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.status', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.endTime', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.lastSuccessfulDeployment.createTime', props);
    return resource.getResponseField('deploymentGroupInfo.lastSuccessfulDeployment.createTime') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.deploymentId', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.status', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.endTime', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.lastAttemptedDeployment.createTime', props);
    return resource.getResponseField('deploymentGroupInfo.lastAttemptedDeployment.createTime') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoEc2TagSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.ec2TagSet.ec2TagSetList', props);
    return resource.getResponseField('deploymentGroupInfo.ec2TagSet.ec2TagSetList') as unknown as shapes.CodeDeployEc2TagFilter[][];
  }

}

export class CodeDeployFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentGroup.deploymentGroupInfo.onPremisesTagSet.onPremisesTagSetList', props);
    return resource.getResponseField('deploymentGroupInfo.onPremisesTagSet.onPremisesTagSetList') as unknown as shapes.CodeDeployTagFilter[][];
  }

}

export class CodeDeployFetchDeploymentInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInstanceInput) {
    super(scope, id);
  }

  public get instanceSummary(): CodeDeployFetchDeploymentInstanceInstanceSummary {
    return new CodeDeployFetchDeploymentInstanceInstanceSummary(this, 'InstanceSummary', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentInstanceInstanceSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentInstanceInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          instanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentInstance.instanceSummary.deploymentId', props);
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
          deploymentId: this.input.deploymentId,
          instanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentInstance.instanceSummary.instanceId', props);
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
          deploymentId: this.input.deploymentId,
          instanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentInstance.instanceSummary.status', props);
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
          deploymentId: this.input.deploymentId,
          instanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentInstance.instanceSummary.lastUpdatedAt', props);
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
          deploymentId: this.input.deploymentId,
          instanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentInstance.instanceSummary.lifecycleEvents', props);
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
          deploymentId: this.input.deploymentId,
          instanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentInstance.instanceSummary.instanceType', props);
    return resource.getResponseField('instanceSummary.instanceType') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentTargetInput) {
    super(scope, id);
  }

  public get deploymentTarget(): CodeDeployFetchDeploymentTargetDeploymentTarget {
    return new CodeDeployFetchDeploymentTargetDeploymentTarget(this, 'DeploymentTarget', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentTargetDeploymentTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentTargetInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.deploymentTargetType', props);
    return resource.getResponseField('deploymentTarget.deploymentTargetType') as unknown as string;
  }

  public get instanceTarget(): CodeDeployFetchDeploymentTargetDeploymentTargetInstanceTarget {
    return new CodeDeployFetchDeploymentTargetDeploymentTargetInstanceTarget(this, 'InstanceTarget', this.__resources, this.input);
  }

  public get lambdaTarget(): CodeDeployFetchDeploymentTargetDeploymentTargetLambdaTarget {
    return new CodeDeployFetchDeploymentTargetDeploymentTargetLambdaTarget(this, 'LambdaTarget', this.__resources, this.input);
  }

  public get ecsTarget(): CodeDeployFetchDeploymentTargetDeploymentTargetEcsTarget {
    return new CodeDeployFetchDeploymentTargetDeploymentTargetEcsTarget(this, 'EcsTarget', this.__resources, this.input);
  }

  public get cloudFormationTarget(): CodeDeployFetchDeploymentTargetDeploymentTargetCloudFormationTarget {
    return new CodeDeployFetchDeploymentTargetDeploymentTargetCloudFormationTarget(this, 'CloudFormationTarget', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentTargetDeploymentTargetInstanceTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentTargetInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.instanceTarget.deploymentId', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.instanceTarget.targetId', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.instanceTarget.targetArn', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.instanceTarget.status', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.instanceTarget.lastUpdatedAt', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.instanceTarget.lifecycleEvents', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.instanceTarget.instanceLabel', props);
    return resource.getResponseField('deploymentTarget.instanceTarget.instanceLabel') as unknown as string;
  }

}

export class CodeDeployFetchDeploymentTargetDeploymentTargetLambdaTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentTargetInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.deploymentId', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.targetId', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.targetArn', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.status', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lastUpdatedAt', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lifecycleEvents', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.lifecycleEvents') as unknown as shapes.CodeDeployLifecycleEvent[];
  }

  public get lambdaFunctionInfo(): CodeDeployFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo {
    return new CodeDeployFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo(this, 'LambdaFunctionInfo', this.__resources, this.input);
  }

}

export class CodeDeployFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentTargetInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionName', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.functionAlias', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.currentVersion', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersion', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersionWeight', props);
    return resource.getResponseField('deploymentTarget.lambdaTarget.lambdaFunctionInfo.targetVersionWeight') as unknown as number;
  }

}

export class CodeDeployFetchDeploymentTargetDeploymentTargetEcsTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentTargetInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.ecsTarget.deploymentId', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.ecsTarget.targetId', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.ecsTarget.targetArn', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.ecsTarget.lastUpdatedAt', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.ecsTarget.lifecycleEvents', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.ecsTarget.status', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.ecsTarget.taskSetsInfo', props);
    return resource.getResponseField('deploymentTarget.ecsTarget.taskSetsInfo') as unknown as shapes.CodeDeployEcsTaskSet[];
  }

}

export class CodeDeployFetchDeploymentTargetDeploymentTargetCloudFormationTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetDeploymentTargetInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.deploymentId', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.targetId', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.lastUpdatedAt', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.lifecycleEvents', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.status', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.resourceType', props);
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
          deploymentId: this.input.deploymentId,
          targetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentTarget.deploymentTarget.cloudFormationTarget.targetVersionWeight', props);
    return resource.getResponseField('deploymentTarget.cloudFormationTarget.targetVersionWeight') as unknown as number;
  }

}

export class CodeDeployFetchOnPremisesInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetOnPremisesInstanceInput) {
    super(scope, id);
  }

  public get instanceInfo(): CodeDeployFetchOnPremisesInstanceInstanceInfo {
    return new CodeDeployFetchOnPremisesInstanceInstanceInfo(this, 'InstanceInfo', this.__resources, this.input);
  }

}

export class CodeDeployFetchOnPremisesInstanceInstanceInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployGetOnPremisesInstanceInput) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOnPremisesInstance.instanceInfo.instanceName', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOnPremisesInstance.instanceInfo.iamSessionArn', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOnPremisesInstance.instanceInfo.iamUserArn', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOnPremisesInstance.instanceInfo.instanceArn', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOnPremisesInstance.instanceInfo.registerTime', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOnPremisesInstance.instanceInfo.deregisterTime', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOnPremisesInstance.instanceInfo.tags', props);
    return resource.getResponseField('instanceInfo.tags') as unknown as shapes.CodeDeployTag[];
  }

}

export class CodeDeployListApplicationRevisions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListApplicationRevisionsInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          sortBy: this.input.sortBy,
          sortOrder: this.input.sortOrder,
          s3Bucket: this.input.s3Bucket,
          s3KeyPrefix: this.input.s3KeyPrefix,
          deployed: this.input.deployed,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplicationRevisions.revisions', props);
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
          applicationName: this.input.applicationName,
          sortBy: this.input.sortBy,
          sortOrder: this.input.sortOrder,
          s3Bucket: this.input.s3Bucket,
          s3KeyPrefix: this.input.s3KeyPrefix,
          deployed: this.input.deployed,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplicationRevisions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployListApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListApplicationsInput) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.applications', props);
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
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployListDeploymentConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListDeploymentConfigsInput) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentConfigs.deploymentConfigsList', props);
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
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentConfigs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployListDeploymentGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListDeploymentGroupsInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentGroups.applicationName', props);
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
          applicationName: this.input.applicationName,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentGroups.deploymentGroups', props);
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
          applicationName: this.input.applicationName,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployListDeploymentInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListDeploymentInstancesInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          nextToken: this.input.nextToken,
          instanceStatusFilter: this.input.instanceStatusFilter,
          instanceTypeFilter: this.input.instanceTypeFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentInstances.instancesList', props);
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
          deploymentId: this.input.deploymentId,
          nextToken: this.input.nextToken,
          instanceStatusFilter: this.input.instanceStatusFilter,
          instanceTypeFilter: this.input.instanceTypeFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployListDeploymentTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListDeploymentTargetsInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          nextToken: this.input.nextToken,
          targetFilters: this.input.targetFilters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentTargets.targetIds', props);
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
          deploymentId: this.input.deploymentId,
          nextToken: this.input.nextToken,
          targetFilters: this.input.targetFilters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentTargets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployListDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListDeploymentsInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
          externalId: this.input.externalId,
          includeOnlyStatuses: this.input.includeOnlyStatuses,
          createTimeRange: {
            start: this.input.createTimeRange?.start,
            end: this.input.createTimeRange?.end,
          },
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeployments.deployments', props);
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
          applicationName: this.input.applicationName,
          deploymentGroupName: this.input.deploymentGroupName,
          externalId: this.input.externalId,
          includeOnlyStatuses: this.input.includeOnlyStatuses,
          createTimeRange: {
            start: this.input.createTimeRange?.start,
            end: this.input.createTimeRange?.end,
          },
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeployments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployListGitHubAccountTokenNames extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListGitHubAccountTokenNamesInput) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGitHubAccountTokenNames.tokenNameList', props);
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
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGitHubAccountTokenNames.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployListOnPremisesInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListOnPremisesInstancesInput) {
    super(scope, id);
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
          registrationStatus: this.input.registrationStatus,
          tagFilters: this.input.tagFilters,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOnPremisesInstances.instanceNames', props);
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
          registrationStatus: this.input.registrationStatus,
          tagFilters: this.input.tagFilters,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOnPremisesInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeDeployListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployListTagsForResourceInput) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeDeployPutLifecycleEventHookExecutionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployPutLifecycleEventHookExecutionStatusInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          lifecycleEventHookExecutionId: this.input.lifecycleEventHookExecutionId,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLifecycleEventHookExecutionStatus.lifecycleEventHookExecutionId', props);
    return resource.getResponseField('lifecycleEventHookExecutionId') as unknown as string;
  }

}

export class CodeDeployStopDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployStopDeploymentInput) {
    super(scope, id);
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
          deploymentId: this.input.deploymentId,
          autoRollbackEnabled: this.input.autoRollbackEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.status', props);
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
          deploymentId: this.input.deploymentId,
          autoRollbackEnabled: this.input.autoRollbackEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.statusMessage', props);
    return resource.getResponseField('statusMessage') as unknown as string;
  }

}

export class CodeDeployUpdateDeploymentGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeDeployUpdateDeploymentGroupInput) {
    super(scope, id);
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
          applicationName: this.input.applicationName,
          currentDeploymentGroupName: this.input.currentDeploymentGroupName,
          newDeploymentGroupName: this.input.newDeploymentGroupName,
          deploymentConfigName: this.input.deploymentConfigName,
          ec2TagFilters: this.input.ec2TagFilters,
          onPremisesInstanceTagFilters: this.input.onPremisesInstanceTagFilters,
          autoScalingGroups: this.input.autoScalingGroups,
          serviceRoleArn: this.input.serviceRoleArn,
          triggerConfigurations: this.input.triggerConfigurations,
          alarmConfiguration: {
            enabled: this.input.alarmConfiguration?.enabled,
            ignorePollAlarmFailure: this.input.alarmConfiguration?.ignorePollAlarmFailure,
            alarms: this.input.alarmConfiguration?.alarms,
          },
          autoRollbackConfiguration: {
            enabled: this.input.autoRollbackConfiguration?.enabled,
            events: this.input.autoRollbackConfiguration?.events,
          },
          deploymentStyle: {
            deploymentType: this.input.deploymentStyle?.deploymentType,
            deploymentOption: this.input.deploymentStyle?.deploymentOption,
          },
          blueGreenDeploymentConfiguration: {
            terminateBlueInstancesOnDeploymentSuccess: {
              action: this.input.blueGreenDeploymentConfiguration?.terminateBlueInstancesOnDeploymentSuccess?.action,
              terminationWaitTimeInMinutes: this.input.blueGreenDeploymentConfiguration?.terminateBlueInstancesOnDeploymentSuccess?.terminationWaitTimeInMinutes,
            },
            deploymentReadyOption: {
              actionOnTimeout: this.input.blueGreenDeploymentConfiguration?.deploymentReadyOption?.actionOnTimeout,
              waitTimeInMinutes: this.input.blueGreenDeploymentConfiguration?.deploymentReadyOption?.waitTimeInMinutes,
            },
            greenFleetProvisioningOption: {
              action: this.input.blueGreenDeploymentConfiguration?.greenFleetProvisioningOption?.action,
            },
          },
          loadBalancerInfo: {
            elbInfoList: this.input.loadBalancerInfo?.elbInfoList,
            targetGroupInfoList: this.input.loadBalancerInfo?.targetGroupInfoList,
            targetGroupPairInfoList: this.input.loadBalancerInfo?.targetGroupPairInfoList,
          },
          ec2TagSet: {
            ec2TagSetList: this.input.ec2TagSet?.ec2TagSetList,
          },
          ecsServices: this.input.ecsServices,
          onPremisesTagSet: {
            onPremisesTagSetList: this.input.onPremisesTagSet?.onPremisesTagSetList,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeploymentGroup.hooksNotCleanedUp', props);
    return resource.getResponseField('hooksNotCleanedUp') as unknown as shapes.CodeDeployAutoScalingGroup[];
  }

}

