/**
 * @schema BatchDeleteBuildsInput
 */
export interface BatchDeleteBuildsInput {
  /**
   * @schema BatchDeleteBuildsInput#ids
   */
  readonly ids: string[];

}

/**
 * @schema BatchDeleteBuildsOutput
 */
export interface BatchDeleteBuildsOutput {
  /**
   * @schema BatchDeleteBuildsOutput#buildsDeleted
   */
  readonly buildsDeleted?: string[];

  /**
   * @schema BatchDeleteBuildsOutput#buildsNotDeleted
   */
  readonly buildsNotDeleted?: BuildNotDeleted[];

}

/**
 * @schema BatchGetBuildBatchesInput
 */
export interface BatchGetBuildBatchesInput {
  /**
   * @schema BatchGetBuildBatchesInput#ids
   */
  readonly ids: string[];

}

/**
 * @schema BatchGetBuildBatchesOutput
 */
export interface BatchGetBuildBatchesOutput {
  /**
   * @schema BatchGetBuildBatchesOutput#buildBatches
   */
  readonly buildBatches?: BuildBatch[];

  /**
   * @schema BatchGetBuildBatchesOutput#buildBatchesNotFound
   */
  readonly buildBatchesNotFound?: string[];

}

/**
 * @schema BatchGetBuildsInput
 */
export interface BatchGetBuildsInput {
  /**
   * @schema BatchGetBuildsInput#ids
   */
  readonly ids: string[];

}

/**
 * @schema BatchGetBuildsOutput
 */
export interface BatchGetBuildsOutput {
  /**
   * @schema BatchGetBuildsOutput#builds
   */
  readonly builds?: Build[];

  /**
   * @schema BatchGetBuildsOutput#buildsNotFound
   */
  readonly buildsNotFound?: string[];

}

/**
 * @schema BatchGetProjectsInput
 */
export interface BatchGetProjectsInput {
  /**
   * @schema BatchGetProjectsInput#names
   */
  readonly names: string[];

}

/**
 * @schema BatchGetProjectsOutput
 */
export interface BatchGetProjectsOutput {
  /**
   * @schema BatchGetProjectsOutput#projects
   */
  readonly projects?: Project[];

  /**
   * @schema BatchGetProjectsOutput#projectsNotFound
   */
  readonly projectsNotFound?: string[];

}

/**
 * @schema BatchGetReportGroupsInput
 */
export interface BatchGetReportGroupsInput {
  /**
   * @schema BatchGetReportGroupsInput#reportGroupArns
   */
  readonly reportGroupArns: string[];

}

/**
 * @schema BatchGetReportGroupsOutput
 */
export interface BatchGetReportGroupsOutput {
  /**
   * @schema BatchGetReportGroupsOutput#reportGroups
   */
  readonly reportGroups?: ReportGroup[];

  /**
   * @schema BatchGetReportGroupsOutput#reportGroupsNotFound
   */
  readonly reportGroupsNotFound?: string[];

}

/**
 * @schema BatchGetReportsInput
 */
export interface BatchGetReportsInput {
  /**
   * @schema BatchGetReportsInput#reportArns
   */
  readonly reportArns: string[];

}

/**
 * @schema BatchGetReportsOutput
 */
export interface BatchGetReportsOutput {
  /**
   * @schema BatchGetReportsOutput#reports
   */
  readonly reports?: Report[];

  /**
   * @schema BatchGetReportsOutput#reportsNotFound
   */
  readonly reportsNotFound?: string[];

}

/**
 * @schema CreateProjectInput
 */
export interface CreateProjectInput {
  /**
   * @schema CreateProjectInput#name
   */
  readonly name: string;

  /**
   * @schema CreateProjectInput#description
   */
  readonly description?: string;

  /**
   * @schema CreateProjectInput#source
   */
  readonly source: ProjectSource;

  /**
   * @schema CreateProjectInput#secondarySources
   */
  readonly secondarySources?: ProjectSource[];

  /**
   * @schema CreateProjectInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CreateProjectInput#secondarySourceVersions
   */
  readonly secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @schema CreateProjectInput#artifacts
   */
  readonly artifacts: ProjectArtifacts;

  /**
   * @schema CreateProjectInput#secondaryArtifacts
   */
  readonly secondaryArtifacts?: ProjectArtifacts[];

  /**
   * @schema CreateProjectInput#cache
   */
  readonly cache?: ProjectCache;

  /**
   * @schema CreateProjectInput#environment
   */
  readonly environment: ProjectEnvironment;

  /**
   * @schema CreateProjectInput#serviceRole
   */
  readonly serviceRole: string;

  /**
   * @schema CreateProjectInput#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CreateProjectInput#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CreateProjectInput#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CreateProjectInput#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateProjectInput#vpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema CreateProjectInput#badgeEnabled
   */
  readonly badgeEnabled?: boolean;

  /**
   * @schema CreateProjectInput#logsConfig
   */
  readonly logsConfig?: LogsConfig;

  /**
   * @schema CreateProjectInput#fileSystemLocations
   */
  readonly fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @schema CreateProjectInput#buildBatchConfig
   */
  readonly buildBatchConfig?: ProjectBuildBatchConfig;

}

/**
 * @schema CreateProjectOutput
 */
export interface CreateProjectOutput {
  /**
   * @schema CreateProjectOutput#project
   */
  readonly project?: Project;

}

/**
 * @schema CreateReportGroupInput
 */
export interface CreateReportGroupInput {
  /**
   * @schema CreateReportGroupInput#name
   */
  readonly name: string;

  /**
   * @schema CreateReportGroupInput#type
   */
  readonly type: string;

  /**
   * @schema CreateReportGroupInput#exportConfig
   */
  readonly exportConfig: ReportExportConfig;

  /**
   * @schema CreateReportGroupInput#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateReportGroupOutput
 */
export interface CreateReportGroupOutput {
  /**
   * @schema CreateReportGroupOutput#reportGroup
   */
  readonly reportGroup?: ReportGroup;

}

/**
 * @schema CreateWebhookInput
 */
export interface CreateWebhookInput {
  /**
   * @schema CreateWebhookInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CreateWebhookInput#branchFilter
   */
  readonly branchFilter?: string;

  /**
   * @schema CreateWebhookInput#filterGroups
   */
  readonly filterGroups?: WebhookFilter[][];

  /**
   * @schema CreateWebhookInput#buildType
   */
  readonly buildType?: string;

}

/**
 * @schema CreateWebhookOutput
 */
export interface CreateWebhookOutput {
  /**
   * @schema CreateWebhookOutput#webhook
   */
  readonly webhook?: Webhook;

}

/**
 * @schema DeleteBuildBatchInput
 */
export interface DeleteBuildBatchInput {
  /**
   * @schema DeleteBuildBatchInput#id
   */
  readonly id: string;

}

/**
 * @schema DeleteBuildBatchOutput
 */
export interface DeleteBuildBatchOutput {
  /**
   * @schema DeleteBuildBatchOutput#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema DeleteBuildBatchOutput#buildsDeleted
   */
  readonly buildsDeleted?: string[];

  /**
   * @schema DeleteBuildBatchOutput#buildsNotDeleted
   */
  readonly buildsNotDeleted?: BuildNotDeleted[];

}

/**
 * @schema DeleteProjectInput
 */
export interface DeleteProjectInput {
  /**
   * @schema DeleteProjectInput#name
   */
  readonly name: string;

}

/**
 * @schema DeleteProjectOutput
 */
export interface DeleteProjectOutput {
}

/**
 * @schema DeleteReportInput
 */
export interface DeleteReportInput {
  /**
   * @schema DeleteReportInput#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteReportOutput
 */
export interface DeleteReportOutput {
}

/**
 * @schema DeleteReportGroupInput
 */
export interface DeleteReportGroupInput {
  /**
   * @schema DeleteReportGroupInput#arn
   */
  readonly arn: string;

  /**
   * @schema DeleteReportGroupInput#deleteReports
   */
  readonly deleteReports?: boolean;

}

/**
 * @schema DeleteReportGroupOutput
 */
export interface DeleteReportGroupOutput {
}

/**
 * @schema DeleteResourcePolicyInput
 */
export interface DeleteResourcePolicyInput {
  /**
   * @schema DeleteResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DeleteResourcePolicyOutput
 */
export interface DeleteResourcePolicyOutput {
}

/**
 * @schema DeleteSourceCredentialsInput
 */
export interface DeleteSourceCredentialsInput {
  /**
   * @schema DeleteSourceCredentialsInput#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteSourceCredentialsOutput
 */
export interface DeleteSourceCredentialsOutput {
  /**
   * @schema DeleteSourceCredentialsOutput#arn
   */
  readonly arn?: string;

}

/**
 * @schema DeleteWebhookInput
 */
export interface DeleteWebhookInput {
  /**
   * @schema DeleteWebhookInput#projectName
   */
  readonly projectName: string;

}

/**
 * @schema DeleteWebhookOutput
 */
export interface DeleteWebhookOutput {
}

/**
 * @schema DescribeCodeCoveragesInput
 */
export interface DescribeCodeCoveragesInput {
  /**
   * @schema DescribeCodeCoveragesInput#reportArn
   */
  readonly reportArn: string;

  /**
   * @schema DescribeCodeCoveragesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCodeCoveragesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeCodeCoveragesInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema DescribeCodeCoveragesInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema DescribeCodeCoveragesInput#minLineCoveragePercentage
   */
  readonly minLineCoveragePercentage?: number;

  /**
   * @schema DescribeCodeCoveragesInput#maxLineCoveragePercentage
   */
  readonly maxLineCoveragePercentage?: number;

}

/**
 * @schema DescribeCodeCoveragesOutput
 */
export interface DescribeCodeCoveragesOutput {
  /**
   * @schema DescribeCodeCoveragesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCodeCoveragesOutput#codeCoverages
   */
  readonly codeCoverages?: CodeCoverage[];

}

/**
 * @schema DescribeTestCasesInput
 */
export interface DescribeTestCasesInput {
  /**
   * @schema DescribeTestCasesInput#reportArn
   */
  readonly reportArn: string;

  /**
   * @schema DescribeTestCasesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTestCasesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTestCasesInput#filter
   */
  readonly filter?: TestCaseFilter;

}

/**
 * @schema DescribeTestCasesOutput
 */
export interface DescribeTestCasesOutput {
  /**
   * @schema DescribeTestCasesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTestCasesOutput#testCases
   */
  readonly testCases?: TestCase[];

}

/**
 * @schema GetReportGroupTrendInput
 */
export interface GetReportGroupTrendInput {
  /**
   * @schema GetReportGroupTrendInput#reportGroupArn
   */
  readonly reportGroupArn: string;

  /**
   * @schema GetReportGroupTrendInput#numOfReports
   */
  readonly numOfReports?: number;

  /**
   * @schema GetReportGroupTrendInput#trendField
   */
  readonly trendField: string;

}

/**
 * @schema GetReportGroupTrendOutput
 */
export interface GetReportGroupTrendOutput {
  /**
   * @schema GetReportGroupTrendOutput#stats
   */
  readonly stats?: ReportGroupTrendStats;

  /**
   * @schema GetReportGroupTrendOutput#rawData
   */
  readonly rawData?: ReportWithRawData[];

}

/**
 * @schema GetResourcePolicyInput
 */
export interface GetResourcePolicyInput {
  /**
   * @schema GetResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GetResourcePolicyOutput
 */
export interface GetResourcePolicyOutput {
  /**
   * @schema GetResourcePolicyOutput#policy
   */
  readonly policy?: string;

}

/**
 * @schema ImportSourceCredentialsInput
 */
export interface ImportSourceCredentialsInput {
  /**
   * @schema ImportSourceCredentialsInput#username
   */
  readonly username?: string;

  /**
   * @schema ImportSourceCredentialsInput#token
   */
  readonly token: string;

  /**
   * @schema ImportSourceCredentialsInput#serverType
   */
  readonly serverType: string;

  /**
   * @schema ImportSourceCredentialsInput#authType
   */
  readonly authType: string;

  /**
   * @schema ImportSourceCredentialsInput#shouldOverwrite
   */
  readonly shouldOverwrite?: boolean;

}

/**
 * @schema ImportSourceCredentialsOutput
 */
export interface ImportSourceCredentialsOutput {
  /**
   * @schema ImportSourceCredentialsOutput#arn
   */
  readonly arn?: string;

}

/**
 * @schema InvalidateProjectCacheInput
 */
export interface InvalidateProjectCacheInput {
  /**
   * @schema InvalidateProjectCacheInput#projectName
   */
  readonly projectName: string;

}

/**
 * @schema InvalidateProjectCacheOutput
 */
export interface InvalidateProjectCacheOutput {
}

/**
 * @schema ListBuildBatchesInput
 */
export interface ListBuildBatchesInput {
  /**
   * @schema ListBuildBatchesInput#filter
   */
  readonly filter?: BuildBatchFilter;

  /**
   * @schema ListBuildBatchesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListBuildBatchesInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListBuildBatchesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBuildBatchesOutput
 */
export interface ListBuildBatchesOutput {
  /**
   * @schema ListBuildBatchesOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema ListBuildBatchesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBuildBatchesForProjectInput
 */
export interface ListBuildBatchesForProjectInput {
  /**
   * @schema ListBuildBatchesForProjectInput#projectName
   */
  readonly projectName?: string;

  /**
   * @schema ListBuildBatchesForProjectInput#filter
   */
  readonly filter?: BuildBatchFilter;

  /**
   * @schema ListBuildBatchesForProjectInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListBuildBatchesForProjectInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListBuildBatchesForProjectInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBuildBatchesForProjectOutput
 */
export interface ListBuildBatchesForProjectOutput {
  /**
   * @schema ListBuildBatchesForProjectOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema ListBuildBatchesForProjectOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBuildsInput
 */
export interface ListBuildsInput {
  /**
   * @schema ListBuildsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListBuildsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBuildsOutput
 */
export interface ListBuildsOutput {
  /**
   * @schema ListBuildsOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema ListBuildsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBuildsForProjectInput
 */
export interface ListBuildsForProjectInput {
  /**
   * @schema ListBuildsForProjectInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema ListBuildsForProjectInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListBuildsForProjectInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBuildsForProjectOutput
 */
export interface ListBuildsForProjectOutput {
  /**
   * @schema ListBuildsForProjectOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema ListBuildsForProjectOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCuratedEnvironmentImagesInput
 */
export interface ListCuratedEnvironmentImagesInput {
}

/**
 * @schema ListCuratedEnvironmentImagesOutput
 */
export interface ListCuratedEnvironmentImagesOutput {
  /**
   * @schema ListCuratedEnvironmentImagesOutput#platforms
   */
  readonly platforms?: EnvironmentPlatform[];

}

/**
 * @schema ListProjectsInput
 */
export interface ListProjectsInput {
  /**
   * @schema ListProjectsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListProjectsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListProjectsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProjectsOutput
 */
export interface ListProjectsOutput {
  /**
   * @schema ListProjectsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProjectsOutput#projects
   */
  readonly projects?: string[];

}

/**
 * @schema ListReportGroupsInput
 */
export interface ListReportGroupsInput {
  /**
   * @schema ListReportGroupsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListReportGroupsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListReportGroupsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReportGroupsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListReportGroupsOutput
 */
export interface ListReportGroupsOutput {
  /**
   * @schema ListReportGroupsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReportGroupsOutput#reportGroups
   */
  readonly reportGroups?: string[];

}

/**
 * @schema ListReportsInput
 */
export interface ListReportsInput {
  /**
   * @schema ListReportsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListReportsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReportsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListReportsInput#filter
   */
  readonly filter?: ReportFilter;

}

/**
 * @schema ListReportsOutput
 */
export interface ListReportsOutput {
  /**
   * @schema ListReportsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReportsOutput#reports
   */
  readonly reports?: string[];

}

/**
 * @schema ListReportsForReportGroupInput
 */
export interface ListReportsForReportGroupInput {
  /**
   * @schema ListReportsForReportGroupInput#reportGroupArn
   */
  readonly reportGroupArn: string;

  /**
   * @schema ListReportsForReportGroupInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReportsForReportGroupInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListReportsForReportGroupInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListReportsForReportGroupInput#filter
   */
  readonly filter?: ReportFilter;

}

/**
 * @schema ListReportsForReportGroupOutput
 */
export interface ListReportsForReportGroupOutput {
  /**
   * @schema ListReportsForReportGroupOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReportsForReportGroupOutput#reports
   */
  readonly reports?: string[];

}

/**
 * @schema ListSharedProjectsInput
 */
export interface ListSharedProjectsInput {
  /**
   * @schema ListSharedProjectsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListSharedProjectsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListSharedProjectsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSharedProjectsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSharedProjectsOutput
 */
export interface ListSharedProjectsOutput {
  /**
   * @schema ListSharedProjectsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSharedProjectsOutput#projects
   */
  readonly projects?: string[];

}

/**
 * @schema ListSharedReportGroupsInput
 */
export interface ListSharedReportGroupsInput {
  /**
   * @schema ListSharedReportGroupsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListSharedReportGroupsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListSharedReportGroupsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSharedReportGroupsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSharedReportGroupsOutput
 */
export interface ListSharedReportGroupsOutput {
  /**
   * @schema ListSharedReportGroupsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSharedReportGroupsOutput#reportGroups
   */
  readonly reportGroups?: string[];

}

/**
 * @schema ListSourceCredentialsInput
 */
export interface ListSourceCredentialsInput {
}

/**
 * @schema ListSourceCredentialsOutput
 */
export interface ListSourceCredentialsOutput {
  /**
   * @schema ListSourceCredentialsOutput#sourceCredentialsInfos
   */
  readonly sourceCredentialsInfos?: SourceCredentialsInfo[];

}

/**
 * @schema PutResourcePolicyInput
 */
export interface PutResourcePolicyInput {
  /**
   * @schema PutResourcePolicyInput#policy
   */
  readonly policy: string;

  /**
   * @schema PutResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema PutResourcePolicyOutput
 */
export interface PutResourcePolicyOutput {
  /**
   * @schema PutResourcePolicyOutput#resourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema RetryBuildInput
 */
export interface RetryBuildInput {
  /**
   * @schema RetryBuildInput#id
   */
  readonly id?: string;

  /**
   * @schema RetryBuildInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * @schema RetryBuildOutput
 */
export interface RetryBuildOutput {
  /**
   * @schema RetryBuildOutput#build
   */
  readonly build?: Build;

}

/**
 * @schema RetryBuildBatchInput
 */
export interface RetryBuildBatchInput {
  /**
   * @schema RetryBuildBatchInput#id
   */
  readonly id?: string;

  /**
   * @schema RetryBuildBatchInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema RetryBuildBatchInput#retryType
   */
  readonly retryType?: string;

}

/**
 * @schema RetryBuildBatchOutput
 */
export interface RetryBuildBatchOutput {
  /**
   * @schema RetryBuildBatchOutput#buildBatch
   */
  readonly buildBatch?: BuildBatch;

}

/**
 * @schema StartBuildInput
 */
export interface StartBuildInput {
  /**
   * @schema StartBuildInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema StartBuildInput#secondarySourcesOverride
   */
  readonly secondarySourcesOverride?: ProjectSource[];

  /**
   * @schema StartBuildInput#secondarySourcesVersionOverride
   */
  readonly secondarySourcesVersionOverride?: ProjectSourceVersion[];

  /**
   * @schema StartBuildInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema StartBuildInput#artifactsOverride
   */
  readonly artifactsOverride?: ProjectArtifacts;

  /**
   * @schema StartBuildInput#secondaryArtifactsOverride
   */
  readonly secondaryArtifactsOverride?: ProjectArtifacts[];

  /**
   * @schema StartBuildInput#environmentVariablesOverride
   */
  readonly environmentVariablesOverride?: EnvironmentVariable[];

  /**
   * @schema StartBuildInput#sourceTypeOverride
   */
  readonly sourceTypeOverride?: string;

  /**
   * @schema StartBuildInput#sourceLocationOverride
   */
  readonly sourceLocationOverride?: string;

  /**
   * @schema StartBuildInput#sourceAuthOverride
   */
  readonly sourceAuthOverride?: SourceAuth;

  /**
   * @schema StartBuildInput#gitCloneDepthOverride
   */
  readonly gitCloneDepthOverride?: number;

  /**
   * @schema StartBuildInput#gitSubmodulesConfigOverride
   */
  readonly gitSubmodulesConfigOverride?: GitSubmodulesConfig;

  /**
   * @schema StartBuildInput#buildspecOverride
   */
  readonly buildspecOverride?: string;

  /**
   * @schema StartBuildInput#insecureSslOverride
   */
  readonly insecureSslOverride?: boolean;

  /**
   * @schema StartBuildInput#reportBuildStatusOverride
   */
  readonly reportBuildStatusOverride?: boolean;

  /**
   * @schema StartBuildInput#buildStatusConfigOverride
   */
  readonly buildStatusConfigOverride?: BuildStatusConfig;

  /**
   * @schema StartBuildInput#environmentTypeOverride
   */
  readonly environmentTypeOverride?: string;

  /**
   * @schema StartBuildInput#imageOverride
   */
  readonly imageOverride?: string;

  /**
   * @schema StartBuildInput#computeTypeOverride
   */
  readonly computeTypeOverride?: string;

  /**
   * @schema StartBuildInput#certificateOverride
   */
  readonly certificateOverride?: string;

  /**
   * @schema StartBuildInput#cacheOverride
   */
  readonly cacheOverride?: ProjectCache;

  /**
   * @schema StartBuildInput#serviceRoleOverride
   */
  readonly serviceRoleOverride?: string;

  /**
   * @schema StartBuildInput#privilegedModeOverride
   */
  readonly privilegedModeOverride?: boolean;

  /**
   * @schema StartBuildInput#timeoutInMinutesOverride
   */
  readonly timeoutInMinutesOverride?: number;

  /**
   * @schema StartBuildInput#queuedTimeoutInMinutesOverride
   */
  readonly queuedTimeoutInMinutesOverride?: number;

  /**
   * @schema StartBuildInput#encryptionKeyOverride
   */
  readonly encryptionKeyOverride?: string;

  /**
   * @schema StartBuildInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema StartBuildInput#logsConfigOverride
   */
  readonly logsConfigOverride?: LogsConfig;

  /**
   * @schema StartBuildInput#registryCredentialOverride
   */
  readonly registryCredentialOverride?: RegistryCredential;

  /**
   * @schema StartBuildInput#imagePullCredentialsTypeOverride
   */
  readonly imagePullCredentialsTypeOverride?: string;

  /**
   * @schema StartBuildInput#debugSessionEnabled
   */
  readonly debugSessionEnabled?: boolean;

}

/**
 * @schema StartBuildOutput
 */
export interface StartBuildOutput {
  /**
   * @schema StartBuildOutput#build
   */
  readonly build?: Build;

}

/**
 * @schema StartBuildBatchInput
 */
export interface StartBuildBatchInput {
  /**
   * @schema StartBuildBatchInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema StartBuildBatchInput#secondarySourcesOverride
   */
  readonly secondarySourcesOverride?: ProjectSource[];

  /**
   * @schema StartBuildBatchInput#secondarySourcesVersionOverride
   */
  readonly secondarySourcesVersionOverride?: ProjectSourceVersion[];

  /**
   * @schema StartBuildBatchInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema StartBuildBatchInput#artifactsOverride
   */
  readonly artifactsOverride?: ProjectArtifacts;

  /**
   * @schema StartBuildBatchInput#secondaryArtifactsOverride
   */
  readonly secondaryArtifactsOverride?: ProjectArtifacts[];

  /**
   * @schema StartBuildBatchInput#environmentVariablesOverride
   */
  readonly environmentVariablesOverride?: EnvironmentVariable[];

  /**
   * @schema StartBuildBatchInput#sourceTypeOverride
   */
  readonly sourceTypeOverride?: string;

  /**
   * @schema StartBuildBatchInput#sourceLocationOverride
   */
  readonly sourceLocationOverride?: string;

  /**
   * @schema StartBuildBatchInput#sourceAuthOverride
   */
  readonly sourceAuthOverride?: SourceAuth;

  /**
   * @schema StartBuildBatchInput#gitCloneDepthOverride
   */
  readonly gitCloneDepthOverride?: number;

  /**
   * @schema StartBuildBatchInput#gitSubmodulesConfigOverride
   */
  readonly gitSubmodulesConfigOverride?: GitSubmodulesConfig;

  /**
   * @schema StartBuildBatchInput#buildspecOverride
   */
  readonly buildspecOverride?: string;

  /**
   * @schema StartBuildBatchInput#insecureSslOverride
   */
  readonly insecureSslOverride?: boolean;

  /**
   * @schema StartBuildBatchInput#reportBuildBatchStatusOverride
   */
  readonly reportBuildBatchStatusOverride?: boolean;

  /**
   * @schema StartBuildBatchInput#environmentTypeOverride
   */
  readonly environmentTypeOverride?: string;

  /**
   * @schema StartBuildBatchInput#imageOverride
   */
  readonly imageOverride?: string;

  /**
   * @schema StartBuildBatchInput#computeTypeOverride
   */
  readonly computeTypeOverride?: string;

  /**
   * @schema StartBuildBatchInput#certificateOverride
   */
  readonly certificateOverride?: string;

  /**
   * @schema StartBuildBatchInput#cacheOverride
   */
  readonly cacheOverride?: ProjectCache;

  /**
   * @schema StartBuildBatchInput#serviceRoleOverride
   */
  readonly serviceRoleOverride?: string;

  /**
   * @schema StartBuildBatchInput#privilegedModeOverride
   */
  readonly privilegedModeOverride?: boolean;

  /**
   * @schema StartBuildBatchInput#buildTimeoutInMinutesOverride
   */
  readonly buildTimeoutInMinutesOverride?: number;

  /**
   * @schema StartBuildBatchInput#queuedTimeoutInMinutesOverride
   */
  readonly queuedTimeoutInMinutesOverride?: number;

  /**
   * @schema StartBuildBatchInput#encryptionKeyOverride
   */
  readonly encryptionKeyOverride?: string;

  /**
   * @schema StartBuildBatchInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema StartBuildBatchInput#logsConfigOverride
   */
  readonly logsConfigOverride?: LogsConfig;

  /**
   * @schema StartBuildBatchInput#registryCredentialOverride
   */
  readonly registryCredentialOverride?: RegistryCredential;

  /**
   * @schema StartBuildBatchInput#imagePullCredentialsTypeOverride
   */
  readonly imagePullCredentialsTypeOverride?: string;

  /**
   * @schema StartBuildBatchInput#buildBatchConfigOverride
   */
  readonly buildBatchConfigOverride?: ProjectBuildBatchConfig;

}

/**
 * @schema StartBuildBatchOutput
 */
export interface StartBuildBatchOutput {
  /**
   * @schema StartBuildBatchOutput#buildBatch
   */
  readonly buildBatch?: BuildBatch;

}

/**
 * @schema StopBuildInput
 */
export interface StopBuildInput {
  /**
   * @schema StopBuildInput#id
   */
  readonly id: string;

}

/**
 * @schema StopBuildOutput
 */
export interface StopBuildOutput {
  /**
   * @schema StopBuildOutput#build
   */
  readonly build?: Build;

}

/**
 * @schema StopBuildBatchInput
 */
export interface StopBuildBatchInput {
  /**
   * @schema StopBuildBatchInput#id
   */
  readonly id: string;

}

/**
 * @schema StopBuildBatchOutput
 */
export interface StopBuildBatchOutput {
  /**
   * @schema StopBuildBatchOutput#buildBatch
   */
  readonly buildBatch?: BuildBatch;

}

/**
 * @schema UpdateProjectInput
 */
export interface UpdateProjectInput {
  /**
   * @schema UpdateProjectInput#name
   */
  readonly name: string;

  /**
   * @schema UpdateProjectInput#description
   */
  readonly description?: string;

  /**
   * @schema UpdateProjectInput#source
   */
  readonly source?: ProjectSource;

  /**
   * @schema UpdateProjectInput#secondarySources
   */
  readonly secondarySources?: ProjectSource[];

  /**
   * @schema UpdateProjectInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema UpdateProjectInput#secondarySourceVersions
   */
  readonly secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @schema UpdateProjectInput#artifacts
   */
  readonly artifacts?: ProjectArtifacts;

  /**
   * @schema UpdateProjectInput#secondaryArtifacts
   */
  readonly secondaryArtifacts?: ProjectArtifacts[];

  /**
   * @schema UpdateProjectInput#cache
   */
  readonly cache?: ProjectCache;

  /**
   * @schema UpdateProjectInput#environment
   */
  readonly environment?: ProjectEnvironment;

  /**
   * @schema UpdateProjectInput#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema UpdateProjectInput#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema UpdateProjectInput#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema UpdateProjectInput#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema UpdateProjectInput#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema UpdateProjectInput#vpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema UpdateProjectInput#badgeEnabled
   */
  readonly badgeEnabled?: boolean;

  /**
   * @schema UpdateProjectInput#logsConfig
   */
  readonly logsConfig?: LogsConfig;

  /**
   * @schema UpdateProjectInput#fileSystemLocations
   */
  readonly fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @schema UpdateProjectInput#buildBatchConfig
   */
  readonly buildBatchConfig?: ProjectBuildBatchConfig;

}

/**
 * @schema UpdateProjectOutput
 */
export interface UpdateProjectOutput {
  /**
   * @schema UpdateProjectOutput#project
   */
  readonly project?: Project;

}

/**
 * @schema UpdateReportGroupInput
 */
export interface UpdateReportGroupInput {
  /**
   * @schema UpdateReportGroupInput#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateReportGroupInput#exportConfig
   */
  readonly exportConfig?: ReportExportConfig;

  /**
   * @schema UpdateReportGroupInput#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UpdateReportGroupOutput
 */
export interface UpdateReportGroupOutput {
  /**
   * @schema UpdateReportGroupOutput#reportGroup
   */
  readonly reportGroup?: ReportGroup;

}

/**
 * @schema UpdateWebhookInput
 */
export interface UpdateWebhookInput {
  /**
   * @schema UpdateWebhookInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema UpdateWebhookInput#branchFilter
   */
  readonly branchFilter?: string;

  /**
   * @schema UpdateWebhookInput#rotateSecret
   */
  readonly rotateSecret?: boolean;

  /**
   * @schema UpdateWebhookInput#filterGroups
   */
  readonly filterGroups?: WebhookFilter[][];

  /**
   * @schema UpdateWebhookInput#buildType
   */
  readonly buildType?: string;

}

/**
 * @schema UpdateWebhookOutput
 */
export interface UpdateWebhookOutput {
  /**
   * @schema UpdateWebhookOutput#webhook
   */
  readonly webhook?: Webhook;

}

/**
 * @schema BuildNotDeleted
 */
export interface BuildNotDeleted {
  /**
   * @schema BuildNotDeleted#id
   */
  readonly id?: string;

  /**
   * @schema BuildNotDeleted#statusCode
   */
  readonly statusCode?: string;

}

/**
 * @schema BuildBatch
 */
export interface BuildBatch {
  /**
   * @schema BuildBatch#id
   */
  readonly id?: string;

  /**
   * @schema BuildBatch#arn
   */
  readonly arn?: string;

  /**
   * @schema BuildBatch#startTime
   */
  readonly startTime?: string;

  /**
   * @schema BuildBatch#endTime
   */
  readonly endTime?: string;

  /**
   * @schema BuildBatch#currentPhase
   */
  readonly currentPhase?: string;

  /**
   * @schema BuildBatch#buildBatchStatus
   */
  readonly buildBatchStatus?: string;

  /**
   * @schema BuildBatch#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema BuildBatch#resolvedSourceVersion
   */
  readonly resolvedSourceVersion?: string;

  /**
   * @schema BuildBatch#projectName
   */
  readonly projectName?: string;

  /**
   * @schema BuildBatch#phases
   */
  readonly phases?: BuildBatchPhase[];

  /**
   * @schema BuildBatch#source
   */
  readonly source?: ProjectSource;

  /**
   * @schema BuildBatch#secondarySources
   */
  readonly secondarySources?: ProjectSource[];

  /**
   * @schema BuildBatch#secondarySourceVersions
   */
  readonly secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @schema BuildBatch#artifacts
   */
  readonly artifacts?: BuildArtifacts;

  /**
   * @schema BuildBatch#secondaryArtifacts
   */
  readonly secondaryArtifacts?: BuildArtifacts[];

  /**
   * @schema BuildBatch#cache
   */
  readonly cache?: ProjectCache;

  /**
   * @schema BuildBatch#environment
   */
  readonly environment?: ProjectEnvironment;

  /**
   * @schema BuildBatch#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema BuildBatch#logConfig
   */
  readonly logConfig?: LogsConfig;

  /**
   * @schema BuildBatch#buildTimeoutInMinutes
   */
  readonly buildTimeoutInMinutes?: number;

  /**
   * @schema BuildBatch#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema BuildBatch#complete
   */
  readonly complete?: boolean;

  /**
   * @schema BuildBatch#initiator
   */
  readonly initiator?: string;

  /**
   * @schema BuildBatch#vpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema BuildBatch#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema BuildBatch#buildBatchNumber
   */
  readonly buildBatchNumber?: number;

  /**
   * @schema BuildBatch#fileSystemLocations
   */
  readonly fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @schema BuildBatch#buildBatchConfig
   */
  readonly buildBatchConfig?: ProjectBuildBatchConfig;

  /**
   * @schema BuildBatch#buildGroups
   */
  readonly buildGroups?: BuildGroup[];

}

/**
 * @schema Build
 */
export interface Build {
  /**
   * @schema Build#id
   */
  readonly id?: string;

  /**
   * @schema Build#arn
   */
  readonly arn?: string;

  /**
   * @schema Build#buildNumber
   */
  readonly buildNumber?: number;

  /**
   * @schema Build#startTime
   */
  readonly startTime?: string;

  /**
   * @schema Build#endTime
   */
  readonly endTime?: string;

  /**
   * @schema Build#currentPhase
   */
  readonly currentPhase?: string;

  /**
   * @schema Build#buildStatus
   */
  readonly buildStatus?: string;

  /**
   * @schema Build#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema Build#resolvedSourceVersion
   */
  readonly resolvedSourceVersion?: string;

  /**
   * @schema Build#projectName
   */
  readonly projectName?: string;

  /**
   * @schema Build#phases
   */
  readonly phases?: BuildPhase[];

  /**
   * @schema Build#source
   */
  readonly source?: ProjectSource;

  /**
   * @schema Build#secondarySources
   */
  readonly secondarySources?: ProjectSource[];

  /**
   * @schema Build#secondarySourceVersions
   */
  readonly secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @schema Build#artifacts
   */
  readonly artifacts?: BuildArtifacts;

  /**
   * @schema Build#secondaryArtifacts
   */
  readonly secondaryArtifacts?: BuildArtifacts[];

  /**
   * @schema Build#cache
   */
  readonly cache?: ProjectCache;

  /**
   * @schema Build#environment
   */
  readonly environment?: ProjectEnvironment;

  /**
   * @schema Build#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema Build#logs
   */
  readonly logs?: LogsLocation;

  /**
   * @schema Build#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema Build#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema Build#buildComplete
   */
  readonly buildComplete?: boolean;

  /**
   * @schema Build#initiator
   */
  readonly initiator?: string;

  /**
   * @schema Build#vpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema Build#networkInterface
   */
  readonly networkInterface?: NetworkInterface;

  /**
   * @schema Build#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema Build#exportedEnvironmentVariables
   */
  readonly exportedEnvironmentVariables?: ExportedEnvironmentVariable[];

  /**
   * @schema Build#reportArns
   */
  readonly reportArns?: string[];

  /**
   * @schema Build#fileSystemLocations
   */
  readonly fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @schema Build#debugSession
   */
  readonly debugSession?: DebugSession;

  /**
   * @schema Build#buildBatchArn
   */
  readonly buildBatchArn?: string;

}

/**
 * @schema Project
 */
export interface Project {
  /**
   * @schema Project#name
   */
  readonly name?: string;

  /**
   * @schema Project#arn
   */
  readonly arn?: string;

  /**
   * @schema Project#description
   */
  readonly description?: string;

  /**
   * @schema Project#source
   */
  readonly source?: ProjectSource;

  /**
   * @schema Project#secondarySources
   */
  readonly secondarySources?: ProjectSource[];

  /**
   * @schema Project#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema Project#secondarySourceVersions
   */
  readonly secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @schema Project#artifacts
   */
  readonly artifacts?: ProjectArtifacts;

  /**
   * @schema Project#secondaryArtifacts
   */
  readonly secondaryArtifacts?: ProjectArtifacts[];

  /**
   * @schema Project#cache
   */
  readonly cache?: ProjectCache;

  /**
   * @schema Project#environment
   */
  readonly environment?: ProjectEnvironment;

  /**
   * @schema Project#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema Project#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema Project#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema Project#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema Project#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Project#created
   */
  readonly created?: string;

  /**
   * @schema Project#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema Project#webhook
   */
  readonly webhook?: Webhook;

  /**
   * @schema Project#vpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema Project#badge
   */
  readonly badge?: ProjectBadge;

  /**
   * @schema Project#logsConfig
   */
  readonly logsConfig?: LogsConfig;

  /**
   * @schema Project#fileSystemLocations
   */
  readonly fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @schema Project#buildBatchConfig
   */
  readonly buildBatchConfig?: ProjectBuildBatchConfig;

}

/**
 * @schema ReportGroup
 */
export interface ReportGroup {
  /**
   * @schema ReportGroup#arn
   */
  readonly arn?: string;

  /**
   * @schema ReportGroup#name
   */
  readonly name?: string;

  /**
   * @schema ReportGroup#type
   */
  readonly type?: string;

  /**
   * @schema ReportGroup#exportConfig
   */
  readonly exportConfig?: ReportExportConfig;

  /**
   * @schema ReportGroup#created
   */
  readonly created?: string;

  /**
   * @schema ReportGroup#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema ReportGroup#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ReportGroup#status
   */
  readonly status?: string;

}

/**
 * @schema Report
 */
export interface Report {
  /**
   * @schema Report#arn
   */
  readonly arn?: string;

  /**
   * @schema Report#type
   */
  readonly type?: string;

  /**
   * @schema Report#name
   */
  readonly name?: string;

  /**
   * @schema Report#reportGroupArn
   */
  readonly reportGroupArn?: string;

  /**
   * @schema Report#executionId
   */
  readonly executionId?: string;

  /**
   * @schema Report#status
   */
  readonly status?: string;

  /**
   * @schema Report#created
   */
  readonly created?: string;

  /**
   * @schema Report#expired
   */
  readonly expired?: string;

  /**
   * @schema Report#exportConfig
   */
  readonly exportConfig?: ReportExportConfig;

  /**
   * @schema Report#truncated
   */
  readonly truncated?: boolean;

  /**
   * @schema Report#testSummary
   */
  readonly testSummary?: TestReportSummary;

  /**
   * @schema Report#codeCoverageSummary
   */
  readonly codeCoverageSummary?: CodeCoverageReportSummary;

}

/**
 * @schema ProjectSource
 */
export interface ProjectSource {
  /**
   * @schema ProjectSource#type
   */
  readonly type: string;

  /**
   * @schema ProjectSource#location
   */
  readonly location?: string;

  /**
   * @schema ProjectSource#gitCloneDepth
   */
  readonly gitCloneDepth?: number;

  /**
   * @schema ProjectSource#gitSubmodulesConfig
   */
  readonly gitSubmodulesConfig?: GitSubmodulesConfig;

  /**
   * @schema ProjectSource#buildspec
   */
  readonly buildspec?: string;

  /**
   * @schema ProjectSource#auth
   */
  readonly auth?: SourceAuth;

  /**
   * @schema ProjectSource#reportBuildStatus
   */
  readonly reportBuildStatus?: boolean;

  /**
   * @schema ProjectSource#buildStatusConfig
   */
  readonly buildStatusConfig?: BuildStatusConfig;

  /**
   * @schema ProjectSource#insecureSsl
   */
  readonly insecureSsl?: boolean;

  /**
   * @schema ProjectSource#sourceIdentifier
   */
  readonly sourceIdentifier?: string;

}

/**
 * @schema ProjectSourceVersion
 */
export interface ProjectSourceVersion {
  /**
   * @schema ProjectSourceVersion#sourceIdentifier
   */
  readonly sourceIdentifier: string;

  /**
   * @schema ProjectSourceVersion#sourceVersion
   */
  readonly sourceVersion: string;

}

/**
 * @schema ProjectArtifacts
 */
export interface ProjectArtifacts {
  /**
   * @schema ProjectArtifacts#type
   */
  readonly type: string;

  /**
   * @schema ProjectArtifacts#location
   */
  readonly location?: string;

  /**
   * @schema ProjectArtifacts#path
   */
  readonly path?: string;

  /**
   * @schema ProjectArtifacts#namespaceType
   */
  readonly namespaceType?: string;

  /**
   * @schema ProjectArtifacts#name
   */
  readonly name?: string;

  /**
   * @schema ProjectArtifacts#packaging
   */
  readonly packaging?: string;

  /**
   * @schema ProjectArtifacts#overrideArtifactName
   */
  readonly overrideArtifactName?: boolean;

  /**
   * @schema ProjectArtifacts#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

  /**
   * @schema ProjectArtifacts#artifactIdentifier
   */
  readonly artifactIdentifier?: string;

}

/**
 * @schema ProjectCache
 */
export interface ProjectCache {
  /**
   * @schema ProjectCache#type
   */
  readonly type: string;

  /**
   * @schema ProjectCache#location
   */
  readonly location?: string;

  /**
   * @schema ProjectCache#modes
   */
  readonly modes?: string[];

}

/**
 * @schema ProjectEnvironment
 */
export interface ProjectEnvironment {
  /**
   * @schema ProjectEnvironment#type
   */
  readonly type: string;

  /**
   * @schema ProjectEnvironment#image
   */
  readonly image: string;

  /**
   * @schema ProjectEnvironment#computeType
   */
  readonly computeType: string;

  /**
   * @schema ProjectEnvironment#environmentVariables
   */
  readonly environmentVariables?: EnvironmentVariable[];

  /**
   * @schema ProjectEnvironment#privilegedMode
   */
  readonly privilegedMode?: boolean;

  /**
   * @schema ProjectEnvironment#certificate
   */
  readonly certificate?: string;

  /**
   * @schema ProjectEnvironment#registryCredential
   */
  readonly registryCredential?: RegistryCredential;

  /**
   * @schema ProjectEnvironment#imagePullCredentialsType
   */
  readonly imagePullCredentialsType?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key?: string;

  /**
   * @schema Tag#value
   */
  readonly value?: string;

}

/**
 * @schema VpcConfig
 */
export interface VpcConfig {
  /**
   * @schema VpcConfig#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema VpcConfig#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema VpcConfig#securityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema LogsConfig
 */
export interface LogsConfig {
  /**
   * @schema LogsConfig#cloudWatchLogs
   */
  readonly cloudWatchLogs?: CloudWatchLogsConfig;

  /**
   * @schema LogsConfig#s3Logs
   */
  readonly s3Logs?: S3LogsConfig;

}

/**
 * @schema ProjectFileSystemLocation
 */
export interface ProjectFileSystemLocation {
  /**
   * @schema ProjectFileSystemLocation#type
   */
  readonly type?: string;

  /**
   * @schema ProjectFileSystemLocation#location
   */
  readonly location?: string;

  /**
   * @schema ProjectFileSystemLocation#mountPoint
   */
  readonly mountPoint?: string;

  /**
   * @schema ProjectFileSystemLocation#identifier
   */
  readonly identifier?: string;

  /**
   * @schema ProjectFileSystemLocation#mountOptions
   */
  readonly mountOptions?: string;

}

/**
 * @schema ProjectBuildBatchConfig
 */
export interface ProjectBuildBatchConfig {
  /**
   * @schema ProjectBuildBatchConfig#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema ProjectBuildBatchConfig#combineArtifacts
   */
  readonly combineArtifacts?: boolean;

  /**
   * @schema ProjectBuildBatchConfig#restrictions
   */
  readonly restrictions?: BatchRestrictions;

  /**
   * @schema ProjectBuildBatchConfig#timeoutInMins
   */
  readonly timeoutInMins?: number;

}

/**
 * @schema ReportExportConfig
 */
export interface ReportExportConfig {
  /**
   * @schema ReportExportConfig#exportConfigType
   */
  readonly exportConfigType?: string;

  /**
   * @schema ReportExportConfig#s3Destination
   */
  readonly s3Destination?: S3ReportExportConfig;

}

/**
 * @schema WebhookFilter
 */
export interface WebhookFilter {
  /**
   * @schema WebhookFilter#type
   */
  readonly type: string;

  /**
   * @schema WebhookFilter#pattern
   */
  readonly pattern: string;

  /**
   * @schema WebhookFilter#excludeMatchedPattern
   */
  readonly excludeMatchedPattern?: boolean;

}

/**
 * @schema Webhook
 */
export interface Webhook {
  /**
   * @schema Webhook#url
   */
  readonly url?: string;

  /**
   * @schema Webhook#payloadUrl
   */
  readonly payloadUrl?: string;

  /**
   * @schema Webhook#secret
   */
  readonly secret?: string;

  /**
   * @schema Webhook#branchFilter
   */
  readonly branchFilter?: string;

  /**
   * @schema Webhook#filterGroups
   */
  readonly filterGroups?: WebhookFilter[][];

  /**
   * @schema Webhook#buildType
   */
  readonly buildType?: string;

  /**
   * @schema Webhook#lastModifiedSecret
   */
  readonly lastModifiedSecret?: string;

}

/**
 * @schema CodeCoverage
 */
export interface CodeCoverage {
  /**
   * @schema CodeCoverage#id
   */
  readonly id?: string;

  /**
   * @schema CodeCoverage#reportARN
   */
  readonly reportARN?: string;

  /**
   * @schema CodeCoverage#filePath
   */
  readonly filePath?: string;

  /**
   * @schema CodeCoverage#lineCoveragePercentage
   */
  readonly lineCoveragePercentage?: number;

  /**
   * @schema CodeCoverage#linesCovered
   */
  readonly linesCovered?: number;

  /**
   * @schema CodeCoverage#linesMissed
   */
  readonly linesMissed?: number;

  /**
   * @schema CodeCoverage#branchCoveragePercentage
   */
  readonly branchCoveragePercentage?: number;

  /**
   * @schema CodeCoverage#branchesCovered
   */
  readonly branchesCovered?: number;

  /**
   * @schema CodeCoverage#branchesMissed
   */
  readonly branchesMissed?: number;

  /**
   * @schema CodeCoverage#expired
   */
  readonly expired?: string;

}

/**
 * @schema TestCaseFilter
 */
export interface TestCaseFilter {
  /**
   * @schema TestCaseFilter#status
   */
  readonly status?: string;

  /**
   * @schema TestCaseFilter#keyword
   */
  readonly keyword?: string;

}

/**
 * @schema TestCase
 */
export interface TestCase {
  /**
   * @schema TestCase#reportArn
   */
  readonly reportArn?: string;

  /**
   * @schema TestCase#testRawDataPath
   */
  readonly testRawDataPath?: string;

  /**
   * @schema TestCase#prefix
   */
  readonly prefix?: string;

  /**
   * @schema TestCase#name
   */
  readonly name?: string;

  /**
   * @schema TestCase#status
   */
  readonly status?: string;

  /**
   * @schema TestCase#durationInNanoSeconds
   */
  readonly durationInNanoSeconds?: number;

  /**
   * @schema TestCase#message
   */
  readonly message?: string;

  /**
   * @schema TestCase#expired
   */
  readonly expired?: string;

}

/**
 * @schema ReportGroupTrendStats
 */
export interface ReportGroupTrendStats {
  /**
   * @schema ReportGroupTrendStats#average
   */
  readonly average?: string;

  /**
   * @schema ReportGroupTrendStats#max
   */
  readonly max?: string;

  /**
   * @schema ReportGroupTrendStats#min
   */
  readonly min?: string;

}

/**
 * @schema ReportWithRawData
 */
export interface ReportWithRawData {
  /**
   * @schema ReportWithRawData#reportArn
   */
  readonly reportArn?: string;

  /**
   * @schema ReportWithRawData#data
   */
  readonly data?: string;

}

/**
 * @schema BuildBatchFilter
 */
export interface BuildBatchFilter {
  /**
   * @schema BuildBatchFilter#status
   */
  readonly status?: string;

}

/**
 * @schema EnvironmentPlatform
 */
export interface EnvironmentPlatform {
  /**
   * @schema EnvironmentPlatform#platform
   */
  readonly platform?: string;

  /**
   * @schema EnvironmentPlatform#languages
   */
  readonly languages?: EnvironmentLanguage[];

}

/**
 * @schema ReportFilter
 */
export interface ReportFilter {
  /**
   * @schema ReportFilter#status
   */
  readonly status?: string;

}

/**
 * @schema SourceCredentialsInfo
 */
export interface SourceCredentialsInfo {
  /**
   * @schema SourceCredentialsInfo#arn
   */
  readonly arn?: string;

  /**
   * @schema SourceCredentialsInfo#serverType
   */
  readonly serverType?: string;

  /**
   * @schema SourceCredentialsInfo#authType
   */
  readonly authType?: string;

}

/**
 * @schema EnvironmentVariable
 */
export interface EnvironmentVariable {
  /**
   * @schema EnvironmentVariable#name
   */
  readonly name: string;

  /**
   * @schema EnvironmentVariable#value
   */
  readonly value: string;

  /**
   * @schema EnvironmentVariable#type
   */
  readonly type?: string;

}

/**
 * @schema SourceAuth
 */
export interface SourceAuth {
  /**
   * @schema SourceAuth#type
   */
  readonly type: string;

  /**
   * @schema SourceAuth#resource
   */
  readonly resource?: string;

}

/**
 * @schema GitSubmodulesConfig
 */
export interface GitSubmodulesConfig {
  /**
   * @schema GitSubmodulesConfig#fetchSubmodules
   */
  readonly fetchSubmodules: boolean;

}

/**
 * @schema BuildStatusConfig
 */
export interface BuildStatusConfig {
  /**
   * @schema BuildStatusConfig#context
   */
  readonly context?: string;

  /**
   * @schema BuildStatusConfig#targetUrl
   */
  readonly targetUrl?: string;

}

/**
 * @schema RegistryCredential
 */
export interface RegistryCredential {
  /**
   * @schema RegistryCredential#credential
   */
  readonly credential: string;

  /**
   * @schema RegistryCredential#credentialProvider
   */
  readonly credentialProvider: string;

}

/**
 * @schema BuildBatchPhase
 */
export interface BuildBatchPhase {
  /**
   * @schema BuildBatchPhase#phaseType
   */
  readonly phaseType?: string;

  /**
   * @schema BuildBatchPhase#phaseStatus
   */
  readonly phaseStatus?: string;

  /**
   * @schema BuildBatchPhase#startTime
   */
  readonly startTime?: string;

  /**
   * @schema BuildBatchPhase#endTime
   */
  readonly endTime?: string;

  /**
   * @schema BuildBatchPhase#durationInSeconds
   */
  readonly durationInSeconds?: number;

  /**
   * @schema BuildBatchPhase#contexts
   */
  readonly contexts?: PhaseContext[];

}

/**
 * @schema BuildArtifacts
 */
export interface BuildArtifacts {
  /**
   * @schema BuildArtifacts#location
   */
  readonly location?: string;

  /**
   * @schema BuildArtifacts#sha256sum
   */
  readonly sha256sum?: string;

  /**
   * @schema BuildArtifacts#md5sum
   */
  readonly md5sum?: string;

  /**
   * @schema BuildArtifacts#overrideArtifactName
   */
  readonly overrideArtifactName?: boolean;

  /**
   * @schema BuildArtifacts#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

  /**
   * @schema BuildArtifacts#artifactIdentifier
   */
  readonly artifactIdentifier?: string;

}

/**
 * @schema BuildGroup
 */
export interface BuildGroup {
  /**
   * @schema BuildGroup#identifier
   */
  readonly identifier?: string;

  /**
   * @schema BuildGroup#dependsOn
   */
  readonly dependsOn?: string[];

  /**
   * @schema BuildGroup#ignoreFailure
   */
  readonly ignoreFailure?: boolean;

  /**
   * @schema BuildGroup#currentBuildSummary
   */
  readonly currentBuildSummary?: BuildSummary;

  /**
   * @schema BuildGroup#priorBuildSummaryList
   */
  readonly priorBuildSummaryList?: BuildSummary[];

}

/**
 * @schema BuildPhase
 */
export interface BuildPhase {
  /**
   * @schema BuildPhase#phaseType
   */
  readonly phaseType?: string;

  /**
   * @schema BuildPhase#phaseStatus
   */
  readonly phaseStatus?: string;

  /**
   * @schema BuildPhase#startTime
   */
  readonly startTime?: string;

  /**
   * @schema BuildPhase#endTime
   */
  readonly endTime?: string;

  /**
   * @schema BuildPhase#durationInSeconds
   */
  readonly durationInSeconds?: number;

  /**
   * @schema BuildPhase#contexts
   */
  readonly contexts?: PhaseContext[];

}

/**
 * @schema LogsLocation
 */
export interface LogsLocation {
  /**
   * @schema LogsLocation#groupName
   */
  readonly groupName?: string;

  /**
   * @schema LogsLocation#streamName
   */
  readonly streamName?: string;

  /**
   * @schema LogsLocation#deepLink
   */
  readonly deepLink?: string;

  /**
   * @schema LogsLocation#s3DeepLink
   */
  readonly s3DeepLink?: string;

  /**
   * @schema LogsLocation#cloudWatchLogsArn
   */
  readonly cloudWatchLogsArn?: string;

  /**
   * @schema LogsLocation#s3LogsArn
   */
  readonly s3LogsArn?: string;

  /**
   * @schema LogsLocation#cloudWatchLogs
   */
  readonly cloudWatchLogs?: CloudWatchLogsConfig;

  /**
   * @schema LogsLocation#s3Logs
   */
  readonly s3Logs?: S3LogsConfig;

}

/**
 * @schema NetworkInterface
 */
export interface NetworkInterface {
  /**
   * @schema NetworkInterface#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema NetworkInterface#networkInterfaceId
   */
  readonly networkInterfaceId?: string;

}

/**
 * @schema ExportedEnvironmentVariable
 */
export interface ExportedEnvironmentVariable {
  /**
   * @schema ExportedEnvironmentVariable#name
   */
  readonly name?: string;

  /**
   * @schema ExportedEnvironmentVariable#value
   */
  readonly value?: string;

}

/**
 * @schema DebugSession
 */
export interface DebugSession {
  /**
   * @schema DebugSession#sessionEnabled
   */
  readonly sessionEnabled?: boolean;

  /**
   * @schema DebugSession#sessionTarget
   */
  readonly sessionTarget?: string;

}

/**
 * @schema ProjectBadge
 */
export interface ProjectBadge {
  /**
   * @schema ProjectBadge#badgeEnabled
   */
  readonly badgeEnabled?: boolean;

  /**
   * @schema ProjectBadge#badgeRequestUrl
   */
  readonly badgeRequestUrl?: string;

}

/**
 * @schema TestReportSummary
 */
export interface TestReportSummary {
  /**
   * @schema TestReportSummary#total
   */
  readonly total: number;

  /**
   * @schema TestReportSummary#statusCounts
   */
  readonly statusCounts: { [key: string]: number };

  /**
   * @schema TestReportSummary#durationInNanoSeconds
   */
  readonly durationInNanoSeconds: number;

}

/**
 * @schema CodeCoverageReportSummary
 */
export interface CodeCoverageReportSummary {
  /**
   * @schema CodeCoverageReportSummary#lineCoveragePercentage
   */
  readonly lineCoveragePercentage?: number;

  /**
   * @schema CodeCoverageReportSummary#linesCovered
   */
  readonly linesCovered?: number;

  /**
   * @schema CodeCoverageReportSummary#linesMissed
   */
  readonly linesMissed?: number;

  /**
   * @schema CodeCoverageReportSummary#branchCoveragePercentage
   */
  readonly branchCoveragePercentage?: number;

  /**
   * @schema CodeCoverageReportSummary#branchesCovered
   */
  readonly branchesCovered?: number;

  /**
   * @schema CodeCoverageReportSummary#branchesMissed
   */
  readonly branchesMissed?: number;

}

/**
 * @schema CloudWatchLogsConfig
 */
export interface CloudWatchLogsConfig {
  /**
   * @schema CloudWatchLogsConfig#status
   */
  readonly status: string;

  /**
   * @schema CloudWatchLogsConfig#groupName
   */
  readonly groupName?: string;

  /**
   * @schema CloudWatchLogsConfig#streamName
   */
  readonly streamName?: string;

}

/**
 * @schema S3LogsConfig
 */
export interface S3LogsConfig {
  /**
   * @schema S3LogsConfig#status
   */
  readonly status: string;

  /**
   * @schema S3LogsConfig#location
   */
  readonly location?: string;

  /**
   * @schema S3LogsConfig#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

}

/**
 * @schema BatchRestrictions
 */
export interface BatchRestrictions {
  /**
   * @schema BatchRestrictions#maximumBuildsAllowed
   */
  readonly maximumBuildsAllowed?: number;

  /**
   * @schema BatchRestrictions#computeTypesAllowed
   */
  readonly computeTypesAllowed?: string[];

}

/**
 * @schema S3ReportExportConfig
 */
export interface S3ReportExportConfig {
  /**
   * @schema S3ReportExportConfig#bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ReportExportConfig#path
   */
  readonly path?: string;

  /**
   * @schema S3ReportExportConfig#packaging
   */
  readonly packaging?: string;

  /**
   * @schema S3ReportExportConfig#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema S3ReportExportConfig#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

}

/**
 * @schema EnvironmentLanguage
 */
export interface EnvironmentLanguage {
  /**
   * @schema EnvironmentLanguage#language
   */
  readonly language?: string;

  /**
   * @schema EnvironmentLanguage#images
   */
  readonly images?: EnvironmentImage[];

}

/**
 * @schema PhaseContext
 */
export interface PhaseContext {
  /**
   * @schema PhaseContext#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema PhaseContext#message
   */
  readonly message?: string;

}

/**
 * @schema BuildSummary
 */
export interface BuildSummary {
  /**
   * @schema BuildSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema BuildSummary#requestedOn
   */
  readonly requestedOn?: string;

  /**
   * @schema BuildSummary#buildStatus
   */
  readonly buildStatus?: string;

  /**
   * @schema BuildSummary#primaryArtifact
   */
  readonly primaryArtifact?: ResolvedArtifact;

  /**
   * @schema BuildSummary#secondaryArtifacts
   */
  readonly secondaryArtifacts?: ResolvedArtifact[];

}

/**
 * @schema EnvironmentImage
 */
export interface EnvironmentImage {
  /**
   * @schema EnvironmentImage#name
   */
  readonly name?: string;

  /**
   * @schema EnvironmentImage#description
   */
  readonly description?: string;

  /**
   * @schema EnvironmentImage#versions
   */
  readonly versions?: string[];

}

/**
 * @schema ResolvedArtifact
 */
export interface ResolvedArtifact {
  /**
   * @schema ResolvedArtifact#type
   */
  readonly type?: string;

  /**
   * @schema ResolvedArtifact#location
   */
  readonly location?: string;

  /**
   * @schema ResolvedArtifact#identifier
   */
  readonly identifier?: string;

}
