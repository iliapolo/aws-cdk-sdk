/**
 * @schema CreateCanaryRequest
 */
export interface CreateCanaryRequest {
  /**
   * @schema CreateCanaryRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateCanaryRequest#Code
   */
  readonly code: CanaryCodeInput;

  /**
   * @schema CreateCanaryRequest#ArtifactS3Location
   */
  readonly artifactS3Location: string;

  /**
   * @schema CreateCanaryRequest#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema CreateCanaryRequest#Schedule
   */
  readonly schedule: CanaryScheduleInput;

  /**
   * @schema CreateCanaryRequest#RunConfig
   */
  readonly runConfig?: CanaryRunConfigInput;

  /**
   * @schema CreateCanaryRequest#SuccessRetentionPeriodInDays
   */
  readonly successRetentionPeriodInDays?: number;

  /**
   * @schema CreateCanaryRequest#FailureRetentionPeriodInDays
   */
  readonly failureRetentionPeriodInDays?: number;

  /**
   * @schema CreateCanaryRequest#RuntimeVersion
   */
  readonly runtimeVersion: string;

  /**
   * @schema CreateCanaryRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfigInput;

  /**
   * @schema CreateCanaryRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateCanaryResponse
 */
export interface CreateCanaryResponse {
  /**
   * @schema CreateCanaryResponse#Canary
   */
  readonly canary?: Canary;

}

/**
 * @schema DeleteCanaryRequest
 */
export interface DeleteCanaryRequest {
  /**
   * @schema DeleteCanaryRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteCanaryResponse
 */
export interface DeleteCanaryResponse {
}

/**
 * @schema DescribeCanariesRequest
 */
export interface DescribeCanariesRequest {
  /**
   * @schema DescribeCanariesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCanariesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeCanariesResponse
 */
export interface DescribeCanariesResponse {
  /**
   * @schema DescribeCanariesResponse#Canaries
   */
  readonly canaries?: Canary[];

  /**
   * @schema DescribeCanariesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeCanariesLastRunRequest
 */
export interface DescribeCanariesLastRunRequest {
  /**
   * @schema DescribeCanariesLastRunRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCanariesLastRunRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeCanariesLastRunResponse
 */
export interface DescribeCanariesLastRunResponse {
  /**
   * @schema DescribeCanariesLastRunResponse#CanariesLastRun
   */
  readonly canariesLastRun?: CanaryLastRun[];

  /**
   * @schema DescribeCanariesLastRunResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeRuntimeVersionsRequest
 */
export interface DescribeRuntimeVersionsRequest {
  /**
   * @schema DescribeRuntimeVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeRuntimeVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeRuntimeVersionsResponse
 */
export interface DescribeRuntimeVersionsResponse {
  /**
   * @schema DescribeRuntimeVersionsResponse#RuntimeVersions
   */
  readonly runtimeVersions?: RuntimeVersion[];

  /**
   * @schema DescribeRuntimeVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCanaryRequest
 */
export interface GetCanaryRequest {
  /**
   * @schema GetCanaryRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetCanaryResponse
 */
export interface GetCanaryResponse {
  /**
   * @schema GetCanaryResponse#Canary
   */
  readonly canary?: Canary;

}

/**
 * @schema GetCanaryRunsRequest
 */
export interface GetCanaryRunsRequest {
  /**
   * @schema GetCanaryRunsRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetCanaryRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCanaryRunsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetCanaryRunsResponse
 */
export interface GetCanaryRunsResponse {
  /**
   * @schema GetCanaryRunsResponse#CanaryRuns
   */
  readonly canaryRuns?: CanaryRun[];

  /**
   * @schema GetCanaryRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StartCanaryRequest
 */
export interface StartCanaryRequest {
  /**
   * @schema StartCanaryRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StartCanaryResponse
 */
export interface StartCanaryResponse {
}

/**
 * @schema StopCanaryRequest
 */
export interface StopCanaryRequest {
  /**
   * @schema StopCanaryRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StopCanaryResponse
 */
export interface StopCanaryResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
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
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateCanaryRequest
 */
export interface UpdateCanaryRequest {
  /**
   * @schema UpdateCanaryRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateCanaryRequest#Code
   */
  readonly code?: CanaryCodeInput;

  /**
   * @schema UpdateCanaryRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema UpdateCanaryRequest#RuntimeVersion
   */
  readonly runtimeVersion?: string;

  /**
   * @schema UpdateCanaryRequest#Schedule
   */
  readonly schedule?: CanaryScheduleInput;

  /**
   * @schema UpdateCanaryRequest#RunConfig
   */
  readonly runConfig?: CanaryRunConfigInput;

  /**
   * @schema UpdateCanaryRequest#SuccessRetentionPeriodInDays
   */
  readonly successRetentionPeriodInDays?: number;

  /**
   * @schema UpdateCanaryRequest#FailureRetentionPeriodInDays
   */
  readonly failureRetentionPeriodInDays?: number;

  /**
   * @schema UpdateCanaryRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfigInput;

}

/**
 * @schema UpdateCanaryResponse
 */
export interface UpdateCanaryResponse {
}

/**
 * @schema CanaryCodeInput
 */
export interface CanaryCodeInput {
  /**
   * @schema CanaryCodeInput#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema CanaryCodeInput#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema CanaryCodeInput#S3Version
   */
  readonly s3Version?: string;

  /**
   * @schema CanaryCodeInput#ZipFile
   */
  readonly zipFile?: any;

  /**
   * @schema CanaryCodeInput#Handler
   */
  readonly handler: string;

}

/**
 * @schema CanaryScheduleInput
 */
export interface CanaryScheduleInput {
  /**
   * @schema CanaryScheduleInput#Expression
   */
  readonly expression: string;

  /**
   * @schema CanaryScheduleInput#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema CanaryRunConfigInput
 */
export interface CanaryRunConfigInput {
  /**
   * @schema CanaryRunConfigInput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema CanaryRunConfigInput#MemoryInMB
   */
  readonly memoryInMb?: number;

  /**
   * @schema CanaryRunConfigInput#ActiveTracing
   */
  readonly activeTracing?: boolean;

  /**
   * @schema CanaryRunConfigInput#EnvironmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

}

/**
 * @schema VpcConfigInput
 */
export interface VpcConfigInput {
  /**
   * @schema VpcConfigInput#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcConfigInput#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema Canary
 */
export interface Canary {
  /**
   * @schema Canary#Id
   */
  readonly id?: string;

  /**
   * @schema Canary#Name
   */
  readonly name?: string;

  /**
   * @schema Canary#Code
   */
  readonly code?: CanaryCodeOutput;

  /**
   * @schema Canary#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema Canary#Schedule
   */
  readonly schedule?: CanaryScheduleOutput;

  /**
   * @schema Canary#RunConfig
   */
  readonly runConfig?: CanaryRunConfigOutput;

  /**
   * @schema Canary#SuccessRetentionPeriodInDays
   */
  readonly successRetentionPeriodInDays?: number;

  /**
   * @schema Canary#FailureRetentionPeriodInDays
   */
  readonly failureRetentionPeriodInDays?: number;

  /**
   * @schema Canary#Status
   */
  readonly status?: CanaryStatus;

  /**
   * @schema Canary#Timeline
   */
  readonly timeline?: CanaryTimeline;

  /**
   * @schema Canary#ArtifactS3Location
   */
  readonly artifactS3Location?: string;

  /**
   * @schema Canary#EngineArn
   */
  readonly engineArn?: string;

  /**
   * @schema Canary#RuntimeVersion
   */
  readonly runtimeVersion?: string;

  /**
   * @schema Canary#VpcConfig
   */
  readonly vpcConfig?: VpcConfigOutput;

  /**
   * @schema Canary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CanaryLastRun
 */
export interface CanaryLastRun {
  /**
   * @schema CanaryLastRun#CanaryName
   */
  readonly canaryName?: string;

  /**
   * @schema CanaryLastRun#LastRun
   */
  readonly lastRun?: CanaryRun;

}

/**
 * @schema RuntimeVersion
 */
export interface RuntimeVersion {
  /**
   * @schema RuntimeVersion#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema RuntimeVersion#Description
   */
  readonly description?: string;

  /**
   * @schema RuntimeVersion#ReleaseDate
   */
  readonly releaseDate?: string;

  /**
   * @schema RuntimeVersion#DeprecationDate
   */
  readonly deprecationDate?: string;

}

/**
 * @schema CanaryRun
 */
export interface CanaryRun {
  /**
   * @schema CanaryRun#Id
   */
  readonly id?: string;

  /**
   * @schema CanaryRun#Name
   */
  readonly name?: string;

  /**
   * @schema CanaryRun#Status
   */
  readonly status?: CanaryRunStatus;

  /**
   * @schema CanaryRun#Timeline
   */
  readonly timeline?: CanaryRunTimeline;

  /**
   * @schema CanaryRun#ArtifactS3Location
   */
  readonly artifactS3Location?: string;

}

/**
 * @schema CanaryCodeOutput
 */
export interface CanaryCodeOutput {
  /**
   * @schema CanaryCodeOutput#SourceLocationArn
   */
  readonly sourceLocationArn?: string;

  /**
   * @schema CanaryCodeOutput#Handler
   */
  readonly handler?: string;

}

/**
 * @schema CanaryScheduleOutput
 */
export interface CanaryScheduleOutput {
  /**
   * @schema CanaryScheduleOutput#Expression
   */
  readonly expression?: string;

  /**
   * @schema CanaryScheduleOutput#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema CanaryRunConfigOutput
 */
export interface CanaryRunConfigOutput {
  /**
   * @schema CanaryRunConfigOutput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema CanaryRunConfigOutput#MemoryInMB
   */
  readonly memoryInMb?: number;

  /**
   * @schema CanaryRunConfigOutput#ActiveTracing
   */
  readonly activeTracing?: boolean;

}

/**
 * @schema CanaryStatus
 */
export interface CanaryStatus {
  /**
   * @schema CanaryStatus#State
   */
  readonly state?: string;

  /**
   * @schema CanaryStatus#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema CanaryStatus#StateReasonCode
   */
  readonly stateReasonCode?: string;

}

/**
 * @schema CanaryTimeline
 */
export interface CanaryTimeline {
  /**
   * @schema CanaryTimeline#Created
   */
  readonly created?: string;

  /**
   * @schema CanaryTimeline#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema CanaryTimeline#LastStarted
   */
  readonly lastStarted?: string;

  /**
   * @schema CanaryTimeline#LastStopped
   */
  readonly lastStopped?: string;

}

/**
 * @schema VpcConfigOutput
 */
export interface VpcConfigOutput {
  /**
   * @schema VpcConfigOutput#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema VpcConfigOutput#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcConfigOutput#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema CanaryRunStatus
 */
export interface CanaryRunStatus {
  /**
   * @schema CanaryRunStatus#State
   */
  readonly state?: string;

  /**
   * @schema CanaryRunStatus#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema CanaryRunStatus#StateReasonCode
   */
  readonly stateReasonCode?: string;

}

/**
 * @schema CanaryRunTimeline
 */
export interface CanaryRunTimeline {
  /**
   * @schema CanaryRunTimeline#Started
   */
  readonly started?: string;

  /**
   * @schema CanaryRunTimeline#Completed
   */
  readonly completed?: string;

}
