/**
 * @schema MediaPackageVodCreateAssetRequest
 */
export interface MediaPackageVodCreateAssetRequest {
  /**
   * @schema MediaPackageVodCreateAssetRequest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#PackagingGroupId
   */
  readonly packagingGroupId: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#SourceRoleArn
   */
  readonly sourceRoleArn: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodCreateAssetResponse
 */
export interface MediaPackageVodCreateAssetResponse {
  /**
   * @schema MediaPackageVodCreateAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#EgressEndpoints
   */
  readonly egressEndpoints?: MediaPackageVodEgressEndpoint[];

  /**
   * @schema MediaPackageVodCreateAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodCreatePackagingConfigurationRequest
 */
export interface MediaPackageVodCreatePackagingConfigurationRequest {
  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#CmafPackage
   */
  readonly cmafPackage?: MediaPackageVodCmafPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#DashPackage
   */
  readonly dashPackage?: MediaPackageVodDashPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#HlsPackage
   */
  readonly hlsPackage?: MediaPackageVodHlsPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#MssPackage
   */
  readonly mssPackage?: MediaPackageVodMssPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#PackagingGroupId
   */
  readonly packagingGroupId: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodCreatePackagingConfigurationResponse
 */
export interface MediaPackageVodCreatePackagingConfigurationResponse {
  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageVodCmafPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageVodDashPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageVodHlsPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageVodMssPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodCreatePackagingGroupRequest
 */
export interface MediaPackageVodCreatePackagingGroupRequest {
  /**
   * @schema MediaPackageVodCreatePackagingGroupRequest#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodCreatePackagingGroupRequest#Id
   */
  readonly id: string;

  /**
   * @schema MediaPackageVodCreatePackagingGroupRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodCreatePackagingGroupResponse
 */
export interface MediaPackageVodCreatePackagingGroupResponse {
  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodDeleteAssetRequest
 */
export interface MediaPackageVodDeleteAssetRequest {
  /**
   * @schema MediaPackageVodDeleteAssetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageVodDeleteAssetResponse
 */
export interface MediaPackageVodDeleteAssetResponse {
}

/**
 * @schema MediaPackageVodDeletePackagingConfigurationRequest
 */
export interface MediaPackageVodDeletePackagingConfigurationRequest {
  /**
   * @schema MediaPackageVodDeletePackagingConfigurationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageVodDeletePackagingConfigurationResponse
 */
export interface MediaPackageVodDeletePackagingConfigurationResponse {
}

/**
 * @schema MediaPackageVodDeletePackagingGroupRequest
 */
export interface MediaPackageVodDeletePackagingGroupRequest {
  /**
   * @schema MediaPackageVodDeletePackagingGroupRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageVodDeletePackagingGroupResponse
 */
export interface MediaPackageVodDeletePackagingGroupResponse {
}

/**
 * @schema MediaPackageVodDescribeAssetRequest
 */
export interface MediaPackageVodDescribeAssetRequest {
  /**
   * @schema MediaPackageVodDescribeAssetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageVodDescribeAssetResponse
 */
export interface MediaPackageVodDescribeAssetResponse {
  /**
   * @schema MediaPackageVodDescribeAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#EgressEndpoints
   */
  readonly egressEndpoints?: MediaPackageVodEgressEndpoint[];

  /**
   * @schema MediaPackageVodDescribeAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodDescribePackagingConfigurationRequest
 */
export interface MediaPackageVodDescribePackagingConfigurationRequest {
  /**
   * @schema MediaPackageVodDescribePackagingConfigurationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageVodDescribePackagingConfigurationResponse
 */
export interface MediaPackageVodDescribePackagingConfigurationResponse {
  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageVodCmafPackage;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageVodDashPackage;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageVodHlsPackage;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageVodMssPackage;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodDescribePackagingGroupRequest
 */
export interface MediaPackageVodDescribePackagingGroupRequest {
  /**
   * @schema MediaPackageVodDescribePackagingGroupRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageVodDescribePackagingGroupResponse
 */
export interface MediaPackageVodDescribePackagingGroupResponse {
  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodListAssetsRequest
 */
export interface MediaPackageVodListAssetsRequest {
  /**
   * @schema MediaPackageVodListAssetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageVodListAssetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageVodListAssetsRequest#PackagingGroupId
   */
  readonly packagingGroupId?: string;

}

/**
 * @schema MediaPackageVodListAssetsResponse
 */
export interface MediaPackageVodListAssetsResponse {
  /**
   * @schema MediaPackageVodListAssetsResponse#Assets
   */
  readonly assets?: MediaPackageVodAssetShallow[];

  /**
   * @schema MediaPackageVodListAssetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaPackageVodListPackagingConfigurationsRequest
 */
export interface MediaPackageVodListPackagingConfigurationsRequest {
  /**
   * @schema MediaPackageVodListPackagingConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageVodListPackagingConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageVodListPackagingConfigurationsRequest#PackagingGroupId
   */
  readonly packagingGroupId?: string;

}

/**
 * @schema MediaPackageVodListPackagingConfigurationsResponse
 */
export interface MediaPackageVodListPackagingConfigurationsResponse {
  /**
   * @schema MediaPackageVodListPackagingConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageVodListPackagingConfigurationsResponse#PackagingConfigurations
   */
  readonly packagingConfigurations?: MediaPackageVodPackagingConfiguration[];

}

/**
 * @schema MediaPackageVodListPackagingGroupsRequest
 */
export interface MediaPackageVodListPackagingGroupsRequest {
  /**
   * @schema MediaPackageVodListPackagingGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageVodListPackagingGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaPackageVodListPackagingGroupsResponse
 */
export interface MediaPackageVodListPackagingGroupsResponse {
  /**
   * @schema MediaPackageVodListPackagingGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageVodListPackagingGroupsResponse#PackagingGroups
   */
  readonly packagingGroups?: MediaPackageVodPackagingGroup[];

}

/**
 * @schema MediaPackageVodListTagsForResourceRequest
 */
export interface MediaPackageVodListTagsForResourceRequest {
  /**
   * @schema MediaPackageVodListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema MediaPackageVodListTagsForResourceResponse
 */
export interface MediaPackageVodListTagsForResourceResponse {
  /**
   * @schema MediaPackageVodListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodTagResourceRequest
 */
export interface MediaPackageVodTagResourceRequest {
  /**
   * @schema MediaPackageVodTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaPackageVodTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema MediaPackageVodUntagResourceRequest
 */
export interface MediaPackageVodUntagResourceRequest {
  /**
   * @schema MediaPackageVodUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaPackageVodUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema MediaPackageVodUpdatePackagingGroupRequest
 */
export interface MediaPackageVodUpdatePackagingGroupRequest {
  /**
   * @schema MediaPackageVodUpdatePackagingGroupRequest#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupRequest#Id
   */
  readonly id: string;

}

/**
 * @schema MediaPackageVodUpdatePackagingGroupResponse
 */
export interface MediaPackageVodUpdatePackagingGroupResponse {
  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodEgressEndpoint
 */
export interface MediaPackageVodEgressEndpoint {
  /**
   * @schema MediaPackageVodEgressEndpoint#PackagingConfigurationId
   */
  readonly packagingConfigurationId?: string;

  /**
   * @schema MediaPackageVodEgressEndpoint#Url
   */
  readonly url?: string;

}

/**
 * @schema MediaPackageVodCmafPackage
 */
export interface MediaPackageVodCmafPackage {
  /**
   * @schema MediaPackageVodCmafPackage#Encryption
   */
  readonly encryption?: MediaPackageVodCmafEncryption;

  /**
   * @schema MediaPackageVodCmafPackage#HlsManifests
   */
  readonly hlsManifests: MediaPackageVodHlsManifest[];

  /**
   * @schema MediaPackageVodCmafPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

}

/**
 * @schema MediaPackageVodDashPackage
 */
export interface MediaPackageVodDashPackage {
  /**
   * @schema MediaPackageVodDashPackage#DashManifests
   */
  readonly dashManifests: MediaPackageVodDashManifest[];

  /**
   * @schema MediaPackageVodDashPackage#Encryption
   */
  readonly encryption?: MediaPackageVodDashEncryption;

  /**
   * @schema MediaPackageVodDashPackage#PeriodTriggers
   */
  readonly periodTriggers?: string[];

  /**
   * @schema MediaPackageVodDashPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageVodDashPackage#SegmentTemplateFormat
   */
  readonly segmentTemplateFormat?: string;

}

/**
 * @schema MediaPackageVodHlsPackage
 */
export interface MediaPackageVodHlsPackage {
  /**
   * @schema MediaPackageVodHlsPackage#Encryption
   */
  readonly encryption?: MediaPackageVodHlsEncryption;

  /**
   * @schema MediaPackageVodHlsPackage#HlsManifests
   */
  readonly hlsManifests: MediaPackageVodHlsManifest[];

  /**
   * @schema MediaPackageVodHlsPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageVodHlsPackage#UseAudioRenditionGroup
   */
  readonly useAudioRenditionGroup?: boolean;

}

/**
 * @schema MediaPackageVodMssPackage
 */
export interface MediaPackageVodMssPackage {
  /**
   * @schema MediaPackageVodMssPackage#Encryption
   */
  readonly encryption?: MediaPackageVodMssEncryption;

  /**
   * @schema MediaPackageVodMssPackage#MssManifests
   */
  readonly mssManifests: MediaPackageVodMssManifest[];

  /**
   * @schema MediaPackageVodMssPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

}

/**
 * @schema MediaPackageVodAuthorization
 */
export interface MediaPackageVodAuthorization {
  /**
   * @schema MediaPackageVodAuthorization#CdnIdentifierSecret
   */
  readonly cdnIdentifierSecret: string;

  /**
   * @schema MediaPackageVodAuthorization#SecretsRoleArn
   */
  readonly secretsRoleArn: string;

}

/**
 * @schema MediaPackageVodAssetShallow
 */
export interface MediaPackageVodAssetShallow {
  /**
   * @schema MediaPackageVodAssetShallow#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodAssetShallow#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageVodAssetShallow#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodAssetShallow#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodAssetShallow#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaPackageVodAssetShallow#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema MediaPackageVodAssetShallow#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema MediaPackageVodAssetShallow#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodPackagingConfiguration
 */
export interface MediaPackageVodPackagingConfiguration {
  /**
   * @schema MediaPackageVodPackagingConfiguration#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodPackagingConfiguration#CmafPackage
   */
  readonly cmafPackage?: MediaPackageVodCmafPackage;

  /**
   * @schema MediaPackageVodPackagingConfiguration#DashPackage
   */
  readonly dashPackage?: MediaPackageVodDashPackage;

  /**
   * @schema MediaPackageVodPackagingConfiguration#HlsPackage
   */
  readonly hlsPackage?: MediaPackageVodHlsPackage;

  /**
   * @schema MediaPackageVodPackagingConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodPackagingConfiguration#MssPackage
   */
  readonly mssPackage?: MediaPackageVodMssPackage;

  /**
   * @schema MediaPackageVodPackagingConfiguration#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodPackagingConfiguration#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodPackagingGroup
 */
export interface MediaPackageVodPackagingGroup {
  /**
   * @schema MediaPackageVodPackagingGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodPackagingGroup#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodPackagingGroup#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema MediaPackageVodPackagingGroup#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodPackagingGroup#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaPackageVodCmafEncryption
 */
export interface MediaPackageVodCmafEncryption {
  /**
   * @schema MediaPackageVodCmafEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: MediaPackageVodSpekeKeyProvider;

}

/**
 * @schema MediaPackageVodHlsManifest
 */
export interface MediaPackageVodHlsManifest {
  /**
   * @schema MediaPackageVodHlsManifest#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema MediaPackageVodHlsManifest#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema MediaPackageVodHlsManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageVodHlsManifest#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

  /**
   * @schema MediaPackageVodHlsManifest#RepeatExtXKey
   */
  readonly repeatExtXKey?: boolean;

  /**
   * @schema MediaPackageVodHlsManifest#StreamSelection
   */
  readonly streamSelection?: MediaPackageVodStreamSelection;

}

/**
 * @schema MediaPackageVodDashManifest
 */
export interface MediaPackageVodDashManifest {
  /**
   * @schema MediaPackageVodDashManifest#ManifestLayout
   */
  readonly manifestLayout?: string;

  /**
   * @schema MediaPackageVodDashManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageVodDashManifest#MinBufferTimeSeconds
   */
  readonly minBufferTimeSeconds?: number;

  /**
   * @schema MediaPackageVodDashManifest#Profile
   */
  readonly profile?: string;

  /**
   * @schema MediaPackageVodDashManifest#StreamSelection
   */
  readonly streamSelection?: MediaPackageVodStreamSelection;

}

/**
 * @schema MediaPackageVodDashEncryption
 */
export interface MediaPackageVodDashEncryption {
  /**
   * @schema MediaPackageVodDashEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: MediaPackageVodSpekeKeyProvider;

}

/**
 * @schema MediaPackageVodHlsEncryption
 */
export interface MediaPackageVodHlsEncryption {
  /**
   * @schema MediaPackageVodHlsEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaPackageVodHlsEncryption#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema MediaPackageVodHlsEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: MediaPackageVodSpekeKeyProvider;

}

/**
 * @schema MediaPackageVodMssEncryption
 */
export interface MediaPackageVodMssEncryption {
  /**
   * @schema MediaPackageVodMssEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider: MediaPackageVodSpekeKeyProvider;

}

/**
 * @schema MediaPackageVodMssManifest
 */
export interface MediaPackageVodMssManifest {
  /**
   * @schema MediaPackageVodMssManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageVodMssManifest#StreamSelection
   */
  readonly streamSelection?: MediaPackageVodStreamSelection;

}

/**
 * @schema MediaPackageVodSpekeKeyProvider
 */
export interface MediaPackageVodSpekeKeyProvider {
  /**
   * @schema MediaPackageVodSpekeKeyProvider#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema MediaPackageVodSpekeKeyProvider#SystemIds
   */
  readonly systemIds: string[];

  /**
   * @schema MediaPackageVodSpekeKeyProvider#Url
   */
  readonly url: string;

}

/**
 * @schema MediaPackageVodStreamSelection
 */
export interface MediaPackageVodStreamSelection {
  /**
   * @schema MediaPackageVodStreamSelection#MaxVideoBitsPerSecond
   */
  readonly maxVideoBitsPerSecond?: number;

  /**
   * @schema MediaPackageVodStreamSelection#MinVideoBitsPerSecond
   */
  readonly minVideoBitsPerSecond?: number;

  /**
   * @schema MediaPackageVodStreamSelection#StreamOrder
   */
  readonly streamOrder?: string;

}
