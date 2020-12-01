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
   * @schema CreateApplicationRequest#Inputs
   */
  readonly inputs?: Input[];

  /**
   * @schema CreateApplicationRequest#Outputs
   */
  readonly outputs?: Output[];

  /**
   * @schema CreateApplicationRequest#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  /**
   * @schema CreateApplicationRequest#ApplicationCode
   */
  readonly applicationCode?: string;

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
   * @schema CreateApplicationResponse#ApplicationSummary
   */
  readonly applicationSummary: ApplicationSummary;

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
}

/**
 * @schema DescribeApplicationRequest
 */
export interface DescribeApplicationRequest {
  /**
   * @schema DescribeApplicationRequest#ApplicationName
   */
  readonly applicationName: string;

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
 * @schema DiscoverInputSchemaRequest
 */
export interface DiscoverInputSchemaRequest {
  /**
   * @schema DiscoverInputSchemaRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema DiscoverInputSchemaRequest#RoleARN
   */
  readonly roleArn?: string;

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
 * @schema ListApplicationsRequest
 */
export interface ListApplicationsRequest {
  /**
   * @schema ListApplicationsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListApplicationsRequest#ExclusiveStartApplicationName
   */
  readonly exclusiveStartApplicationName?: string;

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
   * @schema ListApplicationsResponse#HasMoreApplications
   */
  readonly hasMoreApplications: boolean;

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
   * @schema StartApplicationRequest#InputConfigurations
   */
  readonly inputConfigurations: InputConfiguration[];

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
   * @schema UpdateApplicationRequest#ApplicationUpdate
   */
  readonly applicationUpdate: ApplicationUpdate;

}

/**
 * @schema UpdateApplicationResponse
 */
export interface UpdateApplicationResponse {
}

/**
 * @schema CloudWatchLoggingOption
 */
export interface CloudWatchLoggingOption {
  /**
   * @schema CloudWatchLoggingOption#LogStreamARN
   */
  readonly logStreamArn: string;

  /**
   * @schema CloudWatchLoggingOption#RoleARN
   */
  readonly roleArn: string;

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
 * @schema InputProcessingConfiguration
 */
export interface InputProcessingConfiguration {
  /**
   * @schema InputProcessingConfiguration#InputLambdaProcessor
   */
  readonly inputLambdaProcessor: InputLambdaProcessor;

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

}

/**
 * @schema ApplicationDetail
 */
export interface ApplicationDetail {
  /**
   * @schema ApplicationDetail#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ApplicationDetail#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema ApplicationDetail#ApplicationARN
   */
  readonly applicationArn: string;

  /**
   * @schema ApplicationDetail#ApplicationStatus
   */
  readonly applicationStatus: string;

  /**
   * @schema ApplicationDetail#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema ApplicationDetail#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema ApplicationDetail#InputDescriptions
   */
  readonly inputDescriptions?: InputDescription[];

  /**
   * @schema ApplicationDetail#OutputDescriptions
   */
  readonly outputDescriptions?: OutputDescription[];

  /**
   * @schema ApplicationDetail#ReferenceDataSourceDescriptions
   */
  readonly referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];

  /**
   * @schema ApplicationDetail#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * @schema ApplicationDetail#ApplicationCode
   */
  readonly applicationCode?: string;

  /**
   * @schema ApplicationDetail#ApplicationVersionId
   */
  readonly applicationVersionId: number;

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
   * @schema S3Configuration#RoleARN
   */
  readonly roleArn: string;

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
 * @schema InputConfiguration
 */
export interface InputConfiguration {
  /**
   * @schema InputConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema InputConfiguration#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration: InputStartingPositionConfiguration;

}

/**
 * @schema ApplicationUpdate
 */
export interface ApplicationUpdate {
  /**
   * @schema ApplicationUpdate#InputUpdates
   */
  readonly inputUpdates?: InputUpdate[];

  /**
   * @schema ApplicationUpdate#ApplicationCodeUpdate
   */
  readonly applicationCodeUpdate?: string;

  /**
   * @schema ApplicationUpdate#OutputUpdates
   */
  readonly outputUpdates?: OutputUpdate[];

  /**
   * @schema ApplicationUpdate#ReferenceDataSourceUpdates
   */
  readonly referenceDataSourceUpdates?: ReferenceDataSourceUpdate[];

  /**
   * @schema ApplicationUpdate#CloudWatchLoggingOptionUpdates
   */
  readonly cloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

}

/**
 * @schema KinesisStreamsInput
 */
export interface KinesisStreamsInput {
  /**
   * @schema KinesisStreamsInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisStreamsInput#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisFirehoseInput
 */
export interface KinesisFirehoseInput {
  /**
   * @schema KinesisFirehoseInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisFirehoseInput#RoleARN
   */
  readonly roleArn: string;

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
 * @schema InputLambdaProcessor
 */
export interface InputLambdaProcessor {
  /**
   * @schema InputLambdaProcessor#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema InputLambdaProcessor#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisStreamsOutput
 */
export interface KinesisStreamsOutput {
  /**
   * @schema KinesisStreamsOutput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisStreamsOutput#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema KinesisFirehoseOutput
 */
export interface KinesisFirehoseOutput {
  /**
   * @schema KinesisFirehoseOutput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisFirehoseOutput#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema LambdaOutput
 */
export interface LambdaOutput {
  /**
   * @schema LambdaOutput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema LambdaOutput#RoleARN
   */
  readonly roleArn: string;

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
 * @schema S3ReferenceDataSource
 */
export interface S3ReferenceDataSource {
  /**
   * @schema S3ReferenceDataSource#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema S3ReferenceDataSource#FileKey
   */
  readonly fileKey: string;

  /**
   * @schema S3ReferenceDataSource#ReferenceRoleARN
   */
  readonly referenceRoleArn: string;

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
  readonly roleArn: string;

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

  /**
   * @schema CloudWatchLoggingOptionUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

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
 * @schema KinesisStreamsInputDescription
 */
export interface KinesisStreamsInputDescription {
  /**
   * @schema KinesisStreamsInputDescription#ResourceARN
   */
  readonly resourceArn?: string;

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
  readonly resourceArn?: string;

  /**
   * @schema KinesisFirehoseInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema KinesisStreamsOutputDescription
 */
export interface KinesisStreamsOutputDescription {
  /**
   * @schema KinesisStreamsOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

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
  readonly resourceArn?: string;

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
  readonly resourceArn?: string;

  /**
   * @schema LambdaOutputDescription#RoleARN
   */
  readonly roleArn?: string;

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
  readonly referenceRoleArn: string;

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
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisStreamsInputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * @schema KinesisFirehoseInputUpdate
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * @schema KinesisFirehoseInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisFirehoseInputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

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
  readonly countUpdate?: number;

}

/**
 * @schema KinesisStreamsOutputUpdate
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * @schema KinesisStreamsOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisStreamsOutputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * @schema KinesisFirehoseOutputUpdate
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * @schema KinesisFirehoseOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisFirehoseOutputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * @schema LambdaOutputUpdate
 */
export interface LambdaOutputUpdate {
  /**
   * @schema LambdaOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema LambdaOutputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

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

  /**
   * @schema S3ReferenceDataSourceUpdate#ReferenceRoleARNUpdate
   */
  readonly referenceRoleArnUpdate?: string;

}

/**
 * @schema InputLambdaProcessorDescription
 */
export interface InputLambdaProcessorDescription {
  /**
   * @schema InputLambdaProcessorDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema InputLambdaProcessorDescription#RoleARN
   */
  readonly roleArn?: string;

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
 * @schema InputLambdaProcessorUpdate
 */
export interface InputLambdaProcessorUpdate {
  /**
   * @schema InputLambdaProcessorUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema InputLambdaProcessorUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}
