/**
 * @schema QldbCancelJournalKinesisStreamRequest
 */
export interface QldbCancelJournalKinesisStreamRequest {
  /**
   * @schema QldbCancelJournalKinesisStreamRequest#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema QldbCancelJournalKinesisStreamRequest#StreamId
   */
  readonly streamId: string;

}

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
 * @schema QldbCreateLedgerRequest
 */
export interface QldbCreateLedgerRequest {
  /**
   * @schema QldbCreateLedgerRequest#Name
   */
  readonly name: string;

  /**
   * @schema QldbCreateLedgerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema QldbCreateLedgerRequest#PermissionsMode
   */
  readonly permissionsMode: string;

  /**
   * @schema QldbCreateLedgerRequest#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

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
   * @schema QldbCreateLedgerResponse#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema QldbDeleteLedgerRequest
 */
export interface QldbDeleteLedgerRequest {
  /**
   * @schema QldbDeleteLedgerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema QldbDescribeJournalKinesisStreamRequest
 */
export interface QldbDescribeJournalKinesisStreamRequest {
  /**
   * @schema QldbDescribeJournalKinesisStreamRequest#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema QldbDescribeJournalKinesisStreamRequest#StreamId
   */
  readonly streamId: string;

}

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
 * @schema QldbDescribeJournalS3ExportRequest
 */
export interface QldbDescribeJournalS3ExportRequest {
  /**
   * @schema QldbDescribeJournalS3ExportRequest#Name
   */
  readonly name: string;

  /**
   * @schema QldbDescribeJournalS3ExportRequest#ExportId
   */
  readonly exportId: string;

}

/**
 * @schema QldbDescribeJournalS3ExportResponse
 */
export interface QldbDescribeJournalS3ExportResponse {
  /**
   * @schema QldbDescribeJournalS3ExportResponse#ExportDescription
   */
  readonly exportDescription: QldbJournalS3ExportDescription;

}

/**
 * @schema QldbDescribeLedgerRequest
 */
export interface QldbDescribeLedgerRequest {
  /**
   * @schema QldbDescribeLedgerRequest#Name
   */
  readonly name: string;

}

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
   * @schema QldbDescribeLedgerResponse#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema QldbExportJournalToS3Request
 */
export interface QldbExportJournalToS3Request {
  /**
   * @schema QldbExportJournalToS3Request#Name
   */
  readonly name: string;

  /**
   * @schema QldbExportJournalToS3Request#InclusiveStartTime
   */
  readonly inclusiveStartTime: string;

  /**
   * @schema QldbExportJournalToS3Request#ExclusiveEndTime
   */
  readonly exclusiveEndTime: string;

  /**
   * @schema QldbExportJournalToS3Request#S3ExportConfiguration
   */
  readonly s3ExportConfiguration: Qldbs3ExportConfiguration;

  /**
   * @schema QldbExportJournalToS3Request#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema QldbExportJournalToS3Response
 */
export interface QldbExportJournalToS3Response {
  /**
   * @schema QldbExportJournalToS3Response#ExportId
   */
  readonly exportId: string;

}

/**
 * @schema QldbGetBlockRequest
 */
export interface QldbGetBlockRequest {
  /**
   * @schema QldbGetBlockRequest#Name
   */
  readonly name: string;

  /**
   * @schema QldbGetBlockRequest#BlockAddress
   */
  readonly blockAddress: QldbValueHolder;

  /**
   * @schema QldbGetBlockRequest#DigestTipAddress
   */
  readonly digestTipAddress?: QldbValueHolder;

}

/**
 * @schema QldbGetBlockResponse
 */
export interface QldbGetBlockResponse {
  /**
   * @schema QldbGetBlockResponse#Block
   */
  readonly block: QldbValueHolder;

  /**
   * @schema QldbGetBlockResponse#Proof
   */
  readonly proof?: QldbValueHolder;

}

/**
 * @schema QldbGetDigestRequest
 */
export interface QldbGetDigestRequest {
  /**
   * @schema QldbGetDigestRequest#Name
   */
  readonly name: string;

}

/**
 * @schema QldbGetDigestResponse
 */
export interface QldbGetDigestResponse {
  /**
   * @schema QldbGetDigestResponse#Digest
   */
  readonly digest: any;

  /**
   * @schema QldbGetDigestResponse#DigestTipAddress
   */
  readonly digestTipAddress: QldbValueHolder;

}

/**
 * @schema QldbGetRevisionRequest
 */
export interface QldbGetRevisionRequest {
  /**
   * @schema QldbGetRevisionRequest#Name
   */
  readonly name: string;

  /**
   * @schema QldbGetRevisionRequest#BlockAddress
   */
  readonly blockAddress: QldbValueHolder;

  /**
   * @schema QldbGetRevisionRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema QldbGetRevisionRequest#DigestTipAddress
   */
  readonly digestTipAddress?: QldbValueHolder;

}

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
  readonly revision: QldbValueHolder;

}

/**
 * @schema QldbListJournalKinesisStreamsForLedgerRequest
 */
export interface QldbListJournalKinesisStreamsForLedgerRequest {
  /**
   * @schema QldbListJournalKinesisStreamsForLedgerRequest#LedgerName
   */
  readonly ledgerName: string;

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
 * @schema QldbListJournalS3ExportsForLedgerRequest
 */
export interface QldbListJournalS3ExportsForLedgerRequest {
  /**
   * @schema QldbListJournalS3ExportsForLedgerRequest#Name
   */
  readonly name: string;

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
 * @schema QldbListTagsForResourceRequest
 */
export interface QldbListTagsForResourceRequest {
  /**
   * @schema QldbListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema QldbStreamJournalToKinesisRequest
 */
export interface QldbStreamJournalToKinesisRequest {
  /**
   * @schema QldbStreamJournalToKinesisRequest#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema QldbStreamJournalToKinesisRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema QldbStreamJournalToKinesisRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema QldbStreamJournalToKinesisRequest#InclusiveStartTime
   */
  readonly inclusiveStartTime: string;

  /**
   * @schema QldbStreamJournalToKinesisRequest#ExclusiveEndTime
   */
  readonly exclusiveEndTime?: string;

  /**
   * @schema QldbStreamJournalToKinesisRequest#KinesisConfiguration
   */
  readonly kinesisConfiguration: QldbKinesisConfiguration;

  /**
   * @schema QldbStreamJournalToKinesisRequest#StreamName
   */
  readonly streamName: string;

}

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
 * @schema QldbTagResourceRequest
 */
export interface QldbTagResourceRequest {
  /**
   * @schema QldbTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema QldbTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema QldbTagResourceResponse
 */
export interface QldbTagResourceResponse {
}

/**
 * @schema QldbUntagResourceRequest
 */
export interface QldbUntagResourceRequest {
  /**
   * @schema QldbUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema QldbUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema QldbUntagResourceResponse
 */
export interface QldbUntagResourceResponse {
}

/**
 * @schema QldbUpdateLedgerRequest
 */
export interface QldbUpdateLedgerRequest {
  /**
   * @schema QldbUpdateLedgerRequest#Name
   */
  readonly name: string;

  /**
   * @schema QldbUpdateLedgerRequest#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

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

}

/**
 * @schema QldbJournalKinesisStreamDescription
 */
export interface QldbJournalKinesisStreamDescription {
  /**
   * @schema QldbJournalKinesisStreamDescription#LedgerName
   */
  readonly ledgerName: string;

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
  readonly roleArn: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#StreamId
   */
  readonly streamId: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#Arn
   */
  readonly arn?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#Status
   */
  readonly status: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#KinesisConfiguration
   */
  readonly kinesisConfiguration: QldbKinesisConfiguration;

  /**
   * @schema QldbJournalKinesisStreamDescription#ErrorCause
   */
  readonly errorCause?: string;

  /**
   * @schema QldbJournalKinesisStreamDescription#StreamName
   */
  readonly streamName: string;

}

/**
 * @schema QldbJournalS3ExportDescription
 */
export interface QldbJournalS3ExportDescription {
  /**
   * @schema QldbJournalS3ExportDescription#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema QldbJournalS3ExportDescription#ExportId
   */
  readonly exportId: string;

  /**
   * @schema QldbJournalS3ExportDescription#ExportCreationTime
   */
  readonly exportCreationTime: string;

  /**
   * @schema QldbJournalS3ExportDescription#Status
   */
  readonly status: string;

  /**
   * @schema QldbJournalS3ExportDescription#InclusiveStartTime
   */
  readonly inclusiveStartTime: string;

  /**
   * @schema QldbJournalS3ExportDescription#ExclusiveEndTime
   */
  readonly exclusiveEndTime: string;

  /**
   * @schema QldbJournalS3ExportDescription#S3ExportConfiguration
   */
  readonly s3ExportConfiguration: Qldbs3ExportConfiguration;

  /**
   * @schema QldbJournalS3ExportDescription#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema Qldbs3ExportConfiguration
 */
export interface Qldbs3ExportConfiguration {
  /**
   * @schema Qldbs3ExportConfiguration#Bucket
   */
  readonly bucket: string;

  /**
   * @schema Qldbs3ExportConfiguration#Prefix
   */
  readonly prefix: string;

  /**
   * @schema Qldbs3ExportConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration: Qldbs3EncryptionConfiguration;

}

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
 * @schema QldbKinesisConfiguration
 */
export interface QldbKinesisConfiguration {
  /**
   * @schema QldbKinesisConfiguration#StreamArn
   */
  readonly streamArn: string;

  /**
   * @schema QldbKinesisConfiguration#AggregationEnabled
   */
  readonly aggregationEnabled?: boolean;

}

/**
 * @schema Qldbs3EncryptionConfiguration
 */
export interface Qldbs3EncryptionConfiguration {
  /**
   * @schema Qldbs3EncryptionConfiguration#ObjectEncryptionType
   */
  readonly objectEncryptionType: string;

  /**
   * @schema Qldbs3EncryptionConfiguration#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}
