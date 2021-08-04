/**
 * @schema FirehoseCreateDeliveryStreamInput
 */
export interface FirehoseCreateDeliveryStreamInput {
  /**
   * @schema FirehoseCreateDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#DeliveryStreamType
   */
  readonly deliveryStreamType?: string;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#KinesisStreamSourceConfiguration
   */
  readonly kinesisStreamSourceConfiguration?: FirehoseKinesisStreamSourceConfiguration;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#DeliveryStreamEncryptionConfigurationInput
   */
  readonly deliveryStreamEncryptionConfigurationInput?: FirehoseDeliveryStreamEncryptionConfigurationInput;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#S3DestinationConfiguration
   */
  readonly s3DestinationConfiguration?: FirehoseS3DestinationConfiguration;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#ExtendedS3DestinationConfiguration
   */
  readonly extendedS3DestinationConfiguration?: FirehoseExtendedS3DestinationConfiguration;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#RedshiftDestinationConfiguration
   */
  readonly redshiftDestinationConfiguration?: FirehoseRedshiftDestinationConfiguration;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#ElasticsearchDestinationConfiguration
   */
  readonly elasticsearchDestinationConfiguration?: FirehoseElasticsearchDestinationConfiguration;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#SplunkDestinationConfiguration
   */
  readonly splunkDestinationConfiguration?: FirehoseSplunkDestinationConfiguration;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#HttpEndpointDestinationConfiguration
   */
  readonly httpEndpointDestinationConfiguration?: FirehoseHttpEndpointDestinationConfiguration;

  /**
   * @schema FirehoseCreateDeliveryStreamInput#Tags
   */
  readonly tags?: FirehoseTag[];

}

/**
 * @schema FirehoseCreateDeliveryStreamOutput
 */
export interface FirehoseCreateDeliveryStreamOutput {
  /**
   * @schema FirehoseCreateDeliveryStreamOutput#DeliveryStreamARN
   */
  readonly deliveryStreamArn?: string;

}

/**
 * @schema FirehoseDeleteDeliveryStreamInput
 */
export interface FirehoseDeleteDeliveryStreamInput {
  /**
   * @schema FirehoseDeleteDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseDeleteDeliveryStreamInput#AllowForceDelete
   */
  readonly allowForceDelete?: boolean;

}

/**
 * @schema FirehoseDeleteDeliveryStreamOutput
 */
export interface FirehoseDeleteDeliveryStreamOutput {
}

/**
 * @schema FirehoseDescribeDeliveryStreamInput
 */
export interface FirehoseDescribeDeliveryStreamInput {
  /**
   * @schema FirehoseDescribeDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseDescribeDeliveryStreamInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema FirehoseDescribeDeliveryStreamInput#ExclusiveStartDestinationId
   */
  readonly exclusiveStartDestinationId?: string;

}

/**
 * @schema FirehoseDescribeDeliveryStreamOutput
 */
export interface FirehoseDescribeDeliveryStreamOutput {
  /**
   * @schema FirehoseDescribeDeliveryStreamOutput#DeliveryStreamDescription
   */
  readonly deliveryStreamDescription: FirehoseDeliveryStreamDescription;

}

/**
 * @schema FirehoseListDeliveryStreamsInput
 */
export interface FirehoseListDeliveryStreamsInput {
  /**
   * @schema FirehoseListDeliveryStreamsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema FirehoseListDeliveryStreamsInput#DeliveryStreamType
   */
  readonly deliveryStreamType?: string;

  /**
   * @schema FirehoseListDeliveryStreamsInput#ExclusiveStartDeliveryStreamName
   */
  readonly exclusiveStartDeliveryStreamName?: string;

}

/**
 * @schema FirehoseListDeliveryStreamsOutput
 */
export interface FirehoseListDeliveryStreamsOutput {
  /**
   * @schema FirehoseListDeliveryStreamsOutput#DeliveryStreamNames
   */
  readonly deliveryStreamNames: string[];

  /**
   * @schema FirehoseListDeliveryStreamsOutput#HasMoreDeliveryStreams
   */
  readonly hasMoreDeliveryStreams: boolean;

}

/**
 * @schema FirehoseListTagsForDeliveryStreamInput
 */
export interface FirehoseListTagsForDeliveryStreamInput {
  /**
   * @schema FirehoseListTagsForDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseListTagsForDeliveryStreamInput#ExclusiveStartTagKey
   */
  readonly exclusiveStartTagKey?: string;

  /**
   * @schema FirehoseListTagsForDeliveryStreamInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema FirehoseListTagsForDeliveryStreamOutput
 */
export interface FirehoseListTagsForDeliveryStreamOutput {
  /**
   * @schema FirehoseListTagsForDeliveryStreamOutput#Tags
   */
  readonly tags: FirehoseTag[];

  /**
   * @schema FirehoseListTagsForDeliveryStreamOutput#HasMoreTags
   */
  readonly hasMoreTags: boolean;

}

/**
 * @schema FirehosePutRecordInput
 */
export interface FirehosePutRecordInput {
  /**
   * @schema FirehosePutRecordInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehosePutRecordInput#Record
   */
  readonly record: FirehoseRecord;

}

/**
 * @schema FirehosePutRecordOutput
 */
export interface FirehosePutRecordOutput {
  /**
   * @schema FirehosePutRecordOutput#RecordId
   */
  readonly recordId: string;

  /**
   * @schema FirehosePutRecordOutput#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema FirehosePutRecordBatchInput
 */
export interface FirehosePutRecordBatchInput {
  /**
   * @schema FirehosePutRecordBatchInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehosePutRecordBatchInput#Records
   */
  readonly records: FirehoseRecord[];

}

/**
 * @schema FirehosePutRecordBatchOutput
 */
export interface FirehosePutRecordBatchOutput {
  /**
   * @schema FirehosePutRecordBatchOutput#FailedPutCount
   */
  readonly failedPutCount: number;

  /**
   * @schema FirehosePutRecordBatchOutput#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema FirehosePutRecordBatchOutput#RequestResponses
   */
  readonly requestResponses: FirehosePutRecordBatchResponseEntry[];

}

/**
 * @schema FirehoseStartDeliveryStreamEncryptionInput
 */
export interface FirehoseStartDeliveryStreamEncryptionInput {
  /**
   * @schema FirehoseStartDeliveryStreamEncryptionInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseStartDeliveryStreamEncryptionInput#DeliveryStreamEncryptionConfigurationInput
   */
  readonly deliveryStreamEncryptionConfigurationInput?: FirehoseDeliveryStreamEncryptionConfigurationInput;

}

/**
 * @schema FirehoseStartDeliveryStreamEncryptionOutput
 */
export interface FirehoseStartDeliveryStreamEncryptionOutput {
}

/**
 * @schema FirehoseStopDeliveryStreamEncryptionInput
 */
export interface FirehoseStopDeliveryStreamEncryptionInput {
  /**
   * @schema FirehoseStopDeliveryStreamEncryptionInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

}

/**
 * @schema FirehoseStopDeliveryStreamEncryptionOutput
 */
export interface FirehoseStopDeliveryStreamEncryptionOutput {
}

/**
 * @schema FirehoseTagDeliveryStreamInput
 */
export interface FirehoseTagDeliveryStreamInput {
  /**
   * @schema FirehoseTagDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseTagDeliveryStreamInput#Tags
   */
  readonly tags: FirehoseTag[];

}

/**
 * @schema FirehoseTagDeliveryStreamOutput
 */
export interface FirehoseTagDeliveryStreamOutput {
}

/**
 * @schema FirehoseUntagDeliveryStreamInput
 */
export interface FirehoseUntagDeliveryStreamInput {
  /**
   * @schema FirehoseUntagDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseUntagDeliveryStreamInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema FirehoseUntagDeliveryStreamOutput
 */
export interface FirehoseUntagDeliveryStreamOutput {
}

/**
 * @schema FirehoseUpdateDestinationInput
 */
export interface FirehoseUpdateDestinationInput {
  /**
   * @schema FirehoseUpdateDestinationInput#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseUpdateDestinationInput#CurrentDeliveryStreamVersionId
   */
  readonly currentDeliveryStreamVersionId: string;

  /**
   * @schema FirehoseUpdateDestinationInput#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema FirehoseUpdateDestinationInput#S3DestinationUpdate
   */
  readonly s3DestinationUpdate?: FirehoseS3DestinationUpdate;

  /**
   * @schema FirehoseUpdateDestinationInput#ExtendedS3DestinationUpdate
   */
  readonly extendedS3DestinationUpdate?: FirehoseExtendedS3DestinationUpdate;

  /**
   * @schema FirehoseUpdateDestinationInput#RedshiftDestinationUpdate
   */
  readonly redshiftDestinationUpdate?: FirehoseRedshiftDestinationUpdate;

  /**
   * @schema FirehoseUpdateDestinationInput#ElasticsearchDestinationUpdate
   */
  readonly elasticsearchDestinationUpdate?: FirehoseElasticsearchDestinationUpdate;

  /**
   * @schema FirehoseUpdateDestinationInput#SplunkDestinationUpdate
   */
  readonly splunkDestinationUpdate?: FirehoseSplunkDestinationUpdate;

  /**
   * @schema FirehoseUpdateDestinationInput#HttpEndpointDestinationUpdate
   */
  readonly httpEndpointDestinationUpdate?: FirehoseHttpEndpointDestinationUpdate;

}

/**
 * @schema FirehoseUpdateDestinationOutput
 */
export interface FirehoseUpdateDestinationOutput {
}

/**
 * @schema FirehoseKinesisStreamSourceConfiguration
 */
export interface FirehoseKinesisStreamSourceConfiguration {
  /**
   * @schema FirehoseKinesisStreamSourceConfiguration#KinesisStreamARN
   */
  readonly kinesisStreamArn: string;

  /**
   * @schema FirehoseKinesisStreamSourceConfiguration#RoleARN
   */
  readonly roleArn: string;

}

/**
 * @schema FirehoseDeliveryStreamEncryptionConfigurationInput
 */
export interface FirehoseDeliveryStreamEncryptionConfigurationInput {
  /**
   * @schema FirehoseDeliveryStreamEncryptionConfigurationInput#KeyARN
   */
  readonly keyArn?: string;

  /**
   * @schema FirehoseDeliveryStreamEncryptionConfigurationInput#KeyType
   */
  readonly keyType: string;

}

/**
 * @schema FirehoseS3DestinationConfiguration
 */
export interface FirehoseS3DestinationConfiguration {
  /**
   * @schema FirehoseS3DestinationConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseS3DestinationConfiguration#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema FirehoseS3DestinationConfiguration#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema FirehoseS3DestinationConfiguration#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema FirehoseS3DestinationConfiguration#BufferingHints
   */
  readonly bufferingHints?: FirehoseBufferingHints;

  /**
   * @schema FirehoseS3DestinationConfiguration#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema FirehoseS3DestinationConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: FirehoseEncryptionConfiguration;

  /**
   * @schema FirehoseS3DestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseExtendedS3DestinationConfiguration
 */
export interface FirehoseExtendedS3DestinationConfiguration {
  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#BufferingHints
   */
  readonly bufferingHints?: FirehoseBufferingHints;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: FirehoseEncryptionConfiguration;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#S3BackupConfiguration
   */
  readonly s3BackupConfiguration?: FirehoseS3DestinationConfiguration;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#DataFormatConversionConfiguration
   */
  readonly dataFormatConversionConfiguration?: FirehoseDataFormatConversionConfiguration;

}

/**
 * @schema FirehoseRedshiftDestinationConfiguration
 */
export interface FirehoseRedshiftDestinationConfiguration {
  /**
   * @schema FirehoseRedshiftDestinationConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#ClusterJDBCURL
   */
  readonly clusterJdbcurl: string;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#CopyCommand
   */
  readonly copyCommand: FirehoseCopyCommand;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#Username
   */
  readonly username: string;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#Password
   */
  readonly password: string;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#RetryOptions
   */
  readonly retryOptions?: FirehoseRedshiftRetryOptions;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#S3Configuration
   */
  readonly s3Configuration: FirehoseS3DestinationConfiguration;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#S3BackupConfiguration
   */
  readonly s3BackupConfiguration?: FirehoseS3DestinationConfiguration;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseElasticsearchDestinationConfiguration
 */
export interface FirehoseElasticsearchDestinationConfiguration {
  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#DomainARN
   */
  readonly domainArn?: string;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#ClusterEndpoint
   */
  readonly clusterEndpoint?: string;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#IndexName
   */
  readonly indexName: string;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#IndexRotationPeriod
   */
  readonly indexRotationPeriod?: string;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#BufferingHints
   */
  readonly bufferingHints?: FirehoseElasticsearchBufferingHints;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#RetryOptions
   */
  readonly retryOptions?: FirehoseElasticsearchRetryOptions;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#S3Configuration
   */
  readonly s3Configuration: FirehoseS3DestinationConfiguration;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#VpcConfiguration
   */
  readonly vpcConfiguration?: FirehoseVpcConfiguration;

}

/**
 * @schema FirehoseSplunkDestinationConfiguration
 */
export interface FirehoseSplunkDestinationConfiguration {
  /**
   * @schema FirehoseSplunkDestinationConfiguration#HECEndpoint
   */
  readonly hecEndpoint: string;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#HECEndpointType
   */
  readonly hecEndpointType: string;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#HECToken
   */
  readonly hecToken: string;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#HECAcknowledgmentTimeoutInSeconds
   */
  readonly hecAcknowledgmentTimeoutInSeconds?: number;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#RetryOptions
   */
  readonly retryOptions?: FirehoseSplunkRetryOptions;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#S3Configuration
   */
  readonly s3Configuration: FirehoseS3DestinationConfiguration;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseHttpEndpointDestinationConfiguration
 */
export interface FirehoseHttpEndpointDestinationConfiguration {
  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#EndpointConfiguration
   */
  readonly endpointConfiguration: FirehoseHttpEndpointConfiguration;

  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#BufferingHints
   */
  readonly bufferingHints?: FirehoseHttpEndpointBufferingHints;

  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#RequestConfiguration
   */
  readonly requestConfiguration?: FirehoseHttpEndpointRequestConfiguration;

  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#RetryOptions
   */
  readonly retryOptions?: FirehoseHttpEndpointRetryOptions;

  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#S3Configuration
   */
  readonly s3Configuration: FirehoseS3DestinationConfiguration;

}

/**
 * @schema FirehoseTag
 */
export interface FirehoseTag {
  /**
   * @schema FirehoseTag#Key
   */
  readonly key: string;

  /**
   * @schema FirehoseTag#Value
   */
  readonly value?: string;

}

/**
 * @schema FirehoseDeliveryStreamDescription
 */
export interface FirehoseDeliveryStreamDescription {
  /**
   * @schema FirehoseDeliveryStreamDescription#DeliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#DeliveryStreamARN
   */
  readonly deliveryStreamArn: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#DeliveryStreamStatus
   */
  readonly deliveryStreamStatus: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#FailureDescription
   */
  readonly failureDescription?: FirehoseFailureDescription;

  /**
   * @schema FirehoseDeliveryStreamDescription#DeliveryStreamEncryptionConfiguration
   */
  readonly deliveryStreamEncryptionConfiguration?: FirehoseDeliveryStreamEncryptionConfiguration;

  /**
   * @schema FirehoseDeliveryStreamDescription#DeliveryStreamType
   */
  readonly deliveryStreamType: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#VersionId
   */
  readonly versionId: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#Source
   */
  readonly source?: FirehoseSourceDescription;

  /**
   * @schema FirehoseDeliveryStreamDescription#Destinations
   */
  readonly destinations: FirehoseDestinationDescription[];

  /**
   * @schema FirehoseDeliveryStreamDescription#HasMoreDestinations
   */
  readonly hasMoreDestinations: boolean;

}

/**
 * @schema FirehoseRecord
 */
export interface FirehoseRecord {
  /**
   * @schema FirehoseRecord#Data
   */
  readonly data: any;

}

/**
 * @schema FirehosePutRecordBatchResponseEntry
 */
export interface FirehosePutRecordBatchResponseEntry {
  /**
   * @schema FirehosePutRecordBatchResponseEntry#RecordId
   */
  readonly recordId?: string;

  /**
   * @schema FirehosePutRecordBatchResponseEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema FirehosePutRecordBatchResponseEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema FirehoseS3DestinationUpdate
 */
export interface FirehoseS3DestinationUpdate {
  /**
   * @schema FirehoseS3DestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseS3DestinationUpdate#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema FirehoseS3DestinationUpdate#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema FirehoseS3DestinationUpdate#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema FirehoseS3DestinationUpdate#BufferingHints
   */
  readonly bufferingHints?: FirehoseBufferingHints;

  /**
   * @schema FirehoseS3DestinationUpdate#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema FirehoseS3DestinationUpdate#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: FirehoseEncryptionConfiguration;

  /**
   * @schema FirehoseS3DestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseExtendedS3DestinationUpdate
 */
export interface FirehoseExtendedS3DestinationUpdate {
  /**
   * @schema FirehoseExtendedS3DestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#BufferingHints
   */
  readonly bufferingHints?: FirehoseBufferingHints;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: FirehoseEncryptionConfiguration;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#S3BackupUpdate
   */
  readonly s3BackupUpdate?: FirehoseS3DestinationUpdate;

  /**
   * @schema FirehoseExtendedS3DestinationUpdate#DataFormatConversionConfiguration
   */
  readonly dataFormatConversionConfiguration?: FirehoseDataFormatConversionConfiguration;

}

/**
 * @schema FirehoseRedshiftDestinationUpdate
 */
export interface FirehoseRedshiftDestinationUpdate {
  /**
   * @schema FirehoseRedshiftDestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#ClusterJDBCURL
   */
  readonly clusterJdbcurl?: string;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#CopyCommand
   */
  readonly copyCommand?: FirehoseCopyCommand;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#Username
   */
  readonly username?: string;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#Password
   */
  readonly password?: string;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#RetryOptions
   */
  readonly retryOptions?: FirehoseRedshiftRetryOptions;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#S3Update
   */
  readonly s3Update?: FirehoseS3DestinationUpdate;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#S3BackupUpdate
   */
  readonly s3BackupUpdate?: FirehoseS3DestinationUpdate;

  /**
   * @schema FirehoseRedshiftDestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseElasticsearchDestinationUpdate
 */
export interface FirehoseElasticsearchDestinationUpdate {
  /**
   * @schema FirehoseElasticsearchDestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#DomainARN
   */
  readonly domainArn?: string;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#ClusterEndpoint
   */
  readonly clusterEndpoint?: string;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#IndexRotationPeriod
   */
  readonly indexRotationPeriod?: string;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#BufferingHints
   */
  readonly bufferingHints?: FirehoseElasticsearchBufferingHints;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#RetryOptions
   */
  readonly retryOptions?: FirehoseElasticsearchRetryOptions;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#S3Update
   */
  readonly s3Update?: FirehoseS3DestinationUpdate;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseElasticsearchDestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseSplunkDestinationUpdate
 */
export interface FirehoseSplunkDestinationUpdate {
  /**
   * @schema FirehoseSplunkDestinationUpdate#HECEndpoint
   */
  readonly hecEndpoint?: string;

  /**
   * @schema FirehoseSplunkDestinationUpdate#HECEndpointType
   */
  readonly hecEndpointType?: string;

  /**
   * @schema FirehoseSplunkDestinationUpdate#HECToken
   */
  readonly hecToken?: string;

  /**
   * @schema FirehoseSplunkDestinationUpdate#HECAcknowledgmentTimeoutInSeconds
   */
  readonly hecAcknowledgmentTimeoutInSeconds?: number;

  /**
   * @schema FirehoseSplunkDestinationUpdate#RetryOptions
   */
  readonly retryOptions?: FirehoseSplunkRetryOptions;

  /**
   * @schema FirehoseSplunkDestinationUpdate#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseSplunkDestinationUpdate#S3Update
   */
  readonly s3Update?: FirehoseS3DestinationUpdate;

  /**
   * @schema FirehoseSplunkDestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseSplunkDestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseHttpEndpointDestinationUpdate
 */
export interface FirehoseHttpEndpointDestinationUpdate {
  /**
   * @schema FirehoseHttpEndpointDestinationUpdate#EndpointConfiguration
   */
  readonly endpointConfiguration?: FirehoseHttpEndpointConfiguration;

  /**
   * @schema FirehoseHttpEndpointDestinationUpdate#BufferingHints
   */
  readonly bufferingHints?: FirehoseHttpEndpointBufferingHints;

  /**
   * @schema FirehoseHttpEndpointDestinationUpdate#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

  /**
   * @schema FirehoseHttpEndpointDestinationUpdate#RequestConfiguration
   */
  readonly requestConfiguration?: FirehoseHttpEndpointRequestConfiguration;

  /**
   * @schema FirehoseHttpEndpointDestinationUpdate#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseHttpEndpointDestinationUpdate#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseHttpEndpointDestinationUpdate#RetryOptions
   */
  readonly retryOptions?: FirehoseHttpEndpointRetryOptions;

  /**
   * @schema FirehoseHttpEndpointDestinationUpdate#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseHttpEndpointDestinationUpdate#S3Update
   */
  readonly s3Update?: FirehoseS3DestinationUpdate;

}

/**
 * @schema FirehoseBufferingHints
 */
export interface FirehoseBufferingHints {
  /**
   * @schema FirehoseBufferingHints#SizeInMBs
   */
  readonly sizeInMBs?: number;

  /**
   * @schema FirehoseBufferingHints#IntervalInSeconds
   */
  readonly intervalInSeconds?: number;

}

/**
 * @schema FirehoseEncryptionConfiguration
 */
export interface FirehoseEncryptionConfiguration {
  /**
   * @schema FirehoseEncryptionConfiguration#NoEncryptionConfig
   */
  readonly noEncryptionConfig?: string;

  /**
   * @schema FirehoseEncryptionConfiguration#KMSEncryptionConfig
   */
  readonly kmsEncryptionConfig?: FirehoseKmsEncryptionConfig;

}

/**
 * @schema FirehoseCloudWatchLoggingOptions
 */
export interface FirehoseCloudWatchLoggingOptions {
  /**
   * @schema FirehoseCloudWatchLoggingOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema FirehoseCloudWatchLoggingOptions#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema FirehoseCloudWatchLoggingOptions#LogStreamName
   */
  readonly logStreamName?: string;

}

/**
 * @schema FirehoseProcessingConfiguration
 */
export interface FirehoseProcessingConfiguration {
  /**
   * @schema FirehoseProcessingConfiguration#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema FirehoseProcessingConfiguration#Processors
   */
  readonly processors?: FirehoseProcessor[];

}

/**
 * @schema FirehoseDataFormatConversionConfiguration
 */
export interface FirehoseDataFormatConversionConfiguration {
  /**
   * @schema FirehoseDataFormatConversionConfiguration#SchemaConfiguration
   */
  readonly schemaConfiguration?: FirehoseSchemaConfiguration;

  /**
   * @schema FirehoseDataFormatConversionConfiguration#InputFormatConfiguration
   */
  readonly inputFormatConfiguration?: FirehoseInputFormatConfiguration;

  /**
   * @schema FirehoseDataFormatConversionConfiguration#OutputFormatConfiguration
   */
  readonly outputFormatConfiguration?: FirehoseOutputFormatConfiguration;

  /**
   * @schema FirehoseDataFormatConversionConfiguration#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema FirehoseCopyCommand
 */
export interface FirehoseCopyCommand {
  /**
   * @schema FirehoseCopyCommand#DataTableName
   */
  readonly dataTableName: string;

  /**
   * @schema FirehoseCopyCommand#DataTableColumns
   */
  readonly dataTableColumns?: string;

  /**
   * @schema FirehoseCopyCommand#CopyOptions
   */
  readonly copyOptions?: string;

}

/**
 * @schema FirehoseRedshiftRetryOptions
 */
export interface FirehoseRedshiftRetryOptions {
  /**
   * @schema FirehoseRedshiftRetryOptions#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema FirehoseElasticsearchBufferingHints
 */
export interface FirehoseElasticsearchBufferingHints {
  /**
   * @schema FirehoseElasticsearchBufferingHints#IntervalInSeconds
   */
  readonly intervalInSeconds?: number;

  /**
   * @schema FirehoseElasticsearchBufferingHints#SizeInMBs
   */
  readonly sizeInMBs?: number;

}

/**
 * @schema FirehoseElasticsearchRetryOptions
 */
export interface FirehoseElasticsearchRetryOptions {
  /**
   * @schema FirehoseElasticsearchRetryOptions#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema FirehoseVpcConfiguration
 */
export interface FirehoseVpcConfiguration {
  /**
   * @schema FirehoseVpcConfiguration#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema FirehoseVpcConfiguration#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseVpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema FirehoseSplunkRetryOptions
 */
export interface FirehoseSplunkRetryOptions {
  /**
   * @schema FirehoseSplunkRetryOptions#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema FirehoseHttpEndpointConfiguration
 */
export interface FirehoseHttpEndpointConfiguration {
  /**
   * @schema FirehoseHttpEndpointConfiguration#Url
   */
  readonly url: string;

  /**
   * @schema FirehoseHttpEndpointConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema FirehoseHttpEndpointConfiguration#AccessKey
   */
  readonly accessKey?: string;

}

/**
 * @schema FirehoseHttpEndpointBufferingHints
 */
export interface FirehoseHttpEndpointBufferingHints {
  /**
   * @schema FirehoseHttpEndpointBufferingHints#SizeInMBs
   */
  readonly sizeInMBs?: number;

  /**
   * @schema FirehoseHttpEndpointBufferingHints#IntervalInSeconds
   */
  readonly intervalInSeconds?: number;

}

/**
 * @schema FirehoseHttpEndpointRequestConfiguration
 */
export interface FirehoseHttpEndpointRequestConfiguration {
  /**
   * @schema FirehoseHttpEndpointRequestConfiguration#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema FirehoseHttpEndpointRequestConfiguration#CommonAttributes
   */
  readonly commonAttributes?: FirehoseHttpEndpointCommonAttribute[];

}

/**
 * @schema FirehoseHttpEndpointRetryOptions
 */
export interface FirehoseHttpEndpointRetryOptions {
  /**
   * @schema FirehoseHttpEndpointRetryOptions#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * @schema FirehoseFailureDescription
 */
export interface FirehoseFailureDescription {
  /**
   * @schema FirehoseFailureDescription#Type
   */
  readonly type: string;

  /**
   * @schema FirehoseFailureDescription#Details
   */
  readonly details: string;

}

/**
 * @schema FirehoseDeliveryStreamEncryptionConfiguration
 */
export interface FirehoseDeliveryStreamEncryptionConfiguration {
  /**
   * @schema FirehoseDeliveryStreamEncryptionConfiguration#KeyARN
   */
  readonly keyArn?: string;

  /**
   * @schema FirehoseDeliveryStreamEncryptionConfiguration#KeyType
   */
  readonly keyType?: string;

  /**
   * @schema FirehoseDeliveryStreamEncryptionConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema FirehoseDeliveryStreamEncryptionConfiguration#FailureDescription
   */
  readonly failureDescription?: FirehoseFailureDescription;

}

/**
 * @schema FirehoseSourceDescription
 */
export interface FirehoseSourceDescription {
  /**
   * @schema FirehoseSourceDescription#KinesisStreamSourceDescription
   */
  readonly kinesisStreamSourceDescription?: FirehoseKinesisStreamSourceDescription;

}

/**
 * @schema FirehoseDestinationDescription
 */
export interface FirehoseDestinationDescription {
  /**
   * @schema FirehoseDestinationDescription#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema FirehoseDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription?: FirehoseS3DestinationDescription;

  /**
   * @schema FirehoseDestinationDescription#ExtendedS3DestinationDescription
   */
  readonly extendedS3DestinationDescription?: FirehoseExtendedS3DestinationDescription;

  /**
   * @schema FirehoseDestinationDescription#RedshiftDestinationDescription
   */
  readonly redshiftDestinationDescription?: FirehoseRedshiftDestinationDescription;

  /**
   * @schema FirehoseDestinationDescription#ElasticsearchDestinationDescription
   */
  readonly elasticsearchDestinationDescription?: FirehoseElasticsearchDestinationDescription;

  /**
   * @schema FirehoseDestinationDescription#SplunkDestinationDescription
   */
  readonly splunkDestinationDescription?: FirehoseSplunkDestinationDescription;

  /**
   * @schema FirehoseDestinationDescription#HttpEndpointDestinationDescription
   */
  readonly httpEndpointDestinationDescription?: FirehoseHttpEndpointDestinationDescription;

}

/**
 * @schema FirehoseKmsEncryptionConfig
 */
export interface FirehoseKmsEncryptionConfig {
  /**
   * @schema FirehoseKmsEncryptionConfig#AWSKMSKeyARN
   */
  readonly awskmsKeyArn: string;

}

/**
 * @schema FirehoseProcessor
 */
export interface FirehoseProcessor {
  /**
   * @schema FirehoseProcessor#Type
   */
  readonly type: string;

  /**
   * @schema FirehoseProcessor#Parameters
   */
  readonly parameters?: FirehoseProcessorParameter[];

}

/**
 * @schema FirehoseSchemaConfiguration
 */
export interface FirehoseSchemaConfiguration {
  /**
   * @schema FirehoseSchemaConfiguration#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseSchemaConfiguration#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema FirehoseSchemaConfiguration#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema FirehoseSchemaConfiguration#TableName
   */
  readonly tableName?: string;

  /**
   * @schema FirehoseSchemaConfiguration#Region
   */
  readonly region?: string;

  /**
   * @schema FirehoseSchemaConfiguration#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema FirehoseInputFormatConfiguration
 */
export interface FirehoseInputFormatConfiguration {
  /**
   * @schema FirehoseInputFormatConfiguration#Deserializer
   */
  readonly deserializer?: FirehoseDeserializer;

}

/**
 * @schema FirehoseOutputFormatConfiguration
 */
export interface FirehoseOutputFormatConfiguration {
  /**
   * @schema FirehoseOutputFormatConfiguration#Serializer
   */
  readonly serializer?: FirehoseSerializer;

}

/**
 * @schema FirehoseHttpEndpointCommonAttribute
 */
export interface FirehoseHttpEndpointCommonAttribute {
  /**
   * @schema FirehoseHttpEndpointCommonAttribute#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema FirehoseHttpEndpointCommonAttribute#AttributeValue
   */
  readonly attributeValue: string;

}

/**
 * @schema FirehoseKinesisStreamSourceDescription
 */
export interface FirehoseKinesisStreamSourceDescription {
  /**
   * @schema FirehoseKinesisStreamSourceDescription#KinesisStreamARN
   */
  readonly kinesisStreamArn?: string;

  /**
   * @schema FirehoseKinesisStreamSourceDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseKinesisStreamSourceDescription#DeliveryStartTimestamp
   */
  readonly deliveryStartTimestamp?: string;

}

/**
 * @schema FirehoseS3DestinationDescription
 */
export interface FirehoseS3DestinationDescription {
  /**
   * @schema FirehoseS3DestinationDescription#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseS3DestinationDescription#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema FirehoseS3DestinationDescription#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema FirehoseS3DestinationDescription#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema FirehoseS3DestinationDescription#BufferingHints
   */
  readonly bufferingHints: FirehoseBufferingHints;

  /**
   * @schema FirehoseS3DestinationDescription#CompressionFormat
   */
  readonly compressionFormat: string;

  /**
   * @schema FirehoseS3DestinationDescription#EncryptionConfiguration
   */
  readonly encryptionConfiguration: FirehoseEncryptionConfiguration;

  /**
   * @schema FirehoseS3DestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseExtendedS3DestinationDescription
 */
export interface FirehoseExtendedS3DestinationDescription {
  /**
   * @schema FirehoseExtendedS3DestinationDescription#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#BucketARN
   */
  readonly bucketArn: string;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#ErrorOutputPrefix
   */
  readonly errorOutputPrefix?: string;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#BufferingHints
   */
  readonly bufferingHints: FirehoseBufferingHints;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#CompressionFormat
   */
  readonly compressionFormat: string;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#EncryptionConfiguration
   */
  readonly encryptionConfiguration: FirehoseEncryptionConfiguration;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#S3BackupDescription
   */
  readonly s3BackupDescription?: FirehoseS3DestinationDescription;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#DataFormatConversionConfiguration
   */
  readonly dataFormatConversionConfiguration?: FirehoseDataFormatConversionConfiguration;

}

/**
 * @schema FirehoseRedshiftDestinationDescription
 */
export interface FirehoseRedshiftDestinationDescription {
  /**
   * @schema FirehoseRedshiftDestinationDescription#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseRedshiftDestinationDescription#ClusterJDBCURL
   */
  readonly clusterJdbcurl: string;

  /**
   * @schema FirehoseRedshiftDestinationDescription#CopyCommand
   */
  readonly copyCommand: FirehoseCopyCommand;

  /**
   * @schema FirehoseRedshiftDestinationDescription#Username
   */
  readonly username: string;

  /**
   * @schema FirehoseRedshiftDestinationDescription#RetryOptions
   */
  readonly retryOptions?: FirehoseRedshiftRetryOptions;

  /**
   * @schema FirehoseRedshiftDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription: FirehoseS3DestinationDescription;

  /**
   * @schema FirehoseRedshiftDestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseRedshiftDestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseRedshiftDestinationDescription#S3BackupDescription
   */
  readonly s3BackupDescription?: FirehoseS3DestinationDescription;

  /**
   * @schema FirehoseRedshiftDestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseElasticsearchDestinationDescription
 */
export interface FirehoseElasticsearchDestinationDescription {
  /**
   * @schema FirehoseElasticsearchDestinationDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#DomainARN
   */
  readonly domainArn?: string;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#ClusterEndpoint
   */
  readonly clusterEndpoint?: string;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#IndexRotationPeriod
   */
  readonly indexRotationPeriod?: string;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#BufferingHints
   */
  readonly bufferingHints?: FirehoseElasticsearchBufferingHints;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#RetryOptions
   */
  readonly retryOptions?: FirehoseElasticsearchRetryOptions;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription?: FirehoseS3DestinationDescription;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

  /**
   * @schema FirehoseElasticsearchDestinationDescription#VpcConfigurationDescription
   */
  readonly vpcConfigurationDescription?: FirehoseVpcConfigurationDescription;

}

/**
 * @schema FirehoseSplunkDestinationDescription
 */
export interface FirehoseSplunkDestinationDescription {
  /**
   * @schema FirehoseSplunkDestinationDescription#HECEndpoint
   */
  readonly hecEndpoint?: string;

  /**
   * @schema FirehoseSplunkDestinationDescription#HECEndpointType
   */
  readonly hecEndpointType?: string;

  /**
   * @schema FirehoseSplunkDestinationDescription#HECToken
   */
  readonly hecToken?: string;

  /**
   * @schema FirehoseSplunkDestinationDescription#HECAcknowledgmentTimeoutInSeconds
   */
  readonly hecAcknowledgmentTimeoutInSeconds?: number;

  /**
   * @schema FirehoseSplunkDestinationDescription#RetryOptions
   */
  readonly retryOptions?: FirehoseSplunkRetryOptions;

  /**
   * @schema FirehoseSplunkDestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseSplunkDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription?: FirehoseS3DestinationDescription;

  /**
   * @schema FirehoseSplunkDestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseSplunkDestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * @schema FirehoseHttpEndpointDestinationDescription
 */
export interface FirehoseHttpEndpointDestinationDescription {
  /**
   * @schema FirehoseHttpEndpointDestinationDescription#EndpointConfiguration
   */
  readonly endpointConfiguration?: FirehoseHttpEndpointDescription;

  /**
   * @schema FirehoseHttpEndpointDestinationDescription#BufferingHints
   */
  readonly bufferingHints?: FirehoseHttpEndpointBufferingHints;

  /**
   * @schema FirehoseHttpEndpointDestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

  /**
   * @schema FirehoseHttpEndpointDestinationDescription#RequestConfiguration
   */
  readonly requestConfiguration?: FirehoseHttpEndpointRequestConfiguration;

  /**
   * @schema FirehoseHttpEndpointDestinationDescription#ProcessingConfiguration
   */
  readonly processingConfiguration?: FirehoseProcessingConfiguration;

  /**
   * @schema FirehoseHttpEndpointDestinationDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseHttpEndpointDestinationDescription#RetryOptions
   */
  readonly retryOptions?: FirehoseHttpEndpointRetryOptions;

  /**
   * @schema FirehoseHttpEndpointDestinationDescription#S3BackupMode
   */
  readonly s3BackupMode?: string;

  /**
   * @schema FirehoseHttpEndpointDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription?: FirehoseS3DestinationDescription;

}

/**
 * @schema FirehoseProcessorParameter
 */
export interface FirehoseProcessorParameter {
  /**
   * @schema FirehoseProcessorParameter#ParameterName
   */
  readonly parameterName: string;

  /**
   * @schema FirehoseProcessorParameter#ParameterValue
   */
  readonly parameterValue: string;

}

/**
 * @schema FirehoseDeserializer
 */
export interface FirehoseDeserializer {
  /**
   * @schema FirehoseDeserializer#OpenXJsonSerDe
   */
  readonly openXJsonSerDe?: FirehoseOpenXJsonSerDe;

  /**
   * @schema FirehoseDeserializer#HiveJsonSerDe
   */
  readonly hiveJsonSerDe?: FirehoseHiveJsonSerDe;

}

/**
 * @schema FirehoseSerializer
 */
export interface FirehoseSerializer {
  /**
   * @schema FirehoseSerializer#ParquetSerDe
   */
  readonly parquetSerDe?: FirehoseParquetSerDe;

  /**
   * @schema FirehoseSerializer#OrcSerDe
   */
  readonly orcSerDe?: FirehoseOrcSerDe;

}

/**
 * @schema FirehoseVpcConfigurationDescription
 */
export interface FirehoseVpcConfigurationDescription {
  /**
   * @schema FirehoseVpcConfigurationDescription#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema FirehoseVpcConfigurationDescription#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseVpcConfigurationDescription#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema FirehoseVpcConfigurationDescription#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema FirehoseHttpEndpointDescription
 */
export interface FirehoseHttpEndpointDescription {
  /**
   * @schema FirehoseHttpEndpointDescription#Url
   */
  readonly url?: string;

  /**
   * @schema FirehoseHttpEndpointDescription#Name
   */
  readonly name?: string;

}

/**
 * @schema FirehoseOpenXJsonSerDe
 */
export interface FirehoseOpenXJsonSerDe {
  /**
   * @schema FirehoseOpenXJsonSerDe#ConvertDotsInJsonKeysToUnderscores
   */
  readonly convertDotsInJsonKeysToUnderscores?: boolean;

  /**
   * @schema FirehoseOpenXJsonSerDe#CaseInsensitive
   */
  readonly caseInsensitive?: boolean;

  /**
   * @schema FirehoseOpenXJsonSerDe#ColumnToJsonKeyMappings
   */
  readonly columnToJsonKeyMappings?: { [key: string]: string };

}

/**
 * @schema FirehoseHiveJsonSerDe
 */
export interface FirehoseHiveJsonSerDe {
  /**
   * @schema FirehoseHiveJsonSerDe#TimestampFormats
   */
  readonly timestampFormats?: string[];

}

/**
 * @schema FirehoseParquetSerDe
 */
export interface FirehoseParquetSerDe {
  /**
   * @schema FirehoseParquetSerDe#BlockSizeBytes
   */
  readonly blockSizeBytes?: number;

  /**
   * @schema FirehoseParquetSerDe#PageSizeBytes
   */
  readonly pageSizeBytes?: number;

  /**
   * @schema FirehoseParquetSerDe#Compression
   */
  readonly compression?: string;

  /**
   * @schema FirehoseParquetSerDe#EnableDictionaryCompression
   */
  readonly enableDictionaryCompression?: boolean;

  /**
   * @schema FirehoseParquetSerDe#MaxPaddingBytes
   */
  readonly maxPaddingBytes?: number;

  /**
   * @schema FirehoseParquetSerDe#WriterVersion
   */
  readonly writerVersion?: string;

}

/**
 * @schema FirehoseOrcSerDe
 */
export interface FirehoseOrcSerDe {
  /**
   * @schema FirehoseOrcSerDe#StripeSizeBytes
   */
  readonly stripeSizeBytes?: number;

  /**
   * @schema FirehoseOrcSerDe#BlockSizeBytes
   */
  readonly blockSizeBytes?: number;

  /**
   * @schema FirehoseOrcSerDe#RowIndexStride
   */
  readonly rowIndexStride?: number;

  /**
   * @schema FirehoseOrcSerDe#EnablePadding
   */
  readonly enablePadding?: boolean;

  /**
   * @schema FirehoseOrcSerDe#PaddingTolerance
   */
  readonly paddingTolerance?: number;

  /**
   * @schema FirehoseOrcSerDe#Compression
   */
  readonly compression?: string;

  /**
   * @schema FirehoseOrcSerDe#BloomFilterColumns
   */
  readonly bloomFilterColumns?: string[];

  /**
   * @schema FirehoseOrcSerDe#BloomFilterFalsePositiveProbability
   */
  readonly bloomFilterFalsePositiveProbability?: number;

  /**
   * @schema FirehoseOrcSerDe#DictionaryKeyThreshold
   */
  readonly dictionaryKeyThreshold?: number;

  /**
   * @schema FirehoseOrcSerDe#FormatVersion
   */
  readonly formatVersion?: string;

}
