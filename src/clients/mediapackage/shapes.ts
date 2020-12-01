/**
 * @schema ConfigureLogsRequest
 */
export interface ConfigureLogsRequest {
  /**
   * @schema ConfigureLogsRequest#EgressAccessLogs
   */
  readonly egressAccessLogs?: EgressAccessLogs;

  /**
   * @schema ConfigureLogsRequest#Id
   */
  readonly id: string;

  /**
   * @schema ConfigureLogsRequest#IngressAccessLogs
   */
  readonly ingressAccessLogs?: IngressAccessLogs;

}

/**
 * @schema ConfigureLogsResponse
 */
export interface ConfigureLogsResponse {
  /**
   * @schema ConfigureLogsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConfigureLogsResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ConfigureLogsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: EgressAccessLogs;

  /**
   * @schema ConfigureLogsResponse#HlsIngest
   */
  readonly hlsIngest?: HlsIngest;

  /**
   * @schema ConfigureLogsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ConfigureLogsResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: IngressAccessLogs;

  /**
   * @schema ConfigureLogsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateChannelRequest
 */
export interface CreateChannelRequest {
  /**
   * @schema CreateChannelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateChannelRequest#Id
   */
  readonly id: string;

  /**
   * @schema CreateChannelRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * @schema CreateChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateChannelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateChannelResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: EgressAccessLogs;

  /**
   * @schema CreateChannelResponse#HlsIngest
   */
  readonly hlsIngest?: HlsIngest;

  /**
   * @schema CreateChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateChannelResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: IngressAccessLogs;

  /**
   * @schema CreateChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateHarvestJobRequest
 */
export interface CreateHarvestJobRequest {
  /**
   * @schema CreateHarvestJobRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema CreateHarvestJobRequest#Id
   */
  readonly id: string;

  /**
   * @schema CreateHarvestJobRequest#OriginEndpointId
   */
  readonly originEndpointId: string;

  /**
   * @schema CreateHarvestJobRequest#S3Destination
   */
  readonly s3Destination: S3Destination;

  /**
   * @schema CreateHarvestJobRequest#StartTime
   */
  readonly startTime: string;

}

/**
 * @schema CreateHarvestJobResponse
 */
export interface CreateHarvestJobResponse {
  /**
   * @schema CreateHarvestJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateHarvestJobResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema CreateHarvestJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateHarvestJobResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema CreateHarvestJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateHarvestJobResponse#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema CreateHarvestJobResponse#S3Destination
   */
  readonly s3Destination?: S3Destination;

  /**
   * @schema CreateHarvestJobResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema CreateHarvestJobResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema CreateOriginEndpointRequest
 */
export interface CreateOriginEndpointRequest {
  /**
   * @schema CreateOriginEndpointRequest#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema CreateOriginEndpointRequest#ChannelId
   */
  readonly channelId: string;

  /**
   * @schema CreateOriginEndpointRequest#CmafPackage
   */
  readonly cmafPackage?: CmafPackageCreateOrUpdateParameters;

  /**
   * @schema CreateOriginEndpointRequest#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema CreateOriginEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateOriginEndpointRequest#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema CreateOriginEndpointRequest#Id
   */
  readonly id: string;

  /**
   * @schema CreateOriginEndpointRequest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema CreateOriginEndpointRequest#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema CreateOriginEndpointRequest#Origination
   */
  readonly origination?: string;

  /**
   * @schema CreateOriginEndpointRequest#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema CreateOriginEndpointRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateOriginEndpointRequest#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema CreateOriginEndpointRequest#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema CreateOriginEndpointResponse
 */
export interface CreateOriginEndpointResponse {
  /**
   * @schema CreateOriginEndpointResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateOriginEndpointResponse#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema CreateOriginEndpointResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema CreateOriginEndpointResponse#CmafPackage
   */
  readonly cmafPackage?: CmafPackage;

  /**
   * @schema CreateOriginEndpointResponse#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema CreateOriginEndpointResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateOriginEndpointResponse#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema CreateOriginEndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateOriginEndpointResponse#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema CreateOriginEndpointResponse#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema CreateOriginEndpointResponse#Origination
   */
  readonly origination?: string;

  /**
   * @schema CreateOriginEndpointResponse#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema CreateOriginEndpointResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateOriginEndpointResponse#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema CreateOriginEndpointResponse#Url
   */
  readonly url?: string;

  /**
   * @schema CreateOriginEndpointResponse#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * @schema DeleteChannelRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteChannelResponse
 */
export interface DeleteChannelResponse {
}

/**
 * @schema DeleteOriginEndpointRequest
 */
export interface DeleteOriginEndpointRequest {
  /**
   * @schema DeleteOriginEndpointRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteOriginEndpointResponse
 */
export interface DeleteOriginEndpointResponse {
}

/**
 * @schema DescribeChannelRequest
 */
export interface DescribeChannelRequest {
  /**
   * @schema DescribeChannelRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeChannelResponse
 */
export interface DescribeChannelResponse {
  /**
   * @schema DescribeChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeChannelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeChannelResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: EgressAccessLogs;

  /**
   * @schema DescribeChannelResponse#HlsIngest
   */
  readonly hlsIngest?: HlsIngest;

  /**
   * @schema DescribeChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeChannelResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: IngressAccessLogs;

  /**
   * @schema DescribeChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeHarvestJobRequest
 */
export interface DescribeHarvestJobRequest {
  /**
   * @schema DescribeHarvestJobRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeHarvestJobResponse
 */
export interface DescribeHarvestJobResponse {
  /**
   * @schema DescribeHarvestJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeHarvestJobResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema DescribeHarvestJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeHarvestJobResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeHarvestJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeHarvestJobResponse#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema DescribeHarvestJobResponse#S3Destination
   */
  readonly s3Destination?: S3Destination;

  /**
   * @schema DescribeHarvestJobResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeHarvestJobResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema DescribeOriginEndpointRequest
 */
export interface DescribeOriginEndpointRequest {
  /**
   * @schema DescribeOriginEndpointRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeOriginEndpointResponse
 */
export interface DescribeOriginEndpointResponse {
  /**
   * @schema DescribeOriginEndpointResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeOriginEndpointResponse#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema DescribeOriginEndpointResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema DescribeOriginEndpointResponse#CmafPackage
   */
  readonly cmafPackage?: CmafPackage;

  /**
   * @schema DescribeOriginEndpointResponse#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema DescribeOriginEndpointResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeOriginEndpointResponse#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema DescribeOriginEndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeOriginEndpointResponse#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema DescribeOriginEndpointResponse#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema DescribeOriginEndpointResponse#Origination
   */
  readonly origination?: string;

  /**
   * @schema DescribeOriginEndpointResponse#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema DescribeOriginEndpointResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeOriginEndpointResponse#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema DescribeOriginEndpointResponse#Url
   */
  readonly url?: string;

  /**
   * @schema DescribeOriginEndpointResponse#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * @schema ListChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChannelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChannelsResponse
 */
export interface ListChannelsResponse {
  /**
   * @schema ListChannelsResponse#Channels
   */
  readonly channels?: Channel[];

  /**
   * @schema ListChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHarvestJobsRequest
 */
export interface ListHarvestJobsRequest {
  /**
   * @schema ListHarvestJobsRequest#IncludeChannelId
   */
  readonly includeChannelId?: string;

  /**
   * @schema ListHarvestJobsRequest#IncludeStatus
   */
  readonly includeStatus?: string;

  /**
   * @schema ListHarvestJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListHarvestJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHarvestJobsResponse
 */
export interface ListHarvestJobsResponse {
  /**
   * @schema ListHarvestJobsResponse#HarvestJobs
   */
  readonly harvestJobs?: HarvestJob[];

  /**
   * @schema ListHarvestJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOriginEndpointsRequest
 */
export interface ListOriginEndpointsRequest {
  /**
   * @schema ListOriginEndpointsRequest#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema ListOriginEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListOriginEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOriginEndpointsResponse
 */
export interface ListOriginEndpointsResponse {
  /**
   * @schema ListOriginEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOriginEndpointsResponse#OriginEndpoints
   */
  readonly originEndpoints?: OriginEndpoint[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
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
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RotateChannelCredentialsRequest
 */
export interface RotateChannelCredentialsRequest {
  /**
   * @schema RotateChannelCredentialsRequest#Id
   */
  readonly id: string;

}

/**
 * @schema RotateChannelCredentialsResponse
 */
export interface RotateChannelCredentialsResponse {
  /**
   * @schema RotateChannelCredentialsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema RotateChannelCredentialsResponse#Description
   */
  readonly description?: string;

  /**
   * @schema RotateChannelCredentialsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: EgressAccessLogs;

  /**
   * @schema RotateChannelCredentialsResponse#HlsIngest
   */
  readonly hlsIngest?: HlsIngest;

  /**
   * @schema RotateChannelCredentialsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema RotateChannelCredentialsResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: IngressAccessLogs;

  /**
   * @schema RotateChannelCredentialsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RotateIngestEndpointCredentialsRequest
 */
export interface RotateIngestEndpointCredentialsRequest {
  /**
   * @schema RotateIngestEndpointCredentialsRequest#Id
   */
  readonly id: string;

  /**
   * @schema RotateIngestEndpointCredentialsRequest#IngestEndpointId
   */
  readonly ingestEndpointId: string;

}

/**
 * @schema RotateIngestEndpointCredentialsResponse
 */
export interface RotateIngestEndpointCredentialsResponse {
  /**
   * @schema RotateIngestEndpointCredentialsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema RotateIngestEndpointCredentialsResponse#Description
   */
  readonly description?: string;

  /**
   * @schema RotateIngestEndpointCredentialsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: EgressAccessLogs;

  /**
   * @schema RotateIngestEndpointCredentialsResponse#HlsIngest
   */
  readonly hlsIngest?: HlsIngest;

  /**
   * @schema RotateIngestEndpointCredentialsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema RotateIngestEndpointCredentialsResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: IngressAccessLogs;

  /**
   * @schema RotateIngestEndpointCredentialsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateChannelRequest
 */
export interface UpdateChannelRequest {
  /**
   * @schema UpdateChannelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateChannelRequest#Id
   */
  readonly id: string;

}

/**
 * @schema UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * @schema UpdateChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateChannelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateChannelResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: EgressAccessLogs;

  /**
   * @schema UpdateChannelResponse#HlsIngest
   */
  readonly hlsIngest?: HlsIngest;

  /**
   * @schema UpdateChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema UpdateChannelResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: IngressAccessLogs;

  /**
   * @schema UpdateChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema UpdateOriginEndpointRequest
 */
export interface UpdateOriginEndpointRequest {
  /**
   * @schema UpdateOriginEndpointRequest#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema UpdateOriginEndpointRequest#CmafPackage
   */
  readonly cmafPackage?: CmafPackageCreateOrUpdateParameters;

  /**
   * @schema UpdateOriginEndpointRequest#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema UpdateOriginEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateOriginEndpointRequest#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema UpdateOriginEndpointRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateOriginEndpointRequest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema UpdateOriginEndpointRequest#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema UpdateOriginEndpointRequest#Origination
   */
  readonly origination?: string;

  /**
   * @schema UpdateOriginEndpointRequest#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema UpdateOriginEndpointRequest#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema UpdateOriginEndpointRequest#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema UpdateOriginEndpointResponse
 */
export interface UpdateOriginEndpointResponse {
  /**
   * @schema UpdateOriginEndpointResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateOriginEndpointResponse#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema UpdateOriginEndpointResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema UpdateOriginEndpointResponse#CmafPackage
   */
  readonly cmafPackage?: CmafPackage;

  /**
   * @schema UpdateOriginEndpointResponse#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema UpdateOriginEndpointResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateOriginEndpointResponse#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema UpdateOriginEndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema UpdateOriginEndpointResponse#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema UpdateOriginEndpointResponse#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema UpdateOriginEndpointResponse#Origination
   */
  readonly origination?: string;

  /**
   * @schema UpdateOriginEndpointResponse#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema UpdateOriginEndpointResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema UpdateOriginEndpointResponse#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema UpdateOriginEndpointResponse#Url
   */
  readonly url?: string;

  /**
   * @schema UpdateOriginEndpointResponse#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema EgressAccessLogs
 */
export interface EgressAccessLogs {
  /**
   * @schema EgressAccessLogs#LogGroupName
   */
  readonly logGroupName?: string;

}

/**
 * @schema IngressAccessLogs
 */
export interface IngressAccessLogs {
  /**
   * @schema IngressAccessLogs#LogGroupName
   */
  readonly logGroupName?: string;

}

/**
 * @schema HlsIngest
 */
export interface HlsIngest {
  /**
   * @schema HlsIngest#IngestEndpoints
   */
  readonly ingestEndpoints?: IngestEndpoint[];

}

/**
 * @schema S3Destination
 */
export interface S3Destination {
  /**
   * @schema S3Destination#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3Destination#ManifestKey
   */
  readonly manifestKey: string;

  /**
   * @schema S3Destination#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema Authorization
 */
export interface Authorization {
  /**
   * @schema Authorization#CdnIdentifierSecret
   */
  readonly cdnIdentifierSecret: string;

  /**
   * @schema Authorization#SecretsRoleArn
   */
  readonly secretsRoleArn: string;

}

/**
 * @schema CmafPackageCreateOrUpdateParameters
 */
export interface CmafPackageCreateOrUpdateParameters {
  /**
   * @schema CmafPackageCreateOrUpdateParameters#Encryption
   */
  readonly encryption?: CmafEncryption;

  /**
   * @schema CmafPackageCreateOrUpdateParameters#HlsManifests
   */
  readonly hlsManifests?: HlsManifestCreateOrUpdateParameters[];

  /**
   * @schema CmafPackageCreateOrUpdateParameters#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema CmafPackageCreateOrUpdateParameters#SegmentPrefix
   */
  readonly segmentPrefix?: string;

  /**
   * @schema CmafPackageCreateOrUpdateParameters#StreamSelection
   */
  readonly streamSelection?: StreamSelection;

}

/**
 * @schema DashPackage
 */
export interface DashPackage {
  /**
   * @schema DashPackage#AdTriggers
   */
  readonly adTriggers?: string[];

  /**
   * @schema DashPackage#AdsOnDeliveryRestrictions
   */
  readonly adsOnDeliveryRestrictions?: string;

  /**
   * @schema DashPackage#Encryption
   */
  readonly encryption?: DashEncryption;

  /**
   * @schema DashPackage#ManifestLayout
   */
  readonly manifestLayout?: string;

  /**
   * @schema DashPackage#ManifestWindowSeconds
   */
  readonly manifestWindowSeconds?: number;

  /**
   * @schema DashPackage#MinBufferTimeSeconds
   */
  readonly minBufferTimeSeconds?: number;

  /**
   * @schema DashPackage#MinUpdatePeriodSeconds
   */
  readonly minUpdatePeriodSeconds?: number;

  /**
   * @schema DashPackage#PeriodTriggers
   */
  readonly periodTriggers?: string[];

  /**
   * @schema DashPackage#Profile
   */
  readonly profile?: string;

  /**
   * @schema DashPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema DashPackage#SegmentTemplateFormat
   */
  readonly segmentTemplateFormat?: string;

  /**
   * @schema DashPackage#StreamSelection
   */
  readonly streamSelection?: StreamSelection;

  /**
   * @schema DashPackage#SuggestedPresentationDelaySeconds
   */
  readonly suggestedPresentationDelaySeconds?: number;

  /**
   * @schema DashPackage#UtcTiming
   */
  readonly utcTiming?: string;

  /**
   * @schema DashPackage#UtcTimingUri
   */
  readonly utcTimingUri?: string;

}

/**
 * @schema HlsPackage
 */
export interface HlsPackage {
  /**
   * @schema HlsPackage#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema HlsPackage#AdTriggers
   */
  readonly adTriggers?: string[];

  /**
   * @schema HlsPackage#AdsOnDeliveryRestrictions
   */
  readonly adsOnDeliveryRestrictions?: string;

  /**
   * @schema HlsPackage#Encryption
   */
  readonly encryption?: HlsEncryption;

  /**
   * @schema HlsPackage#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema HlsPackage#PlaylistType
   */
  readonly playlistType?: string;

  /**
   * @schema HlsPackage#PlaylistWindowSeconds
   */
  readonly playlistWindowSeconds?: number;

  /**
   * @schema HlsPackage#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

  /**
   * @schema HlsPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema HlsPackage#StreamSelection
   */
  readonly streamSelection?: StreamSelection;

  /**
   * @schema HlsPackage#UseAudioRenditionGroup
   */
  readonly useAudioRenditionGroup?: boolean;

}

/**
 * @schema MssPackage
 */
export interface MssPackage {
  /**
   * @schema MssPackage#Encryption
   */
  readonly encryption?: MssEncryption;

  /**
   * @schema MssPackage#ManifestWindowSeconds
   */
  readonly manifestWindowSeconds?: number;

  /**
   * @schema MssPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MssPackage#StreamSelection
   */
  readonly streamSelection?: StreamSelection;

}

/**
 * @schema CmafPackage
 */
export interface CmafPackage {
  /**
   * @schema CmafPackage#Encryption
   */
  readonly encryption?: CmafEncryption;

  /**
   * @schema CmafPackage#HlsManifests
   */
  readonly hlsManifests?: HlsManifest[];

  /**
   * @schema CmafPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema CmafPackage#SegmentPrefix
   */
  readonly segmentPrefix?: string;

  /**
   * @schema CmafPackage#StreamSelection
   */
  readonly streamSelection?: StreamSelection;

}

/**
 * @schema Channel
 */
export interface Channel {
  /**
   * @schema Channel#Arn
   */
  readonly arn?: string;

  /**
   * @schema Channel#Description
   */
  readonly description?: string;

  /**
   * @schema Channel#EgressAccessLogs
   */
  readonly egressAccessLogs?: EgressAccessLogs;

  /**
   * @schema Channel#HlsIngest
   */
  readonly hlsIngest?: HlsIngest;

  /**
   * @schema Channel#Id
   */
  readonly id?: string;

  /**
   * @schema Channel#IngressAccessLogs
   */
  readonly ingressAccessLogs?: IngressAccessLogs;

  /**
   * @schema Channel#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema HarvestJob
 */
export interface HarvestJob {
  /**
   * @schema HarvestJob#Arn
   */
  readonly arn?: string;

  /**
   * @schema HarvestJob#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema HarvestJob#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema HarvestJob#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema HarvestJob#Id
   */
  readonly id?: string;

  /**
   * @schema HarvestJob#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema HarvestJob#S3Destination
   */
  readonly s3Destination?: S3Destination;

  /**
   * @schema HarvestJob#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema HarvestJob#Status
   */
  readonly status?: string;

}

/**
 * @schema OriginEndpoint
 */
export interface OriginEndpoint {
  /**
   * @schema OriginEndpoint#Arn
   */
  readonly arn?: string;

  /**
   * @schema OriginEndpoint#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema OriginEndpoint#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema OriginEndpoint#CmafPackage
   */
  readonly cmafPackage?: CmafPackage;

  /**
   * @schema OriginEndpoint#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema OriginEndpoint#Description
   */
  readonly description?: string;

  /**
   * @schema OriginEndpoint#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema OriginEndpoint#Id
   */
  readonly id?: string;

  /**
   * @schema OriginEndpoint#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema OriginEndpoint#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema OriginEndpoint#Origination
   */
  readonly origination?: string;

  /**
   * @schema OriginEndpoint#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema OriginEndpoint#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema OriginEndpoint#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema OriginEndpoint#Url
   */
  readonly url?: string;

  /**
   * @schema OriginEndpoint#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * @schema IngestEndpoint
 */
export interface IngestEndpoint {
  /**
   * @schema IngestEndpoint#Id
   */
  readonly id?: string;

  /**
   * @schema IngestEndpoint#Password
   */
  readonly password?: string;

  /**
   * @schema IngestEndpoint#Url
   */
  readonly url?: string;

  /**
   * @schema IngestEndpoint#Username
   */
  readonly username?: string;

}

/**
 * @schema CmafEncryption
 */
export interface CmafEncryption {
  /**
   * @schema CmafEncryption#KeyRotationIntervalSeconds
   */
  readonly keyRotationIntervalSeconds?: number;

  /**
   * @schema CmafEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: SpekeKeyProvider;

}

/**
 * @schema HlsManifestCreateOrUpdateParameters
 */
export interface HlsManifestCreateOrUpdateParameters {
  /**
   * @schema HlsManifestCreateOrUpdateParameters#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema HlsManifestCreateOrUpdateParameters#AdTriggers
   */
  readonly adTriggers?: string[];

  /**
   * @schema HlsManifestCreateOrUpdateParameters#AdsOnDeliveryRestrictions
   */
  readonly adsOnDeliveryRestrictions?: string;

  /**
   * @schema HlsManifestCreateOrUpdateParameters#Id
   */
  readonly id: string;

  /**
   * @schema HlsManifestCreateOrUpdateParameters#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema HlsManifestCreateOrUpdateParameters#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema HlsManifestCreateOrUpdateParameters#PlaylistType
   */
  readonly playlistType?: string;

  /**
   * @schema HlsManifestCreateOrUpdateParameters#PlaylistWindowSeconds
   */
  readonly playlistWindowSeconds?: number;

  /**
   * @schema HlsManifestCreateOrUpdateParameters#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

}

/**
 * @schema StreamSelection
 */
export interface StreamSelection {
  /**
   * @schema StreamSelection#MaxVideoBitsPerSecond
   */
  readonly maxVideoBitsPerSecond?: number;

  /**
   * @schema StreamSelection#MinVideoBitsPerSecond
   */
  readonly minVideoBitsPerSecond?: number;

  /**
   * @schema StreamSelection#StreamOrder
   */
  readonly streamOrder?: string;

}

/**
 * @schema DashEncryption
 */
export interface DashEncryption {
  /**
   * @schema DashEncryption#KeyRotationIntervalSeconds
   */
  readonly keyRotationIntervalSeconds?: number;

  /**
   * @schema DashEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: SpekeKeyProvider;

}

/**
 * @schema HlsEncryption
 */
export interface HlsEncryption {
  /**
   * @schema HlsEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema HlsEncryption#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema HlsEncryption#KeyRotationIntervalSeconds
   */
  readonly keyRotationIntervalSeconds?: number;

  /**
   * @schema HlsEncryption#RepeatExtXKey
   */
  readonly repeatExtXKey?: boolean;

  /**
   * @schema HlsEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: SpekeKeyProvider;

}

/**
 * @schema MssEncryption
 */
export interface MssEncryption {
  /**
   * @schema MssEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: SpekeKeyProvider;

}

/**
 * @schema HlsManifest
 */
export interface HlsManifest {
  /**
   * @schema HlsManifest#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema HlsManifest#Id
   */
  readonly id: string;

  /**
   * @schema HlsManifest#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema HlsManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema HlsManifest#PlaylistType
   */
  readonly playlistType?: string;

  /**
   * @schema HlsManifest#PlaylistWindowSeconds
   */
  readonly playlistWindowSeconds?: number;

  /**
   * @schema HlsManifest#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

  /**
   * @schema HlsManifest#Url
   */
  readonly url?: string;

}

/**
 * @schema SpekeKeyProvider
 */
export interface SpekeKeyProvider {
  /**
   * @schema SpekeKeyProvider#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema SpekeKeyProvider#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema SpekeKeyProvider#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SpekeKeyProvider#SystemIds
   */
  readonly systemIds: string[];

  /**
   * @schema SpekeKeyProvider#Url
   */
  readonly url: string;

}
