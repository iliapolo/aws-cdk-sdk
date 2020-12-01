/**
 * @schema AddProfilePermissionRequest
 */
export interface AddProfilePermissionRequest {
  /**
   * @schema AddProfilePermissionRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema AddProfilePermissionRequest#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema AddProfilePermissionRequest#action
   */
  readonly action: string;

  /**
   * @schema AddProfilePermissionRequest#principal
   */
  readonly principal: string;

  /**
   * @schema AddProfilePermissionRequest#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema AddProfilePermissionRequest#statementId
   */
  readonly statementId: string;

}

/**
 * @schema AddProfilePermissionResponse
 */
export interface AddProfilePermissionResponse {
  /**
   * @schema AddProfilePermissionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema CancelSigningProfileRequest
 */
export interface CancelSigningProfileRequest {
  /**
   * @schema CancelSigningProfileRequest#profileName
   */
  readonly profileName: string;

}

/**
 * @schema DescribeSigningJobRequest
 */
export interface DescribeSigningJobRequest {
  /**
   * @schema DescribeSigningJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeSigningJobResponse
 */
export interface DescribeSigningJobResponse {
  /**
   * @schema DescribeSigningJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema DescribeSigningJobResponse#source
   */
  readonly source?: Source;

  /**
   * @schema DescribeSigningJobResponse#signingMaterial
   */
  readonly signingMaterial?: SigningMaterial;

  /**
   * @schema DescribeSigningJobResponse#platformId
   */
  readonly platformId?: string;

  /**
   * @schema DescribeSigningJobResponse#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema DescribeSigningJobResponse#profileName
   */
  readonly profileName?: string;

  /**
   * @schema DescribeSigningJobResponse#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema DescribeSigningJobResponse#overrides
   */
  readonly overrides?: SigningPlatformOverrides;

  /**
   * @schema DescribeSigningJobResponse#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema DescribeSigningJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeSigningJobResponse#completedAt
   */
  readonly completedAt?: string;

  /**
   * @schema DescribeSigningJobResponse#signatureExpiresAt
   */
  readonly signatureExpiresAt?: string;

  /**
   * @schema DescribeSigningJobResponse#requestedBy
   */
  readonly requestedBy?: string;

  /**
   * @schema DescribeSigningJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema DescribeSigningJobResponse#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema DescribeSigningJobResponse#revocationRecord
   */
  readonly revocationRecord?: SigningJobRevocationRecord;

  /**
   * @schema DescribeSigningJobResponse#signedObject
   */
  readonly signedObject?: SignedObject;

  /**
   * @schema DescribeSigningJobResponse#jobOwner
   */
  readonly jobOwner?: string;

  /**
   * @schema DescribeSigningJobResponse#jobInvoker
   */
  readonly jobInvoker?: string;

}

/**
 * @schema GetSigningPlatformRequest
 */
export interface GetSigningPlatformRequest {
  /**
   * @schema GetSigningPlatformRequest#platformId
   */
  readonly platformId: string;

}

/**
 * @schema GetSigningPlatformResponse
 */
export interface GetSigningPlatformResponse {
  /**
   * @schema GetSigningPlatformResponse#platformId
   */
  readonly platformId?: string;

  /**
   * @schema GetSigningPlatformResponse#displayName
   */
  readonly displayName?: string;

  /**
   * @schema GetSigningPlatformResponse#partner
   */
  readonly partner?: string;

  /**
   * @schema GetSigningPlatformResponse#target
   */
  readonly target?: string;

  /**
   * @schema GetSigningPlatformResponse#category
   */
  readonly category?: string;

  /**
   * @schema GetSigningPlatformResponse#signingConfiguration
   */
  readonly signingConfiguration?: SigningConfiguration;

  /**
   * @schema GetSigningPlatformResponse#signingImageFormat
   */
  readonly signingImageFormat?: SigningImageFormat;

  /**
   * @schema GetSigningPlatformResponse#maxSizeInMB
   */
  readonly maxSizeInMB?: number;

  /**
   * @schema GetSigningPlatformResponse#revocationSupported
   */
  readonly revocationSupported?: boolean;

}

/**
 * @schema GetSigningProfileRequest
 */
export interface GetSigningProfileRequest {
  /**
   * @schema GetSigningProfileRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema GetSigningProfileRequest#profileOwner
   */
  readonly profileOwner?: string;

}

/**
 * @schema GetSigningProfileResponse
 */
export interface GetSigningProfileResponse {
  /**
   * @schema GetSigningProfileResponse#profileName
   */
  readonly profileName?: string;

  /**
   * @schema GetSigningProfileResponse#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema GetSigningProfileResponse#profileVersionArn
   */
  readonly profileVersionArn?: string;

  /**
   * @schema GetSigningProfileResponse#revocationRecord
   */
  readonly revocationRecord?: SigningProfileRevocationRecord;

  /**
   * @schema GetSigningProfileResponse#signingMaterial
   */
  readonly signingMaterial?: SigningMaterial;

  /**
   * @schema GetSigningProfileResponse#platformId
   */
  readonly platformId?: string;

  /**
   * @schema GetSigningProfileResponse#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema GetSigningProfileResponse#signatureValidityPeriod
   */
  readonly signatureValidityPeriod?: SignatureValidityPeriod;

  /**
   * @schema GetSigningProfileResponse#overrides
   */
  readonly overrides?: SigningPlatformOverrides;

  /**
   * @schema GetSigningProfileResponse#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema GetSigningProfileResponse#status
   */
  readonly status?: string;

  /**
   * @schema GetSigningProfileResponse#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema GetSigningProfileResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema GetSigningProfileResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListProfilePermissionsRequest
 */
export interface ListProfilePermissionsRequest {
  /**
   * @schema ListProfilePermissionsRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema ListProfilePermissionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProfilePermissionsResponse
 */
export interface ListProfilePermissionsResponse {
  /**
   * @schema ListProfilePermissionsResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema ListProfilePermissionsResponse#policySizeBytes
   */
  readonly policySizeBytes?: number;

  /**
   * @schema ListProfilePermissionsResponse#permissions
   */
  readonly permissions?: Permission[];

  /**
   * @schema ListProfilePermissionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSigningJobsRequest
 */
export interface ListSigningJobsRequest {
  /**
   * @schema ListSigningJobsRequest#status
   */
  readonly status?: string;

  /**
   * @schema ListSigningJobsRequest#platformId
   */
  readonly platformId?: string;

  /**
   * @schema ListSigningJobsRequest#requestedBy
   */
  readonly requestedBy?: string;

  /**
   * @schema ListSigningJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSigningJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSigningJobsRequest#isRevoked
   */
  readonly isRevoked?: boolean;

  /**
   * @schema ListSigningJobsRequest#signatureExpiresBefore
   */
  readonly signatureExpiresBefore?: string;

  /**
   * @schema ListSigningJobsRequest#signatureExpiresAfter
   */
  readonly signatureExpiresAfter?: string;

  /**
   * @schema ListSigningJobsRequest#jobInvoker
   */
  readonly jobInvoker?: string;

}

/**
 * @schema ListSigningJobsResponse
 */
export interface ListSigningJobsResponse {
  /**
   * @schema ListSigningJobsResponse#jobs
   */
  readonly jobs?: SigningJob[];

  /**
   * @schema ListSigningJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSigningPlatformsRequest
 */
export interface ListSigningPlatformsRequest {
  /**
   * @schema ListSigningPlatformsRequest#category
   */
  readonly category?: string;

  /**
   * @schema ListSigningPlatformsRequest#partner
   */
  readonly partner?: string;

  /**
   * @schema ListSigningPlatformsRequest#target
   */
  readonly target?: string;

  /**
   * @schema ListSigningPlatformsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSigningPlatformsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSigningPlatformsResponse
 */
export interface ListSigningPlatformsResponse {
  /**
   * @schema ListSigningPlatformsResponse#platforms
   */
  readonly platforms?: SigningPlatform[];

  /**
   * @schema ListSigningPlatformsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSigningProfilesRequest
 */
export interface ListSigningProfilesRequest {
  /**
   * @schema ListSigningProfilesRequest#includeCanceled
   */
  readonly includeCanceled?: boolean;

  /**
   * @schema ListSigningProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSigningProfilesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSigningProfilesRequest#platformId
   */
  readonly platformId?: string;

  /**
   * @schema ListSigningProfilesRequest#statuses
   */
  readonly statuses?: string[];

}

/**
 * @schema ListSigningProfilesResponse
 */
export interface ListSigningProfilesResponse {
  /**
   * @schema ListSigningProfilesResponse#profiles
   */
  readonly profiles?: SigningProfile[];

  /**
   * @schema ListSigningProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PutSigningProfileRequest
 */
export interface PutSigningProfileRequest {
  /**
   * @schema PutSigningProfileRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema PutSigningProfileRequest#signingMaterial
   */
  readonly signingMaterial?: SigningMaterial;

  /**
   * @schema PutSigningProfileRequest#signatureValidityPeriod
   */
  readonly signatureValidityPeriod?: SignatureValidityPeriod;

  /**
   * @schema PutSigningProfileRequest#platformId
   */
  readonly platformId: string;

  /**
   * @schema PutSigningProfileRequest#overrides
   */
  readonly overrides?: SigningPlatformOverrides;

  /**
   * @schema PutSigningProfileRequest#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema PutSigningProfileRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PutSigningProfileResponse
 */
export interface PutSigningProfileResponse {
  /**
   * @schema PutSigningProfileResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema PutSigningProfileResponse#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema PutSigningProfileResponse#profileVersionArn
   */
  readonly profileVersionArn?: string;

}

/**
 * @schema RemoveProfilePermissionRequest
 */
export interface RemoveProfilePermissionRequest {
  /**
   * @schema RemoveProfilePermissionRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema RemoveProfilePermissionRequest#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema RemoveProfilePermissionRequest#statementId
   */
  readonly statementId: string;

}

/**
 * @schema RemoveProfilePermissionResponse
 */
export interface RemoveProfilePermissionResponse {
  /**
   * @schema RemoveProfilePermissionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema RevokeSignatureRequest
 */
export interface RevokeSignatureRequest {
  /**
   * @schema RevokeSignatureRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema RevokeSignatureRequest#jobOwner
   */
  readonly jobOwner?: string;

  /**
   * @schema RevokeSignatureRequest#reason
   */
  readonly reason: string;

}

/**
 * @schema RevokeSigningProfileRequest
 */
export interface RevokeSigningProfileRequest {
  /**
   * @schema RevokeSigningProfileRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema RevokeSigningProfileRequest#profileVersion
   */
  readonly profileVersion: string;

  /**
   * @schema RevokeSigningProfileRequest#reason
   */
  readonly reason: string;

  /**
   * @schema RevokeSigningProfileRequest#effectiveTime
   */
  readonly effectiveTime: string;

}

/**
 * @schema StartSigningJobRequest
 */
export interface StartSigningJobRequest {
  /**
   * @schema StartSigningJobRequest#source
   */
  readonly source: Source;

  /**
   * @schema StartSigningJobRequest#destination
   */
  readonly destination: Destination;

  /**
   * @schema StartSigningJobRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema StartSigningJobRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema StartSigningJobRequest#profileOwner
   */
  readonly profileOwner?: string;

}

/**
 * @schema StartSigningJobResponse
 */
export interface StartSigningJobResponse {
  /**
   * @schema StartSigningJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema StartSigningJobResponse#jobOwner
   */
  readonly jobOwner?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema Source
 */
export interface Source {
  /**
   * @schema Source#s3
   */
  readonly s3?: S3Source;

}

/**
 * @schema SigningMaterial
 */
export interface SigningMaterial {
  /**
   * @schema SigningMaterial#certificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema SigningPlatformOverrides
 */
export interface SigningPlatformOverrides {
  /**
   * @schema SigningPlatformOverrides#signingConfiguration
   */
  readonly signingConfiguration?: SigningConfigurationOverrides;

  /**
   * @schema SigningPlatformOverrides#signingImageFormat
   */
  readonly signingImageFormat?: string;

}

/**
 * @schema SigningJobRevocationRecord
 */
export interface SigningJobRevocationRecord {
  /**
   * @schema SigningJobRevocationRecord#reason
   */
  readonly reason?: string;

  /**
   * @schema SigningJobRevocationRecord#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema SigningJobRevocationRecord#revokedBy
   */
  readonly revokedBy?: string;

}

/**
 * @schema SignedObject
 */
export interface SignedObject {
  /**
   * @schema SignedObject#s3
   */
  readonly s3?: S3SignedObject;

}

/**
 * @schema SigningConfiguration
 */
export interface SigningConfiguration {
  /**
   * @schema SigningConfiguration#encryptionAlgorithmOptions
   */
  readonly encryptionAlgorithmOptions: EncryptionAlgorithmOptions;

  /**
   * @schema SigningConfiguration#hashAlgorithmOptions
   */
  readonly hashAlgorithmOptions: HashAlgorithmOptions;

}

/**
 * @schema SigningImageFormat
 */
export interface SigningImageFormat {
  /**
   * @schema SigningImageFormat#supportedFormats
   */
  readonly supportedFormats: string[];

  /**
   * @schema SigningImageFormat#defaultFormat
   */
  readonly defaultFormat: string;

}

/**
 * @schema SigningProfileRevocationRecord
 */
export interface SigningProfileRevocationRecord {
  /**
   * @schema SigningProfileRevocationRecord#revocationEffectiveFrom
   */
  readonly revocationEffectiveFrom?: string;

  /**
   * @schema SigningProfileRevocationRecord#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema SigningProfileRevocationRecord#revokedBy
   */
  readonly revokedBy?: string;

}

/**
 * @schema SignatureValidityPeriod
 */
export interface SignatureValidityPeriod {
  /**
   * @schema SignatureValidityPeriod#value
   */
  readonly value?: number;

  /**
   * @schema SignatureValidityPeriod#type
   */
  readonly type?: string;

}

/**
 * @schema Permission
 */
export interface Permission {
  /**
   * @schema Permission#action
   */
  readonly action?: string;

  /**
   * @schema Permission#principal
   */
  readonly principal?: string;

  /**
   * @schema Permission#statementId
   */
  readonly statementId?: string;

  /**
   * @schema Permission#profileVersion
   */
  readonly profileVersion?: string;

}

/**
 * @schema SigningJob
 */
export interface SigningJob {
  /**
   * @schema SigningJob#jobId
   */
  readonly jobId?: string;

  /**
   * @schema SigningJob#source
   */
  readonly source?: Source;

  /**
   * @schema SigningJob#signedObject
   */
  readonly signedObject?: SignedObject;

  /**
   * @schema SigningJob#signingMaterial
   */
  readonly signingMaterial?: SigningMaterial;

  /**
   * @schema SigningJob#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema SigningJob#status
   */
  readonly status?: string;

  /**
   * @schema SigningJob#isRevoked
   */
  readonly isRevoked?: boolean;

  /**
   * @schema SigningJob#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SigningJob#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SigningJob#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SigningJob#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SigningJob#signatureExpiresAt
   */
  readonly signatureExpiresAt?: string;

  /**
   * @schema SigningJob#jobOwner
   */
  readonly jobOwner?: string;

  /**
   * @schema SigningJob#jobInvoker
   */
  readonly jobInvoker?: string;

}

/**
 * @schema SigningPlatform
 */
export interface SigningPlatform {
  /**
   * @schema SigningPlatform#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SigningPlatform#displayName
   */
  readonly displayName?: string;

  /**
   * @schema SigningPlatform#partner
   */
  readonly partner?: string;

  /**
   * @schema SigningPlatform#target
   */
  readonly target?: string;

  /**
   * @schema SigningPlatform#category
   */
  readonly category?: string;

  /**
   * @schema SigningPlatform#signingConfiguration
   */
  readonly signingConfiguration?: SigningConfiguration;

  /**
   * @schema SigningPlatform#signingImageFormat
   */
  readonly signingImageFormat?: SigningImageFormat;

  /**
   * @schema SigningPlatform#maxSizeInMB
   */
  readonly maxSizeInMB?: number;

  /**
   * @schema SigningPlatform#revocationSupported
   */
  readonly revocationSupported?: boolean;

}

/**
 * @schema SigningProfile
 */
export interface SigningProfile {
  /**
   * @schema SigningProfile#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SigningProfile#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SigningProfile#profileVersionArn
   */
  readonly profileVersionArn?: string;

  /**
   * @schema SigningProfile#signingMaterial
   */
  readonly signingMaterial?: SigningMaterial;

  /**
   * @schema SigningProfile#signatureValidityPeriod
   */
  readonly signatureValidityPeriod?: SignatureValidityPeriod;

  /**
   * @schema SigningProfile#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SigningProfile#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SigningProfile#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema SigningProfile#status
   */
  readonly status?: string;

  /**
   * @schema SigningProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema SigningProfile#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Destination
 */
export interface Destination {
  /**
   * @schema Destination#s3
   */
  readonly s3?: S3Destination;

}

/**
 * @schema S3Source
 */
export interface S3Source {
  /**
   * @schema S3Source#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3Source#key
   */
  readonly key: string;

  /**
   * @schema S3Source#version
   */
  readonly version: string;

}

/**
 * @schema SigningConfigurationOverrides
 */
export interface SigningConfigurationOverrides {
  /**
   * @schema SigningConfigurationOverrides#encryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

  /**
   * @schema SigningConfigurationOverrides#hashAlgorithm
   */
  readonly hashAlgorithm?: string;

}

/**
 * @schema S3SignedObject
 */
export interface S3SignedObject {
  /**
   * @schema S3SignedObject#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema S3SignedObject#key
   */
  readonly key?: string;

}

/**
 * @schema EncryptionAlgorithmOptions
 */
export interface EncryptionAlgorithmOptions {
  /**
   * @schema EncryptionAlgorithmOptions#allowedValues
   */
  readonly allowedValues: string[];

  /**
   * @schema EncryptionAlgorithmOptions#defaultValue
   */
  readonly defaultValue: string;

}

/**
 * @schema HashAlgorithmOptions
 */
export interface HashAlgorithmOptions {
  /**
   * @schema HashAlgorithmOptions#allowedValues
   */
  readonly allowedValues: string[];

  /**
   * @schema HashAlgorithmOptions#defaultValue
   */
  readonly defaultValue: string;

}

/**
 * @schema S3Destination
 */
export interface S3Destination {
  /**
   * @schema S3Destination#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema S3Destination#prefix
   */
  readonly prefix?: string;

}
