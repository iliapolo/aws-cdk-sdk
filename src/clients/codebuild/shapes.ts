/**
 * @schema CodeBuildBatchDeleteBuildsInput
 */
export interface CodeBuildBatchDeleteBuildsInput {
  /**
   * @schema CodeBuildBatchDeleteBuildsInput#ids
   */
  readonly ids: string[];

}

/**
 * @schema CodeBuildBatchDeleteBuildsOutput
 */
export interface CodeBuildBatchDeleteBuildsOutput {
  /**
   * @schema CodeBuildBatchDeleteBuildsOutput#buildsDeleted
   */
  readonly buildsDeleted?: string[];

  /**
   * @schema CodeBuildBatchDeleteBuildsOutput#buildsNotDeleted
   */
  readonly buildsNotDeleted?: CodeBuildBuildNotDeleted[];

}

/**
 * @schema CodeBuildBatchGetBuildBatchesInput
 */
export interface CodeBuildBatchGetBuildBatchesInput {
  /**
   * @schema CodeBuildBatchGetBuildBatchesInput#ids
   */
  readonly ids: string[];

}

/**
 * @schema CodeBuildBatchGetBuildBatchesOutput
 */
export interface CodeBuildBatchGetBuildBatchesOutput {
  /**
   * @schema CodeBuildBatchGetBuildBatchesOutput#buildBatches
   */
  readonly buildBatches?: CodeBuildBuildBatch[];

  /**
   * @schema CodeBuildBatchGetBuildBatchesOutput#buildBatchesNotFound
   */
  readonly buildBatchesNotFound?: string[];

}

/**
 * @schema CodeBuildBatchGetBuildsInput
 */
export interface CodeBuildBatchGetBuildsInput {
  /**
   * @schema CodeBuildBatchGetBuildsInput#ids
   */
  readonly ids: string[];

}

/**
 * @schema CodeBuildBatchGetBuildsOutput
 */
export interface CodeBuildBatchGetBuildsOutput {
  /**
   * @schema CodeBuildBatchGetBuildsOutput#builds
   */
  readonly builds?: CodeBuildBuild[];

  /**
   * @schema CodeBuildBatchGetBuildsOutput#buildsNotFound
   */
  readonly buildsNotFound?: string[];

}

/**
 * @schema CodeBuildBatchGetProjectsInput
 */
export interface CodeBuildBatchGetProjectsInput {
  /**
   * @schema CodeBuildBatchGetProjectsInput#names
   */
  readonly names: string[];

}

/**
 * @schema CodeBuildBatchGetProjectsOutput
 */
export interface CodeBuildBatchGetProjectsOutput {
  /**
   * @schema CodeBuildBatchGetProjectsOutput#projects
   */
  readonly projects?: CodeBuildProject[];

  /**
   * @schema CodeBuildBatchGetProjectsOutput#projectsNotFound
   */
  readonly projectsNotFound?: string[];

}

/**
 * @schema CodeBuildBatchGetReportGroupsInput
 */
export interface CodeBuildBatchGetReportGroupsInput {
  /**
   * @schema CodeBuildBatchGetReportGroupsInput#reportGroupArns
   */
  readonly reportGroupArns: string[];

}

/**
 * @schema CodeBuildBatchGetReportGroupsOutput
 */
export interface CodeBuildBatchGetReportGroupsOutput {
  /**
   * @schema CodeBuildBatchGetReportGroupsOutput#reportGroups
   */
  readonly reportGroups?: CodeBuildReportGroup[];

  /**
   * @schema CodeBuildBatchGetReportGroupsOutput#reportGroupsNotFound
   */
  readonly reportGroupsNotFound?: string[];

}

/**
 * @schema CodeBuildBatchGetReportsInput
 */
export interface CodeBuildBatchGetReportsInput {
  /**
   * @schema CodeBuildBatchGetReportsInput#reportArns
   */
  readonly reportArns: string[];

}

/**
 * @schema CodeBuildBatchGetReportsOutput
 */
export interface CodeBuildBatchGetReportsOutput {
  /**
   * @schema CodeBuildBatchGetReportsOutput#reports
   */
  readonly reports?: CodeBuildReport[];

  /**
   * @schema CodeBuildBatchGetReportsOutput#reportsNotFound
   */
  readonly reportsNotFound?: string[];

}

/**
 * @schema CodeBuildCreateProjectInput
 */
export interface CodeBuildCreateProjectInput {
  /**
   * @schema CodeBuildCreateProjectInput#name
   */
  readonly name: string;

  /**
   * @schema CodeBuildCreateProjectInput#description
   */
  readonly description?: string;

  /**
   * @schema CodeBuildCreateProjectInput#source
   */
  readonly source: CodeBuildProjectSource;

  /**
   * @schema CodeBuildCreateProjectInput#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildCreateProjectInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildCreateProjectInput#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildCreateProjectInput#artifacts
   */
  readonly artifacts: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildCreateProjectInput#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildCreateProjectInput#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildCreateProjectInput#environment
   */
  readonly environment: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildCreateProjectInput#serviceRole
   */
  readonly serviceRole: string;

  /**
   * @schema CodeBuildCreateProjectInput#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CodeBuildCreateProjectInput#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildCreateProjectInput#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildCreateProjectInput#tags
   */
  readonly tags?: CodeBuildTag[];

  /**
   * @schema CodeBuildCreateProjectInput#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildCreateProjectInput#badgeEnabled
   */
  readonly badgeEnabled?: boolean;

  /**
   * @schema CodeBuildCreateProjectInput#logsConfig
   */
  readonly logsConfig?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildCreateProjectInput#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildCreateProjectInput#buildBatchConfig
   */
  readonly buildBatchConfig?: CodeBuildProjectBuildBatchConfig;

}

/**
 * @schema CodeBuildCreateProjectOutput
 */
export interface CodeBuildCreateProjectOutput {
  /**
   * @schema CodeBuildCreateProjectOutput#project
   */
  readonly project?: CodeBuildProject;

}

/**
 * @schema CodeBuildCreateReportGroupInput
 */
export interface CodeBuildCreateReportGroupInput {
  /**
   * @schema CodeBuildCreateReportGroupInput#name
   */
  readonly name: string;

  /**
   * @schema CodeBuildCreateReportGroupInput#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildCreateReportGroupInput#exportConfig
   */
  readonly exportConfig: CodeBuildReportExportConfig;

  /**
   * @schema CodeBuildCreateReportGroupInput#tags
   */
  readonly tags?: CodeBuildTag[];

}

/**
 * @schema CodeBuildCreateReportGroupOutput
 */
export interface CodeBuildCreateReportGroupOutput {
  /**
   * @schema CodeBuildCreateReportGroupOutput#reportGroup
   */
  readonly reportGroup?: CodeBuildReportGroup;

}

/**
 * @schema CodeBuildCreateWebhookInput
 */
export interface CodeBuildCreateWebhookInput {
  /**
   * @schema CodeBuildCreateWebhookInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildCreateWebhookInput#branchFilter
   */
  readonly branchFilter?: string;

  /**
   * @schema CodeBuildCreateWebhookInput#filterGroups
   */
  readonly filterGroups?: CodeBuildWebhookFilter[][];

  /**
   * @schema CodeBuildCreateWebhookInput#buildType
   */
  readonly buildType?: string;

}

/**
 * @schema CodeBuildCreateWebhookOutput
 */
export interface CodeBuildCreateWebhookOutput {
  /**
   * @schema CodeBuildCreateWebhookOutput#webhook
   */
  readonly webhook?: CodeBuildWebhook;

}

/**
 * @schema CodeBuildDeleteBuildBatchInput
 */
export interface CodeBuildDeleteBuildBatchInput {
  /**
   * @schema CodeBuildDeleteBuildBatchInput#id
   */
  readonly id: string;

}

/**
 * @schema CodeBuildDeleteBuildBatchOutput
 */
export interface CodeBuildDeleteBuildBatchOutput {
  /**
   * @schema CodeBuildDeleteBuildBatchOutput#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema CodeBuildDeleteBuildBatchOutput#buildsDeleted
   */
  readonly buildsDeleted?: string[];

  /**
   * @schema CodeBuildDeleteBuildBatchOutput#buildsNotDeleted
   */
  readonly buildsNotDeleted?: CodeBuildBuildNotDeleted[];

}

/**
 * @schema CodeBuildDeleteProjectInput
 */
export interface CodeBuildDeleteProjectInput {
  /**
   * @schema CodeBuildDeleteProjectInput#name
   */
  readonly name: string;

}

/**
 * @schema CodeBuildDeleteProjectOutput
 */
export interface CodeBuildDeleteProjectOutput {
}

/**
 * @schema CodeBuildDeleteReportInput
 */
export interface CodeBuildDeleteReportInput {
  /**
   * @schema CodeBuildDeleteReportInput#arn
   */
  readonly arn: string;

}

/**
 * @schema CodeBuildDeleteReportOutput
 */
export interface CodeBuildDeleteReportOutput {
}

/**
 * @schema CodeBuildDeleteReportGroupInput
 */
export interface CodeBuildDeleteReportGroupInput {
  /**
   * @schema CodeBuildDeleteReportGroupInput#arn
   */
  readonly arn: string;

  /**
   * @schema CodeBuildDeleteReportGroupInput#deleteReports
   */
  readonly deleteReports?: boolean;

}

/**
 * @schema CodeBuildDeleteReportGroupOutput
 */
export interface CodeBuildDeleteReportGroupOutput {
}

/**
 * @schema CodeBuildDeleteResourcePolicyInput
 */
export interface CodeBuildDeleteResourcePolicyInput {
  /**
   * @schema CodeBuildDeleteResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema CodeBuildDeleteResourcePolicyOutput
 */
export interface CodeBuildDeleteResourcePolicyOutput {
}

/**
 * @schema CodeBuildDeleteSourceCredentialsInput
 */
export interface CodeBuildDeleteSourceCredentialsInput {
  /**
   * @schema CodeBuildDeleteSourceCredentialsInput#arn
   */
  readonly arn: string;

}

/**
 * @schema CodeBuildDeleteSourceCredentialsOutput
 */
export interface CodeBuildDeleteSourceCredentialsOutput {
  /**
   * @schema CodeBuildDeleteSourceCredentialsOutput#arn
   */
  readonly arn?: string;

}

/**
 * @schema CodeBuildDeleteWebhookInput
 */
export interface CodeBuildDeleteWebhookInput {
  /**
   * @schema CodeBuildDeleteWebhookInput#projectName
   */
  readonly projectName: string;

}

/**
 * @schema CodeBuildDeleteWebhookOutput
 */
export interface CodeBuildDeleteWebhookOutput {
}

/**
 * @schema CodeBuildDescribeCodeCoveragesInput
 */
export interface CodeBuildDescribeCodeCoveragesInput {
  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#reportArn
   */
  readonly reportArn: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#minLineCoveragePercentage
   */
  readonly minLineCoveragePercentage?: number;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#maxLineCoveragePercentage
   */
  readonly maxLineCoveragePercentage?: number;

}

/**
 * @schema CodeBuildDescribeCodeCoveragesOutput
 */
export interface CodeBuildDescribeCodeCoveragesOutput {
  /**
   * @schema CodeBuildDescribeCodeCoveragesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesOutput#codeCoverages
   */
  readonly codeCoverages?: CodeBuildCodeCoverage[];

}

/**
 * @schema CodeBuildDescribeTestCasesInput
 */
export interface CodeBuildDescribeTestCasesInput {
  /**
   * @schema CodeBuildDescribeTestCasesInput#reportArn
   */
  readonly reportArn: string;

  /**
   * @schema CodeBuildDescribeTestCasesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildDescribeTestCasesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildDescribeTestCasesInput#filter
   */
  readonly filter?: CodeBuildTestCaseFilter;

}

/**
 * @schema CodeBuildDescribeTestCasesOutput
 */
export interface CodeBuildDescribeTestCasesOutput {
  /**
   * @schema CodeBuildDescribeTestCasesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildDescribeTestCasesOutput#testCases
   */
  readonly testCases?: CodeBuildTestCase[];

}

/**
 * @schema CodeBuildGetReportGroupTrendInput
 */
export interface CodeBuildGetReportGroupTrendInput {
  /**
   * @schema CodeBuildGetReportGroupTrendInput#reportGroupArn
   */
  readonly reportGroupArn: string;

  /**
   * @schema CodeBuildGetReportGroupTrendInput#numOfReports
   */
  readonly numOfReports?: number;

  /**
   * @schema CodeBuildGetReportGroupTrendInput#trendField
   */
  readonly trendField: string;

}

/**
 * @schema CodeBuildGetReportGroupTrendOutput
 */
export interface CodeBuildGetReportGroupTrendOutput {
  /**
   * @schema CodeBuildGetReportGroupTrendOutput#stats
   */
  readonly stats?: CodeBuildReportGroupTrendStats;

  /**
   * @schema CodeBuildGetReportGroupTrendOutput#rawData
   */
  readonly rawData?: CodeBuildReportWithRawData[];

}

/**
 * @schema CodeBuildGetResourcePolicyInput
 */
export interface CodeBuildGetResourcePolicyInput {
  /**
   * @schema CodeBuildGetResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema CodeBuildGetResourcePolicyOutput
 */
export interface CodeBuildGetResourcePolicyOutput {
  /**
   * @schema CodeBuildGetResourcePolicyOutput#policy
   */
  readonly policy?: string;

}

/**
 * @schema CodeBuildImportSourceCredentialsInput
 */
export interface CodeBuildImportSourceCredentialsInput {
  /**
   * @schema CodeBuildImportSourceCredentialsInput#username
   */
  readonly username?: string;

  /**
   * @schema CodeBuildImportSourceCredentialsInput#token
   */
  readonly token: string;

  /**
   * @schema CodeBuildImportSourceCredentialsInput#serverType
   */
  readonly serverType: string;

  /**
   * @schema CodeBuildImportSourceCredentialsInput#authType
   */
  readonly authType: string;

  /**
   * @schema CodeBuildImportSourceCredentialsInput#shouldOverwrite
   */
  readonly shouldOverwrite?: boolean;

}

/**
 * @schema CodeBuildImportSourceCredentialsOutput
 */
export interface CodeBuildImportSourceCredentialsOutput {
  /**
   * @schema CodeBuildImportSourceCredentialsOutput#arn
   */
  readonly arn?: string;

}

/**
 * @schema CodeBuildInvalidateProjectCacheInput
 */
export interface CodeBuildInvalidateProjectCacheInput {
  /**
   * @schema CodeBuildInvalidateProjectCacheInput#projectName
   */
  readonly projectName: string;

}

/**
 * @schema CodeBuildInvalidateProjectCacheOutput
 */
export interface CodeBuildInvalidateProjectCacheOutput {
}

/**
 * @schema CodeBuildListBuildBatchesInput
 */
export interface CodeBuildListBuildBatchesInput {
  /**
   * @schema CodeBuildListBuildBatchesInput#filter
   */
  readonly filter?: CodeBuildBuildBatchFilter;

  /**
   * @schema CodeBuildListBuildBatchesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListBuildBatchesInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListBuildBatchesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListBuildBatchesOutput
 */
export interface CodeBuildListBuildBatchesOutput {
  /**
   * @schema CodeBuildListBuildBatchesOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema CodeBuildListBuildBatchesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListBuildBatchesForProjectInput
 */
export interface CodeBuildListBuildBatchesForProjectInput {
  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#projectName
   */
  readonly projectName?: string;

  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#filter
   */
  readonly filter?: CodeBuildBuildBatchFilter;

  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListBuildBatchesForProjectOutput
 */
export interface CodeBuildListBuildBatchesForProjectOutput {
  /**
   * @schema CodeBuildListBuildBatchesForProjectOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema CodeBuildListBuildBatchesForProjectOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListBuildsInput
 */
export interface CodeBuildListBuildsInput {
  /**
   * @schema CodeBuildListBuildsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListBuildsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListBuildsOutput
 */
export interface CodeBuildListBuildsOutput {
  /**
   * @schema CodeBuildListBuildsOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema CodeBuildListBuildsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListBuildsForProjectInput
 */
export interface CodeBuildListBuildsForProjectInput {
  /**
   * @schema CodeBuildListBuildsForProjectInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildListBuildsForProjectInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListBuildsForProjectInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListBuildsForProjectOutput
 */
export interface CodeBuildListBuildsForProjectOutput {
  /**
   * @schema CodeBuildListBuildsForProjectOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema CodeBuildListBuildsForProjectOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListCuratedEnvironmentImagesInput
 */
export interface CodeBuildListCuratedEnvironmentImagesInput {
}

/**
 * @schema CodeBuildListCuratedEnvironmentImagesOutput
 */
export interface CodeBuildListCuratedEnvironmentImagesOutput {
  /**
   * @schema CodeBuildListCuratedEnvironmentImagesOutput#platforms
   */
  readonly platforms?: CodeBuildEnvironmentPlatform[];

}

/**
 * @schema CodeBuildListProjectsInput
 */
export interface CodeBuildListProjectsInput {
  /**
   * @schema CodeBuildListProjectsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildListProjectsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListProjectsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListProjectsOutput
 */
export interface CodeBuildListProjectsOutput {
  /**
   * @schema CodeBuildListProjectsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListProjectsOutput#projects
   */
  readonly projects?: string[];

}

/**
 * @schema CodeBuildListReportGroupsInput
 */
export interface CodeBuildListReportGroupsInput {
  /**
   * @schema CodeBuildListReportGroupsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListReportGroupsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildListReportGroupsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportGroupsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CodeBuildListReportGroupsOutput
 */
export interface CodeBuildListReportGroupsOutput {
  /**
   * @schema CodeBuildListReportGroupsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportGroupsOutput#reportGroups
   */
  readonly reportGroups?: string[];

}

/**
 * @schema CodeBuildListReportsInput
 */
export interface CodeBuildListReportsInput {
  /**
   * @schema CodeBuildListReportsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListReportsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListReportsInput#filter
   */
  readonly filter?: CodeBuildReportFilter;

}

/**
 * @schema CodeBuildListReportsOutput
 */
export interface CodeBuildListReportsOutput {
  /**
   * @schema CodeBuildListReportsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportsOutput#reports
   */
  readonly reports?: string[];

}

/**
 * @schema CodeBuildListReportsForReportGroupInput
 */
export interface CodeBuildListReportsForReportGroupInput {
  /**
   * @schema CodeBuildListReportsForReportGroupInput#reportGroupArn
   */
  readonly reportGroupArn: string;

  /**
   * @schema CodeBuildListReportsForReportGroupInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportsForReportGroupInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListReportsForReportGroupInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListReportsForReportGroupInput#filter
   */
  readonly filter?: CodeBuildReportFilter;

}

/**
 * @schema CodeBuildListReportsForReportGroupOutput
 */
export interface CodeBuildListReportsForReportGroupOutput {
  /**
   * @schema CodeBuildListReportsForReportGroupOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportsForReportGroupOutput#reports
   */
  readonly reports?: string[];

}

/**
 * @schema CodeBuildListSharedProjectsInput
 */
export interface CodeBuildListSharedProjectsInput {
  /**
   * @schema CodeBuildListSharedProjectsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildListSharedProjectsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListSharedProjectsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListSharedProjectsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeBuildListSharedProjectsOutput
 */
export interface CodeBuildListSharedProjectsOutput {
  /**
   * @schema CodeBuildListSharedProjectsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListSharedProjectsOutput#projects
   */
  readonly projects?: string[];

}

/**
 * @schema CodeBuildListSharedReportGroupsInput
 */
export interface CodeBuildListSharedReportGroupsInput {
  /**
   * @schema CodeBuildListSharedReportGroupsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListSharedReportGroupsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildListSharedReportGroupsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListSharedReportGroupsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CodeBuildListSharedReportGroupsOutput
 */
export interface CodeBuildListSharedReportGroupsOutput {
  /**
   * @schema CodeBuildListSharedReportGroupsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListSharedReportGroupsOutput#reportGroups
   */
  readonly reportGroups?: string[];

}

/**
 * @schema CodeBuildListSourceCredentialsInput
 */
export interface CodeBuildListSourceCredentialsInput {
}

/**
 * @schema CodeBuildListSourceCredentialsOutput
 */
export interface CodeBuildListSourceCredentialsOutput {
  /**
   * @schema CodeBuildListSourceCredentialsOutput#sourceCredentialsInfos
   */
  readonly sourceCredentialsInfos?: CodeBuildSourceCredentialsInfo[];

}

/**
 * @schema CodeBuildPutResourcePolicyInput
 */
export interface CodeBuildPutResourcePolicyInput {
  /**
   * @schema CodeBuildPutResourcePolicyInput#policy
   */
  readonly policy: string;

  /**
   * @schema CodeBuildPutResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema CodeBuildPutResourcePolicyOutput
 */
export interface CodeBuildPutResourcePolicyOutput {
  /**
   * @schema CodeBuildPutResourcePolicyOutput#resourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema CodeBuildRetryBuildInput
 */
export interface CodeBuildRetryBuildInput {
  /**
   * @schema CodeBuildRetryBuildInput#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildRetryBuildInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * @schema CodeBuildRetryBuildOutput
 */
export interface CodeBuildRetryBuildOutput {
  /**
   * @schema CodeBuildRetryBuildOutput#build
   */
  readonly build?: CodeBuildBuild;

}

/**
 * @schema CodeBuildRetryBuildBatchInput
 */
export interface CodeBuildRetryBuildBatchInput {
  /**
   * @schema CodeBuildRetryBuildBatchInput#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildRetryBuildBatchInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema CodeBuildRetryBuildBatchInput#retryType
   */
  readonly retryType?: string;

}

/**
 * @schema CodeBuildRetryBuildBatchOutput
 */
export interface CodeBuildRetryBuildBatchOutput {
  /**
   * @schema CodeBuildRetryBuildBatchOutput#buildBatch
   */
  readonly buildBatch?: CodeBuildBuildBatch;

}

/**
 * @schema CodeBuildStartBuildInput
 */
export interface CodeBuildStartBuildInput {
  /**
   * @schema CodeBuildStartBuildInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildStartBuildInput#secondarySourcesOverride
   */
  readonly secondarySourcesOverride?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildStartBuildInput#secondarySourcesVersionOverride
   */
  readonly secondarySourcesVersionOverride?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildStartBuildInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildStartBuildInput#artifactsOverride
   */
  readonly artifactsOverride?: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildStartBuildInput#secondaryArtifactsOverride
   */
  readonly secondaryArtifactsOverride?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildStartBuildInput#environmentVariablesOverride
   */
  readonly environmentVariablesOverride?: CodeBuildEnvironmentVariable[];

  /**
   * @schema CodeBuildStartBuildInput#sourceTypeOverride
   */
  readonly sourceTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#sourceLocationOverride
   */
  readonly sourceLocationOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#sourceAuthOverride
   */
  readonly sourceAuthOverride?: CodeBuildSourceAuth;

  /**
   * @schema CodeBuildStartBuildInput#gitCloneDepthOverride
   */
  readonly gitCloneDepthOverride?: number;

  /**
   * @schema CodeBuildStartBuildInput#gitSubmodulesConfigOverride
   */
  readonly gitSubmodulesConfigOverride?: CodeBuildGitSubmodulesConfig;

  /**
   * @schema CodeBuildStartBuildInput#buildspecOverride
   */
  readonly buildspecOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#insecureSslOverride
   */
  readonly insecureSslOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildInput#reportBuildStatusOverride
   */
  readonly reportBuildStatusOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildInput#buildStatusConfigOverride
   */
  readonly buildStatusConfigOverride?: CodeBuildBuildStatusConfig;

  /**
   * @schema CodeBuildStartBuildInput#environmentTypeOverride
   */
  readonly environmentTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#imageOverride
   */
  readonly imageOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#computeTypeOverride
   */
  readonly computeTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#certificateOverride
   */
  readonly certificateOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#cacheOverride
   */
  readonly cacheOverride?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildStartBuildInput#serviceRoleOverride
   */
  readonly serviceRoleOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#privilegedModeOverride
   */
  readonly privilegedModeOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildInput#timeoutInMinutesOverride
   */
  readonly timeoutInMinutesOverride?: number;

  /**
   * @schema CodeBuildStartBuildInput#queuedTimeoutInMinutesOverride
   */
  readonly queuedTimeoutInMinutesOverride?: number;

  /**
   * @schema CodeBuildStartBuildInput#encryptionKeyOverride
   */
  readonly encryptionKeyOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema CodeBuildStartBuildInput#logsConfigOverride
   */
  readonly logsConfigOverride?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildStartBuildInput#registryCredentialOverride
   */
  readonly registryCredentialOverride?: CodeBuildRegistryCredential;

  /**
   * @schema CodeBuildStartBuildInput#imagePullCredentialsTypeOverride
   */
  readonly imagePullCredentialsTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#debugSessionEnabled
   */
  readonly debugSessionEnabled?: boolean;

}

/**
 * @schema CodeBuildStartBuildOutput
 */
export interface CodeBuildStartBuildOutput {
  /**
   * @schema CodeBuildStartBuildOutput#build
   */
  readonly build?: CodeBuildBuild;

}

/**
 * @schema CodeBuildStartBuildBatchInput
 */
export interface CodeBuildStartBuildBatchInput {
  /**
   * @schema CodeBuildStartBuildBatchInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#secondarySourcesOverride
   */
  readonly secondarySourcesOverride?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildStartBuildBatchInput#secondarySourcesVersionOverride
   */
  readonly secondarySourcesVersionOverride?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildStartBuildBatchInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#artifactsOverride
   */
  readonly artifactsOverride?: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildStartBuildBatchInput#secondaryArtifactsOverride
   */
  readonly secondaryArtifactsOverride?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildStartBuildBatchInput#environmentVariablesOverride
   */
  readonly environmentVariablesOverride?: CodeBuildEnvironmentVariable[];

  /**
   * @schema CodeBuildStartBuildBatchInput#sourceTypeOverride
   */
  readonly sourceTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#sourceLocationOverride
   */
  readonly sourceLocationOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#sourceAuthOverride
   */
  readonly sourceAuthOverride?: CodeBuildSourceAuth;

  /**
   * @schema CodeBuildStartBuildBatchInput#gitCloneDepthOverride
   */
  readonly gitCloneDepthOverride?: number;

  /**
   * @schema CodeBuildStartBuildBatchInput#gitSubmodulesConfigOverride
   */
  readonly gitSubmodulesConfigOverride?: CodeBuildGitSubmodulesConfig;

  /**
   * @schema CodeBuildStartBuildBatchInput#buildspecOverride
   */
  readonly buildspecOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#insecureSslOverride
   */
  readonly insecureSslOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildBatchInput#reportBuildBatchStatusOverride
   */
  readonly reportBuildBatchStatusOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildBatchInput#environmentTypeOverride
   */
  readonly environmentTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#imageOverride
   */
  readonly imageOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#computeTypeOverride
   */
  readonly computeTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#certificateOverride
   */
  readonly certificateOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#cacheOverride
   */
  readonly cacheOverride?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildStartBuildBatchInput#serviceRoleOverride
   */
  readonly serviceRoleOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#privilegedModeOverride
   */
  readonly privilegedModeOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildBatchInput#buildTimeoutInMinutesOverride
   */
  readonly buildTimeoutInMinutesOverride?: number;

  /**
   * @schema CodeBuildStartBuildBatchInput#queuedTimeoutInMinutesOverride
   */
  readonly queuedTimeoutInMinutesOverride?: number;

  /**
   * @schema CodeBuildStartBuildBatchInput#encryptionKeyOverride
   */
  readonly encryptionKeyOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#logsConfigOverride
   */
  readonly logsConfigOverride?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildStartBuildBatchInput#registryCredentialOverride
   */
  readonly registryCredentialOverride?: CodeBuildRegistryCredential;

  /**
   * @schema CodeBuildStartBuildBatchInput#imagePullCredentialsTypeOverride
   */
  readonly imagePullCredentialsTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#buildBatchConfigOverride
   */
  readonly buildBatchConfigOverride?: CodeBuildProjectBuildBatchConfig;

}

/**
 * @schema CodeBuildStartBuildBatchOutput
 */
export interface CodeBuildStartBuildBatchOutput {
  /**
   * @schema CodeBuildStartBuildBatchOutput#buildBatch
   */
  readonly buildBatch?: CodeBuildBuildBatch;

}

/**
 * @schema CodeBuildStopBuildInput
 */
export interface CodeBuildStopBuildInput {
  /**
   * @schema CodeBuildStopBuildInput#id
   */
  readonly id: string;

}

/**
 * @schema CodeBuildStopBuildOutput
 */
export interface CodeBuildStopBuildOutput {
  /**
   * @schema CodeBuildStopBuildOutput#build
   */
  readonly build?: CodeBuildBuild;

}

/**
 * @schema CodeBuildStopBuildBatchInput
 */
export interface CodeBuildStopBuildBatchInput {
  /**
   * @schema CodeBuildStopBuildBatchInput#id
   */
  readonly id: string;

}

/**
 * @schema CodeBuildStopBuildBatchOutput
 */
export interface CodeBuildStopBuildBatchOutput {
  /**
   * @schema CodeBuildStopBuildBatchOutput#buildBatch
   */
  readonly buildBatch?: CodeBuildBuildBatch;

}

/**
 * @schema CodeBuildUpdateProjectInput
 */
export interface CodeBuildUpdateProjectInput {
  /**
   * @schema CodeBuildUpdateProjectInput#name
   */
  readonly name: string;

  /**
   * @schema CodeBuildUpdateProjectInput#description
   */
  readonly description?: string;

  /**
   * @schema CodeBuildUpdateProjectInput#source
   */
  readonly source?: CodeBuildProjectSource;

  /**
   * @schema CodeBuildUpdateProjectInput#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildUpdateProjectInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildUpdateProjectInput#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildUpdateProjectInput#artifacts
   */
  readonly artifacts?: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildUpdateProjectInput#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildUpdateProjectInput#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildUpdateProjectInput#environment
   */
  readonly environment?: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildUpdateProjectInput#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildUpdateProjectInput#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CodeBuildUpdateProjectInput#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildUpdateProjectInput#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildUpdateProjectInput#tags
   */
  readonly tags?: CodeBuildTag[];

  /**
   * @schema CodeBuildUpdateProjectInput#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildUpdateProjectInput#badgeEnabled
   */
  readonly badgeEnabled?: boolean;

  /**
   * @schema CodeBuildUpdateProjectInput#logsConfig
   */
  readonly logsConfig?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildUpdateProjectInput#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildUpdateProjectInput#buildBatchConfig
   */
  readonly buildBatchConfig?: CodeBuildProjectBuildBatchConfig;

}

/**
 * @schema CodeBuildUpdateProjectOutput
 */
export interface CodeBuildUpdateProjectOutput {
  /**
   * @schema CodeBuildUpdateProjectOutput#project
   */
  readonly project?: CodeBuildProject;

}

/**
 * @schema CodeBuildUpdateReportGroupInput
 */
export interface CodeBuildUpdateReportGroupInput {
  /**
   * @schema CodeBuildUpdateReportGroupInput#arn
   */
  readonly arn: string;

  /**
   * @schema CodeBuildUpdateReportGroupInput#exportConfig
   */
  readonly exportConfig?: CodeBuildReportExportConfig;

  /**
   * @schema CodeBuildUpdateReportGroupInput#tags
   */
  readonly tags?: CodeBuildTag[];

}

/**
 * @schema CodeBuildUpdateReportGroupOutput
 */
export interface CodeBuildUpdateReportGroupOutput {
  /**
   * @schema CodeBuildUpdateReportGroupOutput#reportGroup
   */
  readonly reportGroup?: CodeBuildReportGroup;

}

/**
 * @schema CodeBuildUpdateWebhookInput
 */
export interface CodeBuildUpdateWebhookInput {
  /**
   * @schema CodeBuildUpdateWebhookInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildUpdateWebhookInput#branchFilter
   */
  readonly branchFilter?: string;

  /**
   * @schema CodeBuildUpdateWebhookInput#rotateSecret
   */
  readonly rotateSecret?: boolean;

  /**
   * @schema CodeBuildUpdateWebhookInput#filterGroups
   */
  readonly filterGroups?: CodeBuildWebhookFilter[][];

  /**
   * @schema CodeBuildUpdateWebhookInput#buildType
   */
  readonly buildType?: string;

}

/**
 * @schema CodeBuildUpdateWebhookOutput
 */
export interface CodeBuildUpdateWebhookOutput {
  /**
   * @schema CodeBuildUpdateWebhookOutput#webhook
   */
  readonly webhook?: CodeBuildWebhook;

}

/**
 * @schema CodeBuildBuildNotDeleted
 */
export interface CodeBuildBuildNotDeleted {
  /**
   * @schema CodeBuildBuildNotDeleted#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildBuildNotDeleted#statusCode
   */
  readonly statusCode?: string;

}

/**
 * @schema CodeBuildBuildBatch
 */
export interface CodeBuildBuildBatch {
  /**
   * @schema CodeBuildBuildBatch#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildBuildBatch#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildBuildBatch#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeBuildBuildBatch#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeBuildBuildBatch#currentPhase
   */
  readonly currentPhase?: string;

  /**
   * @schema CodeBuildBuildBatch#buildBatchStatus
   */
  readonly buildBatchStatus?: string;

  /**
   * @schema CodeBuildBuildBatch#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildBuildBatch#resolvedSourceVersion
   */
  readonly resolvedSourceVersion?: string;

  /**
   * @schema CodeBuildBuildBatch#projectName
   */
  readonly projectName?: string;

  /**
   * @schema CodeBuildBuildBatch#phases
   */
  readonly phases?: CodeBuildBuildBatchPhase[];

  /**
   * @schema CodeBuildBuildBatch#source
   */
  readonly source?: CodeBuildProjectSource;

  /**
   * @schema CodeBuildBuildBatch#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildBuildBatch#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildBuildBatch#artifacts
   */
  readonly artifacts?: CodeBuildBuildArtifacts;

  /**
   * @schema CodeBuildBuildBatch#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildBuildArtifacts[];

  /**
   * @schema CodeBuildBuildBatch#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildBuildBatch#environment
   */
  readonly environment?: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildBuildBatch#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildBuildBatch#logConfig
   */
  readonly logConfig?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildBuildBatch#buildTimeoutInMinutes
   */
  readonly buildTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildBuildBatch#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildBuildBatch#complete
   */
  readonly complete?: boolean;

  /**
   * @schema CodeBuildBuildBatch#initiator
   */
  readonly initiator?: string;

  /**
   * @schema CodeBuildBuildBatch#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildBuildBatch#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildBuildBatch#buildBatchNumber
   */
  readonly buildBatchNumber?: number;

  /**
   * @schema CodeBuildBuildBatch#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildBuildBatch#buildBatchConfig
   */
  readonly buildBatchConfig?: CodeBuildProjectBuildBatchConfig;

  /**
   * @schema CodeBuildBuildBatch#buildGroups
   */
  readonly buildGroups?: CodeBuildBuildGroup[];

}

/**
 * @schema CodeBuildBuild
 */
export interface CodeBuildBuild {
  /**
   * @schema CodeBuildBuild#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildBuild#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildBuild#buildNumber
   */
  readonly buildNumber?: number;

  /**
   * @schema CodeBuildBuild#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeBuildBuild#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeBuildBuild#currentPhase
   */
  readonly currentPhase?: string;

  /**
   * @schema CodeBuildBuild#buildStatus
   */
  readonly buildStatus?: string;

  /**
   * @schema CodeBuildBuild#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildBuild#resolvedSourceVersion
   */
  readonly resolvedSourceVersion?: string;

  /**
   * @schema CodeBuildBuild#projectName
   */
  readonly projectName?: string;

  /**
   * @schema CodeBuildBuild#phases
   */
  readonly phases?: CodeBuildBuildPhase[];

  /**
   * @schema CodeBuildBuild#source
   */
  readonly source?: CodeBuildProjectSource;

  /**
   * @schema CodeBuildBuild#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildBuild#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildBuild#artifacts
   */
  readonly artifacts?: CodeBuildBuildArtifacts;

  /**
   * @schema CodeBuildBuild#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildBuildArtifacts[];

  /**
   * @schema CodeBuildBuild#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildBuild#environment
   */
  readonly environment?: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildBuild#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildBuild#logs
   */
  readonly logs?: CodeBuildLogsLocation;

  /**
   * @schema CodeBuildBuild#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CodeBuildBuild#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildBuild#buildComplete
   */
  readonly buildComplete?: boolean;

  /**
   * @schema CodeBuildBuild#initiator
   */
  readonly initiator?: string;

  /**
   * @schema CodeBuildBuild#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildBuild#networkInterface
   */
  readonly networkInterface?: CodeBuildNetworkInterface;

  /**
   * @schema CodeBuildBuild#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildBuild#exportedEnvironmentVariables
   */
  readonly exportedEnvironmentVariables?: CodeBuildExportedEnvironmentVariable[];

  /**
   * @schema CodeBuildBuild#reportArns
   */
  readonly reportArns?: string[];

  /**
   * @schema CodeBuildBuild#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildBuild#debugSession
   */
  readonly debugSession?: CodeBuildDebugSession;

  /**
   * @schema CodeBuildBuild#buildBatchArn
   */
  readonly buildBatchArn?: string;

}

/**
 * @schema CodeBuildProject
 */
export interface CodeBuildProject {
  /**
   * @schema CodeBuildProject#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildProject#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildProject#description
   */
  readonly description?: string;

  /**
   * @schema CodeBuildProject#source
   */
  readonly source?: CodeBuildProjectSource;

  /**
   * @schema CodeBuildProject#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildProject#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildProject#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildProject#artifacts
   */
  readonly artifacts?: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildProject#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildProject#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildProject#environment
   */
  readonly environment?: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildProject#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildProject#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CodeBuildProject#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildProject#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildProject#tags
   */
  readonly tags?: CodeBuildTag[];

  /**
   * @schema CodeBuildProject#created
   */
  readonly created?: string;

  /**
   * @schema CodeBuildProject#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema CodeBuildProject#webhook
   */
  readonly webhook?: CodeBuildWebhook;

  /**
   * @schema CodeBuildProject#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildProject#badge
   */
  readonly badge?: CodeBuildProjectBadge;

  /**
   * @schema CodeBuildProject#logsConfig
   */
  readonly logsConfig?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildProject#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildProject#buildBatchConfig
   */
  readonly buildBatchConfig?: CodeBuildProjectBuildBatchConfig;

}

/**
 * @schema CodeBuildReportGroup
 */
export interface CodeBuildReportGroup {
  /**
   * @schema CodeBuildReportGroup#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildReportGroup#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildReportGroup#type
   */
  readonly type?: string;

  /**
   * @schema CodeBuildReportGroup#exportConfig
   */
  readonly exportConfig?: CodeBuildReportExportConfig;

  /**
   * @schema CodeBuildReportGroup#created
   */
  readonly created?: string;

  /**
   * @schema CodeBuildReportGroup#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema CodeBuildReportGroup#tags
   */
  readonly tags?: CodeBuildTag[];

  /**
   * @schema CodeBuildReportGroup#status
   */
  readonly status?: string;

}

/**
 * @schema CodeBuildReport
 */
export interface CodeBuildReport {
  /**
   * @schema CodeBuildReport#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildReport#type
   */
  readonly type?: string;

  /**
   * @schema CodeBuildReport#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildReport#reportGroupArn
   */
  readonly reportGroupArn?: string;

  /**
   * @schema CodeBuildReport#executionId
   */
  readonly executionId?: string;

  /**
   * @schema CodeBuildReport#status
   */
  readonly status?: string;

  /**
   * @schema CodeBuildReport#created
   */
  readonly created?: string;

  /**
   * @schema CodeBuildReport#expired
   */
  readonly expired?: string;

  /**
   * @schema CodeBuildReport#exportConfig
   */
  readonly exportConfig?: CodeBuildReportExportConfig;

  /**
   * @schema CodeBuildReport#truncated
   */
  readonly truncated?: boolean;

  /**
   * @schema CodeBuildReport#testSummary
   */
  readonly testSummary?: CodeBuildTestReportSummary;

  /**
   * @schema CodeBuildReport#codeCoverageSummary
   */
  readonly codeCoverageSummary?: CodeBuildCodeCoverageReportSummary;

}

/**
 * @schema CodeBuildProjectSource
 */
export interface CodeBuildProjectSource {
  /**
   * @schema CodeBuildProjectSource#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildProjectSource#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildProjectSource#gitCloneDepth
   */
  readonly gitCloneDepth?: number;

  /**
   * @schema CodeBuildProjectSource#gitSubmodulesConfig
   */
  readonly gitSubmodulesConfig?: CodeBuildGitSubmodulesConfig;

  /**
   * @schema CodeBuildProjectSource#buildspec
   */
  readonly buildspec?: string;

  /**
   * @schema CodeBuildProjectSource#auth
   */
  readonly auth?: CodeBuildSourceAuth;

  /**
   * @schema CodeBuildProjectSource#reportBuildStatus
   */
  readonly reportBuildStatus?: boolean;

  /**
   * @schema CodeBuildProjectSource#buildStatusConfig
   */
  readonly buildStatusConfig?: CodeBuildBuildStatusConfig;

  /**
   * @schema CodeBuildProjectSource#insecureSsl
   */
  readonly insecureSsl?: boolean;

  /**
   * @schema CodeBuildProjectSource#sourceIdentifier
   */
  readonly sourceIdentifier?: string;

}

/**
 * @schema CodeBuildProjectSourceVersion
 */
export interface CodeBuildProjectSourceVersion {
  /**
   * @schema CodeBuildProjectSourceVersion#sourceIdentifier
   */
  readonly sourceIdentifier: string;

  /**
   * @schema CodeBuildProjectSourceVersion#sourceVersion
   */
  readonly sourceVersion: string;

}

/**
 * @schema CodeBuildProjectArtifacts
 */
export interface CodeBuildProjectArtifacts {
  /**
   * @schema CodeBuildProjectArtifacts#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildProjectArtifacts#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildProjectArtifacts#path
   */
  readonly path?: string;

  /**
   * @schema CodeBuildProjectArtifacts#namespaceType
   */
  readonly namespaceType?: string;

  /**
   * @schema CodeBuildProjectArtifacts#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildProjectArtifacts#packaging
   */
  readonly packaging?: string;

  /**
   * @schema CodeBuildProjectArtifacts#overrideArtifactName
   */
  readonly overrideArtifactName?: boolean;

  /**
   * @schema CodeBuildProjectArtifacts#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

  /**
   * @schema CodeBuildProjectArtifacts#artifactIdentifier
   */
  readonly artifactIdentifier?: string;

}

/**
 * @schema CodeBuildProjectCache
 */
export interface CodeBuildProjectCache {
  /**
   * @schema CodeBuildProjectCache#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildProjectCache#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildProjectCache#modes
   */
  readonly modes?: string[];

}

/**
 * @schema CodeBuildProjectEnvironment
 */
export interface CodeBuildProjectEnvironment {
  /**
   * @schema CodeBuildProjectEnvironment#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildProjectEnvironment#image
   */
  readonly image: string;

  /**
   * @schema CodeBuildProjectEnvironment#computeType
   */
  readonly computeType: string;

  /**
   * @schema CodeBuildProjectEnvironment#environmentVariables
   */
  readonly environmentVariables?: CodeBuildEnvironmentVariable[];

  /**
   * @schema CodeBuildProjectEnvironment#privilegedMode
   */
  readonly privilegedMode?: boolean;

  /**
   * @schema CodeBuildProjectEnvironment#certificate
   */
  readonly certificate?: string;

  /**
   * @schema CodeBuildProjectEnvironment#registryCredential
   */
  readonly registryCredential?: CodeBuildRegistryCredential;

  /**
   * @schema CodeBuildProjectEnvironment#imagePullCredentialsType
   */
  readonly imagePullCredentialsType?: string;

}

/**
 * @schema CodeBuildTag
 */
export interface CodeBuildTag {
  /**
   * @schema CodeBuildTag#key
   */
  readonly key?: string;

  /**
   * @schema CodeBuildTag#value
   */
  readonly value?: string;

}

/**
 * @schema CodeBuildVpcConfig
 */
export interface CodeBuildVpcConfig {
  /**
   * @schema CodeBuildVpcConfig#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CodeBuildVpcConfig#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema CodeBuildVpcConfig#securityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema CodeBuildLogsConfig
 */
export interface CodeBuildLogsConfig {
  /**
   * @schema CodeBuildLogsConfig#cloudWatchLogs
   */
  readonly cloudWatchLogs?: CodeBuildCloudWatchLogsConfig;

  /**
   * @schema CodeBuildLogsConfig#s3Logs
   */
  readonly s3Logs?: CodeBuildS3LogsConfig;

}

/**
 * @schema CodeBuildProjectFileSystemLocation
 */
export interface CodeBuildProjectFileSystemLocation {
  /**
   * @schema CodeBuildProjectFileSystemLocation#type
   */
  readonly type?: string;

  /**
   * @schema CodeBuildProjectFileSystemLocation#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildProjectFileSystemLocation#mountPoint
   */
  readonly mountPoint?: string;

  /**
   * @schema CodeBuildProjectFileSystemLocation#identifier
   */
  readonly identifier?: string;

  /**
   * @schema CodeBuildProjectFileSystemLocation#mountOptions
   */
  readonly mountOptions?: string;

}

/**
 * @schema CodeBuildProjectBuildBatchConfig
 */
export interface CodeBuildProjectBuildBatchConfig {
  /**
   * @schema CodeBuildProjectBuildBatchConfig#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildProjectBuildBatchConfig#combineArtifacts
   */
  readonly combineArtifacts?: boolean;

  /**
   * @schema CodeBuildProjectBuildBatchConfig#restrictions
   */
  readonly restrictions?: CodeBuildBatchRestrictions;

  /**
   * @schema CodeBuildProjectBuildBatchConfig#timeoutInMins
   */
  readonly timeoutInMins?: number;

}

/**
 * @schema CodeBuildReportExportConfig
 */
export interface CodeBuildReportExportConfig {
  /**
   * @schema CodeBuildReportExportConfig#exportConfigType
   */
  readonly exportConfigType?: string;

  /**
   * @schema CodeBuildReportExportConfig#s3Destination
   */
  readonly s3Destination?: CodeBuildS3ReportExportConfig;

}

/**
 * @schema CodeBuildWebhookFilter
 */
export interface CodeBuildWebhookFilter {
  /**
   * @schema CodeBuildWebhookFilter#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildWebhookFilter#pattern
   */
  readonly pattern: string;

  /**
   * @schema CodeBuildWebhookFilter#excludeMatchedPattern
   */
  readonly excludeMatchedPattern?: boolean;

}

/**
 * @schema CodeBuildWebhook
 */
export interface CodeBuildWebhook {
  /**
   * @schema CodeBuildWebhook#url
   */
  readonly url?: string;

  /**
   * @schema CodeBuildWebhook#payloadUrl
   */
  readonly payloadUrl?: string;

  /**
   * @schema CodeBuildWebhook#secret
   */
  readonly secret?: string;

  /**
   * @schema CodeBuildWebhook#branchFilter
   */
  readonly branchFilter?: string;

  /**
   * @schema CodeBuildWebhook#filterGroups
   */
  readonly filterGroups?: CodeBuildWebhookFilter[][];

  /**
   * @schema CodeBuildWebhook#buildType
   */
  readonly buildType?: string;

  /**
   * @schema CodeBuildWebhook#lastModifiedSecret
   */
  readonly lastModifiedSecret?: string;

}

/**
 * @schema CodeBuildCodeCoverage
 */
export interface CodeBuildCodeCoverage {
  /**
   * @schema CodeBuildCodeCoverage#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildCodeCoverage#reportARN
   */
  readonly reportARN?: string;

  /**
   * @schema CodeBuildCodeCoverage#filePath
   */
  readonly filePath?: string;

  /**
   * @schema CodeBuildCodeCoverage#lineCoveragePercentage
   */
  readonly lineCoveragePercentage?: number;

  /**
   * @schema CodeBuildCodeCoverage#linesCovered
   */
  readonly linesCovered?: number;

  /**
   * @schema CodeBuildCodeCoverage#linesMissed
   */
  readonly linesMissed?: number;

  /**
   * @schema CodeBuildCodeCoverage#branchCoveragePercentage
   */
  readonly branchCoveragePercentage?: number;

  /**
   * @schema CodeBuildCodeCoverage#branchesCovered
   */
  readonly branchesCovered?: number;

  /**
   * @schema CodeBuildCodeCoverage#branchesMissed
   */
  readonly branchesMissed?: number;

  /**
   * @schema CodeBuildCodeCoverage#expired
   */
  readonly expired?: string;

}

/**
 * @schema CodeBuildTestCaseFilter
 */
export interface CodeBuildTestCaseFilter {
  /**
   * @schema CodeBuildTestCaseFilter#status
   */
  readonly status?: string;

  /**
   * @schema CodeBuildTestCaseFilter#keyword
   */
  readonly keyword?: string;

}

/**
 * @schema CodeBuildTestCase
 */
export interface CodeBuildTestCase {
  /**
   * @schema CodeBuildTestCase#reportArn
   */
  readonly reportArn?: string;

  /**
   * @schema CodeBuildTestCase#testRawDataPath
   */
  readonly testRawDataPath?: string;

  /**
   * @schema CodeBuildTestCase#prefix
   */
  readonly prefix?: string;

  /**
   * @schema CodeBuildTestCase#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildTestCase#status
   */
  readonly status?: string;

  /**
   * @schema CodeBuildTestCase#durationInNanoSeconds
   */
  readonly durationInNanoSeconds?: number;

  /**
   * @schema CodeBuildTestCase#message
   */
  readonly message?: string;

  /**
   * @schema CodeBuildTestCase#expired
   */
  readonly expired?: string;

}

/**
 * @schema CodeBuildReportGroupTrendStats
 */
export interface CodeBuildReportGroupTrendStats {
  /**
   * @schema CodeBuildReportGroupTrendStats#average
   */
  readonly average?: string;

  /**
   * @schema CodeBuildReportGroupTrendStats#max
   */
  readonly max?: string;

  /**
   * @schema CodeBuildReportGroupTrendStats#min
   */
  readonly min?: string;

}

/**
 * @schema CodeBuildReportWithRawData
 */
export interface CodeBuildReportWithRawData {
  /**
   * @schema CodeBuildReportWithRawData#reportArn
   */
  readonly reportArn?: string;

  /**
   * @schema CodeBuildReportWithRawData#data
   */
  readonly data?: string;

}

/**
 * @schema CodeBuildBuildBatchFilter
 */
export interface CodeBuildBuildBatchFilter {
  /**
   * @schema CodeBuildBuildBatchFilter#status
   */
  readonly status?: string;

}

/**
 * @schema CodeBuildEnvironmentPlatform
 */
export interface CodeBuildEnvironmentPlatform {
  /**
   * @schema CodeBuildEnvironmentPlatform#platform
   */
  readonly platform?: string;

  /**
   * @schema CodeBuildEnvironmentPlatform#languages
   */
  readonly languages?: CodeBuildEnvironmentLanguage[];

}

/**
 * @schema CodeBuildReportFilter
 */
export interface CodeBuildReportFilter {
  /**
   * @schema CodeBuildReportFilter#status
   */
  readonly status?: string;

}

/**
 * @schema CodeBuildSourceCredentialsInfo
 */
export interface CodeBuildSourceCredentialsInfo {
  /**
   * @schema CodeBuildSourceCredentialsInfo#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildSourceCredentialsInfo#serverType
   */
  readonly serverType?: string;

  /**
   * @schema CodeBuildSourceCredentialsInfo#authType
   */
  readonly authType?: string;

}

/**
 * @schema CodeBuildEnvironmentVariable
 */
export interface CodeBuildEnvironmentVariable {
  /**
   * @schema CodeBuildEnvironmentVariable#name
   */
  readonly name: string;

  /**
   * @schema CodeBuildEnvironmentVariable#value
   */
  readonly value: string;

  /**
   * @schema CodeBuildEnvironmentVariable#type
   */
  readonly type?: string;

}

/**
 * @schema CodeBuildSourceAuth
 */
export interface CodeBuildSourceAuth {
  /**
   * @schema CodeBuildSourceAuth#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildSourceAuth#resource
   */
  readonly resource?: string;

}

/**
 * @schema CodeBuildGitSubmodulesConfig
 */
export interface CodeBuildGitSubmodulesConfig {
  /**
   * @schema CodeBuildGitSubmodulesConfig#fetchSubmodules
   */
  readonly fetchSubmodules: boolean;

}

/**
 * @schema CodeBuildBuildStatusConfig
 */
export interface CodeBuildBuildStatusConfig {
  /**
   * @schema CodeBuildBuildStatusConfig#context
   */
  readonly context?: string;

  /**
   * @schema CodeBuildBuildStatusConfig#targetUrl
   */
  readonly targetUrl?: string;

}

/**
 * @schema CodeBuildRegistryCredential
 */
export interface CodeBuildRegistryCredential {
  /**
   * @schema CodeBuildRegistryCredential#credential
   */
  readonly credential: string;

  /**
   * @schema CodeBuildRegistryCredential#credentialProvider
   */
  readonly credentialProvider: string;

}

/**
 * @schema CodeBuildBuildBatchPhase
 */
export interface CodeBuildBuildBatchPhase {
  /**
   * @schema CodeBuildBuildBatchPhase#phaseType
   */
  readonly phaseType?: string;

  /**
   * @schema CodeBuildBuildBatchPhase#phaseStatus
   */
  readonly phaseStatus?: string;

  /**
   * @schema CodeBuildBuildBatchPhase#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeBuildBuildBatchPhase#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeBuildBuildBatchPhase#durationInSeconds
   */
  readonly durationInSeconds?: number;

  /**
   * @schema CodeBuildBuildBatchPhase#contexts
   */
  readonly contexts?: CodeBuildPhaseContext[];

}

/**
 * @schema CodeBuildBuildArtifacts
 */
export interface CodeBuildBuildArtifacts {
  /**
   * @schema CodeBuildBuildArtifacts#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildBuildArtifacts#sha256sum
   */
  readonly sha256sum?: string;

  /**
   * @schema CodeBuildBuildArtifacts#md5sum
   */
  readonly md5sum?: string;

  /**
   * @schema CodeBuildBuildArtifacts#overrideArtifactName
   */
  readonly overrideArtifactName?: boolean;

  /**
   * @schema CodeBuildBuildArtifacts#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

  /**
   * @schema CodeBuildBuildArtifacts#artifactIdentifier
   */
  readonly artifactIdentifier?: string;

}

/**
 * @schema CodeBuildBuildGroup
 */
export interface CodeBuildBuildGroup {
  /**
   * @schema CodeBuildBuildGroup#identifier
   */
  readonly identifier?: string;

  /**
   * @schema CodeBuildBuildGroup#dependsOn
   */
  readonly dependsOn?: string[];

  /**
   * @schema CodeBuildBuildGroup#ignoreFailure
   */
  readonly ignoreFailure?: boolean;

  /**
   * @schema CodeBuildBuildGroup#currentBuildSummary
   */
  readonly currentBuildSummary?: CodeBuildBuildSummary;

  /**
   * @schema CodeBuildBuildGroup#priorBuildSummaryList
   */
  readonly priorBuildSummaryList?: CodeBuildBuildSummary[];

}

/**
 * @schema CodeBuildBuildPhase
 */
export interface CodeBuildBuildPhase {
  /**
   * @schema CodeBuildBuildPhase#phaseType
   */
  readonly phaseType?: string;

  /**
   * @schema CodeBuildBuildPhase#phaseStatus
   */
  readonly phaseStatus?: string;

  /**
   * @schema CodeBuildBuildPhase#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeBuildBuildPhase#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeBuildBuildPhase#durationInSeconds
   */
  readonly durationInSeconds?: number;

  /**
   * @schema CodeBuildBuildPhase#contexts
   */
  readonly contexts?: CodeBuildPhaseContext[];

}

/**
 * @schema CodeBuildLogsLocation
 */
export interface CodeBuildLogsLocation {
  /**
   * @schema CodeBuildLogsLocation#groupName
   */
  readonly groupName?: string;

  /**
   * @schema CodeBuildLogsLocation#streamName
   */
  readonly streamName?: string;

  /**
   * @schema CodeBuildLogsLocation#deepLink
   */
  readonly deepLink?: string;

  /**
   * @schema CodeBuildLogsLocation#s3DeepLink
   */
  readonly s3DeepLink?: string;

  /**
   * @schema CodeBuildLogsLocation#cloudWatchLogsArn
   */
  readonly cloudWatchLogsArn?: string;

  /**
   * @schema CodeBuildLogsLocation#s3LogsArn
   */
  readonly s3LogsArn?: string;

  /**
   * @schema CodeBuildLogsLocation#cloudWatchLogs
   */
  readonly cloudWatchLogs?: CodeBuildCloudWatchLogsConfig;

  /**
   * @schema CodeBuildLogsLocation#s3Logs
   */
  readonly s3Logs?: CodeBuildS3LogsConfig;

}

/**
 * @schema CodeBuildNetworkInterface
 */
export interface CodeBuildNetworkInterface {
  /**
   * @schema CodeBuildNetworkInterface#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CodeBuildNetworkInterface#networkInterfaceId
   */
  readonly networkInterfaceId?: string;

}

/**
 * @schema CodeBuildExportedEnvironmentVariable
 */
export interface CodeBuildExportedEnvironmentVariable {
  /**
   * @schema CodeBuildExportedEnvironmentVariable#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildExportedEnvironmentVariable#value
   */
  readonly value?: string;

}

/**
 * @schema CodeBuildDebugSession
 */
export interface CodeBuildDebugSession {
  /**
   * @schema CodeBuildDebugSession#sessionEnabled
   */
  readonly sessionEnabled?: boolean;

  /**
   * @schema CodeBuildDebugSession#sessionTarget
   */
  readonly sessionTarget?: string;

}

/**
 * @schema CodeBuildProjectBadge
 */
export interface CodeBuildProjectBadge {
  /**
   * @schema CodeBuildProjectBadge#badgeEnabled
   */
  readonly badgeEnabled?: boolean;

  /**
   * @schema CodeBuildProjectBadge#badgeRequestUrl
   */
  readonly badgeRequestUrl?: string;

}

/**
 * @schema CodeBuildTestReportSummary
 */
export interface CodeBuildTestReportSummary {
  /**
   * @schema CodeBuildTestReportSummary#total
   */
  readonly total: number;

  /**
   * @schema CodeBuildTestReportSummary#statusCounts
   */
  readonly statusCounts: { [key: string]: number };

  /**
   * @schema CodeBuildTestReportSummary#durationInNanoSeconds
   */
  readonly durationInNanoSeconds: number;

}

/**
 * @schema CodeBuildCodeCoverageReportSummary
 */
export interface CodeBuildCodeCoverageReportSummary {
  /**
   * @schema CodeBuildCodeCoverageReportSummary#lineCoveragePercentage
   */
  readonly lineCoveragePercentage?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#linesCovered
   */
  readonly linesCovered?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#linesMissed
   */
  readonly linesMissed?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#branchCoveragePercentage
   */
  readonly branchCoveragePercentage?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#branchesCovered
   */
  readonly branchesCovered?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#branchesMissed
   */
  readonly branchesMissed?: number;

}

/**
 * @schema CodeBuildCloudWatchLogsConfig
 */
export interface CodeBuildCloudWatchLogsConfig {
  /**
   * @schema CodeBuildCloudWatchLogsConfig#status
   */
  readonly status: string;

  /**
   * @schema CodeBuildCloudWatchLogsConfig#groupName
   */
  readonly groupName?: string;

  /**
   * @schema CodeBuildCloudWatchLogsConfig#streamName
   */
  readonly streamName?: string;

}

/**
 * @schema CodeBuildS3LogsConfig
 */
export interface CodeBuildS3LogsConfig {
  /**
   * @schema CodeBuildS3LogsConfig#status
   */
  readonly status: string;

  /**
   * @schema CodeBuildS3LogsConfig#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildS3LogsConfig#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

}

/**
 * @schema CodeBuildBatchRestrictions
 */
export interface CodeBuildBatchRestrictions {
  /**
   * @schema CodeBuildBatchRestrictions#maximumBuildsAllowed
   */
  readonly maximumBuildsAllowed?: number;

  /**
   * @schema CodeBuildBatchRestrictions#computeTypesAllowed
   */
  readonly computeTypesAllowed?: string[];

}

/**
 * @schema CodeBuildS3ReportExportConfig
 */
export interface CodeBuildS3ReportExportConfig {
  /**
   * @schema CodeBuildS3ReportExportConfig#bucket
   */
  readonly bucket?: string;

  /**
   * @schema CodeBuildS3ReportExportConfig#path
   */
  readonly path?: string;

  /**
   * @schema CodeBuildS3ReportExportConfig#packaging
   */
  readonly packaging?: string;

  /**
   * @schema CodeBuildS3ReportExportConfig#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildS3ReportExportConfig#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

}

/**
 * @schema CodeBuildEnvironmentLanguage
 */
export interface CodeBuildEnvironmentLanguage {
  /**
   * @schema CodeBuildEnvironmentLanguage#language
   */
  readonly language?: string;

  /**
   * @schema CodeBuildEnvironmentLanguage#images
   */
  readonly images?: CodeBuildEnvironmentImage[];

}

/**
 * @schema CodeBuildPhaseContext
 */
export interface CodeBuildPhaseContext {
  /**
   * @schema CodeBuildPhaseContext#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema CodeBuildPhaseContext#message
   */
  readonly message?: string;

}

/**
 * @schema CodeBuildBuildSummary
 */
export interface CodeBuildBuildSummary {
  /**
   * @schema CodeBuildBuildSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildBuildSummary#requestedOn
   */
  readonly requestedOn?: string;

  /**
   * @schema CodeBuildBuildSummary#buildStatus
   */
  readonly buildStatus?: string;

  /**
   * @schema CodeBuildBuildSummary#primaryArtifact
   */
  readonly primaryArtifact?: CodeBuildResolvedArtifact;

  /**
   * @schema CodeBuildBuildSummary#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildResolvedArtifact[];

}

/**
 * @schema CodeBuildEnvironmentImage
 */
export interface CodeBuildEnvironmentImage {
  /**
   * @schema CodeBuildEnvironmentImage#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildEnvironmentImage#description
   */
  readonly description?: string;

  /**
   * @schema CodeBuildEnvironmentImage#versions
   */
  readonly versions?: string[];

}

/**
 * @schema CodeBuildResolvedArtifact
 */
export interface CodeBuildResolvedArtifact {
  /**
   * @schema CodeBuildResolvedArtifact#type
   */
  readonly type?: string;

  /**
   * @schema CodeBuildResolvedArtifact#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildResolvedArtifact#identifier
   */
  readonly identifier?: string;

}
