/**
 * @schema SnowballCancelClusterRequest
 */
export interface SnowballCancelClusterRequest {
  /**
   * @schema SnowballCancelClusterRequest#ClusterId
   */
  readonly clusterId: string;

}

/**
 * @schema SnowballCancelClusterResult
 */
export interface SnowballCancelClusterResult {
}

/**
 * @schema SnowballCancelJobRequest
 */
export interface SnowballCancelJobRequest {
  /**
   * @schema SnowballCancelJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema SnowballCancelJobResult
 */
export interface SnowballCancelJobResult {
}

/**
 * @schema SnowballCreateAddressRequest
 */
export interface SnowballCreateAddressRequest {
  /**
   * @schema SnowballCreateAddressRequest#Address
   */
  readonly address: SnowballAddress;

}

/**
 * @schema SnowballCreateAddressResult
 */
export interface SnowballCreateAddressResult {
  /**
   * @schema SnowballCreateAddressResult#AddressId
   */
  readonly addressId?: string;

}

/**
 * @schema SnowballCreateClusterRequest
 */
export interface SnowballCreateClusterRequest {
  /**
   * @schema SnowballCreateClusterRequest#JobType
   */
  readonly jobType: string;

  /**
   * @schema SnowballCreateClusterRequest#Resources
   */
  readonly resources: SnowballJobResource;

  /**
   * @schema SnowballCreateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballCreateClusterRequest#AddressId
   */
  readonly addressId: string;

  /**
   * @schema SnowballCreateClusterRequest#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SnowballCreateClusterRequest#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema SnowballCreateClusterRequest#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballCreateClusterRequest#ShippingOption
   */
  readonly shippingOption: string;

  /**
   * @schema SnowballCreateClusterRequest#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballCreateClusterRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema SnowballCreateClusterRequest#TaxDocuments
   */
  readonly taxDocuments?: SnowballTaxDocuments;

}

/**
 * @schema SnowballCreateClusterResult
 */
export interface SnowballCreateClusterResult {
  /**
   * @schema SnowballCreateClusterResult#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * @schema SnowballCreateJobRequest
 */
export interface SnowballCreateJobRequest {
  /**
   * @schema SnowballCreateJobRequest#JobType
   */
  readonly jobType?: string;

  /**
   * @schema SnowballCreateJobRequest#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballCreateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballCreateJobRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballCreateJobRequest#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SnowballCreateJobRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballCreateJobRequest#SnowballCapacityPreference
   */
  readonly snowballCapacityPreference?: string;

  /**
   * @schema SnowballCreateJobRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballCreateJobRequest#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballCreateJobRequest#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballCreateJobRequest#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballCreateJobRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema SnowballCreateJobRequest#TaxDocuments
   */
  readonly taxDocuments?: SnowballTaxDocuments;

  /**
   * @schema SnowballCreateJobRequest#DeviceConfiguration
   */
  readonly deviceConfiguration?: SnowballDeviceConfiguration;

}

/**
 * @schema SnowballCreateJobResult
 */
export interface SnowballCreateJobResult {
  /**
   * @schema SnowballCreateJobResult#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema SnowballCreateReturnShippingLabelRequest
 */
export interface SnowballCreateReturnShippingLabelRequest {
  /**
   * @schema SnowballCreateReturnShippingLabelRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema SnowballCreateReturnShippingLabelRequest#ShippingOption
   */
  readonly shippingOption?: string;

}

/**
 * @schema SnowballCreateReturnShippingLabelResult
 */
export interface SnowballCreateReturnShippingLabelResult {
  /**
   * @schema SnowballCreateReturnShippingLabelResult#Status
   */
  readonly status?: string;

}

/**
 * @schema SnowballDescribeAddressRequest
 */
export interface SnowballDescribeAddressRequest {
  /**
   * @schema SnowballDescribeAddressRequest#AddressId
   */
  readonly addressId: string;

}

/**
 * @schema SnowballDescribeAddressResult
 */
export interface SnowballDescribeAddressResult {
  /**
   * @schema SnowballDescribeAddressResult#Address
   */
  readonly address?: SnowballAddress;

}

/**
 * @schema SnowballDescribeAddressesRequest
 */
export interface SnowballDescribeAddressesRequest {
  /**
   * @schema SnowballDescribeAddressesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballDescribeAddressesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballDescribeAddressesResult
 */
export interface SnowballDescribeAddressesResult {
  /**
   * @schema SnowballDescribeAddressesResult#Addresses
   */
  readonly addresses?: SnowballAddress[];

  /**
   * @schema SnowballDescribeAddressesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballDescribeClusterRequest
 */
export interface SnowballDescribeClusterRequest {
  /**
   * @schema SnowballDescribeClusterRequest#ClusterId
   */
  readonly clusterId: string;

}

/**
 * @schema SnowballDescribeClusterResult
 */
export interface SnowballDescribeClusterResult {
  /**
   * @schema SnowballDescribeClusterResult#ClusterMetadata
   */
  readonly clusterMetadata?: SnowballClusterMetadata;

}

/**
 * @schema SnowballDescribeJobRequest
 */
export interface SnowballDescribeJobRequest {
  /**
   * @schema SnowballDescribeJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema SnowballDescribeJobResult
 */
export interface SnowballDescribeJobResult {
  /**
   * @schema SnowballDescribeJobResult#JobMetadata
   */
  readonly jobMetadata?: SnowballJobMetadata;

  /**
   * @schema SnowballDescribeJobResult#SubJobMetadata
   */
  readonly subJobMetadata?: SnowballJobMetadata[];

}

/**
 * @schema SnowballDescribeReturnShippingLabelRequest
 */
export interface SnowballDescribeReturnShippingLabelRequest {
  /**
   * @schema SnowballDescribeReturnShippingLabelRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema SnowballDescribeReturnShippingLabelResult
 */
export interface SnowballDescribeReturnShippingLabelResult {
  /**
   * @schema SnowballDescribeReturnShippingLabelResult#Status
   */
  readonly status?: string;

  /**
   * @schema SnowballDescribeReturnShippingLabelResult#ExpirationDate
   */
  readonly expirationDate?: string;

}

/**
 * @schema SnowballGetJobManifestRequest
 */
export interface SnowballGetJobManifestRequest {
  /**
   * @schema SnowballGetJobManifestRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema SnowballGetJobManifestResult
 */
export interface SnowballGetJobManifestResult {
  /**
   * @schema SnowballGetJobManifestResult#ManifestURI
   */
  readonly manifestUri?: string;

}

/**
 * @schema SnowballGetJobUnlockCodeRequest
 */
export interface SnowballGetJobUnlockCodeRequest {
  /**
   * @schema SnowballGetJobUnlockCodeRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema SnowballGetJobUnlockCodeResult
 */
export interface SnowballGetJobUnlockCodeResult {
  /**
   * @schema SnowballGetJobUnlockCodeResult#UnlockCode
   */
  readonly unlockCode?: string;

}

/**
 * @schema SnowballGetSnowballUsageRequest
 */
export interface SnowballGetSnowballUsageRequest {
}

/**
 * @schema SnowballGetSnowballUsageResult
 */
export interface SnowballGetSnowballUsageResult {
  /**
   * @schema SnowballGetSnowballUsageResult#SnowballLimit
   */
  readonly snowballLimit?: number;

  /**
   * @schema SnowballGetSnowballUsageResult#SnowballsInUse
   */
  readonly snowballsInUse?: number;

}

/**
 * @schema SnowballGetSoftwareUpdatesRequest
 */
export interface SnowballGetSoftwareUpdatesRequest {
  /**
   * @schema SnowballGetSoftwareUpdatesRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema SnowballGetSoftwareUpdatesResult
 */
export interface SnowballGetSoftwareUpdatesResult {
  /**
   * @schema SnowballGetSoftwareUpdatesResult#UpdatesURI
   */
  readonly updatesUri?: string;

}

/**
 * @schema SnowballListClusterJobsRequest
 */
export interface SnowballListClusterJobsRequest {
  /**
   * @schema SnowballListClusterJobsRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema SnowballListClusterJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballListClusterJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballListClusterJobsResult
 */
export interface SnowballListClusterJobsResult {
  /**
   * @schema SnowballListClusterJobsResult#JobListEntries
   */
  readonly jobListEntries?: SnowballJobListEntry[];

  /**
   * @schema SnowballListClusterJobsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballListClustersRequest
 */
export interface SnowballListClustersRequest {
  /**
   * @schema SnowballListClustersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballListClustersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballListClustersResult
 */
export interface SnowballListClustersResult {
  /**
   * @schema SnowballListClustersResult#ClusterListEntries
   */
  readonly clusterListEntries?: SnowballClusterListEntry[];

  /**
   * @schema SnowballListClustersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballListCompatibleImagesRequest
 */
export interface SnowballListCompatibleImagesRequest {
  /**
   * @schema SnowballListCompatibleImagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballListCompatibleImagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballListCompatibleImagesResult
 */
export interface SnowballListCompatibleImagesResult {
  /**
   * @schema SnowballListCompatibleImagesResult#CompatibleImages
   */
  readonly compatibleImages?: SnowballCompatibleImage[];

  /**
   * @schema SnowballListCompatibleImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballListJobsRequest
 */
export interface SnowballListJobsRequest {
  /**
   * @schema SnowballListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballListJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballListJobsResult
 */
export interface SnowballListJobsResult {
  /**
   * @schema SnowballListJobsResult#JobListEntries
   */
  readonly jobListEntries?: SnowballJobListEntry[];

  /**
   * @schema SnowballListJobsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnowballUpdateClusterRequest
 */
export interface SnowballUpdateClusterRequest {
  /**
   * @schema SnowballUpdateClusterRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema SnowballUpdateClusterRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballUpdateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballUpdateClusterRequest#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballUpdateClusterRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballUpdateClusterRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballUpdateClusterRequest#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballUpdateClusterRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

}

/**
 * @schema SnowballUpdateClusterResult
 */
export interface SnowballUpdateClusterResult {
}

/**
 * @schema SnowballUpdateJobRequest
 */
export interface SnowballUpdateJobRequest {
  /**
   * @schema SnowballUpdateJobRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema SnowballUpdateJobRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballUpdateJobRequest#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballUpdateJobRequest#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballUpdateJobRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballUpdateJobRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballUpdateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballUpdateJobRequest#SnowballCapacityPreference
   */
  readonly snowballCapacityPreference?: string;

  /**
   * @schema SnowballUpdateJobRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

}

/**
 * @schema SnowballUpdateJobResult
 */
export interface SnowballUpdateJobResult {
}

/**
 * @schema SnowballUpdateJobShipmentStateRequest
 */
export interface SnowballUpdateJobShipmentStateRequest {
  /**
   * @schema SnowballUpdateJobShipmentStateRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema SnowballUpdateJobShipmentStateRequest#ShipmentState
   */
  readonly shipmentState: string;

}

/**
 * @schema SnowballUpdateJobShipmentStateResult
 */
export interface SnowballUpdateJobShipmentStateResult {
}

/**
 * @schema SnowballAddress
 */
export interface SnowballAddress {
  /**
   * @schema SnowballAddress#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballAddress#Name
   */
  readonly name?: string;

  /**
   * @schema SnowballAddress#Company
   */
  readonly company?: string;

  /**
   * @schema SnowballAddress#Street1
   */
  readonly street1?: string;

  /**
   * @schema SnowballAddress#Street2
   */
  readonly street2?: string;

  /**
   * @schema SnowballAddress#Street3
   */
  readonly street3?: string;

  /**
   * @schema SnowballAddress#City
   */
  readonly city?: string;

  /**
   * @schema SnowballAddress#StateOrProvince
   */
  readonly stateOrProvince?: string;

  /**
   * @schema SnowballAddress#PrefectureOrDistrict
   */
  readonly prefectureOrDistrict?: string;

  /**
   * @schema SnowballAddress#Landmark
   */
  readonly landmark?: string;

  /**
   * @schema SnowballAddress#Country
   */
  readonly country?: string;

  /**
   * @schema SnowballAddress#PostalCode
   */
  readonly postalCode?: string;

  /**
   * @schema SnowballAddress#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema SnowballAddress#IsRestricted
   */
  readonly isRestricted?: boolean;

}

/**
 * @schema SnowballJobResource
 */
export interface SnowballJobResource {
  /**
   * @schema SnowballJobResource#S3Resources
   */
  readonly s3Resources?: SnowballS3Resource[];

  /**
   * @schema SnowballJobResource#LambdaResources
   */
  readonly lambdaResources?: SnowballLambdaResource[];

  /**
   * @schema SnowballJobResource#Ec2AmiResources
   */
  readonly ec2AmiResources?: SnowballEc2AmiResource[];

}

/**
 * @schema SnowballNotification
 */
export interface SnowballNotification {
  /**
   * @schema SnowballNotification#SnsTopicARN
   */
  readonly snsTopicArn?: string;

  /**
   * @schema SnowballNotification#JobStatesToNotify
   */
  readonly jobStatesToNotify?: string[];

  /**
   * @schema SnowballNotification#NotifyAll
   */
  readonly notifyAll?: boolean;

}

/**
 * @schema SnowballTaxDocuments
 */
export interface SnowballTaxDocuments {
  /**
   * @schema SnowballTaxDocuments#IND
   */
  readonly ind?: SnowballIndTaxDocuments;

}

/**
 * @schema SnowballDeviceConfiguration
 */
export interface SnowballDeviceConfiguration {
  /**
   * @schema SnowballDeviceConfiguration#SnowconeDeviceConfiguration
   */
  readonly snowconeDeviceConfiguration?: SnowballSnowconeDeviceConfiguration;

}

/**
 * @schema SnowballClusterMetadata
 */
export interface SnowballClusterMetadata {
  /**
   * @schema SnowballClusterMetadata#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballClusterMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballClusterMetadata#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SnowballClusterMetadata#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballClusterMetadata#ClusterState
   */
  readonly clusterState?: string;

  /**
   * @schema SnowballClusterMetadata#JobType
   */
  readonly jobType?: string;

  /**
   * @schema SnowballClusterMetadata#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballClusterMetadata#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SnowballClusterMetadata#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballClusterMetadata#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballClusterMetadata#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballClusterMetadata#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballClusterMetadata#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema SnowballClusterMetadata#TaxDocuments
   */
  readonly taxDocuments?: SnowballTaxDocuments;

}

/**
 * @schema SnowballJobMetadata
 */
export interface SnowballJobMetadata {
  /**
   * @schema SnowballJobMetadata#JobId
   */
  readonly jobId?: string;

  /**
   * @schema SnowballJobMetadata#JobState
   */
  readonly jobState?: string;

  /**
   * @schema SnowballJobMetadata#JobType
   */
  readonly jobType?: string;

  /**
   * @schema SnowballJobMetadata#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballJobMetadata#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SnowballJobMetadata#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballJobMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballJobMetadata#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SnowballJobMetadata#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballJobMetadata#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballJobMetadata#ShippingDetails
   */
  readonly shippingDetails?: SnowballShippingDetails;

  /**
   * @schema SnowballJobMetadata#SnowballCapacityPreference
   */
  readonly snowballCapacityPreference?: string;

  /**
   * @schema SnowballJobMetadata#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballJobMetadata#DataTransferProgress
   */
  readonly dataTransferProgress?: SnowballDataTransfer;

  /**
   * @schema SnowballJobMetadata#JobLogInfo
   */
  readonly jobLogInfo?: SnowballJobLogs;

  /**
   * @schema SnowballJobMetadata#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballJobMetadata#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema SnowballJobMetadata#TaxDocuments
   */
  readonly taxDocuments?: SnowballTaxDocuments;

  /**
   * @schema SnowballJobMetadata#DeviceConfiguration
   */
  readonly deviceConfiguration?: SnowballDeviceConfiguration;

}

/**
 * @schema SnowballJobListEntry
 */
export interface SnowballJobListEntry {
  /**
   * @schema SnowballJobListEntry#JobId
   */
  readonly jobId?: string;

  /**
   * @schema SnowballJobListEntry#JobState
   */
  readonly jobState?: string;

  /**
   * @schema SnowballJobListEntry#IsMaster
   */
  readonly isMaster?: boolean;

  /**
   * @schema SnowballJobListEntry#JobType
   */
  readonly jobType?: string;

  /**
   * @schema SnowballJobListEntry#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballJobListEntry#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SnowballJobListEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema SnowballClusterListEntry
 */
export interface SnowballClusterListEntry {
  /**
   * @schema SnowballClusterListEntry#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballClusterListEntry#ClusterState
   */
  readonly clusterState?: string;

  /**
   * @schema SnowballClusterListEntry#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SnowballClusterListEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema SnowballCompatibleImage
 */
export interface SnowballCompatibleImage {
  /**
   * @schema SnowballCompatibleImage#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema SnowballCompatibleImage#Name
   */
  readonly name?: string;

}

/**
 * @schema SnowballS3Resource
 */
export interface SnowballS3Resource {
  /**
   * @schema SnowballS3Resource#BucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema SnowballS3Resource#KeyRange
   */
  readonly keyRange?: SnowballKeyRange;

}

/**
 * @schema SnowballLambdaResource
 */
export interface SnowballLambdaResource {
  /**
   * @schema SnowballLambdaResource#LambdaArn
   */
  readonly lambdaArn?: string;

  /**
   * @schema SnowballLambdaResource#EventTriggers
   */
  readonly eventTriggers?: SnowballEventTriggerDefinition[];

}

/**
 * @schema SnowballEc2AmiResource
 */
export interface SnowballEc2AmiResource {
  /**
   * @schema SnowballEc2AmiResource#AmiId
   */
  readonly amiId: string;

  /**
   * @schema SnowballEc2AmiResource#SnowballAmiId
   */
  readonly snowballAmiId?: string;

}

/**
 * @schema SnowballIndTaxDocuments
 */
export interface SnowballIndTaxDocuments {
  /**
   * @schema SnowballIndTaxDocuments#GSTIN
   */
  readonly gstin?: string;

}

/**
 * @schema SnowballSnowconeDeviceConfiguration
 */
export interface SnowballSnowconeDeviceConfiguration {
  /**
   * @schema SnowballSnowconeDeviceConfiguration#WirelessConnection
   */
  readonly wirelessConnection?: SnowballWirelessConnection;

}

/**
 * @schema SnowballShippingDetails
 */
export interface SnowballShippingDetails {
  /**
   * @schema SnowballShippingDetails#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballShippingDetails#InboundShipment
   */
  readonly inboundShipment?: SnowballShipment;

  /**
   * @schema SnowballShippingDetails#OutboundShipment
   */
  readonly outboundShipment?: SnowballShipment;

}

/**
 * @schema SnowballDataTransfer
 */
export interface SnowballDataTransfer {
  /**
   * @schema SnowballDataTransfer#BytesTransferred
   */
  readonly bytesTransferred?: number;

  /**
   * @schema SnowballDataTransfer#ObjectsTransferred
   */
  readonly objectsTransferred?: number;

  /**
   * @schema SnowballDataTransfer#TotalBytes
   */
  readonly totalBytes?: number;

  /**
   * @schema SnowballDataTransfer#TotalObjects
   */
  readonly totalObjects?: number;

}

/**
 * @schema SnowballJobLogs
 */
export interface SnowballJobLogs {
  /**
   * @schema SnowballJobLogs#JobCompletionReportURI
   */
  readonly jobCompletionReportUri?: string;

  /**
   * @schema SnowballJobLogs#JobSuccessLogURI
   */
  readonly jobSuccessLogUri?: string;

  /**
   * @schema SnowballJobLogs#JobFailureLogURI
   */
  readonly jobFailureLogUri?: string;

}

/**
 * @schema SnowballKeyRange
 */
export interface SnowballKeyRange {
  /**
   * @schema SnowballKeyRange#BeginMarker
   */
  readonly beginMarker?: string;

  /**
   * @schema SnowballKeyRange#EndMarker
   */
  readonly endMarker?: string;

}

/**
 * @schema SnowballEventTriggerDefinition
 */
export interface SnowballEventTriggerDefinition {
  /**
   * @schema SnowballEventTriggerDefinition#EventResourceARN
   */
  readonly eventResourceArn?: string;

}

/**
 * @schema SnowballWirelessConnection
 */
export interface SnowballWirelessConnection {
  /**
   * @schema SnowballWirelessConnection#IsWifiEnabled
   */
  readonly isWifiEnabled?: boolean;

}

/**
 * @schema SnowballShipment
 */
export interface SnowballShipment {
  /**
   * @schema SnowballShipment#Status
   */
  readonly status?: string;

  /**
   * @schema SnowballShipment#TrackingNumber
   */
  readonly trackingNumber?: string;

}
