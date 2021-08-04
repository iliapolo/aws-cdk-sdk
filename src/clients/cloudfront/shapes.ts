/**
 * @schema CloudFrontCreateCachePolicyRequest
 */
export interface CloudFrontCreateCachePolicyRequest {
  /**
   * @schema CloudFrontCreateCachePolicyRequest#CachePolicyConfig
   */
  readonly cachePolicyConfig: CloudFrontCachePolicyConfig;

}

/**
 * @schema CloudFrontCreateCachePolicyResult
 */
export interface CloudFrontCreateCachePolicyResult {
  /**
   * @schema CloudFrontCreateCachePolicyResult#CachePolicy
   */
  readonly cachePolicy?: CloudFrontCachePolicy;

  /**
   * @schema CloudFrontCreateCachePolicyResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateCachePolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreateCloudFrontOriginAccessIdentityRequest
 */
export interface CloudFrontCreateCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema CloudFrontCreateCloudFrontOriginAccessIdentityRequest#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig: CloudFrontCloudFrontOriginAccessIdentityConfig;

}

/**
 * @schema CloudFrontCreateCloudFrontOriginAccessIdentityResult
 */
export interface CloudFrontCreateCloudFrontOriginAccessIdentityResult {
  /**
   * @schema CloudFrontCreateCloudFrontOriginAccessIdentityResult#CloudFrontOriginAccessIdentity
   */
  readonly cloudFrontOriginAccessIdentity?: CloudFrontCloudFrontOriginAccessIdentity;

  /**
   * @schema CloudFrontCreateCloudFrontOriginAccessIdentityResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateCloudFrontOriginAccessIdentityResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreateDistributionRequest
 */
export interface CloudFrontCreateDistributionRequest {
  /**
   * @schema CloudFrontCreateDistributionRequest#DistributionConfig
   */
  readonly distributionConfig: CloudFrontDistributionConfig;

}

/**
 * @schema CloudFrontCreateDistributionResult
 */
export interface CloudFrontCreateDistributionResult {
  /**
   * @schema CloudFrontCreateDistributionResult#Distribution
   */
  readonly distribution?: CloudFrontDistribution;

  /**
   * @schema CloudFrontCreateDistributionResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreateDistributionWithTagsRequest
 */
export interface CloudFrontCreateDistributionWithTagsRequest {
  /**
   * @schema CloudFrontCreateDistributionWithTagsRequest#DistributionConfigWithTags
   */
  readonly distributionConfigWithTags: CloudFrontDistributionConfigWithTags;

}

/**
 * @schema CloudFrontCreateDistributionWithTagsResult
 */
export interface CloudFrontCreateDistributionWithTagsResult {
  /**
   * @schema CloudFrontCreateDistributionWithTagsResult#Distribution
   */
  readonly distribution?: CloudFrontDistribution;

  /**
   * @schema CloudFrontCreateDistributionWithTagsResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateDistributionWithTagsResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreateFieldLevelEncryptionConfigRequest
 */
export interface CloudFrontCreateFieldLevelEncryptionConfigRequest {
  /**
   * @schema CloudFrontCreateFieldLevelEncryptionConfigRequest#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig: CloudFrontFieldLevelEncryptionConfig;

}

/**
 * @schema CloudFrontCreateFieldLevelEncryptionConfigResult
 */
export interface CloudFrontCreateFieldLevelEncryptionConfigResult {
  /**
   * @schema CloudFrontCreateFieldLevelEncryptionConfigResult#FieldLevelEncryption
   */
  readonly fieldLevelEncryption?: CloudFrontFieldLevelEncryption;

  /**
   * @schema CloudFrontCreateFieldLevelEncryptionConfigResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateFieldLevelEncryptionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreateFieldLevelEncryptionProfileRequest
 */
export interface CloudFrontCreateFieldLevelEncryptionProfileRequest {
  /**
   * @schema CloudFrontCreateFieldLevelEncryptionProfileRequest#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig: CloudFrontFieldLevelEncryptionProfileConfig;

}

/**
 * @schema CloudFrontCreateFieldLevelEncryptionProfileResult
 */
export interface CloudFrontCreateFieldLevelEncryptionProfileResult {
  /**
   * @schema CloudFrontCreateFieldLevelEncryptionProfileResult#FieldLevelEncryptionProfile
   */
  readonly fieldLevelEncryptionProfile?: CloudFrontFieldLevelEncryptionProfile;

  /**
   * @schema CloudFrontCreateFieldLevelEncryptionProfileResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateFieldLevelEncryptionProfileResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreateInvalidationRequest
 */
export interface CloudFrontCreateInvalidationRequest {
  /**
   * @schema CloudFrontCreateInvalidationRequest#DistributionId
   */
  readonly distributionId: string;

  /**
   * @schema CloudFrontCreateInvalidationRequest#InvalidationBatch
   */
  readonly invalidationBatch: CloudFrontInvalidationBatch;

}

/**
 * @schema CloudFrontCreateInvalidationResult
 */
export interface CloudFrontCreateInvalidationResult {
  /**
   * @schema CloudFrontCreateInvalidationResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateInvalidationResult#Invalidation
   */
  readonly invalidation?: CloudFrontInvalidation;

}

/**
 * @schema CloudFrontCreateKeyGroupRequest
 */
export interface CloudFrontCreateKeyGroupRequest {
  /**
   * @schema CloudFrontCreateKeyGroupRequest#KeyGroupConfig
   */
  readonly keyGroupConfig: CloudFrontKeyGroupConfig;

}

/**
 * @schema CloudFrontCreateKeyGroupResult
 */
export interface CloudFrontCreateKeyGroupResult {
  /**
   * @schema CloudFrontCreateKeyGroupResult#KeyGroup
   */
  readonly keyGroup?: CloudFrontKeyGroup;

  /**
   * @schema CloudFrontCreateKeyGroupResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateKeyGroupResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreateMonitoringSubscriptionRequest
 */
export interface CloudFrontCreateMonitoringSubscriptionRequest {
  /**
   * @schema CloudFrontCreateMonitoringSubscriptionRequest#DistributionId
   */
  readonly distributionId: string;

  /**
   * @schema CloudFrontCreateMonitoringSubscriptionRequest#MonitoringSubscription
   */
  readonly monitoringSubscription: CloudFrontMonitoringSubscription;

}

/**
 * @schema CloudFrontCreateMonitoringSubscriptionResult
 */
export interface CloudFrontCreateMonitoringSubscriptionResult {
  /**
   * @schema CloudFrontCreateMonitoringSubscriptionResult#MonitoringSubscription
   */
  readonly monitoringSubscription?: CloudFrontMonitoringSubscription;

}

/**
 * @schema CloudFrontCreateOriginRequestPolicyRequest
 */
export interface CloudFrontCreateOriginRequestPolicyRequest {
  /**
   * @schema CloudFrontCreateOriginRequestPolicyRequest#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig: CloudFrontOriginRequestPolicyConfig;

}

/**
 * @schema CloudFrontCreateOriginRequestPolicyResult
 */
export interface CloudFrontCreateOriginRequestPolicyResult {
  /**
   * @schema CloudFrontCreateOriginRequestPolicyResult#OriginRequestPolicy
   */
  readonly originRequestPolicy?: CloudFrontOriginRequestPolicy;

  /**
   * @schema CloudFrontCreateOriginRequestPolicyResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateOriginRequestPolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreatePublicKeyRequest
 */
export interface CloudFrontCreatePublicKeyRequest {
  /**
   * @schema CloudFrontCreatePublicKeyRequest#PublicKeyConfig
   */
  readonly publicKeyConfig: CloudFrontPublicKeyConfig;

}

/**
 * @schema CloudFrontCreatePublicKeyResult
 */
export interface CloudFrontCreatePublicKeyResult {
  /**
   * @schema CloudFrontCreatePublicKeyResult#PublicKey
   */
  readonly publicKey?: CloudFrontPublicKey;

  /**
   * @schema CloudFrontCreatePublicKeyResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreatePublicKeyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreateRealtimeLogConfigRequest
 */
export interface CloudFrontCreateRealtimeLogConfigRequest {
  /**
   * @schema CloudFrontCreateRealtimeLogConfigRequest#EndPoints
   */
  readonly endPoints: CloudFrontEndPoint[];

  /**
   * @schema CloudFrontCreateRealtimeLogConfigRequest#Fields
   */
  readonly fields: string[];

  /**
   * @schema CloudFrontCreateRealtimeLogConfigRequest#Name
   */
  readonly name: string;

  /**
   * @schema CloudFrontCreateRealtimeLogConfigRequest#SamplingRate
   */
  readonly samplingRate: number;

}

/**
 * @schema CloudFrontCreateRealtimeLogConfigResult
 */
export interface CloudFrontCreateRealtimeLogConfigResult {
  /**
   * @schema CloudFrontCreateRealtimeLogConfigResult#RealtimeLogConfig
   */
  readonly realtimeLogConfig?: CloudFrontRealtimeLogConfig;

}

/**
 * @schema CloudFrontCreateStreamingDistributionRequest
 */
export interface CloudFrontCreateStreamingDistributionRequest {
  /**
   * @schema CloudFrontCreateStreamingDistributionRequest#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig: CloudFrontStreamingDistributionConfig;

}

/**
 * @schema CloudFrontCreateStreamingDistributionResult
 */
export interface CloudFrontCreateStreamingDistributionResult {
  /**
   * @schema CloudFrontCreateStreamingDistributionResult#StreamingDistribution
   */
  readonly streamingDistribution?: CloudFrontStreamingDistribution;

  /**
   * @schema CloudFrontCreateStreamingDistributionResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateStreamingDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCreateStreamingDistributionWithTagsRequest
 */
export interface CloudFrontCreateStreamingDistributionWithTagsRequest {
  /**
   * @schema CloudFrontCreateStreamingDistributionWithTagsRequest#StreamingDistributionConfigWithTags
   */
  readonly streamingDistributionConfigWithTags: CloudFrontStreamingDistributionConfigWithTags;

}

/**
 * @schema CloudFrontCreateStreamingDistributionWithTagsResult
 */
export interface CloudFrontCreateStreamingDistributionWithTagsResult {
  /**
   * @schema CloudFrontCreateStreamingDistributionWithTagsResult#StreamingDistribution
   */
  readonly streamingDistribution?: CloudFrontStreamingDistribution;

  /**
   * @schema CloudFrontCreateStreamingDistributionWithTagsResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateStreamingDistributionWithTagsResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontDeleteCachePolicyRequest
 */
export interface CloudFrontDeleteCachePolicyRequest {
  /**
   * @schema CloudFrontDeleteCachePolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDeleteCachePolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontDeleteCloudFrontOriginAccessIdentityRequest
 */
export interface CloudFrontDeleteCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema CloudFrontDeleteCloudFrontOriginAccessIdentityRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDeleteCloudFrontOriginAccessIdentityRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontDeleteDistributionRequest
 */
export interface CloudFrontDeleteDistributionRequest {
  /**
   * @schema CloudFrontDeleteDistributionRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDeleteDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontDeleteFieldLevelEncryptionConfigRequest
 */
export interface CloudFrontDeleteFieldLevelEncryptionConfigRequest {
  /**
   * @schema CloudFrontDeleteFieldLevelEncryptionConfigRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDeleteFieldLevelEncryptionConfigRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontDeleteFieldLevelEncryptionProfileRequest
 */
export interface CloudFrontDeleteFieldLevelEncryptionProfileRequest {
  /**
   * @schema CloudFrontDeleteFieldLevelEncryptionProfileRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDeleteFieldLevelEncryptionProfileRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontDeleteKeyGroupRequest
 */
export interface CloudFrontDeleteKeyGroupRequest {
  /**
   * @schema CloudFrontDeleteKeyGroupRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDeleteKeyGroupRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontDeleteMonitoringSubscriptionRequest
 */
export interface CloudFrontDeleteMonitoringSubscriptionRequest {
  /**
   * @schema CloudFrontDeleteMonitoringSubscriptionRequest#DistributionId
   */
  readonly distributionId: string;

}

/**
 * @schema CloudFrontDeleteMonitoringSubscriptionResult
 */
export interface CloudFrontDeleteMonitoringSubscriptionResult {
}

/**
 * @schema CloudFrontDeleteOriginRequestPolicyRequest
 */
export interface CloudFrontDeleteOriginRequestPolicyRequest {
  /**
   * @schema CloudFrontDeleteOriginRequestPolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDeleteOriginRequestPolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontDeletePublicKeyRequest
 */
export interface CloudFrontDeletePublicKeyRequest {
  /**
   * @schema CloudFrontDeletePublicKeyRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDeletePublicKeyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontDeleteRealtimeLogConfigRequest
 */
export interface CloudFrontDeleteRealtimeLogConfigRequest {
  /**
   * @schema CloudFrontDeleteRealtimeLogConfigRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontDeleteRealtimeLogConfigRequest#ARN
   */
  readonly arn?: string;

}

/**
 * @schema CloudFrontDeleteStreamingDistributionRequest
 */
export interface CloudFrontDeleteStreamingDistributionRequest {
  /**
   * @schema CloudFrontDeleteStreamingDistributionRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDeleteStreamingDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontGetCachePolicyRequest
 */
export interface CloudFrontGetCachePolicyRequest {
  /**
   * @schema CloudFrontGetCachePolicyRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetCachePolicyResult
 */
export interface CloudFrontGetCachePolicyResult {
  /**
   * @schema CloudFrontGetCachePolicyResult#CachePolicy
   */
  readonly cachePolicy?: CloudFrontCachePolicy;

  /**
   * @schema CloudFrontGetCachePolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetCachePolicyConfigRequest
 */
export interface CloudFrontGetCachePolicyConfigRequest {
  /**
   * @schema CloudFrontGetCachePolicyConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetCachePolicyConfigResult
 */
export interface CloudFrontGetCachePolicyConfigResult {
  /**
   * @schema CloudFrontGetCachePolicyConfigResult#CachePolicyConfig
   */
  readonly cachePolicyConfig?: CloudFrontCachePolicyConfig;

  /**
   * @schema CloudFrontGetCachePolicyConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetCloudFrontOriginAccessIdentityRequest
 */
export interface CloudFrontGetCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema CloudFrontGetCloudFrontOriginAccessIdentityRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetCloudFrontOriginAccessIdentityResult
 */
export interface CloudFrontGetCloudFrontOriginAccessIdentityResult {
  /**
   * @schema CloudFrontGetCloudFrontOriginAccessIdentityResult#CloudFrontOriginAccessIdentity
   */
  readonly cloudFrontOriginAccessIdentity?: CloudFrontCloudFrontOriginAccessIdentity;

  /**
   * @schema CloudFrontGetCloudFrontOriginAccessIdentityResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest
 */
export interface CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest {
  /**
   * @schema CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetCloudFrontOriginAccessIdentityConfigResult
 */
export interface CloudFrontGetCloudFrontOriginAccessIdentityConfigResult {
  /**
   * @schema CloudFrontGetCloudFrontOriginAccessIdentityConfigResult#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig?: CloudFrontCloudFrontOriginAccessIdentityConfig;

  /**
   * @schema CloudFrontGetCloudFrontOriginAccessIdentityConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetDistributionRequest
 */
export interface CloudFrontGetDistributionRequest {
  /**
   * @schema CloudFrontGetDistributionRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetDistributionResult
 */
export interface CloudFrontGetDistributionResult {
  /**
   * @schema CloudFrontGetDistributionResult#Distribution
   */
  readonly distribution?: CloudFrontDistribution;

  /**
   * @schema CloudFrontGetDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetDistributionConfigRequest
 */
export interface CloudFrontGetDistributionConfigRequest {
  /**
   * @schema CloudFrontGetDistributionConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetDistributionConfigResult
 */
export interface CloudFrontGetDistributionConfigResult {
  /**
   * @schema CloudFrontGetDistributionConfigResult#DistributionConfig
   */
  readonly distributionConfig?: CloudFrontDistributionConfig;

  /**
   * @schema CloudFrontGetDistributionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetFieldLevelEncryptionRequest
 */
export interface CloudFrontGetFieldLevelEncryptionRequest {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetFieldLevelEncryptionResult
 */
export interface CloudFrontGetFieldLevelEncryptionResult {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionResult#FieldLevelEncryption
   */
  readonly fieldLevelEncryption?: CloudFrontFieldLevelEncryption;

  /**
   * @schema CloudFrontGetFieldLevelEncryptionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetFieldLevelEncryptionConfigRequest
 */
export interface CloudFrontGetFieldLevelEncryptionConfigRequest {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetFieldLevelEncryptionConfigResult
 */
export interface CloudFrontGetFieldLevelEncryptionConfigResult {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionConfigResult#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig?: CloudFrontFieldLevelEncryptionConfig;

  /**
   * @schema CloudFrontGetFieldLevelEncryptionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetFieldLevelEncryptionProfileRequest
 */
export interface CloudFrontGetFieldLevelEncryptionProfileRequest {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionProfileRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetFieldLevelEncryptionProfileResult
 */
export interface CloudFrontGetFieldLevelEncryptionProfileResult {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionProfileResult#FieldLevelEncryptionProfile
   */
  readonly fieldLevelEncryptionProfile?: CloudFrontFieldLevelEncryptionProfile;

  /**
   * @schema CloudFrontGetFieldLevelEncryptionProfileResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetFieldLevelEncryptionProfileConfigRequest
 */
export interface CloudFrontGetFieldLevelEncryptionProfileConfigRequest {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionProfileConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetFieldLevelEncryptionProfileConfigResult
 */
export interface CloudFrontGetFieldLevelEncryptionProfileConfigResult {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionProfileConfigResult#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig?: CloudFrontFieldLevelEncryptionProfileConfig;

  /**
   * @schema CloudFrontGetFieldLevelEncryptionProfileConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetInvalidationRequest
 */
export interface CloudFrontGetInvalidationRequest {
  /**
   * @schema CloudFrontGetInvalidationRequest#DistributionId
   */
  readonly distributionId: string;

  /**
   * @schema CloudFrontGetInvalidationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetInvalidationResult
 */
export interface CloudFrontGetInvalidationResult {
  /**
   * @schema CloudFrontGetInvalidationResult#Invalidation
   */
  readonly invalidation?: CloudFrontInvalidation;

}

/**
 * @schema CloudFrontGetKeyGroupRequest
 */
export interface CloudFrontGetKeyGroupRequest {
  /**
   * @schema CloudFrontGetKeyGroupRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetKeyGroupResult
 */
export interface CloudFrontGetKeyGroupResult {
  /**
   * @schema CloudFrontGetKeyGroupResult#KeyGroup
   */
  readonly keyGroup?: CloudFrontKeyGroup;

  /**
   * @schema CloudFrontGetKeyGroupResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetKeyGroupConfigRequest
 */
export interface CloudFrontGetKeyGroupConfigRequest {
  /**
   * @schema CloudFrontGetKeyGroupConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetKeyGroupConfigResult
 */
export interface CloudFrontGetKeyGroupConfigResult {
  /**
   * @schema CloudFrontGetKeyGroupConfigResult#KeyGroupConfig
   */
  readonly keyGroupConfig?: CloudFrontKeyGroupConfig;

  /**
   * @schema CloudFrontGetKeyGroupConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetMonitoringSubscriptionRequest
 */
export interface CloudFrontGetMonitoringSubscriptionRequest {
  /**
   * @schema CloudFrontGetMonitoringSubscriptionRequest#DistributionId
   */
  readonly distributionId: string;

}

/**
 * @schema CloudFrontGetMonitoringSubscriptionResult
 */
export interface CloudFrontGetMonitoringSubscriptionResult {
  /**
   * @schema CloudFrontGetMonitoringSubscriptionResult#MonitoringSubscription
   */
  readonly monitoringSubscription?: CloudFrontMonitoringSubscription;

}

/**
 * @schema CloudFrontGetOriginRequestPolicyRequest
 */
export interface CloudFrontGetOriginRequestPolicyRequest {
  /**
   * @schema CloudFrontGetOriginRequestPolicyRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetOriginRequestPolicyResult
 */
export interface CloudFrontGetOriginRequestPolicyResult {
  /**
   * @schema CloudFrontGetOriginRequestPolicyResult#OriginRequestPolicy
   */
  readonly originRequestPolicy?: CloudFrontOriginRequestPolicy;

  /**
   * @schema CloudFrontGetOriginRequestPolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetOriginRequestPolicyConfigRequest
 */
export interface CloudFrontGetOriginRequestPolicyConfigRequest {
  /**
   * @schema CloudFrontGetOriginRequestPolicyConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetOriginRequestPolicyConfigResult
 */
export interface CloudFrontGetOriginRequestPolicyConfigResult {
  /**
   * @schema CloudFrontGetOriginRequestPolicyConfigResult#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig?: CloudFrontOriginRequestPolicyConfig;

  /**
   * @schema CloudFrontGetOriginRequestPolicyConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetPublicKeyRequest
 */
export interface CloudFrontGetPublicKeyRequest {
  /**
   * @schema CloudFrontGetPublicKeyRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetPublicKeyResult
 */
export interface CloudFrontGetPublicKeyResult {
  /**
   * @schema CloudFrontGetPublicKeyResult#PublicKey
   */
  readonly publicKey?: CloudFrontPublicKey;

  /**
   * @schema CloudFrontGetPublicKeyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetPublicKeyConfigRequest
 */
export interface CloudFrontGetPublicKeyConfigRequest {
  /**
   * @schema CloudFrontGetPublicKeyConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetPublicKeyConfigResult
 */
export interface CloudFrontGetPublicKeyConfigResult {
  /**
   * @schema CloudFrontGetPublicKeyConfigResult#PublicKeyConfig
   */
  readonly publicKeyConfig?: CloudFrontPublicKeyConfig;

  /**
   * @schema CloudFrontGetPublicKeyConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetRealtimeLogConfigRequest
 */
export interface CloudFrontGetRealtimeLogConfigRequest {
  /**
   * @schema CloudFrontGetRealtimeLogConfigRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontGetRealtimeLogConfigRequest#ARN
   */
  readonly arn?: string;

}

/**
 * @schema CloudFrontGetRealtimeLogConfigResult
 */
export interface CloudFrontGetRealtimeLogConfigResult {
  /**
   * @schema CloudFrontGetRealtimeLogConfigResult#RealtimeLogConfig
   */
  readonly realtimeLogConfig?: CloudFrontRealtimeLogConfig;

}

/**
 * @schema CloudFrontGetStreamingDistributionRequest
 */
export interface CloudFrontGetStreamingDistributionRequest {
  /**
   * @schema CloudFrontGetStreamingDistributionRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetStreamingDistributionResult
 */
export interface CloudFrontGetStreamingDistributionResult {
  /**
   * @schema CloudFrontGetStreamingDistributionResult#StreamingDistribution
   */
  readonly streamingDistribution?: CloudFrontStreamingDistribution;

  /**
   * @schema CloudFrontGetStreamingDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontGetStreamingDistributionConfigRequest
 */
export interface CloudFrontGetStreamingDistributionConfigRequest {
  /**
   * @schema CloudFrontGetStreamingDistributionConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CloudFrontGetStreamingDistributionConfigResult
 */
export interface CloudFrontGetStreamingDistributionConfigResult {
  /**
   * @schema CloudFrontGetStreamingDistributionConfigResult#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig?: CloudFrontStreamingDistributionConfig;

  /**
   * @schema CloudFrontGetStreamingDistributionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontListCachePoliciesRequest
 */
export interface CloudFrontListCachePoliciesRequest {
  /**
   * @schema CloudFrontListCachePoliciesRequest#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFrontListCachePoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListCachePoliciesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListCachePoliciesResult
 */
export interface CloudFrontListCachePoliciesResult {
  /**
   * @schema CloudFrontListCachePoliciesResult#CachePolicyList
   */
  readonly cachePolicyList?: CloudFrontCachePolicyList;

}

/**
 * @schema CloudFrontListCloudFrontOriginAccessIdentitiesRequest
 */
export interface CloudFrontListCloudFrontOriginAccessIdentitiesRequest {
  /**
   * @schema CloudFrontListCloudFrontOriginAccessIdentitiesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListCloudFrontOriginAccessIdentitiesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListCloudFrontOriginAccessIdentitiesResult
 */
export interface CloudFrontListCloudFrontOriginAccessIdentitiesResult {
  /**
   * @schema CloudFrontListCloudFrontOriginAccessIdentitiesResult#CloudFrontOriginAccessIdentityList
   */
  readonly cloudFrontOriginAccessIdentityList?: CloudFrontCloudFrontOriginAccessIdentityList;

}

/**
 * @schema CloudFrontListDistributionsRequest
 */
export interface CloudFrontListDistributionsRequest {
  /**
   * @schema CloudFrontListDistributionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListDistributionsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListDistributionsResult
 */
export interface CloudFrontListDistributionsResult {
  /**
   * @schema CloudFrontListDistributionsResult#DistributionList
   */
  readonly distributionList?: CloudFrontDistributionList;

}

/**
 * @schema CloudFrontListDistributionsByCachePolicyIdRequest
 */
export interface CloudFrontListDistributionsByCachePolicyIdRequest {
  /**
   * @schema CloudFrontListDistributionsByCachePolicyIdRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListDistributionsByCachePolicyIdRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema CloudFrontListDistributionsByCachePolicyIdRequest#CachePolicyId
   */
  readonly cachePolicyId: string;

}

/**
 * @schema CloudFrontListDistributionsByCachePolicyIdResult
 */
export interface CloudFrontListDistributionsByCachePolicyIdResult {
  /**
   * @schema CloudFrontListDistributionsByCachePolicyIdResult#DistributionIdList
   */
  readonly distributionIdList?: CloudFrontDistributionIdList;

}

/**
 * @schema CloudFrontListDistributionsByKeyGroupRequest
 */
export interface CloudFrontListDistributionsByKeyGroupRequest {
  /**
   * @schema CloudFrontListDistributionsByKeyGroupRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListDistributionsByKeyGroupRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema CloudFrontListDistributionsByKeyGroupRequest#KeyGroupId
   */
  readonly keyGroupId: string;

}

/**
 * @schema CloudFrontListDistributionsByKeyGroupResult
 */
export interface CloudFrontListDistributionsByKeyGroupResult {
  /**
   * @schema CloudFrontListDistributionsByKeyGroupResult#DistributionIdList
   */
  readonly distributionIdList?: CloudFrontDistributionIdList;

}

/**
 * @schema CloudFrontListDistributionsByOriginRequestPolicyIdRequest
 */
export interface CloudFrontListDistributionsByOriginRequestPolicyIdRequest {
  /**
   * @schema CloudFrontListDistributionsByOriginRequestPolicyIdRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListDistributionsByOriginRequestPolicyIdRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema CloudFrontListDistributionsByOriginRequestPolicyIdRequest#OriginRequestPolicyId
   */
  readonly originRequestPolicyId: string;

}

/**
 * @schema CloudFrontListDistributionsByOriginRequestPolicyIdResult
 */
export interface CloudFrontListDistributionsByOriginRequestPolicyIdResult {
  /**
   * @schema CloudFrontListDistributionsByOriginRequestPolicyIdResult#DistributionIdList
   */
  readonly distributionIdList?: CloudFrontDistributionIdList;

}

/**
 * @schema CloudFrontListDistributionsByRealtimeLogConfigRequest
 */
export interface CloudFrontListDistributionsByRealtimeLogConfigRequest {
  /**
   * @schema CloudFrontListDistributionsByRealtimeLogConfigRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListDistributionsByRealtimeLogConfigRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema CloudFrontListDistributionsByRealtimeLogConfigRequest#RealtimeLogConfigName
   */
  readonly realtimeLogConfigName?: string;

  /**
   * @schema CloudFrontListDistributionsByRealtimeLogConfigRequest#RealtimeLogConfigArn
   */
  readonly realtimeLogConfigArn?: string;

}

/**
 * @schema CloudFrontListDistributionsByRealtimeLogConfigResult
 */
export interface CloudFrontListDistributionsByRealtimeLogConfigResult {
  /**
   * @schema CloudFrontListDistributionsByRealtimeLogConfigResult#DistributionList
   */
  readonly distributionList?: CloudFrontDistributionList;

}

/**
 * @schema CloudFrontListDistributionsByWebAclIdRequest
 */
export interface CloudFrontListDistributionsByWebAclIdRequest {
  /**
   * @schema CloudFrontListDistributionsByWebAclIdRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListDistributionsByWebAclIdRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema CloudFrontListDistributionsByWebAclIdRequest#WebACLId
   */
  readonly webAclId: string;

}

/**
 * @schema CloudFrontListDistributionsByWebAclIdResult
 */
export interface CloudFrontListDistributionsByWebAclIdResult {
  /**
   * @schema CloudFrontListDistributionsByWebAclIdResult#DistributionList
   */
  readonly distributionList?: CloudFrontDistributionList;

}

/**
 * @schema CloudFrontListFieldLevelEncryptionConfigsRequest
 */
export interface CloudFrontListFieldLevelEncryptionConfigsRequest {
  /**
   * @schema CloudFrontListFieldLevelEncryptionConfigsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListFieldLevelEncryptionConfigsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListFieldLevelEncryptionConfigsResult
 */
export interface CloudFrontListFieldLevelEncryptionConfigsResult {
  /**
   * @schema CloudFrontListFieldLevelEncryptionConfigsResult#FieldLevelEncryptionList
   */
  readonly fieldLevelEncryptionList?: CloudFrontFieldLevelEncryptionList;

}

/**
 * @schema CloudFrontListFieldLevelEncryptionProfilesRequest
 */
export interface CloudFrontListFieldLevelEncryptionProfilesRequest {
  /**
   * @schema CloudFrontListFieldLevelEncryptionProfilesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListFieldLevelEncryptionProfilesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListFieldLevelEncryptionProfilesResult
 */
export interface CloudFrontListFieldLevelEncryptionProfilesResult {
  /**
   * @schema CloudFrontListFieldLevelEncryptionProfilesResult#FieldLevelEncryptionProfileList
   */
  readonly fieldLevelEncryptionProfileList?: CloudFrontFieldLevelEncryptionProfileList;

}

/**
 * @schema CloudFrontListInvalidationsRequest
 */
export interface CloudFrontListInvalidationsRequest {
  /**
   * @schema CloudFrontListInvalidationsRequest#DistributionId
   */
  readonly distributionId: string;

  /**
   * @schema CloudFrontListInvalidationsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListInvalidationsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListInvalidationsResult
 */
export interface CloudFrontListInvalidationsResult {
  /**
   * @schema CloudFrontListInvalidationsResult#InvalidationList
   */
  readonly invalidationList?: CloudFrontInvalidationList;

}

/**
 * @schema CloudFrontListKeyGroupsRequest
 */
export interface CloudFrontListKeyGroupsRequest {
  /**
   * @schema CloudFrontListKeyGroupsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListKeyGroupsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListKeyGroupsResult
 */
export interface CloudFrontListKeyGroupsResult {
  /**
   * @schema CloudFrontListKeyGroupsResult#KeyGroupList
   */
  readonly keyGroupList?: CloudFrontKeyGroupList;

}

/**
 * @schema CloudFrontListOriginRequestPoliciesRequest
 */
export interface CloudFrontListOriginRequestPoliciesRequest {
  /**
   * @schema CloudFrontListOriginRequestPoliciesRequest#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFrontListOriginRequestPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListOriginRequestPoliciesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListOriginRequestPoliciesResult
 */
export interface CloudFrontListOriginRequestPoliciesResult {
  /**
   * @schema CloudFrontListOriginRequestPoliciesResult#OriginRequestPolicyList
   */
  readonly originRequestPolicyList?: CloudFrontOriginRequestPolicyList;

}

/**
 * @schema CloudFrontListPublicKeysRequest
 */
export interface CloudFrontListPublicKeysRequest {
  /**
   * @schema CloudFrontListPublicKeysRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListPublicKeysRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListPublicKeysResult
 */
export interface CloudFrontListPublicKeysResult {
  /**
   * @schema CloudFrontListPublicKeysResult#PublicKeyList
   */
  readonly publicKeyList?: CloudFrontPublicKeyList;

}

/**
 * @schema CloudFrontListRealtimeLogConfigsRequest
 */
export interface CloudFrontListRealtimeLogConfigsRequest {
  /**
   * @schema CloudFrontListRealtimeLogConfigsRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema CloudFrontListRealtimeLogConfigsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CloudFrontListRealtimeLogConfigsResult
 */
export interface CloudFrontListRealtimeLogConfigsResult {
  /**
   * @schema CloudFrontListRealtimeLogConfigsResult#RealtimeLogConfigs
   */
  readonly realtimeLogConfigs?: CloudFrontRealtimeLogConfigs;

}

/**
 * @schema CloudFrontListStreamingDistributionsRequest
 */
export interface CloudFrontListStreamingDistributionsRequest {
  /**
   * @schema CloudFrontListStreamingDistributionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListStreamingDistributionsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema CloudFrontListStreamingDistributionsResult
 */
export interface CloudFrontListStreamingDistributionsResult {
  /**
   * @schema CloudFrontListStreamingDistributionsResult#StreamingDistributionList
   */
  readonly streamingDistributionList?: CloudFrontStreamingDistributionList;

}

/**
 * @schema CloudFrontListTagsForResourceRequest
 */
export interface CloudFrontListTagsForResourceRequest {
  /**
   * @schema CloudFrontListTagsForResourceRequest#Resource
   */
  readonly resource: string;

}

/**
 * @schema CloudFrontListTagsForResourceResult
 */
export interface CloudFrontListTagsForResourceResult {
  /**
   * @schema CloudFrontListTagsForResourceResult#Tags
   */
  readonly tags: CloudFrontTags;

}

/**
 * @schema CloudFrontTagResourceRequest
 */
export interface CloudFrontTagResourceRequest {
  /**
   * @schema CloudFrontTagResourceRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema CloudFrontTagResourceRequest#Tags
   */
  readonly tags: CloudFrontTags;

}

/**
 * @schema CloudFrontUntagResourceRequest
 */
export interface CloudFrontUntagResourceRequest {
  /**
   * @schema CloudFrontUntagResourceRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema CloudFrontUntagResourceRequest#TagKeys
   */
  readonly tagKeys: CloudFrontTagKeys;

}

/**
 * @schema CloudFrontUpdateCachePolicyRequest
 */
export interface CloudFrontUpdateCachePolicyRequest {
  /**
   * @schema CloudFrontUpdateCachePolicyRequest#CachePolicyConfig
   */
  readonly cachePolicyConfig: CloudFrontCachePolicyConfig;

  /**
   * @schema CloudFrontUpdateCachePolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontUpdateCachePolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontUpdateCachePolicyResult
 */
export interface CloudFrontUpdateCachePolicyResult {
  /**
   * @schema CloudFrontUpdateCachePolicyResult#CachePolicy
   */
  readonly cachePolicy?: CloudFrontCachePolicy;

  /**
   * @schema CloudFrontUpdateCachePolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityRequest
 */
export interface CloudFrontUpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityRequest#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig: CloudFrontCloudFrontOriginAccessIdentityConfig;

  /**
   * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityResult
 */
export interface CloudFrontUpdateCloudFrontOriginAccessIdentityResult {
  /**
   * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityResult#CloudFrontOriginAccessIdentity
   */
  readonly cloudFrontOriginAccessIdentity?: CloudFrontCloudFrontOriginAccessIdentity;

  /**
   * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontUpdateDistributionRequest
 */
export interface CloudFrontUpdateDistributionRequest {
  /**
   * @schema CloudFrontUpdateDistributionRequest#DistributionConfig
   */
  readonly distributionConfig: CloudFrontDistributionConfig;

  /**
   * @schema CloudFrontUpdateDistributionRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontUpdateDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontUpdateDistributionResult
 */
export interface CloudFrontUpdateDistributionResult {
  /**
   * @schema CloudFrontUpdateDistributionResult#Distribution
   */
  readonly distribution?: CloudFrontDistribution;

  /**
   * @schema CloudFrontUpdateDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontUpdateFieldLevelEncryptionConfigRequest
 */
export interface CloudFrontUpdateFieldLevelEncryptionConfigRequest {
  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionConfigRequest#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig: CloudFrontFieldLevelEncryptionConfig;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionConfigRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionConfigRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontUpdateFieldLevelEncryptionConfigResult
 */
export interface CloudFrontUpdateFieldLevelEncryptionConfigResult {
  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionConfigResult#FieldLevelEncryption
   */
  readonly fieldLevelEncryption?: CloudFrontFieldLevelEncryption;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionConfigResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontUpdateFieldLevelEncryptionProfileRequest
 */
export interface CloudFrontUpdateFieldLevelEncryptionProfileRequest {
  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionProfileRequest#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig: CloudFrontFieldLevelEncryptionProfileConfig;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionProfileRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionProfileRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontUpdateFieldLevelEncryptionProfileResult
 */
export interface CloudFrontUpdateFieldLevelEncryptionProfileResult {
  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionProfileResult#FieldLevelEncryptionProfile
   */
  readonly fieldLevelEncryptionProfile?: CloudFrontFieldLevelEncryptionProfile;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionProfileResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontUpdateKeyGroupRequest
 */
export interface CloudFrontUpdateKeyGroupRequest {
  /**
   * @schema CloudFrontUpdateKeyGroupRequest#KeyGroupConfig
   */
  readonly keyGroupConfig: CloudFrontKeyGroupConfig;

  /**
   * @schema CloudFrontUpdateKeyGroupRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontUpdateKeyGroupRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontUpdateKeyGroupResult
 */
export interface CloudFrontUpdateKeyGroupResult {
  /**
   * @schema CloudFrontUpdateKeyGroupResult#KeyGroup
   */
  readonly keyGroup?: CloudFrontKeyGroup;

  /**
   * @schema CloudFrontUpdateKeyGroupResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontUpdateOriginRequestPolicyRequest
 */
export interface CloudFrontUpdateOriginRequestPolicyRequest {
  /**
   * @schema CloudFrontUpdateOriginRequestPolicyRequest#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig: CloudFrontOriginRequestPolicyConfig;

  /**
   * @schema CloudFrontUpdateOriginRequestPolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontUpdateOriginRequestPolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontUpdateOriginRequestPolicyResult
 */
export interface CloudFrontUpdateOriginRequestPolicyResult {
  /**
   * @schema CloudFrontUpdateOriginRequestPolicyResult#OriginRequestPolicy
   */
  readonly originRequestPolicy?: CloudFrontOriginRequestPolicy;

  /**
   * @schema CloudFrontUpdateOriginRequestPolicyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontUpdatePublicKeyRequest
 */
export interface CloudFrontUpdatePublicKeyRequest {
  /**
   * @schema CloudFrontUpdatePublicKeyRequest#PublicKeyConfig
   */
  readonly publicKeyConfig: CloudFrontPublicKeyConfig;

  /**
   * @schema CloudFrontUpdatePublicKeyRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontUpdatePublicKeyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontUpdatePublicKeyResult
 */
export interface CloudFrontUpdatePublicKeyResult {
  /**
   * @schema CloudFrontUpdatePublicKeyResult#PublicKey
   */
  readonly publicKey?: CloudFrontPublicKey;

  /**
   * @schema CloudFrontUpdatePublicKeyResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontUpdateRealtimeLogConfigRequest
 */
export interface CloudFrontUpdateRealtimeLogConfigRequest {
  /**
   * @schema CloudFrontUpdateRealtimeLogConfigRequest#EndPoints
   */
  readonly endPoints?: CloudFrontEndPoint[];

  /**
   * @schema CloudFrontUpdateRealtimeLogConfigRequest#Fields
   */
  readonly fields?: string[];

  /**
   * @schema CloudFrontUpdateRealtimeLogConfigRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontUpdateRealtimeLogConfigRequest#ARN
   */
  readonly arn?: string;

  /**
   * @schema CloudFrontUpdateRealtimeLogConfigRequest#SamplingRate
   */
  readonly samplingRate?: number;

}

/**
 * @schema CloudFrontUpdateRealtimeLogConfigResult
 */
export interface CloudFrontUpdateRealtimeLogConfigResult {
  /**
   * @schema CloudFrontUpdateRealtimeLogConfigResult#RealtimeLogConfig
   */
  readonly realtimeLogConfig?: CloudFrontRealtimeLogConfig;

}

/**
 * @schema CloudFrontUpdateStreamingDistributionRequest
 */
export interface CloudFrontUpdateStreamingDistributionRequest {
  /**
   * @schema CloudFrontUpdateStreamingDistributionRequest#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig: CloudFrontStreamingDistributionConfig;

  /**
   * @schema CloudFrontUpdateStreamingDistributionRequest#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontUpdateStreamingDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * @schema CloudFrontUpdateStreamingDistributionResult
 */
export interface CloudFrontUpdateStreamingDistributionResult {
  /**
   * @schema CloudFrontUpdateStreamingDistributionResult#StreamingDistribution
   */
  readonly streamingDistribution?: CloudFrontStreamingDistribution;

  /**
   * @schema CloudFrontUpdateStreamingDistributionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * @schema CloudFrontCachePolicyConfig
 */
export interface CloudFrontCachePolicyConfig {
  /**
   * @schema CloudFrontCachePolicyConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontCachePolicyConfig#Name
   */
  readonly name: string;

  /**
   * @schema CloudFrontCachePolicyConfig#DefaultTTL
   */
  readonly defaultTtl?: number;

  /**
   * @schema CloudFrontCachePolicyConfig#MaxTTL
   */
  readonly maxTtl?: number;

  /**
   * @schema CloudFrontCachePolicyConfig#MinTTL
   */
  readonly minTtl: number;

  /**
   * @schema CloudFrontCachePolicyConfig#ParametersInCacheKeyAndForwardedToOrigin
   */
  readonly parametersInCacheKeyAndForwardedToOrigin?: CloudFrontParametersInCacheKeyAndForwardedToOrigin;

}

/**
 * @schema CloudFrontCachePolicy
 */
export interface CloudFrontCachePolicy {
  /**
   * @schema CloudFrontCachePolicy#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontCachePolicy#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontCachePolicy#CachePolicyConfig
   */
  readonly cachePolicyConfig: CloudFrontCachePolicyConfig;

}

/**
 * @schema CloudFrontCloudFrontOriginAccessIdentityConfig
 */
export interface CloudFrontCloudFrontOriginAccessIdentityConfig {
  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityConfig#Comment
   */
  readonly comment: string;

}

/**
 * @schema CloudFrontCloudFrontOriginAccessIdentity
 */
export interface CloudFrontCloudFrontOriginAccessIdentity {
  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentity#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentity#S3CanonicalUserId
   */
  readonly s3CanonicalUserId: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentity#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig?: CloudFrontCloudFrontOriginAccessIdentityConfig;

}

/**
 * @schema CloudFrontDistributionConfig
 */
export interface CloudFrontDistributionConfig {
  /**
   * @schema CloudFrontDistributionConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CloudFrontDistributionConfig#Aliases
   */
  readonly aliases?: CloudFrontAliases;

  /**
   * @schema CloudFrontDistributionConfig#DefaultRootObject
   */
  readonly defaultRootObject?: string;

  /**
   * @schema CloudFrontDistributionConfig#Origins
   */
  readonly origins: CloudFrontOrigins;

  /**
   * @schema CloudFrontDistributionConfig#OriginGroups
   */
  readonly originGroups?: CloudFrontOriginGroups;

  /**
   * @schema CloudFrontDistributionConfig#DefaultCacheBehavior
   */
  readonly defaultCacheBehavior: CloudFrontDefaultCacheBehavior;

  /**
   * @schema CloudFrontDistributionConfig#CacheBehaviors
   */
  readonly cacheBehaviors?: CloudFrontCacheBehaviors;

  /**
   * @schema CloudFrontDistributionConfig#CustomErrorResponses
   */
  readonly customErrorResponses?: CloudFrontCustomErrorResponses;

  /**
   * @schema CloudFrontDistributionConfig#Comment
   */
  readonly comment: string;

  /**
   * @schema CloudFrontDistributionConfig#Logging
   */
  readonly logging?: CloudFrontLoggingConfig;

  /**
   * @schema CloudFrontDistributionConfig#PriceClass
   */
  readonly priceClass?: string;

  /**
   * @schema CloudFrontDistributionConfig#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudFrontDistributionConfig#ViewerCertificate
   */
  readonly viewerCertificate?: CloudFrontViewerCertificate;

  /**
   * @schema CloudFrontDistributionConfig#Restrictions
   */
  readonly restrictions?: CloudFrontRestrictions;

  /**
   * @schema CloudFrontDistributionConfig#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema CloudFrontDistributionConfig#HttpVersion
   */
  readonly httpVersion?: string;

  /**
   * @schema CloudFrontDistributionConfig#IsIPV6Enabled
   */
  readonly isIpv6Enabled?: boolean;

}

/**
 * @schema CloudFrontDistribution
 */
export interface CloudFrontDistribution {
  /**
   * @schema CloudFrontDistribution#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDistribution#ARN
   */
  readonly arn: string;

  /**
   * @schema CloudFrontDistribution#Status
   */
  readonly status: string;

  /**
   * @schema CloudFrontDistribution#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontDistribution#InProgressInvalidationBatches
   */
  readonly inProgressInvalidationBatches: number;

  /**
   * @schema CloudFrontDistribution#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudFrontDistribution#ActiveTrustedSigners
   */
  readonly activeTrustedSigners?: CloudFrontActiveTrustedSigners;

  /**
   * @schema CloudFrontDistribution#ActiveTrustedKeyGroups
   */
  readonly activeTrustedKeyGroups?: CloudFrontActiveTrustedKeyGroups;

  /**
   * @schema CloudFrontDistribution#DistributionConfig
   */
  readonly distributionConfig: CloudFrontDistributionConfig;

  /**
   * @schema CloudFrontDistribution#AliasICPRecordals
   */
  readonly aliasIcpRecordals?: CloudFrontAliasIcpRecordal[];

}

/**
 * @schema CloudFrontDistributionConfigWithTags
 */
export interface CloudFrontDistributionConfigWithTags {
  /**
   * @schema CloudFrontDistributionConfigWithTags#DistributionConfig
   */
  readonly distributionConfig: CloudFrontDistributionConfig;

  /**
   * @schema CloudFrontDistributionConfigWithTags#Tags
   */
  readonly tags: CloudFrontTags;

}

/**
 * @schema CloudFrontFieldLevelEncryptionConfig
 */
export interface CloudFrontFieldLevelEncryptionConfig {
  /**
   * @schema CloudFrontFieldLevelEncryptionConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionConfig#QueryArgProfileConfig
   */
  readonly queryArgProfileConfig?: CloudFrontQueryArgProfileConfig;

  /**
   * @schema CloudFrontFieldLevelEncryptionConfig#ContentTypeProfileConfig
   */
  readonly contentTypeProfileConfig?: CloudFrontContentTypeProfileConfig;

}

/**
 * @schema CloudFrontFieldLevelEncryption
 */
export interface CloudFrontFieldLevelEncryption {
  /**
   * @schema CloudFrontFieldLevelEncryption#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontFieldLevelEncryption#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontFieldLevelEncryption#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig: CloudFrontFieldLevelEncryptionConfig;

}

/**
 * @schema CloudFrontFieldLevelEncryptionProfileConfig
 */
export interface CloudFrontFieldLevelEncryptionProfileConfig {
  /**
   * @schema CloudFrontFieldLevelEncryptionProfileConfig#Name
   */
  readonly name: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileConfig#EncryptionEntities
   */
  readonly encryptionEntities: CloudFrontEncryptionEntities;

}

/**
 * @schema CloudFrontFieldLevelEncryptionProfile
 */
export interface CloudFrontFieldLevelEncryptionProfile {
  /**
   * @schema CloudFrontFieldLevelEncryptionProfile#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfile#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfile#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig: CloudFrontFieldLevelEncryptionProfileConfig;

}

/**
 * @schema CloudFrontInvalidationBatch
 */
export interface CloudFrontInvalidationBatch {
  /**
   * @schema CloudFrontInvalidationBatch#Paths
   */
  readonly paths: CloudFrontPaths;

  /**
   * @schema CloudFrontInvalidationBatch#CallerReference
   */
  readonly callerReference: string;

}

/**
 * @schema CloudFrontInvalidation
 */
export interface CloudFrontInvalidation {
  /**
   * @schema CloudFrontInvalidation#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontInvalidation#Status
   */
  readonly status: string;

  /**
   * @schema CloudFrontInvalidation#CreateTime
   */
  readonly createTime: string;

  /**
   * @schema CloudFrontInvalidation#InvalidationBatch
   */
  readonly invalidationBatch: CloudFrontInvalidationBatch;

}

/**
 * @schema CloudFrontKeyGroupConfig
 */
export interface CloudFrontKeyGroupConfig {
  /**
   * @schema CloudFrontKeyGroupConfig#Name
   */
  readonly name: string;

  /**
   * @schema CloudFrontKeyGroupConfig#Items
   */
  readonly items: string[];

  /**
   * @schema CloudFrontKeyGroupConfig#Comment
   */
  readonly comment?: string;

}

/**
 * @schema CloudFrontKeyGroup
 */
export interface CloudFrontKeyGroup {
  /**
   * @schema CloudFrontKeyGroup#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontKeyGroup#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontKeyGroup#KeyGroupConfig
   */
  readonly keyGroupConfig: CloudFrontKeyGroupConfig;

}

/**
 * @schema CloudFrontMonitoringSubscription
 */
export interface CloudFrontMonitoringSubscription {
  /**
   * @schema CloudFrontMonitoringSubscription#RealtimeMetricsSubscriptionConfig
   */
  readonly realtimeMetricsSubscriptionConfig?: CloudFrontRealtimeMetricsSubscriptionConfig;

}

/**
 * @schema CloudFrontOriginRequestPolicyConfig
 */
export interface CloudFrontOriginRequestPolicyConfig {
  /**
   * @schema CloudFrontOriginRequestPolicyConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontOriginRequestPolicyConfig#Name
   */
  readonly name: string;

  /**
   * @schema CloudFrontOriginRequestPolicyConfig#HeadersConfig
   */
  readonly headersConfig: CloudFrontOriginRequestPolicyHeadersConfig;

  /**
   * @schema CloudFrontOriginRequestPolicyConfig#CookiesConfig
   */
  readonly cookiesConfig: CloudFrontOriginRequestPolicyCookiesConfig;

  /**
   * @schema CloudFrontOriginRequestPolicyConfig#QueryStringsConfig
   */
  readonly queryStringsConfig: CloudFrontOriginRequestPolicyQueryStringsConfig;

}

/**
 * @schema CloudFrontOriginRequestPolicy
 */
export interface CloudFrontOriginRequestPolicy {
  /**
   * @schema CloudFrontOriginRequestPolicy#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontOriginRequestPolicy#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontOriginRequestPolicy#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig: CloudFrontOriginRequestPolicyConfig;

}

/**
 * @schema CloudFrontPublicKeyConfig
 */
export interface CloudFrontPublicKeyConfig {
  /**
   * @schema CloudFrontPublicKeyConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CloudFrontPublicKeyConfig#Name
   */
  readonly name: string;

  /**
   * @schema CloudFrontPublicKeyConfig#EncodedKey
   */
  readonly encodedKey: string;

  /**
   * @schema CloudFrontPublicKeyConfig#Comment
   */
  readonly comment?: string;

}

/**
 * @schema CloudFrontPublicKey
 */
export interface CloudFrontPublicKey {
  /**
   * @schema CloudFrontPublicKey#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontPublicKey#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema CloudFrontPublicKey#PublicKeyConfig
   */
  readonly publicKeyConfig: CloudFrontPublicKeyConfig;

}

/**
 * @schema CloudFrontEndPoint
 */
export interface CloudFrontEndPoint {
  /**
   * @schema CloudFrontEndPoint#StreamType
   */
  readonly streamType: string;

  /**
   * @schema CloudFrontEndPoint#KinesisStreamConfig
   */
  readonly kinesisStreamConfig?: CloudFrontKinesisStreamConfig;

}

/**
 * @schema CloudFrontRealtimeLogConfig
 */
export interface CloudFrontRealtimeLogConfig {
  /**
   * @schema CloudFrontRealtimeLogConfig#ARN
   */
  readonly arn: string;

  /**
   * @schema CloudFrontRealtimeLogConfig#Name
   */
  readonly name: string;

  /**
   * @schema CloudFrontRealtimeLogConfig#SamplingRate
   */
  readonly samplingRate: number;

  /**
   * @schema CloudFrontRealtimeLogConfig#EndPoints
   */
  readonly endPoints: CloudFrontEndPoint[];

  /**
   * @schema CloudFrontRealtimeLogConfig#Fields
   */
  readonly fields: string[];

}

/**
 * @schema CloudFrontStreamingDistributionConfig
 */
export interface CloudFrontStreamingDistributionConfig {
  /**
   * @schema CloudFrontStreamingDistributionConfig#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CloudFrontStreamingDistributionConfig#S3Origin
   */
  readonly s3Origin: CloudFrontS3Origin;

  /**
   * @schema CloudFrontStreamingDistributionConfig#Aliases
   */
  readonly aliases?: CloudFrontAliases;

  /**
   * @schema CloudFrontStreamingDistributionConfig#Comment
   */
  readonly comment: string;

  /**
   * @schema CloudFrontStreamingDistributionConfig#Logging
   */
  readonly logging?: CloudFrontStreamingLoggingConfig;

  /**
   * @schema CloudFrontStreamingDistributionConfig#TrustedSigners
   */
  readonly trustedSigners: CloudFrontTrustedSigners;

  /**
   * @schema CloudFrontStreamingDistributionConfig#PriceClass
   */
  readonly priceClass?: string;

  /**
   * @schema CloudFrontStreamingDistributionConfig#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema CloudFrontStreamingDistribution
 */
export interface CloudFrontStreamingDistribution {
  /**
   * @schema CloudFrontStreamingDistribution#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontStreamingDistribution#ARN
   */
  readonly arn: string;

  /**
   * @schema CloudFrontStreamingDistribution#Status
   */
  readonly status: string;

  /**
   * @schema CloudFrontStreamingDistribution#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontStreamingDistribution#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudFrontStreamingDistribution#ActiveTrustedSigners
   */
  readonly activeTrustedSigners: CloudFrontActiveTrustedSigners;

  /**
   * @schema CloudFrontStreamingDistribution#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig: CloudFrontStreamingDistributionConfig;

}

/**
 * @schema CloudFrontStreamingDistributionConfigWithTags
 */
export interface CloudFrontStreamingDistributionConfigWithTags {
  /**
   * @schema CloudFrontStreamingDistributionConfigWithTags#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig: CloudFrontStreamingDistributionConfig;

  /**
   * @schema CloudFrontStreamingDistributionConfigWithTags#Tags
   */
  readonly tags: CloudFrontTags;

}

/**
 * @schema CloudFrontCachePolicyList
 */
export interface CloudFrontCachePolicyList {
  /**
   * @schema CloudFrontCachePolicyList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontCachePolicyList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontCachePolicyList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontCachePolicyList#Items
   */
  readonly items?: CloudFrontCachePolicySummary[];

}

/**
 * @schema CloudFrontCloudFrontOriginAccessIdentityList
 */
export interface CloudFrontCloudFrontOriginAccessIdentityList {
  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#Marker
   */
  readonly marker: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#Items
   */
  readonly items?: CloudFrontCloudFrontOriginAccessIdentitySummary[];

}

/**
 * @schema CloudFrontDistributionList
 */
export interface CloudFrontDistributionList {
  /**
   * @schema CloudFrontDistributionList#Marker
   */
  readonly marker: string;

  /**
   * @schema CloudFrontDistributionList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontDistributionList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontDistributionList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema CloudFrontDistributionList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontDistributionList#Items
   */
  readonly items?: CloudFrontDistributionSummary[];

}

/**
 * @schema CloudFrontDistributionIdList
 */
export interface CloudFrontDistributionIdList {
  /**
   * @schema CloudFrontDistributionIdList#Marker
   */
  readonly marker: string;

  /**
   * @schema CloudFrontDistributionIdList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontDistributionIdList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontDistributionIdList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema CloudFrontDistributionIdList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontDistributionIdList#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontFieldLevelEncryptionList
 */
export interface CloudFrontFieldLevelEncryptionList {
  /**
   * @schema CloudFrontFieldLevelEncryptionList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontFieldLevelEncryptionList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontFieldLevelEncryptionList#Items
   */
  readonly items?: CloudFrontFieldLevelEncryptionSummary[];

}

/**
 * @schema CloudFrontFieldLevelEncryptionProfileList
 */
export interface CloudFrontFieldLevelEncryptionProfileList {
  /**
   * @schema CloudFrontFieldLevelEncryptionProfileList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileList#Items
   */
  readonly items?: CloudFrontFieldLevelEncryptionProfileSummary[];

}

/**
 * @schema CloudFrontInvalidationList
 */
export interface CloudFrontInvalidationList {
  /**
   * @schema CloudFrontInvalidationList#Marker
   */
  readonly marker: string;

  /**
   * @schema CloudFrontInvalidationList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontInvalidationList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontInvalidationList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema CloudFrontInvalidationList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontInvalidationList#Items
   */
  readonly items?: CloudFrontInvalidationSummary[];

}

/**
 * @schema CloudFrontKeyGroupList
 */
export interface CloudFrontKeyGroupList {
  /**
   * @schema CloudFrontKeyGroupList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontKeyGroupList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontKeyGroupList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontKeyGroupList#Items
   */
  readonly items?: CloudFrontKeyGroupSummary[];

}

/**
 * @schema CloudFrontOriginRequestPolicyList
 */
export interface CloudFrontOriginRequestPolicyList {
  /**
   * @schema CloudFrontOriginRequestPolicyList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontOriginRequestPolicyList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontOriginRequestPolicyList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontOriginRequestPolicyList#Items
   */
  readonly items?: CloudFrontOriginRequestPolicySummary[];

}

/**
 * @schema CloudFrontPublicKeyList
 */
export interface CloudFrontPublicKeyList {
  /**
   * @schema CloudFrontPublicKeyList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontPublicKeyList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontPublicKeyList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontPublicKeyList#Items
   */
  readonly items?: CloudFrontPublicKeySummary[];

}

/**
 * @schema CloudFrontRealtimeLogConfigs
 */
export interface CloudFrontRealtimeLogConfigs {
  /**
   * @schema CloudFrontRealtimeLogConfigs#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontRealtimeLogConfigs#Items
   */
  readonly items?: CloudFrontRealtimeLogConfig[];

  /**
   * @schema CloudFrontRealtimeLogConfigs#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema CloudFrontRealtimeLogConfigs#Marker
   */
  readonly marker: string;

  /**
   * @schema CloudFrontRealtimeLogConfigs#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema CloudFrontStreamingDistributionList
 */
export interface CloudFrontStreamingDistributionList {
  /**
   * @schema CloudFrontStreamingDistributionList#Marker
   */
  readonly marker: string;

  /**
   * @schema CloudFrontStreamingDistributionList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontStreamingDistributionList#MaxItems
   */
  readonly maxItems: number;

  /**
   * @schema CloudFrontStreamingDistributionList#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema CloudFrontStreamingDistributionList#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontStreamingDistributionList#Items
   */
  readonly items?: CloudFrontStreamingDistributionSummary[];

}

/**
 * @schema CloudFrontTags
 */
export interface CloudFrontTags {
  /**
   * @schema CloudFrontTags#Items
   */
  readonly items?: CloudFrontTag[];

}

/**
 * @schema CloudFrontTagKeys
 */
export interface CloudFrontTagKeys {
  /**
   * @schema CloudFrontTagKeys#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin
 */
export interface CloudFrontParametersInCacheKeyAndForwardedToOrigin {
  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#EnableAcceptEncodingGzip
   */
  readonly enableAcceptEncodingGzip: boolean;

  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#EnableAcceptEncodingBrotli
   */
  readonly enableAcceptEncodingBrotli?: boolean;

  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#HeadersConfig
   */
  readonly headersConfig: CloudFrontCachePolicyHeadersConfig;

  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#CookiesConfig
   */
  readonly cookiesConfig: CloudFrontCachePolicyCookiesConfig;

  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#QueryStringsConfig
   */
  readonly queryStringsConfig: CloudFrontCachePolicyQueryStringsConfig;

}

/**
 * @schema CloudFrontAliases
 */
export interface CloudFrontAliases {
  /**
   * @schema CloudFrontAliases#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontAliases#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontOrigins
 */
export interface CloudFrontOrigins {
  /**
   * @schema CloudFrontOrigins#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontOrigins#Items
   */
  readonly items: CloudFrontOrigin[];

}

/**
 * @schema CloudFrontOriginGroups
 */
export interface CloudFrontOriginGroups {
  /**
   * @schema CloudFrontOriginGroups#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontOriginGroups#Items
   */
  readonly items?: CloudFrontOriginGroup[];

}

/**
 * @schema CloudFrontDefaultCacheBehavior
 */
export interface CloudFrontDefaultCacheBehavior {
  /**
   * @schema CloudFrontDefaultCacheBehavior#TargetOriginId
   */
  readonly targetOriginId: string;

  /**
   * @schema CloudFrontDefaultCacheBehavior#TrustedSigners
   */
  readonly trustedSigners?: CloudFrontTrustedSigners;

  /**
   * @schema CloudFrontDefaultCacheBehavior#TrustedKeyGroups
   */
  readonly trustedKeyGroups?: CloudFrontTrustedKeyGroups;

  /**
   * @schema CloudFrontDefaultCacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy: string;

  /**
   * @schema CloudFrontDefaultCacheBehavior#AllowedMethods
   */
  readonly allowedMethods?: CloudFrontAllowedMethods;

  /**
   * @schema CloudFrontDefaultCacheBehavior#SmoothStreaming
   */
  readonly smoothStreaming?: boolean;

  /**
   * @schema CloudFrontDefaultCacheBehavior#Compress
   */
  readonly compress?: boolean;

  /**
   * @schema CloudFrontDefaultCacheBehavior#LambdaFunctionAssociations
   */
  readonly lambdaFunctionAssociations?: CloudFrontLambdaFunctionAssociations;

  /**
   * @schema CloudFrontDefaultCacheBehavior#FieldLevelEncryptionId
   */
  readonly fieldLevelEncryptionId?: string;

  /**
   * @schema CloudFrontDefaultCacheBehavior#RealtimeLogConfigArn
   */
  readonly realtimeLogConfigArn?: string;

  /**
   * @schema CloudFrontDefaultCacheBehavior#CachePolicyId
   */
  readonly cachePolicyId?: string;

  /**
   * @schema CloudFrontDefaultCacheBehavior#OriginRequestPolicyId
   */
  readonly originRequestPolicyId?: string;

  /**
   * @schema CloudFrontDefaultCacheBehavior#ForwardedValues
   */
  readonly forwardedValues?: CloudFrontForwardedValues;

  /**
   * @schema CloudFrontDefaultCacheBehavior#MinTTL
   */
  readonly minTtl?: number;

  /**
   * @schema CloudFrontDefaultCacheBehavior#DefaultTTL
   */
  readonly defaultTtl?: number;

  /**
   * @schema CloudFrontDefaultCacheBehavior#MaxTTL
   */
  readonly maxTtl?: number;

}

/**
 * @schema CloudFrontCacheBehaviors
 */
export interface CloudFrontCacheBehaviors {
  /**
   * @schema CloudFrontCacheBehaviors#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontCacheBehaviors#Items
   */
  readonly items?: CloudFrontCacheBehavior[];

}

/**
 * @schema CloudFrontCustomErrorResponses
 */
export interface CloudFrontCustomErrorResponses {
  /**
   * @schema CloudFrontCustomErrorResponses#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontCustomErrorResponses#Items
   */
  readonly items?: CloudFrontCustomErrorResponse[];

}

/**
 * @schema CloudFrontLoggingConfig
 */
export interface CloudFrontLoggingConfig {
  /**
   * @schema CloudFrontLoggingConfig#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudFrontLoggingConfig#IncludeCookies
   */
  readonly includeCookies: boolean;

  /**
   * @schema CloudFrontLoggingConfig#Bucket
   */
  readonly bucket: string;

  /**
   * @schema CloudFrontLoggingConfig#Prefix
   */
  readonly prefix: string;

}

/**
 * @schema CloudFrontViewerCertificate
 */
export interface CloudFrontViewerCertificate {
  /**
   * @schema CloudFrontViewerCertificate#CloudFrontDefaultCertificate
   */
  readonly cloudFrontDefaultCertificate?: boolean;

  /**
   * @schema CloudFrontViewerCertificate#IAMCertificateId
   */
  readonly iamCertificateId?: string;

  /**
   * @schema CloudFrontViewerCertificate#ACMCertificateArn
   */
  readonly acmCertificateArn?: string;

  /**
   * @schema CloudFrontViewerCertificate#SSLSupportMethod
   */
  readonly sslSupportMethod?: string;

  /**
   * @schema CloudFrontViewerCertificate#MinimumProtocolVersion
   */
  readonly minimumProtocolVersion?: string;

  /**
   * @schema CloudFrontViewerCertificate#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema CloudFrontViewerCertificate#CertificateSource
   */
  readonly certificateSource?: string;

}

/**
 * @schema CloudFrontRestrictions
 */
export interface CloudFrontRestrictions {
  /**
   * @schema CloudFrontRestrictions#GeoRestriction
   */
  readonly geoRestriction: CloudFrontGeoRestriction;

}

/**
 * @schema CloudFrontActiveTrustedSigners
 */
export interface CloudFrontActiveTrustedSigners {
  /**
   * @schema CloudFrontActiveTrustedSigners#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudFrontActiveTrustedSigners#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontActiveTrustedSigners#Items
   */
  readonly items?: CloudFrontSigner[];

}

/**
 * @schema CloudFrontActiveTrustedKeyGroups
 */
export interface CloudFrontActiveTrustedKeyGroups {
  /**
   * @schema CloudFrontActiveTrustedKeyGroups#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudFrontActiveTrustedKeyGroups#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontActiveTrustedKeyGroups#Items
   */
  readonly items?: CloudFrontKgKeyPairIds[];

}

/**
 * @schema CloudFrontAliasIcpRecordal
 */
export interface CloudFrontAliasIcpRecordal {
  /**
   * @schema CloudFrontAliasIcpRecordal#CNAME
   */
  readonly cname?: string;

  /**
   * @schema CloudFrontAliasIcpRecordal#ICPRecordalStatus
   */
  readonly icpRecordalStatus?: string;

}

/**
 * @schema CloudFrontQueryArgProfileConfig
 */
export interface CloudFrontQueryArgProfileConfig {
  /**
   * @schema CloudFrontQueryArgProfileConfig#ForwardWhenQueryArgProfileIsUnknown
   */
  readonly forwardWhenQueryArgProfileIsUnknown: boolean;

  /**
   * @schema CloudFrontQueryArgProfileConfig#QueryArgProfiles
   */
  readonly queryArgProfiles?: CloudFrontQueryArgProfiles;

}

/**
 * @schema CloudFrontContentTypeProfileConfig
 */
export interface CloudFrontContentTypeProfileConfig {
  /**
   * @schema CloudFrontContentTypeProfileConfig#ForwardWhenContentTypeIsUnknown
   */
  readonly forwardWhenContentTypeIsUnknown: boolean;

  /**
   * @schema CloudFrontContentTypeProfileConfig#ContentTypeProfiles
   */
  readonly contentTypeProfiles?: CloudFrontContentTypeProfiles;

}

/**
 * @schema CloudFrontEncryptionEntities
 */
export interface CloudFrontEncryptionEntities {
  /**
   * @schema CloudFrontEncryptionEntities#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontEncryptionEntities#Items
   */
  readonly items?: CloudFrontEncryptionEntity[];

}

/**
 * @schema CloudFrontPaths
 */
export interface CloudFrontPaths {
  /**
   * @schema CloudFrontPaths#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontPaths#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontRealtimeMetricsSubscriptionConfig
 */
export interface CloudFrontRealtimeMetricsSubscriptionConfig {
  /**
   * @schema CloudFrontRealtimeMetricsSubscriptionConfig#RealtimeMetricsSubscriptionStatus
   */
  readonly realtimeMetricsSubscriptionStatus: string;

}

/**
 * @schema CloudFrontOriginRequestPolicyHeadersConfig
 */
export interface CloudFrontOriginRequestPolicyHeadersConfig {
  /**
   * @schema CloudFrontOriginRequestPolicyHeadersConfig#HeaderBehavior
   */
  readonly headerBehavior: string;

  /**
   * @schema CloudFrontOriginRequestPolicyHeadersConfig#Headers
   */
  readonly headers?: CloudFrontHeaders;

}

/**
 * @schema CloudFrontOriginRequestPolicyCookiesConfig
 */
export interface CloudFrontOriginRequestPolicyCookiesConfig {
  /**
   * @schema CloudFrontOriginRequestPolicyCookiesConfig#CookieBehavior
   */
  readonly cookieBehavior: string;

  /**
   * @schema CloudFrontOriginRequestPolicyCookiesConfig#Cookies
   */
  readonly cookies?: CloudFrontCookieNames;

}

/**
 * @schema CloudFrontOriginRequestPolicyQueryStringsConfig
 */
export interface CloudFrontOriginRequestPolicyQueryStringsConfig {
  /**
   * @schema CloudFrontOriginRequestPolicyQueryStringsConfig#QueryStringBehavior
   */
  readonly queryStringBehavior: string;

  /**
   * @schema CloudFrontOriginRequestPolicyQueryStringsConfig#QueryStrings
   */
  readonly queryStrings?: CloudFrontQueryStringNames;

}

/**
 * @schema CloudFrontKinesisStreamConfig
 */
export interface CloudFrontKinesisStreamConfig {
  /**
   * @schema CloudFrontKinesisStreamConfig#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema CloudFrontKinesisStreamConfig#StreamARN
   */
  readonly streamArn: string;

}

/**
 * @schema CloudFrontS3Origin
 */
export interface CloudFrontS3Origin {
  /**
   * @schema CloudFrontS3Origin#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudFrontS3Origin#OriginAccessIdentity
   */
  readonly originAccessIdentity: string;

}

/**
 * @schema CloudFrontStreamingLoggingConfig
 */
export interface CloudFrontStreamingLoggingConfig {
  /**
   * @schema CloudFrontStreamingLoggingConfig#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudFrontStreamingLoggingConfig#Bucket
   */
  readonly bucket: string;

  /**
   * @schema CloudFrontStreamingLoggingConfig#Prefix
   */
  readonly prefix: string;

}

/**
 * @schema CloudFrontTrustedSigners
 */
export interface CloudFrontTrustedSigners {
  /**
   * @schema CloudFrontTrustedSigners#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudFrontTrustedSigners#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontTrustedSigners#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontCachePolicySummary
 */
export interface CloudFrontCachePolicySummary {
  /**
   * @schema CloudFrontCachePolicySummary#Type
   */
  readonly type: string;

  /**
   * @schema CloudFrontCachePolicySummary#CachePolicy
   */
  readonly cachePolicy: CloudFrontCachePolicy;

}

/**
 * @schema CloudFrontCloudFrontOriginAccessIdentitySummary
 */
export interface CloudFrontCloudFrontOriginAccessIdentitySummary {
  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentitySummary#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentitySummary#S3CanonicalUserId
   */
  readonly s3CanonicalUserId: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentitySummary#Comment
   */
  readonly comment: string;

}

/**
 * @schema CloudFrontDistributionSummary
 */
export interface CloudFrontDistributionSummary {
  /**
   * @schema CloudFrontDistributionSummary#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontDistributionSummary#ARN
   */
  readonly arn: string;

  /**
   * @schema CloudFrontDistributionSummary#Status
   */
  readonly status: string;

  /**
   * @schema CloudFrontDistributionSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontDistributionSummary#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudFrontDistributionSummary#Aliases
   */
  readonly aliases: CloudFrontAliases;

  /**
   * @schema CloudFrontDistributionSummary#Origins
   */
  readonly origins: CloudFrontOrigins;

  /**
   * @schema CloudFrontDistributionSummary#OriginGroups
   */
  readonly originGroups?: CloudFrontOriginGroups;

  /**
   * @schema CloudFrontDistributionSummary#DefaultCacheBehavior
   */
  readonly defaultCacheBehavior: CloudFrontDefaultCacheBehavior;

  /**
   * @schema CloudFrontDistributionSummary#CacheBehaviors
   */
  readonly cacheBehaviors: CloudFrontCacheBehaviors;

  /**
   * @schema CloudFrontDistributionSummary#CustomErrorResponses
   */
  readonly customErrorResponses: CloudFrontCustomErrorResponses;

  /**
   * @schema CloudFrontDistributionSummary#Comment
   */
  readonly comment: string;

  /**
   * @schema CloudFrontDistributionSummary#PriceClass
   */
  readonly priceClass: string;

  /**
   * @schema CloudFrontDistributionSummary#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudFrontDistributionSummary#ViewerCertificate
   */
  readonly viewerCertificate: CloudFrontViewerCertificate;

  /**
   * @schema CloudFrontDistributionSummary#Restrictions
   */
  readonly restrictions: CloudFrontRestrictions;

  /**
   * @schema CloudFrontDistributionSummary#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema CloudFrontDistributionSummary#HttpVersion
   */
  readonly httpVersion: string;

  /**
   * @schema CloudFrontDistributionSummary#IsIPV6Enabled
   */
  readonly isIpv6Enabled: boolean;

  /**
   * @schema CloudFrontDistributionSummary#AliasICPRecordals
   */
  readonly aliasIcpRecordals?: CloudFrontAliasIcpRecordal[];

}

/**
 * @schema CloudFrontFieldLevelEncryptionSummary
 */
export interface CloudFrontFieldLevelEncryptionSummary {
  /**
   * @schema CloudFrontFieldLevelEncryptionSummary#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionSummary#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionSummary#QueryArgProfileConfig
   */
  readonly queryArgProfileConfig?: CloudFrontQueryArgProfileConfig;

  /**
   * @schema CloudFrontFieldLevelEncryptionSummary#ContentTypeProfileConfig
   */
  readonly contentTypeProfileConfig?: CloudFrontContentTypeProfileConfig;

}

/**
 * @schema CloudFrontFieldLevelEncryptionProfileSummary
 */
export interface CloudFrontFieldLevelEncryptionProfileSummary {
  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#Name
   */
  readonly name: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#EncryptionEntities
   */
  readonly encryptionEntities: CloudFrontEncryptionEntities;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#Comment
   */
  readonly comment?: string;

}

/**
 * @schema CloudFrontInvalidationSummary
 */
export interface CloudFrontInvalidationSummary {
  /**
   * @schema CloudFrontInvalidationSummary#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontInvalidationSummary#CreateTime
   */
  readonly createTime: string;

  /**
   * @schema CloudFrontInvalidationSummary#Status
   */
  readonly status: string;

}

/**
 * @schema CloudFrontKeyGroupSummary
 */
export interface CloudFrontKeyGroupSummary {
  /**
   * @schema CloudFrontKeyGroupSummary#KeyGroup
   */
  readonly keyGroup: CloudFrontKeyGroup;

}

/**
 * @schema CloudFrontOriginRequestPolicySummary
 */
export interface CloudFrontOriginRequestPolicySummary {
  /**
   * @schema CloudFrontOriginRequestPolicySummary#Type
   */
  readonly type: string;

  /**
   * @schema CloudFrontOriginRequestPolicySummary#OriginRequestPolicy
   */
  readonly originRequestPolicy: CloudFrontOriginRequestPolicy;

}

/**
 * @schema CloudFrontPublicKeySummary
 */
export interface CloudFrontPublicKeySummary {
  /**
   * @schema CloudFrontPublicKeySummary#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontPublicKeySummary#Name
   */
  readonly name: string;

  /**
   * @schema CloudFrontPublicKeySummary#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema CloudFrontPublicKeySummary#EncodedKey
   */
  readonly encodedKey: string;

  /**
   * @schema CloudFrontPublicKeySummary#Comment
   */
  readonly comment?: string;

}

/**
 * @schema CloudFrontStreamingDistributionSummary
 */
export interface CloudFrontStreamingDistributionSummary {
  /**
   * @schema CloudFrontStreamingDistributionSummary#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#ARN
   */
  readonly arn: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#Status
   */
  readonly status: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#S3Origin
   */
  readonly s3Origin: CloudFrontS3Origin;

  /**
   * @schema CloudFrontStreamingDistributionSummary#Aliases
   */
  readonly aliases: CloudFrontAliases;

  /**
   * @schema CloudFrontStreamingDistributionSummary#TrustedSigners
   */
  readonly trustedSigners: CloudFrontTrustedSigners;

  /**
   * @schema CloudFrontStreamingDistributionSummary#Comment
   */
  readonly comment: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#PriceClass
   */
  readonly priceClass: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema CloudFrontTag
 */
export interface CloudFrontTag {
  /**
   * @schema CloudFrontTag#Key
   */
  readonly key: string;

  /**
   * @schema CloudFrontTag#Value
   */
  readonly value?: string;

}

/**
 * @schema CloudFrontCachePolicyHeadersConfig
 */
export interface CloudFrontCachePolicyHeadersConfig {
  /**
   * @schema CloudFrontCachePolicyHeadersConfig#HeaderBehavior
   */
  readonly headerBehavior: string;

  /**
   * @schema CloudFrontCachePolicyHeadersConfig#Headers
   */
  readonly headers?: CloudFrontHeaders;

}

/**
 * @schema CloudFrontCachePolicyCookiesConfig
 */
export interface CloudFrontCachePolicyCookiesConfig {
  /**
   * @schema CloudFrontCachePolicyCookiesConfig#CookieBehavior
   */
  readonly cookieBehavior: string;

  /**
   * @schema CloudFrontCachePolicyCookiesConfig#Cookies
   */
  readonly cookies?: CloudFrontCookieNames;

}

/**
 * @schema CloudFrontCachePolicyQueryStringsConfig
 */
export interface CloudFrontCachePolicyQueryStringsConfig {
  /**
   * @schema CloudFrontCachePolicyQueryStringsConfig#QueryStringBehavior
   */
  readonly queryStringBehavior: string;

  /**
   * @schema CloudFrontCachePolicyQueryStringsConfig#QueryStrings
   */
  readonly queryStrings?: CloudFrontQueryStringNames;

}

/**
 * @schema CloudFrontOrigin
 */
export interface CloudFrontOrigin {
  /**
   * @schema CloudFrontOrigin#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontOrigin#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudFrontOrigin#OriginPath
   */
  readonly originPath?: string;

  /**
   * @schema CloudFrontOrigin#CustomHeaders
   */
  readonly customHeaders?: CloudFrontCustomHeaders;

  /**
   * @schema CloudFrontOrigin#S3OriginConfig
   */
  readonly s3OriginConfig?: CloudFrontS3OriginConfig;

  /**
   * @schema CloudFrontOrigin#CustomOriginConfig
   */
  readonly customOriginConfig?: CloudFrontCustomOriginConfig;

  /**
   * @schema CloudFrontOrigin#ConnectionAttempts
   */
  readonly connectionAttempts?: number;

  /**
   * @schema CloudFrontOrigin#ConnectionTimeout
   */
  readonly connectionTimeout?: number;

  /**
   * @schema CloudFrontOrigin#OriginShield
   */
  readonly originShield?: CloudFrontOriginShield;

}

/**
 * @schema CloudFrontOriginGroup
 */
export interface CloudFrontOriginGroup {
  /**
   * @schema CloudFrontOriginGroup#Id
   */
  readonly id: string;

  /**
   * @schema CloudFrontOriginGroup#FailoverCriteria
   */
  readonly failoverCriteria: CloudFrontOriginGroupFailoverCriteria;

  /**
   * @schema CloudFrontOriginGroup#Members
   */
  readonly members: CloudFrontOriginGroupMembers;

}

/**
 * @schema CloudFrontTrustedKeyGroups
 */
export interface CloudFrontTrustedKeyGroups {
  /**
   * @schema CloudFrontTrustedKeyGroups#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudFrontTrustedKeyGroups#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontTrustedKeyGroups#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontAllowedMethods
 */
export interface CloudFrontAllowedMethods {
  /**
   * @schema CloudFrontAllowedMethods#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontAllowedMethods#Items
   */
  readonly items: string[];

  /**
   * @schema CloudFrontAllowedMethods#CachedMethods
   */
  readonly cachedMethods?: CloudFrontCachedMethods;

}

/**
 * @schema CloudFrontLambdaFunctionAssociations
 */
export interface CloudFrontLambdaFunctionAssociations {
  /**
   * @schema CloudFrontLambdaFunctionAssociations#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontLambdaFunctionAssociations#Items
   */
  readonly items?: CloudFrontLambdaFunctionAssociation[];

}

/**
 * @schema CloudFrontForwardedValues
 */
export interface CloudFrontForwardedValues {
  /**
   * @schema CloudFrontForwardedValues#QueryString
   */
  readonly queryString: boolean;

  /**
   * @schema CloudFrontForwardedValues#Cookies
   */
  readonly cookies: CloudFrontCookiePreference;

  /**
   * @schema CloudFrontForwardedValues#Headers
   */
  readonly headers?: CloudFrontHeaders;

  /**
   * @schema CloudFrontForwardedValues#QueryStringCacheKeys
   */
  readonly queryStringCacheKeys?: CloudFrontQueryStringCacheKeys;

}

/**
 * @schema CloudFrontCacheBehavior
 */
export interface CloudFrontCacheBehavior {
  /**
   * @schema CloudFrontCacheBehavior#PathPattern
   */
  readonly pathPattern: string;

  /**
   * @schema CloudFrontCacheBehavior#TargetOriginId
   */
  readonly targetOriginId: string;

  /**
   * @schema CloudFrontCacheBehavior#TrustedSigners
   */
  readonly trustedSigners?: CloudFrontTrustedSigners;

  /**
   * @schema CloudFrontCacheBehavior#TrustedKeyGroups
   */
  readonly trustedKeyGroups?: CloudFrontTrustedKeyGroups;

  /**
   * @schema CloudFrontCacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy: string;

  /**
   * @schema CloudFrontCacheBehavior#AllowedMethods
   */
  readonly allowedMethods?: CloudFrontAllowedMethods;

  /**
   * @schema CloudFrontCacheBehavior#SmoothStreaming
   */
  readonly smoothStreaming?: boolean;

  /**
   * @schema CloudFrontCacheBehavior#Compress
   */
  readonly compress?: boolean;

  /**
   * @schema CloudFrontCacheBehavior#LambdaFunctionAssociations
   */
  readonly lambdaFunctionAssociations?: CloudFrontLambdaFunctionAssociations;

  /**
   * @schema CloudFrontCacheBehavior#FieldLevelEncryptionId
   */
  readonly fieldLevelEncryptionId?: string;

  /**
   * @schema CloudFrontCacheBehavior#RealtimeLogConfigArn
   */
  readonly realtimeLogConfigArn?: string;

  /**
   * @schema CloudFrontCacheBehavior#CachePolicyId
   */
  readonly cachePolicyId?: string;

  /**
   * @schema CloudFrontCacheBehavior#OriginRequestPolicyId
   */
  readonly originRequestPolicyId?: string;

  /**
   * @schema CloudFrontCacheBehavior#ForwardedValues
   */
  readonly forwardedValues?: CloudFrontForwardedValues;

  /**
   * @schema CloudFrontCacheBehavior#MinTTL
   */
  readonly minTtl?: number;

  /**
   * @schema CloudFrontCacheBehavior#DefaultTTL
   */
  readonly defaultTtl?: number;

  /**
   * @schema CloudFrontCacheBehavior#MaxTTL
   */
  readonly maxTtl?: number;

}

/**
 * @schema CloudFrontCustomErrorResponse
 */
export interface CloudFrontCustomErrorResponse {
  /**
   * @schema CloudFrontCustomErrorResponse#ErrorCode
   */
  readonly errorCode: number;

  /**
   * @schema CloudFrontCustomErrorResponse#ResponsePagePath
   */
  readonly responsePagePath?: string;

  /**
   * @schema CloudFrontCustomErrorResponse#ResponseCode
   */
  readonly responseCode?: string;

  /**
   * @schema CloudFrontCustomErrorResponse#ErrorCachingMinTTL
   */
  readonly errorCachingMinTtl?: number;

}

/**
 * @schema CloudFrontGeoRestriction
 */
export interface CloudFrontGeoRestriction {
  /**
   * @schema CloudFrontGeoRestriction#RestrictionType
   */
  readonly restrictionType: string;

  /**
   * @schema CloudFrontGeoRestriction#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontGeoRestriction#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontSigner
 */
export interface CloudFrontSigner {
  /**
   * @schema CloudFrontSigner#AwsAccountNumber
   */
  readonly awsAccountNumber?: string;

  /**
   * @schema CloudFrontSigner#KeyPairIds
   */
  readonly keyPairIds?: CloudFrontKeyPairIds;

}

/**
 * @schema CloudFrontKgKeyPairIds
 */
export interface CloudFrontKgKeyPairIds {
  /**
   * @schema CloudFrontKgKeyPairIds#KeyGroupId
   */
  readonly keyGroupId?: string;

  /**
   * @schema CloudFrontKgKeyPairIds#KeyPairIds
   */
  readonly keyPairIds?: CloudFrontKeyPairIds;

}

/**
 * @schema CloudFrontQueryArgProfiles
 */
export interface CloudFrontQueryArgProfiles {
  /**
   * @schema CloudFrontQueryArgProfiles#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontQueryArgProfiles#Items
   */
  readonly items?: CloudFrontQueryArgProfile[];

}

/**
 * @schema CloudFrontContentTypeProfiles
 */
export interface CloudFrontContentTypeProfiles {
  /**
   * @schema CloudFrontContentTypeProfiles#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontContentTypeProfiles#Items
   */
  readonly items?: CloudFrontContentTypeProfile[];

}

/**
 * @schema CloudFrontEncryptionEntity
 */
export interface CloudFrontEncryptionEntity {
  /**
   * @schema CloudFrontEncryptionEntity#PublicKeyId
   */
  readonly publicKeyId: string;

  /**
   * @schema CloudFrontEncryptionEntity#ProviderId
   */
  readonly providerId: string;

  /**
   * @schema CloudFrontEncryptionEntity#FieldPatterns
   */
  readonly fieldPatterns: CloudFrontFieldPatterns;

}

/**
 * @schema CloudFrontHeaders
 */
export interface CloudFrontHeaders {
  /**
   * @schema CloudFrontHeaders#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontHeaders#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontCookieNames
 */
export interface CloudFrontCookieNames {
  /**
   * @schema CloudFrontCookieNames#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontCookieNames#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontQueryStringNames
 */
export interface CloudFrontQueryStringNames {
  /**
   * @schema CloudFrontQueryStringNames#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontQueryStringNames#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontCustomHeaders
 */
export interface CloudFrontCustomHeaders {
  /**
   * @schema CloudFrontCustomHeaders#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontCustomHeaders#Items
   */
  readonly items?: CloudFrontOriginCustomHeader[];

}

/**
 * @schema CloudFrontS3OriginConfig
 */
export interface CloudFrontS3OriginConfig {
  /**
   * @schema CloudFrontS3OriginConfig#OriginAccessIdentity
   */
  readonly originAccessIdentity: string;

}

/**
 * @schema CloudFrontCustomOriginConfig
 */
export interface CloudFrontCustomOriginConfig {
  /**
   * @schema CloudFrontCustomOriginConfig#HTTPPort
   */
  readonly httpPort: number;

  /**
   * @schema CloudFrontCustomOriginConfig#HTTPSPort
   */
  readonly httpsPort: number;

  /**
   * @schema CloudFrontCustomOriginConfig#OriginProtocolPolicy
   */
  readonly originProtocolPolicy: string;

  /**
   * @schema CloudFrontCustomOriginConfig#OriginSslProtocols
   */
  readonly originSslProtocols?: CloudFrontOriginSslProtocols;

  /**
   * @schema CloudFrontCustomOriginConfig#OriginReadTimeout
   */
  readonly originReadTimeout?: number;

  /**
   * @schema CloudFrontCustomOriginConfig#OriginKeepaliveTimeout
   */
  readonly originKeepaliveTimeout?: number;

}

/**
 * @schema CloudFrontOriginShield
 */
export interface CloudFrontOriginShield {
  /**
   * @schema CloudFrontOriginShield#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudFrontOriginShield#OriginShieldRegion
   */
  readonly originShieldRegion?: string;

}

/**
 * @schema CloudFrontOriginGroupFailoverCriteria
 */
export interface CloudFrontOriginGroupFailoverCriteria {
  /**
   * @schema CloudFrontOriginGroupFailoverCriteria#StatusCodes
   */
  readonly statusCodes: CloudFrontStatusCodes;

}

/**
 * @schema CloudFrontOriginGroupMembers
 */
export interface CloudFrontOriginGroupMembers {
  /**
   * @schema CloudFrontOriginGroupMembers#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontOriginGroupMembers#Items
   */
  readonly items: CloudFrontOriginGroupMember[];

}

/**
 * @schema CloudFrontCachedMethods
 */
export interface CloudFrontCachedMethods {
  /**
   * @schema CloudFrontCachedMethods#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontCachedMethods#Items
   */
  readonly items: string[];

}

/**
 * @schema CloudFrontLambdaFunctionAssociation
 */
export interface CloudFrontLambdaFunctionAssociation {
  /**
   * @schema CloudFrontLambdaFunctionAssociation#LambdaFunctionARN
   */
  readonly lambdaFunctionArn: string;

  /**
   * @schema CloudFrontLambdaFunctionAssociation#EventType
   */
  readonly eventType: string;

  /**
   * @schema CloudFrontLambdaFunctionAssociation#IncludeBody
   */
  readonly includeBody?: boolean;

}

/**
 * @schema CloudFrontCookiePreference
 */
export interface CloudFrontCookiePreference {
  /**
   * @schema CloudFrontCookiePreference#Forward
   */
  readonly forward: string;

  /**
   * @schema CloudFrontCookiePreference#WhitelistedNames
   */
  readonly whitelistedNames?: CloudFrontCookieNames;

}

/**
 * @schema CloudFrontQueryStringCacheKeys
 */
export interface CloudFrontQueryStringCacheKeys {
  /**
   * @schema CloudFrontQueryStringCacheKeys#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontQueryStringCacheKeys#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontKeyPairIds
 */
export interface CloudFrontKeyPairIds {
  /**
   * @schema CloudFrontKeyPairIds#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontKeyPairIds#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontQueryArgProfile
 */
export interface CloudFrontQueryArgProfile {
  /**
   * @schema CloudFrontQueryArgProfile#QueryArg
   */
  readonly queryArg: string;

  /**
   * @schema CloudFrontQueryArgProfile#ProfileId
   */
  readonly profileId: string;

}

/**
 * @schema CloudFrontContentTypeProfile
 */
export interface CloudFrontContentTypeProfile {
  /**
   * @schema CloudFrontContentTypeProfile#Format
   */
  readonly format: string;

  /**
   * @schema CloudFrontContentTypeProfile#ProfileId
   */
  readonly profileId?: string;

  /**
   * @schema CloudFrontContentTypeProfile#ContentType
   */
  readonly contentType: string;

}

/**
 * @schema CloudFrontFieldPatterns
 */
export interface CloudFrontFieldPatterns {
  /**
   * @schema CloudFrontFieldPatterns#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontFieldPatterns#Items
   */
  readonly items?: string[];

}

/**
 * @schema CloudFrontOriginCustomHeader
 */
export interface CloudFrontOriginCustomHeader {
  /**
   * @schema CloudFrontOriginCustomHeader#HeaderName
   */
  readonly headerName: string;

  /**
   * @schema CloudFrontOriginCustomHeader#HeaderValue
   */
  readonly headerValue: string;

}

/**
 * @schema CloudFrontOriginSslProtocols
 */
export interface CloudFrontOriginSslProtocols {
  /**
   * @schema CloudFrontOriginSslProtocols#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontOriginSslProtocols#Items
   */
  readonly items: string[];

}

/**
 * @schema CloudFrontStatusCodes
 */
export interface CloudFrontStatusCodes {
  /**
   * @schema CloudFrontStatusCodes#Quantity
   */
  readonly quantity: number;

  /**
   * @schema CloudFrontStatusCodes#Items
   */
  readonly items: number[];

}

/**
 * @schema CloudFrontOriginGroupMember
 */
export interface CloudFrontOriginGroupMember {
  /**
   * @schema CloudFrontOriginGroupMember#OriginId
   */
  readonly originId: string;

}
