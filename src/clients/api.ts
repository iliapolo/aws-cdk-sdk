import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudFront extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public createCachePolicy(input: shapes.CreateCachePolicyRequest): CloudFront_CreateCachePolicyResult {
    return new CloudFront_CreateCachePolicyResult(this, 'CreateCachePolicyResult', this.resources);
  }
  public createCloudFrontOriginAccessIdentity(input: shapes.CreateCloudFrontOriginAccessIdentityRequest): CloudFront_CreateCloudFrontOriginAccessIdentityResult {
    return new CloudFront_CreateCloudFrontOriginAccessIdentityResult(this, 'CreateCloudFrontOriginAccessIdentityResult', this.resources);
  }
  public createDistribution(input: shapes.CreateDistributionRequest): CloudFront_CreateDistributionResult {
    return new CloudFront_CreateDistributionResult(this, 'CreateDistributionResult', this.resources);
  }
  public createDistributionWithTags(input: shapes.CreateDistributionWithTagsRequest): CloudFront_CreateDistributionWithTagsResult {
    return new CloudFront_CreateDistributionWithTagsResult(this, 'CreateDistributionWithTagsResult', this.resources);
  }
  public createFieldLevelEncryptionConfig(input: shapes.CreateFieldLevelEncryptionConfigRequest): CloudFront_CreateFieldLevelEncryptionConfigResult {
    return new CloudFront_CreateFieldLevelEncryptionConfigResult(this, 'CreateFieldLevelEncryptionConfigResult', this.resources);
  }
  public createFieldLevelEncryptionProfile(input: shapes.CreateFieldLevelEncryptionProfileRequest): CloudFront_CreateFieldLevelEncryptionProfileResult {
    return new CloudFront_CreateFieldLevelEncryptionProfileResult(this, 'CreateFieldLevelEncryptionProfileResult', this.resources);
  }
  public createInvalidation(input: shapes.CreateInvalidationRequest): CloudFront_CreateInvalidationResult {
    return new CloudFront_CreateInvalidationResult(this, 'CreateInvalidationResult', this.resources);
  }
  public createKeyGroup(input: shapes.CreateKeyGroupRequest): CloudFront_CreateKeyGroupResult {
    return new CloudFront_CreateKeyGroupResult(this, 'CreateKeyGroupResult', this.resources);
  }
  public createMonitoringSubscription(input: shapes.CreateMonitoringSubscriptionRequest): CloudFront_CreateMonitoringSubscriptionResult {
    return new CloudFront_CreateMonitoringSubscriptionResult(this, 'CreateMonitoringSubscriptionResult', this.resources);
  }
  public createOriginRequestPolicy(input: shapes.CreateOriginRequestPolicyRequest): CloudFront_CreateOriginRequestPolicyResult {
    return new CloudFront_CreateOriginRequestPolicyResult(this, 'CreateOriginRequestPolicyResult', this.resources);
  }
  public createPublicKey(input: shapes.CreatePublicKeyRequest): CloudFront_CreatePublicKeyResult {
    return new CloudFront_CreatePublicKeyResult(this, 'CreatePublicKeyResult', this.resources);
  }
  public createRealtimeLogConfig(input: shapes.CreateRealtimeLogConfigRequest): CloudFront_CreateRealtimeLogConfigResult {
    return new CloudFront_CreateRealtimeLogConfigResult(this, 'CreateRealtimeLogConfigResult', this.resources);
  }
  public createStreamingDistribution(input: shapes.CreateStreamingDistributionRequest): CloudFront_CreateStreamingDistributionResult {
    return new CloudFront_CreateStreamingDistributionResult(this, 'CreateStreamingDistributionResult', this.resources);
  }
  public createStreamingDistributionWithTags(input: shapes.CreateStreamingDistributionWithTagsRequest): CloudFront_CreateStreamingDistributionWithTagsResult {
    return new CloudFront_CreateStreamingDistributionWithTagsResult(this, 'CreateStreamingDistributionWithTagsResult', this.resources);
  }
  public deleteCachePolicy(input: shapes.DeleteCachePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteCachePolicy'),
        parameters: {
          id: input.id,
          ifMatch: input.ifMatch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCachePolicy', props);
  }
  public deleteCloudFrontOriginAccessIdentity(input: shapes.DeleteCloudFrontOriginAccessIdentityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteCloudFrontOriginAccessIdentity'),
        parameters: {
          id: input.id,
          ifMatch: input.ifMatch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCloudFrontOriginAccessIdentity', props);
  }
  public deleteDistribution(input: shapes.DeleteDistributionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteDistribution'),
        parameters: {
          id: input.id,
          ifMatch: input.ifMatch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDistribution', props);
  }
  public deleteFieldLevelEncryptionConfig(input: shapes.DeleteFieldLevelEncryptionConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteFieldLevelEncryptionConfig'),
        parameters: {
          id: input.id,
          ifMatch: input.ifMatch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFieldLevelEncryptionConfig', props);
  }
  public deleteFieldLevelEncryptionProfile(input: shapes.DeleteFieldLevelEncryptionProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteFieldLevelEncryptionProfile'),
        parameters: {
          id: input.id,
          ifMatch: input.ifMatch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFieldLevelEncryptionProfile', props);
  }
  public deleteKeyGroup(input: shapes.DeleteKeyGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteKeyGroup'),
        parameters: {
          id: input.id,
          ifMatch: input.ifMatch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteKeyGroup', props);
  }
  public deleteMonitoringSubscription(input: shapes.DeleteMonitoringSubscriptionRequest): CloudFront_DeleteMonitoringSubscriptionResult {
    return new CloudFront_DeleteMonitoringSubscriptionResult(this, 'DeleteMonitoringSubscriptionResult', this.resources);
  }
  public deleteOriginRequestPolicy(input: shapes.DeleteOriginRequestPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteOriginRequestPolicy'),
        parameters: {
          id: input.id,
          ifMatch: input.ifMatch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteOriginRequestPolicy', props);
  }
  public deletePublicKey(input: shapes.DeletePublicKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deletePublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeletePublicKey'),
        parameters: {
          id: input.id,
          ifMatch: input.ifMatch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePublicKey', props);
  }
  public deleteRealtimeLogConfig(input: shapes.DeleteRealtimeLogConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteRealtimeLogConfig'),
        parameters: {
          name: input.name,
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRealtimeLogConfig', props);
  }
  public deleteStreamingDistribution(input: shapes.DeleteStreamingDistributionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteStreamingDistribution'),
        parameters: {
          id: input.id,
          ifMatch: input.ifMatch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStreamingDistribution', props);
  }
  public getCachePolicy(input: shapes.GetCachePolicyRequest): CloudFront_GetCachePolicyResult {
    return new CloudFront_GetCachePolicyResult(this, 'GetCachePolicyResult', this.resources);
  }
  public getCachePolicyConfig(input: shapes.GetCachePolicyConfigRequest): CloudFront_GetCachePolicyConfigResult {
    return new CloudFront_GetCachePolicyConfigResult(this, 'GetCachePolicyConfigResult', this.resources);
  }
  public getCloudFrontOriginAccessIdentity(input: shapes.GetCloudFrontOriginAccessIdentityRequest): CloudFront_GetCloudFrontOriginAccessIdentityResult {
    return new CloudFront_GetCloudFrontOriginAccessIdentityResult(this, 'GetCloudFrontOriginAccessIdentityResult', this.resources);
  }
  public getCloudFrontOriginAccessIdentityConfig(input: shapes.GetCloudFrontOriginAccessIdentityConfigRequest): CloudFront_GetCloudFrontOriginAccessIdentityConfigResult {
    return new CloudFront_GetCloudFrontOriginAccessIdentityConfigResult(this, 'GetCloudFrontOriginAccessIdentityConfigResult', this.resources);
  }
  public getDistribution(input: shapes.GetDistributionRequest): CloudFront_GetDistributionResult {
    return new CloudFront_GetDistributionResult(this, 'GetDistributionResult', this.resources);
  }
  public getDistributionConfig(input: shapes.GetDistributionConfigRequest): CloudFront_GetDistributionConfigResult {
    return new CloudFront_GetDistributionConfigResult(this, 'GetDistributionConfigResult', this.resources);
  }
  public getFieldLevelEncryption(input: shapes.GetFieldLevelEncryptionRequest): CloudFront_GetFieldLevelEncryptionResult {
    return new CloudFront_GetFieldLevelEncryptionResult(this, 'GetFieldLevelEncryptionResult', this.resources);
  }
  public getFieldLevelEncryptionConfig(input: shapes.GetFieldLevelEncryptionConfigRequest): CloudFront_GetFieldLevelEncryptionConfigResult {
    return new CloudFront_GetFieldLevelEncryptionConfigResult(this, 'GetFieldLevelEncryptionConfigResult', this.resources);
  }
  public getFieldLevelEncryptionProfile(input: shapes.GetFieldLevelEncryptionProfileRequest): CloudFront_GetFieldLevelEncryptionProfileResult {
    return new CloudFront_GetFieldLevelEncryptionProfileResult(this, 'GetFieldLevelEncryptionProfileResult', this.resources);
  }
  public getFieldLevelEncryptionProfileConfig(input: shapes.GetFieldLevelEncryptionProfileConfigRequest): CloudFront_GetFieldLevelEncryptionProfileConfigResult {
    return new CloudFront_GetFieldLevelEncryptionProfileConfigResult(this, 'GetFieldLevelEncryptionProfileConfigResult', this.resources);
  }
  public getInvalidation(input: shapes.GetInvalidationRequest): CloudFront_GetInvalidationResult {
    return new CloudFront_GetInvalidationResult(this, 'GetInvalidationResult', this.resources);
  }
  public getKeyGroup(input: shapes.GetKeyGroupRequest): CloudFront_GetKeyGroupResult {
    return new CloudFront_GetKeyGroupResult(this, 'GetKeyGroupResult', this.resources);
  }
  public getKeyGroupConfig(input: shapes.GetKeyGroupConfigRequest): CloudFront_GetKeyGroupConfigResult {
    return new CloudFront_GetKeyGroupConfigResult(this, 'GetKeyGroupConfigResult', this.resources);
  }
  public getMonitoringSubscription(input: shapes.GetMonitoringSubscriptionRequest): CloudFront_GetMonitoringSubscriptionResult {
    return new CloudFront_GetMonitoringSubscriptionResult(this, 'GetMonitoringSubscriptionResult', this.resources);
  }
  public getOriginRequestPolicy(input: shapes.GetOriginRequestPolicyRequest): CloudFront_GetOriginRequestPolicyResult {
    return new CloudFront_GetOriginRequestPolicyResult(this, 'GetOriginRequestPolicyResult', this.resources);
  }
  public getOriginRequestPolicyConfig(input: shapes.GetOriginRequestPolicyConfigRequest): CloudFront_GetOriginRequestPolicyConfigResult {
    return new CloudFront_GetOriginRequestPolicyConfigResult(this, 'GetOriginRequestPolicyConfigResult', this.resources);
  }
  public getPublicKey(input: shapes.GetPublicKeyRequest): CloudFront_GetPublicKeyResult {
    return new CloudFront_GetPublicKeyResult(this, 'GetPublicKeyResult', this.resources);
  }
  public getPublicKeyConfig(input: shapes.GetPublicKeyConfigRequest): CloudFront_GetPublicKeyConfigResult {
    return new CloudFront_GetPublicKeyConfigResult(this, 'GetPublicKeyConfigResult', this.resources);
  }
  public getRealtimeLogConfig(input: shapes.GetRealtimeLogConfigRequest): CloudFront_GetRealtimeLogConfigResult {
    return new CloudFront_GetRealtimeLogConfigResult(this, 'GetRealtimeLogConfigResult', this.resources);
  }
  public getStreamingDistribution(input: shapes.GetStreamingDistributionRequest): CloudFront_GetStreamingDistributionResult {
    return new CloudFront_GetStreamingDistributionResult(this, 'GetStreamingDistributionResult', this.resources);
  }
  public getStreamingDistributionConfig(input: shapes.GetStreamingDistributionConfigRequest): CloudFront_GetStreamingDistributionConfigResult {
    return new CloudFront_GetStreamingDistributionConfigResult(this, 'GetStreamingDistributionConfigResult', this.resources);
  }
  public listCachePolicies(input: shapes.ListCachePoliciesRequest): CloudFront_ListCachePoliciesResult {
    return new CloudFront_ListCachePoliciesResult(this, 'ListCachePoliciesResult', this.resources);
  }
  public listCloudFrontOriginAccessIdentities(input: shapes.ListCloudFrontOriginAccessIdentitiesRequest): CloudFront_ListCloudFrontOriginAccessIdentitiesResult {
    return new CloudFront_ListCloudFrontOriginAccessIdentitiesResult(this, 'ListCloudFrontOriginAccessIdentitiesResult', this.resources);
  }
  public listDistributions(input: shapes.ListDistributionsRequest): CloudFront_ListDistributionsResult {
    return new CloudFront_ListDistributionsResult(this, 'ListDistributionsResult', this.resources);
  }
  public listDistributionsByCachePolicyId(input: shapes.ListDistributionsByCachePolicyIdRequest): CloudFront_ListDistributionsByCachePolicyIdResult {
    return new CloudFront_ListDistributionsByCachePolicyIdResult(this, 'ListDistributionsByCachePolicyIdResult', this.resources);
  }
  public listDistributionsByKeyGroup(input: shapes.ListDistributionsByKeyGroupRequest): CloudFront_ListDistributionsByKeyGroupResult {
    return new CloudFront_ListDistributionsByKeyGroupResult(this, 'ListDistributionsByKeyGroupResult', this.resources);
  }
  public listDistributionsByOriginRequestPolicyId(input: shapes.ListDistributionsByOriginRequestPolicyIdRequest): CloudFront_ListDistributionsByOriginRequestPolicyIdResult {
    return new CloudFront_ListDistributionsByOriginRequestPolicyIdResult(this, 'ListDistributionsByOriginRequestPolicyIdResult', this.resources);
  }
  public listDistributionsByRealtimeLogConfig(input: shapes.ListDistributionsByRealtimeLogConfigRequest): CloudFront_ListDistributionsByRealtimeLogConfigResult {
    return new CloudFront_ListDistributionsByRealtimeLogConfigResult(this, 'ListDistributionsByRealtimeLogConfigResult', this.resources);
  }
  public listDistributionsByWebAclId(input: shapes.ListDistributionsByWebAclIdRequest): CloudFront_ListDistributionsByWebACLIdResult {
    return new CloudFront_ListDistributionsByWebACLIdResult(this, 'ListDistributionsByWebACLIdResult', this.resources);
  }
  public listFieldLevelEncryptionConfigs(input: shapes.ListFieldLevelEncryptionConfigsRequest): CloudFront_ListFieldLevelEncryptionConfigsResult {
    return new CloudFront_ListFieldLevelEncryptionConfigsResult(this, 'ListFieldLevelEncryptionConfigsResult', this.resources);
  }
  public listFieldLevelEncryptionProfiles(input: shapes.ListFieldLevelEncryptionProfilesRequest): CloudFront_ListFieldLevelEncryptionProfilesResult {
    return new CloudFront_ListFieldLevelEncryptionProfilesResult(this, 'ListFieldLevelEncryptionProfilesResult', this.resources);
  }
  public listInvalidations(input: shapes.ListInvalidationsRequest): CloudFront_ListInvalidationsResult {
    return new CloudFront_ListInvalidationsResult(this, 'ListInvalidationsResult', this.resources);
  }
  public listKeyGroups(input: shapes.ListKeyGroupsRequest): CloudFront_ListKeyGroupsResult {
    return new CloudFront_ListKeyGroupsResult(this, 'ListKeyGroupsResult', this.resources);
  }
  public listOriginRequestPolicies(input: shapes.ListOriginRequestPoliciesRequest): CloudFront_ListOriginRequestPoliciesResult {
    return new CloudFront_ListOriginRequestPoliciesResult(this, 'ListOriginRequestPoliciesResult', this.resources);
  }
  public listPublicKeys(input: shapes.ListPublicKeysRequest): CloudFront_ListPublicKeysResult {
    return new CloudFront_ListPublicKeysResult(this, 'ListPublicKeysResult', this.resources);
  }
  public listRealtimeLogConfigs(input: shapes.ListRealtimeLogConfigsRequest): CloudFront_ListRealtimeLogConfigsResult {
    return new CloudFront_ListRealtimeLogConfigsResult(this, 'ListRealtimeLogConfigsResult', this.resources);
  }
  public listStreamingDistributions(input: shapes.ListStreamingDistributionsRequest): CloudFront_ListStreamingDistributionsResult {
    return new CloudFront_ListStreamingDistributionsResult(this, 'ListStreamingDistributionsResult', this.resources);
  }
  public listTagsForResource(input: shapes.ListTagsForResourceRequest): CloudFront_ListTagsForResourceResult {
    return new CloudFront_ListTagsForResourceResult(this, 'ListTagsForResourceResult', this.resources);
  }
  public tagResource(input: shapes.TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('TagResource'),
        parameters: {
          resource: input.resource,
          tags: {
            items: input.tags.items,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }
  public untagResource(input: shapes.UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UntagResource'),
        parameters: {
          resource: input.resource,
          tagKeys: {
            items: input.tagKeys.items,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }
  public updateCachePolicy(input: shapes.UpdateCachePolicyRequest): CloudFront_UpdateCachePolicyResult {
    return new CloudFront_UpdateCachePolicyResult(this, 'UpdateCachePolicyResult', this.resources);
  }
  public updateCloudFrontOriginAccessIdentity(input: shapes.UpdateCloudFrontOriginAccessIdentityRequest): CloudFront_UpdateCloudFrontOriginAccessIdentityResult {
    return new CloudFront_UpdateCloudFrontOriginAccessIdentityResult(this, 'UpdateCloudFrontOriginAccessIdentityResult', this.resources);
  }
  public updateDistribution(input: shapes.UpdateDistributionRequest): CloudFront_UpdateDistributionResult {
    return new CloudFront_UpdateDistributionResult(this, 'UpdateDistributionResult', this.resources);
  }
  public updateFieldLevelEncryptionConfig(input: shapes.UpdateFieldLevelEncryptionConfigRequest): CloudFront_UpdateFieldLevelEncryptionConfigResult {
    return new CloudFront_UpdateFieldLevelEncryptionConfigResult(this, 'UpdateFieldLevelEncryptionConfigResult', this.resources);
  }
  public updateFieldLevelEncryptionProfile(input: shapes.UpdateFieldLevelEncryptionProfileRequest): CloudFront_UpdateFieldLevelEncryptionProfileResult {
    return new CloudFront_UpdateFieldLevelEncryptionProfileResult(this, 'UpdateFieldLevelEncryptionProfileResult', this.resources);
  }
  public updateKeyGroup(input: shapes.UpdateKeyGroupRequest): CloudFront_UpdateKeyGroupResult {
    return new CloudFront_UpdateKeyGroupResult(this, 'UpdateKeyGroupResult', this.resources);
  }
  public updateOriginRequestPolicy(input: shapes.UpdateOriginRequestPolicyRequest): CloudFront_UpdateOriginRequestPolicyResult {
    return new CloudFront_UpdateOriginRequestPolicyResult(this, 'UpdateOriginRequestPolicyResult', this.resources);
  }
  public updatePublicKey(input: shapes.UpdatePublicKeyRequest): CloudFront_UpdatePublicKeyResult {
    return new CloudFront_UpdatePublicKeyResult(this, 'UpdatePublicKeyResult', this.resources);
  }
  public updateRealtimeLogConfig(input: shapes.UpdateRealtimeLogConfigRequest): CloudFront_UpdateRealtimeLogConfigResult {
    return new CloudFront_UpdateRealtimeLogConfigResult(this, 'UpdateRealtimeLogConfigResult', this.resources);
  }
  public updateStreamingDistribution(input: shapes.UpdateStreamingDistributionRequest): CloudFront_UpdateStreamingDistributionResult {
    return new CloudFront_UpdateStreamingDistributionResult(this, 'UpdateStreamingDistributionResult', this.resources);
  }
}
export class CloudFront_CreateCachePolicyResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cachePolicy(): CloudFront_CreateCachePolicyResult_CachePolicy {
    return new CloudFront_CreateCachePolicyResult_CachePolicy(this, 'CachePolicy', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateCachePolicyResult_CachePolicy extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.Id'),
        outputPath: 'CachePolicy.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.Id', props);
    return resource.getResponseField('CachePolicy.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.LastModifiedTime'),
        outputPath: 'CachePolicy.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.LastModifiedTime', props);
    return resource.getResponseField('CachePolicy.LastModifiedTime') as unknown as string;
  }
  public get cachePolicyConfig(): CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig {
    return new CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig(this, 'CachePolicyConfig', this.resources);
  }
}
export class CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.Comment'),
        outputPath: 'CachePolicy.CachePolicyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.Comment', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.Comment') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.Name'),
        outputPath: 'CachePolicy.CachePolicyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.Name', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.Name') as unknown as string;
  }
  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.DefaultTTL'),
        outputPath: 'CachePolicy.CachePolicyConfig.DefaultTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.DefaultTTL', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.DefaultTTL') as unknown as number;
  }
  public get maxTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.MaxTTL'),
        outputPath: 'CachePolicy.CachePolicyConfig.MaxTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.MaxTTL', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.MaxTTL') as unknown as number;
  }
  public get minTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.MinTTL'),
        outputPath: 'CachePolicy.CachePolicyConfig.MinTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.MinTTL', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.MinTTL') as unknown as number;
  }
  public get parametersInCacheKeyAndForwardedToOrigin(): CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin {
    return new CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin(this, 'ParametersInCacheKeyAndForwardedToOrigin', this.resources);
  }
}
export class CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enableAcceptEncodingGzip(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip') as unknown as boolean;
  }
  public get enableAcceptEncodingBrotli(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli') as unknown as boolean;
  }
  public get headersConfig(): CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig {
    return new CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig(this, 'CachePolicyHeadersConfig', this.resources);
  }
  public get cookiesConfig(): CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig {
    return new CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig(this, 'CachePolicyCookiesConfig', this.resources);
  }
  public get queryStringsConfig(): CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig {
    return new CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig(this, 'CachePolicyQueryStringsConfig', this.resources);
  }
}
export class CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get headerBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior') as unknown as string;
  }
  public get headers(): CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers {
    return new CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers(this, 'Headers', this.resources);
  }
}
export class CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cookieBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior') as unknown as string;
  }
  public get cookies(): CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames {
    return new CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items') as unknown as string[];
  }
}
export class CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryStringBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior') as unknown as string;
  }
  public get queryStrings(): CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames {
    return new CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames(this, 'QueryStringNames', this.resources);
  }
}
export class CloudFront_CreateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items') as unknown as string[];
  }
}
export class CloudFront_CreateCloudFrontOriginAccessIdentityResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontOriginAccessIdentity(): CloudFront_CreateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity {
    return new CloudFront_CreateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity(this, 'CloudFrontOriginAccessIdentity', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCloudFrontOriginAccessIdentity.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCloudFrontOriginAccessIdentity.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCloudFrontOriginAccessIdentity.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCloudFrontOriginAccessIdentity.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.Id'),
        outputPath: 'CloudFrontOriginAccessIdentity.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.Id', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.Id') as unknown as string;
  }
  public get s3CanonicalUserId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.S3CanonicalUserId'),
        outputPath: 'CloudFrontOriginAccessIdentity.S3CanonicalUserId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.S3CanonicalUserId', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.S3CanonicalUserId') as unknown as string;
  }
  public get cloudFrontOriginAccessIdentityConfig(): CloudFront_CreateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig {
    return new CloudFront_CreateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig(this, 'CloudFrontOriginAccessIdentityConfig', this.resources);
  }
}
export class CloudFront_CreateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference'),
        outputPath: 'CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment'),
        outputPath: 'CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment') as unknown as string;
  }
}
export class CloudFront_CreateDistributionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distribution(): CloudFront_CreateDistributionResult_Distribution {
    return new CloudFront_CreateDistributionResult_Distribution(this, 'Distribution', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateDistributionResult_Distribution extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.Id'),
        outputPath: 'Distribution.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.Id', props);
    return resource.getResponseField('Distribution.Id') as unknown as string;
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.ARN'),
        outputPath: 'Distribution.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.ARN', props);
    return resource.getResponseField('Distribution.ARN') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.Status'),
        outputPath: 'Distribution.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.Status', props);
    return resource.getResponseField('Distribution.Status') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.LastModifiedTime'),
        outputPath: 'Distribution.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.LastModifiedTime', props);
    return resource.getResponseField('Distribution.LastModifiedTime') as unknown as string;
  }
  public get inProgressInvalidationBatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.InProgressInvalidationBatches'),
        outputPath: 'Distribution.InProgressInvalidationBatches',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.InProgressInvalidationBatches', props);
    return resource.getResponseField('Distribution.InProgressInvalidationBatches') as unknown as number;
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DomainName'),
        outputPath: 'Distribution.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DomainName', props);
    return resource.getResponseField('Distribution.DomainName') as unknown as string;
  }
  public get activeTrustedSigners(): CloudFront_CreateDistributionResult_Distribution_ActiveTrustedSigners {
    return new CloudFront_CreateDistributionResult_Distribution_ActiveTrustedSigners(this, 'ActiveTrustedSigners', this.resources);
  }
  public get activeTrustedKeyGroups(): CloudFront_CreateDistributionResult_Distribution_ActiveTrustedKeyGroups {
    return new CloudFront_CreateDistributionResult_Distribution_ActiveTrustedKeyGroups(this, 'ActiveTrustedKeyGroups', this.resources);
  }
  public get distributionConfig(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig(this, 'DistributionConfig', this.resources);
  }
  public get aliasIcpRecordals(): shapes.AliasIcpRecordal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.AliasICPRecordals'),
        outputPath: 'Distribution.AliasICPRecordals',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.AliasICPRecordals', props);
    return resource.getResponseField('Distribution.AliasICPRecordals') as unknown as shapes.AliasIcpRecordal[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_ActiveTrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.ActiveTrustedSigners.Enabled'),
        outputPath: 'Distribution.ActiveTrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.ActiveTrustedSigners.Enabled', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.ActiveTrustedSigners.Quantity'),
        outputPath: 'Distribution.ActiveTrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.ActiveTrustedSigners.Quantity', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Quantity') as unknown as number;
  }
  public get items(): shapes.Signer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.ActiveTrustedSigners.Items'),
        outputPath: 'Distribution.ActiveTrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.ActiveTrustedSigners.Items', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Items') as unknown as shapes.Signer[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_ActiveTrustedKeyGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.ActiveTrustedKeyGroups.Enabled'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.ActiveTrustedKeyGroups.Enabled', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.ActiveTrustedKeyGroups.Quantity'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.ActiveTrustedKeyGroups.Quantity', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Quantity') as unknown as number;
  }
  public get items(): shapes.KgKeyPairIds[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.ActiveTrustedKeyGroups.Items'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.ActiveTrustedKeyGroups.Items', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Items') as unknown as shapes.KgKeyPairIds[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.CallerReference'),
        outputPath: 'Distribution.DistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.CallerReference', props);
    return resource.getResponseField('Distribution.DistributionConfig.CallerReference') as unknown as string;
  }
  public get aliases(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Aliases {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get defaultRootObject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultRootObject'),
        outputPath: 'Distribution.DistributionConfig.DefaultRootObject',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultRootObject', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultRootObject') as unknown as string;
  }
  public get origins(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Origins {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Origins(this, 'Origins', this.resources);
  }
  public get originGroups(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_OriginGroups {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_OriginGroups(this, 'OriginGroups', this.resources);
  }
  public get defaultCacheBehavior(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior(this, 'DefaultCacheBehavior', this.resources);
  }
  public get cacheBehaviors(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_CacheBehaviors {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_CacheBehaviors(this, 'CacheBehaviors', this.resources);
  }
  public get customErrorResponses(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_CustomErrorResponses {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_CustomErrorResponses(this, 'CustomErrorResponses', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Comment'),
        outputPath: 'Distribution.DistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Comment', props);
    return resource.getResponseField('Distribution.DistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_LoggingConfig {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_LoggingConfig(this, 'LoggingConfig', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.PriceClass'),
        outputPath: 'Distribution.DistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.PriceClass', props);
    return resource.getResponseField('Distribution.DistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Enabled'),
        outputPath: 'Distribution.DistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.Enabled') as unknown as boolean;
  }
  public get viewerCertificate(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_ViewerCertificate {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_ViewerCertificate(this, 'ViewerCertificate', this.resources);
  }
  public get restrictions(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Restrictions {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Restrictions(this, 'Restrictions', this.resources);
  }
  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.WebACLId'),
        outputPath: 'Distribution.DistributionConfig.WebACLId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.WebACLId', props);
    return resource.getResponseField('Distribution.DistributionConfig.WebACLId') as unknown as string;
  }
  public get httpVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.HttpVersion'),
        outputPath: 'Distribution.DistributionConfig.HttpVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.HttpVersion', props);
    return resource.getResponseField('Distribution.DistributionConfig.HttpVersion') as unknown as string;
  }
  public get isIpv6Enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.IsIPV6Enabled'),
        outputPath: 'Distribution.DistributionConfig.IsIPV6Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.IsIPV6Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.IsIPV6Enabled') as unknown as boolean;
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Aliases.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Aliases.Items'),
        outputPath: 'Distribution.DistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Aliases.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Origins extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Origins.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Origins.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Origins.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Origins.Quantity') as unknown as number;
  }
  public get items(): shapes.Origin[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Origins.Items'),
        outputPath: 'Distribution.DistributionConfig.Origins.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Origins.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Origins.Items') as unknown as shapes.Origin[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_OriginGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.OriginGroups.Quantity'),
        outputPath: 'Distribution.DistributionConfig.OriginGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.OriginGroups.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.OriginGroups.Quantity') as unknown as number;
  }
  public get items(): shapes.OriginGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.OriginGroups.Items'),
        outputPath: 'Distribution.DistributionConfig.OriginGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.OriginGroups.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.OriginGroups.Items') as unknown as shapes.OriginGroup[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get targetOriginId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId') as unknown as string;
  }
  public get trustedSigners(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get trustedKeyGroups(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups(this, 'TrustedKeyGroups', this.resources);
  }
  public get viewerProtocolPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy') as unknown as string;
  }
  public get allowedMethods(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods(this, 'AllowedMethods', this.resources);
  }
  public get smoothStreaming(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming') as unknown as boolean;
  }
  public get compress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.Compress'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.Compress',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.Compress', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.Compress') as unknown as boolean;
  }
  public get lambdaFunctionAssociations(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations(this, 'LambdaFunctionAssociations', this.resources);
  }
  public get fieldLevelEncryptionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId') as unknown as string;
  }
  public get realtimeLogConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn') as unknown as string;
  }
  public get cachePolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId') as unknown as string;
  }
  public get originRequestPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId') as unknown as string;
  }
  public get forwardedValues(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues(this, 'ForwardedValues', this.resources);
  }
  public get minTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL') as unknown as number;
  }
  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL') as unknown as number;
  }
  public get maxTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL') as unknown as number;
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items') as unknown as string[];
  }
  public get cachedMethods(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods(this, 'CachedMethods', this.resources);
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity') as unknown as number;
  }
  public get items(): shapes.LambdaFunctionAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items') as unknown as shapes.LambdaFunctionAssociation[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryString(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString') as unknown as boolean;
  }
  public get cookies(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference(this, 'CookiePreference', this.resources);
  }
  public get headers(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers(this, 'Headers', this.resources);
  }
  public get queryStringCacheKeys(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys(this, 'QueryStringCacheKeys', this.resources);
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forward(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward') as unknown as string;
  }
  public get whitelistedNames(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_CacheBehaviors extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.CacheBehaviors.Quantity'),
        outputPath: 'Distribution.DistributionConfig.CacheBehaviors.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.CacheBehaviors.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.CacheBehaviors.Quantity') as unknown as number;
  }
  public get items(): shapes.CacheBehavior[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.CacheBehaviors.Items'),
        outputPath: 'Distribution.DistributionConfig.CacheBehaviors.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.CacheBehaviors.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.CacheBehaviors.Items') as unknown as shapes.CacheBehavior[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_CustomErrorResponses extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.CustomErrorResponses.Quantity'),
        outputPath: 'Distribution.DistributionConfig.CustomErrorResponses.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.CustomErrorResponses.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.CustomErrorResponses.Quantity') as unknown as number;
  }
  public get items(): shapes.CustomErrorResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.CustomErrorResponses.Items'),
        outputPath: 'Distribution.DistributionConfig.CustomErrorResponses.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.CustomErrorResponses.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.CustomErrorResponses.Items') as unknown as shapes.CustomErrorResponse[];
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_LoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Logging.Enabled'),
        outputPath: 'Distribution.DistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get includeCookies(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Logging.IncludeCookies'),
        outputPath: 'Distribution.DistributionConfig.Logging.IncludeCookies',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Logging.IncludeCookies', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.IncludeCookies') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Logging.Bucket'),
        outputPath: 'Distribution.DistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Logging.Prefix'),
        outputPath: 'Distribution.DistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_ViewerCertificate extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontDefaultCertificate(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate') as unknown as boolean;
  }
  public get iamCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId') as unknown as string;
  }
  public get acmCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn') as unknown as string;
  }
  public get sslSupportMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod') as unknown as string;
  }
  public get minimumProtocolVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion') as unknown as string;
  }
  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.Certificate'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.Certificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.Certificate', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.Certificate') as unknown as string;
  }
  public get certificateSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.CertificateSource'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.CertificateSource',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.ViewerCertificate.CertificateSource', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.CertificateSource') as unknown as string;
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Restrictions extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get geoRestriction(): CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Restrictions_GeoRestriction {
    return new CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Restrictions_GeoRestriction(this, 'GeoRestriction', this.resources);
  }
}
export class CloudFront_CreateDistributionResult_Distribution_DistributionConfig_Restrictions_GeoRestriction extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get restrictionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType') as unknown as string;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Items'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distribution(): CloudFront_CreateDistributionWithTagsResult_Distribution {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution(this, 'Distribution', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.Id'),
        outputPath: 'Distribution.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.Id', props);
    return resource.getResponseField('Distribution.Id') as unknown as string;
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.ARN'),
        outputPath: 'Distribution.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.ARN', props);
    return resource.getResponseField('Distribution.ARN') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.Status'),
        outputPath: 'Distribution.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.Status', props);
    return resource.getResponseField('Distribution.Status') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.LastModifiedTime'),
        outputPath: 'Distribution.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.LastModifiedTime', props);
    return resource.getResponseField('Distribution.LastModifiedTime') as unknown as string;
  }
  public get inProgressInvalidationBatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.InProgressInvalidationBatches'),
        outputPath: 'Distribution.InProgressInvalidationBatches',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.InProgressInvalidationBatches', props);
    return resource.getResponseField('Distribution.InProgressInvalidationBatches') as unknown as number;
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DomainName'),
        outputPath: 'Distribution.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DomainName', props);
    return resource.getResponseField('Distribution.DomainName') as unknown as string;
  }
  public get activeTrustedSigners(): CloudFront_CreateDistributionWithTagsResult_Distribution_ActiveTrustedSigners {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_ActiveTrustedSigners(this, 'ActiveTrustedSigners', this.resources);
  }
  public get activeTrustedKeyGroups(): CloudFront_CreateDistributionWithTagsResult_Distribution_ActiveTrustedKeyGroups {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_ActiveTrustedKeyGroups(this, 'ActiveTrustedKeyGroups', this.resources);
  }
  public get distributionConfig(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig(this, 'DistributionConfig', this.resources);
  }
  public get aliasIcpRecordals(): shapes.AliasIcpRecordal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.AliasICPRecordals'),
        outputPath: 'Distribution.AliasICPRecordals',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.AliasICPRecordals', props);
    return resource.getResponseField('Distribution.AliasICPRecordals') as unknown as shapes.AliasIcpRecordal[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_ActiveTrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.ActiveTrustedSigners.Enabled'),
        outputPath: 'Distribution.ActiveTrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.ActiveTrustedSigners.Enabled', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.ActiveTrustedSigners.Quantity'),
        outputPath: 'Distribution.ActiveTrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.ActiveTrustedSigners.Quantity', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Quantity') as unknown as number;
  }
  public get items(): shapes.Signer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.ActiveTrustedSigners.Items'),
        outputPath: 'Distribution.ActiveTrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.ActiveTrustedSigners.Items', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Items') as unknown as shapes.Signer[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_ActiveTrustedKeyGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.ActiveTrustedKeyGroups.Enabled'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.ActiveTrustedKeyGroups.Enabled', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.ActiveTrustedKeyGroups.Quantity'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.ActiveTrustedKeyGroups.Quantity', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Quantity') as unknown as number;
  }
  public get items(): shapes.KgKeyPairIds[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.ActiveTrustedKeyGroups.Items'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.ActiveTrustedKeyGroups.Items', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Items') as unknown as shapes.KgKeyPairIds[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.CallerReference'),
        outputPath: 'Distribution.DistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.CallerReference', props);
    return resource.getResponseField('Distribution.DistributionConfig.CallerReference') as unknown as string;
  }
  public get aliases(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Aliases {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get defaultRootObject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultRootObject'),
        outputPath: 'Distribution.DistributionConfig.DefaultRootObject',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultRootObject', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultRootObject') as unknown as string;
  }
  public get origins(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Origins {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Origins(this, 'Origins', this.resources);
  }
  public get originGroups(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_OriginGroups {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_OriginGroups(this, 'OriginGroups', this.resources);
  }
  public get defaultCacheBehavior(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior(this, 'DefaultCacheBehavior', this.resources);
  }
  public get cacheBehaviors(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_CacheBehaviors {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_CacheBehaviors(this, 'CacheBehaviors', this.resources);
  }
  public get customErrorResponses(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_CustomErrorResponses {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_CustomErrorResponses(this, 'CustomErrorResponses', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Comment'),
        outputPath: 'Distribution.DistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Comment', props);
    return resource.getResponseField('Distribution.DistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_LoggingConfig {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_LoggingConfig(this, 'LoggingConfig', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.PriceClass'),
        outputPath: 'Distribution.DistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.PriceClass', props);
    return resource.getResponseField('Distribution.DistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Enabled'),
        outputPath: 'Distribution.DistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.Enabled') as unknown as boolean;
  }
  public get viewerCertificate(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_ViewerCertificate {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_ViewerCertificate(this, 'ViewerCertificate', this.resources);
  }
  public get restrictions(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Restrictions {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Restrictions(this, 'Restrictions', this.resources);
  }
  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.WebACLId'),
        outputPath: 'Distribution.DistributionConfig.WebACLId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.WebACLId', props);
    return resource.getResponseField('Distribution.DistributionConfig.WebACLId') as unknown as string;
  }
  public get httpVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.HttpVersion'),
        outputPath: 'Distribution.DistributionConfig.HttpVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.HttpVersion', props);
    return resource.getResponseField('Distribution.DistributionConfig.HttpVersion') as unknown as string;
  }
  public get isIpv6Enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.IsIPV6Enabled'),
        outputPath: 'Distribution.DistributionConfig.IsIPV6Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.IsIPV6Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.IsIPV6Enabled') as unknown as boolean;
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Aliases.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Aliases.Items'),
        outputPath: 'Distribution.DistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Aliases.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Origins extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Origins.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Origins.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Origins.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Origins.Quantity') as unknown as number;
  }
  public get items(): shapes.Origin[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Origins.Items'),
        outputPath: 'Distribution.DistributionConfig.Origins.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Origins.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Origins.Items') as unknown as shapes.Origin[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_OriginGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.OriginGroups.Quantity'),
        outputPath: 'Distribution.DistributionConfig.OriginGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.OriginGroups.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.OriginGroups.Quantity') as unknown as number;
  }
  public get items(): shapes.OriginGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.OriginGroups.Items'),
        outputPath: 'Distribution.DistributionConfig.OriginGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.OriginGroups.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.OriginGroups.Items') as unknown as shapes.OriginGroup[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get targetOriginId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId') as unknown as string;
  }
  public get trustedSigners(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get trustedKeyGroups(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups(this, 'TrustedKeyGroups', this.resources);
  }
  public get viewerProtocolPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy') as unknown as string;
  }
  public get allowedMethods(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods(this, 'AllowedMethods', this.resources);
  }
  public get smoothStreaming(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming') as unknown as boolean;
  }
  public get compress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.Compress'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.Compress',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.Compress', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.Compress') as unknown as boolean;
  }
  public get lambdaFunctionAssociations(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations(this, 'LambdaFunctionAssociations', this.resources);
  }
  public get fieldLevelEncryptionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId') as unknown as string;
  }
  public get realtimeLogConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn') as unknown as string;
  }
  public get cachePolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId') as unknown as string;
  }
  public get originRequestPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId') as unknown as string;
  }
  public get forwardedValues(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues(this, 'ForwardedValues', this.resources);
  }
  public get minTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL') as unknown as number;
  }
  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL') as unknown as number;
  }
  public get maxTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL') as unknown as number;
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items') as unknown as string[];
  }
  public get cachedMethods(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods(this, 'CachedMethods', this.resources);
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity') as unknown as number;
  }
  public get items(): shapes.LambdaFunctionAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items') as unknown as shapes.LambdaFunctionAssociation[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryString(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString') as unknown as boolean;
  }
  public get cookies(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference(this, 'CookiePreference', this.resources);
  }
  public get headers(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers(this, 'Headers', this.resources);
  }
  public get queryStringCacheKeys(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys(this, 'QueryStringCacheKeys', this.resources);
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forward(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward') as unknown as string;
  }
  public get whitelistedNames(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items') as unknown as string[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_CacheBehaviors extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.CacheBehaviors.Quantity'),
        outputPath: 'Distribution.DistributionConfig.CacheBehaviors.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.CacheBehaviors.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.CacheBehaviors.Quantity') as unknown as number;
  }
  public get items(): shapes.CacheBehavior[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.CacheBehaviors.Items'),
        outputPath: 'Distribution.DistributionConfig.CacheBehaviors.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.CacheBehaviors.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.CacheBehaviors.Items') as unknown as shapes.CacheBehavior[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_CustomErrorResponses extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.CustomErrorResponses.Quantity'),
        outputPath: 'Distribution.DistributionConfig.CustomErrorResponses.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.CustomErrorResponses.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.CustomErrorResponses.Quantity') as unknown as number;
  }
  public get items(): shapes.CustomErrorResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.CustomErrorResponses.Items'),
        outputPath: 'Distribution.DistributionConfig.CustomErrorResponses.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.CustomErrorResponses.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.CustomErrorResponses.Items') as unknown as shapes.CustomErrorResponse[];
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_LoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Logging.Enabled'),
        outputPath: 'Distribution.DistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get includeCookies(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Logging.IncludeCookies'),
        outputPath: 'Distribution.DistributionConfig.Logging.IncludeCookies',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Logging.IncludeCookies', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.IncludeCookies') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Logging.Bucket'),
        outputPath: 'Distribution.DistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Logging.Prefix'),
        outputPath: 'Distribution.DistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_ViewerCertificate extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontDefaultCertificate(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate') as unknown as boolean;
  }
  public get iamCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId') as unknown as string;
  }
  public get acmCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn') as unknown as string;
  }
  public get sslSupportMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod') as unknown as string;
  }
  public get minimumProtocolVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion') as unknown as string;
  }
  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.Certificate'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.Certificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.Certificate', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.Certificate') as unknown as string;
  }
  public get certificateSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.CertificateSource'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.CertificateSource',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.ViewerCertificate.CertificateSource', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.CertificateSource') as unknown as string;
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Restrictions extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get geoRestriction(): CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Restrictions_GeoRestriction {
    return new CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Restrictions_GeoRestriction(this, 'GeoRestriction', this.resources);
  }
}
export class CloudFront_CreateDistributionWithTagsResult_Distribution_DistributionConfig_Restrictions_GeoRestriction extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get restrictionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType') as unknown as string;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateDistributionWithTags.Distribution.DistributionConfig.Restrictions.GeoRestriction.Items'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionWithTags.Distribution.DistributionConfig.Restrictions.GeoRestriction.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.Items') as unknown as string[];
  }
}
export class CloudFront_CreateFieldLevelEncryptionConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryption(): CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption {
    return new CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption(this, 'FieldLevelEncryption', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.Id'),
        outputPath: 'FieldLevelEncryption.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.Id', props);
    return resource.getResponseField('FieldLevelEncryption.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.LastModifiedTime'),
        outputPath: 'FieldLevelEncryption.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.LastModifiedTime', props);
    return resource.getResponseField('FieldLevelEncryption.LastModifiedTime') as unknown as string;
  }
  public get fieldLevelEncryptionConfig(): CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig {
    return new CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig(this, 'FieldLevelEncryptionConfig', this.resources);
  }
}
export class CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.Comment'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.Comment', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.Comment') as unknown as string;
  }
  public get queryArgProfileConfig(): CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig {
    return new CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig(this, 'QueryArgProfileConfig', this.resources);
  }
  public get contentTypeProfileConfig(): CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig {
    return new CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig(this, 'ContentTypeProfileConfig', this.resources);
  }
}
export class CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forwardWhenQueryArgProfileIsUnknown(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown') as unknown as boolean;
  }
  public get queryArgProfiles(): CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles {
    return new CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles(this, 'QueryArgProfiles', this.resources);
  }
}
export class CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity') as unknown as number;
  }
  public get items(): shapes.QueryArgProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items') as unknown as shapes.QueryArgProfile[];
  }
}
export class CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forwardWhenContentTypeIsUnknown(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown') as unknown as boolean;
  }
  public get contentTypeProfiles(): CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles {
    return new CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles(this, 'ContentTypeProfiles', this.resources);
  }
}
export class CloudFront_CreateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity') as unknown as number;
  }
  public get items(): shapes.ContentTypeProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items') as unknown as shapes.ContentTypeProfile[];
  }
}
export class CloudFront_CreateFieldLevelEncryptionProfileResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryptionProfile(): CloudFront_CreateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile {
    return new CloudFront_CreateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile(this, 'FieldLevelEncryptionProfile', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionProfile.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionProfile.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionProfile.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionProfile.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.Id'),
        outputPath: 'FieldLevelEncryptionProfile.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.Id', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.LastModifiedTime'),
        outputPath: 'FieldLevelEncryptionProfile.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.LastModifiedTime', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.LastModifiedTime') as unknown as string;
  }
  public get fieldLevelEncryptionProfileConfig(): CloudFront_CreateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig {
    return new CloudFront_CreateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig(this, 'FieldLevelEncryptionProfileConfig', this.resources);
  }
}
export class CloudFront_CreateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name') as unknown as string;
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment') as unknown as string;
  }
  public get encryptionEntities(): CloudFront_CreateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig_EncryptionEntities {
    return new CloudFront_CreateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig_EncryptionEntities(this, 'EncryptionEntities', this.resources);
  }
}
export class CloudFront_CreateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig_EncryptionEntities extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity') as unknown as number;
  }
  public get items(): shapes.EncryptionEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items') as unknown as shapes.EncryptionEntity[];
  }
}
export class CloudFront_CreateInvalidationResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateInvalidation.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInvalidation.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get invalidation(): CloudFront_CreateInvalidationResult_Invalidation {
    return new CloudFront_CreateInvalidationResult_Invalidation(this, 'Invalidation', this.resources);
  }
}
export class CloudFront_CreateInvalidationResult_Invalidation extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateInvalidation.Invalidation.Id'),
        outputPath: 'Invalidation.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInvalidation.Invalidation.Id', props);
    return resource.getResponseField('Invalidation.Id') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateInvalidation.Invalidation.Status'),
        outputPath: 'Invalidation.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInvalidation.Invalidation.Status', props);
    return resource.getResponseField('Invalidation.Status') as unknown as string;
  }
  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateInvalidation.Invalidation.CreateTime'),
        outputPath: 'Invalidation.CreateTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInvalidation.Invalidation.CreateTime', props);
    return resource.getResponseField('Invalidation.CreateTime') as unknown as string;
  }
  public get invalidationBatch(): CloudFront_CreateInvalidationResult_Invalidation_InvalidationBatch {
    return new CloudFront_CreateInvalidationResult_Invalidation_InvalidationBatch(this, 'InvalidationBatch', this.resources);
  }
}
export class CloudFront_CreateInvalidationResult_Invalidation_InvalidationBatch extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get paths(): CloudFront_CreateInvalidationResult_Invalidation_InvalidationBatch_Paths {
    return new CloudFront_CreateInvalidationResult_Invalidation_InvalidationBatch_Paths(this, 'Paths', this.resources);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateInvalidation.Invalidation.InvalidationBatch.CallerReference'),
        outputPath: 'Invalidation.InvalidationBatch.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInvalidation.Invalidation.InvalidationBatch.CallerReference', props);
    return resource.getResponseField('Invalidation.InvalidationBatch.CallerReference') as unknown as string;
  }
}
export class CloudFront_CreateInvalidationResult_Invalidation_InvalidationBatch_Paths extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateInvalidation.Invalidation.InvalidationBatch.Paths.Quantity'),
        outputPath: 'Invalidation.InvalidationBatch.Paths.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInvalidation.Invalidation.InvalidationBatch.Paths.Quantity', props);
    return resource.getResponseField('Invalidation.InvalidationBatch.Paths.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateInvalidation.Invalidation.InvalidationBatch.Paths.Items'),
        outputPath: 'Invalidation.InvalidationBatch.Paths.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInvalidation.Invalidation.InvalidationBatch.Paths.Items', props);
    return resource.getResponseField('Invalidation.InvalidationBatch.Paths.Items') as unknown as string[];
  }
}
export class CloudFront_CreateKeyGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get keyGroup(): CloudFront_CreateKeyGroupResult_KeyGroup {
    return new CloudFront_CreateKeyGroupResult_KeyGroup(this, 'KeyGroup', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateKeyGroup.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyGroup.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateKeyGroup.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyGroup.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateKeyGroupResult_KeyGroup extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateKeyGroup.KeyGroup.Id'),
        outputPath: 'KeyGroup.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyGroup.KeyGroup.Id', props);
    return resource.getResponseField('KeyGroup.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateKeyGroup.KeyGroup.LastModifiedTime'),
        outputPath: 'KeyGroup.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyGroup.KeyGroup.LastModifiedTime', props);
    return resource.getResponseField('KeyGroup.LastModifiedTime') as unknown as string;
  }
  public get keyGroupConfig(): CloudFront_CreateKeyGroupResult_KeyGroup_KeyGroupConfig {
    return new CloudFront_CreateKeyGroupResult_KeyGroup_KeyGroupConfig(this, 'KeyGroupConfig', this.resources);
  }
}
export class CloudFront_CreateKeyGroupResult_KeyGroup_KeyGroupConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateKeyGroup.KeyGroup.KeyGroupConfig.Name'),
        outputPath: 'KeyGroup.KeyGroupConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyGroup.KeyGroup.KeyGroupConfig.Name', props);
    return resource.getResponseField('KeyGroup.KeyGroupConfig.Name') as unknown as string;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateKeyGroup.KeyGroup.KeyGroupConfig.Items'),
        outputPath: 'KeyGroup.KeyGroupConfig.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyGroup.KeyGroup.KeyGroupConfig.Items', props);
    return resource.getResponseField('KeyGroup.KeyGroupConfig.Items') as unknown as string[];
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateKeyGroup.KeyGroup.KeyGroupConfig.Comment'),
        outputPath: 'KeyGroup.KeyGroupConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyGroup.KeyGroup.KeyGroupConfig.Comment', props);
    return resource.getResponseField('KeyGroup.KeyGroupConfig.Comment') as unknown as string;
  }
}
export class CloudFront_CreateMonitoringSubscriptionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get monitoringSubscription(): CloudFront_CreateMonitoringSubscriptionResult_MonitoringSubscription {
    return new CloudFront_CreateMonitoringSubscriptionResult_MonitoringSubscription(this, 'MonitoringSubscription', this.resources);
  }
}
export class CloudFront_CreateMonitoringSubscriptionResult_MonitoringSubscription extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get realtimeMetricsSubscriptionConfig(): CloudFront_CreateMonitoringSubscriptionResult_MonitoringSubscription_RealtimeMetricsSubscriptionConfig {
    return new CloudFront_CreateMonitoringSubscriptionResult_MonitoringSubscription_RealtimeMetricsSubscriptionConfig(this, 'RealtimeMetricsSubscriptionConfig', this.resources);
  }
}
export class CloudFront_CreateMonitoringSubscriptionResult_MonitoringSubscription_RealtimeMetricsSubscriptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get realtimeMetricsSubscriptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createMonitoringSubscription',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMonitoringSubscription.MonitoringSubscription.RealtimeMetricsSubscriptionConfig.RealtimeMetricsSubscriptionStatus'),
        outputPath: 'MonitoringSubscription.RealtimeMetricsSubscriptionConfig.RealtimeMetricsSubscriptionStatus',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMonitoringSubscription.MonitoringSubscription.RealtimeMetricsSubscriptionConfig.RealtimeMetricsSubscriptionStatus', props);
    return resource.getResponseField('MonitoringSubscription.RealtimeMetricsSubscriptionConfig.RealtimeMetricsSubscriptionStatus') as unknown as string;
  }
}
export class CloudFront_CreateOriginRequestPolicyResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get originRequestPolicy(): CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy {
    return new CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy(this, 'OriginRequestPolicy', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.Id'),
        outputPath: 'OriginRequestPolicy.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.Id', props);
    return resource.getResponseField('OriginRequestPolicy.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.LastModifiedTime'),
        outputPath: 'OriginRequestPolicy.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.LastModifiedTime', props);
    return resource.getResponseField('OriginRequestPolicy.LastModifiedTime') as unknown as string;
  }
  public get originRequestPolicyConfig(): CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig {
    return new CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig(this, 'OriginRequestPolicyConfig', this.resources);
  }
}
export class CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Comment'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Comment', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.Comment') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Name'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Name', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.Name') as unknown as string;
  }
  public get headersConfig(): CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig {
    return new CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig(this, 'OriginRequestPolicyHeadersConfig', this.resources);
  }
  public get cookiesConfig(): CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig {
    return new CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig(this, 'OriginRequestPolicyCookiesConfig', this.resources);
  }
  public get queryStringsConfig(): CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig {
    return new CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig(this, 'OriginRequestPolicyQueryStringsConfig', this.resources);
  }
}
export class CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get headerBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior') as unknown as string;
  }
  public get headers(): CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers {
    return new CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers(this, 'Headers', this.resources);
  }
}
export class CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cookieBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior') as unknown as string;
  }
  public get cookies(): CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames {
    return new CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items') as unknown as string[];
  }
}
export class CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryStringBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior') as unknown as string;
  }
  public get queryStrings(): CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames {
    return new CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames(this, 'QueryStringNames', this.resources);
  }
}
export class CloudFront_CreateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items') as unknown as string[];
  }
}
export class CloudFront_CreatePublicKeyResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get publicKey(): CloudFront_CreatePublicKeyResult_PublicKey {
    return new CloudFront_CreatePublicKeyResult_PublicKey(this, 'PublicKey', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreatePublicKey.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicKey.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreatePublicKey.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicKey.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreatePublicKeyResult_PublicKey extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreatePublicKey.PublicKey.Id'),
        outputPath: 'PublicKey.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicKey.PublicKey.Id', props);
    return resource.getResponseField('PublicKey.Id') as unknown as string;
  }
  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreatePublicKey.PublicKey.CreatedTime'),
        outputPath: 'PublicKey.CreatedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicKey.PublicKey.CreatedTime', props);
    return resource.getResponseField('PublicKey.CreatedTime') as unknown as string;
  }
  public get publicKeyConfig(): CloudFront_CreatePublicKeyResult_PublicKey_PublicKeyConfig {
    return new CloudFront_CreatePublicKeyResult_PublicKey_PublicKeyConfig(this, 'PublicKeyConfig', this.resources);
  }
}
export class CloudFront_CreatePublicKeyResult_PublicKey_PublicKeyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreatePublicKey.PublicKey.PublicKeyConfig.CallerReference'),
        outputPath: 'PublicKey.PublicKeyConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicKey.PublicKey.PublicKeyConfig.CallerReference', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.CallerReference') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreatePublicKey.PublicKey.PublicKeyConfig.Name'),
        outputPath: 'PublicKey.PublicKeyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicKey.PublicKey.PublicKeyConfig.Name', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.Name') as unknown as string;
  }
  public get encodedKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreatePublicKey.PublicKey.PublicKeyConfig.EncodedKey'),
        outputPath: 'PublicKey.PublicKeyConfig.EncodedKey',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicKey.PublicKey.PublicKeyConfig.EncodedKey', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.EncodedKey') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreatePublicKey.PublicKey.PublicKeyConfig.Comment'),
        outputPath: 'PublicKey.PublicKeyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicKey.PublicKey.PublicKeyConfig.Comment', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.Comment') as unknown as string;
  }
}
export class CloudFront_CreateRealtimeLogConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get realtimeLogConfig(): CloudFront_CreateRealtimeLogConfigResult_RealtimeLogConfig {
    return new CloudFront_CreateRealtimeLogConfigResult_RealtimeLogConfig(this, 'RealtimeLogConfig', this.resources);
  }
}
export class CloudFront_CreateRealtimeLogConfigResult_RealtimeLogConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateRealtimeLogConfig.RealtimeLogConfig.ARN'),
        outputPath: 'RealtimeLogConfig.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeLogConfig.RealtimeLogConfig.ARN', props);
    return resource.getResponseField('RealtimeLogConfig.ARN') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateRealtimeLogConfig.RealtimeLogConfig.Name'),
        outputPath: 'RealtimeLogConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeLogConfig.RealtimeLogConfig.Name', props);
    return resource.getResponseField('RealtimeLogConfig.Name') as unknown as string;
  }
  public get samplingRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateRealtimeLogConfig.RealtimeLogConfig.SamplingRate'),
        outputPath: 'RealtimeLogConfig.SamplingRate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeLogConfig.RealtimeLogConfig.SamplingRate', props);
    return resource.getResponseField('RealtimeLogConfig.SamplingRate') as unknown as number;
  }
  public get endPoints(): shapes.EndPoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateRealtimeLogConfig.RealtimeLogConfig.EndPoints'),
        outputPath: 'RealtimeLogConfig.EndPoints',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeLogConfig.RealtimeLogConfig.EndPoints', props);
    return resource.getResponseField('RealtimeLogConfig.EndPoints') as unknown as shapes.EndPoint[];
  }
  public get fields(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateRealtimeLogConfig.RealtimeLogConfig.Fields'),
        outputPath: 'RealtimeLogConfig.Fields',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeLogConfig.RealtimeLogConfig.Fields', props);
    return resource.getResponseField('RealtimeLogConfig.Fields') as unknown as string[];
  }
}
export class CloudFront_CreateStreamingDistributionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get streamingDistribution(): CloudFront_CreateStreamingDistributionResult_StreamingDistribution {
    return new CloudFront_CreateStreamingDistributionResult_StreamingDistribution(this, 'StreamingDistribution', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateStreamingDistributionResult_StreamingDistribution extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.Id'),
        outputPath: 'StreamingDistribution.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.Id', props);
    return resource.getResponseField('StreamingDistribution.Id') as unknown as string;
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.ARN'),
        outputPath: 'StreamingDistribution.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.ARN', props);
    return resource.getResponseField('StreamingDistribution.ARN') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.Status'),
        outputPath: 'StreamingDistribution.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.Status', props);
    return resource.getResponseField('StreamingDistribution.Status') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.LastModifiedTime'),
        outputPath: 'StreamingDistribution.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.LastModifiedTime', props);
    return resource.getResponseField('StreamingDistribution.LastModifiedTime') as unknown as string;
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.DomainName'),
        outputPath: 'StreamingDistribution.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.DomainName', props);
    return resource.getResponseField('StreamingDistribution.DomainName') as unknown as string;
  }
  public get activeTrustedSigners(): CloudFront_CreateStreamingDistributionResult_StreamingDistribution_ActiveTrustedSigners {
    return new CloudFront_CreateStreamingDistributionResult_StreamingDistribution_ActiveTrustedSigners(this, 'ActiveTrustedSigners', this.resources);
  }
  public get streamingDistributionConfig(): CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig {
    return new CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig(this, 'StreamingDistributionConfig', this.resources);
  }
}
export class CloudFront_CreateStreamingDistributionResult_StreamingDistribution_ActiveTrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Enabled'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Enabled', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Quantity'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Quantity', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Quantity') as unknown as number;
  }
  public get items(): shapes.Signer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Items'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Items', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Items') as unknown as shapes.Signer[];
  }
}
export class CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.CallerReference'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.CallerReference', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.CallerReference') as unknown as string;
  }
  public get s3Origin(): CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_S3Origin {
    return new CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_S3Origin(this, 'S3Origin', this.resources);
  }
  public get aliases(): CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_Aliases {
    return new CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Comment'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Comment', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig {
    return new CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig(this, 'StreamingLoggingConfig', this.resources);
  }
  public get trustedSigners(): CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners {
    return new CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.PriceClass'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.PriceClass', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Enabled') as unknown as boolean;
  }
}
export class CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_S3Origin extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName') as unknown as string;
  }
  public get originAccessIdentity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity') as unknown as string;
  }
}
export class CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Items'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Items', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Bucket'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Prefix'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_CreateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items') as unknown as string[];
  }
}
export class CloudFront_CreateStreamingDistributionWithTagsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get streamingDistribution(): CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution {
    return new CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution(this, 'StreamingDistribution', this.resources);
  }
  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.Location'),
        outputPath: 'Location',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.Id'),
        outputPath: 'StreamingDistribution.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.Id', props);
    return resource.getResponseField('StreamingDistribution.Id') as unknown as string;
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.ARN'),
        outputPath: 'StreamingDistribution.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.ARN', props);
    return resource.getResponseField('StreamingDistribution.ARN') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.Status'),
        outputPath: 'StreamingDistribution.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.Status', props);
    return resource.getResponseField('StreamingDistribution.Status') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.LastModifiedTime'),
        outputPath: 'StreamingDistribution.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.LastModifiedTime', props);
    return resource.getResponseField('StreamingDistribution.LastModifiedTime') as unknown as string;
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.DomainName'),
        outputPath: 'StreamingDistribution.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.DomainName', props);
    return resource.getResponseField('StreamingDistribution.DomainName') as unknown as string;
  }
  public get activeTrustedSigners(): CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_ActiveTrustedSigners {
    return new CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_ActiveTrustedSigners(this, 'ActiveTrustedSigners', this.resources);
  }
  public get streamingDistributionConfig(): CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig {
    return new CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig(this, 'StreamingDistributionConfig', this.resources);
  }
}
export class CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_ActiveTrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.ActiveTrustedSigners.Enabled'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.ActiveTrustedSigners.Enabled', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.ActiveTrustedSigners.Quantity'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.ActiveTrustedSigners.Quantity', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Quantity') as unknown as number;
  }
  public get items(): shapes.Signer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.ActiveTrustedSigners.Items'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.ActiveTrustedSigners.Items', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Items') as unknown as shapes.Signer[];
  }
}
export class CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.CallerReference'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.CallerReference', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.CallerReference') as unknown as string;
  }
  public get s3Origin(): CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_S3Origin {
    return new CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_S3Origin(this, 'S3Origin', this.resources);
  }
  public get aliases(): CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_Aliases {
    return new CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Comment'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Comment', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig {
    return new CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig(this, 'StreamingLoggingConfig', this.resources);
  }
  public get trustedSigners(): CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners {
    return new CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.PriceClass'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.PriceClass', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Enabled') as unknown as boolean;
  }
}
export class CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_S3Origin extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName') as unknown as string;
  }
  public get originAccessIdentity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity') as unknown as string;
  }
}
export class CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Aliases.Items'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Aliases.Items', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Logging.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Logging.Bucket'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Logging.Prefix'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_CreateStreamingDistributionWithTagsResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createStreamingDistributionWithTags',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingDistributionWithTags.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items') as unknown as string[];
  }
}
export class CloudFront_DeleteMonitoringSubscriptionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
}
export class CloudFront_GetCachePolicyResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cachePolicy(): CloudFront_GetCachePolicyResult_CachePolicy {
    return new CloudFront_GetCachePolicyResult_CachePolicy(this, 'CachePolicy', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetCachePolicyResult_CachePolicy extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.Id'),
        outputPath: 'CachePolicy.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.Id', props);
    return resource.getResponseField('CachePolicy.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.LastModifiedTime'),
        outputPath: 'CachePolicy.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.LastModifiedTime', props);
    return resource.getResponseField('CachePolicy.LastModifiedTime') as unknown as string;
  }
  public get cachePolicyConfig(): CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig {
    return new CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig(this, 'CachePolicyConfig', this.resources);
  }
}
export class CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.Comment'),
        outputPath: 'CachePolicy.CachePolicyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.Comment', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.Comment') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.Name'),
        outputPath: 'CachePolicy.CachePolicyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.Name', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.Name') as unknown as string;
  }
  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.DefaultTTL'),
        outputPath: 'CachePolicy.CachePolicyConfig.DefaultTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.DefaultTTL', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.DefaultTTL') as unknown as number;
  }
  public get maxTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.MaxTTL'),
        outputPath: 'CachePolicy.CachePolicyConfig.MaxTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.MaxTTL', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.MaxTTL') as unknown as number;
  }
  public get minTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.MinTTL'),
        outputPath: 'CachePolicy.CachePolicyConfig.MinTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.MinTTL', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.MinTTL') as unknown as number;
  }
  public get parametersInCacheKeyAndForwardedToOrigin(): CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin {
    return new CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin(this, 'ParametersInCacheKeyAndForwardedToOrigin', this.resources);
  }
}
export class CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enableAcceptEncodingGzip(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip') as unknown as boolean;
  }
  public get enableAcceptEncodingBrotli(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli') as unknown as boolean;
  }
  public get headersConfig(): CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig {
    return new CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig(this, 'CachePolicyHeadersConfig', this.resources);
  }
  public get cookiesConfig(): CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig {
    return new CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig(this, 'CachePolicyCookiesConfig', this.resources);
  }
  public get queryStringsConfig(): CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig {
    return new CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig(this, 'CachePolicyQueryStringsConfig', this.resources);
  }
}
export class CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get headerBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior') as unknown as string;
  }
  public get headers(): CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers {
    return new CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers(this, 'Headers', this.resources);
  }
}
export class CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cookieBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior') as unknown as string;
  }
  public get cookies(): CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames {
    return new CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items') as unknown as string[];
  }
}
export class CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryStringBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior') as unknown as string;
  }
  public get queryStrings(): CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames {
    return new CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames(this, 'QueryStringNames', this.resources);
  }
}
export class CloudFront_GetCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items') as unknown as string[];
  }
}
export class CloudFront_GetCachePolicyConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cachePolicyConfig(): CloudFront_GetCachePolicyConfigResult_CachePolicyConfig {
    return new CloudFront_GetCachePolicyConfigResult_CachePolicyConfig(this, 'CachePolicyConfig', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetCachePolicyConfigResult_CachePolicyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.Comment'),
        outputPath: 'CachePolicyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.Comment', props);
    return resource.getResponseField('CachePolicyConfig.Comment') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.Name'),
        outputPath: 'CachePolicyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.Name', props);
    return resource.getResponseField('CachePolicyConfig.Name') as unknown as string;
  }
  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.DefaultTTL'),
        outputPath: 'CachePolicyConfig.DefaultTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.DefaultTTL', props);
    return resource.getResponseField('CachePolicyConfig.DefaultTTL') as unknown as number;
  }
  public get maxTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.MaxTTL'),
        outputPath: 'CachePolicyConfig.MaxTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.MaxTTL', props);
    return resource.getResponseField('CachePolicyConfig.MaxTTL') as unknown as number;
  }
  public get minTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.MinTTL'),
        outputPath: 'CachePolicyConfig.MinTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.MinTTL', props);
    return resource.getResponseField('CachePolicyConfig.MinTTL') as unknown as number;
  }
  public get parametersInCacheKeyAndForwardedToOrigin(): CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin {
    return new CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin(this, 'ParametersInCacheKeyAndForwardedToOrigin', this.resources);
  }
}
export class CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enableAcceptEncodingGzip(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip') as unknown as boolean;
  }
  public get enableAcceptEncodingBrotli(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli') as unknown as boolean;
  }
  public get headersConfig(): CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig {
    return new CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig(this, 'CachePolicyHeadersConfig', this.resources);
  }
  public get cookiesConfig(): CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig {
    return new CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig(this, 'CachePolicyCookiesConfig', this.resources);
  }
  public get queryStringsConfig(): CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig {
    return new CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig(this, 'CachePolicyQueryStringsConfig', this.resources);
  }
}
export class CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get headerBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior') as unknown as string;
  }
  public get headers(): CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers {
    return new CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers(this, 'Headers', this.resources);
  }
}
export class CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cookieBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior') as unknown as string;
  }
  public get cookies(): CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames {
    return new CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items') as unknown as string[];
  }
}
export class CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryStringBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior') as unknown as string;
  }
  public get queryStrings(): CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames {
    return new CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames(this, 'QueryStringNames', this.resources);
  }
}
export class CloudFront_GetCachePolicyConfigResult_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCachePolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items'),
        outputPath: 'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCachePolicyConfig.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items', props);
    return resource.getResponseField('CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items') as unknown as string[];
  }
}
export class CloudFront_GetCloudFrontOriginAccessIdentityResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontOriginAccessIdentity(): CloudFront_GetCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity {
    return new CloudFront_GetCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity(this, 'CloudFrontOriginAccessIdentity', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCloudFrontOriginAccessIdentity.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFrontOriginAccessIdentity.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.Id'),
        outputPath: 'CloudFrontOriginAccessIdentity.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.Id', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.Id') as unknown as string;
  }
  public get s3CanonicalUserId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.S3CanonicalUserId'),
        outputPath: 'CloudFrontOriginAccessIdentity.S3CanonicalUserId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.S3CanonicalUserId', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.S3CanonicalUserId') as unknown as string;
  }
  public get cloudFrontOriginAccessIdentityConfig(): CloudFront_GetCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig {
    return new CloudFront_GetCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig(this, 'CloudFrontOriginAccessIdentityConfig', this.resources);
  }
}
export class CloudFront_GetCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference'),
        outputPath: 'CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment'),
        outputPath: 'CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment') as unknown as string;
  }
}
export class CloudFront_GetCloudFrontOriginAccessIdentityConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontOriginAccessIdentityConfig(): CloudFront_GetCloudFrontOriginAccessIdentityConfigResult_CloudFrontOriginAccessIdentityConfig {
    return new CloudFront_GetCloudFrontOriginAccessIdentityConfigResult_CloudFrontOriginAccessIdentityConfig(this, 'CloudFrontOriginAccessIdentityConfig', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCloudFrontOriginAccessIdentityConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCloudFrontOriginAccessIdentityConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFrontOriginAccessIdentityConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetCloudFrontOriginAccessIdentityConfigResult_CloudFrontOriginAccessIdentityConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCloudFrontOriginAccessIdentityConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCloudFrontOriginAccessIdentityConfig.CloudFrontOriginAccessIdentityConfig.CallerReference'),
        outputPath: 'CloudFrontOriginAccessIdentityConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFrontOriginAccessIdentityConfig.CloudFrontOriginAccessIdentityConfig.CallerReference', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentityConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getCloudFrontOriginAccessIdentityConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetCloudFrontOriginAccessIdentityConfig.CloudFrontOriginAccessIdentityConfig.Comment'),
        outputPath: 'CloudFrontOriginAccessIdentityConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFrontOriginAccessIdentityConfig.CloudFrontOriginAccessIdentityConfig.Comment', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentityConfig.Comment') as unknown as string;
  }
}
export class CloudFront_GetDistributionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distribution(): CloudFront_GetDistributionResult_Distribution {
    return new CloudFront_GetDistributionResult_Distribution(this, 'Distribution', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetDistributionResult_Distribution extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.Id'),
        outputPath: 'Distribution.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.Id', props);
    return resource.getResponseField('Distribution.Id') as unknown as string;
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.ARN'),
        outputPath: 'Distribution.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.ARN', props);
    return resource.getResponseField('Distribution.ARN') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.Status'),
        outputPath: 'Distribution.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.Status', props);
    return resource.getResponseField('Distribution.Status') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.LastModifiedTime'),
        outputPath: 'Distribution.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.LastModifiedTime', props);
    return resource.getResponseField('Distribution.LastModifiedTime') as unknown as string;
  }
  public get inProgressInvalidationBatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.InProgressInvalidationBatches'),
        outputPath: 'Distribution.InProgressInvalidationBatches',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.InProgressInvalidationBatches', props);
    return resource.getResponseField('Distribution.InProgressInvalidationBatches') as unknown as number;
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DomainName'),
        outputPath: 'Distribution.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DomainName', props);
    return resource.getResponseField('Distribution.DomainName') as unknown as string;
  }
  public get activeTrustedSigners(): CloudFront_GetDistributionResult_Distribution_ActiveTrustedSigners {
    return new CloudFront_GetDistributionResult_Distribution_ActiveTrustedSigners(this, 'ActiveTrustedSigners', this.resources);
  }
  public get activeTrustedKeyGroups(): CloudFront_GetDistributionResult_Distribution_ActiveTrustedKeyGroups {
    return new CloudFront_GetDistributionResult_Distribution_ActiveTrustedKeyGroups(this, 'ActiveTrustedKeyGroups', this.resources);
  }
  public get distributionConfig(): CloudFront_GetDistributionResult_Distribution_DistributionConfig {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig(this, 'DistributionConfig', this.resources);
  }
  public get aliasIcpRecordals(): shapes.AliasIcpRecordal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.AliasICPRecordals'),
        outputPath: 'Distribution.AliasICPRecordals',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.AliasICPRecordals', props);
    return resource.getResponseField('Distribution.AliasICPRecordals') as unknown as shapes.AliasIcpRecordal[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_ActiveTrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.ActiveTrustedSigners.Enabled'),
        outputPath: 'Distribution.ActiveTrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.ActiveTrustedSigners.Enabled', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.ActiveTrustedSigners.Quantity'),
        outputPath: 'Distribution.ActiveTrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.ActiveTrustedSigners.Quantity', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Quantity') as unknown as number;
  }
  public get items(): shapes.Signer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.ActiveTrustedSigners.Items'),
        outputPath: 'Distribution.ActiveTrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.ActiveTrustedSigners.Items', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Items') as unknown as shapes.Signer[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_ActiveTrustedKeyGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.ActiveTrustedKeyGroups.Enabled'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.ActiveTrustedKeyGroups.Enabled', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.ActiveTrustedKeyGroups.Quantity'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.ActiveTrustedKeyGroups.Quantity', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Quantity') as unknown as number;
  }
  public get items(): shapes.KgKeyPairIds[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.ActiveTrustedKeyGroups.Items'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.ActiveTrustedKeyGroups.Items', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Items') as unknown as shapes.KgKeyPairIds[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.CallerReference'),
        outputPath: 'Distribution.DistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.CallerReference', props);
    return resource.getResponseField('Distribution.DistributionConfig.CallerReference') as unknown as string;
  }
  public get aliases(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_Aliases {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get defaultRootObject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultRootObject'),
        outputPath: 'Distribution.DistributionConfig.DefaultRootObject',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultRootObject', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultRootObject') as unknown as string;
  }
  public get origins(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_Origins {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_Origins(this, 'Origins', this.resources);
  }
  public get originGroups(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_OriginGroups {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_OriginGroups(this, 'OriginGroups', this.resources);
  }
  public get defaultCacheBehavior(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior(this, 'DefaultCacheBehavior', this.resources);
  }
  public get cacheBehaviors(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_CacheBehaviors {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_CacheBehaviors(this, 'CacheBehaviors', this.resources);
  }
  public get customErrorResponses(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_CustomErrorResponses {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_CustomErrorResponses(this, 'CustomErrorResponses', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Comment'),
        outputPath: 'Distribution.DistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Comment', props);
    return resource.getResponseField('Distribution.DistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_LoggingConfig {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_LoggingConfig(this, 'LoggingConfig', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.PriceClass'),
        outputPath: 'Distribution.DistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.PriceClass', props);
    return resource.getResponseField('Distribution.DistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Enabled'),
        outputPath: 'Distribution.DistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.Enabled') as unknown as boolean;
  }
  public get viewerCertificate(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_ViewerCertificate {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_ViewerCertificate(this, 'ViewerCertificate', this.resources);
  }
  public get restrictions(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_Restrictions {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_Restrictions(this, 'Restrictions', this.resources);
  }
  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.WebACLId'),
        outputPath: 'Distribution.DistributionConfig.WebACLId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.WebACLId', props);
    return resource.getResponseField('Distribution.DistributionConfig.WebACLId') as unknown as string;
  }
  public get httpVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.HttpVersion'),
        outputPath: 'Distribution.DistributionConfig.HttpVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.HttpVersion', props);
    return resource.getResponseField('Distribution.DistributionConfig.HttpVersion') as unknown as string;
  }
  public get isIpv6Enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.IsIPV6Enabled'),
        outputPath: 'Distribution.DistributionConfig.IsIPV6Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.IsIPV6Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.IsIPV6Enabled') as unknown as boolean;
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Aliases.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Aliases.Items'),
        outputPath: 'Distribution.DistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Aliases.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_Origins extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Origins.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Origins.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Origins.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Origins.Quantity') as unknown as number;
  }
  public get items(): shapes.Origin[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Origins.Items'),
        outputPath: 'Distribution.DistributionConfig.Origins.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Origins.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Origins.Items') as unknown as shapes.Origin[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_OriginGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.OriginGroups.Quantity'),
        outputPath: 'Distribution.DistributionConfig.OriginGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.OriginGroups.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.OriginGroups.Quantity') as unknown as number;
  }
  public get items(): shapes.OriginGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.OriginGroups.Items'),
        outputPath: 'Distribution.DistributionConfig.OriginGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.OriginGroups.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.OriginGroups.Items') as unknown as shapes.OriginGroup[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get targetOriginId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId') as unknown as string;
  }
  public get trustedSigners(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get trustedKeyGroups(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups(this, 'TrustedKeyGroups', this.resources);
  }
  public get viewerProtocolPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy') as unknown as string;
  }
  public get allowedMethods(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods(this, 'AllowedMethods', this.resources);
  }
  public get smoothStreaming(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming') as unknown as boolean;
  }
  public get compress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.Compress'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.Compress',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.Compress', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.Compress') as unknown as boolean;
  }
  public get lambdaFunctionAssociations(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations(this, 'LambdaFunctionAssociations', this.resources);
  }
  public get fieldLevelEncryptionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId') as unknown as string;
  }
  public get realtimeLogConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn') as unknown as string;
  }
  public get cachePolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId') as unknown as string;
  }
  public get originRequestPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId') as unknown as string;
  }
  public get forwardedValues(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues(this, 'ForwardedValues', this.resources);
  }
  public get minTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL') as unknown as number;
  }
  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL') as unknown as number;
  }
  public get maxTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL') as unknown as number;
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items') as unknown as string[];
  }
  public get cachedMethods(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods(this, 'CachedMethods', this.resources);
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity') as unknown as number;
  }
  public get items(): shapes.LambdaFunctionAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items') as unknown as shapes.LambdaFunctionAssociation[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryString(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString') as unknown as boolean;
  }
  public get cookies(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference(this, 'CookiePreference', this.resources);
  }
  public get headers(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers(this, 'Headers', this.resources);
  }
  public get queryStringCacheKeys(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys(this, 'QueryStringCacheKeys', this.resources);
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forward(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward') as unknown as string;
  }
  public get whitelistedNames(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_CacheBehaviors extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.CacheBehaviors.Quantity'),
        outputPath: 'Distribution.DistributionConfig.CacheBehaviors.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.CacheBehaviors.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.CacheBehaviors.Quantity') as unknown as number;
  }
  public get items(): shapes.CacheBehavior[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.CacheBehaviors.Items'),
        outputPath: 'Distribution.DistributionConfig.CacheBehaviors.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.CacheBehaviors.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.CacheBehaviors.Items') as unknown as shapes.CacheBehavior[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_CustomErrorResponses extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.CustomErrorResponses.Quantity'),
        outputPath: 'Distribution.DistributionConfig.CustomErrorResponses.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.CustomErrorResponses.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.CustomErrorResponses.Quantity') as unknown as number;
  }
  public get items(): shapes.CustomErrorResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.CustomErrorResponses.Items'),
        outputPath: 'Distribution.DistributionConfig.CustomErrorResponses.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.CustomErrorResponses.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.CustomErrorResponses.Items') as unknown as shapes.CustomErrorResponse[];
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_LoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Logging.Enabled'),
        outputPath: 'Distribution.DistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get includeCookies(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Logging.IncludeCookies'),
        outputPath: 'Distribution.DistributionConfig.Logging.IncludeCookies',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Logging.IncludeCookies', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.IncludeCookies') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Logging.Bucket'),
        outputPath: 'Distribution.DistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Logging.Prefix'),
        outputPath: 'Distribution.DistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_ViewerCertificate extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontDefaultCertificate(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate') as unknown as boolean;
  }
  public get iamCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId') as unknown as string;
  }
  public get acmCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn') as unknown as string;
  }
  public get sslSupportMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod') as unknown as string;
  }
  public get minimumProtocolVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion') as unknown as string;
  }
  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.ViewerCertificate.Certificate'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.Certificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.ViewerCertificate.Certificate', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.Certificate') as unknown as string;
  }
  public get certificateSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.ViewerCertificate.CertificateSource'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.CertificateSource',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.ViewerCertificate.CertificateSource', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.CertificateSource') as unknown as string;
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_Restrictions extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get geoRestriction(): CloudFront_GetDistributionResult_Distribution_DistributionConfig_Restrictions_GeoRestriction {
    return new CloudFront_GetDistributionResult_Distribution_DistributionConfig_Restrictions_GeoRestriction(this, 'GeoRestriction', this.resources);
  }
}
export class CloudFront_GetDistributionResult_Distribution_DistributionConfig_Restrictions_GeoRestriction extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get restrictionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType') as unknown as string;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Items'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distributionConfig(): CloudFront_GetDistributionConfigResult_DistributionConfig {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig(this, 'DistributionConfig', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.CallerReference'),
        outputPath: 'DistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.CallerReference', props);
    return resource.getResponseField('DistributionConfig.CallerReference') as unknown as string;
  }
  public get aliases(): CloudFront_GetDistributionConfigResult_DistributionConfig_Aliases {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get defaultRootObject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultRootObject'),
        outputPath: 'DistributionConfig.DefaultRootObject',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultRootObject', props);
    return resource.getResponseField('DistributionConfig.DefaultRootObject') as unknown as string;
  }
  public get origins(): CloudFront_GetDistributionConfigResult_DistributionConfig_Origins {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_Origins(this, 'Origins', this.resources);
  }
  public get originGroups(): CloudFront_GetDistributionConfigResult_DistributionConfig_OriginGroups {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_OriginGroups(this, 'OriginGroups', this.resources);
  }
  public get defaultCacheBehavior(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior(this, 'DefaultCacheBehavior', this.resources);
  }
  public get cacheBehaviors(): CloudFront_GetDistributionConfigResult_DistributionConfig_CacheBehaviors {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_CacheBehaviors(this, 'CacheBehaviors', this.resources);
  }
  public get customErrorResponses(): CloudFront_GetDistributionConfigResult_DistributionConfig_CustomErrorResponses {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_CustomErrorResponses(this, 'CustomErrorResponses', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Comment'),
        outputPath: 'DistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Comment', props);
    return resource.getResponseField('DistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_GetDistributionConfigResult_DistributionConfig_LoggingConfig {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_LoggingConfig(this, 'LoggingConfig', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.PriceClass'),
        outputPath: 'DistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.PriceClass', props);
    return resource.getResponseField('DistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Enabled'),
        outputPath: 'DistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Enabled', props);
    return resource.getResponseField('DistributionConfig.Enabled') as unknown as boolean;
  }
  public get viewerCertificate(): CloudFront_GetDistributionConfigResult_DistributionConfig_ViewerCertificate {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_ViewerCertificate(this, 'ViewerCertificate', this.resources);
  }
  public get restrictions(): CloudFront_GetDistributionConfigResult_DistributionConfig_Restrictions {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_Restrictions(this, 'Restrictions', this.resources);
  }
  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.WebACLId'),
        outputPath: 'DistributionConfig.WebACLId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.WebACLId', props);
    return resource.getResponseField('DistributionConfig.WebACLId') as unknown as string;
  }
  public get httpVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.HttpVersion'),
        outputPath: 'DistributionConfig.HttpVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.HttpVersion', props);
    return resource.getResponseField('DistributionConfig.HttpVersion') as unknown as string;
  }
  public get isIpv6Enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.IsIPV6Enabled'),
        outputPath: 'DistributionConfig.IsIPV6Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.IsIPV6Enabled', props);
    return resource.getResponseField('DistributionConfig.IsIPV6Enabled') as unknown as boolean;
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Aliases.Quantity'),
        outputPath: 'DistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('DistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Aliases.Items'),
        outputPath: 'DistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Aliases.Items', props);
    return resource.getResponseField('DistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_Origins extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Origins.Quantity'),
        outputPath: 'DistributionConfig.Origins.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Origins.Quantity', props);
    return resource.getResponseField('DistributionConfig.Origins.Quantity') as unknown as number;
  }
  public get items(): shapes.Origin[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Origins.Items'),
        outputPath: 'DistributionConfig.Origins.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Origins.Items', props);
    return resource.getResponseField('DistributionConfig.Origins.Items') as unknown as shapes.Origin[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_OriginGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.OriginGroups.Quantity'),
        outputPath: 'DistributionConfig.OriginGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.OriginGroups.Quantity', props);
    return resource.getResponseField('DistributionConfig.OriginGroups.Quantity') as unknown as number;
  }
  public get items(): shapes.OriginGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.OriginGroups.Items'),
        outputPath: 'DistributionConfig.OriginGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.OriginGroups.Items', props);
    return resource.getResponseField('DistributionConfig.OriginGroups.Items') as unknown as shapes.OriginGroup[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get targetOriginId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TargetOriginId'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.TargetOriginId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TargetOriginId', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.TargetOriginId') as unknown as string;
  }
  public get trustedSigners(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_TrustedSigners {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get trustedKeyGroups(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups(this, 'TrustedKeyGroups', this.resources);
  }
  public get viewerProtocolPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy') as unknown as string;
  }
  public get allowedMethods(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_AllowedMethods {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_AllowedMethods(this, 'AllowedMethods', this.resources);
  }
  public get smoothStreaming(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.SmoothStreaming'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.SmoothStreaming',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.SmoothStreaming', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.SmoothStreaming') as unknown as boolean;
  }
  public get compress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.Compress'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.Compress',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.Compress', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.Compress') as unknown as boolean;
  }
  public get lambdaFunctionAssociations(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations(this, 'LambdaFunctionAssociations', this.resources);
  }
  public get fieldLevelEncryptionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId') as unknown as string;
  }
  public get realtimeLogConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn') as unknown as string;
  }
  public get cachePolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.CachePolicyId'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.CachePolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.CachePolicyId', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.CachePolicyId') as unknown as string;
  }
  public get originRequestPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId') as unknown as string;
  }
  public get forwardedValues(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues(this, 'ForwardedValues', this.resources);
  }
  public get minTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.MinTTL'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.MinTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.MinTTL', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.MinTTL') as unknown as number;
  }
  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.DefaultTTL'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.DefaultTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.DefaultTTL', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.DefaultTTL') as unknown as number;
  }
  public get maxTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.MaxTTL'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.MaxTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.MaxTTL', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.MaxTTL') as unknown as number;
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_AllowedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items') as unknown as string[];
  }
  public get cachedMethods(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods(this, 'CachedMethods', this.resources);
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity') as unknown as number;
  }
  public get items(): shapes.LambdaFunctionAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items') as unknown as shapes.LambdaFunctionAssociation[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryString(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString') as unknown as boolean;
  }
  public get cookies(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference(this, 'CookiePreference', this.resources);
  }
  public get headers(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers(this, 'Headers', this.resources);
  }
  public get queryStringCacheKeys(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys(this, 'QueryStringCacheKeys', this.resources);
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forward(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward') as unknown as string;
  }
  public get whitelistedNames(): CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items'),
        outputPath: 'DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items', props);
    return resource.getResponseField('DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items') as unknown as string[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_CacheBehaviors extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.CacheBehaviors.Quantity'),
        outputPath: 'DistributionConfig.CacheBehaviors.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.CacheBehaviors.Quantity', props);
    return resource.getResponseField('DistributionConfig.CacheBehaviors.Quantity') as unknown as number;
  }
  public get items(): shapes.CacheBehavior[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.CacheBehaviors.Items'),
        outputPath: 'DistributionConfig.CacheBehaviors.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.CacheBehaviors.Items', props);
    return resource.getResponseField('DistributionConfig.CacheBehaviors.Items') as unknown as shapes.CacheBehavior[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_CustomErrorResponses extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.CustomErrorResponses.Quantity'),
        outputPath: 'DistributionConfig.CustomErrorResponses.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.CustomErrorResponses.Quantity', props);
    return resource.getResponseField('DistributionConfig.CustomErrorResponses.Quantity') as unknown as number;
  }
  public get items(): shapes.CustomErrorResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.CustomErrorResponses.Items'),
        outputPath: 'DistributionConfig.CustomErrorResponses.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.CustomErrorResponses.Items', props);
    return resource.getResponseField('DistributionConfig.CustomErrorResponses.Items') as unknown as shapes.CustomErrorResponse[];
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_LoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Logging.Enabled'),
        outputPath: 'DistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('DistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get includeCookies(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Logging.IncludeCookies'),
        outputPath: 'DistributionConfig.Logging.IncludeCookies',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Logging.IncludeCookies', props);
    return resource.getResponseField('DistributionConfig.Logging.IncludeCookies') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Logging.Bucket'),
        outputPath: 'DistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('DistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Logging.Prefix'),
        outputPath: 'DistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('DistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_ViewerCertificate extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontDefaultCertificate(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate'),
        outputPath: 'DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate', props);
    return resource.getResponseField('DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate') as unknown as boolean;
  }
  public get iamCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.ViewerCertificate.IAMCertificateId'),
        outputPath: 'DistributionConfig.ViewerCertificate.IAMCertificateId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.ViewerCertificate.IAMCertificateId', props);
    return resource.getResponseField('DistributionConfig.ViewerCertificate.IAMCertificateId') as unknown as string;
  }
  public get acmCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.ViewerCertificate.ACMCertificateArn'),
        outputPath: 'DistributionConfig.ViewerCertificate.ACMCertificateArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.ViewerCertificate.ACMCertificateArn', props);
    return resource.getResponseField('DistributionConfig.ViewerCertificate.ACMCertificateArn') as unknown as string;
  }
  public get sslSupportMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.ViewerCertificate.SSLSupportMethod'),
        outputPath: 'DistributionConfig.ViewerCertificate.SSLSupportMethod',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.ViewerCertificate.SSLSupportMethod', props);
    return resource.getResponseField('DistributionConfig.ViewerCertificate.SSLSupportMethod') as unknown as string;
  }
  public get minimumProtocolVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.ViewerCertificate.MinimumProtocolVersion'),
        outputPath: 'DistributionConfig.ViewerCertificate.MinimumProtocolVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.ViewerCertificate.MinimumProtocolVersion', props);
    return resource.getResponseField('DistributionConfig.ViewerCertificate.MinimumProtocolVersion') as unknown as string;
  }
  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.ViewerCertificate.Certificate'),
        outputPath: 'DistributionConfig.ViewerCertificate.Certificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.ViewerCertificate.Certificate', props);
    return resource.getResponseField('DistributionConfig.ViewerCertificate.Certificate') as unknown as string;
  }
  public get certificateSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.ViewerCertificate.CertificateSource'),
        outputPath: 'DistributionConfig.ViewerCertificate.CertificateSource',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.ViewerCertificate.CertificateSource', props);
    return resource.getResponseField('DistributionConfig.ViewerCertificate.CertificateSource') as unknown as string;
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_Restrictions extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get geoRestriction(): CloudFront_GetDistributionConfigResult_DistributionConfig_Restrictions_GeoRestriction {
    return new CloudFront_GetDistributionConfigResult_DistributionConfig_Restrictions_GeoRestriction(this, 'GeoRestriction', this.resources);
  }
}
export class CloudFront_GetDistributionConfigResult_DistributionConfig_Restrictions_GeoRestriction extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get restrictionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Restrictions.GeoRestriction.RestrictionType'),
        outputPath: 'DistributionConfig.Restrictions.GeoRestriction.RestrictionType',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Restrictions.GeoRestriction.RestrictionType', props);
    return resource.getResponseField('DistributionConfig.Restrictions.GeoRestriction.RestrictionType') as unknown as string;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Restrictions.GeoRestriction.Quantity'),
        outputPath: 'DistributionConfig.Restrictions.GeoRestriction.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Restrictions.GeoRestriction.Quantity', props);
    return resource.getResponseField('DistributionConfig.Restrictions.GeoRestriction.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetDistributionConfig.DistributionConfig.Restrictions.GeoRestriction.Items'),
        outputPath: 'DistributionConfig.Restrictions.GeoRestriction.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfig.DistributionConfig.Restrictions.GeoRestriction.Items', props);
    return resource.getResponseField('DistributionConfig.Restrictions.GeoRestriction.Items') as unknown as string[];
  }
}
export class CloudFront_GetFieldLevelEncryptionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryption(): CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption {
    return new CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption(this, 'FieldLevelEncryption', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.Id'),
        outputPath: 'FieldLevelEncryption.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.Id', props);
    return resource.getResponseField('FieldLevelEncryption.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.LastModifiedTime'),
        outputPath: 'FieldLevelEncryption.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.LastModifiedTime', props);
    return resource.getResponseField('FieldLevelEncryption.LastModifiedTime') as unknown as string;
  }
  public get fieldLevelEncryptionConfig(): CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig {
    return new CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig(this, 'FieldLevelEncryptionConfig', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.Comment'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.Comment', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.Comment') as unknown as string;
  }
  public get queryArgProfileConfig(): CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig {
    return new CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig(this, 'QueryArgProfileConfig', this.resources);
  }
  public get contentTypeProfileConfig(): CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig {
    return new CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig(this, 'ContentTypeProfileConfig', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forwardWhenQueryArgProfileIsUnknown(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown') as unknown as boolean;
  }
  public get queryArgProfiles(): CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles {
    return new CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles(this, 'QueryArgProfiles', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity') as unknown as number;
  }
  public get items(): shapes.QueryArgProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items') as unknown as shapes.QueryArgProfile[];
  }
}
export class CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forwardWhenContentTypeIsUnknown(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown') as unknown as boolean;
  }
  public get contentTypeProfiles(): CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles {
    return new CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles(this, 'ContentTypeProfiles', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity') as unknown as number;
  }
  public get items(): shapes.ContentTypeProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryption',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryption.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items') as unknown as shapes.ContentTypeProfile[];
  }
}
export class CloudFront_GetFieldLevelEncryptionConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryptionConfig(): CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig {
    return new CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig(this, 'FieldLevelEncryptionConfig', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.CallerReference'),
        outputPath: 'FieldLevelEncryptionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.CallerReference', props);
    return resource.getResponseField('FieldLevelEncryptionConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.Comment'),
        outputPath: 'FieldLevelEncryptionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.Comment', props);
    return resource.getResponseField('FieldLevelEncryptionConfig.Comment') as unknown as string;
  }
  public get queryArgProfileConfig(): CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_QueryArgProfileConfig {
    return new CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_QueryArgProfileConfig(this, 'QueryArgProfileConfig', this.resources);
  }
  public get contentTypeProfileConfig(): CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_ContentTypeProfileConfig {
    return new CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_ContentTypeProfileConfig(this, 'ContentTypeProfileConfig', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_QueryArgProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forwardWhenQueryArgProfileIsUnknown(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown'),
        outputPath: 'FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown', props);
    return resource.getResponseField('FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown') as unknown as boolean;
  }
  public get queryArgProfiles(): CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles {
    return new CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles(this, 'QueryArgProfiles', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity'),
        outputPath: 'FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity', props);
    return resource.getResponseField('FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity') as unknown as number;
  }
  public get items(): shapes.QueryArgProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items'),
        outputPath: 'FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items', props);
    return resource.getResponseField('FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items') as unknown as shapes.QueryArgProfile[];
  }
}
export class CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_ContentTypeProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forwardWhenContentTypeIsUnknown(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown'),
        outputPath: 'FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown', props);
    return resource.getResponseField('FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown') as unknown as boolean;
  }
  public get contentTypeProfiles(): CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles {
    return new CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles(this, 'ContentTypeProfiles', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionConfigResult_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity'),
        outputPath: 'FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity', props);
    return resource.getResponseField('FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity') as unknown as number;
  }
  public get items(): shapes.ContentTypeProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items'),
        outputPath: 'FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionConfig.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items', props);
    return resource.getResponseField('FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items') as unknown as shapes.ContentTypeProfile[];
  }
}
export class CloudFront_GetFieldLevelEncryptionProfileResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryptionProfile(): CloudFront_GetFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile {
    return new CloudFront_GetFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile(this, 'FieldLevelEncryptionProfile', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfile.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfile.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.Id'),
        outputPath: 'FieldLevelEncryptionProfile.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.Id', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.LastModifiedTime'),
        outputPath: 'FieldLevelEncryptionProfile.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.LastModifiedTime', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.LastModifiedTime') as unknown as string;
  }
  public get fieldLevelEncryptionProfileConfig(): CloudFront_GetFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig {
    return new CloudFront_GetFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig(this, 'FieldLevelEncryptionProfileConfig', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name') as unknown as string;
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment') as unknown as string;
  }
  public get encryptionEntities(): CloudFront_GetFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig_EncryptionEntities {
    return new CloudFront_GetFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig_EncryptionEntities(this, 'EncryptionEntities', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig_EncryptionEntities extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity') as unknown as number;
  }
  public get items(): shapes.EncryptionEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items') as unknown as shapes.EncryptionEntity[];
  }
}
export class CloudFront_GetFieldLevelEncryptionProfileConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryptionProfileConfig(): CloudFront_GetFieldLevelEncryptionProfileConfigResult_FieldLevelEncryptionProfileConfig {
    return new CloudFront_GetFieldLevelEncryptionProfileConfigResult_FieldLevelEncryptionProfileConfig(this, 'FieldLevelEncryptionProfileConfig', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfileConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfileConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfileConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetFieldLevelEncryptionProfileConfigResult_FieldLevelEncryptionProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfileConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.Name'),
        outputPath: 'FieldLevelEncryptionProfileConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.Name', props);
    return resource.getResponseField('FieldLevelEncryptionProfileConfig.Name') as unknown as string;
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfileConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.CallerReference'),
        outputPath: 'FieldLevelEncryptionProfileConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.CallerReference', props);
    return resource.getResponseField('FieldLevelEncryptionProfileConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfileConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.Comment'),
        outputPath: 'FieldLevelEncryptionProfileConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.Comment', props);
    return resource.getResponseField('FieldLevelEncryptionProfileConfig.Comment') as unknown as string;
  }
  public get encryptionEntities(): CloudFront_GetFieldLevelEncryptionProfileConfigResult_FieldLevelEncryptionProfileConfig_EncryptionEntities {
    return new CloudFront_GetFieldLevelEncryptionProfileConfigResult_FieldLevelEncryptionProfileConfig_EncryptionEntities(this, 'EncryptionEntities', this.resources);
  }
}
export class CloudFront_GetFieldLevelEncryptionProfileConfigResult_FieldLevelEncryptionProfileConfig_EncryptionEntities extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfileConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity'),
        outputPath: 'FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity', props);
    return resource.getResponseField('FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity') as unknown as number;
  }
  public get items(): shapes.EncryptionEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getFieldLevelEncryptionProfileConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items'),
        outputPath: 'FieldLevelEncryptionProfileConfig.EncryptionEntities.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFieldLevelEncryptionProfileConfig.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items', props);
    return resource.getResponseField('FieldLevelEncryptionProfileConfig.EncryptionEntities.Items') as unknown as shapes.EncryptionEntity[];
  }
}
export class CloudFront_GetInvalidationResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get invalidation(): CloudFront_GetInvalidationResult_Invalidation {
    return new CloudFront_GetInvalidationResult_Invalidation(this, 'Invalidation', this.resources);
  }
}
export class CloudFront_GetInvalidationResult_Invalidation extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetInvalidation.Invalidation.Id'),
        outputPath: 'Invalidation.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInvalidation.Invalidation.Id', props);
    return resource.getResponseField('Invalidation.Id') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetInvalidation.Invalidation.Status'),
        outputPath: 'Invalidation.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInvalidation.Invalidation.Status', props);
    return resource.getResponseField('Invalidation.Status') as unknown as string;
  }
  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetInvalidation.Invalidation.CreateTime'),
        outputPath: 'Invalidation.CreateTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInvalidation.Invalidation.CreateTime', props);
    return resource.getResponseField('Invalidation.CreateTime') as unknown as string;
  }
  public get invalidationBatch(): CloudFront_GetInvalidationResult_Invalidation_InvalidationBatch {
    return new CloudFront_GetInvalidationResult_Invalidation_InvalidationBatch(this, 'InvalidationBatch', this.resources);
  }
}
export class CloudFront_GetInvalidationResult_Invalidation_InvalidationBatch extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get paths(): CloudFront_GetInvalidationResult_Invalidation_InvalidationBatch_Paths {
    return new CloudFront_GetInvalidationResult_Invalidation_InvalidationBatch_Paths(this, 'Paths', this.resources);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetInvalidation.Invalidation.InvalidationBatch.CallerReference'),
        outputPath: 'Invalidation.InvalidationBatch.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInvalidation.Invalidation.InvalidationBatch.CallerReference', props);
    return resource.getResponseField('Invalidation.InvalidationBatch.CallerReference') as unknown as string;
  }
}
export class CloudFront_GetInvalidationResult_Invalidation_InvalidationBatch_Paths extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetInvalidation.Invalidation.InvalidationBatch.Paths.Quantity'),
        outputPath: 'Invalidation.InvalidationBatch.Paths.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInvalidation.Invalidation.InvalidationBatch.Paths.Quantity', props);
    return resource.getResponseField('Invalidation.InvalidationBatch.Paths.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInvalidation',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetInvalidation.Invalidation.InvalidationBatch.Paths.Items'),
        outputPath: 'Invalidation.InvalidationBatch.Paths.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInvalidation.Invalidation.InvalidationBatch.Paths.Items', props);
    return resource.getResponseField('Invalidation.InvalidationBatch.Paths.Items') as unknown as string[];
  }
}
export class CloudFront_GetKeyGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get keyGroup(): CloudFront_GetKeyGroupResult_KeyGroup {
    return new CloudFront_GetKeyGroupResult_KeyGroup(this, 'KeyGroup', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroup.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroup.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetKeyGroupResult_KeyGroup extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroup.KeyGroup.Id'),
        outputPath: 'KeyGroup.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroup.KeyGroup.Id', props);
    return resource.getResponseField('KeyGroup.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroup.KeyGroup.LastModifiedTime'),
        outputPath: 'KeyGroup.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroup.KeyGroup.LastModifiedTime', props);
    return resource.getResponseField('KeyGroup.LastModifiedTime') as unknown as string;
  }
  public get keyGroupConfig(): CloudFront_GetKeyGroupResult_KeyGroup_KeyGroupConfig {
    return new CloudFront_GetKeyGroupResult_KeyGroup_KeyGroupConfig(this, 'KeyGroupConfig', this.resources);
  }
}
export class CloudFront_GetKeyGroupResult_KeyGroup_KeyGroupConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroup.KeyGroup.KeyGroupConfig.Name'),
        outputPath: 'KeyGroup.KeyGroupConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroup.KeyGroup.KeyGroupConfig.Name', props);
    return resource.getResponseField('KeyGroup.KeyGroupConfig.Name') as unknown as string;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroup.KeyGroup.KeyGroupConfig.Items'),
        outputPath: 'KeyGroup.KeyGroupConfig.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroup.KeyGroup.KeyGroupConfig.Items', props);
    return resource.getResponseField('KeyGroup.KeyGroupConfig.Items') as unknown as string[];
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroup.KeyGroup.KeyGroupConfig.Comment'),
        outputPath: 'KeyGroup.KeyGroupConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroup.KeyGroup.KeyGroupConfig.Comment', props);
    return resource.getResponseField('KeyGroup.KeyGroupConfig.Comment') as unknown as string;
  }
}
export class CloudFront_GetKeyGroupConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get keyGroupConfig(): CloudFront_GetKeyGroupConfigResult_KeyGroupConfig {
    return new CloudFront_GetKeyGroupConfigResult_KeyGroupConfig(this, 'KeyGroupConfig', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroupConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroupConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroupConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetKeyGroupConfigResult_KeyGroupConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroupConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroupConfig.KeyGroupConfig.Name'),
        outputPath: 'KeyGroupConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroupConfig.KeyGroupConfig.Name', props);
    return resource.getResponseField('KeyGroupConfig.Name') as unknown as string;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroupConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroupConfig.KeyGroupConfig.Items'),
        outputPath: 'KeyGroupConfig.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroupConfig.KeyGroupConfig.Items', props);
    return resource.getResponseField('KeyGroupConfig.Items') as unknown as string[];
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getKeyGroupConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetKeyGroupConfig.KeyGroupConfig.Comment'),
        outputPath: 'KeyGroupConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyGroupConfig.KeyGroupConfig.Comment', props);
    return resource.getResponseField('KeyGroupConfig.Comment') as unknown as string;
  }
}
export class CloudFront_GetMonitoringSubscriptionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get monitoringSubscription(): CloudFront_GetMonitoringSubscriptionResult_MonitoringSubscription {
    return new CloudFront_GetMonitoringSubscriptionResult_MonitoringSubscription(this, 'MonitoringSubscription', this.resources);
  }
}
export class CloudFront_GetMonitoringSubscriptionResult_MonitoringSubscription extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get realtimeMetricsSubscriptionConfig(): CloudFront_GetMonitoringSubscriptionResult_MonitoringSubscription_RealtimeMetricsSubscriptionConfig {
    return new CloudFront_GetMonitoringSubscriptionResult_MonitoringSubscription_RealtimeMetricsSubscriptionConfig(this, 'RealtimeMetricsSubscriptionConfig', this.resources);
  }
}
export class CloudFront_GetMonitoringSubscriptionResult_MonitoringSubscription_RealtimeMetricsSubscriptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get realtimeMetricsSubscriptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getMonitoringSubscription',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetMonitoringSubscription.MonitoringSubscription.RealtimeMetricsSubscriptionConfig.RealtimeMetricsSubscriptionStatus'),
        outputPath: 'MonitoringSubscription.RealtimeMetricsSubscriptionConfig.RealtimeMetricsSubscriptionStatus',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMonitoringSubscription.MonitoringSubscription.RealtimeMetricsSubscriptionConfig.RealtimeMetricsSubscriptionStatus', props);
    return resource.getResponseField('MonitoringSubscription.RealtimeMetricsSubscriptionConfig.RealtimeMetricsSubscriptionStatus') as unknown as string;
  }
}
export class CloudFront_GetOriginRequestPolicyResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get originRequestPolicy(): CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy {
    return new CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy(this, 'OriginRequestPolicy', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.Id'),
        outputPath: 'OriginRequestPolicy.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.Id', props);
    return resource.getResponseField('OriginRequestPolicy.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.LastModifiedTime'),
        outputPath: 'OriginRequestPolicy.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.LastModifiedTime', props);
    return resource.getResponseField('OriginRequestPolicy.LastModifiedTime') as unknown as string;
  }
  public get originRequestPolicyConfig(): CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig {
    return new CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig(this, 'OriginRequestPolicyConfig', this.resources);
  }
}
export class CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Comment'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Comment', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.Comment') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Name'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Name', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.Name') as unknown as string;
  }
  public get headersConfig(): CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig {
    return new CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig(this, 'OriginRequestPolicyHeadersConfig', this.resources);
  }
  public get cookiesConfig(): CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig {
    return new CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig(this, 'OriginRequestPolicyCookiesConfig', this.resources);
  }
  public get queryStringsConfig(): CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig {
    return new CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig(this, 'OriginRequestPolicyQueryStringsConfig', this.resources);
  }
}
export class CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get headerBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior') as unknown as string;
  }
  public get headers(): CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers {
    return new CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers(this, 'Headers', this.resources);
  }
}
export class CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cookieBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior') as unknown as string;
  }
  public get cookies(): CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames {
    return new CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items') as unknown as string[];
  }
}
export class CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryStringBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior') as unknown as string;
  }
  public get queryStrings(): CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames {
    return new CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames(this, 'QueryStringNames', this.resources);
  }
}
export class CloudFront_GetOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items') as unknown as string[];
  }
}
export class CloudFront_GetOriginRequestPolicyConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get originRequestPolicyConfig(): CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig {
    return new CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig(this, 'OriginRequestPolicyConfig', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.Comment'),
        outputPath: 'OriginRequestPolicyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.Comment', props);
    return resource.getResponseField('OriginRequestPolicyConfig.Comment') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.Name'),
        outputPath: 'OriginRequestPolicyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.Name', props);
    return resource.getResponseField('OriginRequestPolicyConfig.Name') as unknown as string;
  }
  public get headersConfig(): CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig {
    return new CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig(this, 'OriginRequestPolicyHeadersConfig', this.resources);
  }
  public get cookiesConfig(): CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig {
    return new CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig(this, 'OriginRequestPolicyCookiesConfig', this.resources);
  }
  public get queryStringsConfig(): CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig {
    return new CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig(this, 'OriginRequestPolicyQueryStringsConfig', this.resources);
  }
}
export class CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get headerBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior'),
        outputPath: 'OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior', props);
    return resource.getResponseField('OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior') as unknown as string;
  }
  public get headers(): CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers {
    return new CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers(this, 'Headers', this.resources);
  }
}
export class CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity'),
        outputPath: 'OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity', props);
    return resource.getResponseField('OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.HeadersConfig.Headers.Items'),
        outputPath: 'OriginRequestPolicyConfig.HeadersConfig.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.HeadersConfig.Headers.Items', props);
    return resource.getResponseField('OriginRequestPolicyConfig.HeadersConfig.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cookieBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior'),
        outputPath: 'OriginRequestPolicyConfig.CookiesConfig.CookieBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior', props);
    return resource.getResponseField('OriginRequestPolicyConfig.CookiesConfig.CookieBehavior') as unknown as string;
  }
  public get cookies(): CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames {
    return new CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity'),
        outputPath: 'OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity', props);
    return resource.getResponseField('OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items'),
        outputPath: 'OriginRequestPolicyConfig.CookiesConfig.Cookies.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items', props);
    return resource.getResponseField('OriginRequestPolicyConfig.CookiesConfig.Cookies.Items') as unknown as string[];
  }
}
export class CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryStringBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior'),
        outputPath: 'OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior', props);
    return resource.getResponseField('OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior') as unknown as string;
  }
  public get queryStrings(): CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames {
    return new CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames(this, 'QueryStringNames', this.resources);
  }
}
export class CloudFront_GetOriginRequestPolicyConfigResult_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity'),
        outputPath: 'OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity', props);
    return resource.getResponseField('OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getOriginRequestPolicyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items'),
        outputPath: 'OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOriginRequestPolicyConfig.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items', props);
    return resource.getResponseField('OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items') as unknown as string[];
  }
}
export class CloudFront_GetPublicKeyResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get publicKey(): CloudFront_GetPublicKeyResult_PublicKey {
    return new CloudFront_GetPublicKeyResult_PublicKey(this, 'PublicKey', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKey.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetPublicKeyResult_PublicKey extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKey.PublicKey.Id'),
        outputPath: 'PublicKey.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.PublicKey.Id', props);
    return resource.getResponseField('PublicKey.Id') as unknown as string;
  }
  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKey.PublicKey.CreatedTime'),
        outputPath: 'PublicKey.CreatedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.PublicKey.CreatedTime', props);
    return resource.getResponseField('PublicKey.CreatedTime') as unknown as string;
  }
  public get publicKeyConfig(): CloudFront_GetPublicKeyResult_PublicKey_PublicKeyConfig {
    return new CloudFront_GetPublicKeyResult_PublicKey_PublicKeyConfig(this, 'PublicKeyConfig', this.resources);
  }
}
export class CloudFront_GetPublicKeyResult_PublicKey_PublicKeyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKey.PublicKey.PublicKeyConfig.CallerReference'),
        outputPath: 'PublicKey.PublicKeyConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.PublicKey.PublicKeyConfig.CallerReference', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.CallerReference') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKey.PublicKey.PublicKeyConfig.Name'),
        outputPath: 'PublicKey.PublicKeyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.PublicKey.PublicKeyConfig.Name', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.Name') as unknown as string;
  }
  public get encodedKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKey.PublicKey.PublicKeyConfig.EncodedKey'),
        outputPath: 'PublicKey.PublicKeyConfig.EncodedKey',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.PublicKey.PublicKeyConfig.EncodedKey', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.EncodedKey') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKey.PublicKey.PublicKeyConfig.Comment'),
        outputPath: 'PublicKey.PublicKeyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.PublicKey.PublicKeyConfig.Comment', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.Comment') as unknown as string;
  }
}
export class CloudFront_GetPublicKeyConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get publicKeyConfig(): CloudFront_GetPublicKeyConfigResult_PublicKeyConfig {
    return new CloudFront_GetPublicKeyConfigResult_PublicKeyConfig(this, 'PublicKeyConfig', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKeyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKeyConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKeyConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetPublicKeyConfigResult_PublicKeyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKeyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKeyConfig.PublicKeyConfig.CallerReference'),
        outputPath: 'PublicKeyConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKeyConfig.PublicKeyConfig.CallerReference', props);
    return resource.getResponseField('PublicKeyConfig.CallerReference') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKeyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKeyConfig.PublicKeyConfig.Name'),
        outputPath: 'PublicKeyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKeyConfig.PublicKeyConfig.Name', props);
    return resource.getResponseField('PublicKeyConfig.Name') as unknown as string;
  }
  public get encodedKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKeyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKeyConfig.PublicKeyConfig.EncodedKey'),
        outputPath: 'PublicKeyConfig.EncodedKey',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKeyConfig.PublicKeyConfig.EncodedKey', props);
    return resource.getResponseField('PublicKeyConfig.EncodedKey') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getPublicKeyConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetPublicKeyConfig.PublicKeyConfig.Comment'),
        outputPath: 'PublicKeyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKeyConfig.PublicKeyConfig.Comment', props);
    return resource.getResponseField('PublicKeyConfig.Comment') as unknown as string;
  }
}
export class CloudFront_GetRealtimeLogConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get realtimeLogConfig(): CloudFront_GetRealtimeLogConfigResult_RealtimeLogConfig {
    return new CloudFront_GetRealtimeLogConfigResult_RealtimeLogConfig(this, 'RealtimeLogConfig', this.resources);
  }
}
export class CloudFront_GetRealtimeLogConfigResult_RealtimeLogConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetRealtimeLogConfig.RealtimeLogConfig.ARN'),
        outputPath: 'RealtimeLogConfig.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRealtimeLogConfig.RealtimeLogConfig.ARN', props);
    return resource.getResponseField('RealtimeLogConfig.ARN') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetRealtimeLogConfig.RealtimeLogConfig.Name'),
        outputPath: 'RealtimeLogConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRealtimeLogConfig.RealtimeLogConfig.Name', props);
    return resource.getResponseField('RealtimeLogConfig.Name') as unknown as string;
  }
  public get samplingRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetRealtimeLogConfig.RealtimeLogConfig.SamplingRate'),
        outputPath: 'RealtimeLogConfig.SamplingRate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRealtimeLogConfig.RealtimeLogConfig.SamplingRate', props);
    return resource.getResponseField('RealtimeLogConfig.SamplingRate') as unknown as number;
  }
  public get endPoints(): shapes.EndPoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetRealtimeLogConfig.RealtimeLogConfig.EndPoints'),
        outputPath: 'RealtimeLogConfig.EndPoints',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRealtimeLogConfig.RealtimeLogConfig.EndPoints', props);
    return resource.getResponseField('RealtimeLogConfig.EndPoints') as unknown as shapes.EndPoint[];
  }
  public get fields(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetRealtimeLogConfig.RealtimeLogConfig.Fields'),
        outputPath: 'RealtimeLogConfig.Fields',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRealtimeLogConfig.RealtimeLogConfig.Fields', props);
    return resource.getResponseField('RealtimeLogConfig.Fields') as unknown as string[];
  }
}
export class CloudFront_GetStreamingDistributionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get streamingDistribution(): CloudFront_GetStreamingDistributionResult_StreamingDistribution {
    return new CloudFront_GetStreamingDistributionResult_StreamingDistribution(this, 'StreamingDistribution', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetStreamingDistributionResult_StreamingDistribution extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.Id'),
        outputPath: 'StreamingDistribution.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.Id', props);
    return resource.getResponseField('StreamingDistribution.Id') as unknown as string;
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.ARN'),
        outputPath: 'StreamingDistribution.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.ARN', props);
    return resource.getResponseField('StreamingDistribution.ARN') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.Status'),
        outputPath: 'StreamingDistribution.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.Status', props);
    return resource.getResponseField('StreamingDistribution.Status') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.LastModifiedTime'),
        outputPath: 'StreamingDistribution.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.LastModifiedTime', props);
    return resource.getResponseField('StreamingDistribution.LastModifiedTime') as unknown as string;
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.DomainName'),
        outputPath: 'StreamingDistribution.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.DomainName', props);
    return resource.getResponseField('StreamingDistribution.DomainName') as unknown as string;
  }
  public get activeTrustedSigners(): CloudFront_GetStreamingDistributionResult_StreamingDistribution_ActiveTrustedSigners {
    return new CloudFront_GetStreamingDistributionResult_StreamingDistribution_ActiveTrustedSigners(this, 'ActiveTrustedSigners', this.resources);
  }
  public get streamingDistributionConfig(): CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig {
    return new CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig(this, 'StreamingDistributionConfig', this.resources);
  }
}
export class CloudFront_GetStreamingDistributionResult_StreamingDistribution_ActiveTrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Enabled'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Enabled', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Quantity'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Quantity', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Quantity') as unknown as number;
  }
  public get items(): shapes.Signer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Items'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Items', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Items') as unknown as shapes.Signer[];
  }
}
export class CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.CallerReference'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.CallerReference', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.CallerReference') as unknown as string;
  }
  public get s3Origin(): CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_S3Origin {
    return new CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_S3Origin(this, 'S3Origin', this.resources);
  }
  public get aliases(): CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_Aliases {
    return new CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Comment'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Comment', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig {
    return new CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig(this, 'StreamingLoggingConfig', this.resources);
  }
  public get trustedSigners(): CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners {
    return new CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.PriceClass'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.PriceClass', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Enabled') as unknown as boolean;
  }
}
export class CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_S3Origin extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName') as unknown as string;
  }
  public get originAccessIdentity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity') as unknown as string;
  }
}
export class CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Items'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Items', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Bucket'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Prefix'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_GetStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items') as unknown as string[];
  }
}
export class CloudFront_GetStreamingDistributionConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get streamingDistributionConfig(): CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig {
    return new CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig(this, 'StreamingDistributionConfig', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.CallerReference'),
        outputPath: 'StreamingDistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.CallerReference', props);
    return resource.getResponseField('StreamingDistributionConfig.CallerReference') as unknown as string;
  }
  public get s3Origin(): CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_S3Origin {
    return new CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_S3Origin(this, 'S3Origin', this.resources);
  }
  public get aliases(): CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_Aliases {
    return new CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.Comment'),
        outputPath: 'StreamingDistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.Comment', props);
    return resource.getResponseField('StreamingDistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_StreamingLoggingConfig {
    return new CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_StreamingLoggingConfig(this, 'StreamingLoggingConfig', this.resources);
  }
  public get trustedSigners(): CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_TrustedSigners {
    return new CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.PriceClass'),
        outputPath: 'StreamingDistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.PriceClass', props);
    return resource.getResponseField('StreamingDistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.Enabled'),
        outputPath: 'StreamingDistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.Enabled', props);
    return resource.getResponseField('StreamingDistributionConfig.Enabled') as unknown as boolean;
  }
}
export class CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_S3Origin extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.S3Origin.DomainName'),
        outputPath: 'StreamingDistributionConfig.S3Origin.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.S3Origin.DomainName', props);
    return resource.getResponseField('StreamingDistributionConfig.S3Origin.DomainName') as unknown as string;
  }
  public get originAccessIdentity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.S3Origin.OriginAccessIdentity'),
        outputPath: 'StreamingDistributionConfig.S3Origin.OriginAccessIdentity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.S3Origin.OriginAccessIdentity', props);
    return resource.getResponseField('StreamingDistributionConfig.S3Origin.OriginAccessIdentity') as unknown as string;
  }
}
export class CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.Aliases.Quantity'),
        outputPath: 'StreamingDistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('StreamingDistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.Aliases.Items'),
        outputPath: 'StreamingDistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.Aliases.Items', props);
    return resource.getResponseField('StreamingDistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_StreamingLoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.Logging.Enabled'),
        outputPath: 'StreamingDistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('StreamingDistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.Logging.Bucket'),
        outputPath: 'StreamingDistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('StreamingDistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.Logging.Prefix'),
        outputPath: 'StreamingDistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('StreamingDistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_GetStreamingDistributionConfigResult_StreamingDistributionConfig_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.TrustedSigners.Enabled'),
        outputPath: 'StreamingDistributionConfig.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.TrustedSigners.Enabled', props);
    return resource.getResponseField('StreamingDistributionConfig.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.TrustedSigners.Quantity'),
        outputPath: 'StreamingDistributionConfig.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.TrustedSigners.Quantity', props);
    return resource.getResponseField('StreamingDistributionConfig.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getStreamingDistributionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('GetStreamingDistributionConfig.StreamingDistributionConfig.TrustedSigners.Items'),
        outputPath: 'StreamingDistributionConfig.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamingDistributionConfig.StreamingDistributionConfig.TrustedSigners.Items', props);
    return resource.getResponseField('StreamingDistributionConfig.TrustedSigners.Items') as unknown as string[];
  }
}
export class CloudFront_ListCachePoliciesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cachePolicyList(): CloudFront_ListCachePoliciesResult_CachePolicyList {
    return new CloudFront_ListCachePoliciesResult_CachePolicyList(this, 'CachePolicyList', this.resources);
  }
}
export class CloudFront_ListCachePoliciesResult_CachePolicyList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCachePolicies',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCachePolicies.CachePolicyList.NextMarker'),
        outputPath: 'CachePolicyList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCachePolicies.CachePolicyList.NextMarker', props);
    return resource.getResponseField('CachePolicyList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCachePolicies',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCachePolicies.CachePolicyList.MaxItems'),
        outputPath: 'CachePolicyList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCachePolicies.CachePolicyList.MaxItems', props);
    return resource.getResponseField('CachePolicyList.MaxItems') as unknown as number;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCachePolicies',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCachePolicies.CachePolicyList.Quantity'),
        outputPath: 'CachePolicyList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCachePolicies.CachePolicyList.Quantity', props);
    return resource.getResponseField('CachePolicyList.Quantity') as unknown as number;
  }
  public get items(): shapes.CachePolicySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCachePolicies',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCachePolicies.CachePolicyList.Items'),
        outputPath: 'CachePolicyList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCachePolicies.CachePolicyList.Items', props);
    return resource.getResponseField('CachePolicyList.Items') as unknown as shapes.CachePolicySummary[];
  }
}
export class CloudFront_ListCloudFrontOriginAccessIdentitiesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontOriginAccessIdentityList(): CloudFront_ListCloudFrontOriginAccessIdentitiesResult_CloudFrontOriginAccessIdentityList {
    return new CloudFront_ListCloudFrontOriginAccessIdentitiesResult_CloudFrontOriginAccessIdentityList(this, 'CloudFrontOriginAccessIdentityList', this.resources);
  }
}
export class CloudFront_ListCloudFrontOriginAccessIdentitiesResult_CloudFrontOriginAccessIdentityList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCloudFrontOriginAccessIdentities',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.Marker'),
        outputPath: 'CloudFrontOriginAccessIdentityList.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.Marker', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentityList.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCloudFrontOriginAccessIdentities',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.NextMarker'),
        outputPath: 'CloudFrontOriginAccessIdentityList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.NextMarker', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentityList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCloudFrontOriginAccessIdentities',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.MaxItems'),
        outputPath: 'CloudFrontOriginAccessIdentityList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.MaxItems', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentityList.MaxItems') as unknown as number;
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCloudFrontOriginAccessIdentities',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.IsTruncated'),
        outputPath: 'CloudFrontOriginAccessIdentityList.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.IsTruncated', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentityList.IsTruncated') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCloudFrontOriginAccessIdentities',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.Quantity'),
        outputPath: 'CloudFrontOriginAccessIdentityList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.Quantity', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentityList.Quantity') as unknown as number;
  }
  public get items(): shapes.CloudFrontOriginAccessIdentitySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listCloudFrontOriginAccessIdentities',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.Items'),
        outputPath: 'CloudFrontOriginAccessIdentityList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCloudFrontOriginAccessIdentities.CloudFrontOriginAccessIdentityList.Items', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentityList.Items') as unknown as shapes.CloudFrontOriginAccessIdentitySummary[];
  }
}
export class CloudFront_ListDistributionsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distributionList(): CloudFront_ListDistributionsResult_DistributionList {
    return new CloudFront_ListDistributionsResult_DistributionList(this, 'DistributionList', this.resources);
  }
}
export class CloudFront_ListDistributionsResult_DistributionList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributions.DistributionList.Marker'),
        outputPath: 'DistributionList.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributions.DistributionList.Marker', props);
    return resource.getResponseField('DistributionList.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributions.DistributionList.NextMarker'),
        outputPath: 'DistributionList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributions.DistributionList.NextMarker', props);
    return resource.getResponseField('DistributionList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributions.DistributionList.MaxItems'),
        outputPath: 'DistributionList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributions.DistributionList.MaxItems', props);
    return resource.getResponseField('DistributionList.MaxItems') as unknown as number;
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributions.DistributionList.IsTruncated'),
        outputPath: 'DistributionList.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributions.DistributionList.IsTruncated', props);
    return resource.getResponseField('DistributionList.IsTruncated') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributions.DistributionList.Quantity'),
        outputPath: 'DistributionList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributions.DistributionList.Quantity', props);
    return resource.getResponseField('DistributionList.Quantity') as unknown as number;
  }
  public get items(): shapes.DistributionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributions.DistributionList.Items'),
        outputPath: 'DistributionList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributions.DistributionList.Items', props);
    return resource.getResponseField('DistributionList.Items') as unknown as shapes.DistributionSummary[];
  }
}
export class CloudFront_ListDistributionsByCachePolicyIdResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distributionIdList(): CloudFront_ListDistributionsByCachePolicyIdResult_DistributionIdList {
    return new CloudFront_ListDistributionsByCachePolicyIdResult_DistributionIdList(this, 'DistributionIdList', this.resources);
  }
}
export class CloudFront_ListDistributionsByCachePolicyIdResult_DistributionIdList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByCachePolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByCachePolicyId.DistributionIdList.Marker'),
        outputPath: 'DistributionIdList.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByCachePolicyId.DistributionIdList.Marker', props);
    return resource.getResponseField('DistributionIdList.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByCachePolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByCachePolicyId.DistributionIdList.NextMarker'),
        outputPath: 'DistributionIdList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByCachePolicyId.DistributionIdList.NextMarker', props);
    return resource.getResponseField('DistributionIdList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByCachePolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByCachePolicyId.DistributionIdList.MaxItems'),
        outputPath: 'DistributionIdList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByCachePolicyId.DistributionIdList.MaxItems', props);
    return resource.getResponseField('DistributionIdList.MaxItems') as unknown as number;
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByCachePolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByCachePolicyId.DistributionIdList.IsTruncated'),
        outputPath: 'DistributionIdList.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByCachePolicyId.DistributionIdList.IsTruncated', props);
    return resource.getResponseField('DistributionIdList.IsTruncated') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByCachePolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByCachePolicyId.DistributionIdList.Quantity'),
        outputPath: 'DistributionIdList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByCachePolicyId.DistributionIdList.Quantity', props);
    return resource.getResponseField('DistributionIdList.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByCachePolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByCachePolicyId.DistributionIdList.Items'),
        outputPath: 'DistributionIdList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByCachePolicyId.DistributionIdList.Items', props);
    return resource.getResponseField('DistributionIdList.Items') as unknown as string[];
  }
}
export class CloudFront_ListDistributionsByKeyGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distributionIdList(): CloudFront_ListDistributionsByKeyGroupResult_DistributionIdList {
    return new CloudFront_ListDistributionsByKeyGroupResult_DistributionIdList(this, 'DistributionIdList', this.resources);
  }
}
export class CloudFront_ListDistributionsByKeyGroupResult_DistributionIdList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByKeyGroup.DistributionIdList.Marker'),
        outputPath: 'DistributionIdList.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByKeyGroup.DistributionIdList.Marker', props);
    return resource.getResponseField('DistributionIdList.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByKeyGroup.DistributionIdList.NextMarker'),
        outputPath: 'DistributionIdList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByKeyGroup.DistributionIdList.NextMarker', props);
    return resource.getResponseField('DistributionIdList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByKeyGroup.DistributionIdList.MaxItems'),
        outputPath: 'DistributionIdList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByKeyGroup.DistributionIdList.MaxItems', props);
    return resource.getResponseField('DistributionIdList.MaxItems') as unknown as number;
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByKeyGroup.DistributionIdList.IsTruncated'),
        outputPath: 'DistributionIdList.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByKeyGroup.DistributionIdList.IsTruncated', props);
    return resource.getResponseField('DistributionIdList.IsTruncated') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByKeyGroup.DistributionIdList.Quantity'),
        outputPath: 'DistributionIdList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByKeyGroup.DistributionIdList.Quantity', props);
    return resource.getResponseField('DistributionIdList.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByKeyGroup.DistributionIdList.Items'),
        outputPath: 'DistributionIdList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByKeyGroup.DistributionIdList.Items', props);
    return resource.getResponseField('DistributionIdList.Items') as unknown as string[];
  }
}
export class CloudFront_ListDistributionsByOriginRequestPolicyIdResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distributionIdList(): CloudFront_ListDistributionsByOriginRequestPolicyIdResult_DistributionIdList {
    return new CloudFront_ListDistributionsByOriginRequestPolicyIdResult_DistributionIdList(this, 'DistributionIdList', this.resources);
  }
}
export class CloudFront_ListDistributionsByOriginRequestPolicyIdResult_DistributionIdList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByOriginRequestPolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByOriginRequestPolicyId.DistributionIdList.Marker'),
        outputPath: 'DistributionIdList.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByOriginRequestPolicyId.DistributionIdList.Marker', props);
    return resource.getResponseField('DistributionIdList.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByOriginRequestPolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByOriginRequestPolicyId.DistributionIdList.NextMarker'),
        outputPath: 'DistributionIdList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByOriginRequestPolicyId.DistributionIdList.NextMarker', props);
    return resource.getResponseField('DistributionIdList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByOriginRequestPolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByOriginRequestPolicyId.DistributionIdList.MaxItems'),
        outputPath: 'DistributionIdList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByOriginRequestPolicyId.DistributionIdList.MaxItems', props);
    return resource.getResponseField('DistributionIdList.MaxItems') as unknown as number;
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByOriginRequestPolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByOriginRequestPolicyId.DistributionIdList.IsTruncated'),
        outputPath: 'DistributionIdList.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByOriginRequestPolicyId.DistributionIdList.IsTruncated', props);
    return resource.getResponseField('DistributionIdList.IsTruncated') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByOriginRequestPolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByOriginRequestPolicyId.DistributionIdList.Quantity'),
        outputPath: 'DistributionIdList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByOriginRequestPolicyId.DistributionIdList.Quantity', props);
    return resource.getResponseField('DistributionIdList.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByOriginRequestPolicyId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByOriginRequestPolicyId.DistributionIdList.Items'),
        outputPath: 'DistributionIdList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByOriginRequestPolicyId.DistributionIdList.Items', props);
    return resource.getResponseField('DistributionIdList.Items') as unknown as string[];
  }
}
export class CloudFront_ListDistributionsByRealtimeLogConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distributionList(): CloudFront_ListDistributionsByRealtimeLogConfigResult_DistributionList {
    return new CloudFront_ListDistributionsByRealtimeLogConfigResult_DistributionList(this, 'DistributionList', this.resources);
  }
}
export class CloudFront_ListDistributionsByRealtimeLogConfigResult_DistributionList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByRealtimeLogConfig.DistributionList.Marker'),
        outputPath: 'DistributionList.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByRealtimeLogConfig.DistributionList.Marker', props);
    return resource.getResponseField('DistributionList.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByRealtimeLogConfig.DistributionList.NextMarker'),
        outputPath: 'DistributionList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByRealtimeLogConfig.DistributionList.NextMarker', props);
    return resource.getResponseField('DistributionList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByRealtimeLogConfig.DistributionList.MaxItems'),
        outputPath: 'DistributionList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByRealtimeLogConfig.DistributionList.MaxItems', props);
    return resource.getResponseField('DistributionList.MaxItems') as unknown as number;
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByRealtimeLogConfig.DistributionList.IsTruncated'),
        outputPath: 'DistributionList.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByRealtimeLogConfig.DistributionList.IsTruncated', props);
    return resource.getResponseField('DistributionList.IsTruncated') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByRealtimeLogConfig.DistributionList.Quantity'),
        outputPath: 'DistributionList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByRealtimeLogConfig.DistributionList.Quantity', props);
    return resource.getResponseField('DistributionList.Quantity') as unknown as number;
  }
  public get items(): shapes.DistributionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByRealtimeLogConfig.DistributionList.Items'),
        outputPath: 'DistributionList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByRealtimeLogConfig.DistributionList.Items', props);
    return resource.getResponseField('DistributionList.Items') as unknown as shapes.DistributionSummary[];
  }
}
export class CloudFront_ListDistributionsByWebACLIdResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distributionList(): CloudFront_ListDistributionsByWebACLIdResult_DistributionList {
    return new CloudFront_ListDistributionsByWebACLIdResult_DistributionList(this, 'DistributionList', this.resources);
  }
}
export class CloudFront_ListDistributionsByWebACLIdResult_DistributionList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByWebAclId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByWebACLId.DistributionList.Marker'),
        outputPath: 'DistributionList.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByWebACLId.DistributionList.Marker', props);
    return resource.getResponseField('DistributionList.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByWebAclId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByWebACLId.DistributionList.NextMarker'),
        outputPath: 'DistributionList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByWebACLId.DistributionList.NextMarker', props);
    return resource.getResponseField('DistributionList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByWebAclId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByWebACLId.DistributionList.MaxItems'),
        outputPath: 'DistributionList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByWebACLId.DistributionList.MaxItems', props);
    return resource.getResponseField('DistributionList.MaxItems') as unknown as number;
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByWebAclId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByWebACLId.DistributionList.IsTruncated'),
        outputPath: 'DistributionList.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByWebACLId.DistributionList.IsTruncated', props);
    return resource.getResponseField('DistributionList.IsTruncated') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByWebAclId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByWebACLId.DistributionList.Quantity'),
        outputPath: 'DistributionList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByWebACLId.DistributionList.Quantity', props);
    return resource.getResponseField('DistributionList.Quantity') as unknown as number;
  }
  public get items(): shapes.DistributionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listDistributionsByWebAclId',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListDistributionsByWebACLId.DistributionList.Items'),
        outputPath: 'DistributionList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionsByWebACLId.DistributionList.Items', props);
    return resource.getResponseField('DistributionList.Items') as unknown as shapes.DistributionSummary[];
  }
}
export class CloudFront_ListFieldLevelEncryptionConfigsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryptionList(): CloudFront_ListFieldLevelEncryptionConfigsResult_FieldLevelEncryptionList {
    return new CloudFront_ListFieldLevelEncryptionConfigsResult_FieldLevelEncryptionList(this, 'FieldLevelEncryptionList', this.resources);
  }
}
export class CloudFront_ListFieldLevelEncryptionConfigsResult_FieldLevelEncryptionList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listFieldLevelEncryptionConfigs',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListFieldLevelEncryptionConfigs.FieldLevelEncryptionList.NextMarker'),
        outputPath: 'FieldLevelEncryptionList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFieldLevelEncryptionConfigs.FieldLevelEncryptionList.NextMarker', props);
    return resource.getResponseField('FieldLevelEncryptionList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listFieldLevelEncryptionConfigs',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListFieldLevelEncryptionConfigs.FieldLevelEncryptionList.MaxItems'),
        outputPath: 'FieldLevelEncryptionList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFieldLevelEncryptionConfigs.FieldLevelEncryptionList.MaxItems', props);
    return resource.getResponseField('FieldLevelEncryptionList.MaxItems') as unknown as number;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listFieldLevelEncryptionConfigs',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListFieldLevelEncryptionConfigs.FieldLevelEncryptionList.Quantity'),
        outputPath: 'FieldLevelEncryptionList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFieldLevelEncryptionConfigs.FieldLevelEncryptionList.Quantity', props);
    return resource.getResponseField('FieldLevelEncryptionList.Quantity') as unknown as number;
  }
  public get items(): shapes.FieldLevelEncryptionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listFieldLevelEncryptionConfigs',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListFieldLevelEncryptionConfigs.FieldLevelEncryptionList.Items'),
        outputPath: 'FieldLevelEncryptionList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFieldLevelEncryptionConfigs.FieldLevelEncryptionList.Items', props);
    return resource.getResponseField('FieldLevelEncryptionList.Items') as unknown as shapes.FieldLevelEncryptionSummary[];
  }
}
export class CloudFront_ListFieldLevelEncryptionProfilesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryptionProfileList(): CloudFront_ListFieldLevelEncryptionProfilesResult_FieldLevelEncryptionProfileList {
    return new CloudFront_ListFieldLevelEncryptionProfilesResult_FieldLevelEncryptionProfileList(this, 'FieldLevelEncryptionProfileList', this.resources);
  }
}
export class CloudFront_ListFieldLevelEncryptionProfilesResult_FieldLevelEncryptionProfileList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listFieldLevelEncryptionProfiles',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListFieldLevelEncryptionProfiles.FieldLevelEncryptionProfileList.NextMarker'),
        outputPath: 'FieldLevelEncryptionProfileList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFieldLevelEncryptionProfiles.FieldLevelEncryptionProfileList.NextMarker', props);
    return resource.getResponseField('FieldLevelEncryptionProfileList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listFieldLevelEncryptionProfiles',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListFieldLevelEncryptionProfiles.FieldLevelEncryptionProfileList.MaxItems'),
        outputPath: 'FieldLevelEncryptionProfileList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFieldLevelEncryptionProfiles.FieldLevelEncryptionProfileList.MaxItems', props);
    return resource.getResponseField('FieldLevelEncryptionProfileList.MaxItems') as unknown as number;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listFieldLevelEncryptionProfiles',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListFieldLevelEncryptionProfiles.FieldLevelEncryptionProfileList.Quantity'),
        outputPath: 'FieldLevelEncryptionProfileList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFieldLevelEncryptionProfiles.FieldLevelEncryptionProfileList.Quantity', props);
    return resource.getResponseField('FieldLevelEncryptionProfileList.Quantity') as unknown as number;
  }
  public get items(): shapes.FieldLevelEncryptionProfileSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listFieldLevelEncryptionProfiles',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListFieldLevelEncryptionProfiles.FieldLevelEncryptionProfileList.Items'),
        outputPath: 'FieldLevelEncryptionProfileList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFieldLevelEncryptionProfiles.FieldLevelEncryptionProfileList.Items', props);
    return resource.getResponseField('FieldLevelEncryptionProfileList.Items') as unknown as shapes.FieldLevelEncryptionProfileSummary[];
  }
}
export class CloudFront_ListInvalidationsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get invalidationList(): CloudFront_ListInvalidationsResult_InvalidationList {
    return new CloudFront_ListInvalidationsResult_InvalidationList(this, 'InvalidationList', this.resources);
  }
}
export class CloudFront_ListInvalidationsResult_InvalidationList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listInvalidations',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListInvalidations.InvalidationList.Marker'),
        outputPath: 'InvalidationList.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvalidations.InvalidationList.Marker', props);
    return resource.getResponseField('InvalidationList.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listInvalidations',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListInvalidations.InvalidationList.NextMarker'),
        outputPath: 'InvalidationList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvalidations.InvalidationList.NextMarker', props);
    return resource.getResponseField('InvalidationList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listInvalidations',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListInvalidations.InvalidationList.MaxItems'),
        outputPath: 'InvalidationList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvalidations.InvalidationList.MaxItems', props);
    return resource.getResponseField('InvalidationList.MaxItems') as unknown as number;
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listInvalidations',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListInvalidations.InvalidationList.IsTruncated'),
        outputPath: 'InvalidationList.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvalidations.InvalidationList.IsTruncated', props);
    return resource.getResponseField('InvalidationList.IsTruncated') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listInvalidations',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListInvalidations.InvalidationList.Quantity'),
        outputPath: 'InvalidationList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvalidations.InvalidationList.Quantity', props);
    return resource.getResponseField('InvalidationList.Quantity') as unknown as number;
  }
  public get items(): shapes.InvalidationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listInvalidations',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListInvalidations.InvalidationList.Items'),
        outputPath: 'InvalidationList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvalidations.InvalidationList.Items', props);
    return resource.getResponseField('InvalidationList.Items') as unknown as shapes.InvalidationSummary[];
  }
}
export class CloudFront_ListKeyGroupsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get keyGroupList(): CloudFront_ListKeyGroupsResult_KeyGroupList {
    return new CloudFront_ListKeyGroupsResult_KeyGroupList(this, 'KeyGroupList', this.resources);
  }
}
export class CloudFront_ListKeyGroupsResult_KeyGroupList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listKeyGroups',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListKeyGroups.KeyGroupList.NextMarker'),
        outputPath: 'KeyGroupList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeyGroups.KeyGroupList.NextMarker', props);
    return resource.getResponseField('KeyGroupList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listKeyGroups',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListKeyGroups.KeyGroupList.MaxItems'),
        outputPath: 'KeyGroupList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeyGroups.KeyGroupList.MaxItems', props);
    return resource.getResponseField('KeyGroupList.MaxItems') as unknown as number;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listKeyGroups',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListKeyGroups.KeyGroupList.Quantity'),
        outputPath: 'KeyGroupList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeyGroups.KeyGroupList.Quantity', props);
    return resource.getResponseField('KeyGroupList.Quantity') as unknown as number;
  }
  public get items(): shapes.KeyGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listKeyGroups',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListKeyGroups.KeyGroupList.Items'),
        outputPath: 'KeyGroupList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeyGroups.KeyGroupList.Items', props);
    return resource.getResponseField('KeyGroupList.Items') as unknown as shapes.KeyGroupSummary[];
  }
}
export class CloudFront_ListOriginRequestPoliciesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get originRequestPolicyList(): CloudFront_ListOriginRequestPoliciesResult_OriginRequestPolicyList {
    return new CloudFront_ListOriginRequestPoliciesResult_OriginRequestPolicyList(this, 'OriginRequestPolicyList', this.resources);
  }
}
export class CloudFront_ListOriginRequestPoliciesResult_OriginRequestPolicyList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listOriginRequestPolicies',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListOriginRequestPolicies.OriginRequestPolicyList.NextMarker'),
        outputPath: 'OriginRequestPolicyList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOriginRequestPolicies.OriginRequestPolicyList.NextMarker', props);
    return resource.getResponseField('OriginRequestPolicyList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listOriginRequestPolicies',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListOriginRequestPolicies.OriginRequestPolicyList.MaxItems'),
        outputPath: 'OriginRequestPolicyList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOriginRequestPolicies.OriginRequestPolicyList.MaxItems', props);
    return resource.getResponseField('OriginRequestPolicyList.MaxItems') as unknown as number;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listOriginRequestPolicies',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListOriginRequestPolicies.OriginRequestPolicyList.Quantity'),
        outputPath: 'OriginRequestPolicyList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOriginRequestPolicies.OriginRequestPolicyList.Quantity', props);
    return resource.getResponseField('OriginRequestPolicyList.Quantity') as unknown as number;
  }
  public get items(): shapes.OriginRequestPolicySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listOriginRequestPolicies',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListOriginRequestPolicies.OriginRequestPolicyList.Items'),
        outputPath: 'OriginRequestPolicyList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOriginRequestPolicies.OriginRequestPolicyList.Items', props);
    return resource.getResponseField('OriginRequestPolicyList.Items') as unknown as shapes.OriginRequestPolicySummary[];
  }
}
export class CloudFront_ListPublicKeysResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get publicKeyList(): CloudFront_ListPublicKeysResult_PublicKeyList {
    return new CloudFront_ListPublicKeysResult_PublicKeyList(this, 'PublicKeyList', this.resources);
  }
}
export class CloudFront_ListPublicKeysResult_PublicKeyList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listPublicKeys',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListPublicKeys.PublicKeyList.NextMarker'),
        outputPath: 'PublicKeyList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublicKeys.PublicKeyList.NextMarker', props);
    return resource.getResponseField('PublicKeyList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listPublicKeys',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListPublicKeys.PublicKeyList.MaxItems'),
        outputPath: 'PublicKeyList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublicKeys.PublicKeyList.MaxItems', props);
    return resource.getResponseField('PublicKeyList.MaxItems') as unknown as number;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listPublicKeys',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListPublicKeys.PublicKeyList.Quantity'),
        outputPath: 'PublicKeyList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublicKeys.PublicKeyList.Quantity', props);
    return resource.getResponseField('PublicKeyList.Quantity') as unknown as number;
  }
  public get items(): shapes.PublicKeySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listPublicKeys',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListPublicKeys.PublicKeyList.Items'),
        outputPath: 'PublicKeyList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublicKeys.PublicKeyList.Items', props);
    return resource.getResponseField('PublicKeyList.Items') as unknown as shapes.PublicKeySummary[];
  }
}
export class CloudFront_ListRealtimeLogConfigsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get realtimeLogConfigs(): CloudFront_ListRealtimeLogConfigsResult_RealtimeLogConfigs {
    return new CloudFront_ListRealtimeLogConfigsResult_RealtimeLogConfigs(this, 'RealtimeLogConfigs', this.resources);
  }
}
export class CloudFront_ListRealtimeLogConfigsResult_RealtimeLogConfigs extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listRealtimeLogConfigs',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListRealtimeLogConfigs.RealtimeLogConfigs.MaxItems'),
        outputPath: 'RealtimeLogConfigs.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRealtimeLogConfigs.RealtimeLogConfigs.MaxItems', props);
    return resource.getResponseField('RealtimeLogConfigs.MaxItems') as unknown as number;
  }
  public get items(): shapes.RealtimeLogConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listRealtimeLogConfigs',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListRealtimeLogConfigs.RealtimeLogConfigs.Items'),
        outputPath: 'RealtimeLogConfigs.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRealtimeLogConfigs.RealtimeLogConfigs.Items', props);
    return resource.getResponseField('RealtimeLogConfigs.Items') as unknown as shapes.RealtimeLogConfig[];
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listRealtimeLogConfigs',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListRealtimeLogConfigs.RealtimeLogConfigs.IsTruncated'),
        outputPath: 'RealtimeLogConfigs.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRealtimeLogConfigs.RealtimeLogConfigs.IsTruncated', props);
    return resource.getResponseField('RealtimeLogConfigs.IsTruncated') as unknown as boolean;
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listRealtimeLogConfigs',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListRealtimeLogConfigs.RealtimeLogConfigs.Marker'),
        outputPath: 'RealtimeLogConfigs.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRealtimeLogConfigs.RealtimeLogConfigs.Marker', props);
    return resource.getResponseField('RealtimeLogConfigs.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listRealtimeLogConfigs',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListRealtimeLogConfigs.RealtimeLogConfigs.NextMarker'),
        outputPath: 'RealtimeLogConfigs.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRealtimeLogConfigs.RealtimeLogConfigs.NextMarker', props);
    return resource.getResponseField('RealtimeLogConfigs.NextMarker') as unknown as string;
  }
}
export class CloudFront_ListStreamingDistributionsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get streamingDistributionList(): CloudFront_ListStreamingDistributionsResult_StreamingDistributionList {
    return new CloudFront_ListStreamingDistributionsResult_StreamingDistributionList(this, 'StreamingDistributionList', this.resources);
  }
}
export class CloudFront_ListStreamingDistributionsResult_StreamingDistributionList extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listStreamingDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListStreamingDistributions.StreamingDistributionList.Marker'),
        outputPath: 'StreamingDistributionList.Marker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamingDistributions.StreamingDistributionList.Marker', props);
    return resource.getResponseField('StreamingDistributionList.Marker') as unknown as string;
  }
  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listStreamingDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListStreamingDistributions.StreamingDistributionList.NextMarker'),
        outputPath: 'StreamingDistributionList.NextMarker',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamingDistributions.StreamingDistributionList.NextMarker', props);
    return resource.getResponseField('StreamingDistributionList.NextMarker') as unknown as string;
  }
  public get maxItems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listStreamingDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListStreamingDistributions.StreamingDistributionList.MaxItems'),
        outputPath: 'StreamingDistributionList.MaxItems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamingDistributions.StreamingDistributionList.MaxItems', props);
    return resource.getResponseField('StreamingDistributionList.MaxItems') as unknown as number;
  }
  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listStreamingDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListStreamingDistributions.StreamingDistributionList.IsTruncated'),
        outputPath: 'StreamingDistributionList.IsTruncated',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamingDistributions.StreamingDistributionList.IsTruncated', props);
    return resource.getResponseField('StreamingDistributionList.IsTruncated') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listStreamingDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListStreamingDistributions.StreamingDistributionList.Quantity'),
        outputPath: 'StreamingDistributionList.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamingDistributions.StreamingDistributionList.Quantity', props);
    return resource.getResponseField('StreamingDistributionList.Quantity') as unknown as number;
  }
  public get items(): shapes.StreamingDistributionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listStreamingDistributions',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListStreamingDistributions.StreamingDistributionList.Items'),
        outputPath: 'StreamingDistributionList.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamingDistributions.StreamingDistributionList.Items', props);
    return resource.getResponseField('StreamingDistributionList.Items') as unknown as shapes.StreamingDistributionSummary[];
  }
}
export class CloudFront_ListTagsForResourceResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get tags(): CloudFront_ListTagsForResourceResult_Tags {
    return new CloudFront_ListTagsForResourceResult_Tags(this, 'Tags', this.resources);
  }
}
export class CloudFront_ListTagsForResourceResult_Tags extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get items(): shapes.Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('ListTagsForResource.Tags.Items'),
        outputPath: 'Tags.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags.Items', props);
    return resource.getResponseField('Tags.Items') as unknown as shapes.Tag[];
  }
}
export class CloudFront_UpdateCachePolicyResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cachePolicy(): CloudFront_UpdateCachePolicyResult_CachePolicy {
    return new CloudFront_UpdateCachePolicyResult_CachePolicy(this, 'CachePolicy', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_UpdateCachePolicyResult_CachePolicy extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.Id'),
        outputPath: 'CachePolicy.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.Id', props);
    return resource.getResponseField('CachePolicy.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.LastModifiedTime'),
        outputPath: 'CachePolicy.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.LastModifiedTime', props);
    return resource.getResponseField('CachePolicy.LastModifiedTime') as unknown as string;
  }
  public get cachePolicyConfig(): CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig {
    return new CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig(this, 'CachePolicyConfig', this.resources);
  }
}
export class CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.Comment'),
        outputPath: 'CachePolicy.CachePolicyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.Comment', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.Comment') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.Name'),
        outputPath: 'CachePolicy.CachePolicyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.Name', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.Name') as unknown as string;
  }
  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.DefaultTTL'),
        outputPath: 'CachePolicy.CachePolicyConfig.DefaultTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.DefaultTTL', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.DefaultTTL') as unknown as number;
  }
  public get maxTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.MaxTTL'),
        outputPath: 'CachePolicy.CachePolicyConfig.MaxTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.MaxTTL', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.MaxTTL') as unknown as number;
  }
  public get minTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.MinTTL'),
        outputPath: 'CachePolicy.CachePolicyConfig.MinTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.MinTTL', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.MinTTL') as unknown as number;
  }
  public get parametersInCacheKeyAndForwardedToOrigin(): CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin {
    return new CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin(this, 'ParametersInCacheKeyAndForwardedToOrigin', this.resources);
  }
}
export class CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enableAcceptEncodingGzip(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip') as unknown as boolean;
  }
  public get enableAcceptEncodingBrotli(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli') as unknown as boolean;
  }
  public get headersConfig(): CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig {
    return new CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig(this, 'CachePolicyHeadersConfig', this.resources);
  }
  public get cookiesConfig(): CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig {
    return new CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig(this, 'CachePolicyCookiesConfig', this.resources);
  }
  public get queryStringsConfig(): CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig {
    return new CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig(this, 'CachePolicyQueryStringsConfig', this.resources);
  }
}
export class CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get headerBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior') as unknown as string;
  }
  public get headers(): CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers {
    return new CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers(this, 'Headers', this.resources);
  }
}
export class CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyHeadersConfig_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cookieBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookieBehavior') as unknown as string;
  }
  public get cookies(): CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames {
    return new CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyCookiesConfig_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryStringBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringBehavior') as unknown as string;
  }
  public get queryStrings(): CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames {
    return new CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames(this, 'QueryStringNames', this.resources);
  }
}
export class CloudFront_UpdateCachePolicyResult_CachePolicy_CachePolicyConfig_ParametersInCacheKeyAndForwardedToOrigin_CachePolicyQueryStringsConfig_QueryStringNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCachePolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items'),
        outputPath: 'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCachePolicy.CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items', props);
    return resource.getResponseField('CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateCloudFrontOriginAccessIdentityResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontOriginAccessIdentity(): CloudFront_UpdateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity {
    return new CloudFront_UpdateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity(this, 'CloudFrontOriginAccessIdentity', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCloudFrontOriginAccessIdentity.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCloudFrontOriginAccessIdentity.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_UpdateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.Id'),
        outputPath: 'CloudFrontOriginAccessIdentity.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.Id', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.Id') as unknown as string;
  }
  public get s3CanonicalUserId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.S3CanonicalUserId'),
        outputPath: 'CloudFrontOriginAccessIdentity.S3CanonicalUserId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.S3CanonicalUserId', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.S3CanonicalUserId') as unknown as string;
  }
  public get cloudFrontOriginAccessIdentityConfig(): CloudFront_UpdateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig {
    return new CloudFront_UpdateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig(this, 'CloudFrontOriginAccessIdentityConfig', this.resources);
  }
}
export class CloudFront_UpdateCloudFrontOriginAccessIdentityResult_CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference'),
        outputPath: 'CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateCloudFrontOriginAccessIdentity',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment'),
        outputPath: 'CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment', props);
    return resource.getResponseField('CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig.Comment') as unknown as string;
  }
}
export class CloudFront_UpdateDistributionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get distribution(): CloudFront_UpdateDistributionResult_Distribution {
    return new CloudFront_UpdateDistributionResult_Distribution(this, 'Distribution', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_UpdateDistributionResult_Distribution extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.Id'),
        outputPath: 'Distribution.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.Id', props);
    return resource.getResponseField('Distribution.Id') as unknown as string;
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.ARN'),
        outputPath: 'Distribution.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.ARN', props);
    return resource.getResponseField('Distribution.ARN') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.Status'),
        outputPath: 'Distribution.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.Status', props);
    return resource.getResponseField('Distribution.Status') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.LastModifiedTime'),
        outputPath: 'Distribution.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.LastModifiedTime', props);
    return resource.getResponseField('Distribution.LastModifiedTime') as unknown as string;
  }
  public get inProgressInvalidationBatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.InProgressInvalidationBatches'),
        outputPath: 'Distribution.InProgressInvalidationBatches',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.InProgressInvalidationBatches', props);
    return resource.getResponseField('Distribution.InProgressInvalidationBatches') as unknown as number;
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DomainName'),
        outputPath: 'Distribution.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DomainName', props);
    return resource.getResponseField('Distribution.DomainName') as unknown as string;
  }
  public get activeTrustedSigners(): CloudFront_UpdateDistributionResult_Distribution_ActiveTrustedSigners {
    return new CloudFront_UpdateDistributionResult_Distribution_ActiveTrustedSigners(this, 'ActiveTrustedSigners', this.resources);
  }
  public get activeTrustedKeyGroups(): CloudFront_UpdateDistributionResult_Distribution_ActiveTrustedKeyGroups {
    return new CloudFront_UpdateDistributionResult_Distribution_ActiveTrustedKeyGroups(this, 'ActiveTrustedKeyGroups', this.resources);
  }
  public get distributionConfig(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig(this, 'DistributionConfig', this.resources);
  }
  public get aliasIcpRecordals(): shapes.AliasIcpRecordal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.AliasICPRecordals'),
        outputPath: 'Distribution.AliasICPRecordals',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.AliasICPRecordals', props);
    return resource.getResponseField('Distribution.AliasICPRecordals') as unknown as shapes.AliasIcpRecordal[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_ActiveTrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.ActiveTrustedSigners.Enabled'),
        outputPath: 'Distribution.ActiveTrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.ActiveTrustedSigners.Enabled', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.ActiveTrustedSigners.Quantity'),
        outputPath: 'Distribution.ActiveTrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.ActiveTrustedSigners.Quantity', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Quantity') as unknown as number;
  }
  public get items(): shapes.Signer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.ActiveTrustedSigners.Items'),
        outputPath: 'Distribution.ActiveTrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.ActiveTrustedSigners.Items', props);
    return resource.getResponseField('Distribution.ActiveTrustedSigners.Items') as unknown as shapes.Signer[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_ActiveTrustedKeyGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.ActiveTrustedKeyGroups.Enabled'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.ActiveTrustedKeyGroups.Enabled', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.ActiveTrustedKeyGroups.Quantity'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.ActiveTrustedKeyGroups.Quantity', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Quantity') as unknown as number;
  }
  public get items(): shapes.KgKeyPairIds[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.ActiveTrustedKeyGroups.Items'),
        outputPath: 'Distribution.ActiveTrustedKeyGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.ActiveTrustedKeyGroups.Items', props);
    return resource.getResponseField('Distribution.ActiveTrustedKeyGroups.Items') as unknown as shapes.KgKeyPairIds[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.CallerReference'),
        outputPath: 'Distribution.DistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.CallerReference', props);
    return resource.getResponseField('Distribution.DistributionConfig.CallerReference') as unknown as string;
  }
  public get aliases(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Aliases {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get defaultRootObject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultRootObject'),
        outputPath: 'Distribution.DistributionConfig.DefaultRootObject',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultRootObject', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultRootObject') as unknown as string;
  }
  public get origins(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Origins {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Origins(this, 'Origins', this.resources);
  }
  public get originGroups(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_OriginGroups {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_OriginGroups(this, 'OriginGroups', this.resources);
  }
  public get defaultCacheBehavior(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior(this, 'DefaultCacheBehavior', this.resources);
  }
  public get cacheBehaviors(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_CacheBehaviors {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_CacheBehaviors(this, 'CacheBehaviors', this.resources);
  }
  public get customErrorResponses(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_CustomErrorResponses {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_CustomErrorResponses(this, 'CustomErrorResponses', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Comment'),
        outputPath: 'Distribution.DistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Comment', props);
    return resource.getResponseField('Distribution.DistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_LoggingConfig {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_LoggingConfig(this, 'LoggingConfig', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.PriceClass'),
        outputPath: 'Distribution.DistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.PriceClass', props);
    return resource.getResponseField('Distribution.DistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Enabled'),
        outputPath: 'Distribution.DistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.Enabled') as unknown as boolean;
  }
  public get viewerCertificate(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_ViewerCertificate {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_ViewerCertificate(this, 'ViewerCertificate', this.resources);
  }
  public get restrictions(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Restrictions {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Restrictions(this, 'Restrictions', this.resources);
  }
  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.WebACLId'),
        outputPath: 'Distribution.DistributionConfig.WebACLId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.WebACLId', props);
    return resource.getResponseField('Distribution.DistributionConfig.WebACLId') as unknown as string;
  }
  public get httpVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.HttpVersion'),
        outputPath: 'Distribution.DistributionConfig.HttpVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.HttpVersion', props);
    return resource.getResponseField('Distribution.DistributionConfig.HttpVersion') as unknown as string;
  }
  public get isIpv6Enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.IsIPV6Enabled'),
        outputPath: 'Distribution.DistributionConfig.IsIPV6Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.IsIPV6Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.IsIPV6Enabled') as unknown as boolean;
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Aliases.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Aliases.Items'),
        outputPath: 'Distribution.DistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Aliases.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Origins extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Origins.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Origins.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Origins.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Origins.Quantity') as unknown as number;
  }
  public get items(): shapes.Origin[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Origins.Items'),
        outputPath: 'Distribution.DistributionConfig.Origins.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Origins.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Origins.Items') as unknown as shapes.Origin[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_OriginGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.OriginGroups.Quantity'),
        outputPath: 'Distribution.DistributionConfig.OriginGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.OriginGroups.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.OriginGroups.Quantity') as unknown as number;
  }
  public get items(): shapes.OriginGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.OriginGroups.Items'),
        outputPath: 'Distribution.DistributionConfig.OriginGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.OriginGroups.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.OriginGroups.Items') as unknown as shapes.OriginGroup[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get targetOriginId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TargetOriginId') as unknown as string;
  }
  public get trustedSigners(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get trustedKeyGroups(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups(this, 'TrustedKeyGroups', this.resources);
  }
  public get viewerProtocolPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy') as unknown as string;
  }
  public get allowedMethods(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods(this, 'AllowedMethods', this.resources);
  }
  public get smoothStreaming(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.SmoothStreaming') as unknown as boolean;
  }
  public get compress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.Compress'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.Compress',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.Compress', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.Compress') as unknown as boolean;
  }
  public get lambdaFunctionAssociations(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations(this, 'LambdaFunctionAssociations', this.resources);
  }
  public get fieldLevelEncryptionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.FieldLevelEncryptionId') as unknown as string;
  }
  public get realtimeLogConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.RealtimeLogConfigArn') as unknown as string;
  }
  public get cachePolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.CachePolicyId') as unknown as string;
  }
  public get originRequestPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.OriginRequestPolicyId') as unknown as string;
  }
  public get forwardedValues(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues(this, 'ForwardedValues', this.resources);
  }
  public get minTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.MinTTL') as unknown as number;
  }
  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.DefaultTTL') as unknown as number;
  }
  public get maxTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.MaxTTL') as unknown as number;
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedSigners.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_TrustedKeyGroups extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.Items') as unknown as string[];
  }
  public get cachedMethods(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods(this, 'CachedMethods', this.resources);
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_AllowedMethods_CachedMethods extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_LambdaFunctionAssociations extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Quantity') as unknown as number;
  }
  public get items(): shapes.LambdaFunctionAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items') as unknown as shapes.LambdaFunctionAssociation[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryString(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryString') as unknown as boolean;
  }
  public get cookies(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference(this, 'CookiePreference', this.resources);
  }
  public get headers(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers(this, 'Headers', this.resources);
  }
  public get queryStringCacheKeys(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys(this, 'QueryStringCacheKeys', this.resources);
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forward(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.Forward') as unknown as string;
  }
  public get whitelistedNames(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_CookiePreference_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_DefaultCacheBehavior_ForwardedValues_QueryStringCacheKeys extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items'),
        outputPath: 'Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_CacheBehaviors extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.CacheBehaviors.Quantity'),
        outputPath: 'Distribution.DistributionConfig.CacheBehaviors.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.CacheBehaviors.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.CacheBehaviors.Quantity') as unknown as number;
  }
  public get items(): shapes.CacheBehavior[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.CacheBehaviors.Items'),
        outputPath: 'Distribution.DistributionConfig.CacheBehaviors.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.CacheBehaviors.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.CacheBehaviors.Items') as unknown as shapes.CacheBehavior[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_CustomErrorResponses extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.CustomErrorResponses.Quantity'),
        outputPath: 'Distribution.DistributionConfig.CustomErrorResponses.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.CustomErrorResponses.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.CustomErrorResponses.Quantity') as unknown as number;
  }
  public get items(): shapes.CustomErrorResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.CustomErrorResponses.Items'),
        outputPath: 'Distribution.DistributionConfig.CustomErrorResponses.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.CustomErrorResponses.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.CustomErrorResponses.Items') as unknown as shapes.CustomErrorResponse[];
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_LoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Logging.Enabled'),
        outputPath: 'Distribution.DistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get includeCookies(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Logging.IncludeCookies'),
        outputPath: 'Distribution.DistributionConfig.Logging.IncludeCookies',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Logging.IncludeCookies', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.IncludeCookies') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Logging.Bucket'),
        outputPath: 'Distribution.DistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Logging.Prefix'),
        outputPath: 'Distribution.DistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('Distribution.DistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_ViewerCertificate extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cloudFrontDefaultCertificate(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.CloudFrontDefaultCertificate') as unknown as boolean;
  }
  public get iamCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.IAMCertificateId') as unknown as string;
  }
  public get acmCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.ACMCertificateArn') as unknown as string;
  }
  public get sslSupportMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.SSLSupportMethod') as unknown as string;
  }
  public get minimumProtocolVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.MinimumProtocolVersion') as unknown as string;
  }
  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.Certificate'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.Certificate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.Certificate', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.Certificate') as unknown as string;
  }
  public get certificateSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.CertificateSource'),
        outputPath: 'Distribution.DistributionConfig.ViewerCertificate.CertificateSource',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.ViewerCertificate.CertificateSource', props);
    return resource.getResponseField('Distribution.DistributionConfig.ViewerCertificate.CertificateSource') as unknown as string;
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Restrictions extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get geoRestriction(): CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Restrictions_GeoRestriction {
    return new CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Restrictions_GeoRestriction(this, 'GeoRestriction', this.resources);
  }
}
export class CloudFront_UpdateDistributionResult_Distribution_DistributionConfig_Restrictions_GeoRestriction extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get restrictionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.RestrictionType') as unknown as string;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Items'),
        outputPath: 'Distribution.DistributionConfig.Restrictions.GeoRestriction.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.Distribution.DistributionConfig.Restrictions.GeoRestriction.Items', props);
    return resource.getResponseField('Distribution.DistributionConfig.Restrictions.GeoRestriction.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateFieldLevelEncryptionConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryption(): CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption {
    return new CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption(this, 'FieldLevelEncryption', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.Id'),
        outputPath: 'FieldLevelEncryption.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.Id', props);
    return resource.getResponseField('FieldLevelEncryption.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.LastModifiedTime'),
        outputPath: 'FieldLevelEncryption.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.LastModifiedTime', props);
    return resource.getResponseField('FieldLevelEncryption.LastModifiedTime') as unknown as string;
  }
  public get fieldLevelEncryptionConfig(): CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig {
    return new CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig(this, 'FieldLevelEncryptionConfig', this.resources);
  }
}
export class CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.Comment'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.Comment', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.Comment') as unknown as string;
  }
  public get queryArgProfileConfig(): CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig {
    return new CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig(this, 'QueryArgProfileConfig', this.resources);
  }
  public get contentTypeProfileConfig(): CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig {
    return new CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig(this, 'ContentTypeProfileConfig', this.resources);
  }
}
export class CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forwardWhenQueryArgProfileIsUnknown(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.ForwardWhenQueryArgProfileIsUnknown') as unknown as boolean;
  }
  public get queryArgProfiles(): CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles {
    return new CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles(this, 'QueryArgProfiles', this.resources);
  }
}
export class CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_QueryArgProfileConfig_QueryArgProfiles extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Quantity') as unknown as number;
  }
  public get items(): shapes.QueryArgProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles.Items') as unknown as shapes.QueryArgProfile[];
  }
}
export class CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get forwardWhenContentTypeIsUnknown(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ForwardWhenContentTypeIsUnknown') as unknown as boolean;
  }
  public get contentTypeProfiles(): CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles {
    return new CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles(this, 'ContentTypeProfiles', this.resources);
  }
}
export class CloudFront_UpdateFieldLevelEncryptionConfigResult_FieldLevelEncryption_FieldLevelEncryptionConfig_ContentTypeProfileConfig_ContentTypeProfiles extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Quantity') as unknown as number;
  }
  public get items(): shapes.ContentTypeProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items'),
        outputPath: 'FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionConfig.FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items', props);
    return resource.getResponseField('FieldLevelEncryption.FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles.Items') as unknown as shapes.ContentTypeProfile[];
  }
}
export class CloudFront_UpdateFieldLevelEncryptionProfileResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get fieldLevelEncryptionProfile(): CloudFront_UpdateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile {
    return new CloudFront_UpdateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile(this, 'FieldLevelEncryptionProfile', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionProfile.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionProfile.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_UpdateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.Id'),
        outputPath: 'FieldLevelEncryptionProfile.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.Id', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.LastModifiedTime'),
        outputPath: 'FieldLevelEncryptionProfile.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.LastModifiedTime', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.LastModifiedTime') as unknown as string;
  }
  public get fieldLevelEncryptionProfileConfig(): CloudFront_UpdateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig {
    return new CloudFront_UpdateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig(this, 'FieldLevelEncryptionProfileConfig', this.resources);
  }
}
export class CloudFront_UpdateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Name') as unknown as string;
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.CallerReference') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.Comment') as unknown as string;
  }
  public get encryptionEntities(): CloudFront_UpdateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig_EncryptionEntities {
    return new CloudFront_UpdateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig_EncryptionEntities(this, 'EncryptionEntities', this.resources);
  }
}
export class CloudFront_UpdateFieldLevelEncryptionProfileResult_FieldLevelEncryptionProfile_FieldLevelEncryptionProfileConfig_EncryptionEntities extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Quantity') as unknown as number;
  }
  public get items(): shapes.EncryptionEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateFieldLevelEncryptionProfile',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items'),
        outputPath: 'FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFieldLevelEncryptionProfile.FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items', props);
    return resource.getResponseField('FieldLevelEncryptionProfile.FieldLevelEncryptionProfileConfig.EncryptionEntities.Items') as unknown as shapes.EncryptionEntity[];
  }
}
export class CloudFront_UpdateKeyGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get keyGroup(): CloudFront_UpdateKeyGroupResult_KeyGroup {
    return new CloudFront_UpdateKeyGroupResult_KeyGroup(this, 'KeyGroup', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateKeyGroup.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateKeyGroup.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_UpdateKeyGroupResult_KeyGroup extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateKeyGroup.KeyGroup.Id'),
        outputPath: 'KeyGroup.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateKeyGroup.KeyGroup.Id', props);
    return resource.getResponseField('KeyGroup.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateKeyGroup.KeyGroup.LastModifiedTime'),
        outputPath: 'KeyGroup.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateKeyGroup.KeyGroup.LastModifiedTime', props);
    return resource.getResponseField('KeyGroup.LastModifiedTime') as unknown as string;
  }
  public get keyGroupConfig(): CloudFront_UpdateKeyGroupResult_KeyGroup_KeyGroupConfig {
    return new CloudFront_UpdateKeyGroupResult_KeyGroup_KeyGroupConfig(this, 'KeyGroupConfig', this.resources);
  }
}
export class CloudFront_UpdateKeyGroupResult_KeyGroup_KeyGroupConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateKeyGroup.KeyGroup.KeyGroupConfig.Name'),
        outputPath: 'KeyGroup.KeyGroupConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateKeyGroup.KeyGroup.KeyGroupConfig.Name', props);
    return resource.getResponseField('KeyGroup.KeyGroupConfig.Name') as unknown as string;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateKeyGroup.KeyGroup.KeyGroupConfig.Items'),
        outputPath: 'KeyGroup.KeyGroupConfig.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateKeyGroup.KeyGroup.KeyGroupConfig.Items', props);
    return resource.getResponseField('KeyGroup.KeyGroupConfig.Items') as unknown as string[];
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateKeyGroup',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateKeyGroup.KeyGroup.KeyGroupConfig.Comment'),
        outputPath: 'KeyGroup.KeyGroupConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateKeyGroup.KeyGroup.KeyGroupConfig.Comment', props);
    return resource.getResponseField('KeyGroup.KeyGroupConfig.Comment') as unknown as string;
  }
}
export class CloudFront_UpdateOriginRequestPolicyResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get originRequestPolicy(): CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy {
    return new CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy(this, 'OriginRequestPolicy', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.Id'),
        outputPath: 'OriginRequestPolicy.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.Id', props);
    return resource.getResponseField('OriginRequestPolicy.Id') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.LastModifiedTime'),
        outputPath: 'OriginRequestPolicy.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.LastModifiedTime', props);
    return resource.getResponseField('OriginRequestPolicy.LastModifiedTime') as unknown as string;
  }
  public get originRequestPolicyConfig(): CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig {
    return new CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig(this, 'OriginRequestPolicyConfig', this.resources);
  }
}
export class CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Comment'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Comment', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.Comment') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Name'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.Name', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.Name') as unknown as string;
  }
  public get headersConfig(): CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig {
    return new CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig(this, 'OriginRequestPolicyHeadersConfig', this.resources);
  }
  public get cookiesConfig(): CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig {
    return new CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig(this, 'OriginRequestPolicyCookiesConfig', this.resources);
  }
  public get queryStringsConfig(): CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig {
    return new CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig(this, 'OriginRequestPolicyQueryStringsConfig', this.resources);
  }
}
export class CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get headerBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior') as unknown as string;
  }
  public get headers(): CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers {
    return new CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers(this, 'Headers', this.resources);
  }
}
export class CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyHeadersConfig_Headers extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get cookieBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.CookieBehavior') as unknown as string;
  }
  public get cookies(): CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames {
    return new CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames(this, 'CookieNames', this.resources);
  }
}
export class CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyCookiesConfig_CookieNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get queryStringBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringBehavior') as unknown as string;
  }
  public get queryStrings(): CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames {
    return new CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames(this, 'QueryStringNames', this.resources);
  }
}
export class CloudFront_UpdateOriginRequestPolicyResult_OriginRequestPolicy_OriginRequestPolicyConfig_OriginRequestPolicyQueryStringsConfig_QueryStringNames extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateOriginRequestPolicy',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items'),
        outputPath: 'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOriginRequestPolicy.OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items', props);
    return resource.getResponseField('OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items') as unknown as string[];
  }
}
export class CloudFront_UpdatePublicKeyResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get publicKey(): CloudFront_UpdatePublicKeyResult_PublicKey {
    return new CloudFront_UpdatePublicKeyResult_PublicKey(this, 'PublicKey', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updatePublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdatePublicKey.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePublicKey.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_UpdatePublicKeyResult_PublicKey extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updatePublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdatePublicKey.PublicKey.Id'),
        outputPath: 'PublicKey.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePublicKey.PublicKey.Id', props);
    return resource.getResponseField('PublicKey.Id') as unknown as string;
  }
  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updatePublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdatePublicKey.PublicKey.CreatedTime'),
        outputPath: 'PublicKey.CreatedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePublicKey.PublicKey.CreatedTime', props);
    return resource.getResponseField('PublicKey.CreatedTime') as unknown as string;
  }
  public get publicKeyConfig(): CloudFront_UpdatePublicKeyResult_PublicKey_PublicKeyConfig {
    return new CloudFront_UpdatePublicKeyResult_PublicKey_PublicKeyConfig(this, 'PublicKeyConfig', this.resources);
  }
}
export class CloudFront_UpdatePublicKeyResult_PublicKey_PublicKeyConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updatePublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdatePublicKey.PublicKey.PublicKeyConfig.CallerReference'),
        outputPath: 'PublicKey.PublicKeyConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePublicKey.PublicKey.PublicKeyConfig.CallerReference', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.CallerReference') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updatePublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdatePublicKey.PublicKey.PublicKeyConfig.Name'),
        outputPath: 'PublicKey.PublicKeyConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePublicKey.PublicKey.PublicKeyConfig.Name', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.Name') as unknown as string;
  }
  public get encodedKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updatePublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdatePublicKey.PublicKey.PublicKeyConfig.EncodedKey'),
        outputPath: 'PublicKey.PublicKeyConfig.EncodedKey',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePublicKey.PublicKey.PublicKeyConfig.EncodedKey', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.EncodedKey') as unknown as string;
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updatePublicKey',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdatePublicKey.PublicKey.PublicKeyConfig.Comment'),
        outputPath: 'PublicKey.PublicKeyConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePublicKey.PublicKey.PublicKeyConfig.Comment', props);
    return resource.getResponseField('PublicKey.PublicKeyConfig.Comment') as unknown as string;
  }
}
export class CloudFront_UpdateRealtimeLogConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get realtimeLogConfig(): CloudFront_UpdateRealtimeLogConfigResult_RealtimeLogConfig {
    return new CloudFront_UpdateRealtimeLogConfigResult_RealtimeLogConfig(this, 'RealtimeLogConfig', this.resources);
  }
}
export class CloudFront_UpdateRealtimeLogConfigResult_RealtimeLogConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateRealtimeLogConfig.RealtimeLogConfig.ARN'),
        outputPath: 'RealtimeLogConfig.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRealtimeLogConfig.RealtimeLogConfig.ARN', props);
    return resource.getResponseField('RealtimeLogConfig.ARN') as unknown as string;
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateRealtimeLogConfig.RealtimeLogConfig.Name'),
        outputPath: 'RealtimeLogConfig.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRealtimeLogConfig.RealtimeLogConfig.Name', props);
    return resource.getResponseField('RealtimeLogConfig.Name') as unknown as string;
  }
  public get samplingRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateRealtimeLogConfig.RealtimeLogConfig.SamplingRate'),
        outputPath: 'RealtimeLogConfig.SamplingRate',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRealtimeLogConfig.RealtimeLogConfig.SamplingRate', props);
    return resource.getResponseField('RealtimeLogConfig.SamplingRate') as unknown as number;
  }
  public get endPoints(): shapes.EndPoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateRealtimeLogConfig.RealtimeLogConfig.EndPoints'),
        outputPath: 'RealtimeLogConfig.EndPoints',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRealtimeLogConfig.RealtimeLogConfig.EndPoints', props);
    return resource.getResponseField('RealtimeLogConfig.EndPoints') as unknown as shapes.EndPoint[];
  }
  public get fields(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateRealtimeLogConfig',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateRealtimeLogConfig.RealtimeLogConfig.Fields'),
        outputPath: 'RealtimeLogConfig.Fields',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRealtimeLogConfig.RealtimeLogConfig.Fields', props);
    return resource.getResponseField('RealtimeLogConfig.Fields') as unknown as string[];
  }
}
export class CloudFront_UpdateStreamingDistributionResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get streamingDistribution(): CloudFront_UpdateStreamingDistributionResult_StreamingDistribution {
    return new CloudFront_UpdateStreamingDistributionResult_StreamingDistribution(this, 'StreamingDistribution', this.resources);
  }
  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.ETag'),
        outputPath: 'ETag',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }
}
export class CloudFront_UpdateStreamingDistributionResult_StreamingDistribution extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.Id'),
        outputPath: 'StreamingDistribution.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.Id', props);
    return resource.getResponseField('StreamingDistribution.Id') as unknown as string;
  }
  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.ARN'),
        outputPath: 'StreamingDistribution.ARN',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.ARN', props);
    return resource.getResponseField('StreamingDistribution.ARN') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.Status'),
        outputPath: 'StreamingDistribution.Status',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.Status', props);
    return resource.getResponseField('StreamingDistribution.Status') as unknown as string;
  }
  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.LastModifiedTime'),
        outputPath: 'StreamingDistribution.LastModifiedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.LastModifiedTime', props);
    return resource.getResponseField('StreamingDistribution.LastModifiedTime') as unknown as string;
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.DomainName'),
        outputPath: 'StreamingDistribution.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.DomainName', props);
    return resource.getResponseField('StreamingDistribution.DomainName') as unknown as string;
  }
  public get activeTrustedSigners(): CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_ActiveTrustedSigners {
    return new CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_ActiveTrustedSigners(this, 'ActiveTrustedSigners', this.resources);
  }
  public get streamingDistributionConfig(): CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig {
    return new CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig(this, 'StreamingDistributionConfig', this.resources);
  }
}
export class CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_ActiveTrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Enabled'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Enabled', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Quantity'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Quantity', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Quantity') as unknown as number;
  }
  public get items(): shapes.Signer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Items'),
        outputPath: 'StreamingDistribution.ActiveTrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.ActiveTrustedSigners.Items', props);
    return resource.getResponseField('StreamingDistribution.ActiveTrustedSigners.Items') as unknown as shapes.Signer[];
  }
}
export class CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.CallerReference'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.CallerReference',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.CallerReference', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.CallerReference') as unknown as string;
  }
  public get s3Origin(): CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_S3Origin {
    return new CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_S3Origin(this, 'S3Origin', this.resources);
  }
  public get aliases(): CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_Aliases {
    return new CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_Aliases(this, 'Aliases', this.resources);
  }
  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Comment'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Comment',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Comment', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Comment') as unknown as string;
  }
  public get logging(): CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig {
    return new CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig(this, 'StreamingLoggingConfig', this.resources);
  }
  public get trustedSigners(): CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners {
    return new CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners(this, 'TrustedSigners', this.resources);
  }
  public get priceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.PriceClass'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.PriceClass',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.PriceClass', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.PriceClass') as unknown as string;
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Enabled') as unknown as boolean;
  }
}
export class CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_S3Origin extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.S3Origin.DomainName') as unknown as string;
  }
  public get originAccessIdentity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.S3Origin.OriginAccessIdentity') as unknown as string;
  }
}
export class CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_Aliases extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Aliases.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Items'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Aliases.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Aliases.Items', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Aliases.Items') as unknown as string[];
  }
}
export class CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_StreamingLoggingConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Enabled') as unknown as boolean;
  }
  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Bucket'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Bucket',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Bucket', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Bucket') as unknown as string;
  }
  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Prefix'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.Logging.Prefix',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.Logging.Prefix', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.Logging.Prefix') as unknown as string;
  }
}
export class CloudFront_UpdateStreamingDistributionResult_StreamingDistribution_StreamingDistributionConfig_TrustedSigners extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Enabled') as unknown as boolean;
  }
  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Quantity') as unknown as number;
  }
  public get items(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateStreamingDistribution',
        service: 'CloudFront',
        physicalResourceId: cr.PhysicalResourceId.of('UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items'),
        outputPath: 'StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStreamingDistribution.StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items', props);
    return resource.getResponseField('StreamingDistribution.StreamingDistributionConfig.TrustedSigners.Items') as unknown as string[];
  }
}
