/**
 * @schema DeviceFarmCreateDevicePoolRequest
 */
export interface DeviceFarmCreateDevicePoolRequest {
  /**
   * @schema DeviceFarmCreateDevicePoolRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateDevicePoolRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateDevicePoolRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmCreateDevicePoolRequest#rules
   */
  readonly rules: DeviceFarmRule[];

  /**
   * @schema DeviceFarmCreateDevicePoolRequest#maxDevices
   */
  readonly maxDevices?: number;

}

/**
 * @schema DeviceFarmCreateDevicePoolResult
 */
export interface DeviceFarmCreateDevicePoolResult {
  /**
   * @schema DeviceFarmCreateDevicePoolResult#devicePool
   */
  readonly devicePool?: DeviceFarmDevicePool;

}

/**
 * @schema DeviceFarmCreateInstanceProfileRequest
 */
export interface DeviceFarmCreateInstanceProfileRequest {
  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#packageCleanup
   */
  readonly packageCleanup?: boolean;

  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#excludeAppPackagesFromCleanup
   */
  readonly excludeAppPackagesFromCleanup?: string[];

  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#rebootAfterUse
   */
  readonly rebootAfterUse?: boolean;

}

/**
 * @schema DeviceFarmCreateInstanceProfileResult
 */
export interface DeviceFarmCreateInstanceProfileResult {
  /**
   * @schema DeviceFarmCreateInstanceProfileResult#instanceProfile
   */
  readonly instanceProfile?: DeviceFarmInstanceProfile;

}

/**
 * @schema DeviceFarmCreateNetworkProfileRequest
 */
export interface DeviceFarmCreateNetworkProfileRequest {
  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#uplinkBandwidthBits
   */
  readonly uplinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#downlinkBandwidthBits
   */
  readonly downlinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#uplinkDelayMs
   */
  readonly uplinkDelayMs?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#downlinkDelayMs
   */
  readonly downlinkDelayMs?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#uplinkJitterMs
   */
  readonly uplinkJitterMs?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#downlinkJitterMs
   */
  readonly downlinkJitterMs?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#uplinkLossPercent
   */
  readonly uplinkLossPercent?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#downlinkLossPercent
   */
  readonly downlinkLossPercent?: number;

}

/**
 * @schema DeviceFarmCreateNetworkProfileResult
 */
export interface DeviceFarmCreateNetworkProfileResult {
  /**
   * @schema DeviceFarmCreateNetworkProfileResult#networkProfile
   */
  readonly networkProfile?: DeviceFarmNetworkProfile;

}

/**
 * @schema DeviceFarmCreateProjectRequest
 */
export interface DeviceFarmCreateProjectRequest {
  /**
   * @schema DeviceFarmCreateProjectRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateProjectRequest#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

}

/**
 * @schema DeviceFarmCreateProjectResult
 */
export interface DeviceFarmCreateProjectResult {
  /**
   * @schema DeviceFarmCreateProjectResult#project
   */
  readonly project?: DeviceFarmProject;

}

/**
 * @schema DeviceFarmCreateRemoteAccessSessionRequest
 */
export interface DeviceFarmCreateRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#sshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#remoteDebugEnabled
   */
  readonly remoteDebugEnabled?: boolean;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#remoteRecordEnabled
   */
  readonly remoteRecordEnabled?: boolean;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#remoteRecordAppArn
   */
  readonly remoteRecordAppArn?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#clientId
   */
  readonly clientId?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#configuration
   */
  readonly configuration?: DeviceFarmCreateRemoteAccessSessionConfiguration;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#interactionMode
   */
  readonly interactionMode?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * @schema DeviceFarmCreateRemoteAccessSessionResult
 */
export interface DeviceFarmCreateRemoteAccessSessionResult {
  /**
   * @schema DeviceFarmCreateRemoteAccessSessionResult#remoteAccessSession
   */
  readonly remoteAccessSession?: DeviceFarmRemoteAccessSession;

}

/**
 * @schema DeviceFarmCreateTestGridProjectRequest
 */
export interface DeviceFarmCreateTestGridProjectRequest {
  /**
   * @schema DeviceFarmCreateTestGridProjectRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateTestGridProjectRequest#description
   */
  readonly description?: string;

}

/**
 * @schema DeviceFarmCreateTestGridProjectResult
 */
export interface DeviceFarmCreateTestGridProjectResult {
  /**
   * @schema DeviceFarmCreateTestGridProjectResult#testGridProject
   */
  readonly testGridProject?: DeviceFarmTestGridProject;

}

/**
 * @schema DeviceFarmCreateTestGridUrlRequest
 */
export interface DeviceFarmCreateTestGridUrlRequest {
  /**
   * @schema DeviceFarmCreateTestGridUrlRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateTestGridUrlRequest#expiresInSeconds
   */
  readonly expiresInSeconds: number;

}

/**
 * @schema DeviceFarmCreateTestGridUrlResult
 */
export interface DeviceFarmCreateTestGridUrlResult {
  /**
   * @schema DeviceFarmCreateTestGridUrlResult#url
   */
  readonly url?: string;

  /**
   * @schema DeviceFarmCreateTestGridUrlResult#expires
   */
  readonly expires?: string;

}

/**
 * @schema DeviceFarmCreateUploadRequest
 */
export interface DeviceFarmCreateUploadRequest {
  /**
   * @schema DeviceFarmCreateUploadRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateUploadRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateUploadRequest#type
   */
  readonly type: string;

  /**
   * @schema DeviceFarmCreateUploadRequest#contentType
   */
  readonly contentType?: string;

}

/**
 * @schema DeviceFarmCreateUploadResult
 */
export interface DeviceFarmCreateUploadResult {
  /**
   * @schema DeviceFarmCreateUploadResult#upload
   */
  readonly upload?: DeviceFarmUpload;

}

/**
 * @schema DeviceFarmCreateVpceConfigurationRequest
 */
export interface DeviceFarmCreateVpceConfigurationRequest {
  /**
   * @schema DeviceFarmCreateVpceConfigurationRequest#vpceConfigurationName
   */
  readonly vpceConfigurationName: string;

  /**
   * @schema DeviceFarmCreateVpceConfigurationRequest#vpceServiceName
   */
  readonly vpceServiceName: string;

  /**
   * @schema DeviceFarmCreateVpceConfigurationRequest#serviceDnsName
   */
  readonly serviceDnsName: string;

  /**
   * @schema DeviceFarmCreateVpceConfigurationRequest#vpceConfigurationDescription
   */
  readonly vpceConfigurationDescription?: string;

}

/**
 * @schema DeviceFarmCreateVpceConfigurationResult
 */
export interface DeviceFarmCreateVpceConfigurationResult {
  /**
   * @schema DeviceFarmCreateVpceConfigurationResult#vpceConfiguration
   */
  readonly vpceConfiguration?: DeviceFarmVpceConfiguration;

}

/**
 * @schema DeviceFarmDeleteDevicePoolRequest
 */
export interface DeviceFarmDeleteDevicePoolRequest {
  /**
   * @schema DeviceFarmDeleteDevicePoolRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmDeleteDevicePoolResult
 */
export interface DeviceFarmDeleteDevicePoolResult {
}

/**
 * @schema DeviceFarmDeleteInstanceProfileRequest
 */
export interface DeviceFarmDeleteInstanceProfileRequest {
  /**
   * @schema DeviceFarmDeleteInstanceProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmDeleteInstanceProfileResult
 */
export interface DeviceFarmDeleteInstanceProfileResult {
}

/**
 * @schema DeviceFarmDeleteNetworkProfileRequest
 */
export interface DeviceFarmDeleteNetworkProfileRequest {
  /**
   * @schema DeviceFarmDeleteNetworkProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmDeleteNetworkProfileResult
 */
export interface DeviceFarmDeleteNetworkProfileResult {
}

/**
 * @schema DeviceFarmDeleteProjectRequest
 */
export interface DeviceFarmDeleteProjectRequest {
  /**
   * @schema DeviceFarmDeleteProjectRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmDeleteProjectResult
 */
export interface DeviceFarmDeleteProjectResult {
}

/**
 * @schema DeviceFarmDeleteRemoteAccessSessionRequest
 */
export interface DeviceFarmDeleteRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmDeleteRemoteAccessSessionRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmDeleteRemoteAccessSessionResult
 */
export interface DeviceFarmDeleteRemoteAccessSessionResult {
}

/**
 * @schema DeviceFarmDeleteRunRequest
 */
export interface DeviceFarmDeleteRunRequest {
  /**
   * @schema DeviceFarmDeleteRunRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmDeleteRunResult
 */
export interface DeviceFarmDeleteRunResult {
}

/**
 * @schema DeviceFarmDeleteTestGridProjectRequest
 */
export interface DeviceFarmDeleteTestGridProjectRequest {
  /**
   * @schema DeviceFarmDeleteTestGridProjectRequest#projectArn
   */
  readonly projectArn: string;

}

/**
 * @schema DeviceFarmDeleteTestGridProjectResult
 */
export interface DeviceFarmDeleteTestGridProjectResult {
}

/**
 * @schema DeviceFarmDeleteUploadRequest
 */
export interface DeviceFarmDeleteUploadRequest {
  /**
   * @schema DeviceFarmDeleteUploadRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmDeleteUploadResult
 */
export interface DeviceFarmDeleteUploadResult {
}

/**
 * @schema DeviceFarmDeleteVpceConfigurationRequest
 */
export interface DeviceFarmDeleteVpceConfigurationRequest {
  /**
   * @schema DeviceFarmDeleteVpceConfigurationRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmDeleteVpceConfigurationResult
 */
export interface DeviceFarmDeleteVpceConfigurationResult {
}

/**
 * @schema DeviceFarmGetAccountSettingsRequest
 */
export interface DeviceFarmGetAccountSettingsRequest {
}

/**
 * @schema DeviceFarmGetAccountSettingsResult
 */
export interface DeviceFarmGetAccountSettingsResult {
  /**
   * @schema DeviceFarmGetAccountSettingsResult#accountSettings
   */
  readonly accountSettings?: DeviceFarmAccountSettings;

}

/**
 * @schema DeviceFarmGetDeviceRequest
 */
export interface DeviceFarmGetDeviceRequest {
  /**
   * @schema DeviceFarmGetDeviceRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetDeviceResult
 */
export interface DeviceFarmGetDeviceResult {
  /**
   * @schema DeviceFarmGetDeviceResult#device
   */
  readonly device?: DeviceFarmDevice;

}

/**
 * @schema DeviceFarmGetDeviceInstanceRequest
 */
export interface DeviceFarmGetDeviceInstanceRequest {
  /**
   * @schema DeviceFarmGetDeviceInstanceRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetDeviceInstanceResult
 */
export interface DeviceFarmGetDeviceInstanceResult {
  /**
   * @schema DeviceFarmGetDeviceInstanceResult#deviceInstance
   */
  readonly deviceInstance?: DeviceFarmDeviceInstance;

}

/**
 * @schema DeviceFarmGetDevicePoolRequest
 */
export interface DeviceFarmGetDevicePoolRequest {
  /**
   * @schema DeviceFarmGetDevicePoolRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetDevicePoolResult
 */
export interface DeviceFarmGetDevicePoolResult {
  /**
   * @schema DeviceFarmGetDevicePoolResult#devicePool
   */
  readonly devicePool?: DeviceFarmDevicePool;

}

/**
 * @schema DeviceFarmGetDevicePoolCompatibilityRequest
 */
export interface DeviceFarmGetDevicePoolCompatibilityRequest {
  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#devicePoolArn
   */
  readonly devicePoolArn: string;

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#appArn
   */
  readonly appArn?: string;

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#testType
   */
  readonly testType?: string;

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#test
   */
  readonly test?: DeviceFarmScheduleRunTest;

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#configuration
   */
  readonly configuration?: DeviceFarmScheduleRunConfiguration;

}

/**
 * @schema DeviceFarmGetDevicePoolCompatibilityResult
 */
export interface DeviceFarmGetDevicePoolCompatibilityResult {
  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityResult#compatibleDevices
   */
  readonly compatibleDevices?: DeviceFarmDevicePoolCompatibilityResult[];

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityResult#incompatibleDevices
   */
  readonly incompatibleDevices?: DeviceFarmDevicePoolCompatibilityResult[];

}

/**
 * @schema DeviceFarmGetInstanceProfileRequest
 */
export interface DeviceFarmGetInstanceProfileRequest {
  /**
   * @schema DeviceFarmGetInstanceProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetInstanceProfileResult
 */
export interface DeviceFarmGetInstanceProfileResult {
  /**
   * @schema DeviceFarmGetInstanceProfileResult#instanceProfile
   */
  readonly instanceProfile?: DeviceFarmInstanceProfile;

}

/**
 * @schema DeviceFarmGetJobRequest
 */
export interface DeviceFarmGetJobRequest {
  /**
   * @schema DeviceFarmGetJobRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetJobResult
 */
export interface DeviceFarmGetJobResult {
  /**
   * @schema DeviceFarmGetJobResult#job
   */
  readonly job?: DeviceFarmJob;

}

/**
 * @schema DeviceFarmGetNetworkProfileRequest
 */
export interface DeviceFarmGetNetworkProfileRequest {
  /**
   * @schema DeviceFarmGetNetworkProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetNetworkProfileResult
 */
export interface DeviceFarmGetNetworkProfileResult {
  /**
   * @schema DeviceFarmGetNetworkProfileResult#networkProfile
   */
  readonly networkProfile?: DeviceFarmNetworkProfile;

}

/**
 * @schema DeviceFarmGetOfferingStatusRequest
 */
export interface DeviceFarmGetOfferingStatusRequest {
  /**
   * @schema DeviceFarmGetOfferingStatusRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmGetOfferingStatusResult
 */
export interface DeviceFarmGetOfferingStatusResult {
  /**
   * @schema DeviceFarmGetOfferingStatusResult#current
   */
  readonly current?: { [key: string]: DeviceFarmOfferingStatus };

  /**
   * @schema DeviceFarmGetOfferingStatusResult#nextPeriod
   */
  readonly nextPeriod?: { [key: string]: DeviceFarmOfferingStatus };

  /**
   * @schema DeviceFarmGetOfferingStatusResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmGetProjectRequest
 */
export interface DeviceFarmGetProjectRequest {
  /**
   * @schema DeviceFarmGetProjectRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetProjectResult
 */
export interface DeviceFarmGetProjectResult {
  /**
   * @schema DeviceFarmGetProjectResult#project
   */
  readonly project?: DeviceFarmProject;

}

/**
 * @schema DeviceFarmGetRemoteAccessSessionRequest
 */
export interface DeviceFarmGetRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmGetRemoteAccessSessionRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetRemoteAccessSessionResult
 */
export interface DeviceFarmGetRemoteAccessSessionResult {
  /**
   * @schema DeviceFarmGetRemoteAccessSessionResult#remoteAccessSession
   */
  readonly remoteAccessSession?: DeviceFarmRemoteAccessSession;

}

/**
 * @schema DeviceFarmGetRunRequest
 */
export interface DeviceFarmGetRunRequest {
  /**
   * @schema DeviceFarmGetRunRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetRunResult
 */
export interface DeviceFarmGetRunResult {
  /**
   * @schema DeviceFarmGetRunResult#run
   */
  readonly run?: DeviceFarmRun;

}

/**
 * @schema DeviceFarmGetSuiteRequest
 */
export interface DeviceFarmGetSuiteRequest {
  /**
   * @schema DeviceFarmGetSuiteRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetSuiteResult
 */
export interface DeviceFarmGetSuiteResult {
  /**
   * @schema DeviceFarmGetSuiteResult#suite
   */
  readonly suite?: DeviceFarmSuite;

}

/**
 * @schema DeviceFarmGetTestRequest
 */
export interface DeviceFarmGetTestRequest {
  /**
   * @schema DeviceFarmGetTestRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetTestResult
 */
export interface DeviceFarmGetTestResult {
  /**
   * @schema DeviceFarmGetTestResult#test
   */
  readonly test?: DeviceFarmTest;

}

/**
 * @schema DeviceFarmGetTestGridProjectRequest
 */
export interface DeviceFarmGetTestGridProjectRequest {
  /**
   * @schema DeviceFarmGetTestGridProjectRequest#projectArn
   */
  readonly projectArn: string;

}

/**
 * @schema DeviceFarmGetTestGridProjectResult
 */
export interface DeviceFarmGetTestGridProjectResult {
  /**
   * @schema DeviceFarmGetTestGridProjectResult#testGridProject
   */
  readonly testGridProject?: DeviceFarmTestGridProject;

}

/**
 * @schema DeviceFarmGetTestGridSessionRequest
 */
export interface DeviceFarmGetTestGridSessionRequest {
  /**
   * @schema DeviceFarmGetTestGridSessionRequest#projectArn
   */
  readonly projectArn?: string;

  /**
   * @schema DeviceFarmGetTestGridSessionRequest#sessionId
   */
  readonly sessionId?: string;

  /**
   * @schema DeviceFarmGetTestGridSessionRequest#sessionArn
   */
  readonly sessionArn?: string;

}

/**
 * @schema DeviceFarmGetTestGridSessionResult
 */
export interface DeviceFarmGetTestGridSessionResult {
  /**
   * @schema DeviceFarmGetTestGridSessionResult#testGridSession
   */
  readonly testGridSession?: DeviceFarmTestGridSession;

}

/**
 * @schema DeviceFarmGetUploadRequest
 */
export interface DeviceFarmGetUploadRequest {
  /**
   * @schema DeviceFarmGetUploadRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetUploadResult
 */
export interface DeviceFarmGetUploadResult {
  /**
   * @schema DeviceFarmGetUploadResult#upload
   */
  readonly upload?: DeviceFarmUpload;

}

/**
 * @schema DeviceFarmGetVpceConfigurationRequest
 */
export interface DeviceFarmGetVpceConfigurationRequest {
  /**
   * @schema DeviceFarmGetVpceConfigurationRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmGetVpceConfigurationResult
 */
export interface DeviceFarmGetVpceConfigurationResult {
  /**
   * @schema DeviceFarmGetVpceConfigurationResult#vpceConfiguration
   */
  readonly vpceConfiguration?: DeviceFarmVpceConfiguration;

}

/**
 * @schema DeviceFarmInstallToRemoteAccessSessionRequest
 */
export interface DeviceFarmInstallToRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmInstallToRemoteAccessSessionRequest#remoteAccessSessionArn
   */
  readonly remoteAccessSessionArn: string;

  /**
   * @schema DeviceFarmInstallToRemoteAccessSessionRequest#appArn
   */
  readonly appArn: string;

}

/**
 * @schema DeviceFarmInstallToRemoteAccessSessionResult
 */
export interface DeviceFarmInstallToRemoteAccessSessionResult {
  /**
   * @schema DeviceFarmInstallToRemoteAccessSessionResult#appUpload
   */
  readonly appUpload?: DeviceFarmUpload;

}

/**
 * @schema DeviceFarmListArtifactsRequest
 */
export interface DeviceFarmListArtifactsRequest {
  /**
   * @schema DeviceFarmListArtifactsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListArtifactsRequest#type
   */
  readonly type: string;

  /**
   * @schema DeviceFarmListArtifactsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListArtifactsResult
 */
export interface DeviceFarmListArtifactsResult {
  /**
   * @schema DeviceFarmListArtifactsResult#artifacts
   */
  readonly artifacts?: DeviceFarmArtifact[];

  /**
   * @schema DeviceFarmListArtifactsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListDeviceInstancesRequest
 */
export interface DeviceFarmListDeviceInstancesRequest {
  /**
   * @schema DeviceFarmListDeviceInstancesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DeviceFarmListDeviceInstancesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListDeviceInstancesResult
 */
export interface DeviceFarmListDeviceInstancesResult {
  /**
   * @schema DeviceFarmListDeviceInstancesResult#deviceInstances
   */
  readonly deviceInstances?: DeviceFarmDeviceInstance[];

  /**
   * @schema DeviceFarmListDeviceInstancesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListDevicePoolsRequest
 */
export interface DeviceFarmListDevicePoolsRequest {
  /**
   * @schema DeviceFarmListDevicePoolsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListDevicePoolsRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmListDevicePoolsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListDevicePoolsResult
 */
export interface DeviceFarmListDevicePoolsResult {
  /**
   * @schema DeviceFarmListDevicePoolsResult#devicePools
   */
  readonly devicePools?: DeviceFarmDevicePool[];

  /**
   * @schema DeviceFarmListDevicePoolsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListDevicesRequest
 */
export interface DeviceFarmListDevicesRequest {
  /**
   * @schema DeviceFarmListDevicesRequest#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmListDevicesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DeviceFarmListDevicesRequest#filters
   */
  readonly filters?: DeviceFarmDeviceFilter[];

}

/**
 * @schema DeviceFarmListDevicesResult
 */
export interface DeviceFarmListDevicesResult {
  /**
   * @schema DeviceFarmListDevicesResult#devices
   */
  readonly devices?: DeviceFarmDevice[];

  /**
   * @schema DeviceFarmListDevicesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListInstanceProfilesRequest
 */
export interface DeviceFarmListInstanceProfilesRequest {
  /**
   * @schema DeviceFarmListInstanceProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DeviceFarmListInstanceProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListInstanceProfilesResult
 */
export interface DeviceFarmListInstanceProfilesResult {
  /**
   * @schema DeviceFarmListInstanceProfilesResult#instanceProfiles
   */
  readonly instanceProfiles?: DeviceFarmInstanceProfile[];

  /**
   * @schema DeviceFarmListInstanceProfilesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListJobsRequest
 */
export interface DeviceFarmListJobsRequest {
  /**
   * @schema DeviceFarmListJobsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListJobsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListJobsResult
 */
export interface DeviceFarmListJobsResult {
  /**
   * @schema DeviceFarmListJobsResult#jobs
   */
  readonly jobs?: DeviceFarmJob[];

  /**
   * @schema DeviceFarmListJobsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListNetworkProfilesRequest
 */
export interface DeviceFarmListNetworkProfilesRequest {
  /**
   * @schema DeviceFarmListNetworkProfilesRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListNetworkProfilesRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmListNetworkProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListNetworkProfilesResult
 */
export interface DeviceFarmListNetworkProfilesResult {
  /**
   * @schema DeviceFarmListNetworkProfilesResult#networkProfiles
   */
  readonly networkProfiles?: DeviceFarmNetworkProfile[];

  /**
   * @schema DeviceFarmListNetworkProfilesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListOfferingPromotionsRequest
 */
export interface DeviceFarmListOfferingPromotionsRequest {
  /**
   * @schema DeviceFarmListOfferingPromotionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListOfferingPromotionsResult
 */
export interface DeviceFarmListOfferingPromotionsResult {
  /**
   * @schema DeviceFarmListOfferingPromotionsResult#offeringPromotions
   */
  readonly offeringPromotions?: DeviceFarmOfferingPromotion[];

  /**
   * @schema DeviceFarmListOfferingPromotionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListOfferingTransactionsRequest
 */
export interface DeviceFarmListOfferingTransactionsRequest {
  /**
   * @schema DeviceFarmListOfferingTransactionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListOfferingTransactionsResult
 */
export interface DeviceFarmListOfferingTransactionsResult {
  /**
   * @schema DeviceFarmListOfferingTransactionsResult#offeringTransactions
   */
  readonly offeringTransactions?: DeviceFarmOfferingTransaction[];

  /**
   * @schema DeviceFarmListOfferingTransactionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListOfferingsRequest
 */
export interface DeviceFarmListOfferingsRequest {
  /**
   * @schema DeviceFarmListOfferingsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListOfferingsResult
 */
export interface DeviceFarmListOfferingsResult {
  /**
   * @schema DeviceFarmListOfferingsResult#offerings
   */
  readonly offerings?: DeviceFarmOffering[];

  /**
   * @schema DeviceFarmListOfferingsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListProjectsRequest
 */
export interface DeviceFarmListProjectsRequest {
  /**
   * @schema DeviceFarmListProjectsRequest#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListProjectsResult
 */
export interface DeviceFarmListProjectsResult {
  /**
   * @schema DeviceFarmListProjectsResult#projects
   */
  readonly projects?: DeviceFarmProject[];

  /**
   * @schema DeviceFarmListProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListRemoteAccessSessionsRequest
 */
export interface DeviceFarmListRemoteAccessSessionsRequest {
  /**
   * @schema DeviceFarmListRemoteAccessSessionsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListRemoteAccessSessionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListRemoteAccessSessionsResult
 */
export interface DeviceFarmListRemoteAccessSessionsResult {
  /**
   * @schema DeviceFarmListRemoteAccessSessionsResult#remoteAccessSessions
   */
  readonly remoteAccessSessions?: DeviceFarmRemoteAccessSession[];

  /**
   * @schema DeviceFarmListRemoteAccessSessionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListRunsRequest
 */
export interface DeviceFarmListRunsRequest {
  /**
   * @schema DeviceFarmListRunsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListRunsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListRunsResult
 */
export interface DeviceFarmListRunsResult {
  /**
   * @schema DeviceFarmListRunsResult#runs
   */
  readonly runs?: DeviceFarmRun[];

  /**
   * @schema DeviceFarmListRunsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListSamplesRequest
 */
export interface DeviceFarmListSamplesRequest {
  /**
   * @schema DeviceFarmListSamplesRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListSamplesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListSamplesResult
 */
export interface DeviceFarmListSamplesResult {
  /**
   * @schema DeviceFarmListSamplesResult#samples
   */
  readonly samples?: DeviceFarmSample[];

  /**
   * @schema DeviceFarmListSamplesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListSuitesRequest
 */
export interface DeviceFarmListSuitesRequest {
  /**
   * @schema DeviceFarmListSuitesRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListSuitesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListSuitesResult
 */
export interface DeviceFarmListSuitesResult {
  /**
   * @schema DeviceFarmListSuitesResult#suites
   */
  readonly suites?: DeviceFarmSuite[];

  /**
   * @schema DeviceFarmListSuitesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTagsForResourceRequest
 */
export interface DeviceFarmListTagsForResourceRequest {
  /**
   * @schema DeviceFarmListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema DeviceFarmListTagsForResourceResponse
 */
export interface DeviceFarmListTagsForResourceResponse {
  /**
   * @schema DeviceFarmListTagsForResourceResponse#Tags
   */
  readonly tags?: DeviceFarmTag[];

}

/**
 * @schema DeviceFarmListTestGridProjectsRequest
 */
export interface DeviceFarmListTestGridProjectsRequest {
  /**
   * @schema DeviceFarmListTestGridProjectsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema DeviceFarmListTestGridProjectsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTestGridProjectsResult
 */
export interface DeviceFarmListTestGridProjectsResult {
  /**
   * @schema DeviceFarmListTestGridProjectsResult#testGridProjects
   */
  readonly testGridProjects?: DeviceFarmTestGridProject[];

  /**
   * @schema DeviceFarmListTestGridProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTestGridSessionActionsRequest
 */
export interface DeviceFarmListTestGridSessionActionsRequest {
  /**
   * @schema DeviceFarmListTestGridSessionActionsRequest#sessionArn
   */
  readonly sessionArn: string;

  /**
   * @schema DeviceFarmListTestGridSessionActionsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema DeviceFarmListTestGridSessionActionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTestGridSessionActionsResult
 */
export interface DeviceFarmListTestGridSessionActionsResult {
  /**
   * @schema DeviceFarmListTestGridSessionActionsResult#actions
   */
  readonly actions?: DeviceFarmTestGridSessionAction[];

  /**
   * @schema DeviceFarmListTestGridSessionActionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTestGridSessionArtifactsRequest
 */
export interface DeviceFarmListTestGridSessionArtifactsRequest {
  /**
   * @schema DeviceFarmListTestGridSessionArtifactsRequest#sessionArn
   */
  readonly sessionArn: string;

  /**
   * @schema DeviceFarmListTestGridSessionArtifactsRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmListTestGridSessionArtifactsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema DeviceFarmListTestGridSessionArtifactsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTestGridSessionArtifactsResult
 */
export interface DeviceFarmListTestGridSessionArtifactsResult {
  /**
   * @schema DeviceFarmListTestGridSessionArtifactsResult#artifacts
   */
  readonly artifacts?: DeviceFarmTestGridSessionArtifact[];

  /**
   * @schema DeviceFarmListTestGridSessionArtifactsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTestGridSessionsRequest
 */
export interface DeviceFarmListTestGridSessionsRequest {
  /**
   * @schema DeviceFarmListTestGridSessionsRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#creationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#creationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#endTimeAfter
   */
  readonly endTimeAfter?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#endTimeBefore
   */
  readonly endTimeBefore?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTestGridSessionsResult
 */
export interface DeviceFarmListTestGridSessionsResult {
  /**
   * @schema DeviceFarmListTestGridSessionsResult#testGridSessions
   */
  readonly testGridSessions?: DeviceFarmTestGridSession[];

  /**
   * @schema DeviceFarmListTestGridSessionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTestsRequest
 */
export interface DeviceFarmListTestsRequest {
  /**
   * @schema DeviceFarmListTestsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListTestsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListTestsResult
 */
export interface DeviceFarmListTestsResult {
  /**
   * @schema DeviceFarmListTestsResult#tests
   */
  readonly tests?: DeviceFarmTest[];

  /**
   * @schema DeviceFarmListTestsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListUniqueProblemsRequest
 */
export interface DeviceFarmListUniqueProblemsRequest {
  /**
   * @schema DeviceFarmListUniqueProblemsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListUniqueProblemsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListUniqueProblemsResult
 */
export interface DeviceFarmListUniqueProblemsResult {
  /**
   * @schema DeviceFarmListUniqueProblemsResult#uniqueProblems
   */
  readonly uniqueProblems?: { [key: string]: DeviceFarmUniqueProblem[] };

  /**
   * @schema DeviceFarmListUniqueProblemsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListUploadsRequest
 */
export interface DeviceFarmListUploadsRequest {
  /**
   * @schema DeviceFarmListUploadsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListUploadsRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmListUploadsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListUploadsResult
 */
export interface DeviceFarmListUploadsResult {
  /**
   * @schema DeviceFarmListUploadsResult#uploads
   */
  readonly uploads?: DeviceFarmUpload[];

  /**
   * @schema DeviceFarmListUploadsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListVpceConfigurationsRequest
 */
export interface DeviceFarmListVpceConfigurationsRequest {
  /**
   * @schema DeviceFarmListVpceConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DeviceFarmListVpceConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmListVpceConfigurationsResult
 */
export interface DeviceFarmListVpceConfigurationsResult {
  /**
   * @schema DeviceFarmListVpceConfigurationsResult#vpceConfigurations
   */
  readonly vpceConfigurations?: DeviceFarmVpceConfiguration[];

  /**
   * @schema DeviceFarmListVpceConfigurationsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeviceFarmPurchaseOfferingRequest
 */
export interface DeviceFarmPurchaseOfferingRequest {
  /**
   * @schema DeviceFarmPurchaseOfferingRequest#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema DeviceFarmPurchaseOfferingRequest#quantity
   */
  readonly quantity?: number;

  /**
   * @schema DeviceFarmPurchaseOfferingRequest#offeringPromotionId
   */
  readonly offeringPromotionId?: string;

}

/**
 * @schema DeviceFarmPurchaseOfferingResult
 */
export interface DeviceFarmPurchaseOfferingResult {
  /**
   * @schema DeviceFarmPurchaseOfferingResult#offeringTransaction
   */
  readonly offeringTransaction?: DeviceFarmOfferingTransaction;

}

/**
 * @schema DeviceFarmRenewOfferingRequest
 */
export interface DeviceFarmRenewOfferingRequest {
  /**
   * @schema DeviceFarmRenewOfferingRequest#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema DeviceFarmRenewOfferingRequest#quantity
   */
  readonly quantity?: number;

}

/**
 * @schema DeviceFarmRenewOfferingResult
 */
export interface DeviceFarmRenewOfferingResult {
  /**
   * @schema DeviceFarmRenewOfferingResult#offeringTransaction
   */
  readonly offeringTransaction?: DeviceFarmOfferingTransaction;

}

/**
 * @schema DeviceFarmScheduleRunRequest
 */
export interface DeviceFarmScheduleRunRequest {
  /**
   * @schema DeviceFarmScheduleRunRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmScheduleRunRequest#appArn
   */
  readonly appArn?: string;

  /**
   * @schema DeviceFarmScheduleRunRequest#devicePoolArn
   */
  readonly devicePoolArn?: string;

  /**
   * @schema DeviceFarmScheduleRunRequest#deviceSelectionConfiguration
   */
  readonly deviceSelectionConfiguration?: DeviceFarmDeviceSelectionConfiguration;

  /**
   * @schema DeviceFarmScheduleRunRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmScheduleRunRequest#test
   */
  readonly test: DeviceFarmScheduleRunTest;

  /**
   * @schema DeviceFarmScheduleRunRequest#configuration
   */
  readonly configuration?: DeviceFarmScheduleRunConfiguration;

  /**
   * @schema DeviceFarmScheduleRunRequest#executionConfiguration
   */
  readonly executionConfiguration?: DeviceFarmExecutionConfiguration;

}

/**
 * @schema DeviceFarmScheduleRunResult
 */
export interface DeviceFarmScheduleRunResult {
  /**
   * @schema DeviceFarmScheduleRunResult#run
   */
  readonly run?: DeviceFarmRun;

}

/**
 * @schema DeviceFarmStopJobRequest
 */
export interface DeviceFarmStopJobRequest {
  /**
   * @schema DeviceFarmStopJobRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmStopJobResult
 */
export interface DeviceFarmStopJobResult {
  /**
   * @schema DeviceFarmStopJobResult#job
   */
  readonly job?: DeviceFarmJob;

}

/**
 * @schema DeviceFarmStopRemoteAccessSessionRequest
 */
export interface DeviceFarmStopRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmStopRemoteAccessSessionRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmStopRemoteAccessSessionResult
 */
export interface DeviceFarmStopRemoteAccessSessionResult {
  /**
   * @schema DeviceFarmStopRemoteAccessSessionResult#remoteAccessSession
   */
  readonly remoteAccessSession?: DeviceFarmRemoteAccessSession;

}

/**
 * @schema DeviceFarmStopRunRequest
 */
export interface DeviceFarmStopRunRequest {
  /**
   * @schema DeviceFarmStopRunRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeviceFarmStopRunResult
 */
export interface DeviceFarmStopRunResult {
  /**
   * @schema DeviceFarmStopRunResult#run
   */
  readonly run?: DeviceFarmRun;

}

/**
 * @schema DeviceFarmTagResourceRequest
 */
export interface DeviceFarmTagResourceRequest {
  /**
   * @schema DeviceFarmTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema DeviceFarmTagResourceRequest#Tags
   */
  readonly tags: DeviceFarmTag[];

}

/**
 * @schema DeviceFarmTagResourceResponse
 */
export interface DeviceFarmTagResourceResponse {
}

/**
 * @schema DeviceFarmUntagResourceRequest
 */
export interface DeviceFarmUntagResourceRequest {
  /**
   * @schema DeviceFarmUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema DeviceFarmUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DeviceFarmUntagResourceResponse
 */
export interface DeviceFarmUntagResourceResponse {
}

/**
 * @schema DeviceFarmUpdateDeviceInstanceRequest
 */
export interface DeviceFarmUpdateDeviceInstanceRequest {
  /**
   * @schema DeviceFarmUpdateDeviceInstanceRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateDeviceInstanceRequest#profileArn
   */
  readonly profileArn?: string;

  /**
   * @schema DeviceFarmUpdateDeviceInstanceRequest#labels
   */
  readonly labels?: string[];

}

/**
 * @schema DeviceFarmUpdateDeviceInstanceResult
 */
export interface DeviceFarmUpdateDeviceInstanceResult {
  /**
   * @schema DeviceFarmUpdateDeviceInstanceResult#deviceInstance
   */
  readonly deviceInstance?: DeviceFarmDeviceInstance;

}

/**
 * @schema DeviceFarmUpdateDevicePoolRequest
 */
export interface DeviceFarmUpdateDevicePoolRequest {
  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#rules
   */
  readonly rules?: DeviceFarmRule[];

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#maxDevices
   */
  readonly maxDevices?: number;

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#clearMaxDevices
   */
  readonly clearMaxDevices?: boolean;

}

/**
 * @schema DeviceFarmUpdateDevicePoolResult
 */
export interface DeviceFarmUpdateDevicePoolResult {
  /**
   * @schema DeviceFarmUpdateDevicePoolResult#devicePool
   */
  readonly devicePool?: DeviceFarmDevicePool;

}

/**
 * @schema DeviceFarmUpdateInstanceProfileRequest
 */
export interface DeviceFarmUpdateInstanceProfileRequest {
  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#packageCleanup
   */
  readonly packageCleanup?: boolean;

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#excludeAppPackagesFromCleanup
   */
  readonly excludeAppPackagesFromCleanup?: string[];

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#rebootAfterUse
   */
  readonly rebootAfterUse?: boolean;

}

/**
 * @schema DeviceFarmUpdateInstanceProfileResult
 */
export interface DeviceFarmUpdateInstanceProfileResult {
  /**
   * @schema DeviceFarmUpdateInstanceProfileResult#instanceProfile
   */
  readonly instanceProfile?: DeviceFarmInstanceProfile;

}

/**
 * @schema DeviceFarmUpdateNetworkProfileRequest
 */
export interface DeviceFarmUpdateNetworkProfileRequest {
  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#uplinkBandwidthBits
   */
  readonly uplinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#downlinkBandwidthBits
   */
  readonly downlinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#uplinkDelayMs
   */
  readonly uplinkDelayMs?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#downlinkDelayMs
   */
  readonly downlinkDelayMs?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#uplinkJitterMs
   */
  readonly uplinkJitterMs?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#downlinkJitterMs
   */
  readonly downlinkJitterMs?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#uplinkLossPercent
   */
  readonly uplinkLossPercent?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#downlinkLossPercent
   */
  readonly downlinkLossPercent?: number;

}

/**
 * @schema DeviceFarmUpdateNetworkProfileResult
 */
export interface DeviceFarmUpdateNetworkProfileResult {
  /**
   * @schema DeviceFarmUpdateNetworkProfileResult#networkProfile
   */
  readonly networkProfile?: DeviceFarmNetworkProfile;

}

/**
 * @schema DeviceFarmUpdateProjectRequest
 */
export interface DeviceFarmUpdateProjectRequest {
  /**
   * @schema DeviceFarmUpdateProjectRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateProjectRequest#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

}

/**
 * @schema DeviceFarmUpdateProjectResult
 */
export interface DeviceFarmUpdateProjectResult {
  /**
   * @schema DeviceFarmUpdateProjectResult#project
   */
  readonly project?: DeviceFarmProject;

}

/**
 * @schema DeviceFarmUpdateTestGridProjectRequest
 */
export interface DeviceFarmUpdateTestGridProjectRequest {
  /**
   * @schema DeviceFarmUpdateTestGridProjectRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmUpdateTestGridProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateTestGridProjectRequest#description
   */
  readonly description?: string;

}

/**
 * @schema DeviceFarmUpdateTestGridProjectResult
 */
export interface DeviceFarmUpdateTestGridProjectResult {
  /**
   * @schema DeviceFarmUpdateTestGridProjectResult#testGridProject
   */
  readonly testGridProject?: DeviceFarmTestGridProject;

}

/**
 * @schema DeviceFarmUpdateUploadRequest
 */
export interface DeviceFarmUpdateUploadRequest {
  /**
   * @schema DeviceFarmUpdateUploadRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateUploadRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateUploadRequest#contentType
   */
  readonly contentType?: string;

  /**
   * @schema DeviceFarmUpdateUploadRequest#editContent
   */
  readonly editContent?: boolean;

}

/**
 * @schema DeviceFarmUpdateUploadResult
 */
export interface DeviceFarmUpdateUploadResult {
  /**
   * @schema DeviceFarmUpdateUploadResult#upload
   */
  readonly upload?: DeviceFarmUpload;

}

/**
 * @schema DeviceFarmUpdateVpceConfigurationRequest
 */
export interface DeviceFarmUpdateVpceConfigurationRequest {
  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#vpceConfigurationName
   */
  readonly vpceConfigurationName?: string;

  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#vpceServiceName
   */
  readonly vpceServiceName?: string;

  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#serviceDnsName
   */
  readonly serviceDnsName?: string;

  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#vpceConfigurationDescription
   */
  readonly vpceConfigurationDescription?: string;

}

/**
 * @schema DeviceFarmUpdateVpceConfigurationResult
 */
export interface DeviceFarmUpdateVpceConfigurationResult {
  /**
   * @schema DeviceFarmUpdateVpceConfigurationResult#vpceConfiguration
   */
  readonly vpceConfiguration?: DeviceFarmVpceConfiguration;

}

/**
 * @schema DeviceFarmRule
 */
export interface DeviceFarmRule {
  /**
   * @schema DeviceFarmRule#attribute
   */
  readonly attribute?: string;

  /**
   * @schema DeviceFarmRule#operator
   */
  readonly operator?: string;

  /**
   * @schema DeviceFarmRule#value
   */
  readonly value?: string;

}

/**
 * @schema DeviceFarmDevicePool
 */
export interface DeviceFarmDevicePool {
  /**
   * @schema DeviceFarmDevicePool#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmDevicePool#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmDevicePool#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmDevicePool#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmDevicePool#rules
   */
  readonly rules?: DeviceFarmRule[];

  /**
   * @schema DeviceFarmDevicePool#maxDevices
   */
  readonly maxDevices?: number;

}

/**
 * @schema DeviceFarmInstanceProfile
 */
export interface DeviceFarmInstanceProfile {
  /**
   * @schema DeviceFarmInstanceProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmInstanceProfile#packageCleanup
   */
  readonly packageCleanup?: boolean;

  /**
   * @schema DeviceFarmInstanceProfile#excludeAppPackagesFromCleanup
   */
  readonly excludeAppPackagesFromCleanup?: string[];

  /**
   * @schema DeviceFarmInstanceProfile#rebootAfterUse
   */
  readonly rebootAfterUse?: boolean;

  /**
   * @schema DeviceFarmInstanceProfile#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmInstanceProfile#description
   */
  readonly description?: string;

}

/**
 * @schema DeviceFarmNetworkProfile
 */
export interface DeviceFarmNetworkProfile {
  /**
   * @schema DeviceFarmNetworkProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmNetworkProfile#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmNetworkProfile#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmNetworkProfile#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmNetworkProfile#uplinkBandwidthBits
   */
  readonly uplinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmNetworkProfile#downlinkBandwidthBits
   */
  readonly downlinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmNetworkProfile#uplinkDelayMs
   */
  readonly uplinkDelayMs?: number;

  /**
   * @schema DeviceFarmNetworkProfile#downlinkDelayMs
   */
  readonly downlinkDelayMs?: number;

  /**
   * @schema DeviceFarmNetworkProfile#uplinkJitterMs
   */
  readonly uplinkJitterMs?: number;

  /**
   * @schema DeviceFarmNetworkProfile#downlinkJitterMs
   */
  readonly downlinkJitterMs?: number;

  /**
   * @schema DeviceFarmNetworkProfile#uplinkLossPercent
   */
  readonly uplinkLossPercent?: number;

  /**
   * @schema DeviceFarmNetworkProfile#downlinkLossPercent
   */
  readonly downlinkLossPercent?: number;

}

/**
 * @schema DeviceFarmProject
 */
export interface DeviceFarmProject {
  /**
   * @schema DeviceFarmProject#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmProject#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmProject#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmProject#created
   */
  readonly created?: string;

}

/**
 * @schema DeviceFarmCreateRemoteAccessSessionConfiguration
 */
export interface DeviceFarmCreateRemoteAccessSessionConfiguration {
  /**
   * @schema DeviceFarmCreateRemoteAccessSessionConfiguration#billingMethod
   */
  readonly billingMethod?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionConfiguration#vpceConfigurationArns
   */
  readonly vpceConfigurationArns?: string[];

}

/**
 * @schema DeviceFarmRemoteAccessSession
 */
export interface DeviceFarmRemoteAccessSession {
  /**
   * @schema DeviceFarmRemoteAccessSession#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#device
   */
  readonly device?: DeviceFarmDevice;

  /**
   * @schema DeviceFarmRemoteAccessSession#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#remoteDebugEnabled
   */
  readonly remoteDebugEnabled?: boolean;

  /**
   * @schema DeviceFarmRemoteAccessSession#remoteRecordEnabled
   */
  readonly remoteRecordEnabled?: boolean;

  /**
   * @schema DeviceFarmRemoteAccessSession#remoteRecordAppArn
   */
  readonly remoteRecordAppArn?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#hostAddress
   */
  readonly hostAddress?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#clientId
   */
  readonly clientId?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#billingMethod
   */
  readonly billingMethod?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

  /**
   * @schema DeviceFarmRemoteAccessSession#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#deviceUdid
   */
  readonly deviceUdid?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#interactionMode
   */
  readonly interactionMode?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * @schema DeviceFarmTestGridProject
 */
export interface DeviceFarmTestGridProject {
  /**
   * @schema DeviceFarmTestGridProject#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmTestGridProject#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmTestGridProject#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmTestGridProject#created
   */
  readonly created?: string;

}

/**
 * @schema DeviceFarmUpload
 */
export interface DeviceFarmUpload {
  /**
   * @schema DeviceFarmUpload#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmUpload#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpload#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmUpload#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmUpload#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmUpload#url
   */
  readonly url?: string;

  /**
   * @schema DeviceFarmUpload#metadata
   */
  readonly metadata?: string;

  /**
   * @schema DeviceFarmUpload#contentType
   */
  readonly contentType?: string;

  /**
   * @schema DeviceFarmUpload#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmUpload#category
   */
  readonly category?: string;

}

/**
 * @schema DeviceFarmVpceConfiguration
 */
export interface DeviceFarmVpceConfiguration {
  /**
   * @schema DeviceFarmVpceConfiguration#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmVpceConfiguration#vpceConfigurationName
   */
  readonly vpceConfigurationName?: string;

  /**
   * @schema DeviceFarmVpceConfiguration#vpceServiceName
   */
  readonly vpceServiceName?: string;

  /**
   * @schema DeviceFarmVpceConfiguration#serviceDnsName
   */
  readonly serviceDnsName?: string;

  /**
   * @schema DeviceFarmVpceConfiguration#vpceConfigurationDescription
   */
  readonly vpceConfigurationDescription?: string;

}

/**
 * @schema DeviceFarmAccountSettings
 */
export interface DeviceFarmAccountSettings {
  /**
   * @schema DeviceFarmAccountSettings#awsAccountNumber
   */
  readonly awsAccountNumber?: string;

  /**
   * @schema DeviceFarmAccountSettings#unmeteredDevices
   */
  readonly unmeteredDevices?: { [key: string]: number };

  /**
   * @schema DeviceFarmAccountSettings#unmeteredRemoteAccessDevices
   */
  readonly unmeteredRemoteAccessDevices?: { [key: string]: number };

  /**
   * @schema DeviceFarmAccountSettings#maxJobTimeoutMinutes
   */
  readonly maxJobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmAccountSettings#trialMinutes
   */
  readonly trialMinutes?: DeviceFarmTrialMinutes;

  /**
   * @schema DeviceFarmAccountSettings#maxSlots
   */
  readonly maxSlots?: { [key: string]: number };

  /**
   * @schema DeviceFarmAccountSettings#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmAccountSettings#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * @schema DeviceFarmDevice
 */
export interface DeviceFarmDevice {
  /**
   * @schema DeviceFarmDevice#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmDevice#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmDevice#manufacturer
   */
  readonly manufacturer?: string;

  /**
   * @schema DeviceFarmDevice#model
   */
  readonly model?: string;

  /**
   * @schema DeviceFarmDevice#modelId
   */
  readonly modelId?: string;

  /**
   * @schema DeviceFarmDevice#formFactor
   */
  readonly formFactor?: string;

  /**
   * @schema DeviceFarmDevice#platform
   */
  readonly platform?: string;

  /**
   * @schema DeviceFarmDevice#os
   */
  readonly os?: string;

  /**
   * @schema DeviceFarmDevice#cpu
   */
  readonly cpu?: DeviceFarmCpu;

  /**
   * @schema DeviceFarmDevice#resolution
   */
  readonly resolution?: DeviceFarmResolution;

  /**
   * @schema DeviceFarmDevice#heapSize
   */
  readonly heapSize?: number;

  /**
   * @schema DeviceFarmDevice#memory
   */
  readonly memory?: number;

  /**
   * @schema DeviceFarmDevice#image
   */
  readonly image?: string;

  /**
   * @schema DeviceFarmDevice#carrier
   */
  readonly carrier?: string;

  /**
   * @schema DeviceFarmDevice#radio
   */
  readonly radio?: string;

  /**
   * @schema DeviceFarmDevice#remoteAccessEnabled
   */
  readonly remoteAccessEnabled?: boolean;

  /**
   * @schema DeviceFarmDevice#remoteDebugEnabled
   */
  readonly remoteDebugEnabled?: boolean;

  /**
   * @schema DeviceFarmDevice#fleetType
   */
  readonly fleetType?: string;

  /**
   * @schema DeviceFarmDevice#fleetName
   */
  readonly fleetName?: string;

  /**
   * @schema DeviceFarmDevice#instances
   */
  readonly instances?: DeviceFarmDeviceInstance[];

  /**
   * @schema DeviceFarmDevice#availability
   */
  readonly availability?: string;

}

/**
 * @schema DeviceFarmDeviceInstance
 */
export interface DeviceFarmDeviceInstance {
  /**
   * @schema DeviceFarmDeviceInstance#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmDeviceInstance#deviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema DeviceFarmDeviceInstance#labels
   */
  readonly labels?: string[];

  /**
   * @schema DeviceFarmDeviceInstance#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmDeviceInstance#udid
   */
  readonly udid?: string;

  /**
   * @schema DeviceFarmDeviceInstance#instanceProfile
   */
  readonly instanceProfile?: DeviceFarmInstanceProfile;

}

/**
 * @schema DeviceFarmScheduleRunTest
 */
export interface DeviceFarmScheduleRunTest {
  /**
   * @schema DeviceFarmScheduleRunTest#type
   */
  readonly type: string;

  /**
   * @schema DeviceFarmScheduleRunTest#testPackageArn
   */
  readonly testPackageArn?: string;

  /**
   * @schema DeviceFarmScheduleRunTest#testSpecArn
   */
  readonly testSpecArn?: string;

  /**
   * @schema DeviceFarmScheduleRunTest#filter
   */
  readonly filter?: string;

  /**
   * @schema DeviceFarmScheduleRunTest#parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema DeviceFarmScheduleRunConfiguration
 */
export interface DeviceFarmScheduleRunConfiguration {
  /**
   * @schema DeviceFarmScheduleRunConfiguration#extraDataPackageArn
   */
  readonly extraDataPackageArn?: string;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#networkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#locale
   */
  readonly locale?: string;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#location
   */
  readonly location?: DeviceFarmLocation;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#vpceConfigurationArns
   */
  readonly vpceConfigurationArns?: string[];

  /**
   * @schema DeviceFarmScheduleRunConfiguration#customerArtifactPaths
   */
  readonly customerArtifactPaths?: DeviceFarmCustomerArtifactPaths;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#radios
   */
  readonly radios?: DeviceFarmRadios;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#auxiliaryApps
   */
  readonly auxiliaryApps?: string[];

  /**
   * @schema DeviceFarmScheduleRunConfiguration#billingMethod
   */
  readonly billingMethod?: string;

}

/**
 * @schema DeviceFarmDevicePoolCompatibilityResult
 */
export interface DeviceFarmDevicePoolCompatibilityResult {
  /**
   * @schema DeviceFarmDevicePoolCompatibilityResult#device
   */
  readonly device?: DeviceFarmDevice;

  /**
   * @schema DeviceFarmDevicePoolCompatibilityResult#compatible
   */
  readonly compatible?: boolean;

  /**
   * @schema DeviceFarmDevicePoolCompatibilityResult#incompatibilityMessages
   */
  readonly incompatibilityMessages?: DeviceFarmIncompatibilityMessage[];

}

/**
 * @schema DeviceFarmJob
 */
export interface DeviceFarmJob {
  /**
   * @schema DeviceFarmJob#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmJob#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmJob#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmJob#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmJob#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmJob#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmJob#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmJob#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmJob#counters
   */
  readonly counters?: DeviceFarmCounters;

  /**
   * @schema DeviceFarmJob#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmJob#device
   */
  readonly device?: DeviceFarmDevice;

  /**
   * @schema DeviceFarmJob#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema DeviceFarmJob#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

  /**
   * @schema DeviceFarmJob#videoEndpoint
   */
  readonly videoEndpoint?: string;

  /**
   * @schema DeviceFarmJob#videoCapture
   */
  readonly videoCapture?: boolean;

}

/**
 * @schema DeviceFarmOfferingStatus
 */
export interface DeviceFarmOfferingStatus {
  /**
   * @schema DeviceFarmOfferingStatus#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmOfferingStatus#offering
   */
  readonly offering?: DeviceFarmOffering;

  /**
   * @schema DeviceFarmOfferingStatus#quantity
   */
  readonly quantity?: number;

  /**
   * @schema DeviceFarmOfferingStatus#effectiveOn
   */
  readonly effectiveOn?: string;

}

/**
 * @schema DeviceFarmRun
 */
export interface DeviceFarmRun {
  /**
   * @schema DeviceFarmRun#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmRun#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmRun#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmRun#platform
   */
  readonly platform?: string;

  /**
   * @schema DeviceFarmRun#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmRun#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmRun#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmRun#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmRun#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmRun#counters
   */
  readonly counters?: DeviceFarmCounters;

  /**
   * @schema DeviceFarmRun#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmRun#totalJobs
   */
  readonly totalJobs?: number;

  /**
   * @schema DeviceFarmRun#completedJobs
   */
  readonly completedJobs?: number;

  /**
   * @schema DeviceFarmRun#billingMethod
   */
  readonly billingMethod?: string;

  /**
   * @schema DeviceFarmRun#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

  /**
   * @schema DeviceFarmRun#networkProfile
   */
  readonly networkProfile?: DeviceFarmNetworkProfile;

  /**
   * @schema DeviceFarmRun#parsingResultUrl
   */
  readonly parsingResultUrl?: string;

  /**
   * @schema DeviceFarmRun#resultCode
   */
  readonly resultCode?: string;

  /**
   * @schema DeviceFarmRun#seed
   */
  readonly seed?: number;

  /**
   * @schema DeviceFarmRun#appUpload
   */
  readonly appUpload?: string;

  /**
   * @schema DeviceFarmRun#eventCount
   */
  readonly eventCount?: number;

  /**
   * @schema DeviceFarmRun#jobTimeoutMinutes
   */
  readonly jobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmRun#devicePoolArn
   */
  readonly devicePoolArn?: string;

  /**
   * @schema DeviceFarmRun#locale
   */
  readonly locale?: string;

  /**
   * @schema DeviceFarmRun#radios
   */
  readonly radios?: DeviceFarmRadios;

  /**
   * @schema DeviceFarmRun#location
   */
  readonly location?: DeviceFarmLocation;

  /**
   * @schema DeviceFarmRun#customerArtifactPaths
   */
  readonly customerArtifactPaths?: DeviceFarmCustomerArtifactPaths;

  /**
   * @schema DeviceFarmRun#webUrl
   */
  readonly webUrl?: string;

  /**
   * @schema DeviceFarmRun#skipAppResign
   */
  readonly skipAppResign?: boolean;

  /**
   * @schema DeviceFarmRun#testSpecArn
   */
  readonly testSpecArn?: string;

  /**
   * @schema DeviceFarmRun#deviceSelectionResult
   */
  readonly deviceSelectionResult?: DeviceFarmDeviceSelectionResult;

}

/**
 * @schema DeviceFarmSuite
 */
export interface DeviceFarmSuite {
  /**
   * @schema DeviceFarmSuite#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmSuite#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmSuite#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmSuite#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmSuite#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmSuite#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmSuite#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmSuite#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmSuite#counters
   */
  readonly counters?: DeviceFarmCounters;

  /**
   * @schema DeviceFarmSuite#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmSuite#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

}

/**
 * @schema DeviceFarmTest
 */
export interface DeviceFarmTest {
  /**
   * @schema DeviceFarmTest#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmTest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmTest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmTest#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmTest#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmTest#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmTest#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmTest#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmTest#counters
   */
  readonly counters?: DeviceFarmCounters;

  /**
   * @schema DeviceFarmTest#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmTest#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

}

/**
 * @schema DeviceFarmTestGridSession
 */
export interface DeviceFarmTestGridSession {
  /**
   * @schema DeviceFarmTestGridSession#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmTestGridSession#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmTestGridSession#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmTestGridSession#ended
   */
  readonly ended?: string;

  /**
   * @schema DeviceFarmTestGridSession#billingMinutes
   */
  readonly billingMinutes?: number;

  /**
   * @schema DeviceFarmTestGridSession#seleniumProperties
   */
  readonly seleniumProperties?: string;

}

/**
 * @schema DeviceFarmArtifact
 */
export interface DeviceFarmArtifact {
  /**
   * @schema DeviceFarmArtifact#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmArtifact#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmArtifact#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmArtifact#extension
   */
  readonly extension?: string;

  /**
   * @schema DeviceFarmArtifact#url
   */
  readonly url?: string;

}

/**
 * @schema DeviceFarmDeviceFilter
 */
export interface DeviceFarmDeviceFilter {
  /**
   * @schema DeviceFarmDeviceFilter#attribute
   */
  readonly attribute?: string;

  /**
   * @schema DeviceFarmDeviceFilter#operator
   */
  readonly operator?: string;

  /**
   * @schema DeviceFarmDeviceFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema DeviceFarmOfferingPromotion
 */
export interface DeviceFarmOfferingPromotion {
  /**
   * @schema DeviceFarmOfferingPromotion#id
   */
  readonly id?: string;

  /**
   * @schema DeviceFarmOfferingPromotion#description
   */
  readonly description?: string;

}

/**
 * @schema DeviceFarmOfferingTransaction
 */
export interface DeviceFarmOfferingTransaction {
  /**
   * @schema DeviceFarmOfferingTransaction#offeringStatus
   */
  readonly offeringStatus?: DeviceFarmOfferingStatus;

  /**
   * @schema DeviceFarmOfferingTransaction#transactionId
   */
  readonly transactionId?: string;

  /**
   * @schema DeviceFarmOfferingTransaction#offeringPromotionId
   */
  readonly offeringPromotionId?: string;

  /**
   * @schema DeviceFarmOfferingTransaction#createdOn
   */
  readonly createdOn?: string;

  /**
   * @schema DeviceFarmOfferingTransaction#cost
   */
  readonly cost?: DeviceFarmMonetaryAmount;

}

/**
 * @schema DeviceFarmOffering
 */
export interface DeviceFarmOffering {
  /**
   * @schema DeviceFarmOffering#id
   */
  readonly id?: string;

  /**
   * @schema DeviceFarmOffering#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmOffering#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmOffering#platform
   */
  readonly platform?: string;

  /**
   * @schema DeviceFarmOffering#recurringCharges
   */
  readonly recurringCharges?: DeviceFarmRecurringCharge[];

}

/**
 * @schema DeviceFarmSample
 */
export interface DeviceFarmSample {
  /**
   * @schema DeviceFarmSample#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmSample#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmSample#url
   */
  readonly url?: string;

}

/**
 * @schema DeviceFarmTag
 */
export interface DeviceFarmTag {
  /**
   * @schema DeviceFarmTag#Key
   */
  readonly key: string;

  /**
   * @schema DeviceFarmTag#Value
   */
  readonly value: string;

}

/**
 * @schema DeviceFarmTestGridSessionAction
 */
export interface DeviceFarmTestGridSessionAction {
  /**
   * @schema DeviceFarmTestGridSessionAction#action
   */
  readonly action?: string;

  /**
   * @schema DeviceFarmTestGridSessionAction#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmTestGridSessionAction#duration
   */
  readonly duration?: number;

  /**
   * @schema DeviceFarmTestGridSessionAction#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema DeviceFarmTestGridSessionAction#requestMethod
   */
  readonly requestMethod?: string;

}

/**
 * @schema DeviceFarmTestGridSessionArtifact
 */
export interface DeviceFarmTestGridSessionArtifact {
  /**
   * @schema DeviceFarmTestGridSessionArtifact#filename
   */
  readonly filename?: string;

  /**
   * @schema DeviceFarmTestGridSessionArtifact#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmTestGridSessionArtifact#url
   */
  readonly url?: string;

}

/**
 * @schema DeviceFarmUniqueProblem
 */
export interface DeviceFarmUniqueProblem {
  /**
   * @schema DeviceFarmUniqueProblem#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmUniqueProblem#problems
   */
  readonly problems?: DeviceFarmProblem[];

}

/**
 * @schema DeviceFarmDeviceSelectionConfiguration
 */
export interface DeviceFarmDeviceSelectionConfiguration {
  /**
   * @schema DeviceFarmDeviceSelectionConfiguration#filters
   */
  readonly filters: DeviceFarmDeviceFilter[];

  /**
   * @schema DeviceFarmDeviceSelectionConfiguration#maxDevices
   */
  readonly maxDevices: number;

}

/**
 * @schema DeviceFarmExecutionConfiguration
 */
export interface DeviceFarmExecutionConfiguration {
  /**
   * @schema DeviceFarmExecutionConfiguration#jobTimeoutMinutes
   */
  readonly jobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmExecutionConfiguration#accountsCleanup
   */
  readonly accountsCleanup?: boolean;

  /**
   * @schema DeviceFarmExecutionConfiguration#appPackagesCleanup
   */
  readonly appPackagesCleanup?: boolean;

  /**
   * @schema DeviceFarmExecutionConfiguration#videoCapture
   */
  readonly videoCapture?: boolean;

  /**
   * @schema DeviceFarmExecutionConfiguration#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * @schema DeviceFarmDeviceMinutes
 */
export interface DeviceFarmDeviceMinutes {
  /**
   * @schema DeviceFarmDeviceMinutes#total
   */
  readonly total?: number;

  /**
   * @schema DeviceFarmDeviceMinutes#metered
   */
  readonly metered?: number;

  /**
   * @schema DeviceFarmDeviceMinutes#unmetered
   */
  readonly unmetered?: number;

}

/**
 * @schema DeviceFarmTrialMinutes
 */
export interface DeviceFarmTrialMinutes {
  /**
   * @schema DeviceFarmTrialMinutes#total
   */
  readonly total?: number;

  /**
   * @schema DeviceFarmTrialMinutes#remaining
   */
  readonly remaining?: number;

}

/**
 * @schema DeviceFarmCpu
 */
export interface DeviceFarmCpu {
  /**
   * @schema DeviceFarmCpu#frequency
   */
  readonly frequency?: string;

  /**
   * @schema DeviceFarmCpu#architecture
   */
  readonly architecture?: string;

  /**
   * @schema DeviceFarmCpu#clock
   */
  readonly clock?: number;

}

/**
 * @schema DeviceFarmResolution
 */
export interface DeviceFarmResolution {
  /**
   * @schema DeviceFarmResolution#width
   */
  readonly width?: number;

  /**
   * @schema DeviceFarmResolution#height
   */
  readonly height?: number;

}

/**
 * @schema DeviceFarmLocation
 */
export interface DeviceFarmLocation {
  /**
   * @schema DeviceFarmLocation#latitude
   */
  readonly latitude: number;

  /**
   * @schema DeviceFarmLocation#longitude
   */
  readonly longitude: number;

}

/**
 * @schema DeviceFarmCustomerArtifactPaths
 */
export interface DeviceFarmCustomerArtifactPaths {
  /**
   * @schema DeviceFarmCustomerArtifactPaths#iosPaths
   */
  readonly iosPaths?: string[];

  /**
   * @schema DeviceFarmCustomerArtifactPaths#androidPaths
   */
  readonly androidPaths?: string[];

  /**
   * @schema DeviceFarmCustomerArtifactPaths#deviceHostPaths
   */
  readonly deviceHostPaths?: string[];

}

/**
 * @schema DeviceFarmRadios
 */
export interface DeviceFarmRadios {
  /**
   * @schema DeviceFarmRadios#wifi
   */
  readonly wifi?: boolean;

  /**
   * @schema DeviceFarmRadios#bluetooth
   */
  readonly bluetooth?: boolean;

  /**
   * @schema DeviceFarmRadios#nfc
   */
  readonly nfc?: boolean;

  /**
   * @schema DeviceFarmRadios#gps
   */
  readonly gps?: boolean;

}

/**
 * @schema DeviceFarmIncompatibilityMessage
 */
export interface DeviceFarmIncompatibilityMessage {
  /**
   * @schema DeviceFarmIncompatibilityMessage#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmIncompatibilityMessage#type
   */
  readonly type?: string;

}

/**
 * @schema DeviceFarmCounters
 */
export interface DeviceFarmCounters {
  /**
   * @schema DeviceFarmCounters#total
   */
  readonly total?: number;

  /**
   * @schema DeviceFarmCounters#passed
   */
  readonly passed?: number;

  /**
   * @schema DeviceFarmCounters#failed
   */
  readonly failed?: number;

  /**
   * @schema DeviceFarmCounters#warned
   */
  readonly warned?: number;

  /**
   * @schema DeviceFarmCounters#errored
   */
  readonly errored?: number;

  /**
   * @schema DeviceFarmCounters#stopped
   */
  readonly stopped?: number;

  /**
   * @schema DeviceFarmCounters#skipped
   */
  readonly skipped?: number;

}

/**
 * @schema DeviceFarmDeviceSelectionResult
 */
export interface DeviceFarmDeviceSelectionResult {
  /**
   * @schema DeviceFarmDeviceSelectionResult#filters
   */
  readonly filters?: DeviceFarmDeviceFilter[];

  /**
   * @schema DeviceFarmDeviceSelectionResult#matchedDevicesCount
   */
  readonly matchedDevicesCount?: number;

  /**
   * @schema DeviceFarmDeviceSelectionResult#maxDevices
   */
  readonly maxDevices?: number;

}

/**
 * @schema DeviceFarmMonetaryAmount
 */
export interface DeviceFarmMonetaryAmount {
  /**
   * @schema DeviceFarmMonetaryAmount#amount
   */
  readonly amount?: number;

  /**
   * @schema DeviceFarmMonetaryAmount#currencyCode
   */
  readonly currencyCode?: string;

}

/**
 * @schema DeviceFarmRecurringCharge
 */
export interface DeviceFarmRecurringCharge {
  /**
   * @schema DeviceFarmRecurringCharge#cost
   */
  readonly cost?: DeviceFarmMonetaryAmount;

  /**
   * @schema DeviceFarmRecurringCharge#frequency
   */
  readonly frequency?: string;

}

/**
 * @schema DeviceFarmProblem
 */
export interface DeviceFarmProblem {
  /**
   * @schema DeviceFarmProblem#run
   */
  readonly run?: DeviceFarmProblemDetail;

  /**
   * @schema DeviceFarmProblem#job
   */
  readonly job?: DeviceFarmProblemDetail;

  /**
   * @schema DeviceFarmProblem#suite
   */
  readonly suite?: DeviceFarmProblemDetail;

  /**
   * @schema DeviceFarmProblem#test
   */
  readonly test?: DeviceFarmProblemDetail;

  /**
   * @schema DeviceFarmProblem#device
   */
  readonly device?: DeviceFarmDevice;

  /**
   * @schema DeviceFarmProblem#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmProblem#message
   */
  readonly message?: string;

}

/**
 * @schema DeviceFarmProblemDetail
 */
export interface DeviceFarmProblemDetail {
  /**
   * @schema DeviceFarmProblemDetail#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmProblemDetail#name
   */
  readonly name?: string;

}
