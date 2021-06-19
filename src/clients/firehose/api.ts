import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FirehoseClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDeliveryStream(input: shapes.FirehoseCreateDeliveryStreamInput): FirehoseResponsesCreateDeliveryStream {
    return new FirehoseResponsesCreateDeliveryStream(this, this.__resources, input);
  }

  public deleteDeliveryStream(input: shapes.FirehoseDeleteDeliveryStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DeleteDeliveryStream'),
        parameters: {
          DeliveryStreamName: input.deliveryStreamName,
          AllowForceDelete: input.allowForceDelete,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDeliveryStream', props);
  }

  public describeDeliveryStream(input: shapes.FirehoseDescribeDeliveryStreamInput): FirehoseResponsesDescribeDeliveryStream {
    return new FirehoseResponsesDescribeDeliveryStream(this, this.__resources, input);
  }

  public listDeliveryStreams(input: shapes.FirehoseListDeliveryStreamsInput): FirehoseResponsesListDeliveryStreams {
    return new FirehoseResponsesListDeliveryStreams(this, this.__resources, input);
  }

  public listTagsForDeliveryStream(input: shapes.FirehoseListTagsForDeliveryStreamInput): FirehoseResponsesListTagsForDeliveryStream {
    return new FirehoseResponsesListTagsForDeliveryStream(this, this.__resources, input);
  }

  public putRecord(input: shapes.FirehosePutRecordInput): FirehoseResponsesPutRecord {
    return new FirehoseResponsesPutRecord(this, this.__resources, input);
  }

  public putRecordBatch(input: shapes.FirehosePutRecordBatchInput): FirehoseResponsesPutRecordBatch {
    return new FirehoseResponsesPutRecordBatch(this, this.__resources, input);
  }

  public startDeliveryStreamEncryption(input: shapes.FirehoseStartDeliveryStreamEncryptionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeliveryStreamEncryption',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.StartDeliveryStreamEncryption'),
        parameters: {
          DeliveryStreamName: input.deliveryStreamName,
          DeliveryStreamEncryptionConfigurationInput: {
            KeyARN: input.deliveryStreamEncryptionConfigurationInput?.keyArn,
            KeyType: input.deliveryStreamEncryptionConfigurationInput?.keyType,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartDeliveryStreamEncryption', props);
  }

  public stopDeliveryStreamEncryption(input: shapes.FirehoseStopDeliveryStreamEncryptionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeliveryStreamEncryption',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.StopDeliveryStreamEncryption'),
        parameters: {
          DeliveryStreamName: input.deliveryStreamName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopDeliveryStreamEncryption', props);
  }

  public tagDeliveryStream(input: shapes.FirehoseTagDeliveryStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.TagDeliveryStream'),
        parameters: {
          DeliveryStreamName: input.deliveryStreamName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagDeliveryStream', props);
  }

  public untagDeliveryStream(input: shapes.FirehoseUntagDeliveryStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.UntagDeliveryStream'),
        parameters: {
          DeliveryStreamName: input.deliveryStreamName,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagDeliveryStream', props);
  }

  public updateDestination(input: shapes.FirehoseUpdateDestinationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDestination',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.UpdateDestination'),
        parameters: {
          DeliveryStreamName: input.deliveryStreamName,
          CurrentDeliveryStreamVersionId: input.currentDeliveryStreamVersionId,
          DestinationId: input.destinationId,
          S3DestinationUpdate: {
            RoleARN: input.s3DestinationUpdate?.roleArn,
            BucketARN: input.s3DestinationUpdate?.bucketArn,
            Prefix: input.s3DestinationUpdate?.prefix,
            ErrorOutputPrefix: input.s3DestinationUpdate?.errorOutputPrefix,
            BufferingHints: {
              SizeInMBs: input.s3DestinationUpdate?.bufferingHints?.sizeInMBs,
              IntervalInSeconds: input.s3DestinationUpdate?.bufferingHints?.intervalInSeconds,
            },
            CompressionFormat: input.s3DestinationUpdate?.compressionFormat,
            EncryptionConfiguration: {
              NoEncryptionConfig: input.s3DestinationUpdate?.encryptionConfiguration?.noEncryptionConfig,
              KMSEncryptionConfig: {
                AWSKMSKeyARN: input.s3DestinationUpdate?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
              },
            },
            CloudWatchLoggingOptions: {
              Enabled: input.s3DestinationUpdate?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: input.s3DestinationUpdate?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: input.s3DestinationUpdate?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          ExtendedS3DestinationUpdate: {
            RoleARN: input.extendedS3DestinationUpdate?.roleArn,
            BucketARN: input.extendedS3DestinationUpdate?.bucketArn,
            Prefix: input.extendedS3DestinationUpdate?.prefix,
            ErrorOutputPrefix: input.extendedS3DestinationUpdate?.errorOutputPrefix,
            BufferingHints: {
              SizeInMBs: input.extendedS3DestinationUpdate?.bufferingHints?.sizeInMBs,
              IntervalInSeconds: input.extendedS3DestinationUpdate?.bufferingHints?.intervalInSeconds,
            },
            CompressionFormat: input.extendedS3DestinationUpdate?.compressionFormat,
            EncryptionConfiguration: {
              NoEncryptionConfig: input.extendedS3DestinationUpdate?.encryptionConfiguration?.noEncryptionConfig,
              KMSEncryptionConfig: {
                AWSKMSKeyARN: input.extendedS3DestinationUpdate?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
              },
            },
            CloudWatchLoggingOptions: {
              Enabled: input.extendedS3DestinationUpdate?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: input.extendedS3DestinationUpdate?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: input.extendedS3DestinationUpdate?.cloudWatchLoggingOptions?.logStreamName,
            },
            ProcessingConfiguration: {
              Enabled: input.extendedS3DestinationUpdate?.processingConfiguration?.enabled,
              Processors: input.extendedS3DestinationUpdate?.processingConfiguration?.processors,
            },
            S3BackupMode: input.extendedS3DestinationUpdate?.s3BackupMode,
            S3BackupUpdate: {
              RoleARN: input.extendedS3DestinationUpdate?.s3BackupUpdate?.roleArn,
              BucketARN: input.extendedS3DestinationUpdate?.s3BackupUpdate?.bucketArn,
              Prefix: input.extendedS3DestinationUpdate?.s3BackupUpdate?.prefix,
              ErrorOutputPrefix: input.extendedS3DestinationUpdate?.s3BackupUpdate?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: input.extendedS3DestinationUpdate?.s3BackupUpdate?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: input.extendedS3DestinationUpdate?.s3BackupUpdate?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: input.extendedS3DestinationUpdate?.s3BackupUpdate?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: input.extendedS3DestinationUpdate?.s3BackupUpdate?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: input.extendedS3DestinationUpdate?.s3BackupUpdate?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: input.extendedS3DestinationUpdate?.s3BackupUpdate?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: input.extendedS3DestinationUpdate?.s3BackupUpdate?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: input.extendedS3DestinationUpdate?.s3BackupUpdate?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            DataFormatConversionConfiguration: {
              SchemaConfiguration: {
                RoleARN: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.schemaConfiguration?.roleArn,
                CatalogId: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.schemaConfiguration?.catalogId,
                DatabaseName: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.schemaConfiguration?.databaseName,
                TableName: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.schemaConfiguration?.tableName,
                Region: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.schemaConfiguration?.region,
                VersionId: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.schemaConfiguration?.versionId,
              },
              InputFormatConfiguration: {
                Deserializer: {
                  OpenXJsonSerDe: {
                    ConvertDotsInJsonKeysToUnderscores: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.openXJsonSerDe?.convertDotsInJsonKeysToUnderscores,
                    CaseInsensitive: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.openXJsonSerDe?.caseInsensitive,
                    ColumnToJsonKeyMappings: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.openXJsonSerDe?.columnToJsonKeyMappings,
                  },
                  HiveJsonSerDe: {
                    TimestampFormats: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.hiveJsonSerDe?.timestampFormats,
                  },
                },
              },
              OutputFormatConfiguration: {
                Serializer: {
                  ParquetSerDe: {
                    BlockSizeBytes: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.blockSizeBytes,
                    PageSizeBytes: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.pageSizeBytes,
                    Compression: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.compression,
                    EnableDictionaryCompression: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.enableDictionaryCompression,
                    MaxPaddingBytes: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.maxPaddingBytes,
                    WriterVersion: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.writerVersion,
                  },
                  OrcSerDe: {
                    StripeSizeBytes: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.stripeSizeBytes,
                    BlockSizeBytes: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.blockSizeBytes,
                    RowIndexStride: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.rowIndexStride,
                    EnablePadding: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.enablePadding,
                    PaddingTolerance: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.paddingTolerance,
                    Compression: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.compression,
                    BloomFilterColumns: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.bloomFilterColumns,
                    BloomFilterFalsePositiveProbability: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.bloomFilterFalsePositiveProbability,
                    DictionaryKeyThreshold: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.dictionaryKeyThreshold,
                    FormatVersion: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.formatVersion,
                  },
                },
              },
              Enabled: input.extendedS3DestinationUpdate?.dataFormatConversionConfiguration?.enabled,
            },
          },
          RedshiftDestinationUpdate: {
            RoleARN: input.redshiftDestinationUpdate?.roleArn,
            ClusterJDBCURL: input.redshiftDestinationUpdate?.clusterJdbcurl,
            CopyCommand: {
              DataTableName: input.redshiftDestinationUpdate?.copyCommand?.dataTableName,
              DataTableColumns: input.redshiftDestinationUpdate?.copyCommand?.dataTableColumns,
              CopyOptions: input.redshiftDestinationUpdate?.copyCommand?.copyOptions,
            },
            Username: input.redshiftDestinationUpdate?.username,
            Password: input.redshiftDestinationUpdate?.password,
            RetryOptions: {
              DurationInSeconds: input.redshiftDestinationUpdate?.retryOptions?.durationInSeconds,
            },
            S3Update: {
              RoleARN: input.redshiftDestinationUpdate?.s3Update?.roleArn,
              BucketARN: input.redshiftDestinationUpdate?.s3Update?.bucketArn,
              Prefix: input.redshiftDestinationUpdate?.s3Update?.prefix,
              ErrorOutputPrefix: input.redshiftDestinationUpdate?.s3Update?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: input.redshiftDestinationUpdate?.s3Update?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: input.redshiftDestinationUpdate?.s3Update?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: input.redshiftDestinationUpdate?.s3Update?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: input.redshiftDestinationUpdate?.s3Update?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: input.redshiftDestinationUpdate?.s3Update?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: input.redshiftDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: input.redshiftDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: input.redshiftDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            ProcessingConfiguration: {
              Enabled: input.redshiftDestinationUpdate?.processingConfiguration?.enabled,
              Processors: input.redshiftDestinationUpdate?.processingConfiguration?.processors,
            },
            S3BackupMode: input.redshiftDestinationUpdate?.s3BackupMode,
            S3BackupUpdate: {
              RoleARN: input.redshiftDestinationUpdate?.s3BackupUpdate?.roleArn,
              BucketARN: input.redshiftDestinationUpdate?.s3BackupUpdate?.bucketArn,
              Prefix: input.redshiftDestinationUpdate?.s3BackupUpdate?.prefix,
              ErrorOutputPrefix: input.redshiftDestinationUpdate?.s3BackupUpdate?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: input.redshiftDestinationUpdate?.s3BackupUpdate?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: input.redshiftDestinationUpdate?.s3BackupUpdate?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: input.redshiftDestinationUpdate?.s3BackupUpdate?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: input.redshiftDestinationUpdate?.s3BackupUpdate?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: input.redshiftDestinationUpdate?.s3BackupUpdate?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: input.redshiftDestinationUpdate?.s3BackupUpdate?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: input.redshiftDestinationUpdate?.s3BackupUpdate?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: input.redshiftDestinationUpdate?.s3BackupUpdate?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            CloudWatchLoggingOptions: {
              Enabled: input.redshiftDestinationUpdate?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: input.redshiftDestinationUpdate?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: input.redshiftDestinationUpdate?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          ElasticsearchDestinationUpdate: {
            RoleARN: input.elasticsearchDestinationUpdate?.roleArn,
            DomainARN: input.elasticsearchDestinationUpdate?.domainArn,
            ClusterEndpoint: input.elasticsearchDestinationUpdate?.clusterEndpoint,
            IndexName: input.elasticsearchDestinationUpdate?.indexName,
            TypeName: input.elasticsearchDestinationUpdate?.typeName,
            IndexRotationPeriod: input.elasticsearchDestinationUpdate?.indexRotationPeriod,
            BufferingHints: {
              IntervalInSeconds: input.elasticsearchDestinationUpdate?.bufferingHints?.intervalInSeconds,
              SizeInMBs: input.elasticsearchDestinationUpdate?.bufferingHints?.sizeInMBs,
            },
            RetryOptions: {
              DurationInSeconds: input.elasticsearchDestinationUpdate?.retryOptions?.durationInSeconds,
            },
            S3Update: {
              RoleARN: input.elasticsearchDestinationUpdate?.s3Update?.roleArn,
              BucketARN: input.elasticsearchDestinationUpdate?.s3Update?.bucketArn,
              Prefix: input.elasticsearchDestinationUpdate?.s3Update?.prefix,
              ErrorOutputPrefix: input.elasticsearchDestinationUpdate?.s3Update?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: input.elasticsearchDestinationUpdate?.s3Update?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: input.elasticsearchDestinationUpdate?.s3Update?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: input.elasticsearchDestinationUpdate?.s3Update?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: input.elasticsearchDestinationUpdate?.s3Update?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: input.elasticsearchDestinationUpdate?.s3Update?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: input.elasticsearchDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: input.elasticsearchDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: input.elasticsearchDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            ProcessingConfiguration: {
              Enabled: input.elasticsearchDestinationUpdate?.processingConfiguration?.enabled,
              Processors: input.elasticsearchDestinationUpdate?.processingConfiguration?.processors,
            },
            CloudWatchLoggingOptions: {
              Enabled: input.elasticsearchDestinationUpdate?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: input.elasticsearchDestinationUpdate?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: input.elasticsearchDestinationUpdate?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          SplunkDestinationUpdate: {
            HECEndpoint: input.splunkDestinationUpdate?.hecEndpoint,
            HECEndpointType: input.splunkDestinationUpdate?.hecEndpointType,
            HECToken: input.splunkDestinationUpdate?.hecToken,
            HECAcknowledgmentTimeoutInSeconds: input.splunkDestinationUpdate?.hecAcknowledgmentTimeoutInSeconds,
            RetryOptions: {
              DurationInSeconds: input.splunkDestinationUpdate?.retryOptions?.durationInSeconds,
            },
            S3BackupMode: input.splunkDestinationUpdate?.s3BackupMode,
            S3Update: {
              RoleARN: input.splunkDestinationUpdate?.s3Update?.roleArn,
              BucketARN: input.splunkDestinationUpdate?.s3Update?.bucketArn,
              Prefix: input.splunkDestinationUpdate?.s3Update?.prefix,
              ErrorOutputPrefix: input.splunkDestinationUpdate?.s3Update?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: input.splunkDestinationUpdate?.s3Update?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: input.splunkDestinationUpdate?.s3Update?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: input.splunkDestinationUpdate?.s3Update?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: input.splunkDestinationUpdate?.s3Update?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: input.splunkDestinationUpdate?.s3Update?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: input.splunkDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: input.splunkDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: input.splunkDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            ProcessingConfiguration: {
              Enabled: input.splunkDestinationUpdate?.processingConfiguration?.enabled,
              Processors: input.splunkDestinationUpdate?.processingConfiguration?.processors,
            },
            CloudWatchLoggingOptions: {
              Enabled: input.splunkDestinationUpdate?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: input.splunkDestinationUpdate?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: input.splunkDestinationUpdate?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          HttpEndpointDestinationUpdate: {
            EndpointConfiguration: {
              Url: input.httpEndpointDestinationUpdate?.endpointConfiguration?.url,
              Name: input.httpEndpointDestinationUpdate?.endpointConfiguration?.name,
              AccessKey: input.httpEndpointDestinationUpdate?.endpointConfiguration?.accessKey,
            },
            BufferingHints: {
              SizeInMBs: input.httpEndpointDestinationUpdate?.bufferingHints?.sizeInMBs,
              IntervalInSeconds: input.httpEndpointDestinationUpdate?.bufferingHints?.intervalInSeconds,
            },
            CloudWatchLoggingOptions: {
              Enabled: input.httpEndpointDestinationUpdate?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: input.httpEndpointDestinationUpdate?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: input.httpEndpointDestinationUpdate?.cloudWatchLoggingOptions?.logStreamName,
            },
            RequestConfiguration: {
              ContentEncoding: input.httpEndpointDestinationUpdate?.requestConfiguration?.contentEncoding,
              CommonAttributes: input.httpEndpointDestinationUpdate?.requestConfiguration?.commonAttributes,
            },
            ProcessingConfiguration: {
              Enabled: input.httpEndpointDestinationUpdate?.processingConfiguration?.enabled,
              Processors: input.httpEndpointDestinationUpdate?.processingConfiguration?.processors,
            },
            RoleARN: input.httpEndpointDestinationUpdate?.roleArn,
            RetryOptions: {
              DurationInSeconds: input.httpEndpointDestinationUpdate?.retryOptions?.durationInSeconds,
            },
            S3BackupMode: input.httpEndpointDestinationUpdate?.s3BackupMode,
            S3Update: {
              RoleARN: input.httpEndpointDestinationUpdate?.s3Update?.roleArn,
              BucketARN: input.httpEndpointDestinationUpdate?.s3Update?.bucketArn,
              Prefix: input.httpEndpointDestinationUpdate?.s3Update?.prefix,
              ErrorOutputPrefix: input.httpEndpointDestinationUpdate?.s3Update?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: input.httpEndpointDestinationUpdate?.s3Update?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: input.httpEndpointDestinationUpdate?.s3Update?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: input.httpEndpointDestinationUpdate?.s3Update?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: input.httpEndpointDestinationUpdate?.s3Update?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: input.httpEndpointDestinationUpdate?.s3Update?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: input.httpEndpointDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: input.httpEndpointDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: input.httpEndpointDestinationUpdate?.s3Update?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDestination', props);
  }

}

export class FirehoseResponsesCreateDeliveryStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseCreateDeliveryStreamInput) {
  }

  public get deliveryStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.CreateDeliveryStream.DeliveryStreamARN'),
        outputPath: 'DeliveryStreamARN',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          DeliveryStreamType: this.__input.deliveryStreamType,
          KinesisStreamSourceConfiguration: {
            KinesisStreamARN: this.__input.kinesisStreamSourceConfiguration?.kinesisStreamArn,
            RoleARN: this.__input.kinesisStreamSourceConfiguration?.roleArn,
          },
          DeliveryStreamEncryptionConfigurationInput: {
            KeyARN: this.__input.deliveryStreamEncryptionConfigurationInput?.keyArn,
            KeyType: this.__input.deliveryStreamEncryptionConfigurationInput?.keyType,
          },
          S3DestinationConfiguration: {
            RoleARN: this.__input.s3DestinationConfiguration?.roleArn,
            BucketARN: this.__input.s3DestinationConfiguration?.bucketArn,
            Prefix: this.__input.s3DestinationConfiguration?.prefix,
            ErrorOutputPrefix: this.__input.s3DestinationConfiguration?.errorOutputPrefix,
            BufferingHints: {
              SizeInMBs: this.__input.s3DestinationConfiguration?.bufferingHints?.sizeInMBs,
              IntervalInSeconds: this.__input.s3DestinationConfiguration?.bufferingHints?.intervalInSeconds,
            },
            CompressionFormat: this.__input.s3DestinationConfiguration?.compressionFormat,
            EncryptionConfiguration: {
              NoEncryptionConfig: this.__input.s3DestinationConfiguration?.encryptionConfiguration?.noEncryptionConfig,
              KMSEncryptionConfig: {
                AWSKMSKeyARN: this.__input.s3DestinationConfiguration?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
              },
            },
            CloudWatchLoggingOptions: {
              Enabled: this.__input.s3DestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.__input.s3DestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.__input.s3DestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          ExtendedS3DestinationConfiguration: {
            RoleARN: this.__input.extendedS3DestinationConfiguration?.roleArn,
            BucketARN: this.__input.extendedS3DestinationConfiguration?.bucketArn,
            Prefix: this.__input.extendedS3DestinationConfiguration?.prefix,
            ErrorOutputPrefix: this.__input.extendedS3DestinationConfiguration?.errorOutputPrefix,
            BufferingHints: {
              SizeInMBs: this.__input.extendedS3DestinationConfiguration?.bufferingHints?.sizeInMBs,
              IntervalInSeconds: this.__input.extendedS3DestinationConfiguration?.bufferingHints?.intervalInSeconds,
            },
            CompressionFormat: this.__input.extendedS3DestinationConfiguration?.compressionFormat,
            EncryptionConfiguration: {
              NoEncryptionConfig: this.__input.extendedS3DestinationConfiguration?.encryptionConfiguration?.noEncryptionConfig,
              KMSEncryptionConfig: {
                AWSKMSKeyARN: this.__input.extendedS3DestinationConfiguration?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
              },
            },
            CloudWatchLoggingOptions: {
              Enabled: this.__input.extendedS3DestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.__input.extendedS3DestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.__input.extendedS3DestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
            ProcessingConfiguration: {
              Enabled: this.__input.extendedS3DestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.__input.extendedS3DestinationConfiguration?.processingConfiguration?.processors,
            },
            S3BackupMode: this.__input.extendedS3DestinationConfiguration?.s3BackupMode,
            S3BackupConfiguration: {
              RoleARN: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.roleArn,
              BucketARN: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.bucketArn,
              Prefix: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.prefix,
              ErrorOutputPrefix: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.__input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            DataFormatConversionConfiguration: {
              SchemaConfiguration: {
                RoleARN: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.roleArn,
                CatalogId: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.catalogId,
                DatabaseName: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.databaseName,
                TableName: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.tableName,
                Region: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.region,
                VersionId: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.versionId,
              },
              InputFormatConfiguration: {
                Deserializer: {
                  OpenXJsonSerDe: {
                    ConvertDotsInJsonKeysToUnderscores: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.openXJsonSerDe?.convertDotsInJsonKeysToUnderscores,
                    CaseInsensitive: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.openXJsonSerDe?.caseInsensitive,
                    ColumnToJsonKeyMappings: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.openXJsonSerDe?.columnToJsonKeyMappings,
                  },
                  HiveJsonSerDe: {
                    TimestampFormats: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.hiveJsonSerDe?.timestampFormats,
                  },
                },
              },
              OutputFormatConfiguration: {
                Serializer: {
                  ParquetSerDe: {
                    BlockSizeBytes: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.blockSizeBytes,
                    PageSizeBytes: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.pageSizeBytes,
                    Compression: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.compression,
                    EnableDictionaryCompression: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.enableDictionaryCompression,
                    MaxPaddingBytes: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.maxPaddingBytes,
                    WriterVersion: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.writerVersion,
                  },
                  OrcSerDe: {
                    StripeSizeBytes: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.stripeSizeBytes,
                    BlockSizeBytes: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.blockSizeBytes,
                    RowIndexStride: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.rowIndexStride,
                    EnablePadding: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.enablePadding,
                    PaddingTolerance: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.paddingTolerance,
                    Compression: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.compression,
                    BloomFilterColumns: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.bloomFilterColumns,
                    BloomFilterFalsePositiveProbability: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.bloomFilterFalsePositiveProbability,
                    DictionaryKeyThreshold: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.dictionaryKeyThreshold,
                    FormatVersion: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.formatVersion,
                  },
                },
              },
              Enabled: this.__input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.enabled,
            },
          },
          RedshiftDestinationConfiguration: {
            RoleARN: this.__input.redshiftDestinationConfiguration?.roleArn,
            ClusterJDBCURL: this.__input.redshiftDestinationConfiguration?.clusterJdbcurl,
            CopyCommand: {
              DataTableName: this.__input.redshiftDestinationConfiguration?.copyCommand.dataTableName,
              DataTableColumns: this.__input.redshiftDestinationConfiguration?.copyCommand.dataTableColumns,
              CopyOptions: this.__input.redshiftDestinationConfiguration?.copyCommand.copyOptions,
            },
            Username: this.__input.redshiftDestinationConfiguration?.username,
            Password: this.__input.redshiftDestinationConfiguration?.password,
            RetryOptions: {
              DurationInSeconds: this.__input.redshiftDestinationConfiguration?.retryOptions?.durationInSeconds,
            },
            S3Configuration: {
              RoleARN: this.__input.redshiftDestinationConfiguration?.s3Configuration.roleArn,
              BucketARN: this.__input.redshiftDestinationConfiguration?.s3Configuration.bucketArn,
              Prefix: this.__input.redshiftDestinationConfiguration?.s3Configuration.prefix,
              ErrorOutputPrefix: this.__input.redshiftDestinationConfiguration?.s3Configuration.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.__input.redshiftDestinationConfiguration?.s3Configuration.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.__input.redshiftDestinationConfiguration?.s3Configuration.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.__input.redshiftDestinationConfiguration?.s3Configuration.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.__input.redshiftDestinationConfiguration?.s3Configuration.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.__input.redshiftDestinationConfiguration?.s3Configuration.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.__input.redshiftDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.__input.redshiftDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.__input.redshiftDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            ProcessingConfiguration: {
              Enabled: this.__input.redshiftDestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.__input.redshiftDestinationConfiguration?.processingConfiguration?.processors,
            },
            S3BackupMode: this.__input.redshiftDestinationConfiguration?.s3BackupMode,
            S3BackupConfiguration: {
              RoleARN: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.roleArn,
              BucketARN: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.bucketArn,
              Prefix: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.prefix,
              ErrorOutputPrefix: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.__input.redshiftDestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            CloudWatchLoggingOptions: {
              Enabled: this.__input.redshiftDestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.__input.redshiftDestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.__input.redshiftDestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          ElasticsearchDestinationConfiguration: {
            RoleARN: this.__input.elasticsearchDestinationConfiguration?.roleArn,
            DomainARN: this.__input.elasticsearchDestinationConfiguration?.domainArn,
            ClusterEndpoint: this.__input.elasticsearchDestinationConfiguration?.clusterEndpoint,
            IndexName: this.__input.elasticsearchDestinationConfiguration?.indexName,
            TypeName: this.__input.elasticsearchDestinationConfiguration?.typeName,
            IndexRotationPeriod: this.__input.elasticsearchDestinationConfiguration?.indexRotationPeriod,
            BufferingHints: {
              IntervalInSeconds: this.__input.elasticsearchDestinationConfiguration?.bufferingHints?.intervalInSeconds,
              SizeInMBs: this.__input.elasticsearchDestinationConfiguration?.bufferingHints?.sizeInMBs,
            },
            RetryOptions: {
              DurationInSeconds: this.__input.elasticsearchDestinationConfiguration?.retryOptions?.durationInSeconds,
            },
            S3BackupMode: this.__input.elasticsearchDestinationConfiguration?.s3BackupMode,
            S3Configuration: {
              RoleARN: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.roleArn,
              BucketARN: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.bucketArn,
              Prefix: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.prefix,
              ErrorOutputPrefix: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.__input.elasticsearchDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            ProcessingConfiguration: {
              Enabled: this.__input.elasticsearchDestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.__input.elasticsearchDestinationConfiguration?.processingConfiguration?.processors,
            },
            CloudWatchLoggingOptions: {
              Enabled: this.__input.elasticsearchDestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.__input.elasticsearchDestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.__input.elasticsearchDestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
            VpcConfiguration: {
              SubnetIds: this.__input.elasticsearchDestinationConfiguration?.vpcConfiguration?.subnetIds,
              RoleARN: this.__input.elasticsearchDestinationConfiguration?.vpcConfiguration?.roleArn,
              SecurityGroupIds: this.__input.elasticsearchDestinationConfiguration?.vpcConfiguration?.securityGroupIds,
            },
          },
          SplunkDestinationConfiguration: {
            HECEndpoint: this.__input.splunkDestinationConfiguration?.hecEndpoint,
            HECEndpointType: this.__input.splunkDestinationConfiguration?.hecEndpointType,
            HECToken: this.__input.splunkDestinationConfiguration?.hecToken,
            HECAcknowledgmentTimeoutInSeconds: this.__input.splunkDestinationConfiguration?.hecAcknowledgmentTimeoutInSeconds,
            RetryOptions: {
              DurationInSeconds: this.__input.splunkDestinationConfiguration?.retryOptions?.durationInSeconds,
            },
            S3BackupMode: this.__input.splunkDestinationConfiguration?.s3BackupMode,
            S3Configuration: {
              RoleARN: this.__input.splunkDestinationConfiguration?.s3Configuration.roleArn,
              BucketARN: this.__input.splunkDestinationConfiguration?.s3Configuration.bucketArn,
              Prefix: this.__input.splunkDestinationConfiguration?.s3Configuration.prefix,
              ErrorOutputPrefix: this.__input.splunkDestinationConfiguration?.s3Configuration.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.__input.splunkDestinationConfiguration?.s3Configuration.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.__input.splunkDestinationConfiguration?.s3Configuration.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.__input.splunkDestinationConfiguration?.s3Configuration.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.__input.splunkDestinationConfiguration?.s3Configuration.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.__input.splunkDestinationConfiguration?.s3Configuration.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.__input.splunkDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.__input.splunkDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.__input.splunkDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            ProcessingConfiguration: {
              Enabled: this.__input.splunkDestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.__input.splunkDestinationConfiguration?.processingConfiguration?.processors,
            },
            CloudWatchLoggingOptions: {
              Enabled: this.__input.splunkDestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.__input.splunkDestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.__input.splunkDestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          HttpEndpointDestinationConfiguration: {
            EndpointConfiguration: {
              Url: this.__input.httpEndpointDestinationConfiguration?.endpointConfiguration.url,
              Name: this.__input.httpEndpointDestinationConfiguration?.endpointConfiguration.name,
              AccessKey: this.__input.httpEndpointDestinationConfiguration?.endpointConfiguration.accessKey,
            },
            BufferingHints: {
              SizeInMBs: this.__input.httpEndpointDestinationConfiguration?.bufferingHints?.sizeInMBs,
              IntervalInSeconds: this.__input.httpEndpointDestinationConfiguration?.bufferingHints?.intervalInSeconds,
            },
            CloudWatchLoggingOptions: {
              Enabled: this.__input.httpEndpointDestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.__input.httpEndpointDestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.__input.httpEndpointDestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
            RequestConfiguration: {
              ContentEncoding: this.__input.httpEndpointDestinationConfiguration?.requestConfiguration?.contentEncoding,
              CommonAttributes: this.__input.httpEndpointDestinationConfiguration?.requestConfiguration?.commonAttributes,
            },
            ProcessingConfiguration: {
              Enabled: this.__input.httpEndpointDestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.__input.httpEndpointDestinationConfiguration?.processingConfiguration?.processors,
            },
            RoleARN: this.__input.httpEndpointDestinationConfiguration?.roleArn,
            RetryOptions: {
              DurationInSeconds: this.__input.httpEndpointDestinationConfiguration?.retryOptions?.durationInSeconds,
            },
            S3BackupMode: this.__input.httpEndpointDestinationConfiguration?.s3BackupMode,
            S3Configuration: {
              RoleARN: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.roleArn,
              BucketARN: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.bucketArn,
              Prefix: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.prefix,
              ErrorOutputPrefix: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.__input.httpEndpointDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logStreamName,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeliveryStream.DeliveryStreamARN', props);
    return resource.getResponseField('DeliveryStreamARN') as unknown as string;
  }

}

export class FirehoseResponsesDescribeDeliveryStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseDescribeDeliveryStreamInput) {
  }

  public get deliveryStreamDescription(): FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription {
    return new FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription(this.__scope, this.__resources, this.__input);
  }

}

export class FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseDescribeDeliveryStreamInput) {
  }

  public get deliveryStreamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamName'),
        outputPath: 'DeliveryStreamDescription.DeliveryStreamName',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamName', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamName') as unknown as string;
  }

  public get deliveryStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamARN'),
        outputPath: 'DeliveryStreamDescription.DeliveryStreamARN',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamARN', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamARN') as unknown as string;
  }

  public get deliveryStreamStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamStatus'),
        outputPath: 'DeliveryStreamDescription.DeliveryStreamStatus',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamStatus', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamStatus') as unknown as string;
  }

  public get failureDescription(): FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription {
    return new FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription(this.__scope, this.__resources, this.__input);
  }

  public get deliveryStreamEncryptionConfiguration(): FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration {
    return new FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get deliveryStreamType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamType'),
        outputPath: 'DeliveryStreamDescription.DeliveryStreamType',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamType', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamType') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.VersionId'),
        outputPath: 'DeliveryStreamDescription.VersionId',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.VersionId', props);
    return resource.getResponseField('DeliveryStreamDescription.VersionId') as unknown as string;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.CreateTimestamp'),
        outputPath: 'DeliveryStreamDescription.CreateTimestamp',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.CreateTimestamp', props);
    return resource.getResponseField('DeliveryStreamDescription.CreateTimestamp') as unknown as string;
  }

  public get lastUpdateTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.LastUpdateTimestamp'),
        outputPath: 'DeliveryStreamDescription.LastUpdateTimestamp',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.LastUpdateTimestamp', props);
    return resource.getResponseField('DeliveryStreamDescription.LastUpdateTimestamp') as unknown as string;
  }

  public get source(): FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource {
    return new FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource(this.__scope, this.__resources, this.__input);
  }

  public get destinations(): shapes.FirehoseDestinationDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.Destinations'),
        outputPath: 'DeliveryStreamDescription.Destinations',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.Destinations', props);
    return resource.getResponseField('DeliveryStreamDescription.Destinations') as unknown as shapes.FirehoseDestinationDescription[];
  }

  public get hasMoreDestinations(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.HasMoreDestinations'),
        outputPath: 'DeliveryStreamDescription.HasMoreDestinations',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.HasMoreDestinations', props);
    return resource.getResponseField('DeliveryStreamDescription.HasMoreDestinations') as unknown as boolean;
  }

}

export class FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseDescribeDeliveryStreamInput) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.FailureDescription.Type'),
        outputPath: 'DeliveryStreamDescription.FailureDescription.Type',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.FailureDescription.Type', props);
    return resource.getResponseField('DeliveryStreamDescription.FailureDescription.Type') as unknown as string;
  }

  public get details(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.FailureDescription.Details'),
        outputPath: 'DeliveryStreamDescription.FailureDescription.Details',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.FailureDescription.Details', props);
    return resource.getResponseField('DeliveryStreamDescription.FailureDescription.Details') as unknown as string;
  }

}

export class FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseDescribeDeliveryStreamInput) {
  }

  public get keyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyARN'),
        outputPath: 'DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyARN',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyARN', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyARN') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyType'),
        outputPath: 'DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyType',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyType', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.Status'),
        outputPath: 'DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.Status',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.Status', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.Status') as unknown as string;
  }

  public get failureDescription(): FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription {
    return new FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription(this.__scope, this.__resources, this.__input);
  }

}

export class FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseDescribeDeliveryStreamInput) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Type'),
        outputPath: 'DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Type',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Type', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Type') as unknown as string;
  }

  public get details(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Details'),
        outputPath: 'DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Details',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Details', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Details') as unknown as string;
  }

}

export class FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseDescribeDeliveryStreamInput) {
  }

  public get kinesisStreamSourceDescription(): FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription {
    return new FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription(this.__scope, this.__resources, this.__input);
  }

}

export class FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseDescribeDeliveryStreamInput) {
  }

  public get kinesisStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.Source.KinesisStreamSourceDescription.KinesisStreamARN'),
        outputPath: 'DeliveryStreamDescription.Source.KinesisStreamSourceDescription.KinesisStreamARN',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.Source.KinesisStreamSourceDescription.KinesisStreamARN', props);
    return resource.getResponseField('DeliveryStreamDescription.Source.KinesisStreamSourceDescription.KinesisStreamARN') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.Source.KinesisStreamSourceDescription.RoleARN'),
        outputPath: 'DeliveryStreamDescription.Source.KinesisStreamSourceDescription.RoleARN',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.Source.KinesisStreamSourceDescription.RoleARN', props);
    return resource.getResponseField('DeliveryStreamDescription.Source.KinesisStreamSourceDescription.RoleARN') as unknown as string;
  }

  public get deliveryStartTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.DescribeDeliveryStream.DeliveryStreamDescription.Source.KinesisStreamSourceDescription.DeliveryStartTimestamp'),
        outputPath: 'DeliveryStreamDescription.Source.KinesisStreamSourceDescription.DeliveryStartTimestamp',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Limit: this.__input.limit,
          ExclusiveStartDestinationId: this.__input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeliveryStream.DeliveryStreamDescription.Source.KinesisStreamSourceDescription.DeliveryStartTimestamp', props);
    return resource.getResponseField('DeliveryStreamDescription.Source.KinesisStreamSourceDescription.DeliveryStartTimestamp') as unknown as string;
  }

}

export class FirehoseResponsesListDeliveryStreams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseListDeliveryStreamsInput) {
  }

  public get deliveryStreamNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeliveryStreams',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.ListDeliveryStreams.DeliveryStreamNames'),
        outputPath: 'DeliveryStreamNames',
        parameters: {
          Limit: this.__input.limit,
          DeliveryStreamType: this.__input.deliveryStreamType,
          ExclusiveStartDeliveryStreamName: this.__input.exclusiveStartDeliveryStreamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeliveryStreams.DeliveryStreamNames', props);
    return resource.getResponseField('DeliveryStreamNames') as unknown as string[];
  }

  public get hasMoreDeliveryStreams(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeliveryStreams',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.ListDeliveryStreams.HasMoreDeliveryStreams'),
        outputPath: 'HasMoreDeliveryStreams',
        parameters: {
          Limit: this.__input.limit,
          DeliveryStreamType: this.__input.deliveryStreamType,
          ExclusiveStartDeliveryStreamName: this.__input.exclusiveStartDeliveryStreamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeliveryStreams.HasMoreDeliveryStreams', props);
    return resource.getResponseField('HasMoreDeliveryStreams') as unknown as boolean;
  }

}

export class FirehoseResponsesListTagsForDeliveryStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehoseListTagsForDeliveryStreamInput) {
  }

  public get tags(): shapes.FirehoseTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.ListTagsForDeliveryStream.Tags'),
        outputPath: 'Tags',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          ExclusiveStartTagKey: this.__input.exclusiveStartTagKey,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForDeliveryStream.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.FirehoseTag[];
  }

  public get hasMoreTags(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForDeliveryStream',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.ListTagsForDeliveryStream.HasMoreTags'),
        outputPath: 'HasMoreTags',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          ExclusiveStartTagKey: this.__input.exclusiveStartTagKey,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForDeliveryStream.HasMoreTags', props);
    return resource.getResponseField('HasMoreTags') as unknown as boolean;
  }

}

export class FirehoseResponsesPutRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehosePutRecordInput) {
  }

  public get recordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecord',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.PutRecord.RecordId'),
        outputPath: 'RecordId',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Record: {
            Data: {
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecord.RecordId', props);
    return resource.getResponseField('RecordId') as unknown as string;
  }

  public get encrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecord',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.PutRecord.Encrypted'),
        outputPath: 'Encrypted',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Record: {
            Data: {
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecord.Encrypted', props);
    return resource.getResponseField('Encrypted') as unknown as boolean;
  }

}

export class FirehoseResponsesPutRecordBatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FirehosePutRecordBatchInput) {
  }

  public get failedPutCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecordBatch',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.PutRecordBatch.FailedPutCount'),
        outputPath: 'FailedPutCount',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Records: this.__input.records,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecordBatch.FailedPutCount', props);
    return resource.getResponseField('FailedPutCount') as unknown as number;
  }

  public get encrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecordBatch',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.PutRecordBatch.Encrypted'),
        outputPath: 'Encrypted',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Records: this.__input.records,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecordBatch.Encrypted', props);
    return resource.getResponseField('Encrypted') as unknown as boolean;
  }

  public get requestResponses(): shapes.FirehosePutRecordBatchResponseEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecordBatch',
        service: 'Firehose',
        physicalResourceId: cr.PhysicalResourceId.of('Firehose.PutRecordBatch.RequestResponses'),
        outputPath: 'RequestResponses',
        parameters: {
          DeliveryStreamName: this.__input.deliveryStreamName,
          Records: this.__input.records,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecordBatch.RequestResponses', props);
    return resource.getResponseField('RequestResponses') as unknown as shapes.FirehosePutRecordBatchResponseEntry[];
  }

}

