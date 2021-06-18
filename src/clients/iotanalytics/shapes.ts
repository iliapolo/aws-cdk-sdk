/**
 * @schema IoTAnalyticsBatchPutMessageRequest
 */
export interface IoTAnalyticsBatchPutMessageRequest {
  /**
   * @schema IoTAnalyticsBatchPutMessageRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsBatchPutMessageRequest#messages
   */
  readonly messages: IoTAnalyticsMessage[];

}

/**
 * @schema IoTAnalyticsBatchPutMessageResponse
 */
export interface IoTAnalyticsBatchPutMessageResponse {
  /**
   * @schema IoTAnalyticsBatchPutMessageResponse#batchPutMessageErrorEntries
   */
  readonly batchPutMessageErrorEntries?: IoTAnalyticsBatchPutMessageErrorEntry[];

}

/**
 * @schema IoTAnalyticsCancelPipelineReprocessingRequest
 */
export interface IoTAnalyticsCancelPipelineReprocessingRequest {
  /**
   * @schema IoTAnalyticsCancelPipelineReprocessingRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema IoTAnalyticsCancelPipelineReprocessingRequest#reprocessingId
   */
  readonly reprocessingId: string;

}

/**
 * @schema IoTAnalyticsCancelPipelineReprocessingResponse
 */
export interface IoTAnalyticsCancelPipelineReprocessingResponse {
}

/**
 * @schema IoTAnalyticsCreateChannelRequest
 */
export interface IoTAnalyticsCreateChannelRequest {
  /**
   * @schema IoTAnalyticsCreateChannelRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsCreateChannelRequest#channelStorage
   */
  readonly channelStorage?: IoTAnalyticsChannelStorage;

  /**
   * @schema IoTAnalyticsCreateChannelRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsCreateChannelRequest#tags
   */
  readonly tags?: IoTAnalyticsTag[];

}

/**
 * @schema IoTAnalyticsCreateChannelResponse
 */
export interface IoTAnalyticsCreateChannelResponse {
  /**
   * @schema IoTAnalyticsCreateChannelResponse#channelName
   */
  readonly channelName?: string;

  /**
   * @schema IoTAnalyticsCreateChannelResponse#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema IoTAnalyticsCreateChannelResponse#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

}

/**
 * @schema IoTAnalyticsCreateDatasetRequest
 */
export interface IoTAnalyticsCreateDatasetRequest {
  /**
   * @schema IoTAnalyticsCreateDatasetRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#actions
   */
  readonly actions: IoTAnalyticsDatasetAction[];

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#triggers
   */
  readonly triggers?: IoTAnalyticsDatasetTrigger[];

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#contentDeliveryRules
   */
  readonly contentDeliveryRules?: IoTAnalyticsDatasetContentDeliveryRule[];

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#versioningConfiguration
   */
  readonly versioningConfiguration?: IoTAnalyticsVersioningConfiguration;

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#tags
   */
  readonly tags?: IoTAnalyticsTag[];

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#lateDataRules
   */
  readonly lateDataRules?: IoTAnalyticsLateDataRule[];

}

/**
 * @schema IoTAnalyticsCreateDatasetResponse
 */
export interface IoTAnalyticsCreateDatasetResponse {
  /**
   * @schema IoTAnalyticsCreateDatasetResponse#datasetName
   */
  readonly datasetName?: string;

  /**
   * @schema IoTAnalyticsCreateDatasetResponse#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema IoTAnalyticsCreateDatasetResponse#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

}

/**
 * @schema IoTAnalyticsCreateDatasetContentRequest
 */
export interface IoTAnalyticsCreateDatasetContentRequest {
  /**
   * @schema IoTAnalyticsCreateDatasetContentRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsCreateDatasetContentRequest#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema IoTAnalyticsCreateDatasetContentResponse
 */
export interface IoTAnalyticsCreateDatasetContentResponse {
  /**
   * @schema IoTAnalyticsCreateDatasetContentResponse#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema IoTAnalyticsCreateDatastoreRequest
 */
export interface IoTAnalyticsCreateDatastoreRequest {
  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#datastoreStorage
   */
  readonly datastoreStorage?: IoTAnalyticsDatastoreStorage;

  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#tags
   */
  readonly tags?: IoTAnalyticsTag[];

}

/**
 * @schema IoTAnalyticsCreateDatastoreResponse
 */
export interface IoTAnalyticsCreateDatastoreResponse {
  /**
   * @schema IoTAnalyticsCreateDatastoreResponse#datastoreName
   */
  readonly datastoreName?: string;

  /**
   * @schema IoTAnalyticsCreateDatastoreResponse#datastoreArn
   */
  readonly datastoreArn?: string;

  /**
   * @schema IoTAnalyticsCreateDatastoreResponse#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

}

/**
 * @schema IoTAnalyticsCreatePipelineRequest
 */
export interface IoTAnalyticsCreatePipelineRequest {
  /**
   * @schema IoTAnalyticsCreatePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema IoTAnalyticsCreatePipelineRequest#pipelineActivities
   */
  readonly pipelineActivities: IoTAnalyticsPipelineActivity[];

  /**
   * @schema IoTAnalyticsCreatePipelineRequest#tags
   */
  readonly tags?: IoTAnalyticsTag[];

}

/**
 * @schema IoTAnalyticsCreatePipelineResponse
 */
export interface IoTAnalyticsCreatePipelineResponse {
  /**
   * @schema IoTAnalyticsCreatePipelineResponse#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema IoTAnalyticsCreatePipelineResponse#pipelineArn
   */
  readonly pipelineArn?: string;

}

/**
 * @schema IoTAnalyticsDeleteChannelRequest
 */
export interface IoTAnalyticsDeleteChannelRequest {
  /**
   * @schema IoTAnalyticsDeleteChannelRequest#channelName
   */
  readonly channelName: string;

}

/**
 * @schema IoTAnalyticsDeleteDatasetRequest
 */
export interface IoTAnalyticsDeleteDatasetRequest {
  /**
   * @schema IoTAnalyticsDeleteDatasetRequest#datasetName
   */
  readonly datasetName: string;

}

/**
 * @schema IoTAnalyticsDeleteDatasetContentRequest
 */
export interface IoTAnalyticsDeleteDatasetContentRequest {
  /**
   * @schema IoTAnalyticsDeleteDatasetContentRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsDeleteDatasetContentRequest#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema IoTAnalyticsDeleteDatastoreRequest
 */
export interface IoTAnalyticsDeleteDatastoreRequest {
  /**
   * @schema IoTAnalyticsDeleteDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

}

/**
 * @schema IoTAnalyticsDeletePipelineRequest
 */
export interface IoTAnalyticsDeletePipelineRequest {
  /**
   * @schema IoTAnalyticsDeletePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

}

/**
 * @schema IoTAnalyticsDescribeChannelRequest
 */
export interface IoTAnalyticsDescribeChannelRequest {
  /**
   * @schema IoTAnalyticsDescribeChannelRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsDescribeChannelRequest#includeStatistics
   */
  readonly includeStatistics?: boolean;

}

/**
 * @schema IoTAnalyticsDescribeChannelResponse
 */
export interface IoTAnalyticsDescribeChannelResponse {
  /**
   * @schema IoTAnalyticsDescribeChannelResponse#channel
   */
  readonly channel?: IoTAnalyticsChannel;

  /**
   * @schema IoTAnalyticsDescribeChannelResponse#statistics
   */
  readonly statistics?: IoTAnalyticsChannelStatistics;

}

/**
 * @schema IoTAnalyticsDescribeDatasetRequest
 */
export interface IoTAnalyticsDescribeDatasetRequest {
  /**
   * @schema IoTAnalyticsDescribeDatasetRequest#datasetName
   */
  readonly datasetName: string;

}

/**
 * @schema IoTAnalyticsDescribeDatasetResponse
 */
export interface IoTAnalyticsDescribeDatasetResponse {
  /**
   * @schema IoTAnalyticsDescribeDatasetResponse#dataset
   */
  readonly dataset?: IoTAnalyticsDataset;

}

/**
 * @schema IoTAnalyticsDescribeDatastoreRequest
 */
export interface IoTAnalyticsDescribeDatastoreRequest {
  /**
   * @schema IoTAnalyticsDescribeDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

  /**
   * @schema IoTAnalyticsDescribeDatastoreRequest#includeStatistics
   */
  readonly includeStatistics?: boolean;

}

/**
 * @schema IoTAnalyticsDescribeDatastoreResponse
 */
export interface IoTAnalyticsDescribeDatastoreResponse {
  /**
   * @schema IoTAnalyticsDescribeDatastoreResponse#datastore
   */
  readonly datastore?: IoTAnalyticsDatastore;

  /**
   * @schema IoTAnalyticsDescribeDatastoreResponse#statistics
   */
  readonly statistics?: IoTAnalyticsDatastoreStatistics;

}

/**
 * @schema IoTAnalyticsDescribeLoggingOptionsRequest
 */
export interface IoTAnalyticsDescribeLoggingOptionsRequest {
}

/**
 * @schema IoTAnalyticsDescribeLoggingOptionsResponse
 */
export interface IoTAnalyticsDescribeLoggingOptionsResponse {
  /**
   * @schema IoTAnalyticsDescribeLoggingOptionsResponse#loggingOptions
   */
  readonly loggingOptions?: IoTAnalyticsLoggingOptions;

}

/**
 * @schema IoTAnalyticsDescribePipelineRequest
 */
export interface IoTAnalyticsDescribePipelineRequest {
  /**
   * @schema IoTAnalyticsDescribePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

}

/**
 * @schema IoTAnalyticsDescribePipelineResponse
 */
export interface IoTAnalyticsDescribePipelineResponse {
  /**
   * @schema IoTAnalyticsDescribePipelineResponse#pipeline
   */
  readonly pipeline?: IoTAnalyticsPipeline;

}

/**
 * @schema IoTAnalyticsGetDatasetContentRequest
 */
export interface IoTAnalyticsGetDatasetContentRequest {
  /**
   * @schema IoTAnalyticsGetDatasetContentRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsGetDatasetContentRequest#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema IoTAnalyticsGetDatasetContentResponse
 */
export interface IoTAnalyticsGetDatasetContentResponse {
  /**
   * @schema IoTAnalyticsGetDatasetContentResponse#entries
   */
  readonly entries?: IoTAnalyticsDatasetEntry[];

  /**
   * @schema IoTAnalyticsGetDatasetContentResponse#timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema IoTAnalyticsGetDatasetContentResponse#status
   */
  readonly status?: IoTAnalyticsDatasetContentStatus;

}

/**
 * @schema IoTAnalyticsListChannelsRequest
 */
export interface IoTAnalyticsListChannelsRequest {
  /**
   * @schema IoTAnalyticsListChannelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListChannelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTAnalyticsListChannelsResponse
 */
export interface IoTAnalyticsListChannelsResponse {
  /**
   * @schema IoTAnalyticsListChannelsResponse#channelSummaries
   */
  readonly channelSummaries?: IoTAnalyticsChannelSummary[];

  /**
   * @schema IoTAnalyticsListChannelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTAnalyticsListDatasetContentsRequest
 */
export interface IoTAnalyticsListDatasetContentsRequest {
  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#scheduledOnOrAfter
   */
  readonly scheduledOnOrAfter?: string;

  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#scheduledBefore
   */
  readonly scheduledBefore?: string;

}

/**
 * @schema IoTAnalyticsListDatasetContentsResponse
 */
export interface IoTAnalyticsListDatasetContentsResponse {
  /**
   * @schema IoTAnalyticsListDatasetContentsResponse#datasetContentSummaries
   */
  readonly datasetContentSummaries?: IoTAnalyticsDatasetContentSummary[];

  /**
   * @schema IoTAnalyticsListDatasetContentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTAnalyticsListDatasetsRequest
 */
export interface IoTAnalyticsListDatasetsRequest {
  /**
   * @schema IoTAnalyticsListDatasetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListDatasetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTAnalyticsListDatasetsResponse
 */
export interface IoTAnalyticsListDatasetsResponse {
  /**
   * @schema IoTAnalyticsListDatasetsResponse#datasetSummaries
   */
  readonly datasetSummaries?: IoTAnalyticsDatasetSummary[];

  /**
   * @schema IoTAnalyticsListDatasetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTAnalyticsListDatastoresRequest
 */
export interface IoTAnalyticsListDatastoresRequest {
  /**
   * @schema IoTAnalyticsListDatastoresRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListDatastoresRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTAnalyticsListDatastoresResponse
 */
export interface IoTAnalyticsListDatastoresResponse {
  /**
   * @schema IoTAnalyticsListDatastoresResponse#datastoreSummaries
   */
  readonly datastoreSummaries?: IoTAnalyticsDatastoreSummary[];

  /**
   * @schema IoTAnalyticsListDatastoresResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTAnalyticsListPipelinesRequest
 */
export interface IoTAnalyticsListPipelinesRequest {
  /**
   * @schema IoTAnalyticsListPipelinesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListPipelinesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTAnalyticsListPipelinesResponse
 */
export interface IoTAnalyticsListPipelinesResponse {
  /**
   * @schema IoTAnalyticsListPipelinesResponse#pipelineSummaries
   */
  readonly pipelineSummaries?: IoTAnalyticsPipelineSummary[];

  /**
   * @schema IoTAnalyticsListPipelinesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTAnalyticsListTagsForResourceRequest
 */
export interface IoTAnalyticsListTagsForResourceRequest {
  /**
   * @schema IoTAnalyticsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema IoTAnalyticsListTagsForResourceResponse
 */
export interface IoTAnalyticsListTagsForResourceResponse {
  /**
   * @schema IoTAnalyticsListTagsForResourceResponse#tags
   */
  readonly tags?: IoTAnalyticsTag[];

}

/**
 * @schema IoTAnalyticsPutLoggingOptionsRequest
 */
export interface IoTAnalyticsPutLoggingOptionsRequest {
  /**
   * @schema IoTAnalyticsPutLoggingOptionsRequest#loggingOptions
   */
  readonly loggingOptions: IoTAnalyticsLoggingOptions;

}

/**
 * @schema IoTAnalyticsRunPipelineActivityRequest
 */
export interface IoTAnalyticsRunPipelineActivityRequest {
  /**
   * @schema IoTAnalyticsRunPipelineActivityRequest#pipelineActivity
   */
  readonly pipelineActivity: IoTAnalyticsPipelineActivity;

  /**
   * @schema IoTAnalyticsRunPipelineActivityRequest#payloads
   */
  readonly payloads: any[];

}

/**
 * @schema IoTAnalyticsRunPipelineActivityResponse
 */
export interface IoTAnalyticsRunPipelineActivityResponse {
  /**
   * @schema IoTAnalyticsRunPipelineActivityResponse#payloads
   */
  readonly payloads?: any[];

  /**
   * @schema IoTAnalyticsRunPipelineActivityResponse#logResult
   */
  readonly logResult?: string;

}

/**
 * @schema IoTAnalyticsSampleChannelDataRequest
 */
export interface IoTAnalyticsSampleChannelDataRequest {
  /**
   * @schema IoTAnalyticsSampleChannelDataRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsSampleChannelDataRequest#maxMessages
   */
  readonly maxMessages?: number;

  /**
   * @schema IoTAnalyticsSampleChannelDataRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IoTAnalyticsSampleChannelDataRequest#endTime
   */
  readonly endTime?: string;

}

/**
 * @schema IoTAnalyticsSampleChannelDataResponse
 */
export interface IoTAnalyticsSampleChannelDataResponse {
  /**
   * @schema IoTAnalyticsSampleChannelDataResponse#payloads
   */
  readonly payloads?: any[];

}

/**
 * @schema IoTAnalyticsStartPipelineReprocessingRequest
 */
export interface IoTAnalyticsStartPipelineReprocessingRequest {
  /**
   * @schema IoTAnalyticsStartPipelineReprocessingRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema IoTAnalyticsStartPipelineReprocessingRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IoTAnalyticsStartPipelineReprocessingRequest#endTime
   */
  readonly endTime?: string;

}

/**
 * @schema IoTAnalyticsStartPipelineReprocessingResponse
 */
export interface IoTAnalyticsStartPipelineReprocessingResponse {
  /**
   * @schema IoTAnalyticsStartPipelineReprocessingResponse#reprocessingId
   */
  readonly reprocessingId?: string;

}

/**
 * @schema IoTAnalyticsTagResourceRequest
 */
export interface IoTAnalyticsTagResourceRequest {
  /**
   * @schema IoTAnalyticsTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTAnalyticsTagResourceRequest#tags
   */
  readonly tags: IoTAnalyticsTag[];

}

/**
 * @schema IoTAnalyticsTagResourceResponse
 */
export interface IoTAnalyticsTagResourceResponse {
}

/**
 * @schema IoTAnalyticsUntagResourceRequest
 */
export interface IoTAnalyticsUntagResourceRequest {
  /**
   * @schema IoTAnalyticsUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTAnalyticsUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema IoTAnalyticsUntagResourceResponse
 */
export interface IoTAnalyticsUntagResourceResponse {
}

/**
 * @schema IoTAnalyticsUpdateChannelRequest
 */
export interface IoTAnalyticsUpdateChannelRequest {
  /**
   * @schema IoTAnalyticsUpdateChannelRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsUpdateChannelRequest#channelStorage
   */
  readonly channelStorage?: IoTAnalyticsChannelStorage;

  /**
   * @schema IoTAnalyticsUpdateChannelRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

}

/**
 * @schema IoTAnalyticsUpdateDatasetRequest
 */
export interface IoTAnalyticsUpdateDatasetRequest {
  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#actions
   */
  readonly actions: IoTAnalyticsDatasetAction[];

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#triggers
   */
  readonly triggers?: IoTAnalyticsDatasetTrigger[];

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#contentDeliveryRules
   */
  readonly contentDeliveryRules?: IoTAnalyticsDatasetContentDeliveryRule[];

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#versioningConfiguration
   */
  readonly versioningConfiguration?: IoTAnalyticsVersioningConfiguration;

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#lateDataRules
   */
  readonly lateDataRules?: IoTAnalyticsLateDataRule[];

}

/**
 * @schema IoTAnalyticsUpdateDatastoreRequest
 */
export interface IoTAnalyticsUpdateDatastoreRequest {
  /**
   * @schema IoTAnalyticsUpdateDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

  /**
   * @schema IoTAnalyticsUpdateDatastoreRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsUpdateDatastoreRequest#datastoreStorage
   */
  readonly datastoreStorage?: IoTAnalyticsDatastoreStorage;

}

/**
 * @schema IoTAnalyticsUpdatePipelineRequest
 */
export interface IoTAnalyticsUpdatePipelineRequest {
  /**
   * @schema IoTAnalyticsUpdatePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema IoTAnalyticsUpdatePipelineRequest#pipelineActivities
   */
  readonly pipelineActivities: IoTAnalyticsPipelineActivity[];

}

/**
 * @schema IoTAnalyticsMessage
 */
export interface IoTAnalyticsMessage {
  /**
   * @schema IoTAnalyticsMessage#messageId
   */
  readonly messageId: string;

  /**
   * @schema IoTAnalyticsMessage#payload
   */
  readonly payload: any;

}

/**
 * @schema IoTAnalyticsBatchPutMessageErrorEntry
 */
export interface IoTAnalyticsBatchPutMessageErrorEntry {
  /**
   * @schema IoTAnalyticsBatchPutMessageErrorEntry#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IoTAnalyticsBatchPutMessageErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IoTAnalyticsBatchPutMessageErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema IoTAnalyticsChannelStorage
 */
export interface IoTAnalyticsChannelStorage {
  /**
   * @schema IoTAnalyticsChannelStorage#serviceManagedS3
   */
  readonly serviceManagedS3?: IoTAnalyticsServiceManagedChannelS3Storage;

  /**
   * @schema IoTAnalyticsChannelStorage#customerManagedS3
   */
  readonly customerManagedS3?: IoTAnalyticsCustomerManagedChannelS3Storage;

}

/**
 * @schema IoTAnalyticsRetentionPeriod
 */
export interface IoTAnalyticsRetentionPeriod {
  /**
   * @schema IoTAnalyticsRetentionPeriod#unlimited
   */
  readonly unlimited?: boolean;

  /**
   * @schema IoTAnalyticsRetentionPeriod#numberOfDays
   */
  readonly numberOfDays?: number;

}

/**
 * @schema IoTAnalyticsTag
 */
export interface IoTAnalyticsTag {
  /**
   * @schema IoTAnalyticsTag#key
   */
  readonly key: string;

  /**
   * @schema IoTAnalyticsTag#value
   */
  readonly value: string;

}

/**
 * @schema IoTAnalyticsDatasetAction
 */
export interface IoTAnalyticsDatasetAction {
  /**
   * @schema IoTAnalyticsDatasetAction#actionName
   */
  readonly actionName?: string;

  /**
   * @schema IoTAnalyticsDatasetAction#queryAction
   */
  readonly queryAction?: IoTAnalyticsSqlQueryDatasetAction;

  /**
   * @schema IoTAnalyticsDatasetAction#containerAction
   */
  readonly containerAction?: IoTAnalyticsContainerDatasetAction;

}

/**
 * @schema IoTAnalyticsDatasetTrigger
 */
export interface IoTAnalyticsDatasetTrigger {
  /**
   * @schema IoTAnalyticsDatasetTrigger#schedule
   */
  readonly schedule?: IoTAnalyticsSchedule;

  /**
   * @schema IoTAnalyticsDatasetTrigger#dataset
   */
  readonly dataset?: IoTAnalyticsTriggeringDataset;

}

/**
 * @schema IoTAnalyticsDatasetContentDeliveryRule
 */
export interface IoTAnalyticsDatasetContentDeliveryRule {
  /**
   * @schema IoTAnalyticsDatasetContentDeliveryRule#entryName
   */
  readonly entryName?: string;

  /**
   * @schema IoTAnalyticsDatasetContentDeliveryRule#destination
   */
  readonly destination: IoTAnalyticsDatasetContentDeliveryDestination;

}

/**
 * @schema IoTAnalyticsVersioningConfiguration
 */
export interface IoTAnalyticsVersioningConfiguration {
  /**
   * @schema IoTAnalyticsVersioningConfiguration#unlimited
   */
  readonly unlimited?: boolean;

  /**
   * @schema IoTAnalyticsVersioningConfiguration#maxVersions
   */
  readonly maxVersions?: number;

}

/**
 * @schema IoTAnalyticsLateDataRule
 */
export interface IoTAnalyticsLateDataRule {
  /**
   * @schema IoTAnalyticsLateDataRule#ruleName
   */
  readonly ruleName?: string;

  /**
   * @schema IoTAnalyticsLateDataRule#ruleConfiguration
   */
  readonly ruleConfiguration: IoTAnalyticsLateDataRuleConfiguration;

}

/**
 * @schema IoTAnalyticsDatastoreStorage
 */
export interface IoTAnalyticsDatastoreStorage {
  /**
   * @schema IoTAnalyticsDatastoreStorage#serviceManagedS3
   */
  readonly serviceManagedS3?: IoTAnalyticsServiceManagedDatastoreS3Storage;

  /**
   * @schema IoTAnalyticsDatastoreStorage#customerManagedS3
   */
  readonly customerManagedS3?: IoTAnalyticsCustomerManagedDatastoreS3Storage;

}

/**
 * @schema IoTAnalyticsPipelineActivity
 */
export interface IoTAnalyticsPipelineActivity {
  /**
   * @schema IoTAnalyticsPipelineActivity#channel
   */
  readonly channel?: IoTAnalyticsChannelActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#lambda
   */
  readonly lambda?: IoTAnalyticsLambdaActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#datastore
   */
  readonly datastore?: IoTAnalyticsDatastoreActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#addAttributes
   */
  readonly addAttributes?: IoTAnalyticsAddAttributesActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#removeAttributes
   */
  readonly removeAttributes?: IoTAnalyticsRemoveAttributesActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#selectAttributes
   */
  readonly selectAttributes?: IoTAnalyticsSelectAttributesActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#filter
   */
  readonly filter?: IoTAnalyticsFilterActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#math
   */
  readonly math?: IoTAnalyticsMathActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#deviceRegistryEnrich
   */
  readonly deviceRegistryEnrich?: IoTAnalyticsDeviceRegistryEnrichActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#deviceShadowEnrich
   */
  readonly deviceShadowEnrich?: IoTAnalyticsDeviceShadowEnrichActivity;

}

/**
 * @schema IoTAnalyticsChannel
 */
export interface IoTAnalyticsChannel {
  /**
   * @schema IoTAnalyticsChannel#name
   */
  readonly name?: string;

  /**
   * @schema IoTAnalyticsChannel#storage
   */
  readonly storage?: IoTAnalyticsChannelStorage;

  /**
   * @schema IoTAnalyticsChannel#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTAnalyticsChannel#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsChannel#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsChannel#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsChannel#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsChannel#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * @schema IoTAnalyticsChannelStatistics
 */
export interface IoTAnalyticsChannelStatistics {
  /**
   * @schema IoTAnalyticsChannelStatistics#size
   */
  readonly size?: IoTAnalyticsEstimatedResourceSize;

}

/**
 * @schema IoTAnalyticsDataset
 */
export interface IoTAnalyticsDataset {
  /**
   * @schema IoTAnalyticsDataset#name
   */
  readonly name?: string;

  /**
   * @schema IoTAnalyticsDataset#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTAnalyticsDataset#actions
   */
  readonly actions?: IoTAnalyticsDatasetAction[];

  /**
   * @schema IoTAnalyticsDataset#triggers
   */
  readonly triggers?: IoTAnalyticsDatasetTrigger[];

  /**
   * @schema IoTAnalyticsDataset#contentDeliveryRules
   */
  readonly contentDeliveryRules?: IoTAnalyticsDatasetContentDeliveryRule[];

  /**
   * @schema IoTAnalyticsDataset#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsDataset#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDataset#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsDataset#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsDataset#versioningConfiguration
   */
  readonly versioningConfiguration?: IoTAnalyticsVersioningConfiguration;

  /**
   * @schema IoTAnalyticsDataset#lateDataRules
   */
  readonly lateDataRules?: IoTAnalyticsLateDataRule[];

}

/**
 * @schema IoTAnalyticsDatastore
 */
export interface IoTAnalyticsDatastore {
  /**
   * @schema IoTAnalyticsDatastore#name
   */
  readonly name?: string;

  /**
   * @schema IoTAnalyticsDatastore#storage
   */
  readonly storage?: IoTAnalyticsDatastoreStorage;

  /**
   * @schema IoTAnalyticsDatastore#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTAnalyticsDatastore#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsDatastore#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsDatastore#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDatastore#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsDatastore#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * @schema IoTAnalyticsDatastoreStatistics
 */
export interface IoTAnalyticsDatastoreStatistics {
  /**
   * @schema IoTAnalyticsDatastoreStatistics#size
   */
  readonly size?: IoTAnalyticsEstimatedResourceSize;

}

/**
 * @schema IoTAnalyticsLoggingOptions
 */
export interface IoTAnalyticsLoggingOptions {
  /**
   * @schema IoTAnalyticsLoggingOptions#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTAnalyticsLoggingOptions#level
   */
  readonly level: string;

  /**
   * @schema IoTAnalyticsLoggingOptions#enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema IoTAnalyticsPipeline
 */
export interface IoTAnalyticsPipeline {
  /**
   * @schema IoTAnalyticsPipeline#name
   */
  readonly name?: string;

  /**
   * @schema IoTAnalyticsPipeline#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTAnalyticsPipeline#activities
   */
  readonly activities?: IoTAnalyticsPipelineActivity[];

  /**
   * @schema IoTAnalyticsPipeline#reprocessingSummaries
   */
  readonly reprocessingSummaries?: IoTAnalyticsReprocessingSummary[];

  /**
   * @schema IoTAnalyticsPipeline#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsPipeline#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema IoTAnalyticsDatasetEntry
 */
export interface IoTAnalyticsDatasetEntry {
  /**
   * @schema IoTAnalyticsDatasetEntry#entryName
   */
  readonly entryName?: string;

  /**
   * @schema IoTAnalyticsDatasetEntry#dataURI
   */
  readonly dataURI?: string;

}

/**
 * @schema IoTAnalyticsDatasetContentStatus
 */
export interface IoTAnalyticsDatasetContentStatus {
  /**
   * @schema IoTAnalyticsDatasetContentStatus#state
   */
  readonly state?: string;

  /**
   * @schema IoTAnalyticsDatasetContentStatus#reason
   */
  readonly reason?: string;

}

/**
 * @schema IoTAnalyticsChannelSummary
 */
export interface IoTAnalyticsChannelSummary {
  /**
   * @schema IoTAnalyticsChannelSummary#channelName
   */
  readonly channelName?: string;

  /**
   * @schema IoTAnalyticsChannelSummary#channelStorage
   */
  readonly channelStorage?: IoTAnalyticsChannelStorageSummary;

  /**
   * @schema IoTAnalyticsChannelSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsChannelSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsChannelSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsChannelSummary#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * @schema IoTAnalyticsDatasetContentSummary
 */
export interface IoTAnalyticsDatasetContentSummary {
  /**
   * @schema IoTAnalyticsDatasetContentSummary#version
   */
  readonly version?: string;

  /**
   * @schema IoTAnalyticsDatasetContentSummary#status
   */
  readonly status?: IoTAnalyticsDatasetContentStatus;

  /**
   * @schema IoTAnalyticsDatasetContentSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDatasetContentSummary#scheduleTime
   */
  readonly scheduleTime?: string;

  /**
   * @schema IoTAnalyticsDatasetContentSummary#completionTime
   */
  readonly completionTime?: string;

}

/**
 * @schema IoTAnalyticsDatasetSummary
 */
export interface IoTAnalyticsDatasetSummary {
  /**
   * @schema IoTAnalyticsDatasetSummary#datasetName
   */
  readonly datasetName?: string;

  /**
   * @schema IoTAnalyticsDatasetSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsDatasetSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDatasetSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsDatasetSummary#triggers
   */
  readonly triggers?: IoTAnalyticsDatasetTrigger[];

  /**
   * @schema IoTAnalyticsDatasetSummary#actions
   */
  readonly actions?: IoTAnalyticsDatasetActionSummary[];

}

/**
 * @schema IoTAnalyticsDatastoreSummary
 */
export interface IoTAnalyticsDatastoreSummary {
  /**
   * @schema IoTAnalyticsDatastoreSummary#datastoreName
   */
  readonly datastoreName?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#datastoreStorage
   */
  readonly datastoreStorage?: IoTAnalyticsDatastoreStorageSummary;

  /**
   * @schema IoTAnalyticsDatastoreSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * @schema IoTAnalyticsPipelineSummary
 */
export interface IoTAnalyticsPipelineSummary {
  /**
   * @schema IoTAnalyticsPipelineSummary#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema IoTAnalyticsPipelineSummary#reprocessingSummaries
   */
  readonly reprocessingSummaries?: IoTAnalyticsReprocessingSummary[];

  /**
   * @schema IoTAnalyticsPipelineSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsPipelineSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema IoTAnalyticsServiceManagedChannelS3Storage
 */
export interface IoTAnalyticsServiceManagedChannelS3Storage {
}

/**
 * @schema IoTAnalyticsCustomerManagedChannelS3Storage
 */
export interface IoTAnalyticsCustomerManagedChannelS3Storage {
  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3Storage#bucket
   */
  readonly bucket: string;

  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3Storage#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3Storage#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IoTAnalyticsSqlQueryDatasetAction
 */
export interface IoTAnalyticsSqlQueryDatasetAction {
  /**
   * @schema IoTAnalyticsSqlQueryDatasetAction#sqlQuery
   */
  readonly sqlQuery: string;

  /**
   * @schema IoTAnalyticsSqlQueryDatasetAction#filters
   */
  readonly filters?: IoTAnalyticsQueryFilter[];

}

/**
 * @schema IoTAnalyticsContainerDatasetAction
 */
export interface IoTAnalyticsContainerDatasetAction {
  /**
   * @schema IoTAnalyticsContainerDatasetAction#image
   */
  readonly image: string;

  /**
   * @schema IoTAnalyticsContainerDatasetAction#executionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema IoTAnalyticsContainerDatasetAction#resourceConfiguration
   */
  readonly resourceConfiguration: IoTAnalyticsResourceConfiguration;

  /**
   * @schema IoTAnalyticsContainerDatasetAction#variables
   */
  readonly variables?: IoTAnalyticsVariable[];

}

/**
 * @schema IoTAnalyticsSchedule
 */
export interface IoTAnalyticsSchedule {
  /**
   * @schema IoTAnalyticsSchedule#expression
   */
  readonly expression?: string;

}

/**
 * @schema IoTAnalyticsTriggeringDataset
 */
export interface IoTAnalyticsTriggeringDataset {
  /**
   * @schema IoTAnalyticsTriggeringDataset#name
   */
  readonly name: string;

}

/**
 * @schema IoTAnalyticsDatasetContentDeliveryDestination
 */
export interface IoTAnalyticsDatasetContentDeliveryDestination {
  /**
   * @schema IoTAnalyticsDatasetContentDeliveryDestination#iotEventsDestinationConfiguration
   */
  readonly iotEventsDestinationConfiguration?: IoTAnalyticsIotEventsDestinationConfiguration;

  /**
   * @schema IoTAnalyticsDatasetContentDeliveryDestination#s3DestinationConfiguration
   */
  readonly s3DestinationConfiguration?: IoTAnalyticsS3DestinationConfiguration;

}

/**
 * @schema IoTAnalyticsLateDataRuleConfiguration
 */
export interface IoTAnalyticsLateDataRuleConfiguration {
  /**
   * @schema IoTAnalyticsLateDataRuleConfiguration#deltaTimeSessionWindowConfiguration
   */
  readonly deltaTimeSessionWindowConfiguration?: IoTAnalyticsDeltaTimeSessionWindowConfiguration;

}

/**
 * @schema IoTAnalyticsServiceManagedDatastoreS3Storage
 */
export interface IoTAnalyticsServiceManagedDatastoreS3Storage {
}

/**
 * @schema IoTAnalyticsCustomerManagedDatastoreS3Storage
 */
export interface IoTAnalyticsCustomerManagedDatastoreS3Storage {
  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3Storage#bucket
   */
  readonly bucket: string;

  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3Storage#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3Storage#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IoTAnalyticsChannelActivity
 */
export interface IoTAnalyticsChannelActivity {
  /**
   * @schema IoTAnalyticsChannelActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsChannelActivity#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsChannelActivity#next
   */
  readonly next?: string;

}

/**
 * @schema IoTAnalyticsLambdaActivity
 */
export interface IoTAnalyticsLambdaActivity {
  /**
   * @schema IoTAnalyticsLambdaActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsLambdaActivity#lambdaName
   */
  readonly lambdaName: string;

  /**
   * @schema IoTAnalyticsLambdaActivity#batchSize
   */
  readonly batchSize: number;

  /**
   * @schema IoTAnalyticsLambdaActivity#next
   */
  readonly next?: string;

}

/**
 * @schema IoTAnalyticsDatastoreActivity
 */
export interface IoTAnalyticsDatastoreActivity {
  /**
   * @schema IoTAnalyticsDatastoreActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsDatastoreActivity#datastoreName
   */
  readonly datastoreName: string;

}

/**
 * @schema IoTAnalyticsAddAttributesActivity
 */
export interface IoTAnalyticsAddAttributesActivity {
  /**
   * @schema IoTAnalyticsAddAttributesActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsAddAttributesActivity#attributes
   */
  readonly attributes: { [key: string]: string };

  /**
   * @schema IoTAnalyticsAddAttributesActivity#next
   */
  readonly next?: string;

}

/**
 * @schema IoTAnalyticsRemoveAttributesActivity
 */
export interface IoTAnalyticsRemoveAttributesActivity {
  /**
   * @schema IoTAnalyticsRemoveAttributesActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsRemoveAttributesActivity#attributes
   */
  readonly attributes: string[];

  /**
   * @schema IoTAnalyticsRemoveAttributesActivity#next
   */
  readonly next?: string;

}

/**
 * @schema IoTAnalyticsSelectAttributesActivity
 */
export interface IoTAnalyticsSelectAttributesActivity {
  /**
   * @schema IoTAnalyticsSelectAttributesActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsSelectAttributesActivity#attributes
   */
  readonly attributes: string[];

  /**
   * @schema IoTAnalyticsSelectAttributesActivity#next
   */
  readonly next?: string;

}

/**
 * @schema IoTAnalyticsFilterActivity
 */
export interface IoTAnalyticsFilterActivity {
  /**
   * @schema IoTAnalyticsFilterActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsFilterActivity#filter
   */
  readonly filter: string;

  /**
   * @schema IoTAnalyticsFilterActivity#next
   */
  readonly next?: string;

}

/**
 * @schema IoTAnalyticsMathActivity
 */
export interface IoTAnalyticsMathActivity {
  /**
   * @schema IoTAnalyticsMathActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsMathActivity#attribute
   */
  readonly attribute: string;

  /**
   * @schema IoTAnalyticsMathActivity#math
   */
  readonly math: string;

  /**
   * @schema IoTAnalyticsMathActivity#next
   */
  readonly next?: string;

}

/**
 * @schema IoTAnalyticsDeviceRegistryEnrichActivity
 */
export interface IoTAnalyticsDeviceRegistryEnrichActivity {
  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#attribute
   */
  readonly attribute: string;

  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#thingName
   */
  readonly thingName: string;

  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#next
   */
  readonly next?: string;

}

/**
 * @schema IoTAnalyticsDeviceShadowEnrichActivity
 */
export interface IoTAnalyticsDeviceShadowEnrichActivity {
  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#attribute
   */
  readonly attribute: string;

  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#thingName
   */
  readonly thingName: string;

  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#next
   */
  readonly next?: string;

}

/**
 * @schema IoTAnalyticsEstimatedResourceSize
 */
export interface IoTAnalyticsEstimatedResourceSize {
  /**
   * @schema IoTAnalyticsEstimatedResourceSize#estimatedSizeInBytes
   */
  readonly estimatedSizeInBytes?: number;

  /**
   * @schema IoTAnalyticsEstimatedResourceSize#estimatedOn
   */
  readonly estimatedOn?: string;

}

/**
 * @schema IoTAnalyticsReprocessingSummary
 */
export interface IoTAnalyticsReprocessingSummary {
  /**
   * @schema IoTAnalyticsReprocessingSummary#id
   */
  readonly id?: string;

  /**
   * @schema IoTAnalyticsReprocessingSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsReprocessingSummary#creationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema IoTAnalyticsChannelStorageSummary
 */
export interface IoTAnalyticsChannelStorageSummary {
  /**
   * @schema IoTAnalyticsChannelStorageSummary#serviceManagedS3
   */
  readonly serviceManagedS3?: IoTAnalyticsServiceManagedChannelS3StorageSummary;

  /**
   * @schema IoTAnalyticsChannelStorageSummary#customerManagedS3
   */
  readonly customerManagedS3?: IoTAnalyticsCustomerManagedChannelS3StorageSummary;

}

/**
 * @schema IoTAnalyticsDatasetActionSummary
 */
export interface IoTAnalyticsDatasetActionSummary {
  /**
   * @schema IoTAnalyticsDatasetActionSummary#actionName
   */
  readonly actionName?: string;

  /**
   * @schema IoTAnalyticsDatasetActionSummary#actionType
   */
  readonly actionType?: string;

}

/**
 * @schema IoTAnalyticsDatastoreStorageSummary
 */
export interface IoTAnalyticsDatastoreStorageSummary {
  /**
   * @schema IoTAnalyticsDatastoreStorageSummary#serviceManagedS3
   */
  readonly serviceManagedS3?: IoTAnalyticsServiceManagedDatastoreS3StorageSummary;

  /**
   * @schema IoTAnalyticsDatastoreStorageSummary#customerManagedS3
   */
  readonly customerManagedS3?: IoTAnalyticsCustomerManagedDatastoreS3StorageSummary;

}

/**
 * @schema IoTAnalyticsQueryFilter
 */
export interface IoTAnalyticsQueryFilter {
  /**
   * @schema IoTAnalyticsQueryFilter#deltaTime
   */
  readonly deltaTime?: IoTAnalyticsDeltaTime;

}

/**
 * @schema IoTAnalyticsResourceConfiguration
 */
export interface IoTAnalyticsResourceConfiguration {
  /**
   * @schema IoTAnalyticsResourceConfiguration#computeType
   */
  readonly computeType: string;

  /**
   * @schema IoTAnalyticsResourceConfiguration#volumeSizeInGB
   */
  readonly volumeSizeInGB?: number;

}

/**
 * @schema IoTAnalyticsVariable
 */
export interface IoTAnalyticsVariable {
  /**
   * @schema IoTAnalyticsVariable#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsVariable#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema IoTAnalyticsVariable#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema IoTAnalyticsVariable#datasetContentVersionValue
   */
  readonly datasetContentVersionValue?: IoTAnalyticsDatasetContentVersionValue;

  /**
   * @schema IoTAnalyticsVariable#outputFileUriValue
   */
  readonly outputFileUriValue?: IoTAnalyticsOutputFileUriValue;

}

/**
 * @schema IoTAnalyticsIotEventsDestinationConfiguration
 */
export interface IoTAnalyticsIotEventsDestinationConfiguration {
  /**
   * @schema IoTAnalyticsIotEventsDestinationConfiguration#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTAnalyticsIotEventsDestinationConfiguration#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IoTAnalyticsS3DestinationConfiguration
 */
export interface IoTAnalyticsS3DestinationConfiguration {
  /**
   * @schema IoTAnalyticsS3DestinationConfiguration#bucket
   */
  readonly bucket: string;

  /**
   * @schema IoTAnalyticsS3DestinationConfiguration#key
   */
  readonly key: string;

  /**
   * @schema IoTAnalyticsS3DestinationConfiguration#glueConfiguration
   */
  readonly glueConfiguration?: IoTAnalyticsGlueConfiguration;

  /**
   * @schema IoTAnalyticsS3DestinationConfiguration#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IoTAnalyticsDeltaTimeSessionWindowConfiguration
 */
export interface IoTAnalyticsDeltaTimeSessionWindowConfiguration {
  /**
   * @schema IoTAnalyticsDeltaTimeSessionWindowConfiguration#timeoutInMinutes
   */
  readonly timeoutInMinutes: number;

}

/**
 * @schema IoTAnalyticsServiceManagedChannelS3StorageSummary
 */
export interface IoTAnalyticsServiceManagedChannelS3StorageSummary {
}

/**
 * @schema IoTAnalyticsCustomerManagedChannelS3StorageSummary
 */
export interface IoTAnalyticsCustomerManagedChannelS3StorageSummary {
  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3StorageSummary#bucket
   */
  readonly bucket?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3StorageSummary#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3StorageSummary#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema IoTAnalyticsServiceManagedDatastoreS3StorageSummary
 */
export interface IoTAnalyticsServiceManagedDatastoreS3StorageSummary {
}

/**
 * @schema IoTAnalyticsCustomerManagedDatastoreS3StorageSummary
 */
export interface IoTAnalyticsCustomerManagedDatastoreS3StorageSummary {
  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3StorageSummary#bucket
   */
  readonly bucket?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3StorageSummary#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3StorageSummary#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema IoTAnalyticsDeltaTime
 */
export interface IoTAnalyticsDeltaTime {
  /**
   * @schema IoTAnalyticsDeltaTime#offsetSeconds
   */
  readonly offsetSeconds: number;

  /**
   * @schema IoTAnalyticsDeltaTime#timeExpression
   */
  readonly timeExpression: string;

}

/**
 * @schema IoTAnalyticsDatasetContentVersionValue
 */
export interface IoTAnalyticsDatasetContentVersionValue {
  /**
   * @schema IoTAnalyticsDatasetContentVersionValue#datasetName
   */
  readonly datasetName: string;

}

/**
 * @schema IoTAnalyticsOutputFileUriValue
 */
export interface IoTAnalyticsOutputFileUriValue {
  /**
   * @schema IoTAnalyticsOutputFileUriValue#fileName
   */
  readonly fileName: string;

}

/**
 * @schema IoTAnalyticsGlueConfiguration
 */
export interface IoTAnalyticsGlueConfiguration {
  /**
   * @schema IoTAnalyticsGlueConfiguration#tableName
   */
  readonly tableName: string;

  /**
   * @schema IoTAnalyticsGlueConfiguration#databaseName
   */
  readonly databaseName: string;

}
