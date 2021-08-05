/**
 * @schema DataExchangeCancelJobRequest
 */
export interface DataExchangeCancelJobRequest {
  /**
   * @schema DataExchangeCancelJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DataExchangeCreateDataSetRequest
 */
export interface DataExchangeCreateDataSetRequest {
  /**
   * @schema DataExchangeCreateDataSetRequest#AssetType
   */
  readonly assetType: string;

  /**
   * @schema DataExchangeCreateDataSetRequest#Description
   */
  readonly description: string;

  /**
   * @schema DataExchangeCreateDataSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataExchangeCreateDataSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataExchangeCreateDataSetResponse
 */
export interface DataExchangeCreateDataSetResponse {
  /**
   * @schema DataExchangeCreateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Origin
   */
  readonly origin?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#OriginDetails
   */
  readonly originDetails?: DataExchangeOriginDetails;

  /**
   * @schema DataExchangeCreateDataSetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataExchangeCreateDataSetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeCreateJobRequest
 */
export interface DataExchangeCreateJobRequest {
  /**
   * @schema DataExchangeCreateJobRequest#Details
   */
  readonly details: DataExchangeRequestDetails;

  /**
   * @schema DataExchangeCreateJobRequest#Type
   */
  readonly type: string;

}

/**
 * @schema DataExchangeCreateJobResponse
 */
export interface DataExchangeCreateJobResponse {
  /**
   * @schema DataExchangeCreateJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeCreateJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeCreateJobResponse#Details
   */
  readonly details?: DataExchangeResponseDetails;

  /**
   * @schema DataExchangeCreateJobResponse#Errors
   */
  readonly errors?: DataExchangeJobError[];

  /**
   * @schema DataExchangeCreateJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeCreateJobResponse#State
   */
  readonly state?: string;

  /**
   * @schema DataExchangeCreateJobResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DataExchangeCreateJobResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeCreateRevisionRequest
 */
export interface DataExchangeCreateRevisionRequest {
  /**
   * @schema DataExchangeCreateRevisionRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeCreateRevisionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeCreateRevisionRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataExchangeCreateRevisionResponse
 */
export interface DataExchangeCreateRevisionResponse {
  /**
   * @schema DataExchangeCreateRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeCreateRevisionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataExchangeCreateRevisionResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeDeleteAssetRequest
 */
export interface DataExchangeDeleteAssetRequest {
  /**
   * @schema DataExchangeDeleteAssetRequest#AssetId
   */
  readonly assetId: string;

  /**
   * @schema DataExchangeDeleteAssetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeDeleteAssetRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeDeleteDataSetRequest
 */
export interface DataExchangeDeleteDataSetRequest {
  /**
   * @schema DataExchangeDeleteDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

}

/**
 * @schema DataExchangeDeleteRevisionRequest
 */
export interface DataExchangeDeleteRevisionRequest {
  /**
   * @schema DataExchangeDeleteRevisionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeDeleteRevisionRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeGetAssetRequest
 */
export interface DataExchangeGetAssetRequest {
  /**
   * @schema DataExchangeGetAssetRequest#AssetId
   */
  readonly assetId: string;

  /**
   * @schema DataExchangeGetAssetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeGetAssetRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeGetAssetResponse
 */
export interface DataExchangeGetAssetResponse {
  /**
   * @schema DataExchangeGetAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeGetAssetResponse#AssetDetails
   */
  readonly assetDetails?: DataExchangeAssetDetails;

  /**
   * @schema DataExchangeGetAssetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeGetAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeGetAssetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeGetAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeGetAssetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeGetAssetResponse#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema DataExchangeGetAssetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeGetAssetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeGetDataSetRequest
 */
export interface DataExchangeGetDataSetRequest {
  /**
   * @schema DataExchangeGetDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

}

/**
 * @schema DataExchangeGetDataSetResponse
 */
export interface DataExchangeGetDataSetResponse {
  /**
   * @schema DataExchangeGetDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Origin
   */
  readonly origin?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#OriginDetails
   */
  readonly originDetails?: DataExchangeOriginDetails;

  /**
   * @schema DataExchangeGetDataSetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataExchangeGetDataSetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeGetJobRequest
 */
export interface DataExchangeGetJobRequest {
  /**
   * @schema DataExchangeGetJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DataExchangeGetJobResponse
 */
export interface DataExchangeGetJobResponse {
  /**
   * @schema DataExchangeGetJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeGetJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeGetJobResponse#Details
   */
  readonly details?: DataExchangeResponseDetails;

  /**
   * @schema DataExchangeGetJobResponse#Errors
   */
  readonly errors?: DataExchangeJobError[];

  /**
   * @schema DataExchangeGetJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeGetJobResponse#State
   */
  readonly state?: string;

  /**
   * @schema DataExchangeGetJobResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DataExchangeGetJobResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeGetRevisionRequest
 */
export interface DataExchangeGetRevisionRequest {
  /**
   * @schema DataExchangeGetRevisionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeGetRevisionRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeGetRevisionResponse
 */
export interface DataExchangeGetRevisionResponse {
  /**
   * @schema DataExchangeGetRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeGetRevisionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataExchangeGetRevisionResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeListDataSetRevisionsRequest
 */
export interface DataExchangeListDataSetRevisionsRequest {
  /**
   * @schema DataExchangeListDataSetRevisionsRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeListDataSetRevisionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataExchangeListDataSetRevisionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataExchangeListDataSetRevisionsResponse
 */
export interface DataExchangeListDataSetRevisionsResponse {
  /**
   * @schema DataExchangeListDataSetRevisionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataExchangeListDataSetRevisionsResponse#Revisions
   */
  readonly revisions?: DataExchangeRevisionEntry[];

}

/**
 * @schema DataExchangeListDataSetsRequest
 */
export interface DataExchangeListDataSetsRequest {
  /**
   * @schema DataExchangeListDataSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataExchangeListDataSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataExchangeListDataSetsRequest#Origin
   */
  readonly origin?: string;

}

/**
 * @schema DataExchangeListDataSetsResponse
 */
export interface DataExchangeListDataSetsResponse {
  /**
   * @schema DataExchangeListDataSetsResponse#DataSets
   */
  readonly dataSets?: DataExchangeDataSetEntry[];

  /**
   * @schema DataExchangeListDataSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataExchangeListJobsRequest
 */
export interface DataExchangeListJobsRequest {
  /**
   * @schema DataExchangeListJobsRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataExchangeListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataExchangeListJobsRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema DataExchangeListJobsResponse
 */
export interface DataExchangeListJobsResponse {
  /**
   * @schema DataExchangeListJobsResponse#Jobs
   */
  readonly jobs?: DataExchangeJobEntry[];

  /**
   * @schema DataExchangeListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataExchangeListRevisionAssetsRequest
 */
export interface DataExchangeListRevisionAssetsRequest {
  /**
   * @schema DataExchangeListRevisionAssetsRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeListRevisionAssetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataExchangeListRevisionAssetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataExchangeListRevisionAssetsRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeListRevisionAssetsResponse
 */
export interface DataExchangeListRevisionAssetsResponse {
  /**
   * @schema DataExchangeListRevisionAssetsResponse#Assets
   */
  readonly assets?: DataExchangeAssetEntry[];

  /**
   * @schema DataExchangeListRevisionAssetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataExchangeListTagsForResourceRequest
 */
export interface DataExchangeListTagsForResourceRequest {
  /**
   * @schema DataExchangeListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DataExchangeListTagsForResourceResponse
 */
export interface DataExchangeListTagsForResourceResponse {
  /**
   * @schema DataExchangeListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataExchangeStartJobRequest
 */
export interface DataExchangeStartJobRequest {
  /**
   * @schema DataExchangeStartJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DataExchangeStartJobResponse
 */
export interface DataExchangeStartJobResponse {
}

/**
 * @schema DataExchangeTagResourceRequest
 */
export interface DataExchangeTagResourceRequest {
  /**
   * @schema DataExchangeTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DataExchangeTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema DataExchangeUntagResourceRequest
 */
export interface DataExchangeUntagResourceRequest {
  /**
   * @schema DataExchangeUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DataExchangeUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DataExchangeUpdateAssetRequest
 */
export interface DataExchangeUpdateAssetRequest {
  /**
   * @schema DataExchangeUpdateAssetRequest#AssetId
   */
  readonly assetId: string;

  /**
   * @schema DataExchangeUpdateAssetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeUpdateAssetRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataExchangeUpdateAssetRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeUpdateAssetResponse
 */
export interface DataExchangeUpdateAssetResponse {
  /**
   * @schema DataExchangeUpdateAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#AssetDetails
   */
  readonly assetDetails?: DataExchangeAssetDetails;

  /**
   * @schema DataExchangeUpdateAssetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeUpdateDataSetRequest
 */
export interface DataExchangeUpdateDataSetRequest {
  /**
   * @schema DataExchangeUpdateDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeUpdateDataSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeUpdateDataSetRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema DataExchangeUpdateDataSetResponse
 */
export interface DataExchangeUpdateDataSetResponse {
  /**
   * @schema DataExchangeUpdateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#Origin
   */
  readonly origin?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#OriginDetails
   */
  readonly originDetails?: DataExchangeOriginDetails;

  /**
   * @schema DataExchangeUpdateDataSetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeUpdateRevisionRequest
 */
export interface DataExchangeUpdateRevisionRequest {
  /**
   * @schema DataExchangeUpdateRevisionRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeUpdateRevisionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeUpdateRevisionRequest#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeUpdateRevisionRequest#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeUpdateRevisionResponse
 */
export interface DataExchangeUpdateRevisionResponse {
  /**
   * @schema DataExchangeUpdateRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeUpdateRevisionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DataExchangeOriginDetails
 */
export interface DataExchangeOriginDetails {
  /**
   * @schema DataExchangeOriginDetails#ProductId
   */
  readonly productId: string;

}

/**
 * @schema DataExchangeRequestDetails
 */
export interface DataExchangeRequestDetails {
  /**
   * @schema DataExchangeRequestDetails#ExportAssetToSignedUrl
   */
  readonly exportAssetToSignedUrl?: DataExchangeExportAssetToSignedUrlRequestDetails;

  /**
   * @schema DataExchangeRequestDetails#ExportAssetsToS3
   */
  readonly exportAssetsToS3?: DataExchangeExportAssetsToS3RequestDetails;

  /**
   * @schema DataExchangeRequestDetails#ImportAssetFromSignedUrl
   */
  readonly importAssetFromSignedUrl?: DataExchangeImportAssetFromSignedUrlRequestDetails;

  /**
   * @schema DataExchangeRequestDetails#ImportAssetsFromS3
   */
  readonly importAssetsFromS3?: DataExchangeImportAssetsFromS3RequestDetails;

}

/**
 * @schema DataExchangeResponseDetails
 */
export interface DataExchangeResponseDetails {
  /**
   * @schema DataExchangeResponseDetails#ExportAssetToSignedUrl
   */
  readonly exportAssetToSignedUrl?: DataExchangeExportAssetToSignedUrlResponseDetails;

  /**
   * @schema DataExchangeResponseDetails#ExportAssetsToS3
   */
  readonly exportAssetsToS3?: DataExchangeExportAssetsToS3ResponseDetails;

  /**
   * @schema DataExchangeResponseDetails#ImportAssetFromSignedUrl
   */
  readonly importAssetFromSignedUrl?: DataExchangeImportAssetFromSignedUrlResponseDetails;

  /**
   * @schema DataExchangeResponseDetails#ImportAssetsFromS3
   */
  readonly importAssetsFromS3?: DataExchangeImportAssetsFromS3ResponseDetails;

}

/**
 * @schema DataExchangeJobError
 */
export interface DataExchangeJobError {
  /**
   * @schema DataExchangeJobError#Code
   */
  readonly code: string;

  /**
   * @schema DataExchangeJobError#Details
   */
  readonly details?: DataExchangeDetails;

  /**
   * @schema DataExchangeJobError#LimitName
   */
  readonly limitName?: string;

  /**
   * @schema DataExchangeJobError#LimitValue
   */
  readonly limitValue?: number;

  /**
   * @schema DataExchangeJobError#Message
   */
  readonly message: string;

  /**
   * @schema DataExchangeJobError#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DataExchangeJobError#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema DataExchangeAssetDetails
 */
export interface DataExchangeAssetDetails {
  /**
   * @schema DataExchangeAssetDetails#S3SnapshotAsset
   */
  readonly s3SnapshotAsset?: DataExchangeS3SnapshotAsset;

}

/**
 * @schema DataExchangeRevisionEntry
 */
export interface DataExchangeRevisionEntry {
  /**
   * @schema DataExchangeRevisionEntry#Arn
   */
  readonly arn: string;

  /**
   * @schema DataExchangeRevisionEntry#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeRevisionEntry#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema DataExchangeRevisionEntry#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeRevisionEntry#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeRevisionEntry#Id
   */
  readonly id: string;

  /**
   * @schema DataExchangeRevisionEntry#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeRevisionEntry#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema DataExchangeDataSetEntry
 */
export interface DataExchangeDataSetEntry {
  /**
   * @schema DataExchangeDataSetEntry#Arn
   */
  readonly arn: string;

  /**
   * @schema DataExchangeDataSetEntry#AssetType
   */
  readonly assetType: string;

  /**
   * @schema DataExchangeDataSetEntry#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema DataExchangeDataSetEntry#Description
   */
  readonly description: string;

  /**
   * @schema DataExchangeDataSetEntry#Id
   */
  readonly id: string;

  /**
   * @schema DataExchangeDataSetEntry#Name
   */
  readonly name: string;

  /**
   * @schema DataExchangeDataSetEntry#Origin
   */
  readonly origin: string;

  /**
   * @schema DataExchangeDataSetEntry#OriginDetails
   */
  readonly originDetails?: DataExchangeOriginDetails;

  /**
   * @schema DataExchangeDataSetEntry#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeDataSetEntry#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema DataExchangeJobEntry
 */
export interface DataExchangeJobEntry {
  /**
   * @schema DataExchangeJobEntry#Arn
   */
  readonly arn: string;

  /**
   * @schema DataExchangeJobEntry#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema DataExchangeJobEntry#Details
   */
  readonly details: DataExchangeResponseDetails;

  /**
   * @schema DataExchangeJobEntry#Errors
   */
  readonly errors?: DataExchangeJobError[];

  /**
   * @schema DataExchangeJobEntry#Id
   */
  readonly id: string;

  /**
   * @schema DataExchangeJobEntry#State
   */
  readonly state: string;

  /**
   * @schema DataExchangeJobEntry#Type
   */
  readonly type: string;

  /**
   * @schema DataExchangeJobEntry#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema DataExchangeAssetEntry
 */
export interface DataExchangeAssetEntry {
  /**
   * @schema DataExchangeAssetEntry#Arn
   */
  readonly arn: string;

  /**
   * @schema DataExchangeAssetEntry#AssetDetails
   */
  readonly assetDetails: DataExchangeAssetDetails;

  /**
   * @schema DataExchangeAssetEntry#AssetType
   */
  readonly assetType: string;

  /**
   * @schema DataExchangeAssetEntry#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema DataExchangeAssetEntry#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeAssetEntry#Id
   */
  readonly id: string;

  /**
   * @schema DataExchangeAssetEntry#Name
   */
  readonly name: string;

  /**
   * @schema DataExchangeAssetEntry#RevisionId
   */
  readonly revisionId: string;

  /**
   * @schema DataExchangeAssetEntry#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeAssetEntry#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema DataExchangeExportAssetToSignedUrlRequestDetails
 */
export interface DataExchangeExportAssetToSignedUrlRequestDetails {
  /**
   * @schema DataExchangeExportAssetToSignedUrlRequestDetails#AssetId
   */
  readonly assetId: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlRequestDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlRequestDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeExportAssetsToS3RequestDetails
 */
export interface DataExchangeExportAssetsToS3RequestDetails {
  /**
   * @schema DataExchangeExportAssetsToS3RequestDetails#AssetDestinations
   */
  readonly assetDestinations: DataExchangeAssetDestinationEntry[];

  /**
   * @schema DataExchangeExportAssetsToS3RequestDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeExportAssetsToS3RequestDetails#Encryption
   */
  readonly encryption?: DataExchangeExportServerSideEncryption;

  /**
   * @schema DataExchangeExportAssetsToS3RequestDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeImportAssetFromSignedUrlRequestDetails
 */
export interface DataExchangeImportAssetFromSignedUrlRequestDetails {
  /**
   * @schema DataExchangeImportAssetFromSignedUrlRequestDetails#AssetName
   */
  readonly assetName: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlRequestDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlRequestDetails#Md5Hash
   */
  readonly md5Hash: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlRequestDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeImportAssetsFromS3RequestDetails
 */
export interface DataExchangeImportAssetsFromS3RequestDetails {
  /**
   * @schema DataExchangeImportAssetsFromS3RequestDetails#AssetSources
   */
  readonly assetSources: DataExchangeAssetSourceEntry[];

  /**
   * @schema DataExchangeImportAssetsFromS3RequestDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeImportAssetsFromS3RequestDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeExportAssetToSignedUrlResponseDetails
 */
export interface DataExchangeExportAssetToSignedUrlResponseDetails {
  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#AssetId
   */
  readonly assetId: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#RevisionId
   */
  readonly revisionId: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#SignedUrl
   */
  readonly signedUrl?: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#SignedUrlExpiresAt
   */
  readonly signedUrlExpiresAt?: string;

}

/**
 * @schema DataExchangeExportAssetsToS3ResponseDetails
 */
export interface DataExchangeExportAssetsToS3ResponseDetails {
  /**
   * @schema DataExchangeExportAssetsToS3ResponseDetails#AssetDestinations
   */
  readonly assetDestinations: DataExchangeAssetDestinationEntry[];

  /**
   * @schema DataExchangeExportAssetsToS3ResponseDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeExportAssetsToS3ResponseDetails#Encryption
   */
  readonly encryption?: DataExchangeExportServerSideEncryption;

  /**
   * @schema DataExchangeExportAssetsToS3ResponseDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeImportAssetFromSignedUrlResponseDetails
 */
export interface DataExchangeImportAssetFromSignedUrlResponseDetails {
  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#AssetName
   */
  readonly assetName: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#Md5Hash
   */
  readonly md5Hash?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#RevisionId
   */
  readonly revisionId: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#SignedUrl
   */
  readonly signedUrl?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#SignedUrlExpiresAt
   */
  readonly signedUrlExpiresAt?: string;

}

/**
 * @schema DataExchangeImportAssetsFromS3ResponseDetails
 */
export interface DataExchangeImportAssetsFromS3ResponseDetails {
  /**
   * @schema DataExchangeImportAssetsFromS3ResponseDetails#AssetSources
   */
  readonly assetSources: DataExchangeAssetSourceEntry[];

  /**
   * @schema DataExchangeImportAssetsFromS3ResponseDetails#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DataExchangeImportAssetsFromS3ResponseDetails#RevisionId
   */
  readonly revisionId: string;

}

/**
 * @schema DataExchangeDetails
 */
export interface DataExchangeDetails {
  /**
   * @schema DataExchangeDetails#ImportAssetFromSignedUrlJobErrorDetails
   */
  readonly importAssetFromSignedUrlJobErrorDetails?: DataExchangeImportAssetFromSignedUrlJobErrorDetails;

  /**
   * @schema DataExchangeDetails#ImportAssetsFromS3JobErrorDetails
   */
  readonly importAssetsFromS3JobErrorDetails?: DataExchangeAssetSourceEntry[];

}

/**
 * @schema DataExchangeS3SnapshotAsset
 */
export interface DataExchangeS3SnapshotAsset {
  /**
   * @schema DataExchangeS3SnapshotAsset#Size
   */
  readonly size: number;

}

/**
 * @schema DataExchangeAssetDestinationEntry
 */
export interface DataExchangeAssetDestinationEntry {
  /**
   * @schema DataExchangeAssetDestinationEntry#AssetId
   */
  readonly assetId: string;

  /**
   * @schema DataExchangeAssetDestinationEntry#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DataExchangeAssetDestinationEntry#Key
   */
  readonly key?: string;

}

/**
 * @schema DataExchangeExportServerSideEncryption
 */
export interface DataExchangeExportServerSideEncryption {
  /**
   * @schema DataExchangeExportServerSideEncryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema DataExchangeExportServerSideEncryption#Type
   */
  readonly type: string;

}

/**
 * @schema DataExchangeAssetSourceEntry
 */
export interface DataExchangeAssetSourceEntry {
  /**
   * @schema DataExchangeAssetSourceEntry#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DataExchangeAssetSourceEntry#Key
   */
  readonly key: string;

}

/**
 * @schema DataExchangeImportAssetFromSignedUrlJobErrorDetails
 */
export interface DataExchangeImportAssetFromSignedUrlJobErrorDetails {
  /**
   * @schema DataExchangeImportAssetFromSignedUrlJobErrorDetails#AssetName
   */
  readonly assetName: string;

}
