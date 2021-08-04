/**
 * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest
 */
export interface KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOption
   */
  readonly cloudWatchLoggingOption: KinesisAnalyticsV2CloudWatchLoggingOption;

}

/**
 * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse
 */
export interface KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];

}

/**
 * @schema KinesisAnalyticsV2AddApplicationInputRequest
 */
export interface KinesisAnalyticsV2AddApplicationInputRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationInputRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputRequest#Input
   */
  readonly input: KinesisAnalyticsV2Input;

}

/**
 * @schema KinesisAnalyticsV2AddApplicationInputResponse
 */
export interface KinesisAnalyticsV2AddApplicationInputResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationInputResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputResponse#InputDescriptions
   */
  readonly inputDescriptions?: KinesisAnalyticsV2InputDescription[];

}

/**
 * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest
 */
export interface KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration: KinesisAnalyticsV2InputProcessingConfiguration;

}

/**
 * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse
 */
export interface KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse#InputProcessingConfigurationDescription
   */
  readonly inputProcessingConfigurationDescription?: KinesisAnalyticsV2InputProcessingConfigurationDescription;

}

/**
 * @schema KinesisAnalyticsV2AddApplicationOutputRequest
 */
export interface KinesisAnalyticsV2AddApplicationOutputRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputRequest#Output
   */
  readonly output: KinesisAnalyticsV2Output;

}

/**
 * @schema KinesisAnalyticsV2AddApplicationOutputResponse
 */
export interface KinesisAnalyticsV2AddApplicationOutputResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputResponse#OutputDescriptions
   */
  readonly outputDescriptions?: KinesisAnalyticsV2OutputDescription[];

}

/**
 * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest
 */
export interface KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest#ReferenceDataSource
   */
  readonly referenceDataSource: KinesisAnalyticsV2ReferenceDataSource;

}

/**
 * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse
 */
export interface KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse#ReferenceDataSourceDescriptions
   */
  readonly referenceDataSourceDescriptions?: KinesisAnalyticsV2ReferenceDataSourceDescription[];

}

/**
 * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationRequest
 */
export interface KinesisAnalyticsV2AddApplicationVpcConfigurationRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationRequest#VpcConfiguration
   */
  readonly vpcConfiguration: KinesisAnalyticsV2VpcConfiguration;

}

/**
 * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationResponse
 */
export interface KinesisAnalyticsV2AddApplicationVpcConfigurationResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationResponse#VpcConfigurationDescription
   */
  readonly vpcConfigurationDescription?: KinesisAnalyticsV2VpcConfigurationDescription;

}

/**
 * @schema KinesisAnalyticsV2CreateApplicationRequest
 */
export interface KinesisAnalyticsV2CreateApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#RuntimeEnvironment
   */
  readonly runtimeEnvironment: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#ServiceExecutionRole
   */
  readonly serviceExecutionRole: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#ApplicationConfiguration
   */
  readonly applicationConfiguration?: KinesisAnalyticsV2ApplicationConfiguration;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: KinesisAnalyticsV2CloudWatchLoggingOption[];

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#Tags
   */
  readonly tags?: KinesisAnalyticsV2Tag[];

}

/**
 * @schema KinesisAnalyticsV2CreateApplicationResponse
 */
export interface KinesisAnalyticsV2CreateApplicationResponse {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail: KinesisAnalyticsV2ApplicationDetail;

}

/**
 * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlRequest
 */
export interface KinesisAnalyticsV2CreateApplicationPresignedUrlRequest {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlRequest#UrlType
   */
  readonly urlType: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlRequest#SessionExpirationDurationInSeconds
   */
  readonly sessionExpirationDurationInSeconds?: number;

}

/**
 * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlResponse
 */
export interface KinesisAnalyticsV2CreateApplicationPresignedUrlResponse {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlResponse#AuthorizedUrl
   */
  readonly authorizedUrl?: string;

}

/**
 * @schema KinesisAnalyticsV2CreateApplicationSnapshotRequest
 */
export interface KinesisAnalyticsV2CreateApplicationSnapshotRequest {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationSnapshotRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationSnapshotRequest#SnapshotName
   */
  readonly snapshotName: string;

}

/**
 * @schema KinesisAnalyticsV2CreateApplicationSnapshotResponse
 */
export interface KinesisAnalyticsV2CreateApplicationSnapshotResponse {
}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationRequest#CreateTimestamp
   */
  readonly createTimestamp: string;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationResponse {
}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId: string;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId: string;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationOutputRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationOutputRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputRequest#OutputId
   */
  readonly outputId: string;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationOutputResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationOutputResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest#ReferenceId
   */
  readonly referenceId: string;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationSnapshotRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationSnapshotRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationSnapshotRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationSnapshotRequest#SnapshotName
   */
  readonly snapshotName: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationSnapshotRequest#SnapshotCreationTimestamp
   */
  readonly snapshotCreationTimestamp: string;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationSnapshotResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationSnapshotResponse {
}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest#VpcConfigurationId
   */
  readonly vpcConfigurationId: string;

}

/**
 * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * @schema KinesisAnalyticsV2DescribeApplicationRequest
 */
export interface KinesisAnalyticsV2DescribeApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2DescribeApplicationRequest#IncludeAdditionalDetails
   */
  readonly includeAdditionalDetails?: boolean;

}

/**
 * @schema KinesisAnalyticsV2DescribeApplicationResponse
 */
export interface KinesisAnalyticsV2DescribeApplicationResponse {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail: KinesisAnalyticsV2ApplicationDetail;

}

/**
 * @schema KinesisAnalyticsV2DescribeApplicationSnapshotRequest
 */
export interface KinesisAnalyticsV2DescribeApplicationSnapshotRequest {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationSnapshotRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2DescribeApplicationSnapshotRequest#SnapshotName
   */
  readonly snapshotName: string;

}

/**
 * @schema KinesisAnalyticsV2DescribeApplicationSnapshotResponse
 */
export interface KinesisAnalyticsV2DescribeApplicationSnapshotResponse {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationSnapshotResponse#SnapshotDetails
   */
  readonly snapshotDetails: KinesisAnalyticsV2SnapshotDetails;

}

/**
 * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest
 */
export interface KinesisAnalyticsV2DiscoverInputSchemaRequest {
  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#ServiceExecutionRole
   */
  readonly serviceExecutionRole: string;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsV2InputStartingPositionConfiguration;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#S3Configuration
   */
  readonly s3Configuration?: KinesisAnalyticsV2S3Configuration;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsV2InputProcessingConfiguration;

}

/**
 * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse
 */
export interface KinesisAnalyticsV2DiscoverInputSchemaResponse {
  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsV2SourceSchema;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse#ParsedInputRecords
   */
  readonly parsedInputRecords?: string[][];

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse#ProcessedInputRecords
   */
  readonly processedInputRecords?: string[];

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse#RawInputRecords
   */
  readonly rawInputRecords?: string[];

}

/**
 * @schema KinesisAnalyticsV2ListApplicationSnapshotsRequest
 */
export interface KinesisAnalyticsV2ListApplicationSnapshotsRequest {
  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KinesisAnalyticsV2ListApplicationSnapshotsResponse
 */
export interface KinesisAnalyticsV2ListApplicationSnapshotsResponse {
  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsResponse#SnapshotSummaries
   */
  readonly snapshotSummaries?: KinesisAnalyticsV2SnapshotDetails[];

  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KinesisAnalyticsV2ListApplicationsRequest
 */
export interface KinesisAnalyticsV2ListApplicationsRequest {
  /**
   * @schema KinesisAnalyticsV2ListApplicationsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KinesisAnalyticsV2ListApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KinesisAnalyticsV2ListApplicationsResponse
 */
export interface KinesisAnalyticsV2ListApplicationsResponse {
  /**
   * @schema KinesisAnalyticsV2ListApplicationsResponse#ApplicationSummaries
   */
  readonly applicationSummaries: KinesisAnalyticsV2ApplicationSummary[];

  /**
   * @schema KinesisAnalyticsV2ListApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KinesisAnalyticsV2ListTagsForResourceRequest
 */
export interface KinesisAnalyticsV2ListTagsForResourceRequest {
  /**
   * @schema KinesisAnalyticsV2ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisAnalyticsV2ListTagsForResourceResponse
 */
export interface KinesisAnalyticsV2ListTagsForResourceResponse {
  /**
   * @schema KinesisAnalyticsV2ListTagsForResourceResponse#Tags
   */
  readonly tags?: KinesisAnalyticsV2Tag[];

}

/**
 * @schema KinesisAnalyticsV2StartApplicationRequest
 */
export interface KinesisAnalyticsV2StartApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2StartApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2StartApplicationRequest#RunConfiguration
   */
  readonly runConfiguration: KinesisAnalyticsV2RunConfiguration;

}

/**
 * @schema KinesisAnalyticsV2StartApplicationResponse
 */
export interface KinesisAnalyticsV2StartApplicationResponse {
}

/**
 * @schema KinesisAnalyticsV2StopApplicationRequest
 */
export interface KinesisAnalyticsV2StopApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2StopApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2StopApplicationRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema KinesisAnalyticsV2StopApplicationResponse
 */
export interface KinesisAnalyticsV2StopApplicationResponse {
}

/**
 * @schema KinesisAnalyticsV2TagResourceRequest
 */
export interface KinesisAnalyticsV2TagResourceRequest {
  /**
   * @schema KinesisAnalyticsV2TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsV2TagResourceRequest#Tags
   */
  readonly tags: KinesisAnalyticsV2Tag[];

}

/**
 * @schema KinesisAnalyticsV2TagResourceResponse
 */
export interface KinesisAnalyticsV2TagResourceResponse {
}

/**
 * @schema KinesisAnalyticsV2UntagResourceRequest
 */
export interface KinesisAnalyticsV2UntagResourceRequest {
  /**
   * @schema KinesisAnalyticsV2UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsV2UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema KinesisAnalyticsV2UntagResourceResponse
 */
export interface KinesisAnalyticsV2UntagResourceResponse {
}

/**
 * @schema KinesisAnalyticsV2UpdateApplicationRequest
 */
export interface KinesisAnalyticsV2UpdateApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#ApplicationConfigurationUpdate
   */
  readonly applicationConfigurationUpdate?: KinesisAnalyticsV2ApplicationConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#ServiceExecutionRoleUpdate
   */
  readonly serviceExecutionRoleUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#RunConfigurationUpdate
   */
  readonly runConfigurationUpdate?: KinesisAnalyticsV2RunConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#CloudWatchLoggingOptionUpdates
   */
  readonly cloudWatchLoggingOptionUpdates?: KinesisAnalyticsV2CloudWatchLoggingOptionUpdate[];

}

/**
 * @schema KinesisAnalyticsV2UpdateApplicationResponse
 */
export interface KinesisAnalyticsV2UpdateApplicationResponse {
  /**
   * @schema KinesisAnalyticsV2UpdateApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail: KinesisAnalyticsV2ApplicationDetail;

}

/**
 * @schema KinesisAnalyticsV2CloudWatchLoggingOption
 */
export interface KinesisAnalyticsV2CloudWatchLoggingOption {
  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOption#LogStreamARN
   */
  readonly logStreamArn: string;

}

/**
 * @schema KinesisAnalyticsV2CloudWatchLoggingOptionDescription
 */
export interface KinesisAnalyticsV2CloudWatchLoggingOptionDescription {
  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionDescription#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId?: string;

  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionDescription#LogStreamARN
   */
  readonly logStreamArn: string;

  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsV2Input
 */
export interface KinesisAnalyticsV2Input {
  /**
   * @schema KinesisAnalyticsV2Input#NamePrefix
   */
  readonly namePrefix: string;

  /**
   * @schema KinesisAnalyticsV2Input#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsV2InputProcessingConfiguration;

  /**
   * @schema KinesisAnalyticsV2Input#KinesisStreamsInput
   */
  readonly kinesisStreamsInput?: KinesisAnalyticsV2KinesisStreamsInput;

  /**
   * @schema KinesisAnalyticsV2Input#KinesisFirehoseInput
   */
  readonly kinesisFirehoseInput?: KinesisAnalyticsV2KinesisFirehoseInput;

  /**
   * @schema KinesisAnalyticsV2Input#InputParallelism
   */
  readonly inputParallelism?: KinesisAnalyticsV2InputParallelism;

  /**
   * @schema KinesisAnalyticsV2Input#InputSchema
   */
  readonly inputSchema: KinesisAnalyticsV2SourceSchema;

}

/**
 * @schema KinesisAnalyticsV2InputDescription
 */
export interface KinesisAnalyticsV2InputDescription {
  /**
   * @schema KinesisAnalyticsV2InputDescription#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsV2InputDescription#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema KinesisAnalyticsV2InputDescription#InAppStreamNames
   */
  readonly inAppStreamNames?: string[];

  /**
   * @schema KinesisAnalyticsV2InputDescription#InputProcessingConfigurationDescription
   */
  readonly inputProcessingConfigurationDescription?: KinesisAnalyticsV2InputProcessingConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2InputDescription#KinesisStreamsInputDescription
   */
  readonly kinesisStreamsInputDescription?: KinesisAnalyticsV2KinesisStreamsInputDescription;

  /**
   * @schema KinesisAnalyticsV2InputDescription#KinesisFirehoseInputDescription
   */
  readonly kinesisFirehoseInputDescription?: KinesisAnalyticsV2KinesisFirehoseInputDescription;

  /**
   * @schema KinesisAnalyticsV2InputDescription#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsV2SourceSchema;

  /**
   * @schema KinesisAnalyticsV2InputDescription#InputParallelism
   */
  readonly inputParallelism?: KinesisAnalyticsV2InputParallelism;

  /**
   * @schema KinesisAnalyticsV2InputDescription#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsV2InputStartingPositionConfiguration;

}

/**
 * @schema KinesisAnalyticsV2InputProcessingConfiguration
 */
export interface KinesisAnalyticsV2InputProcessingConfiguration {
  /**
   * @schema KinesisAnalyticsV2InputProcessingConfiguration#InputLambdaProcessor
   */
  readonly inputLambdaProcessor: KinesisAnalyticsV2InputLambdaProcessor;

}

/**
 * @schema KinesisAnalyticsV2InputProcessingConfigurationDescription
 */
export interface KinesisAnalyticsV2InputProcessingConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2InputProcessingConfigurationDescription#InputLambdaProcessorDescription
   */
  readonly inputLambdaProcessorDescription?: KinesisAnalyticsV2InputLambdaProcessorDescription;

}

/**
 * @schema KinesisAnalyticsV2Output
 */
export interface KinesisAnalyticsV2Output {
  /**
   * @schema KinesisAnalyticsV2Output#Name
   */
  readonly name: string;

  /**
   * @schema KinesisAnalyticsV2Output#KinesisStreamsOutput
   */
  readonly kinesisStreamsOutput?: KinesisAnalyticsV2KinesisStreamsOutput;

  /**
   * @schema KinesisAnalyticsV2Output#KinesisFirehoseOutput
   */
  readonly kinesisFirehoseOutput?: KinesisAnalyticsV2KinesisFirehoseOutput;

  /**
   * @schema KinesisAnalyticsV2Output#LambdaOutput
   */
  readonly lambdaOutput?: KinesisAnalyticsV2LambdaOutput;

  /**
   * @schema KinesisAnalyticsV2Output#DestinationSchema
   */
  readonly destinationSchema: KinesisAnalyticsV2DestinationSchema;

}

/**
 * @schema KinesisAnalyticsV2OutputDescription
 */
export interface KinesisAnalyticsV2OutputDescription {
  /**
   * @schema KinesisAnalyticsV2OutputDescription#OutputId
   */
  readonly outputId?: string;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#Name
   */
  readonly name?: string;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#KinesisStreamsOutputDescription
   */
  readonly kinesisStreamsOutputDescription?: KinesisAnalyticsV2KinesisStreamsOutputDescription;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#KinesisFirehoseOutputDescription
   */
  readonly kinesisFirehoseOutputDescription?: KinesisAnalyticsV2KinesisFirehoseOutputDescription;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#LambdaOutputDescription
   */
  readonly lambdaOutputDescription?: KinesisAnalyticsV2LambdaOutputDescription;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#DestinationSchema
   */
  readonly destinationSchema?: KinesisAnalyticsV2DestinationSchema;

}

/**
 * @schema KinesisAnalyticsV2ReferenceDataSource
 */
export interface KinesisAnalyticsV2ReferenceDataSource {
  /**
   * @schema KinesisAnalyticsV2ReferenceDataSource#TableName
   */
  readonly tableName: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSource#S3ReferenceDataSource
   */
  readonly s3ReferenceDataSource?: KinesisAnalyticsV2S3ReferenceDataSource;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSource#ReferenceSchema
   */
  readonly referenceSchema: KinesisAnalyticsV2SourceSchema;

}

/**
 * @schema KinesisAnalyticsV2ReferenceDataSourceDescription
 */
export interface KinesisAnalyticsV2ReferenceDataSourceDescription {
  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceDescription#ReferenceId
   */
  readonly referenceId: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceDescription#TableName
   */
  readonly tableName: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceDescription#S3ReferenceDataSourceDescription
   */
  readonly s3ReferenceDataSourceDescription: KinesisAnalyticsV2S3ReferenceDataSourceDescription;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceDescription#ReferenceSchema
   */
  readonly referenceSchema?: KinesisAnalyticsV2SourceSchema;

}

/**
 * @schema KinesisAnalyticsV2VpcConfiguration
 */
export interface KinesisAnalyticsV2VpcConfiguration {
  /**
   * @schema KinesisAnalyticsV2VpcConfiguration#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema KinesisAnalyticsV2VpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema KinesisAnalyticsV2VpcConfigurationDescription
 */
export interface KinesisAnalyticsV2VpcConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2VpcConfigurationDescription#VpcConfigurationId
   */
  readonly vpcConfigurationId: string;

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationDescription#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationDescription#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationDescription#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema KinesisAnalyticsV2ApplicationConfiguration
 */
export interface KinesisAnalyticsV2ApplicationConfiguration {
  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#SqlApplicationConfiguration
   */
  readonly sqlApplicationConfiguration?: KinesisAnalyticsV2SqlApplicationConfiguration;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#FlinkApplicationConfiguration
   */
  readonly flinkApplicationConfiguration?: KinesisAnalyticsV2FlinkApplicationConfiguration;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#EnvironmentProperties
   */
  readonly environmentProperties?: KinesisAnalyticsV2EnvironmentProperties;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#ApplicationCodeConfiguration
   */
  readonly applicationCodeConfiguration: KinesisAnalyticsV2ApplicationCodeConfiguration;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#ApplicationSnapshotConfiguration
   */
  readonly applicationSnapshotConfiguration?: KinesisAnalyticsV2ApplicationSnapshotConfiguration;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#VpcConfigurations
   */
  readonly vpcConfigurations?: KinesisAnalyticsV2VpcConfiguration[];

}

/**
 * @schema KinesisAnalyticsV2Tag
 */
export interface KinesisAnalyticsV2Tag {
  /**
   * @schema KinesisAnalyticsV2Tag#Key
   */
  readonly key: string;

  /**
   * @schema KinesisAnalyticsV2Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema KinesisAnalyticsV2ApplicationDetail
 */
export interface KinesisAnalyticsV2ApplicationDetail {
  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationARN
   */
  readonly applicationArn: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#RuntimeEnvironment
   */
  readonly runtimeEnvironment: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ServiceExecutionRole
   */
  readonly serviceExecutionRole?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationStatus
   */
  readonly applicationStatus: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationVersionId
   */
  readonly applicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationConfigurationDescription
   */
  readonly applicationConfigurationDescription?: KinesisAnalyticsV2ApplicationConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];

}

/**
 * @schema KinesisAnalyticsV2SnapshotDetails
 */
export interface KinesisAnalyticsV2SnapshotDetails {
  /**
   * @schema KinesisAnalyticsV2SnapshotDetails#SnapshotName
   */
  readonly snapshotName: string;

  /**
   * @schema KinesisAnalyticsV2SnapshotDetails#SnapshotStatus
   */
  readonly snapshotStatus: string;

  /**
   * @schema KinesisAnalyticsV2SnapshotDetails#ApplicationVersionId
   */
  readonly applicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2SnapshotDetails#SnapshotCreationTimestamp
   */
  readonly snapshotCreationTimestamp?: string;

}

/**
 * @schema KinesisAnalyticsV2InputStartingPositionConfiguration
 */
export interface KinesisAnalyticsV2InputStartingPositionConfiguration {
  /**
   * @schema KinesisAnalyticsV2InputStartingPositionConfiguration#InputStartingPosition
   */
  readonly inputStartingPosition?: string;

}

/**
 * @schema KinesisAnalyticsV2S3Configuration
 */
export interface KinesisAnalyticsV2S3Configuration {
  /**
   * @schema KinesisAnalyticsV2S3Configuration#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema KinesisAnalyticsV2S3Configuration#FileKey
   */
  readonly fileKey: string;

}

/**
 * @schema KinesisAnalyticsV2SourceSchema
 */
export interface KinesisAnalyticsV2SourceSchema {
  /**
   * @schema KinesisAnalyticsV2SourceSchema#RecordFormat
   */
  readonly recordFormat: KinesisAnalyticsV2RecordFormat;

  /**
   * @schema KinesisAnalyticsV2SourceSchema#RecordEncoding
   */
  readonly recordEncoding?: string;

  /**
   * @schema KinesisAnalyticsV2SourceSchema#RecordColumns
   */
  readonly recordColumns: KinesisAnalyticsV2RecordColumn[];

}

/**
 * @schema KinesisAnalyticsV2ApplicationSummary
 */
export interface KinesisAnalyticsV2ApplicationSummary {
  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#ApplicationARN
   */
  readonly applicationArn: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#ApplicationStatus
   */
  readonly applicationStatus: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#ApplicationVersionId
   */
  readonly applicationVersionId: number;

  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#RuntimeEnvironment
   */
  readonly runtimeEnvironment: string;

}

/**
 * @schema KinesisAnalyticsV2RunConfiguration
 */
export interface KinesisAnalyticsV2RunConfiguration {
  /**
   * @schema KinesisAnalyticsV2RunConfiguration#FlinkRunConfiguration
   */
  readonly flinkRunConfiguration?: KinesisAnalyticsV2FlinkRunConfiguration;

  /**
   * @schema KinesisAnalyticsV2RunConfiguration#SqlRunConfigurations
   */
  readonly sqlRunConfigurations?: KinesisAnalyticsV2SqlRunConfiguration[];

  /**
   * @schema KinesisAnalyticsV2RunConfiguration#ApplicationRestoreConfiguration
   */
  readonly applicationRestoreConfiguration?: KinesisAnalyticsV2ApplicationRestoreConfiguration;

}

/**
 * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate
 */
export interface KinesisAnalyticsV2ApplicationConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#SqlApplicationConfigurationUpdate
   */
  readonly sqlApplicationConfigurationUpdate?: KinesisAnalyticsV2SqlApplicationConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#ApplicationCodeConfigurationUpdate
   */
  readonly applicationCodeConfigurationUpdate?: KinesisAnalyticsV2ApplicationCodeConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#FlinkApplicationConfigurationUpdate
   */
  readonly flinkApplicationConfigurationUpdate?: KinesisAnalyticsV2FlinkApplicationConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#EnvironmentPropertyUpdates
   */
  readonly environmentPropertyUpdates?: KinesisAnalyticsV2EnvironmentPropertyUpdates;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#ApplicationSnapshotConfigurationUpdate
   */
  readonly applicationSnapshotConfigurationUpdate?: KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#VpcConfigurationUpdates
   */
  readonly vpcConfigurationUpdates?: KinesisAnalyticsV2VpcConfigurationUpdate[];

}

/**
 * @schema KinesisAnalyticsV2RunConfigurationUpdate
 */
export interface KinesisAnalyticsV2RunConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2RunConfigurationUpdate#FlinkRunConfiguration
   */
  readonly flinkRunConfiguration?: KinesisAnalyticsV2FlinkRunConfiguration;

  /**
   * @schema KinesisAnalyticsV2RunConfigurationUpdate#ApplicationRestoreConfiguration
   */
  readonly applicationRestoreConfiguration?: KinesisAnalyticsV2ApplicationRestoreConfiguration;

}

/**
 * @schema KinesisAnalyticsV2CloudWatchLoggingOptionUpdate
 */
export interface KinesisAnalyticsV2CloudWatchLoggingOptionUpdate {
  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionUpdate#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId: string;

  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionUpdate#LogStreamARNUpdate
   */
  readonly logStreamArnUpdate?: string;

}

/**
 * @schema KinesisAnalyticsV2KinesisStreamsInput
 */
export interface KinesisAnalyticsV2KinesisStreamsInput {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsInput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseInput
 */
export interface KinesisAnalyticsV2KinesisFirehoseInput {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseInput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisAnalyticsV2InputParallelism
 */
export interface KinesisAnalyticsV2InputParallelism {
  /**
   * @schema KinesisAnalyticsV2InputParallelism#Count
   */
  readonly count?: number;

}

/**
 * @schema KinesisAnalyticsV2KinesisStreamsInputDescription
 */
export interface KinesisAnalyticsV2KinesisStreamsInputDescription {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsInputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsV2KinesisStreamsInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseInputDescription
 */
export interface KinesisAnalyticsV2KinesisFirehoseInputDescription {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseInputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsV2InputLambdaProcessor
 */
export interface KinesisAnalyticsV2InputLambdaProcessor {
  /**
   * @schema KinesisAnalyticsV2InputLambdaProcessor#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisAnalyticsV2InputLambdaProcessorDescription
 */
export interface KinesisAnalyticsV2InputLambdaProcessorDescription {
  /**
   * @schema KinesisAnalyticsV2InputLambdaProcessorDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsV2InputLambdaProcessorDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsV2KinesisStreamsOutput
 */
export interface KinesisAnalyticsV2KinesisStreamsOutput {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsOutput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseOutput
 */
export interface KinesisAnalyticsV2KinesisFirehoseOutput {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseOutput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisAnalyticsV2LambdaOutput
 */
export interface KinesisAnalyticsV2LambdaOutput {
  /**
   * @schema KinesisAnalyticsV2LambdaOutput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisAnalyticsV2DestinationSchema
 */
export interface KinesisAnalyticsV2DestinationSchema {
  /**
   * @schema KinesisAnalyticsV2DestinationSchema#RecordFormatType
   */
  readonly recordFormatType: string;

}

/**
 * @schema KinesisAnalyticsV2KinesisStreamsOutputDescription
 */
export interface KinesisAnalyticsV2KinesisStreamsOutputDescription {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsOutputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsV2KinesisStreamsOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseOutputDescription
 */
export interface KinesisAnalyticsV2KinesisFirehoseOutputDescription {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseOutputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsV2LambdaOutputDescription
 */
export interface KinesisAnalyticsV2LambdaOutputDescription {
  /**
   * @schema KinesisAnalyticsV2LambdaOutputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsV2LambdaOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsV2S3ReferenceDataSource
 */
export interface KinesisAnalyticsV2S3ReferenceDataSource {
  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSource#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSource#FileKey
   */
  readonly fileKey?: string;

}

/**
 * @schema KinesisAnalyticsV2S3ReferenceDataSourceDescription
 */
export interface KinesisAnalyticsV2S3ReferenceDataSourceDescription {
  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceDescription#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceDescription#FileKey
   */
  readonly fileKey: string;

  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceDescription#ReferenceRoleARN
   */
  readonly referenceRoleArn?: string;

}

/**
 * @schema KinesisAnalyticsV2SqlApplicationConfiguration
 */
export interface KinesisAnalyticsV2SqlApplicationConfiguration {
  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfiguration#Inputs
   */
  readonly inputs?: KinesisAnalyticsV2Input[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfiguration#Outputs
   */
  readonly outputs?: KinesisAnalyticsV2Output[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfiguration#ReferenceDataSources
   */
  readonly referenceDataSources?: KinesisAnalyticsV2ReferenceDataSource[];

}

/**
 * @schema KinesisAnalyticsV2FlinkApplicationConfiguration
 */
export interface KinesisAnalyticsV2FlinkApplicationConfiguration {
  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfiguration#CheckpointConfiguration
   */
  readonly checkpointConfiguration?: KinesisAnalyticsV2CheckpointConfiguration;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfiguration#MonitoringConfiguration
   */
  readonly monitoringConfiguration?: KinesisAnalyticsV2MonitoringConfiguration;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfiguration#ParallelismConfiguration
   */
  readonly parallelismConfiguration?: KinesisAnalyticsV2ParallelismConfiguration;

}

/**
 * @schema KinesisAnalyticsV2EnvironmentProperties
 */
export interface KinesisAnalyticsV2EnvironmentProperties {
  /**
   * @schema KinesisAnalyticsV2EnvironmentProperties#PropertyGroups
   */
  readonly propertyGroups: KinesisAnalyticsV2PropertyGroup[];

}

/**
 * @schema KinesisAnalyticsV2ApplicationCodeConfiguration
 */
export interface KinesisAnalyticsV2ApplicationCodeConfiguration {
  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfiguration#CodeContent
   */
  readonly codeContent?: KinesisAnalyticsV2CodeContent;

  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfiguration#CodeContentType
   */
  readonly codeContentType: string;

}

/**
 * @schema KinesisAnalyticsV2ApplicationSnapshotConfiguration
 */
export interface KinesisAnalyticsV2ApplicationSnapshotConfiguration {
  /**
   * @schema KinesisAnalyticsV2ApplicationSnapshotConfiguration#SnapshotsEnabled
   */
  readonly snapshotsEnabled: boolean;

}

/**
 * @schema KinesisAnalyticsV2ApplicationConfigurationDescription
 */
export interface KinesisAnalyticsV2ApplicationConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#SqlApplicationConfigurationDescription
   */
  readonly sqlApplicationConfigurationDescription?: KinesisAnalyticsV2SqlApplicationConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#ApplicationCodeConfigurationDescription
   */
  readonly applicationCodeConfigurationDescription?: KinesisAnalyticsV2ApplicationCodeConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#RunConfigurationDescription
   */
  readonly runConfigurationDescription?: KinesisAnalyticsV2RunConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#FlinkApplicationConfigurationDescription
   */
  readonly flinkApplicationConfigurationDescription?: KinesisAnalyticsV2FlinkApplicationConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#EnvironmentPropertyDescriptions
   */
  readonly environmentPropertyDescriptions?: KinesisAnalyticsV2EnvironmentPropertyDescriptions;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#ApplicationSnapshotConfigurationDescription
   */
  readonly applicationSnapshotConfigurationDescription?: KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#VpcConfigurationDescriptions
   */
  readonly vpcConfigurationDescriptions?: KinesisAnalyticsV2VpcConfigurationDescription[];

}

/**
 * @schema KinesisAnalyticsV2RecordFormat
 */
export interface KinesisAnalyticsV2RecordFormat {
  /**
   * @schema KinesisAnalyticsV2RecordFormat#RecordFormatType
   */
  readonly recordFormatType: string;

  /**
   * @schema KinesisAnalyticsV2RecordFormat#MappingParameters
   */
  readonly mappingParameters?: KinesisAnalyticsV2MappingParameters;

}

/**
 * @schema KinesisAnalyticsV2RecordColumn
 */
export interface KinesisAnalyticsV2RecordColumn {
  /**
   * @schema KinesisAnalyticsV2RecordColumn#Name
   */
  readonly name: string;

  /**
   * @schema KinesisAnalyticsV2RecordColumn#Mapping
   */
  readonly mapping?: string;

  /**
   * @schema KinesisAnalyticsV2RecordColumn#SqlType
   */
  readonly sqlType: string;

}

/**
 * @schema KinesisAnalyticsV2FlinkRunConfiguration
 */
export interface KinesisAnalyticsV2FlinkRunConfiguration {
  /**
   * @schema KinesisAnalyticsV2FlinkRunConfiguration#AllowNonRestoredState
   */
  readonly allowNonRestoredState?: boolean;

}

/**
 * @schema KinesisAnalyticsV2SqlRunConfiguration
 */
export interface KinesisAnalyticsV2SqlRunConfiguration {
  /**
   * @schema KinesisAnalyticsV2SqlRunConfiguration#InputId
   */
  readonly inputId: string;

  /**
   * @schema KinesisAnalyticsV2SqlRunConfiguration#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration: KinesisAnalyticsV2InputStartingPositionConfiguration;

}

/**
 * @schema KinesisAnalyticsV2ApplicationRestoreConfiguration
 */
export interface KinesisAnalyticsV2ApplicationRestoreConfiguration {
  /**
   * @schema KinesisAnalyticsV2ApplicationRestoreConfiguration#ApplicationRestoreType
   */
  readonly applicationRestoreType: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationRestoreConfiguration#SnapshotName
   */
  readonly snapshotName?: string;

}

/**
 * @schema KinesisAnalyticsV2SqlApplicationConfigurationUpdate
 */
export interface KinesisAnalyticsV2SqlApplicationConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationUpdate#InputUpdates
   */
  readonly inputUpdates?: KinesisAnalyticsV2InputUpdate[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationUpdate#OutputUpdates
   */
  readonly outputUpdates?: KinesisAnalyticsV2OutputUpdate[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationUpdate#ReferenceDataSourceUpdates
   */
  readonly referenceDataSourceUpdates?: KinesisAnalyticsV2ReferenceDataSourceUpdate[];

}

/**
 * @schema KinesisAnalyticsV2ApplicationCodeConfigurationUpdate
 */
export interface KinesisAnalyticsV2ApplicationCodeConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfigurationUpdate#CodeContentTypeUpdate
   */
  readonly codeContentTypeUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfigurationUpdate#CodeContentUpdate
   */
  readonly codeContentUpdate?: KinesisAnalyticsV2CodeContentUpdate;

}

/**
 * @schema KinesisAnalyticsV2FlinkApplicationConfigurationUpdate
 */
export interface KinesisAnalyticsV2FlinkApplicationConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationUpdate#CheckpointConfigurationUpdate
   */
  readonly checkpointConfigurationUpdate?: KinesisAnalyticsV2CheckpointConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationUpdate#MonitoringConfigurationUpdate
   */
  readonly monitoringConfigurationUpdate?: KinesisAnalyticsV2MonitoringConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationUpdate#ParallelismConfigurationUpdate
   */
  readonly parallelismConfigurationUpdate?: KinesisAnalyticsV2ParallelismConfigurationUpdate;

}

/**
 * @schema KinesisAnalyticsV2EnvironmentPropertyUpdates
 */
export interface KinesisAnalyticsV2EnvironmentPropertyUpdates {
  /**
   * @schema KinesisAnalyticsV2EnvironmentPropertyUpdates#PropertyGroups
   */
  readonly propertyGroups: KinesisAnalyticsV2PropertyGroup[];

}

/**
 * @schema KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate
 */
export interface KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate#SnapshotsEnabledUpdate
   */
  readonly snapshotsEnabledUpdate: boolean;

}

/**
 * @schema KinesisAnalyticsV2VpcConfigurationUpdate
 */
export interface KinesisAnalyticsV2VpcConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2VpcConfigurationUpdate#VpcConfigurationId
   */
  readonly vpcConfigurationId: string;

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationUpdate#SubnetIdUpdates
   */
  readonly subnetIdUpdates?: string[];

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationUpdate#SecurityGroupIdUpdates
   */
  readonly securityGroupIdUpdates?: string[];

}

/**
 * @schema KinesisAnalyticsV2CheckpointConfiguration
 */
export interface KinesisAnalyticsV2CheckpointConfiguration {
  /**
   * @schema KinesisAnalyticsV2CheckpointConfiguration#ConfigurationType
   */
  readonly configurationType: string;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfiguration#CheckpointingEnabled
   */
  readonly checkpointingEnabled?: boolean;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfiguration#CheckpointInterval
   */
  readonly checkpointInterval?: number;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfiguration#MinPauseBetweenCheckpoints
   */
  readonly minPauseBetweenCheckpoints?: number;

}

/**
 * @schema KinesisAnalyticsV2MonitoringConfiguration
 */
export interface KinesisAnalyticsV2MonitoringConfiguration {
  /**
   * @schema KinesisAnalyticsV2MonitoringConfiguration#ConfigurationType
   */
  readonly configurationType: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfiguration#MetricsLevel
   */
  readonly metricsLevel?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfiguration#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema KinesisAnalyticsV2ParallelismConfiguration
 */
export interface KinesisAnalyticsV2ParallelismConfiguration {
  /**
   * @schema KinesisAnalyticsV2ParallelismConfiguration#ConfigurationType
   */
  readonly configurationType: string;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfiguration#Parallelism
   */
  readonly parallelism?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfiguration#ParallelismPerKPU
   */
  readonly parallelismPerKpu?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfiguration#AutoScalingEnabled
   */
  readonly autoScalingEnabled?: boolean;

}

/**
 * @schema KinesisAnalyticsV2PropertyGroup
 */
export interface KinesisAnalyticsV2PropertyGroup {
  /**
   * @schema KinesisAnalyticsV2PropertyGroup#PropertyGroupId
   */
  readonly propertyGroupId: string;

  /**
   * @schema KinesisAnalyticsV2PropertyGroup#PropertyMap
   */
  readonly propertyMap: { [key: string]: string };

}

/**
 * @schema KinesisAnalyticsV2CodeContent
 */
export interface KinesisAnalyticsV2CodeContent {
  /**
   * @schema KinesisAnalyticsV2CodeContent#TextContent
   */
  readonly textContent?: string;

  /**
   * @schema KinesisAnalyticsV2CodeContent#ZipFileContent
   */
  readonly zipFileContent?: any;

  /**
   * @schema KinesisAnalyticsV2CodeContent#S3ContentLocation
   */
  readonly s3ContentLocation?: KinesisAnalyticsV2S3ContentLocation;

}

/**
 * @schema KinesisAnalyticsV2SqlApplicationConfigurationDescription
 */
export interface KinesisAnalyticsV2SqlApplicationConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationDescription#InputDescriptions
   */
  readonly inputDescriptions?: KinesisAnalyticsV2InputDescription[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationDescription#OutputDescriptions
   */
  readonly outputDescriptions?: KinesisAnalyticsV2OutputDescription[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationDescription#ReferenceDataSourceDescriptions
   */
  readonly referenceDataSourceDescriptions?: KinesisAnalyticsV2ReferenceDataSourceDescription[];

}

/**
 * @schema KinesisAnalyticsV2ApplicationCodeConfigurationDescription
 */
export interface KinesisAnalyticsV2ApplicationCodeConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfigurationDescription#CodeContentType
   */
  readonly codeContentType: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfigurationDescription#CodeContentDescription
   */
  readonly codeContentDescription?: KinesisAnalyticsV2CodeContentDescription;

}

/**
 * @schema KinesisAnalyticsV2RunConfigurationDescription
 */
export interface KinesisAnalyticsV2RunConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2RunConfigurationDescription#ApplicationRestoreConfigurationDescription
   */
  readonly applicationRestoreConfigurationDescription?: KinesisAnalyticsV2ApplicationRestoreConfiguration;

  /**
   * @schema KinesisAnalyticsV2RunConfigurationDescription#FlinkRunConfigurationDescription
   */
  readonly flinkRunConfigurationDescription?: KinesisAnalyticsV2FlinkRunConfiguration;

}

/**
 * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription
 */
export interface KinesisAnalyticsV2FlinkApplicationConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription#CheckpointConfigurationDescription
   */
  readonly checkpointConfigurationDescription?: KinesisAnalyticsV2CheckpointConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription#MonitoringConfigurationDescription
   */
  readonly monitoringConfigurationDescription?: KinesisAnalyticsV2MonitoringConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription#ParallelismConfigurationDescription
   */
  readonly parallelismConfigurationDescription?: KinesisAnalyticsV2ParallelismConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription#JobPlanDescription
   */
  readonly jobPlanDescription?: string;

}

/**
 * @schema KinesisAnalyticsV2EnvironmentPropertyDescriptions
 */
export interface KinesisAnalyticsV2EnvironmentPropertyDescriptions {
  /**
   * @schema KinesisAnalyticsV2EnvironmentPropertyDescriptions#PropertyGroupDescriptions
   */
  readonly propertyGroupDescriptions?: KinesisAnalyticsV2PropertyGroup[];

}

/**
 * @schema KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription
 */
export interface KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription#SnapshotsEnabled
   */
  readonly snapshotsEnabled: boolean;

}

/**
 * @schema KinesisAnalyticsV2MappingParameters
 */
export interface KinesisAnalyticsV2MappingParameters {
  /**
   * @schema KinesisAnalyticsV2MappingParameters#JSONMappingParameters
   */
  readonly jsonMappingParameters?: KinesisAnalyticsV2JsonMappingParameters;

  /**
   * @schema KinesisAnalyticsV2MappingParameters#CSVMappingParameters
   */
  readonly csvMappingParameters?: KinesisAnalyticsV2CsvMappingParameters;

}

/**
 * @schema KinesisAnalyticsV2InputUpdate
 */
export interface KinesisAnalyticsV2InputUpdate {
  /**
   * @schema KinesisAnalyticsV2InputUpdate#InputId
   */
  readonly inputId: string;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#NamePrefixUpdate
   */
  readonly namePrefixUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#InputProcessingConfigurationUpdate
   */
  readonly inputProcessingConfigurationUpdate?: KinesisAnalyticsV2InputProcessingConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#KinesisStreamsInputUpdate
   */
  readonly kinesisStreamsInputUpdate?: KinesisAnalyticsV2KinesisStreamsInputUpdate;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#KinesisFirehoseInputUpdate
   */
  readonly kinesisFirehoseInputUpdate?: KinesisAnalyticsV2KinesisFirehoseInputUpdate;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#InputSchemaUpdate
   */
  readonly inputSchemaUpdate?: KinesisAnalyticsV2InputSchemaUpdate;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#InputParallelismUpdate
   */
  readonly inputParallelismUpdate?: KinesisAnalyticsV2InputParallelismUpdate;

}

/**
 * @schema KinesisAnalyticsV2OutputUpdate
 */
export interface KinesisAnalyticsV2OutputUpdate {
  /**
   * @schema KinesisAnalyticsV2OutputUpdate#OutputId
   */
  readonly outputId: string;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#NameUpdate
   */
  readonly nameUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#KinesisStreamsOutputUpdate
   */
  readonly kinesisStreamsOutputUpdate?: KinesisAnalyticsV2KinesisStreamsOutputUpdate;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#KinesisFirehoseOutputUpdate
   */
  readonly kinesisFirehoseOutputUpdate?: KinesisAnalyticsV2KinesisFirehoseOutputUpdate;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#LambdaOutputUpdate
   */
  readonly lambdaOutputUpdate?: KinesisAnalyticsV2LambdaOutputUpdate;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#DestinationSchemaUpdate
   */
  readonly destinationSchemaUpdate?: KinesisAnalyticsV2DestinationSchema;

}

/**
 * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate
 */
export interface KinesisAnalyticsV2ReferenceDataSourceUpdate {
  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate#ReferenceId
   */
  readonly referenceId: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate#TableNameUpdate
   */
  readonly tableNameUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate#S3ReferenceDataSourceUpdate
   */
  readonly s3ReferenceDataSourceUpdate?: KinesisAnalyticsV2S3ReferenceDataSourceUpdate;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate#ReferenceSchemaUpdate
   */
  readonly referenceSchemaUpdate?: KinesisAnalyticsV2SourceSchema;

}

/**
 * @schema KinesisAnalyticsV2CodeContentUpdate
 */
export interface KinesisAnalyticsV2CodeContentUpdate {
  /**
   * @schema KinesisAnalyticsV2CodeContentUpdate#TextContentUpdate
   */
  readonly textContentUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2CodeContentUpdate#ZipFileContentUpdate
   */
  readonly zipFileContentUpdate?: any;

  /**
   * @schema KinesisAnalyticsV2CodeContentUpdate#S3ContentLocationUpdate
   */
  readonly s3ContentLocationUpdate?: KinesisAnalyticsV2S3ContentLocationUpdate;

}

/**
 * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate
 */
export interface KinesisAnalyticsV2CheckpointConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate#ConfigurationTypeUpdate
   */
  readonly configurationTypeUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate#CheckpointingEnabledUpdate
   */
  readonly checkpointingEnabledUpdate?: boolean;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate#CheckpointIntervalUpdate
   */
  readonly checkpointIntervalUpdate?: number;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate#MinPauseBetweenCheckpointsUpdate
   */
  readonly minPauseBetweenCheckpointsUpdate?: number;

}

/**
 * @schema KinesisAnalyticsV2MonitoringConfigurationUpdate
 */
export interface KinesisAnalyticsV2MonitoringConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationUpdate#ConfigurationTypeUpdate
   */
  readonly configurationTypeUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationUpdate#MetricsLevelUpdate
   */
  readonly metricsLevelUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationUpdate#LogLevelUpdate
   */
  readonly logLevelUpdate?: string;

}

/**
 * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate
 */
export interface KinesisAnalyticsV2ParallelismConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate#ConfigurationTypeUpdate
   */
  readonly configurationTypeUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate#ParallelismUpdate
   */
  readonly parallelismUpdate?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate#ParallelismPerKPUUpdate
   */
  readonly parallelismPerKpuUpdate?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate#AutoScalingEnabledUpdate
   */
  readonly autoScalingEnabledUpdate?: boolean;

}

/**
 * @schema KinesisAnalyticsV2S3ContentLocation
 */
export interface KinesisAnalyticsV2S3ContentLocation {
  /**
   * @schema KinesisAnalyticsV2S3ContentLocation#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentLocation#FileKey
   */
  readonly fileKey: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentLocation#ObjectVersion
   */
  readonly objectVersion?: string;

}

/**
 * @schema KinesisAnalyticsV2CodeContentDescription
 */
export interface KinesisAnalyticsV2CodeContentDescription {
  /**
   * @schema KinesisAnalyticsV2CodeContentDescription#TextContent
   */
  readonly textContent?: string;

  /**
   * @schema KinesisAnalyticsV2CodeContentDescription#CodeMD5
   */
  readonly codeMd5?: string;

  /**
   * @schema KinesisAnalyticsV2CodeContentDescription#CodeSize
   */
  readonly codeSize?: number;

  /**
   * @schema KinesisAnalyticsV2CodeContentDescription#S3ApplicationCodeLocationDescription
   */
  readonly s3ApplicationCodeLocationDescription?: KinesisAnalyticsV2S3ApplicationCodeLocationDescription;

}

/**
 * @schema KinesisAnalyticsV2CheckpointConfigurationDescription
 */
export interface KinesisAnalyticsV2CheckpointConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationDescription#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationDescription#CheckpointingEnabled
   */
  readonly checkpointingEnabled?: boolean;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationDescription#CheckpointInterval
   */
  readonly checkpointInterval?: number;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationDescription#MinPauseBetweenCheckpoints
   */
  readonly minPauseBetweenCheckpoints?: number;

}

/**
 * @schema KinesisAnalyticsV2MonitoringConfigurationDescription
 */
export interface KinesisAnalyticsV2MonitoringConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationDescription#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationDescription#MetricsLevel
   */
  readonly metricsLevel?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationDescription#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema KinesisAnalyticsV2ParallelismConfigurationDescription
 */
export interface KinesisAnalyticsV2ParallelismConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#Parallelism
   */
  readonly parallelism?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#ParallelismPerKPU
   */
  readonly parallelismPerKpu?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#CurrentParallelism
   */
  readonly currentParallelism?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#AutoScalingEnabled
   */
  readonly autoScalingEnabled?: boolean;

}

/**
 * @schema KinesisAnalyticsV2JsonMappingParameters
 */
export interface KinesisAnalyticsV2JsonMappingParameters {
  /**
   * @schema KinesisAnalyticsV2JsonMappingParameters#RecordRowPath
   */
  readonly recordRowPath: string;

}

/**
 * @schema KinesisAnalyticsV2CsvMappingParameters
 */
export interface KinesisAnalyticsV2CsvMappingParameters {
  /**
   * @schema KinesisAnalyticsV2CsvMappingParameters#RecordRowDelimiter
   */
  readonly recordRowDelimiter: string;

  /**
   * @schema KinesisAnalyticsV2CsvMappingParameters#RecordColumnDelimiter
   */
  readonly recordColumnDelimiter: string;

}

/**
 * @schema KinesisAnalyticsV2InputProcessingConfigurationUpdate
 */
export interface KinesisAnalyticsV2InputProcessingConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2InputProcessingConfigurationUpdate#InputLambdaProcessorUpdate
   */
  readonly inputLambdaProcessorUpdate: KinesisAnalyticsV2InputLambdaProcessorUpdate;

}

/**
 * @schema KinesisAnalyticsV2KinesisStreamsInputUpdate
 */
export interface KinesisAnalyticsV2KinesisStreamsInputUpdate {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseInputUpdate
 */
export interface KinesisAnalyticsV2KinesisFirehoseInputUpdate {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema KinesisAnalyticsV2InputSchemaUpdate
 */
export interface KinesisAnalyticsV2InputSchemaUpdate {
  /**
   * @schema KinesisAnalyticsV2InputSchemaUpdate#RecordFormatUpdate
   */
  readonly recordFormatUpdate?: KinesisAnalyticsV2RecordFormat;

  /**
   * @schema KinesisAnalyticsV2InputSchemaUpdate#RecordEncodingUpdate
   */
  readonly recordEncodingUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2InputSchemaUpdate#RecordColumnUpdates
   */
  readonly recordColumnUpdates?: KinesisAnalyticsV2RecordColumn[];

}

/**
 * @schema KinesisAnalyticsV2InputParallelismUpdate
 */
export interface KinesisAnalyticsV2InputParallelismUpdate {
  /**
   * @schema KinesisAnalyticsV2InputParallelismUpdate#CountUpdate
   */
  readonly countUpdate: number;

}

/**
 * @schema KinesisAnalyticsV2KinesisStreamsOutputUpdate
 */
export interface KinesisAnalyticsV2KinesisStreamsOutputUpdate {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseOutputUpdate
 */
export interface KinesisAnalyticsV2KinesisFirehoseOutputUpdate {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema KinesisAnalyticsV2LambdaOutputUpdate
 */
export interface KinesisAnalyticsV2LambdaOutputUpdate {
  /**
   * @schema KinesisAnalyticsV2LambdaOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema KinesisAnalyticsV2S3ReferenceDataSourceUpdate
 */
export interface KinesisAnalyticsV2S3ReferenceDataSourceUpdate {
  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceUpdate#BucketARNUpdate
   */
  readonly bucketArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceUpdate#FileKeyUpdate
   */
  readonly fileKeyUpdate?: string;

}

/**
 * @schema KinesisAnalyticsV2S3ContentLocationUpdate
 */
export interface KinesisAnalyticsV2S3ContentLocationUpdate {
  /**
   * @schema KinesisAnalyticsV2S3ContentLocationUpdate#BucketARNUpdate
   */
  readonly bucketArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentLocationUpdate#FileKeyUpdate
   */
  readonly fileKeyUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentLocationUpdate#ObjectVersionUpdate
   */
  readonly objectVersionUpdate?: string;

}

/**
 * @schema KinesisAnalyticsV2S3ApplicationCodeLocationDescription
 */
export interface KinesisAnalyticsV2S3ApplicationCodeLocationDescription {
  /**
   * @schema KinesisAnalyticsV2S3ApplicationCodeLocationDescription#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema KinesisAnalyticsV2S3ApplicationCodeLocationDescription#FileKey
   */
  readonly fileKey: string;

  /**
   * @schema KinesisAnalyticsV2S3ApplicationCodeLocationDescription#ObjectVersion
   */
  readonly objectVersion?: string;

}

/**
 * @schema KinesisAnalyticsV2InputLambdaProcessorUpdate
 */
export interface KinesisAnalyticsV2InputLambdaProcessorUpdate {
  /**
   * @schema KinesisAnalyticsV2InputLambdaProcessorUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}
