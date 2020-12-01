/**
 * @schema CreateAssetRequest
 */
export interface CreateAssetRequest {
  /**
   * @schema CreateAssetRequest#Id
   */
  readonly id: string;

  /**
   * @schema CreateAssetRequest#PackagingGroupId
   */
  readonly packagingGroupId: string;

  /**
   * @schema CreateAssetRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema CreateAssetRequest#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema CreateAssetRequest#SourceRoleArn
   */
  readonly sourceRoleArn: string;

  /**
   * @schema CreateAssetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateAssetResponse
 */
export interface CreateAssetResponse {
  /**
   * @schema CreateAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateAssetResponse#EgressEndpoints
   */
  readonly egressEndpoints?: EgressEndpoint[];

  /**
   * @schema CreateAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateAssetResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema CreateAssetResponse#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema CreateAssetResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema CreateAssetResponse#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema CreateAssetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreatePackagingConfigurationRequest
 */
export interface CreatePackagingConfigurationRequest {
  /**
   * @schema CreatePackagingConfigurationRequest#CmafPackage
   */
  readonly cmafPackage?: CmafPackage;

  /**
   * @schema CreatePackagingConfigurationRequest#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema CreatePackagingConfigurationRequest#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema CreatePackagingConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema CreatePackagingConfigurationRequest#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema CreatePackagingConfigurationRequest#PackagingGroupId
   */
  readonly packagingGroupId: string;

  /**
   * @schema CreatePackagingConfigurationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreatePackagingConfigurationResponse
 */
export interface CreatePackagingConfigurationResponse {
  /**
   * @schema CreatePackagingConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreatePackagingConfigurationResponse#CmafPackage
   */
  readonly cmafPackage?: CmafPackage;

  /**
   * @schema CreatePackagingConfigurationResponse#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema CreatePackagingConfigurationResponse#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema CreatePackagingConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreatePackagingConfigurationResponse#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema CreatePackagingConfigurationResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema CreatePackagingConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreatePackagingGroupRequest
 */
export interface CreatePackagingGroupRequest {
  /**
   * @schema CreatePackagingGroupRequest#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema CreatePackagingGroupRequest#Id
   */
  readonly id: string;

  /**
   * @schema CreatePackagingGroupRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreatePackagingGroupResponse
 */
export interface CreatePackagingGroupResponse {
  /**
   * @schema CreatePackagingGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreatePackagingGroupResponse#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema CreatePackagingGroupResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CreatePackagingGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreatePackagingGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DeleteAssetRequest
 */
export interface DeleteAssetRequest {
  /**
   * @schema DeleteAssetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteAssetResponse
 */
export interface DeleteAssetResponse {
}

/**
 * @schema DeletePackagingConfigurationRequest
 */
export interface DeletePackagingConfigurationRequest {
  /**
   * @schema DeletePackagingConfigurationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeletePackagingConfigurationResponse
 */
export interface DeletePackagingConfigurationResponse {
}

/**
 * @schema DeletePackagingGroupRequest
 */
export interface DeletePackagingGroupRequest {
  /**
   * @schema DeletePackagingGroupRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeletePackagingGroupResponse
 */
export interface DeletePackagingGroupResponse {
}

/**
 * @schema DescribeAssetRequest
 */
export interface DescribeAssetRequest {
  /**
   * @schema DescribeAssetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeAssetResponse
 */
export interface DescribeAssetResponse {
  /**
   * @schema DescribeAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeAssetResponse#EgressEndpoints
   */
  readonly egressEndpoints?: EgressEndpoint[];

  /**
   * @schema DescribeAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeAssetResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema DescribeAssetResponse#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DescribeAssetResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema DescribeAssetResponse#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema DescribeAssetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribePackagingConfigurationRequest
 */
export interface DescribePackagingConfigurationRequest {
  /**
   * @schema DescribePackagingConfigurationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DescribePackagingConfigurationResponse
 */
export interface DescribePackagingConfigurationResponse {
  /**
   * @schema DescribePackagingConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribePackagingConfigurationResponse#CmafPackage
   */
  readonly cmafPackage?: CmafPackage;

  /**
   * @schema DescribePackagingConfigurationResponse#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema DescribePackagingConfigurationResponse#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema DescribePackagingConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribePackagingConfigurationResponse#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema DescribePackagingConfigurationResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema DescribePackagingConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribePackagingGroupRequest
 */
export interface DescribePackagingGroupRequest {
  /**
   * @schema DescribePackagingGroupRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DescribePackagingGroupResponse
 */
export interface DescribePackagingGroupResponse {
  /**
   * @schema DescribePackagingGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribePackagingGroupResponse#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema DescribePackagingGroupResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema DescribePackagingGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribePackagingGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListAssetsRequest
 */
export interface ListAssetsRequest {
  /**
   * @schema ListAssetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAssetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssetsRequest#PackagingGroupId
   */
  readonly packagingGroupId?: string;

}

/**
 * @schema ListAssetsResponse
 */
export interface ListAssetsResponse {
  /**
   * @schema ListAssetsResponse#Assets
   */
  readonly assets?: AssetShallow[];

  /**
   * @schema ListAssetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackagingConfigurationsRequest
 */
export interface ListPackagingConfigurationsRequest {
  /**
   * @schema ListPackagingConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPackagingConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPackagingConfigurationsRequest#PackagingGroupId
   */
  readonly packagingGroupId?: string;

}

/**
 * @schema ListPackagingConfigurationsResponse
 */
export interface ListPackagingConfigurationsResponse {
  /**
   * @schema ListPackagingConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPackagingConfigurationsResponse#PackagingConfigurations
   */
  readonly packagingConfigurations?: PackagingConfiguration[];

}

/**
 * @schema ListPackagingGroupsRequest
 */
export interface ListPackagingGroupsRequest {
  /**
   * @schema ListPackagingGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPackagingGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackagingGroupsResponse
 */
export interface ListPackagingGroupsResponse {
  /**
   * @schema ListPackagingGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPackagingGroupsResponse#PackagingGroups
   */
  readonly packagingGroups?: PackagingGroup[];

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
 * @schema UpdatePackagingGroupRequest
 */
export interface UpdatePackagingGroupRequest {
  /**
   * @schema UpdatePackagingGroupRequest#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema UpdatePackagingGroupRequest#Id
   */
  readonly id: string;

}

/**
 * @schema UpdatePackagingGroupResponse
 */
export interface UpdatePackagingGroupResponse {
  /**
   * @schema UpdatePackagingGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdatePackagingGroupResponse#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema UpdatePackagingGroupResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema UpdatePackagingGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema UpdatePackagingGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema EgressEndpoint
 */
export interface EgressEndpoint {
  /**
   * @schema EgressEndpoint#PackagingConfigurationId
   */
  readonly packagingConfigurationId?: string;

  /**
   * @schema EgressEndpoint#Url
   */
  readonly url?: string;

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
  readonly hlsManifests: HlsManifest[];

  /**
   * @schema CmafPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

}

/**
 * @schema DashPackage
 */
export interface DashPackage {
  /**
   * @schema DashPackage#DashManifests
   */
  readonly dashManifests: DashManifest[];

  /**
   * @schema DashPackage#Encryption
   */
  readonly encryption?: DashEncryption;

  /**
   * @schema DashPackage#PeriodTriggers
   */
  readonly periodTriggers?: string[];

  /**
   * @schema DashPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema DashPackage#SegmentTemplateFormat
   */
  readonly segmentTemplateFormat?: string;

}

/**
 * @schema HlsPackage
 */
export interface HlsPackage {
  /**
   * @schema HlsPackage#Encryption
   */
  readonly encryption?: HlsEncryption;

  /**
   * @schema HlsPackage#HlsManifests
   */
  readonly hlsManifests: HlsManifest[];

  /**
   * @schema HlsPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

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
   * @schema MssPackage#MssManifests
   */
  readonly mssManifests: MssManifest[];

  /**
   * @schema MssPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

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
 * @schema AssetShallow
 */
export interface AssetShallow {
  /**
   * @schema AssetShallow#Arn
   */
  readonly arn?: string;

  /**
   * @schema AssetShallow#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AssetShallow#Id
   */
  readonly id?: string;

  /**
   * @schema AssetShallow#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema AssetShallow#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema AssetShallow#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema AssetShallow#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema AssetShallow#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PackagingConfiguration
 */
export interface PackagingConfiguration {
  /**
   * @schema PackagingConfiguration#Arn
   */
  readonly arn?: string;

  /**
   * @schema PackagingConfiguration#CmafPackage
   */
  readonly cmafPackage?: CmafPackage;

  /**
   * @schema PackagingConfiguration#DashPackage
   */
  readonly dashPackage?: DashPackage;

  /**
   * @schema PackagingConfiguration#HlsPackage
   */
  readonly hlsPackage?: HlsPackage;

  /**
   * @schema PackagingConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema PackagingConfiguration#MssPackage
   */
  readonly mssPackage?: MssPackage;

  /**
   * @schema PackagingConfiguration#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema PackagingConfiguration#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PackagingGroup
 */
export interface PackagingGroup {
  /**
   * @schema PackagingGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema PackagingGroup#Authorization
   */
  readonly authorization?: Authorization;

  /**
   * @schema PackagingGroup#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema PackagingGroup#Id
   */
  readonly id?: string;

  /**
   * @schema PackagingGroup#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CmafEncryption
 */
export interface CmafEncryption {
  /**
   * @schema CmafEncryption#SpekeKeyProvider
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
   * @schema HlsManifest#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema HlsManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema HlsManifest#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

  /**
   * @schema HlsManifest#RepeatExtXKey
   */
  readonly repeatExtXKey?: boolean;

  /**
   * @schema HlsManifest#StreamSelection
   */
  readonly streamSelection?: StreamSelection;

}

/**
 * @schema DashManifest
 */
export interface DashManifest {
  /**
   * @schema DashManifest#ManifestLayout
   */
  readonly manifestLayout?: string;

  /**
   * @schema DashManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema DashManifest#MinBufferTimeSeconds
   */
  readonly minBufferTimeSeconds?: number;

  /**
   * @schema DashManifest#Profile
   */
  readonly profile?: string;

  /**
   * @schema DashManifest#StreamSelection
   */
  readonly streamSelection?: StreamSelection;

}

/**
 * @schema DashEncryption
 */
export interface DashEncryption {
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
 * @schema MssManifest
 */
export interface MssManifest {
  /**
   * @schema MssManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MssManifest#StreamSelection
   */
  readonly streamSelection?: StreamSelection;

}

/**
 * @schema SpekeKeyProvider
 */
export interface SpekeKeyProvider {
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
