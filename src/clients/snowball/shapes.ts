/**
 * @schema CancelClusterRequest
 */
export interface CancelClusterRequest {
  /**
   * @schema CancelClusterRequest#ClusterId
   */
  readonly clusterId: string;

}

/**
 * @schema CancelClusterResult
 */
export interface CancelClusterResult {
}

/**
 * @schema CancelJobRequest
 */
export interface CancelJobRequest {
  /**
   * @schema CancelJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema CancelJobResult
 */
export interface CancelJobResult {
}

/**
 * @schema CreateAddressRequest
 */
export interface CreateAddressRequest {
  /**
   * @schema CreateAddressRequest#Address
   */
  readonly address: Address;

}

/**
 * @schema CreateAddressResult
 */
export interface CreateAddressResult {
  /**
   * @schema CreateAddressResult#AddressId
   */
  readonly addressId?: string;

}

/**
 * @schema CreateClusterRequest
 */
export interface CreateClusterRequest {
  /**
   * @schema CreateClusterRequest#JobType
   */
  readonly jobType: string;

  /**
   * @schema CreateClusterRequest#Resources
   */
  readonly resources: JobResource;

  /**
   * @schema CreateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateClusterRequest#AddressId
   */
  readonly addressId: string;

  /**
   * @schema CreateClusterRequest#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema CreateClusterRequest#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema CreateClusterRequest#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema CreateClusterRequest#ShippingOption
   */
  readonly shippingOption: string;

  /**
   * @schema CreateClusterRequest#Notification
   */
  readonly notification?: Notification;

  /**
   * @schema CreateClusterRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema CreateClusterRequest#TaxDocuments
   */
  readonly taxDocuments?: TaxDocuments;

}

/**
 * @schema CreateClusterResult
 */
export interface CreateClusterResult {
  /**
   * @schema CreateClusterResult#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * @schema CreateJobRequest
 */
export interface CreateJobRequest {
  /**
   * @schema CreateJobRequest#JobType
   */
  readonly jobType?: string;

  /**
   * @schema CreateJobRequest#Resources
   */
  readonly resources?: JobResource;

  /**
   * @schema CreateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateJobRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema CreateJobRequest#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema CreateJobRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CreateJobRequest#SnowballCapacityPreference
   */
  readonly snowballCapacityPreference?: string;

  /**
   * @schema CreateJobRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema CreateJobRequest#Notification
   */
  readonly notification?: Notification;

  /**
   * @schema CreateJobRequest#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema CreateJobRequest#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema CreateJobRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema CreateJobRequest#TaxDocuments
   */
  readonly taxDocuments?: TaxDocuments;

  /**
   * @schema CreateJobRequest#DeviceConfiguration
   */
  readonly deviceConfiguration?: DeviceConfiguration;

}

/**
 * @schema CreateJobResult
 */
export interface CreateJobResult {
  /**
   * @schema CreateJobResult#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema CreateReturnShippingLabelRequest
 */
export interface CreateReturnShippingLabelRequest {
  /**
   * @schema CreateReturnShippingLabelRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema CreateReturnShippingLabelRequest#ShippingOption
   */
  readonly shippingOption?: string;

}

/**
 * @schema CreateReturnShippingLabelResult
 */
export interface CreateReturnShippingLabelResult {
  /**
   * @schema CreateReturnShippingLabelResult#Status
   */
  readonly status?: string;

}

/**
 * @schema DescribeAddressRequest
 */
export interface DescribeAddressRequest {
  /**
   * @schema DescribeAddressRequest#AddressId
   */
  readonly addressId: string;

}

/**
 * @schema DescribeAddressResult
 */
export interface DescribeAddressResult {
  /**
   * @schema DescribeAddressResult#Address
   */
  readonly address?: Address;

}

/**
 * @schema DescribeAddressesRequest
 */
export interface DescribeAddressesRequest {
  /**
   * @schema DescribeAddressesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeAddressesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAddressesResult
 */
export interface DescribeAddressesResult {
  /**
   * @schema DescribeAddressesResult#Addresses
   */
  readonly addresses?: Address[];

  /**
   * @schema DescribeAddressesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClusterRequest
 */
export interface DescribeClusterRequest {
  /**
   * @schema DescribeClusterRequest#ClusterId
   */
  readonly clusterId: string;

}

/**
 * @schema DescribeClusterResult
 */
export interface DescribeClusterResult {
  /**
   * @schema DescribeClusterResult#ClusterMetadata
   */
  readonly clusterMetadata?: ClusterMetadata;

}

/**
 * @schema DescribeJobRequest
 */
export interface DescribeJobRequest {
  /**
   * @schema DescribeJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeJobResult
 */
export interface DescribeJobResult {
  /**
   * @schema DescribeJobResult#JobMetadata
   */
  readonly jobMetadata?: JobMetadata;

  /**
   * @schema DescribeJobResult#SubJobMetadata
   */
  readonly subJobMetadata?: JobMetadata[];

}

/**
 * @schema DescribeReturnShippingLabelRequest
 */
export interface DescribeReturnShippingLabelRequest {
  /**
   * @schema DescribeReturnShippingLabelRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema DescribeReturnShippingLabelResult
 */
export interface DescribeReturnShippingLabelResult {
  /**
   * @schema DescribeReturnShippingLabelResult#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeReturnShippingLabelResult#ExpirationDate
   */
  readonly expirationDate?: string;

}

/**
 * @schema GetJobManifestRequest
 */
export interface GetJobManifestRequest {
  /**
   * @schema GetJobManifestRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema GetJobManifestResult
 */
export interface GetJobManifestResult {
  /**
   * @schema GetJobManifestResult#ManifestURI
   */
  readonly manifestUri?: string;

}

/**
 * @schema GetJobUnlockCodeRequest
 */
export interface GetJobUnlockCodeRequest {
  /**
   * @schema GetJobUnlockCodeRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema GetJobUnlockCodeResult
 */
export interface GetJobUnlockCodeResult {
  /**
   * @schema GetJobUnlockCodeResult#UnlockCode
   */
  readonly unlockCode?: string;

}

/**
 * @schema GetSnowballUsageRequest
 */
export interface GetSnowballUsageRequest {
}

/**
 * @schema GetSnowballUsageResult
 */
export interface GetSnowballUsageResult {
  /**
   * @schema GetSnowballUsageResult#SnowballLimit
   */
  readonly snowballLimit?: number;

  /**
   * @schema GetSnowballUsageResult#SnowballsInUse
   */
  readonly snowballsInUse?: number;

}

/**
 * @schema GetSoftwareUpdatesRequest
 */
export interface GetSoftwareUpdatesRequest {
  /**
   * @schema GetSoftwareUpdatesRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema GetSoftwareUpdatesResult
 */
export interface GetSoftwareUpdatesResult {
  /**
   * @schema GetSoftwareUpdatesResult#UpdatesURI
   */
  readonly updatesUri?: string;

}

/**
 * @schema ListClusterJobsRequest
 */
export interface ListClusterJobsRequest {
  /**
   * @schema ListClusterJobsRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema ListClusterJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListClusterJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListClusterJobsResult
 */
export interface ListClusterJobsResult {
  /**
   * @schema ListClusterJobsResult#JobListEntries
   */
  readonly jobListEntries?: JobListEntry[];

  /**
   * @schema ListClusterJobsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListClustersRequest
 */
export interface ListClustersRequest {
  /**
   * @schema ListClustersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListClustersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListClustersResult
 */
export interface ListClustersResult {
  /**
   * @schema ListClustersResult#ClusterListEntries
   */
  readonly clusterListEntries?: ClusterListEntry[];

  /**
   * @schema ListClustersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCompatibleImagesRequest
 */
export interface ListCompatibleImagesRequest {
  /**
   * @schema ListCompatibleImagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCompatibleImagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCompatibleImagesResult
 */
export interface ListCompatibleImagesResult {
  /**
   * @schema ListCompatibleImagesResult#CompatibleImages
   */
  readonly compatibleImages?: CompatibleImage[];

  /**
   * @schema ListCompatibleImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsResult
 */
export interface ListJobsResult {
  /**
   * @schema ListJobsResult#JobListEntries
   */
  readonly jobListEntries?: JobListEntry[];

  /**
   * @schema ListJobsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema UpdateClusterRequest
 */
export interface UpdateClusterRequest {
  /**
   * @schema UpdateClusterRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema UpdateClusterRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateClusterRequest#Resources
   */
  readonly resources?: JobResource;

  /**
   * @schema UpdateClusterRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema UpdateClusterRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema UpdateClusterRequest#Notification
   */
  readonly notification?: Notification;

  /**
   * @schema UpdateClusterRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

}

/**
 * @schema UpdateClusterResult
 */
export interface UpdateClusterResult {
}

/**
 * @schema UpdateJobRequest
 */
export interface UpdateJobRequest {
  /**
   * @schema UpdateJobRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema UpdateJobRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateJobRequest#Notification
   */
  readonly notification?: Notification;

  /**
   * @schema UpdateJobRequest#Resources
   */
  readonly resources?: JobResource;

  /**
   * @schema UpdateJobRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema UpdateJobRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema UpdateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateJobRequest#SnowballCapacityPreference
   */
  readonly snowballCapacityPreference?: string;

  /**
   * @schema UpdateJobRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

}

/**
 * @schema UpdateJobResult
 */
export interface UpdateJobResult {
}

/**
 * @schema UpdateJobShipmentStateRequest
 */
export interface UpdateJobShipmentStateRequest {
  /**
   * @schema UpdateJobShipmentStateRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema UpdateJobShipmentStateRequest#ShipmentState
   */
  readonly shipmentState: string;

}

/**
 * @schema UpdateJobShipmentStateResult
 */
export interface UpdateJobShipmentStateResult {
}

/**
 * @schema Address
 */
export interface Address {
  /**
   * @schema Address#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema Address#Name
   */
  readonly name?: string;

  /**
   * @schema Address#Company
   */
  readonly company?: string;

  /**
   * @schema Address#Street1
   */
  readonly street1?: string;

  /**
   * @schema Address#Street2
   */
  readonly street2?: string;

  /**
   * @schema Address#Street3
   */
  readonly street3?: string;

  /**
   * @schema Address#City
   */
  readonly city?: string;

  /**
   * @schema Address#StateOrProvince
   */
  readonly stateOrProvince?: string;

  /**
   * @schema Address#PrefectureOrDistrict
   */
  readonly prefectureOrDistrict?: string;

  /**
   * @schema Address#Landmark
   */
  readonly landmark?: string;

  /**
   * @schema Address#Country
   */
  readonly country?: string;

  /**
   * @schema Address#PostalCode
   */
  readonly postalCode?: string;

  /**
   * @schema Address#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema Address#IsRestricted
   */
  readonly isRestricted?: boolean;

}

/**
 * @schema JobResource
 */
export interface JobResource {
  /**
   * @schema JobResource#S3Resources
   */
  readonly s3Resources?: S3Resource[];

  /**
   * @schema JobResource#LambdaResources
   */
  readonly lambdaResources?: LambdaResource[];

  /**
   * @schema JobResource#Ec2AmiResources
   */
  readonly ec2AmiResources?: Ec2AmiResource[];

}

/**
 * @schema Notification
 */
export interface Notification {
  /**
   * @schema Notification#SnsTopicARN
   */
  readonly snsTopicArn?: string;

  /**
   * @schema Notification#JobStatesToNotify
   */
  readonly jobStatesToNotify?: string[];

  /**
   * @schema Notification#NotifyAll
   */
  readonly notifyAll?: boolean;

}

/**
 * @schema TaxDocuments
 */
export interface TaxDocuments {
  /**
   * @schema TaxDocuments#IND
   */
  readonly ind?: IndTaxDocuments;

}

/**
 * @schema DeviceConfiguration
 */
export interface DeviceConfiguration {
  /**
   * @schema DeviceConfiguration#SnowconeDeviceConfiguration
   */
  readonly snowconeDeviceConfiguration?: SnowconeDeviceConfiguration;

}

/**
 * @schema ClusterMetadata
 */
export interface ClusterMetadata {
  /**
   * @schema ClusterMetadata#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema ClusterMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema ClusterMetadata#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema ClusterMetadata#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema ClusterMetadata#ClusterState
   */
  readonly clusterState?: string;

  /**
   * @schema ClusterMetadata#JobType
   */
  readonly jobType?: string;

  /**
   * @schema ClusterMetadata#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema ClusterMetadata#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ClusterMetadata#Resources
   */
  readonly resources?: JobResource;

  /**
   * @schema ClusterMetadata#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema ClusterMetadata#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema ClusterMetadata#Notification
   */
  readonly notification?: Notification;

  /**
   * @schema ClusterMetadata#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema ClusterMetadata#TaxDocuments
   */
  readonly taxDocuments?: TaxDocuments;

}

/**
 * @schema JobMetadata
 */
export interface JobMetadata {
  /**
   * @schema JobMetadata#JobId
   */
  readonly jobId?: string;

  /**
   * @schema JobMetadata#JobState
   */
  readonly jobState?: string;

  /**
   * @schema JobMetadata#JobType
   */
  readonly jobType?: string;

  /**
   * @schema JobMetadata#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema JobMetadata#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema JobMetadata#Resources
   */
  readonly resources?: JobResource;

  /**
   * @schema JobMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema JobMetadata#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema JobMetadata#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema JobMetadata#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema JobMetadata#ShippingDetails
   */
  readonly shippingDetails?: ShippingDetails;

  /**
   * @schema JobMetadata#SnowballCapacityPreference
   */
  readonly snowballCapacityPreference?: string;

  /**
   * @schema JobMetadata#Notification
   */
  readonly notification?: Notification;

  /**
   * @schema JobMetadata#DataTransferProgress
   */
  readonly dataTransferProgress?: DataTransfer;

  /**
   * @schema JobMetadata#JobLogInfo
   */
  readonly jobLogInfo?: JobLogs;

  /**
   * @schema JobMetadata#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema JobMetadata#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema JobMetadata#TaxDocuments
   */
  readonly taxDocuments?: TaxDocuments;

  /**
   * @schema JobMetadata#DeviceConfiguration
   */
  readonly deviceConfiguration?: DeviceConfiguration;

}

/**
 * @schema JobListEntry
 */
export interface JobListEntry {
  /**
   * @schema JobListEntry#JobId
   */
  readonly jobId?: string;

  /**
   * @schema JobListEntry#JobState
   */
  readonly jobState?: string;

  /**
   * @schema JobListEntry#IsMaster
   */
  readonly isMaster?: boolean;

  /**
   * @schema JobListEntry#JobType
   */
  readonly jobType?: string;

  /**
   * @schema JobListEntry#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema JobListEntry#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema JobListEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema ClusterListEntry
 */
export interface ClusterListEntry {
  /**
   * @schema ClusterListEntry#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema ClusterListEntry#ClusterState
   */
  readonly clusterState?: string;

  /**
   * @schema ClusterListEntry#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ClusterListEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema CompatibleImage
 */
export interface CompatibleImage {
  /**
   * @schema CompatibleImage#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema CompatibleImage#Name
   */
  readonly name?: string;

}

/**
 * @schema S3Resource
 */
export interface S3Resource {
  /**
   * @schema S3Resource#BucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema S3Resource#KeyRange
   */
  readonly keyRange?: KeyRange;

}

/**
 * @schema LambdaResource
 */
export interface LambdaResource {
  /**
   * @schema LambdaResource#LambdaArn
   */
  readonly lambdaArn?: string;

  /**
   * @schema LambdaResource#EventTriggers
   */
  readonly eventTriggers?: EventTriggerDefinition[];

}

/**
 * @schema Ec2AmiResource
 */
export interface Ec2AmiResource {
  /**
   * @schema Ec2AmiResource#AmiId
   */
  readonly amiId: string;

  /**
   * @schema Ec2AmiResource#SnowballAmiId
   */
  readonly snowballAmiId?: string;

}

/**
 * @schema IndTaxDocuments
 */
export interface IndTaxDocuments {
  /**
   * @schema IndTaxDocuments#GSTIN
   */
  readonly gstin?: string;

}

/**
 * @schema SnowconeDeviceConfiguration
 */
export interface SnowconeDeviceConfiguration {
  /**
   * @schema SnowconeDeviceConfiguration#WirelessConnection
   */
  readonly wirelessConnection?: WirelessConnection;

}

/**
 * @schema ShippingDetails
 */
export interface ShippingDetails {
  /**
   * @schema ShippingDetails#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema ShippingDetails#InboundShipment
   */
  readonly inboundShipment?: Shipment;

  /**
   * @schema ShippingDetails#OutboundShipment
   */
  readonly outboundShipment?: Shipment;

}

/**
 * @schema DataTransfer
 */
export interface DataTransfer {
  /**
   * @schema DataTransfer#BytesTransferred
   */
  readonly bytesTransferred?: number;

  /**
   * @schema DataTransfer#ObjectsTransferred
   */
  readonly objectsTransferred?: number;

  /**
   * @schema DataTransfer#TotalBytes
   */
  readonly totalBytes?: number;

  /**
   * @schema DataTransfer#TotalObjects
   */
  readonly totalObjects?: number;

}

/**
 * @schema JobLogs
 */
export interface JobLogs {
  /**
   * @schema JobLogs#JobCompletionReportURI
   */
  readonly jobCompletionReportUri?: string;

  /**
   * @schema JobLogs#JobSuccessLogURI
   */
  readonly jobSuccessLogUri?: string;

  /**
   * @schema JobLogs#JobFailureLogURI
   */
  readonly jobFailureLogUri?: string;

}

/**
 * @schema KeyRange
 */
export interface KeyRange {
  /**
   * @schema KeyRange#BeginMarker
   */
  readonly beginMarker?: string;

  /**
   * @schema KeyRange#EndMarker
   */
  readonly endMarker?: string;

}

/**
 * @schema EventTriggerDefinition
 */
export interface EventTriggerDefinition {
  /**
   * @schema EventTriggerDefinition#EventResourceARN
   */
  readonly eventResourceArn?: string;

}

/**
 * @schema WirelessConnection
 */
export interface WirelessConnection {
  /**
   * @schema WirelessConnection#IsWifiEnabled
   */
  readonly isWifiEnabled?: boolean;

}

/**
 * @schema Shipment
 */
export interface Shipment {
  /**
   * @schema Shipment#Status
   */
  readonly status?: string;

  /**
   * @schema Shipment#TrackingNumber
   */
  readonly trackingNumber?: string;

}
