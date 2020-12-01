/**
 * @schema CreateCachePolicyRequest
 */
export interface CreateCachePolicyRequest {
  /**
   * @schema CreateCachePolicyRequest#CachePolicyConfig
   */
  readonly cachePolicyConfig: CachePolicyConfig;

}

/**
 * @schema CreateCachePolicyResult
 */
export interface CreateCachePolicyResult {
  /**
   * @schema CreateCachePolicyResult#CachePolicy
   */
  readonly cachePolicy?: CachePolicy;

  /**
   * @schema CreateCachePolicyResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateCachePolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreateCloudFrontOriginAccessIdentityRequest
 */
export interface CreateCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema CreateCloudFrontOriginAccessIdentityRequest#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;

}

/**
 * @schema CreateCloudFrontOriginAccessIdentityResult
 */
export interface CreateCloudFrontOriginAccessIdentityResult {
  /**
   * @schema CreateCloudFrontOriginAccessIdentityResult#CloudFrontOriginAccessIdentity
   */
  readonly cloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * @schema CreateCloudFrontOriginAccessIdentityResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateCloudFrontOriginAccessIdentityResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreateDistributionRequest
 */
export interface CreateDistributionRequest {
  /**
   * @schema CreateDistributionRequest#DistributionConfig
   */
  readonly distributionConfig: DistributionConfig;

}

/**
 * @schema CreateDistributionResult
 */
export interface CreateDistributionResult {
  /**
   * @schema CreateDistributionResult#Distribution
   */
  readonly distribution?: Distribution;

  /**
   * @schema CreateDistributionResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreateDistributionWithTagsRequest
 */
export interface CreateDistributionWithTagsRequest {
  /**
   * @schema CreateDistributionWithTagsRequest#DistributionConfigWithTags
   */
  readonly distributionConfigWithTags: DistributionConfigWithTags;

}

/**
 * @schema CreateDistributionWithTagsResult
 */
export interface CreateDistributionWithTagsResult {
  /**
   * @schema CreateDistributionWithTagsResult#Distribution
   */
  readonly distribution?: Distribution;

  /**
   * @schema CreateDistributionWithTagsResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateDistributionWithTagsResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreateFieldLevelEncryptionConfigRequest
 */
export interface CreateFieldLevelEncryptionConfigRequest {
  /**
   * @schema CreateFieldLevelEncryptionConfigRequest#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig: FieldLevelEncryptionConfig;

}

/**
 * @schema CreateFieldLevelEncryptionConfigResult
 */
export interface CreateFieldLevelEncryptionConfigResult {
  /**
   * @schema CreateFieldLevelEncryptionConfigResult#FieldLevelEncryption
   */
  readonly fieldLevelEncryption?: FieldLevelEncryption;

  /**
   * @schema CreateFieldLevelEncryptionConfigResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateFieldLevelEncryptionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreateFieldLevelEncryptionProfileRequest
 */
export interface CreateFieldLevelEncryptionProfileRequest {
  /**
   * @schema CreateFieldLevelEncryptionProfileRequest#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;

}

/**
 * @schema CreateFieldLevelEncryptionProfileResult
 */
export interface CreateFieldLevelEncryptionProfileResult {
  /**
   * @schema CreateFieldLevelEncryptionProfileResult#FieldLevelEncryptionProfile
   */
  readonly fieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;

  /**
   * @schema CreateFieldLevelEncryptionProfileResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateFieldLevelEncryptionProfileResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreateInvalidationRequest
 */
export interface CreateInvalidationRequest {
  /**
   * @schema CreateInvalidationRequest#DistributionId
   */
  readonly distributionId: string;

  /**
   * @schema CreateInvalidationRequest#InvalidationBatch
   */
  readonly invalidationBatch: InvalidationBatch;

}

/**
 * @schema CreateInvalidationResult
 */
export interface CreateInvalidationResult {
  /**
   * @schema CreateInvalidationResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateInvalidationResult#Invalidation
   */
  readonly invalidation?: Invalidation;

}

/**
 * @schema CreateKeyGroupRequest
 */
export interface CreateKeyGroupRequest {
  /**
   * @schema CreateKeyGroupRequest#KeyGroupConfig
   */
  readonly keyGroupConfig: KeyGroupConfig;

}

/**
 * @schema CreateKeyGroupResult
 */
export interface CreateKeyGroupResult {
  /**
   * @schema CreateKeyGroupResult#KeyGroup
   */
  readonly keyGroup?: KeyGroup;

  /**
   * @schema CreateKeyGroupResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateKeyGroupResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreateMonitoringSubscriptionRequest
 */
export interface CreateMonitoringSubscriptionRequest {
  /**
   * @schema CreateMonitoringSubscriptionRequest#DistributionId
   */
  readonly distributionId: string;

  /**
   * @schema CreateMonitoringSubscriptionRequest#MonitoringSubscription
   */
  readonly monitoringSubscription: MonitoringSubscription;

}

/**
 * @schema CreateMonitoringSubscriptionResult
 */
export interface CreateMonitoringSubscriptionResult {
  /**
   * @schema CreateMonitoringSubscriptionResult#MonitoringSubscription
   */
  readonly monitoringSubscription?: MonitoringSubscription;

}

/**
 * @schema CreateOriginRequestPolicyRequest
 */
export interface CreateOriginRequestPolicyRequest {
  /**
   * @schema CreateOriginRequestPolicyRequest#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig: OriginRequestPolicyConfig;

}

/**
 * @schema CreateOriginRequestPolicyResult
 */
export interface CreateOriginRequestPolicyResult {
  /**
   * @schema CreateOriginRequestPolicyResult#OriginRequestPolicy
   */
  readonly originRequestPolicy?: OriginRequestPolicy;

  /**
   * @schema CreateOriginRequestPolicyResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateOriginRequestPolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreatePublicKeyRequest
 */
export interface CreatePublicKeyRequest {
  /**
   * @schema CreatePublicKeyRequest#PublicKeyConfig
   */
  readonly publicKeyConfig: PublicKeyConfig;

}

/**
 * @schema CreatePublicKeyResult
 */
export interface CreatePublicKeyResult {
  /**
   * @schema CreatePublicKeyResult#PublicKey
   */
  readonly publicKey?: PublicKey;

  /**
   * @schema CreatePublicKeyResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreatePublicKeyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreateRealtimeLogConfigRequest
 */
export interface CreateRealtimeLogConfigRequest {
  /**
   * @schema CreateRealtimeLogConfigRequest#EndPoints
   */
  readonly endPoints: EndPoint[];

  /**
   * @schema CreateRealtimeLogConfigRequest#Fields
   */
  readonly fields: string[];

  /**
   * @schema CreateRealtimeLogConfigRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRealtimeLogConfigRequest#SamplingRate
   */
  readonly samplingRate: number;

}

/**
 * @schema CreateRealtimeLogConfigResult
 */
export interface CreateRealtimeLogConfigResult {
  /**
   * @schema CreateRealtimeLogConfigResult#RealtimeLogConfig
   */
  readonly realtimeLogConfig?: RealtimeLogConfig;

}

/**
 * @schema CreateStreamingDistributionRequest
 */
export interface CreateStreamingDistributionRequest {
  /**
   * @schema CreateStreamingDistributionRequest#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig: StreamingDistributionConfig;

}

/**
 * @schema CreateStreamingDistributionResult
 */
export interface CreateStreamingDistributionResult {
  /**
   * @schema CreateStreamingDistributionResult#StreamingDistribution
   */
  readonly streamingDistribution?: StreamingDistribution;

  /**
   * @schema CreateStreamingDistributionResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateStreamingDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CreateStreamingDistributionWithTagsRequest
 */
export interface CreateStreamingDistributionWithTagsRequest {
  /**
   * @schema CreateStreamingDistributionWithTagsRequest#StreamingDistributionConfigWithTags
   */
  readonly streamingDistributionConfigWithTags: StreamingDistributionConfigWithTags;

}

/**
 * @schema CreateStreamingDistributionWithTagsResult
 */
export interface CreateStreamingDistributionWithTagsResult {
  /**
   * @schema CreateStreamingDistributionWithTagsResult#StreamingDistribution
   */
  readonly streamingDistribution?: StreamingDistribution;

  /**
   * @schema CreateStreamingDistributionWithTagsResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateStreamingDistributionWithTagsResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema DeleteCachePolicyRequest
 */
export interface DeleteCachePolicyRequest {
  /**
   * @schema DeleteCachePolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteCachePolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema DeleteCloudFrontOriginAccessIdentityRequest
 */
export interface DeleteCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema DeleteCloudFrontOriginAccessIdentityRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteCloudFrontOriginAccessIdentityRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema DeleteDistributionRequest
 */
export interface DeleteDistributionRequest {
  /**
   * @schema DeleteDistributionRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema DeleteFieldLevelEncryptionConfigRequest
 */
export interface DeleteFieldLevelEncryptionConfigRequest {
  /**
   * @schema DeleteFieldLevelEncryptionConfigRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteFieldLevelEncryptionConfigRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema DeleteFieldLevelEncryptionProfileRequest
 */
export interface DeleteFieldLevelEncryptionProfileRequest {
  /**
   * @schema DeleteFieldLevelEncryptionProfileRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteFieldLevelEncryptionProfileRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema DeleteKeyGroupRequest
 */
export interface DeleteKeyGroupRequest {
  /**
   * @schema DeleteKeyGroupRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteKeyGroupRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema DeleteMonitoringSubscriptionRequest
 */
export interface DeleteMonitoringSubscriptionRequest {
  /**
   * @schema DeleteMonitoringSubscriptionRequest#DistributionId
   */
  readonly distributionId: string;

}

/**
 * @schema DeleteMonitoringSubscriptionResult
 */
export interface DeleteMonitoringSubscriptionResult {
}

/**
 * @schema DeleteOriginRequestPolicyRequest
 */
export interface DeleteOriginRequestPolicyRequest {
  /**
   * @schema DeleteOriginRequestPolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteOriginRequestPolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema DeletePublicKeyRequest
 */
export interface DeletePublicKeyRequest {
  /**
   * @schema DeletePublicKeyRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeletePublicKeyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema DeleteRealtimeLogConfigRequest
 */
export interface DeleteRealtimeLogConfigRequest {
  /**
   * @schema DeleteRealtimeLogConfigRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DeleteRealtimeLogConfigRequest#ARN
   */
  readonly arn?: string;

}

/**
 * @schema DeleteStreamingDistributionRequest
 */
export interface DeleteStreamingDistributionRequest {
  /**
   * @schema DeleteStreamingDistributionRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteStreamingDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema GetCachePolicyRequest
 */
export interface GetCachePolicyRequest {
  /**
   * @schema GetCachePolicyRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetCachePolicyResult
 */
export interface GetCachePolicyResult {
  /**
   * @schema GetCachePolicyResult#CachePolicy
   */
  readonly cachePolicy?: CachePolicy;

  /**
   * @schema GetCachePolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetCachePolicyConfigRequest
 */
export interface GetCachePolicyConfigRequest {
  /**
   * @schema GetCachePolicyConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetCachePolicyConfigResult
 */
export interface GetCachePolicyConfigResult {
  /**
   * @schema GetCachePolicyConfigResult#CachePolicyConfig
   */
  readonly cachePolicyConfig?: CachePolicyConfig;

  /**
   * @schema GetCachePolicyConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetCloudFrontOriginAccessIdentityRequest
 */
export interface GetCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema GetCloudFrontOriginAccessIdentityRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetCloudFrontOriginAccessIdentityResult
 */
export interface GetCloudFrontOriginAccessIdentityResult {
  /**
   * @schema GetCloudFrontOriginAccessIdentityResult#CloudFrontOriginAccessIdentity
   */
  readonly cloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * @schema GetCloudFrontOriginAccessIdentityResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetCloudFrontOriginAccessIdentityConfigRequest
 */
export interface GetCloudFrontOriginAccessIdentityConfigRequest {
  /**
   * @schema GetCloudFrontOriginAccessIdentityConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetCloudFrontOriginAccessIdentityConfigResult
 */
export interface GetCloudFrontOriginAccessIdentityConfigResult {
  /**
   * @schema GetCloudFrontOriginAccessIdentityConfigResult#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;

  /**
   * @schema GetCloudFrontOriginAccessIdentityConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetDistributionRequest
 */
export interface GetDistributionRequest {
  /**
   * @schema GetDistributionRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetDistributionResult
 */
export interface GetDistributionResult {
  /**
   * @schema GetDistributionResult#Distribution
   */
  readonly distribution?: Distribution;

  /**
   * @schema GetDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetDistributionConfigRequest
 */
export interface GetDistributionConfigRequest {
  /**
   * @schema GetDistributionConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetDistributionConfigResult
 */
export interface GetDistributionConfigResult {
  /**
   * @schema GetDistributionConfigResult#DistributionConfig
   */
  readonly distributionConfig?: DistributionConfig;

  /**
   * @schema GetDistributionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetFieldLevelEncryptionRequest
 */
export interface GetFieldLevelEncryptionRequest {
  /**
   * @schema GetFieldLevelEncryptionRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetFieldLevelEncryptionResult
 */
export interface GetFieldLevelEncryptionResult {
  /**
   * @schema GetFieldLevelEncryptionResult#FieldLevelEncryption
   */
  readonly fieldLevelEncryption?: FieldLevelEncryption;

  /**
   * @schema GetFieldLevelEncryptionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetFieldLevelEncryptionConfigRequest
 */
export interface GetFieldLevelEncryptionConfigRequest {
  /**
   * @schema GetFieldLevelEncryptionConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetFieldLevelEncryptionConfigResult
 */
export interface GetFieldLevelEncryptionConfigResult {
  /**
   * @schema GetFieldLevelEncryptionConfigResult#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig?: FieldLevelEncryptionConfig;

  /**
   * @schema GetFieldLevelEncryptionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetFieldLevelEncryptionProfileRequest
 */
export interface GetFieldLevelEncryptionProfileRequest {
  /**
   * @schema GetFieldLevelEncryptionProfileRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetFieldLevelEncryptionProfileResult
 */
export interface GetFieldLevelEncryptionProfileResult {
  /**
   * @schema GetFieldLevelEncryptionProfileResult#FieldLevelEncryptionProfile
   */
  readonly fieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;

  /**
   * @schema GetFieldLevelEncryptionProfileResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetFieldLevelEncryptionProfileConfigRequest
 */
export interface GetFieldLevelEncryptionProfileConfigRequest {
  /**
   * @schema GetFieldLevelEncryptionProfileConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetFieldLevelEncryptionProfileConfigResult
 */
export interface GetFieldLevelEncryptionProfileConfigResult {
  /**
   * @schema GetFieldLevelEncryptionProfileConfigResult#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig;

  /**
   * @schema GetFieldLevelEncryptionProfileConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetInvalidationRequest
 */
export interface GetInvalidationRequest {
  /**
   * @schema GetInvalidationRequest#DistributionId
   */
  readonly distributionId: string;

  /**
   * @schema GetInvalidationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetInvalidationResult
 */
export interface GetInvalidationResult {
  /**
   * @schema GetInvalidationResult#Invalidation
   */
  readonly invalidation?: Invalidation;

}

/**
 * @schema GetKeyGroupRequest
 */
export interface GetKeyGroupRequest {
  /**
   * @schema GetKeyGroupRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetKeyGroupResult
 */
export interface GetKeyGroupResult {
  /**
   * @schema GetKeyGroupResult#KeyGroup
   */
  readonly keyGroup?: KeyGroup;

  /**
   * @schema GetKeyGroupResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetKeyGroupConfigRequest
 */
export interface GetKeyGroupConfigRequest {
  /**
   * @schema GetKeyGroupConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetKeyGroupConfigResult
 */
export interface GetKeyGroupConfigResult {
  /**
   * @schema GetKeyGroupConfigResult#KeyGroupConfig
   */
  readonly keyGroupConfig?: KeyGroupConfig;

  /**
   * @schema GetKeyGroupConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetMonitoringSubscriptionRequest
 */
export interface GetMonitoringSubscriptionRequest {
  /**
   * @schema GetMonitoringSubscriptionRequest#DistributionId
   */
  readonly distributionId: string;

}

/**
 * @schema GetMonitoringSubscriptionResult
 */
export interface GetMonitoringSubscriptionResult {
  /**
   * @schema GetMonitoringSubscriptionResult#MonitoringSubscription
   */
  readonly monitoringSubscription?: MonitoringSubscription;

}

/**
 * @schema GetOriginRequestPolicyRequest
 */
export interface GetOriginRequestPolicyRequest {
  /**
   * @schema GetOriginRequestPolicyRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetOriginRequestPolicyResult
 */
export interface GetOriginRequestPolicyResult {
  /**
   * @schema GetOriginRequestPolicyResult#OriginRequestPolicy
   */
  readonly originRequestPolicy?: OriginRequestPolicy;

  /**
   * @schema GetOriginRequestPolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetOriginRequestPolicyConfigRequest
 */
export interface GetOriginRequestPolicyConfigRequest {
  /**
   * @schema GetOriginRequestPolicyConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetOriginRequestPolicyConfigResult
 */
export interface GetOriginRequestPolicyConfigResult {
  /**
   * @schema GetOriginRequestPolicyConfigResult#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig?: OriginRequestPolicyConfig;

  /**
   * @schema GetOriginRequestPolicyConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetPublicKeyRequest
 */
export interface GetPublicKeyRequest {
  /**
   * @schema GetPublicKeyRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetPublicKeyResult
 */
export interface GetPublicKeyResult {
  /**
   * @schema GetPublicKeyResult#PublicKey
   */
  readonly publicKey?: PublicKey;

  /**
   * @schema GetPublicKeyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetPublicKeyConfigRequest
 */
export interface GetPublicKeyConfigRequest {
  /**
   * @schema GetPublicKeyConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetPublicKeyConfigResult
 */
export interface GetPublicKeyConfigResult {
  /**
   * @schema GetPublicKeyConfigResult#PublicKeyConfig
   */
  readonly publicKeyConfig?: PublicKeyConfig;

  /**
   * @schema GetPublicKeyConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetRealtimeLogConfigRequest
 */
export interface GetRealtimeLogConfigRequest {
  /**
   * @schema GetRealtimeLogConfigRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GetRealtimeLogConfigRequest#ARN
   */
  readonly arn?: string;

}

/**
 * @schema GetRealtimeLogConfigResult
 */
export interface GetRealtimeLogConfigResult {
  /**
   * @schema GetRealtimeLogConfigResult#RealtimeLogConfig
   */
  readonly realtimeLogConfig?: RealtimeLogConfig;

}

/**
 * @schema GetStreamingDistributionRequest
 */
export interface GetStreamingDistributionRequest {
  /**
   * @schema GetStreamingDistributionRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetStreamingDistributionResult
 */
export interface GetStreamingDistributionResult {
  /**
   * @schema GetStreamingDistributionResult#StreamingDistribution
   */
  readonly streamingDistribution?: StreamingDistribution;

  /**
   * @schema GetStreamingDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema GetStreamingDistributionConfigRequest
 */
export interface GetStreamingDistributionConfigRequest {
  /**
   * @schema GetStreamingDistributionConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetStreamingDistributionConfigResult
 */
export interface GetStreamingDistributionConfigResult {
  /**
   * @schema GetStreamingDistributionConfigResult#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig?: StreamingDistributionConfig;

  /**
   * @schema GetStreamingDistributionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema ListCachePoliciesRequest
 */
export interface ListCachePoliciesRequest {
  /**
   * @schema ListCachePoliciesRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ListCachePoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListCachePoliciesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListCachePoliciesResult
 */
export interface ListCachePoliciesResult {
  /**
   * @schema ListCachePoliciesResult#CachePolicyList
   */
  readonly cachePolicyList?: CachePolicyList;

}

/**
 * @schema ListCloudFrontOriginAccessIdentitiesRequest
 */
export interface ListCloudFrontOriginAccessIdentitiesRequest {
  /**
   * @schema ListCloudFrontOriginAccessIdentitiesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListCloudFrontOriginAccessIdentitiesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListCloudFrontOriginAccessIdentitiesResult
 */
export interface ListCloudFrontOriginAccessIdentitiesResult {
  /**
   * @schema ListCloudFrontOriginAccessIdentitiesResult#CloudFrontOriginAccessIdentityList
   */
  readonly cloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;

}

/**
 * @schema ListDistributionsRequest
 */
export interface ListDistributionsRequest {
  /**
   * @schema ListDistributionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListDistributionsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListDistributionsResult
 */
export interface ListDistributionsResult {
  /**
   * @schema ListDistributionsResult#DistributionList
   */
  readonly distributionList?: DistributionList;

}

/**
 * @schema ListDistributionsByCachePolicyIdRequest
 */
export interface ListDistributionsByCachePolicyIdRequest {
  /**
   * @schema ListDistributionsByCachePolicyIdRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListDistributionsByCachePolicyIdRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema ListDistributionsByCachePolicyIdRequest#CachePolicyId
   */
  readonly cachePolicyId: string;

}

/**
 * @schema ListDistributionsByCachePolicyIdResult
 */
export interface ListDistributionsByCachePolicyIdResult {
  /**
   * @schema ListDistributionsByCachePolicyIdResult#DistributionIdList
   */
  readonly distributionIdList?: DistributionIdList;

}

/**
 * @schema ListDistributionsByKeyGroupRequest
 */
export interface ListDistributionsByKeyGroupRequest {
  /**
   * @schema ListDistributionsByKeyGroupRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListDistributionsByKeyGroupRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema ListDistributionsByKeyGroupRequest#KeyGroupId
   */
  readonly keyGroupId: string;

}

/**
 * @schema ListDistributionsByKeyGroupResult
 */
export interface ListDistributionsByKeyGroupResult {
  /**
   * @schema ListDistributionsByKeyGroupResult#DistributionIdList
   */
  readonly distributionIdList?: DistributionIdList;

}

/**
 * @schema ListDistributionsByOriginRequestPolicyIdRequest
 */
export interface ListDistributionsByOriginRequestPolicyIdRequest {
  /**
   * @schema ListDistributionsByOriginRequestPolicyIdRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListDistributionsByOriginRequestPolicyIdRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema ListDistributionsByOriginRequestPolicyIdRequest#OriginRequestPolicyId
   */
  readonly originRequestPolicyId: string;

}

/**
 * @schema ListDistributionsByOriginRequestPolicyIdResult
 */
export interface ListDistributionsByOriginRequestPolicyIdResult {
  /**
   * @schema ListDistributionsByOriginRequestPolicyIdResult#DistributionIdList
   */
  readonly distributionIdList?: DistributionIdList;

}

/**
 * @schema ListDistributionsByRealtimeLogConfigRequest
 */
export interface ListDistributionsByRealtimeLogConfigRequest {
  /**
   * @schema ListDistributionsByRealtimeLogConfigRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListDistributionsByRealtimeLogConfigRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema ListDistributionsByRealtimeLogConfigRequest#RealtimeLogConfigName
   */
  readonly realtimeLogConfigName?: string;

  /**
   * @schema ListDistributionsByRealtimeLogConfigRequest#RealtimeLogConfigArn
   */
  readonly realtimeLogConfigArn?: string;

}

/**
 * @schema ListDistributionsByRealtimeLogConfigResult
 */
export interface ListDistributionsByRealtimeLogConfigResult {
  /**
   * @schema ListDistributionsByRealtimeLogConfigResult#DistributionList
   */
  readonly distributionList?: DistributionList;

}

/**
 * @schema ListDistributionsByWebAclIdRequest
 */
export interface ListDistributionsByWebAclIdRequest {
  /**
   * @schema ListDistributionsByWebAclIdRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListDistributionsByWebAclIdRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema ListDistributionsByWebAclIdRequest#WebACLId
   */
  readonly webAclId: string;

}

/**
 * @schema ListDistributionsByWebAclIdResult
 */
export interface ListDistributionsByWebAclIdResult {
  /**
   * @schema ListDistributionsByWebAclIdResult#DistributionList
   */
  readonly distributionList?: DistributionList;

}

/**
 * @schema ListFieldLevelEncryptionConfigsRequest
 */
export interface ListFieldLevelEncryptionConfigsRequest {
  /**
   * @schema ListFieldLevelEncryptionConfigsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListFieldLevelEncryptionConfigsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListFieldLevelEncryptionConfigsResult
 */
export interface ListFieldLevelEncryptionConfigsResult {
  /**
   * @schema ListFieldLevelEncryptionConfigsResult#FieldLevelEncryptionList
   */
  readonly fieldLevelEncryptionList?: FieldLevelEncryptionList;

}

/**
 * @schema ListFieldLevelEncryptionProfilesRequest
 */
export interface ListFieldLevelEncryptionProfilesRequest {
  /**
   * @schema ListFieldLevelEncryptionProfilesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListFieldLevelEncryptionProfilesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListFieldLevelEncryptionProfilesResult
 */
export interface ListFieldLevelEncryptionProfilesResult {
  /**
   * @schema ListFieldLevelEncryptionProfilesResult#FieldLevelEncryptionProfileList
   */
  readonly fieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList;

}

/**
 * @schema ListInvalidationsRequest
 */
export interface ListInvalidationsRequest {
  /**
   * @schema ListInvalidationsRequest#DistributionId
   */
  readonly distributionId: string;

  /**
   * @schema ListInvalidationsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListInvalidationsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListInvalidationsResult
 */
export interface ListInvalidationsResult {
  /**
   * @schema ListInvalidationsResult#InvalidationList
   */
  readonly invalidationList?: InvalidationList;

}

/**
 * @schema ListKeyGroupsRequest
 */
export interface ListKeyGroupsRequest {
  /**
   * @schema ListKeyGroupsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListKeyGroupsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListKeyGroupsResult
 */
export interface ListKeyGroupsResult {
  /**
   * @schema ListKeyGroupsResult#KeyGroupList
   */
  readonly keyGroupList?: KeyGroupList;

}

/**
 * @schema ListOriginRequestPoliciesRequest
 */
export interface ListOriginRequestPoliciesRequest {
  /**
   * @schema ListOriginRequestPoliciesRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ListOriginRequestPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListOriginRequestPoliciesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListOriginRequestPoliciesResult
 */
export interface ListOriginRequestPoliciesResult {
  /**
   * @schema ListOriginRequestPoliciesResult#OriginRequestPolicyList
   */
  readonly originRequestPolicyList?: OriginRequestPolicyList;

}

/**
 * @schema ListPublicKeysRequest
 */
export interface ListPublicKeysRequest {
  /**
   * @schema ListPublicKeysRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListPublicKeysRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListPublicKeysResult
 */
export interface ListPublicKeysResult {
  /**
   * @schema ListPublicKeysResult#PublicKeyList
   */
  readonly publicKeyList?: PublicKeyList;

}

/**
 * @schema ListRealtimeLogConfigsRequest
 */
export interface ListRealtimeLogConfigsRequest {
  /**
   * @schema ListRealtimeLogConfigsRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema ListRealtimeLogConfigsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListRealtimeLogConfigsResult
 */
export interface ListRealtimeLogConfigsResult {
  /**
   * @schema ListRealtimeLogConfigsResult#RealtimeLogConfigs
   */
  readonly realtimeLogConfigs?: RealtimeLogConfigs;

}

/**
 * @schema ListStreamingDistributionsRequest
 */
export interface ListStreamingDistributionsRequest {
  /**
   * @schema ListStreamingDistributionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListStreamingDistributionsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListStreamingDistributionsResult
 */
export interface ListStreamingDistributionsResult {
  /**
   * @schema ListStreamingDistributionsResult#StreamingDistributionList
   */
  readonly streamingDistributionList?: StreamingDistributionList;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#Resource
   */
  readonly resource: string;

}

/**
 * @schema ListTagsForResourceResult
 */
export interface ListTagsForResourceResult {
  /**
   * @schema ListTagsForResourceResult#Tags
   */
  readonly tags: Tags;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tags;

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: TagKeys;

}

/**
 * @schema UpdateCachePolicyRequest
 */
export interface UpdateCachePolicyRequest {
  /**
   * @schema UpdateCachePolicyRequest#CachePolicyConfig
   */
  readonly cachePolicyConfig: CachePolicyConfig;

  /**
   * @schema UpdateCachePolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateCachePolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema UpdateCachePolicyResult
 */
export interface UpdateCachePolicyResult {
  /**
   * @schema UpdateCachePolicyResult#CachePolicy
   */
  readonly cachePolicy?: CachePolicy;

  /**
   * @schema UpdateCachePolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema UpdateCloudFrontOriginAccessIdentityRequest
 */
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema UpdateCloudFrontOriginAccessIdentityRequest#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;

  /**
   * @schema UpdateCloudFrontOriginAccessIdentityRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateCloudFrontOriginAccessIdentityRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema UpdateCloudFrontOriginAccessIdentityResult
 */
export interface UpdateCloudFrontOriginAccessIdentityResult {
  /**
   * @schema UpdateCloudFrontOriginAccessIdentityResult#CloudFrontOriginAccessIdentity
   */
  readonly cloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * @schema UpdateCloudFrontOriginAccessIdentityResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema UpdateDistributionRequest
 */
export interface UpdateDistributionRequest {
  /**
   * @schema UpdateDistributionRequest#DistributionConfig
   */
  readonly distributionConfig: DistributionConfig;

  /**
   * @schema UpdateDistributionRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema UpdateDistributionResult
 */
export interface UpdateDistributionResult {
  /**
   * @schema UpdateDistributionResult#Distribution
   */
  readonly distribution?: Distribution;

  /**
   * @schema UpdateDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema UpdateFieldLevelEncryptionConfigRequest
 */
export interface UpdateFieldLevelEncryptionConfigRequest {
  /**
   * @schema UpdateFieldLevelEncryptionConfigRequest#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig: FieldLevelEncryptionConfig;

  /**
   * @schema UpdateFieldLevelEncryptionConfigRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateFieldLevelEncryptionConfigRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema UpdateFieldLevelEncryptionConfigResult
 */
export interface UpdateFieldLevelEncryptionConfigResult {
  /**
   * @schema UpdateFieldLevelEncryptionConfigResult#FieldLevelEncryption
   */
  readonly fieldLevelEncryption?: FieldLevelEncryption;

  /**
   * @schema UpdateFieldLevelEncryptionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema UpdateFieldLevelEncryptionProfileRequest
 */
export interface UpdateFieldLevelEncryptionProfileRequest {
  /**
   * @schema UpdateFieldLevelEncryptionProfileRequest#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;

  /**
   * @schema UpdateFieldLevelEncryptionProfileRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateFieldLevelEncryptionProfileRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema UpdateFieldLevelEncryptionProfileResult
 */
export interface UpdateFieldLevelEncryptionProfileResult {
  /**
   * @schema UpdateFieldLevelEncryptionProfileResult#FieldLevelEncryptionProfile
   */
  readonly fieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;

  /**
   * @schema UpdateFieldLevelEncryptionProfileResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema UpdateKeyGroupRequest
 */
export interface UpdateKeyGroupRequest {
  /**
   * @schema UpdateKeyGroupRequest#KeyGroupConfig
   */
  readonly keyGroupConfig: KeyGroupConfig;

  /**
   * @schema UpdateKeyGroupRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateKeyGroupRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema UpdateKeyGroupResult
 */
export interface UpdateKeyGroupResult {
  /**
   * @schema UpdateKeyGroupResult#KeyGroup
   */
  readonly keyGroup?: KeyGroup;

  /**
   * @schema UpdateKeyGroupResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema UpdateOriginRequestPolicyRequest
 */
export interface UpdateOriginRequestPolicyRequest {
  /**
   * @schema UpdateOriginRequestPolicyRequest#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig: OriginRequestPolicyConfig;

  /**
   * @schema UpdateOriginRequestPolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateOriginRequestPolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema UpdateOriginRequestPolicyResult
 */
export interface UpdateOriginRequestPolicyResult {
  /**
   * @schema UpdateOriginRequestPolicyResult#OriginRequestPolicy
   */
  readonly originRequestPolicy?: OriginRequestPolicy;

  /**
   * @schema UpdateOriginRequestPolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema UpdatePublicKeyRequest
 */
export interface UpdatePublicKeyRequest {
  /**
   * @schema UpdatePublicKeyRequest#PublicKeyConfig
   */
  readonly publicKeyConfig: PublicKeyConfig;

  /**
   * @schema UpdatePublicKeyRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdatePublicKeyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema UpdatePublicKeyResult
 */
export interface UpdatePublicKeyResult {
  /**
   * @schema UpdatePublicKeyResult#PublicKey
   */
  readonly publicKey?: PublicKey;

  /**
   * @schema UpdatePublicKeyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema UpdateRealtimeLogConfigRequest
 */
export interface UpdateRealtimeLogConfigRequest {
  /**
   * @schema UpdateRealtimeLogConfigRequest#EndPoints
   */
  readonly endPoints?: EndPoint[];

  /**
   * @schema UpdateRealtimeLogConfigRequest#Fields
   */
  readonly fields?: string[];

  /**
   * @schema UpdateRealtimeLogConfigRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateRealtimeLogConfigRequest#ARN
   */
  readonly arn?: string;

  /**
   * @schema UpdateRealtimeLogConfigRequest#SamplingRate
   */
  readonly samplingRate?: number;

}

/**
 * @schema UpdateRealtimeLogConfigResult
 */
export interface UpdateRealtimeLogConfigResult {
  /**
   * @schema UpdateRealtimeLogConfigResult#RealtimeLogConfig
   */
  readonly realtimeLogConfig?: RealtimeLogConfig;

}

/**
 * @schema UpdateStreamingDistributionRequest
 */
export interface UpdateStreamingDistributionRequest {
  /**
   * @schema UpdateStreamingDistributionRequest#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig: StreamingDistributionConfig;

  /**
   * @schema UpdateStreamingDistributionRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateStreamingDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema UpdateStreamingDistributionResult
 */
export interface UpdateStreamingDistributionResult {
  /**
   * @schema UpdateStreamingDistributionResult#StreamingDistribution
   */
  readonly streamingDistribution?: StreamingDistribution;

  /**
   * @schema UpdateStreamingDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CachePolicyConfig
 */
export interface CachePolicyConfig {
  /**
   * @schema CachePolicyConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema CachePolicyConfig#Name
   */
  readonly name: string;

  /**
   * @schema CachePolicyConfig#DefaultTTL
   */
  readonly defaultTtl?: number;

  /**
   * @schema CachePolicyConfig#MaxTTL
   */
  readonly maxTtl?: number;

  /**
   * @schema CachePolicyConfig#MinTTL
   */
  readonly minTtl: number;

  /**
   * @schema CachePolicyConfig#ParametersInCacheKeyAndForwardedToOrigin
   */
  readonly parametersInCacheKeyAndForwardedToOrigin?: ParametersInCacheKeyAndForwardedToOrigin;

}

/**
 * @schema CachePolicy
 */
export interface CachePolicy {
  /**
   * @schema CachePolicy#Id
   */
  readonly id: string;

  /**
   * @schema CachePolicy#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CachePolicy#CachePolicyConfig
   */
  readonly cachePolicyConfig: CachePolicyConfig;

}

/**
 * @schema CloudFrontOriginAccessIdentityConfig
 */
export interface CloudFrontOriginAccessIdentityConfig {
  /**
   * @schema CloudFrontOriginAccessIdentityConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CloudFrontOriginAccessIdentityConfig#Comment
   */
  readonly comment: string;

}

/**
 * @schema CloudFrontOriginAccessIdentity
 */
export interface CloudFrontOriginAccessIdentity {
  /**
   * @schema CloudFrontOriginAccessIdentity#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontOriginAccessIdentity#S3CanonicalUserId
   */
  readonly s3CanonicalUserId: string;

  /**
   * @schema CloudFrontOriginAccessIdentity#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;

}

/**
 * @schema DistributionConfig
 */
export interface DistributionConfig {
  /**
   * @schema DistributionConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema DistributionConfig#Aliases
   */
  readonly aliases?: Aliases;

  /**
   * @schema DistributionConfig#DefaultRootObject
   */
  readonly defaultRootObject?: string;

  /**
   * @schema DistributionConfig#Origins
   */
  readonly origins: Origins;

  /**
   * @schema DistributionConfig#OriginGroups
   */
  readonly originGroups?: OriginGroups;

  /**
   * @schema DistributionConfig#DefaultCacheBehavior
   */
  readonly defaultCacheBehavior: DefaultCacheBehavior;

  /**
   * @schema DistributionConfig#CacheBehaviors
   */
  readonly cacheBehaviors?: CacheBehaviors;

  /**
   * @schema DistributionConfig#CustomErrorResponses
   */
  readonly customErrorResponses?: CustomErrorResponses;

  /**
   * @schema DistributionConfig#Comment
   */
  readonly comment: string;

  /**
   * @schema DistributionConfig#Logging
   */
  readonly logging?: LoggingConfig;

  /**
   * @schema DistributionConfig#PriceClass
   */
  readonly priceClass?: string;

  /**
   * @schema DistributionConfig#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema DistributionConfig#ViewerCertificate
   */
  readonly viewerCertificate?: ViewerCertificate;

  /**
   * @schema DistributionConfig#Restrictions
   */
  readonly restrictions?: Restrictions;

  /**
   * @schema DistributionConfig#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema DistributionConfig#HttpVersion
   */
  readonly httpVersion?: string;

  /**
   * @schema DistributionConfig#IsIPV6Enabled
   */
  readonly isIpv6Enabled?: boolean;

}

/**
 * @schema Distribution
 */
export interface Distribution {
  /**
   * @schema Distribution#Id
   */
  readonly id: string;

  /**
   * @schema Distribution#ARN
   */
  readonly arn: string;

  /**
   * @schema Distribution#Status
   */
  readonly status: string;

  /**
   * @schema Distribution#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema Distribution#InProgressInvalidationBatches
   */
  readonly inProgressInvalidationBatches: number;

  /**
   * @schema Distribution#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Distribution#ActiveTrustedSigners
   */
  readonly activeTrustedSigners?: ActiveTrustedSigners;

  /**
   * @schema Distribution#ActiveTrustedKeyGroups
   */
  readonly activeTrustedKeyGroups?: ActiveTrustedKeyGroups;

  /**
   * @schema Distribution#DistributionConfig
   */
  readonly distributionConfig: DistributionConfig;

  /**
   * @schema Distribution#AliasICPRecordals
   */
  readonly aliasIcpRecordals?: AliasIcpRecordal[];

}

/**
 * @schema DistributionConfigWithTags
 */
export interface DistributionConfigWithTags {
  /**
   * @schema DistributionConfigWithTags#DistributionConfig
   */
  readonly distributionConfig: DistributionConfig;

  /**
   * @schema DistributionConfigWithTags#Tags
   */
  readonly tags: Tags;

}

/**
 * @schema FieldLevelEncryptionConfig
 */
export interface FieldLevelEncryptionConfig {
  /**
   * @schema FieldLevelEncryptionConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema FieldLevelEncryptionConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema FieldLevelEncryptionConfig#QueryArgProfileConfig
   */
  readonly queryArgProfileConfig?: QueryArgProfileConfig;

  /**
   * @schema FieldLevelEncryptionConfig#ContentTypeProfileConfig
   */
  readonly contentTypeProfileConfig?: ContentTypeProfileConfig;

}

/**
 * @schema FieldLevelEncryption
 */
export interface FieldLevelEncryption {
  /**
   * @schema FieldLevelEncryption#Id
   */
  readonly id: string;

  /**
   * @schema FieldLevelEncryption#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema FieldLevelEncryption#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig: FieldLevelEncryptionConfig;

}

/**
 * @schema FieldLevelEncryptionProfileConfig
 */
export interface FieldLevelEncryptionProfileConfig {
  /**
   * @schema FieldLevelEncryptionProfileConfig#Name
   */
  readonly name: string;

  /**
   * @schema FieldLevelEncryptionProfileConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema FieldLevelEncryptionProfileConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema FieldLevelEncryptionProfileConfig#EncryptionEntities
   */
  readonly encryptionEntities: EncryptionEntities;

}

/**
 * @schema FieldLevelEncryptionProfile
 */
export interface FieldLevelEncryptionProfile {
  /**
   * @schema FieldLevelEncryptionProfile#Id
   */
  readonly id: string;

  /**
   * @schema FieldLevelEncryptionProfile#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema FieldLevelEncryptionProfile#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;

}

/**
 * @schema InvalidationBatch
 */
export interface InvalidationBatch {
  /**
   * @schema InvalidationBatch#Paths
   */
  readonly paths: Paths;

  /**
   * @schema InvalidationBatch#CallerReference
   */
  readonly callerReference: string;

}

/**
 * @schema Invalidation
 */
export interface Invalidation {
  /**
   * @schema Invalidation#Id
   */
  readonly id: string;

  /**
   * @schema Invalidation#Status
   */
  readonly status: string;

  /**
   * @schema Invalidation#CreateTime
   */
  readonly createTime: string;

  /**
   * @schema Invalidation#InvalidationBatch
   */
  readonly invalidationBatch: InvalidationBatch;

}

/**
 * @schema KeyGroupConfig
 */
export interface KeyGroupConfig {
  /**
   * @schema KeyGroupConfig#Name
   */
  readonly name: string;

  /**
   * @schema KeyGroupConfig#Items
   */
  readonly items: string[];

  /**
   * @schema KeyGroupConfig#Comment
   */
  readonly comment?: string;

}

/**
 * @schema KeyGroup
 */
export interface KeyGroup {
  /**
   * @schema KeyGroup#Id
   */
  readonly id: string;

  /**
   * @schema KeyGroup#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema KeyGroup#KeyGroupConfig
   */
  readonly keyGroupConfig: KeyGroupConfig;

}

/**
 * @schema MonitoringSubscription
 */
export interface MonitoringSubscription {
  /**
   * @schema MonitoringSubscription#RealtimeMetricsSubscriptionConfig
   */
  readonly realtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;

}

/**
 * @schema OriginRequestPolicyConfig
 */
export interface OriginRequestPolicyConfig {
  /**
   * @schema OriginRequestPolicyConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema OriginRequestPolicyConfig#Name
   */
  readonly name: string;

  /**
   * @schema OriginRequestPolicyConfig#HeadersConfig
   */
  readonly headersConfig: OriginRequestPolicyHeadersConfig;

  /**
   * @schema OriginRequestPolicyConfig#CookiesConfig
   */
  readonly cookiesConfig: OriginRequestPolicyCookiesConfig;

  /**
   * @schema OriginRequestPolicyConfig#QueryStringsConfig
   */
  readonly queryStringsConfig: OriginRequestPolicyQueryStringsConfig;

}

/**
 * @schema OriginRequestPolicy
 */
export interface OriginRequestPolicy {
  /**
   * @schema OriginRequestPolicy#Id
   */
  readonly id: string;

  /**
   * @schema OriginRequestPolicy#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema OriginRequestPolicy#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig: OriginRequestPolicyConfig;

}

/**
 * @schema PublicKeyConfig
 */
export interface PublicKeyConfig {
  /**
   * @schema PublicKeyConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema PublicKeyConfig#Name
   */
  readonly name: string;

  /**
   * @schema PublicKeyConfig#EncodedKey
   */
  readonly encodedKey: string;

  /**
   * @schema PublicKeyConfig#Comment
   */
  readonly comment?: string;

}

/**
 * @schema PublicKey
 */
export interface PublicKey {
  /**
   * @schema PublicKey#Id
   */
  readonly id: string;

  /**
   * @schema PublicKey#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema PublicKey#PublicKeyConfig
   */
  readonly publicKeyConfig: PublicKeyConfig;

}

/**
 * @schema EndPoint
 */
export interface EndPoint {
  /**
   * @schema EndPoint#StreamType
   */
  readonly streamType: string;

  /**
   * @schema EndPoint#KinesisStreamConfig
   */
  readonly kinesisStreamConfig?: KinesisStreamConfig;

}

/**
 * @schema RealtimeLogConfig
 */
export interface RealtimeLogConfig {
  /**
   * @schema RealtimeLogConfig#ARN
   */
  readonly arn: string;

  /**
   * @schema RealtimeLogConfig#Name
   */
  readonly name: string;

  /**
   * @schema RealtimeLogConfig#SamplingRate
   */
  readonly samplingRate: number;

  /**
   * @schema RealtimeLogConfig#EndPoints
   */
  readonly endPoints: EndPoint[];

  /**
   * @schema RealtimeLogConfig#Fields
   */
  readonly fields: string[];

}

/**
 * @schema StreamingDistributionConfig
 */
export interface StreamingDistributionConfig {
  /**
   * @schema StreamingDistributionConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema StreamingDistributionConfig#S3Origin
   */
  readonly s3Origin: S3Origin;

  /**
   * @schema StreamingDistributionConfig#Aliases
   */
  readonly aliases?: Aliases;

  /**
   * @schema StreamingDistributionConfig#Comment
   */
  readonly comment: string;

  /**
   * @schema StreamingDistributionConfig#Logging
   */
  readonly logging?: StreamingLoggingConfig;

  /**
   * @schema StreamingDistributionConfig#TrustedSigners
   */
  readonly trustedSigners: TrustedSigners;

  /**
   * @schema StreamingDistributionConfig#PriceClass
   */
  readonly priceClass?: string;

  /**
   * @schema StreamingDistributionConfig#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema StreamingDistribution
 */
export interface StreamingDistribution {
  /**
   * @schema StreamingDistribution#Id
   */
  readonly id: string;

  /**
   * @schema StreamingDistribution#ARN
   */
  readonly arn: string;

  /**
   * @schema StreamingDistribution#Status
   */
  readonly status: string;

  /**
   * @schema StreamingDistribution#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema StreamingDistribution#DomainName
   */
  readonly domainName: string;

  /**
   * @schema StreamingDistribution#ActiveTrustedSigners
   */
  readonly activeTrustedSigners: ActiveTrustedSigners;

  /**
   * @schema StreamingDistribution#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig: StreamingDistributionConfig;

}

/**
 * @schema StreamingDistributionConfigWithTags
 */
export interface StreamingDistributionConfigWithTags {
  /**
   * @schema StreamingDistributionConfigWithTags#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig: StreamingDistributionConfig;

  /**
   * @schema StreamingDistributionConfigWithTags#Tags
   */
  readonly tags: Tags;

}

/**
 * @schema CachePolicyList
 */
export interface CachePolicyList {
  /**
   * @schema CachePolicyList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CachePolicyList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CachePolicyList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CachePolicyList#Items
   */
  readonly items?: CachePolicySummary[];

}

/**
 * @schema CloudFrontOriginAccessIdentityList
 */
export interface CloudFrontOriginAccessIdentityList {
  /**
   * @schema CloudFrontOriginAccessIdentityList#Marker
   */
  readonly marker: string;

  /**
   * @schema CloudFrontOriginAccessIdentityList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontOriginAccessIdentityList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontOriginAccessIdentityList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema CloudFrontOriginAccessIdentityList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontOriginAccessIdentityList#Items
   */
  readonly items?: CloudFrontOriginAccessIdentitySummary[];

}

/**
 * @schema DistributionList
 */
export interface DistributionList {
  /**
   * @schema DistributionList#Marker
   */
  readonly marker: string;

  /**
   * @schema DistributionList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema DistributionList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema DistributionList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema DistributionList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema DistributionList#Items
   */
  readonly items?: DistributionSummary[];

}

/**
 * @schema DistributionIdList
 */
export interface DistributionIdList {
  /**
   * @schema DistributionIdList#Marker
   */
  readonly marker: string;

  /**
   * @schema DistributionIdList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema DistributionIdList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema DistributionIdList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema DistributionIdList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema DistributionIdList#Items
   */
  readonly items?: string[];

}

/**
 * @schema FieldLevelEncryptionList
 */
export interface FieldLevelEncryptionList {
  /**
   * @schema FieldLevelEncryptionList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema FieldLevelEncryptionList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema FieldLevelEncryptionList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema FieldLevelEncryptionList#Items
   */
  readonly items?: FieldLevelEncryptionSummary[];

}

/**
 * @schema FieldLevelEncryptionProfileList
 */
export interface FieldLevelEncryptionProfileList {
  /**
   * @schema FieldLevelEncryptionProfileList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema FieldLevelEncryptionProfileList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema FieldLevelEncryptionProfileList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema FieldLevelEncryptionProfileList#Items
   */
  readonly items?: FieldLevelEncryptionProfileSummary[];

}

/**
 * @schema InvalidationList
 */
export interface InvalidationList {
  /**
   * @schema InvalidationList#Marker
   */
  readonly marker: string;

  /**
   * @schema InvalidationList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema InvalidationList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema InvalidationList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema InvalidationList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema InvalidationList#Items
   */
  readonly items?: InvalidationSummary[];

}

/**
 * @schema KeyGroupList
 */
export interface KeyGroupList {
  /**
   * @schema KeyGroupList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema KeyGroupList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema KeyGroupList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema KeyGroupList#Items
   */
  readonly items?: KeyGroupSummary[];

}

/**
 * @schema OriginRequestPolicyList
 */
export interface OriginRequestPolicyList {
  /**
   * @schema OriginRequestPolicyList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema OriginRequestPolicyList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema OriginRequestPolicyList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema OriginRequestPolicyList#Items
   */
  readonly items?: OriginRequestPolicySummary[];

}

/**
 * @schema PublicKeyList
 */
export interface PublicKeyList {
  /**
   * @schema PublicKeyList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema PublicKeyList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema PublicKeyList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema PublicKeyList#Items
   */
  readonly items?: PublicKeySummary[];

}

/**
 * @schema RealtimeLogConfigs
 */
export interface RealtimeLogConfigs {
  /**
   * @schema RealtimeLogConfigs#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema RealtimeLogConfigs#Items
   */
  readonly items?: RealtimeLogConfig[];

  /**
   * @schema RealtimeLogConfigs#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema RealtimeLogConfigs#Marker
   */
  readonly marker: string;

  /**
   * @schema RealtimeLogConfigs#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema StreamingDistributionList
 */
export interface StreamingDistributionList {
  /**
   * @schema StreamingDistributionList#Marker
   */
  readonly marker: string;

  /**
   * @schema StreamingDistributionList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema StreamingDistributionList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema StreamingDistributionList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema StreamingDistributionList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema StreamingDistributionList#Items
   */
  readonly items?: StreamingDistributionSummary[];

}

/**
 * @schema Tags
 */
export interface Tags {
  /**
   * @schema Tags#Items
   */
  readonly items?: Tag[];

}

/**
 * @schema TagKeys
 */
export interface TagKeys {
  /**
   * @schema TagKeys#Items
   */
  readonly items?: string[];

}

/**
 * @schema ParametersInCacheKeyAndForwardedToOrigin
 */
export interface ParametersInCacheKeyAndForwardedToOrigin {
  /**
   * @schema ParametersInCacheKeyAndForwardedToOrigin#EnableAcceptEncodingGzip
   */
  readonly enableAcceptEncodingGzip: boolean;

  /**
   * @schema ParametersInCacheKeyAndForwardedToOrigin#EnableAcceptEncodingBrotli
   */
  readonly enableAcceptEncodingBrotli?: boolean;

  /**
   * @schema ParametersInCacheKeyAndForwardedToOrigin#HeadersConfig
   */
  readonly headersConfig: CachePolicyHeadersConfig;

  /**
   * @schema ParametersInCacheKeyAndForwardedToOrigin#CookiesConfig
   */
  readonly cookiesConfig: CachePolicyCookiesConfig;

  /**
   * @schema ParametersInCacheKeyAndForwardedToOrigin#QueryStringsConfig
   */
  readonly queryStringsConfig: CachePolicyQueryStringsConfig;

}

/**
 * @schema Aliases
 */
export interface Aliases {
  /**
   * @schema Aliases#Quantity
   */
  readonly quantity: number;

  /**
   * @schema Aliases#Items
   */
  readonly items?: string[];

}

/**
 * @schema Origins
 */
export interface Origins {
  /**
   * @schema Origins#Quantity
   */
  readonly quantity: number;

  /**
   * @schema Origins#Items
   */
  readonly items: Origin[];

}

/**
 * @schema OriginGroups
 */
export interface OriginGroups {
  /**
   * @schema OriginGroups#Quantity
   */
  readonly quantity: number;

  /**
   * @schema OriginGroups#Items
   */
  readonly items?: OriginGroup[];

}

/**
 * @schema DefaultCacheBehavior
 */
export interface DefaultCacheBehavior {
  /**
   * @schema DefaultCacheBehavior#TargetOriginId
   */
  readonly targetOriginId: string;

  /**
   * @schema DefaultCacheBehavior#TrustedSigners
   */
  readonly trustedSigners?: TrustedSigners;

  /**
   * @schema DefaultCacheBehavior#TrustedKeyGroups
   */
  readonly trustedKeyGroups?: TrustedKeyGroups;

  /**
   * @schema DefaultCacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy: string;

  /**
   * @schema DefaultCacheBehavior#AllowedMethods
   */
  readonly allowedMethods?: AllowedMethods;

  /**
   * @schema DefaultCacheBehavior#SmoothStreaming
   */
  readonly smoothStreaming?: boolean;

  /**
   * @schema DefaultCacheBehavior#Compress
   */
  readonly compress?: boolean;

  /**
   * @schema DefaultCacheBehavior#LambdaFunctionAssociations
   */
  readonly lambdaFunctionAssociations?: LambdaFunctionAssociations;

  /**
   * @schema DefaultCacheBehavior#FieldLevelEncryptionId
   */
  readonly fieldLevelEncryptionId?: string;

  /**
   * @schema DefaultCacheBehavior#RealtimeLogConfigArn
   */
  readonly realtimeLogConfigArn?: string;

  /**
   * @schema DefaultCacheBehavior#CachePolicyId
   */
  readonly cachePolicyId?: string;

  /**
   * @schema DefaultCacheBehavior#OriginRequestPolicyId
   */
  readonly originRequestPolicyId?: string;

  /**
   * @schema DefaultCacheBehavior#ForwardedValues
   */
  readonly forwardedValues?: ForwardedValues;

  /**
   * @schema DefaultCacheBehavior#MinTTL
   */
  readonly minTtl?: number;

  /**
   * @schema DefaultCacheBehavior#DefaultTTL
   */
  readonly defaultTtl?: number;

  /**
   * @schema DefaultCacheBehavior#MaxTTL
   */
  readonly maxTtl?: number;

}

/**
 * @schema CacheBehaviors
 */
export interface CacheBehaviors {
  /**
   * @schema CacheBehaviors#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CacheBehaviors#Items
   */
  readonly items?: CacheBehavior[];

}

/**
 * @schema CustomErrorResponses
 */
export interface CustomErrorResponses {
  /**
   * @schema CustomErrorResponses#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CustomErrorResponses#Items
   */
  readonly items?: CustomErrorResponse[];

}

/**
 * @schema LoggingConfig
 */
export interface LoggingConfig {
  /**
   * @schema LoggingConfig#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema LoggingConfig#IncludeCookies
   */
  readonly includeCookies: boolean;

  /**
   * @schema LoggingConfig#Bucket
   */
  readonly bucket: string;

  /**
   * @schema LoggingConfig#Prefix
   */
  readonly prefix: string;

}

/**
 * @schema ViewerCertificate
 */
export interface ViewerCertificate {
  /**
   * @schema ViewerCertificate#CloudFrontDefaultCertificate
   */
  readonly cloudFrontDefaultCertificate?: boolean;

  /**
   * @schema ViewerCertificate#IAMCertificateId
   */
  readonly iamCertificateId?: string;

  /**
   * @schema ViewerCertificate#ACMCertificateArn
   */
  readonly acmCertificateArn?: string;

  /**
   * @schema ViewerCertificate#SSLSupportMethod
   */
  readonly sslSupportMethod?: string;

  /**
   * @schema ViewerCertificate#MinimumProtocolVersion
   */
  readonly minimumProtocolVersion?: string;

  /**
   * @schema ViewerCertificate#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema ViewerCertificate#CertificateSource
   */
  readonly certificateSource?: string;

}

/**
 * @schema Restrictions
 */
export interface Restrictions {
  /**
   * @schema Restrictions#GeoRestriction
   */
  readonly geoRestriction: GeoRestriction;

}

/**
 * @schema ActiveTrustedSigners
 */
export interface ActiveTrustedSigners {
  /**
   * @schema ActiveTrustedSigners#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema ActiveTrustedSigners#Quantity
   */
  readonly quantity: number;

  /**
   * @schema ActiveTrustedSigners#Items
   */
  readonly items?: Signer[];

}

/**
 * @schema ActiveTrustedKeyGroups
 */
export interface ActiveTrustedKeyGroups {
  /**
   * @schema ActiveTrustedKeyGroups#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema ActiveTrustedKeyGroups#Quantity
   */
  readonly quantity: number;

  /**
   * @schema ActiveTrustedKeyGroups#Items
   */
  readonly items?: KgKeyPairIds[];

}

/**
 * @schema AliasIcpRecordal
 */
export interface AliasIcpRecordal {
  /**
   * @schema AliasIcpRecordal#CNAME
   */
  readonly cname?: string;

  /**
   * @schema AliasIcpRecordal#ICPRecordalStatus
   */
  readonly icpRecordalStatus?: string;

}

/**
 * @schema QueryArgProfileConfig
 */
export interface QueryArgProfileConfig {
  /**
   * @schema QueryArgProfileConfig#ForwardWhenQueryArgProfileIsUnknown
   */
  readonly forwardWhenQueryArgProfileIsUnknown: boolean;

  /**
   * @schema QueryArgProfileConfig#QueryArgProfiles
   */
  readonly queryArgProfiles?: QueryArgProfiles;

}

/**
 * @schema ContentTypeProfileConfig
 */
export interface ContentTypeProfileConfig {
  /**
   * @schema ContentTypeProfileConfig#ForwardWhenContentTypeIsUnknown
   */
  readonly forwardWhenContentTypeIsUnknown: boolean;

  /**
   * @schema ContentTypeProfileConfig#ContentTypeProfiles
   */
  readonly contentTypeProfiles?: ContentTypeProfiles;

}

/**
 * @schema EncryptionEntities
 */
export interface EncryptionEntities {
  /**
   * @schema EncryptionEntities#Quantity
   */
  readonly quantity: number;

  /**
   * @schema EncryptionEntities#Items
   */
  readonly items?: EncryptionEntity[];

}

/**
 * @schema Paths
 */
export interface Paths {
  /**
   * @schema Paths#Quantity
   */
  readonly quantity: number;

  /**
   * @schema Paths#Items
   */
  readonly items?: string[];

}

/**
 * @schema RealtimeMetricsSubscriptionConfig
 */
export interface RealtimeMetricsSubscriptionConfig {
  /**
   * @schema RealtimeMetricsSubscriptionConfig#RealtimeMetricsSubscriptionStatus
   */
  readonly realtimeMetricsSubscriptionStatus: string;

}

/**
 * @schema OriginRequestPolicyHeadersConfig
 */
export interface OriginRequestPolicyHeadersConfig {
  /**
   * @schema OriginRequestPolicyHeadersConfig#HeaderBehavior
   */
  readonly headerBehavior: string;

  /**
   * @schema OriginRequestPolicyHeadersConfig#Headers
   */
  readonly headers?: Headers;

}

/**
 * @schema OriginRequestPolicyCookiesConfig
 */
export interface OriginRequestPolicyCookiesConfig {
  /**
   * @schema OriginRequestPolicyCookiesConfig#CookieBehavior
   */
  readonly cookieBehavior: string;

  /**
   * @schema OriginRequestPolicyCookiesConfig#Cookies
   */
  readonly cookies?: CookieNames;

}

/**
 * @schema OriginRequestPolicyQueryStringsConfig
 */
export interface OriginRequestPolicyQueryStringsConfig {
  /**
   * @schema OriginRequestPolicyQueryStringsConfig#QueryStringBehavior
   */
  readonly queryStringBehavior: string;

  /**
   * @schema OriginRequestPolicyQueryStringsConfig#QueryStrings
   */
  readonly queryStrings?: QueryStringNames;

}

/**
 * @schema KinesisStreamConfig
 */
export interface KinesisStreamConfig {
  /**
   * @schema KinesisStreamConfig#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema KinesisStreamConfig#StreamARN
   */
  readonly streamArn: string;

}

/**
 * @schema S3Origin
 */
export interface S3Origin {
  /**
   * @schema S3Origin#DomainName
   */
  readonly domainName: string;

  /**
   * @schema S3Origin#OriginAccessIdentity
   */
  readonly originAccessIdentity: string;

}

/**
 * @schema StreamingLoggingConfig
 */
export interface StreamingLoggingConfig {
  /**
   * @schema StreamingLoggingConfig#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema StreamingLoggingConfig#Bucket
   */
  readonly bucket: string;

  /**
   * @schema StreamingLoggingConfig#Prefix
   */
  readonly prefix: string;

}

/**
 * @schema TrustedSigners
 */
export interface TrustedSigners {
  /**
   * @schema TrustedSigners#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema TrustedSigners#Quantity
   */
  readonly quantity: number;

  /**
   * @schema TrustedSigners#Items
   */
  readonly items?: string[];

}

/**
 * @schema CachePolicySummary
 */
export interface CachePolicySummary {
  /**
   * @schema CachePolicySummary#Type
   */
  readonly type: string;

  /**
   * @schema CachePolicySummary#CachePolicy
   */
  readonly cachePolicy: CachePolicy;

}

/**
 * @schema CloudFrontOriginAccessIdentitySummary
 */
export interface CloudFrontOriginAccessIdentitySummary {
  /**
   * @schema CloudFrontOriginAccessIdentitySummary#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontOriginAccessIdentitySummary#S3CanonicalUserId
   */
  readonly s3CanonicalUserId: string;

  /**
   * @schema CloudFrontOriginAccessIdentitySummary#Comment
   */
  readonly comment: string;

}

/**
 * @schema DistributionSummary
 */
export interface DistributionSummary {
  /**
   * @schema DistributionSummary#Id
   */
  readonly id: string;

  /**
   * @schema DistributionSummary#ARN
   */
  readonly arn: string;

  /**
   * @schema DistributionSummary#Status
   */
  readonly status: string;

  /**
   * @schema DistributionSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema DistributionSummary#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DistributionSummary#Aliases
   */
  readonly aliases: Aliases;

  /**
   * @schema DistributionSummary#Origins
   */
  readonly origins: Origins;

  /**
   * @schema DistributionSummary#OriginGroups
   */
  readonly originGroups?: OriginGroups;

  /**
   * @schema DistributionSummary#DefaultCacheBehavior
   */
  readonly defaultCacheBehavior: DefaultCacheBehavior;

  /**
   * @schema DistributionSummary#CacheBehaviors
   */
  readonly cacheBehaviors: CacheBehaviors;

  /**
   * @schema DistributionSummary#CustomErrorResponses
   */
  readonly customErrorResponses: CustomErrorResponses;

  /**
   * @schema DistributionSummary#Comment
   */
  readonly comment: string;

  /**
   * @schema DistributionSummary#PriceClass
   */
  readonly priceClass: string;

  /**
   * @schema DistributionSummary#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema DistributionSummary#ViewerCertificate
   */
  readonly viewerCertificate: ViewerCertificate;

  /**
   * @schema DistributionSummary#Restrictions
   */
  readonly restrictions: Restrictions;

  /**
   * @schema DistributionSummary#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema DistributionSummary#HttpVersion
   */
  readonly httpVersion: string;

  /**
   * @schema DistributionSummary#IsIPV6Enabled
   */
  readonly isIpv6Enabled: boolean;

  /**
   * @schema DistributionSummary#AliasICPRecordals
   */
  readonly aliasIcpRecordals?: AliasIcpRecordal[];

}

/**
 * @schema FieldLevelEncryptionSummary
 */
export interface FieldLevelEncryptionSummary {
  /**
   * @schema FieldLevelEncryptionSummary#Id
   */
  readonly id: string;

  /**
   * @schema FieldLevelEncryptionSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema FieldLevelEncryptionSummary#Comment
   */
  readonly comment?: string;

  /**
   * @schema FieldLevelEncryptionSummary#QueryArgProfileConfig
   */
  readonly queryArgProfileConfig?: QueryArgProfileConfig;

  /**
   * @schema FieldLevelEncryptionSummary#ContentTypeProfileConfig
   */
  readonly contentTypeProfileConfig?: ContentTypeProfileConfig;

}

/**
 * @schema FieldLevelEncryptionProfileSummary
 */
export interface FieldLevelEncryptionProfileSummary {
  /**
   * @schema FieldLevelEncryptionProfileSummary#Id
   */
  readonly id: string;

  /**
   * @schema FieldLevelEncryptionProfileSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema FieldLevelEncryptionProfileSummary#Name
   */
  readonly name: string;

  /**
   * @schema FieldLevelEncryptionProfileSummary#EncryptionEntities
   */
  readonly encryptionEntities: EncryptionEntities;

  /**
   * @schema FieldLevelEncryptionProfileSummary#Comment
   */
  readonly comment?: string;

}

/**
 * @schema InvalidationSummary
 */
export interface InvalidationSummary {
  /**
   * @schema InvalidationSummary#Id
   */
  readonly id: string;

  /**
   * @schema InvalidationSummary#CreateTime
   */
  readonly createTime: string;

  /**
   * @schema InvalidationSummary#Status
   */
  readonly status: string;

}

/**
 * @schema KeyGroupSummary
 */
export interface KeyGroupSummary {
  /**
   * @schema KeyGroupSummary#KeyGroup
   */
  readonly keyGroup: KeyGroup;

}

/**
 * @schema OriginRequestPolicySummary
 */
export interface OriginRequestPolicySummary {
  /**
   * @schema OriginRequestPolicySummary#Type
   */
  readonly type: string;

  /**
   * @schema OriginRequestPolicySummary#OriginRequestPolicy
   */
  readonly originRequestPolicy: OriginRequestPolicy;

}

/**
 * @schema PublicKeySummary
 */
export interface PublicKeySummary {
  /**
   * @schema PublicKeySummary#Id
   */
  readonly id: string;

  /**
   * @schema PublicKeySummary#Name
   */
  readonly name: string;

  /**
   * @schema PublicKeySummary#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema PublicKeySummary#EncodedKey
   */
  readonly encodedKey: string;

  /**
   * @schema PublicKeySummary#Comment
   */
  readonly comment?: string;

}

/**
 * @schema StreamingDistributionSummary
 */
export interface StreamingDistributionSummary {
  /**
   * @schema StreamingDistributionSummary#Id
   */
  readonly id: string;

  /**
   * @schema StreamingDistributionSummary#ARN
   */
  readonly arn: string;

  /**
   * @schema StreamingDistributionSummary#Status
   */
  readonly status: string;

  /**
   * @schema StreamingDistributionSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema StreamingDistributionSummary#DomainName
   */
  readonly domainName: string;

  /**
   * @schema StreamingDistributionSummary#S3Origin
   */
  readonly s3Origin: S3Origin;

  /**
   * @schema StreamingDistributionSummary#Aliases
   */
  readonly aliases: Aliases;

  /**
   * @schema StreamingDistributionSummary#TrustedSigners
   */
  readonly trustedSigners: TrustedSigners;

  /**
   * @schema StreamingDistributionSummary#Comment
   */
  readonly comment: string;

  /**
   * @schema StreamingDistributionSummary#PriceClass
   */
  readonly priceClass: string;

  /**
   * @schema StreamingDistributionSummary#Enabled
   */
  readonly enabled: boolean;

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
  readonly value?: string;

}

/**
 * @schema CachePolicyHeadersConfig
 */
export interface CachePolicyHeadersConfig {
  /**
   * @schema CachePolicyHeadersConfig#HeaderBehavior
   */
  readonly headerBehavior: string;

  /**
   * @schema CachePolicyHeadersConfig#Headers
   */
  readonly headers?: Headers;

}

/**
 * @schema CachePolicyCookiesConfig
 */
export interface CachePolicyCookiesConfig {
  /**
   * @schema CachePolicyCookiesConfig#CookieBehavior
   */
  readonly cookieBehavior: string;

  /**
   * @schema CachePolicyCookiesConfig#Cookies
   */
  readonly cookies?: CookieNames;

}

/**
 * @schema CachePolicyQueryStringsConfig
 */
export interface CachePolicyQueryStringsConfig {
  /**
   * @schema CachePolicyQueryStringsConfig#QueryStringBehavior
   */
  readonly queryStringBehavior: string;

  /**
   * @schema CachePolicyQueryStringsConfig#QueryStrings
   */
  readonly queryStrings?: QueryStringNames;

}

/**
 * @schema Origin
 */
export interface Origin {
  /**
   * @schema Origin#Id
   */
  readonly id: string;

  /**
   * @schema Origin#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Origin#OriginPath
   */
  readonly originPath?: string;

  /**
   * @schema Origin#CustomHeaders
   */
  readonly customHeaders?: CustomHeaders;

  /**
   * @schema Origin#S3OriginConfig
   */
  readonly s3OriginConfig?: S3OriginConfig;

  /**
   * @schema Origin#CustomOriginConfig
   */
  readonly customOriginConfig?: CustomOriginConfig;

  /**
   * @schema Origin#ConnectionAttempts
   */
  readonly connectionAttempts?: number;

  /**
   * @schema Origin#ConnectionTimeout
   */
  readonly connectionTimeout?: number;

  /**
   * @schema Origin#OriginShield
   */
  readonly originShield?: OriginShield;

}

/**
 * @schema OriginGroup
 */
export interface OriginGroup {
  /**
   * @schema OriginGroup#Id
   */
  readonly id: string;

  /**
   * @schema OriginGroup#FailoverCriteria
   */
  readonly failoverCriteria: OriginGroupFailoverCriteria;

  /**
   * @schema OriginGroup#Members
   */
  readonly members: OriginGroupMembers;

}

/**
 * @schema TrustedKeyGroups
 */
export interface TrustedKeyGroups {
  /**
   * @schema TrustedKeyGroups#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema TrustedKeyGroups#Quantity
   */
  readonly quantity: number;

  /**
   * @schema TrustedKeyGroups#Items
   */
  readonly items?: string[];

}

/**
 * @schema AllowedMethods
 */
export interface AllowedMethods {
  /**
   * @schema AllowedMethods#Quantity
   */
  readonly quantity: number;

  /**
   * @schema AllowedMethods#Items
   */
  readonly items: string[];

  /**
   * @schema AllowedMethods#CachedMethods
   */
  readonly cachedMethods?: CachedMethods;

}

/**
 * @schema LambdaFunctionAssociations
 */
export interface LambdaFunctionAssociations {
  /**
   * @schema LambdaFunctionAssociations#Quantity
   */
  readonly quantity: number;

  /**
   * @schema LambdaFunctionAssociations#Items
   */
  readonly items?: LambdaFunctionAssociation[];

}

/**
 * @schema ForwardedValues
 */
export interface ForwardedValues {
  /**
   * @schema ForwardedValues#QueryString
   */
  readonly queryString: boolean;

  /**
   * @schema ForwardedValues#Cookies
   */
  readonly cookies: CookiePreference;

  /**
   * @schema ForwardedValues#Headers
   */
  readonly headers?: Headers;

  /**
   * @schema ForwardedValues#QueryStringCacheKeys
   */
  readonly queryStringCacheKeys?: QueryStringCacheKeys;

}

/**
 * @schema CacheBehavior
 */
export interface CacheBehavior {
  /**
   * @schema CacheBehavior#PathPattern
   */
  readonly pathPattern: string;

  /**
   * @schema CacheBehavior#TargetOriginId
   */
  readonly targetOriginId: string;

  /**
   * @schema CacheBehavior#TrustedSigners
   */
  readonly trustedSigners?: TrustedSigners;

  /**
   * @schema CacheBehavior#TrustedKeyGroups
   */
  readonly trustedKeyGroups?: TrustedKeyGroups;

  /**
   * @schema CacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy: string;

  /**
   * @schema CacheBehavior#AllowedMethods
   */
  readonly allowedMethods?: AllowedMethods;

  /**
   * @schema CacheBehavior#SmoothStreaming
   */
  readonly smoothStreaming?: boolean;

  /**
   * @schema CacheBehavior#Compress
   */
  readonly compress?: boolean;

  /**
   * @schema CacheBehavior#LambdaFunctionAssociations
   */
  readonly lambdaFunctionAssociations?: LambdaFunctionAssociations;

  /**
   * @schema CacheBehavior#FieldLevelEncryptionId
   */
  readonly fieldLevelEncryptionId?: string;

  /**
   * @schema CacheBehavior#RealtimeLogConfigArn
   */
  readonly realtimeLogConfigArn?: string;

  /**
   * @schema CacheBehavior#CachePolicyId
   */
  readonly cachePolicyId?: string;

  /**
   * @schema CacheBehavior#OriginRequestPolicyId
   */
  readonly originRequestPolicyId?: string;

  /**
   * @schema CacheBehavior#ForwardedValues
   */
  readonly forwardedValues?: ForwardedValues;

  /**
   * @schema CacheBehavior#MinTTL
   */
  readonly minTtl?: number;

  /**
   * @schema CacheBehavior#DefaultTTL
   */
  readonly defaultTtl?: number;

  /**
   * @schema CacheBehavior#MaxTTL
   */
  readonly maxTtl?: number;

}

/**
 * @schema CustomErrorResponse
 */
export interface CustomErrorResponse {
  /**
   * @schema CustomErrorResponse#ErrorCode
   */
  readonly errorCode: number;

  /**
   * @schema CustomErrorResponse#ResponsePagePath
   */
  readonly responsePagePath?: string;

  /**
   * @schema CustomErrorResponse#ResponseCode
   */
  readonly responseCode?: string;

  /**
   * @schema CustomErrorResponse#ErrorCachingMinTTL
   */
  readonly errorCachingMinTtl?: number;

}

/**
 * @schema GeoRestriction
 */
export interface GeoRestriction {
  /**
   * @schema GeoRestriction#RestrictionType
   */
  readonly restrictionType: string;

  /**
   * @schema GeoRestriction#Quantity
   */
  readonly quantity: number;

  /**
   * @schema GeoRestriction#Items
   */
  readonly items?: string[];

}

/**
 * @schema Signer
 */
export interface Signer {
  /**
   * @schema Signer#AwsAccountNumber
   */
  readonly awsAccountNumber?: string;

  /**
   * @schema Signer#KeyPairIds
   */
  readonly keyPairIds?: KeyPairIds;

}

/**
 * @schema KgKeyPairIds
 */
export interface KgKeyPairIds {
  /**
   * @schema KgKeyPairIds#KeyGroupId
   */
  readonly keyGroupId?: string;

  /**
   * @schema KgKeyPairIds#KeyPairIds
   */
  readonly keyPairIds?: KeyPairIds;

}

/**
 * @schema QueryArgProfiles
 */
export interface QueryArgProfiles {
  /**
   * @schema QueryArgProfiles#Quantity
   */
  readonly quantity: number;

  /**
   * @schema QueryArgProfiles#Items
   */
  readonly items?: QueryArgProfile[];

}

/**
 * @schema ContentTypeProfiles
 */
export interface ContentTypeProfiles {
  /**
   * @schema ContentTypeProfiles#Quantity
   */
  readonly quantity: number;

  /**
   * @schema ContentTypeProfiles#Items
   */
  readonly items?: ContentTypeProfile[];

}

/**
 * @schema EncryptionEntity
 */
export interface EncryptionEntity {
  /**
   * @schema EncryptionEntity#PublicKeyId
   */
  readonly publicKeyId: string;

  /**
   * @schema EncryptionEntity#ProviderId
   */
  readonly providerId: string;

  /**
   * @schema EncryptionEntity#FieldPatterns
   */
  readonly fieldPatterns: FieldPatterns;

}

/**
 * @schema Headers
 */
export interface Headers {
  /**
   * @schema Headers#Quantity
   */
  readonly quantity: number;

  /**
   * @schema Headers#Items
   */
  readonly items?: string[];

}

/**
 * @schema CookieNames
 */
export interface CookieNames {
  /**
   * @schema CookieNames#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CookieNames#Items
   */
  readonly items?: string[];

}

/**
 * @schema QueryStringNames
 */
export interface QueryStringNames {
  /**
   * @schema QueryStringNames#Quantity
   */
  readonly quantity: number;

  /**
   * @schema QueryStringNames#Items
   */
  readonly items?: string[];

}

/**
 * @schema CustomHeaders
 */
export interface CustomHeaders {
  /**
   * @schema CustomHeaders#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CustomHeaders#Items
   */
  readonly items?: OriginCustomHeader[];

}

/**
 * @schema S3OriginConfig
 */
export interface S3OriginConfig {
  /**
   * @schema S3OriginConfig#OriginAccessIdentity
   */
  readonly originAccessIdentity: string;

}

/**
 * @schema CustomOriginConfig
 */
export interface CustomOriginConfig {
  /**
   * @schema CustomOriginConfig#HTTPPort
   */
  readonly httpPort: number;

  /**
   * @schema CustomOriginConfig#HTTPSPort
   */
  readonly httpsPort: number;

  /**
   * @schema CustomOriginConfig#OriginProtocolPolicy
   */
  readonly originProtocolPolicy: string;

  /**
   * @schema CustomOriginConfig#OriginSslProtocols
   */
  readonly originSslProtocols?: OriginSslProtocols;

  /**
   * @schema CustomOriginConfig#OriginReadTimeout
   */
  readonly originReadTimeout?: number;

  /**
   * @schema CustomOriginConfig#OriginKeepaliveTimeout
   */
  readonly originKeepaliveTimeout?: number;

}

/**
 * @schema OriginShield
 */
export interface OriginShield {
  /**
   * @schema OriginShield#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema OriginShield#OriginShieldRegion
   */
  readonly originShieldRegion?: string;

}

/**
 * @schema OriginGroupFailoverCriteria
 */
export interface OriginGroupFailoverCriteria {
  /**
   * @schema OriginGroupFailoverCriteria#StatusCodes
   */
  readonly statusCodes: StatusCodes;

}

/**
 * @schema OriginGroupMembers
 */
export interface OriginGroupMembers {
  /**
   * @schema OriginGroupMembers#Quantity
   */
  readonly quantity: number;

  /**
   * @schema OriginGroupMembers#Items
   */
  readonly items: OriginGroupMember[];

}

/**
 * @schema CachedMethods
 */
export interface CachedMethods {
  /**
   * @schema CachedMethods#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CachedMethods#Items
   */
  readonly items: string[];

}

/**
 * @schema LambdaFunctionAssociation
 */
export interface LambdaFunctionAssociation {
  /**
   * @schema LambdaFunctionAssociation#LambdaFunctionARN
   */
  readonly lambdaFunctionArn: string;

  /**
   * @schema LambdaFunctionAssociation#EventType
   */
  readonly eventType: string;

  /**
   * @schema LambdaFunctionAssociation#IncludeBody
   */
  readonly includeBody?: boolean;

}

/**
 * @schema CookiePreference
 */
export interface CookiePreference {
  /**
   * @schema CookiePreference#Forward
   */
  readonly forward: string;

  /**
   * @schema CookiePreference#WhitelistedNames
   */
  readonly whitelistedNames?: CookieNames;

}

/**
 * @schema QueryStringCacheKeys
 */
export interface QueryStringCacheKeys {
  /**
   * @schema QueryStringCacheKeys#Quantity
   */
  readonly quantity: number;

  /**
   * @schema QueryStringCacheKeys#Items
   */
  readonly items?: string[];

}

/**
 * @schema KeyPairIds
 */
export interface KeyPairIds {
  /**
   * @schema KeyPairIds#Quantity
   */
  readonly quantity: number;

  /**
   * @schema KeyPairIds#Items
   */
  readonly items?: string[];

}

/**
 * @schema QueryArgProfile
 */
export interface QueryArgProfile {
  /**
   * @schema QueryArgProfile#QueryArg
   */
  readonly queryArg: string;

  /**
   * @schema QueryArgProfile#ProfileId
   */
  readonly profileId: string;

}

/**
 * @schema ContentTypeProfile
 */
export interface ContentTypeProfile {
  /**
   * @schema ContentTypeProfile#Format
   */
  readonly format: string;

  /**
   * @schema ContentTypeProfile#ProfileId
   */
  readonly profileId?: string;

  /**
   * @schema ContentTypeProfile#ContentType
   */
  readonly contentType: string;

}

/**
 * @schema FieldPatterns
 */
export interface FieldPatterns {
  /**
   * @schema FieldPatterns#Quantity
   */
  readonly quantity: number;

  /**
   * @schema FieldPatterns#Items
   */
  readonly items?: string[];

}

/**
 * @schema OriginCustomHeader
 */
export interface OriginCustomHeader {
  /**
   * @schema OriginCustomHeader#HeaderName
   */
  readonly headerName: string;

  /**
   * @schema OriginCustomHeader#HeaderValue
   */
  readonly headerValue: string;

}

/**
 * @schema OriginSslProtocols
 */
export interface OriginSslProtocols {
  /**
   * @schema OriginSslProtocols#Quantity
   */
  readonly quantity: number;

  /**
   * @schema OriginSslProtocols#Items
   */
  readonly items: string[];

}

/**
 * @schema StatusCodes
 */
export interface StatusCodes {
  /**
   * @schema StatusCodes#Quantity
   */
  readonly quantity: number;

  /**
   * @schema StatusCodes#Items
   */
  readonly items: number[];

}

/**
 * @schema OriginGroupMember
 */
export interface OriginGroupMember {
  /**
   * @schema OriginGroupMember#OriginId
   */
  readonly originId: string;

}
