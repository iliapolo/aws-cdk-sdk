/**
 * @schema LightsailAllocateStaticIpRequest
 */
export interface LightsailAllocateStaticIpRequest {
  /**
   * @schema LightsailAllocateStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * @schema LightsailAllocateStaticIpResult
 */
export interface LightsailAllocateStaticIpResult {
  /**
   * @schema LightsailAllocateStaticIpResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailAttachCertificateToDistributionRequest
 */
export interface LightsailAttachCertificateToDistributionRequest {
  /**
   * @schema LightsailAttachCertificateToDistributionRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema LightsailAttachCertificateToDistributionRequest#certificateName
   */
  readonly certificateName: string;

}

/**
 * @schema LightsailAttachCertificateToDistributionResult
 */
export interface LightsailAttachCertificateToDistributionResult {
  /**
   * @schema LightsailAttachCertificateToDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailAttachDiskRequest
 */
export interface LightsailAttachDiskRequest {
  /**
   * @schema LightsailAttachDiskRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema LightsailAttachDiskRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailAttachDiskRequest#diskPath
   */
  readonly diskPath: string;

}

/**
 * @schema LightsailAttachDiskResult
 */
export interface LightsailAttachDiskResult {
  /**
   * @schema LightsailAttachDiskResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailAttachInstancesToLoadBalancerRequest
 */
export interface LightsailAttachInstancesToLoadBalancerRequest {
  /**
   * @schema LightsailAttachInstancesToLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailAttachInstancesToLoadBalancerRequest#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * @schema LightsailAttachInstancesToLoadBalancerResult
 */
export interface LightsailAttachInstancesToLoadBalancerResult {
  /**
   * @schema LightsailAttachInstancesToLoadBalancerResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailAttachLoadBalancerTlsCertificateRequest
 */
export interface LightsailAttachLoadBalancerTlsCertificateRequest {
  /**
   * @schema LightsailAttachLoadBalancerTlsCertificateRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailAttachLoadBalancerTlsCertificateRequest#certificateName
   */
  readonly certificateName: string;

}

/**
 * @schema LightsailAttachLoadBalancerTlsCertificateResult
 */
export interface LightsailAttachLoadBalancerTlsCertificateResult {
  /**
   * @schema LightsailAttachLoadBalancerTlsCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailAttachStaticIpRequest
 */
export interface LightsailAttachStaticIpRequest {
  /**
   * @schema LightsailAttachStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

  /**
   * @schema LightsailAttachStaticIpRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailAttachStaticIpResult
 */
export interface LightsailAttachStaticIpResult {
  /**
   * @schema LightsailAttachStaticIpResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCloseInstancePublicPortsRequest
 */
export interface LightsailCloseInstancePublicPortsRequest {
  /**
   * @schema LightsailCloseInstancePublicPortsRequest#portInfo
   */
  readonly portInfo: LightsailPortInfo;

  /**
   * @schema LightsailCloseInstancePublicPortsRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailCloseInstancePublicPortsResult
 */
export interface LightsailCloseInstancePublicPortsResult {
  /**
   * @schema LightsailCloseInstancePublicPortsResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailCopySnapshotRequest
 */
export interface LightsailCopySnapshotRequest {
  /**
   * @schema LightsailCopySnapshotRequest#sourceSnapshotName
   */
  readonly sourceSnapshotName?: string;

  /**
   * @schema LightsailCopySnapshotRequest#sourceResourceName
   */
  readonly sourceResourceName?: string;

  /**
   * @schema LightsailCopySnapshotRequest#restoreDate
   */
  readonly restoreDate?: string;

  /**
   * @schema LightsailCopySnapshotRequest#useLatestRestorableAutoSnapshot
   */
  readonly useLatestRestorableAutoSnapshot?: boolean;

  /**
   * @schema LightsailCopySnapshotRequest#targetSnapshotName
   */
  readonly targetSnapshotName: string;

  /**
   * @schema LightsailCopySnapshotRequest#sourceRegion
   */
  readonly sourceRegion: string;

}

/**
 * @schema LightsailCopySnapshotResult
 */
export interface LightsailCopySnapshotResult {
  /**
   * @schema LightsailCopySnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateCertificateRequest
 */
export interface LightsailCreateCertificateRequest {
  /**
   * @schema LightsailCreateCertificateRequest#certificateName
   */
  readonly certificateName: string;

  /**
   * @schema LightsailCreateCertificateRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailCreateCertificateRequest#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema LightsailCreateCertificateRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateCertificateResult
 */
export interface LightsailCreateCertificateResult {
  /**
   * @schema LightsailCreateCertificateResult#certificate
   */
  readonly certificate?: LightsailCertificateSummary;

  /**
   * @schema LightsailCreateCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateCloudFormationStackRequest
 */
export interface LightsailCreateCloudFormationStackRequest {
  /**
   * @schema LightsailCreateCloudFormationStackRequest#instances
   */
  readonly instances: LightsailInstanceEntry[];

}

/**
 * @schema LightsailCreateCloudFormationStackResult
 */
export interface LightsailCreateCloudFormationStackResult {
  /**
   * @schema LightsailCreateCloudFormationStackResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateContactMethodRequest
 */
export interface LightsailCreateContactMethodRequest {
  /**
   * @schema LightsailCreateContactMethodRequest#protocol
   */
  readonly protocol: string;

  /**
   * @schema LightsailCreateContactMethodRequest#contactEndpoint
   */
  readonly contactEndpoint: string;

}

/**
 * @schema LightsailCreateContactMethodResult
 */
export interface LightsailCreateContactMethodResult {
  /**
   * @schema LightsailCreateContactMethodResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateContainerServiceRequest
 */
export interface LightsailCreateContainerServiceRequest {
  /**
   * @schema LightsailCreateContainerServiceRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailCreateContainerServiceRequest#power
   */
  readonly power: string;

  /**
   * @schema LightsailCreateContainerServiceRequest#scale
   */
  readonly scale: number;

  /**
   * @schema LightsailCreateContainerServiceRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateContainerServiceRequest#publicDomainNames
   */
  readonly publicDomainNames?: { [key: string]: string[] };

  /**
   * @schema LightsailCreateContainerServiceRequest#deployment
   */
  readonly deployment?: LightsailContainerServiceDeploymentRequest;

}

/**
 * @schema LightsailCreateContainerServiceResult
 */
export interface LightsailCreateContainerServiceResult {
  /**
   * @schema LightsailCreateContainerServiceResult#containerService
   */
  readonly containerService?: LightsailContainerService;

}

/**
 * @schema LightsailCreateContainerServiceDeploymentRequest
 */
export interface LightsailCreateContainerServiceDeploymentRequest {
  /**
   * @schema LightsailCreateContainerServiceDeploymentRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailCreateContainerServiceDeploymentRequest#containers
   */
  readonly containers?: { [key: string]: LightsailContainer };

  /**
   * @schema LightsailCreateContainerServiceDeploymentRequest#publicEndpoint
   */
  readonly publicEndpoint?: LightsailEndpointRequest;

}

/**
 * @schema LightsailCreateContainerServiceDeploymentResult
 */
export interface LightsailCreateContainerServiceDeploymentResult {
  /**
   * @schema LightsailCreateContainerServiceDeploymentResult#containerService
   */
  readonly containerService?: LightsailContainerService;

}

/**
 * @schema LightsailCreateContainerServiceRegistryLoginRequest
 */
export interface LightsailCreateContainerServiceRegistryLoginRequest {
}

/**
 * @schema LightsailCreateContainerServiceRegistryLoginResult
 */
export interface LightsailCreateContainerServiceRegistryLoginResult {
  /**
   * @schema LightsailCreateContainerServiceRegistryLoginResult#registryLogin
   */
  readonly registryLogin?: LightsailContainerServiceRegistryLogin;

}

/**
 * @schema LightsailCreateDiskRequest
 */
export interface LightsailCreateDiskRequest {
  /**
   * @schema LightsailCreateDiskRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema LightsailCreateDiskRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema LightsailCreateDiskRequest#sizeInGb
   */
  readonly sizeInGb: number;

  /**
   * @schema LightsailCreateDiskRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateDiskRequest#addOns
   */
  readonly addOns?: LightsailAddOnRequest[];

}

/**
 * @schema LightsailCreateDiskResult
 */
export interface LightsailCreateDiskResult {
  /**
   * @schema LightsailCreateDiskResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateDiskFromSnapshotRequest
 */
export interface LightsailCreateDiskFromSnapshotRequest {
  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName?: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#sizeInGb
   */
  readonly sizeInGb: number;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#addOns
   */
  readonly addOns?: LightsailAddOnRequest[];

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#sourceDiskName
   */
  readonly sourceDiskName?: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#restoreDate
   */
  readonly restoreDate?: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#useLatestRestorableAutoSnapshot
   */
  readonly useLatestRestorableAutoSnapshot?: boolean;

}

/**
 * @schema LightsailCreateDiskFromSnapshotResult
 */
export interface LightsailCreateDiskFromSnapshotResult {
  /**
   * @schema LightsailCreateDiskFromSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateDiskSnapshotRequest
 */
export interface LightsailCreateDiskSnapshotRequest {
  /**
   * @schema LightsailCreateDiskSnapshotRequest#diskName
   */
  readonly diskName?: string;

  /**
   * @schema LightsailCreateDiskSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName: string;

  /**
   * @schema LightsailCreateDiskSnapshotRequest#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema LightsailCreateDiskSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateDiskSnapshotResult
 */
export interface LightsailCreateDiskSnapshotResult {
  /**
   * @schema LightsailCreateDiskSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateDistributionRequest
 */
export interface LightsailCreateDistributionRequest {
  /**
   * @schema LightsailCreateDistributionRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema LightsailCreateDistributionRequest#origin
   */
  readonly origin: LightsailInputOrigin;

  /**
   * @schema LightsailCreateDistributionRequest#defaultCacheBehavior
   */
  readonly defaultCacheBehavior: LightsailCacheBehavior;

  /**
   * @schema LightsailCreateDistributionRequest#cacheBehaviorSettings
   */
  readonly cacheBehaviorSettings?: LightsailCacheSettings;

  /**
   * @schema LightsailCreateDistributionRequest#cacheBehaviors
   */
  readonly cacheBehaviors?: LightsailCacheBehaviorPerPath[];

  /**
   * @schema LightsailCreateDistributionRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema LightsailCreateDistributionRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateDistributionResult
 */
export interface LightsailCreateDistributionResult {
  /**
   * @schema LightsailCreateDistributionResult#distribution
   */
  readonly distribution?: LightsailLightsailDistribution;

  /**
   * @schema LightsailCreateDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailCreateDomainRequest
 */
export interface LightsailCreateDomainRequest {
  /**
   * @schema LightsailCreateDomainRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailCreateDomainRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateDomainResult
 */
export interface LightsailCreateDomainResult {
  /**
   * @schema LightsailCreateDomainResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailCreateDomainEntryRequest
 */
export interface LightsailCreateDomainEntryRequest {
  /**
   * @schema LightsailCreateDomainEntryRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailCreateDomainEntryRequest#domainEntry
   */
  readonly domainEntry: LightsailDomainEntry;

}

/**
 * @schema LightsailCreateDomainEntryResult
 */
export interface LightsailCreateDomainEntryResult {
  /**
   * @schema LightsailCreateDomainEntryResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailCreateInstanceSnapshotRequest
 */
export interface LightsailCreateInstanceSnapshotRequest {
  /**
   * @schema LightsailCreateInstanceSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName: string;

  /**
   * @schema LightsailCreateInstanceSnapshotRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailCreateInstanceSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateInstanceSnapshotResult
 */
export interface LightsailCreateInstanceSnapshotResult {
  /**
   * @schema LightsailCreateInstanceSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateInstancesRequest
 */
export interface LightsailCreateInstancesRequest {
  /**
   * @schema LightsailCreateInstancesRequest#instanceNames
   */
  readonly instanceNames: string[];

  /**
   * @schema LightsailCreateInstancesRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema LightsailCreateInstancesRequest#customImageName
   */
  readonly customImageName?: string;

  /**
   * @schema LightsailCreateInstancesRequest#blueprintId
   */
  readonly blueprintId: string;

  /**
   * @schema LightsailCreateInstancesRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema LightsailCreateInstancesRequest#userData
   */
  readonly userData?: string;

  /**
   * @schema LightsailCreateInstancesRequest#keyPairName
   */
  readonly keyPairName?: string;

  /**
   * @schema LightsailCreateInstancesRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateInstancesRequest#addOns
   */
  readonly addOns?: LightsailAddOnRequest[];

}

/**
 * @schema LightsailCreateInstancesResult
 */
export interface LightsailCreateInstancesResult {
  /**
   * @schema LightsailCreateInstancesResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateInstancesFromSnapshotRequest
 */
export interface LightsailCreateInstancesFromSnapshotRequest {
  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#instanceNames
   */
  readonly instanceNames: string[];

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#attachedDiskMapping
   */
  readonly attachedDiskMapping?: { [key: string]: LightsailDiskMap[] };

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#userData
   */
  readonly userData?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#keyPairName
   */
  readonly keyPairName?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#addOns
   */
  readonly addOns?: LightsailAddOnRequest[];

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#sourceInstanceName
   */
  readonly sourceInstanceName?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#restoreDate
   */
  readonly restoreDate?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#useLatestRestorableAutoSnapshot
   */
  readonly useLatestRestorableAutoSnapshot?: boolean;

}

/**
 * @schema LightsailCreateInstancesFromSnapshotResult
 */
export interface LightsailCreateInstancesFromSnapshotResult {
  /**
   * @schema LightsailCreateInstancesFromSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateKeyPairRequest
 */
export interface LightsailCreateKeyPairRequest {
  /**
   * @schema LightsailCreateKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

  /**
   * @schema LightsailCreateKeyPairRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateKeyPairResult
 */
export interface LightsailCreateKeyPairResult {
  /**
   * @schema LightsailCreateKeyPairResult#keyPair
   */
  readonly keyPair?: LightsailKeyPair;

  /**
   * @schema LightsailCreateKeyPairResult#publicKeyBase64
   */
  readonly publicKeyBase64?: string;

  /**
   * @schema LightsailCreateKeyPairResult#privateKeyBase64
   */
  readonly privateKeyBase64?: string;

  /**
   * @schema LightsailCreateKeyPairResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailCreateLoadBalancerRequest
 */
export interface LightsailCreateLoadBalancerRequest {
  /**
   * @schema LightsailCreateLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailCreateLoadBalancerRequest#instancePort
   */
  readonly instancePort: number;

  /**
   * @schema LightsailCreateLoadBalancerRequest#healthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema LightsailCreateLoadBalancerRequest#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema LightsailCreateLoadBalancerRequest#certificateDomainName
   */
  readonly certificateDomainName?: string;

  /**
   * @schema LightsailCreateLoadBalancerRequest#certificateAlternativeNames
   */
  readonly certificateAlternativeNames?: string[];

  /**
   * @schema LightsailCreateLoadBalancerRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateLoadBalancerResult
 */
export interface LightsailCreateLoadBalancerResult {
  /**
   * @schema LightsailCreateLoadBalancerResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateLoadBalancerTlsCertificateRequest
 */
export interface LightsailCreateLoadBalancerTlsCertificateRequest {
  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#certificateName
   */
  readonly certificateName: string;

  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#certificateDomainName
   */
  readonly certificateDomainName: string;

  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#certificateAlternativeNames
   */
  readonly certificateAlternativeNames?: string[];

  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateLoadBalancerTlsCertificateResult
 */
export interface LightsailCreateLoadBalancerTlsCertificateResult {
  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateRelationalDatabaseRequest
 */
export interface LightsailCreateRelationalDatabaseRequest {
  /**
   * @schema LightsailCreateRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#relationalDatabaseBlueprintId
   */
  readonly relationalDatabaseBlueprintId: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#relationalDatabaseBundleId
   */
  readonly relationalDatabaseBundleId: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#masterDatabaseName
   */
  readonly masterDatabaseName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#masterUsername
   */
  readonly masterUsername: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#preferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateRelationalDatabaseResult
 */
export interface LightsailCreateRelationalDatabaseResult {
  /**
   * @schema LightsailCreateRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest
 */
export interface LightsailCreateRelationalDatabaseFromSnapshotRequest {
  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#relationalDatabaseBundleId
   */
  readonly relationalDatabaseBundleId?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#sourceRelationalDatabaseName
   */
  readonly sourceRelationalDatabaseName?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#restoreTime
   */
  readonly restoreTime?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#useLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateRelationalDatabaseFromSnapshotResult
 */
export interface LightsailCreateRelationalDatabaseFromSnapshotResult {
  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailCreateRelationalDatabaseSnapshotRequest
 */
export interface LightsailCreateRelationalDatabaseSnapshotRequest {
  /**
   * @schema LightsailCreateRelationalDatabaseSnapshotRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailCreateRelationalDatabaseSnapshotResult
 */
export interface LightsailCreateRelationalDatabaseSnapshotResult {
  /**
   * @schema LightsailCreateRelationalDatabaseSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteAlarmRequest
 */
export interface LightsailDeleteAlarmRequest {
  /**
   * @schema LightsailDeleteAlarmRequest#alarmName
   */
  readonly alarmName: string;

}

/**
 * @schema LightsailDeleteAlarmResult
 */
export interface LightsailDeleteAlarmResult {
  /**
   * @schema LightsailDeleteAlarmResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteAutoSnapshotRequest
 */
export interface LightsailDeleteAutoSnapshotRequest {
  /**
   * @schema LightsailDeleteAutoSnapshotRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailDeleteAutoSnapshotRequest#date
   */
  readonly date: string;

}

/**
 * @schema LightsailDeleteAutoSnapshotResult
 */
export interface LightsailDeleteAutoSnapshotResult {
  /**
   * @schema LightsailDeleteAutoSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteCertificateRequest
 */
export interface LightsailDeleteCertificateRequest {
  /**
   * @schema LightsailDeleteCertificateRequest#certificateName
   */
  readonly certificateName: string;

}

/**
 * @schema LightsailDeleteCertificateResult
 */
export interface LightsailDeleteCertificateResult {
  /**
   * @schema LightsailDeleteCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteContactMethodRequest
 */
export interface LightsailDeleteContactMethodRequest {
  /**
   * @schema LightsailDeleteContactMethodRequest#protocol
   */
  readonly protocol: string;

}

/**
 * @schema LightsailDeleteContactMethodResult
 */
export interface LightsailDeleteContactMethodResult {
  /**
   * @schema LightsailDeleteContactMethodResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteContainerImageRequest
 */
export interface LightsailDeleteContainerImageRequest {
  /**
   * @schema LightsailDeleteContainerImageRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailDeleteContainerImageRequest#image
   */
  readonly image: string;

}

/**
 * @schema LightsailDeleteContainerImageResult
 */
export interface LightsailDeleteContainerImageResult {
}

/**
 * @schema LightsailDeleteContainerServiceRequest
 */
export interface LightsailDeleteContainerServiceRequest {
  /**
   * @schema LightsailDeleteContainerServiceRequest#serviceName
   */
  readonly serviceName: string;

}

/**
 * @schema LightsailDeleteContainerServiceResult
 */
export interface LightsailDeleteContainerServiceResult {
}

/**
 * @schema LightsailDeleteDiskRequest
 */
export interface LightsailDeleteDiskRequest {
  /**
   * @schema LightsailDeleteDiskRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema LightsailDeleteDiskRequest#forceDeleteAddOns
   */
  readonly forceDeleteAddOns?: boolean;

}

/**
 * @schema LightsailDeleteDiskResult
 */
export interface LightsailDeleteDiskResult {
  /**
   * @schema LightsailDeleteDiskResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteDiskSnapshotRequest
 */
export interface LightsailDeleteDiskSnapshotRequest {
  /**
   * @schema LightsailDeleteDiskSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName: string;

}

/**
 * @schema LightsailDeleteDiskSnapshotResult
 */
export interface LightsailDeleteDiskSnapshotResult {
  /**
   * @schema LightsailDeleteDiskSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteDistributionRequest
 */
export interface LightsailDeleteDistributionRequest {
  /**
   * @schema LightsailDeleteDistributionRequest#distributionName
   */
  readonly distributionName?: string;

}

/**
 * @schema LightsailDeleteDistributionResult
 */
export interface LightsailDeleteDistributionResult {
  /**
   * @schema LightsailDeleteDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailDeleteDomainRequest
 */
export interface LightsailDeleteDomainRequest {
  /**
   * @schema LightsailDeleteDomainRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema LightsailDeleteDomainResult
 */
export interface LightsailDeleteDomainResult {
  /**
   * @schema LightsailDeleteDomainResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailDeleteDomainEntryRequest
 */
export interface LightsailDeleteDomainEntryRequest {
  /**
   * @schema LightsailDeleteDomainEntryRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailDeleteDomainEntryRequest#domainEntry
   */
  readonly domainEntry: LightsailDomainEntry;

}

/**
 * @schema LightsailDeleteDomainEntryResult
 */
export interface LightsailDeleteDomainEntryResult {
  /**
   * @schema LightsailDeleteDomainEntryResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailDeleteInstanceRequest
 */
export interface LightsailDeleteInstanceRequest {
  /**
   * @schema LightsailDeleteInstanceRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailDeleteInstanceRequest#forceDeleteAddOns
   */
  readonly forceDeleteAddOns?: boolean;

}

/**
 * @schema LightsailDeleteInstanceResult
 */
export interface LightsailDeleteInstanceResult {
  /**
   * @schema LightsailDeleteInstanceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteInstanceSnapshotRequest
 */
export interface LightsailDeleteInstanceSnapshotRequest {
  /**
   * @schema LightsailDeleteInstanceSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName: string;

}

/**
 * @schema LightsailDeleteInstanceSnapshotResult
 */
export interface LightsailDeleteInstanceSnapshotResult {
  /**
   * @schema LightsailDeleteInstanceSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteKeyPairRequest
 */
export interface LightsailDeleteKeyPairRequest {
  /**
   * @schema LightsailDeleteKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

}

/**
 * @schema LightsailDeleteKeyPairResult
 */
export interface LightsailDeleteKeyPairResult {
  /**
   * @schema LightsailDeleteKeyPairResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailDeleteKnownHostKeysRequest
 */
export interface LightsailDeleteKnownHostKeysRequest {
  /**
   * @schema LightsailDeleteKnownHostKeysRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailDeleteKnownHostKeysResult
 */
export interface LightsailDeleteKnownHostKeysResult {
  /**
   * @schema LightsailDeleteKnownHostKeysResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteLoadBalancerRequest
 */
export interface LightsailDeleteLoadBalancerRequest {
  /**
   * @schema LightsailDeleteLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

}

/**
 * @schema LightsailDeleteLoadBalancerResult
 */
export interface LightsailDeleteLoadBalancerResult {
  /**
   * @schema LightsailDeleteLoadBalancerResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteLoadBalancerTlsCertificateRequest
 */
export interface LightsailDeleteLoadBalancerTlsCertificateRequest {
  /**
   * @schema LightsailDeleteLoadBalancerTlsCertificateRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailDeleteLoadBalancerTlsCertificateRequest#certificateName
   */
  readonly certificateName: string;

  /**
   * @schema LightsailDeleteLoadBalancerTlsCertificateRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema LightsailDeleteLoadBalancerTlsCertificateResult
 */
export interface LightsailDeleteLoadBalancerTlsCertificateResult {
  /**
   * @schema LightsailDeleteLoadBalancerTlsCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteRelationalDatabaseRequest
 */
export interface LightsailDeleteRelationalDatabaseRequest {
  /**
   * @schema LightsailDeleteRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailDeleteRelationalDatabaseRequest#skipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema LightsailDeleteRelationalDatabaseRequest#finalRelationalDatabaseSnapshotName
   */
  readonly finalRelationalDatabaseSnapshotName?: string;

}

/**
 * @schema LightsailDeleteRelationalDatabaseResult
 */
export interface LightsailDeleteRelationalDatabaseResult {
  /**
   * @schema LightsailDeleteRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDeleteRelationalDatabaseSnapshotRequest
 */
export interface LightsailDeleteRelationalDatabaseSnapshotRequest {
  /**
   * @schema LightsailDeleteRelationalDatabaseSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName: string;

}

/**
 * @schema LightsailDeleteRelationalDatabaseSnapshotResult
 */
export interface LightsailDeleteRelationalDatabaseSnapshotResult {
  /**
   * @schema LightsailDeleteRelationalDatabaseSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDetachCertificateFromDistributionRequest
 */
export interface LightsailDetachCertificateFromDistributionRequest {
  /**
   * @schema LightsailDetachCertificateFromDistributionRequest#distributionName
   */
  readonly distributionName: string;

}

/**
 * @schema LightsailDetachCertificateFromDistributionResult
 */
export interface LightsailDetachCertificateFromDistributionResult {
  /**
   * @schema LightsailDetachCertificateFromDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailDetachDiskRequest
 */
export interface LightsailDetachDiskRequest {
  /**
   * @schema LightsailDetachDiskRequest#diskName
   */
  readonly diskName: string;

}

/**
 * @schema LightsailDetachDiskResult
 */
export interface LightsailDetachDiskResult {
  /**
   * @schema LightsailDetachDiskResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDetachInstancesFromLoadBalancerRequest
 */
export interface LightsailDetachInstancesFromLoadBalancerRequest {
  /**
   * @schema LightsailDetachInstancesFromLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailDetachInstancesFromLoadBalancerRequest#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * @schema LightsailDetachInstancesFromLoadBalancerResult
 */
export interface LightsailDetachInstancesFromLoadBalancerResult {
  /**
   * @schema LightsailDetachInstancesFromLoadBalancerResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDetachStaticIpRequest
 */
export interface LightsailDetachStaticIpRequest {
  /**
   * @schema LightsailDetachStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * @schema LightsailDetachStaticIpResult
 */
export interface LightsailDetachStaticIpResult {
  /**
   * @schema LightsailDetachStaticIpResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDisableAddOnRequest
 */
export interface LightsailDisableAddOnRequest {
  /**
   * @schema LightsailDisableAddOnRequest#addOnType
   */
  readonly addOnType: string;

  /**
   * @schema LightsailDisableAddOnRequest#resourceName
   */
  readonly resourceName: string;

}

/**
 * @schema LightsailDisableAddOnResult
 */
export interface LightsailDisableAddOnResult {
  /**
   * @schema LightsailDisableAddOnResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailDownloadDefaultKeyPairRequest
 */
export interface LightsailDownloadDefaultKeyPairRequest {
}

/**
 * @schema LightsailDownloadDefaultKeyPairResult
 */
export interface LightsailDownloadDefaultKeyPairResult {
  /**
   * @schema LightsailDownloadDefaultKeyPairResult#publicKeyBase64
   */
  readonly publicKeyBase64?: string;

  /**
   * @schema LightsailDownloadDefaultKeyPairResult#privateKeyBase64
   */
  readonly privateKeyBase64?: string;

}

/**
 * @schema LightsailEnableAddOnRequest
 */
export interface LightsailEnableAddOnRequest {
  /**
   * @schema LightsailEnableAddOnRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailEnableAddOnRequest#addOnRequest
   */
  readonly addOnRequest: LightsailAddOnRequest;

}

/**
 * @schema LightsailEnableAddOnResult
 */
export interface LightsailEnableAddOnResult {
  /**
   * @schema LightsailEnableAddOnResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailExportSnapshotRequest
 */
export interface LightsailExportSnapshotRequest {
  /**
   * @schema LightsailExportSnapshotRequest#sourceSnapshotName
   */
  readonly sourceSnapshotName: string;

}

/**
 * @schema LightsailExportSnapshotResult
 */
export interface LightsailExportSnapshotResult {
  /**
   * @schema LightsailExportSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailGetActiveNamesRequest
 */
export interface LightsailGetActiveNamesRequest {
  /**
   * @schema LightsailGetActiveNamesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetActiveNamesResult
 */
export interface LightsailGetActiveNamesResult {
  /**
   * @schema LightsailGetActiveNamesResult#activeNames
   */
  readonly activeNames?: string[];

  /**
   * @schema LightsailGetActiveNamesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetAlarmsRequest
 */
export interface LightsailGetAlarmsRequest {
  /**
   * @schema LightsailGetAlarmsRequest#alarmName
   */
  readonly alarmName?: string;

  /**
   * @schema LightsailGetAlarmsRequest#pageToken
   */
  readonly pageToken?: string;

  /**
   * @schema LightsailGetAlarmsRequest#monitoredResourceName
   */
  readonly monitoredResourceName?: string;

}

/**
 * @schema LightsailGetAlarmsResult
 */
export interface LightsailGetAlarmsResult {
  /**
   * @schema LightsailGetAlarmsResult#alarms
   */
  readonly alarms?: LightsailAlarm[];

  /**
   * @schema LightsailGetAlarmsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetAutoSnapshotsRequest
 */
export interface LightsailGetAutoSnapshotsRequest {
  /**
   * @schema LightsailGetAutoSnapshotsRequest#resourceName
   */
  readonly resourceName: string;

}

/**
 * @schema LightsailGetAutoSnapshotsResult
 */
export interface LightsailGetAutoSnapshotsResult {
  /**
   * @schema LightsailGetAutoSnapshotsResult#resourceName
   */
  readonly resourceName?: string;

  /**
   * @schema LightsailGetAutoSnapshotsResult#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailGetAutoSnapshotsResult#autoSnapshots
   */
  readonly autoSnapshots?: LightsailAutoSnapshotDetails[];

}

/**
 * @schema LightsailGetBlueprintsRequest
 */
export interface LightsailGetBlueprintsRequest {
  /**
   * @schema LightsailGetBlueprintsRequest#includeInactive
   */
  readonly includeInactive?: boolean;

  /**
   * @schema LightsailGetBlueprintsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetBlueprintsResult
 */
export interface LightsailGetBlueprintsResult {
  /**
   * @schema LightsailGetBlueprintsResult#blueprints
   */
  readonly blueprints?: LightsailBlueprint[];

  /**
   * @schema LightsailGetBlueprintsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetBundlesRequest
 */
export interface LightsailGetBundlesRequest {
  /**
   * @schema LightsailGetBundlesRequest#includeInactive
   */
  readonly includeInactive?: boolean;

  /**
   * @schema LightsailGetBundlesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetBundlesResult
 */
export interface LightsailGetBundlesResult {
  /**
   * @schema LightsailGetBundlesResult#bundles
   */
  readonly bundles?: LightsailBundle[];

  /**
   * @schema LightsailGetBundlesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetCertificatesRequest
 */
export interface LightsailGetCertificatesRequest {
  /**
   * @schema LightsailGetCertificatesRequest#certificateStatuses
   */
  readonly certificateStatuses?: string[];

  /**
   * @schema LightsailGetCertificatesRequest#includeCertificateDetails
   */
  readonly includeCertificateDetails?: boolean;

  /**
   * @schema LightsailGetCertificatesRequest#certificateName
   */
  readonly certificateName?: string;

}

/**
 * @schema LightsailGetCertificatesResult
 */
export interface LightsailGetCertificatesResult {
  /**
   * @schema LightsailGetCertificatesResult#certificates
   */
  readonly certificates?: LightsailCertificateSummary[];

}

/**
 * @schema LightsailGetCloudFormationStackRecordsRequest
 */
export interface LightsailGetCloudFormationStackRecordsRequest {
  /**
   * @schema LightsailGetCloudFormationStackRecordsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetCloudFormationStackRecordsResult
 */
export interface LightsailGetCloudFormationStackRecordsResult {
  /**
   * @schema LightsailGetCloudFormationStackRecordsResult#cloudFormationStackRecords
   */
  readonly cloudFormationStackRecords?: LightsailCloudFormationStackRecord[];

  /**
   * @schema LightsailGetCloudFormationStackRecordsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetContactMethodsRequest
 */
export interface LightsailGetContactMethodsRequest {
  /**
   * @schema LightsailGetContactMethodsRequest#protocols
   */
  readonly protocols?: string[];

}

/**
 * @schema LightsailGetContactMethodsResult
 */
export interface LightsailGetContactMethodsResult {
  /**
   * @schema LightsailGetContactMethodsResult#contactMethods
   */
  readonly contactMethods?: LightsailContactMethod[];

}

/**
 * @schema LightsailGetContainerApiMetadataRequest
 */
export interface LightsailGetContainerApiMetadataRequest {
}

/**
 * @schema LightsailGetContainerApiMetadataResult
 */
export interface LightsailGetContainerApiMetadataResult {
  /**
   * @schema LightsailGetContainerApiMetadataResult#metadata
   */
  readonly metadata?: { [key: string]: string }[];

}

/**
 * @schema LightsailGetContainerImagesRequest
 */
export interface LightsailGetContainerImagesRequest {
  /**
   * @schema LightsailGetContainerImagesRequest#serviceName
   */
  readonly serviceName: string;

}

/**
 * @schema LightsailGetContainerImagesResult
 */
export interface LightsailGetContainerImagesResult {
  /**
   * @schema LightsailGetContainerImagesResult#containerImages
   */
  readonly containerImages?: LightsailContainerImage[];

}

/**
 * @schema LightsailGetContainerLogRequest
 */
export interface LightsailGetContainerLogRequest {
  /**
   * @schema LightsailGetContainerLogRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailGetContainerLogRequest#containerName
   */
  readonly containerName: string;

  /**
   * @schema LightsailGetContainerLogRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema LightsailGetContainerLogRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema LightsailGetContainerLogRequest#filterPattern
   */
  readonly filterPattern?: string;

  /**
   * @schema LightsailGetContainerLogRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetContainerLogResult
 */
export interface LightsailGetContainerLogResult {
  /**
   * @schema LightsailGetContainerLogResult#logEvents
   */
  readonly logEvents?: LightsailContainerServiceLogEvent[];

  /**
   * @schema LightsailGetContainerLogResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetContainerServiceDeploymentsRequest
 */
export interface LightsailGetContainerServiceDeploymentsRequest {
  /**
   * @schema LightsailGetContainerServiceDeploymentsRequest#serviceName
   */
  readonly serviceName: string;

}

/**
 * @schema LightsailGetContainerServiceDeploymentsResult
 */
export interface LightsailGetContainerServiceDeploymentsResult {
  /**
   * @schema LightsailGetContainerServiceDeploymentsResult#deployments
   */
  readonly deployments?: LightsailContainerServiceDeployment[];

}

/**
 * @schema LightsailGetContainerServiceMetricDataRequest
 */
export interface LightsailGetContainerServiceMetricDataRequest {
  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema LightsailGetContainerServiceMetricDataResult
 */
export interface LightsailGetContainerServiceMetricDataResult {
  /**
   * @schema LightsailGetContainerServiceMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * @schema LightsailGetContainerServicePowersRequest
 */
export interface LightsailGetContainerServicePowersRequest {
}

/**
 * @schema LightsailGetContainerServicePowersResult
 */
export interface LightsailGetContainerServicePowersResult {
  /**
   * @schema LightsailGetContainerServicePowersResult#powers
   */
  readonly powers?: LightsailContainerServicePower[];

}

/**
 * @schema LightsailGetContainerServicesRequest
 */
export interface LightsailGetContainerServicesRequest {
  /**
   * @schema LightsailGetContainerServicesRequest#serviceName
   */
  readonly serviceName?: string;

}

/**
 * @schema LightsailContainerServicesListResult
 */
export interface LightsailContainerServicesListResult {
  /**
   * @schema LightsailContainerServicesListResult#containerServices
   */
  readonly containerServices?: LightsailContainerService[];

}

/**
 * @schema LightsailGetDiskRequest
 */
export interface LightsailGetDiskRequest {
  /**
   * @schema LightsailGetDiskRequest#diskName
   */
  readonly diskName: string;

}

/**
 * @schema LightsailGetDiskResult
 */
export interface LightsailGetDiskResult {
  /**
   * @schema LightsailGetDiskResult#disk
   */
  readonly disk?: LightsailDisk;

}

/**
 * @schema LightsailGetDiskSnapshotRequest
 */
export interface LightsailGetDiskSnapshotRequest {
  /**
   * @schema LightsailGetDiskSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName: string;

}

/**
 * @schema LightsailGetDiskSnapshotResult
 */
export interface LightsailGetDiskSnapshotResult {
  /**
   * @schema LightsailGetDiskSnapshotResult#diskSnapshot
   */
  readonly diskSnapshot?: LightsailDiskSnapshot;

}

/**
 * @schema LightsailGetDiskSnapshotsRequest
 */
export interface LightsailGetDiskSnapshotsRequest {
  /**
   * @schema LightsailGetDiskSnapshotsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetDiskSnapshotsResult
 */
export interface LightsailGetDiskSnapshotsResult {
  /**
   * @schema LightsailGetDiskSnapshotsResult#diskSnapshots
   */
  readonly diskSnapshots?: LightsailDiskSnapshot[];

  /**
   * @schema LightsailGetDiskSnapshotsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetDisksRequest
 */
export interface LightsailGetDisksRequest {
  /**
   * @schema LightsailGetDisksRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetDisksResult
 */
export interface LightsailGetDisksResult {
  /**
   * @schema LightsailGetDisksResult#disks
   */
  readonly disks?: LightsailDisk[];

  /**
   * @schema LightsailGetDisksResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetDistributionBundlesRequest
 */
export interface LightsailGetDistributionBundlesRequest {
}

/**
 * @schema LightsailGetDistributionBundlesResult
 */
export interface LightsailGetDistributionBundlesResult {
  /**
   * @schema LightsailGetDistributionBundlesResult#bundles
   */
  readonly bundles?: LightsailDistributionBundle[];

}

/**
 * @schema LightsailGetDistributionLatestCacheResetRequest
 */
export interface LightsailGetDistributionLatestCacheResetRequest {
  /**
   * @schema LightsailGetDistributionLatestCacheResetRequest#distributionName
   */
  readonly distributionName?: string;

}

/**
 * @schema LightsailGetDistributionLatestCacheResetResult
 */
export interface LightsailGetDistributionLatestCacheResetResult {
  /**
   * @schema LightsailGetDistributionLatestCacheResetResult#status
   */
  readonly status?: string;

  /**
   * @schema LightsailGetDistributionLatestCacheResetResult#createTime
   */
  readonly createTime?: string;

}

/**
 * @schema LightsailGetDistributionMetricDataRequest
 */
export interface LightsailGetDistributionMetricDataRequest {
  /**
   * @schema LightsailGetDistributionMetricDataRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema LightsailGetDistributionMetricDataResult
 */
export interface LightsailGetDistributionMetricDataResult {
  /**
   * @schema LightsailGetDistributionMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetDistributionMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * @schema LightsailGetDistributionsRequest
 */
export interface LightsailGetDistributionsRequest {
  /**
   * @schema LightsailGetDistributionsRequest#distributionName
   */
  readonly distributionName?: string;

  /**
   * @schema LightsailGetDistributionsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetDistributionsResult
 */
export interface LightsailGetDistributionsResult {
  /**
   * @schema LightsailGetDistributionsResult#distributions
   */
  readonly distributions?: LightsailLightsailDistribution[];

  /**
   * @schema LightsailGetDistributionsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetDomainRequest
 */
export interface LightsailGetDomainRequest {
  /**
   * @schema LightsailGetDomainRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema LightsailGetDomainResult
 */
export interface LightsailGetDomainResult {
  /**
   * @schema LightsailGetDomainResult#domain
   */
  readonly domain?: LightsailDomain;

}

/**
 * @schema LightsailGetDomainsRequest
 */
export interface LightsailGetDomainsRequest {
  /**
   * @schema LightsailGetDomainsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetDomainsResult
 */
export interface LightsailGetDomainsResult {
  /**
   * @schema LightsailGetDomainsResult#domains
   */
  readonly domains?: LightsailDomain[];

  /**
   * @schema LightsailGetDomainsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetExportSnapshotRecordsRequest
 */
export interface LightsailGetExportSnapshotRecordsRequest {
  /**
   * @schema LightsailGetExportSnapshotRecordsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetExportSnapshotRecordsResult
 */
export interface LightsailGetExportSnapshotRecordsResult {
  /**
   * @schema LightsailGetExportSnapshotRecordsResult#exportSnapshotRecords
   */
  readonly exportSnapshotRecords?: LightsailExportSnapshotRecord[];

  /**
   * @schema LightsailGetExportSnapshotRecordsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetInstanceRequest
 */
export interface LightsailGetInstanceRequest {
  /**
   * @schema LightsailGetInstanceRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailGetInstanceResult
 */
export interface LightsailGetInstanceResult {
  /**
   * @schema LightsailGetInstanceResult#instance
   */
  readonly instance?: LightsailInstance;

}

/**
 * @schema LightsailGetInstanceAccessDetailsRequest
 */
export interface LightsailGetInstanceAccessDetailsRequest {
  /**
   * @schema LightsailGetInstanceAccessDetailsRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailGetInstanceAccessDetailsRequest#protocol
   */
  readonly protocol?: string;

}

/**
 * @schema LightsailGetInstanceAccessDetailsResult
 */
export interface LightsailGetInstanceAccessDetailsResult {
  /**
   * @schema LightsailGetInstanceAccessDetailsResult#accessDetails
   */
  readonly accessDetails?: LightsailInstanceAccessDetails;

}

/**
 * @schema LightsailGetInstanceMetricDataRequest
 */
export interface LightsailGetInstanceMetricDataRequest {
  /**
   * @schema LightsailGetInstanceMetricDataRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema LightsailGetInstanceMetricDataResult
 */
export interface LightsailGetInstanceMetricDataResult {
  /**
   * @schema LightsailGetInstanceMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetInstanceMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * @schema LightsailGetInstancePortStatesRequest
 */
export interface LightsailGetInstancePortStatesRequest {
  /**
   * @schema LightsailGetInstancePortStatesRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailGetInstancePortStatesResult
 */
export interface LightsailGetInstancePortStatesResult {
  /**
   * @schema LightsailGetInstancePortStatesResult#portStates
   */
  readonly portStates?: LightsailInstancePortState[];

}

/**
 * @schema LightsailGetInstanceSnapshotRequest
 */
export interface LightsailGetInstanceSnapshotRequest {
  /**
   * @schema LightsailGetInstanceSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName: string;

}

/**
 * @schema LightsailGetInstanceSnapshotResult
 */
export interface LightsailGetInstanceSnapshotResult {
  /**
   * @schema LightsailGetInstanceSnapshotResult#instanceSnapshot
   */
  readonly instanceSnapshot?: LightsailInstanceSnapshot;

}

/**
 * @schema LightsailGetInstanceSnapshotsRequest
 */
export interface LightsailGetInstanceSnapshotsRequest {
  /**
   * @schema LightsailGetInstanceSnapshotsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetInstanceSnapshotsResult
 */
export interface LightsailGetInstanceSnapshotsResult {
  /**
   * @schema LightsailGetInstanceSnapshotsResult#instanceSnapshots
   */
  readonly instanceSnapshots?: LightsailInstanceSnapshot[];

  /**
   * @schema LightsailGetInstanceSnapshotsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetInstanceStateRequest
 */
export interface LightsailGetInstanceStateRequest {
  /**
   * @schema LightsailGetInstanceStateRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailGetInstanceStateResult
 */
export interface LightsailGetInstanceStateResult {
  /**
   * @schema LightsailGetInstanceStateResult#state
   */
  readonly state?: LightsailInstanceState;

}

/**
 * @schema LightsailGetInstancesRequest
 */
export interface LightsailGetInstancesRequest {
  /**
   * @schema LightsailGetInstancesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetInstancesResult
 */
export interface LightsailGetInstancesResult {
  /**
   * @schema LightsailGetInstancesResult#instances
   */
  readonly instances?: LightsailInstance[];

  /**
   * @schema LightsailGetInstancesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetKeyPairRequest
 */
export interface LightsailGetKeyPairRequest {
  /**
   * @schema LightsailGetKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

}

/**
 * @schema LightsailGetKeyPairResult
 */
export interface LightsailGetKeyPairResult {
  /**
   * @schema LightsailGetKeyPairResult#keyPair
   */
  readonly keyPair?: LightsailKeyPair;

}

/**
 * @schema LightsailGetKeyPairsRequest
 */
export interface LightsailGetKeyPairsRequest {
  /**
   * @schema LightsailGetKeyPairsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetKeyPairsResult
 */
export interface LightsailGetKeyPairsResult {
  /**
   * @schema LightsailGetKeyPairsResult#keyPairs
   */
  readonly keyPairs?: LightsailKeyPair[];

  /**
   * @schema LightsailGetKeyPairsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetLoadBalancerRequest
 */
export interface LightsailGetLoadBalancerRequest {
  /**
   * @schema LightsailGetLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

}

/**
 * @schema LightsailGetLoadBalancerResult
 */
export interface LightsailGetLoadBalancerResult {
  /**
   * @schema LightsailGetLoadBalancerResult#loadBalancer
   */
  readonly loadBalancer?: LightsailLoadBalancer;

}

/**
 * @schema LightsailGetLoadBalancerMetricDataRequest
 */
export interface LightsailGetLoadBalancerMetricDataRequest {
  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema LightsailGetLoadBalancerMetricDataResult
 */
export interface LightsailGetLoadBalancerMetricDataResult {
  /**
   * @schema LightsailGetLoadBalancerMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * @schema LightsailGetLoadBalancerTlsCertificatesRequest
 */
export interface LightsailGetLoadBalancerTlsCertificatesRequest {
  /**
   * @schema LightsailGetLoadBalancerTlsCertificatesRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

}

/**
 * @schema LightsailGetLoadBalancerTlsCertificatesResult
 */
export interface LightsailGetLoadBalancerTlsCertificatesResult {
  /**
   * @schema LightsailGetLoadBalancerTlsCertificatesResult#tlsCertificates
   */
  readonly tlsCertificates?: LightsailLoadBalancerTlsCertificate[];

}

/**
 * @schema LightsailGetLoadBalancersRequest
 */
export interface LightsailGetLoadBalancersRequest {
  /**
   * @schema LightsailGetLoadBalancersRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetLoadBalancersResult
 */
export interface LightsailGetLoadBalancersResult {
  /**
   * @schema LightsailGetLoadBalancersResult#loadBalancers
   */
  readonly loadBalancers?: LightsailLoadBalancer[];

  /**
   * @schema LightsailGetLoadBalancersResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetOperationRequest
 */
export interface LightsailGetOperationRequest {
  /**
   * @schema LightsailGetOperationRequest#operationId
   */
  readonly operationId: string;

}

/**
 * @schema LightsailGetOperationResult
 */
export interface LightsailGetOperationResult {
  /**
   * @schema LightsailGetOperationResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailGetOperationsRequest
 */
export interface LightsailGetOperationsRequest {
  /**
   * @schema LightsailGetOperationsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetOperationsResult
 */
export interface LightsailGetOperationsResult {
  /**
   * @schema LightsailGetOperationsResult#operations
   */
  readonly operations?: LightsailOperation[];

  /**
   * @schema LightsailGetOperationsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetOperationsForResourceRequest
 */
export interface LightsailGetOperationsForResourceRequest {
  /**
   * @schema LightsailGetOperationsForResourceRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailGetOperationsForResourceRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetOperationsForResourceResult
 */
export interface LightsailGetOperationsForResourceResult {
  /**
   * @schema LightsailGetOperationsForResourceResult#operations
   */
  readonly operations?: LightsailOperation[];

  /**
   * @schema LightsailGetOperationsForResourceResult#nextPageCount
   */
  readonly nextPageCount?: string;

  /**
   * @schema LightsailGetOperationsForResourceResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetRegionsRequest
 */
export interface LightsailGetRegionsRequest {
  /**
   * @schema LightsailGetRegionsRequest#includeAvailabilityZones
   */
  readonly includeAvailabilityZones?: boolean;

  /**
   * @schema LightsailGetRegionsRequest#includeRelationalDatabaseAvailabilityZones
   */
  readonly includeRelationalDatabaseAvailabilityZones?: boolean;

}

/**
 * @schema LightsailGetRegionsResult
 */
export interface LightsailGetRegionsResult {
  /**
   * @schema LightsailGetRegionsResult#regions
   */
  readonly regions?: LightsailRegion[];

}

/**
 * @schema LightsailGetRelationalDatabaseRequest
 */
export interface LightsailGetRelationalDatabaseRequest {
  /**
   * @schema LightsailGetRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * @schema LightsailGetRelationalDatabaseResult
 */
export interface LightsailGetRelationalDatabaseResult {
  /**
   * @schema LightsailGetRelationalDatabaseResult#relationalDatabase
   */
  readonly relationalDatabase?: LightsailRelationalDatabase;

}

/**
 * @schema LightsailGetRelationalDatabaseBlueprintsRequest
 */
export interface LightsailGetRelationalDatabaseBlueprintsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseBlueprintsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseBlueprintsResult
 */
export interface LightsailGetRelationalDatabaseBlueprintsResult {
  /**
   * @schema LightsailGetRelationalDatabaseBlueprintsResult#blueprints
   */
  readonly blueprints?: LightsailRelationalDatabaseBlueprint[];

  /**
   * @schema LightsailGetRelationalDatabaseBlueprintsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseBundlesRequest
 */
export interface LightsailGetRelationalDatabaseBundlesRequest {
  /**
   * @schema LightsailGetRelationalDatabaseBundlesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseBundlesResult
 */
export interface LightsailGetRelationalDatabaseBundlesResult {
  /**
   * @schema LightsailGetRelationalDatabaseBundlesResult#bundles
   */
  readonly bundles?: LightsailRelationalDatabaseBundle[];

  /**
   * @schema LightsailGetRelationalDatabaseBundlesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseEventsRequest
 */
export interface LightsailGetRelationalDatabaseEventsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseEventsRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseEventsRequest#durationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema LightsailGetRelationalDatabaseEventsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseEventsResult
 */
export interface LightsailGetRelationalDatabaseEventsResult {
  /**
   * @schema LightsailGetRelationalDatabaseEventsResult#relationalDatabaseEvents
   */
  readonly relationalDatabaseEvents?: LightsailRelationalDatabaseEvent[];

  /**
   * @schema LightsailGetRelationalDatabaseEventsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseLogEventsRequest
 */
export interface LightsailGetRelationalDatabaseLogEventsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#logStreamName
   */
  readonly logStreamName: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#startFromHead
   */
  readonly startFromHead?: boolean;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseLogEventsResult
 */
export interface LightsailGetRelationalDatabaseLogEventsResult {
  /**
   * @schema LightsailGetRelationalDatabaseLogEventsResult#resourceLogEvents
   */
  readonly resourceLogEvents?: LightsailLogEvent[];

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsResult#nextBackwardToken
   */
  readonly nextBackwardToken?: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsResult#nextForwardToken
   */
  readonly nextForwardToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseLogStreamsRequest
 */
export interface LightsailGetRelationalDatabaseLogStreamsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseLogStreamsRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * @schema LightsailGetRelationalDatabaseLogStreamsResult
 */
export interface LightsailGetRelationalDatabaseLogStreamsResult {
  /**
   * @schema LightsailGetRelationalDatabaseLogStreamsResult#logStreams
   */
  readonly logStreams?: string[];

}

/**
 * @schema LightsailGetRelationalDatabaseMasterUserPasswordRequest
 */
export interface LightsailGetRelationalDatabaseMasterUserPasswordRequest {
  /**
   * @schema LightsailGetRelationalDatabaseMasterUserPasswordRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseMasterUserPasswordRequest#passwordVersion
   */
  readonly passwordVersion?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseMasterUserPasswordResult
 */
export interface LightsailGetRelationalDatabaseMasterUserPasswordResult {
  /**
   * @schema LightsailGetRelationalDatabaseMasterUserPasswordResult#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema LightsailGetRelationalDatabaseMasterUserPasswordResult#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseMetricDataRequest
 */
export interface LightsailGetRelationalDatabaseMetricDataRequest {
  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema LightsailGetRelationalDatabaseMetricDataResult
 */
export interface LightsailGetRelationalDatabaseMetricDataResult {
  /**
   * @schema LightsailGetRelationalDatabaseMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * @schema LightsailGetRelationalDatabaseParametersRequest
 */
export interface LightsailGetRelationalDatabaseParametersRequest {
  /**
   * @schema LightsailGetRelationalDatabaseParametersRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseParametersRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseParametersResult
 */
export interface LightsailGetRelationalDatabaseParametersResult {
  /**
   * @schema LightsailGetRelationalDatabaseParametersResult#parameters
   */
  readonly parameters?: LightsailRelationalDatabaseParameter[];

  /**
   * @schema LightsailGetRelationalDatabaseParametersResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseSnapshotRequest
 */
export interface LightsailGetRelationalDatabaseSnapshotRequest {
  /**
   * @schema LightsailGetRelationalDatabaseSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName: string;

}

/**
 * @schema LightsailGetRelationalDatabaseSnapshotResult
 */
export interface LightsailGetRelationalDatabaseSnapshotResult {
  /**
   * @schema LightsailGetRelationalDatabaseSnapshotResult#relationalDatabaseSnapshot
   */
  readonly relationalDatabaseSnapshot?: LightsailRelationalDatabaseSnapshot;

}

/**
 * @schema LightsailGetRelationalDatabaseSnapshotsRequest
 */
export interface LightsailGetRelationalDatabaseSnapshotsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseSnapshotsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabaseSnapshotsResult
 */
export interface LightsailGetRelationalDatabaseSnapshotsResult {
  /**
   * @schema LightsailGetRelationalDatabaseSnapshotsResult#relationalDatabaseSnapshots
   */
  readonly relationalDatabaseSnapshots?: LightsailRelationalDatabaseSnapshot[];

  /**
   * @schema LightsailGetRelationalDatabaseSnapshotsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabasesRequest
 */
export interface LightsailGetRelationalDatabasesRequest {
  /**
   * @schema LightsailGetRelationalDatabasesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetRelationalDatabasesResult
 */
export interface LightsailGetRelationalDatabasesResult {
  /**
   * @schema LightsailGetRelationalDatabasesResult#relationalDatabases
   */
  readonly relationalDatabases?: LightsailRelationalDatabase[];

  /**
   * @schema LightsailGetRelationalDatabasesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailGetStaticIpRequest
 */
export interface LightsailGetStaticIpRequest {
  /**
   * @schema LightsailGetStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * @schema LightsailGetStaticIpResult
 */
export interface LightsailGetStaticIpResult {
  /**
   * @schema LightsailGetStaticIpResult#staticIp
   */
  readonly staticIp?: LightsailStaticIp;

}

/**
 * @schema LightsailGetStaticIpsRequest
 */
export interface LightsailGetStaticIpsRequest {
  /**
   * @schema LightsailGetStaticIpsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema LightsailGetStaticIpsResult
 */
export interface LightsailGetStaticIpsResult {
  /**
   * @schema LightsailGetStaticIpsResult#staticIps
   */
  readonly staticIps?: LightsailStaticIp[];

  /**
   * @schema LightsailGetStaticIpsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema LightsailImportKeyPairRequest
 */
export interface LightsailImportKeyPairRequest {
  /**
   * @schema LightsailImportKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

  /**
   * @schema LightsailImportKeyPairRequest#publicKeyBase64
   */
  readonly publicKeyBase64: string;

}

/**
 * @schema LightsailImportKeyPairResult
 */
export interface LightsailImportKeyPairResult {
  /**
   * @schema LightsailImportKeyPairResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailIsVpcPeeredRequest
 */
export interface LightsailIsVpcPeeredRequest {
}

/**
 * @schema LightsailIsVpcPeeredResult
 */
export interface LightsailIsVpcPeeredResult {
  /**
   * @schema LightsailIsVpcPeeredResult#isPeered
   */
  readonly isPeered?: boolean;

}

/**
 * @schema LightsailOpenInstancePublicPortsRequest
 */
export interface LightsailOpenInstancePublicPortsRequest {
  /**
   * @schema LightsailOpenInstancePublicPortsRequest#portInfo
   */
  readonly portInfo: LightsailPortInfo;

  /**
   * @schema LightsailOpenInstancePublicPortsRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailOpenInstancePublicPortsResult
 */
export interface LightsailOpenInstancePublicPortsResult {
  /**
   * @schema LightsailOpenInstancePublicPortsResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailPeerVpcRequest
 */
export interface LightsailPeerVpcRequest {
}

/**
 * @schema LightsailPeerVpcResult
 */
export interface LightsailPeerVpcResult {
  /**
   * @schema LightsailPeerVpcResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailPutAlarmRequest
 */
export interface LightsailPutAlarmRequest {
  /**
   * @schema LightsailPutAlarmRequest#alarmName
   */
  readonly alarmName: string;

  /**
   * @schema LightsailPutAlarmRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailPutAlarmRequest#monitoredResourceName
   */
  readonly monitoredResourceName: string;

  /**
   * @schema LightsailPutAlarmRequest#comparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema LightsailPutAlarmRequest#threshold
   */
  readonly threshold: number;

  /**
   * @schema LightsailPutAlarmRequest#evaluationPeriods
   */
  readonly evaluationPeriods: number;

  /**
   * @schema LightsailPutAlarmRequest#datapointsToAlarm
   */
  readonly datapointsToAlarm?: number;

  /**
   * @schema LightsailPutAlarmRequest#treatMissingData
   */
  readonly treatMissingData?: string;

  /**
   * @schema LightsailPutAlarmRequest#contactProtocols
   */
  readonly contactProtocols?: string[];

  /**
   * @schema LightsailPutAlarmRequest#notificationTriggers
   */
  readonly notificationTriggers?: string[];

  /**
   * @schema LightsailPutAlarmRequest#notificationEnabled
   */
  readonly notificationEnabled?: boolean;

}

/**
 * @schema LightsailPutAlarmResult
 */
export interface LightsailPutAlarmResult {
  /**
   * @schema LightsailPutAlarmResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailPutInstancePublicPortsRequest
 */
export interface LightsailPutInstancePublicPortsRequest {
  /**
   * @schema LightsailPutInstancePublicPortsRequest#portInfos
   */
  readonly portInfos: LightsailPortInfo[];

  /**
   * @schema LightsailPutInstancePublicPortsRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailPutInstancePublicPortsResult
 */
export interface LightsailPutInstancePublicPortsResult {
  /**
   * @schema LightsailPutInstancePublicPortsResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailRebootInstanceRequest
 */
export interface LightsailRebootInstanceRequest {
  /**
   * @schema LightsailRebootInstanceRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailRebootInstanceResult
 */
export interface LightsailRebootInstanceResult {
  /**
   * @schema LightsailRebootInstanceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailRebootRelationalDatabaseRequest
 */
export interface LightsailRebootRelationalDatabaseRequest {
  /**
   * @schema LightsailRebootRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * @schema LightsailRebootRelationalDatabaseResult
 */
export interface LightsailRebootRelationalDatabaseResult {
  /**
   * @schema LightsailRebootRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailRegisterContainerImageRequest
 */
export interface LightsailRegisterContainerImageRequest {
  /**
   * @schema LightsailRegisterContainerImageRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailRegisterContainerImageRequest#label
   */
  readonly label: string;

  /**
   * @schema LightsailRegisterContainerImageRequest#digest
   */
  readonly digest: string;

}

/**
 * @schema LightsailRegisterContainerImageResult
 */
export interface LightsailRegisterContainerImageResult {
  /**
   * @schema LightsailRegisterContainerImageResult#containerImage
   */
  readonly containerImage?: LightsailContainerImage;

}

/**
 * @schema LightsailReleaseStaticIpRequest
 */
export interface LightsailReleaseStaticIpRequest {
  /**
   * @schema LightsailReleaseStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * @schema LightsailReleaseStaticIpResult
 */
export interface LightsailReleaseStaticIpResult {
  /**
   * @schema LightsailReleaseStaticIpResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailResetDistributionCacheRequest
 */
export interface LightsailResetDistributionCacheRequest {
  /**
   * @schema LightsailResetDistributionCacheRequest#distributionName
   */
  readonly distributionName?: string;

}

/**
 * @schema LightsailResetDistributionCacheResult
 */
export interface LightsailResetDistributionCacheResult {
  /**
   * @schema LightsailResetDistributionCacheResult#status
   */
  readonly status?: string;

  /**
   * @schema LightsailResetDistributionCacheResult#createTime
   */
  readonly createTime?: string;

  /**
   * @schema LightsailResetDistributionCacheResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailSendContactMethodVerificationRequest
 */
export interface LightsailSendContactMethodVerificationRequest {
  /**
   * @schema LightsailSendContactMethodVerificationRequest#protocol
   */
  readonly protocol: string;

}

/**
 * @schema LightsailSendContactMethodVerificationResult
 */
export interface LightsailSendContactMethodVerificationResult {
  /**
   * @schema LightsailSendContactMethodVerificationResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailStartInstanceRequest
 */
export interface LightsailStartInstanceRequest {
  /**
   * @schema LightsailStartInstanceRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema LightsailStartInstanceResult
 */
export interface LightsailStartInstanceResult {
  /**
   * @schema LightsailStartInstanceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailStartRelationalDatabaseRequest
 */
export interface LightsailStartRelationalDatabaseRequest {
  /**
   * @schema LightsailStartRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * @schema LightsailStartRelationalDatabaseResult
 */
export interface LightsailStartRelationalDatabaseResult {
  /**
   * @schema LightsailStartRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailStopInstanceRequest
 */
export interface LightsailStopInstanceRequest {
  /**
   * @schema LightsailStopInstanceRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailStopInstanceRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema LightsailStopInstanceResult
 */
export interface LightsailStopInstanceResult {
  /**
   * @schema LightsailStopInstanceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailStopRelationalDatabaseRequest
 */
export interface LightsailStopRelationalDatabaseRequest {
  /**
   * @schema LightsailStopRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailStopRelationalDatabaseRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName?: string;

}

/**
 * @schema LightsailStopRelationalDatabaseResult
 */
export interface LightsailStopRelationalDatabaseResult {
  /**
   * @schema LightsailStopRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailTagResourceRequest
 */
export interface LightsailTagResourceRequest {
  /**
   * @schema LightsailTagResourceRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailTagResourceRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LightsailTagResourceRequest#tags
   */
  readonly tags: LightsailTag[];

}

/**
 * @schema LightsailTagResourceResult
 */
export interface LightsailTagResourceResult {
  /**
   * @schema LightsailTagResourceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailTestAlarmRequest
 */
export interface LightsailTestAlarmRequest {
  /**
   * @schema LightsailTestAlarmRequest#alarmName
   */
  readonly alarmName: string;

  /**
   * @schema LightsailTestAlarmRequest#state
   */
  readonly state: string;

}

/**
 * @schema LightsailTestAlarmResult
 */
export interface LightsailTestAlarmResult {
  /**
   * @schema LightsailTestAlarmResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailUnpeerVpcRequest
 */
export interface LightsailUnpeerVpcRequest {
}

/**
 * @schema LightsailUnpeerVpcResult
 */
export interface LightsailUnpeerVpcResult {
  /**
   * @schema LightsailUnpeerVpcResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailUntagResourceRequest
 */
export interface LightsailUntagResourceRequest {
  /**
   * @schema LightsailUntagResourceRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailUntagResourceRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LightsailUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema LightsailUntagResourceResult
 */
export interface LightsailUntagResourceResult {
  /**
   * @schema LightsailUntagResourceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailUpdateContainerServiceRequest
 */
export interface LightsailUpdateContainerServiceRequest {
  /**
   * @schema LightsailUpdateContainerServiceRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailUpdateContainerServiceRequest#power
   */
  readonly power?: string;

  /**
   * @schema LightsailUpdateContainerServiceRequest#scale
   */
  readonly scale?: number;

  /**
   * @schema LightsailUpdateContainerServiceRequest#isDisabled
   */
  readonly isDisabled?: boolean;

  /**
   * @schema LightsailUpdateContainerServiceRequest#publicDomainNames
   */
  readonly publicDomainNames?: { [key: string]: string[] };

}

/**
 * @schema LightsailUpdateContainerServiceResult
 */
export interface LightsailUpdateContainerServiceResult {
  /**
   * @schema LightsailUpdateContainerServiceResult#containerService
   */
  readonly containerService?: LightsailContainerService;

}

/**
 * @schema LightsailUpdateDistributionRequest
 */
export interface LightsailUpdateDistributionRequest {
  /**
   * @schema LightsailUpdateDistributionRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema LightsailUpdateDistributionRequest#origin
   */
  readonly origin?: LightsailInputOrigin;

  /**
   * @schema LightsailUpdateDistributionRequest#defaultCacheBehavior
   */
  readonly defaultCacheBehavior?: LightsailCacheBehavior;

  /**
   * @schema LightsailUpdateDistributionRequest#cacheBehaviorSettings
   */
  readonly cacheBehaviorSettings?: LightsailCacheSettings;

  /**
   * @schema LightsailUpdateDistributionRequest#cacheBehaviors
   */
  readonly cacheBehaviors?: LightsailCacheBehaviorPerPath[];

  /**
   * @schema LightsailUpdateDistributionRequest#isEnabled
   */
  readonly isEnabled?: boolean;

}

/**
 * @schema LightsailUpdateDistributionResult
 */
export interface LightsailUpdateDistributionResult {
  /**
   * @schema LightsailUpdateDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailUpdateDistributionBundleRequest
 */
export interface LightsailUpdateDistributionBundleRequest {
  /**
   * @schema LightsailUpdateDistributionBundleRequest#distributionName
   */
  readonly distributionName?: string;

  /**
   * @schema LightsailUpdateDistributionBundleRequest#bundleId
   */
  readonly bundleId?: string;

}

/**
 * @schema LightsailUpdateDistributionBundleResult
 */
export interface LightsailUpdateDistributionBundleResult {
  /**
   * @schema LightsailUpdateDistributionBundleResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * @schema LightsailUpdateDomainEntryRequest
 */
export interface LightsailUpdateDomainEntryRequest {
  /**
   * @schema LightsailUpdateDomainEntryRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailUpdateDomainEntryRequest#domainEntry
   */
  readonly domainEntry: LightsailDomainEntry;

}

/**
 * @schema LightsailUpdateDomainEntryResult
 */
export interface LightsailUpdateDomainEntryResult {
  /**
   * @schema LightsailUpdateDomainEntryResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailUpdateLoadBalancerAttributeRequest
 */
export interface LightsailUpdateLoadBalancerAttributeRequest {
  /**
   * @schema LightsailUpdateLoadBalancerAttributeRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailUpdateLoadBalancerAttributeRequest#attributeName
   */
  readonly attributeName: string;

  /**
   * @schema LightsailUpdateLoadBalancerAttributeRequest#attributeValue
   */
  readonly attributeValue: string;

}

/**
 * @schema LightsailUpdateLoadBalancerAttributeResult
 */
export interface LightsailUpdateLoadBalancerAttributeResult {
  /**
   * @schema LightsailUpdateLoadBalancerAttributeResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailUpdateRelationalDatabaseRequest
 */
export interface LightsailUpdateRelationalDatabaseRequest {
  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#rotateMasterUserPassword
   */
  readonly rotateMasterUserPassword?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#preferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#enableBackupRetention
   */
  readonly enableBackupRetention?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#disableBackupRetention
   */
  readonly disableBackupRetention?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#applyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#caCertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

}

/**
 * @schema LightsailUpdateRelationalDatabaseResult
 */
export interface LightsailUpdateRelationalDatabaseResult {
  /**
   * @schema LightsailUpdateRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailUpdateRelationalDatabaseParametersRequest
 */
export interface LightsailUpdateRelationalDatabaseParametersRequest {
  /**
   * @schema LightsailUpdateRelationalDatabaseParametersRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseParametersRequest#parameters
   */
  readonly parameters: LightsailRelationalDatabaseParameter[];

}

/**
 * @schema LightsailUpdateRelationalDatabaseParametersResult
 */
export interface LightsailUpdateRelationalDatabaseParametersResult {
  /**
   * @schema LightsailUpdateRelationalDatabaseParametersResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * @schema LightsailOperation
 */
export interface LightsailOperation {
  /**
   * @schema LightsailOperation#id
   */
  readonly id?: string;

  /**
   * @schema LightsailOperation#resourceName
   */
  readonly resourceName?: string;

  /**
   * @schema LightsailOperation#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailOperation#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailOperation#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailOperation#isTerminal
   */
  readonly isTerminal?: boolean;

  /**
   * @schema LightsailOperation#operationDetails
   */
  readonly operationDetails?: string;

  /**
   * @schema LightsailOperation#operationType
   */
  readonly operationType?: string;

  /**
   * @schema LightsailOperation#status
   */
  readonly status?: string;

  /**
   * @schema LightsailOperation#statusChangedAt
   */
  readonly statusChangedAt?: string;

  /**
   * @schema LightsailOperation#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema LightsailOperation#errorDetails
   */
  readonly errorDetails?: string;

}

/**
 * @schema LightsailPortInfo
 */
export interface LightsailPortInfo {
  /**
   * @schema LightsailPortInfo#fromPort
   */
  readonly fromPort?: number;

  /**
   * @schema LightsailPortInfo#toPort
   */
  readonly toPort?: number;

  /**
   * @schema LightsailPortInfo#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailPortInfo#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema LightsailPortInfo#cidrListAliases
   */
  readonly cidrListAliases?: string[];

}

/**
 * @schema LightsailTag
 */
export interface LightsailTag {
  /**
   * @schema LightsailTag#key
   */
  readonly key?: string;

  /**
   * @schema LightsailTag#value
   */
  readonly value?: string;

}

/**
 * @schema LightsailCertificateSummary
 */
export interface LightsailCertificateSummary {
  /**
   * @schema LightsailCertificateSummary#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema LightsailCertificateSummary#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema LightsailCertificateSummary#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailCertificateSummary#certificateDetail
   */
  readonly certificateDetail?: LightsailCertificate;

  /**
   * @schema LightsailCertificateSummary#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailInstanceEntry
 */
export interface LightsailInstanceEntry {
  /**
   * @schema LightsailInstanceEntry#sourceName
   */
  readonly sourceName: string;

  /**
   * @schema LightsailInstanceEntry#instanceType
   */
  readonly instanceType: string;

  /**
   * @schema LightsailInstanceEntry#portInfoSource
   */
  readonly portInfoSource: string;

  /**
   * @schema LightsailInstanceEntry#userData
   */
  readonly userData?: string;

  /**
   * @schema LightsailInstanceEntry#availabilityZone
   */
  readonly availabilityZone: string;

}

/**
 * @schema LightsailContainerServiceDeploymentRequest
 */
export interface LightsailContainerServiceDeploymentRequest {
  /**
   * @schema LightsailContainerServiceDeploymentRequest#containers
   */
  readonly containers?: { [key: string]: LightsailContainer };

  /**
   * @schema LightsailContainerServiceDeploymentRequest#publicEndpoint
   */
  readonly publicEndpoint?: LightsailEndpointRequest;

}

/**
 * @schema LightsailContainerService
 */
export interface LightsailContainerService {
  /**
   * @schema LightsailContainerService#containerServiceName
   */
  readonly containerServiceName?: string;

  /**
   * @schema LightsailContainerService#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailContainerService#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailContainerService#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailContainerService#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailContainerService#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailContainerService#power
   */
  readonly power?: string;

  /**
   * @schema LightsailContainerService#powerId
   */
  readonly powerId?: string;

  /**
   * @schema LightsailContainerService#state
   */
  readonly state?: string;

  /**
   * @schema LightsailContainerService#scale
   */
  readonly scale?: number;

  /**
   * @schema LightsailContainerService#currentDeployment
   */
  readonly currentDeployment?: LightsailContainerServiceDeployment;

  /**
   * @schema LightsailContainerService#nextDeployment
   */
  readonly nextDeployment?: LightsailContainerServiceDeployment;

  /**
   * @schema LightsailContainerService#isDisabled
   */
  readonly isDisabled?: boolean;

  /**
   * @schema LightsailContainerService#principalArn
   */
  readonly principalArn?: string;

  /**
   * @schema LightsailContainerService#privateDomainName
   */
  readonly privateDomainName?: string;

  /**
   * @schema LightsailContainerService#publicDomainNames
   */
  readonly publicDomainNames?: { [key: string]: string[] };

  /**
   * @schema LightsailContainerService#url
   */
  readonly url?: string;

}

/**
 * @schema LightsailContainer
 */
export interface LightsailContainer {
  /**
   * @schema LightsailContainer#image
   */
  readonly image?: string;

  /**
   * @schema LightsailContainer#command
   */
  readonly command?: string[];

  /**
   * @schema LightsailContainer#environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema LightsailContainer#ports
   */
  readonly ports?: { [key: string]: string };

}

/**
 * @schema LightsailEndpointRequest
 */
export interface LightsailEndpointRequest {
  /**
   * @schema LightsailEndpointRequest#containerName
   */
  readonly containerName: string;

  /**
   * @schema LightsailEndpointRequest#containerPort
   */
  readonly containerPort: number;

  /**
   * @schema LightsailEndpointRequest#healthCheck
   */
  readonly healthCheck?: LightsailContainerServiceHealthCheckConfig;

}

/**
 * @schema LightsailContainerServiceRegistryLogin
 */
export interface LightsailContainerServiceRegistryLogin {
  /**
   * @schema LightsailContainerServiceRegistryLogin#username
   */
  readonly username?: string;

  /**
   * @schema LightsailContainerServiceRegistryLogin#password
   */
  readonly password?: string;

  /**
   * @schema LightsailContainerServiceRegistryLogin#expiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema LightsailContainerServiceRegistryLogin#registry
   */
  readonly registry?: string;

}

/**
 * @schema LightsailAddOnRequest
 */
export interface LightsailAddOnRequest {
  /**
   * @schema LightsailAddOnRequest#addOnType
   */
  readonly addOnType: string;

  /**
   * @schema LightsailAddOnRequest#autoSnapshotAddOnRequest
   */
  readonly autoSnapshotAddOnRequest?: LightsailAutoSnapshotAddOnRequest;

}

/**
 * @schema LightsailInputOrigin
 */
export interface LightsailInputOrigin {
  /**
   * @schema LightsailInputOrigin#name
   */
  readonly name?: string;

  /**
   * @schema LightsailInputOrigin#regionName
   */
  readonly regionName?: string;

  /**
   * @schema LightsailInputOrigin#protocolPolicy
   */
  readonly protocolPolicy?: string;

}

/**
 * @schema LightsailCacheBehavior
 */
export interface LightsailCacheBehavior {
  /**
   * @schema LightsailCacheBehavior#behavior
   */
  readonly behavior?: string;

}

/**
 * @schema LightsailCacheSettings
 */
export interface LightsailCacheSettings {
  /**
   * @schema LightsailCacheSettings#defaultTTL
   */
  readonly defaultTTL?: number;

  /**
   * @schema LightsailCacheSettings#minimumTTL
   */
  readonly minimumTTL?: number;

  /**
   * @schema LightsailCacheSettings#maximumTTL
   */
  readonly maximumTTL?: number;

  /**
   * @schema LightsailCacheSettings#allowedHTTPMethods
   */
  readonly allowedHTTPMethods?: string;

  /**
   * @schema LightsailCacheSettings#cachedHTTPMethods
   */
  readonly cachedHTTPMethods?: string;

  /**
   * @schema LightsailCacheSettings#forwardedCookies
   */
  readonly forwardedCookies?: LightsailCookieObject;

  /**
   * @schema LightsailCacheSettings#forwardedHeaders
   */
  readonly forwardedHeaders?: LightsailHeaderObject;

  /**
   * @schema LightsailCacheSettings#forwardedQueryStrings
   */
  readonly forwardedQueryStrings?: LightsailQueryStringObject;

}

/**
 * @schema LightsailCacheBehaviorPerPath
 */
export interface LightsailCacheBehaviorPerPath {
  /**
   * @schema LightsailCacheBehaviorPerPath#path
   */
  readonly path?: string;

  /**
   * @schema LightsailCacheBehaviorPerPath#behavior
   */
  readonly behavior?: string;

}

/**
 * @schema LightsailLightsailDistribution
 */
export interface LightsailLightsailDistribution {
  /**
   * @schema LightsailLightsailDistribution#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLightsailDistribution#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailLightsailDistribution#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailLightsailDistribution#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailLightsailDistribution#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailLightsailDistribution#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailLightsailDistribution#alternativeDomainNames
   */
  readonly alternativeDomainNames?: string[];

  /**
   * @schema LightsailLightsailDistribution#status
   */
  readonly status?: string;

  /**
   * @schema LightsailLightsailDistribution#isEnabled
   */
  readonly isEnabled?: boolean;

  /**
   * @schema LightsailLightsailDistribution#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailLightsailDistribution#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailLightsailDistribution#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema LightsailLightsailDistribution#origin
   */
  readonly origin?: LightsailOrigin;

  /**
   * @schema LightsailLightsailDistribution#originPublicDNS
   */
  readonly originPublicDNS?: string;

  /**
   * @schema LightsailLightsailDistribution#defaultCacheBehavior
   */
  readonly defaultCacheBehavior?: LightsailCacheBehavior;

  /**
   * @schema LightsailLightsailDistribution#cacheBehaviorSettings
   */
  readonly cacheBehaviorSettings?: LightsailCacheSettings;

  /**
   * @schema LightsailLightsailDistribution#cacheBehaviors
   */
  readonly cacheBehaviors?: LightsailCacheBehaviorPerPath[];

  /**
   * @schema LightsailLightsailDistribution#ableToUpdateBundle
   */
  readonly ableToUpdateBundle?: boolean;

  /**
   * @schema LightsailLightsailDistribution#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * @schema LightsailDomainEntry
 */
export interface LightsailDomainEntry {
  /**
   * @schema LightsailDomainEntry#id
   */
  readonly id?: string;

  /**
   * @schema LightsailDomainEntry#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDomainEntry#target
   */
  readonly target?: string;

  /**
   * @schema LightsailDomainEntry#isAlias
   */
  readonly isAlias?: boolean;

  /**
   * @schema LightsailDomainEntry#type
   */
  readonly type?: string;

  /**
   * @schema LightsailDomainEntry#options
   */
  readonly options?: { [key: string]: string };

}

/**
 * @schema LightsailDiskMap
 */
export interface LightsailDiskMap {
  /**
   * @schema LightsailDiskMap#originalDiskPath
   */
  readonly originalDiskPath?: string;

  /**
   * @schema LightsailDiskMap#newDiskName
   */
  readonly newDiskName?: string;

}

/**
 * @schema LightsailKeyPair
 */
export interface LightsailKeyPair {
  /**
   * @schema LightsailKeyPair#name
   */
  readonly name?: string;

  /**
   * @schema LightsailKeyPair#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailKeyPair#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailKeyPair#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailKeyPair#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailKeyPair#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailKeyPair#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailKeyPair#fingerprint
   */
  readonly fingerprint?: string;

}

/**
 * @schema LightsailAlarm
 */
export interface LightsailAlarm {
  /**
   * @schema LightsailAlarm#name
   */
  readonly name?: string;

  /**
   * @schema LightsailAlarm#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailAlarm#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailAlarm#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailAlarm#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailAlarm#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailAlarm#monitoredResourceInfo
   */
  readonly monitoredResourceInfo?: LightsailMonitoredResourceInfo;

  /**
   * @schema LightsailAlarm#comparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema LightsailAlarm#evaluationPeriods
   */
  readonly evaluationPeriods?: number;

  /**
   * @schema LightsailAlarm#period
   */
  readonly period?: number;

  /**
   * @schema LightsailAlarm#threshold
   */
  readonly threshold?: number;

  /**
   * @schema LightsailAlarm#datapointsToAlarm
   */
  readonly datapointsToAlarm?: number;

  /**
   * @schema LightsailAlarm#treatMissingData
   */
  readonly treatMissingData?: string;

  /**
   * @schema LightsailAlarm#statistic
   */
  readonly statistic?: string;

  /**
   * @schema LightsailAlarm#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailAlarm#state
   */
  readonly state?: string;

  /**
   * @schema LightsailAlarm#unit
   */
  readonly unit?: string;

  /**
   * @schema LightsailAlarm#contactProtocols
   */
  readonly contactProtocols?: string[];

  /**
   * @schema LightsailAlarm#notificationTriggers
   */
  readonly notificationTriggers?: string[];

  /**
   * @schema LightsailAlarm#notificationEnabled
   */
  readonly notificationEnabled?: boolean;

}

/**
 * @schema LightsailAutoSnapshotDetails
 */
export interface LightsailAutoSnapshotDetails {
  /**
   * @schema LightsailAutoSnapshotDetails#date
   */
  readonly date?: string;

  /**
   * @schema LightsailAutoSnapshotDetails#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailAutoSnapshotDetails#status
   */
  readonly status?: string;

  /**
   * @schema LightsailAutoSnapshotDetails#fromAttachedDisks
   */
  readonly fromAttachedDisks?: LightsailAttachedDisk[];

}

/**
 * @schema LightsailBlueprint
 */
export interface LightsailBlueprint {
  /**
   * @schema LightsailBlueprint#blueprintId
   */
  readonly blueprintId?: string;

  /**
   * @schema LightsailBlueprint#name
   */
  readonly name?: string;

  /**
   * @schema LightsailBlueprint#group
   */
  readonly group?: string;

  /**
   * @schema LightsailBlueprint#type
   */
  readonly type?: string;

  /**
   * @schema LightsailBlueprint#description
   */
  readonly description?: string;

  /**
   * @schema LightsailBlueprint#isActive
   */
  readonly isActive?: boolean;

  /**
   * @schema LightsailBlueprint#minPower
   */
  readonly minPower?: number;

  /**
   * @schema LightsailBlueprint#version
   */
  readonly version?: string;

  /**
   * @schema LightsailBlueprint#versionCode
   */
  readonly versionCode?: string;

  /**
   * @schema LightsailBlueprint#productUrl
   */
  readonly productUrl?: string;

  /**
   * @schema LightsailBlueprint#licenseUrl
   */
  readonly licenseUrl?: string;

  /**
   * @schema LightsailBlueprint#platform
   */
  readonly platform?: string;

}

/**
 * @schema LightsailBundle
 */
export interface LightsailBundle {
  /**
   * @schema LightsailBundle#price
   */
  readonly price?: number;

  /**
   * @schema LightsailBundle#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailBundle#diskSizeInGb
   */
  readonly diskSizeInGb?: number;

  /**
   * @schema LightsailBundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailBundle#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema LightsailBundle#isActive
   */
  readonly isActive?: boolean;

  /**
   * @schema LightsailBundle#name
   */
  readonly name?: string;

  /**
   * @schema LightsailBundle#power
   */
  readonly power?: number;

  /**
   * @schema LightsailBundle#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

  /**
   * @schema LightsailBundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema LightsailBundle#supportedPlatforms
   */
  readonly supportedPlatforms?: string[];

}

/**
 * @schema LightsailCloudFormationStackRecord
 */
export interface LightsailCloudFormationStackRecord {
  /**
   * @schema LightsailCloudFormationStackRecord#name
   */
  readonly name?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailCloudFormationStackRecord#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#state
   */
  readonly state?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#sourceInfo
   */
  readonly sourceInfo?: LightsailCloudFormationStackRecordSourceInfo[];

  /**
   * @schema LightsailCloudFormationStackRecord#destinationInfo
   */
  readonly destinationInfo?: LightsailDestinationInfo;

}

/**
 * @schema LightsailContactMethod
 */
export interface LightsailContactMethod {
  /**
   * @schema LightsailContactMethod#contactEndpoint
   */
  readonly contactEndpoint?: string;

  /**
   * @schema LightsailContactMethod#status
   */
  readonly status?: string;

  /**
   * @schema LightsailContactMethod#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailContactMethod#name
   */
  readonly name?: string;

  /**
   * @schema LightsailContactMethod#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailContactMethod#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailContactMethod#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailContactMethod#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailContactMethod#supportCode
   */
  readonly supportCode?: string;

}

/**
 * @schema LightsailContainerImage
 */
export interface LightsailContainerImage {
  /**
   * @schema LightsailContainerImage#image
   */
  readonly image?: string;

  /**
   * @schema LightsailContainerImage#digest
   */
  readonly digest?: string;

  /**
   * @schema LightsailContainerImage#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema LightsailContainerServiceLogEvent
 */
export interface LightsailContainerServiceLogEvent {
  /**
   * @schema LightsailContainerServiceLogEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailContainerServiceLogEvent#message
   */
  readonly message?: string;

}

/**
 * @schema LightsailContainerServiceDeployment
 */
export interface LightsailContainerServiceDeployment {
  /**
   * @schema LightsailContainerServiceDeployment#version
   */
  readonly version?: number;

  /**
   * @schema LightsailContainerServiceDeployment#state
   */
  readonly state?: string;

  /**
   * @schema LightsailContainerServiceDeployment#containers
   */
  readonly containers?: { [key: string]: LightsailContainer };

  /**
   * @schema LightsailContainerServiceDeployment#publicEndpoint
   */
  readonly publicEndpoint?: LightsailContainerServiceEndpoint;

  /**
   * @schema LightsailContainerServiceDeployment#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema LightsailMetricDatapoint
 */
export interface LightsailMetricDatapoint {
  /**
   * @schema LightsailMetricDatapoint#average
   */
  readonly average?: number;

  /**
   * @schema LightsailMetricDatapoint#maximum
   */
  readonly maximum?: number;

  /**
   * @schema LightsailMetricDatapoint#minimum
   */
  readonly minimum?: number;

  /**
   * @schema LightsailMetricDatapoint#sampleCount
   */
  readonly sampleCount?: number;

  /**
   * @schema LightsailMetricDatapoint#sum
   */
  readonly sum?: number;

  /**
   * @schema LightsailMetricDatapoint#timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema LightsailMetricDatapoint#unit
   */
  readonly unit?: string;

}

/**
 * @schema LightsailContainerServicePower
 */
export interface LightsailContainerServicePower {
  /**
   * @schema LightsailContainerServicePower#powerId
   */
  readonly powerId?: string;

  /**
   * @schema LightsailContainerServicePower#price
   */
  readonly price?: number;

  /**
   * @schema LightsailContainerServicePower#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailContainerServicePower#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

  /**
   * @schema LightsailContainerServicePower#name
   */
  readonly name?: string;

  /**
   * @schema LightsailContainerServicePower#isActive
   */
  readonly isActive?: boolean;

}

/**
 * @schema LightsailDisk
 */
export interface LightsailDisk {
  /**
   * @schema LightsailDisk#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDisk#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailDisk#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailDisk#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailDisk#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailDisk#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailDisk#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailDisk#addOns
   */
  readonly addOns?: LightsailAddOn[];

  /**
   * @schema LightsailDisk#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema LightsailDisk#isSystemDisk
   */
  readonly isSystemDisk?: boolean;

  /**
   * @schema LightsailDisk#iops
   */
  readonly iops?: number;

  /**
   * @schema LightsailDisk#path
   */
  readonly path?: string;

  /**
   * @schema LightsailDisk#state
   */
  readonly state?: string;

  /**
   * @schema LightsailDisk#attachedTo
   */
  readonly attachedTo?: string;

  /**
   * @schema LightsailDisk#isAttached
   */
  readonly isAttached?: boolean;

  /**
   * @schema LightsailDisk#attachmentState
   */
  readonly attachmentState?: string;

  /**
   * @schema LightsailDisk#gbInUse
   */
  readonly gbInUse?: number;

}

/**
 * @schema LightsailDiskSnapshot
 */
export interface LightsailDiskSnapshot {
  /**
   * @schema LightsailDiskSnapshot#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDiskSnapshot#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailDiskSnapshot#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailDiskSnapshot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailDiskSnapshot#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailDiskSnapshot#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailDiskSnapshot#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailDiskSnapshot#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema LightsailDiskSnapshot#state
   */
  readonly state?: string;

  /**
   * @schema LightsailDiskSnapshot#progress
   */
  readonly progress?: string;

  /**
   * @schema LightsailDiskSnapshot#fromDiskName
   */
  readonly fromDiskName?: string;

  /**
   * @schema LightsailDiskSnapshot#fromDiskArn
   */
  readonly fromDiskArn?: string;

  /**
   * @schema LightsailDiskSnapshot#fromInstanceName
   */
  readonly fromInstanceName?: string;

  /**
   * @schema LightsailDiskSnapshot#fromInstanceArn
   */
  readonly fromInstanceArn?: string;

  /**
   * @schema LightsailDiskSnapshot#isFromAutoSnapshot
   */
  readonly isFromAutoSnapshot?: boolean;

}

/**
 * @schema LightsailDistributionBundle
 */
export interface LightsailDistributionBundle {
  /**
   * @schema LightsailDistributionBundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailDistributionBundle#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDistributionBundle#price
   */
  readonly price?: number;

  /**
   * @schema LightsailDistributionBundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema LightsailDistributionBundle#isActive
   */
  readonly isActive?: boolean;

}

/**
 * @schema LightsailDomain
 */
export interface LightsailDomain {
  /**
   * @schema LightsailDomain#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDomain#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailDomain#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailDomain#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailDomain#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailDomain#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailDomain#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailDomain#domainEntries
   */
  readonly domainEntries?: LightsailDomainEntry[];

}

/**
 * @schema LightsailExportSnapshotRecord
 */
export interface LightsailExportSnapshotRecord {
  /**
   * @schema LightsailExportSnapshotRecord#name
   */
  readonly name?: string;

  /**
   * @schema LightsailExportSnapshotRecord#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailExportSnapshotRecord#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailExportSnapshotRecord#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailExportSnapshotRecord#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailExportSnapshotRecord#state
   */
  readonly state?: string;

  /**
   * @schema LightsailExportSnapshotRecord#sourceInfo
   */
  readonly sourceInfo?: LightsailExportSnapshotRecordSourceInfo;

  /**
   * @schema LightsailExportSnapshotRecord#destinationInfo
   */
  readonly destinationInfo?: LightsailDestinationInfo;

}

/**
 * @schema LightsailInstance
 */
export interface LightsailInstance {
  /**
   * @schema LightsailInstance#name
   */
  readonly name?: string;

  /**
   * @schema LightsailInstance#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailInstance#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailInstance#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailInstance#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailInstance#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailInstance#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailInstance#blueprintId
   */
  readonly blueprintId?: string;

  /**
   * @schema LightsailInstance#blueprintName
   */
  readonly blueprintName?: string;

  /**
   * @schema LightsailInstance#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailInstance#addOns
   */
  readonly addOns?: LightsailAddOn[];

  /**
   * @schema LightsailInstance#isStaticIp
   */
  readonly isStaticIp?: boolean;

  /**
   * @schema LightsailInstance#privateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema LightsailInstance#publicIpAddress
   */
  readonly publicIpAddress?: string;

  /**
   * @schema LightsailInstance#ipv6Address
   */
  readonly ipv6Address?: string;

  /**
   * @schema LightsailInstance#hardware
   */
  readonly hardware?: LightsailInstanceHardware;

  /**
   * @schema LightsailInstance#networking
   */
  readonly networking?: LightsailInstanceNetworking;

  /**
   * @schema LightsailInstance#state
   */
  readonly state?: LightsailInstanceState;

  /**
   * @schema LightsailInstance#username
   */
  readonly username?: string;

  /**
   * @schema LightsailInstance#sshKeyName
   */
  readonly sshKeyName?: string;

}

/**
 * @schema LightsailInstanceAccessDetails
 */
export interface LightsailInstanceAccessDetails {
  /**
   * @schema LightsailInstanceAccessDetails#certKey
   */
  readonly certKey?: string;

  /**
   * @schema LightsailInstanceAccessDetails#expiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema LightsailInstanceAccessDetails#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema LightsailInstanceAccessDetails#password
   */
  readonly password?: string;

  /**
   * @schema LightsailInstanceAccessDetails#passwordData
   */
  readonly passwordData?: LightsailPasswordData;

  /**
   * @schema LightsailInstanceAccessDetails#privateKey
   */
  readonly privateKey?: string;

  /**
   * @schema LightsailInstanceAccessDetails#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailInstanceAccessDetails#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema LightsailInstanceAccessDetails#username
   */
  readonly username?: string;

  /**
   * @schema LightsailInstanceAccessDetails#hostKeys
   */
  readonly hostKeys?: LightsailHostKeyAttributes[];

}

/**
 * @schema LightsailInstancePortState
 */
export interface LightsailInstancePortState {
  /**
   * @schema LightsailInstancePortState#fromPort
   */
  readonly fromPort?: number;

  /**
   * @schema LightsailInstancePortState#toPort
   */
  readonly toPort?: number;

  /**
   * @schema LightsailInstancePortState#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailInstancePortState#state
   */
  readonly state?: string;

  /**
   * @schema LightsailInstancePortState#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema LightsailInstancePortState#cidrListAliases
   */
  readonly cidrListAliases?: string[];

}

/**
 * @schema LightsailInstanceSnapshot
 */
export interface LightsailInstanceSnapshot {
  /**
   * @schema LightsailInstanceSnapshot#name
   */
  readonly name?: string;

  /**
   * @schema LightsailInstanceSnapshot#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailInstanceSnapshot#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailInstanceSnapshot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailInstanceSnapshot#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailInstanceSnapshot#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailInstanceSnapshot#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailInstanceSnapshot#state
   */
  readonly state?: string;

  /**
   * @schema LightsailInstanceSnapshot#progress
   */
  readonly progress?: string;

  /**
   * @schema LightsailInstanceSnapshot#fromAttachedDisks
   */
  readonly fromAttachedDisks?: LightsailDisk[];

  /**
   * @schema LightsailInstanceSnapshot#fromInstanceName
   */
  readonly fromInstanceName?: string;

  /**
   * @schema LightsailInstanceSnapshot#fromInstanceArn
   */
  readonly fromInstanceArn?: string;

  /**
   * @schema LightsailInstanceSnapshot#fromBlueprintId
   */
  readonly fromBlueprintId?: string;

  /**
   * @schema LightsailInstanceSnapshot#fromBundleId
   */
  readonly fromBundleId?: string;

  /**
   * @schema LightsailInstanceSnapshot#isFromAutoSnapshot
   */
  readonly isFromAutoSnapshot?: boolean;

  /**
   * @schema LightsailInstanceSnapshot#sizeInGb
   */
  readonly sizeInGb?: number;

}

/**
 * @schema LightsailInstanceState
 */
export interface LightsailInstanceState {
  /**
   * @schema LightsailInstanceState#code
   */
  readonly code?: number;

  /**
   * @schema LightsailInstanceState#name
   */
  readonly name?: string;

}

/**
 * @schema LightsailLoadBalancer
 */
export interface LightsailLoadBalancer {
  /**
   * @schema LightsailLoadBalancer#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLoadBalancer#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailLoadBalancer#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailLoadBalancer#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailLoadBalancer#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailLoadBalancer#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailLoadBalancer#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailLoadBalancer#dnsName
   */
  readonly dnsName?: string;

  /**
   * @schema LightsailLoadBalancer#state
   */
  readonly state?: string;

  /**
   * @schema LightsailLoadBalancer#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailLoadBalancer#publicPorts
   */
  readonly publicPorts?: number[];

  /**
   * @schema LightsailLoadBalancer#healthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema LightsailLoadBalancer#instancePort
   */
  readonly instancePort?: number;

  /**
   * @schema LightsailLoadBalancer#instanceHealthSummary
   */
  readonly instanceHealthSummary?: LightsailInstanceHealthSummary[];

  /**
   * @schema LightsailLoadBalancer#tlsCertificateSummaries
   */
  readonly tlsCertificateSummaries?: LightsailLoadBalancerTlsCertificateSummary[];

  /**
   * @schema LightsailLoadBalancer#configurationOptions
   */
  readonly configurationOptions?: { [key: string]: string };

}

/**
 * @schema LightsailLoadBalancerTlsCertificate
 */
export interface LightsailLoadBalancerTlsCertificate {
  /**
   * @schema LightsailLoadBalancerTlsCertificate#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailLoadBalancerTlsCertificate#loadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#isAttached
   */
  readonly isAttached?: boolean;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#status
   */
  readonly status?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#domainValidationRecords
   */
  readonly domainValidationRecords?: LightsailLoadBalancerTlsCertificateDomainValidationRecord[];

  /**
   * @schema LightsailLoadBalancerTlsCertificate#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#issuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#issuer
   */
  readonly issuer?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#keyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#notAfter
   */
  readonly notAfter?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#notBefore
   */
  readonly notBefore?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#renewalSummary
   */
  readonly renewalSummary?: LightsailLoadBalancerTlsCertificateRenewalSummary;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#revocationReason
   */
  readonly revocationReason?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#serial
   */
  readonly serial?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#signatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#subject
   */
  readonly subject?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

}

/**
 * @schema LightsailRegion
 */
export interface LightsailRegion {
  /**
   * @schema LightsailRegion#continentCode
   */
  readonly continentCode?: string;

  /**
   * @schema LightsailRegion#description
   */
  readonly description?: string;

  /**
   * @schema LightsailRegion#displayName
   */
  readonly displayName?: string;

  /**
   * @schema LightsailRegion#name
   */
  readonly name?: string;

  /**
   * @schema LightsailRegion#availabilityZones
   */
  readonly availabilityZones?: LightsailAvailabilityZone[];

  /**
   * @schema LightsailRegion#relationalDatabaseAvailabilityZones
   */
  readonly relationalDatabaseAvailabilityZones?: LightsailAvailabilityZone[];

}

/**
 * @schema LightsailRelationalDatabase
 */
export interface LightsailRelationalDatabase {
  /**
   * @schema LightsailRelationalDatabase#name
   */
  readonly name?: string;

  /**
   * @schema LightsailRelationalDatabase#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailRelationalDatabase#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailRelationalDatabase#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailRelationalDatabase#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailRelationalDatabase#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailRelationalDatabase#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailRelationalDatabase#relationalDatabaseBlueprintId
   */
  readonly relationalDatabaseBlueprintId?: string;

  /**
   * @schema LightsailRelationalDatabase#relationalDatabaseBundleId
   */
  readonly relationalDatabaseBundleId?: string;

  /**
   * @schema LightsailRelationalDatabase#masterDatabaseName
   */
  readonly masterDatabaseName?: string;

  /**
   * @schema LightsailRelationalDatabase#hardware
   */
  readonly hardware?: LightsailRelationalDatabaseHardware;

  /**
   * @schema LightsailRelationalDatabase#state
   */
  readonly state?: string;

  /**
   * @schema LightsailRelationalDatabase#secondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema LightsailRelationalDatabase#backupRetentionEnabled
   */
  readonly backupRetentionEnabled?: boolean;

  /**
   * @schema LightsailRelationalDatabase#pendingModifiedValues
   */
  readonly pendingModifiedValues?: LightsailPendingModifiedRelationalDatabaseValues;

  /**
   * @schema LightsailRelationalDatabase#engine
   */
  readonly engine?: string;

  /**
   * @schema LightsailRelationalDatabase#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema LightsailRelationalDatabase#latestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema LightsailRelationalDatabase#masterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema LightsailRelationalDatabase#parameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema LightsailRelationalDatabase#preferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema LightsailRelationalDatabase#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema LightsailRelationalDatabase#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema LightsailRelationalDatabase#masterEndpoint
   */
  readonly masterEndpoint?: LightsailRelationalDatabaseEndpoint;

  /**
   * @schema LightsailRelationalDatabase#pendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: LightsailPendingMaintenanceAction[];

  /**
   * @schema LightsailRelationalDatabase#caCertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

}

/**
 * @schema LightsailRelationalDatabaseBlueprint
 */
export interface LightsailRelationalDatabaseBlueprint {
  /**
   * @schema LightsailRelationalDatabaseBlueprint#blueprintId
   */
  readonly blueprintId?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#engine
   */
  readonly engine?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#engineDescription
   */
  readonly engineDescription?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#engineVersionDescription
   */
  readonly engineVersionDescription?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#isEngineDefault
   */
  readonly isEngineDefault?: boolean;

}

/**
 * @schema LightsailRelationalDatabaseBundle
 */
export interface LightsailRelationalDatabaseBundle {
  /**
   * @schema LightsailRelationalDatabaseBundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailRelationalDatabaseBundle#name
   */
  readonly name?: string;

  /**
   * @schema LightsailRelationalDatabaseBundle#price
   */
  readonly price?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#diskSizeInGb
   */
  readonly diskSizeInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#isEncrypted
   */
  readonly isEncrypted?: boolean;

  /**
   * @schema LightsailRelationalDatabaseBundle#isActive
   */
  readonly isActive?: boolean;

}

/**
 * @schema LightsailRelationalDatabaseEvent
 */
export interface LightsailRelationalDatabaseEvent {
  /**
   * @schema LightsailRelationalDatabaseEvent#resource
   */
  readonly resource?: string;

  /**
   * @schema LightsailRelationalDatabaseEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailRelationalDatabaseEvent#message
   */
  readonly message?: string;

  /**
   * @schema LightsailRelationalDatabaseEvent#eventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * @schema LightsailLogEvent
 */
export interface LightsailLogEvent {
  /**
   * @schema LightsailLogEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailLogEvent#message
   */
  readonly message?: string;

}

/**
 * @schema LightsailRelationalDatabaseParameter
 */
export interface LightsailRelationalDatabaseParameter {
  /**
   * @schema LightsailRelationalDatabaseParameter#allowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#applyMethod
   */
  readonly applyMethod?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#applyType
   */
  readonly applyType?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#dataType
   */
  readonly dataType?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#description
   */
  readonly description?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#isModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema LightsailRelationalDatabaseParameter#parameterName
   */
  readonly parameterName?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#parameterValue
   */
  readonly parameterValue?: string;

}

/**
 * @schema LightsailRelationalDatabaseSnapshot
 */
export interface LightsailRelationalDatabaseSnapshot {
  /**
   * @schema LightsailRelationalDatabaseSnapshot#name
   */
  readonly name?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailRelationalDatabaseSnapshot#engine
   */
  readonly engine?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#state
   */
  readonly state?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#fromRelationalDatabaseName
   */
  readonly fromRelationalDatabaseName?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#fromRelationalDatabaseArn
   */
  readonly fromRelationalDatabaseArn?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#fromRelationalDatabaseBundleId
   */
  readonly fromRelationalDatabaseBundleId?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#fromRelationalDatabaseBlueprintId
   */
  readonly fromRelationalDatabaseBlueprintId?: string;

}

/**
 * @schema LightsailStaticIp
 */
export interface LightsailStaticIp {
  /**
   * @schema LightsailStaticIp#name
   */
  readonly name?: string;

  /**
   * @schema LightsailStaticIp#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailStaticIp#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailStaticIp#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailStaticIp#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailStaticIp#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailStaticIp#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema LightsailStaticIp#attachedTo
   */
  readonly attachedTo?: string;

  /**
   * @schema LightsailStaticIp#isAttached
   */
  readonly isAttached?: boolean;

}

/**
 * @schema LightsailResourceLocation
 */
export interface LightsailResourceLocation {
  /**
   * @schema LightsailResourceLocation#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema LightsailResourceLocation#regionName
   */
  readonly regionName?: string;

}

/**
 * @schema LightsailCertificate
 */
export interface LightsailCertificate {
  /**
   * @schema LightsailCertificate#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailCertificate#name
   */
  readonly name?: string;

  /**
   * @schema LightsailCertificate#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailCertificate#status
   */
  readonly status?: string;

  /**
   * @schema LightsailCertificate#serialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema LightsailCertificate#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema LightsailCertificate#domainValidationRecords
   */
  readonly domainValidationRecords?: LightsailDomainValidationRecord[];

  /**
   * @schema LightsailCertificate#requestFailureReason
   */
  readonly requestFailureReason?: string;

  /**
   * @schema LightsailCertificate#inUseResourceCount
   */
  readonly inUseResourceCount?: number;

  /**
   * @schema LightsailCertificate#keyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema LightsailCertificate#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailCertificate#issuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema LightsailCertificate#issuerCA
   */
  readonly issuerCA?: string;

  /**
   * @schema LightsailCertificate#notBefore
   */
  readonly notBefore?: string;

  /**
   * @schema LightsailCertificate#notAfter
   */
  readonly notAfter?: string;

  /**
   * @schema LightsailCertificate#eligibleToRenew
   */
  readonly eligibleToRenew?: string;

  /**
   * @schema LightsailCertificate#renewalSummary
   */
  readonly renewalSummary?: LightsailRenewalSummary;

  /**
   * @schema LightsailCertificate#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema LightsailCertificate#revocationReason
   */
  readonly revocationReason?: string;

  /**
   * @schema LightsailCertificate#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCertificate#supportCode
   */
  readonly supportCode?: string;

}

/**
 * @schema LightsailContainerServiceHealthCheckConfig
 */
export interface LightsailContainerServiceHealthCheckConfig {
  /**
   * @schema LightsailContainerServiceHealthCheckConfig#healthyThreshold
   */
  readonly healthyThreshold?: number;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#unhealthyThreshold
   */
  readonly unhealthyThreshold?: number;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#timeoutSeconds
   */
  readonly timeoutSeconds?: number;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#intervalSeconds
   */
  readonly intervalSeconds?: number;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#path
   */
  readonly path?: string;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#successCodes
   */
  readonly successCodes?: string;

}

/**
 * @schema LightsailAutoSnapshotAddOnRequest
 */
export interface LightsailAutoSnapshotAddOnRequest {
  /**
   * @schema LightsailAutoSnapshotAddOnRequest#snapshotTimeOfDay
   */
  readonly snapshotTimeOfDay?: string;

}

/**
 * @schema LightsailCookieObject
 */
export interface LightsailCookieObject {
  /**
   * @schema LightsailCookieObject#option
   */
  readonly option?: string;

  /**
   * @schema LightsailCookieObject#cookiesAllowList
   */
  readonly cookiesAllowList?: string[];

}

/**
 * @schema LightsailHeaderObject
 */
export interface LightsailHeaderObject {
  /**
   * @schema LightsailHeaderObject#option
   */
  readonly option?: string;

  /**
   * @schema LightsailHeaderObject#headersAllowList
   */
  readonly headersAllowList?: string[];

}

/**
 * @schema LightsailQueryStringObject
 */
export interface LightsailQueryStringObject {
  /**
   * @schema LightsailQueryStringObject#option
   */
  readonly option?: boolean;

  /**
   * @schema LightsailQueryStringObject#queryStringsAllowList
   */
  readonly queryStringsAllowList?: string[];

}

/**
 * @schema LightsailOrigin
 */
export interface LightsailOrigin {
  /**
   * @schema LightsailOrigin#name
   */
  readonly name?: string;

  /**
   * @schema LightsailOrigin#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailOrigin#regionName
   */
  readonly regionName?: string;

  /**
   * @schema LightsailOrigin#protocolPolicy
   */
  readonly protocolPolicy?: string;

}

/**
 * @schema LightsailMonitoredResourceInfo
 */
export interface LightsailMonitoredResourceInfo {
  /**
   * @schema LightsailMonitoredResourceInfo#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailMonitoredResourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema LightsailMonitoredResourceInfo#resourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema LightsailAttachedDisk
 */
export interface LightsailAttachedDisk {
  /**
   * @schema LightsailAttachedDisk#path
   */
  readonly path?: string;

  /**
   * @schema LightsailAttachedDisk#sizeInGb
   */
  readonly sizeInGb?: number;

}

/**
 * @schema LightsailCloudFormationStackRecordSourceInfo
 */
export interface LightsailCloudFormationStackRecordSourceInfo {
  /**
   * @schema LightsailCloudFormationStackRecordSourceInfo#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailCloudFormationStackRecordSourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema LightsailCloudFormationStackRecordSourceInfo#arn
   */
  readonly arn?: string;

}

/**
 * @schema LightsailDestinationInfo
 */
export interface LightsailDestinationInfo {
  /**
   * @schema LightsailDestinationInfo#id
   */
  readonly id?: string;

  /**
   * @schema LightsailDestinationInfo#service
   */
  readonly service?: string;

}

/**
 * @schema LightsailContainerServiceEndpoint
 */
export interface LightsailContainerServiceEndpoint {
  /**
   * @schema LightsailContainerServiceEndpoint#containerName
   */
  readonly containerName?: string;

  /**
   * @schema LightsailContainerServiceEndpoint#containerPort
   */
  readonly containerPort?: number;

  /**
   * @schema LightsailContainerServiceEndpoint#healthCheck
   */
  readonly healthCheck?: LightsailContainerServiceHealthCheckConfig;

}

/**
 * @schema LightsailAddOn
 */
export interface LightsailAddOn {
  /**
   * @schema LightsailAddOn#name
   */
  readonly name?: string;

  /**
   * @schema LightsailAddOn#status
   */
  readonly status?: string;

  /**
   * @schema LightsailAddOn#snapshotTimeOfDay
   */
  readonly snapshotTimeOfDay?: string;

  /**
   * @schema LightsailAddOn#nextSnapshotTimeOfDay
   */
  readonly nextSnapshotTimeOfDay?: string;

}

/**
 * @schema LightsailExportSnapshotRecordSourceInfo
 */
export interface LightsailExportSnapshotRecordSourceInfo {
  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#fromResourceName
   */
  readonly fromResourceName?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#fromResourceArn
   */
  readonly fromResourceArn?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#instanceSnapshotInfo
   */
  readonly instanceSnapshotInfo?: LightsailInstanceSnapshotInfo;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#diskSnapshotInfo
   */
  readonly diskSnapshotInfo?: LightsailDiskSnapshotInfo;

}

/**
 * @schema LightsailInstanceHardware
 */
export interface LightsailInstanceHardware {
  /**
   * @schema LightsailInstanceHardware#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailInstanceHardware#disks
   */
  readonly disks?: LightsailDisk[];

  /**
   * @schema LightsailInstanceHardware#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

}

/**
 * @schema LightsailInstanceNetworking
 */
export interface LightsailInstanceNetworking {
  /**
   * @schema LightsailInstanceNetworking#monthlyTransfer
   */
  readonly monthlyTransfer?: LightsailMonthlyTransfer;

  /**
   * @schema LightsailInstanceNetworking#ports
   */
  readonly ports?: LightsailInstancePortInfo[];

}

/**
 * @schema LightsailPasswordData
 */
export interface LightsailPasswordData {
  /**
   * @schema LightsailPasswordData#ciphertext
   */
  readonly ciphertext?: string;

  /**
   * @schema LightsailPasswordData#keyPairName
   */
  readonly keyPairName?: string;

}

/**
 * @schema LightsailHostKeyAttributes
 */
export interface LightsailHostKeyAttributes {
  /**
   * @schema LightsailHostKeyAttributes#algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema LightsailHostKeyAttributes#publicKey
   */
  readonly publicKey?: string;

  /**
   * @schema LightsailHostKeyAttributes#witnessedAt
   */
  readonly witnessedAt?: string;

  /**
   * @schema LightsailHostKeyAttributes#fingerprintSHA1
   */
  readonly fingerprintSHA1?: string;

  /**
   * @schema LightsailHostKeyAttributes#fingerprintSHA256
   */
  readonly fingerprintSHA256?: string;

  /**
   * @schema LightsailHostKeyAttributes#notValidBefore
   */
  readonly notValidBefore?: string;

  /**
   * @schema LightsailHostKeyAttributes#notValidAfter
   */
  readonly notValidAfter?: string;

}

/**
 * @schema LightsailInstanceHealthSummary
 */
export interface LightsailInstanceHealthSummary {
  /**
   * @schema LightsailInstanceHealthSummary#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema LightsailInstanceHealthSummary#instanceHealth
   */
  readonly instanceHealth?: string;

  /**
   * @schema LightsailInstanceHealthSummary#instanceHealthReason
   */
  readonly instanceHealthReason?: string;

}

/**
 * @schema LightsailLoadBalancerTlsCertificateSummary
 */
export interface LightsailLoadBalancerTlsCertificateSummary {
  /**
   * @schema LightsailLoadBalancerTlsCertificateSummary#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateSummary#isAttached
   */
  readonly isAttached?: boolean;

}

/**
 * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord
 */
export interface LightsailLoadBalancerTlsCertificateDomainValidationRecord {
  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#type
   */
  readonly type?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#value
   */
  readonly value?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#validationStatus
   */
  readonly validationStatus?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#domainName
   */
  readonly domainName?: string;

}

/**
 * @schema LightsailLoadBalancerTlsCertificateRenewalSummary
 */
export interface LightsailLoadBalancerTlsCertificateRenewalSummary {
  /**
   * @schema LightsailLoadBalancerTlsCertificateRenewalSummary#renewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateRenewalSummary#domainValidationOptions
   */
  readonly domainValidationOptions?: LightsailLoadBalancerTlsCertificateDomainValidationOption[];

}

/**
 * @schema LightsailAvailabilityZone
 */
export interface LightsailAvailabilityZone {
  /**
   * @schema LightsailAvailabilityZone#zoneName
   */
  readonly zoneName?: string;

  /**
   * @schema LightsailAvailabilityZone#state
   */
  readonly state?: string;

}

/**
 * @schema LightsailRelationalDatabaseHardware
 */
export interface LightsailRelationalDatabaseHardware {
  /**
   * @schema LightsailRelationalDatabaseHardware#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailRelationalDatabaseHardware#diskSizeInGb
   */
  readonly diskSizeInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseHardware#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

}

/**
 * @schema LightsailPendingModifiedRelationalDatabaseValues
 */
export interface LightsailPendingModifiedRelationalDatabaseValues {
  /**
   * @schema LightsailPendingModifiedRelationalDatabaseValues#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema LightsailPendingModifiedRelationalDatabaseValues#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema LightsailPendingModifiedRelationalDatabaseValues#backupRetentionEnabled
   */
  readonly backupRetentionEnabled?: boolean;

}

/**
 * @schema LightsailRelationalDatabaseEndpoint
 */
export interface LightsailRelationalDatabaseEndpoint {
  /**
   * @schema LightsailRelationalDatabaseEndpoint#port
   */
  readonly port?: number;

  /**
   * @schema LightsailRelationalDatabaseEndpoint#address
   */
  readonly address?: string;

}

/**
 * @schema LightsailPendingMaintenanceAction
 */
export interface LightsailPendingMaintenanceAction {
  /**
   * @schema LightsailPendingMaintenanceAction#action
   */
  readonly action?: string;

  /**
   * @schema LightsailPendingMaintenanceAction#description
   */
  readonly description?: string;

  /**
   * @schema LightsailPendingMaintenanceAction#currentApplyDate
   */
  readonly currentApplyDate?: string;

}

/**
 * @schema LightsailDomainValidationRecord
 */
export interface LightsailDomainValidationRecord {
  /**
   * @schema LightsailDomainValidationRecord#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailDomainValidationRecord#resourceRecord
   */
  readonly resourceRecord?: LightsailResourceRecord;

}

/**
 * @schema LightsailRenewalSummary
 */
export interface LightsailRenewalSummary {
  /**
   * @schema LightsailRenewalSummary#domainValidationRecords
   */
  readonly domainValidationRecords?: LightsailDomainValidationRecord[];

  /**
   * @schema LightsailRenewalSummary#renewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema LightsailRenewalSummary#renewalStatusReason
   */
  readonly renewalStatusReason?: string;

  /**
   * @schema LightsailRenewalSummary#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema LightsailInstanceSnapshotInfo
 */
export interface LightsailInstanceSnapshotInfo {
  /**
   * @schema LightsailInstanceSnapshotInfo#fromBundleId
   */
  readonly fromBundleId?: string;

  /**
   * @schema LightsailInstanceSnapshotInfo#fromBlueprintId
   */
  readonly fromBlueprintId?: string;

  /**
   * @schema LightsailInstanceSnapshotInfo#fromDiskInfo
   */
  readonly fromDiskInfo?: LightsailDiskInfo[];

}

/**
 * @schema LightsailDiskSnapshotInfo
 */
export interface LightsailDiskSnapshotInfo {
  /**
   * @schema LightsailDiskSnapshotInfo#sizeInGb
   */
  readonly sizeInGb?: number;

}

/**
 * @schema LightsailMonthlyTransfer
 */
export interface LightsailMonthlyTransfer {
  /**
   * @schema LightsailMonthlyTransfer#gbPerMonthAllocated
   */
  readonly gbPerMonthAllocated?: number;

}

/**
 * @schema LightsailInstancePortInfo
 */
export interface LightsailInstancePortInfo {
  /**
   * @schema LightsailInstancePortInfo#fromPort
   */
  readonly fromPort?: number;

  /**
   * @schema LightsailInstancePortInfo#toPort
   */
  readonly toPort?: number;

  /**
   * @schema LightsailInstancePortInfo#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailInstancePortInfo#accessFrom
   */
  readonly accessFrom?: string;

  /**
   * @schema LightsailInstancePortInfo#accessType
   */
  readonly accessType?: string;

  /**
   * @schema LightsailInstancePortInfo#commonName
   */
  readonly commonName?: string;

  /**
   * @schema LightsailInstancePortInfo#accessDirection
   */
  readonly accessDirection?: string;

  /**
   * @schema LightsailInstancePortInfo#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema LightsailInstancePortInfo#cidrListAliases
   */
  readonly cidrListAliases?: string[];

}

/**
 * @schema LightsailLoadBalancerTlsCertificateDomainValidationOption
 */
export interface LightsailLoadBalancerTlsCertificateDomainValidationOption {
  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationOption#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationOption#validationStatus
   */
  readonly validationStatus?: string;

}

/**
 * @schema LightsailResourceRecord
 */
export interface LightsailResourceRecord {
  /**
   * @schema LightsailResourceRecord#name
   */
  readonly name?: string;

  /**
   * @schema LightsailResourceRecord#type
   */
  readonly type?: string;

  /**
   * @schema LightsailResourceRecord#value
   */
  readonly value?: string;

}

/**
 * @schema LightsailDiskInfo
 */
export interface LightsailDiskInfo {
  /**
   * @schema LightsailDiskInfo#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDiskInfo#path
   */
  readonly path?: string;

  /**
   * @schema LightsailDiskInfo#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema LightsailDiskInfo#isSystemDisk
   */
  readonly isSystemDisk?: boolean;

}
