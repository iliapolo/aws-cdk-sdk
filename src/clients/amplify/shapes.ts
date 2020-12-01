/**
 * @schema CreateAppRequest
 */
export interface CreateAppRequest {
  /**
   * @schema CreateAppRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateAppRequest#repository
   */
  readonly repository?: string;

  /**
   * @schema CreateAppRequest#platform
   */
  readonly platform?: string;

  /**
   * @schema CreateAppRequest#iamServiceRoleArn
   */
  readonly iamServiceRoleArn?: string;

  /**
   * @schema CreateAppRequest#oauthToken
   */
  readonly oauthToken?: string;

  /**
   * @schema CreateAppRequest#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema CreateAppRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema CreateAppRequest#enableBranchAutoBuild
   */
  readonly enableBranchAutoBuild?: boolean;

  /**
   * @schema CreateAppRequest#enableBranchAutoDeletion
   */
  readonly enableBranchAutoDeletion?: boolean;

  /**
   * @schema CreateAppRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema CreateAppRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema CreateAppRequest#customRules
   */
  readonly customRules?: CustomRule[];

  /**
   * @schema CreateAppRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateAppRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema CreateAppRequest#customHeaders
   */
  readonly customHeaders?: string;

  /**
   * @schema CreateAppRequest#enableAutoBranchCreation
   */
  readonly enableAutoBranchCreation?: boolean;

  /**
   * @schema CreateAppRequest#autoBranchCreationPatterns
   */
  readonly autoBranchCreationPatterns?: string[];

  /**
   * @schema CreateAppRequest#autoBranchCreationConfig
   */
  readonly autoBranchCreationConfig?: AutoBranchCreationConfig;

}

/**
 * @schema CreateAppResult
 */
export interface CreateAppResult {
  /**
   * @schema CreateAppResult#app
   */
  readonly app: App;

}

/**
 * @schema CreateBackendEnvironmentRequest
 */
export interface CreateBackendEnvironmentRequest {
  /**
   * @schema CreateBackendEnvironmentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema CreateBackendEnvironmentRequest#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema CreateBackendEnvironmentRequest#stackName
   */
  readonly stackName?: string;

  /**
   * @schema CreateBackendEnvironmentRequest#deploymentArtifacts
   */
  readonly deploymentArtifacts?: string;

}

/**
 * @schema CreateBackendEnvironmentResult
 */
export interface CreateBackendEnvironmentResult {
  /**
   * @schema CreateBackendEnvironmentResult#backendEnvironment
   */
  readonly backendEnvironment: BackendEnvironment;

}

/**
 * @schema CreateBranchRequest
 */
export interface CreateBranchRequest {
  /**
   * @schema CreateBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema CreateBranchRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema CreateBranchRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateBranchRequest#stage
   */
  readonly stage?: string;

  /**
   * @schema CreateBranchRequest#framework
   */
  readonly framework?: string;

  /**
   * @schema CreateBranchRequest#enableNotification
   */
  readonly enableNotification?: boolean;

  /**
   * @schema CreateBranchRequest#enableAutoBuild
   */
  readonly enableAutoBuild?: boolean;

  /**
   * @schema CreateBranchRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema CreateBranchRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema CreateBranchRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema CreateBranchRequest#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema CreateBranchRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateBranchRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema CreateBranchRequest#ttl
   */
  readonly ttl?: string;

  /**
   * @schema CreateBranchRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateBranchRequest#enablePullRequestPreview
   */
  readonly enablePullRequestPreview?: boolean;

  /**
   * @schema CreateBranchRequest#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

  /**
   * @schema CreateBranchRequest#backendEnvironmentArn
   */
  readonly backendEnvironmentArn?: string;

}

/**
 * @schema CreateBranchResult
 */
export interface CreateBranchResult {
  /**
   * @schema CreateBranchResult#branch
   */
  readonly branch: Branch;

}

/**
 * @schema CreateDeploymentRequest
 */
export interface CreateDeploymentRequest {
  /**
   * @schema CreateDeploymentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema CreateDeploymentRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema CreateDeploymentRequest#fileMap
   */
  readonly fileMap?: { [key: string]: string };

}

/**
 * @schema CreateDeploymentResult
 */
export interface CreateDeploymentResult {
  /**
   * @schema CreateDeploymentResult#jobId
   */
  readonly jobId?: string;

  /**
   * @schema CreateDeploymentResult#fileUploadUrls
   */
  readonly fileUploadUrls: { [key: string]: string };

  /**
   * @schema CreateDeploymentResult#zipUploadUrl
   */
  readonly zipUploadUrl: string;

}

/**
 * @schema CreateDomainAssociationRequest
 */
export interface CreateDomainAssociationRequest {
  /**
   * @schema CreateDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema CreateDomainAssociationRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema CreateDomainAssociationRequest#enableAutoSubDomain
   */
  readonly enableAutoSubDomain?: boolean;

  /**
   * @schema CreateDomainAssociationRequest#subDomainSettings
   */
  readonly subDomainSettings: SubDomainSetting[];

  /**
   * @schema CreateDomainAssociationRequest#autoSubDomainCreationPatterns
   */
  readonly autoSubDomainCreationPatterns?: string[];

  /**
   * @schema CreateDomainAssociationRequest#autoSubDomainIAMRole
   */
  readonly autoSubDomainIAMRole?: string;

}

/**
 * @schema CreateDomainAssociationResult
 */
export interface CreateDomainAssociationResult {
  /**
   * @schema CreateDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: DomainAssociation;

}

/**
 * @schema CreateWebhookRequest
 */
export interface CreateWebhookRequest {
  /**
   * @schema CreateWebhookRequest#appId
   */
  readonly appId: string;

  /**
   * @schema CreateWebhookRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema CreateWebhookRequest#description
   */
  readonly description?: string;

}

/**
 * @schema CreateWebhookResult
 */
export interface CreateWebhookResult {
  /**
   * @schema CreateWebhookResult#webhook
   */
  readonly webhook: Webhook;

}

/**
 * @schema DeleteAppRequest
 */
export interface DeleteAppRequest {
  /**
   * @schema DeleteAppRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema DeleteAppResult
 */
export interface DeleteAppResult {
  /**
   * @schema DeleteAppResult#app
   */
  readonly app: App;

}

/**
 * @schema DeleteBackendEnvironmentRequest
 */
export interface DeleteBackendEnvironmentRequest {
  /**
   * @schema DeleteBackendEnvironmentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema DeleteBackendEnvironmentRequest#environmentName
   */
  readonly environmentName: string;

}

/**
 * @schema DeleteBackendEnvironmentResult
 */
export interface DeleteBackendEnvironmentResult {
  /**
   * @schema DeleteBackendEnvironmentResult#backendEnvironment
   */
  readonly backendEnvironment: BackendEnvironment;

}

/**
 * @schema DeleteBranchRequest
 */
export interface DeleteBranchRequest {
  /**
   * @schema DeleteBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema DeleteBranchRequest#branchName
   */
  readonly branchName: string;

}

/**
 * @schema DeleteBranchResult
 */
export interface DeleteBranchResult {
  /**
   * @schema DeleteBranchResult#branch
   */
  readonly branch: Branch;

}

/**
 * @schema DeleteDomainAssociationRequest
 */
export interface DeleteDomainAssociationRequest {
  /**
   * @schema DeleteDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema DeleteDomainAssociationRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema DeleteDomainAssociationResult
 */
export interface DeleteDomainAssociationResult {
  /**
   * @schema DeleteDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: DomainAssociation;

}

/**
 * @schema DeleteJobRequest
 */
export interface DeleteJobRequest {
  /**
   * @schema DeleteJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema DeleteJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema DeleteJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema DeleteJobResult
 */
export interface DeleteJobResult {
  /**
   * @schema DeleteJobResult#jobSummary
   */
  readonly jobSummary: JobSummary;

}

/**
 * @schema DeleteWebhookRequest
 */
export interface DeleteWebhookRequest {
  /**
   * @schema DeleteWebhookRequest#webhookId
   */
  readonly webhookId: string;

}

/**
 * @schema DeleteWebhookResult
 */
export interface DeleteWebhookResult {
  /**
   * @schema DeleteWebhookResult#webhook
   */
  readonly webhook: Webhook;

}

/**
 * @schema GenerateAccessLogsRequest
 */
export interface GenerateAccessLogsRequest {
  /**
   * @schema GenerateAccessLogsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema GenerateAccessLogsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema GenerateAccessLogsRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema GenerateAccessLogsRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema GenerateAccessLogsResult
 */
export interface GenerateAccessLogsResult {
  /**
   * @schema GenerateAccessLogsResult#logUrl
   */
  readonly logUrl?: string;

}

/**
 * @schema GetAppRequest
 */
export interface GetAppRequest {
  /**
   * @schema GetAppRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema GetAppResult
 */
export interface GetAppResult {
  /**
   * @schema GetAppResult#app
   */
  readonly app: App;

}

/**
 * @schema GetArtifactUrlRequest
 */
export interface GetArtifactUrlRequest {
  /**
   * @schema GetArtifactUrlRequest#artifactId
   */
  readonly artifactId: string;

}

/**
 * @schema GetArtifactUrlResult
 */
export interface GetArtifactUrlResult {
  /**
   * @schema GetArtifactUrlResult#artifactId
   */
  readonly artifactId: string;

  /**
   * @schema GetArtifactUrlResult#artifactUrl
   */
  readonly artifactUrl: string;

}

/**
 * @schema GetBackendEnvironmentRequest
 */
export interface GetBackendEnvironmentRequest {
  /**
   * @schema GetBackendEnvironmentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema GetBackendEnvironmentRequest#environmentName
   */
  readonly environmentName: string;

}

/**
 * @schema GetBackendEnvironmentResult
 */
export interface GetBackendEnvironmentResult {
  /**
   * @schema GetBackendEnvironmentResult#backendEnvironment
   */
  readonly backendEnvironment: BackendEnvironment;

}

/**
 * @schema GetBranchRequest
 */
export interface GetBranchRequest {
  /**
   * @schema GetBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema GetBranchRequest#branchName
   */
  readonly branchName: string;

}

/**
 * @schema GetBranchResult
 */
export interface GetBranchResult {
  /**
   * @schema GetBranchResult#branch
   */
  readonly branch: Branch;

}

/**
 * @schema GetDomainAssociationRequest
 */
export interface GetDomainAssociationRequest {
  /**
   * @schema GetDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema GetDomainAssociationRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema GetDomainAssociationResult
 */
export interface GetDomainAssociationResult {
  /**
   * @schema GetDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: DomainAssociation;

}

/**
 * @schema GetJobRequest
 */
export interface GetJobRequest {
  /**
   * @schema GetJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema GetJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema GetJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema GetJobResult
 */
export interface GetJobResult {
  /**
   * @schema GetJobResult#job
   */
  readonly job: Job;

}

/**
 * @schema GetWebhookRequest
 */
export interface GetWebhookRequest {
  /**
   * @schema GetWebhookRequest#webhookId
   */
  readonly webhookId: string;

}

/**
 * @schema GetWebhookResult
 */
export interface GetWebhookResult {
  /**
   * @schema GetWebhookResult#webhook
   */
  readonly webhook: Webhook;

}

/**
 * @schema ListAppsRequest
 */
export interface ListAppsRequest {
  /**
   * @schema ListAppsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAppsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAppsResult
 */
export interface ListAppsResult {
  /**
   * @schema ListAppsResult#apps
   */
  readonly apps: App[];

  /**
   * @schema ListAppsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListArtifactsRequest
 */
export interface ListArtifactsRequest {
  /**
   * @schema ListArtifactsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema ListArtifactsRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema ListArtifactsRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema ListArtifactsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListArtifactsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListArtifactsResult
 */
export interface ListArtifactsResult {
  /**
   * @schema ListArtifactsResult#artifacts
   */
  readonly artifacts: Artifact[];

  /**
   * @schema ListArtifactsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBackendEnvironmentsRequest
 */
export interface ListBackendEnvironmentsRequest {
  /**
   * @schema ListBackendEnvironmentsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema ListBackendEnvironmentsRequest#environmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ListBackendEnvironmentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackendEnvironmentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListBackendEnvironmentsResult
 */
export interface ListBackendEnvironmentsResult {
  /**
   * @schema ListBackendEnvironmentsResult#backendEnvironments
   */
  readonly backendEnvironments: BackendEnvironment[];

  /**
   * @schema ListBackendEnvironmentsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBranchesRequest
 */
export interface ListBranchesRequest {
  /**
   * @schema ListBranchesRequest#appId
   */
  readonly appId: string;

  /**
   * @schema ListBranchesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBranchesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListBranchesResult
 */
export interface ListBranchesResult {
  /**
   * @schema ListBranchesResult#branches
   */
  readonly branches: Branch[];

  /**
   * @schema ListBranchesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDomainAssociationsRequest
 */
export interface ListDomainAssociationsRequest {
  /**
   * @schema ListDomainAssociationsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema ListDomainAssociationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDomainAssociationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDomainAssociationsResult
 */
export interface ListDomainAssociationsResult {
  /**
   * @schema ListDomainAssociationsResult#domainAssociations
   */
  readonly domainAssociations: DomainAssociation[];

  /**
   * @schema ListDomainAssociationsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema ListJobsRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema ListJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListJobsResult
 */
export interface ListJobsResult {
  /**
   * @schema ListJobsResult#jobSummaries
   */
  readonly jobSummaries: JobSummary[];

  /**
   * @schema ListJobsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListWebhooksRequest
 */
export interface ListWebhooksRequest {
  /**
   * @schema ListWebhooksRequest#appId
   */
  readonly appId: string;

  /**
   * @schema ListWebhooksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWebhooksRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListWebhooksResult
 */
export interface ListWebhooksResult {
  /**
   * @schema ListWebhooksResult#webhooks
   */
  readonly webhooks: Webhook[];

  /**
   * @schema ListWebhooksResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartDeploymentRequest
 */
export interface StartDeploymentRequest {
  /**
   * @schema StartDeploymentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema StartDeploymentRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema StartDeploymentRequest#jobId
   */
  readonly jobId?: string;

  /**
   * @schema StartDeploymentRequest#sourceUrl
   */
  readonly sourceUrl?: string;

}

/**
 * @schema StartDeploymentResult
 */
export interface StartDeploymentResult {
  /**
   * @schema StartDeploymentResult#jobSummary
   */
  readonly jobSummary: JobSummary;

}

/**
 * @schema StartJobRequest
 */
export interface StartJobRequest {
  /**
   * @schema StartJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema StartJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema StartJobRequest#jobId
   */
  readonly jobId?: string;

  /**
   * @schema StartJobRequest#jobType
   */
  readonly jobType: string;

  /**
   * @schema StartJobRequest#jobReason
   */
  readonly jobReason?: string;

  /**
   * @schema StartJobRequest#commitId
   */
  readonly commitId?: string;

  /**
   * @schema StartJobRequest#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema StartJobRequest#commitTime
   */
  readonly commitTime?: string;

}

/**
 * @schema StartJobResult
 */
export interface StartJobResult {
  /**
   * @schema StartJobResult#jobSummary
   */
  readonly jobSummary: JobSummary;

}

/**
 * @schema StopJobRequest
 */
export interface StopJobRequest {
  /**
   * @schema StopJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema StopJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema StopJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema StopJobResult
 */
export interface StopJobResult {
  /**
   * @schema StopJobResult#jobSummary
   */
  readonly jobSummary: JobSummary;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateAppRequest
 */
export interface UpdateAppRequest {
  /**
   * @schema UpdateAppRequest#appId
   */
  readonly appId: string;

  /**
   * @schema UpdateAppRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateAppRequest#platform
   */
  readonly platform?: string;

  /**
   * @schema UpdateAppRequest#iamServiceRoleArn
   */
  readonly iamServiceRoleArn?: string;

  /**
   * @schema UpdateAppRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema UpdateAppRequest#enableBranchAutoBuild
   */
  readonly enableBranchAutoBuild?: boolean;

  /**
   * @schema UpdateAppRequest#enableBranchAutoDeletion
   */
  readonly enableBranchAutoDeletion?: boolean;

  /**
   * @schema UpdateAppRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema UpdateAppRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema UpdateAppRequest#customRules
   */
  readonly customRules?: CustomRule[];

  /**
   * @schema UpdateAppRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema UpdateAppRequest#customHeaders
   */
  readonly customHeaders?: string;

  /**
   * @schema UpdateAppRequest#enableAutoBranchCreation
   */
  readonly enableAutoBranchCreation?: boolean;

  /**
   * @schema UpdateAppRequest#autoBranchCreationPatterns
   */
  readonly autoBranchCreationPatterns?: string[];

  /**
   * @schema UpdateAppRequest#autoBranchCreationConfig
   */
  readonly autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * @schema UpdateAppRequest#repository
   */
  readonly repository?: string;

  /**
   * @schema UpdateAppRequest#oauthToken
   */
  readonly oauthToken?: string;

  /**
   * @schema UpdateAppRequest#accessToken
   */
  readonly accessToken?: string;

}

/**
 * @schema UpdateAppResult
 */
export interface UpdateAppResult {
  /**
   * @schema UpdateAppResult#app
   */
  readonly app: App;

}

/**
 * @schema UpdateBranchRequest
 */
export interface UpdateBranchRequest {
  /**
   * @schema UpdateBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema UpdateBranchRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema UpdateBranchRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateBranchRequest#framework
   */
  readonly framework?: string;

  /**
   * @schema UpdateBranchRequest#stage
   */
  readonly stage?: string;

  /**
   * @schema UpdateBranchRequest#enableNotification
   */
  readonly enableNotification?: boolean;

  /**
   * @schema UpdateBranchRequest#enableAutoBuild
   */
  readonly enableAutoBuild?: boolean;

  /**
   * @schema UpdateBranchRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema UpdateBranchRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema UpdateBranchRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema UpdateBranchRequest#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema UpdateBranchRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema UpdateBranchRequest#ttl
   */
  readonly ttl?: string;

  /**
   * @schema UpdateBranchRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateBranchRequest#enablePullRequestPreview
   */
  readonly enablePullRequestPreview?: boolean;

  /**
   * @schema UpdateBranchRequest#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

  /**
   * @schema UpdateBranchRequest#backendEnvironmentArn
   */
  readonly backendEnvironmentArn?: string;

}

/**
 * @schema UpdateBranchResult
 */
export interface UpdateBranchResult {
  /**
   * @schema UpdateBranchResult#branch
   */
  readonly branch: Branch;

}

/**
 * @schema UpdateDomainAssociationRequest
 */
export interface UpdateDomainAssociationRequest {
  /**
   * @schema UpdateDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema UpdateDomainAssociationRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateDomainAssociationRequest#enableAutoSubDomain
   */
  readonly enableAutoSubDomain?: boolean;

  /**
   * @schema UpdateDomainAssociationRequest#subDomainSettings
   */
  readonly subDomainSettings: SubDomainSetting[];

  /**
   * @schema UpdateDomainAssociationRequest#autoSubDomainCreationPatterns
   */
  readonly autoSubDomainCreationPatterns?: string[];

  /**
   * @schema UpdateDomainAssociationRequest#autoSubDomainIAMRole
   */
  readonly autoSubDomainIAMRole?: string;

}

/**
 * @schema UpdateDomainAssociationResult
 */
export interface UpdateDomainAssociationResult {
  /**
   * @schema UpdateDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: DomainAssociation;

}

/**
 * @schema UpdateWebhookRequest
 */
export interface UpdateWebhookRequest {
  /**
   * @schema UpdateWebhookRequest#webhookId
   */
  readonly webhookId: string;

  /**
   * @schema UpdateWebhookRequest#branchName
   */
  readonly branchName?: string;

  /**
   * @schema UpdateWebhookRequest#description
   */
  readonly description?: string;

}

/**
 * @schema UpdateWebhookResult
 */
export interface UpdateWebhookResult {
  /**
   * @schema UpdateWebhookResult#webhook
   */
  readonly webhook: Webhook;

}

/**
 * @schema CustomRule
 */
export interface CustomRule {
  /**
   * @schema CustomRule#source
   */
  readonly source: string;

  /**
   * @schema CustomRule#target
   */
  readonly target: string;

  /**
   * @schema CustomRule#status
   */
  readonly status?: string;

  /**
   * @schema CustomRule#condition
   */
  readonly condition?: string;

}

/**
 * @schema AutoBranchCreationConfig
 */
export interface AutoBranchCreationConfig {
  /**
   * @schema AutoBranchCreationConfig#stage
   */
  readonly stage?: string;

  /**
   * @schema AutoBranchCreationConfig#framework
   */
  readonly framework?: string;

  /**
   * @schema AutoBranchCreationConfig#enableAutoBuild
   */
  readonly enableAutoBuild?: boolean;

  /**
   * @schema AutoBranchCreationConfig#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AutoBranchCreationConfig#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AutoBranchCreationConfig#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AutoBranchCreationConfig#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema AutoBranchCreationConfig#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AutoBranchCreationConfig#enablePullRequestPreview
   */
  readonly enablePullRequestPreview?: boolean;

  /**
   * @schema AutoBranchCreationConfig#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

}

/**
 * @schema App
 */
export interface App {
  /**
   * @schema App#appId
   */
  readonly appId: string;

  /**
   * @schema App#appArn
   */
  readonly appArn: string;

  /**
   * @schema App#name
   */
  readonly name: string;

  /**
   * @schema App#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema App#description
   */
  readonly description: string;

  /**
   * @schema App#repository
   */
  readonly repository: string;

  /**
   * @schema App#platform
   */
  readonly platform: string;

  /**
   * @schema App#createTime
   */
  readonly createTime: string;

  /**
   * @schema App#updateTime
   */
  readonly updateTime: string;

  /**
   * @schema App#iamServiceRoleArn
   */
  readonly iamServiceRoleArn?: string;

  /**
   * @schema App#environmentVariables
   */
  readonly environmentVariables: { [key: string]: string };

  /**
   * @schema App#defaultDomain
   */
  readonly defaultDomain: string;

  /**
   * @schema App#enableBranchAutoBuild
   */
  readonly enableBranchAutoBuild: boolean;

  /**
   * @schema App#enableBranchAutoDeletion
   */
  readonly enableBranchAutoDeletion?: boolean;

  /**
   * @schema App#enableBasicAuth
   */
  readonly enableBasicAuth: boolean;

  /**
   * @schema App#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema App#customRules
   */
  readonly customRules?: CustomRule[];

  /**
   * @schema App#productionBranch
   */
  readonly productionBranch?: ProductionBranch;

  /**
   * @schema App#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema App#customHeaders
   */
  readonly customHeaders?: string;

  /**
   * @schema App#enableAutoBranchCreation
   */
  readonly enableAutoBranchCreation?: boolean;

  /**
   * @schema App#autoBranchCreationPatterns
   */
  readonly autoBranchCreationPatterns?: string[];

  /**
   * @schema App#autoBranchCreationConfig
   */
  readonly autoBranchCreationConfig?: AutoBranchCreationConfig;

}

/**
 * @schema BackendEnvironment
 */
export interface BackendEnvironment {
  /**
   * @schema BackendEnvironment#backendEnvironmentArn
   */
  readonly backendEnvironmentArn: string;

  /**
   * @schema BackendEnvironment#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema BackendEnvironment#stackName
   */
  readonly stackName?: string;

  /**
   * @schema BackendEnvironment#deploymentArtifacts
   */
  readonly deploymentArtifacts?: string;

  /**
   * @schema BackendEnvironment#createTime
   */
  readonly createTime: string;

  /**
   * @schema BackendEnvironment#updateTime
   */
  readonly updateTime: string;

}

/**
 * @schema Branch
 */
export interface Branch {
  /**
   * @schema Branch#branchArn
   */
  readonly branchArn: string;

  /**
   * @schema Branch#branchName
   */
  readonly branchName: string;

  /**
   * @schema Branch#description
   */
  readonly description: string;

  /**
   * @schema Branch#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Branch#stage
   */
  readonly stage: string;

  /**
   * @schema Branch#displayName
   */
  readonly displayName: string;

  /**
   * @schema Branch#enableNotification
   */
  readonly enableNotification: boolean;

  /**
   * @schema Branch#createTime
   */
  readonly createTime: string;

  /**
   * @schema Branch#updateTime
   */
  readonly updateTime: string;

  /**
   * @schema Branch#environmentVariables
   */
  readonly environmentVariables: { [key: string]: string };

  /**
   * @schema Branch#enableAutoBuild
   */
  readonly enableAutoBuild: boolean;

  /**
   * @schema Branch#customDomains
   */
  readonly customDomains: string[];

  /**
   * @schema Branch#framework
   */
  readonly framework: string;

  /**
   * @schema Branch#activeJobId
   */
  readonly activeJobId: string;

  /**
   * @schema Branch#totalNumberOfJobs
   */
  readonly totalNumberOfJobs: string;

  /**
   * @schema Branch#enableBasicAuth
   */
  readonly enableBasicAuth: boolean;

  /**
   * @schema Branch#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema Branch#thumbnailUrl
   */
  readonly thumbnailUrl?: string;

  /**
   * @schema Branch#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema Branch#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema Branch#ttl
   */
  readonly ttl: string;

  /**
   * @schema Branch#associatedResources
   */
  readonly associatedResources?: string[];

  /**
   * @schema Branch#enablePullRequestPreview
   */
  readonly enablePullRequestPreview: boolean;

  /**
   * @schema Branch#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

  /**
   * @schema Branch#destinationBranch
   */
  readonly destinationBranch?: string;

  /**
   * @schema Branch#sourceBranch
   */
  readonly sourceBranch?: string;

  /**
   * @schema Branch#backendEnvironmentArn
   */
  readonly backendEnvironmentArn?: string;

}

/**
 * @schema SubDomainSetting
 */
export interface SubDomainSetting {
  /**
   * @schema SubDomainSetting#prefix
   */
  readonly prefix: string;

  /**
   * @schema SubDomainSetting#branchName
   */
  readonly branchName: string;

}

/**
 * @schema DomainAssociation
 */
export interface DomainAssociation {
  /**
   * @schema DomainAssociation#domainAssociationArn
   */
  readonly domainAssociationArn: string;

  /**
   * @schema DomainAssociation#domainName
   */
  readonly domainName: string;

  /**
   * @schema DomainAssociation#enableAutoSubDomain
   */
  readonly enableAutoSubDomain: boolean;

  /**
   * @schema DomainAssociation#autoSubDomainCreationPatterns
   */
  readonly autoSubDomainCreationPatterns?: string[];

  /**
   * @schema DomainAssociation#autoSubDomainIAMRole
   */
  readonly autoSubDomainIAMRole?: string;

  /**
   * @schema DomainAssociation#domainStatus
   */
  readonly domainStatus: string;

  /**
   * @schema DomainAssociation#statusReason
   */
  readonly statusReason: string;

  /**
   * @schema DomainAssociation#certificateVerificationDNSRecord
   */
  readonly certificateVerificationDNSRecord?: string;

  /**
   * @schema DomainAssociation#subDomains
   */
  readonly subDomains: SubDomain[];

}

/**
 * @schema Webhook
 */
export interface Webhook {
  /**
   * @schema Webhook#webhookArn
   */
  readonly webhookArn: string;

  /**
   * @schema Webhook#webhookId
   */
  readonly webhookId: string;

  /**
   * @schema Webhook#webhookUrl
   */
  readonly webhookUrl: string;

  /**
   * @schema Webhook#branchName
   */
  readonly branchName: string;

  /**
   * @schema Webhook#description
   */
  readonly description: string;

  /**
   * @schema Webhook#createTime
   */
  readonly createTime: string;

  /**
   * @schema Webhook#updateTime
   */
  readonly updateTime: string;

}

/**
 * @schema JobSummary
 */
export interface JobSummary {
  /**
   * @schema JobSummary#jobArn
   */
  readonly jobArn: string;

  /**
   * @schema JobSummary#jobId
   */
  readonly jobId: string;

  /**
   * @schema JobSummary#commitId
   */
  readonly commitId: string;

  /**
   * @schema JobSummary#commitMessage
   */
  readonly commitMessage: string;

  /**
   * @schema JobSummary#commitTime
   */
  readonly commitTime: string;

  /**
   * @schema JobSummary#startTime
   */
  readonly startTime: string;

  /**
   * @schema JobSummary#status
   */
  readonly status: string;

  /**
   * @schema JobSummary#endTime
   */
  readonly endTime?: string;

  /**
   * @schema JobSummary#jobType
   */
  readonly jobType: string;

}

/**
 * @schema Job
 */
export interface Job {
  /**
   * @schema Job#summary
   */
  readonly summary: JobSummary;

  /**
   * @schema Job#steps
   */
  readonly steps: Step[];

}

/**
 * @schema Artifact
 */
export interface Artifact {
  /**
   * @schema Artifact#artifactFileName
   */
  readonly artifactFileName: string;

  /**
   * @schema Artifact#artifactId
   */
  readonly artifactId: string;

}

/**
 * @schema ProductionBranch
 */
export interface ProductionBranch {
  /**
   * @schema ProductionBranch#lastDeployTime
   */
  readonly lastDeployTime?: string;

  /**
   * @schema ProductionBranch#status
   */
  readonly status?: string;

  /**
   * @schema ProductionBranch#thumbnailUrl
   */
  readonly thumbnailUrl?: string;

  /**
   * @schema ProductionBranch#branchName
   */
  readonly branchName?: string;

}

/**
 * @schema SubDomain
 */
export interface SubDomain {
  /**
   * @schema SubDomain#subDomainSetting
   */
  readonly subDomainSetting: SubDomainSetting;

  /**
   * @schema SubDomain#verified
   */
  readonly verified: boolean;

  /**
   * @schema SubDomain#dnsRecord
   */
  readonly dnsRecord: string;

}

/**
 * @schema Step
 */
export interface Step {
  /**
   * @schema Step#stepName
   */
  readonly stepName: string;

  /**
   * @schema Step#startTime
   */
  readonly startTime: string;

  /**
   * @schema Step#status
   */
  readonly status: string;

  /**
   * @schema Step#endTime
   */
  readonly endTime: string;

  /**
   * @schema Step#logUrl
   */
  readonly logUrl?: string;

  /**
   * @schema Step#artifactsUrl
   */
  readonly artifactsUrl?: string;

  /**
   * @schema Step#testArtifactsUrl
   */
  readonly testArtifactsUrl?: string;

  /**
   * @schema Step#testConfigUrl
   */
  readonly testConfigUrl?: string;

  /**
   * @schema Step#screenshots
   */
  readonly screenshots?: { [key: string]: string };

  /**
   * @schema Step#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema Step#context
   */
  readonly context?: string;

}
