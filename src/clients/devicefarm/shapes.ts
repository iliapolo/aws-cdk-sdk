/**
 * @schema CreateDevicePoolRequest
 */
export interface CreateDevicePoolRequest {
  /**
   * @schema CreateDevicePoolRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema CreateDevicePoolRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateDevicePoolRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateDevicePoolRequest#rules
   */
  readonly rules: Rule[];

  /**
   * @schema CreateDevicePoolRequest#maxDevices
   */
  readonly maxDevices?: number;

}

/**
 * @schema CreateDevicePoolResult
 */
export interface CreateDevicePoolResult {
  /**
   * @schema CreateDevicePoolResult#devicePool
   */
  readonly devicePool?: DevicePool;

}

/**
 * @schema CreateInstanceProfileRequest
 */
export interface CreateInstanceProfileRequest {
  /**
   * @schema CreateInstanceProfileRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateInstanceProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateInstanceProfileRequest#packageCleanup
   */
  readonly packageCleanup?: boolean;

  /**
   * @schema CreateInstanceProfileRequest#excludeAppPackagesFromCleanup
   */
  readonly excludeAppPackagesFromCleanup?: string[];

  /**
   * @schema CreateInstanceProfileRequest#rebootAfterUse
   */
  readonly rebootAfterUse?: boolean;

}

/**
 * @schema CreateInstanceProfileResult
 */
export interface CreateInstanceProfileResult {
  /**
   * @schema CreateInstanceProfileResult#instanceProfile
   */
  readonly instanceProfile?: InstanceProfile;

}

/**
 * @schema CreateNetworkProfileRequest
 */
export interface CreateNetworkProfileRequest {
  /**
   * @schema CreateNetworkProfileRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema CreateNetworkProfileRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateNetworkProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateNetworkProfileRequest#type
   */
  readonly type?: string;

  /**
   * @schema CreateNetworkProfileRequest#uplinkBandwidthBits
   */
  readonly uplinkBandwidthBits?: number;

  /**
   * @schema CreateNetworkProfileRequest#downlinkBandwidthBits
   */
  readonly downlinkBandwidthBits?: number;

  /**
   * @schema CreateNetworkProfileRequest#uplinkDelayMs
   */
  readonly uplinkDelayMs?: number;

  /**
   * @schema CreateNetworkProfileRequest#downlinkDelayMs
   */
  readonly downlinkDelayMs?: number;

  /**
   * @schema CreateNetworkProfileRequest#uplinkJitterMs
   */
  readonly uplinkJitterMs?: number;

  /**
   * @schema CreateNetworkProfileRequest#downlinkJitterMs
   */
  readonly downlinkJitterMs?: number;

  /**
   * @schema CreateNetworkProfileRequest#uplinkLossPercent
   */
  readonly uplinkLossPercent?: number;

  /**
   * @schema CreateNetworkProfileRequest#downlinkLossPercent
   */
  readonly downlinkLossPercent?: number;

}

/**
 * @schema CreateNetworkProfileResult
 */
export interface CreateNetworkProfileResult {
  /**
   * @schema CreateNetworkProfileResult#networkProfile
   */
  readonly networkProfile?: NetworkProfile;

}

/**
 * @schema CreateProjectRequest
 */
export interface CreateProjectRequest {
  /**
   * @schema CreateProjectRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateProjectRequest#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

}

/**
 * @schema CreateProjectResult
 */
export interface CreateProjectResult {
  /**
   * @schema CreateProjectResult#project
   */
  readonly project?: Project;

}

/**
 * @schema CreateRemoteAccessSessionRequest
 */
export interface CreateRemoteAccessSessionRequest {
  /**
   * @schema CreateRemoteAccessSessionRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema CreateRemoteAccessSessionRequest#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema CreateRemoteAccessSessionRequest#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema CreateRemoteAccessSessionRequest#sshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema CreateRemoteAccessSessionRequest#remoteDebugEnabled
   */
  readonly remoteDebugEnabled?: boolean;

  /**
   * @schema CreateRemoteAccessSessionRequest#remoteRecordEnabled
   */
  readonly remoteRecordEnabled?: boolean;

  /**
   * @schema CreateRemoteAccessSessionRequest#remoteRecordAppArn
   */
  readonly remoteRecordAppArn?: string;

  /**
   * @schema CreateRemoteAccessSessionRequest#name
   */
  readonly name?: string;

  /**
   * @schema CreateRemoteAccessSessionRequest#clientId
   */
  readonly clientId?: string;

  /**
   * @schema CreateRemoteAccessSessionRequest#configuration
   */
  readonly configuration?: CreateRemoteAccessSessionConfiguration;

  /**
   * @schema CreateRemoteAccessSessionRequest#interactionMode
   */
  readonly interactionMode?: string;

  /**
   * @schema CreateRemoteAccessSessionRequest#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * @schema CreateRemoteAccessSessionResult
 */
export interface CreateRemoteAccessSessionResult {
  /**
   * @schema CreateRemoteAccessSessionResult#remoteAccessSession
   */
  readonly remoteAccessSession?: RemoteAccessSession;

}

/**
 * @schema CreateTestGridProjectRequest
 */
export interface CreateTestGridProjectRequest {
  /**
   * @schema CreateTestGridProjectRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateTestGridProjectRequest#description
   */
  readonly description?: string;

}

/**
 * @schema CreateTestGridProjectResult
 */
export interface CreateTestGridProjectResult {
  /**
   * @schema CreateTestGridProjectResult#testGridProject
   */
  readonly testGridProject?: TestGridProject;

}

/**
 * @schema CreateTestGridUrlRequest
 */
export interface CreateTestGridUrlRequest {
  /**
   * @schema CreateTestGridUrlRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema CreateTestGridUrlRequest#expiresInSeconds
   */
  readonly expiresInSeconds: number;

}

/**
 * @schema CreateTestGridUrlResult
 */
export interface CreateTestGridUrlResult {
  /**
   * @schema CreateTestGridUrlResult#url
   */
  readonly url?: string;

  /**
   * @schema CreateTestGridUrlResult#expires
   */
  readonly expires?: string;

}

/**
 * @schema CreateUploadRequest
 */
export interface CreateUploadRequest {
  /**
   * @schema CreateUploadRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema CreateUploadRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateUploadRequest#type
   */
  readonly type: string;

  /**
   * @schema CreateUploadRequest#contentType
   */
  readonly contentType?: string;

}

/**
 * @schema CreateUploadResult
 */
export interface CreateUploadResult {
  /**
   * @schema CreateUploadResult#upload
   */
  readonly upload?: Upload;

}

/**
 * @schema CreateVpceConfigurationRequest
 */
export interface CreateVpceConfigurationRequest {
  /**
   * @schema CreateVpceConfigurationRequest#vpceConfigurationName
   */
  readonly vpceConfigurationName: string;

  /**
   * @schema CreateVpceConfigurationRequest#vpceServiceName
   */
  readonly vpceServiceName: string;

  /**
   * @schema CreateVpceConfigurationRequest#serviceDnsName
   */
  readonly serviceDnsName: string;

  /**
   * @schema CreateVpceConfigurationRequest#vpceConfigurationDescription
   */
  readonly vpceConfigurationDescription?: string;

}

/**
 * @schema CreateVpceConfigurationResult
 */
export interface CreateVpceConfigurationResult {
  /**
   * @schema CreateVpceConfigurationResult#vpceConfiguration
   */
  readonly vpceConfiguration?: VpceConfiguration;

}

/**
 * @schema DeleteDevicePoolRequest
 */
export interface DeleteDevicePoolRequest {
  /**
   * @schema DeleteDevicePoolRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteDevicePoolResult
 */
export interface DeleteDevicePoolResult {
}

/**
 * @schema DeleteInstanceProfileRequest
 */
export interface DeleteInstanceProfileRequest {
  /**
   * @schema DeleteInstanceProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteInstanceProfileResult
 */
export interface DeleteInstanceProfileResult {
}

/**
 * @schema DeleteNetworkProfileRequest
 */
export interface DeleteNetworkProfileRequest {
  /**
   * @schema DeleteNetworkProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteNetworkProfileResult
 */
export interface DeleteNetworkProfileResult {
}

/**
 * @schema DeleteProjectRequest
 */
export interface DeleteProjectRequest {
  /**
   * @schema DeleteProjectRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteProjectResult
 */
export interface DeleteProjectResult {
}

/**
 * @schema DeleteRemoteAccessSessionRequest
 */
export interface DeleteRemoteAccessSessionRequest {
  /**
   * @schema DeleteRemoteAccessSessionRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteRemoteAccessSessionResult
 */
export interface DeleteRemoteAccessSessionResult {
}

/**
 * @schema DeleteRunRequest
 */
export interface DeleteRunRequest {
  /**
   * @schema DeleteRunRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteRunResult
 */
export interface DeleteRunResult {
}

/**
 * @schema DeleteTestGridProjectRequest
 */
export interface DeleteTestGridProjectRequest {
  /**
   * @schema DeleteTestGridProjectRequest#projectArn
   */
  readonly projectArn: string;

}

/**
 * @schema DeleteTestGridProjectResult
 */
export interface DeleteTestGridProjectResult {
}

/**
 * @schema DeleteUploadRequest
 */
export interface DeleteUploadRequest {
  /**
   * @schema DeleteUploadRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteUploadResult
 */
export interface DeleteUploadResult {
}

/**
 * @schema DeleteVpceConfigurationRequest
 */
export interface DeleteVpceConfigurationRequest {
  /**
   * @schema DeleteVpceConfigurationRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteVpceConfigurationResult
 */
export interface DeleteVpceConfigurationResult {
}

/**
 * @schema GetAccountSettingsRequest
 */
export interface GetAccountSettingsRequest {
}

/**
 * @schema GetAccountSettingsResult
 */
export interface GetAccountSettingsResult {
  /**
   * @schema GetAccountSettingsResult#accountSettings
   */
  readonly accountSettings?: AccountSettings;

}

/**
 * @schema GetDeviceRequest
 */
export interface GetDeviceRequest {
  /**
   * @schema GetDeviceRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetDeviceResult
 */
export interface GetDeviceResult {
  /**
   * @schema GetDeviceResult#device
   */
  readonly device?: Device;

}

/**
 * @schema GetDeviceInstanceRequest
 */
export interface GetDeviceInstanceRequest {
  /**
   * @schema GetDeviceInstanceRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetDeviceInstanceResult
 */
export interface GetDeviceInstanceResult {
  /**
   * @schema GetDeviceInstanceResult#deviceInstance
   */
  readonly deviceInstance?: DeviceInstance;

}

/**
 * @schema GetDevicePoolRequest
 */
export interface GetDevicePoolRequest {
  /**
   * @schema GetDevicePoolRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetDevicePoolResult
 */
export interface GetDevicePoolResult {
  /**
   * @schema GetDevicePoolResult#devicePool
   */
  readonly devicePool?: DevicePool;

}

/**
 * @schema GetDevicePoolCompatibilityRequest
 */
export interface GetDevicePoolCompatibilityRequest {
  /**
   * @schema GetDevicePoolCompatibilityRequest#devicePoolArn
   */
  readonly devicePoolArn: string;

  /**
   * @schema GetDevicePoolCompatibilityRequest#appArn
   */
  readonly appArn?: string;

  /**
   * @schema GetDevicePoolCompatibilityRequest#testType
   */
  readonly testType?: string;

  /**
   * @schema GetDevicePoolCompatibilityRequest#test
   */
  readonly test?: ScheduleRunTest;

  /**
   * @schema GetDevicePoolCompatibilityRequest#configuration
   */
  readonly configuration?: ScheduleRunConfiguration;

}

/**
 * @schema GetDevicePoolCompatibilityResult
 */
export interface GetDevicePoolCompatibilityResult {
  /**
   * @schema GetDevicePoolCompatibilityResult#compatibleDevices
   */
  readonly compatibleDevices?: DevicePoolCompatibilityResult[];

  /**
   * @schema GetDevicePoolCompatibilityResult#incompatibleDevices
   */
  readonly incompatibleDevices?: DevicePoolCompatibilityResult[];

}

/**
 * @schema GetInstanceProfileRequest
 */
export interface GetInstanceProfileRequest {
  /**
   * @schema GetInstanceProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetInstanceProfileResult
 */
export interface GetInstanceProfileResult {
  /**
   * @schema GetInstanceProfileResult#instanceProfile
   */
  readonly instanceProfile?: InstanceProfile;

}

/**
 * @schema GetJobRequest
 */
export interface GetJobRequest {
  /**
   * @schema GetJobRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetJobResult
 */
export interface GetJobResult {
  /**
   * @schema GetJobResult#job
   */
  readonly job?: Job;

}

/**
 * @schema GetNetworkProfileRequest
 */
export interface GetNetworkProfileRequest {
  /**
   * @schema GetNetworkProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetNetworkProfileResult
 */
export interface GetNetworkProfileResult {
  /**
   * @schema GetNetworkProfileResult#networkProfile
   */
  readonly networkProfile?: NetworkProfile;

}

/**
 * @schema GetOfferingStatusRequest
 */
export interface GetOfferingStatusRequest {
  /**
   * @schema GetOfferingStatusRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetOfferingStatusResult
 */
export interface GetOfferingStatusResult {
  /**
   * @schema GetOfferingStatusResult#current
   */
  readonly current?: { [key: string]: OfferingStatus };

  /**
   * @schema GetOfferingStatusResult#nextPeriod
   */
  readonly nextPeriod?: { [key: string]: OfferingStatus };

  /**
   * @schema GetOfferingStatusResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetProjectRequest
 */
export interface GetProjectRequest {
  /**
   * @schema GetProjectRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetProjectResult
 */
export interface GetProjectResult {
  /**
   * @schema GetProjectResult#project
   */
  readonly project?: Project;

}

/**
 * @schema GetRemoteAccessSessionRequest
 */
export interface GetRemoteAccessSessionRequest {
  /**
   * @schema GetRemoteAccessSessionRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetRemoteAccessSessionResult
 */
export interface GetRemoteAccessSessionResult {
  /**
   * @schema GetRemoteAccessSessionResult#remoteAccessSession
   */
  readonly remoteAccessSession?: RemoteAccessSession;

}

/**
 * @schema GetRunRequest
 */
export interface GetRunRequest {
  /**
   * @schema GetRunRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetRunResult
 */
export interface GetRunResult {
  /**
   * @schema GetRunResult#run
   */
  readonly run?: Run;

}

/**
 * @schema GetSuiteRequest
 */
export interface GetSuiteRequest {
  /**
   * @schema GetSuiteRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetSuiteResult
 */
export interface GetSuiteResult {
  /**
   * @schema GetSuiteResult#suite
   */
  readonly suite?: Suite;

}

/**
 * @schema GetTestRequest
 */
export interface GetTestRequest {
  /**
   * @schema GetTestRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetTestResult
 */
export interface GetTestResult {
  /**
   * @schema GetTestResult#test
   */
  readonly test?: Test;

}

/**
 * @schema GetTestGridProjectRequest
 */
export interface GetTestGridProjectRequest {
  /**
   * @schema GetTestGridProjectRequest#projectArn
   */
  readonly projectArn: string;

}

/**
 * @schema GetTestGridProjectResult
 */
export interface GetTestGridProjectResult {
  /**
   * @schema GetTestGridProjectResult#testGridProject
   */
  readonly testGridProject?: TestGridProject;

}

/**
 * @schema GetTestGridSessionRequest
 */
export interface GetTestGridSessionRequest {
  /**
   * @schema GetTestGridSessionRequest#projectArn
   */
  readonly projectArn?: string;

  /**
   * @schema GetTestGridSessionRequest#sessionId
   */
  readonly sessionId?: string;

  /**
   * @schema GetTestGridSessionRequest#sessionArn
   */
  readonly sessionArn?: string;

}

/**
 * @schema GetTestGridSessionResult
 */
export interface GetTestGridSessionResult {
  /**
   * @schema GetTestGridSessionResult#testGridSession
   */
  readonly testGridSession?: TestGridSession;

}

/**
 * @schema GetUploadRequest
 */
export interface GetUploadRequest {
  /**
   * @schema GetUploadRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetUploadResult
 */
export interface GetUploadResult {
  /**
   * @schema GetUploadResult#upload
   */
  readonly upload?: Upload;

}

/**
 * @schema GetVpceConfigurationRequest
 */
export interface GetVpceConfigurationRequest {
  /**
   * @schema GetVpceConfigurationRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetVpceConfigurationResult
 */
export interface GetVpceConfigurationResult {
  /**
   * @schema GetVpceConfigurationResult#vpceConfiguration
   */
  readonly vpceConfiguration?: VpceConfiguration;

}

/**
 * @schema InstallToRemoteAccessSessionRequest
 */
export interface InstallToRemoteAccessSessionRequest {
  /**
   * @schema InstallToRemoteAccessSessionRequest#remoteAccessSessionArn
   */
  readonly remoteAccessSessionArn: string;

  /**
   * @schema InstallToRemoteAccessSessionRequest#appArn
   */
  readonly appArn: string;

}

/**
 * @schema InstallToRemoteAccessSessionResult
 */
export interface InstallToRemoteAccessSessionResult {
  /**
   * @schema InstallToRemoteAccessSessionResult#appUpload
   */
  readonly appUpload?: Upload;

}

/**
 * @schema ListArtifactsRequest
 */
export interface ListArtifactsRequest {
  /**
   * @schema ListArtifactsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListArtifactsRequest#type
   */
  readonly type: string;

  /**
   * @schema ListArtifactsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListArtifactsResult
 */
export interface ListArtifactsResult {
  /**
   * @schema ListArtifactsResult#artifacts
   */
  readonly artifacts?: Artifact[];

  /**
   * @schema ListArtifactsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeviceInstancesRequest
 */
export interface ListDeviceInstancesRequest {
  /**
   * @schema ListDeviceInstancesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDeviceInstancesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeviceInstancesResult
 */
export interface ListDeviceInstancesResult {
  /**
   * @schema ListDeviceInstancesResult#deviceInstances
   */
  readonly deviceInstances?: DeviceInstance[];

  /**
   * @schema ListDeviceInstancesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDevicePoolsRequest
 */
export interface ListDevicePoolsRequest {
  /**
   * @schema ListDevicePoolsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListDevicePoolsRequest#type
   */
  readonly type?: string;

  /**
   * @schema ListDevicePoolsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDevicePoolsResult
 */
export interface ListDevicePoolsResult {
  /**
   * @schema ListDevicePoolsResult#devicePools
   */
  readonly devicePools?: DevicePool[];

  /**
   * @schema ListDevicePoolsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDevicesRequest
 */
export interface ListDevicesRequest {
  /**
   * @schema ListDevicesRequest#arn
   */
  readonly arn?: string;

  /**
   * @schema ListDevicesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDevicesRequest#filters
   */
  readonly filters?: DeviceFilter[];

}

/**
 * @schema ListDevicesResult
 */
export interface ListDevicesResult {
  /**
   * @schema ListDevicesResult#devices
   */
  readonly devices?: Device[];

  /**
   * @schema ListDevicesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInstanceProfilesRequest
 */
export interface ListInstanceProfilesRequest {
  /**
   * @schema ListInstanceProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInstanceProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInstanceProfilesResult
 */
export interface ListInstanceProfilesResult {
  /**
   * @schema ListInstanceProfilesResult#instanceProfiles
   */
  readonly instanceProfiles?: InstanceProfile[];

  /**
   * @schema ListInstanceProfilesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListJobsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsResult
 */
export interface ListJobsResult {
  /**
   * @schema ListJobsResult#jobs
   */
  readonly jobs?: Job[];

  /**
   * @schema ListJobsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNetworkProfilesRequest
 */
export interface ListNetworkProfilesRequest {
  /**
   * @schema ListNetworkProfilesRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListNetworkProfilesRequest#type
   */
  readonly type?: string;

  /**
   * @schema ListNetworkProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNetworkProfilesResult
 */
export interface ListNetworkProfilesResult {
  /**
   * @schema ListNetworkProfilesResult#networkProfiles
   */
  readonly networkProfiles?: NetworkProfile[];

  /**
   * @schema ListNetworkProfilesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOfferingPromotionsRequest
 */
export interface ListOfferingPromotionsRequest {
  /**
   * @schema ListOfferingPromotionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOfferingPromotionsResult
 */
export interface ListOfferingPromotionsResult {
  /**
   * @schema ListOfferingPromotionsResult#offeringPromotions
   */
  readonly offeringPromotions?: OfferingPromotion[];

  /**
   * @schema ListOfferingPromotionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOfferingTransactionsRequest
 */
export interface ListOfferingTransactionsRequest {
  /**
   * @schema ListOfferingTransactionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOfferingTransactionsResult
 */
export interface ListOfferingTransactionsResult {
  /**
   * @schema ListOfferingTransactionsResult#offeringTransactions
   */
  readonly offeringTransactions?: OfferingTransaction[];

  /**
   * @schema ListOfferingTransactionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOfferingsRequest
 */
export interface ListOfferingsRequest {
  /**
   * @schema ListOfferingsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOfferingsResult
 */
export interface ListOfferingsResult {
  /**
   * @schema ListOfferingsResult#offerings
   */
  readonly offerings?: Offering[];

  /**
   * @schema ListOfferingsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProjectsRequest
 */
export interface ListProjectsRequest {
  /**
   * @schema ListProjectsRequest#arn
   */
  readonly arn?: string;

  /**
   * @schema ListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProjectsResult
 */
export interface ListProjectsResult {
  /**
   * @schema ListProjectsResult#projects
   */
  readonly projects?: Project[];

  /**
   * @schema ListProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRemoteAccessSessionsRequest
 */
export interface ListRemoteAccessSessionsRequest {
  /**
   * @schema ListRemoteAccessSessionsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListRemoteAccessSessionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRemoteAccessSessionsResult
 */
export interface ListRemoteAccessSessionsResult {
  /**
   * @schema ListRemoteAccessSessionsResult#remoteAccessSessions
   */
  readonly remoteAccessSessions?: RemoteAccessSession[];

  /**
   * @schema ListRemoteAccessSessionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRunsRequest
 */
export interface ListRunsRequest {
  /**
   * @schema ListRunsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListRunsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRunsResult
 */
export interface ListRunsResult {
  /**
   * @schema ListRunsResult#runs
   */
  readonly runs?: Run[];

  /**
   * @schema ListRunsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSamplesRequest
 */
export interface ListSamplesRequest {
  /**
   * @schema ListSamplesRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListSamplesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSamplesResult
 */
export interface ListSamplesResult {
  /**
   * @schema ListSamplesResult#samples
   */
  readonly samples?: Sample[];

  /**
   * @schema ListSamplesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSuitesRequest
 */
export interface ListSuitesRequest {
  /**
   * @schema ListSuitesRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListSuitesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSuitesResult
 */
export interface ListSuitesResult {
  /**
   * @schema ListSuitesResult#suites
   */
  readonly suites?: Suite[];

  /**
   * @schema ListSuitesResult#nextToken
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
 * @schema ListTestGridProjectsRequest
 */
export interface ListTestGridProjectsRequest {
  /**
   * @schema ListTestGridProjectsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema ListTestGridProjectsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTestGridProjectsResult
 */
export interface ListTestGridProjectsResult {
  /**
   * @schema ListTestGridProjectsResult#testGridProjects
   */
  readonly testGridProjects?: TestGridProject[];

  /**
   * @schema ListTestGridProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTestGridSessionActionsRequest
 */
export interface ListTestGridSessionActionsRequest {
  /**
   * @schema ListTestGridSessionActionsRequest#sessionArn
   */
  readonly sessionArn: string;

  /**
   * @schema ListTestGridSessionActionsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema ListTestGridSessionActionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTestGridSessionActionsResult
 */
export interface ListTestGridSessionActionsResult {
  /**
   * @schema ListTestGridSessionActionsResult#actions
   */
  readonly actions?: TestGridSessionAction[];

  /**
   * @schema ListTestGridSessionActionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTestGridSessionArtifactsRequest
 */
export interface ListTestGridSessionArtifactsRequest {
  /**
   * @schema ListTestGridSessionArtifactsRequest#sessionArn
   */
  readonly sessionArn: string;

  /**
   * @schema ListTestGridSessionArtifactsRequest#type
   */
  readonly type?: string;

  /**
   * @schema ListTestGridSessionArtifactsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema ListTestGridSessionArtifactsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTestGridSessionArtifactsResult
 */
export interface ListTestGridSessionArtifactsResult {
  /**
   * @schema ListTestGridSessionArtifactsResult#artifacts
   */
  readonly artifacts?: TestGridSessionArtifact[];

  /**
   * @schema ListTestGridSessionArtifactsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTestGridSessionsRequest
 */
export interface ListTestGridSessionsRequest {
  /**
   * @schema ListTestGridSessionsRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema ListTestGridSessionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema ListTestGridSessionsRequest#creationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListTestGridSessionsRequest#creationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListTestGridSessionsRequest#endTimeAfter
   */
  readonly endTimeAfter?: string;

  /**
   * @schema ListTestGridSessionsRequest#endTimeBefore
   */
  readonly endTimeBefore?: string;

  /**
   * @schema ListTestGridSessionsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema ListTestGridSessionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTestGridSessionsResult
 */
export interface ListTestGridSessionsResult {
  /**
   * @schema ListTestGridSessionsResult#testGridSessions
   */
  readonly testGridSessions?: TestGridSession[];

  /**
   * @schema ListTestGridSessionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTestsRequest
 */
export interface ListTestsRequest {
  /**
   * @schema ListTestsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListTestsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTestsResult
 */
export interface ListTestsResult {
  /**
   * @schema ListTestsResult#tests
   */
  readonly tests?: Test[];

  /**
   * @schema ListTestsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUniqueProblemsRequest
 */
export interface ListUniqueProblemsRequest {
  /**
   * @schema ListUniqueProblemsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListUniqueProblemsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUniqueProblemsResult
 */
export interface ListUniqueProblemsResult {
  /**
   * @schema ListUniqueProblemsResult#uniqueProblems
   */
  readonly uniqueProblems?: { [key: string]: UniqueProblem[] };

  /**
   * @schema ListUniqueProblemsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUploadsRequest
 */
export interface ListUploadsRequest {
  /**
   * @schema ListUploadsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema ListUploadsRequest#type
   */
  readonly type?: string;

  /**
   * @schema ListUploadsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUploadsResult
 */
export interface ListUploadsResult {
  /**
   * @schema ListUploadsResult#uploads
   */
  readonly uploads?: Upload[];

  /**
   * @schema ListUploadsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListVpceConfigurationsRequest
 */
export interface ListVpceConfigurationsRequest {
  /**
   * @schema ListVpceConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListVpceConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListVpceConfigurationsResult
 */
export interface ListVpceConfigurationsResult {
  /**
   * @schema ListVpceConfigurationsResult#vpceConfigurations
   */
  readonly vpceConfigurations?: VpceConfiguration[];

  /**
   * @schema ListVpceConfigurationsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PurchaseOfferingRequest
 */
export interface PurchaseOfferingRequest {
  /**
   * @schema PurchaseOfferingRequest#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema PurchaseOfferingRequest#quantity
   */
  readonly quantity?: number;

  /**
   * @schema PurchaseOfferingRequest#offeringPromotionId
   */
  readonly offeringPromotionId?: string;

}

/**
 * @schema PurchaseOfferingResult
 */
export interface PurchaseOfferingResult {
  /**
   * @schema PurchaseOfferingResult#offeringTransaction
   */
  readonly offeringTransaction?: OfferingTransaction;

}

/**
 * @schema RenewOfferingRequest
 */
export interface RenewOfferingRequest {
  /**
   * @schema RenewOfferingRequest#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema RenewOfferingRequest#quantity
   */
  readonly quantity?: number;

}

/**
 * @schema RenewOfferingResult
 */
export interface RenewOfferingResult {
  /**
   * @schema RenewOfferingResult#offeringTransaction
   */
  readonly offeringTransaction?: OfferingTransaction;

}

/**
 * @schema ScheduleRunRequest
 */
export interface ScheduleRunRequest {
  /**
   * @schema ScheduleRunRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema ScheduleRunRequest#appArn
   */
  readonly appArn?: string;

  /**
   * @schema ScheduleRunRequest#devicePoolArn
   */
  readonly devicePoolArn?: string;

  /**
   * @schema ScheduleRunRequest#deviceSelectionConfiguration
   */
  readonly deviceSelectionConfiguration?: DeviceSelectionConfiguration;

  /**
   * @schema ScheduleRunRequest#name
   */
  readonly name?: string;

  /**
   * @schema ScheduleRunRequest#test
   */
  readonly test: ScheduleRunTest;

  /**
   * @schema ScheduleRunRequest#configuration
   */
  readonly configuration?: ScheduleRunConfiguration;

  /**
   * @schema ScheduleRunRequest#executionConfiguration
   */
  readonly executionConfiguration?: ExecutionConfiguration;

}

/**
 * @schema ScheduleRunResult
 */
export interface ScheduleRunResult {
  /**
   * @schema ScheduleRunResult#run
   */
  readonly run?: Run;

}

/**
 * @schema StopJobRequest
 */
export interface StopJobRequest {
  /**
   * @schema StopJobRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema StopJobResult
 */
export interface StopJobResult {
  /**
   * @schema StopJobResult#job
   */
  readonly job?: Job;

}

/**
 * @schema StopRemoteAccessSessionRequest
 */
export interface StopRemoteAccessSessionRequest {
  /**
   * @schema StopRemoteAccessSessionRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema StopRemoteAccessSessionResult
 */
export interface StopRemoteAccessSessionResult {
  /**
   * @schema StopRemoteAccessSessionResult#remoteAccessSession
   */
  readonly remoteAccessSession?: RemoteAccessSession;

}

/**
 * @schema StopRunRequest
 */
export interface StopRunRequest {
  /**
   * @schema StopRunRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema StopRunResult
 */
export interface StopRunResult {
  /**
   * @schema StopRunResult#run
   */
  readonly run?: Run;

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
 * @schema UpdateDeviceInstanceRequest
 */
export interface UpdateDeviceInstanceRequest {
  /**
   * @schema UpdateDeviceInstanceRequest#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateDeviceInstanceRequest#profileArn
   */
  readonly profileArn?: string;

  /**
   * @schema UpdateDeviceInstanceRequest#labels
   */
  readonly labels?: string[];

}

/**
 * @schema UpdateDeviceInstanceResult
 */
export interface UpdateDeviceInstanceResult {
  /**
   * @schema UpdateDeviceInstanceResult#deviceInstance
   */
  readonly deviceInstance?: DeviceInstance;

}

/**
 * @schema UpdateDevicePoolRequest
 */
export interface UpdateDevicePoolRequest {
  /**
   * @schema UpdateDevicePoolRequest#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateDevicePoolRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateDevicePoolRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateDevicePoolRequest#rules
   */
  readonly rules?: Rule[];

  /**
   * @schema UpdateDevicePoolRequest#maxDevices
   */
  readonly maxDevices?: number;

  /**
   * @schema UpdateDevicePoolRequest#clearMaxDevices
   */
  readonly clearMaxDevices?: boolean;

}

/**
 * @schema UpdateDevicePoolResult
 */
export interface UpdateDevicePoolResult {
  /**
   * @schema UpdateDevicePoolResult#devicePool
   */
  readonly devicePool?: DevicePool;

}

/**
 * @schema UpdateInstanceProfileRequest
 */
export interface UpdateInstanceProfileRequest {
  /**
   * @schema UpdateInstanceProfileRequest#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateInstanceProfileRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateInstanceProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateInstanceProfileRequest#packageCleanup
   */
  readonly packageCleanup?: boolean;

  /**
   * @schema UpdateInstanceProfileRequest#excludeAppPackagesFromCleanup
   */
  readonly excludeAppPackagesFromCleanup?: string[];

  /**
   * @schema UpdateInstanceProfileRequest#rebootAfterUse
   */
  readonly rebootAfterUse?: boolean;

}

/**
 * @schema UpdateInstanceProfileResult
 */
export interface UpdateInstanceProfileResult {
  /**
   * @schema UpdateInstanceProfileResult#instanceProfile
   */
  readonly instanceProfile?: InstanceProfile;

}

/**
 * @schema UpdateNetworkProfileRequest
 */
export interface UpdateNetworkProfileRequest {
  /**
   * @schema UpdateNetworkProfileRequest#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateNetworkProfileRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateNetworkProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateNetworkProfileRequest#type
   */
  readonly type?: string;

  /**
   * @schema UpdateNetworkProfileRequest#uplinkBandwidthBits
   */
  readonly uplinkBandwidthBits?: number;

  /**
   * @schema UpdateNetworkProfileRequest#downlinkBandwidthBits
   */
  readonly downlinkBandwidthBits?: number;

  /**
   * @schema UpdateNetworkProfileRequest#uplinkDelayMs
   */
  readonly uplinkDelayMs?: number;

  /**
   * @schema UpdateNetworkProfileRequest#downlinkDelayMs
   */
  readonly downlinkDelayMs?: number;

  /**
   * @schema UpdateNetworkProfileRequest#uplinkJitterMs
   */
  readonly uplinkJitterMs?: number;

  /**
   * @schema UpdateNetworkProfileRequest#downlinkJitterMs
   */
  readonly downlinkJitterMs?: number;

  /**
   * @schema UpdateNetworkProfileRequest#uplinkLossPercent
   */
  readonly uplinkLossPercent?: number;

  /**
   * @schema UpdateNetworkProfileRequest#downlinkLossPercent
   */
  readonly downlinkLossPercent?: number;

}

/**
 * @schema UpdateNetworkProfileResult
 */
export interface UpdateNetworkProfileResult {
  /**
   * @schema UpdateNetworkProfileResult#networkProfile
   */
  readonly networkProfile?: NetworkProfile;

}

/**
 * @schema UpdateProjectRequest
 */
export interface UpdateProjectRequest {
  /**
   * @schema UpdateProjectRequest#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateProjectRequest#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

}

/**
 * @schema UpdateProjectResult
 */
export interface UpdateProjectResult {
  /**
   * @schema UpdateProjectResult#project
   */
  readonly project?: Project;

}

/**
 * @schema UpdateTestGridProjectRequest
 */
export interface UpdateTestGridProjectRequest {
  /**
   * @schema UpdateTestGridProjectRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema UpdateTestGridProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateTestGridProjectRequest#description
   */
  readonly description?: string;

}

/**
 * @schema UpdateTestGridProjectResult
 */
export interface UpdateTestGridProjectResult {
  /**
   * @schema UpdateTestGridProjectResult#testGridProject
   */
  readonly testGridProject?: TestGridProject;

}

/**
 * @schema UpdateUploadRequest
 */
export interface UpdateUploadRequest {
  /**
   * @schema UpdateUploadRequest#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateUploadRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateUploadRequest#contentType
   */
  readonly contentType?: string;

  /**
   * @schema UpdateUploadRequest#editContent
   */
  readonly editContent?: boolean;

}

/**
 * @schema UpdateUploadResult
 */
export interface UpdateUploadResult {
  /**
   * @schema UpdateUploadResult#upload
   */
  readonly upload?: Upload;

}

/**
 * @schema UpdateVpceConfigurationRequest
 */
export interface UpdateVpceConfigurationRequest {
  /**
   * @schema UpdateVpceConfigurationRequest#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateVpceConfigurationRequest#vpceConfigurationName
   */
  readonly vpceConfigurationName?: string;

  /**
   * @schema UpdateVpceConfigurationRequest#vpceServiceName
   */
  readonly vpceServiceName?: string;

  /**
   * @schema UpdateVpceConfigurationRequest#serviceDnsName
   */
  readonly serviceDnsName?: string;

  /**
   * @schema UpdateVpceConfigurationRequest#vpceConfigurationDescription
   */
  readonly vpceConfigurationDescription?: string;

}

/**
 * @schema UpdateVpceConfigurationResult
 */
export interface UpdateVpceConfigurationResult {
  /**
   * @schema UpdateVpceConfigurationResult#vpceConfiguration
   */
  readonly vpceConfiguration?: VpceConfiguration;

}

/**
 * @schema Rule
 */
export interface Rule {
  /**
   * @schema Rule#attribute
   */
  readonly attribute?: string;

  /**
   * @schema Rule#operator
   */
  readonly operator?: string;

  /**
   * @schema Rule#value
   */
  readonly value?: string;

}

/**
 * @schema DevicePool
 */
export interface DevicePool {
  /**
   * @schema DevicePool#arn
   */
  readonly arn?: string;

  /**
   * @schema DevicePool#name
   */
  readonly name?: string;

  /**
   * @schema DevicePool#description
   */
  readonly description?: string;

  /**
   * @schema DevicePool#type
   */
  readonly type?: string;

  /**
   * @schema DevicePool#rules
   */
  readonly rules?: Rule[];

  /**
   * @schema DevicePool#maxDevices
   */
  readonly maxDevices?: number;

}

/**
 * @schema InstanceProfile
 */
export interface InstanceProfile {
  /**
   * @schema InstanceProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema InstanceProfile#packageCleanup
   */
  readonly packageCleanup?: boolean;

  /**
   * @schema InstanceProfile#excludeAppPackagesFromCleanup
   */
  readonly excludeAppPackagesFromCleanup?: string[];

  /**
   * @schema InstanceProfile#rebootAfterUse
   */
  readonly rebootAfterUse?: boolean;

  /**
   * @schema InstanceProfile#name
   */
  readonly name?: string;

  /**
   * @schema InstanceProfile#description
   */
  readonly description?: string;

}

/**
 * @schema NetworkProfile
 */
export interface NetworkProfile {
  /**
   * @schema NetworkProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema NetworkProfile#name
   */
  readonly name?: string;

  /**
   * @schema NetworkProfile#description
   */
  readonly description?: string;

  /**
   * @schema NetworkProfile#type
   */
  readonly type?: string;

  /**
   * @schema NetworkProfile#uplinkBandwidthBits
   */
  readonly uplinkBandwidthBits?: number;

  /**
   * @schema NetworkProfile#downlinkBandwidthBits
   */
  readonly downlinkBandwidthBits?: number;

  /**
   * @schema NetworkProfile#uplinkDelayMs
   */
  readonly uplinkDelayMs?: number;

  /**
   * @schema NetworkProfile#downlinkDelayMs
   */
  readonly downlinkDelayMs?: number;

  /**
   * @schema NetworkProfile#uplinkJitterMs
   */
  readonly uplinkJitterMs?: number;

  /**
   * @schema NetworkProfile#downlinkJitterMs
   */
  readonly downlinkJitterMs?: number;

  /**
   * @schema NetworkProfile#uplinkLossPercent
   */
  readonly uplinkLossPercent?: number;

  /**
   * @schema NetworkProfile#downlinkLossPercent
   */
  readonly downlinkLossPercent?: number;

}

/**
 * @schema Project
 */
export interface Project {
  /**
   * @schema Project#arn
   */
  readonly arn?: string;

  /**
   * @schema Project#name
   */
  readonly name?: string;

  /**
   * @schema Project#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

  /**
   * @schema Project#created
   */
  readonly created?: string;

}

/**
 * @schema CreateRemoteAccessSessionConfiguration
 */
export interface CreateRemoteAccessSessionConfiguration {
  /**
   * @schema CreateRemoteAccessSessionConfiguration#billingMethod
   */
  readonly billingMethod?: string;

  /**
   * @schema CreateRemoteAccessSessionConfiguration#vpceConfigurationArns
   */
  readonly vpceConfigurationArns?: string[];

}

/**
 * @schema RemoteAccessSession
 */
export interface RemoteAccessSession {
  /**
   * @schema RemoteAccessSession#arn
   */
  readonly arn?: string;

  /**
   * @schema RemoteAccessSession#name
   */
  readonly name?: string;

  /**
   * @schema RemoteAccessSession#created
   */
  readonly created?: string;

  /**
   * @schema RemoteAccessSession#status
   */
  readonly status?: string;

  /**
   * @schema RemoteAccessSession#result
   */
  readonly result?: string;

  /**
   * @schema RemoteAccessSession#message
   */
  readonly message?: string;

  /**
   * @schema RemoteAccessSession#started
   */
  readonly started?: string;

  /**
   * @schema RemoteAccessSession#stopped
   */
  readonly stopped?: string;

  /**
   * @schema RemoteAccessSession#device
   */
  readonly device?: Device;

  /**
   * @schema RemoteAccessSession#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema RemoteAccessSession#remoteDebugEnabled
   */
  readonly remoteDebugEnabled?: boolean;

  /**
   * @schema RemoteAccessSession#remoteRecordEnabled
   */
  readonly remoteRecordEnabled?: boolean;

  /**
   * @schema RemoteAccessSession#remoteRecordAppArn
   */
  readonly remoteRecordAppArn?: string;

  /**
   * @schema RemoteAccessSession#hostAddress
   */
  readonly hostAddress?: string;

  /**
   * @schema RemoteAccessSession#clientId
   */
  readonly clientId?: string;

  /**
   * @schema RemoteAccessSession#billingMethod
   */
  readonly billingMethod?: string;

  /**
   * @schema RemoteAccessSession#deviceMinutes
   */
  readonly deviceMinutes?: DeviceMinutes;

  /**
   * @schema RemoteAccessSession#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RemoteAccessSession#deviceUdid
   */
  readonly deviceUdid?: string;

  /**
   * @schema RemoteAccessSession#interactionMode
   */
  readonly interactionMode?: string;

  /**
   * @schema RemoteAccessSession#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * @schema TestGridProject
 */
export interface TestGridProject {
  /**
   * @schema TestGridProject#arn
   */
  readonly arn?: string;

  /**
   * @schema TestGridProject#name
   */
  readonly name?: string;

  /**
   * @schema TestGridProject#description
   */
  readonly description?: string;

  /**
   * @schema TestGridProject#created
   */
  readonly created?: string;

}

/**
 * @schema Upload
 */
export interface Upload {
  /**
   * @schema Upload#arn
   */
  readonly arn?: string;

  /**
   * @schema Upload#name
   */
  readonly name?: string;

  /**
   * @schema Upload#created
   */
  readonly created?: string;

  /**
   * @schema Upload#type
   */
  readonly type?: string;

  /**
   * @schema Upload#status
   */
  readonly status?: string;

  /**
   * @schema Upload#url
   */
  readonly url?: string;

  /**
   * @schema Upload#metadata
   */
  readonly metadata?: string;

  /**
   * @schema Upload#contentType
   */
  readonly contentType?: string;

  /**
   * @schema Upload#message
   */
  readonly message?: string;

  /**
   * @schema Upload#category
   */
  readonly category?: string;

}

/**
 * @schema VpceConfiguration
 */
export interface VpceConfiguration {
  /**
   * @schema VpceConfiguration#arn
   */
  readonly arn?: string;

  /**
   * @schema VpceConfiguration#vpceConfigurationName
   */
  readonly vpceConfigurationName?: string;

  /**
   * @schema VpceConfiguration#vpceServiceName
   */
  readonly vpceServiceName?: string;

  /**
   * @schema VpceConfiguration#serviceDnsName
   */
  readonly serviceDnsName?: string;

  /**
   * @schema VpceConfiguration#vpceConfigurationDescription
   */
  readonly vpceConfigurationDescription?: string;

}

/**
 * @schema AccountSettings
 */
export interface AccountSettings {
  /**
   * @schema AccountSettings#awsAccountNumber
   */
  readonly awsAccountNumber?: string;

  /**
   * @schema AccountSettings#unmeteredDevices
   */
  readonly unmeteredDevices?: { [key: string]: number };

  /**
   * @schema AccountSettings#unmeteredRemoteAccessDevices
   */
  readonly unmeteredRemoteAccessDevices?: { [key: string]: number };

  /**
   * @schema AccountSettings#maxJobTimeoutMinutes
   */
  readonly maxJobTimeoutMinutes?: number;

  /**
   * @schema AccountSettings#trialMinutes
   */
  readonly trialMinutes?: TrialMinutes;

  /**
   * @schema AccountSettings#maxSlots
   */
  readonly maxSlots?: { [key: string]: number };

  /**
   * @schema AccountSettings#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

  /**
   * @schema AccountSettings#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * @schema Device
 */
export interface Device {
  /**
   * @schema Device#arn
   */
  readonly arn?: string;

  /**
   * @schema Device#name
   */
  readonly name?: string;

  /**
   * @schema Device#manufacturer
   */
  readonly manufacturer?: string;

  /**
   * @schema Device#model
   */
  readonly model?: string;

  /**
   * @schema Device#modelId
   */
  readonly modelId?: string;

  /**
   * @schema Device#formFactor
   */
  readonly formFactor?: string;

  /**
   * @schema Device#platform
   */
  readonly platform?: string;

  /**
   * @schema Device#os
   */
  readonly os?: string;

  /**
   * @schema Device#cpu
   */
  readonly cpu?: Cpu;

  /**
   * @schema Device#resolution
   */
  readonly resolution?: Resolution;

  /**
   * @schema Device#heapSize
   */
  readonly heapSize?: number;

  /**
   * @schema Device#memory
   */
  readonly memory?: number;

  /**
   * @schema Device#image
   */
  readonly image?: string;

  /**
   * @schema Device#carrier
   */
  readonly carrier?: string;

  /**
   * @schema Device#radio
   */
  readonly radio?: string;

  /**
   * @schema Device#remoteAccessEnabled
   */
  readonly remoteAccessEnabled?: boolean;

  /**
   * @schema Device#remoteDebugEnabled
   */
  readonly remoteDebugEnabled?: boolean;

  /**
   * @schema Device#fleetType
   */
  readonly fleetType?: string;

  /**
   * @schema Device#fleetName
   */
  readonly fleetName?: string;

  /**
   * @schema Device#instances
   */
  readonly instances?: DeviceInstance[];

  /**
   * @schema Device#availability
   */
  readonly availability?: string;

}

/**
 * @schema DeviceInstance
 */
export interface DeviceInstance {
  /**
   * @schema DeviceInstance#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceInstance#deviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema DeviceInstance#labels
   */
  readonly labels?: string[];

  /**
   * @schema DeviceInstance#status
   */
  readonly status?: string;

  /**
   * @schema DeviceInstance#udid
   */
  readonly udid?: string;

  /**
   * @schema DeviceInstance#instanceProfile
   */
  readonly instanceProfile?: InstanceProfile;

}

/**
 * @schema ScheduleRunTest
 */
export interface ScheduleRunTest {
  /**
   * @schema ScheduleRunTest#type
   */
  readonly type: string;

  /**
   * @schema ScheduleRunTest#testPackageArn
   */
  readonly testPackageArn?: string;

  /**
   * @schema ScheduleRunTest#testSpecArn
   */
  readonly testSpecArn?: string;

  /**
   * @schema ScheduleRunTest#filter
   */
  readonly filter?: string;

  /**
   * @schema ScheduleRunTest#parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema ScheduleRunConfiguration
 */
export interface ScheduleRunConfiguration {
  /**
   * @schema ScheduleRunConfiguration#extraDataPackageArn
   */
  readonly extraDataPackageArn?: string;

  /**
   * @schema ScheduleRunConfiguration#networkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema ScheduleRunConfiguration#locale
   */
  readonly locale?: string;

  /**
   * @schema ScheduleRunConfiguration#location
   */
  readonly location?: Location;

  /**
   * @schema ScheduleRunConfiguration#vpceConfigurationArns
   */
  readonly vpceConfigurationArns?: string[];

  /**
   * @schema ScheduleRunConfiguration#customerArtifactPaths
   */
  readonly customerArtifactPaths?: CustomerArtifactPaths;

  /**
   * @schema ScheduleRunConfiguration#radios
   */
  readonly radios?: Radios;

  /**
   * @schema ScheduleRunConfiguration#auxiliaryApps
   */
  readonly auxiliaryApps?: string[];

  /**
   * @schema ScheduleRunConfiguration#billingMethod
   */
  readonly billingMethod?: string;

}

/**
 * @schema DevicePoolCompatibilityResult
 */
export interface DevicePoolCompatibilityResult {
  /**
   * @schema DevicePoolCompatibilityResult#device
   */
  readonly device?: Device;

  /**
   * @schema DevicePoolCompatibilityResult#compatible
   */
  readonly compatible?: boolean;

  /**
   * @schema DevicePoolCompatibilityResult#incompatibilityMessages
   */
  readonly incompatibilityMessages?: IncompatibilityMessage[];

}

/**
 * @schema Job
 */
export interface Job {
  /**
   * @schema Job#arn
   */
  readonly arn?: string;

  /**
   * @schema Job#name
   */
  readonly name?: string;

  /**
   * @schema Job#type
   */
  readonly type?: string;

  /**
   * @schema Job#created
   */
  readonly created?: string;

  /**
   * @schema Job#status
   */
  readonly status?: string;

  /**
   * @schema Job#result
   */
  readonly result?: string;

  /**
   * @schema Job#started
   */
  readonly started?: string;

  /**
   * @schema Job#stopped
   */
  readonly stopped?: string;

  /**
   * @schema Job#counters
   */
  readonly counters?: Counters;

  /**
   * @schema Job#message
   */
  readonly message?: string;

  /**
   * @schema Job#device
   */
  readonly device?: Device;

  /**
   * @schema Job#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema Job#deviceMinutes
   */
  readonly deviceMinutes?: DeviceMinutes;

  /**
   * @schema Job#videoEndpoint
   */
  readonly videoEndpoint?: string;

  /**
   * @schema Job#videoCapture
   */
  readonly videoCapture?: boolean;

}

/**
 * @schema OfferingStatus
 */
export interface OfferingStatus {
  /**
   * @schema OfferingStatus#type
   */
  readonly type?: string;

  /**
   * @schema OfferingStatus#offering
   */
  readonly offering?: Offering;

  /**
   * @schema OfferingStatus#quantity
   */
  readonly quantity?: number;

  /**
   * @schema OfferingStatus#effectiveOn
   */
  readonly effectiveOn?: string;

}

/**
 * @schema Run
 */
export interface Run {
  /**
   * @schema Run#arn
   */
  readonly arn?: string;

  /**
   * @schema Run#name
   */
  readonly name?: string;

  /**
   * @schema Run#type
   */
  readonly type?: string;

  /**
   * @schema Run#platform
   */
  readonly platform?: string;

  /**
   * @schema Run#created
   */
  readonly created?: string;

  /**
   * @schema Run#status
   */
  readonly status?: string;

  /**
   * @schema Run#result
   */
  readonly result?: string;

  /**
   * @schema Run#started
   */
  readonly started?: string;

  /**
   * @schema Run#stopped
   */
  readonly stopped?: string;

  /**
   * @schema Run#counters
   */
  readonly counters?: Counters;

  /**
   * @schema Run#message
   */
  readonly message?: string;

  /**
   * @schema Run#totalJobs
   */
  readonly totalJobs?: number;

  /**
   * @schema Run#completedJobs
   */
  readonly completedJobs?: number;

  /**
   * @schema Run#billingMethod
   */
  readonly billingMethod?: string;

  /**
   * @schema Run#deviceMinutes
   */
  readonly deviceMinutes?: DeviceMinutes;

  /**
   * @schema Run#networkProfile
   */
  readonly networkProfile?: NetworkProfile;

  /**
   * @schema Run#parsingResultUrl
   */
  readonly parsingResultUrl?: string;

  /**
   * @schema Run#resultCode
   */
  readonly resultCode?: string;

  /**
   * @schema Run#seed
   */
  readonly seed?: number;

  /**
   * @schema Run#appUpload
   */
  readonly appUpload?: string;

  /**
   * @schema Run#eventCount
   */
  readonly eventCount?: number;

  /**
   * @schema Run#jobTimeoutMinutes
   */
  readonly jobTimeoutMinutes?: number;

  /**
   * @schema Run#devicePoolArn
   */
  readonly devicePoolArn?: string;

  /**
   * @schema Run#locale
   */
  readonly locale?: string;

  /**
   * @schema Run#radios
   */
  readonly radios?: Radios;

  /**
   * @schema Run#location
   */
  readonly location?: Location;

  /**
   * @schema Run#customerArtifactPaths
   */
  readonly customerArtifactPaths?: CustomerArtifactPaths;

  /**
   * @schema Run#webUrl
   */
  readonly webUrl?: string;

  /**
   * @schema Run#skipAppResign
   */
  readonly skipAppResign?: boolean;

  /**
   * @schema Run#testSpecArn
   */
  readonly testSpecArn?: string;

  /**
   * @schema Run#deviceSelectionResult
   */
  readonly deviceSelectionResult?: DeviceSelectionResult;

}

/**
 * @schema Suite
 */
export interface Suite {
  /**
   * @schema Suite#arn
   */
  readonly arn?: string;

  /**
   * @schema Suite#name
   */
  readonly name?: string;

  /**
   * @schema Suite#type
   */
  readonly type?: string;

  /**
   * @schema Suite#created
   */
  readonly created?: string;

  /**
   * @schema Suite#status
   */
  readonly status?: string;

  /**
   * @schema Suite#result
   */
  readonly result?: string;

  /**
   * @schema Suite#started
   */
  readonly started?: string;

  /**
   * @schema Suite#stopped
   */
  readonly stopped?: string;

  /**
   * @schema Suite#counters
   */
  readonly counters?: Counters;

  /**
   * @schema Suite#message
   */
  readonly message?: string;

  /**
   * @schema Suite#deviceMinutes
   */
  readonly deviceMinutes?: DeviceMinutes;

}

/**
 * @schema Test
 */
export interface Test {
  /**
   * @schema Test#arn
   */
  readonly arn?: string;

  /**
   * @schema Test#name
   */
  readonly name?: string;

  /**
   * @schema Test#type
   */
  readonly type?: string;

  /**
   * @schema Test#created
   */
  readonly created?: string;

  /**
   * @schema Test#status
   */
  readonly status?: string;

  /**
   * @schema Test#result
   */
  readonly result?: string;

  /**
   * @schema Test#started
   */
  readonly started?: string;

  /**
   * @schema Test#stopped
   */
  readonly stopped?: string;

  /**
   * @schema Test#counters
   */
  readonly counters?: Counters;

  /**
   * @schema Test#message
   */
  readonly message?: string;

  /**
   * @schema Test#deviceMinutes
   */
  readonly deviceMinutes?: DeviceMinutes;

}

/**
 * @schema TestGridSession
 */
export interface TestGridSession {
  /**
   * @schema TestGridSession#arn
   */
  readonly arn?: string;

  /**
   * @schema TestGridSession#status
   */
  readonly status?: string;

  /**
   * @schema TestGridSession#created
   */
  readonly created?: string;

  /**
   * @schema TestGridSession#ended
   */
  readonly ended?: string;

  /**
   * @schema TestGridSession#billingMinutes
   */
  readonly billingMinutes?: number;

  /**
   * @schema TestGridSession#seleniumProperties
   */
  readonly seleniumProperties?: string;

}

/**
 * @schema Artifact
 */
export interface Artifact {
  /**
   * @schema Artifact#arn
   */
  readonly arn?: string;

  /**
   * @schema Artifact#name
   */
  readonly name?: string;

  /**
   * @schema Artifact#type
   */
  readonly type?: string;

  /**
   * @schema Artifact#extension
   */
  readonly extension?: string;

  /**
   * @schema Artifact#url
   */
  readonly url?: string;

}

/**
 * @schema DeviceFilter
 */
export interface DeviceFilter {
  /**
   * @schema DeviceFilter#attribute
   */
  readonly attribute?: string;

  /**
   * @schema DeviceFilter#operator
   */
  readonly operator?: string;

  /**
   * @schema DeviceFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema OfferingPromotion
 */
export interface OfferingPromotion {
  /**
   * @schema OfferingPromotion#id
   */
  readonly id?: string;

  /**
   * @schema OfferingPromotion#description
   */
  readonly description?: string;

}

/**
 * @schema OfferingTransaction
 */
export interface OfferingTransaction {
  /**
   * @schema OfferingTransaction#offeringStatus
   */
  readonly offeringStatus?: OfferingStatus;

  /**
   * @schema OfferingTransaction#transactionId
   */
  readonly transactionId?: string;

  /**
   * @schema OfferingTransaction#offeringPromotionId
   */
  readonly offeringPromotionId?: string;

  /**
   * @schema OfferingTransaction#createdOn
   */
  readonly createdOn?: string;

  /**
   * @schema OfferingTransaction#cost
   */
  readonly cost?: MonetaryAmount;

}

/**
 * @schema Offering
 */
export interface Offering {
  /**
   * @schema Offering#id
   */
  readonly id?: string;

  /**
   * @schema Offering#description
   */
  readonly description?: string;

  /**
   * @schema Offering#type
   */
  readonly type?: string;

  /**
   * @schema Offering#platform
   */
  readonly platform?: string;

  /**
   * @schema Offering#recurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

}

/**
 * @schema Sample
 */
export interface Sample {
  /**
   * @schema Sample#arn
   */
  readonly arn?: string;

  /**
   * @schema Sample#type
   */
  readonly type?: string;

  /**
   * @schema Sample#url
   */
  readonly url?: string;

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
 * @schema TestGridSessionAction
 */
export interface TestGridSessionAction {
  /**
   * @schema TestGridSessionAction#action
   */
  readonly action?: string;

  /**
   * @schema TestGridSessionAction#started
   */
  readonly started?: string;

  /**
   * @schema TestGridSessionAction#duration
   */
  readonly duration?: number;

  /**
   * @schema TestGridSessionAction#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema TestGridSessionAction#requestMethod
   */
  readonly requestMethod?: string;

}

/**
 * @schema TestGridSessionArtifact
 */
export interface TestGridSessionArtifact {
  /**
   * @schema TestGridSessionArtifact#filename
   */
  readonly filename?: string;

  /**
   * @schema TestGridSessionArtifact#type
   */
  readonly type?: string;

  /**
   * @schema TestGridSessionArtifact#url
   */
  readonly url?: string;

}

/**
 * @schema UniqueProblem
 */
export interface UniqueProblem {
  /**
   * @schema UniqueProblem#message
   */
  readonly message?: string;

  /**
   * @schema UniqueProblem#problems
   */
  readonly problems?: Problem[];

}

/**
 * @schema DeviceSelectionConfiguration
 */
export interface DeviceSelectionConfiguration {
  /**
   * @schema DeviceSelectionConfiguration#filters
   */
  readonly filters: DeviceFilter[];

  /**
   * @schema DeviceSelectionConfiguration#maxDevices
   */
  readonly maxDevices: number;

}

/**
 * @schema ExecutionConfiguration
 */
export interface ExecutionConfiguration {
  /**
   * @schema ExecutionConfiguration#jobTimeoutMinutes
   */
  readonly jobTimeoutMinutes?: number;

  /**
   * @schema ExecutionConfiguration#accountsCleanup
   */
  readonly accountsCleanup?: boolean;

  /**
   * @schema ExecutionConfiguration#appPackagesCleanup
   */
  readonly appPackagesCleanup?: boolean;

  /**
   * @schema ExecutionConfiguration#videoCapture
   */
  readonly videoCapture?: boolean;

  /**
   * @schema ExecutionConfiguration#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * @schema DeviceMinutes
 */
export interface DeviceMinutes {
  /**
   * @schema DeviceMinutes#total
   */
  readonly total?: number;

  /**
   * @schema DeviceMinutes#metered
   */
  readonly metered?: number;

  /**
   * @schema DeviceMinutes#unmetered
   */
  readonly unmetered?: number;

}

/**
 * @schema TrialMinutes
 */
export interface TrialMinutes {
  /**
   * @schema TrialMinutes#total
   */
  readonly total?: number;

  /**
   * @schema TrialMinutes#remaining
   */
  readonly remaining?: number;

}

/**
 * @schema Cpu
 */
export interface Cpu {
  /**
   * @schema Cpu#frequency
   */
  readonly frequency?: string;

  /**
   * @schema Cpu#architecture
   */
  readonly architecture?: string;

  /**
   * @schema Cpu#clock
   */
  readonly clock?: number;

}

/**
 * @schema Resolution
 */
export interface Resolution {
  /**
   * @schema Resolution#width
   */
  readonly width?: number;

  /**
   * @schema Resolution#height
   */
  readonly height?: number;

}

/**
 * @schema Location
 */
export interface Location {
  /**
   * @schema Location#latitude
   */
  readonly latitude: number;

  /**
   * @schema Location#longitude
   */
  readonly longitude: number;

}

/**
 * @schema CustomerArtifactPaths
 */
export interface CustomerArtifactPaths {
  /**
   * @schema CustomerArtifactPaths#iosPaths
   */
  readonly iosPaths?: string[];

  /**
   * @schema CustomerArtifactPaths#androidPaths
   */
  readonly androidPaths?: string[];

  /**
   * @schema CustomerArtifactPaths#deviceHostPaths
   */
  readonly deviceHostPaths?: string[];

}

/**
 * @schema Radios
 */
export interface Radios {
  /**
   * @schema Radios#wifi
   */
  readonly wifi?: boolean;

  /**
   * @schema Radios#bluetooth
   */
  readonly bluetooth?: boolean;

  /**
   * @schema Radios#nfc
   */
  readonly nfc?: boolean;

  /**
   * @schema Radios#gps
   */
  readonly gps?: boolean;

}

/**
 * @schema IncompatibilityMessage
 */
export interface IncompatibilityMessage {
  /**
   * @schema IncompatibilityMessage#message
   */
  readonly message?: string;

  /**
   * @schema IncompatibilityMessage#type
   */
  readonly type?: string;

}

/**
 * @schema Counters
 */
export interface Counters {
  /**
   * @schema Counters#total
   */
  readonly total?: number;

  /**
   * @schema Counters#passed
   */
  readonly passed?: number;

  /**
   * @schema Counters#failed
   */
  readonly failed?: number;

  /**
   * @schema Counters#warned
   */
  readonly warned?: number;

  /**
   * @schema Counters#errored
   */
  readonly errored?: number;

  /**
   * @schema Counters#stopped
   */
  readonly stopped?: number;

  /**
   * @schema Counters#skipped
   */
  readonly skipped?: number;

}

/**
 * @schema DeviceSelectionResult
 */
export interface DeviceSelectionResult {
  /**
   * @schema DeviceSelectionResult#filters
   */
  readonly filters?: DeviceFilter[];

  /**
   * @schema DeviceSelectionResult#matchedDevicesCount
   */
  readonly matchedDevicesCount?: number;

  /**
   * @schema DeviceSelectionResult#maxDevices
   */
  readonly maxDevices?: number;

}

/**
 * @schema MonetaryAmount
 */
export interface MonetaryAmount {
  /**
   * @schema MonetaryAmount#amount
   */
  readonly amount?: number;

  /**
   * @schema MonetaryAmount#currencyCode
   */
  readonly currencyCode?: string;

}

/**
 * @schema RecurringCharge
 */
export interface RecurringCharge {
  /**
   * @schema RecurringCharge#cost
   */
  readonly cost?: MonetaryAmount;

  /**
   * @schema RecurringCharge#frequency
   */
  readonly frequency?: string;

}

/**
 * @schema Problem
 */
export interface Problem {
  /**
   * @schema Problem#run
   */
  readonly run?: ProblemDetail;

  /**
   * @schema Problem#job
   */
  readonly job?: ProblemDetail;

  /**
   * @schema Problem#suite
   */
  readonly suite?: ProblemDetail;

  /**
   * @schema Problem#test
   */
  readonly test?: ProblemDetail;

  /**
   * @schema Problem#device
   */
  readonly device?: Device;

  /**
   * @schema Problem#result
   */
  readonly result?: string;

  /**
   * @schema Problem#message
   */
  readonly message?: string;

}

/**
 * @schema ProblemDetail
 */
export interface ProblemDetail {
  /**
   * @schema ProblemDetail#arn
   */
  readonly arn?: string;

  /**
   * @schema ProblemDetail#name
   */
  readonly name?: string;

}
