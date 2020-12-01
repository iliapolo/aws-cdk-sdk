/**
 * @schema CancelJournalKinesisStreamRequest
 */
export interface CancelJournalKinesisStreamRequest {
  /**
   * @schema CancelJournalKinesisStreamRequest#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema CancelJournalKinesisStreamRequest#StreamId
   */
  readonly streamId: string;

}

/**
 * @schema CancelJournalKinesisStreamResponse
 */
export interface CancelJournalKinesisStreamResponse {
  /**
   * @schema CancelJournalKinesisStreamResponse#StreamId
   */
  readonly streamId?: string;

}

/**
 * @schema CreateLedgerRequest
 */
export interface CreateLedgerRequest {
  /**
   * @schema CreateLedgerRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateLedgerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateLedgerRequest#PermissionsMode
   */
  readonly permissionsMode: string;

  /**
   * @schema CreateLedgerRequest#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema CreateLedgerResponse
 */
export interface CreateLedgerResponse {
  /**
   * @schema CreateLedgerResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateLedgerResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateLedgerResponse#State
   */
  readonly state?: string;

  /**
   * @schema CreateLedgerResponse#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema CreateLedgerResponse#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema DeleteLedgerRequest
 */
export interface DeleteLedgerRequest {
  /**
   * @schema DeleteLedgerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeJournalKinesisStreamRequest
 */
export interface DescribeJournalKinesisStreamRequest {
  /**
   * @schema DescribeJournalKinesisStreamRequest#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema DescribeJournalKinesisStreamRequest#StreamId
   */
  readonly streamId: string;

}

/**
 * @schema DescribeJournalKinesisStreamResponse
 */
export interface DescribeJournalKinesisStreamResponse {
  /**
   * @schema DescribeJournalKinesisStreamResponse#Stream
   */
  readonly stream?: JournalKinesisStreamDescription;

}

/**
 * @schema DescribeJournalS3ExportRequest
 */
export interface DescribeJournalS3ExportRequest {
  /**
   * @schema DescribeJournalS3ExportRequest#Name
   */
  readonly name: string;

  /**
   * @schema DescribeJournalS3ExportRequest#ExportId
   */
  readonly exportId: string;

}

/**
 * @schema DescribeJournalS3ExportResponse
 */
export interface DescribeJournalS3ExportResponse {
  /**
   * @schema DescribeJournalS3ExportResponse#ExportDescription
   */
  readonly exportDescription: JournalS3ExportDescription;

}

/**
 * @schema DescribeLedgerRequest
 */
export interface DescribeLedgerRequest {
  /**
   * @schema DescribeLedgerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeLedgerResponse
 */
export interface DescribeLedgerResponse {
  /**
   * @schema DescribeLedgerResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeLedgerResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeLedgerResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeLedgerResponse#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DescribeLedgerResponse#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema ExportJournalToS3Request
 */
export interface ExportJournalToS3Request {
  /**
   * @schema ExportJournalToS3Request#Name
   */
  readonly name: string;

  /**
   * @schema ExportJournalToS3Request#InclusiveStartTime
   */
  readonly inclusiveStartTime: string;

  /**
   * @schema ExportJournalToS3Request#ExclusiveEndTime
   */
  readonly exclusiveEndTime: string;

  /**
   * @schema ExportJournalToS3Request#S3ExportConfiguration
   */
  readonly s3ExportConfiguration: S3ExportConfiguration;

  /**
   * @schema ExportJournalToS3Request#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema ExportJournalToS3Response
 */
export interface ExportJournalToS3Response {
  /**
   * @schema ExportJournalToS3Response#ExportId
   */
  readonly exportId: string;

}

/**
 * @schema GetBlockRequest
 */
export interface GetBlockRequest {
  /**
   * @schema GetBlockRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetBlockRequest#BlockAddress
   */
  readonly blockAddress: ValueHolder;

  /**
   * @schema GetBlockRequest#DigestTipAddress
   */
  readonly digestTipAddress?: ValueHolder;

}

/**
 * @schema GetBlockResponse
 */
export interface GetBlockResponse {
  /**
   * @schema GetBlockResponse#Block
   */
  readonly block: ValueHolder;

  /**
   * @schema GetBlockResponse#Proof
   */
  readonly proof?: ValueHolder;

}

/**
 * @schema GetDigestRequest
 */
export interface GetDigestRequest {
  /**
   * @schema GetDigestRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetDigestResponse
 */
export interface GetDigestResponse {
  /**
   * @schema GetDigestResponse#Digest
   */
  readonly digest: any;

  /**
   * @schema GetDigestResponse#DigestTipAddress
   */
  readonly digestTipAddress: ValueHolder;

}

/**
 * @schema GetRevisionRequest
 */
export interface GetRevisionRequest {
  /**
   * @schema GetRevisionRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetRevisionRequest#BlockAddress
   */
  readonly blockAddress: ValueHolder;

  /**
   * @schema GetRevisionRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema GetRevisionRequest#DigestTipAddress
   */
  readonly digestTipAddress?: ValueHolder;

}

/**
 * @schema GetRevisionResponse
 */
export interface GetRevisionResponse {
  /**
   * @schema GetRevisionResponse#Proof
   */
  readonly proof?: ValueHolder;

  /**
   * @schema GetRevisionResponse#Revision
   */
  readonly revision: ValueHolder;

}

/**
 * @schema ListJournalKinesisStreamsForLedgerRequest
 */
export interface ListJournalKinesisStreamsForLedgerRequest {
  /**
   * @schema ListJournalKinesisStreamsForLedgerRequest#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema ListJournalKinesisStreamsForLedgerRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJournalKinesisStreamsForLedgerRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJournalKinesisStreamsForLedgerResponse
 */
export interface ListJournalKinesisStreamsForLedgerResponse {
  /**
   * @schema ListJournalKinesisStreamsForLedgerResponse#Streams
   */
  readonly streams?: JournalKinesisStreamDescription[];

  /**
   * @schema ListJournalKinesisStreamsForLedgerResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJournalS3ExportsRequest
 */
export interface ListJournalS3ExportsRequest {
  /**
   * @schema ListJournalS3ExportsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJournalS3ExportsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJournalS3ExportsResponse
 */
export interface ListJournalS3ExportsResponse {
  /**
   * @schema ListJournalS3ExportsResponse#JournalS3Exports
   */
  readonly journalS3Exports?: JournalS3ExportDescription[];

  /**
   * @schema ListJournalS3ExportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJournalS3ExportsForLedgerRequest
 */
export interface ListJournalS3ExportsForLedgerRequest {
  /**
   * @schema ListJournalS3ExportsForLedgerRequest#Name
   */
  readonly name: string;

  /**
   * @schema ListJournalS3ExportsForLedgerRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJournalS3ExportsForLedgerRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJournalS3ExportsForLedgerResponse
 */
export interface ListJournalS3ExportsForLedgerResponse {
  /**
   * @schema ListJournalS3ExportsForLedgerResponse#JournalS3Exports
   */
  readonly journalS3Exports?: JournalS3ExportDescription[];

  /**
   * @schema ListJournalS3ExportsForLedgerResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLedgersRequest
 */
export interface ListLedgersRequest {
  /**
   * @schema ListLedgersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListLedgersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLedgersResponse
 */
export interface ListLedgersResponse {
  /**
   * @schema ListLedgersResponse#Ledgers
   */
  readonly ledgers?: LedgerSummary[];

  /**
   * @schema ListLedgersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
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
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StreamJournalToKinesisRequest
 */
export interface StreamJournalToKinesisRequest {
  /**
   * @schema StreamJournalToKinesisRequest#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema StreamJournalToKinesisRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema StreamJournalToKinesisRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema StreamJournalToKinesisRequest#InclusiveStartTime
   */
  readonly inclusiveStartTime: string;

  /**
   * @schema StreamJournalToKinesisRequest#ExclusiveEndTime
   */
  readonly exclusiveEndTime?: string;

  /**
   * @schema StreamJournalToKinesisRequest#KinesisConfiguration
   */
  readonly kinesisConfiguration: KinesisConfiguration;

  /**
   * @schema StreamJournalToKinesisRequest#StreamName
   */
  readonly streamName: string;

}

/**
 * @schema StreamJournalToKinesisResponse
 */
export interface StreamJournalToKinesisResponse {
  /**
   * @schema StreamJournalToKinesisResponse#StreamId
   */
  readonly streamId?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

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
   * @schema UntagResourceRequest#ResourceArn
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
 * @schema UpdateLedgerRequest
 */
export interface UpdateLedgerRequest {
  /**
   * @schema UpdateLedgerRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateLedgerRequest#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema UpdateLedgerResponse
 */
export interface UpdateLedgerResponse {
  /**
   * @schema UpdateLedgerResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateLedgerResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateLedgerResponse#State
   */
  readonly state?: string;

  /**
   * @schema UpdateLedgerResponse#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema UpdateLedgerResponse#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema JournalKinesisStreamDescription
 */
export interface JournalKinesisStreamDescription {
  /**
   * @schema JournalKinesisStreamDescription#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema JournalKinesisStreamDescription#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema JournalKinesisStreamDescription#InclusiveStartTime
   */
  readonly inclusiveStartTime?: string;

  /**
   * @schema JournalKinesisStreamDescription#ExclusiveEndTime
   */
  readonly exclusiveEndTime?: string;

  /**
   * @schema JournalKinesisStreamDescription#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema JournalKinesisStreamDescription#StreamId
   */
  readonly streamId: string;

  /**
   * @schema JournalKinesisStreamDescription#Arn
   */
  readonly arn?: string;

  /**
   * @schema JournalKinesisStreamDescription#Status
   */
  readonly status: string;

  /**
   * @schema JournalKinesisStreamDescription#KinesisConfiguration
   */
  readonly kinesisConfiguration: KinesisConfiguration;

  /**
   * @schema JournalKinesisStreamDescription#ErrorCause
   */
  readonly errorCause?: string;

  /**
   * @schema JournalKinesisStreamDescription#StreamName
   */
  readonly streamName: string;

}

/**
 * @schema JournalS3ExportDescription
 */
export interface JournalS3ExportDescription {
  /**
   * @schema JournalS3ExportDescription#LedgerName
   */
  readonly ledgerName: string;

  /**
   * @schema JournalS3ExportDescription#ExportId
   */
  readonly exportId: string;

  /**
   * @schema JournalS3ExportDescription#ExportCreationTime
   */
  readonly exportCreationTime: string;

  /**
   * @schema JournalS3ExportDescription#Status
   */
  readonly status: string;

  /**
   * @schema JournalS3ExportDescription#InclusiveStartTime
   */
  readonly inclusiveStartTime: string;

  /**
   * @schema JournalS3ExportDescription#ExclusiveEndTime
   */
  readonly exclusiveEndTime: string;

  /**
   * @schema JournalS3ExportDescription#S3ExportConfiguration
   */
  readonly s3ExportConfiguration: S3ExportConfiguration;

  /**
   * @schema JournalS3ExportDescription#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema S3ExportConfiguration
 */
export interface S3ExportConfiguration {
  /**
   * @schema S3ExportConfiguration#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ExportConfiguration#Prefix
   */
  readonly prefix: string;

  /**
   * @schema S3ExportConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration: S3EncryptionConfiguration;

}

/**
 * @schema ValueHolder
 */
export interface ValueHolder {
  /**
   * @schema ValueHolder#IonText
   */
  readonly ionText?: string;

}

/**
 * @schema LedgerSummary
 */
export interface LedgerSummary {
  /**
   * @schema LedgerSummary#Name
   */
  readonly name?: string;

  /**
   * @schema LedgerSummary#State
   */
  readonly state?: string;

  /**
   * @schema LedgerSummary#CreationDateTime
   */
  readonly creationDateTime?: string;

}

/**
 * @schema KinesisConfiguration
 */
export interface KinesisConfiguration {
  /**
   * @schema KinesisConfiguration#StreamArn
   */
  readonly streamArn: string;

  /**
   * @schema KinesisConfiguration#AggregationEnabled
   */
  readonly aggregationEnabled?: boolean;

}

/**
 * @schema S3EncryptionConfiguration
 */
export interface S3EncryptionConfiguration {
  /**
   * @schema S3EncryptionConfiguration#ObjectEncryptionType
   */
  readonly objectEncryptionType: string;

  /**
   * @schema S3EncryptionConfiguration#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}
