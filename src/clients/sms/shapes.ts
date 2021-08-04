/**
 * @schema SmsCreateAppRequest
 */
export interface SmsCreateAppRequest {
  /**
   * @schema SmsCreateAppRequest#name
   */
  readonly name?: string;

  /**
   * @schema SmsCreateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema SmsCreateAppRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsCreateAppRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SmsCreateAppRequest#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsCreateAppRequest#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * @schema SmsCreateAppResponse
 */
export interface SmsCreateAppResponse {
  /**
   * @schema SmsCreateAppResponse#appSummary
   */
  readonly appSummary?: SmsAppSummary;

  /**
   * @schema SmsCreateAppResponse#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsCreateAppResponse#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * @schema SmsCreateReplicationJobRequest
 */
export interface SmsCreateReplicationJobRequest {
  /**
   * @schema SmsCreateReplicationJobRequest#serverId
   */
  readonly serverId: string;

  /**
   * @schema SmsCreateReplicationJobRequest#seedReplicationTime
   */
  readonly seedReplicationTime: string;

  /**
   * @schema SmsCreateReplicationJobRequest#frequency
   */
  readonly frequency?: number;

  /**
   * @schema SmsCreateReplicationJobRequest#runOnce
   */
  readonly runOnce?: boolean;

  /**
   * @schema SmsCreateReplicationJobRequest#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema SmsCreateReplicationJobRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsCreateReplicationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema SmsCreateReplicationJobRequest#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema SmsCreateReplicationJobRequest#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsCreateReplicationJobRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SmsCreateReplicationJobResponse
 */
export interface SmsCreateReplicationJobResponse {
  /**
   * @schema SmsCreateReplicationJobResponse#replicationJobId
   */
  readonly replicationJobId?: string;

}

/**
 * @schema SmsDeleteAppRequest
 */
export interface SmsDeleteAppRequest {
  /**
   * @schema SmsDeleteAppRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsDeleteAppRequest#forceStopAppReplication
   */
  readonly forceStopAppReplication?: boolean;

  /**
   * @schema SmsDeleteAppRequest#forceTerminateApp
   */
  readonly forceTerminateApp?: boolean;

}

/**
 * @schema SmsDeleteAppResponse
 */
export interface SmsDeleteAppResponse {
}

/**
 * @schema SmsDeleteAppLaunchConfigurationRequest
 */
export interface SmsDeleteAppLaunchConfigurationRequest {
  /**
   * @schema SmsDeleteAppLaunchConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema SmsDeleteAppLaunchConfigurationResponse
 */
export interface SmsDeleteAppLaunchConfigurationResponse {
}

/**
 * @schema SmsDeleteAppReplicationConfigurationRequest
 */
export interface SmsDeleteAppReplicationConfigurationRequest {
  /**
   * @schema SmsDeleteAppReplicationConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema SmsDeleteAppReplicationConfigurationResponse
 */
export interface SmsDeleteAppReplicationConfigurationResponse {
}

/**
 * @schema SmsDeleteAppValidationConfigurationRequest
 */
export interface SmsDeleteAppValidationConfigurationRequest {
  /**
   * @schema SmsDeleteAppValidationConfigurationRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema SmsDeleteAppValidationConfigurationResponse
 */
export interface SmsDeleteAppValidationConfigurationResponse {
}

/**
 * @schema SmsDeleteReplicationJobRequest
 */
export interface SmsDeleteReplicationJobRequest {
  /**
   * @schema SmsDeleteReplicationJobRequest#replicationJobId
   */
  readonly replicationJobId: string;

}

/**
 * @schema SmsDeleteReplicationJobResponse
 */
export interface SmsDeleteReplicationJobResponse {
}

/**
 * @schema SmsDeleteServerCatalogRequest
 */
export interface SmsDeleteServerCatalogRequest {
}

/**
 * @schema SmsDeleteServerCatalogResponse
 */
export interface SmsDeleteServerCatalogResponse {
}

/**
 * @schema SmsDisassociateConnectorRequest
 */
export interface SmsDisassociateConnectorRequest {
  /**
   * @schema SmsDisassociateConnectorRequest#connectorId
   */
  readonly connectorId: string;

}

/**
 * @schema SmsDisassociateConnectorResponse
 */
export interface SmsDisassociateConnectorResponse {
}

/**
 * @schema SmsGenerateChangeSetRequest
 */
export interface SmsGenerateChangeSetRequest {
  /**
   * @schema SmsGenerateChangeSetRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsGenerateChangeSetRequest#changesetFormat
   */
  readonly changesetFormat?: string;

}

/**
 * @schema SmsGenerateChangeSetResponse
 */
export interface SmsGenerateChangeSetResponse {
  /**
   * @schema SmsGenerateChangeSetResponse#s3Location
   */
  readonly s3Location?: Smss3Location;

}

/**
 * @schema SmsGenerateTemplateRequest
 */
export interface SmsGenerateTemplateRequest {
  /**
   * @schema SmsGenerateTemplateRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsGenerateTemplateRequest#templateFormat
   */
  readonly templateFormat?: string;

}

/**
 * @schema SmsGenerateTemplateResponse
 */
export interface SmsGenerateTemplateResponse {
  /**
   * @schema SmsGenerateTemplateResponse#s3Location
   */
  readonly s3Location?: Smss3Location;

}

/**
 * @schema SmsGetAppRequest
 */
export interface SmsGetAppRequest {
  /**
   * @schema SmsGetAppRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema SmsGetAppResponse
 */
export interface SmsGetAppResponse {
  /**
   * @schema SmsGetAppResponse#appSummary
   */
  readonly appSummary?: SmsAppSummary;

  /**
   * @schema SmsGetAppResponse#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsGetAppResponse#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * @schema SmsGetAppLaunchConfigurationRequest
 */
export interface SmsGetAppLaunchConfigurationRequest {
  /**
   * @schema SmsGetAppLaunchConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema SmsGetAppLaunchConfigurationResponse
 */
export interface SmsGetAppLaunchConfigurationResponse {
  /**
   * @schema SmsGetAppLaunchConfigurationResponse#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsGetAppLaunchConfigurationResponse#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsGetAppLaunchConfigurationResponse#autoLaunch
   */
  readonly autoLaunch?: boolean;

  /**
   * @schema SmsGetAppLaunchConfigurationResponse#serverGroupLaunchConfigurations
   */
  readonly serverGroupLaunchConfigurations?: SmsServerGroupLaunchConfiguration[];

}

/**
 * @schema SmsGetAppReplicationConfigurationRequest
 */
export interface SmsGetAppReplicationConfigurationRequest {
  /**
   * @schema SmsGetAppReplicationConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema SmsGetAppReplicationConfigurationResponse
 */
export interface SmsGetAppReplicationConfigurationResponse {
  /**
   * @schema SmsGetAppReplicationConfigurationResponse#serverGroupReplicationConfigurations
   */
  readonly serverGroupReplicationConfigurations?: SmsServerGroupReplicationConfiguration[];

}

/**
 * @schema SmsGetAppValidationConfigurationRequest
 */
export interface SmsGetAppValidationConfigurationRequest {
  /**
   * @schema SmsGetAppValidationConfigurationRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema SmsGetAppValidationConfigurationResponse
 */
export interface SmsGetAppValidationConfigurationResponse {
  /**
   * @schema SmsGetAppValidationConfigurationResponse#appValidationConfigurations
   */
  readonly appValidationConfigurations?: SmsAppValidationConfiguration[];

  /**
   * @schema SmsGetAppValidationConfigurationResponse#serverGroupValidationConfigurations
   */
  readonly serverGroupValidationConfigurations?: SmsServerGroupValidationConfiguration[];

}

/**
 * @schema SmsGetAppValidationOutputRequest
 */
export interface SmsGetAppValidationOutputRequest {
  /**
   * @schema SmsGetAppValidationOutputRequest#appId
   */
  readonly appId: string;

}

/**
 * @schema SmsGetAppValidationOutputResponse
 */
export interface SmsGetAppValidationOutputResponse {
  /**
   * @schema SmsGetAppValidationOutputResponse#validationOutputList
   */
  readonly validationOutputList?: SmsValidationOutput[];

}

/**
 * @schema SmsGetConnectorsRequest
 */
export interface SmsGetConnectorsRequest {
  /**
   * @schema SmsGetConnectorsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsGetConnectorsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SmsGetConnectorsResponse
 */
export interface SmsGetConnectorsResponse {
  /**
   * @schema SmsGetConnectorsResponse#connectorList
   */
  readonly connectorList?: SmsConnector[];

  /**
   * @schema SmsGetConnectorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SmsGetReplicationJobsRequest
 */
export interface SmsGetReplicationJobsRequest {
  /**
   * @schema SmsGetReplicationJobsRequest#replicationJobId
   */
  readonly replicationJobId?: string;

  /**
   * @schema SmsGetReplicationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsGetReplicationJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SmsGetReplicationJobsResponse
 */
export interface SmsGetReplicationJobsResponse {
  /**
   * @schema SmsGetReplicationJobsResponse#replicationJobList
   */
  readonly replicationJobList?: SmsReplicationJob[];

  /**
   * @schema SmsGetReplicationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SmsGetReplicationRunsRequest
 */
export interface SmsGetReplicationRunsRequest {
  /**
   * @schema SmsGetReplicationRunsRequest#replicationJobId
   */
  readonly replicationJobId: string;

  /**
   * @schema SmsGetReplicationRunsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsGetReplicationRunsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SmsGetReplicationRunsResponse
 */
export interface SmsGetReplicationRunsResponse {
  /**
   * @schema SmsGetReplicationRunsResponse#replicationJob
   */
  readonly replicationJob?: SmsReplicationJob;

  /**
   * @schema SmsGetReplicationRunsResponse#replicationRunList
   */
  readonly replicationRunList?: SmsReplicationRun[];

  /**
   * @schema SmsGetReplicationRunsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SmsGetServersRequest
 */
export interface SmsGetServersRequest {
  /**
   * @schema SmsGetServersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsGetServersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SmsGetServersRequest#vmServerAddressList
   */
  readonly vmServerAddressList?: SmsVmServerAddress[];

}

/**
 * @schema SmsGetServersResponse
 */
export interface SmsGetServersResponse {
  /**
   * @schema SmsGetServersResponse#lastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema SmsGetServersResponse#serverCatalogStatus
   */
  readonly serverCatalogStatus?: string;

  /**
   * @schema SmsGetServersResponse#serverList
   */
  readonly serverList?: SmsServer[];

  /**
   * @schema SmsGetServersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SmsImportAppCatalogRequest
 */
export interface SmsImportAppCatalogRequest {
  /**
   * @schema SmsImportAppCatalogRequest#roleName
   */
  readonly roleName?: string;

}

/**
 * @schema SmsImportAppCatalogResponse
 */
export interface SmsImportAppCatalogResponse {
}

/**
 * @schema SmsImportServerCatalogRequest
 */
export interface SmsImportServerCatalogRequest {
}

/**
 * @schema SmsImportServerCatalogResponse
 */
export interface SmsImportServerCatalogResponse {
}

/**
 * @schema SmsLaunchAppRequest
 */
export interface SmsLaunchAppRequest {
  /**
   * @schema SmsLaunchAppRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema SmsLaunchAppResponse
 */
export interface SmsLaunchAppResponse {
}

/**
 * @schema SmsListAppsRequest
 */
export interface SmsListAppsRequest {
  /**
   * @schema SmsListAppsRequest#appIds
   */
  readonly appIds?: string[];

  /**
   * @schema SmsListAppsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsListAppsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SmsListAppsResponse
 */
export interface SmsListAppsResponse {
  /**
   * @schema SmsListAppsResponse#apps
   */
  readonly apps?: SmsAppSummary[];

  /**
   * @schema SmsListAppsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SmsNotifyAppValidationOutputRequest
 */
export interface SmsNotifyAppValidationOutputRequest {
  /**
   * @schema SmsNotifyAppValidationOutputRequest#appId
   */
  readonly appId: string;

  /**
   * @schema SmsNotifyAppValidationOutputRequest#notificationContext
   */
  readonly notificationContext?: SmsNotificationContext;

}

/**
 * @schema SmsNotifyAppValidationOutputResponse
 */
export interface SmsNotifyAppValidationOutputResponse {
}

/**
 * @schema SmsPutAppLaunchConfigurationRequest
 */
export interface SmsPutAppLaunchConfigurationRequest {
  /**
   * @schema SmsPutAppLaunchConfigurationRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsPutAppLaunchConfigurationRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsPutAppLaunchConfigurationRequest#autoLaunch
   */
  readonly autoLaunch?: boolean;

  /**
   * @schema SmsPutAppLaunchConfigurationRequest#serverGroupLaunchConfigurations
   */
  readonly serverGroupLaunchConfigurations?: SmsServerGroupLaunchConfiguration[];

}

/**
 * @schema SmsPutAppLaunchConfigurationResponse
 */
export interface SmsPutAppLaunchConfigurationResponse {
}

/**
 * @schema SmsPutAppReplicationConfigurationRequest
 */
export interface SmsPutAppReplicationConfigurationRequest {
  /**
   * @schema SmsPutAppReplicationConfigurationRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsPutAppReplicationConfigurationRequest#serverGroupReplicationConfigurations
   */
  readonly serverGroupReplicationConfigurations?: SmsServerGroupReplicationConfiguration[];

}

/**
 * @schema SmsPutAppReplicationConfigurationResponse
 */
export interface SmsPutAppReplicationConfigurationResponse {
}

/**
 * @schema SmsPutAppValidationConfigurationRequest
 */
export interface SmsPutAppValidationConfigurationRequest {
  /**
   * @schema SmsPutAppValidationConfigurationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema SmsPutAppValidationConfigurationRequest#appValidationConfigurations
   */
  readonly appValidationConfigurations?: SmsAppValidationConfiguration[];

  /**
   * @schema SmsPutAppValidationConfigurationRequest#serverGroupValidationConfigurations
   */
  readonly serverGroupValidationConfigurations?: SmsServerGroupValidationConfiguration[];

}

/**
 * @schema SmsPutAppValidationConfigurationResponse
 */
export interface SmsPutAppValidationConfigurationResponse {
}

/**
 * @schema SmsStartAppReplicationRequest
 */
export interface SmsStartAppReplicationRequest {
  /**
   * @schema SmsStartAppReplicationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema SmsStartAppReplicationResponse
 */
export interface SmsStartAppReplicationResponse {
}

/**
 * @schema SmsStartOnDemandAppReplicationRequest
 */
export interface SmsStartOnDemandAppReplicationRequest {
  /**
   * @schema SmsStartOnDemandAppReplicationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema SmsStartOnDemandAppReplicationRequest#description
   */
  readonly description?: string;

}

/**
 * @schema SmsStartOnDemandAppReplicationResponse
 */
export interface SmsStartOnDemandAppReplicationResponse {
}

/**
 * @schema SmsStartOnDemandReplicationRunRequest
 */
export interface SmsStartOnDemandReplicationRunRequest {
  /**
   * @schema SmsStartOnDemandReplicationRunRequest#replicationJobId
   */
  readonly replicationJobId: string;

  /**
   * @schema SmsStartOnDemandReplicationRunRequest#description
   */
  readonly description?: string;

}

/**
 * @schema SmsStartOnDemandReplicationRunResponse
 */
export interface SmsStartOnDemandReplicationRunResponse {
  /**
   * @schema SmsStartOnDemandReplicationRunResponse#replicationRunId
   */
  readonly replicationRunId?: string;

}

/**
 * @schema SmsStopAppReplicationRequest
 */
export interface SmsStopAppReplicationRequest {
  /**
   * @schema SmsStopAppReplicationRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema SmsStopAppReplicationResponse
 */
export interface SmsStopAppReplicationResponse {
}

/**
 * @schema SmsTerminateAppRequest
 */
export interface SmsTerminateAppRequest {
  /**
   * @schema SmsTerminateAppRequest#appId
   */
  readonly appId?: string;

}

/**
 * @schema SmsTerminateAppResponse
 */
export interface SmsTerminateAppResponse {
}

/**
 * @schema SmsUpdateAppRequest
 */
export interface SmsUpdateAppRequest {
  /**
   * @schema SmsUpdateAppRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsUpdateAppRequest#name
   */
  readonly name?: string;

  /**
   * @schema SmsUpdateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema SmsUpdateAppRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsUpdateAppRequest#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsUpdateAppRequest#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * @schema SmsUpdateAppResponse
 */
export interface SmsUpdateAppResponse {
  /**
   * @schema SmsUpdateAppResponse#appSummary
   */
  readonly appSummary?: SmsAppSummary;

  /**
   * @schema SmsUpdateAppResponse#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsUpdateAppResponse#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * @schema SmsUpdateReplicationJobRequest
 */
export interface SmsUpdateReplicationJobRequest {
  /**
   * @schema SmsUpdateReplicationJobRequest#replicationJobId
   */
  readonly replicationJobId: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#frequency
   */
  readonly frequency?: number;

  /**
   * @schema SmsUpdateReplicationJobRequest#nextReplicationRunStartTime
   */
  readonly nextReplicationRunStartTime?: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema SmsUpdateReplicationJobRequest#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsUpdateReplicationJobRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SmsUpdateReplicationJobResponse
 */
export interface SmsUpdateReplicationJobResponse {
}

/**
 * @schema SmsServerGroup
 */
export interface SmsServerGroup {
  /**
   * @schema SmsServerGroup#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema SmsServerGroup#name
   */
  readonly name?: string;

  /**
   * @schema SmsServerGroup#serverList
   */
  readonly serverList?: SmsServer[];

}

/**
 * @schema SmsTag
 */
export interface SmsTag {
  /**
   * @schema SmsTag#key
   */
  readonly key?: string;

  /**
   * @schema SmsTag#value
   */
  readonly value?: string;

}

/**
 * @schema SmsAppSummary
 */
export interface SmsAppSummary {
  /**
   * @schema SmsAppSummary#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsAppSummary#importedAppId
   */
  readonly importedAppId?: string;

  /**
   * @schema SmsAppSummary#name
   */
  readonly name?: string;

  /**
   * @schema SmsAppSummary#description
   */
  readonly description?: string;

  /**
   * @schema SmsAppSummary#status
   */
  readonly status?: string;

  /**
   * @schema SmsAppSummary#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SmsAppSummary#replicationConfigurationStatus
   */
  readonly replicationConfigurationStatus?: string;

  /**
   * @schema SmsAppSummary#replicationStatus
   */
  readonly replicationStatus?: string;

  /**
   * @schema SmsAppSummary#replicationStatusMessage
   */
  readonly replicationStatusMessage?: string;

  /**
   * @schema SmsAppSummary#latestReplicationTime
   */
  readonly latestReplicationTime?: string;

  /**
   * @schema SmsAppSummary#launchConfigurationStatus
   */
  readonly launchConfigurationStatus?: string;

  /**
   * @schema SmsAppSummary#launchStatus
   */
  readonly launchStatus?: string;

  /**
   * @schema SmsAppSummary#launchStatusMessage
   */
  readonly launchStatusMessage?: string;

  /**
   * @schema SmsAppSummary#launchDetails
   */
  readonly launchDetails?: SmsLaunchDetails;

  /**
   * @schema SmsAppSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SmsAppSummary#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SmsAppSummary#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsAppSummary#totalServerGroups
   */
  readonly totalServerGroups?: number;

  /**
   * @schema SmsAppSummary#totalServers
   */
  readonly totalServers?: number;

}

/**
 * @schema Smss3Location
 */
export interface Smss3Location {
  /**
   * @schema Smss3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema Smss3Location#key
   */
  readonly key?: string;

}

/**
 * @schema SmsServerGroupLaunchConfiguration
 */
export interface SmsServerGroupLaunchConfiguration {
  /**
   * @schema SmsServerGroupLaunchConfiguration#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema SmsServerGroupLaunchConfiguration#launchOrder
   */
  readonly launchOrder?: number;

  /**
   * @schema SmsServerGroupLaunchConfiguration#serverLaunchConfigurations
   */
  readonly serverLaunchConfigurations?: SmsServerLaunchConfiguration[];

}

/**
 * @schema SmsServerGroupReplicationConfiguration
 */
export interface SmsServerGroupReplicationConfiguration {
  /**
   * @schema SmsServerGroupReplicationConfiguration#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema SmsServerGroupReplicationConfiguration#serverReplicationConfigurations
   */
  readonly serverReplicationConfigurations?: SmsServerReplicationConfiguration[];

}

/**
 * @schema SmsAppValidationConfiguration
 */
export interface SmsAppValidationConfiguration {
  /**
   * @schema SmsAppValidationConfiguration#validationId
   */
  readonly validationId?: string;

  /**
   * @schema SmsAppValidationConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema SmsAppValidationConfiguration#appValidationStrategy
   */
  readonly appValidationStrategy?: string;

  /**
   * @schema SmsAppValidationConfiguration#ssmValidationParameters
   */
  readonly ssmValidationParameters?: SmsssmValidationParameters;

}

/**
 * @schema SmsServerGroupValidationConfiguration
 */
export interface SmsServerGroupValidationConfiguration {
  /**
   * @schema SmsServerGroupValidationConfiguration#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema SmsServerGroupValidationConfiguration#serverValidationConfigurations
   */
  readonly serverValidationConfigurations?: SmsServerValidationConfiguration[];

}

/**
 * @schema SmsValidationOutput
 */
export interface SmsValidationOutput {
  /**
   * @schema SmsValidationOutput#validationId
   */
  readonly validationId?: string;

  /**
   * @schema SmsValidationOutput#name
   */
  readonly name?: string;

  /**
   * @schema SmsValidationOutput#status
   */
  readonly status?: string;

  /**
   * @schema SmsValidationOutput#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SmsValidationOutput#latestValidationTime
   */
  readonly latestValidationTime?: string;

  /**
   * @schema SmsValidationOutput#appValidationOutput
   */
  readonly appValidationOutput?: SmsAppValidationOutput;

  /**
   * @schema SmsValidationOutput#serverValidationOutput
   */
  readonly serverValidationOutput?: SmsServerValidationOutput;

}

/**
 * @schema SmsConnector
 */
export interface SmsConnector {
  /**
   * @schema SmsConnector#connectorId
   */
  readonly connectorId?: string;

  /**
   * @schema SmsConnector#version
   */
  readonly version?: string;

  /**
   * @schema SmsConnector#status
   */
  readonly status?: string;

  /**
   * @schema SmsConnector#capabilityList
   */
  readonly capabilityList?: string[];

  /**
   * @schema SmsConnector#vmManagerName
   */
  readonly vmManagerName?: string;

  /**
   * @schema SmsConnector#vmManagerType
   */
  readonly vmManagerType?: string;

  /**
   * @schema SmsConnector#vmManagerId
   */
  readonly vmManagerId?: string;

  /**
   * @schema SmsConnector#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema SmsConnector#macAddress
   */
  readonly macAddress?: string;

  /**
   * @schema SmsConnector#associatedOn
   */
  readonly associatedOn?: string;

}

/**
 * @schema SmsReplicationJob
 */
export interface SmsReplicationJob {
  /**
   * @schema SmsReplicationJob#replicationJobId
   */
  readonly replicationJobId?: string;

  /**
   * @schema SmsReplicationJob#serverId
   */
  readonly serverId?: string;

  /**
   * @schema SmsReplicationJob#serverType
   */
  readonly serverType?: string;

  /**
   * @schema SmsReplicationJob#vmServer
   */
  readonly vmServer?: SmsVmServer;

  /**
   * @schema SmsReplicationJob#seedReplicationTime
   */
  readonly seedReplicationTime?: string;

  /**
   * @schema SmsReplicationJob#frequency
   */
  readonly frequency?: number;

  /**
   * @schema SmsReplicationJob#runOnce
   */
  readonly runOnce?: boolean;

  /**
   * @schema SmsReplicationJob#nextReplicationRunStartTime
   */
  readonly nextReplicationRunStartTime?: string;

  /**
   * @schema SmsReplicationJob#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema SmsReplicationJob#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsReplicationJob#latestAmiId
   */
  readonly latestAmiId?: string;

  /**
   * @schema SmsReplicationJob#state
   */
  readonly state?: string;

  /**
   * @schema SmsReplicationJob#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SmsReplicationJob#description
   */
  readonly description?: string;

  /**
   * @schema SmsReplicationJob#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema SmsReplicationJob#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsReplicationJob#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SmsReplicationJob#replicationRunList
   */
  readonly replicationRunList?: SmsReplicationRun[];

}

/**
 * @schema SmsReplicationRun
 */
export interface SmsReplicationRun {
  /**
   * @schema SmsReplicationRun#replicationRunId
   */
  readonly replicationRunId?: string;

  /**
   * @schema SmsReplicationRun#state
   */
  readonly state?: string;

  /**
   * @schema SmsReplicationRun#type
   */
  readonly type?: string;

  /**
   * @schema SmsReplicationRun#stageDetails
   */
  readonly stageDetails?: SmsReplicationRunStageDetails;

  /**
   * @schema SmsReplicationRun#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SmsReplicationRun#amiId
   */
  readonly amiId?: string;

  /**
   * @schema SmsReplicationRun#scheduledStartTime
   */
  readonly scheduledStartTime?: string;

  /**
   * @schema SmsReplicationRun#completedTime
   */
  readonly completedTime?: string;

  /**
   * @schema SmsReplicationRun#description
   */
  readonly description?: string;

  /**
   * @schema SmsReplicationRun#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsReplicationRun#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SmsVmServerAddress
 */
export interface SmsVmServerAddress {
  /**
   * @schema SmsVmServerAddress#vmManagerId
   */
  readonly vmManagerId?: string;

  /**
   * @schema SmsVmServerAddress#vmId
   */
  readonly vmId?: string;

}

/**
 * @schema SmsServer
 */
export interface SmsServer {
  /**
   * @schema SmsServer#serverId
   */
  readonly serverId?: string;

  /**
   * @schema SmsServer#serverType
   */
  readonly serverType?: string;

  /**
   * @schema SmsServer#vmServer
   */
  readonly vmServer?: SmsVmServer;

  /**
   * @schema SmsServer#replicationJobId
   */
  readonly replicationJobId?: string;

  /**
   * @schema SmsServer#replicationJobTerminated
   */
  readonly replicationJobTerminated?: boolean;

}

/**
 * @schema SmsNotificationContext
 */
export interface SmsNotificationContext {
  /**
   * @schema SmsNotificationContext#validationId
   */
  readonly validationId?: string;

  /**
   * @schema SmsNotificationContext#status
   */
  readonly status?: string;

  /**
   * @schema SmsNotificationContext#statusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema SmsLaunchDetails
 */
export interface SmsLaunchDetails {
  /**
   * @schema SmsLaunchDetails#latestLaunchTime
   */
  readonly latestLaunchTime?: string;

  /**
   * @schema SmsLaunchDetails#stackName
   */
  readonly stackName?: string;

  /**
   * @schema SmsLaunchDetails#stackId
   */
  readonly stackId?: string;

}

/**
 * @schema SmsServerLaunchConfiguration
 */
export interface SmsServerLaunchConfiguration {
  /**
   * @schema SmsServerLaunchConfiguration#server
   */
  readonly server?: SmsServer;

  /**
   * @schema SmsServerLaunchConfiguration#logicalId
   */
  readonly logicalId?: string;

  /**
   * @schema SmsServerLaunchConfiguration#vpc
   */
  readonly vpc?: string;

  /**
   * @schema SmsServerLaunchConfiguration#subnet
   */
  readonly subnet?: string;

  /**
   * @schema SmsServerLaunchConfiguration#securityGroup
   */
  readonly securityGroup?: string;

  /**
   * @schema SmsServerLaunchConfiguration#ec2KeyName
   */
  readonly ec2KeyName?: string;

  /**
   * @schema SmsServerLaunchConfiguration#userData
   */
  readonly userData?: SmsUserData;

  /**
   * @schema SmsServerLaunchConfiguration#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema SmsServerLaunchConfiguration#associatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema SmsServerLaunchConfiguration#iamInstanceProfileName
   */
  readonly iamInstanceProfileName?: string;

  /**
   * @schema SmsServerLaunchConfiguration#configureScript
   */
  readonly configureScript?: Smss3Location;

  /**
   * @schema SmsServerLaunchConfiguration#configureScriptType
   */
  readonly configureScriptType?: string;

}

/**
 * @schema SmsServerReplicationConfiguration
 */
export interface SmsServerReplicationConfiguration {
  /**
   * @schema SmsServerReplicationConfiguration#server
   */
  readonly server?: SmsServer;

  /**
   * @schema SmsServerReplicationConfiguration#serverReplicationParameters
   */
  readonly serverReplicationParameters?: SmsServerReplicationParameters;

}

/**
 * @schema SmsssmValidationParameters
 */
export interface SmsssmValidationParameters {
  /**
   * @schema SmsssmValidationParameters#source
   */
  readonly source?: SmsSource;

  /**
   * @schema SmsssmValidationParameters#instanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SmsssmValidationParameters#scriptType
   */
  readonly scriptType?: string;

  /**
   * @schema SmsssmValidationParameters#command
   */
  readonly command?: string;

  /**
   * @schema SmsssmValidationParameters#executionTimeoutSeconds
   */
  readonly executionTimeoutSeconds?: number;

  /**
   * @schema SmsssmValidationParameters#outputS3BucketName
   */
  readonly outputS3BucketName?: string;

}

/**
 * @schema SmsServerValidationConfiguration
 */
export interface SmsServerValidationConfiguration {
  /**
   * @schema SmsServerValidationConfiguration#server
   */
  readonly server?: SmsServer;

  /**
   * @schema SmsServerValidationConfiguration#validationId
   */
  readonly validationId?: string;

  /**
   * @schema SmsServerValidationConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema SmsServerValidationConfiguration#serverValidationStrategy
   */
  readonly serverValidationStrategy?: string;

  /**
   * @schema SmsServerValidationConfiguration#userDataValidationParameters
   */
  readonly userDataValidationParameters?: SmsUserDataValidationParameters;

}

/**
 * @schema SmsAppValidationOutput
 */
export interface SmsAppValidationOutput {
  /**
   * @schema SmsAppValidationOutput#ssmOutput
   */
  readonly ssmOutput?: SmsssmOutput;

}

/**
 * @schema SmsServerValidationOutput
 */
export interface SmsServerValidationOutput {
  /**
   * @schema SmsServerValidationOutput#server
   */
  readonly server?: SmsServer;

}

/**
 * @schema SmsVmServer
 */
export interface SmsVmServer {
  /**
   * @schema SmsVmServer#vmServerAddress
   */
  readonly vmServerAddress?: SmsVmServerAddress;

  /**
   * @schema SmsVmServer#vmName
   */
  readonly vmName?: string;

  /**
   * @schema SmsVmServer#vmManagerName
   */
  readonly vmManagerName?: string;

  /**
   * @schema SmsVmServer#vmManagerType
   */
  readonly vmManagerType?: string;

  /**
   * @schema SmsVmServer#vmPath
   */
  readonly vmPath?: string;

}

/**
 * @schema SmsReplicationRunStageDetails
 */
export interface SmsReplicationRunStageDetails {
  /**
   * @schema SmsReplicationRunStageDetails#stage
   */
  readonly stage?: string;

  /**
   * @schema SmsReplicationRunStageDetails#stageProgress
   */
  readonly stageProgress?: string;

}

/**
 * @schema SmsUserData
 */
export interface SmsUserData {
  /**
   * @schema SmsUserData#s3Location
   */
  readonly s3Location?: Smss3Location;

}

/**
 * @schema SmsServerReplicationParameters
 */
export interface SmsServerReplicationParameters {
  /**
   * @schema SmsServerReplicationParameters#seedTime
   */
  readonly seedTime?: string;

  /**
   * @schema SmsServerReplicationParameters#frequency
   */
  readonly frequency?: number;

  /**
   * @schema SmsServerReplicationParameters#runOnce
   */
  readonly runOnce?: boolean;

  /**
   * @schema SmsServerReplicationParameters#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema SmsServerReplicationParameters#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema SmsServerReplicationParameters#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsServerReplicationParameters#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SmsSource
 */
export interface SmsSource {
  /**
   * @schema SmsSource#s3Location
   */
  readonly s3Location?: Smss3Location;

}

/**
 * @schema SmsUserDataValidationParameters
 */
export interface SmsUserDataValidationParameters {
  /**
   * @schema SmsUserDataValidationParameters#source
   */
  readonly source?: SmsSource;

  /**
   * @schema SmsUserDataValidationParameters#scriptType
   */
  readonly scriptType?: string;

}

/**
 * @schema SmsssmOutput
 */
export interface SmsssmOutput {
  /**
   * @schema SmsssmOutput#s3Location
   */
  readonly s3Location?: Smss3Location;

}
