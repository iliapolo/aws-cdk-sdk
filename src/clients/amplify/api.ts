import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AmplifyClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApp(input: shapes.AmplifyCreateAppRequest): AmplifyResponsesCreateApp {
    return new AmplifyResponsesCreateApp(this, this.__resources, input);
  }

  public createBackendEnvironment(input: shapes.AmplifyCreateBackendEnvironmentRequest): AmplifyResponsesCreateBackendEnvironment {
    return new AmplifyResponsesCreateBackendEnvironment(this, this.__resources, input);
  }

  public createBranch(input: shapes.AmplifyCreateBranchRequest): AmplifyResponsesCreateBranch {
    return new AmplifyResponsesCreateBranch(this, this.__resources, input);
  }

  public createDeployment(input: shapes.AmplifyCreateDeploymentRequest): AmplifyResponsesCreateDeployment {
    return new AmplifyResponsesCreateDeployment(this, this.__resources, input);
  }

  public createDomainAssociation(input: shapes.AmplifyCreateDomainAssociationRequest): AmplifyResponsesCreateDomainAssociation {
    return new AmplifyResponsesCreateDomainAssociation(this, this.__resources, input);
  }

  public createWebhook(input: shapes.AmplifyCreateWebhookRequest): AmplifyResponsesCreateWebhook {
    return new AmplifyResponsesCreateWebhook(this, this.__resources, input);
  }

  public deleteApp(input: shapes.AmplifyDeleteAppRequest): AmplifyResponsesDeleteApp {
    return new AmplifyResponsesDeleteApp(this, this.__resources, input);
  }

  public deleteBackendEnvironment(input: shapes.AmplifyDeleteBackendEnvironmentRequest): AmplifyResponsesDeleteBackendEnvironment {
    return new AmplifyResponsesDeleteBackendEnvironment(this, this.__resources, input);
  }

  public deleteBranch(input: shapes.AmplifyDeleteBranchRequest): AmplifyResponsesDeleteBranch {
    return new AmplifyResponsesDeleteBranch(this, this.__resources, input);
  }

  public deleteDomainAssociation(input: shapes.AmplifyDeleteDomainAssociationRequest): AmplifyResponsesDeleteDomainAssociation {
    return new AmplifyResponsesDeleteDomainAssociation(this, this.__resources, input);
  }

  public deleteJob(input: shapes.AmplifyDeleteJobRequest): AmplifyResponsesDeleteJob {
    return new AmplifyResponsesDeleteJob(this, this.__resources, input);
  }

  public deleteWebhook(input: shapes.AmplifyDeleteWebhookRequest): AmplifyResponsesDeleteWebhook {
    return new AmplifyResponsesDeleteWebhook(this, this.__resources, input);
  }

  public generateAccessLogs(input: shapes.AmplifyGenerateAccessLogsRequest): AmplifyResponsesGenerateAccessLogs {
    return new AmplifyResponsesGenerateAccessLogs(this, this.__resources, input);
  }

  public fetchApp(input: shapes.AmplifyGetAppRequest): AmplifyResponsesFetchApp {
    return new AmplifyResponsesFetchApp(this, this.__resources, input);
  }

  public fetchArtifactUrl(input: shapes.AmplifyGetArtifactUrlRequest): AmplifyResponsesFetchArtifactUrl {
    return new AmplifyResponsesFetchArtifactUrl(this, this.__resources, input);
  }

  public fetchBackendEnvironment(input: shapes.AmplifyGetBackendEnvironmentRequest): AmplifyResponsesFetchBackendEnvironment {
    return new AmplifyResponsesFetchBackendEnvironment(this, this.__resources, input);
  }

  public fetchBranch(input: shapes.AmplifyGetBranchRequest): AmplifyResponsesFetchBranch {
    return new AmplifyResponsesFetchBranch(this, this.__resources, input);
  }

  public fetchDomainAssociation(input: shapes.AmplifyGetDomainAssociationRequest): AmplifyResponsesFetchDomainAssociation {
    return new AmplifyResponsesFetchDomainAssociation(this, this.__resources, input);
  }

  public fetchJob(input: shapes.AmplifyGetJobRequest): AmplifyResponsesFetchJob {
    return new AmplifyResponsesFetchJob(this, this.__resources, input);
  }

  public fetchWebhook(input: shapes.AmplifyGetWebhookRequest): AmplifyResponsesFetchWebhook {
    return new AmplifyResponsesFetchWebhook(this, this.__resources, input);
  }

  public listApps(input: shapes.AmplifyListAppsRequest): AmplifyResponsesListApps {
    return new AmplifyResponsesListApps(this, this.__resources, input);
  }

  public listArtifacts(input: shapes.AmplifyListArtifactsRequest): AmplifyResponsesListArtifacts {
    return new AmplifyResponsesListArtifacts(this, this.__resources, input);
  }

  public listBackendEnvironments(input: shapes.AmplifyListBackendEnvironmentsRequest): AmplifyResponsesListBackendEnvironments {
    return new AmplifyResponsesListBackendEnvironments(this, this.__resources, input);
  }

  public listBranches(input: shapes.AmplifyListBranchesRequest): AmplifyResponsesListBranches {
    return new AmplifyResponsesListBranches(this, this.__resources, input);
  }

  public listDomainAssociations(input: shapes.AmplifyListDomainAssociationsRequest): AmplifyResponsesListDomainAssociations {
    return new AmplifyResponsesListDomainAssociations(this, this.__resources, input);
  }

  public listJobs(input: shapes.AmplifyListJobsRequest): AmplifyResponsesListJobs {
    return new AmplifyResponsesListJobs(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AmplifyListTagsForResourceRequest): AmplifyResponsesListTagsForResource {
    return new AmplifyResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWebhooks(input: shapes.AmplifyListWebhooksRequest): AmplifyResponsesListWebhooks {
    return new AmplifyResponsesListWebhooks(this, this.__resources, input);
  }

  public startDeployment(input: shapes.AmplifyStartDeploymentRequest): AmplifyResponsesStartDeployment {
    return new AmplifyResponsesStartDeployment(this, this.__resources, input);
  }

  public startJob(input: shapes.AmplifyStartJobRequest): AmplifyResponsesStartJob {
    return new AmplifyResponsesStartJob(this, this.__resources, input);
  }

  public stopJob(input: shapes.AmplifyStopJobRequest): AmplifyResponsesStopJob {
    return new AmplifyResponsesStopJob(this, this.__resources, input);
  }

  public tagResource(input: shapes.AmplifyTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AmplifyUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApp(input: shapes.AmplifyUpdateAppRequest): AmplifyResponsesUpdateApp {
    return new AmplifyResponsesUpdateApp(this, this.__resources, input);
  }

  public updateBranch(input: shapes.AmplifyUpdateBranchRequest): AmplifyResponsesUpdateBranch {
    return new AmplifyResponsesUpdateBranch(this, this.__resources, input);
  }

  public updateDomainAssociation(input: shapes.AmplifyUpdateDomainAssociationRequest): AmplifyResponsesUpdateDomainAssociation {
    return new AmplifyResponsesUpdateDomainAssociation(this, this.__resources, input);
  }

  public updateWebhook(input: shapes.AmplifyUpdateWebhookRequest): AmplifyResponsesUpdateWebhook {
    return new AmplifyResponsesUpdateWebhook(this, this.__resources, input);
  }

}

export class AmplifyResponsesCreateApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateAppRequest) {
  }

  public get app(): AmplifyResponsesCreateAppApp {
    return new AmplifyResponsesCreateAppApp(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesCreateAppApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateAppRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.appId'),
        outputPath: 'app.appId',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.appId', props);
    return resource.getResponseField('app.appId') as unknown as string;
  }

  public get appArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.appArn'),
        outputPath: 'app.appArn',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.appArn', props);
    return resource.getResponseField('app.appArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.name'),
        outputPath: 'app.name',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.name', props);
    return resource.getResponseField('app.name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.tags'),
        outputPath: 'app.tags',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.tags', props);
    return resource.getResponseField('app.tags') as unknown as Record<string, string>;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.description'),
        outputPath: 'app.description',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.description', props);
    return resource.getResponseField('app.description') as unknown as string;
  }

  public get repository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.repository'),
        outputPath: 'app.repository',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.repository', props);
    return resource.getResponseField('app.repository') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.platform'),
        outputPath: 'app.platform',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.platform', props);
    return resource.getResponseField('app.platform') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.createTime'),
        outputPath: 'app.createTime',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.createTime', props);
    return resource.getResponseField('app.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.updateTime'),
        outputPath: 'app.updateTime',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.updateTime', props);
    return resource.getResponseField('app.updateTime') as unknown as string;
  }

  public get iamServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.iamServiceRoleArn'),
        outputPath: 'app.iamServiceRoleArn',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.iamServiceRoleArn', props);
    return resource.getResponseField('app.iamServiceRoleArn') as unknown as string;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.environmentVariables'),
        outputPath: 'app.environmentVariables',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.environmentVariables', props);
    return resource.getResponseField('app.environmentVariables') as unknown as Record<string, string>;
  }

  public get defaultDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.defaultDomain'),
        outputPath: 'app.defaultDomain',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.defaultDomain', props);
    return resource.getResponseField('app.defaultDomain') as unknown as string;
  }

  public get enableBranchAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.enableBranchAutoBuild'),
        outputPath: 'app.enableBranchAutoBuild',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.enableBranchAutoBuild', props);
    return resource.getResponseField('app.enableBranchAutoBuild') as unknown as boolean;
  }

  public get enableBranchAutoDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.enableBranchAutoDeletion'),
        outputPath: 'app.enableBranchAutoDeletion',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.enableBranchAutoDeletion', props);
    return resource.getResponseField('app.enableBranchAutoDeletion') as unknown as boolean;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.enableBasicAuth'),
        outputPath: 'app.enableBasicAuth',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.enableBasicAuth', props);
    return resource.getResponseField('app.enableBasicAuth') as unknown as boolean;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.basicAuthCredentials'),
        outputPath: 'app.basicAuthCredentials',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.basicAuthCredentials', props);
    return resource.getResponseField('app.basicAuthCredentials') as unknown as string;
  }

  public get customRules(): shapes.AmplifyCustomRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.customRules'),
        outputPath: 'app.customRules',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.customRules', props);
    return resource.getResponseField('app.customRules') as unknown as shapes.AmplifyCustomRule[];
  }

  public get productionBranch(): AmplifyResponsesCreateAppAppProductionBranch {
    return new AmplifyResponsesCreateAppAppProductionBranch(this.__scope, this.__resources, this.__input);
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.buildSpec'),
        outputPath: 'app.buildSpec',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.buildSpec', props);
    return resource.getResponseField('app.buildSpec') as unknown as string;
  }

  public get customHeaders(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.customHeaders'),
        outputPath: 'app.customHeaders',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.customHeaders', props);
    return resource.getResponseField('app.customHeaders') as unknown as string;
  }

  public get enableAutoBranchCreation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.enableAutoBranchCreation'),
        outputPath: 'app.enableAutoBranchCreation',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.enableAutoBranchCreation', props);
    return resource.getResponseField('app.enableAutoBranchCreation') as unknown as boolean;
  }

  public get autoBranchCreationPatterns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationPatterns'),
        outputPath: 'app.autoBranchCreationPatterns',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationPatterns', props);
    return resource.getResponseField('app.autoBranchCreationPatterns') as unknown as string[];
  }

  public get autoBranchCreationConfig(): AmplifyResponsesCreateAppAppAutoBranchCreationConfig {
    return new AmplifyResponsesCreateAppAppAutoBranchCreationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesCreateAppAppProductionBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateAppRequest) {
  }

  public get lastDeployTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.productionBranch.lastDeployTime'),
        outputPath: 'app.productionBranch.lastDeployTime',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.productionBranch.lastDeployTime', props);
    return resource.getResponseField('app.productionBranch.lastDeployTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.productionBranch.status'),
        outputPath: 'app.productionBranch.status',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.productionBranch.status', props);
    return resource.getResponseField('app.productionBranch.status') as unknown as string;
  }

  public get thumbnailUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.productionBranch.thumbnailUrl'),
        outputPath: 'app.productionBranch.thumbnailUrl',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.productionBranch.thumbnailUrl', props);
    return resource.getResponseField('app.productionBranch.thumbnailUrl') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.productionBranch.branchName'),
        outputPath: 'app.productionBranch.branchName',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.productionBranch.branchName', props);
    return resource.getResponseField('app.productionBranch.branchName') as unknown as string;
  }

}

export class AmplifyResponsesCreateAppAppAutoBranchCreationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateAppRequest) {
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.stage'),
        outputPath: 'app.autoBranchCreationConfig.stage',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.stage', props);
    return resource.getResponseField('app.autoBranchCreationConfig.stage') as unknown as string;
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.framework'),
        outputPath: 'app.autoBranchCreationConfig.framework',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.framework', props);
    return resource.getResponseField('app.autoBranchCreationConfig.framework') as unknown as string;
  }

  public get enableAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.enableAutoBuild'),
        outputPath: 'app.autoBranchCreationConfig.enableAutoBuild',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.enableAutoBuild', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enableAutoBuild') as unknown as boolean;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.environmentVariables'),
        outputPath: 'app.autoBranchCreationConfig.environmentVariables',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.environmentVariables', props);
    return resource.getResponseField('app.autoBranchCreationConfig.environmentVariables') as unknown as Record<string, string>;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.basicAuthCredentials'),
        outputPath: 'app.autoBranchCreationConfig.basicAuthCredentials',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.basicAuthCredentials', props);
    return resource.getResponseField('app.autoBranchCreationConfig.basicAuthCredentials') as unknown as string;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.enableBasicAuth'),
        outputPath: 'app.autoBranchCreationConfig.enableBasicAuth',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.enableBasicAuth', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enableBasicAuth') as unknown as boolean;
  }

  public get enablePerformanceMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.enablePerformanceMode'),
        outputPath: 'app.autoBranchCreationConfig.enablePerformanceMode',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.enablePerformanceMode', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enablePerformanceMode') as unknown as boolean;
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.buildSpec'),
        outputPath: 'app.autoBranchCreationConfig.buildSpec',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.buildSpec', props);
    return resource.getResponseField('app.autoBranchCreationConfig.buildSpec') as unknown as string;
  }

  public get enablePullRequestPreview(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.enablePullRequestPreview'),
        outputPath: 'app.autoBranchCreationConfig.enablePullRequestPreview',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.enablePullRequestPreview', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enablePullRequestPreview') as unknown as boolean;
  }

  public get pullRequestEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateApp.app.autoBranchCreationConfig.pullRequestEnvironmentName'),
        outputPath: 'app.autoBranchCreationConfig.pullRequestEnvironmentName',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          repository: this.__input.repository,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.app.autoBranchCreationConfig.pullRequestEnvironmentName', props);
    return resource.getResponseField('app.autoBranchCreationConfig.pullRequestEnvironmentName') as unknown as string;
  }

}

export class AmplifyResponsesCreateBackendEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateBackendEnvironmentRequest) {
  }

  public get backendEnvironment(): AmplifyResponsesCreateBackendEnvironmentBackendEnvironment {
    return new AmplifyResponsesCreateBackendEnvironmentBackendEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesCreateBackendEnvironmentBackendEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateBackendEnvironmentRequest) {
  }

  public get backendEnvironmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBackendEnvironment.backendEnvironment.backendEnvironmentArn'),
        outputPath: 'backendEnvironment.backendEnvironmentArn',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
          stackName: this.__input.stackName,
          deploymentArtifacts: this.__input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendEnvironment.backendEnvironment.backendEnvironmentArn', props);
    return resource.getResponseField('backendEnvironment.backendEnvironmentArn') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBackendEnvironment.backendEnvironment.environmentName'),
        outputPath: 'backendEnvironment.environmentName',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
          stackName: this.__input.stackName,
          deploymentArtifacts: this.__input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendEnvironment.backendEnvironment.environmentName', props);
    return resource.getResponseField('backendEnvironment.environmentName') as unknown as string;
  }

  public get stackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBackendEnvironment.backendEnvironment.stackName'),
        outputPath: 'backendEnvironment.stackName',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
          stackName: this.__input.stackName,
          deploymentArtifacts: this.__input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendEnvironment.backendEnvironment.stackName', props);
    return resource.getResponseField('backendEnvironment.stackName') as unknown as string;
  }

  public get deploymentArtifacts(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBackendEnvironment.backendEnvironment.deploymentArtifacts'),
        outputPath: 'backendEnvironment.deploymentArtifacts',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
          stackName: this.__input.stackName,
          deploymentArtifacts: this.__input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendEnvironment.backendEnvironment.deploymentArtifacts', props);
    return resource.getResponseField('backendEnvironment.deploymentArtifacts') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBackendEnvironment.backendEnvironment.createTime'),
        outputPath: 'backendEnvironment.createTime',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
          stackName: this.__input.stackName,
          deploymentArtifacts: this.__input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendEnvironment.backendEnvironment.createTime', props);
    return resource.getResponseField('backendEnvironment.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBackendEnvironment.backendEnvironment.updateTime'),
        outputPath: 'backendEnvironment.updateTime',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
          stackName: this.__input.stackName,
          deploymentArtifacts: this.__input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendEnvironment.backendEnvironment.updateTime', props);
    return resource.getResponseField('backendEnvironment.updateTime') as unknown as string;
  }

}

export class AmplifyResponsesCreateBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateBranchRequest) {
  }

  public get branch(): AmplifyResponsesCreateBranchBranch {
    return new AmplifyResponsesCreateBranchBranch(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesCreateBranchBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateBranchRequest) {
  }

  public get branchArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.branchArn'),
        outputPath: 'branch.branchArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.branchArn', props);
    return resource.getResponseField('branch.branchArn') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.branchName'),
        outputPath: 'branch.branchName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.branchName', props);
    return resource.getResponseField('branch.branchName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.description'),
        outputPath: 'branch.description',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.description', props);
    return resource.getResponseField('branch.description') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.tags'),
        outputPath: 'branch.tags',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.tags', props);
    return resource.getResponseField('branch.tags') as unknown as Record<string, string>;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.stage'),
        outputPath: 'branch.stage',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.stage', props);
    return resource.getResponseField('branch.stage') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.displayName'),
        outputPath: 'branch.displayName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.displayName', props);
    return resource.getResponseField('branch.displayName') as unknown as string;
  }

  public get enableNotification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.enableNotification'),
        outputPath: 'branch.enableNotification',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.enableNotification', props);
    return resource.getResponseField('branch.enableNotification') as unknown as boolean;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.createTime'),
        outputPath: 'branch.createTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.createTime', props);
    return resource.getResponseField('branch.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.updateTime'),
        outputPath: 'branch.updateTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.updateTime', props);
    return resource.getResponseField('branch.updateTime') as unknown as string;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.environmentVariables'),
        outputPath: 'branch.environmentVariables',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.environmentVariables', props);
    return resource.getResponseField('branch.environmentVariables') as unknown as Record<string, string>;
  }

  public get enableAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.enableAutoBuild'),
        outputPath: 'branch.enableAutoBuild',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.enableAutoBuild', props);
    return resource.getResponseField('branch.enableAutoBuild') as unknown as boolean;
  }

  public get customDomains(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.customDomains'),
        outputPath: 'branch.customDomains',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.customDomains', props);
    return resource.getResponseField('branch.customDomains') as unknown as string[];
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.framework'),
        outputPath: 'branch.framework',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.framework', props);
    return resource.getResponseField('branch.framework') as unknown as string;
  }

  public get activeJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.activeJobId'),
        outputPath: 'branch.activeJobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.activeJobId', props);
    return resource.getResponseField('branch.activeJobId') as unknown as string;
  }

  public get totalNumberOfJobs(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.totalNumberOfJobs'),
        outputPath: 'branch.totalNumberOfJobs',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.totalNumberOfJobs', props);
    return resource.getResponseField('branch.totalNumberOfJobs') as unknown as string;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.enableBasicAuth'),
        outputPath: 'branch.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.enableBasicAuth', props);
    return resource.getResponseField('branch.enableBasicAuth') as unknown as boolean;
  }

  public get enablePerformanceMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.enablePerformanceMode'),
        outputPath: 'branch.enablePerformanceMode',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.enablePerformanceMode', props);
    return resource.getResponseField('branch.enablePerformanceMode') as unknown as boolean;
  }

  public get thumbnailUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.thumbnailUrl'),
        outputPath: 'branch.thumbnailUrl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.thumbnailUrl', props);
    return resource.getResponseField('branch.thumbnailUrl') as unknown as string;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.basicAuthCredentials'),
        outputPath: 'branch.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.basicAuthCredentials', props);
    return resource.getResponseField('branch.basicAuthCredentials') as unknown as string;
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.buildSpec'),
        outputPath: 'branch.buildSpec',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.buildSpec', props);
    return resource.getResponseField('branch.buildSpec') as unknown as string;
  }

  public get ttl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.ttl'),
        outputPath: 'branch.ttl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.ttl', props);
    return resource.getResponseField('branch.ttl') as unknown as string;
  }

  public get associatedResources(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.associatedResources'),
        outputPath: 'branch.associatedResources',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.associatedResources', props);
    return resource.getResponseField('branch.associatedResources') as unknown as string[];
  }

  public get enablePullRequestPreview(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.enablePullRequestPreview'),
        outputPath: 'branch.enablePullRequestPreview',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.enablePullRequestPreview', props);
    return resource.getResponseField('branch.enablePullRequestPreview') as unknown as boolean;
  }

  public get pullRequestEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.pullRequestEnvironmentName'),
        outputPath: 'branch.pullRequestEnvironmentName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.pullRequestEnvironmentName', props);
    return resource.getResponseField('branch.pullRequestEnvironmentName') as unknown as string;
  }

  public get destinationBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.destinationBranch'),
        outputPath: 'branch.destinationBranch',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.destinationBranch', props);
    return resource.getResponseField('branch.destinationBranch') as unknown as string;
  }

  public get sourceBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.sourceBranch'),
        outputPath: 'branch.sourceBranch',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.sourceBranch', props);
    return resource.getResponseField('branch.sourceBranch') as unknown as string;
  }

  public get backendEnvironmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateBranch.branch.backendEnvironmentArn'),
        outputPath: 'branch.backendEnvironmentArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          stage: this.__input.stage,
          framework: this.__input.framework,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          tags: this.__input.tags,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBranch.branch.backendEnvironmentArn', props);
    return resource.getResponseField('branch.backendEnvironmentArn') as unknown as string;
  }

}

export class AmplifyResponsesCreateDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateDeploymentRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDeployment.jobId'),
        outputPath: 'jobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          fileMap: this.__input.fileMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get fileUploadUrls(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDeployment.fileUploadUrls'),
        outputPath: 'fileUploadUrls',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          fileMap: this.__input.fileMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.fileUploadUrls', props);
    return resource.getResponseField('fileUploadUrls') as unknown as Record<string, string>;
  }

  public get zipUploadUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDeployment.zipUploadUrl'),
        outputPath: 'zipUploadUrl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          fileMap: this.__input.fileMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.zipUploadUrl', props);
    return resource.getResponseField('zipUploadUrl') as unknown as string;
  }

}

export class AmplifyResponsesCreateDomainAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateDomainAssociationRequest) {
  }

  public get domainAssociation(): AmplifyResponsesCreateDomainAssociationDomainAssociation {
    return new AmplifyResponsesCreateDomainAssociationDomainAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesCreateDomainAssociationDomainAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateDomainAssociationRequest) {
  }

  public get domainAssociationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDomainAssociation.domainAssociation.domainAssociationArn'),
        outputPath: 'domainAssociation.domainAssociationArn',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainAssociation.domainAssociation.domainAssociationArn', props);
    return resource.getResponseField('domainAssociation.domainAssociationArn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDomainAssociation.domainAssociation.domainName'),
        outputPath: 'domainAssociation.domainName',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainAssociation.domainAssociation.domainName', props);
    return resource.getResponseField('domainAssociation.domainName') as unknown as string;
  }

  public get enableAutoSubDomain(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDomainAssociation.domainAssociation.enableAutoSubDomain'),
        outputPath: 'domainAssociation.enableAutoSubDomain',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainAssociation.domainAssociation.enableAutoSubDomain', props);
    return resource.getResponseField('domainAssociation.enableAutoSubDomain') as unknown as boolean;
  }

  public get autoSubDomainCreationPatterns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDomainAssociation.domainAssociation.autoSubDomainCreationPatterns'),
        outputPath: 'domainAssociation.autoSubDomainCreationPatterns',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainAssociation.domainAssociation.autoSubDomainCreationPatterns', props);
    return resource.getResponseField('domainAssociation.autoSubDomainCreationPatterns') as unknown as string[];
  }

  public get autoSubDomainIamRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDomainAssociation.domainAssociation.autoSubDomainIAMRole'),
        outputPath: 'domainAssociation.autoSubDomainIAMRole',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainAssociation.domainAssociation.autoSubDomainIAMRole', props);
    return resource.getResponseField('domainAssociation.autoSubDomainIAMRole') as unknown as string;
  }

  public get domainStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDomainAssociation.domainAssociation.domainStatus'),
        outputPath: 'domainAssociation.domainStatus',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainAssociation.domainAssociation.domainStatus', props);
    return resource.getResponseField('domainAssociation.domainStatus') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDomainAssociation.domainAssociation.statusReason'),
        outputPath: 'domainAssociation.statusReason',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainAssociation.domainAssociation.statusReason', props);
    return resource.getResponseField('domainAssociation.statusReason') as unknown as string;
  }

  public get certificateVerificationDnsRecord(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDomainAssociation.domainAssociation.certificateVerificationDNSRecord'),
        outputPath: 'domainAssociation.certificateVerificationDNSRecord',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainAssociation.domainAssociation.certificateVerificationDNSRecord', props);
    return resource.getResponseField('domainAssociation.certificateVerificationDNSRecord') as unknown as string;
  }

  public get subDomains(): shapes.AmplifySubDomain[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateDomainAssociation.domainAssociation.subDomains'),
        outputPath: 'domainAssociation.subDomains',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainAssociation.domainAssociation.subDomains', props);
    return resource.getResponseField('domainAssociation.subDomains') as unknown as shapes.AmplifySubDomain[];
  }

}

export class AmplifyResponsesCreateWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateWebhookRequest) {
  }

  public get webhook(): AmplifyResponsesCreateWebhookWebhook {
    return new AmplifyResponsesCreateWebhookWebhook(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesCreateWebhookWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyCreateWebhookRequest) {
  }

  public get webhookArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateWebhook.webhook.webhookArn'),
        outputPath: 'webhook.webhookArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebhook.webhook.webhookArn', props);
    return resource.getResponseField('webhook.webhookArn') as unknown as string;
  }

  public get webhookId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateWebhook.webhook.webhookId'),
        outputPath: 'webhook.webhookId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebhook.webhook.webhookId', props);
    return resource.getResponseField('webhook.webhookId') as unknown as string;
  }

  public get webhookUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateWebhook.webhook.webhookUrl'),
        outputPath: 'webhook.webhookUrl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebhook.webhook.webhookUrl', props);
    return resource.getResponseField('webhook.webhookUrl') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateWebhook.webhook.branchName'),
        outputPath: 'webhook.branchName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebhook.webhook.branchName', props);
    return resource.getResponseField('webhook.branchName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateWebhook.webhook.description'),
        outputPath: 'webhook.description',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebhook.webhook.description', props);
    return resource.getResponseField('webhook.description') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateWebhook.webhook.createTime'),
        outputPath: 'webhook.createTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebhook.webhook.createTime', props);
    return resource.getResponseField('webhook.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.CreateWebhook.webhook.updateTime'),
        outputPath: 'webhook.updateTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebhook.webhook.updateTime', props);
    return resource.getResponseField('webhook.updateTime') as unknown as string;
  }

}

export class AmplifyResponsesDeleteApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteAppRequest) {
  }

  public get app(): AmplifyResponsesDeleteAppApp {
    return new AmplifyResponsesDeleteAppApp(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesDeleteAppApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteAppRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.appId'),
        outputPath: 'app.appId',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.appId', props);
    return resource.getResponseField('app.appId') as unknown as string;
  }

  public get appArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.appArn'),
        outputPath: 'app.appArn',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.appArn', props);
    return resource.getResponseField('app.appArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.name'),
        outputPath: 'app.name',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.name', props);
    return resource.getResponseField('app.name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.tags'),
        outputPath: 'app.tags',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.tags', props);
    return resource.getResponseField('app.tags') as unknown as Record<string, string>;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.description'),
        outputPath: 'app.description',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.description', props);
    return resource.getResponseField('app.description') as unknown as string;
  }

  public get repository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.repository'),
        outputPath: 'app.repository',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.repository', props);
    return resource.getResponseField('app.repository') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.platform'),
        outputPath: 'app.platform',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.platform', props);
    return resource.getResponseField('app.platform') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.createTime'),
        outputPath: 'app.createTime',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.createTime', props);
    return resource.getResponseField('app.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.updateTime'),
        outputPath: 'app.updateTime',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.updateTime', props);
    return resource.getResponseField('app.updateTime') as unknown as string;
  }

  public get iamServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.iamServiceRoleArn'),
        outputPath: 'app.iamServiceRoleArn',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.iamServiceRoleArn', props);
    return resource.getResponseField('app.iamServiceRoleArn') as unknown as string;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.environmentVariables'),
        outputPath: 'app.environmentVariables',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.environmentVariables', props);
    return resource.getResponseField('app.environmentVariables') as unknown as Record<string, string>;
  }

  public get defaultDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.defaultDomain'),
        outputPath: 'app.defaultDomain',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.defaultDomain', props);
    return resource.getResponseField('app.defaultDomain') as unknown as string;
  }

  public get enableBranchAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.enableBranchAutoBuild'),
        outputPath: 'app.enableBranchAutoBuild',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.enableBranchAutoBuild', props);
    return resource.getResponseField('app.enableBranchAutoBuild') as unknown as boolean;
  }

  public get enableBranchAutoDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.enableBranchAutoDeletion'),
        outputPath: 'app.enableBranchAutoDeletion',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.enableBranchAutoDeletion', props);
    return resource.getResponseField('app.enableBranchAutoDeletion') as unknown as boolean;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.enableBasicAuth'),
        outputPath: 'app.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.enableBasicAuth', props);
    return resource.getResponseField('app.enableBasicAuth') as unknown as boolean;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.basicAuthCredentials'),
        outputPath: 'app.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.basicAuthCredentials', props);
    return resource.getResponseField('app.basicAuthCredentials') as unknown as string;
  }

  public get customRules(): shapes.AmplifyCustomRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.customRules'),
        outputPath: 'app.customRules',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.customRules', props);
    return resource.getResponseField('app.customRules') as unknown as shapes.AmplifyCustomRule[];
  }

  public get productionBranch(): AmplifyResponsesDeleteAppAppProductionBranch {
    return new AmplifyResponsesDeleteAppAppProductionBranch(this.__scope, this.__resources, this.__input);
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.buildSpec'),
        outputPath: 'app.buildSpec',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.buildSpec', props);
    return resource.getResponseField('app.buildSpec') as unknown as string;
  }

  public get customHeaders(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.customHeaders'),
        outputPath: 'app.customHeaders',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.customHeaders', props);
    return resource.getResponseField('app.customHeaders') as unknown as string;
  }

  public get enableAutoBranchCreation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.enableAutoBranchCreation'),
        outputPath: 'app.enableAutoBranchCreation',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.enableAutoBranchCreation', props);
    return resource.getResponseField('app.enableAutoBranchCreation') as unknown as boolean;
  }

  public get autoBranchCreationPatterns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationPatterns'),
        outputPath: 'app.autoBranchCreationPatterns',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationPatterns', props);
    return resource.getResponseField('app.autoBranchCreationPatterns') as unknown as string[];
  }

  public get autoBranchCreationConfig(): AmplifyResponsesDeleteAppAppAutoBranchCreationConfig {
    return new AmplifyResponsesDeleteAppAppAutoBranchCreationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesDeleteAppAppProductionBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteAppRequest) {
  }

  public get lastDeployTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.productionBranch.lastDeployTime'),
        outputPath: 'app.productionBranch.lastDeployTime',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.productionBranch.lastDeployTime', props);
    return resource.getResponseField('app.productionBranch.lastDeployTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.productionBranch.status'),
        outputPath: 'app.productionBranch.status',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.productionBranch.status', props);
    return resource.getResponseField('app.productionBranch.status') as unknown as string;
  }

  public get thumbnailUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.productionBranch.thumbnailUrl'),
        outputPath: 'app.productionBranch.thumbnailUrl',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.productionBranch.thumbnailUrl', props);
    return resource.getResponseField('app.productionBranch.thumbnailUrl') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.productionBranch.branchName'),
        outputPath: 'app.productionBranch.branchName',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.productionBranch.branchName', props);
    return resource.getResponseField('app.productionBranch.branchName') as unknown as string;
  }

}

export class AmplifyResponsesDeleteAppAppAutoBranchCreationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteAppRequest) {
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.stage'),
        outputPath: 'app.autoBranchCreationConfig.stage',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.stage', props);
    return resource.getResponseField('app.autoBranchCreationConfig.stage') as unknown as string;
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.framework'),
        outputPath: 'app.autoBranchCreationConfig.framework',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.framework', props);
    return resource.getResponseField('app.autoBranchCreationConfig.framework') as unknown as string;
  }

  public get enableAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.enableAutoBuild'),
        outputPath: 'app.autoBranchCreationConfig.enableAutoBuild',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.enableAutoBuild', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enableAutoBuild') as unknown as boolean;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.environmentVariables'),
        outputPath: 'app.autoBranchCreationConfig.environmentVariables',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.environmentVariables', props);
    return resource.getResponseField('app.autoBranchCreationConfig.environmentVariables') as unknown as Record<string, string>;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.basicAuthCredentials'),
        outputPath: 'app.autoBranchCreationConfig.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.basicAuthCredentials', props);
    return resource.getResponseField('app.autoBranchCreationConfig.basicAuthCredentials') as unknown as string;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.enableBasicAuth'),
        outputPath: 'app.autoBranchCreationConfig.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.enableBasicAuth', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enableBasicAuth') as unknown as boolean;
  }

  public get enablePerformanceMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.enablePerformanceMode'),
        outputPath: 'app.autoBranchCreationConfig.enablePerformanceMode',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.enablePerformanceMode', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enablePerformanceMode') as unknown as boolean;
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.buildSpec'),
        outputPath: 'app.autoBranchCreationConfig.buildSpec',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.buildSpec', props);
    return resource.getResponseField('app.autoBranchCreationConfig.buildSpec') as unknown as string;
  }

  public get enablePullRequestPreview(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.enablePullRequestPreview'),
        outputPath: 'app.autoBranchCreationConfig.enablePullRequestPreview',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.enablePullRequestPreview', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enablePullRequestPreview') as unknown as boolean;
  }

  public get pullRequestEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteApp.app.autoBranchCreationConfig.pullRequestEnvironmentName'),
        outputPath: 'app.autoBranchCreationConfig.pullRequestEnvironmentName',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApp.app.autoBranchCreationConfig.pullRequestEnvironmentName', props);
    return resource.getResponseField('app.autoBranchCreationConfig.pullRequestEnvironmentName') as unknown as string;
  }

}

export class AmplifyResponsesDeleteBackendEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteBackendEnvironmentRequest) {
  }

  public get backendEnvironment(): AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment {
    return new AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteBackendEnvironmentRequest) {
  }

  public get backendEnvironmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBackendEnvironment.backendEnvironment.backendEnvironmentArn'),
        outputPath: 'backendEnvironment.backendEnvironmentArn',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendEnvironment.backendEnvironment.backendEnvironmentArn', props);
    return resource.getResponseField('backendEnvironment.backendEnvironmentArn') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBackendEnvironment.backendEnvironment.environmentName'),
        outputPath: 'backendEnvironment.environmentName',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendEnvironment.backendEnvironment.environmentName', props);
    return resource.getResponseField('backendEnvironment.environmentName') as unknown as string;
  }

  public get stackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBackendEnvironment.backendEnvironment.stackName'),
        outputPath: 'backendEnvironment.stackName',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendEnvironment.backendEnvironment.stackName', props);
    return resource.getResponseField('backendEnvironment.stackName') as unknown as string;
  }

  public get deploymentArtifacts(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBackendEnvironment.backendEnvironment.deploymentArtifacts'),
        outputPath: 'backendEnvironment.deploymentArtifacts',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendEnvironment.backendEnvironment.deploymentArtifacts', props);
    return resource.getResponseField('backendEnvironment.deploymentArtifacts') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBackendEnvironment.backendEnvironment.createTime'),
        outputPath: 'backendEnvironment.createTime',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendEnvironment.backendEnvironment.createTime', props);
    return resource.getResponseField('backendEnvironment.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBackendEnvironment.backendEnvironment.updateTime'),
        outputPath: 'backendEnvironment.updateTime',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendEnvironment.backendEnvironment.updateTime', props);
    return resource.getResponseField('backendEnvironment.updateTime') as unknown as string;
  }

}

export class AmplifyResponsesDeleteBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteBranchRequest) {
  }

  public get branch(): AmplifyResponsesDeleteBranchBranch {
    return new AmplifyResponsesDeleteBranchBranch(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesDeleteBranchBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteBranchRequest) {
  }

  public get branchArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.branchArn'),
        outputPath: 'branch.branchArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.branchArn', props);
    return resource.getResponseField('branch.branchArn') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.branchName'),
        outputPath: 'branch.branchName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.branchName', props);
    return resource.getResponseField('branch.branchName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.description'),
        outputPath: 'branch.description',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.description', props);
    return resource.getResponseField('branch.description') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.tags'),
        outputPath: 'branch.tags',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.tags', props);
    return resource.getResponseField('branch.tags') as unknown as Record<string, string>;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.stage'),
        outputPath: 'branch.stage',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.stage', props);
    return resource.getResponseField('branch.stage') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.displayName'),
        outputPath: 'branch.displayName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.displayName', props);
    return resource.getResponseField('branch.displayName') as unknown as string;
  }

  public get enableNotification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.enableNotification'),
        outputPath: 'branch.enableNotification',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.enableNotification', props);
    return resource.getResponseField('branch.enableNotification') as unknown as boolean;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.createTime'),
        outputPath: 'branch.createTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.createTime', props);
    return resource.getResponseField('branch.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.updateTime'),
        outputPath: 'branch.updateTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.updateTime', props);
    return resource.getResponseField('branch.updateTime') as unknown as string;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.environmentVariables'),
        outputPath: 'branch.environmentVariables',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.environmentVariables', props);
    return resource.getResponseField('branch.environmentVariables') as unknown as Record<string, string>;
  }

  public get enableAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.enableAutoBuild'),
        outputPath: 'branch.enableAutoBuild',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.enableAutoBuild', props);
    return resource.getResponseField('branch.enableAutoBuild') as unknown as boolean;
  }

  public get customDomains(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.customDomains'),
        outputPath: 'branch.customDomains',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.customDomains', props);
    return resource.getResponseField('branch.customDomains') as unknown as string[];
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.framework'),
        outputPath: 'branch.framework',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.framework', props);
    return resource.getResponseField('branch.framework') as unknown as string;
  }

  public get activeJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.activeJobId'),
        outputPath: 'branch.activeJobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.activeJobId', props);
    return resource.getResponseField('branch.activeJobId') as unknown as string;
  }

  public get totalNumberOfJobs(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.totalNumberOfJobs'),
        outputPath: 'branch.totalNumberOfJobs',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.totalNumberOfJobs', props);
    return resource.getResponseField('branch.totalNumberOfJobs') as unknown as string;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.enableBasicAuth'),
        outputPath: 'branch.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.enableBasicAuth', props);
    return resource.getResponseField('branch.enableBasicAuth') as unknown as boolean;
  }

  public get enablePerformanceMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.enablePerformanceMode'),
        outputPath: 'branch.enablePerformanceMode',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.enablePerformanceMode', props);
    return resource.getResponseField('branch.enablePerformanceMode') as unknown as boolean;
  }

  public get thumbnailUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.thumbnailUrl'),
        outputPath: 'branch.thumbnailUrl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.thumbnailUrl', props);
    return resource.getResponseField('branch.thumbnailUrl') as unknown as string;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.basicAuthCredentials'),
        outputPath: 'branch.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.basicAuthCredentials', props);
    return resource.getResponseField('branch.basicAuthCredentials') as unknown as string;
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.buildSpec'),
        outputPath: 'branch.buildSpec',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.buildSpec', props);
    return resource.getResponseField('branch.buildSpec') as unknown as string;
  }

  public get ttl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.ttl'),
        outputPath: 'branch.ttl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.ttl', props);
    return resource.getResponseField('branch.ttl') as unknown as string;
  }

  public get associatedResources(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.associatedResources'),
        outputPath: 'branch.associatedResources',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.associatedResources', props);
    return resource.getResponseField('branch.associatedResources') as unknown as string[];
  }

  public get enablePullRequestPreview(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.enablePullRequestPreview'),
        outputPath: 'branch.enablePullRequestPreview',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.enablePullRequestPreview', props);
    return resource.getResponseField('branch.enablePullRequestPreview') as unknown as boolean;
  }

  public get pullRequestEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.pullRequestEnvironmentName'),
        outputPath: 'branch.pullRequestEnvironmentName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.pullRequestEnvironmentName', props);
    return resource.getResponseField('branch.pullRequestEnvironmentName') as unknown as string;
  }

  public get destinationBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.destinationBranch'),
        outputPath: 'branch.destinationBranch',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.destinationBranch', props);
    return resource.getResponseField('branch.destinationBranch') as unknown as string;
  }

  public get sourceBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.sourceBranch'),
        outputPath: 'branch.sourceBranch',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.sourceBranch', props);
    return resource.getResponseField('branch.sourceBranch') as unknown as string;
  }

  public get backendEnvironmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteBranch.branch.backendEnvironmentArn'),
        outputPath: 'branch.backendEnvironmentArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.branch.backendEnvironmentArn', props);
    return resource.getResponseField('branch.backendEnvironmentArn') as unknown as string;
  }

}

export class AmplifyResponsesDeleteDomainAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteDomainAssociationRequest) {
  }

  public get domainAssociation(): AmplifyResponsesDeleteDomainAssociationDomainAssociation {
    return new AmplifyResponsesDeleteDomainAssociationDomainAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesDeleteDomainAssociationDomainAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteDomainAssociationRequest) {
  }

  public get domainAssociationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteDomainAssociation.domainAssociation.domainAssociationArn'),
        outputPath: 'domainAssociation.domainAssociationArn',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainAssociation.domainAssociation.domainAssociationArn', props);
    return resource.getResponseField('domainAssociation.domainAssociationArn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteDomainAssociation.domainAssociation.domainName'),
        outputPath: 'domainAssociation.domainName',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainAssociation.domainAssociation.domainName', props);
    return resource.getResponseField('domainAssociation.domainName') as unknown as string;
  }

  public get enableAutoSubDomain(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteDomainAssociation.domainAssociation.enableAutoSubDomain'),
        outputPath: 'domainAssociation.enableAutoSubDomain',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainAssociation.domainAssociation.enableAutoSubDomain', props);
    return resource.getResponseField('domainAssociation.enableAutoSubDomain') as unknown as boolean;
  }

  public get autoSubDomainCreationPatterns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteDomainAssociation.domainAssociation.autoSubDomainCreationPatterns'),
        outputPath: 'domainAssociation.autoSubDomainCreationPatterns',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainAssociation.domainAssociation.autoSubDomainCreationPatterns', props);
    return resource.getResponseField('domainAssociation.autoSubDomainCreationPatterns') as unknown as string[];
  }

  public get autoSubDomainIamRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteDomainAssociation.domainAssociation.autoSubDomainIAMRole'),
        outputPath: 'domainAssociation.autoSubDomainIAMRole',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainAssociation.domainAssociation.autoSubDomainIAMRole', props);
    return resource.getResponseField('domainAssociation.autoSubDomainIAMRole') as unknown as string;
  }

  public get domainStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteDomainAssociation.domainAssociation.domainStatus'),
        outputPath: 'domainAssociation.domainStatus',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainAssociation.domainAssociation.domainStatus', props);
    return resource.getResponseField('domainAssociation.domainStatus') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteDomainAssociation.domainAssociation.statusReason'),
        outputPath: 'domainAssociation.statusReason',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainAssociation.domainAssociation.statusReason', props);
    return resource.getResponseField('domainAssociation.statusReason') as unknown as string;
  }

  public get certificateVerificationDnsRecord(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteDomainAssociation.domainAssociation.certificateVerificationDNSRecord'),
        outputPath: 'domainAssociation.certificateVerificationDNSRecord',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainAssociation.domainAssociation.certificateVerificationDNSRecord', props);
    return resource.getResponseField('domainAssociation.certificateVerificationDNSRecord') as unknown as string;
  }

  public get subDomains(): shapes.AmplifySubDomain[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteDomainAssociation.domainAssociation.subDomains'),
        outputPath: 'domainAssociation.subDomains',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainAssociation.domainAssociation.subDomains', props);
    return resource.getResponseField('domainAssociation.subDomains') as unknown as shapes.AmplifySubDomain[];
  }

}

export class AmplifyResponsesDeleteJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteJobRequest) {
  }

  public get jobSummary(): AmplifyResponsesDeleteJobJobSummary {
    return new AmplifyResponsesDeleteJobJobSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesDeleteJobJobSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteJobRequest) {
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteJob.jobSummary.jobArn'),
        outputPath: 'jobSummary.jobArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.jobSummary.jobArn', props);
    return resource.getResponseField('jobSummary.jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteJob.jobSummary.jobId'),
        outputPath: 'jobSummary.jobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.jobSummary.jobId', props);
    return resource.getResponseField('jobSummary.jobId') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteJob.jobSummary.commitId'),
        outputPath: 'jobSummary.commitId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.jobSummary.commitId', props);
    return resource.getResponseField('jobSummary.commitId') as unknown as string;
  }

  public get commitMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteJob.jobSummary.commitMessage'),
        outputPath: 'jobSummary.commitMessage',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.jobSummary.commitMessage', props);
    return resource.getResponseField('jobSummary.commitMessage') as unknown as string;
  }

  public get commitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteJob.jobSummary.commitTime'),
        outputPath: 'jobSummary.commitTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.jobSummary.commitTime', props);
    return resource.getResponseField('jobSummary.commitTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteJob.jobSummary.startTime'),
        outputPath: 'jobSummary.startTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.jobSummary.startTime', props);
    return resource.getResponseField('jobSummary.startTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteJob.jobSummary.status'),
        outputPath: 'jobSummary.status',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.jobSummary.status', props);
    return resource.getResponseField('jobSummary.status') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteJob.jobSummary.endTime'),
        outputPath: 'jobSummary.endTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.jobSummary.endTime', props);
    return resource.getResponseField('jobSummary.endTime') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteJob.jobSummary.jobType'),
        outputPath: 'jobSummary.jobType',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.jobSummary.jobType', props);
    return resource.getResponseField('jobSummary.jobType') as unknown as string;
  }

}

export class AmplifyResponsesDeleteWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteWebhookRequest) {
  }

  public get webhook(): AmplifyResponsesDeleteWebhookWebhook {
    return new AmplifyResponsesDeleteWebhookWebhook(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesDeleteWebhookWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyDeleteWebhookRequest) {
  }

  public get webhookArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteWebhook.webhook.webhookArn'),
        outputPath: 'webhook.webhookArn',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWebhook.webhook.webhookArn', props);
    return resource.getResponseField('webhook.webhookArn') as unknown as string;
  }

  public get webhookId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteWebhook.webhook.webhookId'),
        outputPath: 'webhook.webhookId',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWebhook.webhook.webhookId', props);
    return resource.getResponseField('webhook.webhookId') as unknown as string;
  }

  public get webhookUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteWebhook.webhook.webhookUrl'),
        outputPath: 'webhook.webhookUrl',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWebhook.webhook.webhookUrl', props);
    return resource.getResponseField('webhook.webhookUrl') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteWebhook.webhook.branchName'),
        outputPath: 'webhook.branchName',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWebhook.webhook.branchName', props);
    return resource.getResponseField('webhook.branchName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteWebhook.webhook.description'),
        outputPath: 'webhook.description',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWebhook.webhook.description', props);
    return resource.getResponseField('webhook.description') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteWebhook.webhook.createTime'),
        outputPath: 'webhook.createTime',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWebhook.webhook.createTime', props);
    return resource.getResponseField('webhook.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.DeleteWebhook.webhook.updateTime'),
        outputPath: 'webhook.updateTime',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWebhook.webhook.updateTime', props);
    return resource.getResponseField('webhook.updateTime') as unknown as string;
  }

}

export class AmplifyResponsesGenerateAccessLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGenerateAccessLogsRequest) {
  }

  public get logUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateAccessLogs',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GenerateAccessLogs.logUrl'),
        outputPath: 'logUrl',
        parameters: {
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          domainName: this.__input.domainName,
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateAccessLogs.logUrl', props);
    return resource.getResponseField('logUrl') as unknown as string;
  }

}

export class AmplifyResponsesFetchApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetAppRequest) {
  }

  public get app(): AmplifyResponsesFetchAppApp {
    return new AmplifyResponsesFetchAppApp(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesFetchAppApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetAppRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.appId'),
        outputPath: 'app.appId',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.appId', props);
    return resource.getResponseField('app.appId') as unknown as string;
  }

  public get appArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.appArn'),
        outputPath: 'app.appArn',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.appArn', props);
    return resource.getResponseField('app.appArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.name'),
        outputPath: 'app.name',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.name', props);
    return resource.getResponseField('app.name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.tags'),
        outputPath: 'app.tags',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.tags', props);
    return resource.getResponseField('app.tags') as unknown as Record<string, string>;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.description'),
        outputPath: 'app.description',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.description', props);
    return resource.getResponseField('app.description') as unknown as string;
  }

  public get repository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.repository'),
        outputPath: 'app.repository',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.repository', props);
    return resource.getResponseField('app.repository') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.platform'),
        outputPath: 'app.platform',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.platform', props);
    return resource.getResponseField('app.platform') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.createTime'),
        outputPath: 'app.createTime',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.createTime', props);
    return resource.getResponseField('app.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.updateTime'),
        outputPath: 'app.updateTime',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.updateTime', props);
    return resource.getResponseField('app.updateTime') as unknown as string;
  }

  public get iamServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.iamServiceRoleArn'),
        outputPath: 'app.iamServiceRoleArn',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.iamServiceRoleArn', props);
    return resource.getResponseField('app.iamServiceRoleArn') as unknown as string;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.environmentVariables'),
        outputPath: 'app.environmentVariables',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.environmentVariables', props);
    return resource.getResponseField('app.environmentVariables') as unknown as Record<string, string>;
  }

  public get defaultDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.defaultDomain'),
        outputPath: 'app.defaultDomain',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.defaultDomain', props);
    return resource.getResponseField('app.defaultDomain') as unknown as string;
  }

  public get enableBranchAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.enableBranchAutoBuild'),
        outputPath: 'app.enableBranchAutoBuild',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.enableBranchAutoBuild', props);
    return resource.getResponseField('app.enableBranchAutoBuild') as unknown as boolean;
  }

  public get enableBranchAutoDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.enableBranchAutoDeletion'),
        outputPath: 'app.enableBranchAutoDeletion',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.enableBranchAutoDeletion', props);
    return resource.getResponseField('app.enableBranchAutoDeletion') as unknown as boolean;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.enableBasicAuth'),
        outputPath: 'app.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.enableBasicAuth', props);
    return resource.getResponseField('app.enableBasicAuth') as unknown as boolean;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.basicAuthCredentials'),
        outputPath: 'app.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.basicAuthCredentials', props);
    return resource.getResponseField('app.basicAuthCredentials') as unknown as string;
  }

  public get customRules(): shapes.AmplifyCustomRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.customRules'),
        outputPath: 'app.customRules',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.customRules', props);
    return resource.getResponseField('app.customRules') as unknown as shapes.AmplifyCustomRule[];
  }

  public get productionBranch(): AmplifyResponsesFetchAppAppProductionBranch {
    return new AmplifyResponsesFetchAppAppProductionBranch(this.__scope, this.__resources, this.__input);
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.buildSpec'),
        outputPath: 'app.buildSpec',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.buildSpec', props);
    return resource.getResponseField('app.buildSpec') as unknown as string;
  }

  public get customHeaders(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.customHeaders'),
        outputPath: 'app.customHeaders',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.customHeaders', props);
    return resource.getResponseField('app.customHeaders') as unknown as string;
  }

  public get enableAutoBranchCreation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.enableAutoBranchCreation'),
        outputPath: 'app.enableAutoBranchCreation',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.enableAutoBranchCreation', props);
    return resource.getResponseField('app.enableAutoBranchCreation') as unknown as boolean;
  }

  public get autoBranchCreationPatterns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationPatterns'),
        outputPath: 'app.autoBranchCreationPatterns',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationPatterns', props);
    return resource.getResponseField('app.autoBranchCreationPatterns') as unknown as string[];
  }

  public get autoBranchCreationConfig(): AmplifyResponsesFetchAppAppAutoBranchCreationConfig {
    return new AmplifyResponsesFetchAppAppAutoBranchCreationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesFetchAppAppProductionBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetAppRequest) {
  }

  public get lastDeployTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.productionBranch.lastDeployTime'),
        outputPath: 'app.productionBranch.lastDeployTime',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.productionBranch.lastDeployTime', props);
    return resource.getResponseField('app.productionBranch.lastDeployTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.productionBranch.status'),
        outputPath: 'app.productionBranch.status',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.productionBranch.status', props);
    return resource.getResponseField('app.productionBranch.status') as unknown as string;
  }

  public get thumbnailUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.productionBranch.thumbnailUrl'),
        outputPath: 'app.productionBranch.thumbnailUrl',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.productionBranch.thumbnailUrl', props);
    return resource.getResponseField('app.productionBranch.thumbnailUrl') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.productionBranch.branchName'),
        outputPath: 'app.productionBranch.branchName',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.productionBranch.branchName', props);
    return resource.getResponseField('app.productionBranch.branchName') as unknown as string;
  }

}

export class AmplifyResponsesFetchAppAppAutoBranchCreationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetAppRequest) {
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.stage'),
        outputPath: 'app.autoBranchCreationConfig.stage',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.stage', props);
    return resource.getResponseField('app.autoBranchCreationConfig.stage') as unknown as string;
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.framework'),
        outputPath: 'app.autoBranchCreationConfig.framework',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.framework', props);
    return resource.getResponseField('app.autoBranchCreationConfig.framework') as unknown as string;
  }

  public get enableAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.enableAutoBuild'),
        outputPath: 'app.autoBranchCreationConfig.enableAutoBuild',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.enableAutoBuild', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enableAutoBuild') as unknown as boolean;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.environmentVariables'),
        outputPath: 'app.autoBranchCreationConfig.environmentVariables',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.environmentVariables', props);
    return resource.getResponseField('app.autoBranchCreationConfig.environmentVariables') as unknown as Record<string, string>;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.basicAuthCredentials'),
        outputPath: 'app.autoBranchCreationConfig.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.basicAuthCredentials', props);
    return resource.getResponseField('app.autoBranchCreationConfig.basicAuthCredentials') as unknown as string;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.enableBasicAuth'),
        outputPath: 'app.autoBranchCreationConfig.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.enableBasicAuth', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enableBasicAuth') as unknown as boolean;
  }

  public get enablePerformanceMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.enablePerformanceMode'),
        outputPath: 'app.autoBranchCreationConfig.enablePerformanceMode',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.enablePerformanceMode', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enablePerformanceMode') as unknown as boolean;
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.buildSpec'),
        outputPath: 'app.autoBranchCreationConfig.buildSpec',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.buildSpec', props);
    return resource.getResponseField('app.autoBranchCreationConfig.buildSpec') as unknown as string;
  }

  public get enablePullRequestPreview(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.enablePullRequestPreview'),
        outputPath: 'app.autoBranchCreationConfig.enablePullRequestPreview',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.enablePullRequestPreview', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enablePullRequestPreview') as unknown as boolean;
  }

  public get pullRequestEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetApp.app.autoBranchCreationConfig.pullRequestEnvironmentName'),
        outputPath: 'app.autoBranchCreationConfig.pullRequestEnvironmentName',
        parameters: {
          appId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApp.app.autoBranchCreationConfig.pullRequestEnvironmentName', props);
    return resource.getResponseField('app.autoBranchCreationConfig.pullRequestEnvironmentName') as unknown as string;
  }

}

export class AmplifyResponsesFetchArtifactUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetArtifactUrlRequest) {
  }

  public get artifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getArtifactUrl',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetArtifactUrl.artifactId'),
        outputPath: 'artifactId',
        parameters: {
          artifactId: this.__input.artifactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetArtifactUrl.artifactId', props);
    return resource.getResponseField('artifactId') as unknown as string;
  }

  public get artifactUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getArtifactUrl',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetArtifactUrl.artifactUrl'),
        outputPath: 'artifactUrl',
        parameters: {
          artifactId: this.__input.artifactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetArtifactUrl.artifactUrl', props);
    return resource.getResponseField('artifactUrl') as unknown as string;
  }

}

export class AmplifyResponsesFetchBackendEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetBackendEnvironmentRequest) {
  }

  public get backendEnvironment(): AmplifyResponsesFetchBackendEnvironmentBackendEnvironment {
    return new AmplifyResponsesFetchBackendEnvironmentBackendEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesFetchBackendEnvironmentBackendEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetBackendEnvironmentRequest) {
  }

  public get backendEnvironmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBackendEnvironment.backendEnvironment.backendEnvironmentArn'),
        outputPath: 'backendEnvironment.backendEnvironmentArn',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendEnvironment.backendEnvironment.backendEnvironmentArn', props);
    return resource.getResponseField('backendEnvironment.backendEnvironmentArn') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBackendEnvironment.backendEnvironment.environmentName'),
        outputPath: 'backendEnvironment.environmentName',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendEnvironment.backendEnvironment.environmentName', props);
    return resource.getResponseField('backendEnvironment.environmentName') as unknown as string;
  }

  public get stackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBackendEnvironment.backendEnvironment.stackName'),
        outputPath: 'backendEnvironment.stackName',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendEnvironment.backendEnvironment.stackName', props);
    return resource.getResponseField('backendEnvironment.stackName') as unknown as string;
  }

  public get deploymentArtifacts(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBackendEnvironment.backendEnvironment.deploymentArtifacts'),
        outputPath: 'backendEnvironment.deploymentArtifacts',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendEnvironment.backendEnvironment.deploymentArtifacts', props);
    return resource.getResponseField('backendEnvironment.deploymentArtifacts') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBackendEnvironment.backendEnvironment.createTime'),
        outputPath: 'backendEnvironment.createTime',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendEnvironment.backendEnvironment.createTime', props);
    return resource.getResponseField('backendEnvironment.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendEnvironment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBackendEnvironment.backendEnvironment.updateTime'),
        outputPath: 'backendEnvironment.updateTime',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendEnvironment.backendEnvironment.updateTime', props);
    return resource.getResponseField('backendEnvironment.updateTime') as unknown as string;
  }

}

export class AmplifyResponsesFetchBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetBranchRequest) {
  }

  public get branch(): AmplifyResponsesFetchBranchBranch {
    return new AmplifyResponsesFetchBranchBranch(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesFetchBranchBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetBranchRequest) {
  }

  public get branchArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.branchArn'),
        outputPath: 'branch.branchArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.branchArn', props);
    return resource.getResponseField('branch.branchArn') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.branchName'),
        outputPath: 'branch.branchName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.branchName', props);
    return resource.getResponseField('branch.branchName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.description'),
        outputPath: 'branch.description',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.description', props);
    return resource.getResponseField('branch.description') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.tags'),
        outputPath: 'branch.tags',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.tags', props);
    return resource.getResponseField('branch.tags') as unknown as Record<string, string>;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.stage'),
        outputPath: 'branch.stage',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.stage', props);
    return resource.getResponseField('branch.stage') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.displayName'),
        outputPath: 'branch.displayName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.displayName', props);
    return resource.getResponseField('branch.displayName') as unknown as string;
  }

  public get enableNotification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.enableNotification'),
        outputPath: 'branch.enableNotification',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.enableNotification', props);
    return resource.getResponseField('branch.enableNotification') as unknown as boolean;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.createTime'),
        outputPath: 'branch.createTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.createTime', props);
    return resource.getResponseField('branch.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.updateTime'),
        outputPath: 'branch.updateTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.updateTime', props);
    return resource.getResponseField('branch.updateTime') as unknown as string;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.environmentVariables'),
        outputPath: 'branch.environmentVariables',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.environmentVariables', props);
    return resource.getResponseField('branch.environmentVariables') as unknown as Record<string, string>;
  }

  public get enableAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.enableAutoBuild'),
        outputPath: 'branch.enableAutoBuild',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.enableAutoBuild', props);
    return resource.getResponseField('branch.enableAutoBuild') as unknown as boolean;
  }

  public get customDomains(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.customDomains'),
        outputPath: 'branch.customDomains',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.customDomains', props);
    return resource.getResponseField('branch.customDomains') as unknown as string[];
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.framework'),
        outputPath: 'branch.framework',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.framework', props);
    return resource.getResponseField('branch.framework') as unknown as string;
  }

  public get activeJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.activeJobId'),
        outputPath: 'branch.activeJobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.activeJobId', props);
    return resource.getResponseField('branch.activeJobId') as unknown as string;
  }

  public get totalNumberOfJobs(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.totalNumberOfJobs'),
        outputPath: 'branch.totalNumberOfJobs',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.totalNumberOfJobs', props);
    return resource.getResponseField('branch.totalNumberOfJobs') as unknown as string;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.enableBasicAuth'),
        outputPath: 'branch.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.enableBasicAuth', props);
    return resource.getResponseField('branch.enableBasicAuth') as unknown as boolean;
  }

  public get enablePerformanceMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.enablePerformanceMode'),
        outputPath: 'branch.enablePerformanceMode',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.enablePerformanceMode', props);
    return resource.getResponseField('branch.enablePerformanceMode') as unknown as boolean;
  }

  public get thumbnailUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.thumbnailUrl'),
        outputPath: 'branch.thumbnailUrl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.thumbnailUrl', props);
    return resource.getResponseField('branch.thumbnailUrl') as unknown as string;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.basicAuthCredentials'),
        outputPath: 'branch.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.basicAuthCredentials', props);
    return resource.getResponseField('branch.basicAuthCredentials') as unknown as string;
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.buildSpec'),
        outputPath: 'branch.buildSpec',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.buildSpec', props);
    return resource.getResponseField('branch.buildSpec') as unknown as string;
  }

  public get ttl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.ttl'),
        outputPath: 'branch.ttl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.ttl', props);
    return resource.getResponseField('branch.ttl') as unknown as string;
  }

  public get associatedResources(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.associatedResources'),
        outputPath: 'branch.associatedResources',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.associatedResources', props);
    return resource.getResponseField('branch.associatedResources') as unknown as string[];
  }

  public get enablePullRequestPreview(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.enablePullRequestPreview'),
        outputPath: 'branch.enablePullRequestPreview',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.enablePullRequestPreview', props);
    return resource.getResponseField('branch.enablePullRequestPreview') as unknown as boolean;
  }

  public get pullRequestEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.pullRequestEnvironmentName'),
        outputPath: 'branch.pullRequestEnvironmentName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.pullRequestEnvironmentName', props);
    return resource.getResponseField('branch.pullRequestEnvironmentName') as unknown as string;
  }

  public get destinationBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.destinationBranch'),
        outputPath: 'branch.destinationBranch',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.destinationBranch', props);
    return resource.getResponseField('branch.destinationBranch') as unknown as string;
  }

  public get sourceBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.sourceBranch'),
        outputPath: 'branch.sourceBranch',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.sourceBranch', props);
    return resource.getResponseField('branch.sourceBranch') as unknown as string;
  }

  public get backendEnvironmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetBranch.branch.backendEnvironmentArn'),
        outputPath: 'branch.backendEnvironmentArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.backendEnvironmentArn', props);
    return resource.getResponseField('branch.backendEnvironmentArn') as unknown as string;
  }

}

export class AmplifyResponsesFetchDomainAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetDomainAssociationRequest) {
  }

  public get domainAssociation(): AmplifyResponsesFetchDomainAssociationDomainAssociation {
    return new AmplifyResponsesFetchDomainAssociationDomainAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesFetchDomainAssociationDomainAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetDomainAssociationRequest) {
  }

  public get domainAssociationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetDomainAssociation.domainAssociation.domainAssociationArn'),
        outputPath: 'domainAssociation.domainAssociationArn',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainAssociation.domainAssociation.domainAssociationArn', props);
    return resource.getResponseField('domainAssociation.domainAssociationArn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetDomainAssociation.domainAssociation.domainName'),
        outputPath: 'domainAssociation.domainName',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainAssociation.domainAssociation.domainName', props);
    return resource.getResponseField('domainAssociation.domainName') as unknown as string;
  }

  public get enableAutoSubDomain(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetDomainAssociation.domainAssociation.enableAutoSubDomain'),
        outputPath: 'domainAssociation.enableAutoSubDomain',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainAssociation.domainAssociation.enableAutoSubDomain', props);
    return resource.getResponseField('domainAssociation.enableAutoSubDomain') as unknown as boolean;
  }

  public get autoSubDomainCreationPatterns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetDomainAssociation.domainAssociation.autoSubDomainCreationPatterns'),
        outputPath: 'domainAssociation.autoSubDomainCreationPatterns',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainAssociation.domainAssociation.autoSubDomainCreationPatterns', props);
    return resource.getResponseField('domainAssociation.autoSubDomainCreationPatterns') as unknown as string[];
  }

  public get autoSubDomainIamRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetDomainAssociation.domainAssociation.autoSubDomainIAMRole'),
        outputPath: 'domainAssociation.autoSubDomainIAMRole',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainAssociation.domainAssociation.autoSubDomainIAMRole', props);
    return resource.getResponseField('domainAssociation.autoSubDomainIAMRole') as unknown as string;
  }

  public get domainStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetDomainAssociation.domainAssociation.domainStatus'),
        outputPath: 'domainAssociation.domainStatus',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainAssociation.domainAssociation.domainStatus', props);
    return resource.getResponseField('domainAssociation.domainStatus') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetDomainAssociation.domainAssociation.statusReason'),
        outputPath: 'domainAssociation.statusReason',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainAssociation.domainAssociation.statusReason', props);
    return resource.getResponseField('domainAssociation.statusReason') as unknown as string;
  }

  public get certificateVerificationDnsRecord(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetDomainAssociation.domainAssociation.certificateVerificationDNSRecord'),
        outputPath: 'domainAssociation.certificateVerificationDNSRecord',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainAssociation.domainAssociation.certificateVerificationDNSRecord', props);
    return resource.getResponseField('domainAssociation.certificateVerificationDNSRecord') as unknown as string;
  }

  public get subDomains(): shapes.AmplifySubDomain[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetDomainAssociation.domainAssociation.subDomains'),
        outputPath: 'domainAssociation.subDomains',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainAssociation.domainAssociation.subDomains', props);
    return resource.getResponseField('domainAssociation.subDomains') as unknown as shapes.AmplifySubDomain[];
  }

}

export class AmplifyResponsesFetchJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetJobRequest) {
  }

  public get job(): AmplifyResponsesFetchJobJob {
    return new AmplifyResponsesFetchJobJob(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesFetchJobJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetJobRequest) {
  }

  public get summary(): AmplifyResponsesFetchJobJobSummary {
    return new AmplifyResponsesFetchJobJobSummary(this.__scope, this.__resources, this.__input);
  }

  public get steps(): shapes.AmplifyStep[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.steps'),
        outputPath: 'job.steps',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.steps', props);
    return resource.getResponseField('job.steps') as unknown as shapes.AmplifyStep[];
  }

}

export class AmplifyResponsesFetchJobJobSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetJobRequest) {
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.summary.jobArn'),
        outputPath: 'job.summary.jobArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.summary.jobArn', props);
    return resource.getResponseField('job.summary.jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.summary.jobId'),
        outputPath: 'job.summary.jobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.summary.jobId', props);
    return resource.getResponseField('job.summary.jobId') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.summary.commitId'),
        outputPath: 'job.summary.commitId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.summary.commitId', props);
    return resource.getResponseField('job.summary.commitId') as unknown as string;
  }

  public get commitMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.summary.commitMessage'),
        outputPath: 'job.summary.commitMessage',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.summary.commitMessage', props);
    return resource.getResponseField('job.summary.commitMessage') as unknown as string;
  }

  public get commitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.summary.commitTime'),
        outputPath: 'job.summary.commitTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.summary.commitTime', props);
    return resource.getResponseField('job.summary.commitTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.summary.startTime'),
        outputPath: 'job.summary.startTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.summary.startTime', props);
    return resource.getResponseField('job.summary.startTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.summary.status'),
        outputPath: 'job.summary.status',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.summary.status', props);
    return resource.getResponseField('job.summary.status') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.summary.endTime'),
        outputPath: 'job.summary.endTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.summary.endTime', props);
    return resource.getResponseField('job.summary.endTime') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetJob.job.summary.jobType'),
        outputPath: 'job.summary.jobType',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.summary.jobType', props);
    return resource.getResponseField('job.summary.jobType') as unknown as string;
  }

}

export class AmplifyResponsesFetchWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetWebhookRequest) {
  }

  public get webhook(): AmplifyResponsesFetchWebhookWebhook {
    return new AmplifyResponsesFetchWebhookWebhook(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesFetchWebhookWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyGetWebhookRequest) {
  }

  public get webhookArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetWebhook.webhook.webhookArn'),
        outputPath: 'webhook.webhookArn',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebhook.webhook.webhookArn', props);
    return resource.getResponseField('webhook.webhookArn') as unknown as string;
  }

  public get webhookId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetWebhook.webhook.webhookId'),
        outputPath: 'webhook.webhookId',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebhook.webhook.webhookId', props);
    return resource.getResponseField('webhook.webhookId') as unknown as string;
  }

  public get webhookUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetWebhook.webhook.webhookUrl'),
        outputPath: 'webhook.webhookUrl',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebhook.webhook.webhookUrl', props);
    return resource.getResponseField('webhook.webhookUrl') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetWebhook.webhook.branchName'),
        outputPath: 'webhook.branchName',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebhook.webhook.branchName', props);
    return resource.getResponseField('webhook.branchName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetWebhook.webhook.description'),
        outputPath: 'webhook.description',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebhook.webhook.description', props);
    return resource.getResponseField('webhook.description') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetWebhook.webhook.createTime'),
        outputPath: 'webhook.createTime',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebhook.webhook.createTime', props);
    return resource.getResponseField('webhook.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.GetWebhook.webhook.updateTime'),
        outputPath: 'webhook.updateTime',
        parameters: {
          webhookId: this.__input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebhook.webhook.updateTime', props);
    return resource.getResponseField('webhook.updateTime') as unknown as string;
  }

}

export class AmplifyResponsesListApps {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyListAppsRequest) {
  }

  public get apps(): shapes.AmplifyApp[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApps',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListApps.apps'),
        outputPath: 'apps',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApps.apps', props);
    return resource.getResponseField('apps') as unknown as shapes.AmplifyApp[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApps',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListApps.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApps.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyResponsesListArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyListArtifactsRequest) {
  }

  public get artifacts(): shapes.AmplifyArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listArtifacts',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListArtifacts.artifacts'),
        outputPath: 'artifacts',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListArtifacts.artifacts', props);
    return resource.getResponseField('artifacts') as unknown as shapes.AmplifyArtifact[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listArtifacts',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListArtifacts.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListArtifacts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyResponsesListBackendEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyListBackendEnvironmentsRequest) {
  }

  public get backendEnvironments(): shapes.AmplifyBackendEnvironment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackendEnvironments',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListBackendEnvironments.backendEnvironments'),
        outputPath: 'backendEnvironments',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackendEnvironments.backendEnvironments', props);
    return resource.getResponseField('backendEnvironments') as unknown as shapes.AmplifyBackendEnvironment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackendEnvironments',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListBackendEnvironments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          appId: this.__input.appId,
          environmentName: this.__input.environmentName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackendEnvironments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyResponsesListBranches {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyListBranchesRequest) {
  }

  public get branches(): shapes.AmplifyBranch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBranches',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListBranches.branches'),
        outputPath: 'branches',
        parameters: {
          appId: this.__input.appId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBranches.branches', props);
    return resource.getResponseField('branches') as unknown as shapes.AmplifyBranch[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBranches',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListBranches.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          appId: this.__input.appId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBranches.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyResponsesListDomainAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyListDomainAssociationsRequest) {
  }

  public get domainAssociations(): shapes.AmplifyDomainAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomainAssociations',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListDomainAssociations.domainAssociations'),
        outputPath: 'domainAssociations',
        parameters: {
          appId: this.__input.appId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomainAssociations.domainAssociations', props);
    return resource.getResponseField('domainAssociations') as unknown as shapes.AmplifyDomainAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomainAssociations',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListDomainAssociations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          appId: this.__input.appId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomainAssociations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyListJobsRequest) {
  }

  public get jobSummaries(): shapes.AmplifyJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListJobs.jobSummaries'),
        outputPath: 'jobSummaries',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.jobSummaries', props);
    return resource.getResponseField('jobSummaries') as unknown as shapes.AmplifyJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListTagsForResource.tags'),
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

export class AmplifyResponsesListWebhooks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyListWebhooksRequest) {
  }

  public get webhooks(): shapes.AmplifyWebhook[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebhooks',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListWebhooks.webhooks'),
        outputPath: 'webhooks',
        parameters: {
          appId: this.__input.appId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebhooks.webhooks', props);
    return resource.getResponseField('webhooks') as unknown as shapes.AmplifyWebhook[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebhooks',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.ListWebhooks.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          appId: this.__input.appId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebhooks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyResponsesStartDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyStartDeploymentRequest) {
  }

  public get jobSummary(): AmplifyResponsesStartDeploymentJobSummary {
    return new AmplifyResponsesStartDeploymentJobSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesStartDeploymentJobSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyStartDeploymentRequest) {
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartDeployment.jobSummary.jobArn'),
        outputPath: 'jobSummary.jobArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          sourceUrl: this.__input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.jobSummary.jobArn', props);
    return resource.getResponseField('jobSummary.jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartDeployment.jobSummary.jobId'),
        outputPath: 'jobSummary.jobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          sourceUrl: this.__input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.jobSummary.jobId', props);
    return resource.getResponseField('jobSummary.jobId') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartDeployment.jobSummary.commitId'),
        outputPath: 'jobSummary.commitId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          sourceUrl: this.__input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.jobSummary.commitId', props);
    return resource.getResponseField('jobSummary.commitId') as unknown as string;
  }

  public get commitMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartDeployment.jobSummary.commitMessage'),
        outputPath: 'jobSummary.commitMessage',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          sourceUrl: this.__input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.jobSummary.commitMessage', props);
    return resource.getResponseField('jobSummary.commitMessage') as unknown as string;
  }

  public get commitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartDeployment.jobSummary.commitTime'),
        outputPath: 'jobSummary.commitTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          sourceUrl: this.__input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.jobSummary.commitTime', props);
    return resource.getResponseField('jobSummary.commitTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartDeployment.jobSummary.startTime'),
        outputPath: 'jobSummary.startTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          sourceUrl: this.__input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.jobSummary.startTime', props);
    return resource.getResponseField('jobSummary.startTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartDeployment.jobSummary.status'),
        outputPath: 'jobSummary.status',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          sourceUrl: this.__input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.jobSummary.status', props);
    return resource.getResponseField('jobSummary.status') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartDeployment.jobSummary.endTime'),
        outputPath: 'jobSummary.endTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          sourceUrl: this.__input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.jobSummary.endTime', props);
    return resource.getResponseField('jobSummary.endTime') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartDeployment.jobSummary.jobType'),
        outputPath: 'jobSummary.jobType',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          sourceUrl: this.__input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.jobSummary.jobType', props);
    return resource.getResponseField('jobSummary.jobType') as unknown as string;
  }

}

export class AmplifyResponsesStartJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyStartJobRequest) {
  }

  public get jobSummary(): AmplifyResponsesStartJobJobSummary {
    return new AmplifyResponsesStartJobJobSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesStartJobJobSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyStartJobRequest) {
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartJob.jobSummary.jobArn'),
        outputPath: 'jobSummary.jobArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          jobType: this.__input.jobType,
          jobReason: this.__input.jobReason,
          commitId: this.__input.commitId,
          commitMessage: this.__input.commitMessage,
          commitTime: this.__input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJob.jobSummary.jobArn', props);
    return resource.getResponseField('jobSummary.jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartJob.jobSummary.jobId'),
        outputPath: 'jobSummary.jobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          jobType: this.__input.jobType,
          jobReason: this.__input.jobReason,
          commitId: this.__input.commitId,
          commitMessage: this.__input.commitMessage,
          commitTime: this.__input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJob.jobSummary.jobId', props);
    return resource.getResponseField('jobSummary.jobId') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartJob.jobSummary.commitId'),
        outputPath: 'jobSummary.commitId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          jobType: this.__input.jobType,
          jobReason: this.__input.jobReason,
          commitId: this.__input.commitId,
          commitMessage: this.__input.commitMessage,
          commitTime: this.__input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJob.jobSummary.commitId', props);
    return resource.getResponseField('jobSummary.commitId') as unknown as string;
  }

  public get commitMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartJob.jobSummary.commitMessage'),
        outputPath: 'jobSummary.commitMessage',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          jobType: this.__input.jobType,
          jobReason: this.__input.jobReason,
          commitId: this.__input.commitId,
          commitMessage: this.__input.commitMessage,
          commitTime: this.__input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJob.jobSummary.commitMessage', props);
    return resource.getResponseField('jobSummary.commitMessage') as unknown as string;
  }

  public get commitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartJob.jobSummary.commitTime'),
        outputPath: 'jobSummary.commitTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          jobType: this.__input.jobType,
          jobReason: this.__input.jobReason,
          commitId: this.__input.commitId,
          commitMessage: this.__input.commitMessage,
          commitTime: this.__input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJob.jobSummary.commitTime', props);
    return resource.getResponseField('jobSummary.commitTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartJob.jobSummary.startTime'),
        outputPath: 'jobSummary.startTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          jobType: this.__input.jobType,
          jobReason: this.__input.jobReason,
          commitId: this.__input.commitId,
          commitMessage: this.__input.commitMessage,
          commitTime: this.__input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJob.jobSummary.startTime', props);
    return resource.getResponseField('jobSummary.startTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartJob.jobSummary.status'),
        outputPath: 'jobSummary.status',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          jobType: this.__input.jobType,
          jobReason: this.__input.jobReason,
          commitId: this.__input.commitId,
          commitMessage: this.__input.commitMessage,
          commitTime: this.__input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJob.jobSummary.status', props);
    return resource.getResponseField('jobSummary.status') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartJob.jobSummary.endTime'),
        outputPath: 'jobSummary.endTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          jobType: this.__input.jobType,
          jobReason: this.__input.jobReason,
          commitId: this.__input.commitId,
          commitMessage: this.__input.commitMessage,
          commitTime: this.__input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJob.jobSummary.endTime', props);
    return resource.getResponseField('jobSummary.endTime') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StartJob.jobSummary.jobType'),
        outputPath: 'jobSummary.jobType',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
          jobType: this.__input.jobType,
          jobReason: this.__input.jobReason,
          commitId: this.__input.commitId,
          commitMessage: this.__input.commitMessage,
          commitTime: this.__input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJob.jobSummary.jobType', props);
    return resource.getResponseField('jobSummary.jobType') as unknown as string;
  }

}

export class AmplifyResponsesStopJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyStopJobRequest) {
  }

  public get jobSummary(): AmplifyResponsesStopJobJobSummary {
    return new AmplifyResponsesStopJobJobSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesStopJobJobSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyStopJobRequest) {
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StopJob.jobSummary.jobArn'),
        outputPath: 'jobSummary.jobArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.jobSummary.jobArn', props);
    return resource.getResponseField('jobSummary.jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StopJob.jobSummary.jobId'),
        outputPath: 'jobSummary.jobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.jobSummary.jobId', props);
    return resource.getResponseField('jobSummary.jobId') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StopJob.jobSummary.commitId'),
        outputPath: 'jobSummary.commitId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.jobSummary.commitId', props);
    return resource.getResponseField('jobSummary.commitId') as unknown as string;
  }

  public get commitMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StopJob.jobSummary.commitMessage'),
        outputPath: 'jobSummary.commitMessage',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.jobSummary.commitMessage', props);
    return resource.getResponseField('jobSummary.commitMessage') as unknown as string;
  }

  public get commitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StopJob.jobSummary.commitTime'),
        outputPath: 'jobSummary.commitTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.jobSummary.commitTime', props);
    return resource.getResponseField('jobSummary.commitTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StopJob.jobSummary.startTime'),
        outputPath: 'jobSummary.startTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.jobSummary.startTime', props);
    return resource.getResponseField('jobSummary.startTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StopJob.jobSummary.status'),
        outputPath: 'jobSummary.status',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.jobSummary.status', props);
    return resource.getResponseField('jobSummary.status') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StopJob.jobSummary.endTime'),
        outputPath: 'jobSummary.endTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.jobSummary.endTime', props);
    return resource.getResponseField('jobSummary.endTime') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.StopJob.jobSummary.jobType'),
        outputPath: 'jobSummary.jobType',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.jobSummary.jobType', props);
    return resource.getResponseField('jobSummary.jobType') as unknown as string;
  }

}

export class AmplifyResponsesUpdateApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateAppRequest) {
  }

  public get app(): AmplifyResponsesUpdateAppApp {
    return new AmplifyResponsesUpdateAppApp(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesUpdateAppApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateAppRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.appId'),
        outputPath: 'app.appId',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.appId', props);
    return resource.getResponseField('app.appId') as unknown as string;
  }

  public get appArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.appArn'),
        outputPath: 'app.appArn',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.appArn', props);
    return resource.getResponseField('app.appArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.name'),
        outputPath: 'app.name',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.name', props);
    return resource.getResponseField('app.name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.tags'),
        outputPath: 'app.tags',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.tags', props);
    return resource.getResponseField('app.tags') as unknown as Record<string, string>;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.description'),
        outputPath: 'app.description',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.description', props);
    return resource.getResponseField('app.description') as unknown as string;
  }

  public get repository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.repository'),
        outputPath: 'app.repository',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.repository', props);
    return resource.getResponseField('app.repository') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.platform'),
        outputPath: 'app.platform',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.platform', props);
    return resource.getResponseField('app.platform') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.createTime'),
        outputPath: 'app.createTime',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.createTime', props);
    return resource.getResponseField('app.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.updateTime'),
        outputPath: 'app.updateTime',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.updateTime', props);
    return resource.getResponseField('app.updateTime') as unknown as string;
  }

  public get iamServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.iamServiceRoleArn'),
        outputPath: 'app.iamServiceRoleArn',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.iamServiceRoleArn', props);
    return resource.getResponseField('app.iamServiceRoleArn') as unknown as string;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.environmentVariables'),
        outputPath: 'app.environmentVariables',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.environmentVariables', props);
    return resource.getResponseField('app.environmentVariables') as unknown as Record<string, string>;
  }

  public get defaultDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.defaultDomain'),
        outputPath: 'app.defaultDomain',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.defaultDomain', props);
    return resource.getResponseField('app.defaultDomain') as unknown as string;
  }

  public get enableBranchAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.enableBranchAutoBuild'),
        outputPath: 'app.enableBranchAutoBuild',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.enableBranchAutoBuild', props);
    return resource.getResponseField('app.enableBranchAutoBuild') as unknown as boolean;
  }

  public get enableBranchAutoDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.enableBranchAutoDeletion'),
        outputPath: 'app.enableBranchAutoDeletion',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.enableBranchAutoDeletion', props);
    return resource.getResponseField('app.enableBranchAutoDeletion') as unknown as boolean;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.enableBasicAuth'),
        outputPath: 'app.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.enableBasicAuth', props);
    return resource.getResponseField('app.enableBasicAuth') as unknown as boolean;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.basicAuthCredentials'),
        outputPath: 'app.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.basicAuthCredentials', props);
    return resource.getResponseField('app.basicAuthCredentials') as unknown as string;
  }

  public get customRules(): shapes.AmplifyCustomRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.customRules'),
        outputPath: 'app.customRules',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.customRules', props);
    return resource.getResponseField('app.customRules') as unknown as shapes.AmplifyCustomRule[];
  }

  public get productionBranch(): AmplifyResponsesUpdateAppAppProductionBranch {
    return new AmplifyResponsesUpdateAppAppProductionBranch(this.__scope, this.__resources, this.__input);
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.buildSpec'),
        outputPath: 'app.buildSpec',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.buildSpec', props);
    return resource.getResponseField('app.buildSpec') as unknown as string;
  }

  public get customHeaders(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.customHeaders'),
        outputPath: 'app.customHeaders',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.customHeaders', props);
    return resource.getResponseField('app.customHeaders') as unknown as string;
  }

  public get enableAutoBranchCreation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.enableAutoBranchCreation'),
        outputPath: 'app.enableAutoBranchCreation',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.enableAutoBranchCreation', props);
    return resource.getResponseField('app.enableAutoBranchCreation') as unknown as boolean;
  }

  public get autoBranchCreationPatterns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationPatterns'),
        outputPath: 'app.autoBranchCreationPatterns',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationPatterns', props);
    return resource.getResponseField('app.autoBranchCreationPatterns') as unknown as string[];
  }

  public get autoBranchCreationConfig(): AmplifyResponsesUpdateAppAppAutoBranchCreationConfig {
    return new AmplifyResponsesUpdateAppAppAutoBranchCreationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesUpdateAppAppProductionBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateAppRequest) {
  }

  public get lastDeployTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.productionBranch.lastDeployTime'),
        outputPath: 'app.productionBranch.lastDeployTime',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.productionBranch.lastDeployTime', props);
    return resource.getResponseField('app.productionBranch.lastDeployTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.productionBranch.status'),
        outputPath: 'app.productionBranch.status',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.productionBranch.status', props);
    return resource.getResponseField('app.productionBranch.status') as unknown as string;
  }

  public get thumbnailUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.productionBranch.thumbnailUrl'),
        outputPath: 'app.productionBranch.thumbnailUrl',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.productionBranch.thumbnailUrl', props);
    return resource.getResponseField('app.productionBranch.thumbnailUrl') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.productionBranch.branchName'),
        outputPath: 'app.productionBranch.branchName',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.productionBranch.branchName', props);
    return resource.getResponseField('app.productionBranch.branchName') as unknown as string;
  }

}

export class AmplifyResponsesUpdateAppAppAutoBranchCreationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateAppRequest) {
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.stage'),
        outputPath: 'app.autoBranchCreationConfig.stage',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.stage', props);
    return resource.getResponseField('app.autoBranchCreationConfig.stage') as unknown as string;
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.framework'),
        outputPath: 'app.autoBranchCreationConfig.framework',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.framework', props);
    return resource.getResponseField('app.autoBranchCreationConfig.framework') as unknown as string;
  }

  public get enableAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.enableAutoBuild'),
        outputPath: 'app.autoBranchCreationConfig.enableAutoBuild',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.enableAutoBuild', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enableAutoBuild') as unknown as boolean;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.environmentVariables'),
        outputPath: 'app.autoBranchCreationConfig.environmentVariables',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.environmentVariables', props);
    return resource.getResponseField('app.autoBranchCreationConfig.environmentVariables') as unknown as Record<string, string>;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.basicAuthCredentials'),
        outputPath: 'app.autoBranchCreationConfig.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.basicAuthCredentials', props);
    return resource.getResponseField('app.autoBranchCreationConfig.basicAuthCredentials') as unknown as string;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.enableBasicAuth'),
        outputPath: 'app.autoBranchCreationConfig.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.enableBasicAuth', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enableBasicAuth') as unknown as boolean;
  }

  public get enablePerformanceMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.enablePerformanceMode'),
        outputPath: 'app.autoBranchCreationConfig.enablePerformanceMode',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.enablePerformanceMode', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enablePerformanceMode') as unknown as boolean;
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.buildSpec'),
        outputPath: 'app.autoBranchCreationConfig.buildSpec',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.buildSpec', props);
    return resource.getResponseField('app.autoBranchCreationConfig.buildSpec') as unknown as string;
  }

  public get enablePullRequestPreview(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.enablePullRequestPreview'),
        outputPath: 'app.autoBranchCreationConfig.enablePullRequestPreview',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.enablePullRequestPreview', props);
    return resource.getResponseField('app.autoBranchCreationConfig.enablePullRequestPreview') as unknown as boolean;
  }

  public get pullRequestEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateApp.app.autoBranchCreationConfig.pullRequestEnvironmentName'),
        outputPath: 'app.autoBranchCreationConfig.pullRequestEnvironmentName',
        parameters: {
          appId: this.__input.appId,
          name: this.__input.name,
          description: this.__input.description,
          platform: this.__input.platform,
          iamServiceRoleArn: this.__input.iamServiceRoleArn,
          environmentVariables: this.__input.environmentVariables,
          enableBranchAutoBuild: this.__input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.__input.enableBranchAutoDeletion,
          enableBasicAuth: this.__input.enableBasicAuth,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          customRules: this.__input.customRules,
          buildSpec: this.__input.buildSpec,
          customHeaders: this.__input.customHeaders,
          enableAutoBranchCreation: this.__input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.__input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.__input.autoBranchCreationConfig?.stage,
            framework: this.__input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.__input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.__input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.__input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.__input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.__input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.__input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.__input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.__input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.__input.repository,
          oauthToken: this.__input.oauthToken,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApp.app.autoBranchCreationConfig.pullRequestEnvironmentName', props);
    return resource.getResponseField('app.autoBranchCreationConfig.pullRequestEnvironmentName') as unknown as string;
  }

}

export class AmplifyResponsesUpdateBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateBranchRequest) {
  }

  public get branch(): AmplifyResponsesUpdateBranchBranch {
    return new AmplifyResponsesUpdateBranchBranch(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesUpdateBranchBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateBranchRequest) {
  }

  public get branchArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.branchArn'),
        outputPath: 'branch.branchArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.branchArn', props);
    return resource.getResponseField('branch.branchArn') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.branchName'),
        outputPath: 'branch.branchName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.branchName', props);
    return resource.getResponseField('branch.branchName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.description'),
        outputPath: 'branch.description',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.description', props);
    return resource.getResponseField('branch.description') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.tags'),
        outputPath: 'branch.tags',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.tags', props);
    return resource.getResponseField('branch.tags') as unknown as Record<string, string>;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.stage'),
        outputPath: 'branch.stage',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.stage', props);
    return resource.getResponseField('branch.stage') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.displayName'),
        outputPath: 'branch.displayName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.displayName', props);
    return resource.getResponseField('branch.displayName') as unknown as string;
  }

  public get enableNotification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.enableNotification'),
        outputPath: 'branch.enableNotification',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.enableNotification', props);
    return resource.getResponseField('branch.enableNotification') as unknown as boolean;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.createTime'),
        outputPath: 'branch.createTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.createTime', props);
    return resource.getResponseField('branch.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.updateTime'),
        outputPath: 'branch.updateTime',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.updateTime', props);
    return resource.getResponseField('branch.updateTime') as unknown as string;
  }

  public get environmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.environmentVariables'),
        outputPath: 'branch.environmentVariables',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.environmentVariables', props);
    return resource.getResponseField('branch.environmentVariables') as unknown as Record<string, string>;
  }

  public get enableAutoBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.enableAutoBuild'),
        outputPath: 'branch.enableAutoBuild',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.enableAutoBuild', props);
    return resource.getResponseField('branch.enableAutoBuild') as unknown as boolean;
  }

  public get customDomains(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.customDomains'),
        outputPath: 'branch.customDomains',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.customDomains', props);
    return resource.getResponseField('branch.customDomains') as unknown as string[];
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.framework'),
        outputPath: 'branch.framework',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.framework', props);
    return resource.getResponseField('branch.framework') as unknown as string;
  }

  public get activeJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.activeJobId'),
        outputPath: 'branch.activeJobId',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.activeJobId', props);
    return resource.getResponseField('branch.activeJobId') as unknown as string;
  }

  public get totalNumberOfJobs(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.totalNumberOfJobs'),
        outputPath: 'branch.totalNumberOfJobs',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.totalNumberOfJobs', props);
    return resource.getResponseField('branch.totalNumberOfJobs') as unknown as string;
  }

  public get enableBasicAuth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.enableBasicAuth'),
        outputPath: 'branch.enableBasicAuth',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.enableBasicAuth', props);
    return resource.getResponseField('branch.enableBasicAuth') as unknown as boolean;
  }

  public get enablePerformanceMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.enablePerformanceMode'),
        outputPath: 'branch.enablePerformanceMode',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.enablePerformanceMode', props);
    return resource.getResponseField('branch.enablePerformanceMode') as unknown as boolean;
  }

  public get thumbnailUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.thumbnailUrl'),
        outputPath: 'branch.thumbnailUrl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.thumbnailUrl', props);
    return resource.getResponseField('branch.thumbnailUrl') as unknown as string;
  }

  public get basicAuthCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.basicAuthCredentials'),
        outputPath: 'branch.basicAuthCredentials',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.basicAuthCredentials', props);
    return resource.getResponseField('branch.basicAuthCredentials') as unknown as string;
  }

  public get buildSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.buildSpec'),
        outputPath: 'branch.buildSpec',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.buildSpec', props);
    return resource.getResponseField('branch.buildSpec') as unknown as string;
  }

  public get ttl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.ttl'),
        outputPath: 'branch.ttl',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.ttl', props);
    return resource.getResponseField('branch.ttl') as unknown as string;
  }

  public get associatedResources(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.associatedResources'),
        outputPath: 'branch.associatedResources',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.associatedResources', props);
    return resource.getResponseField('branch.associatedResources') as unknown as string[];
  }

  public get enablePullRequestPreview(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.enablePullRequestPreview'),
        outputPath: 'branch.enablePullRequestPreview',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.enablePullRequestPreview', props);
    return resource.getResponseField('branch.enablePullRequestPreview') as unknown as boolean;
  }

  public get pullRequestEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.pullRequestEnvironmentName'),
        outputPath: 'branch.pullRequestEnvironmentName',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.pullRequestEnvironmentName', props);
    return resource.getResponseField('branch.pullRequestEnvironmentName') as unknown as string;
  }

  public get destinationBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.destinationBranch'),
        outputPath: 'branch.destinationBranch',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.destinationBranch', props);
    return resource.getResponseField('branch.destinationBranch') as unknown as string;
  }

  public get sourceBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.sourceBranch'),
        outputPath: 'branch.sourceBranch',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.sourceBranch', props);
    return resource.getResponseField('branch.sourceBranch') as unknown as string;
  }

  public get backendEnvironmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBranch',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateBranch.branch.backendEnvironmentArn'),
        outputPath: 'branch.backendEnvironmentArn',
        parameters: {
          appId: this.__input.appId,
          branchName: this.__input.branchName,
          description: this.__input.description,
          framework: this.__input.framework,
          stage: this.__input.stage,
          enableNotification: this.__input.enableNotification,
          enableAutoBuild: this.__input.enableAutoBuild,
          environmentVariables: this.__input.environmentVariables,
          basicAuthCredentials: this.__input.basicAuthCredentials,
          enableBasicAuth: this.__input.enableBasicAuth,
          enablePerformanceMode: this.__input.enablePerformanceMode,
          buildSpec: this.__input.buildSpec,
          ttl: this.__input.ttl,
          displayName: this.__input.displayName,
          enablePullRequestPreview: this.__input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.__input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.__input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBranch.branch.backendEnvironmentArn', props);
    return resource.getResponseField('branch.backendEnvironmentArn') as unknown as string;
  }

}

export class AmplifyResponsesUpdateDomainAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateDomainAssociationRequest) {
  }

  public get domainAssociation(): AmplifyResponsesUpdateDomainAssociationDomainAssociation {
    return new AmplifyResponsesUpdateDomainAssociationDomainAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesUpdateDomainAssociationDomainAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateDomainAssociationRequest) {
  }

  public get domainAssociationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateDomainAssociation.domainAssociation.domainAssociationArn'),
        outputPath: 'domainAssociation.domainAssociationArn',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainAssociation.domainAssociation.domainAssociationArn', props);
    return resource.getResponseField('domainAssociation.domainAssociationArn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateDomainAssociation.domainAssociation.domainName'),
        outputPath: 'domainAssociation.domainName',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainAssociation.domainAssociation.domainName', props);
    return resource.getResponseField('domainAssociation.domainName') as unknown as string;
  }

  public get enableAutoSubDomain(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateDomainAssociation.domainAssociation.enableAutoSubDomain'),
        outputPath: 'domainAssociation.enableAutoSubDomain',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainAssociation.domainAssociation.enableAutoSubDomain', props);
    return resource.getResponseField('domainAssociation.enableAutoSubDomain') as unknown as boolean;
  }

  public get autoSubDomainCreationPatterns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateDomainAssociation.domainAssociation.autoSubDomainCreationPatterns'),
        outputPath: 'domainAssociation.autoSubDomainCreationPatterns',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainAssociation.domainAssociation.autoSubDomainCreationPatterns', props);
    return resource.getResponseField('domainAssociation.autoSubDomainCreationPatterns') as unknown as string[];
  }

  public get autoSubDomainIamRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateDomainAssociation.domainAssociation.autoSubDomainIAMRole'),
        outputPath: 'domainAssociation.autoSubDomainIAMRole',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainAssociation.domainAssociation.autoSubDomainIAMRole', props);
    return resource.getResponseField('domainAssociation.autoSubDomainIAMRole') as unknown as string;
  }

  public get domainStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateDomainAssociation.domainAssociation.domainStatus'),
        outputPath: 'domainAssociation.domainStatus',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainAssociation.domainAssociation.domainStatus', props);
    return resource.getResponseField('domainAssociation.domainStatus') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateDomainAssociation.domainAssociation.statusReason'),
        outputPath: 'domainAssociation.statusReason',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainAssociation.domainAssociation.statusReason', props);
    return resource.getResponseField('domainAssociation.statusReason') as unknown as string;
  }

  public get certificateVerificationDnsRecord(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateDomainAssociation.domainAssociation.certificateVerificationDNSRecord'),
        outputPath: 'domainAssociation.certificateVerificationDNSRecord',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainAssociation.domainAssociation.certificateVerificationDNSRecord', props);
    return resource.getResponseField('domainAssociation.certificateVerificationDNSRecord') as unknown as string;
  }

  public get subDomains(): shapes.AmplifySubDomain[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainAssociation',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateDomainAssociation.domainAssociation.subDomains'),
        outputPath: 'domainAssociation.subDomains',
        parameters: {
          appId: this.__input.appId,
          domainName: this.__input.domainName,
          enableAutoSubDomain: this.__input.enableAutoSubDomain,
          subDomainSettings: this.__input.subDomainSettings,
          autoSubDomainCreationPatterns: this.__input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.__input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainAssociation.domainAssociation.subDomains', props);
    return resource.getResponseField('domainAssociation.subDomains') as unknown as shapes.AmplifySubDomain[];
  }

}

export class AmplifyResponsesUpdateWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateWebhookRequest) {
  }

  public get webhook(): AmplifyResponsesUpdateWebhookWebhook {
    return new AmplifyResponsesUpdateWebhookWebhook(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyResponsesUpdateWebhookWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyUpdateWebhookRequest) {
  }

  public get webhookArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateWebhook.webhook.webhookArn'),
        outputPath: 'webhook.webhookArn',
        parameters: {
          webhookId: this.__input.webhookId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWebhook.webhook.webhookArn', props);
    return resource.getResponseField('webhook.webhookArn') as unknown as string;
  }

  public get webhookId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateWebhook.webhook.webhookId'),
        outputPath: 'webhook.webhookId',
        parameters: {
          webhookId: this.__input.webhookId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWebhook.webhook.webhookId', props);
    return resource.getResponseField('webhook.webhookId') as unknown as string;
  }

  public get webhookUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateWebhook.webhook.webhookUrl'),
        outputPath: 'webhook.webhookUrl',
        parameters: {
          webhookId: this.__input.webhookId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWebhook.webhook.webhookUrl', props);
    return resource.getResponseField('webhook.webhookUrl') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateWebhook.webhook.branchName'),
        outputPath: 'webhook.branchName',
        parameters: {
          webhookId: this.__input.webhookId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWebhook.webhook.branchName', props);
    return resource.getResponseField('webhook.branchName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateWebhook.webhook.description'),
        outputPath: 'webhook.description',
        parameters: {
          webhookId: this.__input.webhookId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWebhook.webhook.description', props);
    return resource.getResponseField('webhook.description') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateWebhook.webhook.createTime'),
        outputPath: 'webhook.createTime',
        parameters: {
          webhookId: this.__input.webhookId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWebhook.webhook.createTime', props);
    return resource.getResponseField('webhook.createTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebhook',
        service: 'Amplify',
        physicalResourceId: cr.PhysicalResourceId.of('Amplify.UpdateWebhook.webhook.updateTime'),
        outputPath: 'webhook.updateTime',
        parameters: {
          webhookId: this.__input.webhookId,
          branchName: this.__input.branchName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWebhook.webhook.updateTime', props);
    return resource.getResponseField('webhook.updateTime') as unknown as string;
  }

}

