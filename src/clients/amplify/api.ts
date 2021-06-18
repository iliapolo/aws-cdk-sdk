import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AmplifyClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApp(input: shapes.AmplifyCreateAppRequest): AmplifyCreateApp {
    return new AmplifyCreateApp(this, 'CreateApp', this.__resources, input);
  }

  public createBackendEnvironment(input: shapes.AmplifyCreateBackendEnvironmentRequest): AmplifyCreateBackendEnvironment {
    return new AmplifyCreateBackendEnvironment(this, 'CreateBackendEnvironment', this.__resources, input);
  }

  public createBranch(input: shapes.AmplifyCreateBranchRequest): AmplifyCreateBranch {
    return new AmplifyCreateBranch(this, 'CreateBranch', this.__resources, input);
  }

  public createDeployment(input: shapes.AmplifyCreateDeploymentRequest): AmplifyCreateDeployment {
    return new AmplifyCreateDeployment(this, 'CreateDeployment', this.__resources, input);
  }

  public createDomainAssociation(input: shapes.AmplifyCreateDomainAssociationRequest): AmplifyCreateDomainAssociation {
    return new AmplifyCreateDomainAssociation(this, 'CreateDomainAssociation', this.__resources, input);
  }

  public createWebhook(input: shapes.AmplifyCreateWebhookRequest): AmplifyCreateWebhook {
    return new AmplifyCreateWebhook(this, 'CreateWebhook', this.__resources, input);
  }

  public deleteApp(input: shapes.AmplifyDeleteAppRequest): AmplifyDeleteApp {
    return new AmplifyDeleteApp(this, 'DeleteApp', this.__resources, input);
  }

  public deleteBackendEnvironment(input: shapes.AmplifyDeleteBackendEnvironmentRequest): AmplifyDeleteBackendEnvironment {
    return new AmplifyDeleteBackendEnvironment(this, 'DeleteBackendEnvironment', this.__resources, input);
  }

  public deleteBranch(input: shapes.AmplifyDeleteBranchRequest): AmplifyDeleteBranch {
    return new AmplifyDeleteBranch(this, 'DeleteBranch', this.__resources, input);
  }

  public deleteDomainAssociation(input: shapes.AmplifyDeleteDomainAssociationRequest): AmplifyDeleteDomainAssociation {
    return new AmplifyDeleteDomainAssociation(this, 'DeleteDomainAssociation', this.__resources, input);
  }

  public deleteJob(input: shapes.AmplifyDeleteJobRequest): AmplifyDeleteJob {
    return new AmplifyDeleteJob(this, 'DeleteJob', this.__resources, input);
  }

  public deleteWebhook(input: shapes.AmplifyDeleteWebhookRequest): AmplifyDeleteWebhook {
    return new AmplifyDeleteWebhook(this, 'DeleteWebhook', this.__resources, input);
  }

  public generateAccessLogs(input: shapes.AmplifyGenerateAccessLogsRequest): AmplifyGenerateAccessLogs {
    return new AmplifyGenerateAccessLogs(this, 'GenerateAccessLogs', this.__resources, input);
  }

  public fetchApp(input: shapes.AmplifyGetAppRequest): AmplifyFetchApp {
    return new AmplifyFetchApp(this, 'FetchApp', this.__resources, input);
  }

  public fetchArtifactUrl(input: shapes.AmplifyGetArtifactUrlRequest): AmplifyFetchArtifactUrl {
    return new AmplifyFetchArtifactUrl(this, 'FetchArtifactUrl', this.__resources, input);
  }

  public fetchBackendEnvironment(input: shapes.AmplifyGetBackendEnvironmentRequest): AmplifyFetchBackendEnvironment {
    return new AmplifyFetchBackendEnvironment(this, 'FetchBackendEnvironment', this.__resources, input);
  }

  public fetchBranch(input: shapes.AmplifyGetBranchRequest): AmplifyFetchBranch {
    return new AmplifyFetchBranch(this, 'FetchBranch', this.__resources, input);
  }

  public fetchDomainAssociation(input: shapes.AmplifyGetDomainAssociationRequest): AmplifyFetchDomainAssociation {
    return new AmplifyFetchDomainAssociation(this, 'FetchDomainAssociation', this.__resources, input);
  }

  public fetchJob(input: shapes.AmplifyGetJobRequest): AmplifyFetchJob {
    return new AmplifyFetchJob(this, 'FetchJob', this.__resources, input);
  }

  public fetchWebhook(input: shapes.AmplifyGetWebhookRequest): AmplifyFetchWebhook {
    return new AmplifyFetchWebhook(this, 'FetchWebhook', this.__resources, input);
  }

  public listApps(input: shapes.AmplifyListAppsRequest): AmplifyListApps {
    return new AmplifyListApps(this, 'ListApps', this.__resources, input);
  }

  public listArtifacts(input: shapes.AmplifyListArtifactsRequest): AmplifyListArtifacts {
    return new AmplifyListArtifacts(this, 'ListArtifacts', this.__resources, input);
  }

  public listBackendEnvironments(input: shapes.AmplifyListBackendEnvironmentsRequest): AmplifyListBackendEnvironments {
    return new AmplifyListBackendEnvironments(this, 'ListBackendEnvironments', this.__resources, input);
  }

  public listBranches(input: shapes.AmplifyListBranchesRequest): AmplifyListBranches {
    return new AmplifyListBranches(this, 'ListBranches', this.__resources, input);
  }

  public listDomainAssociations(input: shapes.AmplifyListDomainAssociationsRequest): AmplifyListDomainAssociations {
    return new AmplifyListDomainAssociations(this, 'ListDomainAssociations', this.__resources, input);
  }

  public listJobs(input: shapes.AmplifyListJobsRequest): AmplifyListJobs {
    return new AmplifyListJobs(this, 'ListJobs', this.__resources, input);
  }

  public listTagsForResource(input: shapes.AmplifyListTagsForResourceRequest): AmplifyListTagsForResource {
    return new AmplifyListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listWebhooks(input: shapes.AmplifyListWebhooksRequest): AmplifyListWebhooks {
    return new AmplifyListWebhooks(this, 'ListWebhooks', this.__resources, input);
  }

  public startDeployment(input: shapes.AmplifyStartDeploymentRequest): AmplifyStartDeployment {
    return new AmplifyStartDeployment(this, 'StartDeployment', this.__resources, input);
  }

  public startJob(input: shapes.AmplifyStartJobRequest): AmplifyStartJob {
    return new AmplifyStartJob(this, 'StartJob', this.__resources, input);
  }

  public stopJob(input: shapes.AmplifyStopJobRequest): AmplifyStopJob {
    return new AmplifyStopJob(this, 'StopJob', this.__resources, input);
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

  public updateApp(input: shapes.AmplifyUpdateAppRequest): AmplifyUpdateApp {
    return new AmplifyUpdateApp(this, 'UpdateApp', this.__resources, input);
  }

  public updateBranch(input: shapes.AmplifyUpdateBranchRequest): AmplifyUpdateBranch {
    return new AmplifyUpdateBranch(this, 'UpdateBranch', this.__resources, input);
  }

  public updateDomainAssociation(input: shapes.AmplifyUpdateDomainAssociationRequest): AmplifyUpdateDomainAssociation {
    return new AmplifyUpdateDomainAssociation(this, 'UpdateDomainAssociation', this.__resources, input);
  }

  public updateWebhook(input: shapes.AmplifyUpdateWebhookRequest): AmplifyUpdateWebhook {
    return new AmplifyUpdateWebhook(this, 'UpdateWebhook', this.__resources, input);
  }

}

export class AmplifyCreateApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateAppRequest) {
    super(scope, id);
  }

  public get app(): AmplifyCreateAppApp {
    return new AmplifyCreateAppApp(this, 'App', this.__resources, this.input);
  }

}

export class AmplifyCreateAppApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateAppRequest) {
    super(scope, id);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.appId', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.appArn', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.name', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.tags', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.description', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.repository', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.platform', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.createTime', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.updateTime', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.iamServiceRoleArn', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.environmentVariables', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.defaultDomain', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.enableBranchAutoBuild', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.enableBranchAutoDeletion', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.enableBasicAuth', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.basicAuthCredentials', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.customRules', props);
    return resource.getResponseField('app.customRules') as unknown as shapes.AmplifyCustomRule[];
  }

  public get productionBranch(): AmplifyCreateAppAppProductionBranch {
    return new AmplifyCreateAppAppProductionBranch(this, 'ProductionBranch', this.__resources, this.input);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.buildSpec', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.customHeaders', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.enableAutoBranchCreation', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationPatterns', props);
    return resource.getResponseField('app.autoBranchCreationPatterns') as unknown as string[];
  }

  public get autoBranchCreationConfig(): AmplifyCreateAppAppAutoBranchCreationConfig {
    return new AmplifyCreateAppAppAutoBranchCreationConfig(this, 'AutoBranchCreationConfig', this.__resources, this.input);
  }

}

export class AmplifyCreateAppAppProductionBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateAppRequest) {
    super(scope, id);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.productionBranch.lastDeployTime', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.productionBranch.status', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.productionBranch.thumbnailUrl', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.productionBranch.branchName', props);
    return resource.getResponseField('app.productionBranch.branchName') as unknown as string;
  }

}

export class AmplifyCreateAppAppAutoBranchCreationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateAppRequest) {
    super(scope, id);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.stage', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.framework', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.enableAutoBuild', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.environmentVariables', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.basicAuthCredentials', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.enableBasicAuth', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.enablePerformanceMode', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.buildSpec', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.enablePullRequestPreview', props);
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
          name: this.input.name,
          description: this.input.description,
          repository: this.input.repository,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.app.autoBranchCreationConfig.pullRequestEnvironmentName', props);
    return resource.getResponseField('app.autoBranchCreationConfig.pullRequestEnvironmentName') as unknown as string;
  }

}

export class AmplifyCreateBackendEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateBackendEnvironmentRequest) {
    super(scope, id);
  }

  public get backendEnvironment(): AmplifyCreateBackendEnvironmentBackendEnvironment {
    return new AmplifyCreateBackendEnvironmentBackendEnvironment(this, 'BackendEnvironment', this.__resources, this.input);
  }

}

export class AmplifyCreateBackendEnvironmentBackendEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateBackendEnvironmentRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
          stackName: this.input.stackName,
          deploymentArtifacts: this.input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackendEnvironment.backendEnvironment.backendEnvironmentArn', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
          stackName: this.input.stackName,
          deploymentArtifacts: this.input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackendEnvironment.backendEnvironment.environmentName', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
          stackName: this.input.stackName,
          deploymentArtifacts: this.input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackendEnvironment.backendEnvironment.stackName', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
          stackName: this.input.stackName,
          deploymentArtifacts: this.input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackendEnvironment.backendEnvironment.deploymentArtifacts', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
          stackName: this.input.stackName,
          deploymentArtifacts: this.input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackendEnvironment.backendEnvironment.createTime', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
          stackName: this.input.stackName,
          deploymentArtifacts: this.input.deploymentArtifacts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackendEnvironment.backendEnvironment.updateTime', props);
    return resource.getResponseField('backendEnvironment.updateTime') as unknown as string;
  }

}

export class AmplifyCreateBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateBranchRequest) {
    super(scope, id);
  }

  public get branch(): AmplifyCreateBranchBranch {
    return new AmplifyCreateBranchBranch(this, 'Branch', this.__resources, this.input);
  }

}

export class AmplifyCreateBranchBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateBranchRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.branchArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.branchName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.description', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.tags', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.stage', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.displayName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.enableNotification', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.createTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.updateTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.environmentVariables', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.enableAutoBuild', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.customDomains', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.framework', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.activeJobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.totalNumberOfJobs', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.enableBasicAuth', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.enablePerformanceMode', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.thumbnailUrl', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.basicAuthCredentials', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.buildSpec', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.ttl', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.associatedResources', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.enablePullRequestPreview', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.pullRequestEnvironmentName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.destinationBranch', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.sourceBranch', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          stage: this.input.stage,
          framework: this.input.framework,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          tags: this.input.tags,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBranch.branch.backendEnvironmentArn', props);
    return resource.getResponseField('branch.backendEnvironmentArn') as unknown as string;
  }

}

export class AmplifyCreateDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateDeploymentRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          fileMap: this.input.fileMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.jobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          fileMap: this.input.fileMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.fileUploadUrls', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          fileMap: this.input.fileMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.zipUploadUrl', props);
    return resource.getResponseField('zipUploadUrl') as unknown as string;
  }

}

export class AmplifyCreateDomainAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateDomainAssociationRequest) {
    super(scope, id);
  }

  public get domainAssociation(): AmplifyCreateDomainAssociationDomainAssociation {
    return new AmplifyCreateDomainAssociationDomainAssociation(this, 'DomainAssociation', this.__resources, this.input);
  }

}

export class AmplifyCreateDomainAssociationDomainAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateDomainAssociationRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainAssociation.domainAssociation.domainAssociationArn', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainAssociation.domainAssociation.domainName', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainAssociation.domainAssociation.enableAutoSubDomain', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainAssociation.domainAssociation.autoSubDomainCreationPatterns', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainAssociation.domainAssociation.autoSubDomainIAMRole', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainAssociation.domainAssociation.domainStatus', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainAssociation.domainAssociation.statusReason', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainAssociation.domainAssociation.certificateVerificationDNSRecord', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainAssociation.domainAssociation.subDomains', props);
    return resource.getResponseField('domainAssociation.subDomains') as unknown as shapes.AmplifySubDomain[];
  }

}

export class AmplifyCreateWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateWebhookRequest) {
    super(scope, id);
  }

  public get webhook(): AmplifyCreateWebhookWebhook {
    return new AmplifyCreateWebhookWebhook(this, 'Webhook', this.__resources, this.input);
  }

}

export class AmplifyCreateWebhookWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyCreateWebhookRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebhook.webhook.webhookArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebhook.webhook.webhookId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebhook.webhook.webhookUrl', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebhook.webhook.branchName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebhook.webhook.description', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebhook.webhook.createTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebhook.webhook.updateTime', props);
    return resource.getResponseField('webhook.updateTime') as unknown as string;
  }

}

export class AmplifyDeleteApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteAppRequest) {
    super(scope, id);
  }

  public get app(): AmplifyDeleteAppApp {
    return new AmplifyDeleteAppApp(this, 'App', this.__resources, this.input);
  }

}

export class AmplifyDeleteAppApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteAppRequest) {
    super(scope, id);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.appId', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.appArn', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.name', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.tags', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.description', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.repository', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.platform', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.createTime', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.updateTime', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.iamServiceRoleArn', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.environmentVariables', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.defaultDomain', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.enableBranchAutoBuild', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.enableBranchAutoDeletion', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.enableBasicAuth', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.basicAuthCredentials', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.customRules', props);
    return resource.getResponseField('app.customRules') as unknown as shapes.AmplifyCustomRule[];
  }

  public get productionBranch(): AmplifyDeleteAppAppProductionBranch {
    return new AmplifyDeleteAppAppProductionBranch(this, 'ProductionBranch', this.__resources, this.input);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.buildSpec', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.customHeaders', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.enableAutoBranchCreation', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationPatterns', props);
    return resource.getResponseField('app.autoBranchCreationPatterns') as unknown as string[];
  }

  public get autoBranchCreationConfig(): AmplifyDeleteAppAppAutoBranchCreationConfig {
    return new AmplifyDeleteAppAppAutoBranchCreationConfig(this, 'AutoBranchCreationConfig', this.__resources, this.input);
  }

}

export class AmplifyDeleteAppAppProductionBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteAppRequest) {
    super(scope, id);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.productionBranch.lastDeployTime', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.productionBranch.status', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.productionBranch.thumbnailUrl', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.productionBranch.branchName', props);
    return resource.getResponseField('app.productionBranch.branchName') as unknown as string;
  }

}

export class AmplifyDeleteAppAppAutoBranchCreationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteAppRequest) {
    super(scope, id);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.stage', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.framework', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.enableAutoBuild', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.environmentVariables', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.basicAuthCredentials', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.enableBasicAuth', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.enablePerformanceMode', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.buildSpec', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.enablePullRequestPreview', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApp.app.autoBranchCreationConfig.pullRequestEnvironmentName', props);
    return resource.getResponseField('app.autoBranchCreationConfig.pullRequestEnvironmentName') as unknown as string;
  }

}

export class AmplifyDeleteBackendEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteBackendEnvironmentRequest) {
    super(scope, id);
  }

  public get backendEnvironment(): AmplifyDeleteBackendEnvironmentBackendEnvironment {
    return new AmplifyDeleteBackendEnvironmentBackendEnvironment(this, 'BackendEnvironment', this.__resources, this.input);
  }

}

export class AmplifyDeleteBackendEnvironmentBackendEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteBackendEnvironmentRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackendEnvironment.backendEnvironment.backendEnvironmentArn', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackendEnvironment.backendEnvironment.environmentName', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackendEnvironment.backendEnvironment.stackName', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackendEnvironment.backendEnvironment.deploymentArtifacts', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackendEnvironment.backendEnvironment.createTime', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackendEnvironment.backendEnvironment.updateTime', props);
    return resource.getResponseField('backendEnvironment.updateTime') as unknown as string;
  }

}

export class AmplifyDeleteBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteBranchRequest) {
    super(scope, id);
  }

  public get branch(): AmplifyDeleteBranchBranch {
    return new AmplifyDeleteBranchBranch(this, 'Branch', this.__resources, this.input);
  }

}

export class AmplifyDeleteBranchBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteBranchRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.branchArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.branchName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.description', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.tags', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.stage', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.displayName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.enableNotification', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.createTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.updateTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.environmentVariables', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.enableAutoBuild', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.customDomains', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.framework', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.activeJobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.totalNumberOfJobs', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.enableBasicAuth', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.enablePerformanceMode', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.thumbnailUrl', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.basicAuthCredentials', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.buildSpec', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.ttl', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.associatedResources', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.enablePullRequestPreview', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.pullRequestEnvironmentName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.destinationBranch', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.sourceBranch', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.branch.backendEnvironmentArn', props);
    return resource.getResponseField('branch.backendEnvironmentArn') as unknown as string;
  }

}

export class AmplifyDeleteDomainAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteDomainAssociationRequest) {
    super(scope, id);
  }

  public get domainAssociation(): AmplifyDeleteDomainAssociationDomainAssociation {
    return new AmplifyDeleteDomainAssociationDomainAssociation(this, 'DomainAssociation', this.__resources, this.input);
  }

}

export class AmplifyDeleteDomainAssociationDomainAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteDomainAssociationRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainAssociation.domainAssociation.domainAssociationArn', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainAssociation.domainAssociation.domainName', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainAssociation.domainAssociation.enableAutoSubDomain', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainAssociation.domainAssociation.autoSubDomainCreationPatterns', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainAssociation.domainAssociation.autoSubDomainIAMRole', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainAssociation.domainAssociation.domainStatus', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainAssociation.domainAssociation.statusReason', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainAssociation.domainAssociation.certificateVerificationDNSRecord', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainAssociation.domainAssociation.subDomains', props);
    return resource.getResponseField('domainAssociation.subDomains') as unknown as shapes.AmplifySubDomain[];
  }

}

export class AmplifyDeleteJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteJobRequest) {
    super(scope, id);
  }

  public get jobSummary(): AmplifyDeleteJobJobSummary {
    return new AmplifyDeleteJobJobSummary(this, 'JobSummary', this.__resources, this.input);
  }

}

export class AmplifyDeleteJobJobSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteJobRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.jobSummary.jobArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.jobSummary.jobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.jobSummary.commitId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.jobSummary.commitMessage', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.jobSummary.commitTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.jobSummary.startTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.jobSummary.status', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.jobSummary.endTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.jobSummary.jobType', props);
    return resource.getResponseField('jobSummary.jobType') as unknown as string;
  }

}

export class AmplifyDeleteWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteWebhookRequest) {
    super(scope, id);
  }

  public get webhook(): AmplifyDeleteWebhookWebhook {
    return new AmplifyDeleteWebhookWebhook(this, 'Webhook', this.__resources, this.input);
  }

}

export class AmplifyDeleteWebhookWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyDeleteWebhookRequest) {
    super(scope, id);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWebhook.webhook.webhookArn', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWebhook.webhook.webhookId', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWebhook.webhook.webhookUrl', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWebhook.webhook.branchName', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWebhook.webhook.description', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWebhook.webhook.createTime', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWebhook.webhook.updateTime', props);
    return resource.getResponseField('webhook.updateTime') as unknown as string;
  }

}

export class AmplifyGenerateAccessLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGenerateAccessLogsRequest) {
    super(scope, id);
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
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          domainName: this.input.domainName,
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateAccessLogs.logUrl', props);
    return resource.getResponseField('logUrl') as unknown as string;
  }

}

export class AmplifyFetchApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetAppRequest) {
    super(scope, id);
  }

  public get app(): AmplifyFetchAppApp {
    return new AmplifyFetchAppApp(this, 'App', this.__resources, this.input);
  }

}

export class AmplifyFetchAppApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetAppRequest) {
    super(scope, id);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.appId', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.appArn', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.name', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.tags', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.description', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.repository', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.platform', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.createTime', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.updateTime', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.iamServiceRoleArn', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.environmentVariables', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.defaultDomain', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.enableBranchAutoBuild', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.enableBranchAutoDeletion', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.enableBasicAuth', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.basicAuthCredentials', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.customRules', props);
    return resource.getResponseField('app.customRules') as unknown as shapes.AmplifyCustomRule[];
  }

  public get productionBranch(): AmplifyFetchAppAppProductionBranch {
    return new AmplifyFetchAppAppProductionBranch(this, 'ProductionBranch', this.__resources, this.input);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.buildSpec', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.customHeaders', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.enableAutoBranchCreation', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationPatterns', props);
    return resource.getResponseField('app.autoBranchCreationPatterns') as unknown as string[];
  }

  public get autoBranchCreationConfig(): AmplifyFetchAppAppAutoBranchCreationConfig {
    return new AmplifyFetchAppAppAutoBranchCreationConfig(this, 'AutoBranchCreationConfig', this.__resources, this.input);
  }

}

export class AmplifyFetchAppAppProductionBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetAppRequest) {
    super(scope, id);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.productionBranch.lastDeployTime', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.productionBranch.status', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.productionBranch.thumbnailUrl', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.productionBranch.branchName', props);
    return resource.getResponseField('app.productionBranch.branchName') as unknown as string;
  }

}

export class AmplifyFetchAppAppAutoBranchCreationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetAppRequest) {
    super(scope, id);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.stage', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.framework', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.enableAutoBuild', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.environmentVariables', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.basicAuthCredentials', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.enableBasicAuth', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.enablePerformanceMode', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.buildSpec', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.enablePullRequestPreview', props);
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
          appId: this.input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApp.app.autoBranchCreationConfig.pullRequestEnvironmentName', props);
    return resource.getResponseField('app.autoBranchCreationConfig.pullRequestEnvironmentName') as unknown as string;
  }

}

export class AmplifyFetchArtifactUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetArtifactUrlRequest) {
    super(scope, id);
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
          artifactId: this.input.artifactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetArtifactUrl.artifactId', props);
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
          artifactId: this.input.artifactId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetArtifactUrl.artifactUrl', props);
    return resource.getResponseField('artifactUrl') as unknown as string;
  }

}

export class AmplifyFetchBackendEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetBackendEnvironmentRequest) {
    super(scope, id);
  }

  public get backendEnvironment(): AmplifyFetchBackendEnvironmentBackendEnvironment {
    return new AmplifyFetchBackendEnvironmentBackendEnvironment(this, 'BackendEnvironment', this.__resources, this.input);
  }

}

export class AmplifyFetchBackendEnvironmentBackendEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetBackendEnvironmentRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackendEnvironment.backendEnvironment.backendEnvironmentArn', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackendEnvironment.backendEnvironment.environmentName', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackendEnvironment.backendEnvironment.stackName', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackendEnvironment.backendEnvironment.deploymentArtifacts', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackendEnvironment.backendEnvironment.createTime', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackendEnvironment.backendEnvironment.updateTime', props);
    return resource.getResponseField('backendEnvironment.updateTime') as unknown as string;
  }

}

export class AmplifyFetchBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetBranchRequest) {
    super(scope, id);
  }

  public get branch(): AmplifyFetchBranchBranch {
    return new AmplifyFetchBranchBranch(this, 'Branch', this.__resources, this.input);
  }

}

export class AmplifyFetchBranchBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetBranchRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.branchArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.branchName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.description', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.tags', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.stage', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.displayName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.enableNotification', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.createTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.updateTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.environmentVariables', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.enableAutoBuild', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.customDomains', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.framework', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.activeJobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.totalNumberOfJobs', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.enableBasicAuth', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.enablePerformanceMode', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.thumbnailUrl', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.basicAuthCredentials', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.buildSpec', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.ttl', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.associatedResources', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.enablePullRequestPreview', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.pullRequestEnvironmentName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.destinationBranch', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.sourceBranch', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.backendEnvironmentArn', props);
    return resource.getResponseField('branch.backendEnvironmentArn') as unknown as string;
  }

}

export class AmplifyFetchDomainAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetDomainAssociationRequest) {
    super(scope, id);
  }

  public get domainAssociation(): AmplifyFetchDomainAssociationDomainAssociation {
    return new AmplifyFetchDomainAssociationDomainAssociation(this, 'DomainAssociation', this.__resources, this.input);
  }

}

export class AmplifyFetchDomainAssociationDomainAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetDomainAssociationRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainAssociation.domainAssociation.domainAssociationArn', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainAssociation.domainAssociation.domainName', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainAssociation.domainAssociation.enableAutoSubDomain', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainAssociation.domainAssociation.autoSubDomainCreationPatterns', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainAssociation.domainAssociation.autoSubDomainIAMRole', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainAssociation.domainAssociation.domainStatus', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainAssociation.domainAssociation.statusReason', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainAssociation.domainAssociation.certificateVerificationDNSRecord', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainAssociation.domainAssociation.subDomains', props);
    return resource.getResponseField('domainAssociation.subDomains') as unknown as shapes.AmplifySubDomain[];
  }

}

export class AmplifyFetchJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetJobRequest) {
    super(scope, id);
  }

  public get job(): AmplifyFetchJobJob {
    return new AmplifyFetchJobJob(this, 'Job', this.__resources, this.input);
  }

}

export class AmplifyFetchJobJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetJobRequest) {
    super(scope, id);
  }

  public get summary(): AmplifyFetchJobJobSummary {
    return new AmplifyFetchJobJobSummary(this, 'Summary', this.__resources, this.input);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.steps', props);
    return resource.getResponseField('job.steps') as unknown as shapes.AmplifyStep[];
  }

}

export class AmplifyFetchJobJobSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetJobRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.summary.jobArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.summary.jobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.summary.commitId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.summary.commitMessage', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.summary.commitTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.summary.startTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.summary.status', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.summary.endTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.summary.jobType', props);
    return resource.getResponseField('job.summary.jobType') as unknown as string;
  }

}

export class AmplifyFetchWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetWebhookRequest) {
    super(scope, id);
  }

  public get webhook(): AmplifyFetchWebhookWebhook {
    return new AmplifyFetchWebhookWebhook(this, 'Webhook', this.__resources, this.input);
  }

}

export class AmplifyFetchWebhookWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyGetWebhookRequest) {
    super(scope, id);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebhook.webhook.webhookArn', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebhook.webhook.webhookId', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebhook.webhook.webhookUrl', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebhook.webhook.branchName', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebhook.webhook.description', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebhook.webhook.createTime', props);
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
          webhookId: this.input.webhookId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebhook.webhook.updateTime', props);
    return resource.getResponseField('webhook.updateTime') as unknown as string;
  }

}

export class AmplifyListApps extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyListAppsRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApps.apps', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApps.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyListArtifacts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyListArtifactsRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListArtifacts.artifacts', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListArtifacts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyListBackendEnvironments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyListBackendEnvironmentsRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackendEnvironments.backendEnvironments', props);
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
          appId: this.input.appId,
          environmentName: this.input.environmentName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackendEnvironments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyListBranches extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyListBranchesRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBranches.branches', props);
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
          appId: this.input.appId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBranches.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyListDomainAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyListDomainAssociationsRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomainAssociations.domainAssociations', props);
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
          appId: this.input.appId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomainAssociations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyListJobsRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.jobSummaries', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class AmplifyListWebhooks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyListWebhooksRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebhooks.webhooks', props);
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
          appId: this.input.appId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebhooks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AmplifyStartDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyStartDeploymentRequest) {
    super(scope, id);
  }

  public get jobSummary(): AmplifyStartDeploymentJobSummary {
    return new AmplifyStartDeploymentJobSummary(this, 'JobSummary', this.__resources, this.input);
  }

}

export class AmplifyStartDeploymentJobSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyStartDeploymentRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          sourceUrl: this.input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.jobSummary.jobArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          sourceUrl: this.input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.jobSummary.jobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          sourceUrl: this.input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.jobSummary.commitId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          sourceUrl: this.input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.jobSummary.commitMessage', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          sourceUrl: this.input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.jobSummary.commitTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          sourceUrl: this.input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.jobSummary.startTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          sourceUrl: this.input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.jobSummary.status', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          sourceUrl: this.input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.jobSummary.endTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          sourceUrl: this.input.sourceUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.jobSummary.jobType', props);
    return resource.getResponseField('jobSummary.jobType') as unknown as string;
  }

}

export class AmplifyStartJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyStartJobRequest) {
    super(scope, id);
  }

  public get jobSummary(): AmplifyStartJobJobSummary {
    return new AmplifyStartJobJobSummary(this, 'JobSummary', this.__resources, this.input);
  }

}

export class AmplifyStartJobJobSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyStartJobRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          jobType: this.input.jobType,
          jobReason: this.input.jobReason,
          commitId: this.input.commitId,
          commitMessage: this.input.commitMessage,
          commitTime: this.input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJob.jobSummary.jobArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          jobType: this.input.jobType,
          jobReason: this.input.jobReason,
          commitId: this.input.commitId,
          commitMessage: this.input.commitMessage,
          commitTime: this.input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJob.jobSummary.jobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          jobType: this.input.jobType,
          jobReason: this.input.jobReason,
          commitId: this.input.commitId,
          commitMessage: this.input.commitMessage,
          commitTime: this.input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJob.jobSummary.commitId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          jobType: this.input.jobType,
          jobReason: this.input.jobReason,
          commitId: this.input.commitId,
          commitMessage: this.input.commitMessage,
          commitTime: this.input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJob.jobSummary.commitMessage', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          jobType: this.input.jobType,
          jobReason: this.input.jobReason,
          commitId: this.input.commitId,
          commitMessage: this.input.commitMessage,
          commitTime: this.input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJob.jobSummary.commitTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          jobType: this.input.jobType,
          jobReason: this.input.jobReason,
          commitId: this.input.commitId,
          commitMessage: this.input.commitMessage,
          commitTime: this.input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJob.jobSummary.startTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          jobType: this.input.jobType,
          jobReason: this.input.jobReason,
          commitId: this.input.commitId,
          commitMessage: this.input.commitMessage,
          commitTime: this.input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJob.jobSummary.status', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          jobType: this.input.jobType,
          jobReason: this.input.jobReason,
          commitId: this.input.commitId,
          commitMessage: this.input.commitMessage,
          commitTime: this.input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJob.jobSummary.endTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
          jobType: this.input.jobType,
          jobReason: this.input.jobReason,
          commitId: this.input.commitId,
          commitMessage: this.input.commitMessage,
          commitTime: this.input.commitTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJob.jobSummary.jobType', props);
    return resource.getResponseField('jobSummary.jobType') as unknown as string;
  }

}

export class AmplifyStopJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyStopJobRequest) {
    super(scope, id);
  }

  public get jobSummary(): AmplifyStopJobJobSummary {
    return new AmplifyStopJobJobSummary(this, 'JobSummary', this.__resources, this.input);
  }

}

export class AmplifyStopJobJobSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyStopJobRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.jobSummary.jobArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.jobSummary.jobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.jobSummary.commitId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.jobSummary.commitMessage', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.jobSummary.commitTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.jobSummary.startTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.jobSummary.status', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.jobSummary.endTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.jobSummary.jobType', props);
    return resource.getResponseField('jobSummary.jobType') as unknown as string;
  }

}

export class AmplifyUpdateApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateAppRequest) {
    super(scope, id);
  }

  public get app(): AmplifyUpdateAppApp {
    return new AmplifyUpdateAppApp(this, 'App', this.__resources, this.input);
  }

}

export class AmplifyUpdateAppApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateAppRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.appId', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.appArn', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.name', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.tags', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.description', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.repository', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.platform', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.createTime', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.updateTime', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.iamServiceRoleArn', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.environmentVariables', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.defaultDomain', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.enableBranchAutoBuild', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.enableBranchAutoDeletion', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.enableBasicAuth', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.basicAuthCredentials', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.customRules', props);
    return resource.getResponseField('app.customRules') as unknown as shapes.AmplifyCustomRule[];
  }

  public get productionBranch(): AmplifyUpdateAppAppProductionBranch {
    return new AmplifyUpdateAppAppProductionBranch(this, 'ProductionBranch', this.__resources, this.input);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.buildSpec', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.customHeaders', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.enableAutoBranchCreation', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationPatterns', props);
    return resource.getResponseField('app.autoBranchCreationPatterns') as unknown as string[];
  }

  public get autoBranchCreationConfig(): AmplifyUpdateAppAppAutoBranchCreationConfig {
    return new AmplifyUpdateAppAppAutoBranchCreationConfig(this, 'AutoBranchCreationConfig', this.__resources, this.input);
  }

}

export class AmplifyUpdateAppAppProductionBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateAppRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.productionBranch.lastDeployTime', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.productionBranch.status', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.productionBranch.thumbnailUrl', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.productionBranch.branchName', props);
    return resource.getResponseField('app.productionBranch.branchName') as unknown as string;
  }

}

export class AmplifyUpdateAppAppAutoBranchCreationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateAppRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.stage', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.framework', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.enableAutoBuild', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.environmentVariables', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.basicAuthCredentials', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.enableBasicAuth', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.enablePerformanceMode', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.buildSpec', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.enablePullRequestPreview', props);
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
          appId: this.input.appId,
          name: this.input.name,
          description: this.input.description,
          platform: this.input.platform,
          iamServiceRoleArn: this.input.iamServiceRoleArn,
          environmentVariables: this.input.environmentVariables,
          enableBranchAutoBuild: this.input.enableBranchAutoBuild,
          enableBranchAutoDeletion: this.input.enableBranchAutoDeletion,
          enableBasicAuth: this.input.enableBasicAuth,
          basicAuthCredentials: this.input.basicAuthCredentials,
          customRules: this.input.customRules,
          buildSpec: this.input.buildSpec,
          customHeaders: this.input.customHeaders,
          enableAutoBranchCreation: this.input.enableAutoBranchCreation,
          autoBranchCreationPatterns: this.input.autoBranchCreationPatterns,
          autoBranchCreationConfig: {
            stage: this.input.autoBranchCreationConfig?.stage,
            framework: this.input.autoBranchCreationConfig?.framework,
            enableAutoBuild: this.input.autoBranchCreationConfig?.enableAutoBuild,
            environmentVariables: this.input.autoBranchCreationConfig?.environmentVariables,
            basicAuthCredentials: this.input.autoBranchCreationConfig?.basicAuthCredentials,
            enableBasicAuth: this.input.autoBranchCreationConfig?.enableBasicAuth,
            enablePerformanceMode: this.input.autoBranchCreationConfig?.enablePerformanceMode,
            buildSpec: this.input.autoBranchCreationConfig?.buildSpec,
            enablePullRequestPreview: this.input.autoBranchCreationConfig?.enablePullRequestPreview,
            pullRequestEnvironmentName: this.input.autoBranchCreationConfig?.pullRequestEnvironmentName,
          },
          repository: this.input.repository,
          oauthToken: this.input.oauthToken,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApp.app.autoBranchCreationConfig.pullRequestEnvironmentName', props);
    return resource.getResponseField('app.autoBranchCreationConfig.pullRequestEnvironmentName') as unknown as string;
  }

}

export class AmplifyUpdateBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateBranchRequest) {
    super(scope, id);
  }

  public get branch(): AmplifyUpdateBranchBranch {
    return new AmplifyUpdateBranchBranch(this, 'Branch', this.__resources, this.input);
  }

}

export class AmplifyUpdateBranchBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateBranchRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.branchArn', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.branchName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.description', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.tags', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.stage', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.displayName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.enableNotification', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.createTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.updateTime', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.environmentVariables', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.enableAutoBuild', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.customDomains', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.framework', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.activeJobId', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.totalNumberOfJobs', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.enableBasicAuth', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.enablePerformanceMode', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.thumbnailUrl', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.basicAuthCredentials', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.buildSpec', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.ttl', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.associatedResources', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.enablePullRequestPreview', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.pullRequestEnvironmentName', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.destinationBranch', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.sourceBranch', props);
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
          appId: this.input.appId,
          branchName: this.input.branchName,
          description: this.input.description,
          framework: this.input.framework,
          stage: this.input.stage,
          enableNotification: this.input.enableNotification,
          enableAutoBuild: this.input.enableAutoBuild,
          environmentVariables: this.input.environmentVariables,
          basicAuthCredentials: this.input.basicAuthCredentials,
          enableBasicAuth: this.input.enableBasicAuth,
          enablePerformanceMode: this.input.enablePerformanceMode,
          buildSpec: this.input.buildSpec,
          ttl: this.input.ttl,
          displayName: this.input.displayName,
          enablePullRequestPreview: this.input.enablePullRequestPreview,
          pullRequestEnvironmentName: this.input.pullRequestEnvironmentName,
          backendEnvironmentArn: this.input.backendEnvironmentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBranch.branch.backendEnvironmentArn', props);
    return resource.getResponseField('branch.backendEnvironmentArn') as unknown as string;
  }

}

export class AmplifyUpdateDomainAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateDomainAssociationRequest) {
    super(scope, id);
  }

  public get domainAssociation(): AmplifyUpdateDomainAssociationDomainAssociation {
    return new AmplifyUpdateDomainAssociationDomainAssociation(this, 'DomainAssociation', this.__resources, this.input);
  }

}

export class AmplifyUpdateDomainAssociationDomainAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateDomainAssociationRequest) {
    super(scope, id);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainAssociation.domainAssociation.domainAssociationArn', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainAssociation.domainAssociation.domainName', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainAssociation.domainAssociation.enableAutoSubDomain', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainAssociation.domainAssociation.autoSubDomainCreationPatterns', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainAssociation.domainAssociation.autoSubDomainIAMRole', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainAssociation.domainAssociation.domainStatus', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainAssociation.domainAssociation.statusReason', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainAssociation.domainAssociation.certificateVerificationDNSRecord', props);
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
          appId: this.input.appId,
          domainName: this.input.domainName,
          enableAutoSubDomain: this.input.enableAutoSubDomain,
          subDomainSettings: this.input.subDomainSettings,
          autoSubDomainCreationPatterns: this.input.autoSubDomainCreationPatterns,
          autoSubDomainIAMRole: this.input.autoSubDomainIAMRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainAssociation.domainAssociation.subDomains', props);
    return resource.getResponseField('domainAssociation.subDomains') as unknown as shapes.AmplifySubDomain[];
  }

}

export class AmplifyUpdateWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateWebhookRequest) {
    super(scope, id);
  }

  public get webhook(): AmplifyUpdateWebhookWebhook {
    return new AmplifyUpdateWebhookWebhook(this, 'Webhook', this.__resources, this.input);
  }

}

export class AmplifyUpdateWebhookWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AmplifyUpdateWebhookRequest) {
    super(scope, id);
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
          webhookId: this.input.webhookId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWebhook.webhook.webhookArn', props);
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
          webhookId: this.input.webhookId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWebhook.webhook.webhookId', props);
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
          webhookId: this.input.webhookId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWebhook.webhook.webhookUrl', props);
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
          webhookId: this.input.webhookId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWebhook.webhook.branchName', props);
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
          webhookId: this.input.webhookId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWebhook.webhook.description', props);
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
          webhookId: this.input.webhookId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWebhook.webhook.createTime', props);
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
          webhookId: this.input.webhookId,
          branchName: this.input.branchName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWebhook.webhook.updateTime', props);
    return resource.getResponseField('webhook.updateTime') as unknown as string;
  }

}

