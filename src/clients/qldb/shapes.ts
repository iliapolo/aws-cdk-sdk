/**
 * @schema QldbCancelJournalKinesisStreamRequest
 */
export interface QldbCancelJournalKinesisStreamRequest {
  /**
   * @schema QldbCancelJournalKinesisStreamRequest#LedgerName
   */
  readonly ledgerName?: string;

  /**
   * @schema QldbCancelJournalKinesisStreamRequest#StreamId
   */
  readonly streamId?: string;

}

/**
 * Converts an object of type 'QldbCancelJournalKinesisStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbCancelJournalKinesisStreamRequest(obj: QldbCancelJournalKinesisStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LedgerName': obj.ledgerName,
    'StreamId': obj.streamId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbCancelJournalKinesisStreamResponse
 */
export interface QldbCancelJournalKinesisStreamResponse {
  /**
   * @schema QldbCancelJournalKinesisStreamResponse#StreamId
   */
  readonly streamId?: string;

}

/**
 * Converts an object of type 'QldbCancelJournalKinesisStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbCancelJournalKinesisStreamResponse(obj: QldbCancelJournalKinesisStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamId': obj.streamId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbCreateLedgerRequest
 */
export interface QldbCreateLedgerRequest {
  /**
   * @schema QldbCreateLedgerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QldbCreateLedgerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema QldbCreateLedgerRequest#PermissionsMode
   */
  readonly permissionsMode?: string;

  /**
   * @schema QldbCreateLedgerRequest#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema QldbCreateLedgerRequest#KmsKey
   */
  readonly kmsKey?: string;

}

/**
 * Converts an object of type 'QldbCreateLedgerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbCreateLedgerRequest(obj: QldbCreateLedgerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'PermissionsMode': obj.permissionsMode,
    'DeletionProtection': obj.deletionProtection,
    'KmsKey': obj.kmsKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbCreateLedgerResponse
 */
export interface QldbCreateLedgerResponse {
  /**
   * @schema QldbCreateLedgerResponse#Name
   */
  readonly name?: string;

  /**
   * @schema QldbCreateLedgerResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QldbCreateLedgerResponse#State
   */
  readonly state?: string;

  /**
   * @schema QldbCreateLedgerResponse#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema QldbCreateLedgerResponse#PermissionsMode
   */
  readonly permissionsMode?: string;

  /**
   * @schema QldbCreateLedgerResponse#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema QldbCreateLedgerResponse#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'QldbCreateLedgerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbCreateLedgerResponse(obj: QldbCreateLedgerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'State': obj.state,
    'CreationDateTime': obj.creationDateTime,
    'PermissionsMode': obj.permissionsMode,
    'DeletionProtection': obj.deletionProtection,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbDeleteLedgerRequest
 */
export interface QldbDeleteLedgerRequest {
  /**
   * @schema QldbDeleteLedgerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'QldbDeleteLedgerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbDeleteLedgerRequest(obj: QldbDeleteLedgerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbDescribeJournalKinesisStreamRequest
 */
export interface QldbDescribeJournalKinesisStreamRequest {
  /**
   * @schema QldbDescribeJournalKinesisStreamRequest#LedgerName
   */
  readonly ledgerName?: string;

  /**
   * @schema QldbDescribeJournalKinesisStreamRequest#StreamId
   */
  readonly streamId?: string;

}

/**
 * Converts an object of type 'QldbDescribeJournalKinesisStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbDescribeJournalKinesisStreamRequest(obj: QldbDescribeJournalKinesisStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LedgerName': obj.ledgerName,
    'StreamId': obj.streamId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbDescribeJournalKinesisStreamResponse
 */
export interface QldbDescribeJournalKinesisStreamResponse {
  /**
   * @schema QldbDescribeJournalKinesisStreamResponse#Stream
   */
  readonly stream?: QldbJournalKinesisStreamDescription;

}

/**
 * Converts an object of type 'QldbDescribeJournalKinesisStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbDescribeJournalKinesisStreamResponse(obj: QldbDescribeJournalKinesisStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Stream': toJson_QldbJournalKinesisStreamDescription(obj.stream),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbDescribeJournalS3ExportRequest
 */
export interface QldbDescribeJournalS3ExportRequest {
  /**
   * @schema QldbDescribeJournalS3ExportRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QldbDescribeJournalS3ExportRequest#ExportId
   */
  readonly exportId?: string;

}

/**
 * Converts an object of type 'QldbDescribeJournalS3ExportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbDescribeJournalS3ExportRequest(obj: QldbDescribeJournalS3ExportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ExportId': obj.exportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbDescribeJournalS3ExportResponse
 */
export interface QldbDescribeJournalS3ExportResponse {
  /**
   * @schema QldbDescribeJournalS3ExportResponse#ExportDescription
   */
  readonly exportDescription?: QldbJournalS3ExportDescription;

}

/**
 * Converts an object of type 'QldbDescribeJournalS3ExportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbDescribeJournalS3ExportResponse(obj: QldbDescribeJournalS3ExportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportDescription': toJson_QldbJournalS3ExportDescription(obj.exportDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbDescribeLedgerRequest
 */
export interface QldbDescribeLedgerRequest {
  /**
   * @schema QldbDescribeLedgerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'QldbDescribeLedgerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbDescribeLedgerRequest(obj: QldbDescribeLedgerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbDescribeLedgerResponse
 */
export interface QldbDescribeLedgerResponse {
  /**
   * @schema QldbDescribeLedgerResponse#Name
   */
  readonly name?: string;

  /**
   * @schema QldbDescribeLedgerResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QldbDescribeLedgerResponse#State
   */
  readonly state?: string;

  /**
   * @schema QldbDescribeLedgerResponse#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema QldbDescribeLedgerResponse#PermissionsMode
   */
  readonly permissionsMode?: string;

  /**
   * @schema QldbDescribeLedgerResponse#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema QldbDescribeLedgerResponse#EncryptionDescription
   */
  readonly encryptionDescription?: QldbLedgerEncryptionDescription;

}

/**
 * Converts an object of type 'QldbDescribeLedgerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbDescribeLedgerResponse(obj: QldbDescribeLedgerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'State': obj.state,
    'CreationDateTime': obj.creationDateTime,
    'PermissionsMode': obj.permissionsMode,
    'DeletionProtection': obj.deletionProtection,
    'EncryptionDescription': toJson_QldbLedgerEncryptionDescription(obj.encryptionDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbExportJournalToS3Request
 */
export interface QldbExportJournalToS3Request {
  /**
   * @schema QldbExportJournalToS3Request#Name
   */
  readonly name?: string;

  /**
   * @schema QldbExportJournalToS3Request#InclusiveStartTime
   */
  readonly inclusiveStartTime?: string;

  /**
   * @schema QldbExportJournalToS3Request#ExclusiveEndTime
   */
  readonly exclusiveEndTime?: string;

  /**
   * @schema QldbExportJournalToS3Request#S3ExportConfiguration
   */
  readonly s3ExportConfiguration?: Qldbs3ExportConfiguration;

  /**
   * @schema QldbExportJournalToS3Request#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'QldbExportJournalToS3Request' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbExportJournalToS3Request(obj: QldbExportJournalToS3Request | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'InclusiveStartTime': obj.inclusiveStartTime,
    'ExclusiveEndTime': obj.exclusiveEndTime,
    'S3ExportConfiguration': toJson_Qldbs3ExportConfiguration(obj.s3ExportConfiguration),
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbExportJournalToS3Response
 */
export interface QldbExportJournalToS3Response {
  /**
   * @schema QldbExportJournalToS3Response#ExportId
   */
  readonly exportId?: string;

}

/**
 * Converts an object of type 'QldbExportJournalToS3Response' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbExportJournalToS3Response(obj: QldbExportJournalToS3Response | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportId': obj.exportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbGetBlockRequest
 */
export interface QldbGetBlockRequest {
  /**
   * @schema QldbGetBlockRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QldbGetBlockRequest#BlockAddress
   */
  readonly blockAddress?: QldbValueHolder;

  /**
   * @schema QldbGetBlockRequest#DigestTipAddress
   */
  readonly digestTipAddress?: QldbValueHolder;

}

/**
 * Converts an object of type 'QldbGetBlockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbGetBlockRequest(obj: QldbGetBlockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'BlockAddress': toJson_QldbValueHolder(obj.blockAddress),
    'DigestTipAddress': toJson_QldbValueHolder(obj.digestTipAddress),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbGetBlockResponse
 */
export interface QldbGetBlockResponse {
  /**
   * @schema QldbGetBlockResponse#Block
   */
  readonly block?: QldbValueHolder;

  /**
   * @schema QldbGetBlockResponse#Proof
   */
  readonly proof?: QldbValueHolder;

}

/**
 * Converts an object of type 'QldbGetBlockResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbGetBlockResponse(obj: QldbGetBlockResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Block': toJson_QldbValueHolder(obj.block),
    'Proof': toJson_QldbValueHolder(obj.proof),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbGetDigestRequest
 */
export interface QldbGetDigestRequest {
  /**
   * @schema QldbGetDigestRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'QldbGetDigestRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbGetDigestRequest(obj: QldbGetDigestRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbGetDigestResponse
 */
export interface QldbGetDigestResponse {
  /**
   * @schema QldbGetDigestResponse#Digest
   */
  readonly digest?: any;

  /**
   * @schema QldbGetDigestResponse#DigestTipAddress
   */
  readonly digestTipAddress?: QldbValueHolder;

}

/**
 * Converts an object of type 'QldbGetDigestResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbGetDigestResponse(obj: QldbGetDigestResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Digest': obj.digest,
    'DigestTipAddress': toJson_QldbValueHolder(obj.digestTipAddress),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbGetRevisionRequest
 */
export interface QldbGetRevisionRequest {
  /**
   * @schema QldbGetRevisionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QldbGetRevisionRequest#BlockAddress
   */
  readonly blockAddress?: QldbValueHolder;

  /**
   * @schema QldbGetRevisionRequest#DocumentId
   */
  readonly documentId?: string;

  /**
   * @schema QldbGetRevisionRequest#DigestTipAddress
   */
  readonly digestTipAddress?: QldbValueHolder;

}

/**
 * Converts an object of type 'QldbGetRevisionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbGetRevisionRequest(obj: QldbGetRevisionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'BlockAddress': toJson_QldbValueHolder(obj.blockAddress),
    'DocumentId': obj.documentId,
    'DigestTipAddress': toJson_QldbValueHolder(obj.digestTipAddress),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbGetRevisionResponse
 */
export interface QldbGetRevisionResponse {
  /**
   * @schema QldbGetRevisionResponse#Proof
   */
  readonly proof?: QldbValueHolder;

  /**
   * @schema QldbGetRevisionResponse#Revision
   */
  readonly revision?: QldbValueHolder;

}

/**
 * Converts an object of type 'QldbGetRevisionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbGetRevisionResponse(obj: QldbGetRevisionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Proof': toJson_QldbValueHolder(obj.proof),
    'Revision': toJson_QldbValueHolder(obj.revision),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListJournalKinesisStreamsForLedgerRequest
 */
export interface QldbListJournalKinesisStreamsForLedgerRequest {
  /**
   * @schema QldbListJournalKinesisStreamsForLedgerRequest#LedgerName
   */
  readonly ledgerName?: string;

  /**
   * @schema QldbListJournalKinesisStreamsForLedgerRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QldbListJournalKinesisStreamsForLedgerRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QldbListJournalKinesisStreamsForLedgerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListJournalKinesisStreamsForLedgerRequest(obj: QldbListJournalKinesisStreamsForLedgerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LedgerName': obj.ledgerName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListJournalKinesisStreamsForLedgerResponse
 */
export interface QldbListJournalKinesisStreamsForLedgerResponse {
  /**
   * @schema QldbListJournalKinesisStreamsForLedgerResponse#Streams
   */
  readonly streams?: QldbJournalKinesisStreamDescription[];

  /**
   * @schema QldbListJournalKinesisStreamsForLedgerResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QldbListJournalKinesisStreamsForLedgerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListJournalKinesisStreamsForLedgerResponse(obj: QldbListJournalKinesisStreamsForLedgerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Streams': obj.streams?.map(y => toJson_QldbJournalKinesisStreamDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListJournalS3ExportsRequest
 */
export interface QldbListJournalS3ExportsRequest {
  /**
   * @schema QldbListJournalS3ExportsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QldbListJournalS3ExportsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QldbListJournalS3ExportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListJournalS3ExportsRequest(obj: QldbListJournalS3ExportsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListJournalS3ExportsResponse
 */
export interface QldbListJournalS3ExportsResponse {
  /**
   * @schema QldbListJournalS3ExportsResponse#JournalS3Exports
   */
  readonly journalS3Exports?: QldbJournalS3ExportDescription[];

  /**
   * @schema QldbListJournalS3ExportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QldbListJournalS3ExportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListJournalS3ExportsResponse(obj: QldbListJournalS3ExportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JournalS3Exports': obj.journalS3Exports?.map(y => toJson_QldbJournalS3ExportDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListJournalS3ExportsForLedgerRequest
 */
export interface QldbListJournalS3ExportsForLedgerRequest {
  /**
   * @schema QldbListJournalS3ExportsForLedgerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QldbListJournalS3ExportsForLedgerRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QldbListJournalS3ExportsForLedgerRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QldbListJournalS3ExportsForLedgerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListJournalS3ExportsForLedgerRequest(obj: QldbListJournalS3ExportsForLedgerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListJournalS3ExportsForLedgerResponse
 */
export interface QldbListJournalS3ExportsForLedgerResponse {
  /**
   * @schema QldbListJournalS3ExportsForLedgerResponse#JournalS3Exports
   */
  readonly journalS3Exports?: QldbJournalS3ExportDescription[];

  /**
   * @schema QldbListJournalS3ExportsForLedgerResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QldbListJournalS3ExportsForLedgerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListJournalS3ExportsForLedgerResponse(obj: QldbListJournalS3ExportsForLedgerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JournalS3Exports': obj.journalS3Exports?.map(y => toJson_QldbJournalS3ExportDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListLedgersRequest
 */
export interface QldbListLedgersRequest {
  /**
   * @schema QldbListLedgersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QldbListLedgersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QldbListLedgersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListLedgersRequest(obj: QldbListLedgersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListLedgersResponse
 */
export interface QldbListLedgersResponse {
  /**
   * @schema QldbListLedgersResponse#Ledgers
   */
  readonly ledgers?: QldbLedgerSummary[];

  /**
   * @schema QldbListLedgersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QldbListLedgersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListLedgersResponse(obj: QldbListLedgersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ledgers': obj.ledgers?.map(y => toJson_QldbLedgerSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListTagsForResourceRequest
 */
export interface QldbListTagsForResourceRequest {
  /**
   * @schema QldbListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'QldbListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListTagsForResourceRequest(obj: QldbListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbListTagsForResourceResponse
 */
export interface QldbListTagsForResourceResponse {
  /**
   * @schema QldbListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'QldbListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbListTagsForResourceResponse(obj: QldbListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbStreamJournalToKinesisRequest
 */
export interface QldbStreamJournalToKinesisRequest {
  /**
   * @schema QldbStreamJournalToKinesisRequest#LedgerName
   */
  readonly ledgerName?: string;

  /**
   * @schema QldbStreamJournalToKinesisRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema QldbStreamJournalToKinesisRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema QldbStreamJournalToKinesisRequest#InclusiveStartTime
   */
  readonly inclusiveStartTime?: string;

  /**
   * @schema QldbStreamJournalToKinesisRequest#ExclusiveEndTime
   */
  readonly exclusiveEndTime?: string;

  /**
   * @schema QldbStreamJournalToKinesisRequest#KinesisConfiguration
   */
  readonly kinesisConfiguration?: QldbKinesisConfiguration;

  /**
   * @schema QldbStreamJournalToKinesisRequest#StreamName
   */
  readonly streamName?: string;

}

/**
 * Converts an object of type 'QldbStreamJournalToKinesisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbStreamJournalToKinesisRequest(obj: QldbStreamJournalToKinesisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LedgerName': obj.ledgerName,
    'RoleArn': obj.roleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'InclusiveStartTime': obj.inclusiveStartTime,
    'ExclusiveEndTime': obj.exclusiveEndTime,
    'KinesisConfiguration': toJson_QldbKinesisConfiguration(obj.kinesisConfiguration),
    'StreamName': obj.streamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbStreamJournalToKinesisResponse
 */
export interface QldbStreamJournalToKinesisResponse {
  /**
   * @schema QldbStreamJournalToKinesisResponse#StreamId
   */
  readonly streamId?: string;

}

/**
 * Converts an object of type 'QldbStreamJournalToKinesisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbStreamJournalToKinesisResponse(obj: QldbStreamJournalToKinesisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamId': obj.streamId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbTagResourceRequest
 */
export interface QldbTagResourceRequest {
  /**
   * @schema QldbTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema QldbTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'QldbTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbTagResourceRequest(obj: QldbTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbTagResourceResponse
 */
export interface QldbTagResourceResponse {
}

/**
 * Converts an object of type 'QldbTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbTagResourceResponse(obj: QldbTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbUntagResourceRequest
 */
export interface QldbUntagResourceRequest {
  /**
   * @schema QldbUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema QldbUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'QldbUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbUntagResourceRequest(obj: QldbUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbUntagResourceResponse
 */
export interface QldbUntagResourceResponse {
}

/**
 * Converts an object of type 'QldbUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbUntagResourceResponse(obj: QldbUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbUpdateLedgerRequest
 */
export interface QldbUpdateLedgerRequest {
  /**
   * @schema QldbUpdateLedgerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QldbUpdateLedgerRequest#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema QldbUpdateLedgerRequest#KmsKey
   */
  readonly kmsKey?: string;

}

/**
 * Converts an object of type 'QldbUpdateLedgerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbUpdateLedgerRequest(obj: QldbUpdateLedgerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DeletionProtection': obj.deletionProtection,
    'KmsKey': obj.kmsKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbUpdateLedgerResponse
 */
export interface QldbUpdateLedgerResponse {
  /**
   * @schema QldbUpdateLedgerResponse#Name
   */
  readonly name?: string;

  /**
   * @schema QldbUpdateLedgerResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QldbUpdateLedgerResponse#State
   */
  readonly state?: string;

  /**
   * @schema QldbUpdateLedgerResponse#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema QldbUpdateLedgerResponse#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema QldbUpdateLedgerResponse#EncryptionDescription
   */
  readonly encryptionDescription?: QldbLedgerEncryptionDescription;

}

/**
 * Converts an object of type 'QldbUpdateLedgerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbUpdateLedgerResponse(obj: QldbUpdateLedgerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'State': obj.state,
    'CreationDateTime': obj.creationDateTime,
    'DeletionProtection': obj.deletionProtection,
    'EncryptionDescription': toJson_QldbLedgerEncryptionDescription(obj.encryptionDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbUpdateLedgerPermissionsModeRequest
 */
export interface QldbUpdateLedgerPermissionsModeRequest {
  /**
   * @schema QldbUpdateLedgerPermissionsModeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QldbUpdateLedgerPermissionsModeRequest#PermissionsMode
   */
  readonly permissionsMode?: string;

}

/**
 * Converts an object of type 'QldbUpdateLedgerPermissionsModeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbUpdateLedgerPermissionsModeRequest(obj: QldbUpdateLedgerPermissionsModeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'PermissionsMode': obj.permissionsMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbUpdateLedgerPermissionsModeResponse
 */
export interface QldbUpdateLedgerPermissionsModeResponse {
  /**
   * @schema QldbUpdateLedgerPermissionsModeResponse#Name
   */
  readonly name?: string;

  /**
   * @schema QldbUpdateLedgerPermissionsModeResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QldbUpdateLedgerPermissionsModeResponse#PermissionsMode
   */
  readonly permissionsMode?: string;

}

/**
 * Converts an object of type 'QldbUpdateLedgerPermissionsModeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbUpdateLedgerPermissionsModeResponse(obj: QldbUpdateLedgerPermissionsModeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'PermissionsMode': obj.permissionsMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbJournalKinesisStreamDescription
 */
export interface QldbJournalKinesisStreamDescription {
  /**
   * @schema QldbJournalKinesisStreamDescription#LedgerName
   */
  readonly ledgerName?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#InclusiveStartTime
   */
  readonly inclusiveStartTime?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#ExclusiveEndTime
   */
  readonly exclusiveEndTime?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#Arn
   */
  readonly arn?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#Status
   */
  readonly status?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#KinesisConfiguration
   */
  readonly kinesisConfiguration?: QldbKinesisConfiguration;

  /**
   * @schema QldbJournalKinesisStreamDescription#ErrorCause
   */
  readonly errorCause?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#StreamName
   */
  readonly streamName?: string;

}

/**
 * Converts an object of type 'QldbJournalKinesisStreamDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbJournalKinesisStreamDescription(obj: QldbJournalKinesisStreamDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LedgerName': obj.ledgerName,
    'CreationTime': obj.creationTime,
    'InclusiveStartTime': obj.inclusiveStartTime,
    'ExclusiveEndTime': obj.exclusiveEndTime,
    'RoleArn': obj.roleArn,
    'StreamId': obj.streamId,
    'Arn': obj.arn,
    'Status': obj.status,
    'KinesisConfiguration': toJson_QldbKinesisConfiguration(obj.kinesisConfiguration),
    'ErrorCause': obj.errorCause,
    'StreamName': obj.streamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbJournalS3ExportDescription
 */
export interface QldbJournalS3ExportDescription {
  /**
   * @schema QldbJournalS3ExportDescription#LedgerName
   */
  readonly ledgerName?: string;

  /**
   * @schema QldbJournalS3ExportDescription#ExportId
   */
  readonly exportId?: string;

  /**
   * @schema QldbJournalS3ExportDescription#ExportCreationTime
   */
  readonly exportCreationTime?: string;

  /**
   * @schema QldbJournalS3ExportDescription#Status
   */
  readonly status?: string;

  /**
   * @schema QldbJournalS3ExportDescription#InclusiveStartTime
   */
  readonly inclusiveStartTime?: string;

  /**
   * @schema QldbJournalS3ExportDescription#ExclusiveEndTime
   */
  readonly exclusiveEndTime?: string;

  /**
   * @schema QldbJournalS3ExportDescription#S3ExportConfiguration
   */
  readonly s3ExportConfiguration?: Qldbs3ExportConfiguration;

  /**
   * @schema QldbJournalS3ExportDescription#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'QldbJournalS3ExportDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbJournalS3ExportDescription(obj: QldbJournalS3ExportDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LedgerName': obj.ledgerName,
    'ExportId': obj.exportId,
    'ExportCreationTime': obj.exportCreationTime,
    'Status': obj.status,
    'InclusiveStartTime': obj.inclusiveStartTime,
    'ExclusiveEndTime': obj.exclusiveEndTime,
    'S3ExportConfiguration': toJson_Qldbs3ExportConfiguration(obj.s3ExportConfiguration),
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbLedgerEncryptionDescription
 */
export interface QldbLedgerEncryptionDescription {
  /**
   * @schema QldbLedgerEncryptionDescription#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema QldbLedgerEncryptionDescription#EncryptionStatus
   */
  readonly encryptionStatus?: string;

  /**
   * @schema QldbLedgerEncryptionDescription#InaccessibleKmsKeyDateTime
   */
  readonly inaccessibleKmsKeyDateTime?: string;

}

/**
 * Converts an object of type 'QldbLedgerEncryptionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbLedgerEncryptionDescription(obj: QldbLedgerEncryptionDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsKeyArn': obj.kmsKeyArn,
    'EncryptionStatus': obj.encryptionStatus,
    'InaccessibleKmsKeyDateTime': obj.inaccessibleKmsKeyDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Qldbs3ExportConfiguration
 */
export interface Qldbs3ExportConfiguration {
  /**
   * @schema Qldbs3ExportConfiguration#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema Qldbs3ExportConfiguration#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema Qldbs3ExportConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: Qldbs3EncryptionConfiguration;

}

/**
 * Converts an object of type 'Qldbs3ExportConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Qldbs3ExportConfiguration(obj: Qldbs3ExportConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Prefix': obj.prefix,
    'EncryptionConfiguration': toJson_Qldbs3EncryptionConfiguration(obj.encryptionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbValueHolder
 */
export interface QldbValueHolder {
  /**
   * @schema QldbValueHolder#IonText
   */
  readonly ionText?: string;

}

/**
 * Converts an object of type 'QldbValueHolder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbValueHolder(obj: QldbValueHolder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IonText': obj.ionText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbLedgerSummary
 */
export interface QldbLedgerSummary {
  /**
   * @schema QldbLedgerSummary#Name
   */
  readonly name?: string;

  /**
   * @schema QldbLedgerSummary#State
   */
  readonly state?: string;

  /**
   * @schema QldbLedgerSummary#CreationDateTime
   */
  readonly creationDateTime?: string;

}

/**
 * Converts an object of type 'QldbLedgerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbLedgerSummary(obj: QldbLedgerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'State': obj.state,
    'CreationDateTime': obj.creationDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbKinesisConfiguration
 */
export interface QldbKinesisConfiguration {
  /**
   * @schema QldbKinesisConfiguration#StreamArn
   */
  readonly streamArn?: string;

  /**
   * @schema QldbKinesisConfiguration#AggregationEnabled
   */
  readonly aggregationEnabled?: boolean;

}

/**
 * Converts an object of type 'QldbKinesisConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbKinesisConfiguration(obj: QldbKinesisConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamArn': obj.streamArn,
    'AggregationEnabled': obj.aggregationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Qldbs3EncryptionConfiguration
 */
export interface Qldbs3EncryptionConfiguration {
  /**
   * @schema Qldbs3EncryptionConfiguration#ObjectEncryptionType
   */
  readonly objectEncryptionType?: string;

  /**
   * @schema Qldbs3EncryptionConfiguration#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'Qldbs3EncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Qldbs3EncryptionConfiguration(obj: Qldbs3EncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectEncryptionType': obj.objectEncryptionType,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
