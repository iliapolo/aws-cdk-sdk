/**
 * @schema FirehoseCreateDeliveryStreamInput
 */
export interface FirehoseCreateDeliveryStreamInput {
  /**
   * @schema FirehoseCreateDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

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
 * Converts an object of type 'FirehoseCreateDeliveryStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseCreateDeliveryStreamInput(obj: FirehoseCreateDeliveryStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'DeliveryStreamType': obj.deliveryStreamType,
    'KinesisStreamSourceConfiguration': toJson_FirehoseKinesisStreamSourceConfiguration(obj.kinesisStreamSourceConfiguration),
    'DeliveryStreamEncryptionConfigurationInput': toJson_FirehoseDeliveryStreamEncryptionConfigurationInput(obj.deliveryStreamEncryptionConfigurationInput),
    'S3DestinationConfiguration': toJson_FirehoseS3DestinationConfiguration(obj.s3DestinationConfiguration),
    'ExtendedS3DestinationConfiguration': toJson_FirehoseExtendedS3DestinationConfiguration(obj.extendedS3DestinationConfiguration),
    'RedshiftDestinationConfiguration': toJson_FirehoseRedshiftDestinationConfiguration(obj.redshiftDestinationConfiguration),
    'ElasticsearchDestinationConfiguration': toJson_FirehoseElasticsearchDestinationConfiguration(obj.elasticsearchDestinationConfiguration),
    'SplunkDestinationConfiguration': toJson_FirehoseSplunkDestinationConfiguration(obj.splunkDestinationConfiguration),
    'HttpEndpointDestinationConfiguration': toJson_FirehoseHttpEndpointDestinationConfiguration(obj.httpEndpointDestinationConfiguration),
    'Tags': obj.tags?.map(y => toJson_FirehoseTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseCreateDeliveryStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseCreateDeliveryStreamOutput(obj: FirehoseCreateDeliveryStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamARN': obj.deliveryStreamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseDeleteDeliveryStreamInput
 */
export interface FirehoseDeleteDeliveryStreamInput {
  /**
   * @schema FirehoseDeleteDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

  /**
   * @schema FirehoseDeleteDeliveryStreamInput#AllowForceDelete
   */
  readonly allowForceDelete?: boolean;

}

/**
 * Converts an object of type 'FirehoseDeleteDeliveryStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDeleteDeliveryStreamInput(obj: FirehoseDeleteDeliveryStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'AllowForceDelete': obj.allowForceDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseDeleteDeliveryStreamOutput
 */
export interface FirehoseDeleteDeliveryStreamOutput {
}

/**
 * Converts an object of type 'FirehoseDeleteDeliveryStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDeleteDeliveryStreamOutput(obj: FirehoseDeleteDeliveryStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseDescribeDeliveryStreamInput
 */
export interface FirehoseDescribeDeliveryStreamInput {
  /**
   * @schema FirehoseDescribeDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

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
 * Converts an object of type 'FirehoseDescribeDeliveryStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDescribeDeliveryStreamInput(obj: FirehoseDescribeDeliveryStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'Limit': obj.limit,
    'ExclusiveStartDestinationId': obj.exclusiveStartDestinationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseDescribeDeliveryStreamOutput
 */
export interface FirehoseDescribeDeliveryStreamOutput {
  /**
   * @schema FirehoseDescribeDeliveryStreamOutput#DeliveryStreamDescription
   */
  readonly deliveryStreamDescription?: FirehoseDeliveryStreamDescription;

}

/**
 * Converts an object of type 'FirehoseDescribeDeliveryStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDescribeDeliveryStreamOutput(obj: FirehoseDescribeDeliveryStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamDescription': toJson_FirehoseDeliveryStreamDescription(obj.deliveryStreamDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseListDeliveryStreamsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseListDeliveryStreamsInput(obj: FirehoseListDeliveryStreamsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'DeliveryStreamType': obj.deliveryStreamType,
    'ExclusiveStartDeliveryStreamName': obj.exclusiveStartDeliveryStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseListDeliveryStreamsOutput
 */
export interface FirehoseListDeliveryStreamsOutput {
  /**
   * @schema FirehoseListDeliveryStreamsOutput#DeliveryStreamNames
   */
  readonly deliveryStreamNames?: string[];

  /**
   * @schema FirehoseListDeliveryStreamsOutput#HasMoreDeliveryStreams
   */
  readonly hasMoreDeliveryStreams?: boolean;

}

/**
 * Converts an object of type 'FirehoseListDeliveryStreamsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseListDeliveryStreamsOutput(obj: FirehoseListDeliveryStreamsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamNames': obj.deliveryStreamNames?.map(y => y),
    'HasMoreDeliveryStreams': obj.hasMoreDeliveryStreams,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseListTagsForDeliveryStreamInput
 */
export interface FirehoseListTagsForDeliveryStreamInput {
  /**
   * @schema FirehoseListTagsForDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

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
 * Converts an object of type 'FirehoseListTagsForDeliveryStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseListTagsForDeliveryStreamInput(obj: FirehoseListTagsForDeliveryStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'ExclusiveStartTagKey': obj.exclusiveStartTagKey,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseListTagsForDeliveryStreamOutput
 */
export interface FirehoseListTagsForDeliveryStreamOutput {
  /**
   * @schema FirehoseListTagsForDeliveryStreamOutput#Tags
   */
  readonly tags?: FirehoseTag[];

  /**
   * @schema FirehoseListTagsForDeliveryStreamOutput#HasMoreTags
   */
  readonly hasMoreTags?: boolean;

}

/**
 * Converts an object of type 'FirehoseListTagsForDeliveryStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseListTagsForDeliveryStreamOutput(obj: FirehoseListTagsForDeliveryStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_FirehoseTag(y)),
    'HasMoreTags': obj.hasMoreTags,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehosePutRecordInput
 */
export interface FirehosePutRecordInput {
  /**
   * @schema FirehosePutRecordInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

  /**
   * @schema FirehosePutRecordInput#Record
   */
  readonly record?: FirehoseRecord;

}

/**
 * Converts an object of type 'FirehosePutRecordInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehosePutRecordInput(obj: FirehosePutRecordInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'Record': toJson_FirehoseRecord(obj.record),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehosePutRecordOutput
 */
export interface FirehosePutRecordOutput {
  /**
   * @schema FirehosePutRecordOutput#RecordId
   */
  readonly recordId?: string;

  /**
   * @schema FirehosePutRecordOutput#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * Converts an object of type 'FirehosePutRecordOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehosePutRecordOutput(obj: FirehosePutRecordOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordId': obj.recordId,
    'Encrypted': obj.encrypted,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehosePutRecordBatchInput
 */
export interface FirehosePutRecordBatchInput {
  /**
   * @schema FirehosePutRecordBatchInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

  /**
   * @schema FirehosePutRecordBatchInput#Records
   */
  readonly records?: FirehoseRecord[];

}

/**
 * Converts an object of type 'FirehosePutRecordBatchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehosePutRecordBatchInput(obj: FirehosePutRecordBatchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'Records': obj.records?.map(y => toJson_FirehoseRecord(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehosePutRecordBatchOutput
 */
export interface FirehosePutRecordBatchOutput {
  /**
   * @schema FirehosePutRecordBatchOutput#FailedPutCount
   */
  readonly failedPutCount?: number;

  /**
   * @schema FirehosePutRecordBatchOutput#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema FirehosePutRecordBatchOutput#RequestResponses
   */
  readonly requestResponses?: FirehosePutRecordBatchResponseEntry[];

}

/**
 * Converts an object of type 'FirehosePutRecordBatchOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehosePutRecordBatchOutput(obj: FirehosePutRecordBatchOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedPutCount': obj.failedPutCount,
    'Encrypted': obj.encrypted,
    'RequestResponses': obj.requestResponses?.map(y => toJson_FirehosePutRecordBatchResponseEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseStartDeliveryStreamEncryptionInput
 */
export interface FirehoseStartDeliveryStreamEncryptionInput {
  /**
   * @schema FirehoseStartDeliveryStreamEncryptionInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

  /**
   * @schema FirehoseStartDeliveryStreamEncryptionInput#DeliveryStreamEncryptionConfigurationInput
   */
  readonly deliveryStreamEncryptionConfigurationInput?: FirehoseDeliveryStreamEncryptionConfigurationInput;

}

/**
 * Converts an object of type 'FirehoseStartDeliveryStreamEncryptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseStartDeliveryStreamEncryptionInput(obj: FirehoseStartDeliveryStreamEncryptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'DeliveryStreamEncryptionConfigurationInput': toJson_FirehoseDeliveryStreamEncryptionConfigurationInput(obj.deliveryStreamEncryptionConfigurationInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseStartDeliveryStreamEncryptionOutput
 */
export interface FirehoseStartDeliveryStreamEncryptionOutput {
}

/**
 * Converts an object of type 'FirehoseStartDeliveryStreamEncryptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseStartDeliveryStreamEncryptionOutput(obj: FirehoseStartDeliveryStreamEncryptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseStopDeliveryStreamEncryptionInput
 */
export interface FirehoseStopDeliveryStreamEncryptionInput {
  /**
   * @schema FirehoseStopDeliveryStreamEncryptionInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

}

/**
 * Converts an object of type 'FirehoseStopDeliveryStreamEncryptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseStopDeliveryStreamEncryptionInput(obj: FirehoseStopDeliveryStreamEncryptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseStopDeliveryStreamEncryptionOutput
 */
export interface FirehoseStopDeliveryStreamEncryptionOutput {
}

/**
 * Converts an object of type 'FirehoseStopDeliveryStreamEncryptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseStopDeliveryStreamEncryptionOutput(obj: FirehoseStopDeliveryStreamEncryptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseTagDeliveryStreamInput
 */
export interface FirehoseTagDeliveryStreamInput {
  /**
   * @schema FirehoseTagDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

  /**
   * @schema FirehoseTagDeliveryStreamInput#Tags
   */
  readonly tags?: FirehoseTag[];

}

/**
 * Converts an object of type 'FirehoseTagDeliveryStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseTagDeliveryStreamInput(obj: FirehoseTagDeliveryStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'Tags': obj.tags?.map(y => toJson_FirehoseTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseTagDeliveryStreamOutput
 */
export interface FirehoseTagDeliveryStreamOutput {
}

/**
 * Converts an object of type 'FirehoseTagDeliveryStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseTagDeliveryStreamOutput(obj: FirehoseTagDeliveryStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseUntagDeliveryStreamInput
 */
export interface FirehoseUntagDeliveryStreamInput {
  /**
   * @schema FirehoseUntagDeliveryStreamInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

  /**
   * @schema FirehoseUntagDeliveryStreamInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'FirehoseUntagDeliveryStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseUntagDeliveryStreamInput(obj: FirehoseUntagDeliveryStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseUntagDeliveryStreamOutput
 */
export interface FirehoseUntagDeliveryStreamOutput {
}

/**
 * Converts an object of type 'FirehoseUntagDeliveryStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseUntagDeliveryStreamOutput(obj: FirehoseUntagDeliveryStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseUpdateDestinationInput
 */
export interface FirehoseUpdateDestinationInput {
  /**
   * @schema FirehoseUpdateDestinationInput#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

  /**
   * @schema FirehoseUpdateDestinationInput#CurrentDeliveryStreamVersionId
   */
  readonly currentDeliveryStreamVersionId?: string;

  /**
   * @schema FirehoseUpdateDestinationInput#DestinationId
   */
  readonly destinationId?: string;

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
 * Converts an object of type 'FirehoseUpdateDestinationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseUpdateDestinationInput(obj: FirehoseUpdateDestinationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'CurrentDeliveryStreamVersionId': obj.currentDeliveryStreamVersionId,
    'DestinationId': obj.destinationId,
    'S3DestinationUpdate': toJson_FirehoseS3DestinationUpdate(obj.s3DestinationUpdate),
    'ExtendedS3DestinationUpdate': toJson_FirehoseExtendedS3DestinationUpdate(obj.extendedS3DestinationUpdate),
    'RedshiftDestinationUpdate': toJson_FirehoseRedshiftDestinationUpdate(obj.redshiftDestinationUpdate),
    'ElasticsearchDestinationUpdate': toJson_FirehoseElasticsearchDestinationUpdate(obj.elasticsearchDestinationUpdate),
    'SplunkDestinationUpdate': toJson_FirehoseSplunkDestinationUpdate(obj.splunkDestinationUpdate),
    'HttpEndpointDestinationUpdate': toJson_FirehoseHttpEndpointDestinationUpdate(obj.httpEndpointDestinationUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseUpdateDestinationOutput
 */
export interface FirehoseUpdateDestinationOutput {
}

/**
 * Converts an object of type 'FirehoseUpdateDestinationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseUpdateDestinationOutput(obj: FirehoseUpdateDestinationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseKinesisStreamSourceConfiguration
 */
export interface FirehoseKinesisStreamSourceConfiguration {
  /**
   * @schema FirehoseKinesisStreamSourceConfiguration#KinesisStreamARN
   */
  readonly kinesisStreamArn?: string;

  /**
   * @schema FirehoseKinesisStreamSourceConfiguration#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'FirehoseKinesisStreamSourceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseKinesisStreamSourceConfiguration(obj: FirehoseKinesisStreamSourceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KinesisStreamARN': obj.kinesisStreamArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly keyType?: string;

}

/**
 * Converts an object of type 'FirehoseDeliveryStreamEncryptionConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDeliveryStreamEncryptionConfigurationInput(obj: FirehoseDeliveryStreamEncryptionConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyARN': obj.keyArn,
    'KeyType': obj.keyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseS3DestinationConfiguration
 */
export interface FirehoseS3DestinationConfiguration {
  /**
   * @schema FirehoseS3DestinationConfiguration#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseS3DestinationConfiguration#BucketARN
   */
  readonly bucketArn?: string;

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
 * Converts an object of type 'FirehoseS3DestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseS3DestinationConfiguration(obj: FirehoseS3DestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'BucketARN': obj.bucketArn,
    'Prefix': obj.prefix,
    'ErrorOutputPrefix': obj.errorOutputPrefix,
    'BufferingHints': toJson_FirehoseBufferingHints(obj.bufferingHints),
    'CompressionFormat': obj.compressionFormat,
    'EncryptionConfiguration': toJson_FirehoseEncryptionConfiguration(obj.encryptionConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseExtendedS3DestinationConfiguration
 */
export interface FirehoseExtendedS3DestinationConfiguration {
  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseExtendedS3DestinationConfiguration#BucketARN
   */
  readonly bucketArn?: string;

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
 * Converts an object of type 'FirehoseExtendedS3DestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseExtendedS3DestinationConfiguration(obj: FirehoseExtendedS3DestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'BucketARN': obj.bucketArn,
    'Prefix': obj.prefix,
    'ErrorOutputPrefix': obj.errorOutputPrefix,
    'BufferingHints': toJson_FirehoseBufferingHints(obj.bufferingHints),
    'CompressionFormat': obj.compressionFormat,
    'EncryptionConfiguration': toJson_FirehoseEncryptionConfiguration(obj.encryptionConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'S3BackupMode': obj.s3BackupMode,
    'S3BackupConfiguration': toJson_FirehoseS3DestinationConfiguration(obj.s3BackupConfiguration),
    'DataFormatConversionConfiguration': toJson_FirehoseDataFormatConversionConfiguration(obj.dataFormatConversionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseRedshiftDestinationConfiguration
 */
export interface FirehoseRedshiftDestinationConfiguration {
  /**
   * @schema FirehoseRedshiftDestinationConfiguration#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#ClusterJDBCURL
   */
  readonly clusterJdbcurl?: string;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#CopyCommand
   */
  readonly copyCommand?: FirehoseCopyCommand;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#Username
   */
  readonly username?: string;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#Password
   */
  readonly password?: string;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#RetryOptions
   */
  readonly retryOptions?: FirehoseRedshiftRetryOptions;

  /**
   * @schema FirehoseRedshiftDestinationConfiguration#S3Configuration
   */
  readonly s3Configuration?: FirehoseS3DestinationConfiguration;

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
 * Converts an object of type 'FirehoseRedshiftDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseRedshiftDestinationConfiguration(obj: FirehoseRedshiftDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'ClusterJDBCURL': obj.clusterJdbcurl,
    'CopyCommand': toJson_FirehoseCopyCommand(obj.copyCommand),
    'Username': obj.username,
    'Password': obj.password,
    'RetryOptions': toJson_FirehoseRedshiftRetryOptions(obj.retryOptions),
    'S3Configuration': toJson_FirehoseS3DestinationConfiguration(obj.s3Configuration),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'S3BackupMode': obj.s3BackupMode,
    'S3BackupConfiguration': toJson_FirehoseS3DestinationConfiguration(obj.s3BackupConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseElasticsearchDestinationConfiguration
 */
export interface FirehoseElasticsearchDestinationConfiguration {
  /**
   * @schema FirehoseElasticsearchDestinationConfiguration#RoleARN
   */
  readonly roleArn?: string;

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
  readonly indexName?: string;

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
  readonly s3Configuration?: FirehoseS3DestinationConfiguration;

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
 * Converts an object of type 'FirehoseElasticsearchDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseElasticsearchDestinationConfiguration(obj: FirehoseElasticsearchDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'DomainARN': obj.domainArn,
    'ClusterEndpoint': obj.clusterEndpoint,
    'IndexName': obj.indexName,
    'TypeName': obj.typeName,
    'IndexRotationPeriod': obj.indexRotationPeriod,
    'BufferingHints': toJson_FirehoseElasticsearchBufferingHints(obj.bufferingHints),
    'RetryOptions': toJson_FirehoseElasticsearchRetryOptions(obj.retryOptions),
    'S3BackupMode': obj.s3BackupMode,
    'S3Configuration': toJson_FirehoseS3DestinationConfiguration(obj.s3Configuration),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
    'VpcConfiguration': toJson_FirehoseVpcConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseSplunkDestinationConfiguration
 */
export interface FirehoseSplunkDestinationConfiguration {
  /**
   * @schema FirehoseSplunkDestinationConfiguration#HECEndpoint
   */
  readonly hecEndpoint?: string;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#HECEndpointType
   */
  readonly hecEndpointType?: string;

  /**
   * @schema FirehoseSplunkDestinationConfiguration#HECToken
   */
  readonly hecToken?: string;

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
  readonly s3Configuration?: FirehoseS3DestinationConfiguration;

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
 * Converts an object of type 'FirehoseSplunkDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseSplunkDestinationConfiguration(obj: FirehoseSplunkDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HECEndpoint': obj.hecEndpoint,
    'HECEndpointType': obj.hecEndpointType,
    'HECToken': obj.hecToken,
    'HECAcknowledgmentTimeoutInSeconds': obj.hecAcknowledgmentTimeoutInSeconds,
    'RetryOptions': toJson_FirehoseSplunkRetryOptions(obj.retryOptions),
    'S3BackupMode': obj.s3BackupMode,
    'S3Configuration': toJson_FirehoseS3DestinationConfiguration(obj.s3Configuration),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseHttpEndpointDestinationConfiguration
 */
export interface FirehoseHttpEndpointDestinationConfiguration {
  /**
   * @schema FirehoseHttpEndpointDestinationConfiguration#EndpointConfiguration
   */
  readonly endpointConfiguration?: FirehoseHttpEndpointConfiguration;

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
  readonly s3Configuration?: FirehoseS3DestinationConfiguration;

}

/**
 * Converts an object of type 'FirehoseHttpEndpointDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHttpEndpointDestinationConfiguration(obj: FirehoseHttpEndpointDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointConfiguration': toJson_FirehoseHttpEndpointConfiguration(obj.endpointConfiguration),
    'BufferingHints': toJson_FirehoseHttpEndpointBufferingHints(obj.bufferingHints),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
    'RequestConfiguration': toJson_FirehoseHttpEndpointRequestConfiguration(obj.requestConfiguration),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'RoleARN': obj.roleArn,
    'RetryOptions': toJson_FirehoseHttpEndpointRetryOptions(obj.retryOptions),
    'S3BackupMode': obj.s3BackupMode,
    'S3Configuration': toJson_FirehoseS3DestinationConfiguration(obj.s3Configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseTag
 */
export interface FirehoseTag {
  /**
   * @schema FirehoseTag#Key
   */
  readonly key?: string;

  /**
   * @schema FirehoseTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'FirehoseTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseTag(obj: FirehoseTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseDeliveryStreamDescription
 */
export interface FirehoseDeliveryStreamDescription {
  /**
   * @schema FirehoseDeliveryStreamDescription#DeliveryStreamName
   */
  readonly deliveryStreamName?: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#DeliveryStreamARN
   */
  readonly deliveryStreamArn?: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#DeliveryStreamStatus
   */
  readonly deliveryStreamStatus?: string;

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
  readonly deliveryStreamType?: string;

  /**
   * @schema FirehoseDeliveryStreamDescription#VersionId
   */
  readonly versionId?: string;

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
  readonly destinations?: FirehoseDestinationDescription[];

  /**
   * @schema FirehoseDeliveryStreamDescription#HasMoreDestinations
   */
  readonly hasMoreDestinations?: boolean;

}

/**
 * Converts an object of type 'FirehoseDeliveryStreamDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDeliveryStreamDescription(obj: FirehoseDeliveryStreamDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStreamName': obj.deliveryStreamName,
    'DeliveryStreamARN': obj.deliveryStreamArn,
    'DeliveryStreamStatus': obj.deliveryStreamStatus,
    'FailureDescription': toJson_FirehoseFailureDescription(obj.failureDescription),
    'DeliveryStreamEncryptionConfiguration': toJson_FirehoseDeliveryStreamEncryptionConfiguration(obj.deliveryStreamEncryptionConfiguration),
    'DeliveryStreamType': obj.deliveryStreamType,
    'VersionId': obj.versionId,
    'CreateTimestamp': obj.createTimestamp,
    'LastUpdateTimestamp': obj.lastUpdateTimestamp,
    'Source': toJson_FirehoseSourceDescription(obj.source),
    'Destinations': obj.destinations?.map(y => toJson_FirehoseDestinationDescription(y)),
    'HasMoreDestinations': obj.hasMoreDestinations,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseRecord
 */
export interface FirehoseRecord {
  /**
   * @schema FirehoseRecord#Data
   */
  readonly data?: any;

}

/**
 * Converts an object of type 'FirehoseRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseRecord(obj: FirehoseRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Data': obj.data,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehosePutRecordBatchResponseEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehosePutRecordBatchResponseEntry(obj: FirehosePutRecordBatchResponseEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordId': obj.recordId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseS3DestinationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseS3DestinationUpdate(obj: FirehoseS3DestinationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'BucketARN': obj.bucketArn,
    'Prefix': obj.prefix,
    'ErrorOutputPrefix': obj.errorOutputPrefix,
    'BufferingHints': toJson_FirehoseBufferingHints(obj.bufferingHints),
    'CompressionFormat': obj.compressionFormat,
    'EncryptionConfiguration': toJson_FirehoseEncryptionConfiguration(obj.encryptionConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseExtendedS3DestinationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseExtendedS3DestinationUpdate(obj: FirehoseExtendedS3DestinationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'BucketARN': obj.bucketArn,
    'Prefix': obj.prefix,
    'ErrorOutputPrefix': obj.errorOutputPrefix,
    'BufferingHints': toJson_FirehoseBufferingHints(obj.bufferingHints),
    'CompressionFormat': obj.compressionFormat,
    'EncryptionConfiguration': toJson_FirehoseEncryptionConfiguration(obj.encryptionConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'S3BackupMode': obj.s3BackupMode,
    'S3BackupUpdate': toJson_FirehoseS3DestinationUpdate(obj.s3BackupUpdate),
    'DataFormatConversionConfiguration': toJson_FirehoseDataFormatConversionConfiguration(obj.dataFormatConversionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseRedshiftDestinationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseRedshiftDestinationUpdate(obj: FirehoseRedshiftDestinationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'ClusterJDBCURL': obj.clusterJdbcurl,
    'CopyCommand': toJson_FirehoseCopyCommand(obj.copyCommand),
    'Username': obj.username,
    'Password': obj.password,
    'RetryOptions': toJson_FirehoseRedshiftRetryOptions(obj.retryOptions),
    'S3Update': toJson_FirehoseS3DestinationUpdate(obj.s3Update),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'S3BackupMode': obj.s3BackupMode,
    'S3BackupUpdate': toJson_FirehoseS3DestinationUpdate(obj.s3BackupUpdate),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseElasticsearchDestinationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseElasticsearchDestinationUpdate(obj: FirehoseElasticsearchDestinationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'DomainARN': obj.domainArn,
    'ClusterEndpoint': obj.clusterEndpoint,
    'IndexName': obj.indexName,
    'TypeName': obj.typeName,
    'IndexRotationPeriod': obj.indexRotationPeriod,
    'BufferingHints': toJson_FirehoseElasticsearchBufferingHints(obj.bufferingHints),
    'RetryOptions': toJson_FirehoseElasticsearchRetryOptions(obj.retryOptions),
    'S3Update': toJson_FirehoseS3DestinationUpdate(obj.s3Update),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseSplunkDestinationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseSplunkDestinationUpdate(obj: FirehoseSplunkDestinationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HECEndpoint': obj.hecEndpoint,
    'HECEndpointType': obj.hecEndpointType,
    'HECToken': obj.hecToken,
    'HECAcknowledgmentTimeoutInSeconds': obj.hecAcknowledgmentTimeoutInSeconds,
    'RetryOptions': toJson_FirehoseSplunkRetryOptions(obj.retryOptions),
    'S3BackupMode': obj.s3BackupMode,
    'S3Update': toJson_FirehoseS3DestinationUpdate(obj.s3Update),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseHttpEndpointDestinationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHttpEndpointDestinationUpdate(obj: FirehoseHttpEndpointDestinationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointConfiguration': toJson_FirehoseHttpEndpointConfiguration(obj.endpointConfiguration),
    'BufferingHints': toJson_FirehoseHttpEndpointBufferingHints(obj.bufferingHints),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
    'RequestConfiguration': toJson_FirehoseHttpEndpointRequestConfiguration(obj.requestConfiguration),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'RoleARN': obj.roleArn,
    'RetryOptions': toJson_FirehoseHttpEndpointRetryOptions(obj.retryOptions),
    'S3BackupMode': obj.s3BackupMode,
    'S3Update': toJson_FirehoseS3DestinationUpdate(obj.s3Update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseBufferingHints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseBufferingHints(obj: FirehoseBufferingHints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeInMBs': obj.sizeInMBs,
    'IntervalInSeconds': obj.intervalInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseEncryptionConfiguration(obj: FirehoseEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NoEncryptionConfig': obj.noEncryptionConfig,
    'KMSEncryptionConfig': toJson_FirehoseKmsEncryptionConfig(obj.kmsEncryptionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseCloudWatchLoggingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseCloudWatchLoggingOptions(obj: FirehoseCloudWatchLoggingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'LogGroupName': obj.logGroupName,
    'LogStreamName': obj.logStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseProcessingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseProcessingConfiguration(obj: FirehoseProcessingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Processors': obj.processors?.map(y => toJson_FirehoseProcessor(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseDataFormatConversionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDataFormatConversionConfiguration(obj: FirehoseDataFormatConversionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaConfiguration': toJson_FirehoseSchemaConfiguration(obj.schemaConfiguration),
    'InputFormatConfiguration': toJson_FirehoseInputFormatConfiguration(obj.inputFormatConfiguration),
    'OutputFormatConfiguration': toJson_FirehoseOutputFormatConfiguration(obj.outputFormatConfiguration),
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseCopyCommand
 */
export interface FirehoseCopyCommand {
  /**
   * @schema FirehoseCopyCommand#DataTableName
   */
  readonly dataTableName?: string;

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
 * Converts an object of type 'FirehoseCopyCommand' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseCopyCommand(obj: FirehoseCopyCommand | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataTableName': obj.dataTableName,
    'DataTableColumns': obj.dataTableColumns,
    'CopyOptions': obj.copyOptions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseRedshiftRetryOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseRedshiftRetryOptions(obj: FirehoseRedshiftRetryOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationInSeconds': obj.durationInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseElasticsearchBufferingHints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseElasticsearchBufferingHints(obj: FirehoseElasticsearchBufferingHints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IntervalInSeconds': obj.intervalInSeconds,
    'SizeInMBs': obj.sizeInMBs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseElasticsearchRetryOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseElasticsearchRetryOptions(obj: FirehoseElasticsearchRetryOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationInSeconds': obj.durationInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseVpcConfiguration
 */
export interface FirehoseVpcConfiguration {
  /**
   * @schema FirehoseVpcConfiguration#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema FirehoseVpcConfiguration#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseVpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'FirehoseVpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseVpcConfiguration(obj: FirehoseVpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIds': obj.subnetIds?.map(y => y),
    'RoleARN': obj.roleArn,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseSplunkRetryOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseSplunkRetryOptions(obj: FirehoseSplunkRetryOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationInSeconds': obj.durationInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseHttpEndpointConfiguration
 */
export interface FirehoseHttpEndpointConfiguration {
  /**
   * @schema FirehoseHttpEndpointConfiguration#Url
   */
  readonly url?: string;

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
 * Converts an object of type 'FirehoseHttpEndpointConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHttpEndpointConfiguration(obj: FirehoseHttpEndpointConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'Name': obj.name,
    'AccessKey': obj.accessKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseHttpEndpointBufferingHints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHttpEndpointBufferingHints(obj: FirehoseHttpEndpointBufferingHints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeInMBs': obj.sizeInMBs,
    'IntervalInSeconds': obj.intervalInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseHttpEndpointRequestConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHttpEndpointRequestConfiguration(obj: FirehoseHttpEndpointRequestConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentEncoding': obj.contentEncoding,
    'CommonAttributes': obj.commonAttributes?.map(y => toJson_FirehoseHttpEndpointCommonAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseHttpEndpointRetryOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHttpEndpointRetryOptions(obj: FirehoseHttpEndpointRetryOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationInSeconds': obj.durationInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseFailureDescription
 */
export interface FirehoseFailureDescription {
  /**
   * @schema FirehoseFailureDescription#Type
   */
  readonly type?: string;

  /**
   * @schema FirehoseFailureDescription#Details
   */
  readonly details?: string;

}

/**
 * Converts an object of type 'FirehoseFailureDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseFailureDescription(obj: FirehoseFailureDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseDeliveryStreamEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDeliveryStreamEncryptionConfiguration(obj: FirehoseDeliveryStreamEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyARN': obj.keyArn,
    'KeyType': obj.keyType,
    'Status': obj.status,
    'FailureDescription': toJson_FirehoseFailureDescription(obj.failureDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseSourceDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseSourceDescription(obj: FirehoseSourceDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KinesisStreamSourceDescription': toJson_FirehoseKinesisStreamSourceDescription(obj.kinesisStreamSourceDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseDestinationDescription
 */
export interface FirehoseDestinationDescription {
  /**
   * @schema FirehoseDestinationDescription#DestinationId
   */
  readonly destinationId?: string;

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
 * Converts an object of type 'FirehoseDestinationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDestinationDescription(obj: FirehoseDestinationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationId': obj.destinationId,
    'S3DestinationDescription': toJson_FirehoseS3DestinationDescription(obj.s3DestinationDescription),
    'ExtendedS3DestinationDescription': toJson_FirehoseExtendedS3DestinationDescription(obj.extendedS3DestinationDescription),
    'RedshiftDestinationDescription': toJson_FirehoseRedshiftDestinationDescription(obj.redshiftDestinationDescription),
    'ElasticsearchDestinationDescription': toJson_FirehoseElasticsearchDestinationDescription(obj.elasticsearchDestinationDescription),
    'SplunkDestinationDescription': toJson_FirehoseSplunkDestinationDescription(obj.splunkDestinationDescription),
    'HttpEndpointDestinationDescription': toJson_FirehoseHttpEndpointDestinationDescription(obj.httpEndpointDestinationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseKmsEncryptionConfig
 */
export interface FirehoseKmsEncryptionConfig {
  /**
   * @schema FirehoseKmsEncryptionConfig#AWSKMSKeyARN
   */
  readonly awskmsKeyArn?: string;

}

/**
 * Converts an object of type 'FirehoseKmsEncryptionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseKmsEncryptionConfig(obj: FirehoseKmsEncryptionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AWSKMSKeyARN': obj.awskmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseProcessor
 */
export interface FirehoseProcessor {
  /**
   * @schema FirehoseProcessor#Type
   */
  readonly type?: string;

  /**
   * @schema FirehoseProcessor#Parameters
   */
  readonly parameters?: FirehoseProcessorParameter[];

}

/**
 * Converts an object of type 'FirehoseProcessor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseProcessor(obj: FirehoseProcessor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Parameters': obj.parameters?.map(y => toJson_FirehoseProcessorParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseSchemaConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseSchemaConfiguration(obj: FirehoseSchemaConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'Region': obj.region,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseInputFormatConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseInputFormatConfiguration(obj: FirehoseInputFormatConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Deserializer': toJson_FirehoseDeserializer(obj.deserializer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseOutputFormatConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseOutputFormatConfiguration(obj: FirehoseOutputFormatConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Serializer': toJson_FirehoseSerializer(obj.serializer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseHttpEndpointCommonAttribute
 */
export interface FirehoseHttpEndpointCommonAttribute {
  /**
   * @schema FirehoseHttpEndpointCommonAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema FirehoseHttpEndpointCommonAttribute#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * Converts an object of type 'FirehoseHttpEndpointCommonAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHttpEndpointCommonAttribute(obj: FirehoseHttpEndpointCommonAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'AttributeValue': obj.attributeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseKinesisStreamSourceDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseKinesisStreamSourceDescription(obj: FirehoseKinesisStreamSourceDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KinesisStreamARN': obj.kinesisStreamArn,
    'RoleARN': obj.roleArn,
    'DeliveryStartTimestamp': obj.deliveryStartTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseS3DestinationDescription
 */
export interface FirehoseS3DestinationDescription {
  /**
   * @schema FirehoseS3DestinationDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseS3DestinationDescription#BucketARN
   */
  readonly bucketArn?: string;

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
  readonly bufferingHints?: FirehoseBufferingHints;

  /**
   * @schema FirehoseS3DestinationDescription#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema FirehoseS3DestinationDescription#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: FirehoseEncryptionConfiguration;

  /**
   * @schema FirehoseS3DestinationDescription#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: FirehoseCloudWatchLoggingOptions;

}

/**
 * Converts an object of type 'FirehoseS3DestinationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseS3DestinationDescription(obj: FirehoseS3DestinationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'BucketARN': obj.bucketArn,
    'Prefix': obj.prefix,
    'ErrorOutputPrefix': obj.errorOutputPrefix,
    'BufferingHints': toJson_FirehoseBufferingHints(obj.bufferingHints),
    'CompressionFormat': obj.compressionFormat,
    'EncryptionConfiguration': toJson_FirehoseEncryptionConfiguration(obj.encryptionConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseExtendedS3DestinationDescription
 */
export interface FirehoseExtendedS3DestinationDescription {
  /**
   * @schema FirehoseExtendedS3DestinationDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#BucketARN
   */
  readonly bucketArn?: string;

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
  readonly bufferingHints?: FirehoseBufferingHints;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema FirehoseExtendedS3DestinationDescription#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: FirehoseEncryptionConfiguration;

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
 * Converts an object of type 'FirehoseExtendedS3DestinationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseExtendedS3DestinationDescription(obj: FirehoseExtendedS3DestinationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'BucketARN': obj.bucketArn,
    'Prefix': obj.prefix,
    'ErrorOutputPrefix': obj.errorOutputPrefix,
    'BufferingHints': toJson_FirehoseBufferingHints(obj.bufferingHints),
    'CompressionFormat': obj.compressionFormat,
    'EncryptionConfiguration': toJson_FirehoseEncryptionConfiguration(obj.encryptionConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'S3BackupMode': obj.s3BackupMode,
    'S3BackupDescription': toJson_FirehoseS3DestinationDescription(obj.s3BackupDescription),
    'DataFormatConversionConfiguration': toJson_FirehoseDataFormatConversionConfiguration(obj.dataFormatConversionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseRedshiftDestinationDescription
 */
export interface FirehoseRedshiftDestinationDescription {
  /**
   * @schema FirehoseRedshiftDestinationDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseRedshiftDestinationDescription#ClusterJDBCURL
   */
  readonly clusterJdbcurl?: string;

  /**
   * @schema FirehoseRedshiftDestinationDescription#CopyCommand
   */
  readonly copyCommand?: FirehoseCopyCommand;

  /**
   * @schema FirehoseRedshiftDestinationDescription#Username
   */
  readonly username?: string;

  /**
   * @schema FirehoseRedshiftDestinationDescription#RetryOptions
   */
  readonly retryOptions?: FirehoseRedshiftRetryOptions;

  /**
   * @schema FirehoseRedshiftDestinationDescription#S3DestinationDescription
   */
  readonly s3DestinationDescription?: FirehoseS3DestinationDescription;

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
 * Converts an object of type 'FirehoseRedshiftDestinationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseRedshiftDestinationDescription(obj: FirehoseRedshiftDestinationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'ClusterJDBCURL': obj.clusterJdbcurl,
    'CopyCommand': toJson_FirehoseCopyCommand(obj.copyCommand),
    'Username': obj.username,
    'RetryOptions': toJson_FirehoseRedshiftRetryOptions(obj.retryOptions),
    'S3DestinationDescription': toJson_FirehoseS3DestinationDescription(obj.s3DestinationDescription),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'S3BackupMode': obj.s3BackupMode,
    'S3BackupDescription': toJson_FirehoseS3DestinationDescription(obj.s3BackupDescription),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseElasticsearchDestinationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseElasticsearchDestinationDescription(obj: FirehoseElasticsearchDestinationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'DomainARN': obj.domainArn,
    'ClusterEndpoint': obj.clusterEndpoint,
    'IndexName': obj.indexName,
    'TypeName': obj.typeName,
    'IndexRotationPeriod': obj.indexRotationPeriod,
    'BufferingHints': toJson_FirehoseElasticsearchBufferingHints(obj.bufferingHints),
    'RetryOptions': toJson_FirehoseElasticsearchRetryOptions(obj.retryOptions),
    'S3BackupMode': obj.s3BackupMode,
    'S3DestinationDescription': toJson_FirehoseS3DestinationDescription(obj.s3DestinationDescription),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
    'VpcConfigurationDescription': toJson_FirehoseVpcConfigurationDescription(obj.vpcConfigurationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseSplunkDestinationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseSplunkDestinationDescription(obj: FirehoseSplunkDestinationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HECEndpoint': obj.hecEndpoint,
    'HECEndpointType': obj.hecEndpointType,
    'HECToken': obj.hecToken,
    'HECAcknowledgmentTimeoutInSeconds': obj.hecAcknowledgmentTimeoutInSeconds,
    'RetryOptions': toJson_FirehoseSplunkRetryOptions(obj.retryOptions),
    'S3BackupMode': obj.s3BackupMode,
    'S3DestinationDescription': toJson_FirehoseS3DestinationDescription(obj.s3DestinationDescription),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseHttpEndpointDestinationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHttpEndpointDestinationDescription(obj: FirehoseHttpEndpointDestinationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointConfiguration': toJson_FirehoseHttpEndpointDescription(obj.endpointConfiguration),
    'BufferingHints': toJson_FirehoseHttpEndpointBufferingHints(obj.bufferingHints),
    'CloudWatchLoggingOptions': toJson_FirehoseCloudWatchLoggingOptions(obj.cloudWatchLoggingOptions),
    'RequestConfiguration': toJson_FirehoseHttpEndpointRequestConfiguration(obj.requestConfiguration),
    'ProcessingConfiguration': toJson_FirehoseProcessingConfiguration(obj.processingConfiguration),
    'RoleARN': obj.roleArn,
    'RetryOptions': toJson_FirehoseHttpEndpointRetryOptions(obj.retryOptions),
    'S3BackupMode': obj.s3BackupMode,
    'S3DestinationDescription': toJson_FirehoseS3DestinationDescription(obj.s3DestinationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseProcessorParameter
 */
export interface FirehoseProcessorParameter {
  /**
   * @schema FirehoseProcessorParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema FirehoseProcessorParameter#ParameterValue
   */
  readonly parameterValue?: string;

}

/**
 * Converts an object of type 'FirehoseProcessorParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseProcessorParameter(obj: FirehoseProcessorParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterName': obj.parameterName,
    'ParameterValue': obj.parameterValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseDeserializer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseDeserializer(obj: FirehoseDeserializer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenXJsonSerDe': toJson_FirehoseOpenXJsonSerDe(obj.openXJsonSerDe),
    'HiveJsonSerDe': toJson_FirehoseHiveJsonSerDe(obj.hiveJsonSerDe),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseSerializer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseSerializer(obj: FirehoseSerializer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParquetSerDe': toJson_FirehoseParquetSerDe(obj.parquetSerDe),
    'OrcSerDe': toJson_FirehoseOrcSerDe(obj.orcSerDe),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FirehoseVpcConfigurationDescription
 */
export interface FirehoseVpcConfigurationDescription {
  /**
   * @schema FirehoseVpcConfigurationDescription#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema FirehoseVpcConfigurationDescription#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema FirehoseVpcConfigurationDescription#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema FirehoseVpcConfigurationDescription#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'FirehoseVpcConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseVpcConfigurationDescription(obj: FirehoseVpcConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIds': obj.subnetIds?.map(y => y),
    'RoleARN': obj.roleArn,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseHttpEndpointDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHttpEndpointDescription(obj: FirehoseHttpEndpointDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseOpenXJsonSerDe' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseOpenXJsonSerDe(obj: FirehoseOpenXJsonSerDe | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConvertDotsInJsonKeysToUnderscores': obj.convertDotsInJsonKeysToUnderscores,
    'CaseInsensitive': obj.caseInsensitive,
    'ColumnToJsonKeyMappings': ((obj.columnToJsonKeyMappings) === undefined) ? undefined : (Object.entries(obj.columnToJsonKeyMappings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseHiveJsonSerDe' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseHiveJsonSerDe(obj: FirehoseHiveJsonSerDe | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimestampFormats': obj.timestampFormats?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'FirehoseParquetSerDe' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseParquetSerDe(obj: FirehoseParquetSerDe | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlockSizeBytes': obj.blockSizeBytes,
    'PageSizeBytes': obj.pageSizeBytes,
    'Compression': obj.compression,
    'EnableDictionaryCompression': obj.enableDictionaryCompression,
    'MaxPaddingBytes': obj.maxPaddingBytes,
    'WriterVersion': obj.writerVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'FirehoseOrcSerDe' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FirehoseOrcSerDe(obj: FirehoseOrcSerDe | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StripeSizeBytes': obj.stripeSizeBytes,
    'BlockSizeBytes': obj.blockSizeBytes,
    'RowIndexStride': obj.rowIndexStride,
    'EnablePadding': obj.enablePadding,
    'PaddingTolerance': obj.paddingTolerance,
    'Compression': obj.compression,
    'BloomFilterColumns': obj.bloomFilterColumns?.map(y => y),
    'BloomFilterFalsePositiveProbability': obj.bloomFilterFalsePositiveProbability,
    'DictionaryKeyThreshold': obj.dictionaryKeyThreshold,
    'FormatVersion': obj.formatVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
