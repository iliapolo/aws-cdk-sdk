/**
 * @schema CloudFrontAssociateAliasRequest
 */
export interface CloudFrontAssociateAliasRequest {
  /**
   * @schema CloudFrontAssociateAliasRequest#TargetDistributionId
   */
  readonly targetDistributionId?: string;

  /**
   * @schema CloudFrontAssociateAliasRequest#Alias
   */
  readonly alias?: string;

}

/**
 * Converts an object of type 'CloudFrontAssociateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontAssociateAliasRequest(obj: CloudFrontAssociateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetDistributionId': obj.targetDistributionId,
    'Alias': obj.alias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateCachePolicyRequest
 */
export interface CloudFrontCreateCachePolicyRequest {
  /**
   * @schema CloudFrontCreateCachePolicyRequest#CachePolicyConfig
   */
  readonly cachePolicyConfig?: CloudFrontCachePolicyConfig;

}

/**
 * Converts an object of type 'CloudFrontCreateCachePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateCachePolicyRequest(obj: CloudFrontCreateCachePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CachePolicyConfig': toJson_CloudFrontCachePolicyConfig(obj.cachePolicyConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateCachePolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateCachePolicyResult(obj: CloudFrontCreateCachePolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CachePolicy': toJson_CloudFrontCachePolicy(obj.cachePolicy),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateCloudFrontOriginAccessIdentityRequest
 */
export interface CloudFrontCreateCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema CloudFrontCreateCloudFrontOriginAccessIdentityRequest#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig?: CloudFrontCloudFrontOriginAccessIdentityConfig;

}

/**
 * Converts an object of type 'CloudFrontCreateCloudFrontOriginAccessIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateCloudFrontOriginAccessIdentityRequest(obj: CloudFrontCreateCloudFrontOriginAccessIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFrontOriginAccessIdentityConfig': toJson_CloudFrontCloudFrontOriginAccessIdentityConfig(obj.cloudFrontOriginAccessIdentityConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateCloudFrontOriginAccessIdentityResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateCloudFrontOriginAccessIdentityResult(obj: CloudFrontCreateCloudFrontOriginAccessIdentityResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFrontOriginAccessIdentity': toJson_CloudFrontCloudFrontOriginAccessIdentity(obj.cloudFrontOriginAccessIdentity),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateDistributionRequest
 */
export interface CloudFrontCreateDistributionRequest {
  /**
   * @schema CloudFrontCreateDistributionRequest#DistributionConfig
   */
  readonly distributionConfig?: CloudFrontDistributionConfig;

}

/**
 * Converts an object of type 'CloudFrontCreateDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateDistributionRequest(obj: CloudFrontCreateDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionConfig': toJson_CloudFrontDistributionConfig(obj.distributionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateDistributionResult(obj: CloudFrontCreateDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Distribution': toJson_CloudFrontDistribution(obj.distribution),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateDistributionWithTagsRequest
 */
export interface CloudFrontCreateDistributionWithTagsRequest {
  /**
   * @schema CloudFrontCreateDistributionWithTagsRequest#DistributionConfigWithTags
   */
  readonly distributionConfigWithTags?: CloudFrontDistributionConfigWithTags;

}

/**
 * Converts an object of type 'CloudFrontCreateDistributionWithTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateDistributionWithTagsRequest(obj: CloudFrontCreateDistributionWithTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionConfigWithTags': toJson_CloudFrontDistributionConfigWithTags(obj.distributionConfigWithTags),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateDistributionWithTagsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateDistributionWithTagsResult(obj: CloudFrontCreateDistributionWithTagsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Distribution': toJson_CloudFrontDistribution(obj.distribution),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateFieldLevelEncryptionConfigRequest
 */
export interface CloudFrontCreateFieldLevelEncryptionConfigRequest {
  /**
   * @schema CloudFrontCreateFieldLevelEncryptionConfigRequest#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig?: CloudFrontFieldLevelEncryptionConfig;

}

/**
 * Converts an object of type 'CloudFrontCreateFieldLevelEncryptionConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateFieldLevelEncryptionConfigRequest(obj: CloudFrontCreateFieldLevelEncryptionConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionConfig': toJson_CloudFrontFieldLevelEncryptionConfig(obj.fieldLevelEncryptionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateFieldLevelEncryptionConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateFieldLevelEncryptionConfigResult(obj: CloudFrontCreateFieldLevelEncryptionConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryption': toJson_CloudFrontFieldLevelEncryption(obj.fieldLevelEncryption),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateFieldLevelEncryptionProfileRequest
 */
export interface CloudFrontCreateFieldLevelEncryptionProfileRequest {
  /**
   * @schema CloudFrontCreateFieldLevelEncryptionProfileRequest#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig?: CloudFrontFieldLevelEncryptionProfileConfig;

}

/**
 * Converts an object of type 'CloudFrontCreateFieldLevelEncryptionProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateFieldLevelEncryptionProfileRequest(obj: CloudFrontCreateFieldLevelEncryptionProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionProfileConfig': toJson_CloudFrontFieldLevelEncryptionProfileConfig(obj.fieldLevelEncryptionProfileConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateFieldLevelEncryptionProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateFieldLevelEncryptionProfileResult(obj: CloudFrontCreateFieldLevelEncryptionProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionProfile': toJson_CloudFrontFieldLevelEncryptionProfile(obj.fieldLevelEncryptionProfile),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateFunctionRequest
 */
export interface CloudFrontCreateFunctionRequest {
  /**
   * @schema CloudFrontCreateFunctionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontCreateFunctionRequest#FunctionConfig
   */
  readonly functionConfig?: CloudFrontFunctionConfig;

  /**
   * @schema CloudFrontCreateFunctionRequest#FunctionCode
   */
  readonly functionCode?: any;

}

/**
 * Converts an object of type 'CloudFrontCreateFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateFunctionRequest(obj: CloudFrontCreateFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'FunctionConfig': toJson_CloudFrontFunctionConfig(obj.functionConfig),
    'FunctionCode': obj.functionCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateFunctionResult
 */
export interface CloudFrontCreateFunctionResult {
  /**
   * @schema CloudFrontCreateFunctionResult#FunctionSummary
   */
  readonly functionSummary?: CloudFrontFunctionSummary;

  /**
   * @schema CloudFrontCreateFunctionResult#Location
   */
  readonly location?: string;

  /**
   * @schema CloudFrontCreateFunctionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * Converts an object of type 'CloudFrontCreateFunctionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateFunctionResult(obj: CloudFrontCreateFunctionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionSummary': toJson_CloudFrontFunctionSummary(obj.functionSummary),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateInvalidationRequest
 */
export interface CloudFrontCreateInvalidationRequest {
  /**
   * @schema CloudFrontCreateInvalidationRequest#DistributionId
   */
  readonly distributionId?: string;

  /**
   * @schema CloudFrontCreateInvalidationRequest#InvalidationBatch
   */
  readonly invalidationBatch?: CloudFrontInvalidationBatch;

}

/**
 * Converts an object of type 'CloudFrontCreateInvalidationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateInvalidationRequest(obj: CloudFrontCreateInvalidationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionId': obj.distributionId,
    'InvalidationBatch': toJson_CloudFrontInvalidationBatch(obj.invalidationBatch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateInvalidationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateInvalidationResult(obj: CloudFrontCreateInvalidationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Location': obj.location,
    'Invalidation': toJson_CloudFrontInvalidation(obj.invalidation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateKeyGroupRequest
 */
export interface CloudFrontCreateKeyGroupRequest {
  /**
   * @schema CloudFrontCreateKeyGroupRequest#KeyGroupConfig
   */
  readonly keyGroupConfig?: CloudFrontKeyGroupConfig;

}

/**
 * Converts an object of type 'CloudFrontCreateKeyGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateKeyGroupRequest(obj: CloudFrontCreateKeyGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyGroupConfig': toJson_CloudFrontKeyGroupConfig(obj.keyGroupConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateKeyGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateKeyGroupResult(obj: CloudFrontCreateKeyGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyGroup': toJson_CloudFrontKeyGroup(obj.keyGroup),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateMonitoringSubscriptionRequest
 */
export interface CloudFrontCreateMonitoringSubscriptionRequest {
  /**
   * @schema CloudFrontCreateMonitoringSubscriptionRequest#DistributionId
   */
  readonly distributionId?: string;

  /**
   * @schema CloudFrontCreateMonitoringSubscriptionRequest#MonitoringSubscription
   */
  readonly monitoringSubscription?: CloudFrontMonitoringSubscription;

}

/**
 * Converts an object of type 'CloudFrontCreateMonitoringSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateMonitoringSubscriptionRequest(obj: CloudFrontCreateMonitoringSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionId': obj.distributionId,
    'MonitoringSubscription': toJson_CloudFrontMonitoringSubscription(obj.monitoringSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateMonitoringSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateMonitoringSubscriptionResult(obj: CloudFrontCreateMonitoringSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MonitoringSubscription': toJson_CloudFrontMonitoringSubscription(obj.monitoringSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateOriginRequestPolicyRequest
 */
export interface CloudFrontCreateOriginRequestPolicyRequest {
  /**
   * @schema CloudFrontCreateOriginRequestPolicyRequest#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig?: CloudFrontOriginRequestPolicyConfig;

}

/**
 * Converts an object of type 'CloudFrontCreateOriginRequestPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateOriginRequestPolicyRequest(obj: CloudFrontCreateOriginRequestPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginRequestPolicyConfig': toJson_CloudFrontOriginRequestPolicyConfig(obj.originRequestPolicyConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateOriginRequestPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateOriginRequestPolicyResult(obj: CloudFrontCreateOriginRequestPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginRequestPolicy': toJson_CloudFrontOriginRequestPolicy(obj.originRequestPolicy),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreatePublicKeyRequest
 */
export interface CloudFrontCreatePublicKeyRequest {
  /**
   * @schema CloudFrontCreatePublicKeyRequest#PublicKeyConfig
   */
  readonly publicKeyConfig?: CloudFrontPublicKeyConfig;

}

/**
 * Converts an object of type 'CloudFrontCreatePublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreatePublicKeyRequest(obj: CloudFrontCreatePublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKeyConfig': toJson_CloudFrontPublicKeyConfig(obj.publicKeyConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreatePublicKeyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreatePublicKeyResult(obj: CloudFrontCreatePublicKeyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKey': toJson_CloudFrontPublicKey(obj.publicKey),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateRealtimeLogConfigRequest
 */
export interface CloudFrontCreateRealtimeLogConfigRequest {
  /**
   * @schema CloudFrontCreateRealtimeLogConfigRequest#EndPoints
   */
  readonly endPoints?: CloudFrontEndPoint[];

  /**
   * @schema CloudFrontCreateRealtimeLogConfigRequest#Fields
   */
  readonly fields?: string[];

  /**
   * @schema CloudFrontCreateRealtimeLogConfigRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontCreateRealtimeLogConfigRequest#SamplingRate
   */
  readonly samplingRate?: number;

}

/**
 * Converts an object of type 'CloudFrontCreateRealtimeLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateRealtimeLogConfigRequest(obj: CloudFrontCreateRealtimeLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndPoints': obj.endPoints?.map(y => toJson_CloudFrontEndPoint(y)),
    'Fields': obj.fields?.map(y => y),
    'Name': obj.name,
    'SamplingRate': obj.samplingRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateRealtimeLogConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateRealtimeLogConfigResult(obj: CloudFrontCreateRealtimeLogConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RealtimeLogConfig': toJson_CloudFrontRealtimeLogConfig(obj.realtimeLogConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateStreamingDistributionRequest
 */
export interface CloudFrontCreateStreamingDistributionRequest {
  /**
   * @schema CloudFrontCreateStreamingDistributionRequest#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig?: CloudFrontStreamingDistributionConfig;

}

/**
 * Converts an object of type 'CloudFrontCreateStreamingDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateStreamingDistributionRequest(obj: CloudFrontCreateStreamingDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistributionConfig': toJson_CloudFrontStreamingDistributionConfig(obj.streamingDistributionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateStreamingDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateStreamingDistributionResult(obj: CloudFrontCreateStreamingDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistribution': toJson_CloudFrontStreamingDistribution(obj.streamingDistribution),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCreateStreamingDistributionWithTagsRequest
 */
export interface CloudFrontCreateStreamingDistributionWithTagsRequest {
  /**
   * @schema CloudFrontCreateStreamingDistributionWithTagsRequest#StreamingDistributionConfigWithTags
   */
  readonly streamingDistributionConfigWithTags?: CloudFrontStreamingDistributionConfigWithTags;

}

/**
 * Converts an object of type 'CloudFrontCreateStreamingDistributionWithTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateStreamingDistributionWithTagsRequest(obj: CloudFrontCreateStreamingDistributionWithTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistributionConfigWithTags': toJson_CloudFrontStreamingDistributionConfigWithTags(obj.streamingDistributionConfigWithTags),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontCreateStreamingDistributionWithTagsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCreateStreamingDistributionWithTagsResult(obj: CloudFrontCreateStreamingDistributionWithTagsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistribution': toJson_CloudFrontStreamingDistribution(obj.streamingDistribution),
    'Location': obj.location,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteCachePolicyRequest
 */
export interface CloudFrontDeleteCachePolicyRequest {
  /**
   * @schema CloudFrontDeleteCachePolicyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDeleteCachePolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteCachePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteCachePolicyRequest(obj: CloudFrontDeleteCachePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteCloudFrontOriginAccessIdentityRequest
 */
export interface CloudFrontDeleteCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema CloudFrontDeleteCloudFrontOriginAccessIdentityRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDeleteCloudFrontOriginAccessIdentityRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteCloudFrontOriginAccessIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteCloudFrontOriginAccessIdentityRequest(obj: CloudFrontDeleteCloudFrontOriginAccessIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteDistributionRequest
 */
export interface CloudFrontDeleteDistributionRequest {
  /**
   * @schema CloudFrontDeleteDistributionRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDeleteDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteDistributionRequest(obj: CloudFrontDeleteDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteFieldLevelEncryptionConfigRequest
 */
export interface CloudFrontDeleteFieldLevelEncryptionConfigRequest {
  /**
   * @schema CloudFrontDeleteFieldLevelEncryptionConfigRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDeleteFieldLevelEncryptionConfigRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteFieldLevelEncryptionConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteFieldLevelEncryptionConfigRequest(obj: CloudFrontDeleteFieldLevelEncryptionConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteFieldLevelEncryptionProfileRequest
 */
export interface CloudFrontDeleteFieldLevelEncryptionProfileRequest {
  /**
   * @schema CloudFrontDeleteFieldLevelEncryptionProfileRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDeleteFieldLevelEncryptionProfileRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteFieldLevelEncryptionProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteFieldLevelEncryptionProfileRequest(obj: CloudFrontDeleteFieldLevelEncryptionProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteFunctionRequest
 */
export interface CloudFrontDeleteFunctionRequest {
  /**
   * @schema CloudFrontDeleteFunctionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontDeleteFunctionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteFunctionRequest(obj: CloudFrontDeleteFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteKeyGroupRequest
 */
export interface CloudFrontDeleteKeyGroupRequest {
  /**
   * @schema CloudFrontDeleteKeyGroupRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDeleteKeyGroupRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteKeyGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteKeyGroupRequest(obj: CloudFrontDeleteKeyGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteMonitoringSubscriptionRequest
 */
export interface CloudFrontDeleteMonitoringSubscriptionRequest {
  /**
   * @schema CloudFrontDeleteMonitoringSubscriptionRequest#DistributionId
   */
  readonly distributionId?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteMonitoringSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteMonitoringSubscriptionRequest(obj: CloudFrontDeleteMonitoringSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionId': obj.distributionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteMonitoringSubscriptionResult
 */
export interface CloudFrontDeleteMonitoringSubscriptionResult {
}

/**
 * Converts an object of type 'CloudFrontDeleteMonitoringSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteMonitoringSubscriptionResult(obj: CloudFrontDeleteMonitoringSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteOriginRequestPolicyRequest
 */
export interface CloudFrontDeleteOriginRequestPolicyRequest {
  /**
   * @schema CloudFrontDeleteOriginRequestPolicyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDeleteOriginRequestPolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteOriginRequestPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteOriginRequestPolicyRequest(obj: CloudFrontDeleteOriginRequestPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeletePublicKeyRequest
 */
export interface CloudFrontDeletePublicKeyRequest {
  /**
   * @schema CloudFrontDeletePublicKeyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDeletePublicKeyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeletePublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeletePublicKeyRequest(obj: CloudFrontDeletePublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontDeleteRealtimeLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteRealtimeLogConfigRequest(obj: CloudFrontDeleteRealtimeLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDeleteStreamingDistributionRequest
 */
export interface CloudFrontDeleteStreamingDistributionRequest {
  /**
   * @schema CloudFrontDeleteStreamingDistributionRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDeleteStreamingDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontDeleteStreamingDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDeleteStreamingDistributionRequest(obj: CloudFrontDeleteStreamingDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDescribeFunctionRequest
 */
export interface CloudFrontDescribeFunctionRequest {
  /**
   * @schema CloudFrontDescribeFunctionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontDescribeFunctionRequest#Stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'CloudFrontDescribeFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDescribeFunctionRequest(obj: CloudFrontDescribeFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDescribeFunctionResult
 */
export interface CloudFrontDescribeFunctionResult {
  /**
   * @schema CloudFrontDescribeFunctionResult#FunctionSummary
   */
  readonly functionSummary?: CloudFrontFunctionSummary;

  /**
   * @schema CloudFrontDescribeFunctionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * Converts an object of type 'CloudFrontDescribeFunctionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDescribeFunctionResult(obj: CloudFrontDescribeFunctionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionSummary': toJson_CloudFrontFunctionSummary(obj.functionSummary),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetCachePolicyRequest
 */
export interface CloudFrontGetCachePolicyRequest {
  /**
   * @schema CloudFrontGetCachePolicyRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetCachePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetCachePolicyRequest(obj: CloudFrontGetCachePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetCachePolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetCachePolicyResult(obj: CloudFrontGetCachePolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CachePolicy': toJson_CloudFrontCachePolicy(obj.cachePolicy),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetCachePolicyConfigRequest
 */
export interface CloudFrontGetCachePolicyConfigRequest {
  /**
   * @schema CloudFrontGetCachePolicyConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetCachePolicyConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetCachePolicyConfigRequest(obj: CloudFrontGetCachePolicyConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetCachePolicyConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetCachePolicyConfigResult(obj: CloudFrontGetCachePolicyConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CachePolicyConfig': toJson_CloudFrontCachePolicyConfig(obj.cachePolicyConfig),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetCloudFrontOriginAccessIdentityRequest
 */
export interface CloudFrontGetCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema CloudFrontGetCloudFrontOriginAccessIdentityRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetCloudFrontOriginAccessIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetCloudFrontOriginAccessIdentityRequest(obj: CloudFrontGetCloudFrontOriginAccessIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetCloudFrontOriginAccessIdentityResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetCloudFrontOriginAccessIdentityResult(obj: CloudFrontGetCloudFrontOriginAccessIdentityResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFrontOriginAccessIdentity': toJson_CloudFrontCloudFrontOriginAccessIdentity(obj.cloudFrontOriginAccessIdentity),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest
 */
export interface CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest {
  /**
   * @schema CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest(obj: CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetCloudFrontOriginAccessIdentityConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetCloudFrontOriginAccessIdentityConfigResult(obj: CloudFrontGetCloudFrontOriginAccessIdentityConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFrontOriginAccessIdentityConfig': toJson_CloudFrontCloudFrontOriginAccessIdentityConfig(obj.cloudFrontOriginAccessIdentityConfig),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetDistributionRequest
 */
export interface CloudFrontGetDistributionRequest {
  /**
   * @schema CloudFrontGetDistributionRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetDistributionRequest(obj: CloudFrontGetDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetDistributionResult(obj: CloudFrontGetDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Distribution': toJson_CloudFrontDistribution(obj.distribution),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetDistributionConfigRequest
 */
export interface CloudFrontGetDistributionConfigRequest {
  /**
   * @schema CloudFrontGetDistributionConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetDistributionConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetDistributionConfigRequest(obj: CloudFrontGetDistributionConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetDistributionConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetDistributionConfigResult(obj: CloudFrontGetDistributionConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionConfig': toJson_CloudFrontDistributionConfig(obj.distributionConfig),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetFieldLevelEncryptionRequest
 */
export interface CloudFrontGetFieldLevelEncryptionRequest {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetFieldLevelEncryptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFieldLevelEncryptionRequest(obj: CloudFrontGetFieldLevelEncryptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetFieldLevelEncryptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFieldLevelEncryptionResult(obj: CloudFrontGetFieldLevelEncryptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryption': toJson_CloudFrontFieldLevelEncryption(obj.fieldLevelEncryption),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetFieldLevelEncryptionConfigRequest
 */
export interface CloudFrontGetFieldLevelEncryptionConfigRequest {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetFieldLevelEncryptionConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFieldLevelEncryptionConfigRequest(obj: CloudFrontGetFieldLevelEncryptionConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetFieldLevelEncryptionConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFieldLevelEncryptionConfigResult(obj: CloudFrontGetFieldLevelEncryptionConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionConfig': toJson_CloudFrontFieldLevelEncryptionConfig(obj.fieldLevelEncryptionConfig),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetFieldLevelEncryptionProfileRequest
 */
export interface CloudFrontGetFieldLevelEncryptionProfileRequest {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionProfileRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetFieldLevelEncryptionProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFieldLevelEncryptionProfileRequest(obj: CloudFrontGetFieldLevelEncryptionProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetFieldLevelEncryptionProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFieldLevelEncryptionProfileResult(obj: CloudFrontGetFieldLevelEncryptionProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionProfile': toJson_CloudFrontFieldLevelEncryptionProfile(obj.fieldLevelEncryptionProfile),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetFieldLevelEncryptionProfileConfigRequest
 */
export interface CloudFrontGetFieldLevelEncryptionProfileConfigRequest {
  /**
   * @schema CloudFrontGetFieldLevelEncryptionProfileConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetFieldLevelEncryptionProfileConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFieldLevelEncryptionProfileConfigRequest(obj: CloudFrontGetFieldLevelEncryptionProfileConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetFieldLevelEncryptionProfileConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFieldLevelEncryptionProfileConfigResult(obj: CloudFrontGetFieldLevelEncryptionProfileConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionProfileConfig': toJson_CloudFrontFieldLevelEncryptionProfileConfig(obj.fieldLevelEncryptionProfileConfig),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetFunctionRequest
 */
export interface CloudFrontGetFunctionRequest {
  /**
   * @schema CloudFrontGetFunctionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontGetFunctionRequest#Stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'CloudFrontGetFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFunctionRequest(obj: CloudFrontGetFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetFunctionResult
 */
export interface CloudFrontGetFunctionResult {
  /**
   * @schema CloudFrontGetFunctionResult#FunctionCode
   */
  readonly functionCode?: any;

  /**
   * @schema CloudFrontGetFunctionResult#ETag
   */
  readonly eTag?: string;

  /**
   * @schema CloudFrontGetFunctionResult#ContentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'CloudFrontGetFunctionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetFunctionResult(obj: CloudFrontGetFunctionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionCode': obj.functionCode,
    'ETag': obj.eTag,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetInvalidationRequest
 */
export interface CloudFrontGetInvalidationRequest {
  /**
   * @schema CloudFrontGetInvalidationRequest#DistributionId
   */
  readonly distributionId?: string;

  /**
   * @schema CloudFrontGetInvalidationRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetInvalidationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetInvalidationRequest(obj: CloudFrontGetInvalidationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionId': obj.distributionId,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetInvalidationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetInvalidationResult(obj: CloudFrontGetInvalidationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Invalidation': toJson_CloudFrontInvalidation(obj.invalidation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetKeyGroupRequest
 */
export interface CloudFrontGetKeyGroupRequest {
  /**
   * @schema CloudFrontGetKeyGroupRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetKeyGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetKeyGroupRequest(obj: CloudFrontGetKeyGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetKeyGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetKeyGroupResult(obj: CloudFrontGetKeyGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyGroup': toJson_CloudFrontKeyGroup(obj.keyGroup),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetKeyGroupConfigRequest
 */
export interface CloudFrontGetKeyGroupConfigRequest {
  /**
   * @schema CloudFrontGetKeyGroupConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetKeyGroupConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetKeyGroupConfigRequest(obj: CloudFrontGetKeyGroupConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetKeyGroupConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetKeyGroupConfigResult(obj: CloudFrontGetKeyGroupConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyGroupConfig': toJson_CloudFrontKeyGroupConfig(obj.keyGroupConfig),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetMonitoringSubscriptionRequest
 */
export interface CloudFrontGetMonitoringSubscriptionRequest {
  /**
   * @schema CloudFrontGetMonitoringSubscriptionRequest#DistributionId
   */
  readonly distributionId?: string;

}

/**
 * Converts an object of type 'CloudFrontGetMonitoringSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetMonitoringSubscriptionRequest(obj: CloudFrontGetMonitoringSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionId': obj.distributionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetMonitoringSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetMonitoringSubscriptionResult(obj: CloudFrontGetMonitoringSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MonitoringSubscription': toJson_CloudFrontMonitoringSubscription(obj.monitoringSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetOriginRequestPolicyRequest
 */
export interface CloudFrontGetOriginRequestPolicyRequest {
  /**
   * @schema CloudFrontGetOriginRequestPolicyRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetOriginRequestPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetOriginRequestPolicyRequest(obj: CloudFrontGetOriginRequestPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetOriginRequestPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetOriginRequestPolicyResult(obj: CloudFrontGetOriginRequestPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginRequestPolicy': toJson_CloudFrontOriginRequestPolicy(obj.originRequestPolicy),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetOriginRequestPolicyConfigRequest
 */
export interface CloudFrontGetOriginRequestPolicyConfigRequest {
  /**
   * @schema CloudFrontGetOriginRequestPolicyConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetOriginRequestPolicyConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetOriginRequestPolicyConfigRequest(obj: CloudFrontGetOriginRequestPolicyConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetOriginRequestPolicyConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetOriginRequestPolicyConfigResult(obj: CloudFrontGetOriginRequestPolicyConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginRequestPolicyConfig': toJson_CloudFrontOriginRequestPolicyConfig(obj.originRequestPolicyConfig),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetPublicKeyRequest
 */
export interface CloudFrontGetPublicKeyRequest {
  /**
   * @schema CloudFrontGetPublicKeyRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetPublicKeyRequest(obj: CloudFrontGetPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetPublicKeyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetPublicKeyResult(obj: CloudFrontGetPublicKeyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKey': toJson_CloudFrontPublicKey(obj.publicKey),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetPublicKeyConfigRequest
 */
export interface CloudFrontGetPublicKeyConfigRequest {
  /**
   * @schema CloudFrontGetPublicKeyConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetPublicKeyConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetPublicKeyConfigRequest(obj: CloudFrontGetPublicKeyConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetPublicKeyConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetPublicKeyConfigResult(obj: CloudFrontGetPublicKeyConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKeyConfig': toJson_CloudFrontPublicKeyConfig(obj.publicKeyConfig),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetRealtimeLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetRealtimeLogConfigRequest(obj: CloudFrontGetRealtimeLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetRealtimeLogConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetRealtimeLogConfigResult(obj: CloudFrontGetRealtimeLogConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RealtimeLogConfig': toJson_CloudFrontRealtimeLogConfig(obj.realtimeLogConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetStreamingDistributionRequest
 */
export interface CloudFrontGetStreamingDistributionRequest {
  /**
   * @schema CloudFrontGetStreamingDistributionRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetStreamingDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetStreamingDistributionRequest(obj: CloudFrontGetStreamingDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetStreamingDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetStreamingDistributionResult(obj: CloudFrontGetStreamingDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistribution': toJson_CloudFrontStreamingDistribution(obj.streamingDistribution),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGetStreamingDistributionConfigRequest
 */
export interface CloudFrontGetStreamingDistributionConfigRequest {
  /**
   * @schema CloudFrontGetStreamingDistributionConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudFrontGetStreamingDistributionConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetStreamingDistributionConfigRequest(obj: CloudFrontGetStreamingDistributionConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontGetStreamingDistributionConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGetStreamingDistributionConfigResult(obj: CloudFrontGetStreamingDistributionConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistributionConfig': toJson_CloudFrontStreamingDistributionConfig(obj.streamingDistributionConfig),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListCachePoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListCachePoliciesRequest(obj: CloudFrontListCachePoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListCachePoliciesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListCachePoliciesResult(obj: CloudFrontListCachePoliciesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CachePolicyList': toJson_CloudFrontCachePolicyList(obj.cachePolicyList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListCloudFrontOriginAccessIdentitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListCloudFrontOriginAccessIdentitiesRequest(obj: CloudFrontListCloudFrontOriginAccessIdentitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListCloudFrontOriginAccessIdentitiesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListCloudFrontOriginAccessIdentitiesResult(obj: CloudFrontListCloudFrontOriginAccessIdentitiesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFrontOriginAccessIdentityList': toJson_CloudFrontCloudFrontOriginAccessIdentityList(obj.cloudFrontOriginAccessIdentityList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontListConflictingAliasesRequest
 */
export interface CloudFrontListConflictingAliasesRequest {
  /**
   * @schema CloudFrontListConflictingAliasesRequest#DistributionId
   */
  readonly distributionId?: string;

  /**
   * @schema CloudFrontListConflictingAliasesRequest#Alias
   */
  readonly alias?: string;

  /**
   * @schema CloudFrontListConflictingAliasesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListConflictingAliasesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'CloudFrontListConflictingAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListConflictingAliasesRequest(obj: CloudFrontListConflictingAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionId': obj.distributionId,
    'Alias': obj.alias,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontListConflictingAliasesResult
 */
export interface CloudFrontListConflictingAliasesResult {
  /**
   * @schema CloudFrontListConflictingAliasesResult#ConflictingAliasesList
   */
  readonly conflictingAliasesList?: CloudFrontConflictingAliasesList;

}

/**
 * Converts an object of type 'CloudFrontListConflictingAliasesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListConflictingAliasesResult(obj: CloudFrontListConflictingAliasesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConflictingAliasesList': toJson_CloudFrontConflictingAliasesList(obj.conflictingAliasesList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListDistributionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsRequest(obj: CloudFrontListDistributionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListDistributionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsResult(obj: CloudFrontListDistributionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionList': toJson_CloudFrontDistributionList(obj.distributionList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly cachePolicyId?: string;

}

/**
 * Converts an object of type 'CloudFrontListDistributionsByCachePolicyIdRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByCachePolicyIdRequest(obj: CloudFrontListDistributionsByCachePolicyIdRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
    'CachePolicyId': obj.cachePolicyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListDistributionsByCachePolicyIdResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByCachePolicyIdResult(obj: CloudFrontListDistributionsByCachePolicyIdResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionIdList': toJson_CloudFrontDistributionIdList(obj.distributionIdList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly keyGroupId?: string;

}

/**
 * Converts an object of type 'CloudFrontListDistributionsByKeyGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByKeyGroupRequest(obj: CloudFrontListDistributionsByKeyGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
    'KeyGroupId': obj.keyGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListDistributionsByKeyGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByKeyGroupResult(obj: CloudFrontListDistributionsByKeyGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionIdList': toJson_CloudFrontDistributionIdList(obj.distributionIdList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly originRequestPolicyId?: string;

}

/**
 * Converts an object of type 'CloudFrontListDistributionsByOriginRequestPolicyIdRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByOriginRequestPolicyIdRequest(obj: CloudFrontListDistributionsByOriginRequestPolicyIdRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
    'OriginRequestPolicyId': obj.originRequestPolicyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListDistributionsByOriginRequestPolicyIdResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByOriginRequestPolicyIdResult(obj: CloudFrontListDistributionsByOriginRequestPolicyIdResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionIdList': toJson_CloudFrontDistributionIdList(obj.distributionIdList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListDistributionsByRealtimeLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByRealtimeLogConfigRequest(obj: CloudFrontListDistributionsByRealtimeLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
    'RealtimeLogConfigName': obj.realtimeLogConfigName,
    'RealtimeLogConfigArn': obj.realtimeLogConfigArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListDistributionsByRealtimeLogConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByRealtimeLogConfigResult(obj: CloudFrontListDistributionsByRealtimeLogConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionList': toJson_CloudFrontDistributionList(obj.distributionList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly webAclId?: string;

}

/**
 * Converts an object of type 'CloudFrontListDistributionsByWebAclIdRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByWebAclIdRequest(obj: CloudFrontListDistributionsByWebAclIdRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
    'WebACLId': obj.webAclId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListDistributionsByWebAclIdResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListDistributionsByWebAclIdResult(obj: CloudFrontListDistributionsByWebAclIdResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionList': toJson_CloudFrontDistributionList(obj.distributionList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListFieldLevelEncryptionConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListFieldLevelEncryptionConfigsRequest(obj: CloudFrontListFieldLevelEncryptionConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListFieldLevelEncryptionConfigsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListFieldLevelEncryptionConfigsResult(obj: CloudFrontListFieldLevelEncryptionConfigsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionList': toJson_CloudFrontFieldLevelEncryptionList(obj.fieldLevelEncryptionList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListFieldLevelEncryptionProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListFieldLevelEncryptionProfilesRequest(obj: CloudFrontListFieldLevelEncryptionProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListFieldLevelEncryptionProfilesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListFieldLevelEncryptionProfilesResult(obj: CloudFrontListFieldLevelEncryptionProfilesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionProfileList': toJson_CloudFrontFieldLevelEncryptionProfileList(obj.fieldLevelEncryptionProfileList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontListFunctionsRequest
 */
export interface CloudFrontListFunctionsRequest {
  /**
   * @schema CloudFrontListFunctionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontListFunctionsRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema CloudFrontListFunctionsRequest#Stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'CloudFrontListFunctionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListFunctionsRequest(obj: CloudFrontListFunctionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
    'Stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontListFunctionsResult
 */
export interface CloudFrontListFunctionsResult {
  /**
   * @schema CloudFrontListFunctionsResult#FunctionList
   */
  readonly functionList?: CloudFrontFunctionList;

}

/**
 * Converts an object of type 'CloudFrontListFunctionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListFunctionsResult(obj: CloudFrontListFunctionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionList': toJson_CloudFrontFunctionList(obj.functionList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontListInvalidationsRequest
 */
export interface CloudFrontListInvalidationsRequest {
  /**
   * @schema CloudFrontListInvalidationsRequest#DistributionId
   */
  readonly distributionId?: string;

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
 * Converts an object of type 'CloudFrontListInvalidationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListInvalidationsRequest(obj: CloudFrontListInvalidationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionId': obj.distributionId,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListInvalidationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListInvalidationsResult(obj: CloudFrontListInvalidationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvalidationList': toJson_CloudFrontInvalidationList(obj.invalidationList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListKeyGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListKeyGroupsRequest(obj: CloudFrontListKeyGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListKeyGroupsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListKeyGroupsResult(obj: CloudFrontListKeyGroupsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyGroupList': toJson_CloudFrontKeyGroupList(obj.keyGroupList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListOriginRequestPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListOriginRequestPoliciesRequest(obj: CloudFrontListOriginRequestPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListOriginRequestPoliciesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListOriginRequestPoliciesResult(obj: CloudFrontListOriginRequestPoliciesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginRequestPolicyList': toJson_CloudFrontOriginRequestPolicyList(obj.originRequestPolicyList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListPublicKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListPublicKeysRequest(obj: CloudFrontListPublicKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListPublicKeysResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListPublicKeysResult(obj: CloudFrontListPublicKeysResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKeyList': toJson_CloudFrontPublicKeyList(obj.publicKeyList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListRealtimeLogConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListRealtimeLogConfigsRequest(obj: CloudFrontListRealtimeLogConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxItems': obj.maxItems,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListRealtimeLogConfigsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListRealtimeLogConfigsResult(obj: CloudFrontListRealtimeLogConfigsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RealtimeLogConfigs': toJson_CloudFrontRealtimeLogConfigs(obj.realtimeLogConfigs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListStreamingDistributionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListStreamingDistributionsRequest(obj: CloudFrontListStreamingDistributionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontListStreamingDistributionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListStreamingDistributionsResult(obj: CloudFrontListStreamingDistributionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistributionList': toJson_CloudFrontStreamingDistributionList(obj.streamingDistributionList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontListTagsForResourceRequest
 */
export interface CloudFrontListTagsForResourceRequest {
  /**
   * @schema CloudFrontListTagsForResourceRequest#Resource
   */
  readonly resource?: string;

}

/**
 * Converts an object of type 'CloudFrontListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListTagsForResourceRequest(obj: CloudFrontListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontListTagsForResourceResult
 */
export interface CloudFrontListTagsForResourceResult {
  /**
   * @schema CloudFrontListTagsForResourceResult#Tags
   */
  readonly tags?: CloudFrontTags;

}

/**
 * Converts an object of type 'CloudFrontListTagsForResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontListTagsForResourceResult(obj: CloudFrontListTagsForResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': toJson_CloudFrontTags(obj.tags),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontPublishFunctionRequest
 */
export interface CloudFrontPublishFunctionRequest {
  /**
   * @schema CloudFrontPublishFunctionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontPublishFunctionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontPublishFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontPublishFunctionRequest(obj: CloudFrontPublishFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontPublishFunctionResult
 */
export interface CloudFrontPublishFunctionResult {
  /**
   * @schema CloudFrontPublishFunctionResult#FunctionSummary
   */
  readonly functionSummary?: CloudFrontFunctionSummary;

}

/**
 * Converts an object of type 'CloudFrontPublishFunctionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontPublishFunctionResult(obj: CloudFrontPublishFunctionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionSummary': toJson_CloudFrontFunctionSummary(obj.functionSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontTagResourceRequest
 */
export interface CloudFrontTagResourceRequest {
  /**
   * @schema CloudFrontTagResourceRequest#Resource
   */
  readonly resource?: string;

  /**
   * @schema CloudFrontTagResourceRequest#Tags
   */
  readonly tags?: CloudFrontTags;

}

/**
 * Converts an object of type 'CloudFrontTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontTagResourceRequest(obj: CloudFrontTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
    'Tags': toJson_CloudFrontTags(obj.tags),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontTestFunctionRequest
 */
export interface CloudFrontTestFunctionRequest {
  /**
   * @schema CloudFrontTestFunctionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontTestFunctionRequest#IfMatch
   */
  readonly ifMatch?: string;

  /**
   * @schema CloudFrontTestFunctionRequest#Stage
   */
  readonly stage?: string;

  /**
   * @schema CloudFrontTestFunctionRequest#EventObject
   */
  readonly eventObject?: any;

}

/**
 * Converts an object of type 'CloudFrontTestFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontTestFunctionRequest(obj: CloudFrontTestFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'IfMatch': obj.ifMatch,
    'Stage': obj.stage,
    'EventObject': obj.eventObject,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontTestFunctionResult
 */
export interface CloudFrontTestFunctionResult {
  /**
   * @schema CloudFrontTestFunctionResult#TestResult
   */
  readonly testResult?: CloudFrontTestResult;

}

/**
 * Converts an object of type 'CloudFrontTestFunctionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontTestFunctionResult(obj: CloudFrontTestFunctionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TestResult': toJson_CloudFrontTestResult(obj.testResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUntagResourceRequest
 */
export interface CloudFrontUntagResourceRequest {
  /**
   * @schema CloudFrontUntagResourceRequest#Resource
   */
  readonly resource?: string;

  /**
   * @schema CloudFrontUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: CloudFrontTagKeys;

}

/**
 * Converts an object of type 'CloudFrontUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUntagResourceRequest(obj: CloudFrontUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
    'TagKeys': toJson_CloudFrontTagKeys(obj.tagKeys),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateCachePolicyRequest
 */
export interface CloudFrontUpdateCachePolicyRequest {
  /**
   * @schema CloudFrontUpdateCachePolicyRequest#CachePolicyConfig
   */
  readonly cachePolicyConfig?: CloudFrontCachePolicyConfig;

  /**
   * @schema CloudFrontUpdateCachePolicyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontUpdateCachePolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdateCachePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateCachePolicyRequest(obj: CloudFrontUpdateCachePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CachePolicyConfig': toJson_CloudFrontCachePolicyConfig(obj.cachePolicyConfig),
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateCachePolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateCachePolicyResult(obj: CloudFrontUpdateCachePolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CachePolicy': toJson_CloudFrontCachePolicy(obj.cachePolicy),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityRequest
 */
export interface CloudFrontUpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityRequest#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig?: CloudFrontCloudFrontOriginAccessIdentityConfig;

  /**
   * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontUpdateCloudFrontOriginAccessIdentityRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdateCloudFrontOriginAccessIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateCloudFrontOriginAccessIdentityRequest(obj: CloudFrontUpdateCloudFrontOriginAccessIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFrontOriginAccessIdentityConfig': toJson_CloudFrontCloudFrontOriginAccessIdentityConfig(obj.cloudFrontOriginAccessIdentityConfig),
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateCloudFrontOriginAccessIdentityResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateCloudFrontOriginAccessIdentityResult(obj: CloudFrontUpdateCloudFrontOriginAccessIdentityResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFrontOriginAccessIdentity': toJson_CloudFrontCloudFrontOriginAccessIdentity(obj.cloudFrontOriginAccessIdentity),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateDistributionRequest
 */
export interface CloudFrontUpdateDistributionRequest {
  /**
   * @schema CloudFrontUpdateDistributionRequest#DistributionConfig
   */
  readonly distributionConfig?: CloudFrontDistributionConfig;

  /**
   * @schema CloudFrontUpdateDistributionRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontUpdateDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdateDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateDistributionRequest(obj: CloudFrontUpdateDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionConfig': toJson_CloudFrontDistributionConfig(obj.distributionConfig),
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateDistributionResult(obj: CloudFrontUpdateDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Distribution': toJson_CloudFrontDistribution(obj.distribution),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateFieldLevelEncryptionConfigRequest
 */
export interface CloudFrontUpdateFieldLevelEncryptionConfigRequest {
  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionConfigRequest#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig?: CloudFrontFieldLevelEncryptionConfig;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionConfigRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionConfigRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdateFieldLevelEncryptionConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateFieldLevelEncryptionConfigRequest(obj: CloudFrontUpdateFieldLevelEncryptionConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionConfig': toJson_CloudFrontFieldLevelEncryptionConfig(obj.fieldLevelEncryptionConfig),
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateFieldLevelEncryptionConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateFieldLevelEncryptionConfigResult(obj: CloudFrontUpdateFieldLevelEncryptionConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryption': toJson_CloudFrontFieldLevelEncryption(obj.fieldLevelEncryption),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateFieldLevelEncryptionProfileRequest
 */
export interface CloudFrontUpdateFieldLevelEncryptionProfileRequest {
  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionProfileRequest#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig?: CloudFrontFieldLevelEncryptionProfileConfig;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionProfileRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontUpdateFieldLevelEncryptionProfileRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdateFieldLevelEncryptionProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateFieldLevelEncryptionProfileRequest(obj: CloudFrontUpdateFieldLevelEncryptionProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionProfileConfig': toJson_CloudFrontFieldLevelEncryptionProfileConfig(obj.fieldLevelEncryptionProfileConfig),
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateFieldLevelEncryptionProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateFieldLevelEncryptionProfileResult(obj: CloudFrontUpdateFieldLevelEncryptionProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldLevelEncryptionProfile': toJson_CloudFrontFieldLevelEncryptionProfile(obj.fieldLevelEncryptionProfile),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateFunctionRequest
 */
export interface CloudFrontUpdateFunctionRequest {
  /**
   * @schema CloudFrontUpdateFunctionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontUpdateFunctionRequest#IfMatch
   */
  readonly ifMatch?: string;

  /**
   * @schema CloudFrontUpdateFunctionRequest#FunctionConfig
   */
  readonly functionConfig?: CloudFrontFunctionConfig;

  /**
   * @schema CloudFrontUpdateFunctionRequest#FunctionCode
   */
  readonly functionCode?: any;

}

/**
 * Converts an object of type 'CloudFrontUpdateFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateFunctionRequest(obj: CloudFrontUpdateFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'IfMatch': obj.ifMatch,
    'FunctionConfig': toJson_CloudFrontFunctionConfig(obj.functionConfig),
    'FunctionCode': obj.functionCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateFunctionResult
 */
export interface CloudFrontUpdateFunctionResult {
  /**
   * @schema CloudFrontUpdateFunctionResult#FunctionSummary
   */
  readonly functionSummary?: CloudFrontFunctionSummary;

  /**
   * @schema CloudFrontUpdateFunctionResult#ETag
   */
  readonly eTag?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdateFunctionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateFunctionResult(obj: CloudFrontUpdateFunctionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionSummary': toJson_CloudFrontFunctionSummary(obj.functionSummary),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateKeyGroupRequest
 */
export interface CloudFrontUpdateKeyGroupRequest {
  /**
   * @schema CloudFrontUpdateKeyGroupRequest#KeyGroupConfig
   */
  readonly keyGroupConfig?: CloudFrontKeyGroupConfig;

  /**
   * @schema CloudFrontUpdateKeyGroupRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontUpdateKeyGroupRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdateKeyGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateKeyGroupRequest(obj: CloudFrontUpdateKeyGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyGroupConfig': toJson_CloudFrontKeyGroupConfig(obj.keyGroupConfig),
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateKeyGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateKeyGroupResult(obj: CloudFrontUpdateKeyGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyGroup': toJson_CloudFrontKeyGroup(obj.keyGroup),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateOriginRequestPolicyRequest
 */
export interface CloudFrontUpdateOriginRequestPolicyRequest {
  /**
   * @schema CloudFrontUpdateOriginRequestPolicyRequest#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig?: CloudFrontOriginRequestPolicyConfig;

  /**
   * @schema CloudFrontUpdateOriginRequestPolicyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontUpdateOriginRequestPolicyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdateOriginRequestPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateOriginRequestPolicyRequest(obj: CloudFrontUpdateOriginRequestPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginRequestPolicyConfig': toJson_CloudFrontOriginRequestPolicyConfig(obj.originRequestPolicyConfig),
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateOriginRequestPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateOriginRequestPolicyResult(obj: CloudFrontUpdateOriginRequestPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginRequestPolicy': toJson_CloudFrontOriginRequestPolicy(obj.originRequestPolicy),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdatePublicKeyRequest
 */
export interface CloudFrontUpdatePublicKeyRequest {
  /**
   * @schema CloudFrontUpdatePublicKeyRequest#PublicKeyConfig
   */
  readonly publicKeyConfig?: CloudFrontPublicKeyConfig;

  /**
   * @schema CloudFrontUpdatePublicKeyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontUpdatePublicKeyRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdatePublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdatePublicKeyRequest(obj: CloudFrontUpdatePublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKeyConfig': toJson_CloudFrontPublicKeyConfig(obj.publicKeyConfig),
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdatePublicKeyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdatePublicKeyResult(obj: CloudFrontUpdatePublicKeyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKey': toJson_CloudFrontPublicKey(obj.publicKey),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateRealtimeLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateRealtimeLogConfigRequest(obj: CloudFrontUpdateRealtimeLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndPoints': obj.endPoints?.map(y => toJson_CloudFrontEndPoint(y)),
    'Fields': obj.fields?.map(y => y),
    'Name': obj.name,
    'ARN': obj.arn,
    'SamplingRate': obj.samplingRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateRealtimeLogConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateRealtimeLogConfigResult(obj: CloudFrontUpdateRealtimeLogConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RealtimeLogConfig': toJson_CloudFrontRealtimeLogConfig(obj.realtimeLogConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontUpdateStreamingDistributionRequest
 */
export interface CloudFrontUpdateStreamingDistributionRequest {
  /**
   * @schema CloudFrontUpdateStreamingDistributionRequest#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig?: CloudFrontStreamingDistributionConfig;

  /**
   * @schema CloudFrontUpdateStreamingDistributionRequest#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontUpdateStreamingDistributionRequest#IfMatch
   */
  readonly ifMatch?: string;

}

/**
 * Converts an object of type 'CloudFrontUpdateStreamingDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateStreamingDistributionRequest(obj: CloudFrontUpdateStreamingDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistributionConfig': toJson_CloudFrontStreamingDistributionConfig(obj.streamingDistributionConfig),
    'Id': obj.id,
    'IfMatch': obj.ifMatch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontUpdateStreamingDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontUpdateStreamingDistributionResult(obj: CloudFrontUpdateStreamingDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistribution': toJson_CloudFrontStreamingDistribution(obj.streamingDistribution),
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly name?: string;

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
  readonly minTtl?: number;

  /**
   * @schema CloudFrontCachePolicyConfig#ParametersInCacheKeyAndForwardedToOrigin
   */
  readonly parametersInCacheKeyAndForwardedToOrigin?: CloudFrontParametersInCacheKeyAndForwardedToOrigin;

}

/**
 * Converts an object of type 'CloudFrontCachePolicyConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCachePolicyConfig(obj: CloudFrontCachePolicyConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comment': obj.comment,
    'Name': obj.name,
    'DefaultTTL': obj.defaultTtl,
    'MaxTTL': obj.maxTtl,
    'MinTTL': obj.minTtl,
    'ParametersInCacheKeyAndForwardedToOrigin': toJson_CloudFrontParametersInCacheKeyAndForwardedToOrigin(obj.parametersInCacheKeyAndForwardedToOrigin),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCachePolicy
 */
export interface CloudFrontCachePolicy {
  /**
   * @schema CloudFrontCachePolicy#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontCachePolicy#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontCachePolicy#CachePolicyConfig
   */
  readonly cachePolicyConfig?: CloudFrontCachePolicyConfig;

}

/**
 * Converts an object of type 'CloudFrontCachePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCachePolicy(obj: CloudFrontCachePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'LastModifiedTime': obj.lastModifiedTime,
    'CachePolicyConfig': toJson_CloudFrontCachePolicyConfig(obj.cachePolicyConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCloudFrontOriginAccessIdentityConfig
 */
export interface CloudFrontCloudFrontOriginAccessIdentityConfig {
  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityConfig#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityConfig#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'CloudFrontCloudFrontOriginAccessIdentityConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCloudFrontOriginAccessIdentityConfig(obj: CloudFrontCloudFrontOriginAccessIdentityConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallerReference': obj.callerReference,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCloudFrontOriginAccessIdentity
 */
export interface CloudFrontCloudFrontOriginAccessIdentity {
  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentity#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentity#S3CanonicalUserId
   */
  readonly s3CanonicalUserId?: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentity#CloudFrontOriginAccessIdentityConfig
   */
  readonly cloudFrontOriginAccessIdentityConfig?: CloudFrontCloudFrontOriginAccessIdentityConfig;

}

/**
 * Converts an object of type 'CloudFrontCloudFrontOriginAccessIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCloudFrontOriginAccessIdentity(obj: CloudFrontCloudFrontOriginAccessIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'S3CanonicalUserId': obj.s3CanonicalUserId,
    'CloudFrontOriginAccessIdentityConfig': toJson_CloudFrontCloudFrontOriginAccessIdentityConfig(obj.cloudFrontOriginAccessIdentityConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDistributionConfig
 */
export interface CloudFrontDistributionConfig {
  /**
   * @schema CloudFrontDistributionConfig#CallerReference
   */
  readonly callerReference?: string;

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
  readonly origins?: CloudFrontOrigins;

  /**
   * @schema CloudFrontDistributionConfig#OriginGroups
   */
  readonly originGroups?: CloudFrontOriginGroups;

  /**
   * @schema CloudFrontDistributionConfig#DefaultCacheBehavior
   */
  readonly defaultCacheBehavior?: CloudFrontDefaultCacheBehavior;

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
  readonly comment?: string;

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
  readonly enabled?: boolean;

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
 * Converts an object of type 'CloudFrontDistributionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDistributionConfig(obj: CloudFrontDistributionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallerReference': obj.callerReference,
    'Aliases': toJson_CloudFrontAliases(obj.aliases),
    'DefaultRootObject': obj.defaultRootObject,
    'Origins': toJson_CloudFrontOrigins(obj.origins),
    'OriginGroups': toJson_CloudFrontOriginGroups(obj.originGroups),
    'DefaultCacheBehavior': toJson_CloudFrontDefaultCacheBehavior(obj.defaultCacheBehavior),
    'CacheBehaviors': toJson_CloudFrontCacheBehaviors(obj.cacheBehaviors),
    'CustomErrorResponses': toJson_CloudFrontCustomErrorResponses(obj.customErrorResponses),
    'Comment': obj.comment,
    'Logging': toJson_CloudFrontLoggingConfig(obj.logging),
    'PriceClass': obj.priceClass,
    'Enabled': obj.enabled,
    'ViewerCertificate': toJson_CloudFrontViewerCertificate(obj.viewerCertificate),
    'Restrictions': toJson_CloudFrontRestrictions(obj.restrictions),
    'WebACLId': obj.webAclId,
    'HttpVersion': obj.httpVersion,
    'IsIPV6Enabled': obj.isIpv6Enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDistribution
 */
export interface CloudFrontDistribution {
  /**
   * @schema CloudFrontDistribution#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDistribution#ARN
   */
  readonly arn?: string;

  /**
   * @schema CloudFrontDistribution#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFrontDistribution#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontDistribution#InProgressInvalidationBatches
   */
  readonly inProgressInvalidationBatches?: number;

  /**
   * @schema CloudFrontDistribution#DomainName
   */
  readonly domainName?: string;

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
  readonly distributionConfig?: CloudFrontDistributionConfig;

  /**
   * @schema CloudFrontDistribution#AliasICPRecordals
   */
  readonly aliasIcpRecordals?: CloudFrontAliasIcpRecordal[];

}

/**
 * Converts an object of type 'CloudFrontDistribution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDistribution(obj: CloudFrontDistribution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ARN': obj.arn,
    'Status': obj.status,
    'LastModifiedTime': obj.lastModifiedTime,
    'InProgressInvalidationBatches': obj.inProgressInvalidationBatches,
    'DomainName': obj.domainName,
    'ActiveTrustedSigners': toJson_CloudFrontActiveTrustedSigners(obj.activeTrustedSigners),
    'ActiveTrustedKeyGroups': toJson_CloudFrontActiveTrustedKeyGroups(obj.activeTrustedKeyGroups),
    'DistributionConfig': toJson_CloudFrontDistributionConfig(obj.distributionConfig),
    'AliasICPRecordals': obj.aliasIcpRecordals?.map(y => toJson_CloudFrontAliasIcpRecordal(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDistributionConfigWithTags
 */
export interface CloudFrontDistributionConfigWithTags {
  /**
   * @schema CloudFrontDistributionConfigWithTags#DistributionConfig
   */
  readonly distributionConfig?: CloudFrontDistributionConfig;

  /**
   * @schema CloudFrontDistributionConfigWithTags#Tags
   */
  readonly tags?: CloudFrontTags;

}

/**
 * Converts an object of type 'CloudFrontDistributionConfigWithTags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDistributionConfigWithTags(obj: CloudFrontDistributionConfigWithTags | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DistributionConfig': toJson_CloudFrontDistributionConfig(obj.distributionConfig),
    'Tags': toJson_CloudFrontTags(obj.tags),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFieldLevelEncryptionConfig
 */
export interface CloudFrontFieldLevelEncryptionConfig {
  /**
   * @schema CloudFrontFieldLevelEncryptionConfig#CallerReference
   */
  readonly callerReference?: string;

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
 * Converts an object of type 'CloudFrontFieldLevelEncryptionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFieldLevelEncryptionConfig(obj: CloudFrontFieldLevelEncryptionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallerReference': obj.callerReference,
    'Comment': obj.comment,
    'QueryArgProfileConfig': toJson_CloudFrontQueryArgProfileConfig(obj.queryArgProfileConfig),
    'ContentTypeProfileConfig': toJson_CloudFrontContentTypeProfileConfig(obj.contentTypeProfileConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFieldLevelEncryption
 */
export interface CloudFrontFieldLevelEncryption {
  /**
   * @schema CloudFrontFieldLevelEncryption#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontFieldLevelEncryption#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontFieldLevelEncryption#FieldLevelEncryptionConfig
   */
  readonly fieldLevelEncryptionConfig?: CloudFrontFieldLevelEncryptionConfig;

}

/**
 * Converts an object of type 'CloudFrontFieldLevelEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFieldLevelEncryption(obj: CloudFrontFieldLevelEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'LastModifiedTime': obj.lastModifiedTime,
    'FieldLevelEncryptionConfig': toJson_CloudFrontFieldLevelEncryptionConfig(obj.fieldLevelEncryptionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFieldLevelEncryptionProfileConfig
 */
export interface CloudFrontFieldLevelEncryptionProfileConfig {
  /**
   * @schema CloudFrontFieldLevelEncryptionProfileConfig#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileConfig#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileConfig#EncryptionEntities
   */
  readonly encryptionEntities?: CloudFrontEncryptionEntities;

}

/**
 * Converts an object of type 'CloudFrontFieldLevelEncryptionProfileConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFieldLevelEncryptionProfileConfig(obj: CloudFrontFieldLevelEncryptionProfileConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CallerReference': obj.callerReference,
    'Comment': obj.comment,
    'EncryptionEntities': toJson_CloudFrontEncryptionEntities(obj.encryptionEntities),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFieldLevelEncryptionProfile
 */
export interface CloudFrontFieldLevelEncryptionProfile {
  /**
   * @schema CloudFrontFieldLevelEncryptionProfile#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfile#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfile#FieldLevelEncryptionProfileConfig
   */
  readonly fieldLevelEncryptionProfileConfig?: CloudFrontFieldLevelEncryptionProfileConfig;

}

/**
 * Converts an object of type 'CloudFrontFieldLevelEncryptionProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFieldLevelEncryptionProfile(obj: CloudFrontFieldLevelEncryptionProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'LastModifiedTime': obj.lastModifiedTime,
    'FieldLevelEncryptionProfileConfig': toJson_CloudFrontFieldLevelEncryptionProfileConfig(obj.fieldLevelEncryptionProfileConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFunctionConfig
 */
export interface CloudFrontFunctionConfig {
  /**
   * @schema CloudFrontFunctionConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontFunctionConfig#Runtime
   */
  readonly runtime?: string;

}

/**
 * Converts an object of type 'CloudFrontFunctionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFunctionConfig(obj: CloudFrontFunctionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comment': obj.comment,
    'Runtime': obj.runtime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFunctionSummary
 */
export interface CloudFrontFunctionSummary {
  /**
   * @schema CloudFrontFunctionSummary#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontFunctionSummary#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFrontFunctionSummary#FunctionConfig
   */
  readonly functionConfig?: CloudFrontFunctionConfig;

  /**
   * @schema CloudFrontFunctionSummary#FunctionMetadata
   */
  readonly functionMetadata?: CloudFrontFunctionMetadata;

}

/**
 * Converts an object of type 'CloudFrontFunctionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFunctionSummary(obj: CloudFrontFunctionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Status': obj.status,
    'FunctionConfig': toJson_CloudFrontFunctionConfig(obj.functionConfig),
    'FunctionMetadata': toJson_CloudFrontFunctionMetadata(obj.functionMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontInvalidationBatch
 */
export interface CloudFrontInvalidationBatch {
  /**
   * @schema CloudFrontInvalidationBatch#Paths
   */
  readonly paths?: CloudFrontPaths;

  /**
   * @schema CloudFrontInvalidationBatch#CallerReference
   */
  readonly callerReference?: string;

}

/**
 * Converts an object of type 'CloudFrontInvalidationBatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontInvalidationBatch(obj: CloudFrontInvalidationBatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Paths': toJson_CloudFrontPaths(obj.paths),
    'CallerReference': obj.callerReference,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontInvalidation
 */
export interface CloudFrontInvalidation {
  /**
   * @schema CloudFrontInvalidation#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontInvalidation#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFrontInvalidation#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema CloudFrontInvalidation#InvalidationBatch
   */
  readonly invalidationBatch?: CloudFrontInvalidationBatch;

}

/**
 * Converts an object of type 'CloudFrontInvalidation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontInvalidation(obj: CloudFrontInvalidation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Status': obj.status,
    'CreateTime': obj.createTime,
    'InvalidationBatch': toJson_CloudFrontInvalidationBatch(obj.invalidationBatch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontKeyGroupConfig
 */
export interface CloudFrontKeyGroupConfig {
  /**
   * @schema CloudFrontKeyGroupConfig#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontKeyGroupConfig#Items
   */
  readonly items?: string[];

  /**
   * @schema CloudFrontKeyGroupConfig#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'CloudFrontKeyGroupConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontKeyGroupConfig(obj: CloudFrontKeyGroupConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Items': obj.items?.map(y => y),
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontKeyGroup
 */
export interface CloudFrontKeyGroup {
  /**
   * @schema CloudFrontKeyGroup#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontKeyGroup#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontKeyGroup#KeyGroupConfig
   */
  readonly keyGroupConfig?: CloudFrontKeyGroupConfig;

}

/**
 * Converts an object of type 'CloudFrontKeyGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontKeyGroup(obj: CloudFrontKeyGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'LastModifiedTime': obj.lastModifiedTime,
    'KeyGroupConfig': toJson_CloudFrontKeyGroupConfig(obj.keyGroupConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontMonitoringSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontMonitoringSubscription(obj: CloudFrontMonitoringSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RealtimeMetricsSubscriptionConfig': toJson_CloudFrontRealtimeMetricsSubscriptionConfig(obj.realtimeMetricsSubscriptionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly name?: string;

  /**
   * @schema CloudFrontOriginRequestPolicyConfig#HeadersConfig
   */
  readonly headersConfig?: CloudFrontOriginRequestPolicyHeadersConfig;

  /**
   * @schema CloudFrontOriginRequestPolicyConfig#CookiesConfig
   */
  readonly cookiesConfig?: CloudFrontOriginRequestPolicyCookiesConfig;

  /**
   * @schema CloudFrontOriginRequestPolicyConfig#QueryStringsConfig
   */
  readonly queryStringsConfig?: CloudFrontOriginRequestPolicyQueryStringsConfig;

}

/**
 * Converts an object of type 'CloudFrontOriginRequestPolicyConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginRequestPolicyConfig(obj: CloudFrontOriginRequestPolicyConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comment': obj.comment,
    'Name': obj.name,
    'HeadersConfig': toJson_CloudFrontOriginRequestPolicyHeadersConfig(obj.headersConfig),
    'CookiesConfig': toJson_CloudFrontOriginRequestPolicyCookiesConfig(obj.cookiesConfig),
    'QueryStringsConfig': toJson_CloudFrontOriginRequestPolicyQueryStringsConfig(obj.queryStringsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginRequestPolicy
 */
export interface CloudFrontOriginRequestPolicy {
  /**
   * @schema CloudFrontOriginRequestPolicy#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontOriginRequestPolicy#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontOriginRequestPolicy#OriginRequestPolicyConfig
   */
  readonly originRequestPolicyConfig?: CloudFrontOriginRequestPolicyConfig;

}

/**
 * Converts an object of type 'CloudFrontOriginRequestPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginRequestPolicy(obj: CloudFrontOriginRequestPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'LastModifiedTime': obj.lastModifiedTime,
    'OriginRequestPolicyConfig': toJson_CloudFrontOriginRequestPolicyConfig(obj.originRequestPolicyConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontPublicKeyConfig
 */
export interface CloudFrontPublicKeyConfig {
  /**
   * @schema CloudFrontPublicKeyConfig#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema CloudFrontPublicKeyConfig#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontPublicKeyConfig#EncodedKey
   */
  readonly encodedKey?: string;

  /**
   * @schema CloudFrontPublicKeyConfig#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'CloudFrontPublicKeyConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontPublicKeyConfig(obj: CloudFrontPublicKeyConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallerReference': obj.callerReference,
    'Name': obj.name,
    'EncodedKey': obj.encodedKey,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontPublicKey
 */
export interface CloudFrontPublicKey {
  /**
   * @schema CloudFrontPublicKey#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontPublicKey#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema CloudFrontPublicKey#PublicKeyConfig
   */
  readonly publicKeyConfig?: CloudFrontPublicKeyConfig;

}

/**
 * Converts an object of type 'CloudFrontPublicKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontPublicKey(obj: CloudFrontPublicKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'CreatedTime': obj.createdTime,
    'PublicKeyConfig': toJson_CloudFrontPublicKeyConfig(obj.publicKeyConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontEndPoint
 */
export interface CloudFrontEndPoint {
  /**
   * @schema CloudFrontEndPoint#StreamType
   */
  readonly streamType?: string;

  /**
   * @schema CloudFrontEndPoint#KinesisStreamConfig
   */
  readonly kinesisStreamConfig?: CloudFrontKinesisStreamConfig;

}

/**
 * Converts an object of type 'CloudFrontEndPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontEndPoint(obj: CloudFrontEndPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamType': obj.streamType,
    'KinesisStreamConfig': toJson_CloudFrontKinesisStreamConfig(obj.kinesisStreamConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontRealtimeLogConfig
 */
export interface CloudFrontRealtimeLogConfig {
  /**
   * @schema CloudFrontRealtimeLogConfig#ARN
   */
  readonly arn?: string;

  /**
   * @schema CloudFrontRealtimeLogConfig#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontRealtimeLogConfig#SamplingRate
   */
  readonly samplingRate?: number;

  /**
   * @schema CloudFrontRealtimeLogConfig#EndPoints
   */
  readonly endPoints?: CloudFrontEndPoint[];

  /**
   * @schema CloudFrontRealtimeLogConfig#Fields
   */
  readonly fields?: string[];

}

/**
 * Converts an object of type 'CloudFrontRealtimeLogConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontRealtimeLogConfig(obj: CloudFrontRealtimeLogConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'SamplingRate': obj.samplingRate,
    'EndPoints': obj.endPoints?.map(y => toJson_CloudFrontEndPoint(y)),
    'Fields': obj.fields?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontStreamingDistributionConfig
 */
export interface CloudFrontStreamingDistributionConfig {
  /**
   * @schema CloudFrontStreamingDistributionConfig#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema CloudFrontStreamingDistributionConfig#S3Origin
   */
  readonly s3Origin?: CloudFrontS3Origin;

  /**
   * @schema CloudFrontStreamingDistributionConfig#Aliases
   */
  readonly aliases?: CloudFrontAliases;

  /**
   * @schema CloudFrontStreamingDistributionConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontStreamingDistributionConfig#Logging
   */
  readonly logging?: CloudFrontStreamingLoggingConfig;

  /**
   * @schema CloudFrontStreamingDistributionConfig#TrustedSigners
   */
  readonly trustedSigners?: CloudFrontTrustedSigners;

  /**
   * @schema CloudFrontStreamingDistributionConfig#PriceClass
   */
  readonly priceClass?: string;

  /**
   * @schema CloudFrontStreamingDistributionConfig#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'CloudFrontStreamingDistributionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontStreamingDistributionConfig(obj: CloudFrontStreamingDistributionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallerReference': obj.callerReference,
    'S3Origin': toJson_CloudFrontS3Origin(obj.s3Origin),
    'Aliases': toJson_CloudFrontAliases(obj.aliases),
    'Comment': obj.comment,
    'Logging': toJson_CloudFrontStreamingLoggingConfig(obj.logging),
    'TrustedSigners': toJson_CloudFrontTrustedSigners(obj.trustedSigners),
    'PriceClass': obj.priceClass,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontStreamingDistribution
 */
export interface CloudFrontStreamingDistribution {
  /**
   * @schema CloudFrontStreamingDistribution#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontStreamingDistribution#ARN
   */
  readonly arn?: string;

  /**
   * @schema CloudFrontStreamingDistribution#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFrontStreamingDistribution#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontStreamingDistribution#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudFrontStreamingDistribution#ActiveTrustedSigners
   */
  readonly activeTrustedSigners?: CloudFrontActiveTrustedSigners;

  /**
   * @schema CloudFrontStreamingDistribution#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig?: CloudFrontStreamingDistributionConfig;

}

/**
 * Converts an object of type 'CloudFrontStreamingDistribution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontStreamingDistribution(obj: CloudFrontStreamingDistribution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ARN': obj.arn,
    'Status': obj.status,
    'LastModifiedTime': obj.lastModifiedTime,
    'DomainName': obj.domainName,
    'ActiveTrustedSigners': toJson_CloudFrontActiveTrustedSigners(obj.activeTrustedSigners),
    'StreamingDistributionConfig': toJson_CloudFrontStreamingDistributionConfig(obj.streamingDistributionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontStreamingDistributionConfigWithTags
 */
export interface CloudFrontStreamingDistributionConfigWithTags {
  /**
   * @schema CloudFrontStreamingDistributionConfigWithTags#StreamingDistributionConfig
   */
  readonly streamingDistributionConfig?: CloudFrontStreamingDistributionConfig;

  /**
   * @schema CloudFrontStreamingDistributionConfigWithTags#Tags
   */
  readonly tags?: CloudFrontTags;

}

/**
 * Converts an object of type 'CloudFrontStreamingDistributionConfigWithTags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontStreamingDistributionConfigWithTags(obj: CloudFrontStreamingDistributionConfigWithTags | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingDistributionConfig': toJson_CloudFrontStreamingDistributionConfig(obj.streamingDistributionConfig),
    'Tags': toJson_CloudFrontTags(obj.tags),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly maxItems?: number;

  /**
   * @schema CloudFrontCachePolicyList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontCachePolicyList#Items
   */
  readonly items?: CloudFrontCachePolicySummary[];

}

/**
 * Converts an object of type 'CloudFrontCachePolicyList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCachePolicyList(obj: CloudFrontCachePolicyList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontCachePolicySummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCloudFrontOriginAccessIdentityList
 */
export interface CloudFrontCloudFrontOriginAccessIdentityList {
  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentityList#Items
   */
  readonly items?: CloudFrontCloudFrontOriginAccessIdentitySummary[];

}

/**
 * Converts an object of type 'CloudFrontCloudFrontOriginAccessIdentityList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCloudFrontOriginAccessIdentityList(obj: CloudFrontCloudFrontOriginAccessIdentityList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'IsTruncated': obj.isTruncated,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontCloudFrontOriginAccessIdentitySummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontConflictingAliasesList
 */
export interface CloudFrontConflictingAliasesList {
  /**
   * @schema CloudFrontConflictingAliasesList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontConflictingAliasesList#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema CloudFrontConflictingAliasesList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontConflictingAliasesList#Items
   */
  readonly items?: CloudFrontConflictingAlias[];

}

/**
 * Converts an object of type 'CloudFrontConflictingAliasesList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontConflictingAliasesList(obj: CloudFrontConflictingAliasesList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontConflictingAlias(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDistributionList
 */
export interface CloudFrontDistributionList {
  /**
   * @schema CloudFrontDistributionList#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontDistributionList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontDistributionList#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema CloudFrontDistributionList#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema CloudFrontDistributionList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontDistributionList#Items
   */
  readonly items?: CloudFrontDistributionSummary[];

}

/**
 * Converts an object of type 'CloudFrontDistributionList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDistributionList(obj: CloudFrontDistributionList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'IsTruncated': obj.isTruncated,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontDistributionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDistributionIdList
 */
export interface CloudFrontDistributionIdList {
  /**
   * @schema CloudFrontDistributionIdList#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontDistributionIdList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontDistributionIdList#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema CloudFrontDistributionIdList#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema CloudFrontDistributionIdList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontDistributionIdList#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontDistributionIdList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDistributionIdList(obj: CloudFrontDistributionIdList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'IsTruncated': obj.isTruncated,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly maxItems?: number;

  /**
   * @schema CloudFrontFieldLevelEncryptionList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontFieldLevelEncryptionList#Items
   */
  readonly items?: CloudFrontFieldLevelEncryptionSummary[];

}

/**
 * Converts an object of type 'CloudFrontFieldLevelEncryptionList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFieldLevelEncryptionList(obj: CloudFrontFieldLevelEncryptionList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontFieldLevelEncryptionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly maxItems?: number;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileList#Items
   */
  readonly items?: CloudFrontFieldLevelEncryptionProfileSummary[];

}

/**
 * Converts an object of type 'CloudFrontFieldLevelEncryptionProfileList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFieldLevelEncryptionProfileList(obj: CloudFrontFieldLevelEncryptionProfileList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontFieldLevelEncryptionProfileSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFunctionList
 */
export interface CloudFrontFunctionList {
  /**
   * @schema CloudFrontFunctionList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontFunctionList#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema CloudFrontFunctionList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontFunctionList#Items
   */
  readonly items?: CloudFrontFunctionSummary[];

}

/**
 * Converts an object of type 'CloudFrontFunctionList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFunctionList(obj: CloudFrontFunctionList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontFunctionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontInvalidationList
 */
export interface CloudFrontInvalidationList {
  /**
   * @schema CloudFrontInvalidationList#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontInvalidationList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontInvalidationList#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema CloudFrontInvalidationList#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema CloudFrontInvalidationList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontInvalidationList#Items
   */
  readonly items?: CloudFrontInvalidationSummary[];

}

/**
 * Converts an object of type 'CloudFrontInvalidationList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontInvalidationList(obj: CloudFrontInvalidationList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'IsTruncated': obj.isTruncated,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontInvalidationSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly maxItems?: number;

  /**
   * @schema CloudFrontKeyGroupList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontKeyGroupList#Items
   */
  readonly items?: CloudFrontKeyGroupSummary[];

}

/**
 * Converts an object of type 'CloudFrontKeyGroupList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontKeyGroupList(obj: CloudFrontKeyGroupList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontKeyGroupSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly maxItems?: number;

  /**
   * @schema CloudFrontOriginRequestPolicyList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontOriginRequestPolicyList#Items
   */
  readonly items?: CloudFrontOriginRequestPolicySummary[];

}

/**
 * Converts an object of type 'CloudFrontOriginRequestPolicyList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginRequestPolicyList(obj: CloudFrontOriginRequestPolicyList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontOriginRequestPolicySummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly maxItems?: number;

  /**
   * @schema CloudFrontPublicKeyList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontPublicKeyList#Items
   */
  readonly items?: CloudFrontPublicKeySummary[];

}

/**
 * Converts an object of type 'CloudFrontPublicKeyList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontPublicKeyList(obj: CloudFrontPublicKeyList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontPublicKeySummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontRealtimeLogConfigs
 */
export interface CloudFrontRealtimeLogConfigs {
  /**
   * @schema CloudFrontRealtimeLogConfigs#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema CloudFrontRealtimeLogConfigs#Items
   */
  readonly items?: CloudFrontRealtimeLogConfig[];

  /**
   * @schema CloudFrontRealtimeLogConfigs#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema CloudFrontRealtimeLogConfigs#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontRealtimeLogConfigs#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * Converts an object of type 'CloudFrontRealtimeLogConfigs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontRealtimeLogConfigs(obj: CloudFrontRealtimeLogConfigs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxItems': obj.maxItems,
    'Items': obj.items?.map(y => toJson_CloudFrontRealtimeLogConfig(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
    'NextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontStreamingDistributionList
 */
export interface CloudFrontStreamingDistributionList {
  /**
   * @schema CloudFrontStreamingDistributionList#Marker
   */
  readonly marker?: string;

  /**
   * @schema CloudFrontStreamingDistributionList#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema CloudFrontStreamingDistributionList#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema CloudFrontStreamingDistributionList#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema CloudFrontStreamingDistributionList#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontStreamingDistributionList#Items
   */
  readonly items?: CloudFrontStreamingDistributionSummary[];

}

/**
 * Converts an object of type 'CloudFrontStreamingDistributionList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontStreamingDistributionList(obj: CloudFrontStreamingDistributionList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
    'IsTruncated': obj.isTruncated,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontStreamingDistributionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontTags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontTags(obj: CloudFrontTags | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_CloudFrontTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontTestResult
 */
export interface CloudFrontTestResult {
  /**
   * @schema CloudFrontTestResult#FunctionSummary
   */
  readonly functionSummary?: CloudFrontFunctionSummary;

  /**
   * @schema CloudFrontTestResult#ComputeUtilization
   */
  readonly computeUtilization?: string;

  /**
   * @schema CloudFrontTestResult#FunctionExecutionLogs
   */
  readonly functionExecutionLogs?: string[];

  /**
   * @schema CloudFrontTestResult#FunctionErrorMessage
   */
  readonly functionErrorMessage?: string;

  /**
   * @schema CloudFrontTestResult#FunctionOutput
   */
  readonly functionOutput?: string;

}

/**
 * Converts an object of type 'CloudFrontTestResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontTestResult(obj: CloudFrontTestResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionSummary': toJson_CloudFrontFunctionSummary(obj.functionSummary),
    'ComputeUtilization': obj.computeUtilization,
    'FunctionExecutionLogs': obj.functionExecutionLogs?.map(y => y),
    'FunctionErrorMessage': obj.functionErrorMessage,
    'FunctionOutput': obj.functionOutput,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontTagKeys' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontTagKeys(obj: CloudFrontTagKeys | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin
 */
export interface CloudFrontParametersInCacheKeyAndForwardedToOrigin {
  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#EnableAcceptEncodingGzip
   */
  readonly enableAcceptEncodingGzip?: boolean;

  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#EnableAcceptEncodingBrotli
   */
  readonly enableAcceptEncodingBrotli?: boolean;

  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#HeadersConfig
   */
  readonly headersConfig?: CloudFrontCachePolicyHeadersConfig;

  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#CookiesConfig
   */
  readonly cookiesConfig?: CloudFrontCachePolicyCookiesConfig;

  /**
   * @schema CloudFrontParametersInCacheKeyAndForwardedToOrigin#QueryStringsConfig
   */
  readonly queryStringsConfig?: CloudFrontCachePolicyQueryStringsConfig;

}

/**
 * Converts an object of type 'CloudFrontParametersInCacheKeyAndForwardedToOrigin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontParametersInCacheKeyAndForwardedToOrigin(obj: CloudFrontParametersInCacheKeyAndForwardedToOrigin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnableAcceptEncodingGzip': obj.enableAcceptEncodingGzip,
    'EnableAcceptEncodingBrotli': obj.enableAcceptEncodingBrotli,
    'HeadersConfig': toJson_CloudFrontCachePolicyHeadersConfig(obj.headersConfig),
    'CookiesConfig': toJson_CloudFrontCachePolicyCookiesConfig(obj.cookiesConfig),
    'QueryStringsConfig': toJson_CloudFrontCachePolicyQueryStringsConfig(obj.queryStringsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontAliases
 */
export interface CloudFrontAliases {
  /**
   * @schema CloudFrontAliases#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontAliases#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontAliases' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontAliases(obj: CloudFrontAliases | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOrigins
 */
export interface CloudFrontOrigins {
  /**
   * @schema CloudFrontOrigins#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontOrigins#Items
   */
  readonly items?: CloudFrontOrigin[];

}

/**
 * Converts an object of type 'CloudFrontOrigins' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOrigins(obj: CloudFrontOrigins | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontOrigin(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginGroups
 */
export interface CloudFrontOriginGroups {
  /**
   * @schema CloudFrontOriginGroups#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontOriginGroups#Items
   */
  readonly items?: CloudFrontOriginGroup[];

}

/**
 * Converts an object of type 'CloudFrontOriginGroups' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginGroups(obj: CloudFrontOriginGroups | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontOriginGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDefaultCacheBehavior
 */
export interface CloudFrontDefaultCacheBehavior {
  /**
   * @schema CloudFrontDefaultCacheBehavior#TargetOriginId
   */
  readonly targetOriginId?: string;

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
  readonly viewerProtocolPolicy?: string;

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
   * @schema CloudFrontDefaultCacheBehavior#FunctionAssociations
   */
  readonly functionAssociations?: CloudFrontFunctionAssociations;

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
 * Converts an object of type 'CloudFrontDefaultCacheBehavior' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDefaultCacheBehavior(obj: CloudFrontDefaultCacheBehavior | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetOriginId': obj.targetOriginId,
    'TrustedSigners': toJson_CloudFrontTrustedSigners(obj.trustedSigners),
    'TrustedKeyGroups': toJson_CloudFrontTrustedKeyGroups(obj.trustedKeyGroups),
    'ViewerProtocolPolicy': obj.viewerProtocolPolicy,
    'AllowedMethods': toJson_CloudFrontAllowedMethods(obj.allowedMethods),
    'SmoothStreaming': obj.smoothStreaming,
    'Compress': obj.compress,
    'LambdaFunctionAssociations': toJson_CloudFrontLambdaFunctionAssociations(obj.lambdaFunctionAssociations),
    'FunctionAssociations': toJson_CloudFrontFunctionAssociations(obj.functionAssociations),
    'FieldLevelEncryptionId': obj.fieldLevelEncryptionId,
    'RealtimeLogConfigArn': obj.realtimeLogConfigArn,
    'CachePolicyId': obj.cachePolicyId,
    'OriginRequestPolicyId': obj.originRequestPolicyId,
    'ForwardedValues': toJson_CloudFrontForwardedValues(obj.forwardedValues),
    'MinTTL': obj.minTtl,
    'DefaultTTL': obj.defaultTtl,
    'MaxTTL': obj.maxTtl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCacheBehaviors
 */
export interface CloudFrontCacheBehaviors {
  /**
   * @schema CloudFrontCacheBehaviors#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontCacheBehaviors#Items
   */
  readonly items?: CloudFrontCacheBehavior[];

}

/**
 * Converts an object of type 'CloudFrontCacheBehaviors' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCacheBehaviors(obj: CloudFrontCacheBehaviors | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontCacheBehavior(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCustomErrorResponses
 */
export interface CloudFrontCustomErrorResponses {
  /**
   * @schema CloudFrontCustomErrorResponses#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontCustomErrorResponses#Items
   */
  readonly items?: CloudFrontCustomErrorResponse[];

}

/**
 * Converts an object of type 'CloudFrontCustomErrorResponses' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCustomErrorResponses(obj: CloudFrontCustomErrorResponses | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontCustomErrorResponse(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontLoggingConfig
 */
export interface CloudFrontLoggingConfig {
  /**
   * @schema CloudFrontLoggingConfig#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudFrontLoggingConfig#IncludeCookies
   */
  readonly includeCookies?: boolean;

  /**
   * @schema CloudFrontLoggingConfig#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema CloudFrontLoggingConfig#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'CloudFrontLoggingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontLoggingConfig(obj: CloudFrontLoggingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'IncludeCookies': obj.includeCookies,
    'Bucket': obj.bucket,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontViewerCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontViewerCertificate(obj: CloudFrontViewerCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFrontDefaultCertificate': obj.cloudFrontDefaultCertificate,
    'IAMCertificateId': obj.iamCertificateId,
    'ACMCertificateArn': obj.acmCertificateArn,
    'SSLSupportMethod': obj.sslSupportMethod,
    'MinimumProtocolVersion': obj.minimumProtocolVersion,
    'Certificate': obj.certificate,
    'CertificateSource': obj.certificateSource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontRestrictions
 */
export interface CloudFrontRestrictions {
  /**
   * @schema CloudFrontRestrictions#GeoRestriction
   */
  readonly geoRestriction?: CloudFrontGeoRestriction;

}

/**
 * Converts an object of type 'CloudFrontRestrictions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontRestrictions(obj: CloudFrontRestrictions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoRestriction': toJson_CloudFrontGeoRestriction(obj.geoRestriction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontActiveTrustedSigners
 */
export interface CloudFrontActiveTrustedSigners {
  /**
   * @schema CloudFrontActiveTrustedSigners#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudFrontActiveTrustedSigners#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontActiveTrustedSigners#Items
   */
  readonly items?: CloudFrontSigner[];

}

/**
 * Converts an object of type 'CloudFrontActiveTrustedSigners' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontActiveTrustedSigners(obj: CloudFrontActiveTrustedSigners | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontSigner(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontActiveTrustedKeyGroups
 */
export interface CloudFrontActiveTrustedKeyGroups {
  /**
   * @schema CloudFrontActiveTrustedKeyGroups#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudFrontActiveTrustedKeyGroups#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontActiveTrustedKeyGroups#Items
   */
  readonly items?: CloudFrontKgKeyPairIds[];

}

/**
 * Converts an object of type 'CloudFrontActiveTrustedKeyGroups' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontActiveTrustedKeyGroups(obj: CloudFrontActiveTrustedKeyGroups | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontKgKeyPairIds(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontAliasIcpRecordal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontAliasIcpRecordal(obj: CloudFrontAliasIcpRecordal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CNAME': obj.cname,
    'ICPRecordalStatus': obj.icpRecordalStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontQueryArgProfileConfig
 */
export interface CloudFrontQueryArgProfileConfig {
  /**
   * @schema CloudFrontQueryArgProfileConfig#ForwardWhenQueryArgProfileIsUnknown
   */
  readonly forwardWhenQueryArgProfileIsUnknown?: boolean;

  /**
   * @schema CloudFrontQueryArgProfileConfig#QueryArgProfiles
   */
  readonly queryArgProfiles?: CloudFrontQueryArgProfiles;

}

/**
 * Converts an object of type 'CloudFrontQueryArgProfileConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontQueryArgProfileConfig(obj: CloudFrontQueryArgProfileConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ForwardWhenQueryArgProfileIsUnknown': obj.forwardWhenQueryArgProfileIsUnknown,
    'QueryArgProfiles': toJson_CloudFrontQueryArgProfiles(obj.queryArgProfiles),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontContentTypeProfileConfig
 */
export interface CloudFrontContentTypeProfileConfig {
  /**
   * @schema CloudFrontContentTypeProfileConfig#ForwardWhenContentTypeIsUnknown
   */
  readonly forwardWhenContentTypeIsUnknown?: boolean;

  /**
   * @schema CloudFrontContentTypeProfileConfig#ContentTypeProfiles
   */
  readonly contentTypeProfiles?: CloudFrontContentTypeProfiles;

}

/**
 * Converts an object of type 'CloudFrontContentTypeProfileConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontContentTypeProfileConfig(obj: CloudFrontContentTypeProfileConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ForwardWhenContentTypeIsUnknown': obj.forwardWhenContentTypeIsUnknown,
    'ContentTypeProfiles': toJson_CloudFrontContentTypeProfiles(obj.contentTypeProfiles),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontEncryptionEntities
 */
export interface CloudFrontEncryptionEntities {
  /**
   * @schema CloudFrontEncryptionEntities#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontEncryptionEntities#Items
   */
  readonly items?: CloudFrontEncryptionEntity[];

}

/**
 * Converts an object of type 'CloudFrontEncryptionEntities' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontEncryptionEntities(obj: CloudFrontEncryptionEntities | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontEncryptionEntity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFunctionMetadata
 */
export interface CloudFrontFunctionMetadata {
  /**
   * @schema CloudFrontFunctionMetadata#FunctionARN
   */
  readonly functionArn?: string;

  /**
   * @schema CloudFrontFunctionMetadata#Stage
   */
  readonly stage?: string;

  /**
   * @schema CloudFrontFunctionMetadata#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema CloudFrontFunctionMetadata#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'CloudFrontFunctionMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFunctionMetadata(obj: CloudFrontFunctionMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionARN': obj.functionArn,
    'Stage': obj.stage,
    'CreatedTime': obj.createdTime,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontPaths
 */
export interface CloudFrontPaths {
  /**
   * @schema CloudFrontPaths#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontPaths#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontPaths' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontPaths(obj: CloudFrontPaths | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontRealtimeMetricsSubscriptionConfig
 */
export interface CloudFrontRealtimeMetricsSubscriptionConfig {
  /**
   * @schema CloudFrontRealtimeMetricsSubscriptionConfig#RealtimeMetricsSubscriptionStatus
   */
  readonly realtimeMetricsSubscriptionStatus?: string;

}

/**
 * Converts an object of type 'CloudFrontRealtimeMetricsSubscriptionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontRealtimeMetricsSubscriptionConfig(obj: CloudFrontRealtimeMetricsSubscriptionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RealtimeMetricsSubscriptionStatus': obj.realtimeMetricsSubscriptionStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginRequestPolicyHeadersConfig
 */
export interface CloudFrontOriginRequestPolicyHeadersConfig {
  /**
   * @schema CloudFrontOriginRequestPolicyHeadersConfig#HeaderBehavior
   */
  readonly headerBehavior?: string;

  /**
   * @schema CloudFrontOriginRequestPolicyHeadersConfig#Headers
   */
  readonly headers?: CloudFrontHeaders;

}

/**
 * Converts an object of type 'CloudFrontOriginRequestPolicyHeadersConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginRequestPolicyHeadersConfig(obj: CloudFrontOriginRequestPolicyHeadersConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HeaderBehavior': obj.headerBehavior,
    'Headers': toJson_CloudFrontHeaders(obj.headers),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginRequestPolicyCookiesConfig
 */
export interface CloudFrontOriginRequestPolicyCookiesConfig {
  /**
   * @schema CloudFrontOriginRequestPolicyCookiesConfig#CookieBehavior
   */
  readonly cookieBehavior?: string;

  /**
   * @schema CloudFrontOriginRequestPolicyCookiesConfig#Cookies
   */
  readonly cookies?: CloudFrontCookieNames;

}

/**
 * Converts an object of type 'CloudFrontOriginRequestPolicyCookiesConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginRequestPolicyCookiesConfig(obj: CloudFrontOriginRequestPolicyCookiesConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CookieBehavior': obj.cookieBehavior,
    'Cookies': toJson_CloudFrontCookieNames(obj.cookies),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginRequestPolicyQueryStringsConfig
 */
export interface CloudFrontOriginRequestPolicyQueryStringsConfig {
  /**
   * @schema CloudFrontOriginRequestPolicyQueryStringsConfig#QueryStringBehavior
   */
  readonly queryStringBehavior?: string;

  /**
   * @schema CloudFrontOriginRequestPolicyQueryStringsConfig#QueryStrings
   */
  readonly queryStrings?: CloudFrontQueryStringNames;

}

/**
 * Converts an object of type 'CloudFrontOriginRequestPolicyQueryStringsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginRequestPolicyQueryStringsConfig(obj: CloudFrontOriginRequestPolicyQueryStringsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryStringBehavior': obj.queryStringBehavior,
    'QueryStrings': toJson_CloudFrontQueryStringNames(obj.queryStrings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontKinesisStreamConfig
 */
export interface CloudFrontKinesisStreamConfig {
  /**
   * @schema CloudFrontKinesisStreamConfig#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CloudFrontKinesisStreamConfig#StreamARN
   */
  readonly streamArn?: string;

}

/**
 * Converts an object of type 'CloudFrontKinesisStreamConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontKinesisStreamConfig(obj: CloudFrontKinesisStreamConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'StreamARN': obj.streamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontS3Origin
 */
export interface CloudFrontS3Origin {
  /**
   * @schema CloudFrontS3Origin#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudFrontS3Origin#OriginAccessIdentity
   */
  readonly originAccessIdentity?: string;

}

/**
 * Converts an object of type 'CloudFrontS3Origin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontS3Origin(obj: CloudFrontS3Origin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'OriginAccessIdentity': obj.originAccessIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontStreamingLoggingConfig
 */
export interface CloudFrontStreamingLoggingConfig {
  /**
   * @schema CloudFrontStreamingLoggingConfig#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudFrontStreamingLoggingConfig#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema CloudFrontStreamingLoggingConfig#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'CloudFrontStreamingLoggingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontStreamingLoggingConfig(obj: CloudFrontStreamingLoggingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Bucket': obj.bucket,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontTrustedSigners
 */
export interface CloudFrontTrustedSigners {
  /**
   * @schema CloudFrontTrustedSigners#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudFrontTrustedSigners#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontTrustedSigners#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontTrustedSigners' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontTrustedSigners(obj: CloudFrontTrustedSigners | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCachePolicySummary
 */
export interface CloudFrontCachePolicySummary {
  /**
   * @schema CloudFrontCachePolicySummary#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFrontCachePolicySummary#CachePolicy
   */
  readonly cachePolicy?: CloudFrontCachePolicy;

}

/**
 * Converts an object of type 'CloudFrontCachePolicySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCachePolicySummary(obj: CloudFrontCachePolicySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'CachePolicy': toJson_CloudFrontCachePolicy(obj.cachePolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCloudFrontOriginAccessIdentitySummary
 */
export interface CloudFrontCloudFrontOriginAccessIdentitySummary {
  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentitySummary#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentitySummary#S3CanonicalUserId
   */
  readonly s3CanonicalUserId?: string;

  /**
   * @schema CloudFrontCloudFrontOriginAccessIdentitySummary#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'CloudFrontCloudFrontOriginAccessIdentitySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCloudFrontOriginAccessIdentitySummary(obj: CloudFrontCloudFrontOriginAccessIdentitySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'S3CanonicalUserId': obj.s3CanonicalUserId,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontConflictingAlias
 */
export interface CloudFrontConflictingAlias {
  /**
   * @schema CloudFrontConflictingAlias#Alias
   */
  readonly alias?: string;

  /**
   * @schema CloudFrontConflictingAlias#DistributionId
   */
  readonly distributionId?: string;

  /**
   * @schema CloudFrontConflictingAlias#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'CloudFrontConflictingAlias' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontConflictingAlias(obj: CloudFrontConflictingAlias | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alias': obj.alias,
    'DistributionId': obj.distributionId,
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontDistributionSummary
 */
export interface CloudFrontDistributionSummary {
  /**
   * @schema CloudFrontDistributionSummary#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontDistributionSummary#ARN
   */
  readonly arn?: string;

  /**
   * @schema CloudFrontDistributionSummary#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFrontDistributionSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontDistributionSummary#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudFrontDistributionSummary#Aliases
   */
  readonly aliases?: CloudFrontAliases;

  /**
   * @schema CloudFrontDistributionSummary#Origins
   */
  readonly origins?: CloudFrontOrigins;

  /**
   * @schema CloudFrontDistributionSummary#OriginGroups
   */
  readonly originGroups?: CloudFrontOriginGroups;

  /**
   * @schema CloudFrontDistributionSummary#DefaultCacheBehavior
   */
  readonly defaultCacheBehavior?: CloudFrontDefaultCacheBehavior;

  /**
   * @schema CloudFrontDistributionSummary#CacheBehaviors
   */
  readonly cacheBehaviors?: CloudFrontCacheBehaviors;

  /**
   * @schema CloudFrontDistributionSummary#CustomErrorResponses
   */
  readonly customErrorResponses?: CloudFrontCustomErrorResponses;

  /**
   * @schema CloudFrontDistributionSummary#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontDistributionSummary#PriceClass
   */
  readonly priceClass?: string;

  /**
   * @schema CloudFrontDistributionSummary#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudFrontDistributionSummary#ViewerCertificate
   */
  readonly viewerCertificate?: CloudFrontViewerCertificate;

  /**
   * @schema CloudFrontDistributionSummary#Restrictions
   */
  readonly restrictions?: CloudFrontRestrictions;

  /**
   * @schema CloudFrontDistributionSummary#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema CloudFrontDistributionSummary#HttpVersion
   */
  readonly httpVersion?: string;

  /**
   * @schema CloudFrontDistributionSummary#IsIPV6Enabled
   */
  readonly isIpv6Enabled?: boolean;

  /**
   * @schema CloudFrontDistributionSummary#AliasICPRecordals
   */
  readonly aliasIcpRecordals?: CloudFrontAliasIcpRecordal[];

}

/**
 * Converts an object of type 'CloudFrontDistributionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontDistributionSummary(obj: CloudFrontDistributionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ARN': obj.arn,
    'Status': obj.status,
    'LastModifiedTime': obj.lastModifiedTime,
    'DomainName': obj.domainName,
    'Aliases': toJson_CloudFrontAliases(obj.aliases),
    'Origins': toJson_CloudFrontOrigins(obj.origins),
    'OriginGroups': toJson_CloudFrontOriginGroups(obj.originGroups),
    'DefaultCacheBehavior': toJson_CloudFrontDefaultCacheBehavior(obj.defaultCacheBehavior),
    'CacheBehaviors': toJson_CloudFrontCacheBehaviors(obj.cacheBehaviors),
    'CustomErrorResponses': toJson_CloudFrontCustomErrorResponses(obj.customErrorResponses),
    'Comment': obj.comment,
    'PriceClass': obj.priceClass,
    'Enabled': obj.enabled,
    'ViewerCertificate': toJson_CloudFrontViewerCertificate(obj.viewerCertificate),
    'Restrictions': toJson_CloudFrontRestrictions(obj.restrictions),
    'WebACLId': obj.webAclId,
    'HttpVersion': obj.httpVersion,
    'IsIPV6Enabled': obj.isIpv6Enabled,
    'AliasICPRecordals': obj.aliasIcpRecordals?.map(y => toJson_CloudFrontAliasIcpRecordal(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFieldLevelEncryptionSummary
 */
export interface CloudFrontFieldLevelEncryptionSummary {
  /**
   * @schema CloudFrontFieldLevelEncryptionSummary#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

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
 * Converts an object of type 'CloudFrontFieldLevelEncryptionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFieldLevelEncryptionSummary(obj: CloudFrontFieldLevelEncryptionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'LastModifiedTime': obj.lastModifiedTime,
    'Comment': obj.comment,
    'QueryArgProfileConfig': toJson_CloudFrontQueryArgProfileConfig(obj.queryArgProfileConfig),
    'ContentTypeProfileConfig': toJson_CloudFrontContentTypeProfileConfig(obj.contentTypeProfileConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFieldLevelEncryptionProfileSummary
 */
export interface CloudFrontFieldLevelEncryptionProfileSummary {
  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#EncryptionEntities
   */
  readonly encryptionEntities?: CloudFrontEncryptionEntities;

  /**
   * @schema CloudFrontFieldLevelEncryptionProfileSummary#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'CloudFrontFieldLevelEncryptionProfileSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFieldLevelEncryptionProfileSummary(obj: CloudFrontFieldLevelEncryptionProfileSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'LastModifiedTime': obj.lastModifiedTime,
    'Name': obj.name,
    'EncryptionEntities': toJson_CloudFrontEncryptionEntities(obj.encryptionEntities),
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontInvalidationSummary
 */
export interface CloudFrontInvalidationSummary {
  /**
   * @schema CloudFrontInvalidationSummary#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontInvalidationSummary#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema CloudFrontInvalidationSummary#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CloudFrontInvalidationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontInvalidationSummary(obj: CloudFrontInvalidationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'CreateTime': obj.createTime,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontKeyGroupSummary
 */
export interface CloudFrontKeyGroupSummary {
  /**
   * @schema CloudFrontKeyGroupSummary#KeyGroup
   */
  readonly keyGroup?: CloudFrontKeyGroup;

}

/**
 * Converts an object of type 'CloudFrontKeyGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontKeyGroupSummary(obj: CloudFrontKeyGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyGroup': toJson_CloudFrontKeyGroup(obj.keyGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginRequestPolicySummary
 */
export interface CloudFrontOriginRequestPolicySummary {
  /**
   * @schema CloudFrontOriginRequestPolicySummary#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFrontOriginRequestPolicySummary#OriginRequestPolicy
   */
  readonly originRequestPolicy?: CloudFrontOriginRequestPolicy;

}

/**
 * Converts an object of type 'CloudFrontOriginRequestPolicySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginRequestPolicySummary(obj: CloudFrontOriginRequestPolicySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'OriginRequestPolicy': toJson_CloudFrontOriginRequestPolicy(obj.originRequestPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontPublicKeySummary
 */
export interface CloudFrontPublicKeySummary {
  /**
   * @schema CloudFrontPublicKeySummary#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontPublicKeySummary#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFrontPublicKeySummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema CloudFrontPublicKeySummary#EncodedKey
   */
  readonly encodedKey?: string;

  /**
   * @schema CloudFrontPublicKeySummary#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'CloudFrontPublicKeySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontPublicKeySummary(obj: CloudFrontPublicKeySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'CreatedTime': obj.createdTime,
    'EncodedKey': obj.encodedKey,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontStreamingDistributionSummary
 */
export interface CloudFrontStreamingDistributionSummary {
  /**
   * @schema CloudFrontStreamingDistributionSummary#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#ARN
   */
  readonly arn?: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#S3Origin
   */
  readonly s3Origin?: CloudFrontS3Origin;

  /**
   * @schema CloudFrontStreamingDistributionSummary#Aliases
   */
  readonly aliases?: CloudFrontAliases;

  /**
   * @schema CloudFrontStreamingDistributionSummary#TrustedSigners
   */
  readonly trustedSigners?: CloudFrontTrustedSigners;

  /**
   * @schema CloudFrontStreamingDistributionSummary#Comment
   */
  readonly comment?: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#PriceClass
   */
  readonly priceClass?: string;

  /**
   * @schema CloudFrontStreamingDistributionSummary#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'CloudFrontStreamingDistributionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontStreamingDistributionSummary(obj: CloudFrontStreamingDistributionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ARN': obj.arn,
    'Status': obj.status,
    'LastModifiedTime': obj.lastModifiedTime,
    'DomainName': obj.domainName,
    'S3Origin': toJson_CloudFrontS3Origin(obj.s3Origin),
    'Aliases': toJson_CloudFrontAliases(obj.aliases),
    'TrustedSigners': toJson_CloudFrontTrustedSigners(obj.trustedSigners),
    'Comment': obj.comment,
    'PriceClass': obj.priceClass,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontTag
 */
export interface CloudFrontTag {
  /**
   * @schema CloudFrontTag#Key
   */
  readonly key?: string;

  /**
   * @schema CloudFrontTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CloudFrontTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontTag(obj: CloudFrontTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCachePolicyHeadersConfig
 */
export interface CloudFrontCachePolicyHeadersConfig {
  /**
   * @schema CloudFrontCachePolicyHeadersConfig#HeaderBehavior
   */
  readonly headerBehavior?: string;

  /**
   * @schema CloudFrontCachePolicyHeadersConfig#Headers
   */
  readonly headers?: CloudFrontHeaders;

}

/**
 * Converts an object of type 'CloudFrontCachePolicyHeadersConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCachePolicyHeadersConfig(obj: CloudFrontCachePolicyHeadersConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HeaderBehavior': obj.headerBehavior,
    'Headers': toJson_CloudFrontHeaders(obj.headers),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCachePolicyCookiesConfig
 */
export interface CloudFrontCachePolicyCookiesConfig {
  /**
   * @schema CloudFrontCachePolicyCookiesConfig#CookieBehavior
   */
  readonly cookieBehavior?: string;

  /**
   * @schema CloudFrontCachePolicyCookiesConfig#Cookies
   */
  readonly cookies?: CloudFrontCookieNames;

}

/**
 * Converts an object of type 'CloudFrontCachePolicyCookiesConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCachePolicyCookiesConfig(obj: CloudFrontCachePolicyCookiesConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CookieBehavior': obj.cookieBehavior,
    'Cookies': toJson_CloudFrontCookieNames(obj.cookies),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCachePolicyQueryStringsConfig
 */
export interface CloudFrontCachePolicyQueryStringsConfig {
  /**
   * @schema CloudFrontCachePolicyQueryStringsConfig#QueryStringBehavior
   */
  readonly queryStringBehavior?: string;

  /**
   * @schema CloudFrontCachePolicyQueryStringsConfig#QueryStrings
   */
  readonly queryStrings?: CloudFrontQueryStringNames;

}

/**
 * Converts an object of type 'CloudFrontCachePolicyQueryStringsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCachePolicyQueryStringsConfig(obj: CloudFrontCachePolicyQueryStringsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryStringBehavior': obj.queryStringBehavior,
    'QueryStrings': toJson_CloudFrontQueryStringNames(obj.queryStrings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOrigin
 */
export interface CloudFrontOrigin {
  /**
   * @schema CloudFrontOrigin#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontOrigin#DomainName
   */
  readonly domainName?: string;

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
 * Converts an object of type 'CloudFrontOrigin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOrigin(obj: CloudFrontOrigin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'DomainName': obj.domainName,
    'OriginPath': obj.originPath,
    'CustomHeaders': toJson_CloudFrontCustomHeaders(obj.customHeaders),
    'S3OriginConfig': toJson_CloudFrontS3OriginConfig(obj.s3OriginConfig),
    'CustomOriginConfig': toJson_CloudFrontCustomOriginConfig(obj.customOriginConfig),
    'ConnectionAttempts': obj.connectionAttempts,
    'ConnectionTimeout': obj.connectionTimeout,
    'OriginShield': toJson_CloudFrontOriginShield(obj.originShield),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginGroup
 */
export interface CloudFrontOriginGroup {
  /**
   * @schema CloudFrontOriginGroup#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFrontOriginGroup#FailoverCriteria
   */
  readonly failoverCriteria?: CloudFrontOriginGroupFailoverCriteria;

  /**
   * @schema CloudFrontOriginGroup#Members
   */
  readonly members?: CloudFrontOriginGroupMembers;

}

/**
 * Converts an object of type 'CloudFrontOriginGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginGroup(obj: CloudFrontOriginGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'FailoverCriteria': toJson_CloudFrontOriginGroupFailoverCriteria(obj.failoverCriteria),
    'Members': toJson_CloudFrontOriginGroupMembers(obj.members),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontTrustedKeyGroups
 */
export interface CloudFrontTrustedKeyGroups {
  /**
   * @schema CloudFrontTrustedKeyGroups#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudFrontTrustedKeyGroups#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontTrustedKeyGroups#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontTrustedKeyGroups' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontTrustedKeyGroups(obj: CloudFrontTrustedKeyGroups | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontAllowedMethods
 */
export interface CloudFrontAllowedMethods {
  /**
   * @schema CloudFrontAllowedMethods#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontAllowedMethods#Items
   */
  readonly items?: string[];

  /**
   * @schema CloudFrontAllowedMethods#CachedMethods
   */
  readonly cachedMethods?: CloudFrontCachedMethods;

}

/**
 * Converts an object of type 'CloudFrontAllowedMethods' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontAllowedMethods(obj: CloudFrontAllowedMethods | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
    'CachedMethods': toJson_CloudFrontCachedMethods(obj.cachedMethods),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontLambdaFunctionAssociations
 */
export interface CloudFrontLambdaFunctionAssociations {
  /**
   * @schema CloudFrontLambdaFunctionAssociations#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontLambdaFunctionAssociations#Items
   */
  readonly items?: CloudFrontLambdaFunctionAssociation[];

}

/**
 * Converts an object of type 'CloudFrontLambdaFunctionAssociations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontLambdaFunctionAssociations(obj: CloudFrontLambdaFunctionAssociations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontLambdaFunctionAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFunctionAssociations
 */
export interface CloudFrontFunctionAssociations {
  /**
   * @schema CloudFrontFunctionAssociations#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontFunctionAssociations#Items
   */
  readonly items?: CloudFrontFunctionAssociation[];

}

/**
 * Converts an object of type 'CloudFrontFunctionAssociations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFunctionAssociations(obj: CloudFrontFunctionAssociations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontFunctionAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontForwardedValues
 */
export interface CloudFrontForwardedValues {
  /**
   * @schema CloudFrontForwardedValues#QueryString
   */
  readonly queryString?: boolean;

  /**
   * @schema CloudFrontForwardedValues#Cookies
   */
  readonly cookies?: CloudFrontCookiePreference;

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
 * Converts an object of type 'CloudFrontForwardedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontForwardedValues(obj: CloudFrontForwardedValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryString': obj.queryString,
    'Cookies': toJson_CloudFrontCookiePreference(obj.cookies),
    'Headers': toJson_CloudFrontHeaders(obj.headers),
    'QueryStringCacheKeys': toJson_CloudFrontQueryStringCacheKeys(obj.queryStringCacheKeys),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCacheBehavior
 */
export interface CloudFrontCacheBehavior {
  /**
   * @schema CloudFrontCacheBehavior#PathPattern
   */
  readonly pathPattern?: string;

  /**
   * @schema CloudFrontCacheBehavior#TargetOriginId
   */
  readonly targetOriginId?: string;

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
  readonly viewerProtocolPolicy?: string;

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
   * @schema CloudFrontCacheBehavior#FunctionAssociations
   */
  readonly functionAssociations?: CloudFrontFunctionAssociations;

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
 * Converts an object of type 'CloudFrontCacheBehavior' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCacheBehavior(obj: CloudFrontCacheBehavior | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PathPattern': obj.pathPattern,
    'TargetOriginId': obj.targetOriginId,
    'TrustedSigners': toJson_CloudFrontTrustedSigners(obj.trustedSigners),
    'TrustedKeyGroups': toJson_CloudFrontTrustedKeyGroups(obj.trustedKeyGroups),
    'ViewerProtocolPolicy': obj.viewerProtocolPolicy,
    'AllowedMethods': toJson_CloudFrontAllowedMethods(obj.allowedMethods),
    'SmoothStreaming': obj.smoothStreaming,
    'Compress': obj.compress,
    'LambdaFunctionAssociations': toJson_CloudFrontLambdaFunctionAssociations(obj.lambdaFunctionAssociations),
    'FunctionAssociations': toJson_CloudFrontFunctionAssociations(obj.functionAssociations),
    'FieldLevelEncryptionId': obj.fieldLevelEncryptionId,
    'RealtimeLogConfigArn': obj.realtimeLogConfigArn,
    'CachePolicyId': obj.cachePolicyId,
    'OriginRequestPolicyId': obj.originRequestPolicyId,
    'ForwardedValues': toJson_CloudFrontForwardedValues(obj.forwardedValues),
    'MinTTL': obj.minTtl,
    'DefaultTTL': obj.defaultTtl,
    'MaxTTL': obj.maxTtl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCustomErrorResponse
 */
export interface CloudFrontCustomErrorResponse {
  /**
   * @schema CloudFrontCustomErrorResponse#ErrorCode
   */
  readonly errorCode?: number;

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
 * Converts an object of type 'CloudFrontCustomErrorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCustomErrorResponse(obj: CloudFrontCustomErrorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ResponsePagePath': obj.responsePagePath,
    'ResponseCode': obj.responseCode,
    'ErrorCachingMinTTL': obj.errorCachingMinTtl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontGeoRestriction
 */
export interface CloudFrontGeoRestriction {
  /**
   * @schema CloudFrontGeoRestriction#RestrictionType
   */
  readonly restrictionType?: string;

  /**
   * @schema CloudFrontGeoRestriction#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontGeoRestriction#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontGeoRestriction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontGeoRestriction(obj: CloudFrontGeoRestriction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RestrictionType': obj.restrictionType,
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontSigner' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontSigner(obj: CloudFrontSigner | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountNumber': obj.awsAccountNumber,
    'KeyPairIds': toJson_CloudFrontKeyPairIds(obj.keyPairIds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudFrontKgKeyPairIds' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontKgKeyPairIds(obj: CloudFrontKgKeyPairIds | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyGroupId': obj.keyGroupId,
    'KeyPairIds': toJson_CloudFrontKeyPairIds(obj.keyPairIds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontQueryArgProfiles
 */
export interface CloudFrontQueryArgProfiles {
  /**
   * @schema CloudFrontQueryArgProfiles#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontQueryArgProfiles#Items
   */
  readonly items?: CloudFrontQueryArgProfile[];

}

/**
 * Converts an object of type 'CloudFrontQueryArgProfiles' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontQueryArgProfiles(obj: CloudFrontQueryArgProfiles | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontQueryArgProfile(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontContentTypeProfiles
 */
export interface CloudFrontContentTypeProfiles {
  /**
   * @schema CloudFrontContentTypeProfiles#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontContentTypeProfiles#Items
   */
  readonly items?: CloudFrontContentTypeProfile[];

}

/**
 * Converts an object of type 'CloudFrontContentTypeProfiles' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontContentTypeProfiles(obj: CloudFrontContentTypeProfiles | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontContentTypeProfile(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontEncryptionEntity
 */
export interface CloudFrontEncryptionEntity {
  /**
   * @schema CloudFrontEncryptionEntity#PublicKeyId
   */
  readonly publicKeyId?: string;

  /**
   * @schema CloudFrontEncryptionEntity#ProviderId
   */
  readonly providerId?: string;

  /**
   * @schema CloudFrontEncryptionEntity#FieldPatterns
   */
  readonly fieldPatterns?: CloudFrontFieldPatterns;

}

/**
 * Converts an object of type 'CloudFrontEncryptionEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontEncryptionEntity(obj: CloudFrontEncryptionEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKeyId': obj.publicKeyId,
    'ProviderId': obj.providerId,
    'FieldPatterns': toJson_CloudFrontFieldPatterns(obj.fieldPatterns),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontHeaders
 */
export interface CloudFrontHeaders {
  /**
   * @schema CloudFrontHeaders#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontHeaders#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontHeaders' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontHeaders(obj: CloudFrontHeaders | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCookieNames
 */
export interface CloudFrontCookieNames {
  /**
   * @schema CloudFrontCookieNames#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontCookieNames#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontCookieNames' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCookieNames(obj: CloudFrontCookieNames | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontQueryStringNames
 */
export interface CloudFrontQueryStringNames {
  /**
   * @schema CloudFrontQueryStringNames#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontQueryStringNames#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontQueryStringNames' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontQueryStringNames(obj: CloudFrontQueryStringNames | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCustomHeaders
 */
export interface CloudFrontCustomHeaders {
  /**
   * @schema CloudFrontCustomHeaders#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontCustomHeaders#Items
   */
  readonly items?: CloudFrontOriginCustomHeader[];

}

/**
 * Converts an object of type 'CloudFrontCustomHeaders' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCustomHeaders(obj: CloudFrontCustomHeaders | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontOriginCustomHeader(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontS3OriginConfig
 */
export interface CloudFrontS3OriginConfig {
  /**
   * @schema CloudFrontS3OriginConfig#OriginAccessIdentity
   */
  readonly originAccessIdentity?: string;

}

/**
 * Converts an object of type 'CloudFrontS3OriginConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontS3OriginConfig(obj: CloudFrontS3OriginConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginAccessIdentity': obj.originAccessIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCustomOriginConfig
 */
export interface CloudFrontCustomOriginConfig {
  /**
   * @schema CloudFrontCustomOriginConfig#HTTPPort
   */
  readonly httpPort?: number;

  /**
   * @schema CloudFrontCustomOriginConfig#HTTPSPort
   */
  readonly httpsPort?: number;

  /**
   * @schema CloudFrontCustomOriginConfig#OriginProtocolPolicy
   */
  readonly originProtocolPolicy?: string;

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
 * Converts an object of type 'CloudFrontCustomOriginConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCustomOriginConfig(obj: CloudFrontCustomOriginConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HTTPPort': obj.httpPort,
    'HTTPSPort': obj.httpsPort,
    'OriginProtocolPolicy': obj.originProtocolPolicy,
    'OriginSslProtocols': toJson_CloudFrontOriginSslProtocols(obj.originSslProtocols),
    'OriginReadTimeout': obj.originReadTimeout,
    'OriginKeepaliveTimeout': obj.originKeepaliveTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginShield
 */
export interface CloudFrontOriginShield {
  /**
   * @schema CloudFrontOriginShield#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudFrontOriginShield#OriginShieldRegion
   */
  readonly originShieldRegion?: string;

}

/**
 * Converts an object of type 'CloudFrontOriginShield' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginShield(obj: CloudFrontOriginShield | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'OriginShieldRegion': obj.originShieldRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginGroupFailoverCriteria
 */
export interface CloudFrontOriginGroupFailoverCriteria {
  /**
   * @schema CloudFrontOriginGroupFailoverCriteria#StatusCodes
   */
  readonly statusCodes?: CloudFrontStatusCodes;

}

/**
 * Converts an object of type 'CloudFrontOriginGroupFailoverCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginGroupFailoverCriteria(obj: CloudFrontOriginGroupFailoverCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusCodes': toJson_CloudFrontStatusCodes(obj.statusCodes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginGroupMembers
 */
export interface CloudFrontOriginGroupMembers {
  /**
   * @schema CloudFrontOriginGroupMembers#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontOriginGroupMembers#Items
   */
  readonly items?: CloudFrontOriginGroupMember[];

}

/**
 * Converts an object of type 'CloudFrontOriginGroupMembers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginGroupMembers(obj: CloudFrontOriginGroupMembers | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => toJson_CloudFrontOriginGroupMember(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCachedMethods
 */
export interface CloudFrontCachedMethods {
  /**
   * @schema CloudFrontCachedMethods#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontCachedMethods#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontCachedMethods' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCachedMethods(obj: CloudFrontCachedMethods | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontLambdaFunctionAssociation
 */
export interface CloudFrontLambdaFunctionAssociation {
  /**
   * @schema CloudFrontLambdaFunctionAssociation#LambdaFunctionARN
   */
  readonly lambdaFunctionArn?: string;

  /**
   * @schema CloudFrontLambdaFunctionAssociation#EventType
   */
  readonly eventType?: string;

  /**
   * @schema CloudFrontLambdaFunctionAssociation#IncludeBody
   */
  readonly includeBody?: boolean;

}

/**
 * Converts an object of type 'CloudFrontLambdaFunctionAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontLambdaFunctionAssociation(obj: CloudFrontLambdaFunctionAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LambdaFunctionARN': obj.lambdaFunctionArn,
    'EventType': obj.eventType,
    'IncludeBody': obj.includeBody,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFunctionAssociation
 */
export interface CloudFrontFunctionAssociation {
  /**
   * @schema CloudFrontFunctionAssociation#FunctionARN
   */
  readonly functionArn?: string;

  /**
   * @schema CloudFrontFunctionAssociation#EventType
   */
  readonly eventType?: string;

}

/**
 * Converts an object of type 'CloudFrontFunctionAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFunctionAssociation(obj: CloudFrontFunctionAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionARN': obj.functionArn,
    'EventType': obj.eventType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontCookiePreference
 */
export interface CloudFrontCookiePreference {
  /**
   * @schema CloudFrontCookiePreference#Forward
   */
  readonly forward?: string;

  /**
   * @schema CloudFrontCookiePreference#WhitelistedNames
   */
  readonly whitelistedNames?: CloudFrontCookieNames;

}

/**
 * Converts an object of type 'CloudFrontCookiePreference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontCookiePreference(obj: CloudFrontCookiePreference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Forward': obj.forward,
    'WhitelistedNames': toJson_CloudFrontCookieNames(obj.whitelistedNames),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontQueryStringCacheKeys
 */
export interface CloudFrontQueryStringCacheKeys {
  /**
   * @schema CloudFrontQueryStringCacheKeys#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontQueryStringCacheKeys#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontQueryStringCacheKeys' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontQueryStringCacheKeys(obj: CloudFrontQueryStringCacheKeys | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontKeyPairIds
 */
export interface CloudFrontKeyPairIds {
  /**
   * @schema CloudFrontKeyPairIds#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontKeyPairIds#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontKeyPairIds' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontKeyPairIds(obj: CloudFrontKeyPairIds | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontQueryArgProfile
 */
export interface CloudFrontQueryArgProfile {
  /**
   * @schema CloudFrontQueryArgProfile#QueryArg
   */
  readonly queryArg?: string;

  /**
   * @schema CloudFrontQueryArgProfile#ProfileId
   */
  readonly profileId?: string;

}

/**
 * Converts an object of type 'CloudFrontQueryArgProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontQueryArgProfile(obj: CloudFrontQueryArgProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryArg': obj.queryArg,
    'ProfileId': obj.profileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontContentTypeProfile
 */
export interface CloudFrontContentTypeProfile {
  /**
   * @schema CloudFrontContentTypeProfile#Format
   */
  readonly format?: string;

  /**
   * @schema CloudFrontContentTypeProfile#ProfileId
   */
  readonly profileId?: string;

  /**
   * @schema CloudFrontContentTypeProfile#ContentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'CloudFrontContentTypeProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontContentTypeProfile(obj: CloudFrontContentTypeProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'ProfileId': obj.profileId,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontFieldPatterns
 */
export interface CloudFrontFieldPatterns {
  /**
   * @schema CloudFrontFieldPatterns#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontFieldPatterns#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontFieldPatterns' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontFieldPatterns(obj: CloudFrontFieldPatterns | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginCustomHeader
 */
export interface CloudFrontOriginCustomHeader {
  /**
   * @schema CloudFrontOriginCustomHeader#HeaderName
   */
  readonly headerName?: string;

  /**
   * @schema CloudFrontOriginCustomHeader#HeaderValue
   */
  readonly headerValue?: string;

}

/**
 * Converts an object of type 'CloudFrontOriginCustomHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginCustomHeader(obj: CloudFrontOriginCustomHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HeaderName': obj.headerName,
    'HeaderValue': obj.headerValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginSslProtocols
 */
export interface CloudFrontOriginSslProtocols {
  /**
   * @schema CloudFrontOriginSslProtocols#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontOriginSslProtocols#Items
   */
  readonly items?: string[];

}

/**
 * Converts an object of type 'CloudFrontOriginSslProtocols' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginSslProtocols(obj: CloudFrontOriginSslProtocols | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontStatusCodes
 */
export interface CloudFrontStatusCodes {
  /**
   * @schema CloudFrontStatusCodes#Quantity
   */
  readonly quantity?: number;

  /**
   * @schema CloudFrontStatusCodes#Items
   */
  readonly items?: number[];

}

/**
 * Converts an object of type 'CloudFrontStatusCodes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontStatusCodes(obj: CloudFrontStatusCodes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quantity': obj.quantity,
    'Items': obj.items?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFrontOriginGroupMember
 */
export interface CloudFrontOriginGroupMember {
  /**
   * @schema CloudFrontOriginGroupMember#OriginId
   */
  readonly originId?: string;

}

/**
 * Converts an object of type 'CloudFrontOriginGroupMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFrontOriginGroupMember(obj: CloudFrontOriginGroupMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginId': obj.originId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
