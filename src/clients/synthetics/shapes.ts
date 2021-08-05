/**
 * @schema SyntheticsCreateCanaryRequest
 */
export interface SyntheticsCreateCanaryRequest {
  /**
   * @schema SyntheticsCreateCanaryRequest#Name
   */
  readonly name: string;

  /**
   * @schema SyntheticsCreateCanaryRequest#Code
   */
  readonly code: SyntheticsCanaryCodeInput;

  /**
   * @schema SyntheticsCreateCanaryRequest#ArtifactS3Location
   */
  readonly artifactS3Location: string;

  /**
   * @schema SyntheticsCreateCanaryRequest#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema SyntheticsCreateCanaryRequest#Schedule
   */
  readonly schedule: SyntheticsCanaryScheduleInput;

  /**
   * @schema SyntheticsCreateCanaryRequest#RunConfig
   */
  readonly runConfig?: SyntheticsCanaryRunConfigInput;

  /**
   * @schema SyntheticsCreateCanaryRequest#SuccessRetentionPeriodInDays
   */
  readonly successRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsCreateCanaryRequest#FailureRetentionPeriodInDays
   */
  readonly failureRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsCreateCanaryRequest#RuntimeVersion
   */
  readonly runtimeVersion: string;

  /**
   * @schema SyntheticsCreateCanaryRequest#VpcConfig
   */
  readonly vpcConfig?: SyntheticsVpcConfigInput;

  /**
   * @schema SyntheticsCreateCanaryRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SyntheticsCreateCanaryResponse
 */
export interface SyntheticsCreateCanaryResponse {
  /**
   * @schema SyntheticsCreateCanaryResponse#Canary
   */
  readonly canary?: SyntheticsCanary;

}

/**
 * @schema SyntheticsDeleteCanaryRequest
 */
export interface SyntheticsDeleteCanaryRequest {
  /**
   * @schema SyntheticsDeleteCanaryRequest#Name
   */
  readonly name: string;

}

/**
 * @schema SyntheticsDeleteCanaryResponse
 */
export interface SyntheticsDeleteCanaryResponse {
}

/**
 * @schema SyntheticsDescribeCanariesRequest
 */
export interface SyntheticsDescribeCanariesRequest {
  /**
   * @schema SyntheticsDescribeCanariesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SyntheticsDescribeCanariesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SyntheticsDescribeCanariesResponse
 */
export interface SyntheticsDescribeCanariesResponse {
  /**
   * @schema SyntheticsDescribeCanariesResponse#Canaries
   */
  readonly canaries?: SyntheticsCanary[];

  /**
   * @schema SyntheticsDescribeCanariesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SyntheticsDescribeCanariesLastRunRequest
 */
export interface SyntheticsDescribeCanariesLastRunRequest {
  /**
   * @schema SyntheticsDescribeCanariesLastRunRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SyntheticsDescribeCanariesLastRunRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SyntheticsDescribeCanariesLastRunResponse
 */
export interface SyntheticsDescribeCanariesLastRunResponse {
  /**
   * @schema SyntheticsDescribeCanariesLastRunResponse#CanariesLastRun
   */
  readonly canariesLastRun?: SyntheticsCanaryLastRun[];

  /**
   * @schema SyntheticsDescribeCanariesLastRunResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SyntheticsDescribeRuntimeVersionsRequest
 */
export interface SyntheticsDescribeRuntimeVersionsRequest {
  /**
   * @schema SyntheticsDescribeRuntimeVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SyntheticsDescribeRuntimeVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SyntheticsDescribeRuntimeVersionsResponse
 */
export interface SyntheticsDescribeRuntimeVersionsResponse {
  /**
   * @schema SyntheticsDescribeRuntimeVersionsResponse#RuntimeVersions
   */
  readonly runtimeVersions?: SyntheticsRuntimeVersion[];

  /**
   * @schema SyntheticsDescribeRuntimeVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SyntheticsGetCanaryRequest
 */
export interface SyntheticsGetCanaryRequest {
  /**
   * @schema SyntheticsGetCanaryRequest#Name
   */
  readonly name: string;

}

/**
 * @schema SyntheticsGetCanaryResponse
 */
export interface SyntheticsGetCanaryResponse {
  /**
   * @schema SyntheticsGetCanaryResponse#Canary
   */
  readonly canary?: SyntheticsCanary;

}

/**
 * @schema SyntheticsGetCanaryRunsRequest
 */
export interface SyntheticsGetCanaryRunsRequest {
  /**
   * @schema SyntheticsGetCanaryRunsRequest#Name
   */
  readonly name: string;

  /**
   * @schema SyntheticsGetCanaryRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SyntheticsGetCanaryRunsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SyntheticsGetCanaryRunsResponse
 */
export interface SyntheticsGetCanaryRunsResponse {
  /**
   * @schema SyntheticsGetCanaryRunsResponse#CanaryRuns
   */
  readonly canaryRuns?: SyntheticsCanaryRun[];

  /**
   * @schema SyntheticsGetCanaryRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SyntheticsListTagsForResourceRequest
 */
export interface SyntheticsListTagsForResourceRequest {
  /**
   * @schema SyntheticsListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema SyntheticsListTagsForResourceResponse
 */
export interface SyntheticsListTagsForResourceResponse {
  /**
   * @schema SyntheticsListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SyntheticsStartCanaryRequest
 */
export interface SyntheticsStartCanaryRequest {
  /**
   * @schema SyntheticsStartCanaryRequest#Name
   */
  readonly name: string;

}

/**
 * @schema SyntheticsStartCanaryResponse
 */
export interface SyntheticsStartCanaryResponse {
}

/**
 * @schema SyntheticsStopCanaryRequest
 */
export interface SyntheticsStopCanaryRequest {
  /**
   * @schema SyntheticsStopCanaryRequest#Name
   */
  readonly name: string;

}

/**
 * @schema SyntheticsStopCanaryResponse
 */
export interface SyntheticsStopCanaryResponse {
}

/**
 * @schema SyntheticsTagResourceRequest
 */
export interface SyntheticsTagResourceRequest {
  /**
   * @schema SyntheticsTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SyntheticsTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema SyntheticsTagResourceResponse
 */
export interface SyntheticsTagResourceResponse {
}

/**
 * @schema SyntheticsUntagResourceRequest
 */
export interface SyntheticsUntagResourceRequest {
  /**
   * @schema SyntheticsUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SyntheticsUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SyntheticsUntagResourceResponse
 */
export interface SyntheticsUntagResourceResponse {
}

/**
 * @schema SyntheticsUpdateCanaryRequest
 */
export interface SyntheticsUpdateCanaryRequest {
  /**
   * @schema SyntheticsUpdateCanaryRequest#Name
   */
  readonly name: string;

  /**
   * @schema SyntheticsUpdateCanaryRequest#Code
   */
  readonly code?: SyntheticsCanaryCodeInput;

  /**
   * @schema SyntheticsUpdateCanaryRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema SyntheticsUpdateCanaryRequest#RuntimeVersion
   */
  readonly runtimeVersion?: string;

  /**
   * @schema SyntheticsUpdateCanaryRequest#Schedule
   */
  readonly schedule?: SyntheticsCanaryScheduleInput;

  /**
   * @schema SyntheticsUpdateCanaryRequest#RunConfig
   */
  readonly runConfig?: SyntheticsCanaryRunConfigInput;

  /**
   * @schema SyntheticsUpdateCanaryRequest#SuccessRetentionPeriodInDays
   */
  readonly successRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsUpdateCanaryRequest#FailureRetentionPeriodInDays
   */
  readonly failureRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsUpdateCanaryRequest#VpcConfig
   */
  readonly vpcConfig?: SyntheticsVpcConfigInput;

}

/**
 * @schema SyntheticsUpdateCanaryResponse
 */
export interface SyntheticsUpdateCanaryResponse {
}

/**
 * @schema SyntheticsCanaryCodeInput
 */
export interface SyntheticsCanaryCodeInput {
  /**
   * @schema SyntheticsCanaryCodeInput#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema SyntheticsCanaryCodeInput#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema SyntheticsCanaryCodeInput#S3Version
   */
  readonly s3Version?: string;

  /**
   * @schema SyntheticsCanaryCodeInput#ZipFile
   */
  readonly zipFile?: any;

  /**
   * @schema SyntheticsCanaryCodeInput#Handler
   */
  readonly handler: string;

}

/**
 * @schema SyntheticsCanaryScheduleInput
 */
export interface SyntheticsCanaryScheduleInput {
  /**
   * @schema SyntheticsCanaryScheduleInput#Expression
   */
  readonly expression: string;

  /**
   * @schema SyntheticsCanaryScheduleInput#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema SyntheticsCanaryRunConfigInput
 */
export interface SyntheticsCanaryRunConfigInput {
  /**
   * @schema SyntheticsCanaryRunConfigInput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema SyntheticsCanaryRunConfigInput#MemoryInMB
   */
  readonly memoryInMb?: number;

  /**
   * @schema SyntheticsCanaryRunConfigInput#ActiveTracing
   */
  readonly activeTracing?: boolean;

  /**
   * @schema SyntheticsCanaryRunConfigInput#EnvironmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

}

/**
 * @schema SyntheticsVpcConfigInput
 */
export interface SyntheticsVpcConfigInput {
  /**
   * @schema SyntheticsVpcConfigInput#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema SyntheticsVpcConfigInput#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema SyntheticsCanary
 */
export interface SyntheticsCanary {
  /**
   * @schema SyntheticsCanary#Id
   */
  readonly id?: string;

  /**
   * @schema SyntheticsCanary#Name
   */
  readonly name?: string;

  /**
   * @schema SyntheticsCanary#Code
   */
  readonly code?: SyntheticsCanaryCodeOutput;

  /**
   * @schema SyntheticsCanary#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema SyntheticsCanary#Schedule
   */
  readonly schedule?: SyntheticsCanaryScheduleOutput;

  /**
   * @schema SyntheticsCanary#RunConfig
   */
  readonly runConfig?: SyntheticsCanaryRunConfigOutput;

  /**
   * @schema SyntheticsCanary#SuccessRetentionPeriodInDays
   */
  readonly successRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsCanary#FailureRetentionPeriodInDays
   */
  readonly failureRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsCanary#Status
   */
  readonly status?: SyntheticsCanaryStatus;

  /**
   * @schema SyntheticsCanary#Timeline
   */
  readonly timeline?: SyntheticsCanaryTimeline;

  /**
   * @schema SyntheticsCanary#ArtifactS3Location
   */
  readonly artifactS3Location?: string;

  /**
   * @schema SyntheticsCanary#EngineArn
   */
  readonly engineArn?: string;

  /**
   * @schema SyntheticsCanary#RuntimeVersion
   */
  readonly runtimeVersion?: string;

  /**
   * @schema SyntheticsCanary#VpcConfig
   */
  readonly vpcConfig?: SyntheticsVpcConfigOutput;

  /**
   * @schema SyntheticsCanary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SyntheticsCanaryLastRun
 */
export interface SyntheticsCanaryLastRun {
  /**
   * @schema SyntheticsCanaryLastRun#CanaryName
   */
  readonly canaryName?: string;

  /**
   * @schema SyntheticsCanaryLastRun#LastRun
   */
  readonly lastRun?: SyntheticsCanaryRun;

}

/**
 * @schema SyntheticsRuntimeVersion
 */
export interface SyntheticsRuntimeVersion {
  /**
   * @schema SyntheticsRuntimeVersion#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SyntheticsRuntimeVersion#Description
   */
  readonly description?: string;

  /**
   * @schema SyntheticsRuntimeVersion#ReleaseDate
   */
  readonly releaseDate?: string;

  /**
   * @schema SyntheticsRuntimeVersion#DeprecationDate
   */
  readonly deprecationDate?: string;

}

/**
 * @schema SyntheticsCanaryRun
 */
export interface SyntheticsCanaryRun {
  /**
   * @schema SyntheticsCanaryRun#Id
   */
  readonly id?: string;

  /**
   * @schema SyntheticsCanaryRun#Name
   */
  readonly name?: string;

  /**
   * @schema SyntheticsCanaryRun#Status
   */
  readonly status?: SyntheticsCanaryRunStatus;

  /**
   * @schema SyntheticsCanaryRun#Timeline
   */
  readonly timeline?: SyntheticsCanaryRunTimeline;

  /**
   * @schema SyntheticsCanaryRun#ArtifactS3Location
   */
  readonly artifactS3Location?: string;

}

/**
 * @schema SyntheticsCanaryCodeOutput
 */
export interface SyntheticsCanaryCodeOutput {
  /**
   * @schema SyntheticsCanaryCodeOutput#SourceLocationArn
   */
  readonly sourceLocationArn?: string;

  /**
   * @schema SyntheticsCanaryCodeOutput#Handler
   */
  readonly handler?: string;

}

/**
 * @schema SyntheticsCanaryScheduleOutput
 */
export interface SyntheticsCanaryScheduleOutput {
  /**
   * @schema SyntheticsCanaryScheduleOutput#Expression
   */
  readonly expression?: string;

  /**
   * @schema SyntheticsCanaryScheduleOutput#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema SyntheticsCanaryRunConfigOutput
 */
export interface SyntheticsCanaryRunConfigOutput {
  /**
   * @schema SyntheticsCanaryRunConfigOutput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema SyntheticsCanaryRunConfigOutput#MemoryInMB
   */
  readonly memoryInMb?: number;

  /**
   * @schema SyntheticsCanaryRunConfigOutput#ActiveTracing
   */
  readonly activeTracing?: boolean;

}

/**
 * @schema SyntheticsCanaryStatus
 */
export interface SyntheticsCanaryStatus {
  /**
   * @schema SyntheticsCanaryStatus#State
   */
  readonly state?: string;

  /**
   * @schema SyntheticsCanaryStatus#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema SyntheticsCanaryStatus#StateReasonCode
   */
  readonly stateReasonCode?: string;

}

/**
 * @schema SyntheticsCanaryTimeline
 */
export interface SyntheticsCanaryTimeline {
  /**
   * @schema SyntheticsCanaryTimeline#Created
   */
  readonly created?: string;

  /**
   * @schema SyntheticsCanaryTimeline#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SyntheticsCanaryTimeline#LastStarted
   */
  readonly lastStarted?: string;

  /**
   * @schema SyntheticsCanaryTimeline#LastStopped
   */
  readonly lastStopped?: string;

}

/**
 * @schema SyntheticsVpcConfigOutput
 */
export interface SyntheticsVpcConfigOutput {
  /**
   * @schema SyntheticsVpcConfigOutput#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SyntheticsVpcConfigOutput#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema SyntheticsVpcConfigOutput#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema SyntheticsCanaryRunStatus
 */
export interface SyntheticsCanaryRunStatus {
  /**
   * @schema SyntheticsCanaryRunStatus#State
   */
  readonly state?: string;

  /**
   * @schema SyntheticsCanaryRunStatus#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema SyntheticsCanaryRunStatus#StateReasonCode
   */
  readonly stateReasonCode?: string;

}

/**
 * @schema SyntheticsCanaryRunTimeline
 */
export interface SyntheticsCanaryRunTimeline {
  /**
   * @schema SyntheticsCanaryRunTimeline#Started
   */
  readonly started?: string;

  /**
   * @schema SyntheticsCanaryRunTimeline#Completed
   */
  readonly completed?: string;

}
