/**
 * @schema CreateDeliveryStreamInput
 */
export interface CreateDeliveryStreamInput {
  /**
   * @schema CreateDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema CreateDeliveryStreamInput#DeliveryStreamType
   */
  readonly deliveryStreamType?: string;

  /**
   * @schema CreateDeliveryStreamInput#KinesisStreamSourceConfiguration
   */
  readonly kinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;

  /**
   * @schema CreateDeliveryStreamInput#DeliveryStreamEncryptionConfigurationInput
   */
  readonly deliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;

  /**
   * @schema CreateDeliveryStreamInput#S3DestinationConfiguration
   */
  readonly s3DestinationConfiguration?: S3DestinationConfiguration;

  /**
   * @schema CreateDeliveryStreamInput#ExtendedS3DestinationConfiguration
   */
  readonly extendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;

  /**
   * @schema CreateDeliveryStreamInput#RedshiftDestinationConfiguration
   */
  readonly redshiftDestinationConfiguration?: RedshiftDestinationConfiguration;

  /**
   * @schema CreateDeliveryStreamInput#ElasticsearchDestinationConfiguration
   */
  readonly elasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;

  /**
   * @schema CreateDeliveryStreamInput#SplunkDestinationConfiguration
   */
  readonly splunkDestinationConfiguration?: SplunkDestinationConfiguration;

  /**
   * @schema CreateDeliveryStreamInput#HttpEndpointDestinationConfiguration
   */
  readonly httpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;

  /**
   * @schema CreateDeliveryStreamInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDeliveryStreamOutput
 */
export interface CreateDeliveryStreamOutput {
  /**
   * @schema CreateDeliveryStreamOutput#DeliveryStreamARN
   */
  readonly deliveryStreamArn?: string;

}

/**
 * @schema DeleteDeliveryStreamInput
 */
export interface DeleteDeliveryStreamInput {
  /**
   * @schema DeleteDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema DeleteDeliveryStreamInput#AllowForceDelete
   */
  readonly allowForceDelete?: boolean;

}

/**
 * @schema DeleteDeliveryStreamOutput
 */
export interface DeleteDeliveryStreamOutput {
}

/**
 * @schema DescribeDeliveryStreamInput
 */
export interface DescribeDeliveryStreamInput {
  /**
   * @schema DescribeDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema DescribeDeliveryStreamInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeDeliveryStreamInput#ExclusiveStartDestinationId
   */
  readonly exclusiveStartDestinationId?: string;

}

/**
 * @schema DescribeDeliveryStreamOutput
 */
export interface DescribeDeliveryStreamOutput {
  /**
   * @schema DescribeDeliveryStreamOutput#DeliveryStreamDescription
   */
  readonly deliveryStreamDescription: DeliveryStreamDescription;

}

/**
 * @schema ListDeliveryStreamsInput
 */
export interface ListDeliveryStreamsInput {
  /**
   * @schema ListDeliveryStreamsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListDeliveryStreamsInput#DeliveryStreamType
   */
  readonly deliveryStreamType?: string;

  /**
   * @schema ListDeliveryStreamsInput#ExclusiveStartDeliveryStreamName
   */
  readonly exclusiveStartDeliveryStreamName?: string;

}

/**
 * @schema ListDeliveryStreamsOutput
 */
export interface ListDeliveryStreamsOutput {
  /**
   * @schema ListDeliveryStreamsOutput#DeliveryStreamNames
   */
  readonly deliveryStreamNames: string[];

  /**
   * @schema ListDeliveryStreamsOutput#HasMoreDeliveryStreams
   */
  readonly hasMoreDeliveryStreams: boolean;

}

/**
 * @schema ListTagsForDeliveryStreamInput
 */
export interface ListTagsForDeliveryStreamInput {
  /**
   * @schema ListTagsForDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema ListTagsForDeliveryStreamInput#ExclusiveStartTagKey
   */
  readonly exclusiveStartTagKey?: string;

  /**
   * @schema ListTagsForDeliveryStreamInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListTagsForDeliveryStreamOutput
 */
export interface ListTagsForDeliveryStreamOutput {
  /**
   * @schema ListTagsForDeliveryStreamOutput#Tags
   */
  readonly tags: Tag[];

  /**
   * @schema ListTagsForDeliveryStreamOutput#HasMoreTags
   */
  readonly hasMoreTags: boolean;

}

/**
 * @schema PutRecordInput
 */
export interface PutRecordInput {
  /**
   * @schema PutRecordInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema PutRecordInput#Record
   */
  readonly record: Record;

}

/**
 * @schema PutRecordOutput
 */
export interface PutRecordOutput {
  /**
   * @schema PutRecordOutput#RecordId
   */
  readonly recordId: string;

  /**
   * @schema PutRecordOutput#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema PutRecordBatchInput
 */
export interface PutRecordBatchInput {
  /**
   * @schema PutRecordBatchInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema PutRecordBatchInput#Records
   */
  readonly records: Record[];

}

/**
 * @schema PutRecordBatchOutput
 */
export interface PutRecordBatchOutput {
  /**
   * @schema PutRecordBatchOutput#FailedPutCount
   */
  readonly failedPutCount: number;

  /**
   * @schema PutRecordBatchOutput#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema PutRecordBatchOutput#RequestResponses
   */
  readonly requestResponses: PutRecordBatchResponseEntry[];

}

/**
 * @schema StartDeliveryStreamEncryptionInput
 */
export interface StartDeliveryStreamEncryptionInput {
  /**
   * @schema StartDeliveryStreamEncryptionInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema StartDeliveryStreamEncryptionInput#DeliveryStreamEncryptionConfigurationInput
   */
  readonly deliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;

}

/**
 * @schema StartDeliveryStreamEncryptionOutput
 */
export interface StartDeliveryStreamEncryptionOutput {
}

/**
 * @schema StopDeliveryStreamEncryptionInput
 */
export interface StopDeliveryStreamEncryptionInput {
  /**
   * @schema StopDeliveryStreamEncryptionInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

}

/**
 * @schema StopDeliveryStreamEncryptionOutput
 */
export interface StopDeliveryStreamEncryptionOutput {
}

/**
 * @schema TagDeliveryStreamInput
 */
export interface TagDeliveryStreamInput {
  /**
   * @schema TagDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema TagDeliveryStreamInput#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagDeliveryStreamOutput
 */
export interface TagDeliveryStreamOutput {
}

/**
 * @schema UntagDeliveryStreamInput
 */
export interface UntagDeliveryStreamInput {
  /**
   * @schema UntagDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema UntagDeliveryStreamInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagDeliveryStreamOutput
 */
export interface UntagDeliveryStreamOutput {
}

/**
 * @schema UpdateDestinationInput
 */
export interface UpdateDestinationInput {
  /**
   * @schema UpdateDestinationInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema UpdateDestinationInput#CurrentDeliveryStreamVersionId
   */
  readonly currentDeliveryStreamVersionId: string;

  /**
   * @schema UpdateDestinationInput#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema UpdateDestinationInput#S3DestinationUpdate
   */
  readonly s3DestinationUpdate?: S3DestinationUpdate;

  /**
   * @schema UpdateDestinationInput#ExtendedS3DestinationUpdate
   */
  readonly extendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;

  /**
   * @schema UpdateDestinationInput#RedshiftDestinationUpdate
   */
  readonly redshiftDestinationUpdate?: RedshiftDestinationUpdate;

  /**
   * @schema UpdateDestinationInput#ElasticsearchDestinationUpdate
   */
  readonly elasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;

  /**
   * @schema UpdateDestinationInput#SplunkDestinationUpdate
   */
  readonly splunkDestinationUpdate?: SplunkDestinationUpdate;

  /**
   * @schema UpdateDestinationInput#HttpEndpointDestinationUpdate
   */
  readonly httpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;

}

/**
 * @schema UpdateDestinationOutput
 */
export interface UpdateDestinationOutput {
}

/**
 * @schema KinesisStreamSourceConfiguration
 */
export interface KinesisStreamSourceConfiguration {
  /**
   * @schema KinesisStreamSourceConfiguration#KinesisStreamARN
   */
  readonly kinesisStreamArn: string;

  /**
   * @schema KinesisStreamSourceConfiguration#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema DeliveryStreamEncryptionConfigurationInput
 */
export interface DeliveryStreamEncryptionConfigurationInput {
  /**
   * @schema DeliveryStreamEncryptionConfigurationInput#KeyARN
   */
  readonly keyArn?: string;

  /**
   * @schema DeliveryStreamEncryptionConfigurationInput#KeyType
   */
  readonly keyType: string;

}

/**
 * @schema S3DestinationConfiguration
 */
export interface S3DestinationConfiguration {
  /**
   * @schema S3DestinationConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema S3DestinationConfiguration#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema S3DestinationConfiguration#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3DestinationConfiguration#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema S3DestinationConfiguration#BufferingHints
   */
  readonly bufferingHints?: BufferingHints;

  /**
   * @schema S3DestinationConfiguration#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema S3DestinationConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

  /**
   * @schema S3DestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema ExtendedS3DestinationConfiguration
 */
export interface ExtendedS3DestinationConfiguration {
  /**
   * @schema ExtendedS3DestinationConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema ExtendedS3DestinationConfiguration#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema ExtendedS3DestinationConfiguration#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ExtendedS3DestinationConfiguration#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema ExtendedS3DestinationConfiguration#BufferingHints
   */
  readonly bufferingHints?: BufferingHints;

  /**
   * @schema ExtendedS3DestinationConfiguration#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema ExtendedS3DestinationConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

  /**
   * @schema ExtendedS3DestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @schema ExtendedS3DestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema ExtendedS3DestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema ExtendedS3DestinationConfiguration#S3BackupConfiguration
   */
  readonly s3BackupConfiguration?: S3DestinationConfiguration;

  /**
   * @schema ExtendedS3DestinationConfiguration#DataFormatConversionConfiguration
   */
  readonly dataFormatConversionConfiguration?: DataFormatConversionConfiguration;

}

/**
 * @schema RedshiftDestinationConfiguration
 */
export interface RedshiftDestinationConfiguration {
  /**
   * @schema RedshiftDestinationConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema RedshiftDestinationConfiguration#ClusterJDBCURL
   */
  readonly clusterJdbcurl: string;

  /**
   * @schema RedshiftDestinationConfiguration#CopyCommand
   */
  readonly copyCommand: CopyCommand;

  /**
   * @schema RedshiftDestinationConfiguration#Username
   */
  readonly username: string;

  /**
   * @schema RedshiftDestinationConfiguration#Password
   */
  readonly password: string;

  /**
   * @schema RedshiftDestinationConfiguration#RetryOptions
   */
  readonly retryOptions?: RedshiftRetryOptions;

  /**
   * @schema RedshiftDestinationConfiguration#S3Configuration
   */
  readonly s3Configuration: S3DestinationConfiguration;

  /**
   * @schema RedshiftDestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema RedshiftDestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema RedshiftDestinationConfiguration#S3BackupConfiguration
   */
  readonly s3BackupConfiguration?: S3DestinationConfiguration;

  /**
   * @schema RedshiftDestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema ElasticsearchDestinationConfiguration
 */
export interface ElasticsearchDestinationConfiguration {
  /**
   * @schema ElasticsearchDestinationConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema ElasticsearchDestinationConfiguration#DomainARN
   */
  readonly domainArn?: string;

  /**
   * @schema ElasticsearchDestinationConfiguration#ClusterEndpoint
   */
  readonly clusterEndpoint?: string;

  /**
   * @schema ElasticsearchDestinationConfiguration#IndexName
   */
  readonly indexName: string;

  /**
   * @schema ElasticsearchDestinationConfiguration#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema ElasticsearchDestinationConfiguration#IndexRotationPeriod
   */
  readonly indexRotationPeriod?: string;

  /**
   * @schema ElasticsearchDestinationConfiguration#BufferingHints
   */
  readonly bufferingHints?: ElasticsearchBufferingHints;

  /**
   * @schema ElasticsearchDestinationConfiguration#RetryOptions
   */
  readonly retryOptions?: ElasticsearchRetryOptions;

  /**
   * @schema ElasticsearchDestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema ElasticsearchDestinationConfiguration#S3Configuration
   */
  readonly s3Configuration: S3DestinationConfiguration;

  /**
   * @schema ElasticsearchDestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema ElasticsearchDestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @schema ElasticsearchDestinationConfiguration#VpcConfiguration
   */
  readonly vpcConfiguration?: VpcConfiguration;

}

/**
 * @schema SplunkDestinationConfiguration
 */
export interface SplunkDestinationConfiguration {
  /**
   * @schema SplunkDestinationConfiguration#HECEndpoint
   */
  readonly hecEndpoint: string;

  /**
   * @schema SplunkDestinationConfiguration#HECEndpointType
   */
  readonly hecEndpointType: string;

  /**
   * @schema SplunkDestinationConfiguration#HECToken
   */
  readonly hecToken: string;

  /**
   * @schema SplunkDestinationConfiguration#HECAcknowledgmentTimeoutInSeconds
   */
  readonly hecAcknowledgmentTimeoutInSeconds?: number;

  /**
   * @schema SplunkDestinationConfiguration#RetryOptions
   */
  readonly retryOptions?: SplunkRetryOptions;

  /**
   * @schema SplunkDestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema SplunkDestinationConfiguration#S3Configuration
   */
  readonly s3Configuration: S3DestinationConfiguration;

  /**
   * @schema SplunkDestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema SplunkDestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema HttpEndpointDestinationConfiguration
 */
export interface HttpEndpointDestinationConfiguration {
  /**
   * @schema HttpEndpointDestinationConfiguration#EndpointConfiguration
   */
  readonly endpointConfiguration: HttpEndpointConfiguration;

  /**
   * @schema HttpEndpointDestinationConfiguration#BufferingHints
   */
  readonly bufferingHints?: HttpEndpointBufferingHints;

  /**
   * @schema HttpEndpointDestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @schema HttpEndpointDestinationConfiguration#RequestConfiguration
   */
  readonly requestConfiguration?: HttpEndpointRequestConfiguration;

  /**
   * @schema HttpEndpointDestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema HttpEndpointDestinationConfiguration#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema HttpEndpointDestinationConfiguration#RetryOptions
   */
  readonly retryOptions?: HttpEndpointRetryOptions;

  /**
   * @schema HttpEndpointDestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema HttpEndpointDestinationConfiguration#S3Configuration
   */
  readonly s3Configuration: S3DestinationConfiguration;

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
 * @schema DeliveryStreamDescription
 */
export interface DeliveryStreamDescription {
  /**
   * @schema DeliveryStreamDescription#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema DeliveryStreamDescription#DeliveryStreamARN
   */
  readonly deliveryStreamArn: string;

  /**
   * @schema DeliveryStreamDescription#DeliveryStreamStatus
   */
  readonly deliveryStreamStatus: string;

  /**
   * @schema DeliveryStreamDescription#FailureDescription
   */
  readonly failureDescription?: FailureDescription;

  /**
   * @schema DeliveryStreamDescription#DeliveryStreamEncryptionConfiguration
   */
  readonly deliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;

  /**
   * @schema DeliveryStreamDescription#DeliveryStreamType
   */
  readonly deliveryStreamType: string;

  /**
   * @schema DeliveryStreamDescription#VersionId
   */
  readonly versionId: string;

  /**
   * @schema DeliveryStreamDescription#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema DeliveryStreamDescription#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema DeliveryStreamDescription#Source
   */
  readonly source?: SourceDescription;

  /**
   * @schema DeliveryStreamDescription#Destinations
   */
  readonly destinations: DestinationDescription[];

  /**
   * @schema DeliveryStreamDescription#HasMoreDestinations
   */
  readonly hasMoreDestinations: boolean;

}

/**
 * @schema Record
 */
export interface Record {
  /**
   * @schema Record#Data
   */
  readonly data: any;

}

/**
 * @schema PutRecordBatchResponseEntry
 */
export interface PutRecordBatchResponseEntry {
  /**
   * @schema PutRecordBatchResponseEntry#RecordId
   */
  readonly recordId?: string;

  /**
   * @schema PutRecordBatchResponseEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema PutRecordBatchResponseEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema S3DestinationUpdate
 */
export interface S3DestinationUpdate {
  /**
   * @schema S3DestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema S3DestinationUpdate#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema S3DestinationUpdate#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3DestinationUpdate#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema S3DestinationUpdate#BufferingHints
   */
  readonly bufferingHints?: BufferingHints;

  /**
   * @schema S3DestinationUpdate#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema S3DestinationUpdate#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

  /**
   * @schema S3DestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema ExtendedS3DestinationUpdate
 */
export interface ExtendedS3DestinationUpdate {
  /**
   * @schema ExtendedS3DestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema ExtendedS3DestinationUpdate#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema ExtendedS3DestinationUpdate#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ExtendedS3DestinationUpdate#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema ExtendedS3DestinationUpdate#BufferingHints
   */
  readonly bufferingHints?: BufferingHints;

  /**
   * @schema ExtendedS3DestinationUpdate#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema ExtendedS3DestinationUpdate#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

  /**
   * @schema ExtendedS3DestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @schema ExtendedS3DestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema ExtendedS3DestinationUpdate#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema ExtendedS3DestinationUpdate#S3BackupUpdate
   */
  readonly s3BackupUpdate?: S3DestinationUpdate;

  /**
   * @schema ExtendedS3DestinationUpdate#DataFormatConversionConfiguration
   */
  readonly dataFormatConversionConfiguration?: DataFormatConversionConfiguration;

}

/**
 * @schema RedshiftDestinationUpdate
 */
export interface RedshiftDestinationUpdate {
  /**
   * @schema RedshiftDestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema RedshiftDestinationUpdate#ClusterJDBCURL
   */
  readonly clusterJdbcurl?: string;

  /**
   * @schema RedshiftDestinationUpdate#CopyCommand
   */
  readonly copyCommand?: CopyCommand;

  /**
   * @schema RedshiftDestinationUpdate#Username
   */
  readonly username?: string;

  /**
   * @schema RedshiftDestinationUpdate#Password
   */
  readonly password?: string;

  /**
   * @schema RedshiftDestinationUpdate#RetryOptions
   */
  readonly retryOptions?: RedshiftRetryOptions;

  /**
   * @schema RedshiftDestinationUpdate#S3Update
   */
  readonly s3Update?: S3DestinationUpdate;

  /**
   * @schema RedshiftDestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema RedshiftDestinationUpdate#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema RedshiftDestinationUpdate#S3BackupUpdate
   */
  readonly s3BackupUpdate?: S3DestinationUpdate;

  /**
   * @schema RedshiftDestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema ElasticsearchDestinationUpdate
 */
export interface ElasticsearchDestinationUpdate {
  /**
   * @schema ElasticsearchDestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema ElasticsearchDestinationUpdate#DomainARN
   */
  readonly domainArn?: string;

  /**
   * @schema ElasticsearchDestinationUpdate#ClusterEndpoint
   */
  readonly clusterEndpoint?: string;

  /**
   * @schema ElasticsearchDestinationUpdate#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema ElasticsearchDestinationUpdate#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema ElasticsearchDestinationUpdate#IndexRotationPeriod
   */
  readonly indexRotationPeriod?: string;

  /**
   * @schema ElasticsearchDestinationUpdate#BufferingHints
   */
  readonly bufferingHints?: ElasticsearchBufferingHints;

  /**
   * @schema ElasticsearchDestinationUpdate#RetryOptions
   */
  readonly retryOptions?: ElasticsearchRetryOptions;

  /**
   * @schema ElasticsearchDestinationUpdate#S3Update
   */
  readonly s3Update?: S3DestinationUpdate;

  /**
   * @schema ElasticsearchDestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema ElasticsearchDestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema SplunkDestinationUpdate
 */
export interface SplunkDestinationUpdate {
  /**
   * @schema SplunkDestinationUpdate#HECEndpoint
   */
  readonly hecEndpoint?: string;

  /**
   * @schema SplunkDestinationUpdate#HECEndpointType
   */
  readonly hecEndpointType?: string;

  /**
   * @schema SplunkDestinationUpdate#HECToken
   */
  readonly hecToken?: string;

  /**
   * @schema SplunkDestinationUpdate#HECAcknowledgmentTimeoutInSeconds
   */
  readonly hecAcknowledgmentTimeoutInSeconds?: number;

  /**
   * @schema SplunkDestinationUpdate#RetryOptions
   */
  readonly retryOptions?: SplunkRetryOptions;

  /**
   * @schema SplunkDestinationUpdate#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema SplunkDestinationUpdate#S3Update
   */
  readonly s3Update?: S3DestinationUpdate;

  /**
   * @schema SplunkDestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema SplunkDestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema HttpEndpointDestinationUpdate
 */
export interface HttpEndpointDestinationUpdate {
  /**
   * @schema HttpEndpointDestinationUpdate#EndpointConfiguration
   */
  readonly endpointConfiguration?: HttpEndpointConfiguration;

  /**
   * @schema HttpEndpointDestinationUpdate#BufferingHints
   */
  readonly bufferingHints?: HttpEndpointBufferingHints;

  /**
   * @schema HttpEndpointDestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @schema HttpEndpointDestinationUpdate#RequestConfiguration
   */
  readonly requestConfiguration?: HttpEndpointRequestConfiguration;

  /**
   * @schema HttpEndpointDestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema HttpEndpointDestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema HttpEndpointDestinationUpdate#RetryOptions
   */
  readonly retryOptions?: HttpEndpointRetryOptions;

  /**
   * @schema HttpEndpointDestinationUpdate#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema HttpEndpointDestinationUpdate#S3Update
   */
  readonly s3Update?: S3DestinationUpdate;

}

/**
 * @schema BufferingHints
 */
export interface BufferingHints {
  /**
   * @schema BufferingHints#SizeInMBs
   */
  readonly sizeInMBs?: number;

  /**
   * @schema BufferingHints#IntervalInSeconds
   */
  readonly intervalInSeconds?: number;

}

/**
 * @schema EncryptionConfiguration
 */
export interface EncryptionConfiguration {
  /**
   * @schema EncryptionConfiguration#NoEncryptionConfig
   */
  readonly noEncryptionConfig?: string;

  /**
   * @schema EncryptionConfiguration#KMSEncryptionConfig
   */
  readonly kmsEncryptionConfig?: KmsEncryptionConfig;

}

/**
 * @schema CloudWatchLoggingOptions
 */
export interface CloudWatchLoggingOptions {
  /**
   * @schema CloudWatchLoggingOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudWatchLoggingOptions#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema CloudWatchLoggingOptions#LogStreamName
   */
  readonly logStreamName?: string;

}

/**
 * @schema ProcessingConfiguration
 */
export interface ProcessingConfiguration {
  /**
   * @schema ProcessingConfiguration#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ProcessingConfiguration#Processors
   */
  readonly processors?: Processor[];

}

/**
 * @schema DataFormatConversionConfiguration
 */
export interface DataFormatConversionConfiguration {
  /**
   * @schema DataFormatConversionConfiguration#SchemaConfiguration
   */
  readonly schemaConfiguration?: SchemaConfiguration;

  /**
   * @schema DataFormatConversionConfiguration#InputFormatConfiguration
   */
  readonly inputFormatConfiguration?: InputFormatConfiguration;

  /**
   * @schema DataFormatConversionConfiguration#OutputFormatConfiguration
   */
  readonly outputFormatConfiguration?: OutputFormatConfiguration;

  /**
   * @schema DataFormatConversionConfiguration#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema CopyCommand
 */
export interface CopyCommand {
  /**
   * @schema CopyCommand#DataTableName
   */
  readonly dataTableName: string;

  /**
   * @schema CopyCommand#DataTableColumns
   */
  readonly dataTableColumns?: string;

  /**
   * @schema CopyCommand#CopyOptions
   */
  readonly copyOptions?: string;

}

/**
 * @schema RedshiftRetryOptions
 */
export interface RedshiftRetryOptions {
  /**
   * @schema RedshiftRetryOptions#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema ElasticsearchBufferingHints
 */
export interface ElasticsearchBufferingHints {
  /**
   * @schema ElasticsearchBufferingHints#IntervalInSeconds
   */
  readonly intervalInSeconds?: number;

  /**
   * @schema ElasticsearchBufferingHints#SizeInMBs
   */
  readonly sizeInMBs?: number;

}

/**
 * @schema ElasticsearchRetryOptions
 */
export interface ElasticsearchRetryOptions {
  /**
   * @schema ElasticsearchRetryOptions#DurationInSeconds
   */
  readonly durationInSeconds?: number;

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
   * @schema VpcConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema VpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema SplunkRetryOptions
 */
export interface SplunkRetryOptions {
  /**
   * @schema SplunkRetryOptions#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema HttpEndpointConfiguration
 */
export interface HttpEndpointConfiguration {
  /**
   * @schema HttpEndpointConfiguration#Url
   */
  readonly url: string;

  /**
   * @schema HttpEndpointConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema HttpEndpointConfiguration#AccessKey
   */
  readonly accessKey?: string;

}

/**
 * @schema HttpEndpointBufferingHints
 */
export interface HttpEndpointBufferingHints {
  /**
   * @schema HttpEndpointBufferingHints#SizeInMBs
   */
  readonly sizeInMBs?: number;

  /**
   * @schema HttpEndpointBufferingHints#IntervalInSeconds
   */
  readonly intervalInSeconds?: number;

}

/**
 * @schema HttpEndpointRequestConfiguration
 */
export interface HttpEndpointRequestConfiguration {
  /**
   * @schema HttpEndpointRequestConfiguration#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema HttpEndpointRequestConfiguration#CommonAttributes
   */
  readonly commonAttributes?: HttpEndpointCommonAttribute[];

}

/**
 * @schema HttpEndpointRetryOptions
 */
export interface HttpEndpointRetryOptions {
  /**
   * @schema HttpEndpointRetryOptions#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema FailureDescription
 */
export interface FailureDescription {
  /**
   * @schema FailureDescription#Type
   */
  readonly type: string;

  /**
   * @schema FailureDescription#Details
   */
  readonly details: string;

}

/**
 * @schema DeliveryStreamEncryptionConfiguration
 */
export interface DeliveryStreamEncryptionConfiguration {
  /**
   * @schema DeliveryStreamEncryptionConfiguration#KeyARN
   */
  readonly keyArn?: string;

  /**
   * @schema DeliveryStreamEncryptionConfiguration#KeyType
   */
  readonly keyType?: string;

  /**
   * @schema DeliveryStreamEncryptionConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema DeliveryStreamEncryptionConfiguration#FailureDescription
   */
  readonly failureDescription?: FailureDescription;

}

/**
 * @schema SourceDescription
 */
export interface SourceDescription {
  /**
   * @schema SourceDescription#KinesisStreamSourceDescription
   */
  readonly kinesisStreamSourceDescription?: KinesisStreamSourceDescription;

}

/**
 * @schema DestinationDescription
 */
export interface DestinationDescription {
  /**
   * @schema DestinationDescription#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema DestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription?: S3DestinationDescription;

  /**
   * @schema DestinationDescription#ExtendedS3DestinationDescription
   */
  readonly extendedS3DestinationDescription?: ExtendedS3DestinationDescription;

  /**
   * @schema DestinationDescription#RedshiftDestinationDescription
   */
  readonly redshiftDestinationDescription?: RedshiftDestinationDescription;

  /**
   * @schema DestinationDescription#ElasticsearchDestinationDescription
   */
  readonly elasticsearchDestinationDescription?: ElasticsearchDestinationDescription;

  /**
   * @schema DestinationDescription#SplunkDestinationDescription
   */
  readonly splunkDestinationDescription?: SplunkDestinationDescription;

  /**
   * @schema DestinationDescription#HttpEndpointDestinationDescription
   */
  readonly httpEndpointDestinationDescription?: HttpEndpointDestinationDescription;

}

/**
 * @schema KmsEncryptionConfig
 */
export interface KmsEncryptionConfig {
  /**
   * @schema KmsEncryptionConfig#AWSKMSKeyARN
   */
  readonly awskmsKeyArn: string;

}

/**
 * @schema Processor
 */
export interface Processor {
  /**
   * @schema Processor#Type
   */
  readonly type: string;

  /**
   * @schema Processor#Parameters
   */
  readonly parameters?: ProcessorParameter[];

}

/**
 * @schema SchemaConfiguration
 */
export interface SchemaConfiguration {
  /**
   * @schema SchemaConfiguration#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SchemaConfiguration#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema SchemaConfiguration#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema SchemaConfiguration#TableName
   */
  readonly tableName?: string;

  /**
   * @schema SchemaConfiguration#Region
   */
  readonly region?: string;

  /**
   * @schema SchemaConfiguration#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema InputFormatConfiguration
 */
export interface InputFormatConfiguration {
  /**
   * @schema InputFormatConfiguration#Deserializer
   */
  readonly deserializer?: Deserializer;

}

/**
 * @schema OutputFormatConfiguration
 */
export interface OutputFormatConfiguration {
  /**
   * @schema OutputFormatConfiguration#Serializer
   */
  readonly serializer?: Serializer;

}

/**
 * @schema HttpEndpointCommonAttribute
 */
export interface HttpEndpointCommonAttribute {
  /**
   * @schema HttpEndpointCommonAttribute#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema HttpEndpointCommonAttribute#AttributeValue
   */
  readonly attributeValue: string;

}

/**
 * @schema KinesisStreamSourceDescription
 */
export interface KinesisStreamSourceDescription {
  /**
   * @schema KinesisStreamSourceDescription#KinesisStreamARN
   */
  readonly kinesisStreamArn?: string;

  /**
   * @schema KinesisStreamSourceDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema KinesisStreamSourceDescription#DeliveryStartTimestamp
   */
  readonly deliveryStartTimestamp?: string;

}

/**
 * @schema S3DestinationDescription
 */
export interface S3DestinationDescription {
  /**
   * @schema S3DestinationDescription#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema S3DestinationDescription#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema S3DestinationDescription#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3DestinationDescription#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema S3DestinationDescription#BufferingHints
   */
  readonly bufferingHints: BufferingHints;

  /**
   * @schema S3DestinationDescription#CompressionFormat
   */
  readonly compressionFormat: string;

  /**
   * @schema S3DestinationDescription#EncryptionConfiguration
   */
  readonly encryptionConfiguration: EncryptionConfiguration;

  /**
   * @schema S3DestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema ExtendedS3DestinationDescription
 */
export interface ExtendedS3DestinationDescription {
  /**
   * @schema ExtendedS3DestinationDescription#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema ExtendedS3DestinationDescription#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema ExtendedS3DestinationDescription#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ExtendedS3DestinationDescription#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema ExtendedS3DestinationDescription#BufferingHints
   */
  readonly bufferingHints: BufferingHints;

  /**
   * @schema ExtendedS3DestinationDescription#CompressionFormat
   */
  readonly compressionFormat: string;

  /**
   * @schema ExtendedS3DestinationDescription#EncryptionConfiguration
   */
  readonly encryptionConfiguration: EncryptionConfiguration;

  /**
   * @schema ExtendedS3DestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @schema ExtendedS3DestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema ExtendedS3DestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema ExtendedS3DestinationDescription#S3BackupDescription
   */
  readonly s3BackupDescription?: S3DestinationDescription;

  /**
   * @schema ExtendedS3DestinationDescription#DataFormatConversionConfiguration
   */
  readonly dataFormatConversionConfiguration?: DataFormatConversionConfiguration;

}

/**
 * @schema RedshiftDestinationDescription
 */
export interface RedshiftDestinationDescription {
  /**
   * @schema RedshiftDestinationDescription#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema RedshiftDestinationDescription#ClusterJDBCURL
   */
  readonly clusterJdbcurl: string;

  /**
   * @schema RedshiftDestinationDescription#CopyCommand
   */
  readonly copyCommand: CopyCommand;

  /**
   * @schema RedshiftDestinationDescription#Username
   */
  readonly username: string;

  /**
   * @schema RedshiftDestinationDescription#RetryOptions
   */
  readonly retryOptions?: RedshiftRetryOptions;

  /**
   * @schema RedshiftDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription: S3DestinationDescription;

  /**
   * @schema RedshiftDestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema RedshiftDestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema RedshiftDestinationDescription#S3BackupDescription
   */
  readonly s3BackupDescription?: S3DestinationDescription;

  /**
   * @schema RedshiftDestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema ElasticsearchDestinationDescription
 */
export interface ElasticsearchDestinationDescription {
  /**
   * @schema ElasticsearchDestinationDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema ElasticsearchDestinationDescription#DomainARN
   */
  readonly domainArn?: string;

  /**
   * @schema ElasticsearchDestinationDescription#ClusterEndpoint
   */
  readonly clusterEndpoint?: string;

  /**
   * @schema ElasticsearchDestinationDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema ElasticsearchDestinationDescription#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema ElasticsearchDestinationDescription#IndexRotationPeriod
   */
  readonly indexRotationPeriod?: string;

  /**
   * @schema ElasticsearchDestinationDescription#BufferingHints
   */
  readonly bufferingHints?: ElasticsearchBufferingHints;

  /**
   * @schema ElasticsearchDestinationDescription#RetryOptions
   */
  readonly retryOptions?: ElasticsearchRetryOptions;

  /**
   * @schema ElasticsearchDestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema ElasticsearchDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription?: S3DestinationDescription;

  /**
   * @schema ElasticsearchDestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema ElasticsearchDestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @schema ElasticsearchDestinationDescription#VpcConfigurationDescription
   */
  readonly vpcConfigurationDescription?: VpcConfigurationDescription;

}

/**
 * @schema SplunkDestinationDescription
 */
export interface SplunkDestinationDescription {
  /**
   * @schema SplunkDestinationDescription#HECEndpoint
   */
  readonly hecEndpoint?: string;

  /**
   * @schema SplunkDestinationDescription#HECEndpointType
   */
  readonly hecEndpointType?: string;

  /**
   * @schema SplunkDestinationDescription#HECToken
   */
  readonly hecToken?: string;

  /**
   * @schema SplunkDestinationDescription#HECAcknowledgmentTimeoutInSeconds
   */
  readonly hecAcknowledgmentTimeoutInSeconds?: number;

  /**
   * @schema SplunkDestinationDescription#RetryOptions
   */
  readonly retryOptions?: SplunkRetryOptions;

  /**
   * @schema SplunkDestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema SplunkDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription?: S3DestinationDescription;

  /**
   * @schema SplunkDestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema SplunkDestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

}

/**
 * @schema HttpEndpointDestinationDescription
 */
export interface HttpEndpointDestinationDescription {
  /**
   * @schema HttpEndpointDestinationDescription#EndpointConfiguration
   */
  readonly endpointConfiguration?: HttpEndpointDescription;

  /**
   * @schema HttpEndpointDestinationDescription#BufferingHints
   */
  readonly bufferingHints?: HttpEndpointBufferingHints;

  /**
   * @schema HttpEndpointDestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @schema HttpEndpointDestinationDescription#RequestConfiguration
   */
  readonly requestConfiguration?: HttpEndpointRequestConfiguration;

  /**
   * @schema HttpEndpointDestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: ProcessingConfiguration;

  /**
   * @schema HttpEndpointDestinationDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema HttpEndpointDestinationDescription#RetryOptions
   */
  readonly retryOptions?: HttpEndpointRetryOptions;

  /**
   * @schema HttpEndpointDestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema HttpEndpointDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription?: S3DestinationDescription;

}

/**
 * @schema ProcessorParameter
 */
export interface ProcessorParameter {
  /**
   * @schema ProcessorParameter#ParameterName
   */
  readonly parameterName: string;

  /**
   * @schema ProcessorParameter#ParameterValue
   */
  readonly parameterValue: string;

}

/**
 * @schema Deserializer
 */
export interface Deserializer {
  /**
   * @schema Deserializer#OpenXJsonSerDe
   */
  readonly openXJsonSerDe?: OpenXJsonSerDe;

  /**
   * @schema Deserializer#HiveJsonSerDe
   */
  readonly hiveJsonSerDe?: HiveJsonSerDe;

}

/**
 * @schema Serializer
 */
export interface Serializer {
  /**
   * @schema Serializer#ParquetSerDe
   */
  readonly parquetSerDe?: ParquetSerDe;

  /**
   * @schema Serializer#OrcSerDe
   */
  readonly orcSerDe?: OrcSerDe;

}

/**
 * @schema VpcConfigurationDescription
 */
export interface VpcConfigurationDescription {
  /**
   * @schema VpcConfigurationDescription#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema VpcConfigurationDescription#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema VpcConfigurationDescription#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema VpcConfigurationDescription#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema HttpEndpointDescription
 */
export interface HttpEndpointDescription {
  /**
   * @schema HttpEndpointDescription#Url
   */
  readonly url?: string;

  /**
   * @schema HttpEndpointDescription#Name
   */
  readonly name?: string;

}

/**
 * @schema OpenXJsonSerDe
 */
export interface OpenXJsonSerDe {
  /**
   * @schema OpenXJsonSerDe#ConvertDotsInJsonKeysToUnderscores
   */
  readonly convertDotsInJsonKeysToUnderscores?: boolean;

  /**
   * @schema OpenXJsonSerDe#CaseInsensitive
   */
  readonly caseInsensitive?: boolean;

  /**
   * @schema OpenXJsonSerDe#ColumnToJsonKeyMappings
   */
  readonly columnToJsonKeyMappings?: { [key: string]: string };

}

/**
 * @schema HiveJsonSerDe
 */
export interface HiveJsonSerDe {
  /**
   * @schema HiveJsonSerDe#TimestampFormats
   */
  readonly timestampFormats?: string[];

}

/**
 * @schema ParquetSerDe
 */
export interface ParquetSerDe {
  /**
   * @schema ParquetSerDe#BlockSizeBytes
   */
  readonly blockSizeBytes?: number;

  /**
   * @schema ParquetSerDe#PageSizeBytes
   */
  readonly pageSizeBytes?: number;

  /**
   * @schema ParquetSerDe#Compression
   */
  readonly compression?: string;

  /**
   * @schema ParquetSerDe#EnableDictionaryCompression
   */
  readonly enableDictionaryCompression?: boolean;

  /**
   * @schema ParquetSerDe#MaxPaddingBytes
   */
  readonly maxPaddingBytes?: number;

  /**
   * @schema ParquetSerDe#WriterVersion
   */
  readonly writerVersion?: string;

}

/**
 * @schema OrcSerDe
 */
export interface OrcSerDe {
  /**
   * @schema OrcSerDe#StripeSizeBytes
   */
  readonly stripeSizeBytes?: number;

  /**
   * @schema OrcSerDe#BlockSizeBytes
   */
  readonly blockSizeBytes?: number;

  /**
   * @schema OrcSerDe#RowIndexStride
   */
  readonly rowIndexStride?: number;

  /**
   * @schema OrcSerDe#EnablePadding
   */
  readonly enablePadding?: boolean;

  /**
   * @schema OrcSerDe#PaddingTolerance
   */
  readonly paddingTolerance?: number;

  /**
   * @schema OrcSerDe#Compression
   */
  readonly compression?: string;

  /**
   * @schema OrcSerDe#BloomFilterColumns
   */
  readonly bloomFilterColumns?: string[];

  /**
   * @schema OrcSerDe#BloomFilterFalsePositiveProbability
   */
  readonly bloomFilterFalsePositiveProbability?: number;

  /**
   * @schema OrcSerDe#DictionaryKeyThreshold
   */
  readonly dictionaryKeyThreshold?: number;

  /**
   * @schema OrcSerDe#FormatVersion
   */
  readonly formatVersion?: string;

}
