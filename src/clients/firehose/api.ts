import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FirehoseClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDeliveryStream(input: shapes.FirehoseCreateDeliveryStreamInput): FirehoseCreateDeliveryStream {
    return new FirehoseCreateDeliveryStream(this, 'CreateDeliveryStream', this.__resources, input);
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

  public describeDeliveryStream(input: shapes.FirehoseDescribeDeliveryStreamInput): FirehoseDescribeDeliveryStream {
    return new FirehoseDescribeDeliveryStream(this, 'DescribeDeliveryStream', this.__resources, input);
  }

  public listDeliveryStreams(input: shapes.FirehoseListDeliveryStreamsInput): FirehoseListDeliveryStreams {
    return new FirehoseListDeliveryStreams(this, 'ListDeliveryStreams', this.__resources, input);
  }

  public listTagsForDeliveryStream(input: shapes.FirehoseListTagsForDeliveryStreamInput): FirehoseListTagsForDeliveryStream {
    return new FirehoseListTagsForDeliveryStream(this, 'ListTagsForDeliveryStream', this.__resources, input);
  }

  public putRecord(input: shapes.FirehosePutRecordInput): FirehosePutRecord {
    return new FirehosePutRecord(this, 'PutRecord', this.__resources, input);
  }

  public putRecordBatch(input: shapes.FirehosePutRecordBatchInput): FirehosePutRecordBatch {
    return new FirehosePutRecordBatch(this, 'PutRecordBatch', this.__resources, input);
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

export class FirehoseCreateDeliveryStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseCreateDeliveryStreamInput) {
    super(scope, id);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          DeliveryStreamType: this.input.deliveryStreamType,
          KinesisStreamSourceConfiguration: {
            KinesisStreamARN: this.input.kinesisStreamSourceConfiguration?.kinesisStreamArn,
            RoleARN: this.input.kinesisStreamSourceConfiguration?.roleArn,
          },
          DeliveryStreamEncryptionConfigurationInput: {
            KeyARN: this.input.deliveryStreamEncryptionConfigurationInput?.keyArn,
            KeyType: this.input.deliveryStreamEncryptionConfigurationInput?.keyType,
          },
          S3DestinationConfiguration: {
            RoleARN: this.input.s3DestinationConfiguration?.roleArn,
            BucketARN: this.input.s3DestinationConfiguration?.bucketArn,
            Prefix: this.input.s3DestinationConfiguration?.prefix,
            ErrorOutputPrefix: this.input.s3DestinationConfiguration?.errorOutputPrefix,
            BufferingHints: {
              SizeInMBs: this.input.s3DestinationConfiguration?.bufferingHints?.sizeInMBs,
              IntervalInSeconds: this.input.s3DestinationConfiguration?.bufferingHints?.intervalInSeconds,
            },
            CompressionFormat: this.input.s3DestinationConfiguration?.compressionFormat,
            EncryptionConfiguration: {
              NoEncryptionConfig: this.input.s3DestinationConfiguration?.encryptionConfiguration?.noEncryptionConfig,
              KMSEncryptionConfig: {
                AWSKMSKeyARN: this.input.s3DestinationConfiguration?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
              },
            },
            CloudWatchLoggingOptions: {
              Enabled: this.input.s3DestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.input.s3DestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.input.s3DestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          ExtendedS3DestinationConfiguration: {
            RoleARN: this.input.extendedS3DestinationConfiguration?.roleArn,
            BucketARN: this.input.extendedS3DestinationConfiguration?.bucketArn,
            Prefix: this.input.extendedS3DestinationConfiguration?.prefix,
            ErrorOutputPrefix: this.input.extendedS3DestinationConfiguration?.errorOutputPrefix,
            BufferingHints: {
              SizeInMBs: this.input.extendedS3DestinationConfiguration?.bufferingHints?.sizeInMBs,
              IntervalInSeconds: this.input.extendedS3DestinationConfiguration?.bufferingHints?.intervalInSeconds,
            },
            CompressionFormat: this.input.extendedS3DestinationConfiguration?.compressionFormat,
            EncryptionConfiguration: {
              NoEncryptionConfig: this.input.extendedS3DestinationConfiguration?.encryptionConfiguration?.noEncryptionConfig,
              KMSEncryptionConfig: {
                AWSKMSKeyARN: this.input.extendedS3DestinationConfiguration?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
              },
            },
            CloudWatchLoggingOptions: {
              Enabled: this.input.extendedS3DestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.input.extendedS3DestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.input.extendedS3DestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
            ProcessingConfiguration: {
              Enabled: this.input.extendedS3DestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.input.extendedS3DestinationConfiguration?.processingConfiguration?.processors,
            },
            S3BackupMode: this.input.extendedS3DestinationConfiguration?.s3BackupMode,
            S3BackupConfiguration: {
              RoleARN: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.roleArn,
              BucketARN: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.bucketArn,
              Prefix: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.prefix,
              ErrorOutputPrefix: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.input.extendedS3DestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            DataFormatConversionConfiguration: {
              SchemaConfiguration: {
                RoleARN: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.roleArn,
                CatalogId: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.catalogId,
                DatabaseName: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.databaseName,
                TableName: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.tableName,
                Region: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.region,
                VersionId: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.schemaConfiguration?.versionId,
              },
              InputFormatConfiguration: {
                Deserializer: {
                  OpenXJsonSerDe: {
                    ConvertDotsInJsonKeysToUnderscores: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.openXJsonSerDe?.convertDotsInJsonKeysToUnderscores,
                    CaseInsensitive: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.openXJsonSerDe?.caseInsensitive,
                    ColumnToJsonKeyMappings: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.openXJsonSerDe?.columnToJsonKeyMappings,
                  },
                  HiveJsonSerDe: {
                    TimestampFormats: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.inputFormatConfiguration?.deserializer?.hiveJsonSerDe?.timestampFormats,
                  },
                },
              },
              OutputFormatConfiguration: {
                Serializer: {
                  ParquetSerDe: {
                    BlockSizeBytes: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.blockSizeBytes,
                    PageSizeBytes: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.pageSizeBytes,
                    Compression: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.compression,
                    EnableDictionaryCompression: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.enableDictionaryCompression,
                    MaxPaddingBytes: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.maxPaddingBytes,
                    WriterVersion: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.parquetSerDe?.writerVersion,
                  },
                  OrcSerDe: {
                    StripeSizeBytes: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.stripeSizeBytes,
                    BlockSizeBytes: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.blockSizeBytes,
                    RowIndexStride: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.rowIndexStride,
                    EnablePadding: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.enablePadding,
                    PaddingTolerance: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.paddingTolerance,
                    Compression: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.compression,
                    BloomFilterColumns: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.bloomFilterColumns,
                    BloomFilterFalsePositiveProbability: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.bloomFilterFalsePositiveProbability,
                    DictionaryKeyThreshold: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.dictionaryKeyThreshold,
                    FormatVersion: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.outputFormatConfiguration?.serializer?.orcSerDe?.formatVersion,
                  },
                },
              },
              Enabled: this.input.extendedS3DestinationConfiguration?.dataFormatConversionConfiguration?.enabled,
            },
          },
          RedshiftDestinationConfiguration: {
            RoleARN: this.input.redshiftDestinationConfiguration?.roleArn,
            ClusterJDBCURL: this.input.redshiftDestinationConfiguration?.clusterJdbcurl,
            CopyCommand: {
              DataTableName: this.input.redshiftDestinationConfiguration?.copyCommand.dataTableName,
              DataTableColumns: this.input.redshiftDestinationConfiguration?.copyCommand.dataTableColumns,
              CopyOptions: this.input.redshiftDestinationConfiguration?.copyCommand.copyOptions,
            },
            Username: this.input.redshiftDestinationConfiguration?.username,
            Password: this.input.redshiftDestinationConfiguration?.password,
            RetryOptions: {
              DurationInSeconds: this.input.redshiftDestinationConfiguration?.retryOptions?.durationInSeconds,
            },
            S3Configuration: {
              RoleARN: this.input.redshiftDestinationConfiguration?.s3Configuration.roleArn,
              BucketARN: this.input.redshiftDestinationConfiguration?.s3Configuration.bucketArn,
              Prefix: this.input.redshiftDestinationConfiguration?.s3Configuration.prefix,
              ErrorOutputPrefix: this.input.redshiftDestinationConfiguration?.s3Configuration.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.input.redshiftDestinationConfiguration?.s3Configuration.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.input.redshiftDestinationConfiguration?.s3Configuration.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.input.redshiftDestinationConfiguration?.s3Configuration.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.input.redshiftDestinationConfiguration?.s3Configuration.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.input.redshiftDestinationConfiguration?.s3Configuration.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.input.redshiftDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.input.redshiftDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.input.redshiftDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            ProcessingConfiguration: {
              Enabled: this.input.redshiftDestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.input.redshiftDestinationConfiguration?.processingConfiguration?.processors,
            },
            S3BackupMode: this.input.redshiftDestinationConfiguration?.s3BackupMode,
            S3BackupConfiguration: {
              RoleARN: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.roleArn,
              BucketARN: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.bucketArn,
              Prefix: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.prefix,
              ErrorOutputPrefix: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.input.redshiftDestinationConfiguration?.s3BackupConfiguration?.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            CloudWatchLoggingOptions: {
              Enabled: this.input.redshiftDestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.input.redshiftDestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.input.redshiftDestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          ElasticsearchDestinationConfiguration: {
            RoleARN: this.input.elasticsearchDestinationConfiguration?.roleArn,
            DomainARN: this.input.elasticsearchDestinationConfiguration?.domainArn,
            ClusterEndpoint: this.input.elasticsearchDestinationConfiguration?.clusterEndpoint,
            IndexName: this.input.elasticsearchDestinationConfiguration?.indexName,
            TypeName: this.input.elasticsearchDestinationConfiguration?.typeName,
            IndexRotationPeriod: this.input.elasticsearchDestinationConfiguration?.indexRotationPeriod,
            BufferingHints: {
              IntervalInSeconds: this.input.elasticsearchDestinationConfiguration?.bufferingHints?.intervalInSeconds,
              SizeInMBs: this.input.elasticsearchDestinationConfiguration?.bufferingHints?.sizeInMBs,
            },
            RetryOptions: {
              DurationInSeconds: this.input.elasticsearchDestinationConfiguration?.retryOptions?.durationInSeconds,
            },
            S3BackupMode: this.input.elasticsearchDestinationConfiguration?.s3BackupMode,
            S3Configuration: {
              RoleARN: this.input.elasticsearchDestinationConfiguration?.s3Configuration.roleArn,
              BucketARN: this.input.elasticsearchDestinationConfiguration?.s3Configuration.bucketArn,
              Prefix: this.input.elasticsearchDestinationConfiguration?.s3Configuration.prefix,
              ErrorOutputPrefix: this.input.elasticsearchDestinationConfiguration?.s3Configuration.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.input.elasticsearchDestinationConfiguration?.s3Configuration.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.input.elasticsearchDestinationConfiguration?.s3Configuration.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.input.elasticsearchDestinationConfiguration?.s3Configuration.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.input.elasticsearchDestinationConfiguration?.s3Configuration.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.input.elasticsearchDestinationConfiguration?.s3Configuration.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.input.elasticsearchDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.input.elasticsearchDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.input.elasticsearchDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            ProcessingConfiguration: {
              Enabled: this.input.elasticsearchDestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.input.elasticsearchDestinationConfiguration?.processingConfiguration?.processors,
            },
            CloudWatchLoggingOptions: {
              Enabled: this.input.elasticsearchDestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.input.elasticsearchDestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.input.elasticsearchDestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
            VpcConfiguration: {
              SubnetIds: this.input.elasticsearchDestinationConfiguration?.vpcConfiguration?.subnetIds,
              RoleARN: this.input.elasticsearchDestinationConfiguration?.vpcConfiguration?.roleArn,
              SecurityGroupIds: this.input.elasticsearchDestinationConfiguration?.vpcConfiguration?.securityGroupIds,
            },
          },
          SplunkDestinationConfiguration: {
            HECEndpoint: this.input.splunkDestinationConfiguration?.hecEndpoint,
            HECEndpointType: this.input.splunkDestinationConfiguration?.hecEndpointType,
            HECToken: this.input.splunkDestinationConfiguration?.hecToken,
            HECAcknowledgmentTimeoutInSeconds: this.input.splunkDestinationConfiguration?.hecAcknowledgmentTimeoutInSeconds,
            RetryOptions: {
              DurationInSeconds: this.input.splunkDestinationConfiguration?.retryOptions?.durationInSeconds,
            },
            S3BackupMode: this.input.splunkDestinationConfiguration?.s3BackupMode,
            S3Configuration: {
              RoleARN: this.input.splunkDestinationConfiguration?.s3Configuration.roleArn,
              BucketARN: this.input.splunkDestinationConfiguration?.s3Configuration.bucketArn,
              Prefix: this.input.splunkDestinationConfiguration?.s3Configuration.prefix,
              ErrorOutputPrefix: this.input.splunkDestinationConfiguration?.s3Configuration.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.input.splunkDestinationConfiguration?.s3Configuration.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.input.splunkDestinationConfiguration?.s3Configuration.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.input.splunkDestinationConfiguration?.s3Configuration.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.input.splunkDestinationConfiguration?.s3Configuration.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.input.splunkDestinationConfiguration?.s3Configuration.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.input.splunkDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.input.splunkDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.input.splunkDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logStreamName,
              },
            },
            ProcessingConfiguration: {
              Enabled: this.input.splunkDestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.input.splunkDestinationConfiguration?.processingConfiguration?.processors,
            },
            CloudWatchLoggingOptions: {
              Enabled: this.input.splunkDestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.input.splunkDestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.input.splunkDestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
          },
          HttpEndpointDestinationConfiguration: {
            EndpointConfiguration: {
              Url: this.input.httpEndpointDestinationConfiguration?.endpointConfiguration.url,
              Name: this.input.httpEndpointDestinationConfiguration?.endpointConfiguration.name,
              AccessKey: this.input.httpEndpointDestinationConfiguration?.endpointConfiguration.accessKey,
            },
            BufferingHints: {
              SizeInMBs: this.input.httpEndpointDestinationConfiguration?.bufferingHints?.sizeInMBs,
              IntervalInSeconds: this.input.httpEndpointDestinationConfiguration?.bufferingHints?.intervalInSeconds,
            },
            CloudWatchLoggingOptions: {
              Enabled: this.input.httpEndpointDestinationConfiguration?.cloudWatchLoggingOptions?.enabled,
              LogGroupName: this.input.httpEndpointDestinationConfiguration?.cloudWatchLoggingOptions?.logGroupName,
              LogStreamName: this.input.httpEndpointDestinationConfiguration?.cloudWatchLoggingOptions?.logStreamName,
            },
            RequestConfiguration: {
              ContentEncoding: this.input.httpEndpointDestinationConfiguration?.requestConfiguration?.contentEncoding,
              CommonAttributes: this.input.httpEndpointDestinationConfiguration?.requestConfiguration?.commonAttributes,
            },
            ProcessingConfiguration: {
              Enabled: this.input.httpEndpointDestinationConfiguration?.processingConfiguration?.enabled,
              Processors: this.input.httpEndpointDestinationConfiguration?.processingConfiguration?.processors,
            },
            RoleARN: this.input.httpEndpointDestinationConfiguration?.roleArn,
            RetryOptions: {
              DurationInSeconds: this.input.httpEndpointDestinationConfiguration?.retryOptions?.durationInSeconds,
            },
            S3BackupMode: this.input.httpEndpointDestinationConfiguration?.s3BackupMode,
            S3Configuration: {
              RoleARN: this.input.httpEndpointDestinationConfiguration?.s3Configuration.roleArn,
              BucketARN: this.input.httpEndpointDestinationConfiguration?.s3Configuration.bucketArn,
              Prefix: this.input.httpEndpointDestinationConfiguration?.s3Configuration.prefix,
              ErrorOutputPrefix: this.input.httpEndpointDestinationConfiguration?.s3Configuration.errorOutputPrefix,
              BufferingHints: {
                SizeInMBs: this.input.httpEndpointDestinationConfiguration?.s3Configuration.bufferingHints?.sizeInMBs,
                IntervalInSeconds: this.input.httpEndpointDestinationConfiguration?.s3Configuration.bufferingHints?.intervalInSeconds,
              },
              CompressionFormat: this.input.httpEndpointDestinationConfiguration?.s3Configuration.compressionFormat,
              EncryptionConfiguration: {
                NoEncryptionConfig: this.input.httpEndpointDestinationConfiguration?.s3Configuration.encryptionConfiguration?.noEncryptionConfig,
                KMSEncryptionConfig: {
                  AWSKMSKeyARN: this.input.httpEndpointDestinationConfiguration?.s3Configuration.encryptionConfiguration?.kmsEncryptionConfig?.awskmsKeyArn,
                },
              },
              CloudWatchLoggingOptions: {
                Enabled: this.input.httpEndpointDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.enabled,
                LogGroupName: this.input.httpEndpointDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logGroupName,
                LogStreamName: this.input.httpEndpointDestinationConfiguration?.s3Configuration.cloudWatchLoggingOptions?.logStreamName,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeliveryStream.DeliveryStreamARN', props);
    return resource.getResponseField('DeliveryStreamARN') as unknown as string;
  }

}

export class FirehoseDescribeDeliveryStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseDescribeDeliveryStreamInput) {
    super(scope, id);
  }

  public get deliveryStreamDescription(): FirehoseDescribeDeliveryStreamDeliveryStreamDescription {
    return new FirehoseDescribeDeliveryStreamDeliveryStreamDescription(this, 'DeliveryStreamDescription', this.__resources, this.input);
  }

}

export class FirehoseDescribeDeliveryStreamDeliveryStreamDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseDescribeDeliveryStreamInput) {
    super(scope, id);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamName', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamARN', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamStatus', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamStatus') as unknown as string;
  }

  public get failureDescription(): FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription {
    return new FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription(this, 'FailureDescription', this.__resources, this.input);
  }

  public get deliveryStreamEncryptionConfiguration(): FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration {
    return new FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration(this, 'DeliveryStreamEncryptionConfiguration', this.__resources, this.input);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamType', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.VersionId', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.CreateTimestamp', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.LastUpdateTimestamp', props);
    return resource.getResponseField('DeliveryStreamDescription.LastUpdateTimestamp') as unknown as string;
  }

  public get source(): FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionSource {
    return new FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionSource(this, 'Source', this.__resources, this.input);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.Destinations', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.HasMoreDestinations', props);
    return resource.getResponseField('DeliveryStreamDescription.HasMoreDestinations') as unknown as boolean;
  }

}

export class FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseDescribeDeliveryStreamInput) {
    super(scope, id);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.FailureDescription.Type', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.FailureDescription.Details', props);
    return resource.getResponseField('DeliveryStreamDescription.FailureDescription.Details') as unknown as string;
  }

}

export class FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseDescribeDeliveryStreamInput) {
    super(scope, id);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyARN', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.KeyType', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.Status', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.Status') as unknown as string;
  }

  public get failureDescription(): FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription {
    return new FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription(this, 'FailureDescription', this.__resources, this.input);
  }

}

export class FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseDescribeDeliveryStreamInput) {
    super(scope, id);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Type', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Details', props);
    return resource.getResponseField('DeliveryStreamDescription.DeliveryStreamEncryptionConfiguration.FailureDescription.Details') as unknown as string;
  }

}

export class FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseDescribeDeliveryStreamInput) {
    super(scope, id);
  }

  public get kinesisStreamSourceDescription(): FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription {
    return new FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription(this, 'KinesisStreamSourceDescription', this.__resources, this.input);
  }

}

export class FirehoseDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseDescribeDeliveryStreamInput) {
    super(scope, id);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.Source.KinesisStreamSourceDescription.KinesisStreamARN', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.Source.KinesisStreamSourceDescription.RoleARN', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Limit: this.input.limit,
          ExclusiveStartDestinationId: this.input.exclusiveStartDestinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeliveryStream.DeliveryStreamDescription.Source.KinesisStreamSourceDescription.DeliveryStartTimestamp', props);
    return resource.getResponseField('DeliveryStreamDescription.Source.KinesisStreamSourceDescription.DeliveryStartTimestamp') as unknown as string;
  }

}

export class FirehoseListDeliveryStreams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseListDeliveryStreamsInput) {
    super(scope, id);
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
          Limit: this.input.limit,
          DeliveryStreamType: this.input.deliveryStreamType,
          ExclusiveStartDeliveryStreamName: this.input.exclusiveStartDeliveryStreamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeliveryStreams.DeliveryStreamNames', props);
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
          Limit: this.input.limit,
          DeliveryStreamType: this.input.deliveryStreamType,
          ExclusiveStartDeliveryStreamName: this.input.exclusiveStartDeliveryStreamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeliveryStreams.HasMoreDeliveryStreams', props);
    return resource.getResponseField('HasMoreDeliveryStreams') as unknown as boolean;
  }

}

export class FirehoseListTagsForDeliveryStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehoseListTagsForDeliveryStreamInput) {
    super(scope, id);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          ExclusiveStartTagKey: this.input.exclusiveStartTagKey,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForDeliveryStream.Tags', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          ExclusiveStartTagKey: this.input.exclusiveStartTagKey,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForDeliveryStream.HasMoreTags', props);
    return resource.getResponseField('HasMoreTags') as unknown as boolean;
  }

}

export class FirehosePutRecord extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehosePutRecordInput) {
    super(scope, id);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Record: {
            Data: {
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecord.RecordId', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Record: {
            Data: {
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecord.Encrypted', props);
    return resource.getResponseField('Encrypted') as unknown as boolean;
  }

}

export class FirehosePutRecordBatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FirehosePutRecordBatchInput) {
    super(scope, id);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Records: this.input.records,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecordBatch.FailedPutCount', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Records: this.input.records,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecordBatch.Encrypted', props);
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
          DeliveryStreamName: this.input.deliveryStreamName,
          Records: this.input.records,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecordBatch.RequestResponses', props);
    return resource.getResponseField('RequestResponses') as unknown as shapes.FirehosePutRecordBatchResponseEntry[];
  }

}

