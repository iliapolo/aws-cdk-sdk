/**
 * @schema MediaPackageConfigureLogsRequest
 */
export interface MediaPackageConfigureLogsRequest {
  /**
   * @schema MediaPackageConfigureLogsRequest#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageConfigureLogsRequest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageConfigureLogsRequest#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

}

/**
 * @schema MediaPackageConfigureLogsResponse
 */
export interface MediaPackageConfigureLogsResponse {
  /**
   * @schema MediaPackageConfigureLogsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageConfigureLogsResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageConfigureLogsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageConfigureLogsResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageConfigureLogsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageConfigureLogsResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageConfigureLogsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageCreateChannelRequest
 */
export interface MediaPackageCreateChannelRequest {
  /**
   * @schema MediaPackageCreateChannelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageCreateChannelRequest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageCreateChannelRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageCreateChannelResponse
 */
export interface MediaPackageCreateChannelResponse {
  /**
   * @schema MediaPackageCreateChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageCreateChannelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageCreateChannelResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageCreateChannelResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageCreateChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageCreateChannelResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageCreateChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageCreateHarvestJobRequest
 */
export interface MediaPackageCreateHarvestJobRequest {
  /**
   * @schema MediaPackageCreateHarvestJobRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema MediaPackageCreateHarvestJobRequest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageCreateHarvestJobRequest#OriginEndpointId
   */
  readonly originEndpointId: string;

  /**
   * @schema MediaPackageCreateHarvestJobRequest#S3Destination
   */
  readonly s3Destination: MediaPackageS3Destination;

  /**
   * @schema MediaPackageCreateHarvestJobRequest#StartTime
   */
  readonly startTime: string;

}

/**
 * @schema MediaPackageCreateHarvestJobResponse
 */
export interface MediaPackageCreateHarvestJobResponse {
  /**
   * @schema MediaPackageCreateHarvestJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#S3Destination
   */
  readonly s3Destination?: MediaPackageS3Destination;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema MediaPackageCreateOriginEndpointRequest
 */
export interface MediaPackageCreateOriginEndpointRequest {
  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackageCreateOrUpdateParameters;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema MediaPackageCreateOriginEndpointResponse
 */
export interface MediaPackageCreateOriginEndpointResponse {
  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema MediaPackageDeleteChannelRequest
 */
export interface MediaPackageDeleteChannelRequest {
  /**
   * @schema MediaPackageDeleteChannelRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageDeleteChannelResponse
 */
export interface MediaPackageDeleteChannelResponse {
}

/**
 * @schema MediaPackageDeleteOriginEndpointRequest
 */
export interface MediaPackageDeleteOriginEndpointRequest {
  /**
   * @schema MediaPackageDeleteOriginEndpointRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageDeleteOriginEndpointResponse
 */
export interface MediaPackageDeleteOriginEndpointResponse {
}

/**
 * @schema MediaPackageDescribeChannelRequest
 */
export interface MediaPackageDescribeChannelRequest {
  /**
   * @schema MediaPackageDescribeChannelRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageDescribeChannelResponse
 */
export interface MediaPackageDescribeChannelResponse {
  /**
   * @schema MediaPackageDescribeChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageDescribeChannelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageDescribeChannelResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageDescribeChannelResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageDescribeChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageDescribeChannelResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageDescribeChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageDescribeHarvestJobRequest
 */
export interface MediaPackageDescribeHarvestJobRequest {
  /**
   * @schema MediaPackageDescribeHarvestJobRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageDescribeHarvestJobResponse
 */
export interface MediaPackageDescribeHarvestJobResponse {
  /**
   * @schema MediaPackageDescribeHarvestJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#S3Destination
   */
  readonly s3Destination?: MediaPackageS3Destination;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema MediaPackageDescribeOriginEndpointRequest
 */
export interface MediaPackageDescribeOriginEndpointRequest {
  /**
   * @schema MediaPackageDescribeOriginEndpointRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageDescribeOriginEndpointResponse
 */
export interface MediaPackageDescribeOriginEndpointResponse {
  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackage;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema MediaPackageListChannelsRequest
 */
export interface MediaPackageListChannelsRequest {
  /**
   * @schema MediaPackageListChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageListChannelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaPackageListChannelsResponse
 */
export interface MediaPackageListChannelsResponse {
  /**
   * @schema MediaPackageListChannelsResponse#Channels
   */
  readonly channels?: MediaPackageChannel[];

  /**
   * @schema MediaPackageListChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaPackageListHarvestJobsRequest
 */
export interface MediaPackageListHarvestJobsRequest {
  /**
   * @schema MediaPackageListHarvestJobsRequest#IncludeChannelId
   */
  readonly includeChannelId?: string;

  /**
   * @schema MediaPackageListHarvestJobsRequest#IncludeStatus
   */
  readonly includeStatus?: string;

  /**
   * @schema MediaPackageListHarvestJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageListHarvestJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaPackageListHarvestJobsResponse
 */
export interface MediaPackageListHarvestJobsResponse {
  /**
   * @schema MediaPackageListHarvestJobsResponse#HarvestJobs
   */
  readonly harvestJobs?: MediaPackageHarvestJob[];

  /**
   * @schema MediaPackageListHarvestJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaPackageListOriginEndpointsRequest
 */
export interface MediaPackageListOriginEndpointsRequest {
  /**
   * @schema MediaPackageListOriginEndpointsRequest#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageListOriginEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageListOriginEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaPackageListOriginEndpointsResponse
 */
export interface MediaPackageListOriginEndpointsResponse {
  /**
   * @schema MediaPackageListOriginEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageListOriginEndpointsResponse#OriginEndpoints
   */
  readonly originEndpoints?: MediaPackageOriginEndpoint[];

}

/**
 * @schema MediaPackageListTagsForResourceRequest
 */
export interface MediaPackageListTagsForResourceRequest {
  /**
   * @schema MediaPackageListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema MediaPackageListTagsForResourceResponse
 */
export interface MediaPackageListTagsForResourceResponse {
  /**
   * @schema MediaPackageListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageRotateChannelCredentialsRequest
 */
export interface MediaPackageRotateChannelCredentialsRequest {
  /**
   * @schema MediaPackageRotateChannelCredentialsRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageRotateChannelCredentialsResponse
 */
export interface MediaPackageRotateChannelCredentialsResponse {
  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageRotateIngestEndpointCredentialsRequest
 */
export interface MediaPackageRotateIngestEndpointCredentialsRequest {
  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsRequest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsRequest#IngestEndpointId
   */
  readonly ingestEndpointId: string;

}

/**
 * @schema MediaPackageRotateIngestEndpointCredentialsResponse
 */
export interface MediaPackageRotateIngestEndpointCredentialsResponse {
  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageTagResourceRequest
 */
export interface MediaPackageTagResourceRequest {
  /**
   * @schema MediaPackageTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaPackageTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema MediaPackageUntagResourceRequest
 */
export interface MediaPackageUntagResourceRequest {
  /**
   * @schema MediaPackageUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaPackageUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema MediaPackageUpdateChannelRequest
 */
export interface MediaPackageUpdateChannelRequest {
  /**
   * @schema MediaPackageUpdateChannelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageUpdateChannelRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageUpdateChannelResponse
 */
export interface MediaPackageUpdateChannelResponse {
  /**
   * @schema MediaPackageUpdateChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageUpdateChannelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageUpdateChannelResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageUpdateChannelResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageUpdateChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageUpdateChannelResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageUpdateChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageUpdateOriginEndpointRequest
 */
export interface MediaPackageUpdateOriginEndpointRequest {
  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackageCreateOrUpdateParameters;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema MediaPackageUpdateOriginEndpointResponse
 */
export interface MediaPackageUpdateOriginEndpointResponse {
  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema MediaPackageEgressAccessLogs
 */
export interface MediaPackageEgressAccessLogs {
  /**
   * @schema MediaPackageEgressAccessLogs#LogGroupName
   */
  readonly logGroupName?: string;

}

/**
 * @schema MediaPackageIngressAccessLogs
 */
export interface MediaPackageIngressAccessLogs {
  /**
   * @schema MediaPackageIngressAccessLogs#LogGroupName
   */
  readonly logGroupName?: string;

}

/**
 * @schema MediaPackageHlsIngest
 */
export interface MediaPackageHlsIngest {
  /**
   * @schema MediaPackageHlsIngest#IngestEndpoints
   */
  readonly ingestEndpoints?: MediaPackageIngestEndpoint[];

}

/**
 * @schema MediaPackageS3Destination
 */
export interface MediaPackageS3Destination {
  /**
   * @schema MediaPackageS3Destination#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema MediaPackageS3Destination#ManifestKey
   */
  readonly manifestKey: string;

  /**
   * @schema MediaPackageS3Destination#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema MediaPackageAuthorization
 */
export interface MediaPackageAuthorization {
  /**
   * @schema MediaPackageAuthorization#CdnIdentifierSecret
   */
  readonly cdnIdentifierSecret: string;

  /**
   * @schema MediaPackageAuthorization#SecretsRoleArn
   */
  readonly secretsRoleArn: string;

}

/**
 * @schema MediaPackageCmafPackageCreateOrUpdateParameters
 */
export interface MediaPackageCmafPackageCreateOrUpdateParameters {
  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#Encryption
   */
  readonly encryption?: MediaPackageCmafEncryption;

  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#HlsManifests
   */
  readonly hlsManifests?: MediaPackageHlsManifestCreateOrUpdateParameters[];

  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#SegmentPrefix
   */
  readonly segmentPrefix?: string;

  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

}

/**
 * @schema MediaPackageDashPackage
 */
export interface MediaPackageDashPackage {
  /**
   * @schema MediaPackageDashPackage#AdTriggers
   */
  readonly adTriggers?: string[];

  /**
   * @schema MediaPackageDashPackage#AdsOnDeliveryRestrictions
   */
  readonly adsOnDeliveryRestrictions?: string;

  /**
   * @schema MediaPackageDashPackage#Encryption
   */
  readonly encryption?: MediaPackageDashEncryption;

  /**
   * @schema MediaPackageDashPackage#ManifestLayout
   */
  readonly manifestLayout?: string;

  /**
   * @schema MediaPackageDashPackage#ManifestWindowSeconds
   */
  readonly manifestWindowSeconds?: number;

  /**
   * @schema MediaPackageDashPackage#MinBufferTimeSeconds
   */
  readonly minBufferTimeSeconds?: number;

  /**
   * @schema MediaPackageDashPackage#MinUpdatePeriodSeconds
   */
  readonly minUpdatePeriodSeconds?: number;

  /**
   * @schema MediaPackageDashPackage#PeriodTriggers
   */
  readonly periodTriggers?: string[];

  /**
   * @schema MediaPackageDashPackage#Profile
   */
  readonly profile?: string;

  /**
   * @schema MediaPackageDashPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageDashPackage#SegmentTemplateFormat
   */
  readonly segmentTemplateFormat?: string;

  /**
   * @schema MediaPackageDashPackage#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

  /**
   * @schema MediaPackageDashPackage#SuggestedPresentationDelaySeconds
   */
  readonly suggestedPresentationDelaySeconds?: number;

  /**
   * @schema MediaPackageDashPackage#UtcTiming
   */
  readonly utcTiming?: string;

  /**
   * @schema MediaPackageDashPackage#UtcTimingUri
   */
  readonly utcTimingUri?: string;

}

/**
 * @schema MediaPackageHlsPackage
 */
export interface MediaPackageHlsPackage {
  /**
   * @schema MediaPackageHlsPackage#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema MediaPackageHlsPackage#AdTriggers
   */
  readonly adTriggers?: string[];

  /**
   * @schema MediaPackageHlsPackage#AdsOnDeliveryRestrictions
   */
  readonly adsOnDeliveryRestrictions?: string;

  /**
   * @schema MediaPackageHlsPackage#Encryption
   */
  readonly encryption?: MediaPackageHlsEncryption;

  /**
   * @schema MediaPackageHlsPackage#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema MediaPackageHlsPackage#PlaylistType
   */
  readonly playlistType?: string;

  /**
   * @schema MediaPackageHlsPackage#PlaylistWindowSeconds
   */
  readonly playlistWindowSeconds?: number;

  /**
   * @schema MediaPackageHlsPackage#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

  /**
   * @schema MediaPackageHlsPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageHlsPackage#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

  /**
   * @schema MediaPackageHlsPackage#UseAudioRenditionGroup
   */
  readonly useAudioRenditionGroup?: boolean;

}

/**
 * @schema MediaPackageMssPackage
 */
export interface MediaPackageMssPackage {
  /**
   * @schema MediaPackageMssPackage#Encryption
   */
  readonly encryption?: MediaPackageMssEncryption;

  /**
   * @schema MediaPackageMssPackage#ManifestWindowSeconds
   */
  readonly manifestWindowSeconds?: number;

  /**
   * @schema MediaPackageMssPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageMssPackage#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

}

/**
 * @schema MediaPackageCmafPackage
 */
export interface MediaPackageCmafPackage {
  /**
   * @schema MediaPackageCmafPackage#Encryption
   */
  readonly encryption?: MediaPackageCmafEncryption;

  /**
   * @schema MediaPackageCmafPackage#HlsManifests
   */
  readonly hlsManifests?: MediaPackageHlsManifest[];

  /**
   * @schema MediaPackageCmafPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageCmafPackage#SegmentPrefix
   */
  readonly segmentPrefix?: string;

  /**
   * @schema MediaPackageCmafPackage#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

}

/**
 * @schema MediaPackageChannel
 */
export interface MediaPackageChannel {
  /**
   * @schema MediaPackageChannel#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageChannel#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageChannel#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageChannel#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageChannel#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageChannel#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageChannel#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageHarvestJob
 */
export interface MediaPackageHarvestJob {
  /**
   * @schema MediaPackageHarvestJob#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageHarvestJob#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageHarvestJob#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageHarvestJob#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MediaPackageHarvestJob#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageHarvestJob#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema MediaPackageHarvestJob#S3Destination
   */
  readonly s3Destination?: MediaPackageS3Destination;

  /**
   * @schema MediaPackageHarvestJob#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaPackageHarvestJob#Status
   */
  readonly status?: string;

}

/**
 * @schema MediaPackageOriginEndpoint
 */
export interface MediaPackageOriginEndpoint {
  /**
   * @schema MediaPackageOriginEndpoint#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageOriginEndpoint#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageOriginEndpoint#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageOriginEndpoint#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackage;

  /**
   * @schema MediaPackageOriginEndpoint#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageOriginEndpoint#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageOriginEndpoint#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageOriginEndpoint#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageOriginEndpoint#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageOriginEndpoint#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageOriginEndpoint#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageOriginEndpoint#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageOriginEndpoint#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageOriginEndpoint#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageOriginEndpoint#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageOriginEndpoint#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema MediaPackageIngestEndpoint
 */
export interface MediaPackageIngestEndpoint {
  /**
   * @schema MediaPackageIngestEndpoint#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageIngestEndpoint#Password
   */
  readonly password?: string;

  /**
   * @schema MediaPackageIngestEndpoint#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageIngestEndpoint#Username
   */
  readonly username?: string;

}

/**
 * @schema MediaPackageCmafEncryption
 */
export interface MediaPackageCmafEncryption {
  /**
   * @schema MediaPackageCmafEncryption#KeyRotationIntervalSeconds
   */
  readonly keyRotationIntervalSeconds?: number;

  /**
   * @schema MediaPackageCmafEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: MediaPackageSpekeKeyProvider;

}

/**
 * @schema MediaPackageHlsManifestCreateOrUpdateParameters
 */
export interface MediaPackageHlsManifestCreateOrUpdateParameters {
  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#AdTriggers
   */
  readonly adTriggers?: string[];

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#AdsOnDeliveryRestrictions
   */
  readonly adsOnDeliveryRestrictions?: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#PlaylistType
   */
  readonly playlistType?: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#PlaylistWindowSeconds
   */
  readonly playlistWindowSeconds?: number;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

}

/**
 * @schema MediaPackageStreamSelection
 */
export interface MediaPackageStreamSelection {
  /**
   * @schema MediaPackageStreamSelection#MaxVideoBitsPerSecond
   */
  readonly maxVideoBitsPerSecond?: number;

  /**
   * @schema MediaPackageStreamSelection#MinVideoBitsPerSecond
   */
  readonly minVideoBitsPerSecond?: number;

  /**
   * @schema MediaPackageStreamSelection#StreamOrder
   */
  readonly streamOrder?: string;

}

/**
 * @schema MediaPackageDashEncryption
 */
export interface MediaPackageDashEncryption {
  /**
   * @schema MediaPackageDashEncryption#KeyRotationIntervalSeconds
   */
  readonly keyRotationIntervalSeconds?: number;

  /**
   * @schema MediaPackageDashEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: MediaPackageSpekeKeyProvider;

}

/**
 * @schema MediaPackageHlsEncryption
 */
export interface MediaPackageHlsEncryption {
  /**
   * @schema MediaPackageHlsEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaPackageHlsEncryption#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema MediaPackageHlsEncryption#KeyRotationIntervalSeconds
   */
  readonly keyRotationIntervalSeconds?: number;

  /**
   * @schema MediaPackageHlsEncryption#RepeatExtXKey
   */
  readonly repeatExtXKey?: boolean;

  /**
   * @schema MediaPackageHlsEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: MediaPackageSpekeKeyProvider;

}

/**
 * @schema MediaPackageMssEncryption
 */
export interface MediaPackageMssEncryption {
  /**
   * @schema MediaPackageMssEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: MediaPackageSpekeKeyProvider;

}

/**
 * @schema MediaPackageHlsManifest
 */
export interface MediaPackageHlsManifest {
  /**
   * @schema MediaPackageHlsManifest#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema MediaPackageHlsManifest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageHlsManifest#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema MediaPackageHlsManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageHlsManifest#PlaylistType
   */
  readonly playlistType?: string;

  /**
   * @schema MediaPackageHlsManifest#PlaylistWindowSeconds
   */
  readonly playlistWindowSeconds?: number;

  /**
   * @schema MediaPackageHlsManifest#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

  /**
   * @schema MediaPackageHlsManifest#Url
   */
  readonly url?: string;

}

/**
 * @schema MediaPackageSpekeKeyProvider
 */
export interface MediaPackageSpekeKeyProvider {
  /**
   * @schema MediaPackageSpekeKeyProvider#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema MediaPackageSpekeKeyProvider#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema MediaPackageSpekeKeyProvider#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema MediaPackageSpekeKeyProvider#SystemIds
   */
  readonly systemIds: string[];

  /**
   * @schema MediaPackageSpekeKeyProvider#Url
   */
  readonly url: string;

}
