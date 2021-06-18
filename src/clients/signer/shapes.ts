/**
 * @schema SignerAddProfilePermissionRequest
 */
export interface SignerAddProfilePermissionRequest {
  /**
   * @schema SignerAddProfilePermissionRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerAddProfilePermissionRequest#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerAddProfilePermissionRequest#action
   */
  readonly action: string;

  /**
   * @schema SignerAddProfilePermissionRequest#principal
   */
  readonly principal: string;

  /**
   * @schema SignerAddProfilePermissionRequest#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema SignerAddProfilePermissionRequest#statementId
   */
  readonly statementId: string;

}

/**
 * @schema SignerAddProfilePermissionResponse
 */
export interface SignerAddProfilePermissionResponse {
  /**
   * @schema SignerAddProfilePermissionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema SignerCancelSigningProfileRequest
 */
export interface SignerCancelSigningProfileRequest {
  /**
   * @schema SignerCancelSigningProfileRequest#profileName
   */
  readonly profileName: string;

}

/**
 * @schema SignerDescribeSigningJobRequest
 */
export interface SignerDescribeSigningJobRequest {
  /**
   * @schema SignerDescribeSigningJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema SignerDescribeSigningJobResponse
 */
export interface SignerDescribeSigningJobResponse {
  /**
   * @schema SignerDescribeSigningJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#source
   */
  readonly source?: SignerSource;

  /**
   * @schema SignerDescribeSigningJobResponse#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerDescribeSigningJobResponse#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#overrides
   */
  readonly overrides?: SignerSigningPlatformOverrides;

  /**
   * @schema SignerDescribeSigningJobResponse#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema SignerDescribeSigningJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#completedAt
   */
  readonly completedAt?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#signatureExpiresAt
   */
  readonly signatureExpiresAt?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#requestedBy
   */
  readonly requestedBy?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#revocationRecord
   */
  readonly revocationRecord?: SignerSigningJobRevocationRecord;

  /**
   * @schema SignerDescribeSigningJobResponse#signedObject
   */
  readonly signedObject?: SignerSignedObject;

  /**
   * @schema SignerDescribeSigningJobResponse#jobOwner
   */
  readonly jobOwner?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#jobInvoker
   */
  readonly jobInvoker?: string;

}

/**
 * @schema SignerGetSigningPlatformRequest
 */
export interface SignerGetSigningPlatformRequest {
  /**
   * @schema SignerGetSigningPlatformRequest#platformId
   */
  readonly platformId: string;

}

/**
 * @schema SignerGetSigningPlatformResponse
 */
export interface SignerGetSigningPlatformResponse {
  /**
   * @schema SignerGetSigningPlatformResponse#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#displayName
   */
  readonly displayName?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#partner
   */
  readonly partner?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#target
   */
  readonly target?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#category
   */
  readonly category?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#signingConfiguration
   */
  readonly signingConfiguration?: SignerSigningConfiguration;

  /**
   * @schema SignerGetSigningPlatformResponse#signingImageFormat
   */
  readonly signingImageFormat?: SignerSigningImageFormat;

  /**
   * @schema SignerGetSigningPlatformResponse#maxSizeInMB
   */
  readonly maxSizeInMB?: number;

  /**
   * @schema SignerGetSigningPlatformResponse#revocationSupported
   */
  readonly revocationSupported?: boolean;

}

/**
 * @schema SignerGetSigningProfileRequest
 */
export interface SignerGetSigningProfileRequest {
  /**
   * @schema SignerGetSigningProfileRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerGetSigningProfileRequest#profileOwner
   */
  readonly profileOwner?: string;

}

/**
 * @schema SignerGetSigningProfileResponse
 */
export interface SignerGetSigningProfileResponse {
  /**
   * @schema SignerGetSigningProfileResponse#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SignerGetSigningProfileResponse#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerGetSigningProfileResponse#profileVersionArn
   */
  readonly profileVersionArn?: string;

  /**
   * @schema SignerGetSigningProfileResponse#revocationRecord
   */
  readonly revocationRecord?: SignerSigningProfileRevocationRecord;

  /**
   * @schema SignerGetSigningProfileResponse#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerGetSigningProfileResponse#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerGetSigningProfileResponse#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SignerGetSigningProfileResponse#signatureValidityPeriod
   */
  readonly signatureValidityPeriod?: SignerSignatureValidityPeriod;

  /**
   * @schema SignerGetSigningProfileResponse#overrides
   */
  readonly overrides?: SignerSigningPlatformOverrides;

  /**
   * @schema SignerGetSigningProfileResponse#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema SignerGetSigningProfileResponse#status
   */
  readonly status?: string;

  /**
   * @schema SignerGetSigningProfileResponse#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema SignerGetSigningProfileResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema SignerGetSigningProfileResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SignerListProfilePermissionsRequest
 */
export interface SignerListProfilePermissionsRequest {
  /**
   * @schema SignerListProfilePermissionsRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerListProfilePermissionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SignerListProfilePermissionsResponse
 */
export interface SignerListProfilePermissionsResponse {
  /**
   * @schema SignerListProfilePermissionsResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema SignerListProfilePermissionsResponse#policySizeBytes
   */
  readonly policySizeBytes?: number;

  /**
   * @schema SignerListProfilePermissionsResponse#permissions
   */
  readonly permissions?: SignerPermission[];

  /**
   * @schema SignerListProfilePermissionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SignerListSigningJobsRequest
 */
export interface SignerListSigningJobsRequest {
  /**
   * @schema SignerListSigningJobsRequest#status
   */
  readonly status?: string;

  /**
   * @schema SignerListSigningJobsRequest#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerListSigningJobsRequest#requestedBy
   */
  readonly requestedBy?: string;

  /**
   * @schema SignerListSigningJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SignerListSigningJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SignerListSigningJobsRequest#isRevoked
   */
  readonly isRevoked?: boolean;

  /**
   * @schema SignerListSigningJobsRequest#signatureExpiresBefore
   */
  readonly signatureExpiresBefore?: string;

  /**
   * @schema SignerListSigningJobsRequest#signatureExpiresAfter
   */
  readonly signatureExpiresAfter?: string;

  /**
   * @schema SignerListSigningJobsRequest#jobInvoker
   */
  readonly jobInvoker?: string;

}

/**
 * @schema SignerListSigningJobsResponse
 */
export interface SignerListSigningJobsResponse {
  /**
   * @schema SignerListSigningJobsResponse#jobs
   */
  readonly jobs?: SignerSigningJob[];

  /**
   * @schema SignerListSigningJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SignerListSigningPlatformsRequest
 */
export interface SignerListSigningPlatformsRequest {
  /**
   * @schema SignerListSigningPlatformsRequest#category
   */
  readonly category?: string;

  /**
   * @schema SignerListSigningPlatformsRequest#partner
   */
  readonly partner?: string;

  /**
   * @schema SignerListSigningPlatformsRequest#target
   */
  readonly target?: string;

  /**
   * @schema SignerListSigningPlatformsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SignerListSigningPlatformsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SignerListSigningPlatformsResponse
 */
export interface SignerListSigningPlatformsResponse {
  /**
   * @schema SignerListSigningPlatformsResponse#platforms
   */
  readonly platforms?: SignerSigningPlatform[];

  /**
   * @schema SignerListSigningPlatformsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SignerListSigningProfilesRequest
 */
export interface SignerListSigningProfilesRequest {
  /**
   * @schema SignerListSigningProfilesRequest#includeCanceled
   */
  readonly includeCanceled?: boolean;

  /**
   * @schema SignerListSigningProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SignerListSigningProfilesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SignerListSigningProfilesRequest#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerListSigningProfilesRequest#statuses
   */
  readonly statuses?: string[];

}

/**
 * @schema SignerListSigningProfilesResponse
 */
export interface SignerListSigningProfilesResponse {
  /**
   * @schema SignerListSigningProfilesResponse#profiles
   */
  readonly profiles?: SignerSigningProfile[];

  /**
   * @schema SignerListSigningProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SignerListTagsForResourceRequest
 */
export interface SignerListTagsForResourceRequest {
  /**
   * @schema SignerListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema SignerListTagsForResourceResponse
 */
export interface SignerListTagsForResourceResponse {
  /**
   * @schema SignerListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SignerPutSigningProfileRequest
 */
export interface SignerPutSigningProfileRequest {
  /**
   * @schema SignerPutSigningProfileRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerPutSigningProfileRequest#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerPutSigningProfileRequest#signatureValidityPeriod
   */
  readonly signatureValidityPeriod?: SignerSignatureValidityPeriod;

  /**
   * @schema SignerPutSigningProfileRequest#platformId
   */
  readonly platformId: string;

  /**
   * @schema SignerPutSigningProfileRequest#overrides
   */
  readonly overrides?: SignerSigningPlatformOverrides;

  /**
   * @schema SignerPutSigningProfileRequest#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema SignerPutSigningProfileRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SignerPutSigningProfileResponse
 */
export interface SignerPutSigningProfileResponse {
  /**
   * @schema SignerPutSigningProfileResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema SignerPutSigningProfileResponse#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerPutSigningProfileResponse#profileVersionArn
   */
  readonly profileVersionArn?: string;

}

/**
 * @schema SignerRemoveProfilePermissionRequest
 */
export interface SignerRemoveProfilePermissionRequest {
  /**
   * @schema SignerRemoveProfilePermissionRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerRemoveProfilePermissionRequest#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema SignerRemoveProfilePermissionRequest#statementId
   */
  readonly statementId: string;

}

/**
 * @schema SignerRemoveProfilePermissionResponse
 */
export interface SignerRemoveProfilePermissionResponse {
  /**
   * @schema SignerRemoveProfilePermissionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema SignerRevokeSignatureRequest
 */
export interface SignerRevokeSignatureRequest {
  /**
   * @schema SignerRevokeSignatureRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema SignerRevokeSignatureRequest#jobOwner
   */
  readonly jobOwner?: string;

  /**
   * @schema SignerRevokeSignatureRequest#reason
   */
  readonly reason: string;

}

/**
 * @schema SignerRevokeSigningProfileRequest
 */
export interface SignerRevokeSigningProfileRequest {
  /**
   * @schema SignerRevokeSigningProfileRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerRevokeSigningProfileRequest#profileVersion
   */
  readonly profileVersion: string;

  /**
   * @schema SignerRevokeSigningProfileRequest#reason
   */
  readonly reason: string;

  /**
   * @schema SignerRevokeSigningProfileRequest#effectiveTime
   */
  readonly effectiveTime: string;

}

/**
 * @schema SignerStartSigningJobRequest
 */
export interface SignerStartSigningJobRequest {
  /**
   * @schema SignerStartSigningJobRequest#source
   */
  readonly source: SignerSource;

  /**
   * @schema SignerStartSigningJobRequest#destination
   */
  readonly destination: SignerDestination;

  /**
   * @schema SignerStartSigningJobRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerStartSigningJobRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema SignerStartSigningJobRequest#profileOwner
   */
  readonly profileOwner?: string;

}

/**
 * @schema SignerStartSigningJobResponse
 */
export interface SignerStartSigningJobResponse {
  /**
   * @schema SignerStartSigningJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema SignerStartSigningJobResponse#jobOwner
   */
  readonly jobOwner?: string;

}

/**
 * @schema SignerTagResourceRequest
 */
export interface SignerTagResourceRequest {
  /**
   * @schema SignerTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SignerTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema SignerTagResourceResponse
 */
export interface SignerTagResourceResponse {
}

/**
 * @schema SignerUntagResourceRequest
 */
export interface SignerUntagResourceRequest {
  /**
   * @schema SignerUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SignerUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SignerUntagResourceResponse
 */
export interface SignerUntagResourceResponse {
}

/**
 * @schema SignerSource
 */
export interface SignerSource {
  /**
   * @schema SignerSource#s3
   */
  readonly s3?: SignerS3Source;

}

/**
 * @schema SignerSigningMaterial
 */
export interface SignerSigningMaterial {
  /**
   * @schema SignerSigningMaterial#certificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema SignerSigningPlatformOverrides
 */
export interface SignerSigningPlatformOverrides {
  /**
   * @schema SignerSigningPlatformOverrides#signingConfiguration
   */
  readonly signingConfiguration?: SignerSigningConfigurationOverrides;

  /**
   * @schema SignerSigningPlatformOverrides#signingImageFormat
   */
  readonly signingImageFormat?: string;

}

/**
 * @schema SignerSigningJobRevocationRecord
 */
export interface SignerSigningJobRevocationRecord {
  /**
   * @schema SignerSigningJobRevocationRecord#reason
   */
  readonly reason?: string;

  /**
   * @schema SignerSigningJobRevocationRecord#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema SignerSigningJobRevocationRecord#revokedBy
   */
  readonly revokedBy?: string;

}

/**
 * @schema SignerSignedObject
 */
export interface SignerSignedObject {
  /**
   * @schema SignerSignedObject#s3
   */
  readonly s3?: SignerS3SignedObject;

}

/**
 * @schema SignerSigningConfiguration
 */
export interface SignerSigningConfiguration {
  /**
   * @schema SignerSigningConfiguration#encryptionAlgorithmOptions
   */
  readonly encryptionAlgorithmOptions: SignerEncryptionAlgorithmOptions;

  /**
   * @schema SignerSigningConfiguration#hashAlgorithmOptions
   */
  readonly hashAlgorithmOptions: SignerHashAlgorithmOptions;

}

/**
 * @schema SignerSigningImageFormat
 */
export interface SignerSigningImageFormat {
  /**
   * @schema SignerSigningImageFormat#supportedFormats
   */
  readonly supportedFormats: string[];

  /**
   * @schema SignerSigningImageFormat#defaultFormat
   */
  readonly defaultFormat: string;

}

/**
 * @schema SignerSigningProfileRevocationRecord
 */
export interface SignerSigningProfileRevocationRecord {
  /**
   * @schema SignerSigningProfileRevocationRecord#revocationEffectiveFrom
   */
  readonly revocationEffectiveFrom?: string;

  /**
   * @schema SignerSigningProfileRevocationRecord#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema SignerSigningProfileRevocationRecord#revokedBy
   */
  readonly revokedBy?: string;

}

/**
 * @schema SignerSignatureValidityPeriod
 */
export interface SignerSignatureValidityPeriod {
  /**
   * @schema SignerSignatureValidityPeriod#value
   */
  readonly value?: number;

  /**
   * @schema SignerSignatureValidityPeriod#type
   */
  readonly type?: string;

}

/**
 * @schema SignerPermission
 */
export interface SignerPermission {
  /**
   * @schema SignerPermission#action
   */
  readonly action?: string;

  /**
   * @schema SignerPermission#principal
   */
  readonly principal?: string;

  /**
   * @schema SignerPermission#statementId
   */
  readonly statementId?: string;

  /**
   * @schema SignerPermission#profileVersion
   */
  readonly profileVersion?: string;

}

/**
 * @schema SignerSigningJob
 */
export interface SignerSigningJob {
  /**
   * @schema SignerSigningJob#jobId
   */
  readonly jobId?: string;

  /**
   * @schema SignerSigningJob#source
   */
  readonly source?: SignerSource;

  /**
   * @schema SignerSigningJob#signedObject
   */
  readonly signedObject?: SignerSignedObject;

  /**
   * @schema SignerSigningJob#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerSigningJob#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema SignerSigningJob#status
   */
  readonly status?: string;

  /**
   * @schema SignerSigningJob#isRevoked
   */
  readonly isRevoked?: boolean;

  /**
   * @schema SignerSigningJob#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SignerSigningJob#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerSigningJob#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerSigningJob#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SignerSigningJob#signatureExpiresAt
   */
  readonly signatureExpiresAt?: string;

  /**
   * @schema SignerSigningJob#jobOwner
   */
  readonly jobOwner?: string;

  /**
   * @schema SignerSigningJob#jobInvoker
   */
  readonly jobInvoker?: string;

}

/**
 * @schema SignerSigningPlatform
 */
export interface SignerSigningPlatform {
  /**
   * @schema SignerSigningPlatform#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerSigningPlatform#displayName
   */
  readonly displayName?: string;

  /**
   * @schema SignerSigningPlatform#partner
   */
  readonly partner?: string;

  /**
   * @schema SignerSigningPlatform#target
   */
  readonly target?: string;

  /**
   * @schema SignerSigningPlatform#category
   */
  readonly category?: string;

  /**
   * @schema SignerSigningPlatform#signingConfiguration
   */
  readonly signingConfiguration?: SignerSigningConfiguration;

  /**
   * @schema SignerSigningPlatform#signingImageFormat
   */
  readonly signingImageFormat?: SignerSigningImageFormat;

  /**
   * @schema SignerSigningPlatform#maxSizeInMB
   */
  readonly maxSizeInMB?: number;

  /**
   * @schema SignerSigningPlatform#revocationSupported
   */
  readonly revocationSupported?: boolean;

}

/**
 * @schema SignerSigningProfile
 */
export interface SignerSigningProfile {
  /**
   * @schema SignerSigningProfile#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SignerSigningProfile#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerSigningProfile#profileVersionArn
   */
  readonly profileVersionArn?: string;

  /**
   * @schema SignerSigningProfile#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerSigningProfile#signatureValidityPeriod
   */
  readonly signatureValidityPeriod?: SignerSignatureValidityPeriod;

  /**
   * @schema SignerSigningProfile#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerSigningProfile#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SignerSigningProfile#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema SignerSigningProfile#status
   */
  readonly status?: string;

  /**
   * @schema SignerSigningProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema SignerSigningProfile#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SignerDestination
 */
export interface SignerDestination {
  /**
   * @schema SignerDestination#s3
   */
  readonly s3?: SignerS3Destination;

}

/**
 * @schema SignerS3Source
 */
export interface SignerS3Source {
  /**
   * @schema SignerS3Source#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema SignerS3Source#key
   */
  readonly key: string;

  /**
   * @schema SignerS3Source#version
   */
  readonly version: string;

}

/**
 * @schema SignerSigningConfigurationOverrides
 */
export interface SignerSigningConfigurationOverrides {
  /**
   * @schema SignerSigningConfigurationOverrides#encryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

  /**
   * @schema SignerSigningConfigurationOverrides#hashAlgorithm
   */
  readonly hashAlgorithm?: string;

}

/**
 * @schema SignerS3SignedObject
 */
export interface SignerS3SignedObject {
  /**
   * @schema SignerS3SignedObject#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema SignerS3SignedObject#key
   */
  readonly key?: string;

}

/**
 * @schema SignerEncryptionAlgorithmOptions
 */
export interface SignerEncryptionAlgorithmOptions {
  /**
   * @schema SignerEncryptionAlgorithmOptions#allowedValues
   */
  readonly allowedValues: string[];

  /**
   * @schema SignerEncryptionAlgorithmOptions#defaultValue
   */
  readonly defaultValue: string;

}

/**
 * @schema SignerHashAlgorithmOptions
 */
export interface SignerHashAlgorithmOptions {
  /**
   * @schema SignerHashAlgorithmOptions#allowedValues
   */
  readonly allowedValues: string[];

  /**
   * @schema SignerHashAlgorithmOptions#defaultValue
   */
  readonly defaultValue: string;

}

/**
 * @schema SignerS3Destination
 */
export interface SignerS3Destination {
  /**
   * @schema SignerS3Destination#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema SignerS3Destination#prefix
   */
  readonly prefix?: string;

}
