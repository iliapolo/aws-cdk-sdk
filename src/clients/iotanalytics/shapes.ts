/**
 * @schema BatchPutMessageRequest
 */
export interface BatchPutMessageRequest {
  /**
   * @schema BatchPutMessageRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema BatchPutMessageRequest#messages
   */
  readonly messages: Message[];

}

/**
 * @schema BatchPutMessageResponse
 */
export interface BatchPutMessageResponse {
  /**
   * @schema BatchPutMessageResponse#batchPutMessageErrorEntries
   */
  readonly batchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];

}

/**
 * @schema CancelPipelineReprocessingRequest
 */
export interface CancelPipelineReprocessingRequest {
  /**
   * @schema CancelPipelineReprocessingRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CancelPipelineReprocessingRequest#reprocessingId
   */
  readonly reprocessingId: string;

}

/**
 * @schema CancelPipelineReprocessingResponse
 */
export interface CancelPipelineReprocessingResponse {
}

/**
 * @schema CreateChannelRequest
 */
export interface CreateChannelRequest {
  /**
   * @schema CreateChannelRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema CreateChannelRequest#channelStorage
   */
  readonly channelStorage?: ChannelStorage;

  /**
   * @schema CreateChannelRequest#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

  /**
   * @schema CreateChannelRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * @schema CreateChannelResponse#channelName
   */
  readonly channelName?: string;

  /**
   * @schema CreateChannelResponse#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema CreateChannelResponse#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

}

/**
 * @schema CreateDatasetRequest
 */
export interface CreateDatasetRequest {
  /**
   * @schema CreateDatasetRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema CreateDatasetRequest#actions
   */
  readonly actions: DatasetAction[];

  /**
   * @schema CreateDatasetRequest#triggers
   */
  readonly triggers?: DatasetTrigger[];

  /**
   * @schema CreateDatasetRequest#contentDeliveryRules
   */
  readonly contentDeliveryRules?: DatasetContentDeliveryRule[];

  /**
   * @schema CreateDatasetRequest#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

  /**
   * @schema CreateDatasetRequest#versioningConfiguration
   */
  readonly versioningConfiguration?: VersioningConfiguration;

  /**
   * @schema CreateDatasetRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDatasetRequest#lateDataRules
   */
  readonly lateDataRules?: LateDataRule[];

}

/**
 * @schema CreateDatasetResponse
 */
export interface CreateDatasetResponse {
  /**
   * @schema CreateDatasetResponse#datasetName
   */
  readonly datasetName?: string;

  /**
   * @schema CreateDatasetResponse#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema CreateDatasetResponse#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

}

/**
 * @schema CreateDatasetContentRequest
 */
export interface CreateDatasetContentRequest {
  /**
   * @schema CreateDatasetContentRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema CreateDatasetContentRequest#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema CreateDatasetContentResponse
 */
export interface CreateDatasetContentResponse {
  /**
   * @schema CreateDatasetContentResponse#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema CreateDatastoreRequest
 */
export interface CreateDatastoreRequest {
  /**
   * @schema CreateDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

  /**
   * @schema CreateDatastoreRequest#datastoreStorage
   */
  readonly datastoreStorage?: DatastoreStorage;

  /**
   * @schema CreateDatastoreRequest#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

  /**
   * @schema CreateDatastoreRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDatastoreResponse
 */
export interface CreateDatastoreResponse {
  /**
   * @schema CreateDatastoreResponse#datastoreName
   */
  readonly datastoreName?: string;

  /**
   * @schema CreateDatastoreResponse#datastoreArn
   */
  readonly datastoreArn?: string;

  /**
   * @schema CreateDatastoreResponse#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

}

/**
 * @schema CreatePipelineRequest
 */
export interface CreatePipelineRequest {
  /**
   * @schema CreatePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CreatePipelineRequest#pipelineActivities
   */
  readonly pipelineActivities: PipelineActivity[];

  /**
   * @schema CreatePipelineRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePipelineResponse
 */
export interface CreatePipelineResponse {
  /**
   * @schema CreatePipelineResponse#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema CreatePipelineResponse#pipelineArn
   */
  readonly pipelineArn?: string;

}

/**
 * @schema DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * @schema DeleteChannelRequest#channelName
   */
  readonly channelName: string;

}

/**
 * @schema DeleteDatasetRequest
 */
export interface DeleteDatasetRequest {
  /**
   * @schema DeleteDatasetRequest#datasetName
   */
  readonly datasetName: string;

}

/**
 * @schema DeleteDatasetContentRequest
 */
export interface DeleteDatasetContentRequest {
  /**
   * @schema DeleteDatasetContentRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema DeleteDatasetContentRequest#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema DeleteDatastoreRequest
 */
export interface DeleteDatastoreRequest {
  /**
   * @schema DeleteDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

}

/**
 * @schema DeletePipelineRequest
 */
export interface DeletePipelineRequest {
  /**
   * @schema DeletePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

}

/**
 * @schema DescribeChannelRequest
 */
export interface DescribeChannelRequest {
  /**
   * @schema DescribeChannelRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema DescribeChannelRequest#includeStatistics
   */
  readonly includeStatistics?: boolean;

}

/**
 * @schema DescribeChannelResponse
 */
export interface DescribeChannelResponse {
  /**
   * @schema DescribeChannelResponse#channel
   */
  readonly channel?: Channel;

  /**
   * @schema DescribeChannelResponse#statistics
   */
  readonly statistics?: ChannelStatistics;

}

/**
 * @schema DescribeDatasetRequest
 */
export interface DescribeDatasetRequest {
  /**
   * @schema DescribeDatasetRequest#datasetName
   */
  readonly datasetName: string;

}

/**
 * @schema DescribeDatasetResponse
 */
export interface DescribeDatasetResponse {
  /**
   * @schema DescribeDatasetResponse#dataset
   */
  readonly dataset?: Dataset;

}

/**
 * @schema DescribeDatastoreRequest
 */
export interface DescribeDatastoreRequest {
  /**
   * @schema DescribeDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

  /**
   * @schema DescribeDatastoreRequest#includeStatistics
   */
  readonly includeStatistics?: boolean;

}

/**
 * @schema DescribeDatastoreResponse
 */
export interface DescribeDatastoreResponse {
  /**
   * @schema DescribeDatastoreResponse#datastore
   */
  readonly datastore?: Datastore;

  /**
   * @schema DescribeDatastoreResponse#statistics
   */
  readonly statistics?: DatastoreStatistics;

}

/**
 * @schema DescribeLoggingOptionsRequest
 */
export interface DescribeLoggingOptionsRequest {
}

/**
 * @schema DescribeLoggingOptionsResponse
 */
export interface DescribeLoggingOptionsResponse {
  /**
   * @schema DescribeLoggingOptionsResponse#loggingOptions
   */
  readonly loggingOptions?: LoggingOptions;

}

/**
 * @schema DescribePipelineRequest
 */
export interface DescribePipelineRequest {
  /**
   * @schema DescribePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

}

/**
 * @schema DescribePipelineResponse
 */
export interface DescribePipelineResponse {
  /**
   * @schema DescribePipelineResponse#pipeline
   */
  readonly pipeline?: Pipeline;

}

/**
 * @schema GetDatasetContentRequest
 */
export interface GetDatasetContentRequest {
  /**
   * @schema GetDatasetContentRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema GetDatasetContentRequest#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema GetDatasetContentResponse
 */
export interface GetDatasetContentResponse {
  /**
   * @schema GetDatasetContentResponse#entries
   */
  readonly entries?: DatasetEntry[];

  /**
   * @schema GetDatasetContentResponse#timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema GetDatasetContentResponse#status
   */
  readonly status?: DatasetContentStatus;

}

/**
 * @schema ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * @schema ListChannelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListChannelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListChannelsResponse
 */
export interface ListChannelsResponse {
  /**
   * @schema ListChannelsResponse#channelSummaries
   */
  readonly channelSummaries?: ChannelSummary[];

  /**
   * @schema ListChannelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDatasetContentsRequest
 */
export interface ListDatasetContentsRequest {
  /**
   * @schema ListDatasetContentsRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema ListDatasetContentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatasetContentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDatasetContentsRequest#scheduledOnOrAfter
   */
  readonly scheduledOnOrAfter?: string;

  /**
   * @schema ListDatasetContentsRequest#scheduledBefore
   */
  readonly scheduledBefore?: string;

}

/**
 * @schema ListDatasetContentsResponse
 */
export interface ListDatasetContentsResponse {
  /**
   * @schema ListDatasetContentsResponse#datasetContentSummaries
   */
  readonly datasetContentSummaries?: DatasetContentSummary[];

  /**
   * @schema ListDatasetContentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDatasetsRequest
 */
export interface ListDatasetsRequest {
  /**
   * @schema ListDatasetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatasetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDatasetsResponse
 */
export interface ListDatasetsResponse {
  /**
   * @schema ListDatasetsResponse#datasetSummaries
   */
  readonly datasetSummaries?: DatasetSummary[];

  /**
   * @schema ListDatasetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDatastoresRequest
 */
export interface ListDatastoresRequest {
  /**
   * @schema ListDatastoresRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatastoresRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDatastoresResponse
 */
export interface ListDatastoresResponse {
  /**
   * @schema ListDatastoresResponse#datastoreSummaries
   */
  readonly datastoreSummaries?: DatastoreSummary[];

  /**
   * @schema ListDatastoresResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPipelinesRequest
 */
export interface ListPipelinesRequest {
  /**
   * @schema ListPipelinesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPipelinesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPipelinesResponse
 */
export interface ListPipelinesResponse {
  /**
   * @schema ListPipelinesResponse#pipelineSummaries
   */
  readonly pipelineSummaries?: PipelineSummary[];

  /**
   * @schema ListPipelinesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutLoggingOptionsRequest
 */
export interface PutLoggingOptionsRequest {
  /**
   * @schema PutLoggingOptionsRequest#loggingOptions
   */
  readonly loggingOptions: LoggingOptions;

}

/**
 * @schema RunPipelineActivityRequest
 */
export interface RunPipelineActivityRequest {
  /**
   * @schema RunPipelineActivityRequest#pipelineActivity
   */
  readonly pipelineActivity: PipelineActivity;

  /**
   * @schema RunPipelineActivityRequest#payloads
   */
  readonly payloads: any[];

}

/**
 * @schema RunPipelineActivityResponse
 */
export interface RunPipelineActivityResponse {
  /**
   * @schema RunPipelineActivityResponse#payloads
   */
  readonly payloads?: any[];

  /**
   * @schema RunPipelineActivityResponse#logResult
   */
  readonly logResult?: string;

}

/**
 * @schema SampleChannelDataRequest
 */
export interface SampleChannelDataRequest {
  /**
   * @schema SampleChannelDataRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema SampleChannelDataRequest#maxMessages
   */
  readonly maxMessages?: number;

  /**
   * @schema SampleChannelDataRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema SampleChannelDataRequest#endTime
   */
  readonly endTime?: string;

}

/**
 * @schema SampleChannelDataResponse
 */
export interface SampleChannelDataResponse {
  /**
   * @schema SampleChannelDataResponse#payloads
   */
  readonly payloads?: any[];

}

/**
 * @schema StartPipelineReprocessingRequest
 */
export interface StartPipelineReprocessingRequest {
  /**
   * @schema StartPipelineReprocessingRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema StartPipelineReprocessingRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema StartPipelineReprocessingRequest#endTime
   */
  readonly endTime?: string;

}

/**
 * @schema StartPipelineReprocessingResponse
 */
export interface StartPipelineReprocessingResponse {
  /**
   * @schema StartPipelineReprocessingResponse#reprocessingId
   */
  readonly reprocessingId?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
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
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateChannelRequest
 */
export interface UpdateChannelRequest {
  /**
   * @schema UpdateChannelRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema UpdateChannelRequest#channelStorage
   */
  readonly channelStorage?: ChannelStorage;

  /**
   * @schema UpdateChannelRequest#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

}

/**
 * @schema UpdateDatasetRequest
 */
export interface UpdateDatasetRequest {
  /**
   * @schema UpdateDatasetRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema UpdateDatasetRequest#actions
   */
  readonly actions: DatasetAction[];

  /**
   * @schema UpdateDatasetRequest#triggers
   */
  readonly triggers?: DatasetTrigger[];

  /**
   * @schema UpdateDatasetRequest#contentDeliveryRules
   */
  readonly contentDeliveryRules?: DatasetContentDeliveryRule[];

  /**
   * @schema UpdateDatasetRequest#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

  /**
   * @schema UpdateDatasetRequest#versioningConfiguration
   */
  readonly versioningConfiguration?: VersioningConfiguration;

  /**
   * @schema UpdateDatasetRequest#lateDataRules
   */
  readonly lateDataRules?: LateDataRule[];

}

/**
 * @schema UpdateDatastoreRequest
 */
export interface UpdateDatastoreRequest {
  /**
   * @schema UpdateDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

  /**
   * @schema UpdateDatastoreRequest#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

  /**
   * @schema UpdateDatastoreRequest#datastoreStorage
   */
  readonly datastoreStorage?: DatastoreStorage;

}

/**
 * @schema UpdatePipelineRequest
 */
export interface UpdatePipelineRequest {
  /**
   * @schema UpdatePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema UpdatePipelineRequest#pipelineActivities
   */
  readonly pipelineActivities: PipelineActivity[];

}

/**
 * @schema Message
 */
export interface Message {
  /**
   * @schema Message#messageId
   */
  readonly messageId: string;

  /**
   * @schema Message#payload
   */
  readonly payload: any;

}

/**
 * @schema BatchPutMessageErrorEntry
 */
export interface BatchPutMessageErrorEntry {
  /**
   * @schema BatchPutMessageErrorEntry#messageId
   */
  readonly messageId?: string;

  /**
   * @schema BatchPutMessageErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchPutMessageErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ChannelStorage
 */
export interface ChannelStorage {
  /**
   * @schema ChannelStorage#serviceManagedS3
   */
  readonly serviceManagedS3?: ServiceManagedChannelS3Storage;

  /**
   * @schema ChannelStorage#customerManagedS3
   */
  readonly customerManagedS3?: CustomerManagedChannelS3Storage;

}

/**
 * @schema RetentionPeriod
 */
export interface RetentionPeriod {
  /**
   * @schema RetentionPeriod#unlimited
   */
  readonly unlimited?: boolean;

  /**
   * @schema RetentionPeriod#numberOfDays
   */
  readonly numberOfDays?: number;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key: string;

  /**
   * @schema Tag#value
   */
  readonly value: string;

}

/**
 * @schema DatasetAction
 */
export interface DatasetAction {
  /**
   * @schema DatasetAction#actionName
   */
  readonly actionName?: string;

  /**
   * @schema DatasetAction#queryAction
   */
  readonly queryAction?: SqlQueryDatasetAction;

  /**
   * @schema DatasetAction#containerAction
   */
  readonly containerAction?: ContainerDatasetAction;

}

/**
 * @schema DatasetTrigger
 */
export interface DatasetTrigger {
  /**
   * @schema DatasetTrigger#schedule
   */
  readonly schedule?: Schedule;

  /**
   * @schema DatasetTrigger#dataset
   */
  readonly dataset?: TriggeringDataset;

}

/**
 * @schema DatasetContentDeliveryRule
 */
export interface DatasetContentDeliveryRule {
  /**
   * @schema DatasetContentDeliveryRule#entryName
   */
  readonly entryName?: string;

  /**
   * @schema DatasetContentDeliveryRule#destination
   */
  readonly destination: DatasetContentDeliveryDestination;

}

/**
 * @schema VersioningConfiguration
 */
export interface VersioningConfiguration {
  /**
   * @schema VersioningConfiguration#unlimited
   */
  readonly unlimited?: boolean;

  /**
   * @schema VersioningConfiguration#maxVersions
   */
  readonly maxVersions?: number;

}

/**
 * @schema LateDataRule
 */
export interface LateDataRule {
  /**
   * @schema LateDataRule#ruleName
   */
  readonly ruleName?: string;

  /**
   * @schema LateDataRule#ruleConfiguration
   */
  readonly ruleConfiguration: LateDataRuleConfiguration;

}

/**
 * @schema DatastoreStorage
 */
export interface DatastoreStorage {
  /**
   * @schema DatastoreStorage#serviceManagedS3
   */
  readonly serviceManagedS3?: ServiceManagedDatastoreS3Storage;

  /**
   * @schema DatastoreStorage#customerManagedS3
   */
  readonly customerManagedS3?: CustomerManagedDatastoreS3Storage;

}

/**
 * @schema PipelineActivity
 */
export interface PipelineActivity {
  /**
   * @schema PipelineActivity#channel
   */
  readonly channel?: ChannelActivity;

  /**
   * @schema PipelineActivity#lambda
   */
  readonly lambda?: LambdaActivity;

  /**
   * @schema PipelineActivity#datastore
   */
  readonly datastore?: DatastoreActivity;

  /**
   * @schema PipelineActivity#addAttributes
   */
  readonly addAttributes?: AddAttributesActivity;

  /**
   * @schema PipelineActivity#removeAttributes
   */
  readonly removeAttributes?: RemoveAttributesActivity;

  /**
   * @schema PipelineActivity#selectAttributes
   */
  readonly selectAttributes?: SelectAttributesActivity;

  /**
   * @schema PipelineActivity#filter
   */
  readonly filter?: FilterActivity;

  /**
   * @schema PipelineActivity#math
   */
  readonly math?: MathActivity;

  /**
   * @schema PipelineActivity#deviceRegistryEnrich
   */
  readonly deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

  /**
   * @schema PipelineActivity#deviceShadowEnrich
   */
  readonly deviceShadowEnrich?: DeviceShadowEnrichActivity;

}

/**
 * @schema Channel
 */
export interface Channel {
  /**
   * @schema Channel#name
   */
  readonly name?: string;

  /**
   * @schema Channel#storage
   */
  readonly storage?: ChannelStorage;

  /**
   * @schema Channel#arn
   */
  readonly arn?: string;

  /**
   * @schema Channel#status
   */
  readonly status?: string;

  /**
   * @schema Channel#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

  /**
   * @schema Channel#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Channel#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema Channel#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * @schema ChannelStatistics
 */
export interface ChannelStatistics {
  /**
   * @schema ChannelStatistics#size
   */
  readonly size?: EstimatedResourceSize;

}

/**
 * @schema Dataset
 */
export interface Dataset {
  /**
   * @schema Dataset#name
   */
  readonly name?: string;

  /**
   * @schema Dataset#arn
   */
  readonly arn?: string;

  /**
   * @schema Dataset#actions
   */
  readonly actions?: DatasetAction[];

  /**
   * @schema Dataset#triggers
   */
  readonly triggers?: DatasetTrigger[];

  /**
   * @schema Dataset#contentDeliveryRules
   */
  readonly contentDeliveryRules?: DatasetContentDeliveryRule[];

  /**
   * @schema Dataset#status
   */
  readonly status?: string;

  /**
   * @schema Dataset#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Dataset#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema Dataset#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

  /**
   * @schema Dataset#versioningConfiguration
   */
  readonly versioningConfiguration?: VersioningConfiguration;

  /**
   * @schema Dataset#lateDataRules
   */
  readonly lateDataRules?: LateDataRule[];

}

/**
 * @schema Datastore
 */
export interface Datastore {
  /**
   * @schema Datastore#name
   */
  readonly name?: string;

  /**
   * @schema Datastore#storage
   */
  readonly storage?: DatastoreStorage;

  /**
   * @schema Datastore#arn
   */
  readonly arn?: string;

  /**
   * @schema Datastore#status
   */
  readonly status?: string;

  /**
   * @schema Datastore#retentionPeriod
   */
  readonly retentionPeriod?: RetentionPeriod;

  /**
   * @schema Datastore#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Datastore#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema Datastore#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * @schema DatastoreStatistics
 */
export interface DatastoreStatistics {
  /**
   * @schema DatastoreStatistics#size
   */
  readonly size?: EstimatedResourceSize;

}

/**
 * @schema LoggingOptions
 */
export interface LoggingOptions {
  /**
   * @schema LoggingOptions#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema LoggingOptions#level
   */
  readonly level: string;

  /**
   * @schema LoggingOptions#enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema Pipeline
 */
export interface Pipeline {
  /**
   * @schema Pipeline#name
   */
  readonly name?: string;

  /**
   * @schema Pipeline#arn
   */
  readonly arn?: string;

  /**
   * @schema Pipeline#activities
   */
  readonly activities?: PipelineActivity[];

  /**
   * @schema Pipeline#reprocessingSummaries
   */
  readonly reprocessingSummaries?: ReprocessingSummary[];

  /**
   * @schema Pipeline#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Pipeline#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema DatasetEntry
 */
export interface DatasetEntry {
  /**
   * @schema DatasetEntry#entryName
   */
  readonly entryName?: string;

  /**
   * @schema DatasetEntry#dataURI
   */
  readonly dataURI?: string;

}

/**
 * @schema DatasetContentStatus
 */
export interface DatasetContentStatus {
  /**
   * @schema DatasetContentStatus#state
   */
  readonly state?: string;

  /**
   * @schema DatasetContentStatus#reason
   */
  readonly reason?: string;

}

/**
 * @schema ChannelSummary
 */
export interface ChannelSummary {
  /**
   * @schema ChannelSummary#channelName
   */
  readonly channelName?: string;

  /**
   * @schema ChannelSummary#channelStorage
   */
  readonly channelStorage?: ChannelStorageSummary;

  /**
   * @schema ChannelSummary#status
   */
  readonly status?: string;

  /**
   * @schema ChannelSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ChannelSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ChannelSummary#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * @schema DatasetContentSummary
 */
export interface DatasetContentSummary {
  /**
   * @schema DatasetContentSummary#version
   */
  readonly version?: string;

  /**
   * @schema DatasetContentSummary#status
   */
  readonly status?: DatasetContentStatus;

  /**
   * @schema DatasetContentSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DatasetContentSummary#scheduleTime
   */
  readonly scheduleTime?: string;

  /**
   * @schema DatasetContentSummary#completionTime
   */
  readonly completionTime?: string;

}

/**
 * @schema DatasetSummary
 */
export interface DatasetSummary {
  /**
   * @schema DatasetSummary#datasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DatasetSummary#status
   */
  readonly status?: string;

  /**
   * @schema DatasetSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DatasetSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema DatasetSummary#triggers
   */
  readonly triggers?: DatasetTrigger[];

  /**
   * @schema DatasetSummary#actions
   */
  readonly actions?: DatasetActionSummary[];

}

/**
 * @schema DatastoreSummary
 */
export interface DatastoreSummary {
  /**
   * @schema DatastoreSummary#datastoreName
   */
  readonly datastoreName?: string;

  /**
   * @schema DatastoreSummary#datastoreStorage
   */
  readonly datastoreStorage?: DatastoreStorageSummary;

  /**
   * @schema DatastoreSummary#status
   */
  readonly status?: string;

  /**
   * @schema DatastoreSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DatastoreSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema DatastoreSummary#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * @schema PipelineSummary
 */
export interface PipelineSummary {
  /**
   * @schema PipelineSummary#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema PipelineSummary#reprocessingSummaries
   */
  readonly reprocessingSummaries?: ReprocessingSummary[];

  /**
   * @schema PipelineSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema PipelineSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema ServiceManagedChannelS3Storage
 */
export interface ServiceManagedChannelS3Storage {
}

/**
 * @schema CustomerManagedChannelS3Storage
 */
export interface CustomerManagedChannelS3Storage {
  /**
   * @schema CustomerManagedChannelS3Storage#bucket
   */
  readonly bucket: string;

  /**
   * @schema CustomerManagedChannelS3Storage#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema CustomerManagedChannelS3Storage#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema SqlQueryDatasetAction
 */
export interface SqlQueryDatasetAction {
  /**
   * @schema SqlQueryDatasetAction#sqlQuery
   */
  readonly sqlQuery: string;

  /**
   * @schema SqlQueryDatasetAction#filters
   */
  readonly filters?: QueryFilter[];

}

/**
 * @schema ContainerDatasetAction
 */
export interface ContainerDatasetAction {
  /**
   * @schema ContainerDatasetAction#image
   */
  readonly image: string;

  /**
   * @schema ContainerDatasetAction#executionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema ContainerDatasetAction#resourceConfiguration
   */
  readonly resourceConfiguration: ResourceConfiguration;

  /**
   * @schema ContainerDatasetAction#variables
   */
  readonly variables?: Variable[];

}

/**
 * @schema Schedule
 */
export interface Schedule {
  /**
   * @schema Schedule#expression
   */
  readonly expression?: string;

}

/**
 * @schema TriggeringDataset
 */
export interface TriggeringDataset {
  /**
   * @schema TriggeringDataset#name
   */
  readonly name: string;

}

/**
 * @schema DatasetContentDeliveryDestination
 */
export interface DatasetContentDeliveryDestination {
  /**
   * @schema DatasetContentDeliveryDestination#iotEventsDestinationConfiguration
   */
  readonly iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;

  /**
   * @schema DatasetContentDeliveryDestination#s3DestinationConfiguration
   */
  readonly s3DestinationConfiguration?: S3DestinationConfiguration;

}

/**
 * @schema LateDataRuleConfiguration
 */
export interface LateDataRuleConfiguration {
  /**
   * @schema LateDataRuleConfiguration#deltaTimeSessionWindowConfiguration
   */
  readonly deltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration;

}

/**
 * @schema ServiceManagedDatastoreS3Storage
 */
export interface ServiceManagedDatastoreS3Storage {
}

/**
 * @schema CustomerManagedDatastoreS3Storage
 */
export interface CustomerManagedDatastoreS3Storage {
  /**
   * @schema CustomerManagedDatastoreS3Storage#bucket
   */
  readonly bucket: string;

  /**
   * @schema CustomerManagedDatastoreS3Storage#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema CustomerManagedDatastoreS3Storage#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema ChannelActivity
 */
export interface ChannelActivity {
  /**
   * @schema ChannelActivity#name
   */
  readonly name: string;

  /**
   * @schema ChannelActivity#channelName
   */
  readonly channelName: string;

  /**
   * @schema ChannelActivity#next
   */
  readonly next?: string;

}

/**
 * @schema LambdaActivity
 */
export interface LambdaActivity {
  /**
   * @schema LambdaActivity#name
   */
  readonly name: string;

  /**
   * @schema LambdaActivity#lambdaName
   */
  readonly lambdaName: string;

  /**
   * @schema LambdaActivity#batchSize
   */
  readonly batchSize: number;

  /**
   * @schema LambdaActivity#next
   */
  readonly next?: string;

}

/**
 * @schema DatastoreActivity
 */
export interface DatastoreActivity {
  /**
   * @schema DatastoreActivity#name
   */
  readonly name: string;

  /**
   * @schema DatastoreActivity#datastoreName
   */
  readonly datastoreName: string;

}

/**
 * @schema AddAttributesActivity
 */
export interface AddAttributesActivity {
  /**
   * @schema AddAttributesActivity#name
   */
  readonly name: string;

  /**
   * @schema AddAttributesActivity#attributes
   */
  readonly attributes: { [key: string]: string };

  /**
   * @schema AddAttributesActivity#next
   */
  readonly next?: string;

}

/**
 * @schema RemoveAttributesActivity
 */
export interface RemoveAttributesActivity {
  /**
   * @schema RemoveAttributesActivity#name
   */
  readonly name: string;

  /**
   * @schema RemoveAttributesActivity#attributes
   */
  readonly attributes: string[];

  /**
   * @schema RemoveAttributesActivity#next
   */
  readonly next?: string;

}

/**
 * @schema SelectAttributesActivity
 */
export interface SelectAttributesActivity {
  /**
   * @schema SelectAttributesActivity#name
   */
  readonly name: string;

  /**
   * @schema SelectAttributesActivity#attributes
   */
  readonly attributes: string[];

  /**
   * @schema SelectAttributesActivity#next
   */
  readonly next?: string;

}

/**
 * @schema FilterActivity
 */
export interface FilterActivity {
  /**
   * @schema FilterActivity#name
   */
  readonly name: string;

  /**
   * @schema FilterActivity#filter
   */
  readonly filter: string;

  /**
   * @schema FilterActivity#next
   */
  readonly next?: string;

}

/**
 * @schema MathActivity
 */
export interface MathActivity {
  /**
   * @schema MathActivity#name
   */
  readonly name: string;

  /**
   * @schema MathActivity#attribute
   */
  readonly attribute: string;

  /**
   * @schema MathActivity#math
   */
  readonly math: string;

  /**
   * @schema MathActivity#next
   */
  readonly next?: string;

}

/**
 * @schema DeviceRegistryEnrichActivity
 */
export interface DeviceRegistryEnrichActivity {
  /**
   * @schema DeviceRegistryEnrichActivity#name
   */
  readonly name: string;

  /**
   * @schema DeviceRegistryEnrichActivity#attribute
   */
  readonly attribute: string;

  /**
   * @schema DeviceRegistryEnrichActivity#thingName
   */
  readonly thingName: string;

  /**
   * @schema DeviceRegistryEnrichActivity#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema DeviceRegistryEnrichActivity#next
   */
  readonly next?: string;

}

/**
 * @schema DeviceShadowEnrichActivity
 */
export interface DeviceShadowEnrichActivity {
  /**
   * @schema DeviceShadowEnrichActivity#name
   */
  readonly name: string;

  /**
   * @schema DeviceShadowEnrichActivity#attribute
   */
  readonly attribute: string;

  /**
   * @schema DeviceShadowEnrichActivity#thingName
   */
  readonly thingName: string;

  /**
   * @schema DeviceShadowEnrichActivity#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema DeviceShadowEnrichActivity#next
   */
  readonly next?: string;

}

/**
 * @schema EstimatedResourceSize
 */
export interface EstimatedResourceSize {
  /**
   * @schema EstimatedResourceSize#estimatedSizeInBytes
   */
  readonly estimatedSizeInBytes?: number;

  /**
   * @schema EstimatedResourceSize#estimatedOn
   */
  readonly estimatedOn?: string;

}

/**
 * @schema ReprocessingSummary
 */
export interface ReprocessingSummary {
  /**
   * @schema ReprocessingSummary#id
   */
  readonly id?: string;

  /**
   * @schema ReprocessingSummary#status
   */
  readonly status?: string;

  /**
   * @schema ReprocessingSummary#creationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema ChannelStorageSummary
 */
export interface ChannelStorageSummary {
  /**
   * @schema ChannelStorageSummary#serviceManagedS3
   */
  readonly serviceManagedS3?: ServiceManagedChannelS3StorageSummary;

  /**
   * @schema ChannelStorageSummary#customerManagedS3
   */
  readonly customerManagedS3?: CustomerManagedChannelS3StorageSummary;

}

/**
 * @schema DatasetActionSummary
 */
export interface DatasetActionSummary {
  /**
   * @schema DatasetActionSummary#actionName
   */
  readonly actionName?: string;

  /**
   * @schema DatasetActionSummary#actionType
   */
  readonly actionType?: string;

}

/**
 * @schema DatastoreStorageSummary
 */
export interface DatastoreStorageSummary {
  /**
   * @schema DatastoreStorageSummary#serviceManagedS3
   */
  readonly serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;

  /**
   * @schema DatastoreStorageSummary#customerManagedS3
   */
  readonly customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;

}

/**
 * @schema QueryFilter
 */
export interface QueryFilter {
  /**
   * @schema QueryFilter#deltaTime
   */
  readonly deltaTime?: DeltaTime;

}

/**
 * @schema ResourceConfiguration
 */
export interface ResourceConfiguration {
  /**
   * @schema ResourceConfiguration#computeType
   */
  readonly computeType: string;

  /**
   * @schema ResourceConfiguration#volumeSizeInGB
   */
  readonly volumeSizeInGB?: number;

}

/**
 * @schema Variable
 */
export interface Variable {
  /**
   * @schema Variable#name
   */
  readonly name: string;

  /**
   * @schema Variable#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema Variable#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema Variable#datasetContentVersionValue
   */
  readonly datasetContentVersionValue?: DatasetContentVersionValue;

  /**
   * @schema Variable#outputFileUriValue
   */
  readonly outputFileUriValue?: OutputFileUriValue;

}

/**
 * @schema IotEventsDestinationConfiguration
 */
export interface IotEventsDestinationConfiguration {
  /**
   * @schema IotEventsDestinationConfiguration#inputName
   */
  readonly inputName: string;

  /**
   * @schema IotEventsDestinationConfiguration#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema S3DestinationConfiguration
 */
export interface S3DestinationConfiguration {
  /**
   * @schema S3DestinationConfiguration#bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DestinationConfiguration#key
   */
  readonly key: string;

  /**
   * @schema S3DestinationConfiguration#glueConfiguration
   */
  readonly glueConfiguration?: GlueConfiguration;

  /**
   * @schema S3DestinationConfiguration#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema DeltaTimeSessionWindowConfiguration
 */
export interface DeltaTimeSessionWindowConfiguration {
  /**
   * @schema DeltaTimeSessionWindowConfiguration#timeoutInMinutes
   */
  readonly timeoutInMinutes: number;

}

/**
 * @schema ServiceManagedChannelS3StorageSummary
 */
export interface ServiceManagedChannelS3StorageSummary {
}

/**
 * @schema CustomerManagedChannelS3StorageSummary
 */
export interface CustomerManagedChannelS3StorageSummary {
  /**
   * @schema CustomerManagedChannelS3StorageSummary#bucket
   */
  readonly bucket?: string;

  /**
   * @schema CustomerManagedChannelS3StorageSummary#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema CustomerManagedChannelS3StorageSummary#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema ServiceManagedDatastoreS3StorageSummary
 */
export interface ServiceManagedDatastoreS3StorageSummary {
}

/**
 * @schema CustomerManagedDatastoreS3StorageSummary
 */
export interface CustomerManagedDatastoreS3StorageSummary {
  /**
   * @schema CustomerManagedDatastoreS3StorageSummary#bucket
   */
  readonly bucket?: string;

  /**
   * @schema CustomerManagedDatastoreS3StorageSummary#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema CustomerManagedDatastoreS3StorageSummary#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema DeltaTime
 */
export interface DeltaTime {
  /**
   * @schema DeltaTime#offsetSeconds
   */
  readonly offsetSeconds: number;

  /**
   * @schema DeltaTime#timeExpression
   */
  readonly timeExpression: string;

}

/**
 * @schema DatasetContentVersionValue
 */
export interface DatasetContentVersionValue {
  /**
   * @schema DatasetContentVersionValue#datasetName
   */
  readonly datasetName: string;

}

/**
 * @schema OutputFileUriValue
 */
export interface OutputFileUriValue {
  /**
   * @schema OutputFileUriValue#fileName
   */
  readonly fileName: string;

}

/**
 * @schema GlueConfiguration
 */
export interface GlueConfiguration {
  /**
   * @schema GlueConfiguration#tableName
   */
  readonly tableName: string;

  /**
   * @schema GlueConfiguration#databaseName
   */
  readonly databaseName: string;

}
