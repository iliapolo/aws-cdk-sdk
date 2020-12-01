/**
 * @schema CancelJobRequest
 */
export interface CancelJobRequest {
  /**
   * @schema CancelJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema CreateDataSetRequest
 */
export interface CreateDataSetRequest {
  /**
   * @schema CreateDataSetRequest#AssetType
   */
  readonly assetType: string;

  /**
   * @schema CreateDataSetRequest#Description
   */
  readonly description: string;

  /**
   * @schema CreateDataSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateDataSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateDataSetResponse
 */
export interface CreateDataSetResponse {
  /**
   * @schema CreateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateDataSetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema CreateDataSetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateDataSetResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateDataSetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateDataSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateDataSetResponse#Origin
   */
  readonly origin?: string;

  /**
   * @schema CreateDataSetResponse#OriginDetails
   */
  readonly originDetails?: OriginDetails;

  /**
   * @schema CreateDataSetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema CreateDataSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateDataSetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema CreateJobRequest
 */
export interface CreateJobRequest {
  /**
   * @schema CreateJobRequest#Details
   */
  readonly details: RequestDetails;

  /**
   * @schema CreateJobRequest#Type
   */
  readonly type: string;

}

/**
 * @schema CreateJobResponse
 */
export interface CreateJobResponse {
  /**
   * @schema CreateJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateJobResponse#Details
   */
  readonly details?: ResponseDetails;

  /**
   * @schema CreateJobResponse#Errors
   */
  readonly errors?: JobError[];

  /**
   * @schema CreateJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateJobResponse#State
   */
  readonly state?: string;

  /**
   * @schema CreateJobResponse#Type
   */
  readonly type?: string;

  /**
   * @schema CreateJobResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema CreateRevisionRequest
 */
export interface CreateRevisionRequest {
  /**
   * @schema CreateRevisionRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema CreateRevisionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema CreateRevisionRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRevisionResponse
 */
export interface CreateRevisionResponse {
  /**
   * @schema CreateRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateRevisionResponse#Comment
   */
  readonly comment?: string;

  /**
   * @schema CreateRevisionResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateRevisionResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema CreateRevisionResponse#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema CreateRevisionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateRevisionResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema CreateRevisionResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateRevisionResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DeleteAssetRequest
 */
export interface DeleteAssetRequest {
  /**
   * @schema DeleteAssetRequest#AssetId
   */
  readonly assetId: string;

  /**
   * @schema DeleteAssetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DeleteAssetRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DeleteDataSetRequest
 */
export interface DeleteDataSetRequest {
  /**
   * @schema DeleteDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

}

/**
 * @schema DeleteRevisionRequest
 */
export interface DeleteRevisionRequest {
  /**
   * @schema DeleteRevisionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DeleteRevisionRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema GetAssetRequest
 */
export interface GetAssetRequest {
  /**
   * @schema GetAssetRequest#AssetId
   */
  readonly assetId: string;

  /**
   * @schema GetAssetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema GetAssetRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema GetAssetResponse
 */
export interface GetAssetResponse {
  /**
   * @schema GetAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetAssetResponse#AssetDetails
   */
  readonly assetDetails?: AssetDetails;

  /**
   * @schema GetAssetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema GetAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetAssetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema GetAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetAssetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetAssetResponse#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema GetAssetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema GetAssetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema GetDataSetRequest
 */
export interface GetDataSetRequest {
  /**
   * @schema GetDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

}

/**
 * @schema GetDataSetResponse
 */
export interface GetDataSetResponse {
  /**
   * @schema GetDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetDataSetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema GetDataSetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetDataSetResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetDataSetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetDataSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetDataSetResponse#Origin
   */
  readonly origin?: string;

  /**
   * @schema GetDataSetResponse#OriginDetails
   */
  readonly originDetails?: OriginDetails;

  /**
   * @schema GetDataSetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema GetDataSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GetDataSetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema GetJobRequest
 */
export interface GetJobRequest {
  /**
   * @schema GetJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema GetJobResponse
 */
export interface GetJobResponse {
  /**
   * @schema GetJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetJobResponse#Details
   */
  readonly details?: ResponseDetails;

  /**
   * @schema GetJobResponse#Errors
   */
  readonly errors?: JobError[];

  /**
   * @schema GetJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetJobResponse#State
   */
  readonly state?: string;

  /**
   * @schema GetJobResponse#Type
   */
  readonly type?: string;

  /**
   * @schema GetJobResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema GetRevisionRequest
 */
export interface GetRevisionRequest {
  /**
   * @schema GetRevisionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema GetRevisionRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema GetRevisionResponse
 */
export interface GetRevisionResponse {
  /**
   * @schema GetRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetRevisionResponse#Comment
   */
  readonly comment?: string;

  /**
   * @schema GetRevisionResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetRevisionResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema GetRevisionResponse#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema GetRevisionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetRevisionResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema GetRevisionResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GetRevisionResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema ListDataSetRevisionsRequest
 */
export interface ListDataSetRevisionsRequest {
  /**
   * @schema ListDataSetRevisionsRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ListDataSetRevisionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDataSetRevisionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDataSetRevisionsResponse
 */
export interface ListDataSetRevisionsResponse {
  /**
   * @schema ListDataSetRevisionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataSetRevisionsResponse#Revisions
   */
  readonly revisions?: RevisionEntry[];

}

/**
 * @schema ListDataSetsRequest
 */
export interface ListDataSetsRequest {
  /**
   * @schema ListDataSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDataSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataSetsRequest#Origin
   */
  readonly origin?: string;

}

/**
 * @schema ListDataSetsResponse
 */
export interface ListDataSetsResponse {
  /**
   * @schema ListDataSetsResponse#DataSets
   */
  readonly dataSets?: DataSetEntry[];

  /**
   * @schema ListDataSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema ListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListJobsRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema ListJobsResponse
 */
export interface ListJobsResponse {
  /**
   * @schema ListJobsResponse#Jobs
   */
  readonly jobs?: JobEntry[];

  /**
   * @schema ListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRevisionAssetsRequest
 */
export interface ListRevisionAssetsRequest {
  /**
   * @schema ListRevisionAssetsRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ListRevisionAssetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRevisionAssetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRevisionAssetsRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema ListRevisionAssetsResponse
 */
export interface ListRevisionAssetsResponse {
  /**
   * @schema ListRevisionAssetsResponse#Assets
   */
  readonly assets?: AssetEntry[];

  /**
   * @schema ListRevisionAssetsResponse#NextToken
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
 * @schema StartJobRequest
 */
export interface StartJobRequest {
  /**
   * @schema StartJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StartJobResponse
 */
export interface StartJobResponse {
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
 * @schema UpdateAssetRequest
 */
export interface UpdateAssetRequest {
  /**
   * @schema UpdateAssetRequest#AssetId
   */
  readonly assetId: string;

  /**
   * @schema UpdateAssetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema UpdateAssetRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateAssetRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema UpdateAssetResponse
 */
export interface UpdateAssetResponse {
  /**
   * @schema UpdateAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateAssetResponse#AssetDetails
   */
  readonly assetDetails?: AssetDetails;

  /**
   * @schema UpdateAssetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema UpdateAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema UpdateAssetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema UpdateAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema UpdateAssetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateAssetResponse#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema UpdateAssetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema UpdateAssetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema UpdateDataSetRequest
 */
export interface UpdateDataSetRequest {
  /**
   * @schema UpdateDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema UpdateDataSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateDataSetRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateDataSetResponse
 */
export interface UpdateDataSetResponse {
  /**
   * @schema UpdateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateDataSetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema UpdateDataSetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema UpdateDataSetResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateDataSetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema UpdateDataSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateDataSetResponse#Origin
   */
  readonly origin?: string;

  /**
   * @schema UpdateDataSetResponse#OriginDetails
   */
  readonly originDetails?: OriginDetails;

  /**
   * @schema UpdateDataSetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema UpdateDataSetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema UpdateRevisionRequest
 */
export interface UpdateRevisionRequest {
  /**
   * @schema UpdateRevisionRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema UpdateRevisionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema UpdateRevisionRequest#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema UpdateRevisionRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema UpdateRevisionResponse
 */
export interface UpdateRevisionResponse {
  /**
   * @schema UpdateRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateRevisionResponse#Comment
   */
  readonly comment?: string;

  /**
   * @schema UpdateRevisionResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema UpdateRevisionResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema UpdateRevisionResponse#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema UpdateRevisionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema UpdateRevisionResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema UpdateRevisionResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema OriginDetails
 */
export interface OriginDetails {
  /**
   * @schema OriginDetails#ProductId
   */
  readonly productId: string;

}

/**
 * @schema RequestDetails
 */
export interface RequestDetails {
  /**
   * @schema RequestDetails#ExportAssetToSignedUrl
   */
  readonly exportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;

  /**
   * @schema RequestDetails#ExportAssetsToS3
   */
  readonly exportAssetsToS3?: ExportAssetsToS3RequestDetails;

  /**
   * @schema RequestDetails#ImportAssetFromSignedUrl
   */
  readonly importAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;

  /**
   * @schema RequestDetails#ImportAssetsFromS3
   */
  readonly importAssetsFromS3?: ImportAssetsFromS3RequestDetails;

}

/**
 * @schema ResponseDetails
 */
export interface ResponseDetails {
  /**
   * @schema ResponseDetails#ExportAssetToSignedUrl
   */
  readonly exportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;

  /**
   * @schema ResponseDetails#ExportAssetsToS3
   */
  readonly exportAssetsToS3?: ExportAssetsToS3ResponseDetails;

  /**
   * @schema ResponseDetails#ImportAssetFromSignedUrl
   */
  readonly importAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;

  /**
   * @schema ResponseDetails#ImportAssetsFromS3
   */
  readonly importAssetsFromS3?: ImportAssetsFromS3ResponseDetails;

}

/**
 * @schema JobError
 */
export interface JobError {
  /**
   * @schema JobError#Code
   */
  readonly code: string;

  /**
   * @schema JobError#Details
   */
  readonly details?: Details;

  /**
   * @schema JobError#LimitName
   */
  readonly limitName?: string;

  /**
   * @schema JobError#LimitValue
   */
  readonly limitValue?: number;

  /**
   * @schema JobError#Message
   */
  readonly message: string;

  /**
   * @schema JobError#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema JobError#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema AssetDetails
 */
export interface AssetDetails {
  /**
   * @schema AssetDetails#S3SnapshotAsset
   */
  readonly s3SnapshotAsset?: S3SnapshotAsset;

}

/**
 * @schema RevisionEntry
 */
export interface RevisionEntry {
  /**
   * @schema RevisionEntry#Arn
   */
  readonly arn: string;

  /**
   * @schema RevisionEntry#Comment
   */
  readonly comment?: string;

  /**
   * @schema RevisionEntry#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema RevisionEntry#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema RevisionEntry#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema RevisionEntry#Id
   */
  readonly id: string;

  /**
   * @schema RevisionEntry#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema RevisionEntry#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema DataSetEntry
 */
export interface DataSetEntry {
  /**
   * @schema DataSetEntry#Arn
   */
  readonly arn: string;

  /**
   * @schema DataSetEntry#AssetType
   */
  readonly assetType: string;

  /**
   * @schema DataSetEntry#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema DataSetEntry#Description
   */
  readonly description: string;

  /**
   * @schema DataSetEntry#Id
   */
  readonly id: string;

  /**
   * @schema DataSetEntry#Name
   */
  readonly name: string;

  /**
   * @schema DataSetEntry#Origin
   */
  readonly origin: string;

  /**
   * @schema DataSetEntry#OriginDetails
   */
  readonly originDetails?: OriginDetails;

  /**
   * @schema DataSetEntry#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataSetEntry#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema JobEntry
 */
export interface JobEntry {
  /**
   * @schema JobEntry#Arn
   */
  readonly arn: string;

  /**
   * @schema JobEntry#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema JobEntry#Details
   */
  readonly details: ResponseDetails;

  /**
   * @schema JobEntry#Errors
   */
  readonly errors?: JobError[];

  /**
   * @schema JobEntry#Id
   */
  readonly id: string;

  /**
   * @schema JobEntry#State
   */
  readonly state: string;

  /**
   * @schema JobEntry#Type
   */
  readonly type: string;

  /**
   * @schema JobEntry#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema AssetEntry
 */
export interface AssetEntry {
  /**
   * @schema AssetEntry#Arn
   */
  readonly arn: string;

  /**
   * @schema AssetEntry#AssetDetails
   */
  readonly assetDetails: AssetDetails;

  /**
   * @schema AssetEntry#AssetType
   */
  readonly assetType: string;

  /**
   * @schema AssetEntry#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema AssetEntry#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema AssetEntry#Id
   */
  readonly id: string;

  /**
   * @schema AssetEntry#Name
   */
  readonly name: string;

  /**
   * @schema AssetEntry#RevisionId
   */
  readonly revisionId: string;

  /**
   * @schema AssetEntry#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema AssetEntry#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema ExportAssetToSignedUrlRequestDetails
 */
export interface ExportAssetToSignedUrlRequestDetails {
  /**
   * @schema ExportAssetToSignedUrlRequestDetails#AssetId
   */
  readonly assetId: string;

  /**
   * @schema ExportAssetToSignedUrlRequestDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ExportAssetToSignedUrlRequestDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema ExportAssetsToS3RequestDetails
 */
export interface ExportAssetsToS3RequestDetails {
  /**
   * @schema ExportAssetsToS3RequestDetails#AssetDestinations
   */
  readonly assetDestinations: AssetDestinationEntry[];

  /**
   * @schema ExportAssetsToS3RequestDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ExportAssetsToS3RequestDetails#Encryption
   */
  readonly encryption?: ExportServerSideEncryption;

  /**
   * @schema ExportAssetsToS3RequestDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema ImportAssetFromSignedUrlRequestDetails
 */
export interface ImportAssetFromSignedUrlRequestDetails {
  /**
   * @schema ImportAssetFromSignedUrlRequestDetails#AssetName
   */
  readonly assetName: string;

  /**
   * @schema ImportAssetFromSignedUrlRequestDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ImportAssetFromSignedUrlRequestDetails#Md5Hash
   */
  readonly md5Hash: string;

  /**
   * @schema ImportAssetFromSignedUrlRequestDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema ImportAssetsFromS3RequestDetails
 */
export interface ImportAssetsFromS3RequestDetails {
  /**
   * @schema ImportAssetsFromS3RequestDetails#AssetSources
   */
  readonly assetSources: AssetSourceEntry[];

  /**
   * @schema ImportAssetsFromS3RequestDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ImportAssetsFromS3RequestDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema ExportAssetToSignedUrlResponseDetails
 */
export interface ExportAssetToSignedUrlResponseDetails {
  /**
   * @schema ExportAssetToSignedUrlResponseDetails#AssetId
   */
  readonly assetId: string;

  /**
   * @schema ExportAssetToSignedUrlResponseDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ExportAssetToSignedUrlResponseDetails#RevisionId
   */
  readonly revisionId: string;

  /**
   * @schema ExportAssetToSignedUrlResponseDetails#SignedUrl
   */
  readonly signedUrl?: string;

  /**
   * @schema ExportAssetToSignedUrlResponseDetails#SignedUrlExpiresAt
   */
  readonly signedUrlExpiresAt?: string;

}

/**
 * @schema ExportAssetsToS3ResponseDetails
 */
export interface ExportAssetsToS3ResponseDetails {
  /**
   * @schema ExportAssetsToS3ResponseDetails#AssetDestinations
   */
  readonly assetDestinations: AssetDestinationEntry[];

  /**
   * @schema ExportAssetsToS3ResponseDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ExportAssetsToS3ResponseDetails#Encryption
   */
  readonly encryption?: ExportServerSideEncryption;

  /**
   * @schema ExportAssetsToS3ResponseDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema ImportAssetFromSignedUrlResponseDetails
 */
export interface ImportAssetFromSignedUrlResponseDetails {
  /**
   * @schema ImportAssetFromSignedUrlResponseDetails#AssetName
   */
  readonly assetName: string;

  /**
   * @schema ImportAssetFromSignedUrlResponseDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ImportAssetFromSignedUrlResponseDetails#Md5Hash
   */
  readonly md5Hash?: string;

  /**
   * @schema ImportAssetFromSignedUrlResponseDetails#RevisionId
   */
  readonly revisionId: string;

  /**
   * @schema ImportAssetFromSignedUrlResponseDetails#SignedUrl
   */
  readonly signedUrl?: string;

  /**
   * @schema ImportAssetFromSignedUrlResponseDetails#SignedUrlExpiresAt
   */
  readonly signedUrlExpiresAt?: string;

}

/**
 * @schema ImportAssetsFromS3ResponseDetails
 */
export interface ImportAssetsFromS3ResponseDetails {
  /**
   * @schema ImportAssetsFromS3ResponseDetails#AssetSources
   */
  readonly assetSources: AssetSourceEntry[];

  /**
   * @schema ImportAssetsFromS3ResponseDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ImportAssetsFromS3ResponseDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema Details
 */
export interface Details {
  /**
   * @schema Details#ImportAssetFromSignedUrlJobErrorDetails
   */
  readonly importAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;

  /**
   * @schema Details#ImportAssetsFromS3JobErrorDetails
   */
  readonly importAssetsFromS3JobErrorDetails?: AssetSourceEntry[];

}

/**
 * @schema S3SnapshotAsset
 */
export interface S3SnapshotAsset {
  /**
   * @schema S3SnapshotAsset#Size
   */
  readonly size: number;

}

/**
 * @schema AssetDestinationEntry
 */
export interface AssetDestinationEntry {
  /**
   * @schema AssetDestinationEntry#AssetId
   */
  readonly assetId: string;

  /**
   * @schema AssetDestinationEntry#Bucket
   */
  readonly bucket: string;

  /**
   * @schema AssetDestinationEntry#Key
   */
  readonly key?: string;

}

/**
 * @schema ExportServerSideEncryption
 */
export interface ExportServerSideEncryption {
  /**
   * @schema ExportServerSideEncryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema ExportServerSideEncryption#Type
   */
  readonly type: string;

}

/**
 * @schema AssetSourceEntry
 */
export interface AssetSourceEntry {
  /**
   * @schema AssetSourceEntry#Bucket
   */
  readonly bucket: string;

  /**
   * @schema AssetSourceEntry#Key
   */
  readonly key: string;

}

/**
 * @schema ImportAssetFromSignedUrlJobErrorDetails
 */
export interface ImportAssetFromSignedUrlJobErrorDetails {
  /**
   * @schema ImportAssetFromSignedUrlJobErrorDetails#AssetName
   */
  readonly assetName: string;

}
