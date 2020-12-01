/**
 * @schema AllocateStaticIpRequest
 */
export interface AllocateStaticIpRequest {
  /**
   * @schema AllocateStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * @schema AllocateStaticIpResult
 */
export interface AllocateStaticIpResult {
  /**
   * @schema AllocateStaticIpResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema AttachCertificateToDistributionRequest
 */
export interface AttachCertificateToDistributionRequest {
  /**
   * @schema AttachCertificateToDistributionRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema AttachCertificateToDistributionRequest#certificateName
   */
  readonly certificateName: string;

}

/**
 * @schema AttachCertificateToDistributionResult
 */
export interface AttachCertificateToDistributionResult {
  /**
   * @schema AttachCertificateToDistributionResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema AttachDiskRequest
 */
export interface AttachDiskRequest {
  /**
   * @schema AttachDiskRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema AttachDiskRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema AttachDiskRequest#diskPath
   */
  readonly diskPath: string;

}

/**
 * @schema AttachDiskResult
 */
export interface AttachDiskResult {
  /**
   * @schema AttachDiskResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema AttachInstancesToLoadBalancerRequest
 */
export interface AttachInstancesToLoadBalancerRequest {
  /**
   * @schema AttachInstancesToLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema AttachInstancesToLoadBalancerRequest#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * @schema AttachInstancesToLoadBalancerResult
 */
export interface AttachInstancesToLoadBalancerResult {
  /**
   * @schema AttachInstancesToLoadBalancerResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema AttachLoadBalancerTlsCertificateRequest
 */
export interface AttachLoadBalancerTlsCertificateRequest {
  /**
   * @schema AttachLoadBalancerTlsCertificateRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema AttachLoadBalancerTlsCertificateRequest#certificateName
   */
  readonly certificateName: string;

}

/**
 * @schema AttachLoadBalancerTlsCertificateResult
 */
export interface AttachLoadBalancerTlsCertificateResult {
  /**
   * @schema AttachLoadBalancerTlsCertificateResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema AttachStaticIpRequest
 */
export interface AttachStaticIpRequest {
  /**
   * @schema AttachStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

  /**
   * @schema AttachStaticIpRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema AttachStaticIpResult
 */
export interface AttachStaticIpResult {
  /**
   * @schema AttachStaticIpResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CloseInstancePublicPortsRequest
 */
export interface CloseInstancePublicPortsRequest {
  /**
   * @schema CloseInstancePublicPortsRequest#portInfo
   */
  readonly portInfo: PortInfo;

  /**
   * @schema CloseInstancePublicPortsRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema CloseInstancePublicPortsResult
 */
export interface CloseInstancePublicPortsResult {
  /**
   * @schema CloseInstancePublicPortsResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema CopySnapshotRequest
 */
export interface CopySnapshotRequest {
  /**
   * @schema CopySnapshotRequest#sourceSnapshotName
   */
  readonly sourceSnapshotName?: string;

  /**
   * @schema CopySnapshotRequest#sourceResourceName
   */
  readonly sourceResourceName?: string;

  /**
   * @schema CopySnapshotRequest#restoreDate
   */
  readonly restoreDate?: string;

  /**
   * @schema CopySnapshotRequest#useLatestRestorableAutoSnapshot
   */
  readonly useLatestRestorableAutoSnapshot?: boolean;

  /**
   * @schema CopySnapshotRequest#targetSnapshotName
   */
  readonly targetSnapshotName: string;

  /**
   * @schema CopySnapshotRequest#sourceRegion
   */
  readonly sourceRegion: string;

}

/**
 * @schema CopySnapshotResult
 */
export interface CopySnapshotResult {
  /**
   * @schema CopySnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateCertificateRequest
 */
export interface CreateCertificateRequest {
  /**
   * @schema CreateCertificateRequest#certificateName
   */
  readonly certificateName: string;

  /**
   * @schema CreateCertificateRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema CreateCertificateRequest#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema CreateCertificateRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateCertificateResult
 */
export interface CreateCertificateResult {
  /**
   * @schema CreateCertificateResult#certificate
   */
  readonly certificate?: CertificateSummary;

  /**
   * @schema CreateCertificateResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateCloudFormationStackRequest
 */
export interface CreateCloudFormationStackRequest {
  /**
   * @schema CreateCloudFormationStackRequest#instances
   */
  readonly instances: InstanceEntry[];

}

/**
 * @schema CreateCloudFormationStackResult
 */
export interface CreateCloudFormationStackResult {
  /**
   * @schema CreateCloudFormationStackResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateContactMethodRequest
 */
export interface CreateContactMethodRequest {
  /**
   * @schema CreateContactMethodRequest#protocol
   */
  readonly protocol: string;

  /**
   * @schema CreateContactMethodRequest#contactEndpoint
   */
  readonly contactEndpoint: string;

}

/**
 * @schema CreateContactMethodResult
 */
export interface CreateContactMethodResult {
  /**
   * @schema CreateContactMethodResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateContainerServiceRequest
 */
export interface CreateContainerServiceRequest {
  /**
   * @schema CreateContainerServiceRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema CreateContainerServiceRequest#power
   */
  readonly power: string;

  /**
   * @schema CreateContainerServiceRequest#scale
   */
  readonly scale: number;

  /**
   * @schema CreateContainerServiceRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateContainerServiceRequest#publicDomainNames
   */
  readonly publicDomainNames?: { [key: string]: string[] };

  /**
   * @schema CreateContainerServiceRequest#deployment
   */
  readonly deployment?: ContainerServiceDeploymentRequest;

}

/**
 * @schema CreateContainerServiceResult
 */
export interface CreateContainerServiceResult {
  /**
   * @schema CreateContainerServiceResult#containerService
   */
  readonly containerService?: ContainerService;

}

/**
 * @schema CreateContainerServiceDeploymentRequest
 */
export interface CreateContainerServiceDeploymentRequest {
  /**
   * @schema CreateContainerServiceDeploymentRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema CreateContainerServiceDeploymentRequest#containers
   */
  readonly containers?: { [key: string]: Container };

  /**
   * @schema CreateContainerServiceDeploymentRequest#publicEndpoint
   */
  readonly publicEndpoint?: EndpointRequest;

}

/**
 * @schema CreateContainerServiceDeploymentResult
 */
export interface CreateContainerServiceDeploymentResult {
  /**
   * @schema CreateContainerServiceDeploymentResult#containerService
   */
  readonly containerService?: ContainerService;

}

/**
 * @schema CreateContainerServiceRegistryLoginRequest
 */
export interface CreateContainerServiceRegistryLoginRequest {
}

/**
 * @schema CreateContainerServiceRegistryLoginResult
 */
export interface CreateContainerServiceRegistryLoginResult {
  /**
   * @schema CreateContainerServiceRegistryLoginResult#registryLogin
   */
  readonly registryLogin?: ContainerServiceRegistryLogin;

}

/**
 * @schema CreateDiskRequest
 */
export interface CreateDiskRequest {
  /**
   * @schema CreateDiskRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema CreateDiskRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema CreateDiskRequest#sizeInGb
   */
  readonly sizeInGb: number;

  /**
   * @schema CreateDiskRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDiskRequest#addOns
   */
  readonly addOns?: AddOnRequest[];

}

/**
 * @schema CreateDiskResult
 */
export interface CreateDiskResult {
  /**
   * @schema CreateDiskResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateDiskFromSnapshotRequest
 */
export interface CreateDiskFromSnapshotRequest {
  /**
   * @schema CreateDiskFromSnapshotRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema CreateDiskFromSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName?: string;

  /**
   * @schema CreateDiskFromSnapshotRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema CreateDiskFromSnapshotRequest#sizeInGb
   */
  readonly sizeInGb: number;

  /**
   * @schema CreateDiskFromSnapshotRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDiskFromSnapshotRequest#addOns
   */
  readonly addOns?: AddOnRequest[];

  /**
   * @schema CreateDiskFromSnapshotRequest#sourceDiskName
   */
  readonly sourceDiskName?: string;

  /**
   * @schema CreateDiskFromSnapshotRequest#restoreDate
   */
  readonly restoreDate?: string;

  /**
   * @schema CreateDiskFromSnapshotRequest#useLatestRestorableAutoSnapshot
   */
  readonly useLatestRestorableAutoSnapshot?: boolean;

}

/**
 * @schema CreateDiskFromSnapshotResult
 */
export interface CreateDiskFromSnapshotResult {
  /**
   * @schema CreateDiskFromSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateDiskSnapshotRequest
 */
export interface CreateDiskSnapshotRequest {
  /**
   * @schema CreateDiskSnapshotRequest#diskName
   */
  readonly diskName?: string;

  /**
   * @schema CreateDiskSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName: string;

  /**
   * @schema CreateDiskSnapshotRequest#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema CreateDiskSnapshotRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDiskSnapshotResult
 */
export interface CreateDiskSnapshotResult {
  /**
   * @schema CreateDiskSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateDistributionRequest
 */
export interface CreateDistributionRequest {
  /**
   * @schema CreateDistributionRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema CreateDistributionRequest#origin
   */
  readonly origin: InputOrigin;

  /**
   * @schema CreateDistributionRequest#defaultCacheBehavior
   */
  readonly defaultCacheBehavior: CacheBehavior;

  /**
   * @schema CreateDistributionRequest#cacheBehaviorSettings
   */
  readonly cacheBehaviorSettings?: CacheSettings;

  /**
   * @schema CreateDistributionRequest#cacheBehaviors
   */
  readonly cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * @schema CreateDistributionRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema CreateDistributionRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDistributionResult
 */
export interface CreateDistributionResult {
  /**
   * @schema CreateDistributionResult#distribution
   */
  readonly distribution?: LightsailDistribution;

  /**
   * @schema CreateDistributionResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema CreateDomainRequest
 */
export interface CreateDomainRequest {
  /**
   * @schema CreateDomainRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema CreateDomainRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDomainResult
 */
export interface CreateDomainResult {
  /**
   * @schema CreateDomainResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema CreateDomainEntryRequest
 */
export interface CreateDomainEntryRequest {
  /**
   * @schema CreateDomainEntryRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema CreateDomainEntryRequest#domainEntry
   */
  readonly domainEntry: DomainEntry;

}

/**
 * @schema CreateDomainEntryResult
 */
export interface CreateDomainEntryResult {
  /**
   * @schema CreateDomainEntryResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema CreateInstanceSnapshotRequest
 */
export interface CreateInstanceSnapshotRequest {
  /**
   * @schema CreateInstanceSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName: string;

  /**
   * @schema CreateInstanceSnapshotRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema CreateInstanceSnapshotRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateInstanceSnapshotResult
 */
export interface CreateInstanceSnapshotResult {
  /**
   * @schema CreateInstanceSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateInstancesRequest
 */
export interface CreateInstancesRequest {
  /**
   * @schema CreateInstancesRequest#instanceNames
   */
  readonly instanceNames: string[];

  /**
   * @schema CreateInstancesRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema CreateInstancesRequest#customImageName
   */
  readonly customImageName?: string;

  /**
   * @schema CreateInstancesRequest#blueprintId
   */
  readonly blueprintId: string;

  /**
   * @schema CreateInstancesRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema CreateInstancesRequest#userData
   */
  readonly userData?: string;

  /**
   * @schema CreateInstancesRequest#keyPairName
   */
  readonly keyPairName?: string;

  /**
   * @schema CreateInstancesRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateInstancesRequest#addOns
   */
  readonly addOns?: AddOnRequest[];

}

/**
 * @schema CreateInstancesResult
 */
export interface CreateInstancesResult {
  /**
   * @schema CreateInstancesResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateInstancesFromSnapshotRequest
 */
export interface CreateInstancesFromSnapshotRequest {
  /**
   * @schema CreateInstancesFromSnapshotRequest#instanceNames
   */
  readonly instanceNames: string[];

  /**
   * @schema CreateInstancesFromSnapshotRequest#attachedDiskMapping
   */
  readonly attachedDiskMapping?: { [key: string]: DiskMap[] };

  /**
   * @schema CreateInstancesFromSnapshotRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema CreateInstancesFromSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName?: string;

  /**
   * @schema CreateInstancesFromSnapshotRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema CreateInstancesFromSnapshotRequest#userData
   */
  readonly userData?: string;

  /**
   * @schema CreateInstancesFromSnapshotRequest#keyPairName
   */
  readonly keyPairName?: string;

  /**
   * @schema CreateInstancesFromSnapshotRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateInstancesFromSnapshotRequest#addOns
   */
  readonly addOns?: AddOnRequest[];

  /**
   * @schema CreateInstancesFromSnapshotRequest#sourceInstanceName
   */
  readonly sourceInstanceName?: string;

  /**
   * @schema CreateInstancesFromSnapshotRequest#restoreDate
   */
  readonly restoreDate?: string;

  /**
   * @schema CreateInstancesFromSnapshotRequest#useLatestRestorableAutoSnapshot
   */
  readonly useLatestRestorableAutoSnapshot?: boolean;

}

/**
 * @schema CreateInstancesFromSnapshotResult
 */
export interface CreateInstancesFromSnapshotResult {
  /**
   * @schema CreateInstancesFromSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateKeyPairRequest
 */
export interface CreateKeyPairRequest {
  /**
   * @schema CreateKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

  /**
   * @schema CreateKeyPairRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateKeyPairResult
 */
export interface CreateKeyPairResult {
  /**
   * @schema CreateKeyPairResult#keyPair
   */
  readonly keyPair?: KeyPair;

  /**
   * @schema CreateKeyPairResult#publicKeyBase64
   */
  readonly publicKeyBase64?: string;

  /**
   * @schema CreateKeyPairResult#privateKeyBase64
   */
  readonly privateKeyBase64?: string;

  /**
   * @schema CreateKeyPairResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema CreateLoadBalancerRequest
 */
export interface CreateLoadBalancerRequest {
  /**
   * @schema CreateLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema CreateLoadBalancerRequest#instancePort
   */
  readonly instancePort: number;

  /**
   * @schema CreateLoadBalancerRequest#healthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema CreateLoadBalancerRequest#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema CreateLoadBalancerRequest#certificateDomainName
   */
  readonly certificateDomainName?: string;

  /**
   * @schema CreateLoadBalancerRequest#certificateAlternativeNames
   */
  readonly certificateAlternativeNames?: string[];

  /**
   * @schema CreateLoadBalancerRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateLoadBalancerResult
 */
export interface CreateLoadBalancerResult {
  /**
   * @schema CreateLoadBalancerResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateLoadBalancerTlsCertificateRequest
 */
export interface CreateLoadBalancerTlsCertificateRequest {
  /**
   * @schema CreateLoadBalancerTlsCertificateRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema CreateLoadBalancerTlsCertificateRequest#certificateName
   */
  readonly certificateName: string;

  /**
   * @schema CreateLoadBalancerTlsCertificateRequest#certificateDomainName
   */
  readonly certificateDomainName: string;

  /**
   * @schema CreateLoadBalancerTlsCertificateRequest#certificateAlternativeNames
   */
  readonly certificateAlternativeNames?: string[];

  /**
   * @schema CreateLoadBalancerTlsCertificateRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateLoadBalancerTlsCertificateResult
 */
export interface CreateLoadBalancerTlsCertificateResult {
  /**
   * @schema CreateLoadBalancerTlsCertificateResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateRelationalDatabaseRequest
 */
export interface CreateRelationalDatabaseRequest {
  /**
   * @schema CreateRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema CreateRelationalDatabaseRequest#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateRelationalDatabaseRequest#relationalDatabaseBlueprintId
   */
  readonly relationalDatabaseBlueprintId: string;

  /**
   * @schema CreateRelationalDatabaseRequest#relationalDatabaseBundleId
   */
  readonly relationalDatabaseBundleId: string;

  /**
   * @schema CreateRelationalDatabaseRequest#masterDatabaseName
   */
  readonly masterDatabaseName: string;

  /**
   * @schema CreateRelationalDatabaseRequest#masterUsername
   */
  readonly masterUsername: string;

  /**
   * @schema CreateRelationalDatabaseRequest#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema CreateRelationalDatabaseRequest#preferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema CreateRelationalDatabaseRequest#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateRelationalDatabaseRequest#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema CreateRelationalDatabaseRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRelationalDatabaseResult
 */
export interface CreateRelationalDatabaseResult {
  /**
   * @schema CreateRelationalDatabaseResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateRelationalDatabaseFromSnapshotRequest
 */
export interface CreateRelationalDatabaseFromSnapshotRequest {
  /**
   * @schema CreateRelationalDatabaseFromSnapshotRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema CreateRelationalDatabaseFromSnapshotRequest#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateRelationalDatabaseFromSnapshotRequest#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema CreateRelationalDatabaseFromSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName?: string;

  /**
   * @schema CreateRelationalDatabaseFromSnapshotRequest#relationalDatabaseBundleId
   */
  readonly relationalDatabaseBundleId?: string;

  /**
   * @schema CreateRelationalDatabaseFromSnapshotRequest#sourceRelationalDatabaseName
   */
  readonly sourceRelationalDatabaseName?: string;

  /**
   * @schema CreateRelationalDatabaseFromSnapshotRequest#restoreTime
   */
  readonly restoreTime?: string;

  /**
   * @schema CreateRelationalDatabaseFromSnapshotRequest#useLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema CreateRelationalDatabaseFromSnapshotRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRelationalDatabaseFromSnapshotResult
 */
export interface CreateRelationalDatabaseFromSnapshotResult {
  /**
   * @schema CreateRelationalDatabaseFromSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema CreateRelationalDatabaseSnapshotRequest
 */
export interface CreateRelationalDatabaseSnapshotRequest {
  /**
   * @schema CreateRelationalDatabaseSnapshotRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema CreateRelationalDatabaseSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName: string;

  /**
   * @schema CreateRelationalDatabaseSnapshotRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRelationalDatabaseSnapshotResult
 */
export interface CreateRelationalDatabaseSnapshotResult {
  /**
   * @schema CreateRelationalDatabaseSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteAlarmRequest
 */
export interface DeleteAlarmRequest {
  /**
   * @schema DeleteAlarmRequest#alarmName
   */
  readonly alarmName: string;

}

/**
 * @schema DeleteAlarmResult
 */
export interface DeleteAlarmResult {
  /**
   * @schema DeleteAlarmResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteAutoSnapshotRequest
 */
export interface DeleteAutoSnapshotRequest {
  /**
   * @schema DeleteAutoSnapshotRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema DeleteAutoSnapshotRequest#date
   */
  readonly date: string;

}

/**
 * @schema DeleteAutoSnapshotResult
 */
export interface DeleteAutoSnapshotResult {
  /**
   * @schema DeleteAutoSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteCertificateRequest
 */
export interface DeleteCertificateRequest {
  /**
   * @schema DeleteCertificateRequest#certificateName
   */
  readonly certificateName: string;

}

/**
 * @schema DeleteCertificateResult
 */
export interface DeleteCertificateResult {
  /**
   * @schema DeleteCertificateResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteContactMethodRequest
 */
export interface DeleteContactMethodRequest {
  /**
   * @schema DeleteContactMethodRequest#protocol
   */
  readonly protocol: string;

}

/**
 * @schema DeleteContactMethodResult
 */
export interface DeleteContactMethodResult {
  /**
   * @schema DeleteContactMethodResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteContainerImageRequest
 */
export interface DeleteContainerImageRequest {
  /**
   * @schema DeleteContainerImageRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema DeleteContainerImageRequest#image
   */
  readonly image: string;

}

/**
 * @schema DeleteContainerImageResult
 */
export interface DeleteContainerImageResult {
}

/**
 * @schema DeleteContainerServiceRequest
 */
export interface DeleteContainerServiceRequest {
  /**
   * @schema DeleteContainerServiceRequest#serviceName
   */
  readonly serviceName: string;

}

/**
 * @schema DeleteContainerServiceResult
 */
export interface DeleteContainerServiceResult {
}

/**
 * @schema DeleteDiskRequest
 */
export interface DeleteDiskRequest {
  /**
   * @schema DeleteDiskRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema DeleteDiskRequest#forceDeleteAddOns
   */
  readonly forceDeleteAddOns?: boolean;

}

/**
 * @schema DeleteDiskResult
 */
export interface DeleteDiskResult {
  /**
   * @schema DeleteDiskResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteDiskSnapshotRequest
 */
export interface DeleteDiskSnapshotRequest {
  /**
   * @schema DeleteDiskSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName: string;

}

/**
 * @schema DeleteDiskSnapshotResult
 */
export interface DeleteDiskSnapshotResult {
  /**
   * @schema DeleteDiskSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteDistributionRequest
 */
export interface DeleteDistributionRequest {
  /**
   * @schema DeleteDistributionRequest#distributionName
   */
  readonly distributionName?: string;

}

/**
 * @schema DeleteDistributionResult
 */
export interface DeleteDistributionResult {
  /**
   * @schema DeleteDistributionResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema DeleteDomainRequest
 */
export interface DeleteDomainRequest {
  /**
   * @schema DeleteDomainRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema DeleteDomainResult
 */
export interface DeleteDomainResult {
  /**
   * @schema DeleteDomainResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema DeleteDomainEntryRequest
 */
export interface DeleteDomainEntryRequest {
  /**
   * @schema DeleteDomainEntryRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema DeleteDomainEntryRequest#domainEntry
   */
  readonly domainEntry: DomainEntry;

}

/**
 * @schema DeleteDomainEntryResult
 */
export interface DeleteDomainEntryResult {
  /**
   * @schema DeleteDomainEntryResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema DeleteInstanceRequest
 */
export interface DeleteInstanceRequest {
  /**
   * @schema DeleteInstanceRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema DeleteInstanceRequest#forceDeleteAddOns
   */
  readonly forceDeleteAddOns?: boolean;

}

/**
 * @schema DeleteInstanceResult
 */
export interface DeleteInstanceResult {
  /**
   * @schema DeleteInstanceResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteInstanceSnapshotRequest
 */
export interface DeleteInstanceSnapshotRequest {
  /**
   * @schema DeleteInstanceSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName: string;

}

/**
 * @schema DeleteInstanceSnapshotResult
 */
export interface DeleteInstanceSnapshotResult {
  /**
   * @schema DeleteInstanceSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteKeyPairRequest
 */
export interface DeleteKeyPairRequest {
  /**
   * @schema DeleteKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

}

/**
 * @schema DeleteKeyPairResult
 */
export interface DeleteKeyPairResult {
  /**
   * @schema DeleteKeyPairResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema DeleteKnownHostKeysRequest
 */
export interface DeleteKnownHostKeysRequest {
  /**
   * @schema DeleteKnownHostKeysRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema DeleteKnownHostKeysResult
 */
export interface DeleteKnownHostKeysResult {
  /**
   * @schema DeleteKnownHostKeysResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteLoadBalancerRequest
 */
export interface DeleteLoadBalancerRequest {
  /**
   * @schema DeleteLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

}

/**
 * @schema DeleteLoadBalancerResult
 */
export interface DeleteLoadBalancerResult {
  /**
   * @schema DeleteLoadBalancerResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteLoadBalancerTlsCertificateRequest
 */
export interface DeleteLoadBalancerTlsCertificateRequest {
  /**
   * @schema DeleteLoadBalancerTlsCertificateRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema DeleteLoadBalancerTlsCertificateRequest#certificateName
   */
  readonly certificateName: string;

  /**
   * @schema DeleteLoadBalancerTlsCertificateRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema DeleteLoadBalancerTlsCertificateResult
 */
export interface DeleteLoadBalancerTlsCertificateResult {
  /**
   * @schema DeleteLoadBalancerTlsCertificateResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteRelationalDatabaseRequest
 */
export interface DeleteRelationalDatabaseRequest {
  /**
   * @schema DeleteRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema DeleteRelationalDatabaseRequest#skipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema DeleteRelationalDatabaseRequest#finalRelationalDatabaseSnapshotName
   */
  readonly finalRelationalDatabaseSnapshotName?: string;

}

/**
 * @schema DeleteRelationalDatabaseResult
 */
export interface DeleteRelationalDatabaseResult {
  /**
   * @schema DeleteRelationalDatabaseResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DeleteRelationalDatabaseSnapshotRequest
 */
export interface DeleteRelationalDatabaseSnapshotRequest {
  /**
   * @schema DeleteRelationalDatabaseSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName: string;

}

/**
 * @schema DeleteRelationalDatabaseSnapshotResult
 */
export interface DeleteRelationalDatabaseSnapshotResult {
  /**
   * @schema DeleteRelationalDatabaseSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DetachCertificateFromDistributionRequest
 */
export interface DetachCertificateFromDistributionRequest {
  /**
   * @schema DetachCertificateFromDistributionRequest#distributionName
   */
  readonly distributionName: string;

}

/**
 * @schema DetachCertificateFromDistributionResult
 */
export interface DetachCertificateFromDistributionResult {
  /**
   * @schema DetachCertificateFromDistributionResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema DetachDiskRequest
 */
export interface DetachDiskRequest {
  /**
   * @schema DetachDiskRequest#diskName
   */
  readonly diskName: string;

}

/**
 * @schema DetachDiskResult
 */
export interface DetachDiskResult {
  /**
   * @schema DetachDiskResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DetachInstancesFromLoadBalancerRequest
 */
export interface DetachInstancesFromLoadBalancerRequest {
  /**
   * @schema DetachInstancesFromLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema DetachInstancesFromLoadBalancerRequest#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * @schema DetachInstancesFromLoadBalancerResult
 */
export interface DetachInstancesFromLoadBalancerResult {
  /**
   * @schema DetachInstancesFromLoadBalancerResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DetachStaticIpRequest
 */
export interface DetachStaticIpRequest {
  /**
   * @schema DetachStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * @schema DetachStaticIpResult
 */
export interface DetachStaticIpResult {
  /**
   * @schema DetachStaticIpResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DisableAddOnRequest
 */
export interface DisableAddOnRequest {
  /**
   * @schema DisableAddOnRequest#addOnType
   */
  readonly addOnType: string;

  /**
   * @schema DisableAddOnRequest#resourceName
   */
  readonly resourceName: string;

}

/**
 * @schema DisableAddOnResult
 */
export interface DisableAddOnResult {
  /**
   * @schema DisableAddOnResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema DownloadDefaultKeyPairRequest
 */
export interface DownloadDefaultKeyPairRequest {
}

/**
 * @schema DownloadDefaultKeyPairResult
 */
export interface DownloadDefaultKeyPairResult {
  /**
   * @schema DownloadDefaultKeyPairResult#publicKeyBase64
   */
  readonly publicKeyBase64?: string;

  /**
   * @schema DownloadDefaultKeyPairResult#privateKeyBase64
   */
  readonly privateKeyBase64?: string;

}

/**
 * @schema EnableAddOnRequest
 */
export interface EnableAddOnRequest {
  /**
   * @schema EnableAddOnRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema EnableAddOnRequest#addOnRequest
   */
  readonly addOnRequest: AddOnRequest;

}

/**
 * @schema EnableAddOnResult
 */
export interface EnableAddOnResult {
  /**
   * @schema EnableAddOnResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema ExportSnapshotRequest
 */
export interface ExportSnapshotRequest {
  /**
   * @schema ExportSnapshotRequest#sourceSnapshotName
   */
  readonly sourceSnapshotName: string;

}

/**
 * @schema ExportSnapshotResult
 */
export interface ExportSnapshotResult {
  /**
   * @schema ExportSnapshotResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema GetActiveNamesRequest
 */
export interface GetActiveNamesRequest {
  /**
   * @schema GetActiveNamesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetActiveNamesResult
 */
export interface GetActiveNamesResult {
  /**
   * @schema GetActiveNamesResult#activeNames
   */
  readonly activeNames?: string[];

  /**
   * @schema GetActiveNamesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetAlarmsRequest
 */
export interface GetAlarmsRequest {
  /**
   * @schema GetAlarmsRequest#alarmName
   */
  readonly alarmName?: string;

  /**
   * @schema GetAlarmsRequest#pageToken
   */
  readonly pageToken?: string;

  /**
   * @schema GetAlarmsRequest#monitoredResourceName
   */
  readonly monitoredResourceName?: string;

}

/**
 * @schema GetAlarmsResult
 */
export interface GetAlarmsResult {
  /**
   * @schema GetAlarmsResult#alarms
   */
  readonly alarms?: Alarm[];

  /**
   * @schema GetAlarmsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetAutoSnapshotsRequest
 */
export interface GetAutoSnapshotsRequest {
  /**
   * @schema GetAutoSnapshotsRequest#resourceName
   */
  readonly resourceName: string;

}

/**
 * @schema GetAutoSnapshotsResult
 */
export interface GetAutoSnapshotsResult {
  /**
   * @schema GetAutoSnapshotsResult#resourceName
   */
  readonly resourceName?: string;

  /**
   * @schema GetAutoSnapshotsResult#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema GetAutoSnapshotsResult#autoSnapshots
   */
  readonly autoSnapshots?: AutoSnapshotDetails[];

}

/**
 * @schema GetBlueprintsRequest
 */
export interface GetBlueprintsRequest {
  /**
   * @schema GetBlueprintsRequest#includeInactive
   */
  readonly includeInactive?: boolean;

  /**
   * @schema GetBlueprintsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetBlueprintsResult
 */
export interface GetBlueprintsResult {
  /**
   * @schema GetBlueprintsResult#blueprints
   */
  readonly blueprints?: Blueprint[];

  /**
   * @schema GetBlueprintsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetBundlesRequest
 */
export interface GetBundlesRequest {
  /**
   * @schema GetBundlesRequest#includeInactive
   */
  readonly includeInactive?: boolean;

  /**
   * @schema GetBundlesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetBundlesResult
 */
export interface GetBundlesResult {
  /**
   * @schema GetBundlesResult#bundles
   */
  readonly bundles?: Bundle[];

  /**
   * @schema GetBundlesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetCertificatesRequest
 */
export interface GetCertificatesRequest {
  /**
   * @schema GetCertificatesRequest#certificateStatuses
   */
  readonly certificateStatuses?: string[];

  /**
   * @schema GetCertificatesRequest#includeCertificateDetails
   */
  readonly includeCertificateDetails?: boolean;

  /**
   * @schema GetCertificatesRequest#certificateName
   */
  readonly certificateName?: string;

}

/**
 * @schema GetCertificatesResult
 */
export interface GetCertificatesResult {
  /**
   * @schema GetCertificatesResult#certificates
   */
  readonly certificates?: CertificateSummary[];

}

/**
 * @schema GetCloudFormationStackRecordsRequest
 */
export interface GetCloudFormationStackRecordsRequest {
  /**
   * @schema GetCloudFormationStackRecordsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetCloudFormationStackRecordsResult
 */
export interface GetCloudFormationStackRecordsResult {
  /**
   * @schema GetCloudFormationStackRecordsResult#cloudFormationStackRecords
   */
  readonly cloudFormationStackRecords?: CloudFormationStackRecord[];

  /**
   * @schema GetCloudFormationStackRecordsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetContactMethodsRequest
 */
export interface GetContactMethodsRequest {
  /**
   * @schema GetContactMethodsRequest#protocols
   */
  readonly protocols?: string[];

}

/**
 * @schema GetContactMethodsResult
 */
export interface GetContactMethodsResult {
  /**
   * @schema GetContactMethodsResult#contactMethods
   */
  readonly contactMethods?: ContactMethod[];

}

/**
 * @schema GetContainerApiMetadataRequest
 */
export interface GetContainerApiMetadataRequest {
}

/**
 * @schema GetContainerApiMetadataResult
 */
export interface GetContainerApiMetadataResult {
  /**
   * @schema GetContainerApiMetadataResult#metadata
   */
  readonly metadata?: { [key: string]: string }[];

}

/**
 * @schema GetContainerImagesRequest
 */
export interface GetContainerImagesRequest {
  /**
   * @schema GetContainerImagesRequest#serviceName
   */
  readonly serviceName: string;

}

/**
 * @schema GetContainerImagesResult
 */
export interface GetContainerImagesResult {
  /**
   * @schema GetContainerImagesResult#containerImages
   */
  readonly containerImages?: ContainerImage[];

}

/**
 * @schema GetContainerLogRequest
 */
export interface GetContainerLogRequest {
  /**
   * @schema GetContainerLogRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema GetContainerLogRequest#containerName
   */
  readonly containerName: string;

  /**
   * @schema GetContainerLogRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema GetContainerLogRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema GetContainerLogRequest#filterPattern
   */
  readonly filterPattern?: string;

  /**
   * @schema GetContainerLogRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetContainerLogResult
 */
export interface GetContainerLogResult {
  /**
   * @schema GetContainerLogResult#logEvents
   */
  readonly logEvents?: ContainerServiceLogEvent[];

  /**
   * @schema GetContainerLogResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetContainerServiceDeploymentsRequest
 */
export interface GetContainerServiceDeploymentsRequest {
  /**
   * @schema GetContainerServiceDeploymentsRequest#serviceName
   */
  readonly serviceName: string;

}

/**
 * @schema GetContainerServiceDeploymentsResult
 */
export interface GetContainerServiceDeploymentsResult {
  /**
   * @schema GetContainerServiceDeploymentsResult#deployments
   */
  readonly deployments?: ContainerServiceDeployment[];

}

/**
 * @schema GetContainerServiceMetricDataRequest
 */
export interface GetContainerServiceMetricDataRequest {
  /**
   * @schema GetContainerServiceMetricDataRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema GetContainerServiceMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema GetContainerServiceMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema GetContainerServiceMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema GetContainerServiceMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema GetContainerServiceMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema GetContainerServiceMetricDataResult
 */
export interface GetContainerServiceMetricDataResult {
  /**
   * @schema GetContainerServiceMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema GetContainerServiceMetricDataResult#metricData
   */
  readonly metricData?: MetricDatapoint[];

}

/**
 * @schema GetContainerServicePowersRequest
 */
export interface GetContainerServicePowersRequest {
}

/**
 * @schema GetContainerServicePowersResult
 */
export interface GetContainerServicePowersResult {
  /**
   * @schema GetContainerServicePowersResult#powers
   */
  readonly powers?: ContainerServicePower[];

}

/**
 * @schema GetContainerServicesRequest
 */
export interface GetContainerServicesRequest {
  /**
   * @schema GetContainerServicesRequest#serviceName
   */
  readonly serviceName?: string;

}

/**
 * @schema ContainerServicesListResult
 */
export interface ContainerServicesListResult {
  /**
   * @schema ContainerServicesListResult#containerServices
   */
  readonly containerServices?: ContainerService[];

}

/**
 * @schema GetDiskRequest
 */
export interface GetDiskRequest {
  /**
   * @schema GetDiskRequest#diskName
   */
  readonly diskName: string;

}

/**
 * @schema GetDiskResult
 */
export interface GetDiskResult {
  /**
   * @schema GetDiskResult#disk
   */
  readonly disk?: Disk;

}

/**
 * @schema GetDiskSnapshotRequest
 */
export interface GetDiskSnapshotRequest {
  /**
   * @schema GetDiskSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName: string;

}

/**
 * @schema GetDiskSnapshotResult
 */
export interface GetDiskSnapshotResult {
  /**
   * @schema GetDiskSnapshotResult#diskSnapshot
   */
  readonly diskSnapshot?: DiskSnapshot;

}

/**
 * @schema GetDiskSnapshotsRequest
 */
export interface GetDiskSnapshotsRequest {
  /**
   * @schema GetDiskSnapshotsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetDiskSnapshotsResult
 */
export interface GetDiskSnapshotsResult {
  /**
   * @schema GetDiskSnapshotsResult#diskSnapshots
   */
  readonly diskSnapshots?: DiskSnapshot[];

  /**
   * @schema GetDiskSnapshotsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetDisksRequest
 */
export interface GetDisksRequest {
  /**
   * @schema GetDisksRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetDisksResult
 */
export interface GetDisksResult {
  /**
   * @schema GetDisksResult#disks
   */
  readonly disks?: Disk[];

  /**
   * @schema GetDisksResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetDistributionBundlesRequest
 */
export interface GetDistributionBundlesRequest {
}

/**
 * @schema GetDistributionBundlesResult
 */
export interface GetDistributionBundlesResult {
  /**
   * @schema GetDistributionBundlesResult#bundles
   */
  readonly bundles?: DistributionBundle[];

}

/**
 * @schema GetDistributionLatestCacheResetRequest
 */
export interface GetDistributionLatestCacheResetRequest {
  /**
   * @schema GetDistributionLatestCacheResetRequest#distributionName
   */
  readonly distributionName?: string;

}

/**
 * @schema GetDistributionLatestCacheResetResult
 */
export interface GetDistributionLatestCacheResetResult {
  /**
   * @schema GetDistributionLatestCacheResetResult#status
   */
  readonly status?: string;

  /**
   * @schema GetDistributionLatestCacheResetResult#createTime
   */
  readonly createTime?: string;

}

/**
 * @schema GetDistributionMetricDataRequest
 */
export interface GetDistributionMetricDataRequest {
  /**
   * @schema GetDistributionMetricDataRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema GetDistributionMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema GetDistributionMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema GetDistributionMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema GetDistributionMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema GetDistributionMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema GetDistributionMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema GetDistributionMetricDataResult
 */
export interface GetDistributionMetricDataResult {
  /**
   * @schema GetDistributionMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema GetDistributionMetricDataResult#metricData
   */
  readonly metricData?: MetricDatapoint[];

}

/**
 * @schema GetDistributionsRequest
 */
export interface GetDistributionsRequest {
  /**
   * @schema GetDistributionsRequest#distributionName
   */
  readonly distributionName?: string;

  /**
   * @schema GetDistributionsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetDistributionsResult
 */
export interface GetDistributionsResult {
  /**
   * @schema GetDistributionsResult#distributions
   */
  readonly distributions?: LightsailDistribution[];

  /**
   * @schema GetDistributionsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetDomainRequest
 */
export interface GetDomainRequest {
  /**
   * @schema GetDomainRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema GetDomainResult
 */
export interface GetDomainResult {
  /**
   * @schema GetDomainResult#domain
   */
  readonly domain?: Domain;

}

/**
 * @schema GetDomainsRequest
 */
export interface GetDomainsRequest {
  /**
   * @schema GetDomainsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetDomainsResult
 */
export interface GetDomainsResult {
  /**
   * @schema GetDomainsResult#domains
   */
  readonly domains?: Domain[];

  /**
   * @schema GetDomainsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetExportSnapshotRecordsRequest
 */
export interface GetExportSnapshotRecordsRequest {
  /**
   * @schema GetExportSnapshotRecordsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetExportSnapshotRecordsResult
 */
export interface GetExportSnapshotRecordsResult {
  /**
   * @schema GetExportSnapshotRecordsResult#exportSnapshotRecords
   */
  readonly exportSnapshotRecords?: ExportSnapshotRecord[];

  /**
   * @schema GetExportSnapshotRecordsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetInstanceRequest
 */
export interface GetInstanceRequest {
  /**
   * @schema GetInstanceRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema GetInstanceResult
 */
export interface GetInstanceResult {
  /**
   * @schema GetInstanceResult#instance
   */
  readonly instance?: Instance;

}

/**
 * @schema GetInstanceAccessDetailsRequest
 */
export interface GetInstanceAccessDetailsRequest {
  /**
   * @schema GetInstanceAccessDetailsRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema GetInstanceAccessDetailsRequest#protocol
   */
  readonly protocol?: string;

}

/**
 * @schema GetInstanceAccessDetailsResult
 */
export interface GetInstanceAccessDetailsResult {
  /**
   * @schema GetInstanceAccessDetailsResult#accessDetails
   */
  readonly accessDetails?: InstanceAccessDetails;

}

/**
 * @schema GetInstanceMetricDataRequest
 */
export interface GetInstanceMetricDataRequest {
  /**
   * @schema GetInstanceMetricDataRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema GetInstanceMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema GetInstanceMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema GetInstanceMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema GetInstanceMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema GetInstanceMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema GetInstanceMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema GetInstanceMetricDataResult
 */
export interface GetInstanceMetricDataResult {
  /**
   * @schema GetInstanceMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema GetInstanceMetricDataResult#metricData
   */
  readonly metricData?: MetricDatapoint[];

}

/**
 * @schema GetInstancePortStatesRequest
 */
export interface GetInstancePortStatesRequest {
  /**
   * @schema GetInstancePortStatesRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema GetInstancePortStatesResult
 */
export interface GetInstancePortStatesResult {
  /**
   * @schema GetInstancePortStatesResult#portStates
   */
  readonly portStates?: InstancePortState[];

}

/**
 * @schema GetInstanceSnapshotRequest
 */
export interface GetInstanceSnapshotRequest {
  /**
   * @schema GetInstanceSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName: string;

}

/**
 * @schema GetInstanceSnapshotResult
 */
export interface GetInstanceSnapshotResult {
  /**
   * @schema GetInstanceSnapshotResult#instanceSnapshot
   */
  readonly instanceSnapshot?: InstanceSnapshot;

}

/**
 * @schema GetInstanceSnapshotsRequest
 */
export interface GetInstanceSnapshotsRequest {
  /**
   * @schema GetInstanceSnapshotsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetInstanceSnapshotsResult
 */
export interface GetInstanceSnapshotsResult {
  /**
   * @schema GetInstanceSnapshotsResult#instanceSnapshots
   */
  readonly instanceSnapshots?: InstanceSnapshot[];

  /**
   * @schema GetInstanceSnapshotsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetInstanceStateRequest
 */
export interface GetInstanceStateRequest {
  /**
   * @schema GetInstanceStateRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema GetInstanceStateResult
 */
export interface GetInstanceStateResult {
  /**
   * @schema GetInstanceStateResult#state
   */
  readonly state?: InstanceState;

}

/**
 * @schema GetInstancesRequest
 */
export interface GetInstancesRequest {
  /**
   * @schema GetInstancesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetInstancesResult
 */
export interface GetInstancesResult {
  /**
   * @schema GetInstancesResult#instances
   */
  readonly instances?: Instance[];

  /**
   * @schema GetInstancesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetKeyPairRequest
 */
export interface GetKeyPairRequest {
  /**
   * @schema GetKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

}

/**
 * @schema GetKeyPairResult
 */
export interface GetKeyPairResult {
  /**
   * @schema GetKeyPairResult#keyPair
   */
  readonly keyPair?: KeyPair;

}

/**
 * @schema GetKeyPairsRequest
 */
export interface GetKeyPairsRequest {
  /**
   * @schema GetKeyPairsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetKeyPairsResult
 */
export interface GetKeyPairsResult {
  /**
   * @schema GetKeyPairsResult#keyPairs
   */
  readonly keyPairs?: KeyPair[];

  /**
   * @schema GetKeyPairsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetLoadBalancerRequest
 */
export interface GetLoadBalancerRequest {
  /**
   * @schema GetLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

}

/**
 * @schema GetLoadBalancerResult
 */
export interface GetLoadBalancerResult {
  /**
   * @schema GetLoadBalancerResult#loadBalancer
   */
  readonly loadBalancer?: LoadBalancer;

}

/**
 * @schema GetLoadBalancerMetricDataRequest
 */
export interface GetLoadBalancerMetricDataRequest {
  /**
   * @schema GetLoadBalancerMetricDataRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema GetLoadBalancerMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema GetLoadBalancerMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema GetLoadBalancerMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema GetLoadBalancerMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema GetLoadBalancerMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema GetLoadBalancerMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema GetLoadBalancerMetricDataResult
 */
export interface GetLoadBalancerMetricDataResult {
  /**
   * @schema GetLoadBalancerMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema GetLoadBalancerMetricDataResult#metricData
   */
  readonly metricData?: MetricDatapoint[];

}

/**
 * @schema GetLoadBalancerTlsCertificatesRequest
 */
export interface GetLoadBalancerTlsCertificatesRequest {
  /**
   * @schema GetLoadBalancerTlsCertificatesRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

}

/**
 * @schema GetLoadBalancerTlsCertificatesResult
 */
export interface GetLoadBalancerTlsCertificatesResult {
  /**
   * @schema GetLoadBalancerTlsCertificatesResult#tlsCertificates
   */
  readonly tlsCertificates?: LoadBalancerTlsCertificate[];

}

/**
 * @schema GetLoadBalancersRequest
 */
export interface GetLoadBalancersRequest {
  /**
   * @schema GetLoadBalancersRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetLoadBalancersResult
 */
export interface GetLoadBalancersResult {
  /**
   * @schema GetLoadBalancersResult#loadBalancers
   */
  readonly loadBalancers?: LoadBalancer[];

  /**
   * @schema GetLoadBalancersResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetOperationRequest
 */
export interface GetOperationRequest {
  /**
   * @schema GetOperationRequest#operationId
   */
  readonly operationId: string;

}

/**
 * @schema GetOperationResult
 */
export interface GetOperationResult {
  /**
   * @schema GetOperationResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema GetOperationsRequest
 */
export interface GetOperationsRequest {
  /**
   * @schema GetOperationsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetOperationsResult
 */
export interface GetOperationsResult {
  /**
   * @schema GetOperationsResult#operations
   */
  readonly operations?: Operation[];

  /**
   * @schema GetOperationsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetOperationsForResourceRequest
 */
export interface GetOperationsForResourceRequest {
  /**
   * @schema GetOperationsForResourceRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema GetOperationsForResourceRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetOperationsForResourceResult
 */
export interface GetOperationsForResourceResult {
  /**
   * @schema GetOperationsForResourceResult#operations
   */
  readonly operations?: Operation[];

  /**
   * @schema GetOperationsForResourceResult#nextPageCount
   */
  readonly nextPageCount?: string;

  /**
   * @schema GetOperationsForResourceResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetRegionsRequest
 */
export interface GetRegionsRequest {
  /**
   * @schema GetRegionsRequest#includeAvailabilityZones
   */
  readonly includeAvailabilityZones?: boolean;

  /**
   * @schema GetRegionsRequest#includeRelationalDatabaseAvailabilityZones
   */
  readonly includeRelationalDatabaseAvailabilityZones?: boolean;

}

/**
 * @schema GetRegionsResult
 */
export interface GetRegionsResult {
  /**
   * @schema GetRegionsResult#regions
   */
  readonly regions?: Region[];

}

/**
 * @schema GetRelationalDatabaseRequest
 */
export interface GetRelationalDatabaseRequest {
  /**
   * @schema GetRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * @schema GetRelationalDatabaseResult
 */
export interface GetRelationalDatabaseResult {
  /**
   * @schema GetRelationalDatabaseResult#relationalDatabase
   */
  readonly relationalDatabase?: RelationalDatabase;

}

/**
 * @schema GetRelationalDatabaseBlueprintsRequest
 */
export interface GetRelationalDatabaseBlueprintsRequest {
  /**
   * @schema GetRelationalDatabaseBlueprintsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetRelationalDatabaseBlueprintsResult
 */
export interface GetRelationalDatabaseBlueprintsResult {
  /**
   * @schema GetRelationalDatabaseBlueprintsResult#blueprints
   */
  readonly blueprints?: RelationalDatabaseBlueprint[];

  /**
   * @schema GetRelationalDatabaseBlueprintsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetRelationalDatabaseBundlesRequest
 */
export interface GetRelationalDatabaseBundlesRequest {
  /**
   * @schema GetRelationalDatabaseBundlesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetRelationalDatabaseBundlesResult
 */
export interface GetRelationalDatabaseBundlesResult {
  /**
   * @schema GetRelationalDatabaseBundlesResult#bundles
   */
  readonly bundles?: RelationalDatabaseBundle[];

  /**
   * @schema GetRelationalDatabaseBundlesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetRelationalDatabaseEventsRequest
 */
export interface GetRelationalDatabaseEventsRequest {
  /**
   * @schema GetRelationalDatabaseEventsRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema GetRelationalDatabaseEventsRequest#durationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema GetRelationalDatabaseEventsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetRelationalDatabaseEventsResult
 */
export interface GetRelationalDatabaseEventsResult {
  /**
   * @schema GetRelationalDatabaseEventsResult#relationalDatabaseEvents
   */
  readonly relationalDatabaseEvents?: RelationalDatabaseEvent[];

  /**
   * @schema GetRelationalDatabaseEventsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetRelationalDatabaseLogEventsRequest
 */
export interface GetRelationalDatabaseLogEventsRequest {
  /**
   * @schema GetRelationalDatabaseLogEventsRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema GetRelationalDatabaseLogEventsRequest#logStreamName
   */
  readonly logStreamName: string;

  /**
   * @schema GetRelationalDatabaseLogEventsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema GetRelationalDatabaseLogEventsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema GetRelationalDatabaseLogEventsRequest#startFromHead
   */
  readonly startFromHead?: boolean;

  /**
   * @schema GetRelationalDatabaseLogEventsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetRelationalDatabaseLogEventsResult
 */
export interface GetRelationalDatabaseLogEventsResult {
  /**
   * @schema GetRelationalDatabaseLogEventsResult#resourceLogEvents
   */
  readonly resourceLogEvents?: LogEvent[];

  /**
   * @schema GetRelationalDatabaseLogEventsResult#nextBackwardToken
   */
  readonly nextBackwardToken?: string;

  /**
   * @schema GetRelationalDatabaseLogEventsResult#nextForwardToken
   */
  readonly nextForwardToken?: string;

}

/**
 * @schema GetRelationalDatabaseLogStreamsRequest
 */
export interface GetRelationalDatabaseLogStreamsRequest {
  /**
   * @schema GetRelationalDatabaseLogStreamsRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * @schema GetRelationalDatabaseLogStreamsResult
 */
export interface GetRelationalDatabaseLogStreamsResult {
  /**
   * @schema GetRelationalDatabaseLogStreamsResult#logStreams
   */
  readonly logStreams?: string[];

}

/**
 * @schema GetRelationalDatabaseMasterUserPasswordRequest
 */
export interface GetRelationalDatabaseMasterUserPasswordRequest {
  /**
   * @schema GetRelationalDatabaseMasterUserPasswordRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema GetRelationalDatabaseMasterUserPasswordRequest#passwordVersion
   */
  readonly passwordVersion?: string;

}

/**
 * @schema GetRelationalDatabaseMasterUserPasswordResult
 */
export interface GetRelationalDatabaseMasterUserPasswordResult {
  /**
   * @schema GetRelationalDatabaseMasterUserPasswordResult#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema GetRelationalDatabaseMasterUserPasswordResult#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema GetRelationalDatabaseMetricDataRequest
 */
export interface GetRelationalDatabaseMetricDataRequest {
  /**
   * @schema GetRelationalDatabaseMetricDataRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema GetRelationalDatabaseMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema GetRelationalDatabaseMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema GetRelationalDatabaseMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema GetRelationalDatabaseMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema GetRelationalDatabaseMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema GetRelationalDatabaseMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * @schema GetRelationalDatabaseMetricDataResult
 */
export interface GetRelationalDatabaseMetricDataResult {
  /**
   * @schema GetRelationalDatabaseMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema GetRelationalDatabaseMetricDataResult#metricData
   */
  readonly metricData?: MetricDatapoint[];

}

/**
 * @schema GetRelationalDatabaseParametersRequest
 */
export interface GetRelationalDatabaseParametersRequest {
  /**
   * @schema GetRelationalDatabaseParametersRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema GetRelationalDatabaseParametersRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetRelationalDatabaseParametersResult
 */
export interface GetRelationalDatabaseParametersResult {
  /**
   * @schema GetRelationalDatabaseParametersResult#parameters
   */
  readonly parameters?: RelationalDatabaseParameter[];

  /**
   * @schema GetRelationalDatabaseParametersResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetRelationalDatabaseSnapshotRequest
 */
export interface GetRelationalDatabaseSnapshotRequest {
  /**
   * @schema GetRelationalDatabaseSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName: string;

}

/**
 * @schema GetRelationalDatabaseSnapshotResult
 */
export interface GetRelationalDatabaseSnapshotResult {
  /**
   * @schema GetRelationalDatabaseSnapshotResult#relationalDatabaseSnapshot
   */
  readonly relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;

}

/**
 * @schema GetRelationalDatabaseSnapshotsRequest
 */
export interface GetRelationalDatabaseSnapshotsRequest {
  /**
   * @schema GetRelationalDatabaseSnapshotsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetRelationalDatabaseSnapshotsResult
 */
export interface GetRelationalDatabaseSnapshotsResult {
  /**
   * @schema GetRelationalDatabaseSnapshotsResult#relationalDatabaseSnapshots
   */
  readonly relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[];

  /**
   * @schema GetRelationalDatabaseSnapshotsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetRelationalDatabasesRequest
 */
export interface GetRelationalDatabasesRequest {
  /**
   * @schema GetRelationalDatabasesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetRelationalDatabasesResult
 */
export interface GetRelationalDatabasesResult {
  /**
   * @schema GetRelationalDatabasesResult#relationalDatabases
   */
  readonly relationalDatabases?: RelationalDatabase[];

  /**
   * @schema GetRelationalDatabasesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema GetStaticIpRequest
 */
export interface GetStaticIpRequest {
  /**
   * @schema GetStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * @schema GetStaticIpResult
 */
export interface GetStaticIpResult {
  /**
   * @schema GetStaticIpResult#staticIp
   */
  readonly staticIp?: StaticIp;

}

/**
 * @schema GetStaticIpsRequest
 */
export interface GetStaticIpsRequest {
  /**
   * @schema GetStaticIpsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetStaticIpsResult
 */
export interface GetStaticIpsResult {
  /**
   * @schema GetStaticIpsResult#staticIps
   */
  readonly staticIps?: StaticIp[];

  /**
   * @schema GetStaticIpsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ImportKeyPairRequest
 */
export interface ImportKeyPairRequest {
  /**
   * @schema ImportKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

  /**
   * @schema ImportKeyPairRequest#publicKeyBase64
   */
  readonly publicKeyBase64: string;

}

/**
 * @schema ImportKeyPairResult
 */
export interface ImportKeyPairResult {
  /**
   * @schema ImportKeyPairResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema IsVpcPeeredRequest
 */
export interface IsVpcPeeredRequest {
}

/**
 * @schema IsVpcPeeredResult
 */
export interface IsVpcPeeredResult {
  /**
   * @schema IsVpcPeeredResult#isPeered
   */
  readonly isPeered?: boolean;

}

/**
 * @schema OpenInstancePublicPortsRequest
 */
export interface OpenInstancePublicPortsRequest {
  /**
   * @schema OpenInstancePublicPortsRequest#portInfo
   */
  readonly portInfo: PortInfo;

  /**
   * @schema OpenInstancePublicPortsRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema OpenInstancePublicPortsResult
 */
export interface OpenInstancePublicPortsResult {
  /**
   * @schema OpenInstancePublicPortsResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema PeerVpcRequest
 */
export interface PeerVpcRequest {
}

/**
 * @schema PeerVpcResult
 */
export interface PeerVpcResult {
  /**
   * @schema PeerVpcResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema PutAlarmRequest
 */
export interface PutAlarmRequest {
  /**
   * @schema PutAlarmRequest#alarmName
   */
  readonly alarmName: string;

  /**
   * @schema PutAlarmRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema PutAlarmRequest#monitoredResourceName
   */
  readonly monitoredResourceName: string;

  /**
   * @schema PutAlarmRequest#comparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema PutAlarmRequest#threshold
   */
  readonly threshold: number;

  /**
   * @schema PutAlarmRequest#evaluationPeriods
   */
  readonly evaluationPeriods: number;

  /**
   * @schema PutAlarmRequest#datapointsToAlarm
   */
  readonly datapointsToAlarm?: number;

  /**
   * @schema PutAlarmRequest#treatMissingData
   */
  readonly treatMissingData?: string;

  /**
   * @schema PutAlarmRequest#contactProtocols
   */
  readonly contactProtocols?: string[];

  /**
   * @schema PutAlarmRequest#notificationTriggers
   */
  readonly notificationTriggers?: string[];

  /**
   * @schema PutAlarmRequest#notificationEnabled
   */
  readonly notificationEnabled?: boolean;

}

/**
 * @schema PutAlarmResult
 */
export interface PutAlarmResult {
  /**
   * @schema PutAlarmResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema PutInstancePublicPortsRequest
 */
export interface PutInstancePublicPortsRequest {
  /**
   * @schema PutInstancePublicPortsRequest#portInfos
   */
  readonly portInfos: PortInfo[];

  /**
   * @schema PutInstancePublicPortsRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema PutInstancePublicPortsResult
 */
export interface PutInstancePublicPortsResult {
  /**
   * @schema PutInstancePublicPortsResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema RebootInstanceRequest
 */
export interface RebootInstanceRequest {
  /**
   * @schema RebootInstanceRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema RebootInstanceResult
 */
export interface RebootInstanceResult {
  /**
   * @schema RebootInstanceResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema RebootRelationalDatabaseRequest
 */
export interface RebootRelationalDatabaseRequest {
  /**
   * @schema RebootRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * @schema RebootRelationalDatabaseResult
 */
export interface RebootRelationalDatabaseResult {
  /**
   * @schema RebootRelationalDatabaseResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema RegisterContainerImageRequest
 */
export interface RegisterContainerImageRequest {
  /**
   * @schema RegisterContainerImageRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema RegisterContainerImageRequest#label
   */
  readonly label: string;

  /**
   * @schema RegisterContainerImageRequest#digest
   */
  readonly digest: string;

}

/**
 * @schema RegisterContainerImageResult
 */
export interface RegisterContainerImageResult {
  /**
   * @schema RegisterContainerImageResult#containerImage
   */
  readonly containerImage?: ContainerImage;

}

/**
 * @schema ReleaseStaticIpRequest
 */
export interface ReleaseStaticIpRequest {
  /**
   * @schema ReleaseStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * @schema ReleaseStaticIpResult
 */
export interface ReleaseStaticIpResult {
  /**
   * @schema ReleaseStaticIpResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema ResetDistributionCacheRequest
 */
export interface ResetDistributionCacheRequest {
  /**
   * @schema ResetDistributionCacheRequest#distributionName
   */
  readonly distributionName?: string;

}

/**
 * @schema ResetDistributionCacheResult
 */
export interface ResetDistributionCacheResult {
  /**
   * @schema ResetDistributionCacheResult#status
   */
  readonly status?: string;

  /**
   * @schema ResetDistributionCacheResult#createTime
   */
  readonly createTime?: string;

  /**
   * @schema ResetDistributionCacheResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema SendContactMethodVerificationRequest
 */
export interface SendContactMethodVerificationRequest {
  /**
   * @schema SendContactMethodVerificationRequest#protocol
   */
  readonly protocol: string;

}

/**
 * @schema SendContactMethodVerificationResult
 */
export interface SendContactMethodVerificationResult {
  /**
   * @schema SendContactMethodVerificationResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema StartInstanceRequest
 */
export interface StartInstanceRequest {
  /**
   * @schema StartInstanceRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema StartInstanceResult
 */
export interface StartInstanceResult {
  /**
   * @schema StartInstanceResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema StartRelationalDatabaseRequest
 */
export interface StartRelationalDatabaseRequest {
  /**
   * @schema StartRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * @schema StartRelationalDatabaseResult
 */
export interface StartRelationalDatabaseResult {
  /**
   * @schema StartRelationalDatabaseResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema StopInstanceRequest
 */
export interface StopInstanceRequest {
  /**
   * @schema StopInstanceRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema StopInstanceRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema StopInstanceResult
 */
export interface StopInstanceResult {
  /**
   * @schema StopInstanceResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema StopRelationalDatabaseRequest
 */
export interface StopRelationalDatabaseRequest {
  /**
   * @schema StopRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema StopRelationalDatabaseRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName?: string;

}

/**
 * @schema StopRelationalDatabaseResult
 */
export interface StopRelationalDatabaseResult {
  /**
   * @schema StopRelationalDatabaseResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResult
 */
export interface TagResourceResult {
  /**
   * @schema TagResourceResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema TestAlarmRequest
 */
export interface TestAlarmRequest {
  /**
   * @schema TestAlarmRequest#alarmName
   */
  readonly alarmName: string;

  /**
   * @schema TestAlarmRequest#state
   */
  readonly state: string;

}

/**
 * @schema TestAlarmResult
 */
export interface TestAlarmResult {
  /**
   * @schema TestAlarmResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema UnpeerVpcRequest
 */
export interface UnpeerVpcRequest {
}

/**
 * @schema UnpeerVpcResult
 */
export interface UnpeerVpcResult {
  /**
   * @schema UnpeerVpcResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResult
 */
export interface UntagResourceResult {
  /**
   * @schema UntagResourceResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema UpdateContainerServiceRequest
 */
export interface UpdateContainerServiceRequest {
  /**
   * @schema UpdateContainerServiceRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema UpdateContainerServiceRequest#power
   */
  readonly power?: string;

  /**
   * @schema UpdateContainerServiceRequest#scale
   */
  readonly scale?: number;

  /**
   * @schema UpdateContainerServiceRequest#isDisabled
   */
  readonly isDisabled?: boolean;

  /**
   * @schema UpdateContainerServiceRequest#publicDomainNames
   */
  readonly publicDomainNames?: { [key: string]: string[] };

}

/**
 * @schema UpdateContainerServiceResult
 */
export interface UpdateContainerServiceResult {
  /**
   * @schema UpdateContainerServiceResult#containerService
   */
  readonly containerService?: ContainerService;

}

/**
 * @schema UpdateDistributionRequest
 */
export interface UpdateDistributionRequest {
  /**
   * @schema UpdateDistributionRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema UpdateDistributionRequest#origin
   */
  readonly origin?: InputOrigin;

  /**
   * @schema UpdateDistributionRequest#defaultCacheBehavior
   */
  readonly defaultCacheBehavior?: CacheBehavior;

  /**
   * @schema UpdateDistributionRequest#cacheBehaviorSettings
   */
  readonly cacheBehaviorSettings?: CacheSettings;

  /**
   * @schema UpdateDistributionRequest#cacheBehaviors
   */
  readonly cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * @schema UpdateDistributionRequest#isEnabled
   */
  readonly isEnabled?: boolean;

}

/**
 * @schema UpdateDistributionResult
 */
export interface UpdateDistributionResult {
  /**
   * @schema UpdateDistributionResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema UpdateDistributionBundleRequest
 */
export interface UpdateDistributionBundleRequest {
  /**
   * @schema UpdateDistributionBundleRequest#distributionName
   */
  readonly distributionName?: string;

  /**
   * @schema UpdateDistributionBundleRequest#bundleId
   */
  readonly bundleId?: string;

}

/**
 * @schema UpdateDistributionBundleResult
 */
export interface UpdateDistributionBundleResult {
  /**
   * @schema UpdateDistributionBundleResult#operation
   */
  readonly operation?: Operation;

}

/**
 * @schema UpdateDomainEntryRequest
 */
export interface UpdateDomainEntryRequest {
  /**
   * @schema UpdateDomainEntryRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateDomainEntryRequest#domainEntry
   */
  readonly domainEntry: DomainEntry;

}

/**
 * @schema UpdateDomainEntryResult
 */
export interface UpdateDomainEntryResult {
  /**
   * @schema UpdateDomainEntryResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema UpdateLoadBalancerAttributeRequest
 */
export interface UpdateLoadBalancerAttributeRequest {
  /**
   * @schema UpdateLoadBalancerAttributeRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema UpdateLoadBalancerAttributeRequest#attributeName
   */
  readonly attributeName: string;

  /**
   * @schema UpdateLoadBalancerAttributeRequest#attributeValue
   */
  readonly attributeValue: string;

}

/**
 * @schema UpdateLoadBalancerAttributeResult
 */
export interface UpdateLoadBalancerAttributeResult {
  /**
   * @schema UpdateLoadBalancerAttributeResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema UpdateRelationalDatabaseRequest
 */
export interface UpdateRelationalDatabaseRequest {
  /**
   * @schema UpdateRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema UpdateRelationalDatabaseRequest#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema UpdateRelationalDatabaseRequest#rotateMasterUserPassword
   */
  readonly rotateMasterUserPassword?: boolean;

  /**
   * @schema UpdateRelationalDatabaseRequest#preferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema UpdateRelationalDatabaseRequest#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema UpdateRelationalDatabaseRequest#enableBackupRetention
   */
  readonly enableBackupRetention?: boolean;

  /**
   * @schema UpdateRelationalDatabaseRequest#disableBackupRetention
   */
  readonly disableBackupRetention?: boolean;

  /**
   * @schema UpdateRelationalDatabaseRequest#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema UpdateRelationalDatabaseRequest#applyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema UpdateRelationalDatabaseRequest#caCertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

}

/**
 * @schema UpdateRelationalDatabaseResult
 */
export interface UpdateRelationalDatabaseResult {
  /**
   * @schema UpdateRelationalDatabaseResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema UpdateRelationalDatabaseParametersRequest
 */
export interface UpdateRelationalDatabaseParametersRequest {
  /**
   * @schema UpdateRelationalDatabaseParametersRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema UpdateRelationalDatabaseParametersRequest#parameters
   */
  readonly parameters: RelationalDatabaseParameter[];

}

/**
 * @schema UpdateRelationalDatabaseParametersResult
 */
export interface UpdateRelationalDatabaseParametersResult {
  /**
   * @schema UpdateRelationalDatabaseParametersResult#operations
   */
  readonly operations?: Operation[];

}

/**
 * @schema Operation
 */
export interface Operation {
  /**
   * @schema Operation#id
   */
  readonly id?: string;

  /**
   * @schema Operation#resourceName
   */
  readonly resourceName?: string;

  /**
   * @schema Operation#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Operation#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Operation#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema Operation#isTerminal
   */
  readonly isTerminal?: boolean;

  /**
   * @schema Operation#operationDetails
   */
  readonly operationDetails?: string;

  /**
   * @schema Operation#operationType
   */
  readonly operationType?: string;

  /**
   * @schema Operation#status
   */
  readonly status?: string;

  /**
   * @schema Operation#statusChangedAt
   */
  readonly statusChangedAt?: string;

  /**
   * @schema Operation#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema Operation#errorDetails
   */
  readonly errorDetails?: string;

}

/**
 * @schema PortInfo
 */
export interface PortInfo {
  /**
   * @schema PortInfo#fromPort
   */
  readonly fromPort?: number;

  /**
   * @schema PortInfo#toPort
   */
  readonly toPort?: number;

  /**
   * @schema PortInfo#protocol
   */
  readonly protocol?: string;

  /**
   * @schema PortInfo#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema PortInfo#cidrListAliases
   */
  readonly cidrListAliases?: string[];

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
 * @schema CertificateSummary
 */
export interface CertificateSummary {
  /**
   * @schema CertificateSummary#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CertificateSummary#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema CertificateSummary#domainName
   */
  readonly domainName?: string;

  /**
   * @schema CertificateSummary#certificateDetail
   */
  readonly certificateDetail?: Certificate;

  /**
   * @schema CertificateSummary#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema InstanceEntry
 */
export interface InstanceEntry {
  /**
   * @schema InstanceEntry#sourceName
   */
  readonly sourceName: string;

  /**
   * @schema InstanceEntry#instanceType
   */
  readonly instanceType: string;

  /**
   * @schema InstanceEntry#portInfoSource
   */
  readonly portInfoSource: string;

  /**
   * @schema InstanceEntry#userData
   */
  readonly userData?: string;

  /**
   * @schema InstanceEntry#availabilityZone
   */
  readonly availabilityZone: string;

}

/**
 * @schema ContainerServiceDeploymentRequest
 */
export interface ContainerServiceDeploymentRequest {
  /**
   * @schema ContainerServiceDeploymentRequest#containers
   */
  readonly containers?: { [key: string]: Container };

  /**
   * @schema ContainerServiceDeploymentRequest#publicEndpoint
   */
  readonly publicEndpoint?: EndpointRequest;

}

/**
 * @schema ContainerService
 */
export interface ContainerService {
  /**
   * @schema ContainerService#containerServiceName
   */
  readonly containerServiceName?: string;

  /**
   * @schema ContainerService#arn
   */
  readonly arn?: string;

  /**
   * @schema ContainerService#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema ContainerService#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema ContainerService#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ContainerService#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ContainerService#power
   */
  readonly power?: string;

  /**
   * @schema ContainerService#powerId
   */
  readonly powerId?: string;

  /**
   * @schema ContainerService#state
   */
  readonly state?: string;

  /**
   * @schema ContainerService#scale
   */
  readonly scale?: number;

  /**
   * @schema ContainerService#currentDeployment
   */
  readonly currentDeployment?: ContainerServiceDeployment;

  /**
   * @schema ContainerService#nextDeployment
   */
  readonly nextDeployment?: ContainerServiceDeployment;

  /**
   * @schema ContainerService#isDisabled
   */
  readonly isDisabled?: boolean;

  /**
   * @schema ContainerService#principalArn
   */
  readonly principalArn?: string;

  /**
   * @schema ContainerService#privateDomainName
   */
  readonly privateDomainName?: string;

  /**
   * @schema ContainerService#publicDomainNames
   */
  readonly publicDomainNames?: { [key: string]: string[] };

  /**
   * @schema ContainerService#url
   */
  readonly url?: string;

}

/**
 * @schema Container
 */
export interface Container {
  /**
   * @schema Container#image
   */
  readonly image?: string;

  /**
   * @schema Container#command
   */
  readonly command?: string[];

  /**
   * @schema Container#environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema Container#ports
   */
  readonly ports?: { [key: string]: string };

}

/**
 * @schema EndpointRequest
 */
export interface EndpointRequest {
  /**
   * @schema EndpointRequest#containerName
   */
  readonly containerName: string;

  /**
   * @schema EndpointRequest#containerPort
   */
  readonly containerPort: number;

  /**
   * @schema EndpointRequest#healthCheck
   */
  readonly healthCheck?: ContainerServiceHealthCheckConfig;

}

/**
 * @schema ContainerServiceRegistryLogin
 */
export interface ContainerServiceRegistryLogin {
  /**
   * @schema ContainerServiceRegistryLogin#username
   */
  readonly username?: string;

  /**
   * @schema ContainerServiceRegistryLogin#password
   */
  readonly password?: string;

  /**
   * @schema ContainerServiceRegistryLogin#expiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema ContainerServiceRegistryLogin#registry
   */
  readonly registry?: string;

}

/**
 * @schema AddOnRequest
 */
export interface AddOnRequest {
  /**
   * @schema AddOnRequest#addOnType
   */
  readonly addOnType: string;

  /**
   * @schema AddOnRequest#autoSnapshotAddOnRequest
   */
  readonly autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;

}

/**
 * @schema InputOrigin
 */
export interface InputOrigin {
  /**
   * @schema InputOrigin#name
   */
  readonly name?: string;

  /**
   * @schema InputOrigin#regionName
   */
  readonly regionName?: string;

  /**
   * @schema InputOrigin#protocolPolicy
   */
  readonly protocolPolicy?: string;

}

/**
 * @schema CacheBehavior
 */
export interface CacheBehavior {
  /**
   * @schema CacheBehavior#behavior
   */
  readonly behavior?: string;

}

/**
 * @schema CacheSettings
 */
export interface CacheSettings {
  /**
   * @schema CacheSettings#defaultTTL
   */
  readonly defaultTTL?: number;

  /**
   * @schema CacheSettings#minimumTTL
   */
  readonly minimumTTL?: number;

  /**
   * @schema CacheSettings#maximumTTL
   */
  readonly maximumTTL?: number;

  /**
   * @schema CacheSettings#allowedHTTPMethods
   */
  readonly allowedHTTPMethods?: string;

  /**
   * @schema CacheSettings#cachedHTTPMethods
   */
  readonly cachedHTTPMethods?: string;

  /**
   * @schema CacheSettings#forwardedCookies
   */
  readonly forwardedCookies?: CookieObject;

  /**
   * @schema CacheSettings#forwardedHeaders
   */
  readonly forwardedHeaders?: HeaderObject;

  /**
   * @schema CacheSettings#forwardedQueryStrings
   */
  readonly forwardedQueryStrings?: QueryStringObject;

}

/**
 * @schema CacheBehaviorPerPath
 */
export interface CacheBehaviorPerPath {
  /**
   * @schema CacheBehaviorPerPath#path
   */
  readonly path?: string;

  /**
   * @schema CacheBehaviorPerPath#behavior
   */
  readonly behavior?: string;

}

/**
 * @schema LightsailDistribution
 */
export interface LightsailDistribution {
  /**
   * @schema LightsailDistribution#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDistribution#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailDistribution#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailDistribution#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailDistribution#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema LightsailDistribution#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailDistribution#alternativeDomainNames
   */
  readonly alternativeDomainNames?: string[];

  /**
   * @schema LightsailDistribution#status
   */
  readonly status?: string;

  /**
   * @schema LightsailDistribution#isEnabled
   */
  readonly isEnabled?: boolean;

  /**
   * @schema LightsailDistribution#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailDistribution#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailDistribution#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema LightsailDistribution#origin
   */
  readonly origin?: Origin;

  /**
   * @schema LightsailDistribution#originPublicDNS
   */
  readonly originPublicDNS?: string;

  /**
   * @schema LightsailDistribution#defaultCacheBehavior
   */
  readonly defaultCacheBehavior?: CacheBehavior;

  /**
   * @schema LightsailDistribution#cacheBehaviorSettings
   */
  readonly cacheBehaviorSettings?: CacheSettings;

  /**
   * @schema LightsailDistribution#cacheBehaviors
   */
  readonly cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * @schema LightsailDistribution#ableToUpdateBundle
   */
  readonly ableToUpdateBundle?: boolean;

  /**
   * @schema LightsailDistribution#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DomainEntry
 */
export interface DomainEntry {
  /**
   * @schema DomainEntry#id
   */
  readonly id?: string;

  /**
   * @schema DomainEntry#name
   */
  readonly name?: string;

  /**
   * @schema DomainEntry#target
   */
  readonly target?: string;

  /**
   * @schema DomainEntry#isAlias
   */
  readonly isAlias?: boolean;

  /**
   * @schema DomainEntry#type
   */
  readonly type?: string;

  /**
   * @schema DomainEntry#options
   */
  readonly options?: { [key: string]: string };

}

/**
 * @schema DiskMap
 */
export interface DiskMap {
  /**
   * @schema DiskMap#originalDiskPath
   */
  readonly originalDiskPath?: string;

  /**
   * @schema DiskMap#newDiskName
   */
  readonly newDiskName?: string;

}

/**
 * @schema KeyPair
 */
export interface KeyPair {
  /**
   * @schema KeyPair#name
   */
  readonly name?: string;

  /**
   * @schema KeyPair#arn
   */
  readonly arn?: string;

  /**
   * @schema KeyPair#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema KeyPair#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema KeyPair#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema KeyPair#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema KeyPair#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema KeyPair#fingerprint
   */
  readonly fingerprint?: string;

}

/**
 * @schema Alarm
 */
export interface Alarm {
  /**
   * @schema Alarm#name
   */
  readonly name?: string;

  /**
   * @schema Alarm#arn
   */
  readonly arn?: string;

  /**
   * @schema Alarm#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Alarm#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema Alarm#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Alarm#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema Alarm#monitoredResourceInfo
   */
  readonly monitoredResourceInfo?: MonitoredResourceInfo;

  /**
   * @schema Alarm#comparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema Alarm#evaluationPeriods
   */
  readonly evaluationPeriods?: number;

  /**
   * @schema Alarm#period
   */
  readonly period?: number;

  /**
   * @schema Alarm#threshold
   */
  readonly threshold?: number;

  /**
   * @schema Alarm#datapointsToAlarm
   */
  readonly datapointsToAlarm?: number;

  /**
   * @schema Alarm#treatMissingData
   */
  readonly treatMissingData?: string;

  /**
   * @schema Alarm#statistic
   */
  readonly statistic?: string;

  /**
   * @schema Alarm#metricName
   */
  readonly metricName?: string;

  /**
   * @schema Alarm#state
   */
  readonly state?: string;

  /**
   * @schema Alarm#unit
   */
  readonly unit?: string;

  /**
   * @schema Alarm#contactProtocols
   */
  readonly contactProtocols?: string[];

  /**
   * @schema Alarm#notificationTriggers
   */
  readonly notificationTriggers?: string[];

  /**
   * @schema Alarm#notificationEnabled
   */
  readonly notificationEnabled?: boolean;

}

/**
 * @schema AutoSnapshotDetails
 */
export interface AutoSnapshotDetails {
  /**
   * @schema AutoSnapshotDetails#date
   */
  readonly date?: string;

  /**
   * @schema AutoSnapshotDetails#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AutoSnapshotDetails#status
   */
  readonly status?: string;

  /**
   * @schema AutoSnapshotDetails#fromAttachedDisks
   */
  readonly fromAttachedDisks?: AttachedDisk[];

}

/**
 * @schema Blueprint
 */
export interface Blueprint {
  /**
   * @schema Blueprint#blueprintId
   */
  readonly blueprintId?: string;

  /**
   * @schema Blueprint#name
   */
  readonly name?: string;

  /**
   * @schema Blueprint#group
   */
  readonly group?: string;

  /**
   * @schema Blueprint#type
   */
  readonly type?: string;

  /**
   * @schema Blueprint#description
   */
  readonly description?: string;

  /**
   * @schema Blueprint#isActive
   */
  readonly isActive?: boolean;

  /**
   * @schema Blueprint#minPower
   */
  readonly minPower?: number;

  /**
   * @schema Blueprint#version
   */
  readonly version?: string;

  /**
   * @schema Blueprint#versionCode
   */
  readonly versionCode?: string;

  /**
   * @schema Blueprint#productUrl
   */
  readonly productUrl?: string;

  /**
   * @schema Blueprint#licenseUrl
   */
  readonly licenseUrl?: string;

  /**
   * @schema Blueprint#platform
   */
  readonly platform?: string;

}

/**
 * @schema Bundle
 */
export interface Bundle {
  /**
   * @schema Bundle#price
   */
  readonly price?: number;

  /**
   * @schema Bundle#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema Bundle#diskSizeInGb
   */
  readonly diskSizeInGb?: number;

  /**
   * @schema Bundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema Bundle#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Bundle#isActive
   */
  readonly isActive?: boolean;

  /**
   * @schema Bundle#name
   */
  readonly name?: string;

  /**
   * @schema Bundle#power
   */
  readonly power?: number;

  /**
   * @schema Bundle#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

  /**
   * @schema Bundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema Bundle#supportedPlatforms
   */
  readonly supportedPlatforms?: string[];

}

/**
 * @schema CloudFormationStackRecord
 */
export interface CloudFormationStackRecord {
  /**
   * @schema CloudFormationStackRecord#name
   */
  readonly name?: string;

  /**
   * @schema CloudFormationStackRecord#arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationStackRecord#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema CloudFormationStackRecord#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema CloudFormationStackRecord#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationStackRecord#state
   */
  readonly state?: string;

  /**
   * @schema CloudFormationStackRecord#sourceInfo
   */
  readonly sourceInfo?: CloudFormationStackRecordSourceInfo[];

  /**
   * @schema CloudFormationStackRecord#destinationInfo
   */
  readonly destinationInfo?: DestinationInfo;

}

/**
 * @schema ContactMethod
 */
export interface ContactMethod {
  /**
   * @schema ContactMethod#contactEndpoint
   */
  readonly contactEndpoint?: string;

  /**
   * @schema ContactMethod#status
   */
  readonly status?: string;

  /**
   * @schema ContactMethod#protocol
   */
  readonly protocol?: string;

  /**
   * @schema ContactMethod#name
   */
  readonly name?: string;

  /**
   * @schema ContactMethod#arn
   */
  readonly arn?: string;

  /**
   * @schema ContactMethod#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema ContactMethod#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema ContactMethod#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ContactMethod#supportCode
   */
  readonly supportCode?: string;

}

/**
 * @schema ContainerImage
 */
export interface ContainerImage {
  /**
   * @schema ContainerImage#image
   */
  readonly image?: string;

  /**
   * @schema ContainerImage#digest
   */
  readonly digest?: string;

  /**
   * @schema ContainerImage#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema ContainerServiceLogEvent
 */
export interface ContainerServiceLogEvent {
  /**
   * @schema ContainerServiceLogEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema ContainerServiceLogEvent#message
   */
  readonly message?: string;

}

/**
 * @schema ContainerServiceDeployment
 */
export interface ContainerServiceDeployment {
  /**
   * @schema ContainerServiceDeployment#version
   */
  readonly version?: number;

  /**
   * @schema ContainerServiceDeployment#state
   */
  readonly state?: string;

  /**
   * @schema ContainerServiceDeployment#containers
   */
  readonly containers?: { [key: string]: Container };

  /**
   * @schema ContainerServiceDeployment#publicEndpoint
   */
  readonly publicEndpoint?: ContainerServiceEndpoint;

  /**
   * @schema ContainerServiceDeployment#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema MetricDatapoint
 */
export interface MetricDatapoint {
  /**
   * @schema MetricDatapoint#average
   */
  readonly average?: number;

  /**
   * @schema MetricDatapoint#maximum
   */
  readonly maximum?: number;

  /**
   * @schema MetricDatapoint#minimum
   */
  readonly minimum?: number;

  /**
   * @schema MetricDatapoint#sampleCount
   */
  readonly sampleCount?: number;

  /**
   * @schema MetricDatapoint#sum
   */
  readonly sum?: number;

  /**
   * @schema MetricDatapoint#timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema MetricDatapoint#unit
   */
  readonly unit?: string;

}

/**
 * @schema ContainerServicePower
 */
export interface ContainerServicePower {
  /**
   * @schema ContainerServicePower#powerId
   */
  readonly powerId?: string;

  /**
   * @schema ContainerServicePower#price
   */
  readonly price?: number;

  /**
   * @schema ContainerServicePower#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema ContainerServicePower#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

  /**
   * @schema ContainerServicePower#name
   */
  readonly name?: string;

  /**
   * @schema ContainerServicePower#isActive
   */
  readonly isActive?: boolean;

}

/**
 * @schema Disk
 */
export interface Disk {
  /**
   * @schema Disk#name
   */
  readonly name?: string;

  /**
   * @schema Disk#arn
   */
  readonly arn?: string;

  /**
   * @schema Disk#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema Disk#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Disk#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema Disk#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Disk#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Disk#addOns
   */
  readonly addOns?: AddOn[];

  /**
   * @schema Disk#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema Disk#isSystemDisk
   */
  readonly isSystemDisk?: boolean;

  /**
   * @schema Disk#iops
   */
  readonly iops?: number;

  /**
   * @schema Disk#path
   */
  readonly path?: string;

  /**
   * @schema Disk#state
   */
  readonly state?: string;

  /**
   * @schema Disk#attachedTo
   */
  readonly attachedTo?: string;

  /**
   * @schema Disk#isAttached
   */
  readonly isAttached?: boolean;

  /**
   * @schema Disk#attachmentState
   */
  readonly attachmentState?: string;

  /**
   * @schema Disk#gbInUse
   */
  readonly gbInUse?: number;

}

/**
 * @schema DiskSnapshot
 */
export interface DiskSnapshot {
  /**
   * @schema DiskSnapshot#name
   */
  readonly name?: string;

  /**
   * @schema DiskSnapshot#arn
   */
  readonly arn?: string;

  /**
   * @schema DiskSnapshot#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema DiskSnapshot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DiskSnapshot#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema DiskSnapshot#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema DiskSnapshot#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DiskSnapshot#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema DiskSnapshot#state
   */
  readonly state?: string;

  /**
   * @schema DiskSnapshot#progress
   */
  readonly progress?: string;

  /**
   * @schema DiskSnapshot#fromDiskName
   */
  readonly fromDiskName?: string;

  /**
   * @schema DiskSnapshot#fromDiskArn
   */
  readonly fromDiskArn?: string;

  /**
   * @schema DiskSnapshot#fromInstanceName
   */
  readonly fromInstanceName?: string;

  /**
   * @schema DiskSnapshot#fromInstanceArn
   */
  readonly fromInstanceArn?: string;

  /**
   * @schema DiskSnapshot#isFromAutoSnapshot
   */
  readonly isFromAutoSnapshot?: boolean;

}

/**
 * @schema DistributionBundle
 */
export interface DistributionBundle {
  /**
   * @schema DistributionBundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema DistributionBundle#name
   */
  readonly name?: string;

  /**
   * @schema DistributionBundle#price
   */
  readonly price?: number;

  /**
   * @schema DistributionBundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema DistributionBundle#isActive
   */
  readonly isActive?: boolean;

}

/**
 * @schema Domain
 */
export interface Domain {
  /**
   * @schema Domain#name
   */
  readonly name?: string;

  /**
   * @schema Domain#arn
   */
  readonly arn?: string;

  /**
   * @schema Domain#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema Domain#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Domain#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema Domain#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Domain#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Domain#domainEntries
   */
  readonly domainEntries?: DomainEntry[];

}

/**
 * @schema ExportSnapshotRecord
 */
export interface ExportSnapshotRecord {
  /**
   * @schema ExportSnapshotRecord#name
   */
  readonly name?: string;

  /**
   * @schema ExportSnapshotRecord#arn
   */
  readonly arn?: string;

  /**
   * @schema ExportSnapshotRecord#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema ExportSnapshotRecord#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema ExportSnapshotRecord#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ExportSnapshotRecord#state
   */
  readonly state?: string;

  /**
   * @schema ExportSnapshotRecord#sourceInfo
   */
  readonly sourceInfo?: ExportSnapshotRecordSourceInfo;

  /**
   * @schema ExportSnapshotRecord#destinationInfo
   */
  readonly destinationInfo?: DestinationInfo;

}

/**
 * @schema Instance
 */
export interface Instance {
  /**
   * @schema Instance#name
   */
  readonly name?: string;

  /**
   * @schema Instance#arn
   */
  readonly arn?: string;

  /**
   * @schema Instance#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema Instance#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Instance#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema Instance#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Instance#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Instance#blueprintId
   */
  readonly blueprintId?: string;

  /**
   * @schema Instance#blueprintName
   */
  readonly blueprintName?: string;

  /**
   * @schema Instance#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema Instance#addOns
   */
  readonly addOns?: AddOn[];

  /**
   * @schema Instance#isStaticIp
   */
  readonly isStaticIp?: boolean;

  /**
   * @schema Instance#privateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Instance#publicIpAddress
   */
  readonly publicIpAddress?: string;

  /**
   * @schema Instance#ipv6Address
   */
  readonly ipv6Address?: string;

  /**
   * @schema Instance#hardware
   */
  readonly hardware?: InstanceHardware;

  /**
   * @schema Instance#networking
   */
  readonly networking?: InstanceNetworking;

  /**
   * @schema Instance#state
   */
  readonly state?: InstanceState;

  /**
   * @schema Instance#username
   */
  readonly username?: string;

  /**
   * @schema Instance#sshKeyName
   */
  readonly sshKeyName?: string;

}

/**
 * @schema InstanceAccessDetails
 */
export interface InstanceAccessDetails {
  /**
   * @schema InstanceAccessDetails#certKey
   */
  readonly certKey?: string;

  /**
   * @schema InstanceAccessDetails#expiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema InstanceAccessDetails#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema InstanceAccessDetails#password
   */
  readonly password?: string;

  /**
   * @schema InstanceAccessDetails#passwordData
   */
  readonly passwordData?: PasswordData;

  /**
   * @schema InstanceAccessDetails#privateKey
   */
  readonly privateKey?: string;

  /**
   * @schema InstanceAccessDetails#protocol
   */
  readonly protocol?: string;

  /**
   * @schema InstanceAccessDetails#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema InstanceAccessDetails#username
   */
  readonly username?: string;

  /**
   * @schema InstanceAccessDetails#hostKeys
   */
  readonly hostKeys?: HostKeyAttributes[];

}

/**
 * @schema InstancePortState
 */
export interface InstancePortState {
  /**
   * @schema InstancePortState#fromPort
   */
  readonly fromPort?: number;

  /**
   * @schema InstancePortState#toPort
   */
  readonly toPort?: number;

  /**
   * @schema InstancePortState#protocol
   */
  readonly protocol?: string;

  /**
   * @schema InstancePortState#state
   */
  readonly state?: string;

  /**
   * @schema InstancePortState#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema InstancePortState#cidrListAliases
   */
  readonly cidrListAliases?: string[];

}

/**
 * @schema InstanceSnapshot
 */
export interface InstanceSnapshot {
  /**
   * @schema InstanceSnapshot#name
   */
  readonly name?: string;

  /**
   * @schema InstanceSnapshot#arn
   */
  readonly arn?: string;

  /**
   * @schema InstanceSnapshot#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema InstanceSnapshot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema InstanceSnapshot#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema InstanceSnapshot#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema InstanceSnapshot#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema InstanceSnapshot#state
   */
  readonly state?: string;

  /**
   * @schema InstanceSnapshot#progress
   */
  readonly progress?: string;

  /**
   * @schema InstanceSnapshot#fromAttachedDisks
   */
  readonly fromAttachedDisks?: Disk[];

  /**
   * @schema InstanceSnapshot#fromInstanceName
   */
  readonly fromInstanceName?: string;

  /**
   * @schema InstanceSnapshot#fromInstanceArn
   */
  readonly fromInstanceArn?: string;

  /**
   * @schema InstanceSnapshot#fromBlueprintId
   */
  readonly fromBlueprintId?: string;

  /**
   * @schema InstanceSnapshot#fromBundleId
   */
  readonly fromBundleId?: string;

  /**
   * @schema InstanceSnapshot#isFromAutoSnapshot
   */
  readonly isFromAutoSnapshot?: boolean;

  /**
   * @schema InstanceSnapshot#sizeInGb
   */
  readonly sizeInGb?: number;

}

/**
 * @schema InstanceState
 */
export interface InstanceState {
  /**
   * @schema InstanceState#code
   */
  readonly code?: number;

  /**
   * @schema InstanceState#name
   */
  readonly name?: string;

}

/**
 * @schema LoadBalancer
 */
export interface LoadBalancer {
  /**
   * @schema LoadBalancer#name
   */
  readonly name?: string;

  /**
   * @schema LoadBalancer#arn
   */
  readonly arn?: string;

  /**
   * @schema LoadBalancer#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LoadBalancer#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LoadBalancer#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema LoadBalancer#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LoadBalancer#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema LoadBalancer#dnsName
   */
  readonly dnsName?: string;

  /**
   * @schema LoadBalancer#state
   */
  readonly state?: string;

  /**
   * @schema LoadBalancer#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LoadBalancer#publicPorts
   */
  readonly publicPorts?: number[];

  /**
   * @schema LoadBalancer#healthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema LoadBalancer#instancePort
   */
  readonly instancePort?: number;

  /**
   * @schema LoadBalancer#instanceHealthSummary
   */
  readonly instanceHealthSummary?: InstanceHealthSummary[];

  /**
   * @schema LoadBalancer#tlsCertificateSummaries
   */
  readonly tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[];

  /**
   * @schema LoadBalancer#configurationOptions
   */
  readonly configurationOptions?: { [key: string]: string };

}

/**
 * @schema LoadBalancerTlsCertificate
 */
export interface LoadBalancerTlsCertificate {
  /**
   * @schema LoadBalancerTlsCertificate#name
   */
  readonly name?: string;

  /**
   * @schema LoadBalancerTlsCertificate#arn
   */
  readonly arn?: string;

  /**
   * @schema LoadBalancerTlsCertificate#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LoadBalancerTlsCertificate#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LoadBalancerTlsCertificate#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema LoadBalancerTlsCertificate#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LoadBalancerTlsCertificate#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema LoadBalancerTlsCertificate#loadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema LoadBalancerTlsCertificate#isAttached
   */
  readonly isAttached?: boolean;

  /**
   * @schema LoadBalancerTlsCertificate#status
   */
  readonly status?: string;

  /**
   * @schema LoadBalancerTlsCertificate#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LoadBalancerTlsCertificate#domainValidationRecords
   */
  readonly domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecord[];

  /**
   * @schema LoadBalancerTlsCertificate#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema LoadBalancerTlsCertificate#issuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema LoadBalancerTlsCertificate#issuer
   */
  readonly issuer?: string;

  /**
   * @schema LoadBalancerTlsCertificate#keyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema LoadBalancerTlsCertificate#notAfter
   */
  readonly notAfter?: string;

  /**
   * @schema LoadBalancerTlsCertificate#notBefore
   */
  readonly notBefore?: string;

  /**
   * @schema LoadBalancerTlsCertificate#renewalSummary
   */
  readonly renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;

  /**
   * @schema LoadBalancerTlsCertificate#revocationReason
   */
  readonly revocationReason?: string;

  /**
   * @schema LoadBalancerTlsCertificate#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema LoadBalancerTlsCertificate#serial
   */
  readonly serial?: string;

  /**
   * @schema LoadBalancerTlsCertificate#signatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

  /**
   * @schema LoadBalancerTlsCertificate#subject
   */
  readonly subject?: string;

  /**
   * @schema LoadBalancerTlsCertificate#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

}

/**
 * @schema Region
 */
export interface Region {
  /**
   * @schema Region#continentCode
   */
  readonly continentCode?: string;

  /**
   * @schema Region#description
   */
  readonly description?: string;

  /**
   * @schema Region#displayName
   */
  readonly displayName?: string;

  /**
   * @schema Region#name
   */
  readonly name?: string;

  /**
   * @schema Region#availabilityZones
   */
  readonly availabilityZones?: AvailabilityZone[];

  /**
   * @schema Region#relationalDatabaseAvailabilityZones
   */
  readonly relationalDatabaseAvailabilityZones?: AvailabilityZone[];

}

/**
 * @schema RelationalDatabase
 */
export interface RelationalDatabase {
  /**
   * @schema RelationalDatabase#name
   */
  readonly name?: string;

  /**
   * @schema RelationalDatabase#arn
   */
  readonly arn?: string;

  /**
   * @schema RelationalDatabase#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema RelationalDatabase#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RelationalDatabase#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema RelationalDatabase#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RelationalDatabase#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RelationalDatabase#relationalDatabaseBlueprintId
   */
  readonly relationalDatabaseBlueprintId?: string;

  /**
   * @schema RelationalDatabase#relationalDatabaseBundleId
   */
  readonly relationalDatabaseBundleId?: string;

  /**
   * @schema RelationalDatabase#masterDatabaseName
   */
  readonly masterDatabaseName?: string;

  /**
   * @schema RelationalDatabase#hardware
   */
  readonly hardware?: RelationalDatabaseHardware;

  /**
   * @schema RelationalDatabase#state
   */
  readonly state?: string;

  /**
   * @schema RelationalDatabase#secondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema RelationalDatabase#backupRetentionEnabled
   */
  readonly backupRetentionEnabled?: boolean;

  /**
   * @schema RelationalDatabase#pendingModifiedValues
   */
  readonly pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;

  /**
   * @schema RelationalDatabase#engine
   */
  readonly engine?: string;

  /**
   * @schema RelationalDatabase#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RelationalDatabase#latestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema RelationalDatabase#masterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RelationalDatabase#parameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema RelationalDatabase#preferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RelationalDatabase#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RelationalDatabase#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RelationalDatabase#masterEndpoint
   */
  readonly masterEndpoint?: RelationalDatabaseEndpoint;

  /**
   * @schema RelationalDatabase#pendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: PendingMaintenanceAction[];

  /**
   * @schema RelationalDatabase#caCertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

}

/**
 * @schema RelationalDatabaseBlueprint
 */
export interface RelationalDatabaseBlueprint {
  /**
   * @schema RelationalDatabaseBlueprint#blueprintId
   */
  readonly blueprintId?: string;

  /**
   * @schema RelationalDatabaseBlueprint#engine
   */
  readonly engine?: string;

  /**
   * @schema RelationalDatabaseBlueprint#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RelationalDatabaseBlueprint#engineDescription
   */
  readonly engineDescription?: string;

  /**
   * @schema RelationalDatabaseBlueprint#engineVersionDescription
   */
  readonly engineVersionDescription?: string;

  /**
   * @schema RelationalDatabaseBlueprint#isEngineDefault
   */
  readonly isEngineDefault?: boolean;

}

/**
 * @schema RelationalDatabaseBundle
 */
export interface RelationalDatabaseBundle {
  /**
   * @schema RelationalDatabaseBundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema RelationalDatabaseBundle#name
   */
  readonly name?: string;

  /**
   * @schema RelationalDatabaseBundle#price
   */
  readonly price?: number;

  /**
   * @schema RelationalDatabaseBundle#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

  /**
   * @schema RelationalDatabaseBundle#diskSizeInGb
   */
  readonly diskSizeInGb?: number;

  /**
   * @schema RelationalDatabaseBundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema RelationalDatabaseBundle#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema RelationalDatabaseBundle#isEncrypted
   */
  readonly isEncrypted?: boolean;

  /**
   * @schema RelationalDatabaseBundle#isActive
   */
  readonly isActive?: boolean;

}

/**
 * @schema RelationalDatabaseEvent
 */
export interface RelationalDatabaseEvent {
  /**
   * @schema RelationalDatabaseEvent#resource
   */
  readonly resource?: string;

  /**
   * @schema RelationalDatabaseEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RelationalDatabaseEvent#message
   */
  readonly message?: string;

  /**
   * @schema RelationalDatabaseEvent#eventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * @schema LogEvent
 */
export interface LogEvent {
  /**
   * @schema LogEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LogEvent#message
   */
  readonly message?: string;

}

/**
 * @schema RelationalDatabaseParameter
 */
export interface RelationalDatabaseParameter {
  /**
   * @schema RelationalDatabaseParameter#allowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema RelationalDatabaseParameter#applyMethod
   */
  readonly applyMethod?: string;

  /**
   * @schema RelationalDatabaseParameter#applyType
   */
  readonly applyType?: string;

  /**
   * @schema RelationalDatabaseParameter#dataType
   */
  readonly dataType?: string;

  /**
   * @schema RelationalDatabaseParameter#description
   */
  readonly description?: string;

  /**
   * @schema RelationalDatabaseParameter#isModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema RelationalDatabaseParameter#parameterName
   */
  readonly parameterName?: string;

  /**
   * @schema RelationalDatabaseParameter#parameterValue
   */
  readonly parameterValue?: string;

}

/**
 * @schema RelationalDatabaseSnapshot
 */
export interface RelationalDatabaseSnapshot {
  /**
   * @schema RelationalDatabaseSnapshot#name
   */
  readonly name?: string;

  /**
   * @schema RelationalDatabaseSnapshot#arn
   */
  readonly arn?: string;

  /**
   * @schema RelationalDatabaseSnapshot#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema RelationalDatabaseSnapshot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RelationalDatabaseSnapshot#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema RelationalDatabaseSnapshot#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RelationalDatabaseSnapshot#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RelationalDatabaseSnapshot#engine
   */
  readonly engine?: string;

  /**
   * @schema RelationalDatabaseSnapshot#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RelationalDatabaseSnapshot#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema RelationalDatabaseSnapshot#state
   */
  readonly state?: string;

  /**
   * @schema RelationalDatabaseSnapshot#fromRelationalDatabaseName
   */
  readonly fromRelationalDatabaseName?: string;

  /**
   * @schema RelationalDatabaseSnapshot#fromRelationalDatabaseArn
   */
  readonly fromRelationalDatabaseArn?: string;

  /**
   * @schema RelationalDatabaseSnapshot#fromRelationalDatabaseBundleId
   */
  readonly fromRelationalDatabaseBundleId?: string;

  /**
   * @schema RelationalDatabaseSnapshot#fromRelationalDatabaseBlueprintId
   */
  readonly fromRelationalDatabaseBlueprintId?: string;

}

/**
 * @schema StaticIp
 */
export interface StaticIp {
  /**
   * @schema StaticIp#name
   */
  readonly name?: string;

  /**
   * @schema StaticIp#arn
   */
  readonly arn?: string;

  /**
   * @schema StaticIp#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema StaticIp#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema StaticIp#location
   */
  readonly location?: ResourceLocation;

  /**
   * @schema StaticIp#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema StaticIp#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema StaticIp#attachedTo
   */
  readonly attachedTo?: string;

  /**
   * @schema StaticIp#isAttached
   */
  readonly isAttached?: boolean;

}

/**
 * @schema ResourceLocation
 */
export interface ResourceLocation {
  /**
   * @schema ResourceLocation#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ResourceLocation#regionName
   */
  readonly regionName?: string;

}

/**
 * @schema Certificate
 */
export interface Certificate {
  /**
   * @schema Certificate#arn
   */
  readonly arn?: string;

  /**
   * @schema Certificate#name
   */
  readonly name?: string;

  /**
   * @schema Certificate#domainName
   */
  readonly domainName?: string;

  /**
   * @schema Certificate#status
   */
  readonly status?: string;

  /**
   * @schema Certificate#serialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema Certificate#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema Certificate#domainValidationRecords
   */
  readonly domainValidationRecords?: DomainValidationRecord[];

  /**
   * @schema Certificate#requestFailureReason
   */
  readonly requestFailureReason?: string;

  /**
   * @schema Certificate#inUseResourceCount
   */
  readonly inUseResourceCount?: number;

  /**
   * @schema Certificate#keyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema Certificate#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Certificate#issuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema Certificate#issuerCA
   */
  readonly issuerCA?: string;

  /**
   * @schema Certificate#notBefore
   */
  readonly notBefore?: string;

  /**
   * @schema Certificate#notAfter
   */
  readonly notAfter?: string;

  /**
   * @schema Certificate#eligibleToRenew
   */
  readonly eligibleToRenew?: string;

  /**
   * @schema Certificate#renewalSummary
   */
  readonly renewalSummary?: RenewalSummary;

  /**
   * @schema Certificate#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema Certificate#revocationReason
   */
  readonly revocationReason?: string;

  /**
   * @schema Certificate#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Certificate#supportCode
   */
  readonly supportCode?: string;

}

/**
 * @schema ContainerServiceHealthCheckConfig
 */
export interface ContainerServiceHealthCheckConfig {
  /**
   * @schema ContainerServiceHealthCheckConfig#healthyThreshold
   */
  readonly healthyThreshold?: number;

  /**
   * @schema ContainerServiceHealthCheckConfig#unhealthyThreshold
   */
  readonly unhealthyThreshold?: number;

  /**
   * @schema ContainerServiceHealthCheckConfig#timeoutSeconds
   */
  readonly timeoutSeconds?: number;

  /**
   * @schema ContainerServiceHealthCheckConfig#intervalSeconds
   */
  readonly intervalSeconds?: number;

  /**
   * @schema ContainerServiceHealthCheckConfig#path
   */
  readonly path?: string;

  /**
   * @schema ContainerServiceHealthCheckConfig#successCodes
   */
  readonly successCodes?: string;

}

/**
 * @schema AutoSnapshotAddOnRequest
 */
export interface AutoSnapshotAddOnRequest {
  /**
   * @schema AutoSnapshotAddOnRequest#snapshotTimeOfDay
   */
  readonly snapshotTimeOfDay?: string;

}

/**
 * @schema CookieObject
 */
export interface CookieObject {
  /**
   * @schema CookieObject#option
   */
  readonly option?: string;

  /**
   * @schema CookieObject#cookiesAllowList
   */
  readonly cookiesAllowList?: string[];

}

/**
 * @schema HeaderObject
 */
export interface HeaderObject {
  /**
   * @schema HeaderObject#option
   */
  readonly option?: string;

  /**
   * @schema HeaderObject#headersAllowList
   */
  readonly headersAllowList?: string[];

}

/**
 * @schema QueryStringObject
 */
export interface QueryStringObject {
  /**
   * @schema QueryStringObject#option
   */
  readonly option?: boolean;

  /**
   * @schema QueryStringObject#queryStringsAllowList
   */
  readonly queryStringsAllowList?: string[];

}

/**
 * @schema Origin
 */
export interface Origin {
  /**
   * @schema Origin#name
   */
  readonly name?: string;

  /**
   * @schema Origin#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Origin#regionName
   */
  readonly regionName?: string;

  /**
   * @schema Origin#protocolPolicy
   */
  readonly protocolPolicy?: string;

}

/**
 * @schema MonitoredResourceInfo
 */
export interface MonitoredResourceInfo {
  /**
   * @schema MonitoredResourceInfo#arn
   */
  readonly arn?: string;

  /**
   * @schema MonitoredResourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema MonitoredResourceInfo#resourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema AttachedDisk
 */
export interface AttachedDisk {
  /**
   * @schema AttachedDisk#path
   */
  readonly path?: string;

  /**
   * @schema AttachedDisk#sizeInGb
   */
  readonly sizeInGb?: number;

}

/**
 * @schema CloudFormationStackRecordSourceInfo
 */
export interface CloudFormationStackRecordSourceInfo {
  /**
   * @schema CloudFormationStackRecordSourceInfo#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationStackRecordSourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema CloudFormationStackRecordSourceInfo#arn
   */
  readonly arn?: string;

}

/**
 * @schema DestinationInfo
 */
export interface DestinationInfo {
  /**
   * @schema DestinationInfo#id
   */
  readonly id?: string;

  /**
   * @schema DestinationInfo#service
   */
  readonly service?: string;

}

/**
 * @schema ContainerServiceEndpoint
 */
export interface ContainerServiceEndpoint {
  /**
   * @schema ContainerServiceEndpoint#containerName
   */
  readonly containerName?: string;

  /**
   * @schema ContainerServiceEndpoint#containerPort
   */
  readonly containerPort?: number;

  /**
   * @schema ContainerServiceEndpoint#healthCheck
   */
  readonly healthCheck?: ContainerServiceHealthCheckConfig;

}

/**
 * @schema AddOn
 */
export interface AddOn {
  /**
   * @schema AddOn#name
   */
  readonly name?: string;

  /**
   * @schema AddOn#status
   */
  readonly status?: string;

  /**
   * @schema AddOn#snapshotTimeOfDay
   */
  readonly snapshotTimeOfDay?: string;

  /**
   * @schema AddOn#nextSnapshotTimeOfDay
   */
  readonly nextSnapshotTimeOfDay?: string;

}

/**
 * @schema ExportSnapshotRecordSourceInfo
 */
export interface ExportSnapshotRecordSourceInfo {
  /**
   * @schema ExportSnapshotRecordSourceInfo#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ExportSnapshotRecordSourceInfo#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema ExportSnapshotRecordSourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema ExportSnapshotRecordSourceInfo#arn
   */
  readonly arn?: string;

  /**
   * @schema ExportSnapshotRecordSourceInfo#fromResourceName
   */
  readonly fromResourceName?: string;

  /**
   * @schema ExportSnapshotRecordSourceInfo#fromResourceArn
   */
  readonly fromResourceArn?: string;

  /**
   * @schema ExportSnapshotRecordSourceInfo#instanceSnapshotInfo
   */
  readonly instanceSnapshotInfo?: InstanceSnapshotInfo;

  /**
   * @schema ExportSnapshotRecordSourceInfo#diskSnapshotInfo
   */
  readonly diskSnapshotInfo?: DiskSnapshotInfo;

}

/**
 * @schema InstanceHardware
 */
export interface InstanceHardware {
  /**
   * @schema InstanceHardware#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema InstanceHardware#disks
   */
  readonly disks?: Disk[];

  /**
   * @schema InstanceHardware#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

}

/**
 * @schema InstanceNetworking
 */
export interface InstanceNetworking {
  /**
   * @schema InstanceNetworking#monthlyTransfer
   */
  readonly monthlyTransfer?: MonthlyTransfer;

  /**
   * @schema InstanceNetworking#ports
   */
  readonly ports?: InstancePortInfo[];

}

/**
 * @schema PasswordData
 */
export interface PasswordData {
  /**
   * @schema PasswordData#ciphertext
   */
  readonly ciphertext?: string;

  /**
   * @schema PasswordData#keyPairName
   */
  readonly keyPairName?: string;

}

/**
 * @schema HostKeyAttributes
 */
export interface HostKeyAttributes {
  /**
   * @schema HostKeyAttributes#algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema HostKeyAttributes#publicKey
   */
  readonly publicKey?: string;

  /**
   * @schema HostKeyAttributes#witnessedAt
   */
  readonly witnessedAt?: string;

  /**
   * @schema HostKeyAttributes#fingerprintSHA1
   */
  readonly fingerprintSHA1?: string;

  /**
   * @schema HostKeyAttributes#fingerprintSHA256
   */
  readonly fingerprintSHA256?: string;

  /**
   * @schema HostKeyAttributes#notValidBefore
   */
  readonly notValidBefore?: string;

  /**
   * @schema HostKeyAttributes#notValidAfter
   */
  readonly notValidAfter?: string;

}

/**
 * @schema InstanceHealthSummary
 */
export interface InstanceHealthSummary {
  /**
   * @schema InstanceHealthSummary#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema InstanceHealthSummary#instanceHealth
   */
  readonly instanceHealth?: string;

  /**
   * @schema InstanceHealthSummary#instanceHealthReason
   */
  readonly instanceHealthReason?: string;

}

/**
 * @schema LoadBalancerTlsCertificateSummary
 */
export interface LoadBalancerTlsCertificateSummary {
  /**
   * @schema LoadBalancerTlsCertificateSummary#name
   */
  readonly name?: string;

  /**
   * @schema LoadBalancerTlsCertificateSummary#isAttached
   */
  readonly isAttached?: boolean;

}

/**
 * @schema LoadBalancerTlsCertificateDomainValidationRecord
 */
export interface LoadBalancerTlsCertificateDomainValidationRecord {
  /**
   * @schema LoadBalancerTlsCertificateDomainValidationRecord#name
   */
  readonly name?: string;

  /**
   * @schema LoadBalancerTlsCertificateDomainValidationRecord#type
   */
  readonly type?: string;

  /**
   * @schema LoadBalancerTlsCertificateDomainValidationRecord#value
   */
  readonly value?: string;

  /**
   * @schema LoadBalancerTlsCertificateDomainValidationRecord#validationStatus
   */
  readonly validationStatus?: string;

  /**
   * @schema LoadBalancerTlsCertificateDomainValidationRecord#domainName
   */
  readonly domainName?: string;

}

/**
 * @schema LoadBalancerTlsCertificateRenewalSummary
 */
export interface LoadBalancerTlsCertificateRenewalSummary {
  /**
   * @schema LoadBalancerTlsCertificateRenewalSummary#renewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema LoadBalancerTlsCertificateRenewalSummary#domainValidationOptions
   */
  readonly domainValidationOptions?: LoadBalancerTlsCertificateDomainValidationOption[];

}

/**
 * @schema AvailabilityZone
 */
export interface AvailabilityZone {
  /**
   * @schema AvailabilityZone#zoneName
   */
  readonly zoneName?: string;

  /**
   * @schema AvailabilityZone#state
   */
  readonly state?: string;

}

/**
 * @schema RelationalDatabaseHardware
 */
export interface RelationalDatabaseHardware {
  /**
   * @schema RelationalDatabaseHardware#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema RelationalDatabaseHardware#diskSizeInGb
   */
  readonly diskSizeInGb?: number;

  /**
   * @schema RelationalDatabaseHardware#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

}

/**
 * @schema PendingModifiedRelationalDatabaseValues
 */
export interface PendingModifiedRelationalDatabaseValues {
  /**
   * @schema PendingModifiedRelationalDatabaseValues#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema PendingModifiedRelationalDatabaseValues#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema PendingModifiedRelationalDatabaseValues#backupRetentionEnabled
   */
  readonly backupRetentionEnabled?: boolean;

}

/**
 * @schema RelationalDatabaseEndpoint
 */
export interface RelationalDatabaseEndpoint {
  /**
   * @schema RelationalDatabaseEndpoint#port
   */
  readonly port?: number;

  /**
   * @schema RelationalDatabaseEndpoint#address
   */
  readonly address?: string;

}

/**
 * @schema PendingMaintenanceAction
 */
export interface PendingMaintenanceAction {
  /**
   * @schema PendingMaintenanceAction#action
   */
  readonly action?: string;

  /**
   * @schema PendingMaintenanceAction#description
   */
  readonly description?: string;

  /**
   * @schema PendingMaintenanceAction#currentApplyDate
   */
  readonly currentApplyDate?: string;

}

/**
 * @schema DomainValidationRecord
 */
export interface DomainValidationRecord {
  /**
   * @schema DomainValidationRecord#domainName
   */
  readonly domainName?: string;

  /**
   * @schema DomainValidationRecord#resourceRecord
   */
  readonly resourceRecord?: ResourceRecord;

}

/**
 * @schema RenewalSummary
 */
export interface RenewalSummary {
  /**
   * @schema RenewalSummary#domainValidationRecords
   */
  readonly domainValidationRecords?: DomainValidationRecord[];

  /**
   * @schema RenewalSummary#renewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema RenewalSummary#renewalStatusReason
   */
  readonly renewalStatusReason?: string;

  /**
   * @schema RenewalSummary#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema InstanceSnapshotInfo
 */
export interface InstanceSnapshotInfo {
  /**
   * @schema InstanceSnapshotInfo#fromBundleId
   */
  readonly fromBundleId?: string;

  /**
   * @schema InstanceSnapshotInfo#fromBlueprintId
   */
  readonly fromBlueprintId?: string;

  /**
   * @schema InstanceSnapshotInfo#fromDiskInfo
   */
  readonly fromDiskInfo?: DiskInfo[];

}

/**
 * @schema DiskSnapshotInfo
 */
export interface DiskSnapshotInfo {
  /**
   * @schema DiskSnapshotInfo#sizeInGb
   */
  readonly sizeInGb?: number;

}

/**
 * @schema MonthlyTransfer
 */
export interface MonthlyTransfer {
  /**
   * @schema MonthlyTransfer#gbPerMonthAllocated
   */
  readonly gbPerMonthAllocated?: number;

}

/**
 * @schema InstancePortInfo
 */
export interface InstancePortInfo {
  /**
   * @schema InstancePortInfo#fromPort
   */
  readonly fromPort?: number;

  /**
   * @schema InstancePortInfo#toPort
   */
  readonly toPort?: number;

  /**
   * @schema InstancePortInfo#protocol
   */
  readonly protocol?: string;

  /**
   * @schema InstancePortInfo#accessFrom
   */
  readonly accessFrom?: string;

  /**
   * @schema InstancePortInfo#accessType
   */
  readonly accessType?: string;

  /**
   * @schema InstancePortInfo#commonName
   */
  readonly commonName?: string;

  /**
   * @schema InstancePortInfo#accessDirection
   */
  readonly accessDirection?: string;

  /**
   * @schema InstancePortInfo#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema InstancePortInfo#cidrListAliases
   */
  readonly cidrListAliases?: string[];

}

/**
 * @schema LoadBalancerTlsCertificateDomainValidationOption
 */
export interface LoadBalancerTlsCertificateDomainValidationOption {
  /**
   * @schema LoadBalancerTlsCertificateDomainValidationOption#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LoadBalancerTlsCertificateDomainValidationOption#validationStatus
   */
  readonly validationStatus?: string;

}

/**
 * @schema ResourceRecord
 */
export interface ResourceRecord {
  /**
   * @schema ResourceRecord#name
   */
  readonly name?: string;

  /**
   * @schema ResourceRecord#type
   */
  readonly type?: string;

  /**
   * @schema ResourceRecord#value
   */
  readonly value?: string;

}

/**
 * @schema DiskInfo
 */
export interface DiskInfo {
  /**
   * @schema DiskInfo#name
   */
  readonly name?: string;

  /**
   * @schema DiskInfo#path
   */
  readonly path?: string;

  /**
   * @schema DiskInfo#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema DiskInfo#isSystemDisk
   */
  readonly isSystemDisk?: boolean;

}
