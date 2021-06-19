/**
 * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest
 */
export interface KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOption
   */
  readonly cloudWatchLoggingOption: KinesisAnalyticsCloudWatchLoggingOption;

}

/**
 * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse
 */
export interface KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse {
}

/**
 * @schema KinesisAnalyticsAddApplicationInputRequest
 */
export interface KinesisAnalyticsAddApplicationInputRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationInputRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsAddApplicationInputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsAddApplicationInputRequest#Input
   */
  readonly input: KinesisAnalyticsInput;

}

/**
 * @schema KinesisAnalyticsAddApplicationInputResponse
 */
export interface KinesisAnalyticsAddApplicationInputResponse {
}

/**
 * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest
 */
export interface KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId: string;

  /**
   * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration: KinesisAnalyticsInputProcessingConfiguration;

}

/**
 * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse
 */
export interface KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse {
}

/**
 * @schema KinesisAnalyticsAddApplicationOutputRequest
 */
export interface KinesisAnalyticsAddApplicationOutputRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationOutputRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsAddApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsAddApplicationOutputRequest#Output
   */
  readonly output: KinesisAnalyticsOutput;

}

/**
 * @schema KinesisAnalyticsAddApplicationOutputResponse
 */
export interface KinesisAnalyticsAddApplicationOutputResponse {
}

/**
 * @schema KinesisAnalyticsAddApplicationReferenceDataSourceRequest
 */
export interface KinesisAnalyticsAddApplicationReferenceDataSourceRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsAddApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsAddApplicationReferenceDataSourceRequest#ReferenceDataSource
   */
  readonly referenceDataSource: KinesisAnalyticsReferenceDataSource;

}

/**
 * @schema KinesisAnalyticsAddApplicationReferenceDataSourceResponse
 */
export interface KinesisAnalyticsAddApplicationReferenceDataSourceResponse {
}

/**
 * @schema KinesisAnalyticsCreateApplicationRequest
 */
export interface KinesisAnalyticsCreateApplicationRequest {
  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#Inputs
   */
  readonly inputs?: KinesisAnalyticsInput[];

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#Outputs
   */
  readonly outputs?: KinesisAnalyticsOutput[];

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: KinesisAnalyticsCloudWatchLoggingOption[];

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#ApplicationCode
   */
  readonly applicationCode?: string;

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#Tags
   */
  readonly tags?: KinesisAnalyticsTag[];

}

/**
 * @schema KinesisAnalyticsCreateApplicationResponse
 */
export interface KinesisAnalyticsCreateApplicationResponse {
  /**
   * @schema KinesisAnalyticsCreateApplicationResponse#ApplicationSummary
   */
  readonly applicationSummary: KinesisAnalyticsApplicationSummary;

}

/**
 * @schema KinesisAnalyticsDeleteApplicationRequest
 */
export interface KinesisAnalyticsDeleteApplicationRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationRequest#CreateTimestamp
   */
  readonly createTimestamp: string;

}

/**
 * @schema KinesisAnalyticsDeleteApplicationResponse
 */
export interface KinesisAnalyticsDeleteApplicationResponse {
}

/**
 * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest
 */
export interface KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId: string;

}

/**
 * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse
 */
export interface KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse {
}

/**
 * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest
 */
export interface KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId: string;

}

/**
 * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse
 */
export interface KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse {
}

/**
 * @schema KinesisAnalyticsDeleteApplicationOutputRequest
 */
export interface KinesisAnalyticsDeleteApplicationOutputRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationOutputRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsDeleteApplicationOutputRequest#OutputId
   */
  readonly outputId: string;

}

/**
 * @schema KinesisAnalyticsDeleteApplicationOutputResponse
 */
export interface KinesisAnalyticsDeleteApplicationOutputResponse {
}

/**
 * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest
 */
export interface KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest#ReferenceId
   */
  readonly referenceId: string;

}

/**
 * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse
 */
export interface KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse {
}

/**
 * @schema KinesisAnalyticsDescribeApplicationRequest
 */
export interface KinesisAnalyticsDescribeApplicationRequest {
  /**
   * @schema KinesisAnalyticsDescribeApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

}

/**
 * @schema KinesisAnalyticsDescribeApplicationResponse
 */
export interface KinesisAnalyticsDescribeApplicationResponse {
  /**
   * @schema KinesisAnalyticsDescribeApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail: KinesisAnalyticsApplicationDetail;

}

/**
 * @schema KinesisAnalyticsDiscoverInputSchemaRequest
 */
export interface KinesisAnalyticsDiscoverInputSchemaRequest {
  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsInputStartingPositionConfiguration;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#S3Configuration
   */
  readonly s3Configuration?: KinesisAnalyticsS3Configuration;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsInputProcessingConfiguration;

}

/**
 * @schema KinesisAnalyticsDiscoverInputSchemaResponse
 */
export interface KinesisAnalyticsDiscoverInputSchemaResponse {
  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaResponse#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsSourceSchema;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaResponse#ParsedInputRecords
   */
  readonly parsedInputRecords?: string[][];

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaResponse#ProcessedInputRecords
   */
  readonly processedInputRecords?: string[];

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaResponse#RawInputRecords
   */
  readonly rawInputRecords?: string[];

}

/**
 * @schema KinesisAnalyticsListApplicationsRequest
 */
export interface KinesisAnalyticsListApplicationsRequest {
  /**
   * @schema KinesisAnalyticsListApplicationsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KinesisAnalyticsListApplicationsRequest#ExclusiveStartApplicationName
   */
  readonly exclusiveStartApplicationName?: string;

}

/**
 * @schema KinesisAnalyticsListApplicationsResponse
 */
export interface KinesisAnalyticsListApplicationsResponse {
  /**
   * @schema KinesisAnalyticsListApplicationsResponse#ApplicationSummaries
   */
  readonly applicationSummaries: KinesisAnalyticsApplicationSummary[];

  /**
   * @schema KinesisAnalyticsListApplicationsResponse#HasMoreApplications
   */
  readonly hasMoreApplications: boolean;

}

/**
 * @schema KinesisAnalyticsListTagsForResourceRequest
 */
export interface KinesisAnalyticsListTagsForResourceRequest {
  /**
   * @schema KinesisAnalyticsListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema KinesisAnalyticsListTagsForResourceResponse
 */
export interface KinesisAnalyticsListTagsForResourceResponse {
  /**
   * @schema KinesisAnalyticsListTagsForResourceResponse#Tags
   */
  readonly tags?: KinesisAnalyticsTag[];

}

/**
 * @schema KinesisAnalyticsStartApplicationRequest
 */
export interface KinesisAnalyticsStartApplicationRequest {
  /**
   * @schema KinesisAnalyticsStartApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsStartApplicationRequest#InputConfigurations
   */
  readonly inputConfigurations: KinesisAnalyticsInputConfiguration[];

}

/**
 * @schema KinesisAnalyticsStartApplicationResponse
 */
export interface KinesisAnalyticsStartApplicationResponse {
}

/**
 * @schema KinesisAnalyticsStopApplicationRequest
 */
export interface KinesisAnalyticsStopApplicationRequest {
  /**
   * @schema KinesisAnalyticsStopApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

}

/**
 * @schema KinesisAnalyticsStopApplicationResponse
 */
export interface KinesisAnalyticsStopApplicationResponse {
}

/**
 * @schema KinesisAnalyticsTagResourceRequest
 */
export interface KinesisAnalyticsTagResourceRequest {
  /**
   * @schema KinesisAnalyticsTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsTagResourceRequest#Tags
   */
  readonly tags: KinesisAnalyticsTag[];

}

/**
 * @schema KinesisAnalyticsTagResourceResponse
 */
export interface KinesisAnalyticsTagResourceResponse {
}

/**
 * @schema KinesisAnalyticsUntagResourceRequest
 */
export interface KinesisAnalyticsUntagResourceRequest {
  /**
   * @schema KinesisAnalyticsUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema KinesisAnalyticsUntagResourceResponse
 */
export interface KinesisAnalyticsUntagResourceResponse {
}

/**
 * @schema KinesisAnalyticsUpdateApplicationRequest
 */
export interface KinesisAnalyticsUpdateApplicationRequest {
  /**
   * @schema KinesisAnalyticsUpdateApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsUpdateApplicationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId: number;

  /**
   * @schema KinesisAnalyticsUpdateApplicationRequest#ApplicationUpdate
   */
  readonly applicationUpdate: KinesisAnalyticsApplicationUpdate;

}

/**
 * @schema KinesisAnalyticsUpdateApplicationResponse
 */
export interface KinesisAnalyticsUpdateApplicationResponse {
}

/**
 * @schema KinesisAnalyticsCloudWatchLoggingOption
 */
export interface KinesisAnalyticsCloudWatchLoggingOption {
  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOption#LogStreamARN
   */
  readonly logStreamArn: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOption#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisAnalyticsInput
 */
export interface KinesisAnalyticsInput {
  /**
   * @schema KinesisAnalyticsInput#NamePrefix
   */
  readonly namePrefix: string;

  /**
   * @schema KinesisAnalyticsInput#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsInputProcessingConfiguration;

  /**
   * @schema KinesisAnalyticsInput#KinesisStreamsInput
   */
  readonly kinesisStreamsInput?: KinesisAnalyticsKinesisStreamsInput;

  /**
   * @schema KinesisAnalyticsInput#KinesisFirehoseInput
   */
  readonly kinesisFirehoseInput?: KinesisAnalyticsKinesisFirehoseInput;

  /**
   * @schema KinesisAnalyticsInput#InputParallelism
   */
  readonly inputParallelism?: KinesisAnalyticsInputParallelism;

  /**
   * @schema KinesisAnalyticsInput#InputSchema
   */
  readonly inputSchema: KinesisAnalyticsSourceSchema;

}

/**
 * @schema KinesisAnalyticsInputProcessingConfiguration
 */
export interface KinesisAnalyticsInputProcessingConfiguration {
  /**
   * @schema KinesisAnalyticsInputProcessingConfiguration#InputLambdaProcessor
   */
  readonly inputLambdaProcessor: KinesisAnalyticsInputLambdaProcessor;

}

/**
 * @schema KinesisAnalyticsOutput
 */
export interface KinesisAnalyticsOutput {
  /**
   * @schema KinesisAnalyticsOutput#Name
   */
  readonly name: string;

  /**
   * @schema KinesisAnalyticsOutput#KinesisStreamsOutput
   */
  readonly kinesisStreamsOutput?: KinesisAnalyticsKinesisStreamsOutput;

  /**
   * @schema KinesisAnalyticsOutput#KinesisFirehoseOutput
   */
  readonly kinesisFirehoseOutput?: KinesisAnalyticsKinesisFirehoseOutput;

  /**
   * @schema KinesisAnalyticsOutput#LambdaOutput
   */
  readonly lambdaOutput?: KinesisAnalyticsLambdaOutput;

  /**
   * @schema KinesisAnalyticsOutput#DestinationSchema
   */
  readonly destinationSchema: KinesisAnalyticsDestinationSchema;

}

/**
 * @schema KinesisAnalyticsReferenceDataSource
 */
export interface KinesisAnalyticsReferenceDataSource {
  /**
   * @schema KinesisAnalyticsReferenceDataSource#TableName
   */
  readonly tableName: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSource#S3ReferenceDataSource
   */
  readonly s3ReferenceDataSource?: KinesisAnalyticsS3ReferenceDataSource;

  /**
   * @schema KinesisAnalyticsReferenceDataSource#ReferenceSchema
   */
  readonly referenceSchema: KinesisAnalyticsSourceSchema;

}

/**
 * @schema KinesisAnalyticsTag
 */
export interface KinesisAnalyticsTag {
  /**
   * @schema KinesisAnalyticsTag#Key
   */
  readonly key: string;

  /**
   * @schema KinesisAnalyticsTag#Value
   */
  readonly value?: string;

}

/**
 * @schema KinesisAnalyticsApplicationSummary
 */
export interface KinesisAnalyticsApplicationSummary {
  /**
   * @schema KinesisAnalyticsApplicationSummary#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsApplicationSummary#ApplicationARN
   */
  readonly applicationArn: string;

  /**
   * @schema KinesisAnalyticsApplicationSummary#ApplicationStatus
   */
  readonly applicationStatus: string;

}

/**
 * @schema KinesisAnalyticsApplicationDetail
 */
export interface KinesisAnalyticsApplicationDetail {
  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationARN
   */
  readonly applicationArn: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationStatus
   */
  readonly applicationStatus: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#InputDescriptions
   */
  readonly inputDescriptions?: KinesisAnalyticsInputDescription[];

  /**
   * @schema KinesisAnalyticsApplicationDetail#OutputDescriptions
   */
  readonly outputDescriptions?: KinesisAnalyticsOutputDescription[];

  /**
   * @schema KinesisAnalyticsApplicationDetail#ReferenceDataSourceDescriptions
   */
  readonly referenceDataSourceDescriptions?: KinesisAnalyticsReferenceDataSourceDescription[];

  /**
   * @schema KinesisAnalyticsApplicationDetail#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: KinesisAnalyticsCloudWatchLoggingOptionDescription[];

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationCode
   */
  readonly applicationCode?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationVersionId
   */
  readonly applicationVersionId: number;

}

/**
 * @schema KinesisAnalyticsInputStartingPositionConfiguration
 */
export interface KinesisAnalyticsInputStartingPositionConfiguration {
  /**
   * @schema KinesisAnalyticsInputStartingPositionConfiguration#InputStartingPosition
   */
  readonly inputStartingPosition?: string;

}

/**
 * @schema KinesisAnalyticsS3Configuration
 */
export interface KinesisAnalyticsS3Configuration {
  /**
   * @schema KinesisAnalyticsS3Configuration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema KinesisAnalyticsS3Configuration#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema KinesisAnalyticsS3Configuration#FileKey
   */
  readonly fileKey: string;

}

/**
 * @schema KinesisAnalyticsSourceSchema
 */
export interface KinesisAnalyticsSourceSchema {
  /**
   * @schema KinesisAnalyticsSourceSchema#RecordFormat
   */
  readonly recordFormat: KinesisAnalyticsRecordFormat;

  /**
   * @schema KinesisAnalyticsSourceSchema#RecordEncoding
   */
  readonly recordEncoding?: string;

  /**
   * @schema KinesisAnalyticsSourceSchema#RecordColumns
   */
  readonly recordColumns: KinesisAnalyticsRecordColumn[];

}

/**
 * @schema KinesisAnalyticsInputConfiguration
 */
export interface KinesisAnalyticsInputConfiguration {
  /**
   * @schema KinesisAnalyticsInputConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema KinesisAnalyticsInputConfiguration#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration: KinesisAnalyticsInputStartingPositionConfiguration;

}

/**
 * @schema KinesisAnalyticsApplicationUpdate
 */
export interface KinesisAnalyticsApplicationUpdate {
  /**
   * @schema KinesisAnalyticsApplicationUpdate#InputUpdates
   */
  readonly inputUpdates?: KinesisAnalyticsInputUpdate[];

  /**
   * @schema KinesisAnalyticsApplicationUpdate#ApplicationCodeUpdate
   */
  readonly applicationCodeUpdate?: string;

  /**
   * @schema KinesisAnalyticsApplicationUpdate#OutputUpdates
   */
  readonly outputUpdates?: KinesisAnalyticsOutputUpdate[];

  /**
   * @schema KinesisAnalyticsApplicationUpdate#ReferenceDataSourceUpdates
   */
  readonly referenceDataSourceUpdates?: KinesisAnalyticsReferenceDataSourceUpdate[];

  /**
   * @schema KinesisAnalyticsApplicationUpdate#CloudWatchLoggingOptionUpdates
   */
  readonly cloudWatchLoggingOptionUpdates?: KinesisAnalyticsCloudWatchLoggingOptionUpdate[];

}

/**
 * @schema KinesisAnalyticsKinesisStreamsInput
 */
export interface KinesisAnalyticsKinesisStreamsInput {
  /**
   * @schema KinesisAnalyticsKinesisStreamsInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsInput#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisAnalyticsKinesisFirehoseInput
 */
export interface KinesisAnalyticsKinesisFirehoseInput {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseInput#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisAnalyticsInputParallelism
 */
export interface KinesisAnalyticsInputParallelism {
  /**
   * @schema KinesisAnalyticsInputParallelism#Count
   */
  readonly count?: number;

}

/**
 * @schema KinesisAnalyticsInputLambdaProcessor
 */
export interface KinesisAnalyticsInputLambdaProcessor {
  /**
   * @schema KinesisAnalyticsInputLambdaProcessor#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsInputLambdaProcessor#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisAnalyticsKinesisStreamsOutput
 */
export interface KinesisAnalyticsKinesisStreamsOutput {
  /**
   * @schema KinesisAnalyticsKinesisStreamsOutput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsOutput#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisAnalyticsKinesisFirehoseOutput
 */
export interface KinesisAnalyticsKinesisFirehoseOutput {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutput#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisAnalyticsLambdaOutput
 */
export interface KinesisAnalyticsLambdaOutput {
  /**
   * @schema KinesisAnalyticsLambdaOutput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisAnalyticsLambdaOutput#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisAnalyticsDestinationSchema
 */
export interface KinesisAnalyticsDestinationSchema {
  /**
   * @schema KinesisAnalyticsDestinationSchema#RecordFormatType
   */
  readonly recordFormatType: string;

}

/**
 * @schema KinesisAnalyticsS3ReferenceDataSource
 */
export interface KinesisAnalyticsS3ReferenceDataSource {
  /**
   * @schema KinesisAnalyticsS3ReferenceDataSource#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSource#FileKey
   */
  readonly fileKey: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSource#ReferenceRoleARN
   */
  readonly referenceRoleArn: string;

}

/**
 * @schema KinesisAnalyticsInputDescription
 */
export interface KinesisAnalyticsInputDescription {
  /**
   * @schema KinesisAnalyticsInputDescription#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsInputDescription#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema KinesisAnalyticsInputDescription#InAppStreamNames
   */
  readonly inAppStreamNames?: string[];

  /**
   * @schema KinesisAnalyticsInputDescription#InputProcessingConfigurationDescription
   */
  readonly inputProcessingConfigurationDescription?: KinesisAnalyticsInputProcessingConfigurationDescription;

  /**
   * @schema KinesisAnalyticsInputDescription#KinesisStreamsInputDescription
   */
  readonly kinesisStreamsInputDescription?: KinesisAnalyticsKinesisStreamsInputDescription;

  /**
   * @schema KinesisAnalyticsInputDescription#KinesisFirehoseInputDescription
   */
  readonly kinesisFirehoseInputDescription?: KinesisAnalyticsKinesisFirehoseInputDescription;

  /**
   * @schema KinesisAnalyticsInputDescription#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsSourceSchema;

  /**
   * @schema KinesisAnalyticsInputDescription#InputParallelism
   */
  readonly inputParallelism?: KinesisAnalyticsInputParallelism;

  /**
   * @schema KinesisAnalyticsInputDescription#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsInputStartingPositionConfiguration;

}

/**
 * @schema KinesisAnalyticsOutputDescription
 */
export interface KinesisAnalyticsOutputDescription {
  /**
   * @schema KinesisAnalyticsOutputDescription#OutputId
   */
  readonly outputId?: string;

  /**
   * @schema KinesisAnalyticsOutputDescription#Name
   */
  readonly name?: string;

  /**
   * @schema KinesisAnalyticsOutputDescription#KinesisStreamsOutputDescription
   */
  readonly kinesisStreamsOutputDescription?: KinesisAnalyticsKinesisStreamsOutputDescription;

  /**
   * @schema KinesisAnalyticsOutputDescription#KinesisFirehoseOutputDescription
   */
  readonly kinesisFirehoseOutputDescription?: KinesisAnalyticsKinesisFirehoseOutputDescription;

  /**
   * @schema KinesisAnalyticsOutputDescription#LambdaOutputDescription
   */
  readonly lambdaOutputDescription?: KinesisAnalyticsLambdaOutputDescription;

  /**
   * @schema KinesisAnalyticsOutputDescription#DestinationSchema
   */
  readonly destinationSchema?: KinesisAnalyticsDestinationSchema;

}

/**
 * @schema KinesisAnalyticsReferenceDataSourceDescription
 */
export interface KinesisAnalyticsReferenceDataSourceDescription {
  /**
   * @schema KinesisAnalyticsReferenceDataSourceDescription#ReferenceId
   */
  readonly referenceId: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceDescription#TableName
   */
  readonly tableName: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceDescription#S3ReferenceDataSourceDescription
   */
  readonly s3ReferenceDataSourceDescription: KinesisAnalyticsS3ReferenceDataSourceDescription;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceDescription#ReferenceSchema
   */
  readonly referenceSchema?: KinesisAnalyticsSourceSchema;

}

/**
 * @schema KinesisAnalyticsCloudWatchLoggingOptionDescription
 */
export interface KinesisAnalyticsCloudWatchLoggingOptionDescription {
  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionDescription#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId?: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionDescription#LogStreamARN
   */
  readonly logStreamArn: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionDescription#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisAnalyticsRecordFormat
 */
export interface KinesisAnalyticsRecordFormat {
  /**
   * @schema KinesisAnalyticsRecordFormat#RecordFormatType
   */
  readonly recordFormatType: string;

  /**
   * @schema KinesisAnalyticsRecordFormat#MappingParameters
   */
  readonly mappingParameters?: KinesisAnalyticsMappingParameters;

}

/**
 * @schema KinesisAnalyticsRecordColumn
 */
export interface KinesisAnalyticsRecordColumn {
  /**
   * @schema KinesisAnalyticsRecordColumn#Name
   */
  readonly name: string;

  /**
   * @schema KinesisAnalyticsRecordColumn#Mapping
   */
  readonly mapping?: string;

  /**
   * @schema KinesisAnalyticsRecordColumn#SqlType
   */
  readonly sqlType: string;

}

/**
 * @schema KinesisAnalyticsInputUpdate
 */
export interface KinesisAnalyticsInputUpdate {
  /**
   * @schema KinesisAnalyticsInputUpdate#InputId
   */
  readonly inputId: string;

  /**
   * @schema KinesisAnalyticsInputUpdate#NamePrefixUpdate
   */
  readonly namePrefixUpdate?: string;

  /**
   * @schema KinesisAnalyticsInputUpdate#InputProcessingConfigurationUpdate
   */
  readonly inputProcessingConfigurationUpdate?: KinesisAnalyticsInputProcessingConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsInputUpdate#KinesisStreamsInputUpdate
   */
  readonly kinesisStreamsInputUpdate?: KinesisAnalyticsKinesisStreamsInputUpdate;

  /**
   * @schema KinesisAnalyticsInputUpdate#KinesisFirehoseInputUpdate
   */
  readonly kinesisFirehoseInputUpdate?: KinesisAnalyticsKinesisFirehoseInputUpdate;

  /**
   * @schema KinesisAnalyticsInputUpdate#InputSchemaUpdate
   */
  readonly inputSchemaUpdate?: KinesisAnalyticsInputSchemaUpdate;

  /**
   * @schema KinesisAnalyticsInputUpdate#InputParallelismUpdate
   */
  readonly inputParallelismUpdate?: KinesisAnalyticsInputParallelismUpdate;

}

/**
 * @schema KinesisAnalyticsOutputUpdate
 */
export interface KinesisAnalyticsOutputUpdate {
  /**
   * @schema KinesisAnalyticsOutputUpdate#OutputId
   */
  readonly outputId: string;

  /**
   * @schema KinesisAnalyticsOutputUpdate#NameUpdate
   */
  readonly nameUpdate?: string;

  /**
   * @schema KinesisAnalyticsOutputUpdate#KinesisStreamsOutputUpdate
   */
  readonly kinesisStreamsOutputUpdate?: KinesisAnalyticsKinesisStreamsOutputUpdate;

  /**
   * @schema KinesisAnalyticsOutputUpdate#KinesisFirehoseOutputUpdate
   */
  readonly kinesisFirehoseOutputUpdate?: KinesisAnalyticsKinesisFirehoseOutputUpdate;

  /**
   * @schema KinesisAnalyticsOutputUpdate#LambdaOutputUpdate
   */
  readonly lambdaOutputUpdate?: KinesisAnalyticsLambdaOutputUpdate;

  /**
   * @schema KinesisAnalyticsOutputUpdate#DestinationSchemaUpdate
   */
  readonly destinationSchemaUpdate?: KinesisAnalyticsDestinationSchema;

}

/**
 * @schema KinesisAnalyticsReferenceDataSourceUpdate
 */
export interface KinesisAnalyticsReferenceDataSourceUpdate {
  /**
   * @schema KinesisAnalyticsReferenceDataSourceUpdate#ReferenceId
   */
  readonly referenceId: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceUpdate#TableNameUpdate
   */
  readonly tableNameUpdate?: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceUpdate#S3ReferenceDataSourceUpdate
   */
  readonly s3ReferenceDataSourceUpdate?: KinesisAnalyticsS3ReferenceDataSourceUpdate;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceUpdate#ReferenceSchemaUpdate
   */
  readonly referenceSchemaUpdate?: KinesisAnalyticsSourceSchema;

}

/**
 * @schema KinesisAnalyticsCloudWatchLoggingOptionUpdate
 */
export interface KinesisAnalyticsCloudWatchLoggingOptionUpdate {
  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionUpdate#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionUpdate#LogStreamARNUpdate
   */
  readonly logStreamArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * @schema KinesisAnalyticsInputProcessingConfigurationDescription
 */
export interface KinesisAnalyticsInputProcessingConfigurationDescription {
  /**
   * @schema KinesisAnalyticsInputProcessingConfigurationDescription#InputLambdaProcessorDescription
   */
  readonly inputLambdaProcessorDescription?: KinesisAnalyticsInputLambdaProcessorDescription;

}

/**
 * @schema KinesisAnalyticsKinesisStreamsInputDescription
 */
export interface KinesisAnalyticsKinesisStreamsInputDescription {
  /**
   * @schema KinesisAnalyticsKinesisStreamsInputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsKinesisFirehoseInputDescription
 */
export interface KinesisAnalyticsKinesisFirehoseInputDescription {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseInputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsKinesisStreamsOutputDescription
 */
export interface KinesisAnalyticsKinesisStreamsOutputDescription {
  /**
   * @schema KinesisAnalyticsKinesisStreamsOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsKinesisFirehoseOutputDescription
 */
export interface KinesisAnalyticsKinesisFirehoseOutputDescription {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsLambdaOutputDescription
 */
export interface KinesisAnalyticsLambdaOutputDescription {
  /**
   * @schema KinesisAnalyticsLambdaOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsLambdaOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsS3ReferenceDataSourceDescription
 */
export interface KinesisAnalyticsS3ReferenceDataSourceDescription {
  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceDescription#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceDescription#FileKey
   */
  readonly fileKey: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceDescription#ReferenceRoleARN
   */
  readonly referenceRoleArn: string;

}

/**
 * @schema KinesisAnalyticsMappingParameters
 */
export interface KinesisAnalyticsMappingParameters {
  /**
   * @schema KinesisAnalyticsMappingParameters#JSONMappingParameters
   */
  readonly jsonMappingParameters?: KinesisAnalyticsJsonMappingParameters;

  /**
   * @schema KinesisAnalyticsMappingParameters#CSVMappingParameters
   */
  readonly csvMappingParameters?: KinesisAnalyticsCsvMappingParameters;

}

/**
 * @schema KinesisAnalyticsInputProcessingConfigurationUpdate
 */
export interface KinesisAnalyticsInputProcessingConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsInputProcessingConfigurationUpdate#InputLambdaProcessorUpdate
   */
  readonly inputLambdaProcessorUpdate: KinesisAnalyticsInputLambdaProcessorUpdate;

}

/**
 * @schema KinesisAnalyticsKinesisStreamsInputUpdate
 */
export interface KinesisAnalyticsKinesisStreamsInputUpdate {
  /**
   * @schema KinesisAnalyticsKinesisStreamsInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsInputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * @schema KinesisAnalyticsKinesisFirehoseInputUpdate
 */
export interface KinesisAnalyticsKinesisFirehoseInputUpdate {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseInputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * @schema KinesisAnalyticsInputSchemaUpdate
 */
export interface KinesisAnalyticsInputSchemaUpdate {
  /**
   * @schema KinesisAnalyticsInputSchemaUpdate#RecordFormatUpdate
   */
  readonly recordFormatUpdate?: KinesisAnalyticsRecordFormat;

  /**
   * @schema KinesisAnalyticsInputSchemaUpdate#RecordEncodingUpdate
   */
  readonly recordEncodingUpdate?: string;

  /**
   * @schema KinesisAnalyticsInputSchemaUpdate#RecordColumnUpdates
   */
  readonly recordColumnUpdates?: KinesisAnalyticsRecordColumn[];

}

/**
 * @schema KinesisAnalyticsInputParallelismUpdate
 */
export interface KinesisAnalyticsInputParallelismUpdate {
  /**
   * @schema KinesisAnalyticsInputParallelismUpdate#CountUpdate
   */
  readonly countUpdate?: number;

}

/**
 * @schema KinesisAnalyticsKinesisStreamsOutputUpdate
 */
export interface KinesisAnalyticsKinesisStreamsOutputUpdate {
  /**
   * @schema KinesisAnalyticsKinesisStreamsOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsOutputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * @schema KinesisAnalyticsKinesisFirehoseOutputUpdate
 */
export interface KinesisAnalyticsKinesisFirehoseOutputUpdate {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * @schema KinesisAnalyticsLambdaOutputUpdate
 */
export interface KinesisAnalyticsLambdaOutputUpdate {
  /**
   * @schema KinesisAnalyticsLambdaOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsLambdaOutputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * @schema KinesisAnalyticsS3ReferenceDataSourceUpdate
 */
export interface KinesisAnalyticsS3ReferenceDataSourceUpdate {
  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceUpdate#BucketARNUpdate
   */
  readonly bucketArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceUpdate#FileKeyUpdate
   */
  readonly fileKeyUpdate?: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceUpdate#ReferenceRoleARNUpdate
   */
  readonly referenceRoleArnUpdate?: string;

}

/**
 * @schema KinesisAnalyticsInputLambdaProcessorDescription
 */
export interface KinesisAnalyticsInputLambdaProcessorDescription {
  /**
   * @schema KinesisAnalyticsInputLambdaProcessorDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsInputLambdaProcessorDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisAnalyticsJsonMappingParameters
 */
export interface KinesisAnalyticsJsonMappingParameters {
  /**
   * @schema KinesisAnalyticsJsonMappingParameters#RecordRowPath
   */
  readonly recordRowPath: string;

}

/**
 * @schema KinesisAnalyticsCsvMappingParameters
 */
export interface KinesisAnalyticsCsvMappingParameters {
  /**
   * @schema KinesisAnalyticsCsvMappingParameters#RecordRowDelimiter
   */
  readonly recordRowDelimiter: string;

  /**
   * @schema KinesisAnalyticsCsvMappingParameters#RecordColumnDelimiter
   */
  readonly recordColumnDelimiter: string;

}

/**
 * @schema KinesisAnalyticsInputLambdaProcessorUpdate
 */
export interface KinesisAnalyticsInputLambdaProcessorUpdate {
  /**
   * @schema KinesisAnalyticsInputLambdaProcessorUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsInputLambdaProcessorUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}
