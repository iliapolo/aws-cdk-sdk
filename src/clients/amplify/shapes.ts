/**
 * @schema AmplifyCreateAppRequest
 */
export interface AmplifyCreateAppRequest {
  /**
   * @schema AmplifyCreateAppRequest#name
   */
  readonly name: string;

  /**
   * @schema AmplifyCreateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema AmplifyCreateAppRequest#repository
   */
  readonly repository?: string;

  /**
   * @schema AmplifyCreateAppRequest#platform
   */
  readonly platform?: string;

  /**
   * @schema AmplifyCreateAppRequest#iamServiceRoleArn
   */
  readonly iamServiceRoleArn?: string;

  /**
   * @schema AmplifyCreateAppRequest#oauthToken
   */
  readonly oauthToken?: string;

  /**
   * @schema AmplifyCreateAppRequest#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AmplifyCreateAppRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyCreateAppRequest#enableBranchAutoBuild
   */
  readonly enableBranchAutoBuild?: boolean;

  /**
   * @schema AmplifyCreateAppRequest#enableBranchAutoDeletion
   */
  readonly enableBranchAutoDeletion?: boolean;

  /**
   * @schema AmplifyCreateAppRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyCreateAppRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyCreateAppRequest#customRules
   */
  readonly customRules?: AmplifyCustomRule[];

  /**
   * @schema AmplifyCreateAppRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AmplifyCreateAppRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyCreateAppRequest#customHeaders
   */
  readonly customHeaders?: string;

  /**
   * @schema AmplifyCreateAppRequest#enableAutoBranchCreation
   */
  readonly enableAutoBranchCreation?: boolean;

  /**
   * @schema AmplifyCreateAppRequest#autoBranchCreationPatterns
   */
  readonly autoBranchCreationPatterns?: string[];

  /**
   * @schema AmplifyCreateAppRequest#autoBranchCreationConfig
   */
  readonly autoBranchCreationConfig?: AmplifyAutoBranchCreationConfig;

}

/**
 * @schema AmplifyCreateAppResult
 */
export interface AmplifyCreateAppResult {
  /**
   * @schema AmplifyCreateAppResult#app
   */
  readonly app: AmplifyApp;

}

/**
 * @schema AmplifyCreateBackendEnvironmentRequest
 */
export interface AmplifyCreateBackendEnvironmentRequest {
  /**
   * @schema AmplifyCreateBackendEnvironmentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateBackendEnvironmentRequest#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema AmplifyCreateBackendEnvironmentRequest#stackName
   */
  readonly stackName?: string;

  /**
   * @schema AmplifyCreateBackendEnvironmentRequest#deploymentArtifacts
   */
  readonly deploymentArtifacts?: string;

}

/**
 * @schema AmplifyCreateBackendEnvironmentResult
 */
export interface AmplifyCreateBackendEnvironmentResult {
  /**
   * @schema AmplifyCreateBackendEnvironmentResult#backendEnvironment
   */
  readonly backendEnvironment: AmplifyBackendEnvironment;

}

/**
 * @schema AmplifyCreateBranchRequest
 */
export interface AmplifyCreateBranchRequest {
  /**
   * @schema AmplifyCreateBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateBranchRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyCreateBranchRequest#description
   */
  readonly description?: string;

  /**
   * @schema AmplifyCreateBranchRequest#stage
   */
  readonly stage?: string;

  /**
   * @schema AmplifyCreateBranchRequest#framework
   */
  readonly framework?: string;

  /**
   * @schema AmplifyCreateBranchRequest#enableNotification
   */
  readonly enableNotification?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#enableAutoBuild
   */
  readonly enableAutoBuild?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyCreateBranchRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyCreateBranchRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AmplifyCreateBranchRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyCreateBranchRequest#ttl
   */
  readonly ttl?: string;

  /**
   * @schema AmplifyCreateBranchRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema AmplifyCreateBranchRequest#enablePullRequestPreview
   */
  readonly enablePullRequestPreview?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

  /**
   * @schema AmplifyCreateBranchRequest#backendEnvironmentArn
   */
  readonly backendEnvironmentArn?: string;

}

/**
 * @schema AmplifyCreateBranchResult
 */
export interface AmplifyCreateBranchResult {
  /**
   * @schema AmplifyCreateBranchResult#branch
   */
  readonly branch: AmplifyBranch;

}

/**
 * @schema AmplifyCreateDeploymentRequest
 */
export interface AmplifyCreateDeploymentRequest {
  /**
   * @schema AmplifyCreateDeploymentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateDeploymentRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyCreateDeploymentRequest#fileMap
   */
  readonly fileMap?: { [key: string]: string };

}

/**
 * @schema AmplifyCreateDeploymentResult
 */
export interface AmplifyCreateDeploymentResult {
  /**
   * @schema AmplifyCreateDeploymentResult#jobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyCreateDeploymentResult#fileUploadUrls
   */
  readonly fileUploadUrls: { [key: string]: string };

  /**
   * @schema AmplifyCreateDeploymentResult#zipUploadUrl
   */
  readonly zipUploadUrl: string;

}

/**
 * @schema AmplifyCreateDomainAssociationRequest
 */
export interface AmplifyCreateDomainAssociationRequest {
  /**
   * @schema AmplifyCreateDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateDomainAssociationRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema AmplifyCreateDomainAssociationRequest#enableAutoSubDomain
   */
  readonly enableAutoSubDomain?: boolean;

  /**
   * @schema AmplifyCreateDomainAssociationRequest#subDomainSettings
   */
  readonly subDomainSettings: AmplifySubDomainSetting[];

  /**
   * @schema AmplifyCreateDomainAssociationRequest#autoSubDomainCreationPatterns
   */
  readonly autoSubDomainCreationPatterns?: string[];

  /**
   * @schema AmplifyCreateDomainAssociationRequest#autoSubDomainIAMRole
   */
  readonly autoSubDomainIAMRole?: string;

}

/**
 * @schema AmplifyCreateDomainAssociationResult
 */
export interface AmplifyCreateDomainAssociationResult {
  /**
   * @schema AmplifyCreateDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: AmplifyDomainAssociation;

}

/**
 * @schema AmplifyCreateWebhookRequest
 */
export interface AmplifyCreateWebhookRequest {
  /**
   * @schema AmplifyCreateWebhookRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateWebhookRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyCreateWebhookRequest#description
   */
  readonly description?: string;

}

/**
 * @schema AmplifyCreateWebhookResult
 */
export interface AmplifyCreateWebhookResult {
  /**
   * @schema AmplifyCreateWebhookResult#webhook
   */
  readonly webhook: AmplifyWebhook;

}

/**
 * @schema AmplifyDeleteAppRequest
 */
export interface AmplifyDeleteAppRequest {
  /**
   * @schema AmplifyDeleteAppRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema AmplifyDeleteAppResult
 */
export interface AmplifyDeleteAppResult {
  /**
   * @schema AmplifyDeleteAppResult#app
   */
  readonly app: AmplifyApp;

}

/**
 * @schema AmplifyDeleteBackendEnvironmentRequest
 */
export interface AmplifyDeleteBackendEnvironmentRequest {
  /**
   * @schema AmplifyDeleteBackendEnvironmentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyDeleteBackendEnvironmentRequest#environmentName
   */
  readonly environmentName: string;

}

/**
 * @schema AmplifyDeleteBackendEnvironmentResult
 */
export interface AmplifyDeleteBackendEnvironmentResult {
  /**
   * @schema AmplifyDeleteBackendEnvironmentResult#backendEnvironment
   */
  readonly backendEnvironment: AmplifyBackendEnvironment;

}

/**
 * @schema AmplifyDeleteBranchRequest
 */
export interface AmplifyDeleteBranchRequest {
  /**
   * @schema AmplifyDeleteBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyDeleteBranchRequest#branchName
   */
  readonly branchName: string;

}

/**
 * @schema AmplifyDeleteBranchResult
 */
export interface AmplifyDeleteBranchResult {
  /**
   * @schema AmplifyDeleteBranchResult#branch
   */
  readonly branch: AmplifyBranch;

}

/**
 * @schema AmplifyDeleteDomainAssociationRequest
 */
export interface AmplifyDeleteDomainAssociationRequest {
  /**
   * @schema AmplifyDeleteDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyDeleteDomainAssociationRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema AmplifyDeleteDomainAssociationResult
 */
export interface AmplifyDeleteDomainAssociationResult {
  /**
   * @schema AmplifyDeleteDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: AmplifyDomainAssociation;

}

/**
 * @schema AmplifyDeleteJobRequest
 */
export interface AmplifyDeleteJobRequest {
  /**
   * @schema AmplifyDeleteJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyDeleteJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyDeleteJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema AmplifyDeleteJobResult
 */
export interface AmplifyDeleteJobResult {
  /**
   * @schema AmplifyDeleteJobResult#jobSummary
   */
  readonly jobSummary: AmplifyJobSummary;

}

/**
 * @schema AmplifyDeleteWebhookRequest
 */
export interface AmplifyDeleteWebhookRequest {
  /**
   * @schema AmplifyDeleteWebhookRequest#webhookId
   */
  readonly webhookId: string;

}

/**
 * @schema AmplifyDeleteWebhookResult
 */
export interface AmplifyDeleteWebhookResult {
  /**
   * @schema AmplifyDeleteWebhookResult#webhook
   */
  readonly webhook: AmplifyWebhook;

}

/**
 * @schema AmplifyGenerateAccessLogsRequest
 */
export interface AmplifyGenerateAccessLogsRequest {
  /**
   * @schema AmplifyGenerateAccessLogsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema AmplifyGenerateAccessLogsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema AmplifyGenerateAccessLogsRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema AmplifyGenerateAccessLogsRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema AmplifyGenerateAccessLogsResult
 */
export interface AmplifyGenerateAccessLogsResult {
  /**
   * @schema AmplifyGenerateAccessLogsResult#logUrl
   */
  readonly logUrl?: string;

}

/**
 * @schema AmplifyGetAppRequest
 */
export interface AmplifyGetAppRequest {
  /**
   * @schema AmplifyGetAppRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema AmplifyGetAppResult
 */
export interface AmplifyGetAppResult {
  /**
   * @schema AmplifyGetAppResult#app
   */
  readonly app: AmplifyApp;

}

/**
 * @schema AmplifyGetArtifactUrlRequest
 */
export interface AmplifyGetArtifactUrlRequest {
  /**
   * @schema AmplifyGetArtifactUrlRequest#artifactId
   */
  readonly artifactId: string;

}

/**
 * @schema AmplifyGetArtifactUrlResult
 */
export interface AmplifyGetArtifactUrlResult {
  /**
   * @schema AmplifyGetArtifactUrlResult#artifactId
   */
  readonly artifactId: string;

  /**
   * @schema AmplifyGetArtifactUrlResult#artifactUrl
   */
  readonly artifactUrl: string;

}

/**
 * @schema AmplifyGetBackendEnvironmentRequest
 */
export interface AmplifyGetBackendEnvironmentRequest {
  /**
   * @schema AmplifyGetBackendEnvironmentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyGetBackendEnvironmentRequest#environmentName
   */
  readonly environmentName: string;

}

/**
 * @schema AmplifyGetBackendEnvironmentResult
 */
export interface AmplifyGetBackendEnvironmentResult {
  /**
   * @schema AmplifyGetBackendEnvironmentResult#backendEnvironment
   */
  readonly backendEnvironment: AmplifyBackendEnvironment;

}

/**
 * @schema AmplifyGetBranchRequest
 */
export interface AmplifyGetBranchRequest {
  /**
   * @schema AmplifyGetBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyGetBranchRequest#branchName
   */
  readonly branchName: string;

}

/**
 * @schema AmplifyGetBranchResult
 */
export interface AmplifyGetBranchResult {
  /**
   * @schema AmplifyGetBranchResult#branch
   */
  readonly branch: AmplifyBranch;

}

/**
 * @schema AmplifyGetDomainAssociationRequest
 */
export interface AmplifyGetDomainAssociationRequest {
  /**
   * @schema AmplifyGetDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyGetDomainAssociationRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema AmplifyGetDomainAssociationResult
 */
export interface AmplifyGetDomainAssociationResult {
  /**
   * @schema AmplifyGetDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: AmplifyDomainAssociation;

}

/**
 * @schema AmplifyGetJobRequest
 */
export interface AmplifyGetJobRequest {
  /**
   * @schema AmplifyGetJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyGetJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyGetJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema AmplifyGetJobResult
 */
export interface AmplifyGetJobResult {
  /**
   * @schema AmplifyGetJobResult#job
   */
  readonly job: AmplifyJob;

}

/**
 * @schema AmplifyGetWebhookRequest
 */
export interface AmplifyGetWebhookRequest {
  /**
   * @schema AmplifyGetWebhookRequest#webhookId
   */
  readonly webhookId: string;

}

/**
 * @schema AmplifyGetWebhookResult
 */
export interface AmplifyGetWebhookResult {
  /**
   * @schema AmplifyGetWebhookResult#webhook
   */
  readonly webhook: AmplifyWebhook;

}

/**
 * @schema AmplifyListAppsRequest
 */
export interface AmplifyListAppsRequest {
  /**
   * @schema AmplifyListAppsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListAppsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AmplifyListAppsResult
 */
export interface AmplifyListAppsResult {
  /**
   * @schema AmplifyListAppsResult#apps
   */
  readonly apps: AmplifyApp[];

  /**
   * @schema AmplifyListAppsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AmplifyListArtifactsRequest
 */
export interface AmplifyListArtifactsRequest {
  /**
   * @schema AmplifyListArtifactsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListArtifactsRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyListArtifactsRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema AmplifyListArtifactsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListArtifactsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AmplifyListArtifactsResult
 */
export interface AmplifyListArtifactsResult {
  /**
   * @schema AmplifyListArtifactsResult#artifacts
   */
  readonly artifacts: AmplifyArtifact[];

  /**
   * @schema AmplifyListArtifactsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AmplifyListBackendEnvironmentsRequest
 */
export interface AmplifyListBackendEnvironmentsRequest {
  /**
   * @schema AmplifyListBackendEnvironmentsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListBackendEnvironmentsRequest#environmentName
   */
  readonly environmentName?: string;

  /**
   * @schema AmplifyListBackendEnvironmentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListBackendEnvironmentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AmplifyListBackendEnvironmentsResult
 */
export interface AmplifyListBackendEnvironmentsResult {
  /**
   * @schema AmplifyListBackendEnvironmentsResult#backendEnvironments
   */
  readonly backendEnvironments: AmplifyBackendEnvironment[];

  /**
   * @schema AmplifyListBackendEnvironmentsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AmplifyListBranchesRequest
 */
export interface AmplifyListBranchesRequest {
  /**
   * @schema AmplifyListBranchesRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListBranchesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListBranchesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AmplifyListBranchesResult
 */
export interface AmplifyListBranchesResult {
  /**
   * @schema AmplifyListBranchesResult#branches
   */
  readonly branches: AmplifyBranch[];

  /**
   * @schema AmplifyListBranchesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AmplifyListDomainAssociationsRequest
 */
export interface AmplifyListDomainAssociationsRequest {
  /**
   * @schema AmplifyListDomainAssociationsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListDomainAssociationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListDomainAssociationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AmplifyListDomainAssociationsResult
 */
export interface AmplifyListDomainAssociationsResult {
  /**
   * @schema AmplifyListDomainAssociationsResult#domainAssociations
   */
  readonly domainAssociations: AmplifyDomainAssociation[];

  /**
   * @schema AmplifyListDomainAssociationsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AmplifyListJobsRequest
 */
export interface AmplifyListJobsRequest {
  /**
   * @schema AmplifyListJobsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListJobsRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyListJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AmplifyListJobsResult
 */
export interface AmplifyListJobsResult {
  /**
   * @schema AmplifyListJobsResult#jobSummaries
   */
  readonly jobSummaries: AmplifyJobSummary[];

  /**
   * @schema AmplifyListJobsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AmplifyListTagsForResourceRequest
 */
export interface AmplifyListTagsForResourceRequest {
  /**
   * @schema AmplifyListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema AmplifyListTagsForResourceResponse
 */
export interface AmplifyListTagsForResourceResponse {
  /**
   * @schema AmplifyListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AmplifyListWebhooksRequest
 */
export interface AmplifyListWebhooksRequest {
  /**
   * @schema AmplifyListWebhooksRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListWebhooksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListWebhooksRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AmplifyListWebhooksResult
 */
export interface AmplifyListWebhooksResult {
  /**
   * @schema AmplifyListWebhooksResult#webhooks
   */
  readonly webhooks: AmplifyWebhook[];

  /**
   * @schema AmplifyListWebhooksResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AmplifyStartDeploymentRequest
 */
export interface AmplifyStartDeploymentRequest {
  /**
   * @schema AmplifyStartDeploymentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyStartDeploymentRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyStartDeploymentRequest#jobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyStartDeploymentRequest#sourceUrl
   */
  readonly sourceUrl?: string;

}

/**
 * @schema AmplifyStartDeploymentResult
 */
export interface AmplifyStartDeploymentResult {
  /**
   * @schema AmplifyStartDeploymentResult#jobSummary
   */
  readonly jobSummary: AmplifyJobSummary;

}

/**
 * @schema AmplifyStartJobRequest
 */
export interface AmplifyStartJobRequest {
  /**
   * @schema AmplifyStartJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyStartJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyStartJobRequest#jobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyStartJobRequest#jobType
   */
  readonly jobType: string;

  /**
   * @schema AmplifyStartJobRequest#jobReason
   */
  readonly jobReason?: string;

  /**
   * @schema AmplifyStartJobRequest#commitId
   */
  readonly commitId?: string;

  /**
   * @schema AmplifyStartJobRequest#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema AmplifyStartJobRequest#commitTime
   */
  readonly commitTime?: string;

}

/**
 * @schema AmplifyStartJobResult
 */
export interface AmplifyStartJobResult {
  /**
   * @schema AmplifyStartJobResult#jobSummary
   */
  readonly jobSummary: AmplifyJobSummary;

}

/**
 * @schema AmplifyStopJobRequest
 */
export interface AmplifyStopJobRequest {
  /**
   * @schema AmplifyStopJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyStopJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyStopJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema AmplifyStopJobResult
 */
export interface AmplifyStopJobResult {
  /**
   * @schema AmplifyStopJobResult#jobSummary
   */
  readonly jobSummary: AmplifyJobSummary;

}

/**
 * @schema AmplifyTagResourceRequest
 */
export interface AmplifyTagResourceRequest {
  /**
   * @schema AmplifyTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AmplifyTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema AmplifyTagResourceResponse
 */
export interface AmplifyTagResourceResponse {
}

/**
 * @schema AmplifyUntagResourceRequest
 */
export interface AmplifyUntagResourceRequest {
  /**
   * @schema AmplifyUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AmplifyUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema AmplifyUntagResourceResponse
 */
export interface AmplifyUntagResourceResponse {
}

/**
 * @schema AmplifyUpdateAppRequest
 */
export interface AmplifyUpdateAppRequest {
  /**
   * @schema AmplifyUpdateAppRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyUpdateAppRequest#name
   */
  readonly name?: string;

  /**
   * @schema AmplifyUpdateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema AmplifyUpdateAppRequest#platform
   */
  readonly platform?: string;

  /**
   * @schema AmplifyUpdateAppRequest#iamServiceRoleArn
   */
  readonly iamServiceRoleArn?: string;

  /**
   * @schema AmplifyUpdateAppRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyUpdateAppRequest#enableBranchAutoBuild
   */
  readonly enableBranchAutoBuild?: boolean;

  /**
   * @schema AmplifyUpdateAppRequest#enableBranchAutoDeletion
   */
  readonly enableBranchAutoDeletion?: boolean;

  /**
   * @schema AmplifyUpdateAppRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyUpdateAppRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyUpdateAppRequest#customRules
   */
  readonly customRules?: AmplifyCustomRule[];

  /**
   * @schema AmplifyUpdateAppRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyUpdateAppRequest#customHeaders
   */
  readonly customHeaders?: string;

  /**
   * @schema AmplifyUpdateAppRequest#enableAutoBranchCreation
   */
  readonly enableAutoBranchCreation?: boolean;

  /**
   * @schema AmplifyUpdateAppRequest#autoBranchCreationPatterns
   */
  readonly autoBranchCreationPatterns?: string[];

  /**
   * @schema AmplifyUpdateAppRequest#autoBranchCreationConfig
   */
  readonly autoBranchCreationConfig?: AmplifyAutoBranchCreationConfig;

  /**
   * @schema AmplifyUpdateAppRequest#repository
   */
  readonly repository?: string;

  /**
   * @schema AmplifyUpdateAppRequest#oauthToken
   */
  readonly oauthToken?: string;

  /**
   * @schema AmplifyUpdateAppRequest#accessToken
   */
  readonly accessToken?: string;

}

/**
 * @schema AmplifyUpdateAppResult
 */
export interface AmplifyUpdateAppResult {
  /**
   * @schema AmplifyUpdateAppResult#app
   */
  readonly app: AmplifyApp;

}

/**
 * @schema AmplifyUpdateBranchRequest
 */
export interface AmplifyUpdateBranchRequest {
  /**
   * @schema AmplifyUpdateBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyUpdateBranchRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyUpdateBranchRequest#description
   */
  readonly description?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#framework
   */
  readonly framework?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#stage
   */
  readonly stage?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#enableNotification
   */
  readonly enableNotification?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#enableAutoBuild
   */
  readonly enableAutoBuild?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyUpdateBranchRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#ttl
   */
  readonly ttl?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#enablePullRequestPreview
   */
  readonly enablePullRequestPreview?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#backendEnvironmentArn
   */
  readonly backendEnvironmentArn?: string;

}

/**
 * @schema AmplifyUpdateBranchResult
 */
export interface AmplifyUpdateBranchResult {
  /**
   * @schema AmplifyUpdateBranchResult#branch
   */
  readonly branch: AmplifyBranch;

}

/**
 * @schema AmplifyUpdateDomainAssociationRequest
 */
export interface AmplifyUpdateDomainAssociationRequest {
  /**
   * @schema AmplifyUpdateDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#enableAutoSubDomain
   */
  readonly enableAutoSubDomain?: boolean;

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#subDomainSettings
   */
  readonly subDomainSettings: AmplifySubDomainSetting[];

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#autoSubDomainCreationPatterns
   */
  readonly autoSubDomainCreationPatterns?: string[];

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#autoSubDomainIAMRole
   */
  readonly autoSubDomainIAMRole?: string;

}

/**
 * @schema AmplifyUpdateDomainAssociationResult
 */
export interface AmplifyUpdateDomainAssociationResult {
  /**
   * @schema AmplifyUpdateDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: AmplifyDomainAssociation;

}

/**
 * @schema AmplifyUpdateWebhookRequest
 */
export interface AmplifyUpdateWebhookRequest {
  /**
   * @schema AmplifyUpdateWebhookRequest#webhookId
   */
  readonly webhookId: string;

  /**
   * @schema AmplifyUpdateWebhookRequest#branchName
   */
  readonly branchName?: string;

  /**
   * @schema AmplifyUpdateWebhookRequest#description
   */
  readonly description?: string;

}

/**
 * @schema AmplifyUpdateWebhookResult
 */
export interface AmplifyUpdateWebhookResult {
  /**
   * @schema AmplifyUpdateWebhookResult#webhook
   */
  readonly webhook: AmplifyWebhook;

}

/**
 * @schema AmplifyCustomRule
 */
export interface AmplifyCustomRule {
  /**
   * @schema AmplifyCustomRule#source
   */
  readonly source: string;

  /**
   * @schema AmplifyCustomRule#target
   */
  readonly target: string;

  /**
   * @schema AmplifyCustomRule#status
   */
  readonly status?: string;

  /**
   * @schema AmplifyCustomRule#condition
   */
  readonly condition?: string;

}

/**
 * @schema AmplifyAutoBranchCreationConfig
 */
export interface AmplifyAutoBranchCreationConfig {
  /**
   * @schema AmplifyAutoBranchCreationConfig#stage
   */
  readonly stage?: string;

  /**
   * @schema AmplifyAutoBranchCreationConfig#framework
   */
  readonly framework?: string;

  /**
   * @schema AmplifyAutoBranchCreationConfig#enableAutoBuild
   */
  readonly enableAutoBuild?: boolean;

  /**
   * @schema AmplifyAutoBranchCreationConfig#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyAutoBranchCreationConfig#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyAutoBranchCreationConfig#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyAutoBranchCreationConfig#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema AmplifyAutoBranchCreationConfig#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyAutoBranchCreationConfig#enablePullRequestPreview
   */
  readonly enablePullRequestPreview?: boolean;

  /**
   * @schema AmplifyAutoBranchCreationConfig#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

}

/**
 * @schema AmplifyApp
 */
export interface AmplifyApp {
  /**
   * @schema AmplifyApp#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyApp#appArn
   */
  readonly appArn: string;

  /**
   * @schema AmplifyApp#name
   */
  readonly name: string;

  /**
   * @schema AmplifyApp#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AmplifyApp#description
   */
  readonly description: string;

  /**
   * @schema AmplifyApp#repository
   */
  readonly repository: string;

  /**
   * @schema AmplifyApp#platform
   */
  readonly platform: string;

  /**
   * @schema AmplifyApp#createTime
   */
  readonly createTime: string;

  /**
   * @schema AmplifyApp#updateTime
   */
  readonly updateTime: string;

  /**
   * @schema AmplifyApp#iamServiceRoleArn
   */
  readonly iamServiceRoleArn?: string;

  /**
   * @schema AmplifyApp#environmentVariables
   */
  readonly environmentVariables: { [key: string]: string };

  /**
   * @schema AmplifyApp#defaultDomain
   */
  readonly defaultDomain: string;

  /**
   * @schema AmplifyApp#enableBranchAutoBuild
   */
  readonly enableBranchAutoBuild: boolean;

  /**
   * @schema AmplifyApp#enableBranchAutoDeletion
   */
  readonly enableBranchAutoDeletion?: boolean;

  /**
   * @schema AmplifyApp#enableBasicAuth
   */
  readonly enableBasicAuth: boolean;

  /**
   * @schema AmplifyApp#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyApp#customRules
   */
  readonly customRules?: AmplifyCustomRule[];

  /**
   * @schema AmplifyApp#productionBranch
   */
  readonly productionBranch?: AmplifyProductionBranch;

  /**
   * @schema AmplifyApp#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyApp#customHeaders
   */
  readonly customHeaders?: string;

  /**
   * @schema AmplifyApp#enableAutoBranchCreation
   */
  readonly enableAutoBranchCreation?: boolean;

  /**
   * @schema AmplifyApp#autoBranchCreationPatterns
   */
  readonly autoBranchCreationPatterns?: string[];

  /**
   * @schema AmplifyApp#autoBranchCreationConfig
   */
  readonly autoBranchCreationConfig?: AmplifyAutoBranchCreationConfig;

}

/**
 * @schema AmplifyBackendEnvironment
 */
export interface AmplifyBackendEnvironment {
  /**
   * @schema AmplifyBackendEnvironment#backendEnvironmentArn
   */
  readonly backendEnvironmentArn: string;

  /**
   * @schema AmplifyBackendEnvironment#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema AmplifyBackendEnvironment#stackName
   */
  readonly stackName?: string;

  /**
   * @schema AmplifyBackendEnvironment#deploymentArtifacts
   */
  readonly deploymentArtifacts?: string;

  /**
   * @schema AmplifyBackendEnvironment#createTime
   */
  readonly createTime: string;

  /**
   * @schema AmplifyBackendEnvironment#updateTime
   */
  readonly updateTime: string;

}

/**
 * @schema AmplifyBranch
 */
export interface AmplifyBranch {
  /**
   * @schema AmplifyBranch#branchArn
   */
  readonly branchArn: string;

  /**
   * @schema AmplifyBranch#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyBranch#description
   */
  readonly description: string;

  /**
   * @schema AmplifyBranch#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AmplifyBranch#stage
   */
  readonly stage: string;

  /**
   * @schema AmplifyBranch#displayName
   */
  readonly displayName: string;

  /**
   * @schema AmplifyBranch#enableNotification
   */
  readonly enableNotification: boolean;

  /**
   * @schema AmplifyBranch#createTime
   */
  readonly createTime: string;

  /**
   * @schema AmplifyBranch#updateTime
   */
  readonly updateTime: string;

  /**
   * @schema AmplifyBranch#environmentVariables
   */
  readonly environmentVariables: { [key: string]: string };

  /**
   * @schema AmplifyBranch#enableAutoBuild
   */
  readonly enableAutoBuild: boolean;

  /**
   * @schema AmplifyBranch#customDomains
   */
  readonly customDomains: string[];

  /**
   * @schema AmplifyBranch#framework
   */
  readonly framework: string;

  /**
   * @schema AmplifyBranch#activeJobId
   */
  readonly activeJobId: string;

  /**
   * @schema AmplifyBranch#totalNumberOfJobs
   */
  readonly totalNumberOfJobs: string;

  /**
   * @schema AmplifyBranch#enableBasicAuth
   */
  readonly enableBasicAuth: boolean;

  /**
   * @schema AmplifyBranch#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema AmplifyBranch#thumbnailUrl
   */
  readonly thumbnailUrl?: string;

  /**
   * @schema AmplifyBranch#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyBranch#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyBranch#ttl
   */
  readonly ttl: string;

  /**
   * @schema AmplifyBranch#associatedResources
   */
  readonly associatedResources?: string[];

  /**
   * @schema AmplifyBranch#enablePullRequestPreview
   */
  readonly enablePullRequestPreview: boolean;

  /**
   * @schema AmplifyBranch#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

  /**
   * @schema AmplifyBranch#destinationBranch
   */
  readonly destinationBranch?: string;

  /**
   * @schema AmplifyBranch#sourceBranch
   */
  readonly sourceBranch?: string;

  /**
   * @schema AmplifyBranch#backendEnvironmentArn
   */
  readonly backendEnvironmentArn?: string;

}

/**
 * @schema AmplifySubDomainSetting
 */
export interface AmplifySubDomainSetting {
  /**
   * @schema AmplifySubDomainSetting#prefix
   */
  readonly prefix: string;

  /**
   * @schema AmplifySubDomainSetting#branchName
   */
  readonly branchName: string;

}

/**
 * @schema AmplifyDomainAssociation
 */
export interface AmplifyDomainAssociation {
  /**
   * @schema AmplifyDomainAssociation#domainAssociationArn
   */
  readonly domainAssociationArn: string;

  /**
   * @schema AmplifyDomainAssociation#domainName
   */
  readonly domainName: string;

  /**
   * @schema AmplifyDomainAssociation#enableAutoSubDomain
   */
  readonly enableAutoSubDomain: boolean;

  /**
   * @schema AmplifyDomainAssociation#autoSubDomainCreationPatterns
   */
  readonly autoSubDomainCreationPatterns?: string[];

  /**
   * @schema AmplifyDomainAssociation#autoSubDomainIAMRole
   */
  readonly autoSubDomainIAMRole?: string;

  /**
   * @schema AmplifyDomainAssociation#domainStatus
   */
  readonly domainStatus: string;

  /**
   * @schema AmplifyDomainAssociation#statusReason
   */
  readonly statusReason: string;

  /**
   * @schema AmplifyDomainAssociation#certificateVerificationDNSRecord
   */
  readonly certificateVerificationDNSRecord?: string;

  /**
   * @schema AmplifyDomainAssociation#subDomains
   */
  readonly subDomains: AmplifySubDomain[];

}

/**
 * @schema AmplifyWebhook
 */
export interface AmplifyWebhook {
  /**
   * @schema AmplifyWebhook#webhookArn
   */
  readonly webhookArn: string;

  /**
   * @schema AmplifyWebhook#webhookId
   */
  readonly webhookId: string;

  /**
   * @schema AmplifyWebhook#webhookUrl
   */
  readonly webhookUrl: string;

  /**
   * @schema AmplifyWebhook#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyWebhook#description
   */
  readonly description: string;

  /**
   * @schema AmplifyWebhook#createTime
   */
  readonly createTime: string;

  /**
   * @schema AmplifyWebhook#updateTime
   */
  readonly updateTime: string;

}

/**
 * @schema AmplifyJobSummary
 */
export interface AmplifyJobSummary {
  /**
   * @schema AmplifyJobSummary#jobArn
   */
  readonly jobArn: string;

  /**
   * @schema AmplifyJobSummary#jobId
   */
  readonly jobId: string;

  /**
   * @schema AmplifyJobSummary#commitId
   */
  readonly commitId: string;

  /**
   * @schema AmplifyJobSummary#commitMessage
   */
  readonly commitMessage: string;

  /**
   * @schema AmplifyJobSummary#commitTime
   */
  readonly commitTime: string;

  /**
   * @schema AmplifyJobSummary#startTime
   */
  readonly startTime: string;

  /**
   * @schema AmplifyJobSummary#status
   */
  readonly status: string;

  /**
   * @schema AmplifyJobSummary#endTime
   */
  readonly endTime?: string;

  /**
   * @schema AmplifyJobSummary#jobType
   */
  readonly jobType: string;

}

/**
 * @schema AmplifyJob
 */
export interface AmplifyJob {
  /**
   * @schema AmplifyJob#summary
   */
  readonly summary: AmplifyJobSummary;

  /**
   * @schema AmplifyJob#steps
   */
  readonly steps: AmplifyStep[];

}

/**
 * @schema AmplifyArtifact
 */
export interface AmplifyArtifact {
  /**
   * @schema AmplifyArtifact#artifactFileName
   */
  readonly artifactFileName: string;

  /**
   * @schema AmplifyArtifact#artifactId
   */
  readonly artifactId: string;

}

/**
 * @schema AmplifyProductionBranch
 */
export interface AmplifyProductionBranch {
  /**
   * @schema AmplifyProductionBranch#lastDeployTime
   */
  readonly lastDeployTime?: string;

  /**
   * @schema AmplifyProductionBranch#status
   */
  readonly status?: string;

  /**
   * @schema AmplifyProductionBranch#thumbnailUrl
   */
  readonly thumbnailUrl?: string;

  /**
   * @schema AmplifyProductionBranch#branchName
   */
  readonly branchName?: string;

}

/**
 * @schema AmplifySubDomain
 */
export interface AmplifySubDomain {
  /**
   * @schema AmplifySubDomain#subDomainSetting
   */
  readonly subDomainSetting: AmplifySubDomainSetting;

  /**
   * @schema AmplifySubDomain#verified
   */
  readonly verified: boolean;

  /**
   * @schema AmplifySubDomain#dnsRecord
   */
  readonly dnsRecord: string;

}

/**
 * @schema AmplifyStep
 */
export interface AmplifyStep {
  /**
   * @schema AmplifyStep#stepName
   */
  readonly stepName: string;

  /**
   * @schema AmplifyStep#startTime
   */
  readonly startTime: string;

  /**
   * @schema AmplifyStep#status
   */
  readonly status: string;

  /**
   * @schema AmplifyStep#endTime
   */
  readonly endTime: string;

  /**
   * @schema AmplifyStep#logUrl
   */
  readonly logUrl?: string;

  /**
   * @schema AmplifyStep#artifactsUrl
   */
  readonly artifactsUrl?: string;

  /**
   * @schema AmplifyStep#testArtifactsUrl
   */
  readonly testArtifactsUrl?: string;

  /**
   * @schema AmplifyStep#testConfigUrl
   */
  readonly testConfigUrl?: string;

  /**
   * @schema AmplifyStep#screenshots
   */
  readonly screenshots?: { [key: string]: string };

  /**
   * @schema AmplifyStep#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema AmplifyStep#context
   */
  readonly context?: string;

}
