/**
 * @schema AssociateConfigurationItemsToApplicationRequest
 */
export interface AssociateConfigurationItemsToApplicationRequest {
  /**
   * @schema AssociateConfigurationItemsToApplicationRequest#applicationConfigurationId
   */
  readonly applicationConfigurationId: string;

  /**
   * @schema AssociateConfigurationItemsToApplicationRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * @schema AssociateConfigurationItemsToApplicationResponse
 */
export interface AssociateConfigurationItemsToApplicationResponse {
}

/**
 * @schema BatchDeleteImportDataRequest
 */
export interface BatchDeleteImportDataRequest {
  /**
   * @schema BatchDeleteImportDataRequest#importTaskIds
   */
  readonly importTaskIds: string[];

}

/**
 * @schema BatchDeleteImportDataResponse
 */
export interface BatchDeleteImportDataResponse {
  /**
   * @schema BatchDeleteImportDataResponse#errors
   */
  readonly errors?: BatchDeleteImportDataError[];

}

/**
 * @schema CreateApplicationRequest
 */
export interface CreateApplicationRequest {
  /**
   * @schema CreateApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateApplicationRequest#description
   */
  readonly description?: string;

}

/**
 * @schema CreateApplicationResponse
 */
export interface CreateApplicationResponse {
  /**
   * @schema CreateApplicationResponse#configurationId
   */
  readonly configurationId?: string;

}

/**
 * @schema CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * @schema CreateTagsRequest#configurationIds
   */
  readonly configurationIds: string[];

  /**
   * @schema CreateTagsRequest#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema CreateTagsResponse
 */
export interface CreateTagsResponse {
}

/**
 * @schema DeleteApplicationsRequest
 */
export interface DeleteApplicationsRequest {
  /**
   * @schema DeleteApplicationsRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * @schema DeleteApplicationsResponse
 */
export interface DeleteApplicationsResponse {
}

/**
 * @schema DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * @schema DeleteTagsRequest#configurationIds
   */
  readonly configurationIds: string[];

  /**
   * @schema DeleteTagsRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DeleteTagsResponse
 */
export interface DeleteTagsResponse {
}

/**
 * @schema DescribeAgentsRequest
 */
export interface DescribeAgentsRequest {
  /**
   * @schema DescribeAgentsRequest#agentIds
   */
  readonly agentIds?: string[];

  /**
   * @schema DescribeAgentsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeAgentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeAgentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAgentsResponse
 */
export interface DescribeAgentsResponse {
  /**
   * @schema DescribeAgentsResponse#agentsInfo
   */
  readonly agentsInfo?: AgentInfo[];

  /**
   * @schema DescribeAgentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeConfigurationsRequest
 */
export interface DescribeConfigurationsRequest {
  /**
   * @schema DescribeConfigurationsRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * @schema DescribeConfigurationsResponse
 */
export interface DescribeConfigurationsResponse {
  /**
   * @schema DescribeConfigurationsResponse#configurations
   */
  readonly configurations?: { [key: string]: string }[];

}

/**
 * @schema DescribeContinuousExportsRequest
 */
export interface DescribeContinuousExportsRequest {
  /**
   * @schema DescribeContinuousExportsRequest#exportIds
   */
  readonly exportIds?: string[];

  /**
   * @schema DescribeContinuousExportsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeContinuousExportsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeContinuousExportsResponse
 */
export interface DescribeContinuousExportsResponse {
  /**
   * @schema DescribeContinuousExportsResponse#descriptions
   */
  readonly descriptions?: ContinuousExportDescription[];

  /**
   * @schema DescribeContinuousExportsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeExportConfigurationsRequest
 */
export interface DescribeExportConfigurationsRequest {
  /**
   * @schema DescribeExportConfigurationsRequest#exportIds
   */
  readonly exportIds?: string[];

  /**
   * @schema DescribeExportConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeExportConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeExportConfigurationsResponse
 */
export interface DescribeExportConfigurationsResponse {
  /**
   * @schema DescribeExportConfigurationsResponse#exportsInfo
   */
  readonly exportsInfo?: ExportInfo[];

  /**
   * @schema DescribeExportConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeExportTasksRequest
 */
export interface DescribeExportTasksRequest {
  /**
   * @schema DescribeExportTasksRequest#exportIds
   */
  readonly exportIds?: string[];

  /**
   * @schema DescribeExportTasksRequest#filters
   */
  readonly filters?: ExportFilter[];

  /**
   * @schema DescribeExportTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeExportTasksRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeExportTasksResponse
 */
export interface DescribeExportTasksResponse {
  /**
   * @schema DescribeExportTasksResponse#exportsInfo
   */
  readonly exportsInfo?: ExportInfo[];

  /**
   * @schema DescribeExportTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImportTasksRequest
 */
export interface DescribeImportTasksRequest {
  /**
   * @schema DescribeImportTasksRequest#filters
   */
  readonly filters?: ImportTaskFilter[];

  /**
   * @schema DescribeImportTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeImportTasksRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImportTasksResponse
 */
export interface DescribeImportTasksResponse {
  /**
   * @schema DescribeImportTasksResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeImportTasksResponse#tasks
   */
  readonly tasks?: ImportTask[];

}

/**
 * @schema DescribeTagsRequest
 */
export interface DescribeTagsRequest {
  /**
   * @schema DescribeTagsRequest#filters
   */
  readonly filters?: TagFilter[];

  /**
   * @schema DescribeTagsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTagsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTagsResponse
 */
export interface DescribeTagsResponse {
  /**
   * @schema DescribeTagsResponse#tags
   */
  readonly tags?: ConfigurationTag[];

  /**
   * @schema DescribeTagsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DisassociateConfigurationItemsFromApplicationRequest
 */
export interface DisassociateConfigurationItemsFromApplicationRequest {
  /**
   * @schema DisassociateConfigurationItemsFromApplicationRequest#applicationConfigurationId
   */
  readonly applicationConfigurationId: string;

  /**
   * @schema DisassociateConfigurationItemsFromApplicationRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * @schema DisassociateConfigurationItemsFromApplicationResponse
 */
export interface DisassociateConfigurationItemsFromApplicationResponse {
}

/**
 * @schema ExportConfigurationsResponse
 */
export interface ExportConfigurationsResponse {
  /**
   * @schema ExportConfigurationsResponse#exportId
   */
  readonly exportId?: string;

}

/**
 * @schema GetDiscoverySummaryRequest
 */
export interface GetDiscoverySummaryRequest {
}

/**
 * @schema GetDiscoverySummaryResponse
 */
export interface GetDiscoverySummaryResponse {
  /**
   * @schema GetDiscoverySummaryResponse#servers
   */
  readonly servers?: number;

  /**
   * @schema GetDiscoverySummaryResponse#applications
   */
  readonly applications?: number;

  /**
   * @schema GetDiscoverySummaryResponse#serversMappedToApplications
   */
  readonly serversMappedToApplications?: number;

  /**
   * @schema GetDiscoverySummaryResponse#serversMappedtoTags
   */
  readonly serversMappedtoTags?: number;

  /**
   * @schema GetDiscoverySummaryResponse#agentSummary
   */
  readonly agentSummary?: CustomerAgentInfo;

  /**
   * @schema GetDiscoverySummaryResponse#connectorSummary
   */
  readonly connectorSummary?: CustomerConnectorInfo;

}

/**
 * @schema ListConfigurationsRequest
 */
export interface ListConfigurationsRequest {
  /**
   * @schema ListConfigurationsRequest#configurationType
   */
  readonly configurationType: string;

  /**
   * @schema ListConfigurationsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListConfigurationsRequest#orderBy
   */
  readonly orderBy?: OrderByElement[];

}

/**
 * @schema ListConfigurationsResponse
 */
export interface ListConfigurationsResponse {
  /**
   * @schema ListConfigurationsResponse#configurations
   */
  readonly configurations?: { [key: string]: string }[];

  /**
   * @schema ListConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListServerNeighborsRequest
 */
export interface ListServerNeighborsRequest {
  /**
   * @schema ListServerNeighborsRequest#configurationId
   */
  readonly configurationId: string;

  /**
   * @schema ListServerNeighborsRequest#portInformationNeeded
   */
  readonly portInformationNeeded?: boolean;

  /**
   * @schema ListServerNeighborsRequest#neighborConfigurationIds
   */
  readonly neighborConfigurationIds?: string[];

  /**
   * @schema ListServerNeighborsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListServerNeighborsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListServerNeighborsResponse
 */
export interface ListServerNeighborsResponse {
  /**
   * @schema ListServerNeighborsResponse#neighbors
   */
  readonly neighbors: NeighborConnectionDetail[];

  /**
   * @schema ListServerNeighborsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListServerNeighborsResponse#knownDependencyCount
   */
  readonly knownDependencyCount?: number;

}

/**
 * @schema StartContinuousExportRequest
 */
export interface StartContinuousExportRequest {
}

/**
 * @schema StartContinuousExportResponse
 */
export interface StartContinuousExportResponse {
  /**
   * @schema StartContinuousExportResponse#exportId
   */
  readonly exportId?: string;

  /**
   * @schema StartContinuousExportResponse#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema StartContinuousExportResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema StartContinuousExportResponse#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema StartContinuousExportResponse#schemaStorageConfig
   */
  readonly schemaStorageConfig?: { [key: string]: string };

}

/**
 * @schema StartDataCollectionByAgentIdsRequest
 */
export interface StartDataCollectionByAgentIdsRequest {
  /**
   * @schema StartDataCollectionByAgentIdsRequest#agentIds
   */
  readonly agentIds: string[];

}

/**
 * @schema StartDataCollectionByAgentIdsResponse
 */
export interface StartDataCollectionByAgentIdsResponse {
  /**
   * @schema StartDataCollectionByAgentIdsResponse#agentsConfigurationStatus
   */
  readonly agentsConfigurationStatus?: AgentConfigurationStatus[];

}

/**
 * @schema StartExportTaskRequest
 */
export interface StartExportTaskRequest {
  /**
   * @schema StartExportTaskRequest#exportDataFormat
   */
  readonly exportDataFormat?: string[];

  /**
   * @schema StartExportTaskRequest#filters
   */
  readonly filters?: ExportFilter[];

  /**
   * @schema StartExportTaskRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema StartExportTaskRequest#endTime
   */
  readonly endTime?: string;

}

/**
 * @schema StartExportTaskResponse
 */
export interface StartExportTaskResponse {
  /**
   * @schema StartExportTaskResponse#exportId
   */
  readonly exportId?: string;

}

/**
 * @schema StartImportTaskRequest
 */
export interface StartImportTaskRequest {
  /**
   * @schema StartImportTaskRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartImportTaskRequest#name
   */
  readonly name: string;

  /**
   * @schema StartImportTaskRequest#importUrl
   */
  readonly importUrl: string;

}

/**
 * @schema StartImportTaskResponse
 */
export interface StartImportTaskResponse {
  /**
   * @schema StartImportTaskResponse#task
   */
  readonly task?: ImportTask;

}

/**
 * @schema StopContinuousExportRequest
 */
export interface StopContinuousExportRequest {
  /**
   * @schema StopContinuousExportRequest#exportId
   */
  readonly exportId: string;

}

/**
 * @schema StopContinuousExportResponse
 */
export interface StopContinuousExportResponse {
  /**
   * @schema StopContinuousExportResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema StopContinuousExportResponse#stopTime
   */
  readonly stopTime?: string;

}

/**
 * @schema StopDataCollectionByAgentIdsRequest
 */
export interface StopDataCollectionByAgentIdsRequest {
  /**
   * @schema StopDataCollectionByAgentIdsRequest#agentIds
   */
  readonly agentIds: string[];

}

/**
 * @schema StopDataCollectionByAgentIdsResponse
 */
export interface StopDataCollectionByAgentIdsResponse {
  /**
   * @schema StopDataCollectionByAgentIdsResponse#agentsConfigurationStatus
   */
  readonly agentsConfigurationStatus?: AgentConfigurationStatus[];

}

/**
 * @schema UpdateApplicationRequest
 */
export interface UpdateApplicationRequest {
  /**
   * @schema UpdateApplicationRequest#configurationId
   */
  readonly configurationId: string;

  /**
   * @schema UpdateApplicationRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateApplicationRequest#description
   */
  readonly description?: string;

}

/**
 * @schema UpdateApplicationResponse
 */
export interface UpdateApplicationResponse {
}

/**
 * @schema BatchDeleteImportDataError
 */
export interface BatchDeleteImportDataError {
  /**
   * @schema BatchDeleteImportDataError#importTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema BatchDeleteImportDataError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchDeleteImportDataError#errorDescription
   */
  readonly errorDescription?: string;

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
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#name
   */
  readonly name: string;

  /**
   * @schema Filter#values
   */
  readonly values: string[];

  /**
   * @schema Filter#condition
   */
  readonly condition: string;

}

/**
 * @schema AgentInfo
 */
export interface AgentInfo {
  /**
   * @schema AgentInfo#agentId
   */
  readonly agentId?: string;

  /**
   * @schema AgentInfo#hostName
   */
  readonly hostName?: string;

  /**
   * @schema AgentInfo#agentNetworkInfoList
   */
  readonly agentNetworkInfoList?: AgentNetworkInfo[];

  /**
   * @schema AgentInfo#connectorId
   */
  readonly connectorId?: string;

  /**
   * @schema AgentInfo#version
   */
  readonly version?: string;

  /**
   * @schema AgentInfo#health
   */
  readonly health?: string;

  /**
   * @schema AgentInfo#lastHealthPingTime
   */
  readonly lastHealthPingTime?: string;

  /**
   * @schema AgentInfo#collectionStatus
   */
  readonly collectionStatus?: string;

  /**
   * @schema AgentInfo#agentType
   */
  readonly agentType?: string;

  /**
   * @schema AgentInfo#registeredTime
   */
  readonly registeredTime?: string;

}

/**
 * @schema ContinuousExportDescription
 */
export interface ContinuousExportDescription {
  /**
   * @schema ContinuousExportDescription#exportId
   */
  readonly exportId?: string;

  /**
   * @schema ContinuousExportDescription#status
   */
  readonly status?: string;

  /**
   * @schema ContinuousExportDescription#statusDetail
   */
  readonly statusDetail?: string;

  /**
   * @schema ContinuousExportDescription#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ContinuousExportDescription#startTime
   */
  readonly startTime?: string;

  /**
   * @schema ContinuousExportDescription#stopTime
   */
  readonly stopTime?: string;

  /**
   * @schema ContinuousExportDescription#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema ContinuousExportDescription#schemaStorageConfig
   */
  readonly schemaStorageConfig?: { [key: string]: string };

}

/**
 * @schema ExportInfo
 */
export interface ExportInfo {
  /**
   * @schema ExportInfo#exportId
   */
  readonly exportId: string;

  /**
   * @schema ExportInfo#exportStatus
   */
  readonly exportStatus: string;

  /**
   * @schema ExportInfo#statusMessage
   */
  readonly statusMessage: string;

  /**
   * @schema ExportInfo#configurationsDownloadUrl
   */
  readonly configurationsDownloadUrl?: string;

  /**
   * @schema ExportInfo#exportRequestTime
   */
  readonly exportRequestTime: string;

  /**
   * @schema ExportInfo#isTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ExportInfo#requestedStartTime
   */
  readonly requestedStartTime?: string;

  /**
   * @schema ExportInfo#requestedEndTime
   */
  readonly requestedEndTime?: string;

}

/**
 * @schema ExportFilter
 */
export interface ExportFilter {
  /**
   * @schema ExportFilter#name
   */
  readonly name: string;

  /**
   * @schema ExportFilter#values
   */
  readonly values: string[];

  /**
   * @schema ExportFilter#condition
   */
  readonly condition: string;

}

/**
 * @schema ImportTaskFilter
 */
export interface ImportTaskFilter {
  /**
   * @schema ImportTaskFilter#name
   */
  readonly name?: string;

  /**
   * @schema ImportTaskFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema ImportTask
 */
export interface ImportTask {
  /**
   * @schema ImportTask#importTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema ImportTask#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ImportTask#name
   */
  readonly name?: string;

  /**
   * @schema ImportTask#importUrl
   */
  readonly importUrl?: string;

  /**
   * @schema ImportTask#status
   */
  readonly status?: string;

  /**
   * @schema ImportTask#importRequestTime
   */
  readonly importRequestTime?: string;

  /**
   * @schema ImportTask#importCompletionTime
   */
  readonly importCompletionTime?: string;

  /**
   * @schema ImportTask#importDeletedTime
   */
  readonly importDeletedTime?: string;

  /**
   * @schema ImportTask#serverImportSuccess
   */
  readonly serverImportSuccess?: number;

  /**
   * @schema ImportTask#serverImportFailure
   */
  readonly serverImportFailure?: number;

  /**
   * @schema ImportTask#applicationImportSuccess
   */
  readonly applicationImportSuccess?: number;

  /**
   * @schema ImportTask#applicationImportFailure
   */
  readonly applicationImportFailure?: number;

  /**
   * @schema ImportTask#errorsAndFailedEntriesZip
   */
  readonly errorsAndFailedEntriesZip?: string;

}

/**
 * @schema TagFilter
 */
export interface TagFilter {
  /**
   * @schema TagFilter#name
   */
  readonly name: string;

  /**
   * @schema TagFilter#values
   */
  readonly values: string[];

}

/**
 * @schema ConfigurationTag
 */
export interface ConfigurationTag {
  /**
   * @schema ConfigurationTag#configurationType
   */
  readonly configurationType?: string;

  /**
   * @schema ConfigurationTag#configurationId
   */
  readonly configurationId?: string;

  /**
   * @schema ConfigurationTag#key
   */
  readonly key?: string;

  /**
   * @schema ConfigurationTag#value
   */
  readonly value?: string;

  /**
   * @schema ConfigurationTag#timeOfCreation
   */
  readonly timeOfCreation?: string;

}

/**
 * @schema CustomerAgentInfo
 */
export interface CustomerAgentInfo {
  /**
   * @schema CustomerAgentInfo#activeAgents
   */
  readonly activeAgents: number;

  /**
   * @schema CustomerAgentInfo#healthyAgents
   */
  readonly healthyAgents: number;

  /**
   * @schema CustomerAgentInfo#blackListedAgents
   */
  readonly blackListedAgents: number;

  /**
   * @schema CustomerAgentInfo#shutdownAgents
   */
  readonly shutdownAgents: number;

  /**
   * @schema CustomerAgentInfo#unhealthyAgents
   */
  readonly unhealthyAgents: number;

  /**
   * @schema CustomerAgentInfo#totalAgents
   */
  readonly totalAgents: number;

  /**
   * @schema CustomerAgentInfo#unknownAgents
   */
  readonly unknownAgents: number;

}

/**
 * @schema CustomerConnectorInfo
 */
export interface CustomerConnectorInfo {
  /**
   * @schema CustomerConnectorInfo#activeConnectors
   */
  readonly activeConnectors: number;

  /**
   * @schema CustomerConnectorInfo#healthyConnectors
   */
  readonly healthyConnectors: number;

  /**
   * @schema CustomerConnectorInfo#blackListedConnectors
   */
  readonly blackListedConnectors: number;

  /**
   * @schema CustomerConnectorInfo#shutdownConnectors
   */
  readonly shutdownConnectors: number;

  /**
   * @schema CustomerConnectorInfo#unhealthyConnectors
   */
  readonly unhealthyConnectors: number;

  /**
   * @schema CustomerConnectorInfo#totalConnectors
   */
  readonly totalConnectors: number;

  /**
   * @schema CustomerConnectorInfo#unknownConnectors
   */
  readonly unknownConnectors: number;

}

/**
 * @schema OrderByElement
 */
export interface OrderByElement {
  /**
   * @schema OrderByElement#fieldName
   */
  readonly fieldName: string;

  /**
   * @schema OrderByElement#sortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema NeighborConnectionDetail
 */
export interface NeighborConnectionDetail {
  /**
   * @schema NeighborConnectionDetail#sourceServerId
   */
  readonly sourceServerId: string;

  /**
   * @schema NeighborConnectionDetail#destinationServerId
   */
  readonly destinationServerId: string;

  /**
   * @schema NeighborConnectionDetail#destinationPort
   */
  readonly destinationPort?: number;

  /**
   * @schema NeighborConnectionDetail#transportProtocol
   */
  readonly transportProtocol?: string;

  /**
   * @schema NeighborConnectionDetail#connectionsCount
   */
  readonly connectionsCount: number;

}

/**
 * @schema AgentConfigurationStatus
 */
export interface AgentConfigurationStatus {
  /**
   * @schema AgentConfigurationStatus#agentId
   */
  readonly agentId?: string;

  /**
   * @schema AgentConfigurationStatus#operationSucceeded
   */
  readonly operationSucceeded?: boolean;

  /**
   * @schema AgentConfigurationStatus#description
   */
  readonly description?: string;

}

/**
 * @schema AgentNetworkInfo
 */
export interface AgentNetworkInfo {
  /**
   * @schema AgentNetworkInfo#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema AgentNetworkInfo#macAddress
   */
  readonly macAddress?: string;

}
