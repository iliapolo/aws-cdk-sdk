/**
 * @schema BatchDeleteDocumentRequest
 */
export interface BatchDeleteDocumentRequest {
  /**
   * @schema BatchDeleteDocumentRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema BatchDeleteDocumentRequest#DocumentIdList
   */
  readonly documentIdList: string[];

  /**
   * @schema BatchDeleteDocumentRequest#DataSourceSyncJobMetricTarget
   */
  readonly dataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;

}

/**
 * @schema BatchDeleteDocumentResponse
 */
export interface BatchDeleteDocumentResponse {
  /**
   * @schema BatchDeleteDocumentResponse#FailedDocuments
   */
  readonly failedDocuments?: BatchDeleteDocumentResponseFailedDocument[];

}

/**
 * @schema BatchPutDocumentRequest
 */
export interface BatchPutDocumentRequest {
  /**
   * @schema BatchPutDocumentRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema BatchPutDocumentRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema BatchPutDocumentRequest#Documents
   */
  readonly documents: Document[];

}

/**
 * @schema BatchPutDocumentResponse
 */
export interface BatchPutDocumentResponse {
  /**
   * @schema BatchPutDocumentResponse#FailedDocuments
   */
  readonly failedDocuments?: BatchPutDocumentResponseFailedDocument[];

}

/**
 * @schema CreateDataSourceRequest
 */
export interface CreateDataSourceRequest {
  /**
   * @schema CreateDataSourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateDataSourceRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema CreateDataSourceRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateDataSourceRequest#Configuration
   */
  readonly configuration?: DataSourceConfiguration;

  /**
   * @schema CreateDataSourceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateDataSourceRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema CreateDataSourceRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CreateDataSourceRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDataSourceRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateDataSourceResponse
 */
export interface CreateDataSourceResponse {
  /**
   * @schema CreateDataSourceResponse#Id
   */
  readonly id: string;

}

/**
 * @schema CreateFaqRequest
 */
export interface CreateFaqRequest {
  /**
   * @schema CreateFaqRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema CreateFaqRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateFaqRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateFaqRequest#S3Path
   */
  readonly s3Path: S3Path;

  /**
   * @schema CreateFaqRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateFaqRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateFaqRequest#FileFormat
   */
  readonly fileFormat?: string;

  /**
   * @schema CreateFaqRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateFaqResponse
 */
export interface CreateFaqResponse {
  /**
   * @schema CreateFaqResponse#Id
   */
  readonly id?: string;

}

/**
 * @schema CreateIndexRequest
 */
export interface CreateIndexRequest {
  /**
   * @schema CreateIndexRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateIndexRequest#Edition
   */
  readonly edition?: string;

  /**
   * @schema CreateIndexRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateIndexRequest#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @schema CreateIndexRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateIndexRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateIndexRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateIndexRequest#UserTokenConfigurations
   */
  readonly userTokenConfigurations?: UserTokenConfiguration[];

  /**
   * @schema CreateIndexRequest#UserContextPolicy
   */
  readonly userContextPolicy?: string;

}

/**
 * @schema CreateIndexResponse
 */
export interface CreateIndexResponse {
  /**
   * @schema CreateIndexResponse#Id
   */
  readonly id?: string;

}

/**
 * @schema DeleteDataSourceRequest
 */
export interface DeleteDataSourceRequest {
  /**
   * @schema DeleteDataSourceRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteDataSourceRequest#IndexId
   */
  readonly indexId: string;

}

/**
 * @schema DeleteFaqRequest
 */
export interface DeleteFaqRequest {
  /**
   * @schema DeleteFaqRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteFaqRequest#IndexId
   */
  readonly indexId: string;

}

/**
 * @schema DeleteIndexRequest
 */
export interface DeleteIndexRequest {
  /**
   * @schema DeleteIndexRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeDataSourceRequest
 */
export interface DescribeDataSourceRequest {
  /**
   * @schema DescribeDataSourceRequest#Id
   */
  readonly id: string;

  /**
   * @schema DescribeDataSourceRequest#IndexId
   */
  readonly indexId: string;

}

/**
 * @schema DescribeDataSourceResponse
 */
export interface DescribeDataSourceResponse {
  /**
   * @schema DescribeDataSourceResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeDataSourceResponse#IndexId
   */
  readonly indexId?: string;

  /**
   * @schema DescribeDataSourceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeDataSourceResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DescribeDataSourceResponse#Configuration
   */
  readonly configuration?: DataSourceConfiguration;

  /**
   * @schema DescribeDataSourceResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeDataSourceResponse#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema DescribeDataSourceResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeDataSourceResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeDataSourceResponse#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema DescribeDataSourceResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeDataSourceResponse#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema DescribeFaqRequest
 */
export interface DescribeFaqRequest {
  /**
   * @schema DescribeFaqRequest#Id
   */
  readonly id: string;

  /**
   * @schema DescribeFaqRequest#IndexId
   */
  readonly indexId: string;

}

/**
 * @schema DescribeFaqResponse
 */
export interface DescribeFaqResponse {
  /**
   * @schema DescribeFaqResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeFaqResponse#IndexId
   */
  readonly indexId?: string;

  /**
   * @schema DescribeFaqResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeFaqResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeFaqResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeFaqResponse#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema DescribeFaqResponse#S3Path
   */
  readonly s3Path?: S3Path;

  /**
   * @schema DescribeFaqResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeFaqResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeFaqResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DescribeFaqResponse#FileFormat
   */
  readonly fileFormat?: string;

}

/**
 * @schema DescribeIndexRequest
 */
export interface DescribeIndexRequest {
  /**
   * @schema DescribeIndexRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeIndexResponse
 */
export interface DescribeIndexResponse {
  /**
   * @schema DescribeIndexResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeIndexResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeIndexResponse#Edition
   */
  readonly edition?: string;

  /**
   * @schema DescribeIndexResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeIndexResponse#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @schema DescribeIndexResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeIndexResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeIndexResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeIndexResponse#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema DescribeIndexResponse#DocumentMetadataConfigurations
   */
  readonly documentMetadataConfigurations?: DocumentMetadataConfiguration[];

  /**
   * @schema DescribeIndexResponse#IndexStatistics
   */
  readonly indexStatistics?: IndexStatistics;

  /**
   * @schema DescribeIndexResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DescribeIndexResponse#CapacityUnits
   */
  readonly capacityUnits?: CapacityUnitsConfiguration;

  /**
   * @schema DescribeIndexResponse#UserTokenConfigurations
   */
  readonly userTokenConfigurations?: UserTokenConfiguration[];

  /**
   * @schema DescribeIndexResponse#UserContextPolicy
   */
  readonly userContextPolicy?: string;

}

/**
 * @schema ListDataSourceSyncJobsRequest
 */
export interface ListDataSourceSyncJobsRequest {
  /**
   * @schema ListDataSourceSyncJobsRequest#Id
   */
  readonly id: string;

  /**
   * @schema ListDataSourceSyncJobsRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema ListDataSourceSyncJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataSourceSyncJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDataSourceSyncJobsRequest#StartTimeFilter
   */
  readonly startTimeFilter?: TimeRange;

  /**
   * @schema ListDataSourceSyncJobsRequest#StatusFilter
   */
  readonly statusFilter?: string;

}

/**
 * @schema ListDataSourceSyncJobsResponse
 */
export interface ListDataSourceSyncJobsResponse {
  /**
   * @schema ListDataSourceSyncJobsResponse#History
   */
  readonly history?: DataSourceSyncJob[];

  /**
   * @schema ListDataSourceSyncJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDataSourcesRequest
 */
export interface ListDataSourcesRequest {
  /**
   * @schema ListDataSourcesRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema ListDataSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataSourcesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDataSourcesResponse
 */
export interface ListDataSourcesResponse {
  /**
   * @schema ListDataSourcesResponse#SummaryItems
   */
  readonly summaryItems?: DataSourceSummary[];

  /**
   * @schema ListDataSourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFaqsRequest
 */
export interface ListFaqsRequest {
  /**
   * @schema ListFaqsRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema ListFaqsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFaqsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFaqsResponse
 */
export interface ListFaqsResponse {
  /**
   * @schema ListFaqsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFaqsResponse#FaqSummaryItems
   */
  readonly faqSummaryItems?: FaqSummary[];

}

/**
 * @schema ListIndicesRequest
 */
export interface ListIndicesRequest {
  /**
   * @schema ListIndicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIndicesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListIndicesResponse
 */
export interface ListIndicesResponse {
  /**
   * @schema ListIndicesResponse#IndexConfigurationSummaryItems
   */
  readonly indexConfigurationSummaryItems?: IndexConfigurationSummary[];

  /**
   * @schema ListIndicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
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
  readonly tags?: Tag[];

}

/**
 * @schema QueryRequest
 */
export interface QueryRequest {
  /**
   * @schema QueryRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema QueryRequest#QueryText
   */
  readonly queryText: string;

  /**
   * @schema QueryRequest#AttributeFilter
   */
  readonly attributeFilter?: AttributeFilter;

  /**
   * @schema QueryRequest#Facets
   */
  readonly facets?: Facet[];

  /**
   * @schema QueryRequest#RequestedDocumentAttributes
   */
  readonly requestedDocumentAttributes?: string[];

  /**
   * @schema QueryRequest#QueryResultTypeFilter
   */
  readonly queryResultTypeFilter?: string;

  /**
   * @schema QueryRequest#PageNumber
   */
  readonly pageNumber?: number;

  /**
   * @schema QueryRequest#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema QueryRequest#SortingConfiguration
   */
  readonly sortingConfiguration?: SortingConfiguration;

  /**
   * @schema QueryRequest#UserContext
   */
  readonly userContext?: UserContext;

}

/**
 * @schema QueryResult
 */
export interface QueryResult {
  /**
   * @schema QueryResult#QueryId
   */
  readonly queryId?: string;

  /**
   * @schema QueryResult#ResultItems
   */
  readonly resultItems?: QueryResultItem[];

  /**
   * @schema QueryResult#FacetResults
   */
  readonly facetResults?: FacetResult[];

  /**
   * @schema QueryResult#TotalNumberOfResults
   */
  readonly totalNumberOfResults?: number;

}

/**
 * @schema StartDataSourceSyncJobRequest
 */
export interface StartDataSourceSyncJobRequest {
  /**
   * @schema StartDataSourceSyncJobRequest#Id
   */
  readonly id: string;

  /**
   * @schema StartDataSourceSyncJobRequest#IndexId
   */
  readonly indexId: string;

}

/**
 * @schema StartDataSourceSyncJobResponse
 */
export interface StartDataSourceSyncJobResponse {
  /**
   * @schema StartDataSourceSyncJobResponse#ExecutionId
   */
  readonly executionId?: string;

}

/**
 * @schema StopDataSourceSyncJobRequest
 */
export interface StopDataSourceSyncJobRequest {
  /**
   * @schema StopDataSourceSyncJobRequest#Id
   */
  readonly id: string;

  /**
   * @schema StopDataSourceSyncJobRequest#IndexId
   */
  readonly indexId: string;

}

/**
 * @schema SubmitFeedbackRequest
 */
export interface SubmitFeedbackRequest {
  /**
   * @schema SubmitFeedbackRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema SubmitFeedbackRequest#QueryId
   */
  readonly queryId: string;

  /**
   * @schema SubmitFeedbackRequest#ClickFeedbackItems
   */
  readonly clickFeedbackItems?: ClickFeedback[];

  /**
   * @schema SubmitFeedbackRequest#RelevanceFeedbackItems
   */
  readonly relevanceFeedbackItems?: RelevanceFeedback[];

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

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
   * @schema UntagResourceRequest#ResourceARN
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
 * @schema UpdateDataSourceRequest
 */
export interface UpdateDataSourceRequest {
  /**
   * @schema UpdateDataSourceRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateDataSourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateDataSourceRequest#IndexId
   */
  readonly indexId: string;

  /**
   * @schema UpdateDataSourceRequest#Configuration
   */
  readonly configuration?: DataSourceConfiguration;

  /**
   * @schema UpdateDataSourceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateDataSourceRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema UpdateDataSourceRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema UpdateIndexRequest
 */
export interface UpdateIndexRequest {
  /**
   * @schema UpdateIndexRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateIndexRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateIndexRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateIndexRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateIndexRequest#DocumentMetadataConfigurationUpdates
   */
  readonly documentMetadataConfigurationUpdates?: DocumentMetadataConfiguration[];

  /**
   * @schema UpdateIndexRequest#CapacityUnits
   */
  readonly capacityUnits?: CapacityUnitsConfiguration;

  /**
   * @schema UpdateIndexRequest#UserTokenConfigurations
   */
  readonly userTokenConfigurations?: UserTokenConfiguration[];

  /**
   * @schema UpdateIndexRequest#UserContextPolicy
   */
  readonly userContextPolicy?: string;

}

/**
 * @schema DataSourceSyncJobMetricTarget
 */
export interface DataSourceSyncJobMetricTarget {
  /**
   * @schema DataSourceSyncJobMetricTarget#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema DataSourceSyncJobMetricTarget#DataSourceSyncJobId
   */
  readonly dataSourceSyncJobId: string;

}

/**
 * @schema BatchDeleteDocumentResponseFailedDocument
 */
export interface BatchDeleteDocumentResponseFailedDocument {
  /**
   * @schema BatchDeleteDocumentResponseFailedDocument#Id
   */
  readonly id?: string;

  /**
   * @schema BatchDeleteDocumentResponseFailedDocument#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchDeleteDocumentResponseFailedDocument#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Document
 */
export interface Document {
  /**
   * @schema Document#Id
   */
  readonly id: string;

  /**
   * @schema Document#Title
   */
  readonly title?: string;

  /**
   * @schema Document#Blob
   */
  readonly blob?: any;

  /**
   * @schema Document#S3Path
   */
  readonly s3Path?: S3Path;

  /**
   * @schema Document#Attributes
   */
  readonly attributes?: DocumentAttribute[];

  /**
   * @schema Document#AccessControlList
   */
  readonly accessControlList?: Principal[];

  /**
   * @schema Document#ContentType
   */
  readonly contentType?: string;

}

/**
 * @schema BatchPutDocumentResponseFailedDocument
 */
export interface BatchPutDocumentResponseFailedDocument {
  /**
   * @schema BatchPutDocumentResponseFailedDocument#Id
   */
  readonly id?: string;

  /**
   * @schema BatchPutDocumentResponseFailedDocument#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchPutDocumentResponseFailedDocument#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema DataSourceConfiguration
 */
export interface DataSourceConfiguration {
  /**
   * @schema DataSourceConfiguration#S3Configuration
   */
  readonly s3Configuration?: S3DataSourceConfiguration;

  /**
   * @schema DataSourceConfiguration#SharePointConfiguration
   */
  readonly sharePointConfiguration?: SharePointConfiguration;

  /**
   * @schema DataSourceConfiguration#DatabaseConfiguration
   */
  readonly databaseConfiguration?: DatabaseConfiguration;

  /**
   * @schema DataSourceConfiguration#SalesforceConfiguration
   */
  readonly salesforceConfiguration?: SalesforceConfiguration;

  /**
   * @schema DataSourceConfiguration#OneDriveConfiguration
   */
  readonly oneDriveConfiguration?: OneDriveConfiguration;

  /**
   * @schema DataSourceConfiguration#ServiceNowConfiguration
   */
  readonly serviceNowConfiguration?: ServiceNowConfiguration;

  /**
   * @schema DataSourceConfiguration#ConfluenceConfiguration
   */
  readonly confluenceConfiguration?: ConfluenceConfiguration;

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
  readonly value: string;

}

/**
 * @schema S3Path
 */
export interface S3Path {
  /**
   * @schema S3Path#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3Path#Key
   */
  readonly key: string;

}

/**
 * @schema ServerSideEncryptionConfiguration
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * @schema ServerSideEncryptionConfiguration#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema UserTokenConfiguration
 */
export interface UserTokenConfiguration {
  /**
   * @schema UserTokenConfiguration#JwtTokenTypeConfiguration
   */
  readonly jwtTokenTypeConfiguration?: JwtTokenTypeConfiguration;

  /**
   * @schema UserTokenConfiguration#JsonTokenTypeConfiguration
   */
  readonly jsonTokenTypeConfiguration?: JsonTokenTypeConfiguration;

}

/**
 * @schema DocumentMetadataConfiguration
 */
export interface DocumentMetadataConfiguration {
  /**
   * @schema DocumentMetadataConfiguration#Name
   */
  readonly name: string;

  /**
   * @schema DocumentMetadataConfiguration#Type
   */
  readonly type: string;

  /**
   * @schema DocumentMetadataConfiguration#Relevance
   */
  readonly relevance?: Relevance;

  /**
   * @schema DocumentMetadataConfiguration#Search
   */
  readonly search?: Search;

}

/**
 * @schema IndexStatistics
 */
export interface IndexStatistics {
  /**
   * @schema IndexStatistics#FaqStatistics
   */
  readonly faqStatistics: FaqStatistics;

  /**
   * @schema IndexStatistics#TextDocumentStatistics
   */
  readonly textDocumentStatistics: TextDocumentStatistics;

}

/**
 * @schema CapacityUnitsConfiguration
 */
export interface CapacityUnitsConfiguration {
  /**
   * @schema CapacityUnitsConfiguration#StorageCapacityUnits
   */
  readonly storageCapacityUnits: number;

  /**
   * @schema CapacityUnitsConfiguration#QueryCapacityUnits
   */
  readonly queryCapacityUnits: number;

}

/**
 * @schema TimeRange
 */
export interface TimeRange {
  /**
   * @schema TimeRange#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema TimeRange#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema DataSourceSyncJob
 */
export interface DataSourceSyncJob {
  /**
   * @schema DataSourceSyncJob#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema DataSourceSyncJob#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DataSourceSyncJob#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DataSourceSyncJob#Status
   */
  readonly status?: string;

  /**
   * @schema DataSourceSyncJob#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DataSourceSyncJob#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema DataSourceSyncJob#DataSourceErrorCode
   */
  readonly dataSourceErrorCode?: string;

  /**
   * @schema DataSourceSyncJob#Metrics
   */
  readonly metrics?: DataSourceSyncJobMetrics;

}

/**
 * @schema DataSourceSummary
 */
export interface DataSourceSummary {
  /**
   * @schema DataSourceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema DataSourceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema DataSourceSummary#Type
   */
  readonly type?: string;

  /**
   * @schema DataSourceSummary#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataSourceSummary#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema DataSourceSummary#Status
   */
  readonly status?: string;

}

/**
 * @schema FaqSummary
 */
export interface FaqSummary {
  /**
   * @schema FaqSummary#Id
   */
  readonly id?: string;

  /**
   * @schema FaqSummary#Name
   */
  readonly name?: string;

  /**
   * @schema FaqSummary#Status
   */
  readonly status?: string;

  /**
   * @schema FaqSummary#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema FaqSummary#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema FaqSummary#FileFormat
   */
  readonly fileFormat?: string;

}

/**
 * @schema IndexConfigurationSummary
 */
export interface IndexConfigurationSummary {
  /**
   * @schema IndexConfigurationSummary#Name
   */
  readonly name?: string;

  /**
   * @schema IndexConfigurationSummary#Id
   */
  readonly id?: string;

  /**
   * @schema IndexConfigurationSummary#Edition
   */
  readonly edition?: string;

  /**
   * @schema IndexConfigurationSummary#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema IndexConfigurationSummary#UpdatedAt
   */
  readonly updatedAt: string;

  /**
   * @schema IndexConfigurationSummary#Status
   */
  readonly status: string;

}

/**
 * @schema AttributeFilter
 */
export interface AttributeFilter {
  /**
   * @schema AttributeFilter#AndAllFilters
   */
  readonly andAllFilters?: AttributeFilter[];

  /**
   * @schema AttributeFilter#OrAllFilters
   */
  readonly orAllFilters?: AttributeFilter[];

  /**
   * @schema AttributeFilter#NotFilter
   */
  readonly notFilter?: AttributeFilter;

  /**
   * @schema AttributeFilter#EqualsTo
   */
  readonly equalsTo?: DocumentAttribute;

  /**
   * @schema AttributeFilter#ContainsAll
   */
  readonly containsAll?: DocumentAttribute;

  /**
   * @schema AttributeFilter#ContainsAny
   */
  readonly containsAny?: DocumentAttribute;

  /**
   * @schema AttributeFilter#GreaterThan
   */
  readonly greaterThan?: DocumentAttribute;

  /**
   * @schema AttributeFilter#GreaterThanOrEquals
   */
  readonly greaterThanOrEquals?: DocumentAttribute;

  /**
   * @schema AttributeFilter#LessThan
   */
  readonly lessThan?: DocumentAttribute;

  /**
   * @schema AttributeFilter#LessThanOrEquals
   */
  readonly lessThanOrEquals?: DocumentAttribute;

}

/**
 * @schema Facet
 */
export interface Facet {
  /**
   * @schema Facet#DocumentAttributeKey
   */
  readonly documentAttributeKey?: string;

}

/**
 * @schema SortingConfiguration
 */
export interface SortingConfiguration {
  /**
   * @schema SortingConfiguration#DocumentAttributeKey
   */
  readonly documentAttributeKey: string;

  /**
   * @schema SortingConfiguration#SortOrder
   */
  readonly sortOrder: string;

}

/**
 * @schema UserContext
 */
export interface UserContext {
  /**
   * @schema UserContext#Token
   */
  readonly token?: string;

}

/**
 * @schema QueryResultItem
 */
export interface QueryResultItem {
  /**
   * @schema QueryResultItem#Id
   */
  readonly id?: string;

  /**
   * @schema QueryResultItem#Type
   */
  readonly type?: string;

  /**
   * @schema QueryResultItem#AdditionalAttributes
   */
  readonly additionalAttributes?: AdditionalResultAttribute[];

  /**
   * @schema QueryResultItem#DocumentId
   */
  readonly documentId?: string;

  /**
   * @schema QueryResultItem#DocumentTitle
   */
  readonly documentTitle?: TextWithHighlights;

  /**
   * @schema QueryResultItem#DocumentExcerpt
   */
  readonly documentExcerpt?: TextWithHighlights;

  /**
   * @schema QueryResultItem#DocumentURI
   */
  readonly documentUri?: string;

  /**
   * @schema QueryResultItem#DocumentAttributes
   */
  readonly documentAttributes?: DocumentAttribute[];

  /**
   * @schema QueryResultItem#ScoreAttributes
   */
  readonly scoreAttributes?: ScoreAttributes;

}

/**
 * @schema FacetResult
 */
export interface FacetResult {
  /**
   * @schema FacetResult#DocumentAttributeKey
   */
  readonly documentAttributeKey?: string;

  /**
   * @schema FacetResult#DocumentAttributeValueType
   */
  readonly documentAttributeValueType?: string;

  /**
   * @schema FacetResult#DocumentAttributeValueCountPairs
   */
  readonly documentAttributeValueCountPairs?: DocumentAttributeValueCountPair[];

}

/**
 * @schema ClickFeedback
 */
export interface ClickFeedback {
  /**
   * @schema ClickFeedback#ResultId
   */
  readonly resultId: string;

  /**
   * @schema ClickFeedback#ClickTime
   */
  readonly clickTime: string;

}

/**
 * @schema RelevanceFeedback
 */
export interface RelevanceFeedback {
  /**
   * @schema RelevanceFeedback#ResultId
   */
  readonly resultId: string;

  /**
   * @schema RelevanceFeedback#RelevanceValue
   */
  readonly relevanceValue: string;

}

/**
 * @schema DocumentAttribute
 */
export interface DocumentAttribute {
  /**
   * @schema DocumentAttribute#Key
   */
  readonly key: string;

  /**
   * @schema DocumentAttribute#Value
   */
  readonly value: DocumentAttributeValue;

}

/**
 * @schema Principal
 */
export interface Principal {
  /**
   * @schema Principal#Name
   */
  readonly name: string;

  /**
   * @schema Principal#Type
   */
  readonly type: string;

  /**
   * @schema Principal#Access
   */
  readonly access: string;

}

/**
 * @schema S3DataSourceConfiguration
 */
export interface S3DataSourceConfiguration {
  /**
   * @schema S3DataSourceConfiguration#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3DataSourceConfiguration#InclusionPrefixes
   */
  readonly inclusionPrefixes?: string[];

  /**
   * @schema S3DataSourceConfiguration#InclusionPatterns
   */
  readonly inclusionPatterns?: string[];

  /**
   * @schema S3DataSourceConfiguration#ExclusionPatterns
   */
  readonly exclusionPatterns?: string[];

  /**
   * @schema S3DataSourceConfiguration#DocumentsMetadataConfiguration
   */
  readonly documentsMetadataConfiguration?: DocumentsMetadataConfiguration;

  /**
   * @schema S3DataSourceConfiguration#AccessControlListConfiguration
   */
  readonly accessControlListConfiguration?: AccessControlListConfiguration;

}

/**
 * @schema SharePointConfiguration
 */
export interface SharePointConfiguration {
  /**
   * @schema SharePointConfiguration#SharePointVersion
   */
  readonly sharePointVersion: string;

  /**
   * @schema SharePointConfiguration#Urls
   */
  readonly urls: string[];

  /**
   * @schema SharePointConfiguration#SecretArn
   */
  readonly secretArn: string;

  /**
   * @schema SharePointConfiguration#CrawlAttachments
   */
  readonly crawlAttachments?: boolean;

  /**
   * @schema SharePointConfiguration#UseChangeLog
   */
  readonly useChangeLog?: boolean;

  /**
   * @schema SharePointConfiguration#InclusionPatterns
   */
  readonly inclusionPatterns?: string[];

  /**
   * @schema SharePointConfiguration#ExclusionPatterns
   */
  readonly exclusionPatterns?: string[];

  /**
   * @schema SharePointConfiguration#VpcConfiguration
   */
  readonly vpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @schema SharePointConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @schema SharePointConfiguration#DocumentTitleFieldName
   */
  readonly documentTitleFieldName?: string;

  /**
   * @schema SharePointConfiguration#DisableLocalGroups
   */
  readonly disableLocalGroups?: boolean;

}

/**
 * @schema DatabaseConfiguration
 */
export interface DatabaseConfiguration {
  /**
   * @schema DatabaseConfiguration#DatabaseEngineType
   */
  readonly databaseEngineType: string;

  /**
   * @schema DatabaseConfiguration#ConnectionConfiguration
   */
  readonly connectionConfiguration: ConnectionConfiguration;

  /**
   * @schema DatabaseConfiguration#VpcConfiguration
   */
  readonly vpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @schema DatabaseConfiguration#ColumnConfiguration
   */
  readonly columnConfiguration: ColumnConfiguration;

  /**
   * @schema DatabaseConfiguration#AclConfiguration
   */
  readonly aclConfiguration?: AclConfiguration;

  /**
   * @schema DatabaseConfiguration#SqlConfiguration
   */
  readonly sqlConfiguration?: SqlConfiguration;

}

/**
 * @schema SalesforceConfiguration
 */
export interface SalesforceConfiguration {
  /**
   * @schema SalesforceConfiguration#ServerUrl
   */
  readonly serverUrl: string;

  /**
   * @schema SalesforceConfiguration#SecretArn
   */
  readonly secretArn: string;

  /**
   * @schema SalesforceConfiguration#StandardObjectConfigurations
   */
  readonly standardObjectConfigurations?: SalesforceStandardObjectConfiguration[];

  /**
   * @schema SalesforceConfiguration#KnowledgeArticleConfiguration
   */
  readonly knowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;

  /**
   * @schema SalesforceConfiguration#ChatterFeedConfiguration
   */
  readonly chatterFeedConfiguration?: SalesforceChatterFeedConfiguration;

  /**
   * @schema SalesforceConfiguration#CrawlAttachments
   */
  readonly crawlAttachments?: boolean;

  /**
   * @schema SalesforceConfiguration#StandardObjectAttachmentConfiguration
   */
  readonly standardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;

  /**
   * @schema SalesforceConfiguration#IncludeAttachmentFilePatterns
   */
  readonly includeAttachmentFilePatterns?: string[];

  /**
   * @schema SalesforceConfiguration#ExcludeAttachmentFilePatterns
   */
  readonly excludeAttachmentFilePatterns?: string[];

}

/**
 * @schema OneDriveConfiguration
 */
export interface OneDriveConfiguration {
  /**
   * @schema OneDriveConfiguration#TenantDomain
   */
  readonly tenantDomain: string;

  /**
   * @schema OneDriveConfiguration#SecretArn
   */
  readonly secretArn: string;

  /**
   * @schema OneDriveConfiguration#OneDriveUsers
   */
  readonly oneDriveUsers: OneDriveUsers;

  /**
   * @schema OneDriveConfiguration#InclusionPatterns
   */
  readonly inclusionPatterns?: string[];

  /**
   * @schema OneDriveConfiguration#ExclusionPatterns
   */
  readonly exclusionPatterns?: string[];

  /**
   * @schema OneDriveConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @schema OneDriveConfiguration#DisableLocalGroups
   */
  readonly disableLocalGroups?: boolean;

}

/**
 * @schema ServiceNowConfiguration
 */
export interface ServiceNowConfiguration {
  /**
   * @schema ServiceNowConfiguration#HostUrl
   */
  readonly hostUrl: string;

  /**
   * @schema ServiceNowConfiguration#SecretArn
   */
  readonly secretArn: string;

  /**
   * @schema ServiceNowConfiguration#ServiceNowBuildVersion
   */
  readonly serviceNowBuildVersion: string;

  /**
   * @schema ServiceNowConfiguration#KnowledgeArticleConfiguration
   */
  readonly knowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;

  /**
   * @schema ServiceNowConfiguration#ServiceCatalogConfiguration
   */
  readonly serviceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;

}

/**
 * @schema ConfluenceConfiguration
 */
export interface ConfluenceConfiguration {
  /**
   * @schema ConfluenceConfiguration#ServerUrl
   */
  readonly serverUrl: string;

  /**
   * @schema ConfluenceConfiguration#SecretArn
   */
  readonly secretArn: string;

  /**
   * @schema ConfluenceConfiguration#Version
   */
  readonly version: string;

  /**
   * @schema ConfluenceConfiguration#SpaceConfiguration
   */
  readonly spaceConfiguration?: ConfluenceSpaceConfiguration;

  /**
   * @schema ConfluenceConfiguration#PageConfiguration
   */
  readonly pageConfiguration?: ConfluencePageConfiguration;

  /**
   * @schema ConfluenceConfiguration#BlogConfiguration
   */
  readonly blogConfiguration?: ConfluenceBlogConfiguration;

  /**
   * @schema ConfluenceConfiguration#AttachmentConfiguration
   */
  readonly attachmentConfiguration?: ConfluenceAttachmentConfiguration;

  /**
   * @schema ConfluenceConfiguration#VpcConfiguration
   */
  readonly vpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @schema ConfluenceConfiguration#InclusionPatterns
   */
  readonly inclusionPatterns?: string[];

  /**
   * @schema ConfluenceConfiguration#ExclusionPatterns
   */
  readonly exclusionPatterns?: string[];

}

/**
 * @schema JwtTokenTypeConfiguration
 */
export interface JwtTokenTypeConfiguration {
  /**
   * @schema JwtTokenTypeConfiguration#KeyLocation
   */
  readonly keyLocation: string;

  /**
   * @schema JwtTokenTypeConfiguration#URL
   */
  readonly url?: string;

  /**
   * @schema JwtTokenTypeConfiguration#SecretManagerArn
   */
  readonly secretManagerArn?: string;

  /**
   * @schema JwtTokenTypeConfiguration#UserNameAttributeField
   */
  readonly userNameAttributeField?: string;

  /**
   * @schema JwtTokenTypeConfiguration#GroupAttributeField
   */
  readonly groupAttributeField?: string;

  /**
   * @schema JwtTokenTypeConfiguration#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema JwtTokenTypeConfiguration#ClaimRegex
   */
  readonly claimRegex?: string;

}

/**
 * @schema JsonTokenTypeConfiguration
 */
export interface JsonTokenTypeConfiguration {
  /**
   * @schema JsonTokenTypeConfiguration#UserNameAttributeField
   */
  readonly userNameAttributeField: string;

  /**
   * @schema JsonTokenTypeConfiguration#GroupAttributeField
   */
  readonly groupAttributeField: string;

}

/**
 * @schema Relevance
 */
export interface Relevance {
  /**
   * @schema Relevance#Freshness
   */
  readonly freshness?: boolean;

  /**
   * @schema Relevance#Importance
   */
  readonly importance?: number;

  /**
   * @schema Relevance#Duration
   */
  readonly duration?: string;

  /**
   * @schema Relevance#RankOrder
   */
  readonly rankOrder?: string;

  /**
   * @schema Relevance#ValueImportanceMap
   */
  readonly valueImportanceMap?: { [key: string]: number };

}

/**
 * @schema Search
 */
export interface Search {
  /**
   * @schema Search#Facetable
   */
  readonly facetable?: boolean;

  /**
   * @schema Search#Searchable
   */
  readonly searchable?: boolean;

  /**
   * @schema Search#Displayable
   */
  readonly displayable?: boolean;

  /**
   * @schema Search#Sortable
   */
  readonly sortable?: boolean;

}

/**
 * @schema FaqStatistics
 */
export interface FaqStatistics {
  /**
   * @schema FaqStatistics#IndexedQuestionAnswersCount
   */
  readonly indexedQuestionAnswersCount: number;

}

/**
 * @schema TextDocumentStatistics
 */
export interface TextDocumentStatistics {
  /**
   * @schema TextDocumentStatistics#IndexedTextDocumentsCount
   */
  readonly indexedTextDocumentsCount: number;

  /**
   * @schema TextDocumentStatistics#IndexedTextBytes
   */
  readonly indexedTextBytes: number;

}

/**
 * @schema DataSourceSyncJobMetrics
 */
export interface DataSourceSyncJobMetrics {
  /**
   * @schema DataSourceSyncJobMetrics#DocumentsAdded
   */
  readonly documentsAdded?: string;

  /**
   * @schema DataSourceSyncJobMetrics#DocumentsModified
   */
  readonly documentsModified?: string;

  /**
   * @schema DataSourceSyncJobMetrics#DocumentsDeleted
   */
  readonly documentsDeleted?: string;

  /**
   * @schema DataSourceSyncJobMetrics#DocumentsFailed
   */
  readonly documentsFailed?: string;

  /**
   * @schema DataSourceSyncJobMetrics#DocumentsScanned
   */
  readonly documentsScanned?: string;

}

/**
 * @schema AdditionalResultAttribute
 */
export interface AdditionalResultAttribute {
  /**
   * @schema AdditionalResultAttribute#Key
   */
  readonly key: string;

  /**
   * @schema AdditionalResultAttribute#ValueType
   */
  readonly valueType: string;

  /**
   * @schema AdditionalResultAttribute#Value
   */
  readonly value: AdditionalResultAttributeValue;

}

/**
 * @schema TextWithHighlights
 */
export interface TextWithHighlights {
  /**
   * @schema TextWithHighlights#Text
   */
  readonly text?: string;

  /**
   * @schema TextWithHighlights#Highlights
   */
  readonly highlights?: Highlight[];

}

/**
 * @schema ScoreAttributes
 */
export interface ScoreAttributes {
  /**
   * @schema ScoreAttributes#ScoreConfidence
   */
  readonly scoreConfidence?: string;

}

/**
 * @schema DocumentAttributeValueCountPair
 */
export interface DocumentAttributeValueCountPair {
  /**
   * @schema DocumentAttributeValueCountPair#DocumentAttributeValue
   */
  readonly documentAttributeValue?: DocumentAttributeValue;

  /**
   * @schema DocumentAttributeValueCountPair#Count
   */
  readonly count?: number;

}

/**
 * @schema DocumentAttributeValue
 */
export interface DocumentAttributeValue {
  /**
   * @schema DocumentAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema DocumentAttributeValue#StringListValue
   */
  readonly stringListValue?: string[];

  /**
   * @schema DocumentAttributeValue#LongValue
   */
  readonly longValue?: number;

  /**
   * @schema DocumentAttributeValue#DateValue
   */
  readonly dateValue?: string;

}

/**
 * @schema DocumentsMetadataConfiguration
 */
export interface DocumentsMetadataConfiguration {
  /**
   * @schema DocumentsMetadataConfiguration#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema AccessControlListConfiguration
 */
export interface AccessControlListConfiguration {
  /**
   * @schema AccessControlListConfiguration#KeyPath
   */
  readonly keyPath?: string;

}

/**
 * @schema DataSourceVpcConfiguration
 */
export interface DataSourceVpcConfiguration {
  /**
   * @schema DataSourceVpcConfiguration#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema DataSourceVpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema DataSourceToIndexFieldMapping
 */
export interface DataSourceToIndexFieldMapping {
  /**
   * @schema DataSourceToIndexFieldMapping#DataSourceFieldName
   */
  readonly dataSourceFieldName: string;

  /**
   * @schema DataSourceToIndexFieldMapping#DateFieldFormat
   */
  readonly dateFieldFormat?: string;

  /**
   * @schema DataSourceToIndexFieldMapping#IndexFieldName
   */
  readonly indexFieldName: string;

}

/**
 * @schema ConnectionConfiguration
 */
export interface ConnectionConfiguration {
  /**
   * @schema ConnectionConfiguration#DatabaseHost
   */
  readonly databaseHost: string;

  /**
   * @schema ConnectionConfiguration#DatabasePort
   */
  readonly databasePort: number;

  /**
   * @schema ConnectionConfiguration#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema ConnectionConfiguration#TableName
   */
  readonly tableName: string;

  /**
   * @schema ConnectionConfiguration#SecretArn
   */
  readonly secretArn: string;

}

/**
 * @schema ColumnConfiguration
 */
export interface ColumnConfiguration {
  /**
   * @schema ColumnConfiguration#DocumentIdColumnName
   */
  readonly documentIdColumnName: string;

  /**
   * @schema ColumnConfiguration#DocumentDataColumnName
   */
  readonly documentDataColumnName: string;

  /**
   * @schema ColumnConfiguration#DocumentTitleColumnName
   */
  readonly documentTitleColumnName?: string;

  /**
   * @schema ColumnConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @schema ColumnConfiguration#ChangeDetectingColumns
   */
  readonly changeDetectingColumns: string[];

}

/**
 * @schema AclConfiguration
 */
export interface AclConfiguration {
  /**
   * @schema AclConfiguration#AllowedGroupsColumnName
   */
  readonly allowedGroupsColumnName: string;

}

/**
 * @schema SqlConfiguration
 */
export interface SqlConfiguration {
  /**
   * @schema SqlConfiguration#QueryIdentifiersEnclosingOption
   */
  readonly queryIdentifiersEnclosingOption?: string;

}

/**
 * @schema SalesforceStandardObjectConfiguration
 */
export interface SalesforceStandardObjectConfiguration {
  /**
   * @schema SalesforceStandardObjectConfiguration#Name
   */
  readonly name: string;

  /**
   * @schema SalesforceStandardObjectConfiguration#DocumentDataFieldName
   */
  readonly documentDataFieldName: string;

  /**
   * @schema SalesforceStandardObjectConfiguration#DocumentTitleFieldName
   */
  readonly documentTitleFieldName?: string;

  /**
   * @schema SalesforceStandardObjectConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

}

/**
 * @schema SalesforceKnowledgeArticleConfiguration
 */
export interface SalesforceKnowledgeArticleConfiguration {
  /**
   * @schema SalesforceKnowledgeArticleConfiguration#IncludedStates
   */
  readonly includedStates: string[];

  /**
   * @schema SalesforceKnowledgeArticleConfiguration#StandardKnowledgeArticleTypeConfiguration
   */
  readonly standardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;

  /**
   * @schema SalesforceKnowledgeArticleConfiguration#CustomKnowledgeArticleTypeConfigurations
   */
  readonly customKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfiguration[];

}

/**
 * @schema SalesforceChatterFeedConfiguration
 */
export interface SalesforceChatterFeedConfiguration {
  /**
   * @schema SalesforceChatterFeedConfiguration#DocumentDataFieldName
   */
  readonly documentDataFieldName: string;

  /**
   * @schema SalesforceChatterFeedConfiguration#DocumentTitleFieldName
   */
  readonly documentTitleFieldName?: string;

  /**
   * @schema SalesforceChatterFeedConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @schema SalesforceChatterFeedConfiguration#IncludeFilterTypes
   */
  readonly includeFilterTypes?: string[];

}

/**
 * @schema SalesforceStandardObjectAttachmentConfiguration
 */
export interface SalesforceStandardObjectAttachmentConfiguration {
  /**
   * @schema SalesforceStandardObjectAttachmentConfiguration#DocumentTitleFieldName
   */
  readonly documentTitleFieldName?: string;

  /**
   * @schema SalesforceStandardObjectAttachmentConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

}

/**
 * @schema OneDriveUsers
 */
export interface OneDriveUsers {
  /**
   * @schema OneDriveUsers#OneDriveUserList
   */
  readonly oneDriveUserList?: string[];

  /**
   * @schema OneDriveUsers#OneDriveUserS3Path
   */
  readonly oneDriveUserS3Path?: S3Path;

}

/**
 * @schema ServiceNowKnowledgeArticleConfiguration
 */
export interface ServiceNowKnowledgeArticleConfiguration {
  /**
   * @schema ServiceNowKnowledgeArticleConfiguration#CrawlAttachments
   */
  readonly crawlAttachments?: boolean;

  /**
   * @schema ServiceNowKnowledgeArticleConfiguration#IncludeAttachmentFilePatterns
   */
  readonly includeAttachmentFilePatterns?: string[];

  /**
   * @schema ServiceNowKnowledgeArticleConfiguration#ExcludeAttachmentFilePatterns
   */
  readonly excludeAttachmentFilePatterns?: string[];

  /**
   * @schema ServiceNowKnowledgeArticleConfiguration#DocumentDataFieldName
   */
  readonly documentDataFieldName: string;

  /**
   * @schema ServiceNowKnowledgeArticleConfiguration#DocumentTitleFieldName
   */
  readonly documentTitleFieldName?: string;

  /**
   * @schema ServiceNowKnowledgeArticleConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

}

/**
 * @schema ServiceNowServiceCatalogConfiguration
 */
export interface ServiceNowServiceCatalogConfiguration {
  /**
   * @schema ServiceNowServiceCatalogConfiguration#CrawlAttachments
   */
  readonly crawlAttachments?: boolean;

  /**
   * @schema ServiceNowServiceCatalogConfiguration#IncludeAttachmentFilePatterns
   */
  readonly includeAttachmentFilePatterns?: string[];

  /**
   * @schema ServiceNowServiceCatalogConfiguration#ExcludeAttachmentFilePatterns
   */
  readonly excludeAttachmentFilePatterns?: string[];

  /**
   * @schema ServiceNowServiceCatalogConfiguration#DocumentDataFieldName
   */
  readonly documentDataFieldName: string;

  /**
   * @schema ServiceNowServiceCatalogConfiguration#DocumentTitleFieldName
   */
  readonly documentTitleFieldName?: string;

  /**
   * @schema ServiceNowServiceCatalogConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

}

/**
 * @schema ConfluenceSpaceConfiguration
 */
export interface ConfluenceSpaceConfiguration {
  /**
   * @schema ConfluenceSpaceConfiguration#CrawlPersonalSpaces
   */
  readonly crawlPersonalSpaces?: boolean;

  /**
   * @schema ConfluenceSpaceConfiguration#CrawlArchivedSpaces
   */
  readonly crawlArchivedSpaces?: boolean;

  /**
   * @schema ConfluenceSpaceConfiguration#IncludeSpaces
   */
  readonly includeSpaces?: string[];

  /**
   * @schema ConfluenceSpaceConfiguration#ExcludeSpaces
   */
  readonly excludeSpaces?: string[];

  /**
   * @schema ConfluenceSpaceConfiguration#SpaceFieldMappings
   */
  readonly spaceFieldMappings?: ConfluenceSpaceToIndexFieldMapping[];

}

/**
 * @schema ConfluencePageConfiguration
 */
export interface ConfluencePageConfiguration {
  /**
   * @schema ConfluencePageConfiguration#PageFieldMappings
   */
  readonly pageFieldMappings?: ConfluencePageToIndexFieldMapping[];

}

/**
 * @schema ConfluenceBlogConfiguration
 */
export interface ConfluenceBlogConfiguration {
  /**
   * @schema ConfluenceBlogConfiguration#BlogFieldMappings
   */
  readonly blogFieldMappings?: ConfluenceBlogToIndexFieldMapping[];

}

/**
 * @schema ConfluenceAttachmentConfiguration
 */
export interface ConfluenceAttachmentConfiguration {
  /**
   * @schema ConfluenceAttachmentConfiguration#CrawlAttachments
   */
  readonly crawlAttachments?: boolean;

  /**
   * @schema ConfluenceAttachmentConfiguration#AttachmentFieldMappings
   */
  readonly attachmentFieldMappings?: ConfluenceAttachmentToIndexFieldMapping[];

}

/**
 * @schema AdditionalResultAttributeValue
 */
export interface AdditionalResultAttributeValue {
  /**
   * @schema AdditionalResultAttributeValue#TextWithHighlightsValue
   */
  readonly textWithHighlightsValue?: TextWithHighlights;

}

/**
 * @schema Highlight
 */
export interface Highlight {
  /**
   * @schema Highlight#BeginOffset
   */
  readonly beginOffset: number;

  /**
   * @schema Highlight#EndOffset
   */
  readonly endOffset: number;

  /**
   * @schema Highlight#TopAnswer
   */
  readonly topAnswer?: boolean;

}

/**
 * @schema SalesforceStandardKnowledgeArticleTypeConfiguration
 */
export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
  /**
   * @schema SalesforceStandardKnowledgeArticleTypeConfiguration#DocumentDataFieldName
   */
  readonly documentDataFieldName: string;

  /**
   * @schema SalesforceStandardKnowledgeArticleTypeConfiguration#DocumentTitleFieldName
   */
  readonly documentTitleFieldName?: string;

  /**
   * @schema SalesforceStandardKnowledgeArticleTypeConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

}

/**
 * @schema SalesforceCustomKnowledgeArticleTypeConfiguration
 */
export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
  /**
   * @schema SalesforceCustomKnowledgeArticleTypeConfiguration#Name
   */
  readonly name: string;

  /**
   * @schema SalesforceCustomKnowledgeArticleTypeConfiguration#DocumentDataFieldName
   */
  readonly documentDataFieldName: string;

  /**
   * @schema SalesforceCustomKnowledgeArticleTypeConfiguration#DocumentTitleFieldName
   */
  readonly documentTitleFieldName?: string;

  /**
   * @schema SalesforceCustomKnowledgeArticleTypeConfiguration#FieldMappings
   */
  readonly fieldMappings?: DataSourceToIndexFieldMapping[];

}

/**
 * @schema ConfluenceSpaceToIndexFieldMapping
 */
export interface ConfluenceSpaceToIndexFieldMapping {
  /**
   * @schema ConfluenceSpaceToIndexFieldMapping#DataSourceFieldName
   */
  readonly dataSourceFieldName?: string;

  /**
   * @schema ConfluenceSpaceToIndexFieldMapping#DateFieldFormat
   */
  readonly dateFieldFormat?: string;

  /**
   * @schema ConfluenceSpaceToIndexFieldMapping#IndexFieldName
   */
  readonly indexFieldName?: string;

}

/**
 * @schema ConfluencePageToIndexFieldMapping
 */
export interface ConfluencePageToIndexFieldMapping {
  /**
   * @schema ConfluencePageToIndexFieldMapping#DataSourceFieldName
   */
  readonly dataSourceFieldName?: string;

  /**
   * @schema ConfluencePageToIndexFieldMapping#DateFieldFormat
   */
  readonly dateFieldFormat?: string;

  /**
   * @schema ConfluencePageToIndexFieldMapping#IndexFieldName
   */
  readonly indexFieldName?: string;

}

/**
 * @schema ConfluenceBlogToIndexFieldMapping
 */
export interface ConfluenceBlogToIndexFieldMapping {
  /**
   * @schema ConfluenceBlogToIndexFieldMapping#DataSourceFieldName
   */
  readonly dataSourceFieldName?: string;

  /**
   * @schema ConfluenceBlogToIndexFieldMapping#DateFieldFormat
   */
  readonly dateFieldFormat?: string;

  /**
   * @schema ConfluenceBlogToIndexFieldMapping#IndexFieldName
   */
  readonly indexFieldName?: string;

}

/**
 * @schema ConfluenceAttachmentToIndexFieldMapping
 */
export interface ConfluenceAttachmentToIndexFieldMapping {
  /**
   * @schema ConfluenceAttachmentToIndexFieldMapping#DataSourceFieldName
   */
  readonly dataSourceFieldName?: string;

  /**
   * @schema ConfluenceAttachmentToIndexFieldMapping#DateFieldFormat
   */
  readonly dateFieldFormat?: string;

  /**
   * @schema ConfluenceAttachmentToIndexFieldMapping#IndexFieldName
   */
  readonly indexFieldName?: string;

}
