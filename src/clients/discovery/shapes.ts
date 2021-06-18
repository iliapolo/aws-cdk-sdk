/**
 * @schema DiscoveryAssociateConfigurationItemsToApplicationRequest
 */
export interface DiscoveryAssociateConfigurationItemsToApplicationRequest {
  /**
   * @schema DiscoveryAssociateConfigurationItemsToApplicationRequest#applicationConfigurationId
   */
  readonly applicationConfigurationId: string;

  /**
   * @schema DiscoveryAssociateConfigurationItemsToApplicationRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * @schema DiscoveryAssociateConfigurationItemsToApplicationResponse
 */
export interface DiscoveryAssociateConfigurationItemsToApplicationResponse {
}

/**
 * @schema DiscoveryBatchDeleteImportDataRequest
 */
export interface DiscoveryBatchDeleteImportDataRequest {
  /**
   * @schema DiscoveryBatchDeleteImportDataRequest#importTaskIds
   */
  readonly importTaskIds: string[];

}

/**
 * @schema DiscoveryBatchDeleteImportDataResponse
 */
export interface DiscoveryBatchDeleteImportDataResponse {
  /**
   * @schema DiscoveryBatchDeleteImportDataResponse#errors
   */
  readonly errors?: DiscoveryBatchDeleteImportDataError[];

}

/**
 * @schema DiscoveryCreateApplicationRequest
 */
export interface DiscoveryCreateApplicationRequest {
  /**
   * @schema DiscoveryCreateApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryCreateApplicationRequest#description
   */
  readonly description?: string;

}

/**
 * @schema DiscoveryCreateApplicationResponse
 */
export interface DiscoveryCreateApplicationResponse {
  /**
   * @schema DiscoveryCreateApplicationResponse#configurationId
   */
  readonly configurationId?: string;

}

/**
 * @schema DiscoveryCreateTagsRequest
 */
export interface DiscoveryCreateTagsRequest {
  /**
   * @schema DiscoveryCreateTagsRequest#configurationIds
   */
  readonly configurationIds: string[];

  /**
   * @schema DiscoveryCreateTagsRequest#tags
   */
  readonly tags: DiscoveryTag[];

}

/**
 * @schema DiscoveryCreateTagsResponse
 */
export interface DiscoveryCreateTagsResponse {
}

/**
 * @schema DiscoveryDeleteApplicationsRequest
 */
export interface DiscoveryDeleteApplicationsRequest {
  /**
   * @schema DiscoveryDeleteApplicationsRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * @schema DiscoveryDeleteApplicationsResponse
 */
export interface DiscoveryDeleteApplicationsResponse {
}

/**
 * @schema DiscoveryDeleteTagsRequest
 */
export interface DiscoveryDeleteTagsRequest {
  /**
   * @schema DiscoveryDeleteTagsRequest#configurationIds
   */
  readonly configurationIds: string[];

  /**
   * @schema DiscoveryDeleteTagsRequest#tags
   */
  readonly tags?: DiscoveryTag[];

}

/**
 * @schema DiscoveryDeleteTagsResponse
 */
export interface DiscoveryDeleteTagsResponse {
}

/**
 * @schema DiscoveryDescribeAgentsRequest
 */
export interface DiscoveryDescribeAgentsRequest {
  /**
   * @schema DiscoveryDescribeAgentsRequest#agentIds
   */
  readonly agentIds?: string[];

  /**
   * @schema DiscoveryDescribeAgentsRequest#filters
   */
  readonly filters?: DiscoveryFilter[];

  /**
   * @schema DiscoveryDescribeAgentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeAgentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeAgentsResponse
 */
export interface DiscoveryDescribeAgentsResponse {
  /**
   * @schema DiscoveryDescribeAgentsResponse#agentsInfo
   */
  readonly agentsInfo?: DiscoveryAgentInfo[];

  /**
   * @schema DiscoveryDescribeAgentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeConfigurationsRequest
 */
export interface DiscoveryDescribeConfigurationsRequest {
  /**
   * @schema DiscoveryDescribeConfigurationsRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * @schema DiscoveryDescribeConfigurationsResponse
 */
export interface DiscoveryDescribeConfigurationsResponse {
  /**
   * @schema DiscoveryDescribeConfigurationsResponse#configurations
   */
  readonly configurations?: { [key: string]: string }[];

}

/**
 * @schema DiscoveryDescribeContinuousExportsRequest
 */
export interface DiscoveryDescribeContinuousExportsRequest {
  /**
   * @schema DiscoveryDescribeContinuousExportsRequest#exportIds
   */
  readonly exportIds?: string[];

  /**
   * @schema DiscoveryDescribeContinuousExportsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeContinuousExportsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeContinuousExportsResponse
 */
export interface DiscoveryDescribeContinuousExportsResponse {
  /**
   * @schema DiscoveryDescribeContinuousExportsResponse#descriptions
   */
  readonly descriptions?: DiscoveryContinuousExportDescription[];

  /**
   * @schema DiscoveryDescribeContinuousExportsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeExportConfigurationsRequest
 */
export interface DiscoveryDescribeExportConfigurationsRequest {
  /**
   * @schema DiscoveryDescribeExportConfigurationsRequest#exportIds
   */
  readonly exportIds?: string[];

  /**
   * @schema DiscoveryDescribeExportConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeExportConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeExportConfigurationsResponse
 */
export interface DiscoveryDescribeExportConfigurationsResponse {
  /**
   * @schema DiscoveryDescribeExportConfigurationsResponse#exportsInfo
   */
  readonly exportsInfo?: DiscoveryExportInfo[];

  /**
   * @schema DiscoveryDescribeExportConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeExportTasksRequest
 */
export interface DiscoveryDescribeExportTasksRequest {
  /**
   * @schema DiscoveryDescribeExportTasksRequest#exportIds
   */
  readonly exportIds?: string[];

  /**
   * @schema DiscoveryDescribeExportTasksRequest#filters
   */
  readonly filters?: DiscoveryExportFilter[];

  /**
   * @schema DiscoveryDescribeExportTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeExportTasksRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeExportTasksResponse
 */
export interface DiscoveryDescribeExportTasksResponse {
  /**
   * @schema DiscoveryDescribeExportTasksResponse#exportsInfo
   */
  readonly exportsInfo?: DiscoveryExportInfo[];

  /**
   * @schema DiscoveryDescribeExportTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeImportTasksRequest
 */
export interface DiscoveryDescribeImportTasksRequest {
  /**
   * @schema DiscoveryDescribeImportTasksRequest#filters
   */
  readonly filters?: DiscoveryImportTaskFilter[];

  /**
   * @schema DiscoveryDescribeImportTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeImportTasksRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeImportTasksResponse
 */
export interface DiscoveryDescribeImportTasksResponse {
  /**
   * @schema DiscoveryDescribeImportTasksResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DiscoveryDescribeImportTasksResponse#tasks
   */
  readonly tasks?: DiscoveryImportTask[];

}

/**
 * @schema DiscoveryDescribeTagsRequest
 */
export interface DiscoveryDescribeTagsRequest {
  /**
   * @schema DiscoveryDescribeTagsRequest#filters
   */
  readonly filters?: DiscoveryTagFilter[];

  /**
   * @schema DiscoveryDescribeTagsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeTagsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDescribeTagsResponse
 */
export interface DiscoveryDescribeTagsResponse {
  /**
   * @schema DiscoveryDescribeTagsResponse#tags
   */
  readonly tags?: DiscoveryConfigurationTag[];

  /**
   * @schema DiscoveryDescribeTagsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryDisassociateConfigurationItemsFromApplicationRequest
 */
export interface DiscoveryDisassociateConfigurationItemsFromApplicationRequest {
  /**
   * @schema DiscoveryDisassociateConfigurationItemsFromApplicationRequest#applicationConfigurationId
   */
  readonly applicationConfigurationId: string;

  /**
   * @schema DiscoveryDisassociateConfigurationItemsFromApplicationRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * @schema DiscoveryDisassociateConfigurationItemsFromApplicationResponse
 */
export interface DiscoveryDisassociateConfigurationItemsFromApplicationResponse {
}

/**
 * @schema DiscoveryExportConfigurationsResponse
 */
export interface DiscoveryExportConfigurationsResponse {
  /**
   * @schema DiscoveryExportConfigurationsResponse#exportId
   */
  readonly exportId?: string;

}

/**
 * @schema DiscoveryGetDiscoverySummaryRequest
 */
export interface DiscoveryGetDiscoverySummaryRequest {
}

/**
 * @schema DiscoveryGetDiscoverySummaryResponse
 */
export interface DiscoveryGetDiscoverySummaryResponse {
  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#servers
   */
  readonly servers?: number;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#applications
   */
  readonly applications?: number;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#serversMappedToApplications
   */
  readonly serversMappedToApplications?: number;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#serversMappedtoTags
   */
  readonly serversMappedtoTags?: number;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#agentSummary
   */
  readonly agentSummary?: DiscoveryCustomerAgentInfo;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#connectorSummary
   */
  readonly connectorSummary?: DiscoveryCustomerConnectorInfo;

}

/**
 * @schema DiscoveryListConfigurationsRequest
 */
export interface DiscoveryListConfigurationsRequest {
  /**
   * @schema DiscoveryListConfigurationsRequest#configurationType
   */
  readonly configurationType: string;

  /**
   * @schema DiscoveryListConfigurationsRequest#filters
   */
  readonly filters?: DiscoveryFilter[];

  /**
   * @schema DiscoveryListConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryListConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DiscoveryListConfigurationsRequest#orderBy
   */
  readonly orderBy?: DiscoveryOrderByElement[];

}

/**
 * @schema DiscoveryListConfigurationsResponse
 */
export interface DiscoveryListConfigurationsResponse {
  /**
   * @schema DiscoveryListConfigurationsResponse#configurations
   */
  readonly configurations?: { [key: string]: string }[];

  /**
   * @schema DiscoveryListConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryListServerNeighborsRequest
 */
export interface DiscoveryListServerNeighborsRequest {
  /**
   * @schema DiscoveryListServerNeighborsRequest#configurationId
   */
  readonly configurationId: string;

  /**
   * @schema DiscoveryListServerNeighborsRequest#portInformationNeeded
   */
  readonly portInformationNeeded?: boolean;

  /**
   * @schema DiscoveryListServerNeighborsRequest#neighborConfigurationIds
   */
  readonly neighborConfigurationIds?: string[];

  /**
   * @schema DiscoveryListServerNeighborsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryListServerNeighborsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DiscoveryListServerNeighborsResponse
 */
export interface DiscoveryListServerNeighborsResponse {
  /**
   * @schema DiscoveryListServerNeighborsResponse#neighbors
   */
  readonly neighbors: DiscoveryNeighborConnectionDetail[];

  /**
   * @schema DiscoveryListServerNeighborsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DiscoveryListServerNeighborsResponse#knownDependencyCount
   */
  readonly knownDependencyCount?: number;

}

/**
 * @schema DiscoveryStartContinuousExportRequest
 */
export interface DiscoveryStartContinuousExportRequest {
}

/**
 * @schema DiscoveryStartContinuousExportResponse
 */
export interface DiscoveryStartContinuousExportResponse {
  /**
   * @schema DiscoveryStartContinuousExportResponse#exportId
   */
  readonly exportId?: string;

  /**
   * @schema DiscoveryStartContinuousExportResponse#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema DiscoveryStartContinuousExportResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DiscoveryStartContinuousExportResponse#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema DiscoveryStartContinuousExportResponse#schemaStorageConfig
   */
  readonly schemaStorageConfig?: { [key: string]: string };

}

/**
 * @schema DiscoveryStartDataCollectionByAgentIdsRequest
 */
export interface DiscoveryStartDataCollectionByAgentIdsRequest {
  /**
   * @schema DiscoveryStartDataCollectionByAgentIdsRequest#agentIds
   */
  readonly agentIds: string[];

}

/**
 * @schema DiscoveryStartDataCollectionByAgentIdsResponse
 */
export interface DiscoveryStartDataCollectionByAgentIdsResponse {
  /**
   * @schema DiscoveryStartDataCollectionByAgentIdsResponse#agentsConfigurationStatus
   */
  readonly agentsConfigurationStatus?: DiscoveryAgentConfigurationStatus[];

}

/**
 * @schema DiscoveryStartExportTaskRequest
 */
export interface DiscoveryStartExportTaskRequest {
  /**
   * @schema DiscoveryStartExportTaskRequest#exportDataFormat
   */
  readonly exportDataFormat?: string[];

  /**
   * @schema DiscoveryStartExportTaskRequest#filters
   */
  readonly filters?: DiscoveryExportFilter[];

  /**
   * @schema DiscoveryStartExportTaskRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DiscoveryStartExportTaskRequest#endTime
   */
  readonly endTime?: string;

}

/**
 * @schema DiscoveryStartExportTaskResponse
 */
export interface DiscoveryStartExportTaskResponse {
  /**
   * @schema DiscoveryStartExportTaskResponse#exportId
   */
  readonly exportId?: string;

}

/**
 * @schema DiscoveryStartImportTaskRequest
 */
export interface DiscoveryStartImportTaskRequest {
  /**
   * @schema DiscoveryStartImportTaskRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DiscoveryStartImportTaskRequest#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryStartImportTaskRequest#importUrl
   */
  readonly importUrl: string;

}

/**
 * @schema DiscoveryStartImportTaskResponse
 */
export interface DiscoveryStartImportTaskResponse {
  /**
   * @schema DiscoveryStartImportTaskResponse#task
   */
  readonly task?: DiscoveryImportTask;

}

/**
 * @schema DiscoveryStopContinuousExportRequest
 */
export interface DiscoveryStopContinuousExportRequest {
  /**
   * @schema DiscoveryStopContinuousExportRequest#exportId
   */
  readonly exportId: string;

}

/**
 * @schema DiscoveryStopContinuousExportResponse
 */
export interface DiscoveryStopContinuousExportResponse {
  /**
   * @schema DiscoveryStopContinuousExportResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DiscoveryStopContinuousExportResponse#stopTime
   */
  readonly stopTime?: string;

}

/**
 * @schema DiscoveryStopDataCollectionByAgentIdsRequest
 */
export interface DiscoveryStopDataCollectionByAgentIdsRequest {
  /**
   * @schema DiscoveryStopDataCollectionByAgentIdsRequest#agentIds
   */
  readonly agentIds: string[];

}

/**
 * @schema DiscoveryStopDataCollectionByAgentIdsResponse
 */
export interface DiscoveryStopDataCollectionByAgentIdsResponse {
  /**
   * @schema DiscoveryStopDataCollectionByAgentIdsResponse#agentsConfigurationStatus
   */
  readonly agentsConfigurationStatus?: DiscoveryAgentConfigurationStatus[];

}

/**
 * @schema DiscoveryUpdateApplicationRequest
 */
export interface DiscoveryUpdateApplicationRequest {
  /**
   * @schema DiscoveryUpdateApplicationRequest#configurationId
   */
  readonly configurationId: string;

  /**
   * @schema DiscoveryUpdateApplicationRequest#name
   */
  readonly name?: string;

  /**
   * @schema DiscoveryUpdateApplicationRequest#description
   */
  readonly description?: string;

}

/**
 * @schema DiscoveryUpdateApplicationResponse
 */
export interface DiscoveryUpdateApplicationResponse {
}

/**
 * @schema DiscoveryBatchDeleteImportDataError
 */
export interface DiscoveryBatchDeleteImportDataError {
  /**
   * @schema DiscoveryBatchDeleteImportDataError#importTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema DiscoveryBatchDeleteImportDataError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema DiscoveryBatchDeleteImportDataError#errorDescription
   */
  readonly errorDescription?: string;

}

/**
 * @schema DiscoveryTag
 */
export interface DiscoveryTag {
  /**
   * @schema DiscoveryTag#key
   */
  readonly key: string;

  /**
   * @schema DiscoveryTag#value
   */
  readonly value: string;

}

/**
 * @schema DiscoveryFilter
 */
export interface DiscoveryFilter {
  /**
   * @schema DiscoveryFilter#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryFilter#values
   */
  readonly values: string[];

  /**
   * @schema DiscoveryFilter#condition
   */
  readonly condition: string;

}

/**
 * @schema DiscoveryAgentInfo
 */
export interface DiscoveryAgentInfo {
  /**
   * @schema DiscoveryAgentInfo#agentId
   */
  readonly agentId?: string;

  /**
   * @schema DiscoveryAgentInfo#hostName
   */
  readonly hostName?: string;

  /**
   * @schema DiscoveryAgentInfo#agentNetworkInfoList
   */
  readonly agentNetworkInfoList?: DiscoveryAgentNetworkInfo[];

  /**
   * @schema DiscoveryAgentInfo#connectorId
   */
  readonly connectorId?: string;

  /**
   * @schema DiscoveryAgentInfo#version
   */
  readonly version?: string;

  /**
   * @schema DiscoveryAgentInfo#health
   */
  readonly health?: string;

  /**
   * @schema DiscoveryAgentInfo#lastHealthPingTime
   */
  readonly lastHealthPingTime?: string;

  /**
   * @schema DiscoveryAgentInfo#collectionStatus
   */
  readonly collectionStatus?: string;

  /**
   * @schema DiscoveryAgentInfo#agentType
   */
  readonly agentType?: string;

  /**
   * @schema DiscoveryAgentInfo#registeredTime
   */
  readonly registeredTime?: string;

}

/**
 * @schema DiscoveryContinuousExportDescription
 */
export interface DiscoveryContinuousExportDescription {
  /**
   * @schema DiscoveryContinuousExportDescription#exportId
   */
  readonly exportId?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#status
   */
  readonly status?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#statusDetail
   */
  readonly statusDetail?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#stopTime
   */
  readonly stopTime?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#schemaStorageConfig
   */
  readonly schemaStorageConfig?: { [key: string]: string };

}

/**
 * @schema DiscoveryExportInfo
 */
export interface DiscoveryExportInfo {
  /**
   * @schema DiscoveryExportInfo#exportId
   */
  readonly exportId: string;

  /**
   * @schema DiscoveryExportInfo#exportStatus
   */
  readonly exportStatus: string;

  /**
   * @schema DiscoveryExportInfo#statusMessage
   */
  readonly statusMessage: string;

  /**
   * @schema DiscoveryExportInfo#configurationsDownloadUrl
   */
  readonly configurationsDownloadUrl?: string;

  /**
   * @schema DiscoveryExportInfo#exportRequestTime
   */
  readonly exportRequestTime: string;

  /**
   * @schema DiscoveryExportInfo#isTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema DiscoveryExportInfo#requestedStartTime
   */
  readonly requestedStartTime?: string;

  /**
   * @schema DiscoveryExportInfo#requestedEndTime
   */
  readonly requestedEndTime?: string;

}

/**
 * @schema DiscoveryExportFilter
 */
export interface DiscoveryExportFilter {
  /**
   * @schema DiscoveryExportFilter#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryExportFilter#values
   */
  readonly values: string[];

  /**
   * @schema DiscoveryExportFilter#condition
   */
  readonly condition: string;

}

/**
 * @schema DiscoveryImportTaskFilter
 */
export interface DiscoveryImportTaskFilter {
  /**
   * @schema DiscoveryImportTaskFilter#name
   */
  readonly name?: string;

  /**
   * @schema DiscoveryImportTaskFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema DiscoveryImportTask
 */
export interface DiscoveryImportTask {
  /**
   * @schema DiscoveryImportTask#importTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema DiscoveryImportTask#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DiscoveryImportTask#name
   */
  readonly name?: string;

  /**
   * @schema DiscoveryImportTask#importUrl
   */
  readonly importUrl?: string;

  /**
   * @schema DiscoveryImportTask#status
   */
  readonly status?: string;

  /**
   * @schema DiscoveryImportTask#importRequestTime
   */
  readonly importRequestTime?: string;

  /**
   * @schema DiscoveryImportTask#importCompletionTime
   */
  readonly importCompletionTime?: string;

  /**
   * @schema DiscoveryImportTask#importDeletedTime
   */
  readonly importDeletedTime?: string;

  /**
   * @schema DiscoveryImportTask#serverImportSuccess
   */
  readonly serverImportSuccess?: number;

  /**
   * @schema DiscoveryImportTask#serverImportFailure
   */
  readonly serverImportFailure?: number;

  /**
   * @schema DiscoveryImportTask#applicationImportSuccess
   */
  readonly applicationImportSuccess?: number;

  /**
   * @schema DiscoveryImportTask#applicationImportFailure
   */
  readonly applicationImportFailure?: number;

  /**
   * @schema DiscoveryImportTask#errorsAndFailedEntriesZip
   */
  readonly errorsAndFailedEntriesZip?: string;

}

/**
 * @schema DiscoveryTagFilter
 */
export interface DiscoveryTagFilter {
  /**
   * @schema DiscoveryTagFilter#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryTagFilter#values
   */
  readonly values: string[];

}

/**
 * @schema DiscoveryConfigurationTag
 */
export interface DiscoveryConfigurationTag {
  /**
   * @schema DiscoveryConfigurationTag#configurationType
   */
  readonly configurationType?: string;

  /**
   * @schema DiscoveryConfigurationTag#configurationId
   */
  readonly configurationId?: string;

  /**
   * @schema DiscoveryConfigurationTag#key
   */
  readonly key?: string;

  /**
   * @schema DiscoveryConfigurationTag#value
   */
  readonly value?: string;

  /**
   * @schema DiscoveryConfigurationTag#timeOfCreation
   */
  readonly timeOfCreation?: string;

}

/**
 * @schema DiscoveryCustomerAgentInfo
 */
export interface DiscoveryCustomerAgentInfo {
  /**
   * @schema DiscoveryCustomerAgentInfo#activeAgents
   */
  readonly activeAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#healthyAgents
   */
  readonly healthyAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#blackListedAgents
   */
  readonly blackListedAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#shutdownAgents
   */
  readonly shutdownAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#unhealthyAgents
   */
  readonly unhealthyAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#totalAgents
   */
  readonly totalAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#unknownAgents
   */
  readonly unknownAgents: number;

}

/**
 * @schema DiscoveryCustomerConnectorInfo
 */
export interface DiscoveryCustomerConnectorInfo {
  /**
   * @schema DiscoveryCustomerConnectorInfo#activeConnectors
   */
  readonly activeConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#healthyConnectors
   */
  readonly healthyConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#blackListedConnectors
   */
  readonly blackListedConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#shutdownConnectors
   */
  readonly shutdownConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#unhealthyConnectors
   */
  readonly unhealthyConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#totalConnectors
   */
  readonly totalConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#unknownConnectors
   */
  readonly unknownConnectors: number;

}

/**
 * @schema DiscoveryOrderByElement
 */
export interface DiscoveryOrderByElement {
  /**
   * @schema DiscoveryOrderByElement#fieldName
   */
  readonly fieldName: string;

  /**
   * @schema DiscoveryOrderByElement#sortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema DiscoveryNeighborConnectionDetail
 */
export interface DiscoveryNeighborConnectionDetail {
  /**
   * @schema DiscoveryNeighborConnectionDetail#sourceServerId
   */
  readonly sourceServerId: string;

  /**
   * @schema DiscoveryNeighborConnectionDetail#destinationServerId
   */
  readonly destinationServerId: string;

  /**
   * @schema DiscoveryNeighborConnectionDetail#destinationPort
   */
  readonly destinationPort?: number;

  /**
   * @schema DiscoveryNeighborConnectionDetail#transportProtocol
   */
  readonly transportProtocol?: string;

  /**
   * @schema DiscoveryNeighborConnectionDetail#connectionsCount
   */
  readonly connectionsCount: number;

}

/**
 * @schema DiscoveryAgentConfigurationStatus
 */
export interface DiscoveryAgentConfigurationStatus {
  /**
   * @schema DiscoveryAgentConfigurationStatus#agentId
   */
  readonly agentId?: string;

  /**
   * @schema DiscoveryAgentConfigurationStatus#operationSucceeded
   */
  readonly operationSucceeded?: boolean;

  /**
   * @schema DiscoveryAgentConfigurationStatus#description
   */
  readonly description?: string;

}

/**
 * @schema DiscoveryAgentNetworkInfo
 */
export interface DiscoveryAgentNetworkInfo {
  /**
   * @schema DiscoveryAgentNetworkInfo#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema DiscoveryAgentNetworkInfo#macAddress
   */
  readonly macAddress?: string;

}
