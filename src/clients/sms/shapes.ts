/**
 * @schema CreateAppRequest
 */
export interface CreateAppRequest {
  /**
   * @schema CreateAppRequest#name
   */
  readonly name?: string;

  /**
   * @schema CreateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateAppRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema CreateAppRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateAppRequest#serverGroups
   */
  readonly serverGroups?: ServerGroup[];

  /**
   * @schema CreateAppRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateAppResponse
 */
export interface CreateAppResponse {
  /**
   * @schema CreateAppResponse#appSummary
   */
  readonly appSummary?: AppSummary;

  /**
   * @schema CreateAppResponse#serverGroups
   */
  readonly serverGroups?: ServerGroup[];

  /**
   * @schema CreateAppResponse#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateReplicationJobRequest
 */
export interface CreateReplicationJobRequest {
  /**
   * @schema CreateReplicationJobRequest#serverId
   */
  readonly serverId: string;

  /**
   * @schema CreateReplicationJobRequest#seedReplicationTime
   */
  readonly seedReplicationTime: string;

  /**
   * @schema CreateReplicationJobRequest#frequency
   */
  readonly frequency?: number;

  /**
   * @schema CreateReplicationJobRequest#runOnce
   */
  readonly runOnce?: boolean;

  /**
   * @schema CreateReplicationJobRequest#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema CreateReplicationJobRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema CreateReplicationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateReplicationJobRequest#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema CreateReplicationJobRequest#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema CreateReplicationJobRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema CreateReplicationJobResponse
 */
export interface CreateReplicationJobResponse {
  /**
   * @schema CreateReplicationJobResponse#replicationJobId
   */
  readonly replicationJobId?: string;

}

/**
 * @schema DeleteAppRequest
 */
export interface DeleteAppRequest {
  /**
   * @schema DeleteAppRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema DeleteAppRequest#forceStopAppReplication
   */
  readonly forceStopAppReplication?: boolean;

  /**
   * @schema DeleteAppRequest#forceTerminateApp
   */
  readonly forceTerminateApp?: boolean;

}

/**
 * @schema DeleteAppResponse
 */
export interface DeleteAppResponse {
}

/**
 * @schema DeleteAppLaunchConfigurationRequest
 */
export interface DeleteAppLaunchConfigurationRequest {
  /**
   * @schema DeleteAppLaunchConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema DeleteAppLaunchConfigurationResponse
 */
export interface DeleteAppLaunchConfigurationResponse {
}

/**
 * @schema DeleteAppReplicationConfigurationRequest
 */
export interface DeleteAppReplicationConfigurationRequest {
  /**
   * @schema DeleteAppReplicationConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema DeleteAppReplicationConfigurationResponse
 */
export interface DeleteAppReplicationConfigurationResponse {
}

/**
 * @schema DeleteAppValidationConfigurationRequest
 */
export interface DeleteAppValidationConfigurationRequest {
  /**
   * @schema DeleteAppValidationConfigurationRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema DeleteAppValidationConfigurationResponse
 */
export interface DeleteAppValidationConfigurationResponse {
}

/**
 * @schema DeleteReplicationJobRequest
 */
export interface DeleteReplicationJobRequest {
  /**
   * @schema DeleteReplicationJobRequest#replicationJobId
   */
  readonly replicationJobId: string;

}

/**
 * @schema DeleteReplicationJobResponse
 */
export interface DeleteReplicationJobResponse {
}

/**
 * @schema DeleteServerCatalogRequest
 */
export interface DeleteServerCatalogRequest {
}

/**
 * @schema DeleteServerCatalogResponse
 */
export interface DeleteServerCatalogResponse {
}

/**
 * @schema DisassociateConnectorRequest
 */
export interface DisassociateConnectorRequest {
  /**
   * @schema DisassociateConnectorRequest#connectorId
   */
  readonly connectorId: string;

}

/**
 * @schema DisassociateConnectorResponse
 */
export interface DisassociateConnectorResponse {
}

/**
 * @schema GenerateChangeSetRequest
 */
export interface GenerateChangeSetRequest {
  /**
   * @schema GenerateChangeSetRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema GenerateChangeSetRequest#changesetFormat
   */
  readonly changesetFormat?: string;

}

/**
 * @schema GenerateChangeSetResponse
 */
export interface GenerateChangeSetResponse {
  /**
   * @schema GenerateChangeSetResponse#s3Location
   */
  readonly s3Location?: S3Location;

}

/**
 * @schema GenerateTemplateRequest
 */
export interface GenerateTemplateRequest {
  /**
   * @schema GenerateTemplateRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema GenerateTemplateRequest#templateFormat
   */
  readonly templateFormat?: string;

}

/**
 * @schema GenerateTemplateResponse
 */
export interface GenerateTemplateResponse {
  /**
   * @schema GenerateTemplateResponse#s3Location
   */
  readonly s3Location?: S3Location;

}

/**
 * @schema GetAppRequest
 */
export interface GetAppRequest {
  /**
   * @schema GetAppRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema GetAppResponse
 */
export interface GetAppResponse {
  /**
   * @schema GetAppResponse#appSummary
   */
  readonly appSummary?: AppSummary;

  /**
   * @schema GetAppResponse#serverGroups
   */
  readonly serverGroups?: ServerGroup[];

  /**
   * @schema GetAppResponse#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GetAppLaunchConfigurationRequest
 */
export interface GetAppLaunchConfigurationRequest {
  /**
   * @schema GetAppLaunchConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema GetAppLaunchConfigurationResponse
 */
export interface GetAppLaunchConfigurationResponse {
  /**
   * @schema GetAppLaunchConfigurationResponse#appId
   */
  readonly appId?: string;

  /**
   * @schema GetAppLaunchConfigurationResponse#roleName
   */
  readonly roleName?: string;

  /**
   * @schema GetAppLaunchConfigurationResponse#autoLaunch
   */
  readonly autoLaunch?: boolean;

  /**
   * @schema GetAppLaunchConfigurationResponse#serverGroupLaunchConfigurations
   */
  readonly serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];

}

/**
 * @schema GetAppReplicationConfigurationRequest
 */
export interface GetAppReplicationConfigurationRequest {
  /**
   * @schema GetAppReplicationConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema GetAppReplicationConfigurationResponse
 */
export interface GetAppReplicationConfigurationResponse {
  /**
   * @schema GetAppReplicationConfigurationResponse#serverGroupReplicationConfigurations
   */
  readonly serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];

}

/**
 * @schema GetAppValidationConfigurationRequest
 */
export interface GetAppValidationConfigurationRequest {
  /**
   * @schema GetAppValidationConfigurationRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema GetAppValidationConfigurationResponse
 */
export interface GetAppValidationConfigurationResponse {
  /**
   * @schema GetAppValidationConfigurationResponse#appValidationConfigurations
   */
  readonly appValidationConfigurations?: AppValidationConfiguration[];

  /**
   * @schema GetAppValidationConfigurationResponse#serverGroupValidationConfigurations
   */
  readonly serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];

}

/**
 * @schema GetAppValidationOutputRequest
 */
export interface GetAppValidationOutputRequest {
  /**
   * @schema GetAppValidationOutputRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema GetAppValidationOutputResponse
 */
export interface GetAppValidationOutputResponse {
  /**
   * @schema GetAppValidationOutputResponse#validationOutputList
   */
  readonly validationOutputList?: ValidationOutput[];

}

/**
 * @schema GetConnectorsRequest
 */
export interface GetConnectorsRequest {
  /**
   * @schema GetConnectorsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetConnectorsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetConnectorsResponse
 */
export interface GetConnectorsResponse {
  /**
   * @schema GetConnectorsResponse#connectorList
   */
  readonly connectorList?: Connector[];

  /**
   * @schema GetConnectorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetReplicationJobsRequest
 */
export interface GetReplicationJobsRequest {
  /**
   * @schema GetReplicationJobsRequest#replicationJobId
   */
  readonly replicationJobId?: string;

  /**
   * @schema GetReplicationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetReplicationJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetReplicationJobsResponse
 */
export interface GetReplicationJobsResponse {
  /**
   * @schema GetReplicationJobsResponse#replicationJobList
   */
  readonly replicationJobList?: ReplicationJob[];

  /**
   * @schema GetReplicationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetReplicationRunsRequest
 */
export interface GetReplicationRunsRequest {
  /**
   * @schema GetReplicationRunsRequest#replicationJobId
   */
  readonly replicationJobId: string;

  /**
   * @schema GetReplicationRunsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetReplicationRunsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetReplicationRunsResponse
 */
export interface GetReplicationRunsResponse {
  /**
   * @schema GetReplicationRunsResponse#replicationJob
   */
  readonly replicationJob?: ReplicationJob;

  /**
   * @schema GetReplicationRunsResponse#replicationRunList
   */
  readonly replicationRunList?: ReplicationRun[];

  /**
   * @schema GetReplicationRunsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetServersRequest
 */
export interface GetServersRequest {
  /**
   * @schema GetServersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetServersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetServersRequest#vmServerAddressList
   */
  readonly vmServerAddressList?: VmServerAddress[];

}

/**
 * @schema GetServersResponse
 */
export interface GetServersResponse {
  /**
   * @schema GetServersResponse#lastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GetServersResponse#serverCatalogStatus
   */
  readonly serverCatalogStatus?: string;

  /**
   * @schema GetServersResponse#serverList
   */
  readonly serverList?: Server[];

  /**
   * @schema GetServersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ImportAppCatalogRequest
 */
export interface ImportAppCatalogRequest {
  /**
   * @schema ImportAppCatalogRequest#roleName
   */
  readonly roleName?: string;

}

/**
 * @schema ImportAppCatalogResponse
 */
export interface ImportAppCatalogResponse {
}

/**
 * @schema ImportServerCatalogRequest
 */
export interface ImportServerCatalogRequest {
}

/**
 * @schema ImportServerCatalogResponse
 */
export interface ImportServerCatalogResponse {
}

/**
 * @schema LaunchAppRequest
 */
export interface LaunchAppRequest {
  /**
   * @schema LaunchAppRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema LaunchAppResponse
 */
export interface LaunchAppResponse {
}

/**
 * @schema ListAppsRequest
 */
export interface ListAppsRequest {
  /**
   * @schema ListAppsRequest#appIds
   */
  readonly appIds?: string[];

  /**
   * @schema ListAppsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAppsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAppsResponse
 */
export interface ListAppsResponse {
  /**
   * @schema ListAppsResponse#apps
   */
  readonly apps?: AppSummary[];

  /**
   * @schema ListAppsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NotifyAppValidationOutputRequest
 */
export interface NotifyAppValidationOutputRequest {
  /**
   * @schema NotifyAppValidationOutputRequest#appId
   */
  readonly appId: string;

  /**
   * @schema NotifyAppValidationOutputRequest#notificationContext
   */
  readonly notificationContext?: NotificationContext;

}

/**
 * @schema NotifyAppValidationOutputResponse
 */
export interface NotifyAppValidationOutputResponse {
}

/**
 * @schema PutAppLaunchConfigurationRequest
 */
export interface PutAppLaunchConfigurationRequest {
  /**
   * @schema PutAppLaunchConfigurationRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema PutAppLaunchConfigurationRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema PutAppLaunchConfigurationRequest#autoLaunch
   */
  readonly autoLaunch?: boolean;

  /**
   * @schema PutAppLaunchConfigurationRequest#serverGroupLaunchConfigurations
   */
  readonly serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];

}

/**
 * @schema PutAppLaunchConfigurationResponse
 */
export interface PutAppLaunchConfigurationResponse {
}

/**
 * @schema PutAppReplicationConfigurationRequest
 */
export interface PutAppReplicationConfigurationRequest {
  /**
   * @schema PutAppReplicationConfigurationRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema PutAppReplicationConfigurationRequest#serverGroupReplicationConfigurations
   */
  readonly serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];

}

/**
 * @schema PutAppReplicationConfigurationResponse
 */
export interface PutAppReplicationConfigurationResponse {
}

/**
 * @schema PutAppValidationConfigurationRequest
 */
export interface PutAppValidationConfigurationRequest {
  /**
   * @schema PutAppValidationConfigurationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema PutAppValidationConfigurationRequest#appValidationConfigurations
   */
  readonly appValidationConfigurations?: AppValidationConfiguration[];

  /**
   * @schema PutAppValidationConfigurationRequest#serverGroupValidationConfigurations
   */
  readonly serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];

}

/**
 * @schema PutAppValidationConfigurationResponse
 */
export interface PutAppValidationConfigurationResponse {
}

/**
 * @schema StartAppReplicationRequest
 */
export interface StartAppReplicationRequest {
  /**
   * @schema StartAppReplicationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema StartAppReplicationResponse
 */
export interface StartAppReplicationResponse {
}

/**
 * @schema StartOnDemandAppReplicationRequest
 */
export interface StartOnDemandAppReplicationRequest {
  /**
   * @schema StartOnDemandAppReplicationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema StartOnDemandAppReplicationRequest#description
   */
  readonly description?: string;

}

/**
 * @schema StartOnDemandAppReplicationResponse
 */
export interface StartOnDemandAppReplicationResponse {
}

/**
 * @schema StartOnDemandReplicationRunRequest
 */
export interface StartOnDemandReplicationRunRequest {
  /**
   * @schema StartOnDemandReplicationRunRequest#replicationJobId
   */
  readonly replicationJobId: string;

  /**
   * @schema StartOnDemandReplicationRunRequest#description
   */
  readonly description?: string;

}

/**
 * @schema StartOnDemandReplicationRunResponse
 */
export interface StartOnDemandReplicationRunResponse {
  /**
   * @schema StartOnDemandReplicationRunResponse#replicationRunId
   */
  readonly replicationRunId?: string;

}

/**
 * @schema StopAppReplicationRequest
 */
export interface StopAppReplicationRequest {
  /**
   * @schema StopAppReplicationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema StopAppReplicationResponse
 */
export interface StopAppReplicationResponse {
}

/**
 * @schema TerminateAppRequest
 */
export interface TerminateAppRequest {
  /**
   * @schema TerminateAppRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema TerminateAppResponse
 */
export interface TerminateAppResponse {
}

/**
 * @schema UpdateAppRequest
 */
export interface UpdateAppRequest {
  /**
   * @schema UpdateAppRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema UpdateAppRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateAppRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema UpdateAppRequest#serverGroups
   */
  readonly serverGroups?: ServerGroup[];

  /**
   * @schema UpdateAppRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UpdateAppResponse
 */
export interface UpdateAppResponse {
  /**
   * @schema UpdateAppResponse#appSummary
   */
  readonly appSummary?: AppSummary;

  /**
   * @schema UpdateAppResponse#serverGroups
   */
  readonly serverGroups?: ServerGroup[];

  /**
   * @schema UpdateAppResponse#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UpdateReplicationJobRequest
 */
export interface UpdateReplicationJobRequest {
  /**
   * @schema UpdateReplicationJobRequest#replicationJobId
   */
  readonly replicationJobId: string;

  /**
   * @schema UpdateReplicationJobRequest#frequency
   */
  readonly frequency?: number;

  /**
   * @schema UpdateReplicationJobRequest#nextReplicationRunStartTime
   */
  readonly nextReplicationRunStartTime?: string;

  /**
   * @schema UpdateReplicationJobRequest#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema UpdateReplicationJobRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema UpdateReplicationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateReplicationJobRequest#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema UpdateReplicationJobRequest#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema UpdateReplicationJobRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema UpdateReplicationJobResponse
 */
export interface UpdateReplicationJobResponse {
}

/**
 * @schema ServerGroup
 */
export interface ServerGroup {
  /**
   * @schema ServerGroup#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema ServerGroup#name
   */
  readonly name?: string;

  /**
   * @schema ServerGroup#serverList
   */
  readonly serverList?: Server[];

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key?: string;

  /**
   * @schema Tag#value
   */
  readonly value?: string;

}

/**
 * @schema AppSummary
 */
export interface AppSummary {
  /**
   * @schema AppSummary#appId
   */
  readonly appId?: string;

  /**
   * @schema AppSummary#importedAppId
   */
  readonly importedAppId?: string;

  /**
   * @schema AppSummary#name
   */
  readonly name?: string;

  /**
   * @schema AppSummary#description
   */
  readonly description?: string;

  /**
   * @schema AppSummary#status
   */
  readonly status?: string;

  /**
   * @schema AppSummary#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema AppSummary#replicationConfigurationStatus
   */
  readonly replicationConfigurationStatus?: string;

  /**
   * @schema AppSummary#replicationStatus
   */
  readonly replicationStatus?: string;

  /**
   * @schema AppSummary#replicationStatusMessage
   */
  readonly replicationStatusMessage?: string;

  /**
   * @schema AppSummary#latestReplicationTime
   */
  readonly latestReplicationTime?: string;

  /**
   * @schema AppSummary#launchConfigurationStatus
   */
  readonly launchConfigurationStatus?: string;

  /**
   * @schema AppSummary#launchStatus
   */
  readonly launchStatus?: string;

  /**
   * @schema AppSummary#launchStatusMessage
   */
  readonly launchStatusMessage?: string;

  /**
   * @schema AppSummary#launchDetails
   */
  readonly launchDetails?: LaunchDetails;

  /**
   * @schema AppSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema AppSummary#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema AppSummary#roleName
   */
  readonly roleName?: string;

  /**
   * @schema AppSummary#totalServerGroups
   */
  readonly totalServerGroups?: number;

  /**
   * @schema AppSummary#totalServers
   */
  readonly totalServers?: number;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3Location#key
   */
  readonly key?: string;

}

/**
 * @schema ServerGroupLaunchConfiguration
 */
export interface ServerGroupLaunchConfiguration {
  /**
   * @schema ServerGroupLaunchConfiguration#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema ServerGroupLaunchConfiguration#launchOrder
   */
  readonly launchOrder?: number;

  /**
   * @schema ServerGroupLaunchConfiguration#serverLaunchConfigurations
   */
  readonly serverLaunchConfigurations?: ServerLaunchConfiguration[];

}

/**
 * @schema ServerGroupReplicationConfiguration
 */
export interface ServerGroupReplicationConfiguration {
  /**
   * @schema ServerGroupReplicationConfiguration#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema ServerGroupReplicationConfiguration#serverReplicationConfigurations
   */
  readonly serverReplicationConfigurations?: ServerReplicationConfiguration[];

}

/**
 * @schema AppValidationConfiguration
 */
export interface AppValidationConfiguration {
  /**
   * @schema AppValidationConfiguration#validationId
   */
  readonly validationId?: string;

  /**
   * @schema AppValidationConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema AppValidationConfiguration#appValidationStrategy
   */
  readonly appValidationStrategy?: string;

  /**
   * @schema AppValidationConfiguration#ssmValidationParameters
   */
  readonly ssmValidationParameters?: SsmValidationParameters;

}

/**
 * @schema ServerGroupValidationConfiguration
 */
export interface ServerGroupValidationConfiguration {
  /**
   * @schema ServerGroupValidationConfiguration#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema ServerGroupValidationConfiguration#serverValidationConfigurations
   */
  readonly serverValidationConfigurations?: ServerValidationConfiguration[];

}

/**
 * @schema ValidationOutput
 */
export interface ValidationOutput {
  /**
   * @schema ValidationOutput#validationId
   */
  readonly validationId?: string;

  /**
   * @schema ValidationOutput#name
   */
  readonly name?: string;

  /**
   * @schema ValidationOutput#status
   */
  readonly status?: string;

  /**
   * @schema ValidationOutput#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ValidationOutput#latestValidationTime
   */
  readonly latestValidationTime?: string;

  /**
   * @schema ValidationOutput#appValidationOutput
   */
  readonly appValidationOutput?: AppValidationOutput;

  /**
   * @schema ValidationOutput#serverValidationOutput
   */
  readonly serverValidationOutput?: ServerValidationOutput;

}

/**
 * @schema Connector
 */
export interface Connector {
  /**
   * @schema Connector#connectorId
   */
  readonly connectorId?: string;

  /**
   * @schema Connector#version
   */
  readonly version?: string;

  /**
   * @schema Connector#status
   */
  readonly status?: string;

  /**
   * @schema Connector#capabilityList
   */
  readonly capabilityList?: string[];

  /**
   * @schema Connector#vmManagerName
   */
  readonly vmManagerName?: string;

  /**
   * @schema Connector#vmManagerType
   */
  readonly vmManagerType?: string;

  /**
   * @schema Connector#vmManagerId
   */
  readonly vmManagerId?: string;

  /**
   * @schema Connector#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema Connector#macAddress
   */
  readonly macAddress?: string;

  /**
   * @schema Connector#associatedOn
   */
  readonly associatedOn?: string;

}

/**
 * @schema ReplicationJob
 */
export interface ReplicationJob {
  /**
   * @schema ReplicationJob#replicationJobId
   */
  readonly replicationJobId?: string;

  /**
   * @schema ReplicationJob#serverId
   */
  readonly serverId?: string;

  /**
   * @schema ReplicationJob#serverType
   */
  readonly serverType?: string;

  /**
   * @schema ReplicationJob#vmServer
   */
  readonly vmServer?: VmServer;

  /**
   * @schema ReplicationJob#seedReplicationTime
   */
  readonly seedReplicationTime?: string;

  /**
   * @schema ReplicationJob#frequency
   */
  readonly frequency?: number;

  /**
   * @schema ReplicationJob#runOnce
   */
  readonly runOnce?: boolean;

  /**
   * @schema ReplicationJob#nextReplicationRunStartTime
   */
  readonly nextReplicationRunStartTime?: string;

  /**
   * @schema ReplicationJob#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ReplicationJob#roleName
   */
  readonly roleName?: string;

  /**
   * @schema ReplicationJob#latestAmiId
   */
  readonly latestAmiId?: string;

  /**
   * @schema ReplicationJob#state
   */
  readonly state?: string;

  /**
   * @schema ReplicationJob#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ReplicationJob#description
   */
  readonly description?: string;

  /**
   * @schema ReplicationJob#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema ReplicationJob#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ReplicationJob#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ReplicationJob#replicationRunList
   */
  readonly replicationRunList?: ReplicationRun[];

}

/**
 * @schema ReplicationRun
 */
export interface ReplicationRun {
  /**
   * @schema ReplicationRun#replicationRunId
   */
  readonly replicationRunId?: string;

  /**
   * @schema ReplicationRun#state
   */
  readonly state?: string;

  /**
   * @schema ReplicationRun#type
   */
  readonly type?: string;

  /**
   * @schema ReplicationRun#stageDetails
   */
  readonly stageDetails?: ReplicationRunStageDetails;

  /**
   * @schema ReplicationRun#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ReplicationRun#amiId
   */
  readonly amiId?: string;

  /**
   * @schema ReplicationRun#scheduledStartTime
   */
  readonly scheduledStartTime?: string;

  /**
   * @schema ReplicationRun#completedTime
   */
  readonly completedTime?: string;

  /**
   * @schema ReplicationRun#description
   */
  readonly description?: string;

  /**
   * @schema ReplicationRun#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ReplicationRun#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema VmServerAddress
 */
export interface VmServerAddress {
  /**
   * @schema VmServerAddress#vmManagerId
   */
  readonly vmManagerId?: string;

  /**
   * @schema VmServerAddress#vmId
   */
  readonly vmId?: string;

}

/**
 * @schema Server
 */
export interface Server {
  /**
   * @schema Server#serverId
   */
  readonly serverId?: string;

  /**
   * @schema Server#serverType
   */
  readonly serverType?: string;

  /**
   * @schema Server#vmServer
   */
  readonly vmServer?: VmServer;

  /**
   * @schema Server#replicationJobId
   */
  readonly replicationJobId?: string;

  /**
   * @schema Server#replicationJobTerminated
   */
  readonly replicationJobTerminated?: boolean;

}

/**
 * @schema NotificationContext
 */
export interface NotificationContext {
  /**
   * @schema NotificationContext#validationId
   */
  readonly validationId?: string;

  /**
   * @schema NotificationContext#status
   */
  readonly status?: string;

  /**
   * @schema NotificationContext#statusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema LaunchDetails
 */
export interface LaunchDetails {
  /**
   * @schema LaunchDetails#latestLaunchTime
   */
  readonly latestLaunchTime?: string;

  /**
   * @schema LaunchDetails#stackName
   */
  readonly stackName?: string;

  /**
   * @schema LaunchDetails#stackId
   */
  readonly stackId?: string;

}

/**
 * @schema ServerLaunchConfiguration
 */
export interface ServerLaunchConfiguration {
  /**
   * @schema ServerLaunchConfiguration#server
   */
  readonly server?: Server;

  /**
   * @schema ServerLaunchConfiguration#logicalId
   */
  readonly logicalId?: string;

  /**
   * @schema ServerLaunchConfiguration#vpc
   */
  readonly vpc?: string;

  /**
   * @schema ServerLaunchConfiguration#subnet
   */
  readonly subnet?: string;

  /**
   * @schema ServerLaunchConfiguration#securityGroup
   */
  readonly securityGroup?: string;

  /**
   * @schema ServerLaunchConfiguration#ec2KeyName
   */
  readonly ec2KeyName?: string;

  /**
   * @schema ServerLaunchConfiguration#userData
   */
  readonly userData?: UserData;

  /**
   * @schema ServerLaunchConfiguration#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ServerLaunchConfiguration#associatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema ServerLaunchConfiguration#iamInstanceProfileName
   */
  readonly iamInstanceProfileName?: string;

  /**
   * @schema ServerLaunchConfiguration#configureScript
   */
  readonly configureScript?: S3Location;

  /**
   * @schema ServerLaunchConfiguration#configureScriptType
   */
  readonly configureScriptType?: string;

}

/**
 * @schema ServerReplicationConfiguration
 */
export interface ServerReplicationConfiguration {
  /**
   * @schema ServerReplicationConfiguration#server
   */
  readonly server?: Server;

  /**
   * @schema ServerReplicationConfiguration#serverReplicationParameters
   */
  readonly serverReplicationParameters?: ServerReplicationParameters;

}

/**
 * @schema SsmValidationParameters
 */
export interface SsmValidationParameters {
  /**
   * @schema SsmValidationParameters#source
   */
  readonly source?: Source;

  /**
   * @schema SsmValidationParameters#instanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmValidationParameters#scriptType
   */
  readonly scriptType?: string;

  /**
   * @schema SsmValidationParameters#command
   */
  readonly command?: string;

  /**
   * @schema SsmValidationParameters#executionTimeoutSeconds
   */
  readonly executionTimeoutSeconds?: number;

  /**
   * @schema SsmValidationParameters#outputS3BucketName
   */
  readonly outputS3BucketName?: string;

}

/**
 * @schema ServerValidationConfiguration
 */
export interface ServerValidationConfiguration {
  /**
   * @schema ServerValidationConfiguration#server
   */
  readonly server?: Server;

  /**
   * @schema ServerValidationConfiguration#validationId
   */
  readonly validationId?: string;

  /**
   * @schema ServerValidationConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema ServerValidationConfiguration#serverValidationStrategy
   */
  readonly serverValidationStrategy?: string;

  /**
   * @schema ServerValidationConfiguration#userDataValidationParameters
   */
  readonly userDataValidationParameters?: UserDataValidationParameters;

}

/**
 * @schema AppValidationOutput
 */
export interface AppValidationOutput {
  /**
   * @schema AppValidationOutput#ssmOutput
   */
  readonly ssmOutput?: SsmOutput;

}

/**
 * @schema ServerValidationOutput
 */
export interface ServerValidationOutput {
  /**
   * @schema ServerValidationOutput#server
   */
  readonly server?: Server;

}

/**
 * @schema VmServer
 */
export interface VmServer {
  /**
   * @schema VmServer#vmServerAddress
   */
  readonly vmServerAddress?: VmServerAddress;

  /**
   * @schema VmServer#vmName
   */
  readonly vmName?: string;

  /**
   * @schema VmServer#vmManagerName
   */
  readonly vmManagerName?: string;

  /**
   * @schema VmServer#vmManagerType
   */
  readonly vmManagerType?: string;

  /**
   * @schema VmServer#vmPath
   */
  readonly vmPath?: string;

}

/**
 * @schema ReplicationRunStageDetails
 */
export interface ReplicationRunStageDetails {
  /**
   * @schema ReplicationRunStageDetails#stage
   */
  readonly stage?: string;

  /**
   * @schema ReplicationRunStageDetails#stageProgress
   */
  readonly stageProgress?: string;

}

/**
 * @schema UserData
 */
export interface UserData {
  /**
   * @schema UserData#s3Location
   */
  readonly s3Location?: S3Location;

}

/**
 * @schema ServerReplicationParameters
 */
export interface ServerReplicationParameters {
  /**
   * @schema ServerReplicationParameters#seedTime
   */
  readonly seedTime?: string;

  /**
   * @schema ServerReplicationParameters#frequency
   */
  readonly frequency?: number;

  /**
   * @schema ServerReplicationParameters#runOnce
   */
  readonly runOnce?: boolean;

  /**
   * @schema ServerReplicationParameters#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ServerReplicationParameters#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema ServerReplicationParameters#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ServerReplicationParameters#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema Source
 */
export interface Source {
  /**
   * @schema Source#s3Location
   */
  readonly s3Location?: S3Location;

}

/**
 * @schema UserDataValidationParameters
 */
export interface UserDataValidationParameters {
  /**
   * @schema UserDataValidationParameters#source
   */
  readonly source?: Source;

  /**
   * @schema UserDataValidationParameters#scriptType
   */
  readonly scriptType?: string;

}

/**
 * @schema SsmOutput
 */
export interface SsmOutput {
  /**
   * @schema SsmOutput#s3Location
   */
  readonly s3Location?: S3Location;

}
