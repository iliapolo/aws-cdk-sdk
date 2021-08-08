/**
 * @schema S3ControlCreateAccessPointRequest
 */
export interface S3ControlCreateAccessPointRequest {
  /**
   * @schema S3ControlCreateAccessPointRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlCreateAccessPointRequest#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlCreateAccessPointRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlCreateAccessPointRequest#VpcConfiguration
   */
  readonly vpcConfiguration?: S3ControlVpcConfiguration;

  /**
   * @schema S3ControlCreateAccessPointRequest#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3ControlPublicAccessBlockConfiguration;

}

/**
 * Converts an object of type 'S3ControlCreateAccessPointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlCreateAccessPointRequest(obj: S3ControlCreateAccessPointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
    'Bucket': obj.bucket,
    'VpcConfiguration': toJson_S3ControlVpcConfiguration(obj.vpcConfiguration),
    'PublicAccessBlockConfiguration': toJson_S3ControlPublicAccessBlockConfiguration(obj.publicAccessBlockConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlCreateAccessPointResult
 */
export interface S3ControlCreateAccessPointResult {
  /**
   * @schema S3ControlCreateAccessPointResult#AccessPointArn
   */
  readonly accessPointArn?: string;

  /**
   * @schema S3ControlCreateAccessPointResult#Alias
   */
  readonly alias?: string;

}

/**
 * Converts an object of type 'S3ControlCreateAccessPointResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlCreateAccessPointResult(obj: S3ControlCreateAccessPointResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessPointArn': obj.accessPointArn,
    'Alias': obj.alias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlCreateAccessPointForObjectLambdaRequest
 */
export interface S3ControlCreateAccessPointForObjectLambdaRequest {
  /**
   * @schema S3ControlCreateAccessPointForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlCreateAccessPointForObjectLambdaRequest#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlCreateAccessPointForObjectLambdaRequest#Configuration
   */
  readonly configuration?: S3ControlObjectLambdaConfiguration;

}

/**
 * Converts an object of type 'S3ControlCreateAccessPointForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlCreateAccessPointForObjectLambdaRequest(obj: S3ControlCreateAccessPointForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
    'Configuration': toJson_S3ControlObjectLambdaConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlCreateAccessPointForObjectLambdaResult
 */
export interface S3ControlCreateAccessPointForObjectLambdaResult {
  /**
   * @schema S3ControlCreateAccessPointForObjectLambdaResult#ObjectLambdaAccessPointArn
   */
  readonly objectLambdaAccessPointArn?: string;

}

/**
 * Converts an object of type 'S3ControlCreateAccessPointForObjectLambdaResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlCreateAccessPointForObjectLambdaResult(obj: S3ControlCreateAccessPointForObjectLambdaResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectLambdaAccessPointArn': obj.objectLambdaAccessPointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlCreateBucketRequest
 */
export interface S3ControlCreateBucketRequest {
  /**
   * @schema S3ControlCreateBucketRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema S3ControlCreateBucketRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlCreateBucketRequest#CreateBucketConfiguration
   */
  readonly createBucketConfiguration?: S3ControlCreateBucketConfiguration;

  /**
   * @schema S3ControlCreateBucketRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema S3ControlCreateBucketRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema S3ControlCreateBucketRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema S3ControlCreateBucketRequest#GrantWrite
   */
  readonly grantWrite?: string;

  /**
   * @schema S3ControlCreateBucketRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema S3ControlCreateBucketRequest#ObjectLockEnabledForBucket
   */
  readonly objectLockEnabledForBucket?: boolean;

  /**
   * @schema S3ControlCreateBucketRequest#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * Converts an object of type 'S3ControlCreateBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlCreateBucketRequest(obj: S3ControlCreateBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ACL': obj.acl,
    'Bucket': obj.bucket,
    'CreateBucketConfiguration': toJson_S3ControlCreateBucketConfiguration(obj.createBucketConfiguration),
    'GrantFullControl': obj.grantFullControl,
    'GrantRead': obj.grantRead,
    'GrantReadACP': obj.grantReadAcp,
    'GrantWrite': obj.grantWrite,
    'GrantWriteACP': obj.grantWriteAcp,
    'ObjectLockEnabledForBucket': obj.objectLockEnabledForBucket,
    'OutpostId': obj.outpostId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlCreateBucketResult
 */
export interface S3ControlCreateBucketResult {
  /**
   * @schema S3ControlCreateBucketResult#Location
   */
  readonly location?: string;

  /**
   * @schema S3ControlCreateBucketResult#BucketArn
   */
  readonly bucketArn?: string;

}

/**
 * Converts an object of type 'S3ControlCreateBucketResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlCreateBucketResult(obj: S3ControlCreateBucketResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Location': obj.location,
    'BucketArn': obj.bucketArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlCreateJobRequest
 */
export interface S3ControlCreateJobRequest {
  /**
   * @schema S3ControlCreateJobRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlCreateJobRequest#ConfirmationRequired
   */
  readonly confirmationRequired?: boolean;

  /**
   * @schema S3ControlCreateJobRequest#Operation
   */
  readonly operation?: S3ControlJobOperation;

  /**
   * @schema S3ControlCreateJobRequest#Report
   */
  readonly report?: S3ControlJobReport;

  /**
   * @schema S3ControlCreateJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema S3ControlCreateJobRequest#Manifest
   */
  readonly manifest?: S3ControlJobManifest;

  /**
   * @schema S3ControlCreateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema S3ControlCreateJobRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema S3ControlCreateJobRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema S3ControlCreateJobRequest#Tags
   */
  readonly tags?: S3ControlS3Tag[];

}

/**
 * Converts an object of type 'S3ControlCreateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlCreateJobRequest(obj: S3ControlCreateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'ConfirmationRequired': obj.confirmationRequired,
    'Operation': toJson_S3ControlJobOperation(obj.operation),
    'Report': toJson_S3ControlJobReport(obj.report),
    'ClientRequestToken': obj.clientRequestToken,
    'Manifest': toJson_S3ControlJobManifest(obj.manifest),
    'Description': obj.description,
    'Priority': obj.priority,
    'RoleArn': obj.roleArn,
    'Tags': obj.tags?.map(y => toJson_S3ControlS3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlCreateJobResult
 */
export interface S3ControlCreateJobResult {
  /**
   * @schema S3ControlCreateJobResult#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'S3ControlCreateJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlCreateJobResult(obj: S3ControlCreateJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteAccessPointRequest
 */
export interface S3ControlDeleteAccessPointRequest {
  /**
   * @schema S3ControlDeleteAccessPointRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDeleteAccessPointRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteAccessPointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteAccessPointRequest(obj: S3ControlDeleteAccessPointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteAccessPointForObjectLambdaRequest
 */
export interface S3ControlDeleteAccessPointForObjectLambdaRequest {
  /**
   * @schema S3ControlDeleteAccessPointForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDeleteAccessPointForObjectLambdaRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteAccessPointForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteAccessPointForObjectLambdaRequest(obj: S3ControlDeleteAccessPointForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteAccessPointPolicyRequest
 */
export interface S3ControlDeleteAccessPointPolicyRequest {
  /**
   * @schema S3ControlDeleteAccessPointPolicyRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDeleteAccessPointPolicyRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteAccessPointPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteAccessPointPolicyRequest(obj: S3ControlDeleteAccessPointPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteAccessPointPolicyForObjectLambdaRequest
 */
export interface S3ControlDeleteAccessPointPolicyForObjectLambdaRequest {
  /**
   * @schema S3ControlDeleteAccessPointPolicyForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDeleteAccessPointPolicyForObjectLambdaRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteAccessPointPolicyForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteAccessPointPolicyForObjectLambdaRequest(obj: S3ControlDeleteAccessPointPolicyForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteBucketRequest
 */
export interface S3ControlDeleteBucketRequest {
  /**
   * @schema S3ControlDeleteBucketRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDeleteBucketRequest#Bucket
   */
  readonly bucket?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteBucketRequest(obj: S3ControlDeleteBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteBucketLifecycleConfigurationRequest
 */
export interface S3ControlDeleteBucketLifecycleConfigurationRequest {
  /**
   * @schema S3ControlDeleteBucketLifecycleConfigurationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDeleteBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteBucketLifecycleConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteBucketLifecycleConfigurationRequest(obj: S3ControlDeleteBucketLifecycleConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteBucketPolicyRequest
 */
export interface S3ControlDeleteBucketPolicyRequest {
  /**
   * @schema S3ControlDeleteBucketPolicyRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDeleteBucketPolicyRequest#Bucket
   */
  readonly bucket?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteBucketPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteBucketPolicyRequest(obj: S3ControlDeleteBucketPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteBucketTaggingRequest
 */
export interface S3ControlDeleteBucketTaggingRequest {
  /**
   * @schema S3ControlDeleteBucketTaggingRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDeleteBucketTaggingRequest#Bucket
   */
  readonly bucket?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteBucketTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteBucketTaggingRequest(obj: S3ControlDeleteBucketTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteJobTaggingRequest
 */
export interface S3ControlDeleteJobTaggingRequest {
  /**
   * @schema S3ControlDeleteJobTaggingRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDeleteJobTaggingRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteJobTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteJobTaggingRequest(obj: S3ControlDeleteJobTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteJobTaggingResult
 */
export interface S3ControlDeleteJobTaggingResult {
}

/**
 * Converts an object of type 'S3ControlDeleteJobTaggingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteJobTaggingResult(obj: S3ControlDeleteJobTaggingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeletePublicAccessBlockRequest
 */
export interface S3ControlDeletePublicAccessBlockRequest {
  /**
   * @schema S3ControlDeletePublicAccessBlockRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'S3ControlDeletePublicAccessBlockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeletePublicAccessBlockRequest(obj: S3ControlDeletePublicAccessBlockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteStorageLensConfigurationRequest
 */
export interface S3ControlDeleteStorageLensConfigurationRequest {
  /**
   * @schema S3ControlDeleteStorageLensConfigurationRequest#ConfigId
   */
  readonly configId?: string;

  /**
   * @schema S3ControlDeleteStorageLensConfigurationRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteStorageLensConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteStorageLensConfigurationRequest(obj: S3ControlDeleteStorageLensConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigId': obj.configId,
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteStorageLensConfigurationTaggingRequest
 */
export interface S3ControlDeleteStorageLensConfigurationTaggingRequest {
  /**
   * @schema S3ControlDeleteStorageLensConfigurationTaggingRequest#ConfigId
   */
  readonly configId?: string;

  /**
   * @schema S3ControlDeleteStorageLensConfigurationTaggingRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'S3ControlDeleteStorageLensConfigurationTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteStorageLensConfigurationTaggingRequest(obj: S3ControlDeleteStorageLensConfigurationTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigId': obj.configId,
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDeleteStorageLensConfigurationTaggingResult
 */
export interface S3ControlDeleteStorageLensConfigurationTaggingResult {
}

/**
 * Converts an object of type 'S3ControlDeleteStorageLensConfigurationTaggingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDeleteStorageLensConfigurationTaggingResult(obj: S3ControlDeleteStorageLensConfigurationTaggingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDescribeJobRequest
 */
export interface S3ControlDescribeJobRequest {
  /**
   * @schema S3ControlDescribeJobRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlDescribeJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'S3ControlDescribeJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDescribeJobRequest(obj: S3ControlDescribeJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlDescribeJobResult
 */
export interface S3ControlDescribeJobResult {
  /**
   * @schema S3ControlDescribeJobResult#Job
   */
  readonly job?: S3ControlJobDescriptor;

}

/**
 * Converts an object of type 'S3ControlDescribeJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlDescribeJobResult(obj: S3ControlDescribeJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Job': toJson_S3ControlJobDescriptor(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointRequest
 */
export interface S3ControlGetAccessPointRequest {
  /**
   * @schema S3ControlGetAccessPointRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetAccessPointRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointRequest(obj: S3ControlGetAccessPointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointResult
 */
export interface S3ControlGetAccessPointResult {
  /**
   * @schema S3ControlGetAccessPointResult#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlGetAccessPointResult#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlGetAccessPointResult#NetworkOrigin
   */
  readonly networkOrigin?: string;

  /**
   * @schema S3ControlGetAccessPointResult#VpcConfiguration
   */
  readonly vpcConfiguration?: S3ControlVpcConfiguration;

  /**
   * @schema S3ControlGetAccessPointResult#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3ControlPublicAccessBlockConfiguration;

  /**
   * @schema S3ControlGetAccessPointResult#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema S3ControlGetAccessPointResult#Alias
   */
  readonly alias?: string;

  /**
   * @schema S3ControlGetAccessPointResult#AccessPointArn
   */
  readonly accessPointArn?: string;

  /**
   * @schema S3ControlGetAccessPointResult#Endpoints
   */
  readonly endpoints?: { [key: string]: string };

}

/**
 * Converts an object of type 'S3ControlGetAccessPointResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointResult(obj: S3ControlGetAccessPointResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Bucket': obj.bucket,
    'NetworkOrigin': obj.networkOrigin,
    'VpcConfiguration': toJson_S3ControlVpcConfiguration(obj.vpcConfiguration),
    'PublicAccessBlockConfiguration': toJson_S3ControlPublicAccessBlockConfiguration(obj.publicAccessBlockConfiguration),
    'CreationDate': obj.creationDate,
    'Alias': obj.alias,
    'AccessPointArn': obj.accessPointArn,
    'Endpoints': ((obj.endpoints) === undefined) ? undefined : (Object.entries(obj.endpoints).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointConfigurationForObjectLambdaRequest
 */
export interface S3ControlGetAccessPointConfigurationForObjectLambdaRequest {
  /**
   * @schema S3ControlGetAccessPointConfigurationForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetAccessPointConfigurationForObjectLambdaRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointConfigurationForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointConfigurationForObjectLambdaRequest(obj: S3ControlGetAccessPointConfigurationForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointConfigurationForObjectLambdaResult
 */
export interface S3ControlGetAccessPointConfigurationForObjectLambdaResult {
  /**
   * @schema S3ControlGetAccessPointConfigurationForObjectLambdaResult#Configuration
   */
  readonly configuration?: S3ControlObjectLambdaConfiguration;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointConfigurationForObjectLambdaResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointConfigurationForObjectLambdaResult(obj: S3ControlGetAccessPointConfigurationForObjectLambdaResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configuration': toJson_S3ControlObjectLambdaConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointForObjectLambdaRequest
 */
export interface S3ControlGetAccessPointForObjectLambdaRequest {
  /**
   * @schema S3ControlGetAccessPointForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetAccessPointForObjectLambdaRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointForObjectLambdaRequest(obj: S3ControlGetAccessPointForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointForObjectLambdaResult
 */
export interface S3ControlGetAccessPointForObjectLambdaResult {
  /**
   * @schema S3ControlGetAccessPointForObjectLambdaResult#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlGetAccessPointForObjectLambdaResult#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3ControlPublicAccessBlockConfiguration;

  /**
   * @schema S3ControlGetAccessPointForObjectLambdaResult#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointForObjectLambdaResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointForObjectLambdaResult(obj: S3ControlGetAccessPointForObjectLambdaResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'PublicAccessBlockConfiguration': toJson_S3ControlPublicAccessBlockConfiguration(obj.publicAccessBlockConfiguration),
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointPolicyRequest
 */
export interface S3ControlGetAccessPointPolicyRequest {
  /**
   * @schema S3ControlGetAccessPointPolicyRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetAccessPointPolicyRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointPolicyRequest(obj: S3ControlGetAccessPointPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointPolicyResult
 */
export interface S3ControlGetAccessPointPolicyResult {
  /**
   * @schema S3ControlGetAccessPointPolicyResult#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointPolicyResult(obj: S3ControlGetAccessPointPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointPolicyForObjectLambdaRequest
 */
export interface S3ControlGetAccessPointPolicyForObjectLambdaRequest {
  /**
   * @schema S3ControlGetAccessPointPolicyForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetAccessPointPolicyForObjectLambdaRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointPolicyForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointPolicyForObjectLambdaRequest(obj: S3ControlGetAccessPointPolicyForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointPolicyForObjectLambdaResult
 */
export interface S3ControlGetAccessPointPolicyForObjectLambdaResult {
  /**
   * @schema S3ControlGetAccessPointPolicyForObjectLambdaResult#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointPolicyForObjectLambdaResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointPolicyForObjectLambdaResult(obj: S3ControlGetAccessPointPolicyForObjectLambdaResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointPolicyStatusRequest
 */
export interface S3ControlGetAccessPointPolicyStatusRequest {
  /**
   * @schema S3ControlGetAccessPointPolicyStatusRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetAccessPointPolicyStatusRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointPolicyStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointPolicyStatusRequest(obj: S3ControlGetAccessPointPolicyStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointPolicyStatusResult
 */
export interface S3ControlGetAccessPointPolicyStatusResult {
  /**
   * @schema S3ControlGetAccessPointPolicyStatusResult#PolicyStatus
   */
  readonly policyStatus?: S3ControlPolicyStatus;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointPolicyStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointPolicyStatusResult(obj: S3ControlGetAccessPointPolicyStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyStatus': toJson_S3ControlPolicyStatus(obj.policyStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest
 */
export interface S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest {
  /**
   * @schema S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest(obj: S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetAccessPointPolicyStatusForObjectLambdaResult
 */
export interface S3ControlGetAccessPointPolicyStatusForObjectLambdaResult {
  /**
   * @schema S3ControlGetAccessPointPolicyStatusForObjectLambdaResult#PolicyStatus
   */
  readonly policyStatus?: S3ControlPolicyStatus;

}

/**
 * Converts an object of type 'S3ControlGetAccessPointPolicyStatusForObjectLambdaResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetAccessPointPolicyStatusForObjectLambdaResult(obj: S3ControlGetAccessPointPolicyStatusForObjectLambdaResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyStatus': toJson_S3ControlPolicyStatus(obj.policyStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetBucketRequest
 */
export interface S3ControlGetBucketRequest {
  /**
   * @schema S3ControlGetBucketRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetBucketRequest#Bucket
   */
  readonly bucket?: string;

}

/**
 * Converts an object of type 'S3ControlGetBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetBucketRequest(obj: S3ControlGetBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetBucketResult
 */
export interface S3ControlGetBucketResult {
  /**
   * @schema S3ControlGetBucketResult#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlGetBucketResult#PublicAccessBlockEnabled
   */
  readonly publicAccessBlockEnabled?: boolean;

  /**
   * @schema S3ControlGetBucketResult#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'S3ControlGetBucketResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetBucketResult(obj: S3ControlGetBucketResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'PublicAccessBlockEnabled': obj.publicAccessBlockEnabled,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetBucketLifecycleConfigurationRequest
 */
export interface S3ControlGetBucketLifecycleConfigurationRequest {
  /**
   * @schema S3ControlGetBucketLifecycleConfigurationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket?: string;

}

/**
 * Converts an object of type 'S3ControlGetBucketLifecycleConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetBucketLifecycleConfigurationRequest(obj: S3ControlGetBucketLifecycleConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetBucketLifecycleConfigurationResult
 */
export interface S3ControlGetBucketLifecycleConfigurationResult {
  /**
   * @schema S3ControlGetBucketLifecycleConfigurationResult#Rules
   */
  readonly rules?: S3ControlLifecycleRule[];

}

/**
 * Converts an object of type 'S3ControlGetBucketLifecycleConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetBucketLifecycleConfigurationResult(obj: S3ControlGetBucketLifecycleConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_S3ControlLifecycleRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetBucketPolicyRequest
 */
export interface S3ControlGetBucketPolicyRequest {
  /**
   * @schema S3ControlGetBucketPolicyRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetBucketPolicyRequest#Bucket
   */
  readonly bucket?: string;

}

/**
 * Converts an object of type 'S3ControlGetBucketPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetBucketPolicyRequest(obj: S3ControlGetBucketPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetBucketPolicyResult
 */
export interface S3ControlGetBucketPolicyResult {
  /**
   * @schema S3ControlGetBucketPolicyResult#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'S3ControlGetBucketPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetBucketPolicyResult(obj: S3ControlGetBucketPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetBucketTaggingRequest
 */
export interface S3ControlGetBucketTaggingRequest {
  /**
   * @schema S3ControlGetBucketTaggingRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetBucketTaggingRequest#Bucket
   */
  readonly bucket?: string;

}

/**
 * Converts an object of type 'S3ControlGetBucketTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetBucketTaggingRequest(obj: S3ControlGetBucketTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetBucketTaggingResult
 */
export interface S3ControlGetBucketTaggingResult {
  /**
   * @schema S3ControlGetBucketTaggingResult#TagSet
   */
  readonly tagSet?: S3ControlS3Tag[];

}

/**
 * Converts an object of type 'S3ControlGetBucketTaggingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetBucketTaggingResult(obj: S3ControlGetBucketTaggingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagSet': obj.tagSet?.map(y => toJson_S3ControlS3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetJobTaggingRequest
 */
export interface S3ControlGetJobTaggingRequest {
  /**
   * @schema S3ControlGetJobTaggingRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlGetJobTaggingRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'S3ControlGetJobTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetJobTaggingRequest(obj: S3ControlGetJobTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetJobTaggingResult
 */
export interface S3ControlGetJobTaggingResult {
  /**
   * @schema S3ControlGetJobTaggingResult#Tags
   */
  readonly tags?: S3ControlS3Tag[];

}

/**
 * Converts an object of type 'S3ControlGetJobTaggingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetJobTaggingResult(obj: S3ControlGetJobTaggingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_S3ControlS3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetPublicAccessBlockRequest
 */
export interface S3ControlGetPublicAccessBlockRequest {
  /**
   * @schema S3ControlGetPublicAccessBlockRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'S3ControlGetPublicAccessBlockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetPublicAccessBlockRequest(obj: S3ControlGetPublicAccessBlockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetPublicAccessBlockOutput
 */
export interface S3ControlGetPublicAccessBlockOutput {
  /**
   * @schema S3ControlGetPublicAccessBlockOutput#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3ControlPublicAccessBlockConfiguration;

}

/**
 * Converts an object of type 'S3ControlGetPublicAccessBlockOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetPublicAccessBlockOutput(obj: S3ControlGetPublicAccessBlockOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicAccessBlockConfiguration': toJson_S3ControlPublicAccessBlockConfiguration(obj.publicAccessBlockConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetStorageLensConfigurationRequest
 */
export interface S3ControlGetStorageLensConfigurationRequest {
  /**
   * @schema S3ControlGetStorageLensConfigurationRequest#ConfigId
   */
  readonly configId?: string;

  /**
   * @schema S3ControlGetStorageLensConfigurationRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'S3ControlGetStorageLensConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetStorageLensConfigurationRequest(obj: S3ControlGetStorageLensConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigId': obj.configId,
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetStorageLensConfigurationResult
 */
export interface S3ControlGetStorageLensConfigurationResult {
  /**
   * @schema S3ControlGetStorageLensConfigurationResult#StorageLensConfiguration
   */
  readonly storageLensConfiguration?: S3ControlStorageLensConfiguration;

}

/**
 * Converts an object of type 'S3ControlGetStorageLensConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetStorageLensConfigurationResult(obj: S3ControlGetStorageLensConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageLensConfiguration': toJson_S3ControlStorageLensConfiguration(obj.storageLensConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetStorageLensConfigurationTaggingRequest
 */
export interface S3ControlGetStorageLensConfigurationTaggingRequest {
  /**
   * @schema S3ControlGetStorageLensConfigurationTaggingRequest#ConfigId
   */
  readonly configId?: string;

  /**
   * @schema S3ControlGetStorageLensConfigurationTaggingRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'S3ControlGetStorageLensConfigurationTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetStorageLensConfigurationTaggingRequest(obj: S3ControlGetStorageLensConfigurationTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigId': obj.configId,
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlGetStorageLensConfigurationTaggingResult
 */
export interface S3ControlGetStorageLensConfigurationTaggingResult {
  /**
   * @schema S3ControlGetStorageLensConfigurationTaggingResult#Tags
   */
  readonly tags?: S3ControlStorageLensTag[];

}

/**
 * Converts an object of type 'S3ControlGetStorageLensConfigurationTaggingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlGetStorageLensConfigurationTaggingResult(obj: S3ControlGetStorageLensConfigurationTaggingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_S3ControlStorageLensTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListAccessPointsRequest
 */
export interface S3ControlListAccessPointsRequest {
  /**
   * @schema S3ControlListAccessPointsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlListAccessPointsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlListAccessPointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListAccessPointsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'S3ControlListAccessPointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListAccessPointsRequest(obj: S3ControlListAccessPointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListAccessPointsResult
 */
export interface S3ControlListAccessPointsResult {
  /**
   * @schema S3ControlListAccessPointsResult#AccessPointList
   */
  readonly accessPointList?: S3ControlAccessPoint[];

  /**
   * @schema S3ControlListAccessPointsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'S3ControlListAccessPointsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListAccessPointsResult(obj: S3ControlListAccessPointsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessPointList': obj.accessPointList?.map(y => toJson_S3ControlAccessPoint(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListAccessPointsForObjectLambdaRequest
 */
export interface S3ControlListAccessPointsForObjectLambdaRequest {
  /**
   * @schema S3ControlListAccessPointsForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlListAccessPointsForObjectLambdaRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListAccessPointsForObjectLambdaRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'S3ControlListAccessPointsForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListAccessPointsForObjectLambdaRequest(obj: S3ControlListAccessPointsForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListAccessPointsForObjectLambdaResult
 */
export interface S3ControlListAccessPointsForObjectLambdaResult {
  /**
   * @schema S3ControlListAccessPointsForObjectLambdaResult#ObjectLambdaAccessPointList
   */
  readonly objectLambdaAccessPointList?: S3ControlObjectLambdaAccessPoint[];

  /**
   * @schema S3ControlListAccessPointsForObjectLambdaResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'S3ControlListAccessPointsForObjectLambdaResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListAccessPointsForObjectLambdaResult(obj: S3ControlListAccessPointsForObjectLambdaResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectLambdaAccessPointList': obj.objectLambdaAccessPointList?.map(y => toJson_S3ControlObjectLambdaAccessPoint(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListJobsRequest
 */
export interface S3ControlListJobsRequest {
  /**
   * @schema S3ControlListJobsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlListJobsRequest#JobStatuses
   */
  readonly jobStatuses?: string[];

  /**
   * @schema S3ControlListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'S3ControlListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListJobsRequest(obj: S3ControlListJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'JobStatuses': obj.jobStatuses?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListJobsResult
 */
export interface S3ControlListJobsResult {
  /**
   * @schema S3ControlListJobsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListJobsResult#Jobs
   */
  readonly jobs?: S3ControlJobListDescriptor[];

}

/**
 * Converts an object of type 'S3ControlListJobsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListJobsResult(obj: S3ControlListJobsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Jobs': obj.jobs?.map(y => toJson_S3ControlJobListDescriptor(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListRegionalBucketsRequest
 */
export interface S3ControlListRegionalBucketsRequest {
  /**
   * @schema S3ControlListRegionalBucketsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlListRegionalBucketsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListRegionalBucketsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema S3ControlListRegionalBucketsRequest#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * Converts an object of type 'S3ControlListRegionalBucketsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListRegionalBucketsRequest(obj: S3ControlListRegionalBucketsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'OutpostId': obj.outpostId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListRegionalBucketsResult
 */
export interface S3ControlListRegionalBucketsResult {
  /**
   * @schema S3ControlListRegionalBucketsResult#RegionalBucketList
   */
  readonly regionalBucketList?: S3ControlRegionalBucket[];

  /**
   * @schema S3ControlListRegionalBucketsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'S3ControlListRegionalBucketsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListRegionalBucketsResult(obj: S3ControlListRegionalBucketsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionalBucketList': obj.regionalBucketList?.map(y => toJson_S3ControlRegionalBucket(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListStorageLensConfigurationsRequest
 */
export interface S3ControlListStorageLensConfigurationsRequest {
  /**
   * @schema S3ControlListStorageLensConfigurationsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlListStorageLensConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'S3ControlListStorageLensConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListStorageLensConfigurationsRequest(obj: S3ControlListStorageLensConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListStorageLensConfigurationsResult
 */
export interface S3ControlListStorageLensConfigurationsResult {
  /**
   * @schema S3ControlListStorageLensConfigurationsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListStorageLensConfigurationsResult#StorageLensConfigurationList
   */
  readonly storageLensConfigurationList?: S3ControlListStorageLensConfigurationEntry[];

}

/**
 * Converts an object of type 'S3ControlListStorageLensConfigurationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListStorageLensConfigurationsResult(obj: S3ControlListStorageLensConfigurationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'StorageLensConfigurationList': obj.storageLensConfigurationList?.map(y => toJson_S3ControlListStorageLensConfigurationEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutAccessPointConfigurationForObjectLambdaRequest
 */
export interface S3ControlPutAccessPointConfigurationForObjectLambdaRequest {
  /**
   * @schema S3ControlPutAccessPointConfigurationForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlPutAccessPointConfigurationForObjectLambdaRequest#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlPutAccessPointConfigurationForObjectLambdaRequest#Configuration
   */
  readonly configuration?: S3ControlObjectLambdaConfiguration;

}

/**
 * Converts an object of type 'S3ControlPutAccessPointConfigurationForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutAccessPointConfigurationForObjectLambdaRequest(obj: S3ControlPutAccessPointConfigurationForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
    'Configuration': toJson_S3ControlObjectLambdaConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutAccessPointPolicyRequest
 */
export interface S3ControlPutAccessPointPolicyRequest {
  /**
   * @schema S3ControlPutAccessPointPolicyRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlPutAccessPointPolicyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlPutAccessPointPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'S3ControlPutAccessPointPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutAccessPointPolicyRequest(obj: S3ControlPutAccessPointPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutAccessPointPolicyForObjectLambdaRequest
 */
export interface S3ControlPutAccessPointPolicyForObjectLambdaRequest {
  /**
   * @schema S3ControlPutAccessPointPolicyForObjectLambdaRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlPutAccessPointPolicyForObjectLambdaRequest#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlPutAccessPointPolicyForObjectLambdaRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'S3ControlPutAccessPointPolicyForObjectLambdaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutAccessPointPolicyForObjectLambdaRequest(obj: S3ControlPutAccessPointPolicyForObjectLambdaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutBucketLifecycleConfigurationRequest
 */
export interface S3ControlPutBucketLifecycleConfigurationRequest {
  /**
   * @schema S3ControlPutBucketLifecycleConfigurationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlPutBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlPutBucketLifecycleConfigurationRequest#LifecycleConfiguration
   */
  readonly lifecycleConfiguration?: S3ControlLifecycleConfiguration;

}

/**
 * Converts an object of type 'S3ControlPutBucketLifecycleConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutBucketLifecycleConfigurationRequest(obj: S3ControlPutBucketLifecycleConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
    'LifecycleConfiguration': toJson_S3ControlLifecycleConfiguration(obj.lifecycleConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutBucketPolicyRequest
 */
export interface S3ControlPutBucketPolicyRequest {
  /**
   * @schema S3ControlPutBucketPolicyRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlPutBucketPolicyRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlPutBucketPolicyRequest#ConfirmRemoveSelfBucketAccess
   */
  readonly confirmRemoveSelfBucketAccess?: boolean;

  /**
   * @schema S3ControlPutBucketPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'S3ControlPutBucketPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutBucketPolicyRequest(obj: S3ControlPutBucketPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
    'ConfirmRemoveSelfBucketAccess': obj.confirmRemoveSelfBucketAccess,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutBucketTaggingRequest
 */
export interface S3ControlPutBucketTaggingRequest {
  /**
   * @schema S3ControlPutBucketTaggingRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlPutBucketTaggingRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlPutBucketTaggingRequest#Tagging
   */
  readonly tagging?: S3ControlTagging;

}

/**
 * Converts an object of type 'S3ControlPutBucketTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutBucketTaggingRequest(obj: S3ControlPutBucketTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
    'Tagging': toJson_S3ControlTagging(obj.tagging),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutJobTaggingRequest
 */
export interface S3ControlPutJobTaggingRequest {
  /**
   * @schema S3ControlPutJobTaggingRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlPutJobTaggingRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlPutJobTaggingRequest#Tags
   */
  readonly tags?: S3ControlS3Tag[];

}

/**
 * Converts an object of type 'S3ControlPutJobTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutJobTaggingRequest(obj: S3ControlPutJobTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'JobId': obj.jobId,
    'Tags': obj.tags?.map(y => toJson_S3ControlS3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutJobTaggingResult
 */
export interface S3ControlPutJobTaggingResult {
}

/**
 * Converts an object of type 'S3ControlPutJobTaggingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutJobTaggingResult(obj: S3ControlPutJobTaggingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutPublicAccessBlockRequest
 */
export interface S3ControlPutPublicAccessBlockRequest {
  /**
   * @schema S3ControlPutPublicAccessBlockRequest#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3ControlPublicAccessBlockConfiguration;

  /**
   * @schema S3ControlPutPublicAccessBlockRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'S3ControlPutPublicAccessBlockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutPublicAccessBlockRequest(obj: S3ControlPutPublicAccessBlockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicAccessBlockConfiguration': toJson_S3ControlPublicAccessBlockConfiguration(obj.publicAccessBlockConfiguration),
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutStorageLensConfigurationRequest
 */
export interface S3ControlPutStorageLensConfigurationRequest {
  /**
   * @schema S3ControlPutStorageLensConfigurationRequest#ConfigId
   */
  readonly configId?: string;

  /**
   * @schema S3ControlPutStorageLensConfigurationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlPutStorageLensConfigurationRequest#StorageLensConfiguration
   */
  readonly storageLensConfiguration?: S3ControlStorageLensConfiguration;

  /**
   * @schema S3ControlPutStorageLensConfigurationRequest#Tags
   */
  readonly tags?: S3ControlStorageLensTag[];

}

/**
 * Converts an object of type 'S3ControlPutStorageLensConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutStorageLensConfigurationRequest(obj: S3ControlPutStorageLensConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigId': obj.configId,
    'AccountId': obj.accountId,
    'StorageLensConfiguration': toJson_S3ControlStorageLensConfiguration(obj.storageLensConfiguration),
    'Tags': obj.tags?.map(y => toJson_S3ControlStorageLensTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutStorageLensConfigurationTaggingRequest
 */
export interface S3ControlPutStorageLensConfigurationTaggingRequest {
  /**
   * @schema S3ControlPutStorageLensConfigurationTaggingRequest#ConfigId
   */
  readonly configId?: string;

  /**
   * @schema S3ControlPutStorageLensConfigurationTaggingRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlPutStorageLensConfigurationTaggingRequest#Tags
   */
  readonly tags?: S3ControlStorageLensTag[];

}

/**
 * Converts an object of type 'S3ControlPutStorageLensConfigurationTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutStorageLensConfigurationTaggingRequest(obj: S3ControlPutStorageLensConfigurationTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigId': obj.configId,
    'AccountId': obj.accountId,
    'Tags': obj.tags?.map(y => toJson_S3ControlStorageLensTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPutStorageLensConfigurationTaggingResult
 */
export interface S3ControlPutStorageLensConfigurationTaggingResult {
}

/**
 * Converts an object of type 'S3ControlPutStorageLensConfigurationTaggingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPutStorageLensConfigurationTaggingResult(obj: S3ControlPutStorageLensConfigurationTaggingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlUpdateJobPriorityRequest
 */
export interface S3ControlUpdateJobPriorityRequest {
  /**
   * @schema S3ControlUpdateJobPriorityRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlUpdateJobPriorityRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlUpdateJobPriorityRequest#Priority
   */
  readonly priority?: number;

}

/**
 * Converts an object of type 'S3ControlUpdateJobPriorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlUpdateJobPriorityRequest(obj: S3ControlUpdateJobPriorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'JobId': obj.jobId,
    'Priority': obj.priority,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlUpdateJobPriorityResult
 */
export interface S3ControlUpdateJobPriorityResult {
  /**
   * @schema S3ControlUpdateJobPriorityResult#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlUpdateJobPriorityResult#Priority
   */
  readonly priority?: number;

}

/**
 * Converts an object of type 'S3ControlUpdateJobPriorityResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlUpdateJobPriorityResult(obj: S3ControlUpdateJobPriorityResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'Priority': obj.priority,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlUpdateJobStatusRequest
 */
export interface S3ControlUpdateJobStatusRequest {
  /**
   * @schema S3ControlUpdateJobStatusRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlUpdateJobStatusRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlUpdateJobStatusRequest#RequestedJobStatus
   */
  readonly requestedJobStatus?: string;

  /**
   * @schema S3ControlUpdateJobStatusRequest#StatusUpdateReason
   */
  readonly statusUpdateReason?: string;

}

/**
 * Converts an object of type 'S3ControlUpdateJobStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlUpdateJobStatusRequest(obj: S3ControlUpdateJobStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'JobId': obj.jobId,
    'RequestedJobStatus': obj.requestedJobStatus,
    'StatusUpdateReason': obj.statusUpdateReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlUpdateJobStatusResult
 */
export interface S3ControlUpdateJobStatusResult {
  /**
   * @schema S3ControlUpdateJobStatusResult#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlUpdateJobStatusResult#Status
   */
  readonly status?: string;

  /**
   * @schema S3ControlUpdateJobStatusResult#StatusUpdateReason
   */
  readonly statusUpdateReason?: string;

}

/**
 * Converts an object of type 'S3ControlUpdateJobStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlUpdateJobStatusResult(obj: S3ControlUpdateJobStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'Status': obj.status,
    'StatusUpdateReason': obj.statusUpdateReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlVpcConfiguration
 */
export interface S3ControlVpcConfiguration {
  /**
   * @schema S3ControlVpcConfiguration#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'S3ControlVpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlVpcConfiguration(obj: S3ControlVpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPublicAccessBlockConfiguration
 */
export interface S3ControlPublicAccessBlockConfiguration {
  /**
   * @schema S3ControlPublicAccessBlockConfiguration#BlockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema S3ControlPublicAccessBlockConfiguration#IgnorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema S3ControlPublicAccessBlockConfiguration#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema S3ControlPublicAccessBlockConfiguration#RestrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * Converts an object of type 'S3ControlPublicAccessBlockConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPublicAccessBlockConfiguration(obj: S3ControlPublicAccessBlockConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlockPublicAcls': obj.blockPublicAcls,
    'IgnorePublicAcls': obj.ignorePublicAcls,
    'BlockPublicPolicy': obj.blockPublicPolicy,
    'RestrictPublicBuckets': obj.restrictPublicBuckets,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlObjectLambdaConfiguration
 */
export interface S3ControlObjectLambdaConfiguration {
  /**
   * @schema S3ControlObjectLambdaConfiguration#SupportingAccessPoint
   */
  readonly supportingAccessPoint?: string;

  /**
   * @schema S3ControlObjectLambdaConfiguration#CloudWatchMetricsEnabled
   */
  readonly cloudWatchMetricsEnabled?: boolean;

  /**
   * @schema S3ControlObjectLambdaConfiguration#AllowedFeatures
   */
  readonly allowedFeatures?: string[];

  /**
   * @schema S3ControlObjectLambdaConfiguration#TransformationConfigurations
   */
  readonly transformationConfigurations?: S3ControlObjectLambdaTransformationConfiguration[];

}

/**
 * Converts an object of type 'S3ControlObjectLambdaConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlObjectLambdaConfiguration(obj: S3ControlObjectLambdaConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SupportingAccessPoint': obj.supportingAccessPoint,
    'CloudWatchMetricsEnabled': obj.cloudWatchMetricsEnabled,
    'AllowedFeatures': obj.allowedFeatures?.map(y => y),
    'TransformationConfigurations': obj.transformationConfigurations?.map(y => toJson_S3ControlObjectLambdaTransformationConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlCreateBucketConfiguration
 */
export interface S3ControlCreateBucketConfiguration {
  /**
   * @schema S3ControlCreateBucketConfiguration#LocationConstraint
   */
  readonly locationConstraint?: string;

}

/**
 * Converts an object of type 'S3ControlCreateBucketConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlCreateBucketConfiguration(obj: S3ControlCreateBucketConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationConstraint': obj.locationConstraint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlJobOperation
 */
export interface S3ControlJobOperation {
  /**
   * @schema S3ControlJobOperation#LambdaInvoke
   */
  readonly lambdaInvoke?: S3ControlLambdaInvokeOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectCopy
   */
  readonly s3PutObjectCopy?: S3ControlS3CopyObjectOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectAcl
   */
  readonly s3PutObjectAcl?: S3ControlS3SetObjectAclOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectTagging
   */
  readonly s3PutObjectTagging?: S3ControlS3SetObjectTaggingOperation;

  /**
   * @schema S3ControlJobOperation#S3DeleteObjectTagging
   */
  readonly s3DeleteObjectTagging?: S3ControlS3DeleteObjectTaggingOperation;

  /**
   * @schema S3ControlJobOperation#S3InitiateRestoreObject
   */
  readonly s3InitiateRestoreObject?: S3ControlS3InitiateRestoreObjectOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectLegalHold
   */
  readonly s3PutObjectLegalHold?: S3ControlS3SetObjectLegalHoldOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectRetention
   */
  readonly s3PutObjectRetention?: S3ControlS3SetObjectRetentionOperation;

}

/**
 * Converts an object of type 'S3ControlJobOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlJobOperation(obj: S3ControlJobOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LambdaInvoke': toJson_S3ControlLambdaInvokeOperation(obj.lambdaInvoke),
    'S3PutObjectCopy': toJson_S3ControlS3CopyObjectOperation(obj.s3PutObjectCopy),
    'S3PutObjectAcl': toJson_S3ControlS3SetObjectAclOperation(obj.s3PutObjectAcl),
    'S3PutObjectTagging': toJson_S3ControlS3SetObjectTaggingOperation(obj.s3PutObjectTagging),
    'S3DeleteObjectTagging': toJson_S3ControlS3DeleteObjectTaggingOperation(obj.s3DeleteObjectTagging),
    'S3InitiateRestoreObject': toJson_S3ControlS3InitiateRestoreObjectOperation(obj.s3InitiateRestoreObject),
    'S3PutObjectLegalHold': toJson_S3ControlS3SetObjectLegalHoldOperation(obj.s3PutObjectLegalHold),
    'S3PutObjectRetention': toJson_S3ControlS3SetObjectRetentionOperation(obj.s3PutObjectRetention),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlJobReport
 */
export interface S3ControlJobReport {
  /**
   * @schema S3ControlJobReport#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlJobReport#Format
   */
  readonly format?: string;

  /**
   * @schema S3ControlJobReport#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema S3ControlJobReport#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ControlJobReport#ReportScope
   */
  readonly reportScope?: string;

}

/**
 * Converts an object of type 'S3ControlJobReport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlJobReport(obj: S3ControlJobReport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Format': obj.format,
    'Enabled': obj.enabled,
    'Prefix': obj.prefix,
    'ReportScope': obj.reportScope,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlJobManifest
 */
export interface S3ControlJobManifest {
  /**
   * @schema S3ControlJobManifest#Spec
   */
  readonly spec?: S3ControlJobManifestSpec;

  /**
   * @schema S3ControlJobManifest#Location
   */
  readonly location?: S3ControlJobManifestLocation;

}

/**
 * Converts an object of type 'S3ControlJobManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlJobManifest(obj: S3ControlJobManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Spec': toJson_S3ControlJobManifestSpec(obj.spec),
    'Location': toJson_S3ControlJobManifestLocation(obj.location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3Tag
 */
export interface S3ControlS3Tag {
  /**
   * @schema S3ControlS3Tag#Key
   */
  readonly key?: string;

  /**
   * @schema S3ControlS3Tag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'S3ControlS3Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3Tag(obj: S3ControlS3Tag | undefined): Record<string, any> | undefined {
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
 * @schema S3ControlJobDescriptor
 */
export interface S3ControlJobDescriptor {
  /**
   * @schema S3ControlJobDescriptor#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlJobDescriptor#ConfirmationRequired
   */
  readonly confirmationRequired?: boolean;

  /**
   * @schema S3ControlJobDescriptor#Description
   */
  readonly description?: string;

  /**
   * @schema S3ControlJobDescriptor#JobArn
   */
  readonly jobArn?: string;

  /**
   * @schema S3ControlJobDescriptor#Status
   */
  readonly status?: string;

  /**
   * @schema S3ControlJobDescriptor#Manifest
   */
  readonly manifest?: S3ControlJobManifest;

  /**
   * @schema S3ControlJobDescriptor#Operation
   */
  readonly operation?: S3ControlJobOperation;

  /**
   * @schema S3ControlJobDescriptor#Priority
   */
  readonly priority?: number;

  /**
   * @schema S3ControlJobDescriptor#ProgressSummary
   */
  readonly progressSummary?: S3ControlJobProgressSummary;

  /**
   * @schema S3ControlJobDescriptor#StatusUpdateReason
   */
  readonly statusUpdateReason?: string;

  /**
   * @schema S3ControlJobDescriptor#FailureReasons
   */
  readonly failureReasons?: S3ControlJobFailure[];

  /**
   * @schema S3ControlJobDescriptor#Report
   */
  readonly report?: S3ControlJobReport;

  /**
   * @schema S3ControlJobDescriptor#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema S3ControlJobDescriptor#TerminationDate
   */
  readonly terminationDate?: string;

  /**
   * @schema S3ControlJobDescriptor#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema S3ControlJobDescriptor#SuspendedDate
   */
  readonly suspendedDate?: string;

  /**
   * @schema S3ControlJobDescriptor#SuspendedCause
   */
  readonly suspendedCause?: string;

}

/**
 * Converts an object of type 'S3ControlJobDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlJobDescriptor(obj: S3ControlJobDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'ConfirmationRequired': obj.confirmationRequired,
    'Description': obj.description,
    'JobArn': obj.jobArn,
    'Status': obj.status,
    'Manifest': toJson_S3ControlJobManifest(obj.manifest),
    'Operation': toJson_S3ControlJobOperation(obj.operation),
    'Priority': obj.priority,
    'ProgressSummary': toJson_S3ControlJobProgressSummary(obj.progressSummary),
    'StatusUpdateReason': obj.statusUpdateReason,
    'FailureReasons': obj.failureReasons?.map(y => toJson_S3ControlJobFailure(y)),
    'Report': toJson_S3ControlJobReport(obj.report),
    'CreationTime': obj.creationTime,
    'TerminationDate': obj.terminationDate,
    'RoleArn': obj.roleArn,
    'SuspendedDate': obj.suspendedDate,
    'SuspendedCause': obj.suspendedCause,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPolicyStatus
 */
export interface S3ControlPolicyStatus {
  /**
   * @schema S3ControlPolicyStatus#IsPublic
   */
  readonly isPublic?: boolean;

}

/**
 * Converts an object of type 'S3ControlPolicyStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPolicyStatus(obj: S3ControlPolicyStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsPublic': obj.isPublic,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlLifecycleRule
 */
export interface S3ControlLifecycleRule {
  /**
   * @schema S3ControlLifecycleRule#Expiration
   */
  readonly expiration?: S3ControlLifecycleExpiration;

  /**
   * @schema S3ControlLifecycleRule#ID
   */
  readonly id?: string;

  /**
   * @schema S3ControlLifecycleRule#Filter
   */
  readonly filter?: S3ControlLifecycleRuleFilter;

  /**
   * @schema S3ControlLifecycleRule#Status
   */
  readonly status?: string;

  /**
   * @schema S3ControlLifecycleRule#Transitions
   */
  readonly transitions?: S3ControlTransition[];

  /**
   * @schema S3ControlLifecycleRule#NoncurrentVersionTransitions
   */
  readonly noncurrentVersionTransitions?: S3ControlNoncurrentVersionTransition[];

  /**
   * @schema S3ControlLifecycleRule#NoncurrentVersionExpiration
   */
  readonly noncurrentVersionExpiration?: S3ControlNoncurrentVersionExpiration;

  /**
   * @schema S3ControlLifecycleRule#AbortIncompleteMultipartUpload
   */
  readonly abortIncompleteMultipartUpload?: S3ControlAbortIncompleteMultipartUpload;

}

/**
 * Converts an object of type 'S3ControlLifecycleRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlLifecycleRule(obj: S3ControlLifecycleRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expiration': toJson_S3ControlLifecycleExpiration(obj.expiration),
    'ID': obj.id,
    'Filter': toJson_S3ControlLifecycleRuleFilter(obj.filter),
    'Status': obj.status,
    'Transitions': obj.transitions?.map(y => toJson_S3ControlTransition(y)),
    'NoncurrentVersionTransitions': obj.noncurrentVersionTransitions?.map(y => toJson_S3ControlNoncurrentVersionTransition(y)),
    'NoncurrentVersionExpiration': toJson_S3ControlNoncurrentVersionExpiration(obj.noncurrentVersionExpiration),
    'AbortIncompleteMultipartUpload': toJson_S3ControlAbortIncompleteMultipartUpload(obj.abortIncompleteMultipartUpload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlStorageLensConfiguration
 */
export interface S3ControlStorageLensConfiguration {
  /**
   * @schema S3ControlStorageLensConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema S3ControlStorageLensConfiguration#AccountLevel
   */
  readonly accountLevel?: S3ControlAccountLevel;

  /**
   * @schema S3ControlStorageLensConfiguration#Include
   */
  readonly include?: S3ControlInclude;

  /**
   * @schema S3ControlStorageLensConfiguration#Exclude
   */
  readonly exclude?: S3ControlExclude;

  /**
   * @schema S3ControlStorageLensConfiguration#DataExport
   */
  readonly dataExport?: S3ControlStorageLensDataExport;

  /**
   * @schema S3ControlStorageLensConfiguration#IsEnabled
   */
  readonly isEnabled?: boolean;

  /**
   * @schema S3ControlStorageLensConfiguration#AwsOrg
   */
  readonly awsOrg?: S3ControlStorageLensAwsOrg;

  /**
   * @schema S3ControlStorageLensConfiguration#StorageLensArn
   */
  readonly storageLensArn?: string;

}

/**
 * Converts an object of type 'S3ControlStorageLensConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlStorageLensConfiguration(obj: S3ControlStorageLensConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'AccountLevel': toJson_S3ControlAccountLevel(obj.accountLevel),
    'Include': toJson_S3ControlInclude(obj.include),
    'Exclude': toJson_S3ControlExclude(obj.exclude),
    'DataExport': toJson_S3ControlStorageLensDataExport(obj.dataExport),
    'IsEnabled': obj.isEnabled,
    'AwsOrg': toJson_S3ControlStorageLensAwsOrg(obj.awsOrg),
    'StorageLensArn': obj.storageLensArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlStorageLensTag
 */
export interface S3ControlStorageLensTag {
  /**
   * @schema S3ControlStorageLensTag#Key
   */
  readonly key?: string;

  /**
   * @schema S3ControlStorageLensTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'S3ControlStorageLensTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlStorageLensTag(obj: S3ControlStorageLensTag | undefined): Record<string, any> | undefined {
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
 * @schema S3ControlAccessPoint
 */
export interface S3ControlAccessPoint {
  /**
   * @schema S3ControlAccessPoint#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlAccessPoint#NetworkOrigin
   */
  readonly networkOrigin?: string;

  /**
   * @schema S3ControlAccessPoint#VpcConfiguration
   */
  readonly vpcConfiguration?: S3ControlVpcConfiguration;

  /**
   * @schema S3ControlAccessPoint#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlAccessPoint#AccessPointArn
   */
  readonly accessPointArn?: string;

  /**
   * @schema S3ControlAccessPoint#Alias
   */
  readonly alias?: string;

}

/**
 * Converts an object of type 'S3ControlAccessPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlAccessPoint(obj: S3ControlAccessPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'NetworkOrigin': obj.networkOrigin,
    'VpcConfiguration': toJson_S3ControlVpcConfiguration(obj.vpcConfiguration),
    'Bucket': obj.bucket,
    'AccessPointArn': obj.accessPointArn,
    'Alias': obj.alias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlObjectLambdaAccessPoint
 */
export interface S3ControlObjectLambdaAccessPoint {
  /**
   * @schema S3ControlObjectLambdaAccessPoint#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlObjectLambdaAccessPoint#ObjectLambdaAccessPointArn
   */
  readonly objectLambdaAccessPointArn?: string;

}

/**
 * Converts an object of type 'S3ControlObjectLambdaAccessPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlObjectLambdaAccessPoint(obj: S3ControlObjectLambdaAccessPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ObjectLambdaAccessPointArn': obj.objectLambdaAccessPointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlJobListDescriptor
 */
export interface S3ControlJobListDescriptor {
  /**
   * @schema S3ControlJobListDescriptor#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlJobListDescriptor#Description
   */
  readonly description?: string;

  /**
   * @schema S3ControlJobListDescriptor#Operation
   */
  readonly operation?: string;

  /**
   * @schema S3ControlJobListDescriptor#Priority
   */
  readonly priority?: number;

  /**
   * @schema S3ControlJobListDescriptor#Status
   */
  readonly status?: string;

  /**
   * @schema S3ControlJobListDescriptor#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema S3ControlJobListDescriptor#TerminationDate
   */
  readonly terminationDate?: string;

  /**
   * @schema S3ControlJobListDescriptor#ProgressSummary
   */
  readonly progressSummary?: S3ControlJobProgressSummary;

}

/**
 * Converts an object of type 'S3ControlJobListDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlJobListDescriptor(obj: S3ControlJobListDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'Description': obj.description,
    'Operation': obj.operation,
    'Priority': obj.priority,
    'Status': obj.status,
    'CreationTime': obj.creationTime,
    'TerminationDate': obj.terminationDate,
    'ProgressSummary': toJson_S3ControlJobProgressSummary(obj.progressSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlRegionalBucket
 */
export interface S3ControlRegionalBucket {
  /**
   * @schema S3ControlRegionalBucket#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlRegionalBucket#BucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema S3ControlRegionalBucket#PublicAccessBlockEnabled
   */
  readonly publicAccessBlockEnabled?: boolean;

  /**
   * @schema S3ControlRegionalBucket#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema S3ControlRegionalBucket#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * Converts an object of type 'S3ControlRegionalBucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlRegionalBucket(obj: S3ControlRegionalBucket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'BucketArn': obj.bucketArn,
    'PublicAccessBlockEnabled': obj.publicAccessBlockEnabled,
    'CreationDate': obj.creationDate,
    'OutpostId': obj.outpostId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlListStorageLensConfigurationEntry
 */
export interface S3ControlListStorageLensConfigurationEntry {
  /**
   * @schema S3ControlListStorageLensConfigurationEntry#Id
   */
  readonly id?: string;

  /**
   * @schema S3ControlListStorageLensConfigurationEntry#StorageLensArn
   */
  readonly storageLensArn?: string;

  /**
   * @schema S3ControlListStorageLensConfigurationEntry#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema S3ControlListStorageLensConfigurationEntry#IsEnabled
   */
  readonly isEnabled?: boolean;

}

/**
 * Converts an object of type 'S3ControlListStorageLensConfigurationEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlListStorageLensConfigurationEntry(obj: S3ControlListStorageLensConfigurationEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'StorageLensArn': obj.storageLensArn,
    'HomeRegion': obj.homeRegion,
    'IsEnabled': obj.isEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlLifecycleConfiguration
 */
export interface S3ControlLifecycleConfiguration {
  /**
   * @schema S3ControlLifecycleConfiguration#Rules
   */
  readonly rules?: S3ControlLifecycleRule[];

}

/**
 * Converts an object of type 'S3ControlLifecycleConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlLifecycleConfiguration(obj: S3ControlLifecycleConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_S3ControlLifecycleRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlTagging
 */
export interface S3ControlTagging {
  /**
   * @schema S3ControlTagging#TagSet
   */
  readonly tagSet?: S3ControlS3Tag[];

}

/**
 * Converts an object of type 'S3ControlTagging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlTagging(obj: S3ControlTagging | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagSet': obj.tagSet?.map(y => toJson_S3ControlS3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlObjectLambdaTransformationConfiguration
 */
export interface S3ControlObjectLambdaTransformationConfiguration {
  /**
   * @schema S3ControlObjectLambdaTransformationConfiguration#Actions
   */
  readonly actions?: string[];

  /**
   * @schema S3ControlObjectLambdaTransformationConfiguration#ContentTransformation
   */
  readonly contentTransformation?: S3ControlObjectLambdaContentTransformation;

}

/**
 * Converts an object of type 'S3ControlObjectLambdaTransformationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlObjectLambdaTransformationConfiguration(obj: S3ControlObjectLambdaTransformationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Actions': obj.actions?.map(y => y),
    'ContentTransformation': toJson_S3ControlObjectLambdaContentTransformation(obj.contentTransformation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlLambdaInvokeOperation
 */
export interface S3ControlLambdaInvokeOperation {
  /**
   * @schema S3ControlLambdaInvokeOperation#FunctionArn
   */
  readonly functionArn?: string;

}

/**
 * Converts an object of type 'S3ControlLambdaInvokeOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlLambdaInvokeOperation(obj: S3ControlLambdaInvokeOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionArn': obj.functionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3CopyObjectOperation
 */
export interface S3ControlS3CopyObjectOperation {
  /**
   * @schema S3ControlS3CopyObjectOperation#TargetResource
   */
  readonly targetResource?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#CannedAccessControlList
   */
  readonly cannedAccessControlList?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#AccessControlGrants
   */
  readonly accessControlGrants?: S3ControlS3Grant[];

  /**
   * @schema S3ControlS3CopyObjectOperation#MetadataDirective
   */
  readonly metadataDirective?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#ModifiedSinceConstraint
   */
  readonly modifiedSinceConstraint?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#NewObjectMetadata
   */
  readonly newObjectMetadata?: S3ControlS3ObjectMetadata;

  /**
   * @schema S3ControlS3CopyObjectOperation#NewObjectTagging
   */
  readonly newObjectTagging?: S3ControlS3Tag[];

  /**
   * @schema S3ControlS3CopyObjectOperation#RedirectLocation
   */
  readonly redirectLocation?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema S3ControlS3CopyObjectOperation#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#UnModifiedSinceConstraint
   */
  readonly unModifiedSinceConstraint?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#SSEAwsKmsKeyId
   */
  readonly sseAwsKmsKeyId?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#TargetKeyPrefix
   */
  readonly targetKeyPrefix?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

}

/**
 * Converts an object of type 'S3ControlS3CopyObjectOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3CopyObjectOperation(obj: S3ControlS3CopyObjectOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetResource': obj.targetResource,
    'CannedAccessControlList': obj.cannedAccessControlList,
    'AccessControlGrants': obj.accessControlGrants?.map(y => toJson_S3ControlS3Grant(y)),
    'MetadataDirective': obj.metadataDirective,
    'ModifiedSinceConstraint': obj.modifiedSinceConstraint,
    'NewObjectMetadata': toJson_S3ControlS3ObjectMetadata(obj.newObjectMetadata),
    'NewObjectTagging': obj.newObjectTagging?.map(y => toJson_S3ControlS3Tag(y)),
    'RedirectLocation': obj.redirectLocation,
    'RequesterPays': obj.requesterPays,
    'StorageClass': obj.storageClass,
    'UnModifiedSinceConstraint': obj.unModifiedSinceConstraint,
    'SSEAwsKmsKeyId': obj.sseAwsKmsKeyId,
    'TargetKeyPrefix': obj.targetKeyPrefix,
    'ObjectLockLegalHoldStatus': obj.objectLockLegalHoldStatus,
    'ObjectLockMode': obj.objectLockMode,
    'ObjectLockRetainUntilDate': obj.objectLockRetainUntilDate,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3SetObjectAclOperation
 */
export interface S3ControlS3SetObjectAclOperation {
  /**
   * @schema S3ControlS3SetObjectAclOperation#AccessControlPolicy
   */
  readonly accessControlPolicy?: S3ControlS3AccessControlPolicy;

}

/**
 * Converts an object of type 'S3ControlS3SetObjectAclOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3SetObjectAclOperation(obj: S3ControlS3SetObjectAclOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessControlPolicy': toJson_S3ControlS3AccessControlPolicy(obj.accessControlPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3SetObjectTaggingOperation
 */
export interface S3ControlS3SetObjectTaggingOperation {
  /**
   * @schema S3ControlS3SetObjectTaggingOperation#TagSet
   */
  readonly tagSet?: S3ControlS3Tag[];

}

/**
 * Converts an object of type 'S3ControlS3SetObjectTaggingOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3SetObjectTaggingOperation(obj: S3ControlS3SetObjectTaggingOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagSet': obj.tagSet?.map(y => toJson_S3ControlS3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3DeleteObjectTaggingOperation
 */
export interface S3ControlS3DeleteObjectTaggingOperation {
}

/**
 * Converts an object of type 'S3ControlS3DeleteObjectTaggingOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3DeleteObjectTaggingOperation(obj: S3ControlS3DeleteObjectTaggingOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3InitiateRestoreObjectOperation
 */
export interface S3ControlS3InitiateRestoreObjectOperation {
  /**
   * @schema S3ControlS3InitiateRestoreObjectOperation#ExpirationInDays
   */
  readonly expirationInDays?: number;

  /**
   * @schema S3ControlS3InitiateRestoreObjectOperation#GlacierJobTier
   */
  readonly glacierJobTier?: string;

}

/**
 * Converts an object of type 'S3ControlS3InitiateRestoreObjectOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3InitiateRestoreObjectOperation(obj: S3ControlS3InitiateRestoreObjectOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExpirationInDays': obj.expirationInDays,
    'GlacierJobTier': obj.glacierJobTier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3SetObjectLegalHoldOperation
 */
export interface S3ControlS3SetObjectLegalHoldOperation {
  /**
   * @schema S3ControlS3SetObjectLegalHoldOperation#LegalHold
   */
  readonly legalHold?: S3ControlS3ObjectLockLegalHold;

}

/**
 * Converts an object of type 'S3ControlS3SetObjectLegalHoldOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3SetObjectLegalHoldOperation(obj: S3ControlS3SetObjectLegalHoldOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LegalHold': toJson_S3ControlS3ObjectLockLegalHold(obj.legalHold),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3SetObjectRetentionOperation
 */
export interface S3ControlS3SetObjectRetentionOperation {
  /**
   * @schema S3ControlS3SetObjectRetentionOperation#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

  /**
   * @schema S3ControlS3SetObjectRetentionOperation#Retention
   */
  readonly retention?: S3ControlS3Retention;

}

/**
 * Converts an object of type 'S3ControlS3SetObjectRetentionOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3SetObjectRetentionOperation(obj: S3ControlS3SetObjectRetentionOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BypassGovernanceRetention': obj.bypassGovernanceRetention,
    'Retention': toJson_S3ControlS3Retention(obj.retention),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlJobManifestSpec
 */
export interface S3ControlJobManifestSpec {
  /**
   * @schema S3ControlJobManifestSpec#Format
   */
  readonly format?: string;

  /**
   * @schema S3ControlJobManifestSpec#Fields
   */
  readonly fields?: string[];

}

/**
 * Converts an object of type 'S3ControlJobManifestSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlJobManifestSpec(obj: S3ControlJobManifestSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'Fields': obj.fields?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlJobManifestLocation
 */
export interface S3ControlJobManifestLocation {
  /**
   * @schema S3ControlJobManifestLocation#ObjectArn
   */
  readonly objectArn?: string;

  /**
   * @schema S3ControlJobManifestLocation#ObjectVersionId
   */
  readonly objectVersionId?: string;

  /**
   * @schema S3ControlJobManifestLocation#ETag
   */
  readonly eTag?: string;

}

/**
 * Converts an object of type 'S3ControlJobManifestLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlJobManifestLocation(obj: S3ControlJobManifestLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectArn': obj.objectArn,
    'ObjectVersionId': obj.objectVersionId,
    'ETag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlJobProgressSummary
 */
export interface S3ControlJobProgressSummary {
  /**
   * @schema S3ControlJobProgressSummary#TotalNumberOfTasks
   */
  readonly totalNumberOfTasks?: number;

  /**
   * @schema S3ControlJobProgressSummary#NumberOfTasksSucceeded
   */
  readonly numberOfTasksSucceeded?: number;

  /**
   * @schema S3ControlJobProgressSummary#NumberOfTasksFailed
   */
  readonly numberOfTasksFailed?: number;

}

/**
 * Converts an object of type 'S3ControlJobProgressSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlJobProgressSummary(obj: S3ControlJobProgressSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TotalNumberOfTasks': obj.totalNumberOfTasks,
    'NumberOfTasksSucceeded': obj.numberOfTasksSucceeded,
    'NumberOfTasksFailed': obj.numberOfTasksFailed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlJobFailure
 */
export interface S3ControlJobFailure {
  /**
   * @schema S3ControlJobFailure#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema S3ControlJobFailure#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'S3ControlJobFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlJobFailure(obj: S3ControlJobFailure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailureCode': obj.failureCode,
    'FailureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlLifecycleExpiration
 */
export interface S3ControlLifecycleExpiration {
  /**
   * @schema S3ControlLifecycleExpiration#Date
   */
  readonly date?: string;

  /**
   * @schema S3ControlLifecycleExpiration#Days
   */
  readonly days?: number;

  /**
   * @schema S3ControlLifecycleExpiration#ExpiredObjectDeleteMarker
   */
  readonly expiredObjectDeleteMarker?: boolean;

}

/**
 * Converts an object of type 'S3ControlLifecycleExpiration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlLifecycleExpiration(obj: S3ControlLifecycleExpiration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Date': obj.date,
    'Days': obj.days,
    'ExpiredObjectDeleteMarker': obj.expiredObjectDeleteMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlLifecycleRuleFilter
 */
export interface S3ControlLifecycleRuleFilter {
  /**
   * @schema S3ControlLifecycleRuleFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ControlLifecycleRuleFilter#Tag
   */
  readonly tag?: S3ControlS3Tag;

  /**
   * @schema S3ControlLifecycleRuleFilter#And
   */
  readonly and?: S3ControlLifecycleRuleAndOperator;

}

/**
 * Converts an object of type 'S3ControlLifecycleRuleFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlLifecycleRuleFilter(obj: S3ControlLifecycleRuleFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tag': toJson_S3ControlS3Tag(obj.tag),
    'And': toJson_S3ControlLifecycleRuleAndOperator(obj.and),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlTransition
 */
export interface S3ControlTransition {
  /**
   * @schema S3ControlTransition#Date
   */
  readonly date?: string;

  /**
   * @schema S3ControlTransition#Days
   */
  readonly days?: number;

  /**
   * @schema S3ControlTransition#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * Converts an object of type 'S3ControlTransition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlTransition(obj: S3ControlTransition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Date': obj.date,
    'Days': obj.days,
    'StorageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlNoncurrentVersionTransition
 */
export interface S3ControlNoncurrentVersionTransition {
  /**
   * @schema S3ControlNoncurrentVersionTransition#NoncurrentDays
   */
  readonly noncurrentDays?: number;

  /**
   * @schema S3ControlNoncurrentVersionTransition#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * Converts an object of type 'S3ControlNoncurrentVersionTransition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlNoncurrentVersionTransition(obj: S3ControlNoncurrentVersionTransition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NoncurrentDays': obj.noncurrentDays,
    'StorageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlNoncurrentVersionExpiration
 */
export interface S3ControlNoncurrentVersionExpiration {
  /**
   * @schema S3ControlNoncurrentVersionExpiration#NoncurrentDays
   */
  readonly noncurrentDays?: number;

}

/**
 * Converts an object of type 'S3ControlNoncurrentVersionExpiration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlNoncurrentVersionExpiration(obj: S3ControlNoncurrentVersionExpiration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NoncurrentDays': obj.noncurrentDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlAbortIncompleteMultipartUpload
 */
export interface S3ControlAbortIncompleteMultipartUpload {
  /**
   * @schema S3ControlAbortIncompleteMultipartUpload#DaysAfterInitiation
   */
  readonly daysAfterInitiation?: number;

}

/**
 * Converts an object of type 'S3ControlAbortIncompleteMultipartUpload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlAbortIncompleteMultipartUpload(obj: S3ControlAbortIncompleteMultipartUpload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DaysAfterInitiation': obj.daysAfterInitiation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlAccountLevel
 */
export interface S3ControlAccountLevel {
  /**
   * @schema S3ControlAccountLevel#ActivityMetrics
   */
  readonly activityMetrics?: S3ControlActivityMetrics;

  /**
   * @schema S3ControlAccountLevel#BucketLevel
   */
  readonly bucketLevel?: S3ControlBucketLevel;

}

/**
 * Converts an object of type 'S3ControlAccountLevel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlAccountLevel(obj: S3ControlAccountLevel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivityMetrics': toJson_S3ControlActivityMetrics(obj.activityMetrics),
    'BucketLevel': toJson_S3ControlBucketLevel(obj.bucketLevel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlInclude
 */
export interface S3ControlInclude {
  /**
   * @schema S3ControlInclude#Buckets
   */
  readonly buckets?: string[];

  /**
   * @schema S3ControlInclude#Regions
   */
  readonly regions?: string[];

}

/**
 * Converts an object of type 'S3ControlInclude' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlInclude(obj: S3ControlInclude | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Buckets': obj.buckets?.map(y => y),
    'Regions': obj.regions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlExclude
 */
export interface S3ControlExclude {
  /**
   * @schema S3ControlExclude#Buckets
   */
  readonly buckets?: string[];

  /**
   * @schema S3ControlExclude#Regions
   */
  readonly regions?: string[];

}

/**
 * Converts an object of type 'S3ControlExclude' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlExclude(obj: S3ControlExclude | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Buckets': obj.buckets?.map(y => y),
    'Regions': obj.regions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlStorageLensDataExport
 */
export interface S3ControlStorageLensDataExport {
  /**
   * @schema S3ControlStorageLensDataExport#S3BucketDestination
   */
  readonly s3BucketDestination?: S3ControlS3BucketDestination;

}

/**
 * Converts an object of type 'S3ControlStorageLensDataExport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlStorageLensDataExport(obj: S3ControlStorageLensDataExport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3BucketDestination': toJson_S3ControlS3BucketDestination(obj.s3BucketDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlStorageLensAwsOrg
 */
export interface S3ControlStorageLensAwsOrg {
  /**
   * @schema S3ControlStorageLensAwsOrg#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'S3ControlStorageLensAwsOrg' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlStorageLensAwsOrg(obj: S3ControlStorageLensAwsOrg | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlObjectLambdaContentTransformation
 */
export interface S3ControlObjectLambdaContentTransformation {
  /**
   * @schema S3ControlObjectLambdaContentTransformation#AwsLambda
   */
  readonly awsLambda?: S3ControlAwsLambdaTransformation;

}

/**
 * Converts an object of type 'S3ControlObjectLambdaContentTransformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlObjectLambdaContentTransformation(obj: S3ControlObjectLambdaContentTransformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsLambda': toJson_S3ControlAwsLambdaTransformation(obj.awsLambda),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3Grant
 */
export interface S3ControlS3Grant {
  /**
   * @schema S3ControlS3Grant#Grantee
   */
  readonly grantee?: S3ControlS3Grantee;

  /**
   * @schema S3ControlS3Grant#Permission
   */
  readonly permission?: string;

}

/**
 * Converts an object of type 'S3ControlS3Grant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3Grant(obj: S3ControlS3Grant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grantee': toJson_S3ControlS3Grantee(obj.grantee),
    'Permission': obj.permission,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3ObjectMetadata
 */
export interface S3ControlS3ObjectMetadata {
  /**
   * @schema S3ControlS3ObjectMetadata#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

  /**
   * @schema S3ControlS3ObjectMetadata#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#HttpExpiresDate
   */
  readonly httpExpiresDate?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#RequesterCharged
   */
  readonly requesterCharged?: boolean;

  /**
   * @schema S3ControlS3ObjectMetadata#SSEAlgorithm
   */
  readonly sseAlgorithm?: string;

}

/**
 * Converts an object of type 'S3ControlS3ObjectMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3ObjectMetadata(obj: S3ControlS3ObjectMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheControl': obj.cacheControl,
    'ContentDisposition': obj.contentDisposition,
    'ContentEncoding': obj.contentEncoding,
    'ContentLanguage': obj.contentLanguage,
    'UserMetadata': ((obj.userMetadata) === undefined) ? undefined : (Object.entries(obj.userMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ContentLength': obj.contentLength,
    'ContentMD5': obj.contentMd5,
    'ContentType': obj.contentType,
    'HttpExpiresDate': obj.httpExpiresDate,
    'RequesterCharged': obj.requesterCharged,
    'SSEAlgorithm': obj.sseAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3AccessControlPolicy
 */
export interface S3ControlS3AccessControlPolicy {
  /**
   * @schema S3ControlS3AccessControlPolicy#AccessControlList
   */
  readonly accessControlList?: S3ControlS3AccessControlList;

  /**
   * @schema S3ControlS3AccessControlPolicy#CannedAccessControlList
   */
  readonly cannedAccessControlList?: string;

}

/**
 * Converts an object of type 'S3ControlS3AccessControlPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3AccessControlPolicy(obj: S3ControlS3AccessControlPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessControlList': toJson_S3ControlS3AccessControlList(obj.accessControlList),
    'CannedAccessControlList': obj.cannedAccessControlList,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3ObjectLockLegalHold
 */
export interface S3ControlS3ObjectLockLegalHold {
  /**
   * @schema S3ControlS3ObjectLockLegalHold#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'S3ControlS3ObjectLockLegalHold' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3ObjectLockLegalHold(obj: S3ControlS3ObjectLockLegalHold | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3Retention
 */
export interface S3ControlS3Retention {
  /**
   * @schema S3ControlS3Retention#RetainUntilDate
   */
  readonly retainUntilDate?: string;

  /**
   * @schema S3ControlS3Retention#Mode
   */
  readonly mode?: string;

}

/**
 * Converts an object of type 'S3ControlS3Retention' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3Retention(obj: S3ControlS3Retention | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RetainUntilDate': obj.retainUntilDate,
    'Mode': obj.mode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlLifecycleRuleAndOperator
 */
export interface S3ControlLifecycleRuleAndOperator {
  /**
   * @schema S3ControlLifecycleRuleAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ControlLifecycleRuleAndOperator#Tags
   */
  readonly tags?: S3ControlS3Tag[];

}

/**
 * Converts an object of type 'S3ControlLifecycleRuleAndOperator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlLifecycleRuleAndOperator(obj: S3ControlLifecycleRuleAndOperator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tags': obj.tags?.map(y => toJson_S3ControlS3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlActivityMetrics
 */
export interface S3ControlActivityMetrics {
  /**
   * @schema S3ControlActivityMetrics#IsEnabled
   */
  readonly isEnabled?: boolean;

}

/**
 * Converts an object of type 'S3ControlActivityMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlActivityMetrics(obj: S3ControlActivityMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsEnabled': obj.isEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlBucketLevel
 */
export interface S3ControlBucketLevel {
  /**
   * @schema S3ControlBucketLevel#ActivityMetrics
   */
  readonly activityMetrics?: S3ControlActivityMetrics;

  /**
   * @schema S3ControlBucketLevel#PrefixLevel
   */
  readonly prefixLevel?: S3ControlPrefixLevel;

}

/**
 * Converts an object of type 'S3ControlBucketLevel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlBucketLevel(obj: S3ControlBucketLevel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivityMetrics': toJson_S3ControlActivityMetrics(obj.activityMetrics),
    'PrefixLevel': toJson_S3ControlPrefixLevel(obj.prefixLevel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3BucketDestination
 */
export interface S3ControlS3BucketDestination {
  /**
   * @schema S3ControlS3BucketDestination#Format
   */
  readonly format?: string;

  /**
   * @schema S3ControlS3BucketDestination#OutputSchemaVersion
   */
  readonly outputSchemaVersion?: string;

  /**
   * @schema S3ControlS3BucketDestination#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3ControlS3BucketDestination#Arn
   */
  readonly arn?: string;

  /**
   * @schema S3ControlS3BucketDestination#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ControlS3BucketDestination#Encryption
   */
  readonly encryption?: S3ControlStorageLensDataExportEncryption;

}

/**
 * Converts an object of type 'S3ControlS3BucketDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3BucketDestination(obj: S3ControlS3BucketDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'OutputSchemaVersion': obj.outputSchemaVersion,
    'AccountId': obj.accountId,
    'Arn': obj.arn,
    'Prefix': obj.prefix,
    'Encryption': toJson_S3ControlStorageLensDataExportEncryption(obj.encryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlAwsLambdaTransformation
 */
export interface S3ControlAwsLambdaTransformation {
  /**
   * @schema S3ControlAwsLambdaTransformation#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema S3ControlAwsLambdaTransformation#FunctionPayload
   */
  readonly functionPayload?: string;

}

/**
 * Converts an object of type 'S3ControlAwsLambdaTransformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlAwsLambdaTransformation(obj: S3ControlAwsLambdaTransformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionArn': obj.functionArn,
    'FunctionPayload': obj.functionPayload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3Grantee
 */
export interface S3ControlS3Grantee {
  /**
   * @schema S3ControlS3Grantee#TypeIdentifier
   */
  readonly typeIdentifier?: string;

  /**
   * @schema S3ControlS3Grantee#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema S3ControlS3Grantee#DisplayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'S3ControlS3Grantee' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3Grantee(obj: S3ControlS3Grantee | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeIdentifier': obj.typeIdentifier,
    'Identifier': obj.identifier,
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3AccessControlList
 */
export interface S3ControlS3AccessControlList {
  /**
   * @schema S3ControlS3AccessControlList#Owner
   */
  readonly owner?: S3ControlS3ObjectOwner;

  /**
   * @schema S3ControlS3AccessControlList#Grants
   */
  readonly grants?: S3ControlS3Grant[];

}

/**
 * Converts an object of type 'S3ControlS3AccessControlList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3AccessControlList(obj: S3ControlS3AccessControlList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Owner': toJson_S3ControlS3ObjectOwner(obj.owner),
    'Grants': obj.grants?.map(y => toJson_S3ControlS3Grant(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPrefixLevel
 */
export interface S3ControlPrefixLevel {
  /**
   * @schema S3ControlPrefixLevel#StorageMetrics
   */
  readonly storageMetrics?: S3ControlPrefixLevelStorageMetrics;

}

/**
 * Converts an object of type 'S3ControlPrefixLevel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPrefixLevel(obj: S3ControlPrefixLevel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageMetrics': toJson_S3ControlPrefixLevelStorageMetrics(obj.storageMetrics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlStorageLensDataExportEncryption
 */
export interface S3ControlStorageLensDataExportEncryption {
  /**
   * @schema S3ControlStorageLensDataExportEncryption#SSES3
   */
  readonly sses3?: S3ControlSses3;

  /**
   * @schema S3ControlStorageLensDataExportEncryption#SSEKMS
   */
  readonly ssekms?: S3ControlSsekms;

}

/**
 * Converts an object of type 'S3ControlStorageLensDataExportEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlStorageLensDataExportEncryption(obj: S3ControlStorageLensDataExportEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SSES3': toJson_S3ControlSses3(obj.sses3),
    'SSEKMS': toJson_S3ControlSsekms(obj.ssekms),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlS3ObjectOwner
 */
export interface S3ControlS3ObjectOwner {
  /**
   * @schema S3ControlS3ObjectOwner#ID
   */
  readonly id?: string;

  /**
   * @schema S3ControlS3ObjectOwner#DisplayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'S3ControlS3ObjectOwner' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlS3ObjectOwner(obj: S3ControlS3ObjectOwner | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ID': obj.id,
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlPrefixLevelStorageMetrics
 */
export interface S3ControlPrefixLevelStorageMetrics {
  /**
   * @schema S3ControlPrefixLevelStorageMetrics#IsEnabled
   */
  readonly isEnabled?: boolean;

  /**
   * @schema S3ControlPrefixLevelStorageMetrics#SelectionCriteria
   */
  readonly selectionCriteria?: S3ControlSelectionCriteria;

}

/**
 * Converts an object of type 'S3ControlPrefixLevelStorageMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlPrefixLevelStorageMetrics(obj: S3ControlPrefixLevelStorageMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsEnabled': obj.isEnabled,
    'SelectionCriteria': toJson_S3ControlSelectionCriteria(obj.selectionCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlSses3
 */
export interface S3ControlSses3 {
}

/**
 * Converts an object of type 'S3ControlSses3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlSses3(obj: S3ControlSses3 | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlSsekms
 */
export interface S3ControlSsekms {
  /**
   * @schema S3ControlSsekms#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'S3ControlSsekms' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlSsekms(obj: S3ControlSsekms | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ControlSelectionCriteria
 */
export interface S3ControlSelectionCriteria {
  /**
   * @schema S3ControlSelectionCriteria#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ControlSelectionCriteria#MaxDepth
   */
  readonly maxDepth?: number;

  /**
   * @schema S3ControlSelectionCriteria#MinStorageBytesPercentage
   */
  readonly minStorageBytesPercentage?: number;

}

/**
 * Converts an object of type 'S3ControlSelectionCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ControlSelectionCriteria(obj: S3ControlSelectionCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Delimiter': obj.delimiter,
    'MaxDepth': obj.maxDepth,
    'MinStorageBytesPercentage': obj.minStorageBytesPercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
