/**
 * @schema AddApplicationCloudWatchLoggingOptionRequest
 */
export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema AddApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema AddApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema AddApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOption
   */
  readonly cloudWatchLoggingOption: CloudWatchLoggingOption;

}

/**
 * @schema AddApplicationCloudWatchLoggingOptionResponse
 */
export interface AddApplicationCloudWatchLoggingOptionResponse {
  /**
   * @schema AddApplicationCloudWatchLoggingOptionResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema AddApplicationCloudWatchLoggingOptionResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema AddApplicationCloudWatchLoggingOptionResponse#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

}

/**
 * @schema AddApplicationInputRequest
 */
export interface AddApplicationInputRequest {
  /**
   * @schema AddApplicationInputRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema AddApplicationInputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema AddApplicationInputRequest#Input
   */
  readonly input: Input;

}

/**
 * @schema AddApplicationInputResponse
 */
export interface AddApplicationInputResponse {
  /**
   * @schema AddApplicationInputResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema AddApplicationInputResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema AddApplicationInputResponse#InputDescriptions
   */
  readonly inputDescriptions?: InputDescription[];

}

/**
 * @schema AddApplicationInputProcessingConfigurationRequest
 */
export interface AddApplicationInputProcessingConfigurationRequest {
  /**
   * @schema AddApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema AddApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema AddApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId: string;

  /**
   * @schema AddApplicationInputProcessingConfigurationRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration: InputProcessingConfiguration;

}

/**
 * @schema AddApplicationInputProcessingConfigurationResponse
 */
export interface AddApplicationInputProcessingConfigurationResponse {
  /**
   * @schema AddApplicationInputProcessingConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema AddApplicationInputProcessingConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema AddApplicationInputProcessingConfigurationResponse#InputId
   */
  readonly inputId?: string;

  /**
   * @schema AddApplicationInputProcessingConfigurationResponse#InputProcessingConfigurationDescription
   */
  readonly inputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

}

/**
 * @schema AddApplicationOutputRequest
 */
export interface AddApplicationOutputRequest {
  /**
   * @schema AddApplicationOutputRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema AddApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema AddApplicationOutputRequest#Output
   */
  readonly output: Output;

}

/**
 * @schema AddApplicationOutputResponse
 */
export interface AddApplicationOutputResponse {
  /**
   * @schema AddApplicationOutputResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema AddApplicationOutputResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema AddApplicationOutputResponse#OutputDescriptions
   */
  readonly outputDescriptions?: OutputDescription[];

}

/**
 * @schema AddApplicationReferenceDataSourceRequest
 */
export interface AddApplicationReferenceDataSourceRequest {
  /**
   * @schema AddApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema AddApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema AddApplicationReferenceDataSourceRequest#ReferenceDataSource
   */
  readonly referenceDataSource: ReferenceDataSource;

}

/**
 * @schema AddApplicationReferenceDataSourceResponse
 */
export interface AddApplicationReferenceDataSourceResponse {
  /**
   * @schema AddApplicationReferenceDataSourceResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema AddApplicationReferenceDataSourceResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema AddApplicationReferenceDataSourceResponse#ReferenceDataSourceDescriptions
   */
  readonly referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];

}

/**
 * @schema AddApplicationVpcConfigurationRequest
 */
export interface AddApplicationVpcConfigurationRequest {
  /**
   * @schema AddApplicationVpcConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema AddApplicationVpcConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema AddApplicationVpcConfigurationRequest#VpcConfiguration
   */
  readonly vpcConfiguration: VpcConfiguration;

}

/**
 * @schema AddApplicationVpcConfigurationResponse
 */
export interface AddApplicationVpcConfigurationResponse {
  /**
   * @schema AddApplicationVpcConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema AddApplicationVpcConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema AddApplicationVpcConfigurationResponse#VpcConfigurationDescription
   */
  readonly vpcConfigurationDescription?: VpcConfigurationDescription;

}

/**
 * @schema CreateApplicationRequest
 */
export interface CreateApplicationRequest {
  /**
   * @schema CreateApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateApplicationRequest#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema CreateApplicationRequest#RuntimeEnvironment
   */
  readonly runtimeEnvironment: string;

  /**
   * @schema CreateApplicationRequest#ServiceExecutionRole
   */
  readonly serviceExecutionRole: string;

  /**
   * @schema CreateApplicationRequest#ApplicationConfiguration
   */
  readonly applicationConfiguration?: ApplicationConfiguration;

  /**
   * @schema CreateApplicationRequest#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  /**
   * @schema CreateApplicationRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateApplicationResponse
 */
export interface CreateApplicationResponse {
  /**
   * @schema CreateApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail: ApplicationDetail;

}

/**
 * @schema CreateApplicationPresignedUrlRequest
 */
export interface CreateApplicationPresignedUrlRequest {
  /**
   * @schema CreateApplicationPresignedUrlRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateApplicationPresignedUrlRequest#UrlType
   */
  readonly urlType: string;

  /**
   * @schema CreateApplicationPresignedUrlRequest#SessionExpirationDurationInSeconds
   */
  readonly sessionExpirationDurationInSeconds?: number;

}

/**
 * @schema CreateApplicationPresignedUrlResponse
 */
export interface CreateApplicationPresignedUrlResponse {
  /**
   * @schema CreateApplicationPresignedUrlResponse#AuthorizedUrl
   */
  readonly authorizedUrl?: string;

}

/**
 * @schema CreateApplicationSnapshotRequest
 */
export interface CreateApplicationSnapshotRequest {
  /**
   * @schema CreateApplicationSnapshotRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateApplicationSnapshotRequest#SnapshotName
   */
  readonly snapshotName: string;

}

/**
 * @schema CreateApplicationSnapshotResponse
 */
export interface CreateApplicationSnapshotResponse {
}

/**
 * @schema DeleteApplicationRequest
 */
export interface DeleteApplicationRequest {
  /**
   * @schema DeleteApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteApplicationRequest#CreateTimestamp
   */
  readonly createTimestamp: string;

}

/**
 * @schema DeleteApplicationResponse
 */
export interface DeleteApplicationResponse {
}

/**
 * @schema DeleteApplicationCloudWatchLoggingOptionRequest
 */
export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema DeleteApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema DeleteApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId: string;

}

/**
 * @schema DeleteApplicationCloudWatchLoggingOptionResponse
 */
export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  /**
   * @schema DeleteApplicationCloudWatchLoggingOptionResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema DeleteApplicationCloudWatchLoggingOptionResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema DeleteApplicationCloudWatchLoggingOptionResponse#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

}

/**
 * @schema DeleteApplicationInputProcessingConfigurationRequest
 */
export interface DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * @schema DeleteApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema DeleteApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId: string;

}

/**
 * @schema DeleteApplicationInputProcessingConfigurationResponse
 */
export interface DeleteApplicationInputProcessingConfigurationResponse {
  /**
   * @schema DeleteApplicationInputProcessingConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema DeleteApplicationInputProcessingConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * @schema DeleteApplicationOutputRequest
 */
export interface DeleteApplicationOutputRequest {
  /**
   * @schema DeleteApplicationOutputRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema DeleteApplicationOutputRequest#OutputId
   */
  readonly outputId: string;

}

/**
 * @schema DeleteApplicationOutputResponse
 */
export interface DeleteApplicationOutputResponse {
  /**
   * @schema DeleteApplicationOutputResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema DeleteApplicationOutputResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * @schema DeleteApplicationReferenceDataSourceRequest
 */
export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * @schema DeleteApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema DeleteApplicationReferenceDataSourceRequest#ReferenceId
   */
  readonly referenceId: string;

}

/**
 * @schema DeleteApplicationReferenceDataSourceResponse
 */
export interface DeleteApplicationReferenceDataSourceResponse {
  /**
   * @schema DeleteApplicationReferenceDataSourceResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema DeleteApplicationReferenceDataSourceResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * @schema DeleteApplicationSnapshotRequest
 */
export interface DeleteApplicationSnapshotRequest {
  /**
   * @schema DeleteApplicationSnapshotRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteApplicationSnapshotRequest#SnapshotName
   */
  readonly snapshotName: string;

  /**
   * @schema DeleteApplicationSnapshotRequest#SnapshotCreationTimestamp
   */
  readonly snapshotCreationTimestamp: string;

}

/**
 * @schema DeleteApplicationSnapshotResponse
 */
export interface DeleteApplicationSnapshotResponse {
}

/**
 * @schema DeleteApplicationVpcConfigurationRequest
 */
export interface DeleteApplicationVpcConfigurationRequest {
  /**
   * @schema DeleteApplicationVpcConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteApplicationVpcConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema DeleteApplicationVpcConfigurationRequest#VpcConfigurationId
   */
  readonly vpcConfigurationId: string;

}

/**
 * @schema DeleteApplicationVpcConfigurationResponse
 */
export interface DeleteApplicationVpcConfigurationResponse {
  /**
   * @schema DeleteApplicationVpcConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema DeleteApplicationVpcConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * @schema DescribeApplicationRequest
 */
export interface DescribeApplicationRequest {
  /**
   * @schema DescribeApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DescribeApplicationRequest#IncludeAdditionalDetails
   */
  readonly includeAdditionalDetails?: boolean;

}

/**
 * @schema DescribeApplicationResponse
 */
export interface DescribeApplicationResponse {
  /**
   * @schema DescribeApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail: ApplicationDetail;

}

/**
 * @schema DescribeApplicationSnapshotRequest
 */
export interface DescribeApplicationSnapshotRequest {
  /**
   * @schema DescribeApplicationSnapshotRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DescribeApplicationSnapshotRequest#SnapshotName
   */
  readonly snapshotName: string;

}

/**
 * @schema DescribeApplicationSnapshotResponse
 */
export interface DescribeApplicationSnapshotResponse {
  /**
   * @schema DescribeApplicationSnapshotResponse#SnapshotDetails
   */
  readonly snapshotDetails: SnapshotDetails;

}

/**
 * @schema DiscoverInputSchemaRequest
 */
export interface DiscoverInputSchemaRequest {
  /**
   * @schema DiscoverInputSchemaRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema DiscoverInputSchemaRequest#ServiceExecutionRole
   */
  readonly serviceExecutionRole: string;

  /**
   * @schema DiscoverInputSchemaRequest#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * @schema DiscoverInputSchemaRequest#S3Configuration
   */
  readonly s3Configuration?: S3Configuration;

  /**
   * @schema DiscoverInputSchemaRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: InputProcessingConfiguration;

}

/**
 * @schema DiscoverInputSchemaResponse
 */
export interface DiscoverInputSchemaResponse {
  /**
   * @schema DiscoverInputSchemaResponse#InputSchema
   */
  readonly inputSchema?: SourceSchema;

  /**
   * @schema DiscoverInputSchemaResponse#ParsedInputRecords
   */
  readonly parsedInputRecords?: string[][];

  /**
   * @schema DiscoverInputSchemaResponse#ProcessedInputRecords
   */
  readonly processedInputRecords?: string[];

  /**
   * @schema DiscoverInputSchemaResponse#RawInputRecords
   */
  readonly rawInputRecords?: string[];

}

/**
 * @schema ListApplicationSnapshotsRequest
 */
export interface ListApplicationSnapshotsRequest {
  /**
   * @schema ListApplicationSnapshotsRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ListApplicationSnapshotsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListApplicationSnapshotsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListApplicationSnapshotsResponse
 */
export interface ListApplicationSnapshotsResponse {
  /**
   * @schema ListApplicationSnapshotsResponse#SnapshotSummaries
   */
  readonly snapshotSummaries?: SnapshotDetails[];

  /**
   * @schema ListApplicationSnapshotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListApplicationsRequest
 */
export interface ListApplicationsRequest {
  /**
   * @schema ListApplicationsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListApplicationsResponse
 */
export interface ListApplicationsResponse {
  /**
   * @schema ListApplicationsResponse#ApplicationSummaries
   */
  readonly applicationSummaries: ApplicationSummary[];

  /**
   * @schema ListApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
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
  readonly tags?: Tag[];

}

/**
 * @schema StartApplicationRequest
 */
export interface StartApplicationRequest {
  /**
   * @schema StartApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema StartApplicationRequest#RunConfiguration
   */
  readonly runConfiguration: RunConfiguration;

}

/**
 * @schema StartApplicationResponse
 */
export interface StartApplicationResponse {
}

/**
 * @schema StopApplicationRequest
 */
export interface StopApplicationRequest {
  /**
   * @schema StopApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema StopApplicationRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema StopApplicationResponse
 */
export interface StopApplicationResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

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
   * @schema UntagResourceRequest#ResourceARN
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
 * @schema UpdateApplicationRequest
 */
export interface UpdateApplicationRequest {
  /**
   * @schema UpdateApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema UpdateApplicationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema UpdateApplicationRequest#ApplicationConfigurationUpdate
   */
  readonly applicationConfigurationUpdate?: ApplicationConfigurationUpdate;

  /**
   * @schema UpdateApplicationRequest#ServiceExecutionRoleUpdate
   */
  readonly serviceExecutionRoleUpdate?: string;

  /**
   * @schema UpdateApplicationRequest#RunConfigurationUpdate
   */
  readonly runConfigurationUpdate?: RunConfigurationUpdate;

  /**
   * @schema UpdateApplicationRequest#CloudWatchLoggingOptionUpdates
   */
  readonly cloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

}

/**
 * @schema UpdateApplicationResponse
 */
export interface UpdateApplicationResponse {
  /**
   * @schema UpdateApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail: ApplicationDetail;

}

/**
 * @schema CloudWatchLoggingOption
 */
export interface CloudWatchLoggingOption {
  /**
   * @schema CloudWatchLoggingOption#LogStreamARN
   */
  readonly logStreamArn: string;

}

/**
 * @schema CloudWatchLoggingOptionDescription
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * @schema CloudWatchLoggingOptionDescription#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId?: string;

  /**
   * @schema CloudWatchLoggingOptionDescription#LogStreamARN
   */
  readonly logStreamArn: string;

  /**
   * @schema CloudWatchLoggingOptionDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema Input
 */
export interface Input {
  /**
   * @schema Input#NamePrefix
   */
  readonly namePrefix: string;

  /**
   * @schema Input#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * @schema Input#KinesisStreamsInput
   */
  readonly kinesisStreamsInput?: KinesisStreamsInput;

  /**
   * @schema Input#KinesisFirehoseInput
   */
  readonly kinesisFirehoseInput?: KinesisFirehoseInput;

  /**
   * @schema Input#InputParallelism
   */
  readonly inputParallelism?: InputParallelism;

  /**
   * @schema Input#InputSchema
   */
  readonly inputSchema: SourceSchema;

}

/**
 * @schema InputDescription
 */
export interface InputDescription {
  /**
   * @schema InputDescription#InputId
   */
  readonly inputId?: string;

  /**
   * @schema InputDescription#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema InputDescription#InAppStreamNames
   */
  readonly inAppStreamNames?: string[];

  /**
   * @schema InputDescription#InputProcessingConfigurationDescription
   */
  readonly inputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  /**
   * @schema InputDescription#KinesisStreamsInputDescription
   */
  readonly kinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  /**
   * @schema InputDescription#KinesisFirehoseInputDescription
   */
  readonly kinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  /**
   * @schema InputDescription#InputSchema
   */
  readonly inputSchema?: SourceSchema;

  /**
   * @schema InputDescription#InputParallelism
   */
  readonly inputParallelism?: InputParallelism;

  /**
   * @schema InputDescription#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: InputStartingPositionConfiguration;

}

/**
 * @schema InputProcessingConfiguration
 */
export interface InputProcessingConfiguration {
  /**
   * @schema InputProcessingConfiguration#InputLambdaProcessor
   */
  readonly inputLambdaProcessor: InputLambdaProcessor;

}

/**
 * @schema InputProcessingConfigurationDescription
 */
export interface InputProcessingConfigurationDescription {
  /**
   * @schema InputProcessingConfigurationDescription#InputLambdaProcessorDescription
   */
  readonly inputLambdaProcessorDescription?: InputLambdaProcessorDescription;

}

/**
 * @schema Output
 */
export interface Output {
  /**
   * @schema Output#Name
   */
  readonly name: string;

  /**
   * @schema Output#KinesisStreamsOutput
   */
  readonly kinesisStreamsOutput?: KinesisStreamsOutput;

  /**
   * @schema Output#KinesisFirehoseOutput
   */
  readonly kinesisFirehoseOutput?: KinesisFirehoseOutput;

  /**
   * @schema Output#LambdaOutput
   */
  readonly lambdaOutput?: LambdaOutput;

  /**
   * @schema Output#DestinationSchema
   */
  readonly destinationSchema: DestinationSchema;

}

/**
 * @schema OutputDescription
 */
export interface OutputDescription {
  /**
   * @schema OutputDescription#OutputId
   */
  readonly outputId?: string;

  /**
   * @schema OutputDescription#Name
   */
  readonly name?: string;

  /**
   * @schema OutputDescription#KinesisStreamsOutputDescription
   */
  readonly kinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  /**
   * @schema OutputDescription#KinesisFirehoseOutputDescription
   */
  readonly kinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  /**
   * @schema OutputDescription#LambdaOutputDescription
   */
  readonly lambdaOutputDescription?: LambdaOutputDescription;

  /**
   * @schema OutputDescription#DestinationSchema
   */
  readonly destinationSchema?: DestinationSchema;

}

/**
 * @schema ReferenceDataSource
 */
export interface ReferenceDataSource {
  /**
   * @schema ReferenceDataSource#TableName
   */
  readonly tableName: string;

  /**
   * @schema ReferenceDataSource#S3ReferenceDataSource
   */
  readonly s3ReferenceDataSource?: S3ReferenceDataSource;

  /**
   * @schema ReferenceDataSource#ReferenceSchema
   */
  readonly referenceSchema: SourceSchema;

}

/**
 * @schema ReferenceDataSourceDescription
 */
export interface ReferenceDataSourceDescription {
  /**
   * @schema ReferenceDataSourceDescription#ReferenceId
   */
  readonly referenceId: string;

  /**
   * @schema ReferenceDataSourceDescription#TableName
   */
  readonly tableName: string;

  /**
   * @schema ReferenceDataSourceDescription#S3ReferenceDataSourceDescription
   */
  readonly s3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;

  /**
   * @schema ReferenceDataSourceDescription#ReferenceSchema
   */
  readonly referenceSchema?: SourceSchema;

}

/**
 * @schema VpcConfiguration
 */
export interface VpcConfiguration {
  /**
   * @schema VpcConfiguration#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema VpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema VpcConfigurationDescription
 */
export interface VpcConfigurationDescription {
  /**
   * @schema VpcConfigurationDescription#VpcConfigurationId
   */
  readonly vpcConfigurationId: string;

  /**
   * @schema VpcConfigurationDescription#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema VpcConfigurationDescription#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema VpcConfigurationDescription#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema ApplicationConfiguration
 */
export interface ApplicationConfiguration {
  /**
   * @schema ApplicationConfiguration#SqlApplicationConfiguration
   */
  readonly sqlApplicationConfiguration?: SqlApplicationConfiguration;

  /**
   * @schema ApplicationConfiguration#FlinkApplicationConfiguration
   */
  readonly flinkApplicationConfiguration?: FlinkApplicationConfiguration;

  /**
   * @schema ApplicationConfiguration#EnvironmentProperties
   */
  readonly environmentProperties?: EnvironmentProperties;

  /**
   * @schema ApplicationConfiguration#ApplicationCodeConfiguration
   */
  readonly applicationCodeConfiguration: ApplicationCodeConfiguration;

  /**
   * @schema ApplicationConfiguration#ApplicationSnapshotConfiguration
   */
  readonly applicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;

  /**
   * @schema ApplicationConfiguration#VpcConfigurations
   */
  readonly vpcConfigurations?: VpcConfiguration[];

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema ApplicationDetail
 */
export interface ApplicationDetail {
  /**
   * @schema ApplicationDetail#ApplicationARN
   */
  readonly applicationArn: string;

  /**
   * @schema ApplicationDetail#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema ApplicationDetail#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ApplicationDetail#RuntimeEnvironment
   */
  readonly runtimeEnvironment: string;

  /**
   * @schema ApplicationDetail#ServiceExecutionRole
   */
  readonly serviceExecutionRole?: string;

  /**
   * @schema ApplicationDetail#ApplicationStatus
   */
  readonly applicationStatus: string;

  /**
   * @schema ApplicationDetail#ApplicationVersionId
   */
  readonly applicationVersionId: number;

  /**
   * @schema ApplicationDetail#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema ApplicationDetail#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema ApplicationDetail#ApplicationConfigurationDescription
   */
  readonly applicationConfigurationDescription?: ApplicationConfigurationDescription;

  /**
   * @schema ApplicationDetail#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

}

/**
 * @schema SnapshotDetails
 */
export interface SnapshotDetails {
  /**
   * @schema SnapshotDetails#SnapshotName
   */
  readonly snapshotName: string;

  /**
   * @schema SnapshotDetails#SnapshotStatus
   */
  readonly snapshotStatus: string;

  /**
   * @schema SnapshotDetails#ApplicationVersionId
   */
  readonly applicationVersionId: number;

  /**
   * @schema SnapshotDetails#SnapshotCreationTimestamp
   */
  readonly snapshotCreationTimestamp?: string;

}

/**
 * @schema InputStartingPositionConfiguration
 */
export interface InputStartingPositionConfiguration {
  /**
   * @schema InputStartingPositionConfiguration#InputStartingPosition
   */
  readonly inputStartingPosition?: string;

}

/**
 * @schema S3Configuration
 */
export interface S3Configuration {
  /**
   * @schema S3Configuration#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema S3Configuration#FileKey
   */
  readonly fileKey: string;

}

/**
 * @schema SourceSchema
 */
export interface SourceSchema {
  /**
   * @schema SourceSchema#RecordFormat
   */
  readonly recordFormat: RecordFormat;

  /**
   * @schema SourceSchema#RecordEncoding
   */
  readonly recordEncoding?: string;

  /**
   * @schema SourceSchema#RecordColumns
   */
  readonly recordColumns: RecordColumn[];

}

/**
 * @schema ApplicationSummary
 */
export interface ApplicationSummary {
  /**
   * @schema ApplicationSummary#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ApplicationSummary#ApplicationARN
   */
  readonly applicationArn: string;

  /**
   * @schema ApplicationSummary#ApplicationStatus
   */
  readonly applicationStatus: string;

  /**
   * @schema ApplicationSummary#ApplicationVersionId
   */
  readonly applicationVersionId: number;

  /**
   * @schema ApplicationSummary#RuntimeEnvironment
   */
  readonly runtimeEnvironment: string;

}

/**
 * @schema RunConfiguration
 */
export interface RunConfiguration {
  /**
   * @schema RunConfiguration#FlinkRunConfiguration
   */
  readonly flinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * @schema RunConfiguration#SqlRunConfigurations
   */
  readonly sqlRunConfigurations?: SqlRunConfiguration[];

  /**
   * @schema RunConfiguration#ApplicationRestoreConfiguration
   */
  readonly applicationRestoreConfiguration?: ApplicationRestoreConfiguration;

}

/**
 * @schema ApplicationConfigurationUpdate
 */
export interface ApplicationConfigurationUpdate {
  /**
   * @schema ApplicationConfigurationUpdate#SqlApplicationConfigurationUpdate
   */
  readonly sqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;

  /**
   * @schema ApplicationConfigurationUpdate#ApplicationCodeConfigurationUpdate
   */
  readonly applicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;

  /**
   * @schema ApplicationConfigurationUpdate#FlinkApplicationConfigurationUpdate
   */
  readonly flinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;

  /**
   * @schema ApplicationConfigurationUpdate#EnvironmentPropertyUpdates
   */
  readonly environmentPropertyUpdates?: EnvironmentPropertyUpdates;

  /**
   * @schema ApplicationConfigurationUpdate#ApplicationSnapshotConfigurationUpdate
   */
  readonly applicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;

  /**
   * @schema ApplicationConfigurationUpdate#VpcConfigurationUpdates
   */
  readonly vpcConfigurationUpdates?: VpcConfigurationUpdate[];

}

/**
 * @schema RunConfigurationUpdate
 */
export interface RunConfigurationUpdate {
  /**
   * @schema RunConfigurationUpdate#FlinkRunConfiguration
   */
  readonly flinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * @schema RunConfigurationUpdate#ApplicationRestoreConfiguration
   */
  readonly applicationRestoreConfiguration?: ApplicationRestoreConfiguration;

}

/**
 * @schema CloudWatchLoggingOptionUpdate
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * @schema CloudWatchLoggingOptionUpdate#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId: string;

  /**
   * @schema CloudWatchLoggingOptionUpdate#LogStreamARNUpdate
   */
  readonly logStreamArnUpdate?: string;

}

/**
 * @schema KinesisStreamsInput
 */
export interface KinesisStreamsInput {
  /**
   * @schema KinesisStreamsInput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisFirehoseInput
 */
export interface KinesisFirehoseInput {
  /**
   * @schema KinesisFirehoseInput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema InputParallelism
 */
export interface InputParallelism {
  /**
   * @schema InputParallelism#Count
   */
  readonly count?: number;

}

/**
 * @schema KinesisStreamsInputDescription
 */
export interface KinesisStreamsInputDescription {
  /**
   * @schema KinesisStreamsInputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisStreamsInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisFirehoseInputDescription
 */
export interface KinesisFirehoseInputDescription {
  /**
   * @schema KinesisFirehoseInputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisFirehoseInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema InputLambdaProcessor
 */
export interface InputLambdaProcessor {
  /**
   * @schema InputLambdaProcessor#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema InputLambdaProcessorDescription
 */
export interface InputLambdaProcessorDescription {
  /**
   * @schema InputLambdaProcessorDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema InputLambdaProcessorDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisStreamsOutput
 */
export interface KinesisStreamsOutput {
  /**
   * @schema KinesisStreamsOutput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisFirehoseOutput
 */
export interface KinesisFirehoseOutput {
  /**
   * @schema KinesisFirehoseOutput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema LambdaOutput
 */
export interface LambdaOutput {
  /**
   * @schema LambdaOutput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema DestinationSchema
 */
export interface DestinationSchema {
  /**
   * @schema DestinationSchema#RecordFormatType
   */
  readonly recordFormatType: string;

}

/**
 * @schema KinesisStreamsOutputDescription
 */
export interface KinesisStreamsOutputDescription {
  /**
   * @schema KinesisStreamsOutputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisStreamsOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisFirehoseOutputDescription
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * @schema KinesisFirehoseOutputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisFirehoseOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema LambdaOutputDescription
 */
export interface LambdaOutputDescription {
  /**
   * @schema LambdaOutputDescription#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema LambdaOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema S3ReferenceDataSource
 */
export interface S3ReferenceDataSource {
  /**
   * @schema S3ReferenceDataSource#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema S3ReferenceDataSource#FileKey
   */
  readonly fileKey?: string;

}

/**
 * @schema S3ReferenceDataSourceDescription
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * @schema S3ReferenceDataSourceDescription#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema S3ReferenceDataSourceDescription#FileKey
   */
  readonly fileKey: string;

  /**
   * @schema S3ReferenceDataSourceDescription#ReferenceRoleARN
   */
  readonly referenceRoleArn?: string;

}

/**
 * @schema SqlApplicationConfiguration
 */
export interface SqlApplicationConfiguration {
  /**
   * @schema SqlApplicationConfiguration#Inputs
   */
  readonly inputs?: Input[];

  /**
   * @schema SqlApplicationConfiguration#Outputs
   */
  readonly outputs?: Output[];

  /**
   * @schema SqlApplicationConfiguration#ReferenceDataSources
   */
  readonly referenceDataSources?: ReferenceDataSource[];

}

/**
 * @schema FlinkApplicationConfiguration
 */
export interface FlinkApplicationConfiguration {
  /**
   * @schema FlinkApplicationConfiguration#CheckpointConfiguration
   */
  readonly checkpointConfiguration?: CheckpointConfiguration;

  /**
   * @schema FlinkApplicationConfiguration#MonitoringConfiguration
   */
  readonly monitoringConfiguration?: MonitoringConfiguration;

  /**
   * @schema FlinkApplicationConfiguration#ParallelismConfiguration
   */
  readonly parallelismConfiguration?: ParallelismConfiguration;

}

/**
 * @schema EnvironmentProperties
 */
export interface EnvironmentProperties {
  /**
   * @schema EnvironmentProperties#PropertyGroups
   */
  readonly propertyGroups: PropertyGroup[];

}

/**
 * @schema ApplicationCodeConfiguration
 */
export interface ApplicationCodeConfiguration {
  /**
   * @schema ApplicationCodeConfiguration#CodeContent
   */
  readonly codeContent?: CodeContent;

  /**
   * @schema ApplicationCodeConfiguration#CodeContentType
   */
  readonly codeContentType: string;

}

/**
 * @schema ApplicationSnapshotConfiguration
 */
export interface ApplicationSnapshotConfiguration {
  /**
   * @schema ApplicationSnapshotConfiguration#SnapshotsEnabled
   */
  readonly snapshotsEnabled: boolean;

}

/**
 * @schema ApplicationConfigurationDescription
 */
export interface ApplicationConfigurationDescription {
  /**
   * @schema ApplicationConfigurationDescription#SqlApplicationConfigurationDescription
   */
  readonly sqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;

  /**
   * @schema ApplicationConfigurationDescription#ApplicationCodeConfigurationDescription
   */
  readonly applicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;

  /**
   * @schema ApplicationConfigurationDescription#RunConfigurationDescription
   */
  readonly runConfigurationDescription?: RunConfigurationDescription;

  /**
   * @schema ApplicationConfigurationDescription#FlinkApplicationConfigurationDescription
   */
  readonly flinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;

  /**
   * @schema ApplicationConfigurationDescription#EnvironmentPropertyDescriptions
   */
  readonly environmentPropertyDescriptions?: EnvironmentPropertyDescriptions;

  /**
   * @schema ApplicationConfigurationDescription#ApplicationSnapshotConfigurationDescription
   */
  readonly applicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;

  /**
   * @schema ApplicationConfigurationDescription#VpcConfigurationDescriptions
   */
  readonly vpcConfigurationDescriptions?: VpcConfigurationDescription[];

}

/**
 * @schema RecordFormat
 */
export interface RecordFormat {
  /**
   * @schema RecordFormat#RecordFormatType
   */
  readonly recordFormatType: string;

  /**
   * @schema RecordFormat#MappingParameters
   */
  readonly mappingParameters?: MappingParameters;

}

/**
 * @schema RecordColumn
 */
export interface RecordColumn {
  /**
   * @schema RecordColumn#Name
   */
  readonly name: string;

  /**
   * @schema RecordColumn#Mapping
   */
  readonly mapping?: string;

  /**
   * @schema RecordColumn#SqlType
   */
  readonly sqlType: string;

}

/**
 * @schema FlinkRunConfiguration
 */
export interface FlinkRunConfiguration {
  /**
   * @schema FlinkRunConfiguration#AllowNonRestoredState
   */
  readonly allowNonRestoredState?: boolean;

}

/**
 * @schema SqlRunConfiguration
 */
export interface SqlRunConfiguration {
  /**
   * @schema SqlRunConfiguration#InputId
   */
  readonly inputId: string;

  /**
   * @schema SqlRunConfiguration#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration: InputStartingPositionConfiguration;

}

/**
 * @schema ApplicationRestoreConfiguration
 */
export interface ApplicationRestoreConfiguration {
  /**
   * @schema ApplicationRestoreConfiguration#ApplicationRestoreType
   */
  readonly applicationRestoreType: string;

  /**
   * @schema ApplicationRestoreConfiguration#SnapshotName
   */
  readonly snapshotName?: string;

}

/**
 * @schema SqlApplicationConfigurationUpdate
 */
export interface SqlApplicationConfigurationUpdate {
  /**
   * @schema SqlApplicationConfigurationUpdate#InputUpdates
   */
  readonly inputUpdates?: InputUpdate[];

  /**
   * @schema SqlApplicationConfigurationUpdate#OutputUpdates
   */
  readonly outputUpdates?: OutputUpdate[];

  /**
   * @schema SqlApplicationConfigurationUpdate#ReferenceDataSourceUpdates
   */
  readonly referenceDataSourceUpdates?: ReferenceDataSourceUpdate[];

}

/**
 * @schema ApplicationCodeConfigurationUpdate
 */
export interface ApplicationCodeConfigurationUpdate {
  /**
   * @schema ApplicationCodeConfigurationUpdate#CodeContentTypeUpdate
   */
  readonly codeContentTypeUpdate?: string;

  /**
   * @schema ApplicationCodeConfigurationUpdate#CodeContentUpdate
   */
  readonly codeContentUpdate?: CodeContentUpdate;

}

/**
 * @schema FlinkApplicationConfigurationUpdate
 */
export interface FlinkApplicationConfigurationUpdate {
  /**
   * @schema FlinkApplicationConfigurationUpdate#CheckpointConfigurationUpdate
   */
  readonly checkpointConfigurationUpdate?: CheckpointConfigurationUpdate;

  /**
   * @schema FlinkApplicationConfigurationUpdate#MonitoringConfigurationUpdate
   */
  readonly monitoringConfigurationUpdate?: MonitoringConfigurationUpdate;

  /**
   * @schema FlinkApplicationConfigurationUpdate#ParallelismConfigurationUpdate
   */
  readonly parallelismConfigurationUpdate?: ParallelismConfigurationUpdate;

}

/**
 * @schema EnvironmentPropertyUpdates
 */
export interface EnvironmentPropertyUpdates {
  /**
   * @schema EnvironmentPropertyUpdates#PropertyGroups
   */
  readonly propertyGroups: PropertyGroup[];

}

/**
 * @schema ApplicationSnapshotConfigurationUpdate
 */
export interface ApplicationSnapshotConfigurationUpdate {
  /**
   * @schema ApplicationSnapshotConfigurationUpdate#SnapshotsEnabledUpdate
   */
  readonly snapshotsEnabledUpdate: boolean;

}

/**
 * @schema VpcConfigurationUpdate
 */
export interface VpcConfigurationUpdate {
  /**
   * @schema VpcConfigurationUpdate#VpcConfigurationId
   */
  readonly vpcConfigurationId: string;

  /**
   * @schema VpcConfigurationUpdate#SubnetIdUpdates
   */
  readonly subnetIdUpdates?: string[];

  /**
   * @schema VpcConfigurationUpdate#SecurityGroupIdUpdates
   */
  readonly securityGroupIdUpdates?: string[];

}

/**
 * @schema CheckpointConfiguration
 */
export interface CheckpointConfiguration {
  /**
   * @schema CheckpointConfiguration#ConfigurationType
   */
  readonly configurationType: string;

  /**
   * @schema CheckpointConfiguration#CheckpointingEnabled
   */
  readonly checkpointingEnabled?: boolean;

  /**
   * @schema CheckpointConfiguration#CheckpointInterval
   */
  readonly checkpointInterval?: number;

  /**
   * @schema CheckpointConfiguration#MinPauseBetweenCheckpoints
   */
  readonly minPauseBetweenCheckpoints?: number;

}

/**
 * @schema MonitoringConfiguration
 */
export interface MonitoringConfiguration {
  /**
   * @schema MonitoringConfiguration#ConfigurationType
   */
  readonly configurationType: string;

  /**
   * @schema MonitoringConfiguration#MetricsLevel
   */
  readonly metricsLevel?: string;

  /**
   * @schema MonitoringConfiguration#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema ParallelismConfiguration
 */
export interface ParallelismConfiguration {
  /**
   * @schema ParallelismConfiguration#ConfigurationType
   */
  readonly configurationType: string;

  /**
   * @schema ParallelismConfiguration#Parallelism
   */
  readonly parallelism?: number;

  /**
   * @schema ParallelismConfiguration#ParallelismPerKPU
   */
  readonly parallelismPerKpu?: number;

  /**
   * @schema ParallelismConfiguration#AutoScalingEnabled
   */
  readonly autoScalingEnabled?: boolean;

}

/**
 * @schema PropertyGroup
 */
export interface PropertyGroup {
  /**
   * @schema PropertyGroup#PropertyGroupId
   */
  readonly propertyGroupId: string;

  /**
   * @schema PropertyGroup#PropertyMap
   */
  readonly propertyMap: { [key: string]: string };

}

/**
 * @schema CodeContent
 */
export interface CodeContent {
  /**
   * @schema CodeContent#TextContent
   */
  readonly textContent?: string;

  /**
   * @schema CodeContent#ZipFileContent
   */
  readonly zipFileContent?: any;

  /**
   * @schema CodeContent#S3ContentLocation
   */
  readonly s3ContentLocation?: S3ContentLocation;

}

/**
 * @schema SqlApplicationConfigurationDescription
 */
export interface SqlApplicationConfigurationDescription {
  /**
   * @schema SqlApplicationConfigurationDescription#InputDescriptions
   */
  readonly inputDescriptions?: InputDescription[];

  /**
   * @schema SqlApplicationConfigurationDescription#OutputDescriptions
   */
  readonly outputDescriptions?: OutputDescription[];

  /**
   * @schema SqlApplicationConfigurationDescription#ReferenceDataSourceDescriptions
   */
  readonly referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];

}

/**
 * @schema ApplicationCodeConfigurationDescription
 */
export interface ApplicationCodeConfigurationDescription {
  /**
   * @schema ApplicationCodeConfigurationDescription#CodeContentType
   */
  readonly codeContentType: string;

  /**
   * @schema ApplicationCodeConfigurationDescription#CodeContentDescription
   */
  readonly codeContentDescription?: CodeContentDescription;

}

/**
 * @schema RunConfigurationDescription
 */
export interface RunConfigurationDescription {
  /**
   * @schema RunConfigurationDescription#ApplicationRestoreConfigurationDescription
   */
  readonly applicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;

  /**
   * @schema RunConfigurationDescription#FlinkRunConfigurationDescription
   */
  readonly flinkRunConfigurationDescription?: FlinkRunConfiguration;

}

/**
 * @schema FlinkApplicationConfigurationDescription
 */
export interface FlinkApplicationConfigurationDescription {
  /**
   * @schema FlinkApplicationConfigurationDescription#CheckpointConfigurationDescription
   */
  readonly checkpointConfigurationDescription?: CheckpointConfigurationDescription;

  /**
   * @schema FlinkApplicationConfigurationDescription#MonitoringConfigurationDescription
   */
  readonly monitoringConfigurationDescription?: MonitoringConfigurationDescription;

  /**
   * @schema FlinkApplicationConfigurationDescription#ParallelismConfigurationDescription
   */
  readonly parallelismConfigurationDescription?: ParallelismConfigurationDescription;

  /**
   * @schema FlinkApplicationConfigurationDescription#JobPlanDescription
   */
  readonly jobPlanDescription?: string;

}

/**
 * @schema EnvironmentPropertyDescriptions
 */
export interface EnvironmentPropertyDescriptions {
  /**
   * @schema EnvironmentPropertyDescriptions#PropertyGroupDescriptions
   */
  readonly propertyGroupDescriptions?: PropertyGroup[];

}

/**
 * @schema ApplicationSnapshotConfigurationDescription
 */
export interface ApplicationSnapshotConfigurationDescription {
  /**
   * @schema ApplicationSnapshotConfigurationDescription#SnapshotsEnabled
   */
  readonly snapshotsEnabled: boolean;

}

/**
 * @schema MappingParameters
 */
export interface MappingParameters {
  /**
   * @schema MappingParameters#JSONMappingParameters
   */
  readonly jsonMappingParameters?: JsonMappingParameters;

  /**
   * @schema MappingParameters#CSVMappingParameters
   */
  readonly csvMappingParameters?: CsvMappingParameters;

}

/**
 * @schema InputUpdate
 */
export interface InputUpdate {
  /**
   * @schema InputUpdate#InputId
   */
  readonly inputId: string;

  /**
   * @schema InputUpdate#NamePrefixUpdate
   */
  readonly namePrefixUpdate?: string;

  /**
   * @schema InputUpdate#InputProcessingConfigurationUpdate
   */
  readonly inputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  /**
   * @schema InputUpdate#KinesisStreamsInputUpdate
   */
  readonly kinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  /**
   * @schema InputUpdate#KinesisFirehoseInputUpdate
   */
  readonly kinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  /**
   * @schema InputUpdate#InputSchemaUpdate
   */
  readonly inputSchemaUpdate?: InputSchemaUpdate;

  /**
   * @schema InputUpdate#InputParallelismUpdate
   */
  readonly inputParallelismUpdate?: InputParallelismUpdate;

}

/**
 * @schema OutputUpdate
 */
export interface OutputUpdate {
  /**
   * @schema OutputUpdate#OutputId
   */
  readonly outputId: string;

  /**
   * @schema OutputUpdate#NameUpdate
   */
  readonly nameUpdate?: string;

  /**
   * @schema OutputUpdate#KinesisStreamsOutputUpdate
   */
  readonly kinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  /**
   * @schema OutputUpdate#KinesisFirehoseOutputUpdate
   */
  readonly kinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  /**
   * @schema OutputUpdate#LambdaOutputUpdate
   */
  readonly lambdaOutputUpdate?: LambdaOutputUpdate;

  /**
   * @schema OutputUpdate#DestinationSchemaUpdate
   */
  readonly destinationSchemaUpdate?: DestinationSchema;

}

/**
 * @schema ReferenceDataSourceUpdate
 */
export interface ReferenceDataSourceUpdate {
  /**
   * @schema ReferenceDataSourceUpdate#ReferenceId
   */
  readonly referenceId: string;

  /**
   * @schema ReferenceDataSourceUpdate#TableNameUpdate
   */
  readonly tableNameUpdate?: string;

  /**
   * @schema ReferenceDataSourceUpdate#S3ReferenceDataSourceUpdate
   */
  readonly s3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  /**
   * @schema ReferenceDataSourceUpdate#ReferenceSchemaUpdate
   */
  readonly referenceSchemaUpdate?: SourceSchema;

}

/**
 * @schema CodeContentUpdate
 */
export interface CodeContentUpdate {
  /**
   * @schema CodeContentUpdate#TextContentUpdate
   */
  readonly textContentUpdate?: string;

  /**
   * @schema CodeContentUpdate#ZipFileContentUpdate
   */
  readonly zipFileContentUpdate?: any;

  /**
   * @schema CodeContentUpdate#S3ContentLocationUpdate
   */
  readonly s3ContentLocationUpdate?: S3ContentLocationUpdate;

}

/**
 * @schema CheckpointConfigurationUpdate
 */
export interface CheckpointConfigurationUpdate {
  /**
   * @schema CheckpointConfigurationUpdate#ConfigurationTypeUpdate
   */
  readonly configurationTypeUpdate?: string;

  /**
   * @schema CheckpointConfigurationUpdate#CheckpointingEnabledUpdate
   */
  readonly checkpointingEnabledUpdate?: boolean;

  /**
   * @schema CheckpointConfigurationUpdate#CheckpointIntervalUpdate
   */
  readonly checkpointIntervalUpdate?: number;

  /**
   * @schema CheckpointConfigurationUpdate#MinPauseBetweenCheckpointsUpdate
   */
  readonly minPauseBetweenCheckpointsUpdate?: number;

}

/**
 * @schema MonitoringConfigurationUpdate
 */
export interface MonitoringConfigurationUpdate {
  /**
   * @schema MonitoringConfigurationUpdate#ConfigurationTypeUpdate
   */
  readonly configurationTypeUpdate?: string;

  /**
   * @schema MonitoringConfigurationUpdate#MetricsLevelUpdate
   */
  readonly metricsLevelUpdate?: string;

  /**
   * @schema MonitoringConfigurationUpdate#LogLevelUpdate
   */
  readonly logLevelUpdate?: string;

}

/**
 * @schema ParallelismConfigurationUpdate
 */
export interface ParallelismConfigurationUpdate {
  /**
   * @schema ParallelismConfigurationUpdate#ConfigurationTypeUpdate
   */
  readonly configurationTypeUpdate?: string;

  /**
   * @schema ParallelismConfigurationUpdate#ParallelismUpdate
   */
  readonly parallelismUpdate?: number;

  /**
   * @schema ParallelismConfigurationUpdate#ParallelismPerKPUUpdate
   */
  readonly parallelismPerKpuUpdate?: number;

  /**
   * @schema ParallelismConfigurationUpdate#AutoScalingEnabledUpdate
   */
  readonly autoScalingEnabledUpdate?: boolean;

}

/**
 * @schema S3ContentLocation
 */
export interface S3ContentLocation {
  /**
   * @schema S3ContentLocation#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema S3ContentLocation#FileKey
   */
  readonly fileKey: string;

  /**
   * @schema S3ContentLocation#ObjectVersion
   */
  readonly objectVersion?: string;

}

/**
 * @schema CodeContentDescription
 */
export interface CodeContentDescription {
  /**
   * @schema CodeContentDescription#TextContent
   */
  readonly textContent?: string;

  /**
   * @schema CodeContentDescription#CodeMD5
   */
  readonly codeMd5?: string;

  /**
   * @schema CodeContentDescription#CodeSize
   */
  readonly codeSize?: number;

  /**
   * @schema CodeContentDescription#S3ApplicationCodeLocationDescription
   */
  readonly s3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;

}

/**
 * @schema CheckpointConfigurationDescription
 */
export interface CheckpointConfigurationDescription {
  /**
   * @schema CheckpointConfigurationDescription#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema CheckpointConfigurationDescription#CheckpointingEnabled
   */
  readonly checkpointingEnabled?: boolean;

  /**
   * @schema CheckpointConfigurationDescription#CheckpointInterval
   */
  readonly checkpointInterval?: number;

  /**
   * @schema CheckpointConfigurationDescription#MinPauseBetweenCheckpoints
   */
  readonly minPauseBetweenCheckpoints?: number;

}

/**
 * @schema MonitoringConfigurationDescription
 */
export interface MonitoringConfigurationDescription {
  /**
   * @schema MonitoringConfigurationDescription#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema MonitoringConfigurationDescription#MetricsLevel
   */
  readonly metricsLevel?: string;

  /**
   * @schema MonitoringConfigurationDescription#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema ParallelismConfigurationDescription
 */
export interface ParallelismConfigurationDescription {
  /**
   * @schema ParallelismConfigurationDescription#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema ParallelismConfigurationDescription#Parallelism
   */
  readonly parallelism?: number;

  /**
   * @schema ParallelismConfigurationDescription#ParallelismPerKPU
   */
  readonly parallelismPerKpu?: number;

  /**
   * @schema ParallelismConfigurationDescription#CurrentParallelism
   */
  readonly currentParallelism?: number;

  /**
   * @schema ParallelismConfigurationDescription#AutoScalingEnabled
   */
  readonly autoScalingEnabled?: boolean;

}

/**
 * @schema JsonMappingParameters
 */
export interface JsonMappingParameters {
  /**
   * @schema JsonMappingParameters#RecordRowPath
   */
  readonly recordRowPath: string;

}

/**
 * @schema CsvMappingParameters
 */
export interface CsvMappingParameters {
  /**
   * @schema CsvMappingParameters#RecordRowDelimiter
   */
  readonly recordRowDelimiter: string;

  /**
   * @schema CsvMappingParameters#RecordColumnDelimiter
   */
  readonly recordColumnDelimiter: string;

}

/**
 * @schema InputProcessingConfigurationUpdate
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * @schema InputProcessingConfigurationUpdate#InputLambdaProcessorUpdate
   */
  readonly inputLambdaProcessorUpdate: InputLambdaProcessorUpdate;

}

/**
 * @schema KinesisStreamsInputUpdate
 */
export interface KinesisStreamsInputUpdate {
  /**
   * @schema KinesisStreamsInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema KinesisFirehoseInputUpdate
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * @schema KinesisFirehoseInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema InputSchemaUpdate
 */
export interface InputSchemaUpdate {
  /**
   * @schema InputSchemaUpdate#RecordFormatUpdate
   */
  readonly recordFormatUpdate?: RecordFormat;

  /**
   * @schema InputSchemaUpdate#RecordEncodingUpdate
   */
  readonly recordEncodingUpdate?: string;

  /**
   * @schema InputSchemaUpdate#RecordColumnUpdates
   */
  readonly recordColumnUpdates?: RecordColumn[];

}

/**
 * @schema InputParallelismUpdate
 */
export interface InputParallelismUpdate {
  /**
   * @schema InputParallelismUpdate#CountUpdate
   */
  readonly countUpdate: number;

}

/**
 * @schema KinesisStreamsOutputUpdate
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * @schema KinesisStreamsOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema KinesisFirehoseOutputUpdate
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * @schema KinesisFirehoseOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema LambdaOutputUpdate
 */
export interface LambdaOutputUpdate {
  /**
   * @schema LambdaOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}

/**
 * @schema S3ReferenceDataSourceUpdate
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * @schema S3ReferenceDataSourceUpdate#BucketARNUpdate
   */
  readonly bucketArnUpdate?: string;

  /**
   * @schema S3ReferenceDataSourceUpdate#FileKeyUpdate
   */
  readonly fileKeyUpdate?: string;

}

/**
 * @schema S3ContentLocationUpdate
 */
export interface S3ContentLocationUpdate {
  /**
   * @schema S3ContentLocationUpdate#BucketARNUpdate
   */
  readonly bucketArnUpdate?: string;

  /**
   * @schema S3ContentLocationUpdate#FileKeyUpdate
   */
  readonly fileKeyUpdate?: string;

  /**
   * @schema S3ContentLocationUpdate#ObjectVersionUpdate
   */
  readonly objectVersionUpdate?: string;

}

/**
 * @schema S3ApplicationCodeLocationDescription
 */
export interface S3ApplicationCodeLocationDescription {
  /**
   * @schema S3ApplicationCodeLocationDescription#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema S3ApplicationCodeLocationDescription#FileKey
   */
  readonly fileKey: string;

  /**
   * @schema S3ApplicationCodeLocationDescription#ObjectVersion
   */
  readonly objectVersion?: string;

}

/**
 * @schema InputLambdaProcessorUpdate
 */
export interface InputLambdaProcessorUpdate {
  /**
   * @schema InputLambdaProcessorUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate: string;

}
