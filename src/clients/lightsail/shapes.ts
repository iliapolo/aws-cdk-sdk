/**
 * @schema LightsailAllocateStaticIpRequest
 */
export interface LightsailAllocateStaticIpRequest {
  /**
   * @schema LightsailAllocateStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * Converts an object of type 'LightsailAllocateStaticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAllocateStaticIpRequest(obj: LightsailAllocateStaticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'staticIpName': obj.staticIpName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAllocateStaticIpResult
 */
export interface LightsailAllocateStaticIpResult {
  /**
   * @schema LightsailAllocateStaticIpResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailAllocateStaticIpResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAllocateStaticIpResult(obj: LightsailAllocateStaticIpResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachCertificateToDistributionRequest
 */
export interface LightsailAttachCertificateToDistributionRequest {
  /**
   * @schema LightsailAttachCertificateToDistributionRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema LightsailAttachCertificateToDistributionRequest#certificateName
   */
  readonly certificateName: string;

}

/**
 * Converts an object of type 'LightsailAttachCertificateToDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachCertificateToDistributionRequest(obj: LightsailAttachCertificateToDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
    'certificateName': obj.certificateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachCertificateToDistributionResult
 */
export interface LightsailAttachCertificateToDistributionResult {
  /**
   * @schema LightsailAttachCertificateToDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailAttachCertificateToDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachCertificateToDistributionResult(obj: LightsailAttachCertificateToDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachDiskRequest
 */
export interface LightsailAttachDiskRequest {
  /**
   * @schema LightsailAttachDiskRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema LightsailAttachDiskRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailAttachDiskRequest#diskPath
   */
  readonly diskPath: string;

}

/**
 * Converts an object of type 'LightsailAttachDiskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachDiskRequest(obj: LightsailAttachDiskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskName': obj.diskName,
    'instanceName': obj.instanceName,
    'diskPath': obj.diskPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachDiskResult
 */
export interface LightsailAttachDiskResult {
  /**
   * @schema LightsailAttachDiskResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailAttachDiskResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachDiskResult(obj: LightsailAttachDiskResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachInstancesToLoadBalancerRequest
 */
export interface LightsailAttachInstancesToLoadBalancerRequest {
  /**
   * @schema LightsailAttachInstancesToLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailAttachInstancesToLoadBalancerRequest#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * Converts an object of type 'LightsailAttachInstancesToLoadBalancerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachInstancesToLoadBalancerRequest(obj: LightsailAttachInstancesToLoadBalancerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
    'instanceNames': obj.instanceNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachInstancesToLoadBalancerResult
 */
export interface LightsailAttachInstancesToLoadBalancerResult {
  /**
   * @schema LightsailAttachInstancesToLoadBalancerResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailAttachInstancesToLoadBalancerResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachInstancesToLoadBalancerResult(obj: LightsailAttachInstancesToLoadBalancerResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachLoadBalancerTlsCertificateRequest
 */
export interface LightsailAttachLoadBalancerTlsCertificateRequest {
  /**
   * @schema LightsailAttachLoadBalancerTlsCertificateRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailAttachLoadBalancerTlsCertificateRequest#certificateName
   */
  readonly certificateName: string;

}

/**
 * Converts an object of type 'LightsailAttachLoadBalancerTlsCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachLoadBalancerTlsCertificateRequest(obj: LightsailAttachLoadBalancerTlsCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
    'certificateName': obj.certificateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachLoadBalancerTlsCertificateResult
 */
export interface LightsailAttachLoadBalancerTlsCertificateResult {
  /**
   * @schema LightsailAttachLoadBalancerTlsCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailAttachLoadBalancerTlsCertificateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachLoadBalancerTlsCertificateResult(obj: LightsailAttachLoadBalancerTlsCertificateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachStaticIpRequest
 */
export interface LightsailAttachStaticIpRequest {
  /**
   * @schema LightsailAttachStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

  /**
   * @schema LightsailAttachStaticIpRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailAttachStaticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachStaticIpRequest(obj: LightsailAttachStaticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'staticIpName': obj.staticIpName,
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachStaticIpResult
 */
export interface LightsailAttachStaticIpResult {
  /**
   * @schema LightsailAttachStaticIpResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailAttachStaticIpResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachStaticIpResult(obj: LightsailAttachStaticIpResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCloseInstancePublicPortsRequest
 */
export interface LightsailCloseInstancePublicPortsRequest {
  /**
   * @schema LightsailCloseInstancePublicPortsRequest#portInfo
   */
  readonly portInfo: LightsailPortInfo;

  /**
   * @schema LightsailCloseInstancePublicPortsRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailCloseInstancePublicPortsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCloseInstancePublicPortsRequest(obj: LightsailCloseInstancePublicPortsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portInfo': toJson_LightsailPortInfo(obj.portInfo),
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCloseInstancePublicPortsResult
 */
export interface LightsailCloseInstancePublicPortsResult {
  /**
   * @schema LightsailCloseInstancePublicPortsResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailCloseInstancePublicPortsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCloseInstancePublicPortsResult(obj: LightsailCloseInstancePublicPortsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCopySnapshotRequest
 */
export interface LightsailCopySnapshotRequest {
  /**
   * @schema LightsailCopySnapshotRequest#sourceSnapshotName
   */
  readonly sourceSnapshotName?: string;

  /**
   * @schema LightsailCopySnapshotRequest#sourceResourceName
   */
  readonly sourceResourceName?: string;

  /**
   * @schema LightsailCopySnapshotRequest#restoreDate
   */
  readonly restoreDate?: string;

  /**
   * @schema LightsailCopySnapshotRequest#useLatestRestorableAutoSnapshot
   */
  readonly useLatestRestorableAutoSnapshot?: boolean;

  /**
   * @schema LightsailCopySnapshotRequest#targetSnapshotName
   */
  readonly targetSnapshotName: string;

  /**
   * @schema LightsailCopySnapshotRequest#sourceRegion
   */
  readonly sourceRegion: string;

}

/**
 * Converts an object of type 'LightsailCopySnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCopySnapshotRequest(obj: LightsailCopySnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceSnapshotName': obj.sourceSnapshotName,
    'sourceResourceName': obj.sourceResourceName,
    'restoreDate': obj.restoreDate,
    'useLatestRestorableAutoSnapshot': obj.useLatestRestorableAutoSnapshot,
    'targetSnapshotName': obj.targetSnapshotName,
    'sourceRegion': obj.sourceRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCopySnapshotResult
 */
export interface LightsailCopySnapshotResult {
  /**
   * @schema LightsailCopySnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCopySnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCopySnapshotResult(obj: LightsailCopySnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateBucketRequest
 */
export interface LightsailCreateBucketRequest {
  /**
   * @schema LightsailCreateBucketRequest#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema LightsailCreateBucketRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema LightsailCreateBucketRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateBucketRequest#enableObjectVersioning
   */
  readonly enableObjectVersioning?: boolean;

}

/**
 * Converts an object of type 'LightsailCreateBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateBucketRequest(obj: LightsailCreateBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'bundleId': obj.bundleId,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'enableObjectVersioning': obj.enableObjectVersioning,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateBucketResult
 */
export interface LightsailCreateBucketResult {
  /**
   * @schema LightsailCreateBucketResult#bucket
   */
  readonly bucket?: LightsailBucket;

  /**
   * @schema LightsailCreateBucketResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateBucketResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateBucketResult(obj: LightsailCreateBucketResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': toJson_LightsailBucket(obj.bucket),
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateBucketAccessKeyRequest
 */
export interface LightsailCreateBucketAccessKeyRequest {
  /**
   * @schema LightsailCreateBucketAccessKeyRequest#bucketName
   */
  readonly bucketName: string;

}

/**
 * Converts an object of type 'LightsailCreateBucketAccessKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateBucketAccessKeyRequest(obj: LightsailCreateBucketAccessKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateBucketAccessKeyResult
 */
export interface LightsailCreateBucketAccessKeyResult {
  /**
   * @schema LightsailCreateBucketAccessKeyResult#accessKey
   */
  readonly accessKey?: LightsailAccessKey;

  /**
   * @schema LightsailCreateBucketAccessKeyResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateBucketAccessKeyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateBucketAccessKeyResult(obj: LightsailCreateBucketAccessKeyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKey': toJson_LightsailAccessKey(obj.accessKey),
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateCertificateRequest
 */
export interface LightsailCreateCertificateRequest {
  /**
   * @schema LightsailCreateCertificateRequest#certificateName
   */
  readonly certificateName: string;

  /**
   * @schema LightsailCreateCertificateRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailCreateCertificateRequest#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema LightsailCreateCertificateRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateCertificateRequest(obj: LightsailCreateCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateName': obj.certificateName,
    'domainName': obj.domainName,
    'subjectAlternativeNames': obj.subjectAlternativeNames?.map(y => y),
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateCertificateResult
 */
export interface LightsailCreateCertificateResult {
  /**
   * @schema LightsailCreateCertificateResult#certificate
   */
  readonly certificate?: LightsailCertificateSummary;

  /**
   * @schema LightsailCreateCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateCertificateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateCertificateResult(obj: LightsailCreateCertificateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificate': toJson_LightsailCertificateSummary(obj.certificate),
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateCloudFormationStackRequest
 */
export interface LightsailCreateCloudFormationStackRequest {
  /**
   * @schema LightsailCreateCloudFormationStackRequest#instances
   */
  readonly instances: LightsailInstanceEntry[];

}

/**
 * Converts an object of type 'LightsailCreateCloudFormationStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateCloudFormationStackRequest(obj: LightsailCreateCloudFormationStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instances': obj.instances?.map(y => toJson_LightsailInstanceEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateCloudFormationStackResult
 */
export interface LightsailCreateCloudFormationStackResult {
  /**
   * @schema LightsailCreateCloudFormationStackResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateCloudFormationStackResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateCloudFormationStackResult(obj: LightsailCreateCloudFormationStackResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateContactMethodRequest
 */
export interface LightsailCreateContactMethodRequest {
  /**
   * @schema LightsailCreateContactMethodRequest#protocol
   */
  readonly protocol: string;

  /**
   * @schema LightsailCreateContactMethodRequest#contactEndpoint
   */
  readonly contactEndpoint: string;

}

/**
 * Converts an object of type 'LightsailCreateContactMethodRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateContactMethodRequest(obj: LightsailCreateContactMethodRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'protocol': obj.protocol,
    'contactEndpoint': obj.contactEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateContactMethodResult
 */
export interface LightsailCreateContactMethodResult {
  /**
   * @schema LightsailCreateContactMethodResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateContactMethodResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateContactMethodResult(obj: LightsailCreateContactMethodResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateContainerServiceRequest
 */
export interface LightsailCreateContainerServiceRequest {
  /**
   * @schema LightsailCreateContainerServiceRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailCreateContainerServiceRequest#power
   */
  readonly power: string;

  /**
   * @schema LightsailCreateContainerServiceRequest#scale
   */
  readonly scale: number;

  /**
   * @schema LightsailCreateContainerServiceRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateContainerServiceRequest#publicDomainNames
   */
  readonly publicDomainNames?: { [key: string]: string[] };

  /**
   * @schema LightsailCreateContainerServiceRequest#deployment
   */
  readonly deployment?: LightsailContainerServiceDeploymentRequest;

}

/**
 * Converts an object of type 'LightsailCreateContainerServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateContainerServiceRequest(obj: LightsailCreateContainerServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
    'power': obj.power,
    'scale': obj.scale,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'publicDomainNames': ((obj.publicDomainNames) === undefined) ? undefined : (Object.entries(obj.publicDomainNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'deployment': toJson_LightsailContainerServiceDeploymentRequest(obj.deployment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateContainerServiceResult
 */
export interface LightsailCreateContainerServiceResult {
  /**
   * @schema LightsailCreateContainerServiceResult#containerService
   */
  readonly containerService?: LightsailContainerService;

}

/**
 * Converts an object of type 'LightsailCreateContainerServiceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateContainerServiceResult(obj: LightsailCreateContainerServiceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerService': toJson_LightsailContainerService(obj.containerService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateContainerServiceDeploymentRequest
 */
export interface LightsailCreateContainerServiceDeploymentRequest {
  /**
   * @schema LightsailCreateContainerServiceDeploymentRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailCreateContainerServiceDeploymentRequest#containers
   */
  readonly containers?: { [key: string]: LightsailContainer };

  /**
   * @schema LightsailCreateContainerServiceDeploymentRequest#publicEndpoint
   */
  readonly publicEndpoint?: LightsailEndpointRequest;

}

/**
 * Converts an object of type 'LightsailCreateContainerServiceDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateContainerServiceDeploymentRequest(obj: LightsailCreateContainerServiceDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
    'containers': ((obj.containers) === undefined) ? undefined : (Object.entries(obj.containers).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_LightsailContainer(i[1]) }), {})),
    'publicEndpoint': toJson_LightsailEndpointRequest(obj.publicEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateContainerServiceDeploymentResult
 */
export interface LightsailCreateContainerServiceDeploymentResult {
  /**
   * @schema LightsailCreateContainerServiceDeploymentResult#containerService
   */
  readonly containerService?: LightsailContainerService;

}

/**
 * Converts an object of type 'LightsailCreateContainerServiceDeploymentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateContainerServiceDeploymentResult(obj: LightsailCreateContainerServiceDeploymentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerService': toJson_LightsailContainerService(obj.containerService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateContainerServiceRegistryLoginRequest
 */
export interface LightsailCreateContainerServiceRegistryLoginRequest {
}

/**
 * Converts an object of type 'LightsailCreateContainerServiceRegistryLoginRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateContainerServiceRegistryLoginRequest(obj: LightsailCreateContainerServiceRegistryLoginRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateContainerServiceRegistryLoginResult
 */
export interface LightsailCreateContainerServiceRegistryLoginResult {
  /**
   * @schema LightsailCreateContainerServiceRegistryLoginResult#registryLogin
   */
  readonly registryLogin?: LightsailContainerServiceRegistryLogin;

}

/**
 * Converts an object of type 'LightsailCreateContainerServiceRegistryLoginResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateContainerServiceRegistryLoginResult(obj: LightsailCreateContainerServiceRegistryLoginResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryLogin': toJson_LightsailContainerServiceRegistryLogin(obj.registryLogin),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDiskRequest
 */
export interface LightsailCreateDiskRequest {
  /**
   * @schema LightsailCreateDiskRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema LightsailCreateDiskRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema LightsailCreateDiskRequest#sizeInGb
   */
  readonly sizeInGb: number;

  /**
   * @schema LightsailCreateDiskRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateDiskRequest#addOns
   */
  readonly addOns?: LightsailAddOnRequest[];

}

/**
 * Converts an object of type 'LightsailCreateDiskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDiskRequest(obj: LightsailCreateDiskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskName': obj.diskName,
    'availabilityZone': obj.availabilityZone,
    'sizeInGb': obj.sizeInGb,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'addOns': obj.addOns?.map(y => toJson_LightsailAddOnRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDiskResult
 */
export interface LightsailCreateDiskResult {
  /**
   * @schema LightsailCreateDiskResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateDiskResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDiskResult(obj: LightsailCreateDiskResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDiskFromSnapshotRequest
 */
export interface LightsailCreateDiskFromSnapshotRequest {
  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName?: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#sizeInGb
   */
  readonly sizeInGb: number;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#addOns
   */
  readonly addOns?: LightsailAddOnRequest[];

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#sourceDiskName
   */
  readonly sourceDiskName?: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#restoreDate
   */
  readonly restoreDate?: string;

  /**
   * @schema LightsailCreateDiskFromSnapshotRequest#useLatestRestorableAutoSnapshot
   */
  readonly useLatestRestorableAutoSnapshot?: boolean;

}

/**
 * Converts an object of type 'LightsailCreateDiskFromSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDiskFromSnapshotRequest(obj: LightsailCreateDiskFromSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskName': obj.diskName,
    'diskSnapshotName': obj.diskSnapshotName,
    'availabilityZone': obj.availabilityZone,
    'sizeInGb': obj.sizeInGb,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'addOns': obj.addOns?.map(y => toJson_LightsailAddOnRequest(y)),
    'sourceDiskName': obj.sourceDiskName,
    'restoreDate': obj.restoreDate,
    'useLatestRestorableAutoSnapshot': obj.useLatestRestorableAutoSnapshot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDiskFromSnapshotResult
 */
export interface LightsailCreateDiskFromSnapshotResult {
  /**
   * @schema LightsailCreateDiskFromSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateDiskFromSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDiskFromSnapshotResult(obj: LightsailCreateDiskFromSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDiskSnapshotRequest
 */
export interface LightsailCreateDiskSnapshotRequest {
  /**
   * @schema LightsailCreateDiskSnapshotRequest#diskName
   */
  readonly diskName?: string;

  /**
   * @schema LightsailCreateDiskSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName: string;

  /**
   * @schema LightsailCreateDiskSnapshotRequest#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema LightsailCreateDiskSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateDiskSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDiskSnapshotRequest(obj: LightsailCreateDiskSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskName': obj.diskName,
    'diskSnapshotName': obj.diskSnapshotName,
    'instanceName': obj.instanceName,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDiskSnapshotResult
 */
export interface LightsailCreateDiskSnapshotResult {
  /**
   * @schema LightsailCreateDiskSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateDiskSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDiskSnapshotResult(obj: LightsailCreateDiskSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDistributionRequest
 */
export interface LightsailCreateDistributionRequest {
  /**
   * @schema LightsailCreateDistributionRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema LightsailCreateDistributionRequest#origin
   */
  readonly origin: LightsailInputOrigin;

  /**
   * @schema LightsailCreateDistributionRequest#defaultCacheBehavior
   */
  readonly defaultCacheBehavior: LightsailCacheBehavior;

  /**
   * @schema LightsailCreateDistributionRequest#cacheBehaviorSettings
   */
  readonly cacheBehaviorSettings?: LightsailCacheSettings;

  /**
   * @schema LightsailCreateDistributionRequest#cacheBehaviors
   */
  readonly cacheBehaviors?: LightsailCacheBehaviorPerPath[];

  /**
   * @schema LightsailCreateDistributionRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema LightsailCreateDistributionRequest#ipAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema LightsailCreateDistributionRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDistributionRequest(obj: LightsailCreateDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
    'origin': toJson_LightsailInputOrigin(obj.origin),
    'defaultCacheBehavior': toJson_LightsailCacheBehavior(obj.defaultCacheBehavior),
    'cacheBehaviorSettings': toJson_LightsailCacheSettings(obj.cacheBehaviorSettings),
    'cacheBehaviors': obj.cacheBehaviors?.map(y => toJson_LightsailCacheBehaviorPerPath(y)),
    'bundleId': obj.bundleId,
    'ipAddressType': obj.ipAddressType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDistributionResult
 */
export interface LightsailCreateDistributionResult {
  /**
   * @schema LightsailCreateDistributionResult#distribution
   */
  readonly distribution?: LightsailLightsailDistribution;

  /**
   * @schema LightsailCreateDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailCreateDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDistributionResult(obj: LightsailCreateDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distribution': toJson_LightsailLightsailDistribution(obj.distribution),
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDomainRequest
 */
export interface LightsailCreateDomainRequest {
  /**
   * @schema LightsailCreateDomainRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailCreateDomainRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDomainRequest(obj: LightsailCreateDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDomainResult
 */
export interface LightsailCreateDomainResult {
  /**
   * @schema LightsailCreateDomainResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailCreateDomainResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDomainResult(obj: LightsailCreateDomainResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDomainEntryRequest
 */
export interface LightsailCreateDomainEntryRequest {
  /**
   * @schema LightsailCreateDomainEntryRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailCreateDomainEntryRequest#domainEntry
   */
  readonly domainEntry: LightsailDomainEntry;

}

/**
 * Converts an object of type 'LightsailCreateDomainEntryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDomainEntryRequest(obj: LightsailCreateDomainEntryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'domainEntry': toJson_LightsailDomainEntry(obj.domainEntry),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateDomainEntryResult
 */
export interface LightsailCreateDomainEntryResult {
  /**
   * @schema LightsailCreateDomainEntryResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailCreateDomainEntryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateDomainEntryResult(obj: LightsailCreateDomainEntryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateInstanceSnapshotRequest
 */
export interface LightsailCreateInstanceSnapshotRequest {
  /**
   * @schema LightsailCreateInstanceSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName: string;

  /**
   * @schema LightsailCreateInstanceSnapshotRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailCreateInstanceSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateInstanceSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateInstanceSnapshotRequest(obj: LightsailCreateInstanceSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceSnapshotName': obj.instanceSnapshotName,
    'instanceName': obj.instanceName,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateInstanceSnapshotResult
 */
export interface LightsailCreateInstanceSnapshotResult {
  /**
   * @schema LightsailCreateInstanceSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateInstanceSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateInstanceSnapshotResult(obj: LightsailCreateInstanceSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateInstancesRequest
 */
export interface LightsailCreateInstancesRequest {
  /**
   * @schema LightsailCreateInstancesRequest#instanceNames
   */
  readonly instanceNames: string[];

  /**
   * @schema LightsailCreateInstancesRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema LightsailCreateInstancesRequest#customImageName
   */
  readonly customImageName?: string;

  /**
   * @schema LightsailCreateInstancesRequest#blueprintId
   */
  readonly blueprintId: string;

  /**
   * @schema LightsailCreateInstancesRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema LightsailCreateInstancesRequest#userData
   */
  readonly userData?: string;

  /**
   * @schema LightsailCreateInstancesRequest#keyPairName
   */
  readonly keyPairName?: string;

  /**
   * @schema LightsailCreateInstancesRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateInstancesRequest#addOns
   */
  readonly addOns?: LightsailAddOnRequest[];

  /**
   * @schema LightsailCreateInstancesRequest#ipAddressType
   */
  readonly ipAddressType?: string;

}

/**
 * Converts an object of type 'LightsailCreateInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateInstancesRequest(obj: LightsailCreateInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceNames': obj.instanceNames?.map(y => y),
    'availabilityZone': obj.availabilityZone,
    'customImageName': obj.customImageName,
    'blueprintId': obj.blueprintId,
    'bundleId': obj.bundleId,
    'userData': obj.userData,
    'keyPairName': obj.keyPairName,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'addOns': obj.addOns?.map(y => toJson_LightsailAddOnRequest(y)),
    'ipAddressType': obj.ipAddressType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateInstancesResult
 */
export interface LightsailCreateInstancesResult {
  /**
   * @schema LightsailCreateInstancesResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateInstancesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateInstancesResult(obj: LightsailCreateInstancesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateInstancesFromSnapshotRequest
 */
export interface LightsailCreateInstancesFromSnapshotRequest {
  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#instanceNames
   */
  readonly instanceNames: string[];

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#attachedDiskMapping
   */
  readonly attachedDiskMapping?: { [key: string]: LightsailDiskMap[] };

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#availabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#userData
   */
  readonly userData?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#keyPairName
   */
  readonly keyPairName?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#addOns
   */
  readonly addOns?: LightsailAddOnRequest[];

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#ipAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#sourceInstanceName
   */
  readonly sourceInstanceName?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#restoreDate
   */
  readonly restoreDate?: string;

  /**
   * @schema LightsailCreateInstancesFromSnapshotRequest#useLatestRestorableAutoSnapshot
   */
  readonly useLatestRestorableAutoSnapshot?: boolean;

}

/**
 * Converts an object of type 'LightsailCreateInstancesFromSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateInstancesFromSnapshotRequest(obj: LightsailCreateInstancesFromSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceNames': obj.instanceNames?.map(y => y),
    'attachedDiskMapping': ((obj.attachedDiskMapping) === undefined) ? undefined : (Object.entries(obj.attachedDiskMapping).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_LightsailDiskMap(y)) }), {})),
    'availabilityZone': obj.availabilityZone,
    'instanceSnapshotName': obj.instanceSnapshotName,
    'bundleId': obj.bundleId,
    'userData': obj.userData,
    'keyPairName': obj.keyPairName,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'addOns': obj.addOns?.map(y => toJson_LightsailAddOnRequest(y)),
    'ipAddressType': obj.ipAddressType,
    'sourceInstanceName': obj.sourceInstanceName,
    'restoreDate': obj.restoreDate,
    'useLatestRestorableAutoSnapshot': obj.useLatestRestorableAutoSnapshot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateInstancesFromSnapshotResult
 */
export interface LightsailCreateInstancesFromSnapshotResult {
  /**
   * @schema LightsailCreateInstancesFromSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateInstancesFromSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateInstancesFromSnapshotResult(obj: LightsailCreateInstancesFromSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateKeyPairRequest
 */
export interface LightsailCreateKeyPairRequest {
  /**
   * @schema LightsailCreateKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

  /**
   * @schema LightsailCreateKeyPairRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateKeyPairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateKeyPairRequest(obj: LightsailCreateKeyPairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPairName': obj.keyPairName,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateKeyPairResult
 */
export interface LightsailCreateKeyPairResult {
  /**
   * @schema LightsailCreateKeyPairResult#keyPair
   */
  readonly keyPair?: LightsailKeyPair;

  /**
   * @schema LightsailCreateKeyPairResult#publicKeyBase64
   */
  readonly publicKeyBase64?: string;

  /**
   * @schema LightsailCreateKeyPairResult#privateKeyBase64
   */
  readonly privateKeyBase64?: string;

  /**
   * @schema LightsailCreateKeyPairResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailCreateKeyPairResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateKeyPairResult(obj: LightsailCreateKeyPairResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPair': toJson_LightsailKeyPair(obj.keyPair),
    'publicKeyBase64': obj.publicKeyBase64,
    'privateKeyBase64': obj.privateKeyBase64,
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateLoadBalancerRequest
 */
export interface LightsailCreateLoadBalancerRequest {
  /**
   * @schema LightsailCreateLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailCreateLoadBalancerRequest#instancePort
   */
  readonly instancePort: number;

  /**
   * @schema LightsailCreateLoadBalancerRequest#healthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema LightsailCreateLoadBalancerRequest#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema LightsailCreateLoadBalancerRequest#certificateDomainName
   */
  readonly certificateDomainName?: string;

  /**
   * @schema LightsailCreateLoadBalancerRequest#certificateAlternativeNames
   */
  readonly certificateAlternativeNames?: string[];

  /**
   * @schema LightsailCreateLoadBalancerRequest#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCreateLoadBalancerRequest#ipAddressType
   */
  readonly ipAddressType?: string;

}

/**
 * Converts an object of type 'LightsailCreateLoadBalancerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateLoadBalancerRequest(obj: LightsailCreateLoadBalancerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
    'instancePort': obj.instancePort,
    'healthCheckPath': obj.healthCheckPath,
    'certificateName': obj.certificateName,
    'certificateDomainName': obj.certificateDomainName,
    'certificateAlternativeNames': obj.certificateAlternativeNames?.map(y => y),
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'ipAddressType': obj.ipAddressType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateLoadBalancerResult
 */
export interface LightsailCreateLoadBalancerResult {
  /**
   * @schema LightsailCreateLoadBalancerResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateLoadBalancerResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateLoadBalancerResult(obj: LightsailCreateLoadBalancerResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateLoadBalancerTlsCertificateRequest
 */
export interface LightsailCreateLoadBalancerTlsCertificateRequest {
  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#certificateName
   */
  readonly certificateName: string;

  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#certificateDomainName
   */
  readonly certificateDomainName: string;

  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#certificateAlternativeNames
   */
  readonly certificateAlternativeNames?: string[];

  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateLoadBalancerTlsCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateLoadBalancerTlsCertificateRequest(obj: LightsailCreateLoadBalancerTlsCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
    'certificateName': obj.certificateName,
    'certificateDomainName': obj.certificateDomainName,
    'certificateAlternativeNames': obj.certificateAlternativeNames?.map(y => y),
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateLoadBalancerTlsCertificateResult
 */
export interface LightsailCreateLoadBalancerTlsCertificateResult {
  /**
   * @schema LightsailCreateLoadBalancerTlsCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateLoadBalancerTlsCertificateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateLoadBalancerTlsCertificateResult(obj: LightsailCreateLoadBalancerTlsCertificateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateRelationalDatabaseRequest
 */
export interface LightsailCreateRelationalDatabaseRequest {
  /**
   * @schema LightsailCreateRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#relationalDatabaseBlueprintId
   */
  readonly relationalDatabaseBlueprintId: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#relationalDatabaseBundleId
   */
  readonly relationalDatabaseBundleId: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#masterDatabaseName
   */
  readonly masterDatabaseName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#masterUsername
   */
  readonly masterUsername: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#preferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema LightsailCreateRelationalDatabaseRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateRelationalDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateRelationalDatabaseRequest(obj: LightsailCreateRelationalDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'availabilityZone': obj.availabilityZone,
    'relationalDatabaseBlueprintId': obj.relationalDatabaseBlueprintId,
    'relationalDatabaseBundleId': obj.relationalDatabaseBundleId,
    'masterDatabaseName': obj.masterDatabaseName,
    'masterUsername': obj.masterUsername,
    'masterUserPassword': obj.masterUserPassword,
    'preferredBackupWindow': obj.preferredBackupWindow,
    'preferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'publiclyAccessible': obj.publiclyAccessible,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateRelationalDatabaseResult
 */
export interface LightsailCreateRelationalDatabaseResult {
  /**
   * @schema LightsailCreateRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateRelationalDatabaseResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateRelationalDatabaseResult(obj: LightsailCreateRelationalDatabaseResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest
 */
export interface LightsailCreateRelationalDatabaseFromSnapshotRequest {
  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#relationalDatabaseBundleId
   */
  readonly relationalDatabaseBundleId?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#sourceRelationalDatabaseName
   */
  readonly sourceRelationalDatabaseName?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#restoreTime
   */
  readonly restoreTime?: string;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#useLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateRelationalDatabaseFromSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateRelationalDatabaseFromSnapshotRequest(obj: LightsailCreateRelationalDatabaseFromSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'availabilityZone': obj.availabilityZone,
    'publiclyAccessible': obj.publiclyAccessible,
    'relationalDatabaseSnapshotName': obj.relationalDatabaseSnapshotName,
    'relationalDatabaseBundleId': obj.relationalDatabaseBundleId,
    'sourceRelationalDatabaseName': obj.sourceRelationalDatabaseName,
    'restoreTime': obj.restoreTime,
    'useLatestRestorableTime': obj.useLatestRestorableTime,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateRelationalDatabaseFromSnapshotResult
 */
export interface LightsailCreateRelationalDatabaseFromSnapshotResult {
  /**
   * @schema LightsailCreateRelationalDatabaseFromSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateRelationalDatabaseFromSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateRelationalDatabaseFromSnapshotResult(obj: LightsailCreateRelationalDatabaseFromSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateRelationalDatabaseSnapshotRequest
 */
export interface LightsailCreateRelationalDatabaseSnapshotRequest {
  /**
   * @schema LightsailCreateRelationalDatabaseSnapshotRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName: string;

  /**
   * @schema LightsailCreateRelationalDatabaseSnapshotRequest#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCreateRelationalDatabaseSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateRelationalDatabaseSnapshotRequest(obj: LightsailCreateRelationalDatabaseSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'relationalDatabaseSnapshotName': obj.relationalDatabaseSnapshotName,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCreateRelationalDatabaseSnapshotResult
 */
export interface LightsailCreateRelationalDatabaseSnapshotResult {
  /**
   * @schema LightsailCreateRelationalDatabaseSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailCreateRelationalDatabaseSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCreateRelationalDatabaseSnapshotResult(obj: LightsailCreateRelationalDatabaseSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteAlarmRequest
 */
export interface LightsailDeleteAlarmRequest {
  /**
   * @schema LightsailDeleteAlarmRequest#alarmName
   */
  readonly alarmName: string;

}

/**
 * Converts an object of type 'LightsailDeleteAlarmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteAlarmRequest(obj: LightsailDeleteAlarmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmName': obj.alarmName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteAlarmResult
 */
export interface LightsailDeleteAlarmResult {
  /**
   * @schema LightsailDeleteAlarmResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteAlarmResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteAlarmResult(obj: LightsailDeleteAlarmResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteAutoSnapshotRequest
 */
export interface LightsailDeleteAutoSnapshotRequest {
  /**
   * @schema LightsailDeleteAutoSnapshotRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailDeleteAutoSnapshotRequest#date
   */
  readonly date: string;

}

/**
 * Converts an object of type 'LightsailDeleteAutoSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteAutoSnapshotRequest(obj: LightsailDeleteAutoSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceName': obj.resourceName,
    'date': obj.date,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteAutoSnapshotResult
 */
export interface LightsailDeleteAutoSnapshotResult {
  /**
   * @schema LightsailDeleteAutoSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteAutoSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteAutoSnapshotResult(obj: LightsailDeleteAutoSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteBucketRequest
 */
export interface LightsailDeleteBucketRequest {
  /**
   * @schema LightsailDeleteBucketRequest#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema LightsailDeleteBucketRequest#forceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * Converts an object of type 'LightsailDeleteBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteBucketRequest(obj: LightsailDeleteBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'forceDelete': obj.forceDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteBucketResult
 */
export interface LightsailDeleteBucketResult {
  /**
   * @schema LightsailDeleteBucketResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteBucketResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteBucketResult(obj: LightsailDeleteBucketResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteBucketAccessKeyRequest
 */
export interface LightsailDeleteBucketAccessKeyRequest {
  /**
   * @schema LightsailDeleteBucketAccessKeyRequest#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema LightsailDeleteBucketAccessKeyRequest#accessKeyId
   */
  readonly accessKeyId: string;

}

/**
 * Converts an object of type 'LightsailDeleteBucketAccessKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteBucketAccessKeyRequest(obj: LightsailDeleteBucketAccessKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'accessKeyId': obj.accessKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteBucketAccessKeyResult
 */
export interface LightsailDeleteBucketAccessKeyResult {
  /**
   * @schema LightsailDeleteBucketAccessKeyResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteBucketAccessKeyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteBucketAccessKeyResult(obj: LightsailDeleteBucketAccessKeyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteCertificateRequest
 */
export interface LightsailDeleteCertificateRequest {
  /**
   * @schema LightsailDeleteCertificateRequest#certificateName
   */
  readonly certificateName: string;

}

/**
 * Converts an object of type 'LightsailDeleteCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteCertificateRequest(obj: LightsailDeleteCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateName': obj.certificateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteCertificateResult
 */
export interface LightsailDeleteCertificateResult {
  /**
   * @schema LightsailDeleteCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteCertificateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteCertificateResult(obj: LightsailDeleteCertificateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteContactMethodRequest
 */
export interface LightsailDeleteContactMethodRequest {
  /**
   * @schema LightsailDeleteContactMethodRequest#protocol
   */
  readonly protocol: string;

}

/**
 * Converts an object of type 'LightsailDeleteContactMethodRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteContactMethodRequest(obj: LightsailDeleteContactMethodRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteContactMethodResult
 */
export interface LightsailDeleteContactMethodResult {
  /**
   * @schema LightsailDeleteContactMethodResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteContactMethodResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteContactMethodResult(obj: LightsailDeleteContactMethodResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteContainerImageRequest
 */
export interface LightsailDeleteContainerImageRequest {
  /**
   * @schema LightsailDeleteContainerImageRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailDeleteContainerImageRequest#image
   */
  readonly image: string;

}

/**
 * Converts an object of type 'LightsailDeleteContainerImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteContainerImageRequest(obj: LightsailDeleteContainerImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
    'image': obj.image,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteContainerImageResult
 */
export interface LightsailDeleteContainerImageResult {
}

/**
 * Converts an object of type 'LightsailDeleteContainerImageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteContainerImageResult(obj: LightsailDeleteContainerImageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteContainerServiceRequest
 */
export interface LightsailDeleteContainerServiceRequest {
  /**
   * @schema LightsailDeleteContainerServiceRequest#serviceName
   */
  readonly serviceName: string;

}

/**
 * Converts an object of type 'LightsailDeleteContainerServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteContainerServiceRequest(obj: LightsailDeleteContainerServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteContainerServiceResult
 */
export interface LightsailDeleteContainerServiceResult {
}

/**
 * Converts an object of type 'LightsailDeleteContainerServiceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteContainerServiceResult(obj: LightsailDeleteContainerServiceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDiskRequest
 */
export interface LightsailDeleteDiskRequest {
  /**
   * @schema LightsailDeleteDiskRequest#diskName
   */
  readonly diskName: string;

  /**
   * @schema LightsailDeleteDiskRequest#forceDeleteAddOns
   */
  readonly forceDeleteAddOns?: boolean;

}

/**
 * Converts an object of type 'LightsailDeleteDiskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDiskRequest(obj: LightsailDeleteDiskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskName': obj.diskName,
    'forceDeleteAddOns': obj.forceDeleteAddOns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDiskResult
 */
export interface LightsailDeleteDiskResult {
  /**
   * @schema LightsailDeleteDiskResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteDiskResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDiskResult(obj: LightsailDeleteDiskResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDiskSnapshotRequest
 */
export interface LightsailDeleteDiskSnapshotRequest {
  /**
   * @schema LightsailDeleteDiskSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName: string;

}

/**
 * Converts an object of type 'LightsailDeleteDiskSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDiskSnapshotRequest(obj: LightsailDeleteDiskSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskSnapshotName': obj.diskSnapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDiskSnapshotResult
 */
export interface LightsailDeleteDiskSnapshotResult {
  /**
   * @schema LightsailDeleteDiskSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteDiskSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDiskSnapshotResult(obj: LightsailDeleteDiskSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDistributionRequest
 */
export interface LightsailDeleteDistributionRequest {
  /**
   * @schema LightsailDeleteDistributionRequest#distributionName
   */
  readonly distributionName?: string;

}

/**
 * Converts an object of type 'LightsailDeleteDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDistributionRequest(obj: LightsailDeleteDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDistributionResult
 */
export interface LightsailDeleteDistributionResult {
  /**
   * @schema LightsailDeleteDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailDeleteDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDistributionResult(obj: LightsailDeleteDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDomainRequest
 */
export interface LightsailDeleteDomainRequest {
  /**
   * @schema LightsailDeleteDomainRequest#domainName
   */
  readonly domainName: string;

}

/**
 * Converts an object of type 'LightsailDeleteDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDomainRequest(obj: LightsailDeleteDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDomainResult
 */
export interface LightsailDeleteDomainResult {
  /**
   * @schema LightsailDeleteDomainResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailDeleteDomainResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDomainResult(obj: LightsailDeleteDomainResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDomainEntryRequest
 */
export interface LightsailDeleteDomainEntryRequest {
  /**
   * @schema LightsailDeleteDomainEntryRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailDeleteDomainEntryRequest#domainEntry
   */
  readonly domainEntry: LightsailDomainEntry;

}

/**
 * Converts an object of type 'LightsailDeleteDomainEntryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDomainEntryRequest(obj: LightsailDeleteDomainEntryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'domainEntry': toJson_LightsailDomainEntry(obj.domainEntry),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteDomainEntryResult
 */
export interface LightsailDeleteDomainEntryResult {
  /**
   * @schema LightsailDeleteDomainEntryResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailDeleteDomainEntryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteDomainEntryResult(obj: LightsailDeleteDomainEntryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteInstanceRequest
 */
export interface LightsailDeleteInstanceRequest {
  /**
   * @schema LightsailDeleteInstanceRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailDeleteInstanceRequest#forceDeleteAddOns
   */
  readonly forceDeleteAddOns?: boolean;

}

/**
 * Converts an object of type 'LightsailDeleteInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteInstanceRequest(obj: LightsailDeleteInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
    'forceDeleteAddOns': obj.forceDeleteAddOns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteInstanceResult
 */
export interface LightsailDeleteInstanceResult {
  /**
   * @schema LightsailDeleteInstanceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteInstanceResult(obj: LightsailDeleteInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteInstanceSnapshotRequest
 */
export interface LightsailDeleteInstanceSnapshotRequest {
  /**
   * @schema LightsailDeleteInstanceSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName: string;

}

/**
 * Converts an object of type 'LightsailDeleteInstanceSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteInstanceSnapshotRequest(obj: LightsailDeleteInstanceSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceSnapshotName': obj.instanceSnapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteInstanceSnapshotResult
 */
export interface LightsailDeleteInstanceSnapshotResult {
  /**
   * @schema LightsailDeleteInstanceSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteInstanceSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteInstanceSnapshotResult(obj: LightsailDeleteInstanceSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteKeyPairRequest
 */
export interface LightsailDeleteKeyPairRequest {
  /**
   * @schema LightsailDeleteKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

}

/**
 * Converts an object of type 'LightsailDeleteKeyPairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteKeyPairRequest(obj: LightsailDeleteKeyPairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPairName': obj.keyPairName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteKeyPairResult
 */
export interface LightsailDeleteKeyPairResult {
  /**
   * @schema LightsailDeleteKeyPairResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailDeleteKeyPairResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteKeyPairResult(obj: LightsailDeleteKeyPairResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteKnownHostKeysRequest
 */
export interface LightsailDeleteKnownHostKeysRequest {
  /**
   * @schema LightsailDeleteKnownHostKeysRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailDeleteKnownHostKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteKnownHostKeysRequest(obj: LightsailDeleteKnownHostKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteKnownHostKeysResult
 */
export interface LightsailDeleteKnownHostKeysResult {
  /**
   * @schema LightsailDeleteKnownHostKeysResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteKnownHostKeysResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteKnownHostKeysResult(obj: LightsailDeleteKnownHostKeysResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteLoadBalancerRequest
 */
export interface LightsailDeleteLoadBalancerRequest {
  /**
   * @schema LightsailDeleteLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

}

/**
 * Converts an object of type 'LightsailDeleteLoadBalancerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteLoadBalancerRequest(obj: LightsailDeleteLoadBalancerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteLoadBalancerResult
 */
export interface LightsailDeleteLoadBalancerResult {
  /**
   * @schema LightsailDeleteLoadBalancerResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteLoadBalancerResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteLoadBalancerResult(obj: LightsailDeleteLoadBalancerResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteLoadBalancerTlsCertificateRequest
 */
export interface LightsailDeleteLoadBalancerTlsCertificateRequest {
  /**
   * @schema LightsailDeleteLoadBalancerTlsCertificateRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailDeleteLoadBalancerTlsCertificateRequest#certificateName
   */
  readonly certificateName: string;

  /**
   * @schema LightsailDeleteLoadBalancerTlsCertificateRequest#force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'LightsailDeleteLoadBalancerTlsCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteLoadBalancerTlsCertificateRequest(obj: LightsailDeleteLoadBalancerTlsCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
    'certificateName': obj.certificateName,
    'force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteLoadBalancerTlsCertificateResult
 */
export interface LightsailDeleteLoadBalancerTlsCertificateResult {
  /**
   * @schema LightsailDeleteLoadBalancerTlsCertificateResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteLoadBalancerTlsCertificateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteLoadBalancerTlsCertificateResult(obj: LightsailDeleteLoadBalancerTlsCertificateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteRelationalDatabaseRequest
 */
export interface LightsailDeleteRelationalDatabaseRequest {
  /**
   * @schema LightsailDeleteRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailDeleteRelationalDatabaseRequest#skipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema LightsailDeleteRelationalDatabaseRequest#finalRelationalDatabaseSnapshotName
   */
  readonly finalRelationalDatabaseSnapshotName?: string;

}

/**
 * Converts an object of type 'LightsailDeleteRelationalDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteRelationalDatabaseRequest(obj: LightsailDeleteRelationalDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'skipFinalSnapshot': obj.skipFinalSnapshot,
    'finalRelationalDatabaseSnapshotName': obj.finalRelationalDatabaseSnapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteRelationalDatabaseResult
 */
export interface LightsailDeleteRelationalDatabaseResult {
  /**
   * @schema LightsailDeleteRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteRelationalDatabaseResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteRelationalDatabaseResult(obj: LightsailDeleteRelationalDatabaseResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteRelationalDatabaseSnapshotRequest
 */
export interface LightsailDeleteRelationalDatabaseSnapshotRequest {
  /**
   * @schema LightsailDeleteRelationalDatabaseSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName: string;

}

/**
 * Converts an object of type 'LightsailDeleteRelationalDatabaseSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteRelationalDatabaseSnapshotRequest(obj: LightsailDeleteRelationalDatabaseSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseSnapshotName': obj.relationalDatabaseSnapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDeleteRelationalDatabaseSnapshotResult
 */
export interface LightsailDeleteRelationalDatabaseSnapshotResult {
  /**
   * @schema LightsailDeleteRelationalDatabaseSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDeleteRelationalDatabaseSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDeleteRelationalDatabaseSnapshotResult(obj: LightsailDeleteRelationalDatabaseSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDetachCertificateFromDistributionRequest
 */
export interface LightsailDetachCertificateFromDistributionRequest {
  /**
   * @schema LightsailDetachCertificateFromDistributionRequest#distributionName
   */
  readonly distributionName: string;

}

/**
 * Converts an object of type 'LightsailDetachCertificateFromDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDetachCertificateFromDistributionRequest(obj: LightsailDetachCertificateFromDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDetachCertificateFromDistributionResult
 */
export interface LightsailDetachCertificateFromDistributionResult {
  /**
   * @schema LightsailDetachCertificateFromDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailDetachCertificateFromDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDetachCertificateFromDistributionResult(obj: LightsailDetachCertificateFromDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDetachDiskRequest
 */
export interface LightsailDetachDiskRequest {
  /**
   * @schema LightsailDetachDiskRequest#diskName
   */
  readonly diskName: string;

}

/**
 * Converts an object of type 'LightsailDetachDiskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDetachDiskRequest(obj: LightsailDetachDiskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskName': obj.diskName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDetachDiskResult
 */
export interface LightsailDetachDiskResult {
  /**
   * @schema LightsailDetachDiskResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDetachDiskResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDetachDiskResult(obj: LightsailDetachDiskResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDetachInstancesFromLoadBalancerRequest
 */
export interface LightsailDetachInstancesFromLoadBalancerRequest {
  /**
   * @schema LightsailDetachInstancesFromLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailDetachInstancesFromLoadBalancerRequest#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * Converts an object of type 'LightsailDetachInstancesFromLoadBalancerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDetachInstancesFromLoadBalancerRequest(obj: LightsailDetachInstancesFromLoadBalancerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
    'instanceNames': obj.instanceNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDetachInstancesFromLoadBalancerResult
 */
export interface LightsailDetachInstancesFromLoadBalancerResult {
  /**
   * @schema LightsailDetachInstancesFromLoadBalancerResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDetachInstancesFromLoadBalancerResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDetachInstancesFromLoadBalancerResult(obj: LightsailDetachInstancesFromLoadBalancerResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDetachStaticIpRequest
 */
export interface LightsailDetachStaticIpRequest {
  /**
   * @schema LightsailDetachStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * Converts an object of type 'LightsailDetachStaticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDetachStaticIpRequest(obj: LightsailDetachStaticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'staticIpName': obj.staticIpName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDetachStaticIpResult
 */
export interface LightsailDetachStaticIpResult {
  /**
   * @schema LightsailDetachStaticIpResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDetachStaticIpResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDetachStaticIpResult(obj: LightsailDetachStaticIpResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDisableAddOnRequest
 */
export interface LightsailDisableAddOnRequest {
  /**
   * @schema LightsailDisableAddOnRequest#addOnType
   */
  readonly addOnType: string;

  /**
   * @schema LightsailDisableAddOnRequest#resourceName
   */
  readonly resourceName: string;

}

/**
 * Converts an object of type 'LightsailDisableAddOnRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDisableAddOnRequest(obj: LightsailDisableAddOnRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addOnType': obj.addOnType,
    'resourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDisableAddOnResult
 */
export interface LightsailDisableAddOnResult {
  /**
   * @schema LightsailDisableAddOnResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailDisableAddOnResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDisableAddOnResult(obj: LightsailDisableAddOnResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDownloadDefaultKeyPairRequest
 */
export interface LightsailDownloadDefaultKeyPairRequest {
}

/**
 * Converts an object of type 'LightsailDownloadDefaultKeyPairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDownloadDefaultKeyPairRequest(obj: LightsailDownloadDefaultKeyPairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDownloadDefaultKeyPairResult
 */
export interface LightsailDownloadDefaultKeyPairResult {
  /**
   * @schema LightsailDownloadDefaultKeyPairResult#publicKeyBase64
   */
  readonly publicKeyBase64?: string;

  /**
   * @schema LightsailDownloadDefaultKeyPairResult#privateKeyBase64
   */
  readonly privateKeyBase64?: string;

}

/**
 * Converts an object of type 'LightsailDownloadDefaultKeyPairResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDownloadDefaultKeyPairResult(obj: LightsailDownloadDefaultKeyPairResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'publicKeyBase64': obj.publicKeyBase64,
    'privateKeyBase64': obj.privateKeyBase64,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailEnableAddOnRequest
 */
export interface LightsailEnableAddOnRequest {
  /**
   * @schema LightsailEnableAddOnRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailEnableAddOnRequest#addOnRequest
   */
  readonly addOnRequest: LightsailAddOnRequest;

}

/**
 * Converts an object of type 'LightsailEnableAddOnRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailEnableAddOnRequest(obj: LightsailEnableAddOnRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceName': obj.resourceName,
    'addOnRequest': toJson_LightsailAddOnRequest(obj.addOnRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailEnableAddOnResult
 */
export interface LightsailEnableAddOnResult {
  /**
   * @schema LightsailEnableAddOnResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailEnableAddOnResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailEnableAddOnResult(obj: LightsailEnableAddOnResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailExportSnapshotRequest
 */
export interface LightsailExportSnapshotRequest {
  /**
   * @schema LightsailExportSnapshotRequest#sourceSnapshotName
   */
  readonly sourceSnapshotName: string;

}

/**
 * Converts an object of type 'LightsailExportSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailExportSnapshotRequest(obj: LightsailExportSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceSnapshotName': obj.sourceSnapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailExportSnapshotResult
 */
export interface LightsailExportSnapshotResult {
  /**
   * @schema LightsailExportSnapshotResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailExportSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailExportSnapshotResult(obj: LightsailExportSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetActiveNamesRequest
 */
export interface LightsailGetActiveNamesRequest {
  /**
   * @schema LightsailGetActiveNamesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetActiveNamesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetActiveNamesRequest(obj: LightsailGetActiveNamesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetActiveNamesResult
 */
export interface LightsailGetActiveNamesResult {
  /**
   * @schema LightsailGetActiveNamesResult#activeNames
   */
  readonly activeNames?: string[];

  /**
   * @schema LightsailGetActiveNamesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetActiveNamesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetActiveNamesResult(obj: LightsailGetActiveNamesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activeNames': obj.activeNames?.map(y => y),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetAlarmsRequest
 */
export interface LightsailGetAlarmsRequest {
  /**
   * @schema LightsailGetAlarmsRequest#alarmName
   */
  readonly alarmName?: string;

  /**
   * @schema LightsailGetAlarmsRequest#pageToken
   */
  readonly pageToken?: string;

  /**
   * @schema LightsailGetAlarmsRequest#monitoredResourceName
   */
  readonly monitoredResourceName?: string;

}

/**
 * Converts an object of type 'LightsailGetAlarmsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetAlarmsRequest(obj: LightsailGetAlarmsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmName': obj.alarmName,
    'pageToken': obj.pageToken,
    'monitoredResourceName': obj.monitoredResourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetAlarmsResult
 */
export interface LightsailGetAlarmsResult {
  /**
   * @schema LightsailGetAlarmsResult#alarms
   */
  readonly alarms?: LightsailAlarm[];

  /**
   * @schema LightsailGetAlarmsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetAlarmsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetAlarmsResult(obj: LightsailGetAlarmsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarms': obj.alarms?.map(y => toJson_LightsailAlarm(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetAutoSnapshotsRequest
 */
export interface LightsailGetAutoSnapshotsRequest {
  /**
   * @schema LightsailGetAutoSnapshotsRequest#resourceName
   */
  readonly resourceName: string;

}

/**
 * Converts an object of type 'LightsailGetAutoSnapshotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetAutoSnapshotsRequest(obj: LightsailGetAutoSnapshotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetAutoSnapshotsResult
 */
export interface LightsailGetAutoSnapshotsResult {
  /**
   * @schema LightsailGetAutoSnapshotsResult#resourceName
   */
  readonly resourceName?: string;

  /**
   * @schema LightsailGetAutoSnapshotsResult#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailGetAutoSnapshotsResult#autoSnapshots
   */
  readonly autoSnapshots?: LightsailAutoSnapshotDetails[];

}

/**
 * Converts an object of type 'LightsailGetAutoSnapshotsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetAutoSnapshotsResult(obj: LightsailGetAutoSnapshotsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceName': obj.resourceName,
    'resourceType': obj.resourceType,
    'autoSnapshots': obj.autoSnapshots?.map(y => toJson_LightsailAutoSnapshotDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBlueprintsRequest
 */
export interface LightsailGetBlueprintsRequest {
  /**
   * @schema LightsailGetBlueprintsRequest#includeInactive
   */
  readonly includeInactive?: boolean;

  /**
   * @schema LightsailGetBlueprintsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetBlueprintsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBlueprintsRequest(obj: LightsailGetBlueprintsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'includeInactive': obj.includeInactive,
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBlueprintsResult
 */
export interface LightsailGetBlueprintsResult {
  /**
   * @schema LightsailGetBlueprintsResult#blueprints
   */
  readonly blueprints?: LightsailBlueprint[];

  /**
   * @schema LightsailGetBlueprintsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetBlueprintsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBlueprintsResult(obj: LightsailGetBlueprintsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blueprints': obj.blueprints?.map(y => toJson_LightsailBlueprint(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBucketAccessKeysRequest
 */
export interface LightsailGetBucketAccessKeysRequest {
  /**
   * @schema LightsailGetBucketAccessKeysRequest#bucketName
   */
  readonly bucketName: string;

}

/**
 * Converts an object of type 'LightsailGetBucketAccessKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBucketAccessKeysRequest(obj: LightsailGetBucketAccessKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBucketAccessKeysResult
 */
export interface LightsailGetBucketAccessKeysResult {
  /**
   * @schema LightsailGetBucketAccessKeysResult#accessKeys
   */
  readonly accessKeys?: LightsailAccessKey[];

}

/**
 * Converts an object of type 'LightsailGetBucketAccessKeysResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBucketAccessKeysResult(obj: LightsailGetBucketAccessKeysResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeys': obj.accessKeys?.map(y => toJson_LightsailAccessKey(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBucketBundlesRequest
 */
export interface LightsailGetBucketBundlesRequest {
  /**
   * @schema LightsailGetBucketBundlesRequest#includeInactive
   */
  readonly includeInactive?: boolean;

}

/**
 * Converts an object of type 'LightsailGetBucketBundlesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBucketBundlesRequest(obj: LightsailGetBucketBundlesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'includeInactive': obj.includeInactive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBucketBundlesResult
 */
export interface LightsailGetBucketBundlesResult {
  /**
   * @schema LightsailGetBucketBundlesResult#bundles
   */
  readonly bundles?: LightsailBucketBundle[];

}

/**
 * Converts an object of type 'LightsailGetBucketBundlesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBucketBundlesResult(obj: LightsailGetBucketBundlesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundles': obj.bundles?.map(y => toJson_LightsailBucketBundle(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBucketMetricDataRequest
 */
export interface LightsailGetBucketMetricDataRequest {
  /**
   * @schema LightsailGetBucketMetricDataRequest#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema LightsailGetBucketMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetBucketMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetBucketMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetBucketMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetBucketMetricDataRequest#statistics
   */
  readonly statistics: string[];

  /**
   * @schema LightsailGetBucketMetricDataRequest#unit
   */
  readonly unit: string;

}

/**
 * Converts an object of type 'LightsailGetBucketMetricDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBucketMetricDataRequest(obj: LightsailGetBucketMetricDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'metricName': obj.metricName,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'period': obj.period,
    'statistics': obj.statistics?.map(y => y),
    'unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBucketMetricDataResult
 */
export interface LightsailGetBucketMetricDataResult {
  /**
   * @schema LightsailGetBucketMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetBucketMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * Converts an object of type 'LightsailGetBucketMetricDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBucketMetricDataResult(obj: LightsailGetBucketMetricDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'metricData': obj.metricData?.map(y => toJson_LightsailMetricDatapoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBucketsRequest
 */
export interface LightsailGetBucketsRequest {
  /**
   * @schema LightsailGetBucketsRequest#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema LightsailGetBucketsRequest#pageToken
   */
  readonly pageToken?: string;

  /**
   * @schema LightsailGetBucketsRequest#includeConnectedResources
   */
  readonly includeConnectedResources?: boolean;

}

/**
 * Converts an object of type 'LightsailGetBucketsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBucketsRequest(obj: LightsailGetBucketsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'pageToken': obj.pageToken,
    'includeConnectedResources': obj.includeConnectedResources,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBucketsResult
 */
export interface LightsailGetBucketsResult {
  /**
   * @schema LightsailGetBucketsResult#buckets
   */
  readonly buckets?: LightsailBucket[];

  /**
   * @schema LightsailGetBucketsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetBucketsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBucketsResult(obj: LightsailGetBucketsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'buckets': obj.buckets?.map(y => toJson_LightsailBucket(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBundlesRequest
 */
export interface LightsailGetBundlesRequest {
  /**
   * @schema LightsailGetBundlesRequest#includeInactive
   */
  readonly includeInactive?: boolean;

  /**
   * @schema LightsailGetBundlesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetBundlesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBundlesRequest(obj: LightsailGetBundlesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'includeInactive': obj.includeInactive,
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetBundlesResult
 */
export interface LightsailGetBundlesResult {
  /**
   * @schema LightsailGetBundlesResult#bundles
   */
  readonly bundles?: LightsailBundle[];

  /**
   * @schema LightsailGetBundlesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetBundlesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetBundlesResult(obj: LightsailGetBundlesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundles': obj.bundles?.map(y => toJson_LightsailBundle(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetCertificatesRequest
 */
export interface LightsailGetCertificatesRequest {
  /**
   * @schema LightsailGetCertificatesRequest#certificateStatuses
   */
  readonly certificateStatuses?: string[];

  /**
   * @schema LightsailGetCertificatesRequest#includeCertificateDetails
   */
  readonly includeCertificateDetails?: boolean;

  /**
   * @schema LightsailGetCertificatesRequest#certificateName
   */
  readonly certificateName?: string;

}

/**
 * Converts an object of type 'LightsailGetCertificatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetCertificatesRequest(obj: LightsailGetCertificatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateStatuses': obj.certificateStatuses?.map(y => y),
    'includeCertificateDetails': obj.includeCertificateDetails,
    'certificateName': obj.certificateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetCertificatesResult
 */
export interface LightsailGetCertificatesResult {
  /**
   * @schema LightsailGetCertificatesResult#certificates
   */
  readonly certificates?: LightsailCertificateSummary[];

}

/**
 * Converts an object of type 'LightsailGetCertificatesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetCertificatesResult(obj: LightsailGetCertificatesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificates': obj.certificates?.map(y => toJson_LightsailCertificateSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetCloudFormationStackRecordsRequest
 */
export interface LightsailGetCloudFormationStackRecordsRequest {
  /**
   * @schema LightsailGetCloudFormationStackRecordsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetCloudFormationStackRecordsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetCloudFormationStackRecordsRequest(obj: LightsailGetCloudFormationStackRecordsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetCloudFormationStackRecordsResult
 */
export interface LightsailGetCloudFormationStackRecordsResult {
  /**
   * @schema LightsailGetCloudFormationStackRecordsResult#cloudFormationStackRecords
   */
  readonly cloudFormationStackRecords?: LightsailCloudFormationStackRecord[];

  /**
   * @schema LightsailGetCloudFormationStackRecordsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetCloudFormationStackRecordsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetCloudFormationStackRecordsResult(obj: LightsailGetCloudFormationStackRecordsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cloudFormationStackRecords': obj.cloudFormationStackRecords?.map(y => toJson_LightsailCloudFormationStackRecord(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContactMethodsRequest
 */
export interface LightsailGetContactMethodsRequest {
  /**
   * @schema LightsailGetContactMethodsRequest#protocols
   */
  readonly protocols?: string[];

}

/**
 * Converts an object of type 'LightsailGetContactMethodsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContactMethodsRequest(obj: LightsailGetContactMethodsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'protocols': obj.protocols?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContactMethodsResult
 */
export interface LightsailGetContactMethodsResult {
  /**
   * @schema LightsailGetContactMethodsResult#contactMethods
   */
  readonly contactMethods?: LightsailContactMethod[];

}

/**
 * Converts an object of type 'LightsailGetContactMethodsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContactMethodsResult(obj: LightsailGetContactMethodsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactMethods': obj.contactMethods?.map(y => toJson_LightsailContactMethod(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerApiMetadataRequest
 */
export interface LightsailGetContainerApiMetadataRequest {
}

/**
 * Converts an object of type 'LightsailGetContainerApiMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerApiMetadataRequest(obj: LightsailGetContainerApiMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerApiMetadataResult
 */
export interface LightsailGetContainerApiMetadataResult {
  /**
   * @schema LightsailGetContainerApiMetadataResult#metadata
   */
  readonly metadata?: { [key: string]: string }[];

}

/**
 * Converts an object of type 'LightsailGetContainerApiMetadataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerApiMetadataResult(obj: LightsailGetContainerApiMetadataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerImagesRequest
 */
export interface LightsailGetContainerImagesRequest {
  /**
   * @schema LightsailGetContainerImagesRequest#serviceName
   */
  readonly serviceName: string;

}

/**
 * Converts an object of type 'LightsailGetContainerImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerImagesRequest(obj: LightsailGetContainerImagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerImagesResult
 */
export interface LightsailGetContainerImagesResult {
  /**
   * @schema LightsailGetContainerImagesResult#containerImages
   */
  readonly containerImages?: LightsailContainerImage[];

}

/**
 * Converts an object of type 'LightsailGetContainerImagesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerImagesResult(obj: LightsailGetContainerImagesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerImages': obj.containerImages?.map(y => toJson_LightsailContainerImage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerLogRequest
 */
export interface LightsailGetContainerLogRequest {
  /**
   * @schema LightsailGetContainerLogRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailGetContainerLogRequest#containerName
   */
  readonly containerName: string;

  /**
   * @schema LightsailGetContainerLogRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema LightsailGetContainerLogRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema LightsailGetContainerLogRequest#filterPattern
   */
  readonly filterPattern?: string;

  /**
   * @schema LightsailGetContainerLogRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetContainerLogRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerLogRequest(obj: LightsailGetContainerLogRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
    'containerName': obj.containerName,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'filterPattern': obj.filterPattern,
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerLogResult
 */
export interface LightsailGetContainerLogResult {
  /**
   * @schema LightsailGetContainerLogResult#logEvents
   */
  readonly logEvents?: LightsailContainerServiceLogEvent[];

  /**
   * @schema LightsailGetContainerLogResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetContainerLogResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerLogResult(obj: LightsailGetContainerLogResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logEvents': obj.logEvents?.map(y => toJson_LightsailContainerServiceLogEvent(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerServiceDeploymentsRequest
 */
export interface LightsailGetContainerServiceDeploymentsRequest {
  /**
   * @schema LightsailGetContainerServiceDeploymentsRequest#serviceName
   */
  readonly serviceName: string;

}

/**
 * Converts an object of type 'LightsailGetContainerServiceDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerServiceDeploymentsRequest(obj: LightsailGetContainerServiceDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerServiceDeploymentsResult
 */
export interface LightsailGetContainerServiceDeploymentsResult {
  /**
   * @schema LightsailGetContainerServiceDeploymentsResult#deployments
   */
  readonly deployments?: LightsailContainerServiceDeployment[];

}

/**
 * Converts an object of type 'LightsailGetContainerServiceDeploymentsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerServiceDeploymentsResult(obj: LightsailGetContainerServiceDeploymentsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deployments': obj.deployments?.map(y => toJson_LightsailContainerServiceDeployment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerServiceMetricDataRequest
 */
export interface LightsailGetContainerServiceMetricDataRequest {
  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetContainerServiceMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * Converts an object of type 'LightsailGetContainerServiceMetricDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerServiceMetricDataRequest(obj: LightsailGetContainerServiceMetricDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
    'metricName': obj.metricName,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'period': obj.period,
    'statistics': obj.statistics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerServiceMetricDataResult
 */
export interface LightsailGetContainerServiceMetricDataResult {
  /**
   * @schema LightsailGetContainerServiceMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetContainerServiceMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * Converts an object of type 'LightsailGetContainerServiceMetricDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerServiceMetricDataResult(obj: LightsailGetContainerServiceMetricDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'metricData': obj.metricData?.map(y => toJson_LightsailMetricDatapoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerServicePowersRequest
 */
export interface LightsailGetContainerServicePowersRequest {
}

/**
 * Converts an object of type 'LightsailGetContainerServicePowersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerServicePowersRequest(obj: LightsailGetContainerServicePowersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerServicePowersResult
 */
export interface LightsailGetContainerServicePowersResult {
  /**
   * @schema LightsailGetContainerServicePowersResult#powers
   */
  readonly powers?: LightsailContainerServicePower[];

}

/**
 * Converts an object of type 'LightsailGetContainerServicePowersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerServicePowersResult(obj: LightsailGetContainerServicePowersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'powers': obj.powers?.map(y => toJson_LightsailContainerServicePower(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetContainerServicesRequest
 */
export interface LightsailGetContainerServicesRequest {
  /**
   * @schema LightsailGetContainerServicesRequest#serviceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'LightsailGetContainerServicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetContainerServicesRequest(obj: LightsailGetContainerServicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerServicesListResult
 */
export interface LightsailContainerServicesListResult {
  /**
   * @schema LightsailContainerServicesListResult#containerServices
   */
  readonly containerServices?: LightsailContainerService[];

}

/**
 * Converts an object of type 'LightsailContainerServicesListResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerServicesListResult(obj: LightsailContainerServicesListResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerServices': obj.containerServices?.map(y => toJson_LightsailContainerService(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDiskRequest
 */
export interface LightsailGetDiskRequest {
  /**
   * @schema LightsailGetDiskRequest#diskName
   */
  readonly diskName: string;

}

/**
 * Converts an object of type 'LightsailGetDiskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDiskRequest(obj: LightsailGetDiskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskName': obj.diskName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDiskResult
 */
export interface LightsailGetDiskResult {
  /**
   * @schema LightsailGetDiskResult#disk
   */
  readonly disk?: LightsailDisk;

}

/**
 * Converts an object of type 'LightsailGetDiskResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDiskResult(obj: LightsailGetDiskResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'disk': toJson_LightsailDisk(obj.disk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDiskSnapshotRequest
 */
export interface LightsailGetDiskSnapshotRequest {
  /**
   * @schema LightsailGetDiskSnapshotRequest#diskSnapshotName
   */
  readonly diskSnapshotName: string;

}

/**
 * Converts an object of type 'LightsailGetDiskSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDiskSnapshotRequest(obj: LightsailGetDiskSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskSnapshotName': obj.diskSnapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDiskSnapshotResult
 */
export interface LightsailGetDiskSnapshotResult {
  /**
   * @schema LightsailGetDiskSnapshotResult#diskSnapshot
   */
  readonly diskSnapshot?: LightsailDiskSnapshot;

}

/**
 * Converts an object of type 'LightsailGetDiskSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDiskSnapshotResult(obj: LightsailGetDiskSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskSnapshot': toJson_LightsailDiskSnapshot(obj.diskSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDiskSnapshotsRequest
 */
export interface LightsailGetDiskSnapshotsRequest {
  /**
   * @schema LightsailGetDiskSnapshotsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetDiskSnapshotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDiskSnapshotsRequest(obj: LightsailGetDiskSnapshotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDiskSnapshotsResult
 */
export interface LightsailGetDiskSnapshotsResult {
  /**
   * @schema LightsailGetDiskSnapshotsResult#diskSnapshots
   */
  readonly diskSnapshots?: LightsailDiskSnapshot[];

  /**
   * @schema LightsailGetDiskSnapshotsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetDiskSnapshotsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDiskSnapshotsResult(obj: LightsailGetDiskSnapshotsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'diskSnapshots': obj.diskSnapshots?.map(y => toJson_LightsailDiskSnapshot(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDisksRequest
 */
export interface LightsailGetDisksRequest {
  /**
   * @schema LightsailGetDisksRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetDisksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDisksRequest(obj: LightsailGetDisksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDisksResult
 */
export interface LightsailGetDisksResult {
  /**
   * @schema LightsailGetDisksResult#disks
   */
  readonly disks?: LightsailDisk[];

  /**
   * @schema LightsailGetDisksResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetDisksResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDisksResult(obj: LightsailGetDisksResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'disks': obj.disks?.map(y => toJson_LightsailDisk(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDistributionBundlesRequest
 */
export interface LightsailGetDistributionBundlesRequest {
}

/**
 * Converts an object of type 'LightsailGetDistributionBundlesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDistributionBundlesRequest(obj: LightsailGetDistributionBundlesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDistributionBundlesResult
 */
export interface LightsailGetDistributionBundlesResult {
  /**
   * @schema LightsailGetDistributionBundlesResult#bundles
   */
  readonly bundles?: LightsailDistributionBundle[];

}

/**
 * Converts an object of type 'LightsailGetDistributionBundlesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDistributionBundlesResult(obj: LightsailGetDistributionBundlesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundles': obj.bundles?.map(y => toJson_LightsailDistributionBundle(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDistributionLatestCacheResetRequest
 */
export interface LightsailGetDistributionLatestCacheResetRequest {
  /**
   * @schema LightsailGetDistributionLatestCacheResetRequest#distributionName
   */
  readonly distributionName?: string;

}

/**
 * Converts an object of type 'LightsailGetDistributionLatestCacheResetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDistributionLatestCacheResetRequest(obj: LightsailGetDistributionLatestCacheResetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDistributionLatestCacheResetResult
 */
export interface LightsailGetDistributionLatestCacheResetResult {
  /**
   * @schema LightsailGetDistributionLatestCacheResetResult#status
   */
  readonly status?: string;

  /**
   * @schema LightsailGetDistributionLatestCacheResetResult#createTime
   */
  readonly createTime?: string;

}

/**
 * Converts an object of type 'LightsailGetDistributionLatestCacheResetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDistributionLatestCacheResetResult(obj: LightsailGetDistributionLatestCacheResetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'createTime': obj.createTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDistributionMetricDataRequest
 */
export interface LightsailGetDistributionMetricDataRequest {
  /**
   * @schema LightsailGetDistributionMetricDataRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema LightsailGetDistributionMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * Converts an object of type 'LightsailGetDistributionMetricDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDistributionMetricDataRequest(obj: LightsailGetDistributionMetricDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
    'metricName': obj.metricName,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'period': obj.period,
    'unit': obj.unit,
    'statistics': obj.statistics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDistributionMetricDataResult
 */
export interface LightsailGetDistributionMetricDataResult {
  /**
   * @schema LightsailGetDistributionMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetDistributionMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * Converts an object of type 'LightsailGetDistributionMetricDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDistributionMetricDataResult(obj: LightsailGetDistributionMetricDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'metricData': obj.metricData?.map(y => toJson_LightsailMetricDatapoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDistributionsRequest
 */
export interface LightsailGetDistributionsRequest {
  /**
   * @schema LightsailGetDistributionsRequest#distributionName
   */
  readonly distributionName?: string;

  /**
   * @schema LightsailGetDistributionsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetDistributionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDistributionsRequest(obj: LightsailGetDistributionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDistributionsResult
 */
export interface LightsailGetDistributionsResult {
  /**
   * @schema LightsailGetDistributionsResult#distributions
   */
  readonly distributions?: LightsailLightsailDistribution[];

  /**
   * @schema LightsailGetDistributionsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetDistributionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDistributionsResult(obj: LightsailGetDistributionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributions': obj.distributions?.map(y => toJson_LightsailLightsailDistribution(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDomainRequest
 */
export interface LightsailGetDomainRequest {
  /**
   * @schema LightsailGetDomainRequest#domainName
   */
  readonly domainName: string;

}

/**
 * Converts an object of type 'LightsailGetDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDomainRequest(obj: LightsailGetDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDomainResult
 */
export interface LightsailGetDomainResult {
  /**
   * @schema LightsailGetDomainResult#domain
   */
  readonly domain?: LightsailDomain;

}

/**
 * Converts an object of type 'LightsailGetDomainResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDomainResult(obj: LightsailGetDomainResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': toJson_LightsailDomain(obj.domain),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDomainsRequest
 */
export interface LightsailGetDomainsRequest {
  /**
   * @schema LightsailGetDomainsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDomainsRequest(obj: LightsailGetDomainsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetDomainsResult
 */
export interface LightsailGetDomainsResult {
  /**
   * @schema LightsailGetDomainsResult#domains
   */
  readonly domains?: LightsailDomain[];

  /**
   * @schema LightsailGetDomainsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetDomainsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetDomainsResult(obj: LightsailGetDomainsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domains': obj.domains?.map(y => toJson_LightsailDomain(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetExportSnapshotRecordsRequest
 */
export interface LightsailGetExportSnapshotRecordsRequest {
  /**
   * @schema LightsailGetExportSnapshotRecordsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetExportSnapshotRecordsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetExportSnapshotRecordsRequest(obj: LightsailGetExportSnapshotRecordsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetExportSnapshotRecordsResult
 */
export interface LightsailGetExportSnapshotRecordsResult {
  /**
   * @schema LightsailGetExportSnapshotRecordsResult#exportSnapshotRecords
   */
  readonly exportSnapshotRecords?: LightsailExportSnapshotRecord[];

  /**
   * @schema LightsailGetExportSnapshotRecordsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetExportSnapshotRecordsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetExportSnapshotRecordsResult(obj: LightsailGetExportSnapshotRecordsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportSnapshotRecords': obj.exportSnapshotRecords?.map(y => toJson_LightsailExportSnapshotRecord(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceRequest
 */
export interface LightsailGetInstanceRequest {
  /**
   * @schema LightsailGetInstanceRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailGetInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceRequest(obj: LightsailGetInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceResult
 */
export interface LightsailGetInstanceResult {
  /**
   * @schema LightsailGetInstanceResult#instance
   */
  readonly instance?: LightsailInstance;

}

/**
 * Converts an object of type 'LightsailGetInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceResult(obj: LightsailGetInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instance': toJson_LightsailInstance(obj.instance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceAccessDetailsRequest
 */
export interface LightsailGetInstanceAccessDetailsRequest {
  /**
   * @schema LightsailGetInstanceAccessDetailsRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailGetInstanceAccessDetailsRequest#protocol
   */
  readonly protocol?: string;

}

/**
 * Converts an object of type 'LightsailGetInstanceAccessDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceAccessDetailsRequest(obj: LightsailGetInstanceAccessDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
    'protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceAccessDetailsResult
 */
export interface LightsailGetInstanceAccessDetailsResult {
  /**
   * @schema LightsailGetInstanceAccessDetailsResult#accessDetails
   */
  readonly accessDetails?: LightsailInstanceAccessDetails;

}

/**
 * Converts an object of type 'LightsailGetInstanceAccessDetailsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceAccessDetailsResult(obj: LightsailGetInstanceAccessDetailsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessDetails': toJson_LightsailInstanceAccessDetails(obj.accessDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceMetricDataRequest
 */
export interface LightsailGetInstanceMetricDataRequest {
  /**
   * @schema LightsailGetInstanceMetricDataRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema LightsailGetInstanceMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * Converts an object of type 'LightsailGetInstanceMetricDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceMetricDataRequest(obj: LightsailGetInstanceMetricDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
    'metricName': obj.metricName,
    'period': obj.period,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'unit': obj.unit,
    'statistics': obj.statistics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceMetricDataResult
 */
export interface LightsailGetInstanceMetricDataResult {
  /**
   * @schema LightsailGetInstanceMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetInstanceMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * Converts an object of type 'LightsailGetInstanceMetricDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceMetricDataResult(obj: LightsailGetInstanceMetricDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'metricData': obj.metricData?.map(y => toJson_LightsailMetricDatapoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstancePortStatesRequest
 */
export interface LightsailGetInstancePortStatesRequest {
  /**
   * @schema LightsailGetInstancePortStatesRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailGetInstancePortStatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstancePortStatesRequest(obj: LightsailGetInstancePortStatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstancePortStatesResult
 */
export interface LightsailGetInstancePortStatesResult {
  /**
   * @schema LightsailGetInstancePortStatesResult#portStates
   */
  readonly portStates?: LightsailInstancePortState[];

}

/**
 * Converts an object of type 'LightsailGetInstancePortStatesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstancePortStatesResult(obj: LightsailGetInstancePortStatesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portStates': obj.portStates?.map(y => toJson_LightsailInstancePortState(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceSnapshotRequest
 */
export interface LightsailGetInstanceSnapshotRequest {
  /**
   * @schema LightsailGetInstanceSnapshotRequest#instanceSnapshotName
   */
  readonly instanceSnapshotName: string;

}

/**
 * Converts an object of type 'LightsailGetInstanceSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceSnapshotRequest(obj: LightsailGetInstanceSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceSnapshotName': obj.instanceSnapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceSnapshotResult
 */
export interface LightsailGetInstanceSnapshotResult {
  /**
   * @schema LightsailGetInstanceSnapshotResult#instanceSnapshot
   */
  readonly instanceSnapshot?: LightsailInstanceSnapshot;

}

/**
 * Converts an object of type 'LightsailGetInstanceSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceSnapshotResult(obj: LightsailGetInstanceSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceSnapshot': toJson_LightsailInstanceSnapshot(obj.instanceSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceSnapshotsRequest
 */
export interface LightsailGetInstanceSnapshotsRequest {
  /**
   * @schema LightsailGetInstanceSnapshotsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetInstanceSnapshotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceSnapshotsRequest(obj: LightsailGetInstanceSnapshotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceSnapshotsResult
 */
export interface LightsailGetInstanceSnapshotsResult {
  /**
   * @schema LightsailGetInstanceSnapshotsResult#instanceSnapshots
   */
  readonly instanceSnapshots?: LightsailInstanceSnapshot[];

  /**
   * @schema LightsailGetInstanceSnapshotsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetInstanceSnapshotsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceSnapshotsResult(obj: LightsailGetInstanceSnapshotsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceSnapshots': obj.instanceSnapshots?.map(y => toJson_LightsailInstanceSnapshot(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceStateRequest
 */
export interface LightsailGetInstanceStateRequest {
  /**
   * @schema LightsailGetInstanceStateRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailGetInstanceStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceStateRequest(obj: LightsailGetInstanceStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstanceStateResult
 */
export interface LightsailGetInstanceStateResult {
  /**
   * @schema LightsailGetInstanceStateResult#state
   */
  readonly state?: LightsailInstanceState;

}

/**
 * Converts an object of type 'LightsailGetInstanceStateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstanceStateResult(obj: LightsailGetInstanceStateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': toJson_LightsailInstanceState(obj.state),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstancesRequest
 */
export interface LightsailGetInstancesRequest {
  /**
   * @schema LightsailGetInstancesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstancesRequest(obj: LightsailGetInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetInstancesResult
 */
export interface LightsailGetInstancesResult {
  /**
   * @schema LightsailGetInstancesResult#instances
   */
  readonly instances?: LightsailInstance[];

  /**
   * @schema LightsailGetInstancesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetInstancesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetInstancesResult(obj: LightsailGetInstancesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instances': obj.instances?.map(y => toJson_LightsailInstance(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetKeyPairRequest
 */
export interface LightsailGetKeyPairRequest {
  /**
   * @schema LightsailGetKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

}

/**
 * Converts an object of type 'LightsailGetKeyPairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetKeyPairRequest(obj: LightsailGetKeyPairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPairName': obj.keyPairName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetKeyPairResult
 */
export interface LightsailGetKeyPairResult {
  /**
   * @schema LightsailGetKeyPairResult#keyPair
   */
  readonly keyPair?: LightsailKeyPair;

}

/**
 * Converts an object of type 'LightsailGetKeyPairResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetKeyPairResult(obj: LightsailGetKeyPairResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPair': toJson_LightsailKeyPair(obj.keyPair),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetKeyPairsRequest
 */
export interface LightsailGetKeyPairsRequest {
  /**
   * @schema LightsailGetKeyPairsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetKeyPairsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetKeyPairsRequest(obj: LightsailGetKeyPairsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetKeyPairsResult
 */
export interface LightsailGetKeyPairsResult {
  /**
   * @schema LightsailGetKeyPairsResult#keyPairs
   */
  readonly keyPairs?: LightsailKeyPair[];

  /**
   * @schema LightsailGetKeyPairsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetKeyPairsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetKeyPairsResult(obj: LightsailGetKeyPairsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPairs': obj.keyPairs?.map(y => toJson_LightsailKeyPair(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetLoadBalancerRequest
 */
export interface LightsailGetLoadBalancerRequest {
  /**
   * @schema LightsailGetLoadBalancerRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

}

/**
 * Converts an object of type 'LightsailGetLoadBalancerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetLoadBalancerRequest(obj: LightsailGetLoadBalancerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetLoadBalancerResult
 */
export interface LightsailGetLoadBalancerResult {
  /**
   * @schema LightsailGetLoadBalancerResult#loadBalancer
   */
  readonly loadBalancer?: LightsailLoadBalancer;

}

/**
 * Converts an object of type 'LightsailGetLoadBalancerResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetLoadBalancerResult(obj: LightsailGetLoadBalancerResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancer': toJson_LightsailLoadBalancer(obj.loadBalancer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetLoadBalancerMetricDataRequest
 */
export interface LightsailGetLoadBalancerMetricDataRequest {
  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * Converts an object of type 'LightsailGetLoadBalancerMetricDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetLoadBalancerMetricDataRequest(obj: LightsailGetLoadBalancerMetricDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
    'metricName': obj.metricName,
    'period': obj.period,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'unit': obj.unit,
    'statistics': obj.statistics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetLoadBalancerMetricDataResult
 */
export interface LightsailGetLoadBalancerMetricDataResult {
  /**
   * @schema LightsailGetLoadBalancerMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetLoadBalancerMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * Converts an object of type 'LightsailGetLoadBalancerMetricDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetLoadBalancerMetricDataResult(obj: LightsailGetLoadBalancerMetricDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'metricData': obj.metricData?.map(y => toJson_LightsailMetricDatapoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetLoadBalancerTlsCertificatesRequest
 */
export interface LightsailGetLoadBalancerTlsCertificatesRequest {
  /**
   * @schema LightsailGetLoadBalancerTlsCertificatesRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

}

/**
 * Converts an object of type 'LightsailGetLoadBalancerTlsCertificatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetLoadBalancerTlsCertificatesRequest(obj: LightsailGetLoadBalancerTlsCertificatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetLoadBalancerTlsCertificatesResult
 */
export interface LightsailGetLoadBalancerTlsCertificatesResult {
  /**
   * @schema LightsailGetLoadBalancerTlsCertificatesResult#tlsCertificates
   */
  readonly tlsCertificates?: LightsailLoadBalancerTlsCertificate[];

}

/**
 * Converts an object of type 'LightsailGetLoadBalancerTlsCertificatesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetLoadBalancerTlsCertificatesResult(obj: LightsailGetLoadBalancerTlsCertificatesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tlsCertificates': obj.tlsCertificates?.map(y => toJson_LightsailLoadBalancerTlsCertificate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetLoadBalancersRequest
 */
export interface LightsailGetLoadBalancersRequest {
  /**
   * @schema LightsailGetLoadBalancersRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetLoadBalancersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetLoadBalancersRequest(obj: LightsailGetLoadBalancersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetLoadBalancersResult
 */
export interface LightsailGetLoadBalancersResult {
  /**
   * @schema LightsailGetLoadBalancersResult#loadBalancers
   */
  readonly loadBalancers?: LightsailLoadBalancer[];

  /**
   * @schema LightsailGetLoadBalancersResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetLoadBalancersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetLoadBalancersResult(obj: LightsailGetLoadBalancersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancers': obj.loadBalancers?.map(y => toJson_LightsailLoadBalancer(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetOperationRequest
 */
export interface LightsailGetOperationRequest {
  /**
   * @schema LightsailGetOperationRequest#operationId
   */
  readonly operationId: string;

}

/**
 * Converts an object of type 'LightsailGetOperationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetOperationRequest(obj: LightsailGetOperationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetOperationResult
 */
export interface LightsailGetOperationResult {
  /**
   * @schema LightsailGetOperationResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailGetOperationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetOperationResult(obj: LightsailGetOperationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetOperationsRequest
 */
export interface LightsailGetOperationsRequest {
  /**
   * @schema LightsailGetOperationsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetOperationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetOperationsRequest(obj: LightsailGetOperationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetOperationsResult
 */
export interface LightsailGetOperationsResult {
  /**
   * @schema LightsailGetOperationsResult#operations
   */
  readonly operations?: LightsailOperation[];

  /**
   * @schema LightsailGetOperationsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetOperationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetOperationsResult(obj: LightsailGetOperationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetOperationsForResourceRequest
 */
export interface LightsailGetOperationsForResourceRequest {
  /**
   * @schema LightsailGetOperationsForResourceRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailGetOperationsForResourceRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetOperationsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetOperationsForResourceRequest(obj: LightsailGetOperationsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceName': obj.resourceName,
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetOperationsForResourceResult
 */
export interface LightsailGetOperationsForResourceResult {
  /**
   * @schema LightsailGetOperationsForResourceResult#operations
   */
  readonly operations?: LightsailOperation[];

  /**
   * @schema LightsailGetOperationsForResourceResult#nextPageCount
   */
  readonly nextPageCount?: string;

  /**
   * @schema LightsailGetOperationsForResourceResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetOperationsForResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetOperationsForResourceResult(obj: LightsailGetOperationsForResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
    'nextPageCount': obj.nextPageCount,
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRegionsRequest
 */
export interface LightsailGetRegionsRequest {
  /**
   * @schema LightsailGetRegionsRequest#includeAvailabilityZones
   */
  readonly includeAvailabilityZones?: boolean;

  /**
   * @schema LightsailGetRegionsRequest#includeRelationalDatabaseAvailabilityZones
   */
  readonly includeRelationalDatabaseAvailabilityZones?: boolean;

}

/**
 * Converts an object of type 'LightsailGetRegionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRegionsRequest(obj: LightsailGetRegionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'includeAvailabilityZones': obj.includeAvailabilityZones,
    'includeRelationalDatabaseAvailabilityZones': obj.includeRelationalDatabaseAvailabilityZones,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRegionsResult
 */
export interface LightsailGetRegionsResult {
  /**
   * @schema LightsailGetRegionsResult#regions
   */
  readonly regions?: LightsailRegion[];

}

/**
 * Converts an object of type 'LightsailGetRegionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRegionsResult(obj: LightsailGetRegionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'regions': obj.regions?.map(y => toJson_LightsailRegion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseRequest
 */
export interface LightsailGetRelationalDatabaseRequest {
  /**
   * @schema LightsailGetRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseRequest(obj: LightsailGetRelationalDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseResult
 */
export interface LightsailGetRelationalDatabaseResult {
  /**
   * @schema LightsailGetRelationalDatabaseResult#relationalDatabase
   */
  readonly relationalDatabase?: LightsailRelationalDatabase;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseResult(obj: LightsailGetRelationalDatabaseResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabase': toJson_LightsailRelationalDatabase(obj.relationalDatabase),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseBlueprintsRequest
 */
export interface LightsailGetRelationalDatabaseBlueprintsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseBlueprintsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseBlueprintsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseBlueprintsRequest(obj: LightsailGetRelationalDatabaseBlueprintsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseBlueprintsResult
 */
export interface LightsailGetRelationalDatabaseBlueprintsResult {
  /**
   * @schema LightsailGetRelationalDatabaseBlueprintsResult#blueprints
   */
  readonly blueprints?: LightsailRelationalDatabaseBlueprint[];

  /**
   * @schema LightsailGetRelationalDatabaseBlueprintsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseBlueprintsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseBlueprintsResult(obj: LightsailGetRelationalDatabaseBlueprintsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blueprints': obj.blueprints?.map(y => toJson_LightsailRelationalDatabaseBlueprint(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseBundlesRequest
 */
export interface LightsailGetRelationalDatabaseBundlesRequest {
  /**
   * @schema LightsailGetRelationalDatabaseBundlesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseBundlesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseBundlesRequest(obj: LightsailGetRelationalDatabaseBundlesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseBundlesResult
 */
export interface LightsailGetRelationalDatabaseBundlesResult {
  /**
   * @schema LightsailGetRelationalDatabaseBundlesResult#bundles
   */
  readonly bundles?: LightsailRelationalDatabaseBundle[];

  /**
   * @schema LightsailGetRelationalDatabaseBundlesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseBundlesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseBundlesResult(obj: LightsailGetRelationalDatabaseBundlesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundles': obj.bundles?.map(y => toJson_LightsailRelationalDatabaseBundle(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseEventsRequest
 */
export interface LightsailGetRelationalDatabaseEventsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseEventsRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseEventsRequest#durationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema LightsailGetRelationalDatabaseEventsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseEventsRequest(obj: LightsailGetRelationalDatabaseEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'durationInMinutes': obj.durationInMinutes,
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseEventsResult
 */
export interface LightsailGetRelationalDatabaseEventsResult {
  /**
   * @schema LightsailGetRelationalDatabaseEventsResult#relationalDatabaseEvents
   */
  readonly relationalDatabaseEvents?: LightsailRelationalDatabaseEvent[];

  /**
   * @schema LightsailGetRelationalDatabaseEventsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseEventsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseEventsResult(obj: LightsailGetRelationalDatabaseEventsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseEvents': obj.relationalDatabaseEvents?.map(y => toJson_LightsailRelationalDatabaseEvent(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseLogEventsRequest
 */
export interface LightsailGetRelationalDatabaseLogEventsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#logStreamName
   */
  readonly logStreamName: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#startFromHead
   */
  readonly startFromHead?: boolean;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseLogEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseLogEventsRequest(obj: LightsailGetRelationalDatabaseLogEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'logStreamName': obj.logStreamName,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'startFromHead': obj.startFromHead,
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseLogEventsResult
 */
export interface LightsailGetRelationalDatabaseLogEventsResult {
  /**
   * @schema LightsailGetRelationalDatabaseLogEventsResult#resourceLogEvents
   */
  readonly resourceLogEvents?: LightsailLogEvent[];

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsResult#nextBackwardToken
   */
  readonly nextBackwardToken?: string;

  /**
   * @schema LightsailGetRelationalDatabaseLogEventsResult#nextForwardToken
   */
  readonly nextForwardToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseLogEventsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseLogEventsResult(obj: LightsailGetRelationalDatabaseLogEventsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceLogEvents': obj.resourceLogEvents?.map(y => toJson_LightsailLogEvent(y)),
    'nextBackwardToken': obj.nextBackwardToken,
    'nextForwardToken': obj.nextForwardToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseLogStreamsRequest
 */
export interface LightsailGetRelationalDatabaseLogStreamsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseLogStreamsRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseLogStreamsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseLogStreamsRequest(obj: LightsailGetRelationalDatabaseLogStreamsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseLogStreamsResult
 */
export interface LightsailGetRelationalDatabaseLogStreamsResult {
  /**
   * @schema LightsailGetRelationalDatabaseLogStreamsResult#logStreams
   */
  readonly logStreams?: string[];

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseLogStreamsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseLogStreamsResult(obj: LightsailGetRelationalDatabaseLogStreamsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logStreams': obj.logStreams?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseMasterUserPasswordRequest
 */
export interface LightsailGetRelationalDatabaseMasterUserPasswordRequest {
  /**
   * @schema LightsailGetRelationalDatabaseMasterUserPasswordRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseMasterUserPasswordRequest#passwordVersion
   */
  readonly passwordVersion?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseMasterUserPasswordRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseMasterUserPasswordRequest(obj: LightsailGetRelationalDatabaseMasterUserPasswordRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'passwordVersion': obj.passwordVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseMasterUserPasswordResult
 */
export interface LightsailGetRelationalDatabaseMasterUserPasswordResult {
  /**
   * @schema LightsailGetRelationalDatabaseMasterUserPasswordResult#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema LightsailGetRelationalDatabaseMasterUserPasswordResult#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseMasterUserPasswordResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseMasterUserPasswordResult(obj: LightsailGetRelationalDatabaseMasterUserPasswordResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'masterUserPassword': obj.masterUserPassword,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseMetricDataRequest
 */
export interface LightsailGetRelationalDatabaseMetricDataRequest {
  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#period
   */
  readonly period: number;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#unit
   */
  readonly unit: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataRequest#statistics
   */
  readonly statistics: string[];

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseMetricDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseMetricDataRequest(obj: LightsailGetRelationalDatabaseMetricDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'metricName': obj.metricName,
    'period': obj.period,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'unit': obj.unit,
    'statistics': obj.statistics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseMetricDataResult
 */
export interface LightsailGetRelationalDatabaseMetricDataResult {
  /**
   * @schema LightsailGetRelationalDatabaseMetricDataResult#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailGetRelationalDatabaseMetricDataResult#metricData
   */
  readonly metricData?: LightsailMetricDatapoint[];

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseMetricDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseMetricDataResult(obj: LightsailGetRelationalDatabaseMetricDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'metricData': obj.metricData?.map(y => toJson_LightsailMetricDatapoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseParametersRequest
 */
export interface LightsailGetRelationalDatabaseParametersRequest {
  /**
   * @schema LightsailGetRelationalDatabaseParametersRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailGetRelationalDatabaseParametersRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseParametersRequest(obj: LightsailGetRelationalDatabaseParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseParametersResult
 */
export interface LightsailGetRelationalDatabaseParametersResult {
  /**
   * @schema LightsailGetRelationalDatabaseParametersResult#parameters
   */
  readonly parameters?: LightsailRelationalDatabaseParameter[];

  /**
   * @schema LightsailGetRelationalDatabaseParametersResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseParametersResult(obj: LightsailGetRelationalDatabaseParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'parameters': obj.parameters?.map(y => toJson_LightsailRelationalDatabaseParameter(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseSnapshotRequest
 */
export interface LightsailGetRelationalDatabaseSnapshotRequest {
  /**
   * @schema LightsailGetRelationalDatabaseSnapshotRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseSnapshotRequest(obj: LightsailGetRelationalDatabaseSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseSnapshotName': obj.relationalDatabaseSnapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseSnapshotResult
 */
export interface LightsailGetRelationalDatabaseSnapshotResult {
  /**
   * @schema LightsailGetRelationalDatabaseSnapshotResult#relationalDatabaseSnapshot
   */
  readonly relationalDatabaseSnapshot?: LightsailRelationalDatabaseSnapshot;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseSnapshotResult(obj: LightsailGetRelationalDatabaseSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseSnapshot': toJson_LightsailRelationalDatabaseSnapshot(obj.relationalDatabaseSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseSnapshotsRequest
 */
export interface LightsailGetRelationalDatabaseSnapshotsRequest {
  /**
   * @schema LightsailGetRelationalDatabaseSnapshotsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseSnapshotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseSnapshotsRequest(obj: LightsailGetRelationalDatabaseSnapshotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabaseSnapshotsResult
 */
export interface LightsailGetRelationalDatabaseSnapshotsResult {
  /**
   * @schema LightsailGetRelationalDatabaseSnapshotsResult#relationalDatabaseSnapshots
   */
  readonly relationalDatabaseSnapshots?: LightsailRelationalDatabaseSnapshot[];

  /**
   * @schema LightsailGetRelationalDatabaseSnapshotsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabaseSnapshotsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabaseSnapshotsResult(obj: LightsailGetRelationalDatabaseSnapshotsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseSnapshots': obj.relationalDatabaseSnapshots?.map(y => toJson_LightsailRelationalDatabaseSnapshot(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabasesRequest
 */
export interface LightsailGetRelationalDatabasesRequest {
  /**
   * @schema LightsailGetRelationalDatabasesRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabasesRequest(obj: LightsailGetRelationalDatabasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetRelationalDatabasesResult
 */
export interface LightsailGetRelationalDatabasesResult {
  /**
   * @schema LightsailGetRelationalDatabasesResult#relationalDatabases
   */
  readonly relationalDatabases?: LightsailRelationalDatabase[];

  /**
   * @schema LightsailGetRelationalDatabasesResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetRelationalDatabasesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetRelationalDatabasesResult(obj: LightsailGetRelationalDatabasesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabases': obj.relationalDatabases?.map(y => toJson_LightsailRelationalDatabase(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetStaticIpRequest
 */
export interface LightsailGetStaticIpRequest {
  /**
   * @schema LightsailGetStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * Converts an object of type 'LightsailGetStaticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetStaticIpRequest(obj: LightsailGetStaticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'staticIpName': obj.staticIpName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetStaticIpResult
 */
export interface LightsailGetStaticIpResult {
  /**
   * @schema LightsailGetStaticIpResult#staticIp
   */
  readonly staticIp?: LightsailStaticIp;

}

/**
 * Converts an object of type 'LightsailGetStaticIpResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetStaticIpResult(obj: LightsailGetStaticIpResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'staticIp': toJson_LightsailStaticIp(obj.staticIp),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetStaticIpsRequest
 */
export interface LightsailGetStaticIpsRequest {
  /**
   * @schema LightsailGetStaticIpsRequest#pageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetStaticIpsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetStaticIpsRequest(obj: LightsailGetStaticIpsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailGetStaticIpsResult
 */
export interface LightsailGetStaticIpsResult {
  /**
   * @schema LightsailGetStaticIpsResult#staticIps
   */
  readonly staticIps?: LightsailStaticIp[];

  /**
   * @schema LightsailGetStaticIpsResult#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'LightsailGetStaticIpsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailGetStaticIpsResult(obj: LightsailGetStaticIpsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'staticIps': obj.staticIps?.map(y => toJson_LightsailStaticIp(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailImportKeyPairRequest
 */
export interface LightsailImportKeyPairRequest {
  /**
   * @schema LightsailImportKeyPairRequest#keyPairName
   */
  readonly keyPairName: string;

  /**
   * @schema LightsailImportKeyPairRequest#publicKeyBase64
   */
  readonly publicKeyBase64: string;

}

/**
 * Converts an object of type 'LightsailImportKeyPairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailImportKeyPairRequest(obj: LightsailImportKeyPairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPairName': obj.keyPairName,
    'publicKeyBase64': obj.publicKeyBase64,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailImportKeyPairResult
 */
export interface LightsailImportKeyPairResult {
  /**
   * @schema LightsailImportKeyPairResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailImportKeyPairResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailImportKeyPairResult(obj: LightsailImportKeyPairResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailIsVpcPeeredRequest
 */
export interface LightsailIsVpcPeeredRequest {
}

/**
 * Converts an object of type 'LightsailIsVpcPeeredRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailIsVpcPeeredRequest(obj: LightsailIsVpcPeeredRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailIsVpcPeeredResult
 */
export interface LightsailIsVpcPeeredResult {
  /**
   * @schema LightsailIsVpcPeeredResult#isPeered
   */
  readonly isPeered?: boolean;

}

/**
 * Converts an object of type 'LightsailIsVpcPeeredResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailIsVpcPeeredResult(obj: LightsailIsVpcPeeredResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isPeered': obj.isPeered,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailOpenInstancePublicPortsRequest
 */
export interface LightsailOpenInstancePublicPortsRequest {
  /**
   * @schema LightsailOpenInstancePublicPortsRequest#portInfo
   */
  readonly portInfo: LightsailPortInfo;

  /**
   * @schema LightsailOpenInstancePublicPortsRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailOpenInstancePublicPortsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailOpenInstancePublicPortsRequest(obj: LightsailOpenInstancePublicPortsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portInfo': toJson_LightsailPortInfo(obj.portInfo),
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailOpenInstancePublicPortsResult
 */
export interface LightsailOpenInstancePublicPortsResult {
  /**
   * @schema LightsailOpenInstancePublicPortsResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailOpenInstancePublicPortsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailOpenInstancePublicPortsResult(obj: LightsailOpenInstancePublicPortsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPeerVpcRequest
 */
export interface LightsailPeerVpcRequest {
}

/**
 * Converts an object of type 'LightsailPeerVpcRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPeerVpcRequest(obj: LightsailPeerVpcRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPeerVpcResult
 */
export interface LightsailPeerVpcResult {
  /**
   * @schema LightsailPeerVpcResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailPeerVpcResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPeerVpcResult(obj: LightsailPeerVpcResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPutAlarmRequest
 */
export interface LightsailPutAlarmRequest {
  /**
   * @schema LightsailPutAlarmRequest#alarmName
   */
  readonly alarmName: string;

  /**
   * @schema LightsailPutAlarmRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema LightsailPutAlarmRequest#monitoredResourceName
   */
  readonly monitoredResourceName: string;

  /**
   * @schema LightsailPutAlarmRequest#comparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema LightsailPutAlarmRequest#threshold
   */
  readonly threshold: number;

  /**
   * @schema LightsailPutAlarmRequest#evaluationPeriods
   */
  readonly evaluationPeriods: number;

  /**
   * @schema LightsailPutAlarmRequest#datapointsToAlarm
   */
  readonly datapointsToAlarm?: number;

  /**
   * @schema LightsailPutAlarmRequest#treatMissingData
   */
  readonly treatMissingData?: string;

  /**
   * @schema LightsailPutAlarmRequest#contactProtocols
   */
  readonly contactProtocols?: string[];

  /**
   * @schema LightsailPutAlarmRequest#notificationTriggers
   */
  readonly notificationTriggers?: string[];

  /**
   * @schema LightsailPutAlarmRequest#notificationEnabled
   */
  readonly notificationEnabled?: boolean;

}

/**
 * Converts an object of type 'LightsailPutAlarmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPutAlarmRequest(obj: LightsailPutAlarmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmName': obj.alarmName,
    'metricName': obj.metricName,
    'monitoredResourceName': obj.monitoredResourceName,
    'comparisonOperator': obj.comparisonOperator,
    'threshold': obj.threshold,
    'evaluationPeriods': obj.evaluationPeriods,
    'datapointsToAlarm': obj.datapointsToAlarm,
    'treatMissingData': obj.treatMissingData,
    'contactProtocols': obj.contactProtocols?.map(y => y),
    'notificationTriggers': obj.notificationTriggers?.map(y => y),
    'notificationEnabled': obj.notificationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPutAlarmResult
 */
export interface LightsailPutAlarmResult {
  /**
   * @schema LightsailPutAlarmResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailPutAlarmResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPutAlarmResult(obj: LightsailPutAlarmResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPutInstancePublicPortsRequest
 */
export interface LightsailPutInstancePublicPortsRequest {
  /**
   * @schema LightsailPutInstancePublicPortsRequest#portInfos
   */
  readonly portInfos: LightsailPortInfo[];

  /**
   * @schema LightsailPutInstancePublicPortsRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailPutInstancePublicPortsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPutInstancePublicPortsRequest(obj: LightsailPutInstancePublicPortsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portInfos': obj.portInfos?.map(y => toJson_LightsailPortInfo(y)),
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPutInstancePublicPortsResult
 */
export interface LightsailPutInstancePublicPortsResult {
  /**
   * @schema LightsailPutInstancePublicPortsResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailPutInstancePublicPortsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPutInstancePublicPortsResult(obj: LightsailPutInstancePublicPortsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRebootInstanceRequest
 */
export interface LightsailRebootInstanceRequest {
  /**
   * @schema LightsailRebootInstanceRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailRebootInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRebootInstanceRequest(obj: LightsailRebootInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRebootInstanceResult
 */
export interface LightsailRebootInstanceResult {
  /**
   * @schema LightsailRebootInstanceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailRebootInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRebootInstanceResult(obj: LightsailRebootInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRebootRelationalDatabaseRequest
 */
export interface LightsailRebootRelationalDatabaseRequest {
  /**
   * @schema LightsailRebootRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * Converts an object of type 'LightsailRebootRelationalDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRebootRelationalDatabaseRequest(obj: LightsailRebootRelationalDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRebootRelationalDatabaseResult
 */
export interface LightsailRebootRelationalDatabaseResult {
  /**
   * @schema LightsailRebootRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailRebootRelationalDatabaseResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRebootRelationalDatabaseResult(obj: LightsailRebootRelationalDatabaseResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRegisterContainerImageRequest
 */
export interface LightsailRegisterContainerImageRequest {
  /**
   * @schema LightsailRegisterContainerImageRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailRegisterContainerImageRequest#label
   */
  readonly label: string;

  /**
   * @schema LightsailRegisterContainerImageRequest#digest
   */
  readonly digest: string;

}

/**
 * Converts an object of type 'LightsailRegisterContainerImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRegisterContainerImageRequest(obj: LightsailRegisterContainerImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
    'label': obj.label,
    'digest': obj.digest,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRegisterContainerImageResult
 */
export interface LightsailRegisterContainerImageResult {
  /**
   * @schema LightsailRegisterContainerImageResult#containerImage
   */
  readonly containerImage?: LightsailContainerImage;

}

/**
 * Converts an object of type 'LightsailRegisterContainerImageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRegisterContainerImageResult(obj: LightsailRegisterContainerImageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerImage': toJson_LightsailContainerImage(obj.containerImage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailReleaseStaticIpRequest
 */
export interface LightsailReleaseStaticIpRequest {
  /**
   * @schema LightsailReleaseStaticIpRequest#staticIpName
   */
  readonly staticIpName: string;

}

/**
 * Converts an object of type 'LightsailReleaseStaticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailReleaseStaticIpRequest(obj: LightsailReleaseStaticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'staticIpName': obj.staticIpName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailReleaseStaticIpResult
 */
export interface LightsailReleaseStaticIpResult {
  /**
   * @schema LightsailReleaseStaticIpResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailReleaseStaticIpResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailReleaseStaticIpResult(obj: LightsailReleaseStaticIpResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailResetDistributionCacheRequest
 */
export interface LightsailResetDistributionCacheRequest {
  /**
   * @schema LightsailResetDistributionCacheRequest#distributionName
   */
  readonly distributionName?: string;

}

/**
 * Converts an object of type 'LightsailResetDistributionCacheRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailResetDistributionCacheRequest(obj: LightsailResetDistributionCacheRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailResetDistributionCacheResult
 */
export interface LightsailResetDistributionCacheResult {
  /**
   * @schema LightsailResetDistributionCacheResult#status
   */
  readonly status?: string;

  /**
   * @schema LightsailResetDistributionCacheResult#createTime
   */
  readonly createTime?: string;

  /**
   * @schema LightsailResetDistributionCacheResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailResetDistributionCacheResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailResetDistributionCacheResult(obj: LightsailResetDistributionCacheResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'createTime': obj.createTime,
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailSendContactMethodVerificationRequest
 */
export interface LightsailSendContactMethodVerificationRequest {
  /**
   * @schema LightsailSendContactMethodVerificationRequest#protocol
   */
  readonly protocol: string;

}

/**
 * Converts an object of type 'LightsailSendContactMethodVerificationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailSendContactMethodVerificationRequest(obj: LightsailSendContactMethodVerificationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailSendContactMethodVerificationResult
 */
export interface LightsailSendContactMethodVerificationResult {
  /**
   * @schema LightsailSendContactMethodVerificationResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailSendContactMethodVerificationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailSendContactMethodVerificationResult(obj: LightsailSendContactMethodVerificationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailSetIpAddressTypeRequest
 */
export interface LightsailSetIpAddressTypeRequest {
  /**
   * @schema LightsailSetIpAddressTypeRequest#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema LightsailSetIpAddressTypeRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailSetIpAddressTypeRequest#ipAddressType
   */
  readonly ipAddressType: string;

}

/**
 * Converts an object of type 'LightsailSetIpAddressTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailSetIpAddressTypeRequest(obj: LightsailSetIpAddressTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'resourceName': obj.resourceName,
    'ipAddressType': obj.ipAddressType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailSetIpAddressTypeResult
 */
export interface LightsailSetIpAddressTypeResult {
  /**
   * @schema LightsailSetIpAddressTypeResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailSetIpAddressTypeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailSetIpAddressTypeResult(obj: LightsailSetIpAddressTypeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailSetResourceAccessForBucketRequest
 */
export interface LightsailSetResourceAccessForBucketRequest {
  /**
   * @schema LightsailSetResourceAccessForBucketRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailSetResourceAccessForBucketRequest#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema LightsailSetResourceAccessForBucketRequest#access
   */
  readonly access: string;

}

/**
 * Converts an object of type 'LightsailSetResourceAccessForBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailSetResourceAccessForBucketRequest(obj: LightsailSetResourceAccessForBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceName': obj.resourceName,
    'bucketName': obj.bucketName,
    'access': obj.access,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailSetResourceAccessForBucketResult
 */
export interface LightsailSetResourceAccessForBucketResult {
  /**
   * @schema LightsailSetResourceAccessForBucketResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailSetResourceAccessForBucketResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailSetResourceAccessForBucketResult(obj: LightsailSetResourceAccessForBucketResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailStartInstanceRequest
 */
export interface LightsailStartInstanceRequest {
  /**
   * @schema LightsailStartInstanceRequest#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'LightsailStartInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailStartInstanceRequest(obj: LightsailStartInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailStartInstanceResult
 */
export interface LightsailStartInstanceResult {
  /**
   * @schema LightsailStartInstanceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailStartInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailStartInstanceResult(obj: LightsailStartInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailStartRelationalDatabaseRequest
 */
export interface LightsailStartRelationalDatabaseRequest {
  /**
   * @schema LightsailStartRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

}

/**
 * Converts an object of type 'LightsailStartRelationalDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailStartRelationalDatabaseRequest(obj: LightsailStartRelationalDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailStartRelationalDatabaseResult
 */
export interface LightsailStartRelationalDatabaseResult {
  /**
   * @schema LightsailStartRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailStartRelationalDatabaseResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailStartRelationalDatabaseResult(obj: LightsailStartRelationalDatabaseResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailStopInstanceRequest
 */
export interface LightsailStopInstanceRequest {
  /**
   * @schema LightsailStopInstanceRequest#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema LightsailStopInstanceRequest#force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'LightsailStopInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailStopInstanceRequest(obj: LightsailStopInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
    'force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailStopInstanceResult
 */
export interface LightsailStopInstanceResult {
  /**
   * @schema LightsailStopInstanceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailStopInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailStopInstanceResult(obj: LightsailStopInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailStopRelationalDatabaseRequest
 */
export interface LightsailStopRelationalDatabaseRequest {
  /**
   * @schema LightsailStopRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailStopRelationalDatabaseRequest#relationalDatabaseSnapshotName
   */
  readonly relationalDatabaseSnapshotName?: string;

}

/**
 * Converts an object of type 'LightsailStopRelationalDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailStopRelationalDatabaseRequest(obj: LightsailStopRelationalDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'relationalDatabaseSnapshotName': obj.relationalDatabaseSnapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailStopRelationalDatabaseResult
 */
export interface LightsailStopRelationalDatabaseResult {
  /**
   * @schema LightsailStopRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailStopRelationalDatabaseResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailStopRelationalDatabaseResult(obj: LightsailStopRelationalDatabaseResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailTagResourceRequest
 */
export interface LightsailTagResourceRequest {
  /**
   * @schema LightsailTagResourceRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailTagResourceRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LightsailTagResourceRequest#tags
   */
  readonly tags: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailTagResourceRequest(obj: LightsailTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceName': obj.resourceName,
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailTagResourceResult
 */
export interface LightsailTagResourceResult {
  /**
   * @schema LightsailTagResourceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailTagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailTagResourceResult(obj: LightsailTagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailTestAlarmRequest
 */
export interface LightsailTestAlarmRequest {
  /**
   * @schema LightsailTestAlarmRequest#alarmName
   */
  readonly alarmName: string;

  /**
   * @schema LightsailTestAlarmRequest#state
   */
  readonly state: string;

}

/**
 * Converts an object of type 'LightsailTestAlarmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailTestAlarmRequest(obj: LightsailTestAlarmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmName': obj.alarmName,
    'state': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailTestAlarmResult
 */
export interface LightsailTestAlarmResult {
  /**
   * @schema LightsailTestAlarmResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailTestAlarmResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailTestAlarmResult(obj: LightsailTestAlarmResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUnpeerVpcRequest
 */
export interface LightsailUnpeerVpcRequest {
}

/**
 * Converts an object of type 'LightsailUnpeerVpcRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUnpeerVpcRequest(obj: LightsailUnpeerVpcRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUnpeerVpcResult
 */
export interface LightsailUnpeerVpcResult {
  /**
   * @schema LightsailUnpeerVpcResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailUnpeerVpcResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUnpeerVpcResult(obj: LightsailUnpeerVpcResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUntagResourceRequest
 */
export interface LightsailUntagResourceRequest {
  /**
   * @schema LightsailUntagResourceRequest#resourceName
   */
  readonly resourceName: string;

  /**
   * @schema LightsailUntagResourceRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LightsailUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'LightsailUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUntagResourceRequest(obj: LightsailUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceName': obj.resourceName,
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUntagResourceResult
 */
export interface LightsailUntagResourceResult {
  /**
   * @schema LightsailUntagResourceResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailUntagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUntagResourceResult(obj: LightsailUntagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateBucketRequest
 */
export interface LightsailUpdateBucketRequest {
  /**
   * @schema LightsailUpdateBucketRequest#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema LightsailUpdateBucketRequest#accessRules
   */
  readonly accessRules?: LightsailAccessRules;

  /**
   * @schema LightsailUpdateBucketRequest#versioning
   */
  readonly versioning?: string;

  /**
   * @schema LightsailUpdateBucketRequest#readonlyAccessAccounts
   */
  readonly readonlyAccessAccounts?: string[];

}

/**
 * Converts an object of type 'LightsailUpdateBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateBucketRequest(obj: LightsailUpdateBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'accessRules': toJson_LightsailAccessRules(obj.accessRules),
    'versioning': obj.versioning,
    'readonlyAccessAccounts': obj.readonlyAccessAccounts?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateBucketResult
 */
export interface LightsailUpdateBucketResult {
  /**
   * @schema LightsailUpdateBucketResult#bucket
   */
  readonly bucket?: LightsailBucket;

  /**
   * @schema LightsailUpdateBucketResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailUpdateBucketResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateBucketResult(obj: LightsailUpdateBucketResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': toJson_LightsailBucket(obj.bucket),
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateBucketBundleRequest
 */
export interface LightsailUpdateBucketBundleRequest {
  /**
   * @schema LightsailUpdateBucketBundleRequest#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema LightsailUpdateBucketBundleRequest#bundleId
   */
  readonly bundleId: string;

}

/**
 * Converts an object of type 'LightsailUpdateBucketBundleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateBucketBundleRequest(obj: LightsailUpdateBucketBundleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'bundleId': obj.bundleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateBucketBundleResult
 */
export interface LightsailUpdateBucketBundleResult {
  /**
   * @schema LightsailUpdateBucketBundleResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailUpdateBucketBundleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateBucketBundleResult(obj: LightsailUpdateBucketBundleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateContainerServiceRequest
 */
export interface LightsailUpdateContainerServiceRequest {
  /**
   * @schema LightsailUpdateContainerServiceRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema LightsailUpdateContainerServiceRequest#power
   */
  readonly power?: string;

  /**
   * @schema LightsailUpdateContainerServiceRequest#scale
   */
  readonly scale?: number;

  /**
   * @schema LightsailUpdateContainerServiceRequest#isDisabled
   */
  readonly isDisabled?: boolean;

  /**
   * @schema LightsailUpdateContainerServiceRequest#publicDomainNames
   */
  readonly publicDomainNames?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'LightsailUpdateContainerServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateContainerServiceRequest(obj: LightsailUpdateContainerServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
    'power': obj.power,
    'scale': obj.scale,
    'isDisabled': obj.isDisabled,
    'publicDomainNames': ((obj.publicDomainNames) === undefined) ? undefined : (Object.entries(obj.publicDomainNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateContainerServiceResult
 */
export interface LightsailUpdateContainerServiceResult {
  /**
   * @schema LightsailUpdateContainerServiceResult#containerService
   */
  readonly containerService?: LightsailContainerService;

}

/**
 * Converts an object of type 'LightsailUpdateContainerServiceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateContainerServiceResult(obj: LightsailUpdateContainerServiceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerService': toJson_LightsailContainerService(obj.containerService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateDistributionRequest
 */
export interface LightsailUpdateDistributionRequest {
  /**
   * @schema LightsailUpdateDistributionRequest#distributionName
   */
  readonly distributionName: string;

  /**
   * @schema LightsailUpdateDistributionRequest#origin
   */
  readonly origin?: LightsailInputOrigin;

  /**
   * @schema LightsailUpdateDistributionRequest#defaultCacheBehavior
   */
  readonly defaultCacheBehavior?: LightsailCacheBehavior;

  /**
   * @schema LightsailUpdateDistributionRequest#cacheBehaviorSettings
   */
  readonly cacheBehaviorSettings?: LightsailCacheSettings;

  /**
   * @schema LightsailUpdateDistributionRequest#cacheBehaviors
   */
  readonly cacheBehaviors?: LightsailCacheBehaviorPerPath[];

  /**
   * @schema LightsailUpdateDistributionRequest#isEnabled
   */
  readonly isEnabled?: boolean;

}

/**
 * Converts an object of type 'LightsailUpdateDistributionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateDistributionRequest(obj: LightsailUpdateDistributionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
    'origin': toJson_LightsailInputOrigin(obj.origin),
    'defaultCacheBehavior': toJson_LightsailCacheBehavior(obj.defaultCacheBehavior),
    'cacheBehaviorSettings': toJson_LightsailCacheSettings(obj.cacheBehaviorSettings),
    'cacheBehaviors': obj.cacheBehaviors?.map(y => toJson_LightsailCacheBehaviorPerPath(y)),
    'isEnabled': obj.isEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateDistributionResult
 */
export interface LightsailUpdateDistributionResult {
  /**
   * @schema LightsailUpdateDistributionResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailUpdateDistributionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateDistributionResult(obj: LightsailUpdateDistributionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateDistributionBundleRequest
 */
export interface LightsailUpdateDistributionBundleRequest {
  /**
   * @schema LightsailUpdateDistributionBundleRequest#distributionName
   */
  readonly distributionName?: string;

  /**
   * @schema LightsailUpdateDistributionBundleRequest#bundleId
   */
  readonly bundleId?: string;

}

/**
 * Converts an object of type 'LightsailUpdateDistributionBundleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateDistributionBundleRequest(obj: LightsailUpdateDistributionBundleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionName': obj.distributionName,
    'bundleId': obj.bundleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateDistributionBundleResult
 */
export interface LightsailUpdateDistributionBundleResult {
  /**
   * @schema LightsailUpdateDistributionBundleResult#operation
   */
  readonly operation?: LightsailOperation;

}

/**
 * Converts an object of type 'LightsailUpdateDistributionBundleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateDistributionBundleResult(obj: LightsailUpdateDistributionBundleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operation': toJson_LightsailOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateDomainEntryRequest
 */
export interface LightsailUpdateDomainEntryRequest {
  /**
   * @schema LightsailUpdateDomainEntryRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema LightsailUpdateDomainEntryRequest#domainEntry
   */
  readonly domainEntry: LightsailDomainEntry;

}

/**
 * Converts an object of type 'LightsailUpdateDomainEntryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateDomainEntryRequest(obj: LightsailUpdateDomainEntryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'domainEntry': toJson_LightsailDomainEntry(obj.domainEntry),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateDomainEntryResult
 */
export interface LightsailUpdateDomainEntryResult {
  /**
   * @schema LightsailUpdateDomainEntryResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailUpdateDomainEntryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateDomainEntryResult(obj: LightsailUpdateDomainEntryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateLoadBalancerAttributeRequest
 */
export interface LightsailUpdateLoadBalancerAttributeRequest {
  /**
   * @schema LightsailUpdateLoadBalancerAttributeRequest#loadBalancerName
   */
  readonly loadBalancerName: string;

  /**
   * @schema LightsailUpdateLoadBalancerAttributeRequest#attributeName
   */
  readonly attributeName: string;

  /**
   * @schema LightsailUpdateLoadBalancerAttributeRequest#attributeValue
   */
  readonly attributeValue: string;

}

/**
 * Converts an object of type 'LightsailUpdateLoadBalancerAttributeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateLoadBalancerAttributeRequest(obj: LightsailUpdateLoadBalancerAttributeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loadBalancerName': obj.loadBalancerName,
    'attributeName': obj.attributeName,
    'attributeValue': obj.attributeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateLoadBalancerAttributeResult
 */
export interface LightsailUpdateLoadBalancerAttributeResult {
  /**
   * @schema LightsailUpdateLoadBalancerAttributeResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailUpdateLoadBalancerAttributeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateLoadBalancerAttributeResult(obj: LightsailUpdateLoadBalancerAttributeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateRelationalDatabaseRequest
 */
export interface LightsailUpdateRelationalDatabaseRequest {
  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#rotateMasterUserPassword
   */
  readonly rotateMasterUserPassword?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#preferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#enableBackupRetention
   */
  readonly enableBackupRetention?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#disableBackupRetention
   */
  readonly disableBackupRetention?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#applyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema LightsailUpdateRelationalDatabaseRequest#caCertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

}

/**
 * Converts an object of type 'LightsailUpdateRelationalDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateRelationalDatabaseRequest(obj: LightsailUpdateRelationalDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'masterUserPassword': obj.masterUserPassword,
    'rotateMasterUserPassword': obj.rotateMasterUserPassword,
    'preferredBackupWindow': obj.preferredBackupWindow,
    'preferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'enableBackupRetention': obj.enableBackupRetention,
    'disableBackupRetention': obj.disableBackupRetention,
    'publiclyAccessible': obj.publiclyAccessible,
    'applyImmediately': obj.applyImmediately,
    'caCertificateIdentifier': obj.caCertificateIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateRelationalDatabaseResult
 */
export interface LightsailUpdateRelationalDatabaseResult {
  /**
   * @schema LightsailUpdateRelationalDatabaseResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailUpdateRelationalDatabaseResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateRelationalDatabaseResult(obj: LightsailUpdateRelationalDatabaseResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateRelationalDatabaseParametersRequest
 */
export interface LightsailUpdateRelationalDatabaseParametersRequest {
  /**
   * @schema LightsailUpdateRelationalDatabaseParametersRequest#relationalDatabaseName
   */
  readonly relationalDatabaseName: string;

  /**
   * @schema LightsailUpdateRelationalDatabaseParametersRequest#parameters
   */
  readonly parameters: LightsailRelationalDatabaseParameter[];

}

/**
 * Converts an object of type 'LightsailUpdateRelationalDatabaseParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateRelationalDatabaseParametersRequest(obj: LightsailUpdateRelationalDatabaseParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseName': obj.relationalDatabaseName,
    'parameters': obj.parameters?.map(y => toJson_LightsailRelationalDatabaseParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailUpdateRelationalDatabaseParametersResult
 */
export interface LightsailUpdateRelationalDatabaseParametersResult {
  /**
   * @schema LightsailUpdateRelationalDatabaseParametersResult#operations
   */
  readonly operations?: LightsailOperation[];

}

/**
 * Converts an object of type 'LightsailUpdateRelationalDatabaseParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailUpdateRelationalDatabaseParametersResult(obj: LightsailUpdateRelationalDatabaseParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'operations': obj.operations?.map(y => toJson_LightsailOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailOperation
 */
export interface LightsailOperation {
  /**
   * @schema LightsailOperation#id
   */
  readonly id?: string;

  /**
   * @schema LightsailOperation#resourceName
   */
  readonly resourceName?: string;

  /**
   * @schema LightsailOperation#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailOperation#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailOperation#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailOperation#isTerminal
   */
  readonly isTerminal?: boolean;

  /**
   * @schema LightsailOperation#operationDetails
   */
  readonly operationDetails?: string;

  /**
   * @schema LightsailOperation#operationType
   */
  readonly operationType?: string;

  /**
   * @schema LightsailOperation#status
   */
  readonly status?: string;

  /**
   * @schema LightsailOperation#statusChangedAt
   */
  readonly statusChangedAt?: string;

  /**
   * @schema LightsailOperation#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema LightsailOperation#errorDetails
   */
  readonly errorDetails?: string;

}

/**
 * Converts an object of type 'LightsailOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailOperation(obj: LightsailOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'resourceName': obj.resourceName,
    'resourceType': obj.resourceType,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'isTerminal': obj.isTerminal,
    'operationDetails': obj.operationDetails,
    'operationType': obj.operationType,
    'status': obj.status,
    'statusChangedAt': obj.statusChangedAt,
    'errorCode': obj.errorCode,
    'errorDetails': obj.errorDetails,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPortInfo
 */
export interface LightsailPortInfo {
  /**
   * @schema LightsailPortInfo#fromPort
   */
  readonly fromPort?: number;

  /**
   * @schema LightsailPortInfo#toPort
   */
  readonly toPort?: number;

  /**
   * @schema LightsailPortInfo#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailPortInfo#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema LightsailPortInfo#ipv6Cidrs
   */
  readonly ipv6Cidrs?: string[];

  /**
   * @schema LightsailPortInfo#cidrListAliases
   */
  readonly cidrListAliases?: string[];

}

/**
 * Converts an object of type 'LightsailPortInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPortInfo(obj: LightsailPortInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fromPort': obj.fromPort,
    'toPort': obj.toPort,
    'protocol': obj.protocol,
    'cidrs': obj.cidrs?.map(y => y),
    'ipv6Cidrs': obj.ipv6Cidrs?.map(y => y),
    'cidrListAliases': obj.cidrListAliases?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailTag
 */
export interface LightsailTag {
  /**
   * @schema LightsailTag#key
   */
  readonly key?: string;

  /**
   * @schema LightsailTag#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'LightsailTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailTag(obj: LightsailTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailBucket
 */
export interface LightsailBucket {
  /**
   * @schema LightsailBucket#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailBucket#accessRules
   */
  readonly accessRules?: LightsailAccessRules;

  /**
   * @schema LightsailBucket#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailBucket#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailBucket#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailBucket#url
   */
  readonly url?: string;

  /**
   * @schema LightsailBucket#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailBucket#name
   */
  readonly name?: string;

  /**
   * @schema LightsailBucket#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailBucket#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailBucket#objectVersioning
   */
  readonly objectVersioning?: string;

  /**
   * @schema LightsailBucket#ableToUpdateBundle
   */
  readonly ableToUpdateBundle?: boolean;

  /**
   * @schema LightsailBucket#readonlyAccessAccounts
   */
  readonly readonlyAccessAccounts?: string[];

  /**
   * @schema LightsailBucket#resourcesReceivingAccess
   */
  readonly resourcesReceivingAccess?: LightsailResourceReceivingAccess[];

  /**
   * @schema LightsailBucket#state
   */
  readonly state?: LightsailBucketState;

}

/**
 * Converts an object of type 'LightsailBucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailBucket(obj: LightsailBucket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'accessRules': toJson_LightsailAccessRules(obj.accessRules),
    'arn': obj.arn,
    'bundleId': obj.bundleId,
    'createdAt': obj.createdAt,
    'url': obj.url,
    'location': toJson_LightsailResourceLocation(obj.location),
    'name': obj.name,
    'supportCode': obj.supportCode,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'objectVersioning': obj.objectVersioning,
    'ableToUpdateBundle': obj.ableToUpdateBundle,
    'readonlyAccessAccounts': obj.readonlyAccessAccounts?.map(y => y),
    'resourcesReceivingAccess': obj.resourcesReceivingAccess?.map(y => toJson_LightsailResourceReceivingAccess(y)),
    'state': toJson_LightsailBucketState(obj.state),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAccessKey
 */
export interface LightsailAccessKey {
  /**
   * @schema LightsailAccessKey#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema LightsailAccessKey#secretAccessKey
   */
  readonly secretAccessKey?: string;

  /**
   * @schema LightsailAccessKey#status
   */
  readonly status?: string;

  /**
   * @schema LightsailAccessKey#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailAccessKey#lastUsed
   */
  readonly lastUsed?: LightsailAccessKeyLastUsed;

}

/**
 * Converts an object of type 'LightsailAccessKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAccessKey(obj: LightsailAccessKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeyId': obj.accessKeyId,
    'secretAccessKey': obj.secretAccessKey,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'lastUsed': toJson_LightsailAccessKeyLastUsed(obj.lastUsed),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCertificateSummary
 */
export interface LightsailCertificateSummary {
  /**
   * @schema LightsailCertificateSummary#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema LightsailCertificateSummary#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema LightsailCertificateSummary#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailCertificateSummary#certificateDetail
   */
  readonly certificateDetail?: LightsailCertificate;

  /**
   * @schema LightsailCertificateSummary#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailCertificateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCertificateSummary(obj: LightsailCertificateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateName': obj.certificateName,
    'domainName': obj.domainName,
    'certificateDetail': toJson_LightsailCertificate(obj.certificateDetail),
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstanceEntry
 */
export interface LightsailInstanceEntry {
  /**
   * @schema LightsailInstanceEntry#sourceName
   */
  readonly sourceName: string;

  /**
   * @schema LightsailInstanceEntry#instanceType
   */
  readonly instanceType: string;

  /**
   * @schema LightsailInstanceEntry#portInfoSource
   */
  readonly portInfoSource: string;

  /**
   * @schema LightsailInstanceEntry#userData
   */
  readonly userData?: string;

  /**
   * @schema LightsailInstanceEntry#availabilityZone
   */
  readonly availabilityZone: string;

}

/**
 * Converts an object of type 'LightsailInstanceEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstanceEntry(obj: LightsailInstanceEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceName': obj.sourceName,
    'instanceType': obj.instanceType,
    'portInfoSource': obj.portInfoSource,
    'userData': obj.userData,
    'availabilityZone': obj.availabilityZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerServiceDeploymentRequest
 */
export interface LightsailContainerServiceDeploymentRequest {
  /**
   * @schema LightsailContainerServiceDeploymentRequest#containers
   */
  readonly containers?: { [key: string]: LightsailContainer };

  /**
   * @schema LightsailContainerServiceDeploymentRequest#publicEndpoint
   */
  readonly publicEndpoint?: LightsailEndpointRequest;

}

/**
 * Converts an object of type 'LightsailContainerServiceDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerServiceDeploymentRequest(obj: LightsailContainerServiceDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containers': ((obj.containers) === undefined) ? undefined : (Object.entries(obj.containers).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_LightsailContainer(i[1]) }), {})),
    'publicEndpoint': toJson_LightsailEndpointRequest(obj.publicEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerService
 */
export interface LightsailContainerService {
  /**
   * @schema LightsailContainerService#containerServiceName
   */
  readonly containerServiceName?: string;

  /**
   * @schema LightsailContainerService#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailContainerService#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailContainerService#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailContainerService#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailContainerService#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailContainerService#power
   */
  readonly power?: string;

  /**
   * @schema LightsailContainerService#powerId
   */
  readonly powerId?: string;

  /**
   * @schema LightsailContainerService#state
   */
  readonly state?: string;

  /**
   * @schema LightsailContainerService#stateDetail
   */
  readonly stateDetail?: LightsailContainerServiceStateDetail;

  /**
   * @schema LightsailContainerService#scale
   */
  readonly scale?: number;

  /**
   * @schema LightsailContainerService#currentDeployment
   */
  readonly currentDeployment?: LightsailContainerServiceDeployment;

  /**
   * @schema LightsailContainerService#nextDeployment
   */
  readonly nextDeployment?: LightsailContainerServiceDeployment;

  /**
   * @schema LightsailContainerService#isDisabled
   */
  readonly isDisabled?: boolean;

  /**
   * @schema LightsailContainerService#principalArn
   */
  readonly principalArn?: string;

  /**
   * @schema LightsailContainerService#privateDomainName
   */
  readonly privateDomainName?: string;

  /**
   * @schema LightsailContainerService#publicDomainNames
   */
  readonly publicDomainNames?: { [key: string]: string[] };

  /**
   * @schema LightsailContainerService#url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'LightsailContainerService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerService(obj: LightsailContainerService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerServiceName': obj.containerServiceName,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'power': obj.power,
    'powerId': obj.powerId,
    'state': obj.state,
    'stateDetail': toJson_LightsailContainerServiceStateDetail(obj.stateDetail),
    'scale': obj.scale,
    'currentDeployment': toJson_LightsailContainerServiceDeployment(obj.currentDeployment),
    'nextDeployment': toJson_LightsailContainerServiceDeployment(obj.nextDeployment),
    'isDisabled': obj.isDisabled,
    'principalArn': obj.principalArn,
    'privateDomainName': obj.privateDomainName,
    'publicDomainNames': ((obj.publicDomainNames) === undefined) ? undefined : (Object.entries(obj.publicDomainNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainer
 */
export interface LightsailContainer {
  /**
   * @schema LightsailContainer#image
   */
  readonly image?: string;

  /**
   * @schema LightsailContainer#command
   */
  readonly command?: string[];

  /**
   * @schema LightsailContainer#environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema LightsailContainer#ports
   */
  readonly ports?: { [key: string]: string };

}

/**
 * Converts an object of type 'LightsailContainer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainer(obj: LightsailContainer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': obj.image,
    'command': obj.command?.map(y => y),
    'environment': ((obj.environment) === undefined) ? undefined : (Object.entries(obj.environment).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ports': ((obj.ports) === undefined) ? undefined : (Object.entries(obj.ports).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailEndpointRequest
 */
export interface LightsailEndpointRequest {
  /**
   * @schema LightsailEndpointRequest#containerName
   */
  readonly containerName: string;

  /**
   * @schema LightsailEndpointRequest#containerPort
   */
  readonly containerPort: number;

  /**
   * @schema LightsailEndpointRequest#healthCheck
   */
  readonly healthCheck?: LightsailContainerServiceHealthCheckConfig;

}

/**
 * Converts an object of type 'LightsailEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailEndpointRequest(obj: LightsailEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerName': obj.containerName,
    'containerPort': obj.containerPort,
    'healthCheck': toJson_LightsailContainerServiceHealthCheckConfig(obj.healthCheck),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerServiceRegistryLogin
 */
export interface LightsailContainerServiceRegistryLogin {
  /**
   * @schema LightsailContainerServiceRegistryLogin#username
   */
  readonly username?: string;

  /**
   * @schema LightsailContainerServiceRegistryLogin#password
   */
  readonly password?: string;

  /**
   * @schema LightsailContainerServiceRegistryLogin#expiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema LightsailContainerServiceRegistryLogin#registry
   */
  readonly registry?: string;

}

/**
 * Converts an object of type 'LightsailContainerServiceRegistryLogin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerServiceRegistryLogin(obj: LightsailContainerServiceRegistryLogin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'username': obj.username,
    'password': obj.password,
    'expiresAt': obj.expiresAt,
    'registry': obj.registry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAddOnRequest
 */
export interface LightsailAddOnRequest {
  /**
   * @schema LightsailAddOnRequest#addOnType
   */
  readonly addOnType: string;

  /**
   * @schema LightsailAddOnRequest#autoSnapshotAddOnRequest
   */
  readonly autoSnapshotAddOnRequest?: LightsailAutoSnapshotAddOnRequest;

}

/**
 * Converts an object of type 'LightsailAddOnRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAddOnRequest(obj: LightsailAddOnRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addOnType': obj.addOnType,
    'autoSnapshotAddOnRequest': toJson_LightsailAutoSnapshotAddOnRequest(obj.autoSnapshotAddOnRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInputOrigin
 */
export interface LightsailInputOrigin {
  /**
   * @schema LightsailInputOrigin#name
   */
  readonly name?: string;

  /**
   * @schema LightsailInputOrigin#regionName
   */
  readonly regionName?: string;

  /**
   * @schema LightsailInputOrigin#protocolPolicy
   */
  readonly protocolPolicy?: string;

}

/**
 * Converts an object of type 'LightsailInputOrigin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInputOrigin(obj: LightsailInputOrigin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'regionName': obj.regionName,
    'protocolPolicy': obj.protocolPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCacheBehavior
 */
export interface LightsailCacheBehavior {
  /**
   * @schema LightsailCacheBehavior#behavior
   */
  readonly behavior?: string;

}

/**
 * Converts an object of type 'LightsailCacheBehavior' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCacheBehavior(obj: LightsailCacheBehavior | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'behavior': obj.behavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCacheSettings
 */
export interface LightsailCacheSettings {
  /**
   * @schema LightsailCacheSettings#defaultTTL
   */
  readonly defaultTtl?: number;

  /**
   * @schema LightsailCacheSettings#minimumTTL
   */
  readonly minimumTtl?: number;

  /**
   * @schema LightsailCacheSettings#maximumTTL
   */
  readonly maximumTtl?: number;

  /**
   * @schema LightsailCacheSettings#allowedHTTPMethods
   */
  readonly allowedHttpMethods?: string;

  /**
   * @schema LightsailCacheSettings#cachedHTTPMethods
   */
  readonly cachedHttpMethods?: string;

  /**
   * @schema LightsailCacheSettings#forwardedCookies
   */
  readonly forwardedCookies?: LightsailCookieObject;

  /**
   * @schema LightsailCacheSettings#forwardedHeaders
   */
  readonly forwardedHeaders?: LightsailHeaderObject;

  /**
   * @schema LightsailCacheSettings#forwardedQueryStrings
   */
  readonly forwardedQueryStrings?: LightsailQueryStringObject;

}

/**
 * Converts an object of type 'LightsailCacheSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCacheSettings(obj: LightsailCacheSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultTTL': obj.defaultTtl,
    'minimumTTL': obj.minimumTtl,
    'maximumTTL': obj.maximumTtl,
    'allowedHTTPMethods': obj.allowedHttpMethods,
    'cachedHTTPMethods': obj.cachedHttpMethods,
    'forwardedCookies': toJson_LightsailCookieObject(obj.forwardedCookies),
    'forwardedHeaders': toJson_LightsailHeaderObject(obj.forwardedHeaders),
    'forwardedQueryStrings': toJson_LightsailQueryStringObject(obj.forwardedQueryStrings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCacheBehaviorPerPath
 */
export interface LightsailCacheBehaviorPerPath {
  /**
   * @schema LightsailCacheBehaviorPerPath#path
   */
  readonly path?: string;

  /**
   * @schema LightsailCacheBehaviorPerPath#behavior
   */
  readonly behavior?: string;

}

/**
 * Converts an object of type 'LightsailCacheBehaviorPerPath' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCacheBehaviorPerPath(obj: LightsailCacheBehaviorPerPath | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
    'behavior': obj.behavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailLightsailDistribution
 */
export interface LightsailLightsailDistribution {
  /**
   * @schema LightsailLightsailDistribution#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLightsailDistribution#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailLightsailDistribution#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailLightsailDistribution#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailLightsailDistribution#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailLightsailDistribution#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailLightsailDistribution#alternativeDomainNames
   */
  readonly alternativeDomainNames?: string[];

  /**
   * @schema LightsailLightsailDistribution#status
   */
  readonly status?: string;

  /**
   * @schema LightsailLightsailDistribution#isEnabled
   */
  readonly isEnabled?: boolean;

  /**
   * @schema LightsailLightsailDistribution#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailLightsailDistribution#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailLightsailDistribution#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema LightsailLightsailDistribution#origin
   */
  readonly origin?: LightsailOrigin;

  /**
   * @schema LightsailLightsailDistribution#originPublicDNS
   */
  readonly originPublicDns?: string;

  /**
   * @schema LightsailLightsailDistribution#defaultCacheBehavior
   */
  readonly defaultCacheBehavior?: LightsailCacheBehavior;

  /**
   * @schema LightsailLightsailDistribution#cacheBehaviorSettings
   */
  readonly cacheBehaviorSettings?: LightsailCacheSettings;

  /**
   * @schema LightsailLightsailDistribution#cacheBehaviors
   */
  readonly cacheBehaviors?: LightsailCacheBehaviorPerPath[];

  /**
   * @schema LightsailLightsailDistribution#ableToUpdateBundle
   */
  readonly ableToUpdateBundle?: boolean;

  /**
   * @schema LightsailLightsailDistribution#ipAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema LightsailLightsailDistribution#tags
   */
  readonly tags?: LightsailTag[];

}

/**
 * Converts an object of type 'LightsailLightsailDistribution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailLightsailDistribution(obj: LightsailLightsailDistribution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'alternativeDomainNames': obj.alternativeDomainNames?.map(y => y),
    'status': obj.status,
    'isEnabled': obj.isEnabled,
    'domainName': obj.domainName,
    'bundleId': obj.bundleId,
    'certificateName': obj.certificateName,
    'origin': toJson_LightsailOrigin(obj.origin),
    'originPublicDNS': obj.originPublicDns,
    'defaultCacheBehavior': toJson_LightsailCacheBehavior(obj.defaultCacheBehavior),
    'cacheBehaviorSettings': toJson_LightsailCacheSettings(obj.cacheBehaviorSettings),
    'cacheBehaviors': obj.cacheBehaviors?.map(y => toJson_LightsailCacheBehaviorPerPath(y)),
    'ableToUpdateBundle': obj.ableToUpdateBundle,
    'ipAddressType': obj.ipAddressType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDomainEntry
 */
export interface LightsailDomainEntry {
  /**
   * @schema LightsailDomainEntry#id
   */
  readonly id?: string;

  /**
   * @schema LightsailDomainEntry#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDomainEntry#target
   */
  readonly target?: string;

  /**
   * @schema LightsailDomainEntry#isAlias
   */
  readonly isAlias?: boolean;

  /**
   * @schema LightsailDomainEntry#type
   */
  readonly type?: string;

  /**
   * @schema LightsailDomainEntry#options
   */
  readonly options?: { [key: string]: string };

}

/**
 * Converts an object of type 'LightsailDomainEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDomainEntry(obj: LightsailDomainEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'target': obj.target,
    'isAlias': obj.isAlias,
    'type': obj.type,
    'options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDiskMap
 */
export interface LightsailDiskMap {
  /**
   * @schema LightsailDiskMap#originalDiskPath
   */
  readonly originalDiskPath?: string;

  /**
   * @schema LightsailDiskMap#newDiskName
   */
  readonly newDiskName?: string;

}

/**
 * Converts an object of type 'LightsailDiskMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDiskMap(obj: LightsailDiskMap | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'originalDiskPath': obj.originalDiskPath,
    'newDiskName': obj.newDiskName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailKeyPair
 */
export interface LightsailKeyPair {
  /**
   * @schema LightsailKeyPair#name
   */
  readonly name?: string;

  /**
   * @schema LightsailKeyPair#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailKeyPair#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailKeyPair#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailKeyPair#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailKeyPair#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailKeyPair#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailKeyPair#fingerprint
   */
  readonly fingerprint?: string;

}

/**
 * Converts an object of type 'LightsailKeyPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailKeyPair(obj: LightsailKeyPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'fingerprint': obj.fingerprint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAlarm
 */
export interface LightsailAlarm {
  /**
   * @schema LightsailAlarm#name
   */
  readonly name?: string;

  /**
   * @schema LightsailAlarm#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailAlarm#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailAlarm#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailAlarm#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailAlarm#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailAlarm#monitoredResourceInfo
   */
  readonly monitoredResourceInfo?: LightsailMonitoredResourceInfo;

  /**
   * @schema LightsailAlarm#comparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema LightsailAlarm#evaluationPeriods
   */
  readonly evaluationPeriods?: number;

  /**
   * @schema LightsailAlarm#period
   */
  readonly period?: number;

  /**
   * @schema LightsailAlarm#threshold
   */
  readonly threshold?: number;

  /**
   * @schema LightsailAlarm#datapointsToAlarm
   */
  readonly datapointsToAlarm?: number;

  /**
   * @schema LightsailAlarm#treatMissingData
   */
  readonly treatMissingData?: string;

  /**
   * @schema LightsailAlarm#statistic
   */
  readonly statistic?: string;

  /**
   * @schema LightsailAlarm#metricName
   */
  readonly metricName?: string;

  /**
   * @schema LightsailAlarm#state
   */
  readonly state?: string;

  /**
   * @schema LightsailAlarm#unit
   */
  readonly unit?: string;

  /**
   * @schema LightsailAlarm#contactProtocols
   */
  readonly contactProtocols?: string[];

  /**
   * @schema LightsailAlarm#notificationTriggers
   */
  readonly notificationTriggers?: string[];

  /**
   * @schema LightsailAlarm#notificationEnabled
   */
  readonly notificationEnabled?: boolean;

}

/**
 * Converts an object of type 'LightsailAlarm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAlarm(obj: LightsailAlarm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'supportCode': obj.supportCode,
    'monitoredResourceInfo': toJson_LightsailMonitoredResourceInfo(obj.monitoredResourceInfo),
    'comparisonOperator': obj.comparisonOperator,
    'evaluationPeriods': obj.evaluationPeriods,
    'period': obj.period,
    'threshold': obj.threshold,
    'datapointsToAlarm': obj.datapointsToAlarm,
    'treatMissingData': obj.treatMissingData,
    'statistic': obj.statistic,
    'metricName': obj.metricName,
    'state': obj.state,
    'unit': obj.unit,
    'contactProtocols': obj.contactProtocols?.map(y => y),
    'notificationTriggers': obj.notificationTriggers?.map(y => y),
    'notificationEnabled': obj.notificationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAutoSnapshotDetails
 */
export interface LightsailAutoSnapshotDetails {
  /**
   * @schema LightsailAutoSnapshotDetails#date
   */
  readonly date?: string;

  /**
   * @schema LightsailAutoSnapshotDetails#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailAutoSnapshotDetails#status
   */
  readonly status?: string;

  /**
   * @schema LightsailAutoSnapshotDetails#fromAttachedDisks
   */
  readonly fromAttachedDisks?: LightsailAttachedDisk[];

}

/**
 * Converts an object of type 'LightsailAutoSnapshotDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAutoSnapshotDetails(obj: LightsailAutoSnapshotDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'date': obj.date,
    'createdAt': obj.createdAt,
    'status': obj.status,
    'fromAttachedDisks': obj.fromAttachedDisks?.map(y => toJson_LightsailAttachedDisk(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailBlueprint
 */
export interface LightsailBlueprint {
  /**
   * @schema LightsailBlueprint#blueprintId
   */
  readonly blueprintId?: string;

  /**
   * @schema LightsailBlueprint#name
   */
  readonly name?: string;

  /**
   * @schema LightsailBlueprint#group
   */
  readonly group?: string;

  /**
   * @schema LightsailBlueprint#type
   */
  readonly type?: string;

  /**
   * @schema LightsailBlueprint#description
   */
  readonly description?: string;

  /**
   * @schema LightsailBlueprint#isActive
   */
  readonly isActive?: boolean;

  /**
   * @schema LightsailBlueprint#minPower
   */
  readonly minPower?: number;

  /**
   * @schema LightsailBlueprint#version
   */
  readonly version?: string;

  /**
   * @schema LightsailBlueprint#versionCode
   */
  readonly versionCode?: string;

  /**
   * @schema LightsailBlueprint#productUrl
   */
  readonly productUrl?: string;

  /**
   * @schema LightsailBlueprint#licenseUrl
   */
  readonly licenseUrl?: string;

  /**
   * @schema LightsailBlueprint#platform
   */
  readonly platform?: string;

}

/**
 * Converts an object of type 'LightsailBlueprint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailBlueprint(obj: LightsailBlueprint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blueprintId': obj.blueprintId,
    'name': obj.name,
    'group': obj.group,
    'type': obj.type,
    'description': obj.description,
    'isActive': obj.isActive,
    'minPower': obj.minPower,
    'version': obj.version,
    'versionCode': obj.versionCode,
    'productUrl': obj.productUrl,
    'licenseUrl': obj.licenseUrl,
    'platform': obj.platform,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailBucketBundle
 */
export interface LightsailBucketBundle {
  /**
   * @schema LightsailBucketBundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailBucketBundle#name
   */
  readonly name?: string;

  /**
   * @schema LightsailBucketBundle#price
   */
  readonly price?: number;

  /**
   * @schema LightsailBucketBundle#storagePerMonthInGb
   */
  readonly storagePerMonthInGb?: number;

  /**
   * @schema LightsailBucketBundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema LightsailBucketBundle#isActive
   */
  readonly isActive?: boolean;

}

/**
 * Converts an object of type 'LightsailBucketBundle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailBucketBundle(obj: LightsailBucketBundle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundleId': obj.bundleId,
    'name': obj.name,
    'price': obj.price,
    'storagePerMonthInGb': obj.storagePerMonthInGb,
    'transferPerMonthInGb': obj.transferPerMonthInGb,
    'isActive': obj.isActive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailMetricDatapoint
 */
export interface LightsailMetricDatapoint {
  /**
   * @schema LightsailMetricDatapoint#average
   */
  readonly average?: number;

  /**
   * @schema LightsailMetricDatapoint#maximum
   */
  readonly maximum?: number;

  /**
   * @schema LightsailMetricDatapoint#minimum
   */
  readonly minimum?: number;

  /**
   * @schema LightsailMetricDatapoint#sampleCount
   */
  readonly sampleCount?: number;

  /**
   * @schema LightsailMetricDatapoint#sum
   */
  readonly sum?: number;

  /**
   * @schema LightsailMetricDatapoint#timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema LightsailMetricDatapoint#unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'LightsailMetricDatapoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailMetricDatapoint(obj: LightsailMetricDatapoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'average': obj.average,
    'maximum': obj.maximum,
    'minimum': obj.minimum,
    'sampleCount': obj.sampleCount,
    'sum': obj.sum,
    'timestamp': obj.timestamp,
    'unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailBundle
 */
export interface LightsailBundle {
  /**
   * @schema LightsailBundle#price
   */
  readonly price?: number;

  /**
   * @schema LightsailBundle#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailBundle#diskSizeInGb
   */
  readonly diskSizeInGb?: number;

  /**
   * @schema LightsailBundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailBundle#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema LightsailBundle#isActive
   */
  readonly isActive?: boolean;

  /**
   * @schema LightsailBundle#name
   */
  readonly name?: string;

  /**
   * @schema LightsailBundle#power
   */
  readonly power?: number;

  /**
   * @schema LightsailBundle#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

  /**
   * @schema LightsailBundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema LightsailBundle#supportedPlatforms
   */
  readonly supportedPlatforms?: string[];

}

/**
 * Converts an object of type 'LightsailBundle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailBundle(obj: LightsailBundle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'price': obj.price,
    'cpuCount': obj.cpuCount,
    'diskSizeInGb': obj.diskSizeInGb,
    'bundleId': obj.bundleId,
    'instanceType': obj.instanceType,
    'isActive': obj.isActive,
    'name': obj.name,
    'power': obj.power,
    'ramSizeInGb': obj.ramSizeInGb,
    'transferPerMonthInGb': obj.transferPerMonthInGb,
    'supportedPlatforms': obj.supportedPlatforms?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCloudFormationStackRecord
 */
export interface LightsailCloudFormationStackRecord {
  /**
   * @schema LightsailCloudFormationStackRecord#name
   */
  readonly name?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailCloudFormationStackRecord#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#state
   */
  readonly state?: string;

  /**
   * @schema LightsailCloudFormationStackRecord#sourceInfo
   */
  readonly sourceInfo?: LightsailCloudFormationStackRecordSourceInfo[];

  /**
   * @schema LightsailCloudFormationStackRecord#destinationInfo
   */
  readonly destinationInfo?: LightsailDestinationInfo;

}

/**
 * Converts an object of type 'LightsailCloudFormationStackRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCloudFormationStackRecord(obj: LightsailCloudFormationStackRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'state': obj.state,
    'sourceInfo': obj.sourceInfo?.map(y => toJson_LightsailCloudFormationStackRecordSourceInfo(y)),
    'destinationInfo': toJson_LightsailDestinationInfo(obj.destinationInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContactMethod
 */
export interface LightsailContactMethod {
  /**
   * @schema LightsailContactMethod#contactEndpoint
   */
  readonly contactEndpoint?: string;

  /**
   * @schema LightsailContactMethod#status
   */
  readonly status?: string;

  /**
   * @schema LightsailContactMethod#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailContactMethod#name
   */
  readonly name?: string;

  /**
   * @schema LightsailContactMethod#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailContactMethod#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailContactMethod#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailContactMethod#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailContactMethod#supportCode
   */
  readonly supportCode?: string;

}

/**
 * Converts an object of type 'LightsailContactMethod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContactMethod(obj: LightsailContactMethod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contactEndpoint': obj.contactEndpoint,
    'status': obj.status,
    'protocol': obj.protocol,
    'name': obj.name,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'supportCode': obj.supportCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerImage
 */
export interface LightsailContainerImage {
  /**
   * @schema LightsailContainerImage#image
   */
  readonly image?: string;

  /**
   * @schema LightsailContainerImage#digest
   */
  readonly digest?: string;

  /**
   * @schema LightsailContainerImage#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'LightsailContainerImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerImage(obj: LightsailContainerImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': obj.image,
    'digest': obj.digest,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerServiceLogEvent
 */
export interface LightsailContainerServiceLogEvent {
  /**
   * @schema LightsailContainerServiceLogEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailContainerServiceLogEvent#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'LightsailContainerServiceLogEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerServiceLogEvent(obj: LightsailContainerServiceLogEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdAt': obj.createdAt,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerServiceDeployment
 */
export interface LightsailContainerServiceDeployment {
  /**
   * @schema LightsailContainerServiceDeployment#version
   */
  readonly version?: number;

  /**
   * @schema LightsailContainerServiceDeployment#state
   */
  readonly state?: string;

  /**
   * @schema LightsailContainerServiceDeployment#containers
   */
  readonly containers?: { [key: string]: LightsailContainer };

  /**
   * @schema LightsailContainerServiceDeployment#publicEndpoint
   */
  readonly publicEndpoint?: LightsailContainerServiceEndpoint;

  /**
   * @schema LightsailContainerServiceDeployment#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'LightsailContainerServiceDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerServiceDeployment(obj: LightsailContainerServiceDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'version': obj.version,
    'state': obj.state,
    'containers': ((obj.containers) === undefined) ? undefined : (Object.entries(obj.containers).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_LightsailContainer(i[1]) }), {})),
    'publicEndpoint': toJson_LightsailContainerServiceEndpoint(obj.publicEndpoint),
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerServicePower
 */
export interface LightsailContainerServicePower {
  /**
   * @schema LightsailContainerServicePower#powerId
   */
  readonly powerId?: string;

  /**
   * @schema LightsailContainerServicePower#price
   */
  readonly price?: number;

  /**
   * @schema LightsailContainerServicePower#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailContainerServicePower#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

  /**
   * @schema LightsailContainerServicePower#name
   */
  readonly name?: string;

  /**
   * @schema LightsailContainerServicePower#isActive
   */
  readonly isActive?: boolean;

}

/**
 * Converts an object of type 'LightsailContainerServicePower' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerServicePower(obj: LightsailContainerServicePower | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'powerId': obj.powerId,
    'price': obj.price,
    'cpuCount': obj.cpuCount,
    'ramSizeInGb': obj.ramSizeInGb,
    'name': obj.name,
    'isActive': obj.isActive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDisk
 */
export interface LightsailDisk {
  /**
   * @schema LightsailDisk#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDisk#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailDisk#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailDisk#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailDisk#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailDisk#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailDisk#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailDisk#addOns
   */
  readonly addOns?: LightsailAddOn[];

  /**
   * @schema LightsailDisk#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema LightsailDisk#isSystemDisk
   */
  readonly isSystemDisk?: boolean;

  /**
   * @schema LightsailDisk#iops
   */
  readonly iops?: number;

  /**
   * @schema LightsailDisk#path
   */
  readonly path?: string;

  /**
   * @schema LightsailDisk#state
   */
  readonly state?: string;

  /**
   * @schema LightsailDisk#attachedTo
   */
  readonly attachedTo?: string;

  /**
   * @schema LightsailDisk#isAttached
   */
  readonly isAttached?: boolean;

  /**
   * @schema LightsailDisk#attachmentState
   */
  readonly attachmentState?: string;

  /**
   * @schema LightsailDisk#gbInUse
   */
  readonly gbInUse?: number;

}

/**
 * Converts an object of type 'LightsailDisk' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDisk(obj: LightsailDisk | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'addOns': obj.addOns?.map(y => toJson_LightsailAddOn(y)),
    'sizeInGb': obj.sizeInGb,
    'isSystemDisk': obj.isSystemDisk,
    'iops': obj.iops,
    'path': obj.path,
    'state': obj.state,
    'attachedTo': obj.attachedTo,
    'isAttached': obj.isAttached,
    'attachmentState': obj.attachmentState,
    'gbInUse': obj.gbInUse,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDiskSnapshot
 */
export interface LightsailDiskSnapshot {
  /**
   * @schema LightsailDiskSnapshot#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDiskSnapshot#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailDiskSnapshot#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailDiskSnapshot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailDiskSnapshot#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailDiskSnapshot#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailDiskSnapshot#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailDiskSnapshot#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema LightsailDiskSnapshot#state
   */
  readonly state?: string;

  /**
   * @schema LightsailDiskSnapshot#progress
   */
  readonly progress?: string;

  /**
   * @schema LightsailDiskSnapshot#fromDiskName
   */
  readonly fromDiskName?: string;

  /**
   * @schema LightsailDiskSnapshot#fromDiskArn
   */
  readonly fromDiskArn?: string;

  /**
   * @schema LightsailDiskSnapshot#fromInstanceName
   */
  readonly fromInstanceName?: string;

  /**
   * @schema LightsailDiskSnapshot#fromInstanceArn
   */
  readonly fromInstanceArn?: string;

  /**
   * @schema LightsailDiskSnapshot#isFromAutoSnapshot
   */
  readonly isFromAutoSnapshot?: boolean;

}

/**
 * Converts an object of type 'LightsailDiskSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDiskSnapshot(obj: LightsailDiskSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'sizeInGb': obj.sizeInGb,
    'state': obj.state,
    'progress': obj.progress,
    'fromDiskName': obj.fromDiskName,
    'fromDiskArn': obj.fromDiskArn,
    'fromInstanceName': obj.fromInstanceName,
    'fromInstanceArn': obj.fromInstanceArn,
    'isFromAutoSnapshot': obj.isFromAutoSnapshot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDistributionBundle
 */
export interface LightsailDistributionBundle {
  /**
   * @schema LightsailDistributionBundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailDistributionBundle#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDistributionBundle#price
   */
  readonly price?: number;

  /**
   * @schema LightsailDistributionBundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema LightsailDistributionBundle#isActive
   */
  readonly isActive?: boolean;

}

/**
 * Converts an object of type 'LightsailDistributionBundle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDistributionBundle(obj: LightsailDistributionBundle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundleId': obj.bundleId,
    'name': obj.name,
    'price': obj.price,
    'transferPerMonthInGb': obj.transferPerMonthInGb,
    'isActive': obj.isActive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDomain
 */
export interface LightsailDomain {
  /**
   * @schema LightsailDomain#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDomain#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailDomain#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailDomain#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailDomain#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailDomain#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailDomain#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailDomain#domainEntries
   */
  readonly domainEntries?: LightsailDomainEntry[];

}

/**
 * Converts an object of type 'LightsailDomain' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDomain(obj: LightsailDomain | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'domainEntries': obj.domainEntries?.map(y => toJson_LightsailDomainEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailExportSnapshotRecord
 */
export interface LightsailExportSnapshotRecord {
  /**
   * @schema LightsailExportSnapshotRecord#name
   */
  readonly name?: string;

  /**
   * @schema LightsailExportSnapshotRecord#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailExportSnapshotRecord#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailExportSnapshotRecord#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailExportSnapshotRecord#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailExportSnapshotRecord#state
   */
  readonly state?: string;

  /**
   * @schema LightsailExportSnapshotRecord#sourceInfo
   */
  readonly sourceInfo?: LightsailExportSnapshotRecordSourceInfo;

  /**
   * @schema LightsailExportSnapshotRecord#destinationInfo
   */
  readonly destinationInfo?: LightsailDestinationInfo;

}

/**
 * Converts an object of type 'LightsailExportSnapshotRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailExportSnapshotRecord(obj: LightsailExportSnapshotRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'state': obj.state,
    'sourceInfo': toJson_LightsailExportSnapshotRecordSourceInfo(obj.sourceInfo),
    'destinationInfo': toJson_LightsailDestinationInfo(obj.destinationInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstance
 */
export interface LightsailInstance {
  /**
   * @schema LightsailInstance#name
   */
  readonly name?: string;

  /**
   * @schema LightsailInstance#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailInstance#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailInstance#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailInstance#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailInstance#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailInstance#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailInstance#blueprintId
   */
  readonly blueprintId?: string;

  /**
   * @schema LightsailInstance#blueprintName
   */
  readonly blueprintName?: string;

  /**
   * @schema LightsailInstance#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailInstance#addOns
   */
  readonly addOns?: LightsailAddOn[];

  /**
   * @schema LightsailInstance#isStaticIp
   */
  readonly isStaticIp?: boolean;

  /**
   * @schema LightsailInstance#privateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema LightsailInstance#publicIpAddress
   */
  readonly publicIpAddress?: string;

  /**
   * @schema LightsailInstance#ipv6Addresses
   */
  readonly ipv6Addresses?: string[];

  /**
   * @schema LightsailInstance#ipAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema LightsailInstance#hardware
   */
  readonly hardware?: LightsailInstanceHardware;

  /**
   * @schema LightsailInstance#networking
   */
  readonly networking?: LightsailInstanceNetworking;

  /**
   * @schema LightsailInstance#state
   */
  readonly state?: LightsailInstanceState;

  /**
   * @schema LightsailInstance#username
   */
  readonly username?: string;

  /**
   * @schema LightsailInstance#sshKeyName
   */
  readonly sshKeyName?: string;

}

/**
 * Converts an object of type 'LightsailInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstance(obj: LightsailInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'blueprintId': obj.blueprintId,
    'blueprintName': obj.blueprintName,
    'bundleId': obj.bundleId,
    'addOns': obj.addOns?.map(y => toJson_LightsailAddOn(y)),
    'isStaticIp': obj.isStaticIp,
    'privateIpAddress': obj.privateIpAddress,
    'publicIpAddress': obj.publicIpAddress,
    'ipv6Addresses': obj.ipv6Addresses?.map(y => y),
    'ipAddressType': obj.ipAddressType,
    'hardware': toJson_LightsailInstanceHardware(obj.hardware),
    'networking': toJson_LightsailInstanceNetworking(obj.networking),
    'state': toJson_LightsailInstanceState(obj.state),
    'username': obj.username,
    'sshKeyName': obj.sshKeyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstanceAccessDetails
 */
export interface LightsailInstanceAccessDetails {
  /**
   * @schema LightsailInstanceAccessDetails#certKey
   */
  readonly certKey?: string;

  /**
   * @schema LightsailInstanceAccessDetails#expiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema LightsailInstanceAccessDetails#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema LightsailInstanceAccessDetails#password
   */
  readonly password?: string;

  /**
   * @schema LightsailInstanceAccessDetails#passwordData
   */
  readonly passwordData?: LightsailPasswordData;

  /**
   * @schema LightsailInstanceAccessDetails#privateKey
   */
  readonly privateKey?: string;

  /**
   * @schema LightsailInstanceAccessDetails#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailInstanceAccessDetails#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema LightsailInstanceAccessDetails#username
   */
  readonly username?: string;

  /**
   * @schema LightsailInstanceAccessDetails#hostKeys
   */
  readonly hostKeys?: LightsailHostKeyAttributes[];

}

/**
 * Converts an object of type 'LightsailInstanceAccessDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstanceAccessDetails(obj: LightsailInstanceAccessDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certKey': obj.certKey,
    'expiresAt': obj.expiresAt,
    'ipAddress': obj.ipAddress,
    'password': obj.password,
    'passwordData': toJson_LightsailPasswordData(obj.passwordData),
    'privateKey': obj.privateKey,
    'protocol': obj.protocol,
    'instanceName': obj.instanceName,
    'username': obj.username,
    'hostKeys': obj.hostKeys?.map(y => toJson_LightsailHostKeyAttributes(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstancePortState
 */
export interface LightsailInstancePortState {
  /**
   * @schema LightsailInstancePortState#fromPort
   */
  readonly fromPort?: number;

  /**
   * @schema LightsailInstancePortState#toPort
   */
  readonly toPort?: number;

  /**
   * @schema LightsailInstancePortState#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailInstancePortState#state
   */
  readonly state?: string;

  /**
   * @schema LightsailInstancePortState#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema LightsailInstancePortState#ipv6Cidrs
   */
  readonly ipv6Cidrs?: string[];

  /**
   * @schema LightsailInstancePortState#cidrListAliases
   */
  readonly cidrListAliases?: string[];

}

/**
 * Converts an object of type 'LightsailInstancePortState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstancePortState(obj: LightsailInstancePortState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fromPort': obj.fromPort,
    'toPort': obj.toPort,
    'protocol': obj.protocol,
    'state': obj.state,
    'cidrs': obj.cidrs?.map(y => y),
    'ipv6Cidrs': obj.ipv6Cidrs?.map(y => y),
    'cidrListAliases': obj.cidrListAliases?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstanceSnapshot
 */
export interface LightsailInstanceSnapshot {
  /**
   * @schema LightsailInstanceSnapshot#name
   */
  readonly name?: string;

  /**
   * @schema LightsailInstanceSnapshot#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailInstanceSnapshot#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailInstanceSnapshot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailInstanceSnapshot#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailInstanceSnapshot#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailInstanceSnapshot#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailInstanceSnapshot#state
   */
  readonly state?: string;

  /**
   * @schema LightsailInstanceSnapshot#progress
   */
  readonly progress?: string;

  /**
   * @schema LightsailInstanceSnapshot#fromAttachedDisks
   */
  readonly fromAttachedDisks?: LightsailDisk[];

  /**
   * @schema LightsailInstanceSnapshot#fromInstanceName
   */
  readonly fromInstanceName?: string;

  /**
   * @schema LightsailInstanceSnapshot#fromInstanceArn
   */
  readonly fromInstanceArn?: string;

  /**
   * @schema LightsailInstanceSnapshot#fromBlueprintId
   */
  readonly fromBlueprintId?: string;

  /**
   * @schema LightsailInstanceSnapshot#fromBundleId
   */
  readonly fromBundleId?: string;

  /**
   * @schema LightsailInstanceSnapshot#isFromAutoSnapshot
   */
  readonly isFromAutoSnapshot?: boolean;

  /**
   * @schema LightsailInstanceSnapshot#sizeInGb
   */
  readonly sizeInGb?: number;

}

/**
 * Converts an object of type 'LightsailInstanceSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstanceSnapshot(obj: LightsailInstanceSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'state': obj.state,
    'progress': obj.progress,
    'fromAttachedDisks': obj.fromAttachedDisks?.map(y => toJson_LightsailDisk(y)),
    'fromInstanceName': obj.fromInstanceName,
    'fromInstanceArn': obj.fromInstanceArn,
    'fromBlueprintId': obj.fromBlueprintId,
    'fromBundleId': obj.fromBundleId,
    'isFromAutoSnapshot': obj.isFromAutoSnapshot,
    'sizeInGb': obj.sizeInGb,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstanceState
 */
export interface LightsailInstanceState {
  /**
   * @schema LightsailInstanceState#code
   */
  readonly code?: number;

  /**
   * @schema LightsailInstanceState#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'LightsailInstanceState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstanceState(obj: LightsailInstanceState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailLoadBalancer
 */
export interface LightsailLoadBalancer {
  /**
   * @schema LightsailLoadBalancer#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLoadBalancer#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailLoadBalancer#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailLoadBalancer#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailLoadBalancer#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailLoadBalancer#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailLoadBalancer#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailLoadBalancer#dnsName
   */
  readonly dnsName?: string;

  /**
   * @schema LightsailLoadBalancer#state
   */
  readonly state?: string;

  /**
   * @schema LightsailLoadBalancer#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailLoadBalancer#publicPorts
   */
  readonly publicPorts?: number[];

  /**
   * @schema LightsailLoadBalancer#healthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema LightsailLoadBalancer#instancePort
   */
  readonly instancePort?: number;

  /**
   * @schema LightsailLoadBalancer#instanceHealthSummary
   */
  readonly instanceHealthSummary?: LightsailInstanceHealthSummary[];

  /**
   * @schema LightsailLoadBalancer#tlsCertificateSummaries
   */
  readonly tlsCertificateSummaries?: LightsailLoadBalancerTlsCertificateSummary[];

  /**
   * @schema LightsailLoadBalancer#configurationOptions
   */
  readonly configurationOptions?: { [key: string]: string };

  /**
   * @schema LightsailLoadBalancer#ipAddressType
   */
  readonly ipAddressType?: string;

}

/**
 * Converts an object of type 'LightsailLoadBalancer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailLoadBalancer(obj: LightsailLoadBalancer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'dnsName': obj.dnsName,
    'state': obj.state,
    'protocol': obj.protocol,
    'publicPorts': obj.publicPorts?.map(y => y),
    'healthCheckPath': obj.healthCheckPath,
    'instancePort': obj.instancePort,
    'instanceHealthSummary': obj.instanceHealthSummary?.map(y => toJson_LightsailInstanceHealthSummary(y)),
    'tlsCertificateSummaries': obj.tlsCertificateSummaries?.map(y => toJson_LightsailLoadBalancerTlsCertificateSummary(y)),
    'configurationOptions': ((obj.configurationOptions) === undefined) ? undefined : (Object.entries(obj.configurationOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ipAddressType': obj.ipAddressType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailLoadBalancerTlsCertificate
 */
export interface LightsailLoadBalancerTlsCertificate {
  /**
   * @schema LightsailLoadBalancerTlsCertificate#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailLoadBalancerTlsCertificate#loadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#isAttached
   */
  readonly isAttached?: boolean;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#status
   */
  readonly status?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#domainValidationRecords
   */
  readonly domainValidationRecords?: LightsailLoadBalancerTlsCertificateDomainValidationRecord[];

  /**
   * @schema LightsailLoadBalancerTlsCertificate#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#issuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#issuer
   */
  readonly issuer?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#keyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#notAfter
   */
  readonly notAfter?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#notBefore
   */
  readonly notBefore?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#renewalSummary
   */
  readonly renewalSummary?: LightsailLoadBalancerTlsCertificateRenewalSummary;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#revocationReason
   */
  readonly revocationReason?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#serial
   */
  readonly serial?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#signatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#subject
   */
  readonly subject?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificate#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

}

/**
 * Converts an object of type 'LightsailLoadBalancerTlsCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailLoadBalancerTlsCertificate(obj: LightsailLoadBalancerTlsCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'loadBalancerName': obj.loadBalancerName,
    'isAttached': obj.isAttached,
    'status': obj.status,
    'domainName': obj.domainName,
    'domainValidationRecords': obj.domainValidationRecords?.map(y => toJson_LightsailLoadBalancerTlsCertificateDomainValidationRecord(y)),
    'failureReason': obj.failureReason,
    'issuedAt': obj.issuedAt,
    'issuer': obj.issuer,
    'keyAlgorithm': obj.keyAlgorithm,
    'notAfter': obj.notAfter,
    'notBefore': obj.notBefore,
    'renewalSummary': toJson_LightsailLoadBalancerTlsCertificateRenewalSummary(obj.renewalSummary),
    'revocationReason': obj.revocationReason,
    'revokedAt': obj.revokedAt,
    'serial': obj.serial,
    'signatureAlgorithm': obj.signatureAlgorithm,
    'subject': obj.subject,
    'subjectAlternativeNames': obj.subjectAlternativeNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRegion
 */
export interface LightsailRegion {
  /**
   * @schema LightsailRegion#continentCode
   */
  readonly continentCode?: string;

  /**
   * @schema LightsailRegion#description
   */
  readonly description?: string;

  /**
   * @schema LightsailRegion#displayName
   */
  readonly displayName?: string;

  /**
   * @schema LightsailRegion#name
   */
  readonly name?: string;

  /**
   * @schema LightsailRegion#availabilityZones
   */
  readonly availabilityZones?: LightsailAvailabilityZone[];

  /**
   * @schema LightsailRegion#relationalDatabaseAvailabilityZones
   */
  readonly relationalDatabaseAvailabilityZones?: LightsailAvailabilityZone[];

}

/**
 * Converts an object of type 'LightsailRegion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRegion(obj: LightsailRegion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'continentCode': obj.continentCode,
    'description': obj.description,
    'displayName': obj.displayName,
    'name': obj.name,
    'availabilityZones': obj.availabilityZones?.map(y => toJson_LightsailAvailabilityZone(y)),
    'relationalDatabaseAvailabilityZones': obj.relationalDatabaseAvailabilityZones?.map(y => toJson_LightsailAvailabilityZone(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRelationalDatabase
 */
export interface LightsailRelationalDatabase {
  /**
   * @schema LightsailRelationalDatabase#name
   */
  readonly name?: string;

  /**
   * @schema LightsailRelationalDatabase#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailRelationalDatabase#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailRelationalDatabase#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailRelationalDatabase#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailRelationalDatabase#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailRelationalDatabase#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailRelationalDatabase#relationalDatabaseBlueprintId
   */
  readonly relationalDatabaseBlueprintId?: string;

  /**
   * @schema LightsailRelationalDatabase#relationalDatabaseBundleId
   */
  readonly relationalDatabaseBundleId?: string;

  /**
   * @schema LightsailRelationalDatabase#masterDatabaseName
   */
  readonly masterDatabaseName?: string;

  /**
   * @schema LightsailRelationalDatabase#hardware
   */
  readonly hardware?: LightsailRelationalDatabaseHardware;

  /**
   * @schema LightsailRelationalDatabase#state
   */
  readonly state?: string;

  /**
   * @schema LightsailRelationalDatabase#secondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema LightsailRelationalDatabase#backupRetentionEnabled
   */
  readonly backupRetentionEnabled?: boolean;

  /**
   * @schema LightsailRelationalDatabase#pendingModifiedValues
   */
  readonly pendingModifiedValues?: LightsailPendingModifiedRelationalDatabaseValues;

  /**
   * @schema LightsailRelationalDatabase#engine
   */
  readonly engine?: string;

  /**
   * @schema LightsailRelationalDatabase#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema LightsailRelationalDatabase#latestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema LightsailRelationalDatabase#masterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema LightsailRelationalDatabase#parameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema LightsailRelationalDatabase#preferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema LightsailRelationalDatabase#preferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema LightsailRelationalDatabase#publiclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema LightsailRelationalDatabase#masterEndpoint
   */
  readonly masterEndpoint?: LightsailRelationalDatabaseEndpoint;

  /**
   * @schema LightsailRelationalDatabase#pendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: LightsailPendingMaintenanceAction[];

  /**
   * @schema LightsailRelationalDatabase#caCertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

}

/**
 * Converts an object of type 'LightsailRelationalDatabase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRelationalDatabase(obj: LightsailRelationalDatabase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'relationalDatabaseBlueprintId': obj.relationalDatabaseBlueprintId,
    'relationalDatabaseBundleId': obj.relationalDatabaseBundleId,
    'masterDatabaseName': obj.masterDatabaseName,
    'hardware': toJson_LightsailRelationalDatabaseHardware(obj.hardware),
    'state': obj.state,
    'secondaryAvailabilityZone': obj.secondaryAvailabilityZone,
    'backupRetentionEnabled': obj.backupRetentionEnabled,
    'pendingModifiedValues': toJson_LightsailPendingModifiedRelationalDatabaseValues(obj.pendingModifiedValues),
    'engine': obj.engine,
    'engineVersion': obj.engineVersion,
    'latestRestorableTime': obj.latestRestorableTime,
    'masterUsername': obj.masterUsername,
    'parameterApplyStatus': obj.parameterApplyStatus,
    'preferredBackupWindow': obj.preferredBackupWindow,
    'preferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'publiclyAccessible': obj.publiclyAccessible,
    'masterEndpoint': toJson_LightsailRelationalDatabaseEndpoint(obj.masterEndpoint),
    'pendingMaintenanceActions': obj.pendingMaintenanceActions?.map(y => toJson_LightsailPendingMaintenanceAction(y)),
    'caCertificateIdentifier': obj.caCertificateIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRelationalDatabaseBlueprint
 */
export interface LightsailRelationalDatabaseBlueprint {
  /**
   * @schema LightsailRelationalDatabaseBlueprint#blueprintId
   */
  readonly blueprintId?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#engine
   */
  readonly engine?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#engineDescription
   */
  readonly engineDescription?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#engineVersionDescription
   */
  readonly engineVersionDescription?: string;

  /**
   * @schema LightsailRelationalDatabaseBlueprint#isEngineDefault
   */
  readonly isEngineDefault?: boolean;

}

/**
 * Converts an object of type 'LightsailRelationalDatabaseBlueprint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRelationalDatabaseBlueprint(obj: LightsailRelationalDatabaseBlueprint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blueprintId': obj.blueprintId,
    'engine': obj.engine,
    'engineVersion': obj.engineVersion,
    'engineDescription': obj.engineDescription,
    'engineVersionDescription': obj.engineVersionDescription,
    'isEngineDefault': obj.isEngineDefault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRelationalDatabaseBundle
 */
export interface LightsailRelationalDatabaseBundle {
  /**
   * @schema LightsailRelationalDatabaseBundle#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema LightsailRelationalDatabaseBundle#name
   */
  readonly name?: string;

  /**
   * @schema LightsailRelationalDatabaseBundle#price
   */
  readonly price?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#diskSizeInGb
   */
  readonly diskSizeInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#transferPerMonthInGb
   */
  readonly transferPerMonthInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailRelationalDatabaseBundle#isEncrypted
   */
  readonly isEncrypted?: boolean;

  /**
   * @schema LightsailRelationalDatabaseBundle#isActive
   */
  readonly isActive?: boolean;

}

/**
 * Converts an object of type 'LightsailRelationalDatabaseBundle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRelationalDatabaseBundle(obj: LightsailRelationalDatabaseBundle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundleId': obj.bundleId,
    'name': obj.name,
    'price': obj.price,
    'ramSizeInGb': obj.ramSizeInGb,
    'diskSizeInGb': obj.diskSizeInGb,
    'transferPerMonthInGb': obj.transferPerMonthInGb,
    'cpuCount': obj.cpuCount,
    'isEncrypted': obj.isEncrypted,
    'isActive': obj.isActive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRelationalDatabaseEvent
 */
export interface LightsailRelationalDatabaseEvent {
  /**
   * @schema LightsailRelationalDatabaseEvent#resource
   */
  readonly resource?: string;

  /**
   * @schema LightsailRelationalDatabaseEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailRelationalDatabaseEvent#message
   */
  readonly message?: string;

  /**
   * @schema LightsailRelationalDatabaseEvent#eventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * Converts an object of type 'LightsailRelationalDatabaseEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRelationalDatabaseEvent(obj: LightsailRelationalDatabaseEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resource': obj.resource,
    'createdAt': obj.createdAt,
    'message': obj.message,
    'eventCategories': obj.eventCategories?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailLogEvent
 */
export interface LightsailLogEvent {
  /**
   * @schema LightsailLogEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailLogEvent#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'LightsailLogEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailLogEvent(obj: LightsailLogEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdAt': obj.createdAt,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRelationalDatabaseParameter
 */
export interface LightsailRelationalDatabaseParameter {
  /**
   * @schema LightsailRelationalDatabaseParameter#allowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#applyMethod
   */
  readonly applyMethod?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#applyType
   */
  readonly applyType?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#dataType
   */
  readonly dataType?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#description
   */
  readonly description?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#isModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema LightsailRelationalDatabaseParameter#parameterName
   */
  readonly parameterName?: string;

  /**
   * @schema LightsailRelationalDatabaseParameter#parameterValue
   */
  readonly parameterValue?: string;

}

/**
 * Converts an object of type 'LightsailRelationalDatabaseParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRelationalDatabaseParameter(obj: LightsailRelationalDatabaseParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowedValues': obj.allowedValues,
    'applyMethod': obj.applyMethod,
    'applyType': obj.applyType,
    'dataType': obj.dataType,
    'description': obj.description,
    'isModifiable': obj.isModifiable,
    'parameterName': obj.parameterName,
    'parameterValue': obj.parameterValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRelationalDatabaseSnapshot
 */
export interface LightsailRelationalDatabaseSnapshot {
  /**
   * @schema LightsailRelationalDatabaseSnapshot#name
   */
  readonly name?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailRelationalDatabaseSnapshot#engine
   */
  readonly engine?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#state
   */
  readonly state?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#fromRelationalDatabaseName
   */
  readonly fromRelationalDatabaseName?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#fromRelationalDatabaseArn
   */
  readonly fromRelationalDatabaseArn?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#fromRelationalDatabaseBundleId
   */
  readonly fromRelationalDatabaseBundleId?: string;

  /**
   * @schema LightsailRelationalDatabaseSnapshot#fromRelationalDatabaseBlueprintId
   */
  readonly fromRelationalDatabaseBlueprintId?: string;

}

/**
 * Converts an object of type 'LightsailRelationalDatabaseSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRelationalDatabaseSnapshot(obj: LightsailRelationalDatabaseSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'engine': obj.engine,
    'engineVersion': obj.engineVersion,
    'sizeInGb': obj.sizeInGb,
    'state': obj.state,
    'fromRelationalDatabaseName': obj.fromRelationalDatabaseName,
    'fromRelationalDatabaseArn': obj.fromRelationalDatabaseArn,
    'fromRelationalDatabaseBundleId': obj.fromRelationalDatabaseBundleId,
    'fromRelationalDatabaseBlueprintId': obj.fromRelationalDatabaseBlueprintId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailStaticIp
 */
export interface LightsailStaticIp {
  /**
   * @schema LightsailStaticIp#name
   */
  readonly name?: string;

  /**
   * @schema LightsailStaticIp#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailStaticIp#supportCode
   */
  readonly supportCode?: string;

  /**
   * @schema LightsailStaticIp#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailStaticIp#location
   */
  readonly location?: LightsailResourceLocation;

  /**
   * @schema LightsailStaticIp#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailStaticIp#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema LightsailStaticIp#attachedTo
   */
  readonly attachedTo?: string;

  /**
   * @schema LightsailStaticIp#isAttached
   */
  readonly isAttached?: boolean;

}

/**
 * Converts an object of type 'LightsailStaticIp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailStaticIp(obj: LightsailStaticIp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'supportCode': obj.supportCode,
    'createdAt': obj.createdAt,
    'location': toJson_LightsailResourceLocation(obj.location),
    'resourceType': obj.resourceType,
    'ipAddress': obj.ipAddress,
    'attachedTo': obj.attachedTo,
    'isAttached': obj.isAttached,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAccessRules
 */
export interface LightsailAccessRules {
  /**
   * @schema LightsailAccessRules#getObject
   */
  readonly getObject?: string;

  /**
   * @schema LightsailAccessRules#allowPublicOverrides
   */
  readonly allowPublicOverrides?: boolean;

}

/**
 * Converts an object of type 'LightsailAccessRules' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAccessRules(obj: LightsailAccessRules | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'getObject': obj.getObject,
    'allowPublicOverrides': obj.allowPublicOverrides,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailResourceLocation
 */
export interface LightsailResourceLocation {
  /**
   * @schema LightsailResourceLocation#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema LightsailResourceLocation#regionName
   */
  readonly regionName?: string;

}

/**
 * Converts an object of type 'LightsailResourceLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailResourceLocation(obj: LightsailResourceLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'availabilityZone': obj.availabilityZone,
    'regionName': obj.regionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailResourceReceivingAccess
 */
export interface LightsailResourceReceivingAccess {
  /**
   * @schema LightsailResourceReceivingAccess#name
   */
  readonly name?: string;

  /**
   * @schema LightsailResourceReceivingAccess#resourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'LightsailResourceReceivingAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailResourceReceivingAccess(obj: LightsailResourceReceivingAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'resourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailBucketState
 */
export interface LightsailBucketState {
  /**
   * @schema LightsailBucketState#code
   */
  readonly code?: string;

  /**
   * @schema LightsailBucketState#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'LightsailBucketState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailBucketState(obj: LightsailBucketState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAccessKeyLastUsed
 */
export interface LightsailAccessKeyLastUsed {
  /**
   * @schema LightsailAccessKeyLastUsed#lastUsedDate
   */
  readonly lastUsedDate?: string;

  /**
   * @schema LightsailAccessKeyLastUsed#region
   */
  readonly region?: string;

  /**
   * @schema LightsailAccessKeyLastUsed#serviceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'LightsailAccessKeyLastUsed' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAccessKeyLastUsed(obj: LightsailAccessKeyLastUsed | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lastUsedDate': obj.lastUsedDate,
    'region': obj.region,
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCertificate
 */
export interface LightsailCertificate {
  /**
   * @schema LightsailCertificate#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailCertificate#name
   */
  readonly name?: string;

  /**
   * @schema LightsailCertificate#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailCertificate#status
   */
  readonly status?: string;

  /**
   * @schema LightsailCertificate#serialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema LightsailCertificate#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema LightsailCertificate#domainValidationRecords
   */
  readonly domainValidationRecords?: LightsailDomainValidationRecord[];

  /**
   * @schema LightsailCertificate#requestFailureReason
   */
  readonly requestFailureReason?: string;

  /**
   * @schema LightsailCertificate#inUseResourceCount
   */
  readonly inUseResourceCount?: number;

  /**
   * @schema LightsailCertificate#keyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema LightsailCertificate#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailCertificate#issuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema LightsailCertificate#issuerCA
   */
  readonly issuerCa?: string;

  /**
   * @schema LightsailCertificate#notBefore
   */
  readonly notBefore?: string;

  /**
   * @schema LightsailCertificate#notAfter
   */
  readonly notAfter?: string;

  /**
   * @schema LightsailCertificate#eligibleToRenew
   */
  readonly eligibleToRenew?: string;

  /**
   * @schema LightsailCertificate#renewalSummary
   */
  readonly renewalSummary?: LightsailRenewalSummary;

  /**
   * @schema LightsailCertificate#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema LightsailCertificate#revocationReason
   */
  readonly revocationReason?: string;

  /**
   * @schema LightsailCertificate#tags
   */
  readonly tags?: LightsailTag[];

  /**
   * @schema LightsailCertificate#supportCode
   */
  readonly supportCode?: string;

}

/**
 * Converts an object of type 'LightsailCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCertificate(obj: LightsailCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'domainName': obj.domainName,
    'status': obj.status,
    'serialNumber': obj.serialNumber,
    'subjectAlternativeNames': obj.subjectAlternativeNames?.map(y => y),
    'domainValidationRecords': obj.domainValidationRecords?.map(y => toJson_LightsailDomainValidationRecord(y)),
    'requestFailureReason': obj.requestFailureReason,
    'inUseResourceCount': obj.inUseResourceCount,
    'keyAlgorithm': obj.keyAlgorithm,
    'createdAt': obj.createdAt,
    'issuedAt': obj.issuedAt,
    'issuerCA': obj.issuerCa,
    'notBefore': obj.notBefore,
    'notAfter': obj.notAfter,
    'eligibleToRenew': obj.eligibleToRenew,
    'renewalSummary': toJson_LightsailRenewalSummary(obj.renewalSummary),
    'revokedAt': obj.revokedAt,
    'revocationReason': obj.revocationReason,
    'tags': obj.tags?.map(y => toJson_LightsailTag(y)),
    'supportCode': obj.supportCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerServiceStateDetail
 */
export interface LightsailContainerServiceStateDetail {
  /**
   * @schema LightsailContainerServiceStateDetail#code
   */
  readonly code?: string;

  /**
   * @schema LightsailContainerServiceStateDetail#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'LightsailContainerServiceStateDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerServiceStateDetail(obj: LightsailContainerServiceStateDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerServiceHealthCheckConfig
 */
export interface LightsailContainerServiceHealthCheckConfig {
  /**
   * @schema LightsailContainerServiceHealthCheckConfig#healthyThreshold
   */
  readonly healthyThreshold?: number;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#unhealthyThreshold
   */
  readonly unhealthyThreshold?: number;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#timeoutSeconds
   */
  readonly timeoutSeconds?: number;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#intervalSeconds
   */
  readonly intervalSeconds?: number;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#path
   */
  readonly path?: string;

  /**
   * @schema LightsailContainerServiceHealthCheckConfig#successCodes
   */
  readonly successCodes?: string;

}

/**
 * Converts an object of type 'LightsailContainerServiceHealthCheckConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerServiceHealthCheckConfig(obj: LightsailContainerServiceHealthCheckConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'healthyThreshold': obj.healthyThreshold,
    'unhealthyThreshold': obj.unhealthyThreshold,
    'timeoutSeconds': obj.timeoutSeconds,
    'intervalSeconds': obj.intervalSeconds,
    'path': obj.path,
    'successCodes': obj.successCodes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAutoSnapshotAddOnRequest
 */
export interface LightsailAutoSnapshotAddOnRequest {
  /**
   * @schema LightsailAutoSnapshotAddOnRequest#snapshotTimeOfDay
   */
  readonly snapshotTimeOfDay?: string;

}

/**
 * Converts an object of type 'LightsailAutoSnapshotAddOnRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAutoSnapshotAddOnRequest(obj: LightsailAutoSnapshotAddOnRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'snapshotTimeOfDay': obj.snapshotTimeOfDay,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCookieObject
 */
export interface LightsailCookieObject {
  /**
   * @schema LightsailCookieObject#option
   */
  readonly option?: string;

  /**
   * @schema LightsailCookieObject#cookiesAllowList
   */
  readonly cookiesAllowList?: string[];

}

/**
 * Converts an object of type 'LightsailCookieObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCookieObject(obj: LightsailCookieObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'option': obj.option,
    'cookiesAllowList': obj.cookiesAllowList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailHeaderObject
 */
export interface LightsailHeaderObject {
  /**
   * @schema LightsailHeaderObject#option
   */
  readonly option?: string;

  /**
   * @schema LightsailHeaderObject#headersAllowList
   */
  readonly headersAllowList?: string[];

}

/**
 * Converts an object of type 'LightsailHeaderObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailHeaderObject(obj: LightsailHeaderObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'option': obj.option,
    'headersAllowList': obj.headersAllowList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailQueryStringObject
 */
export interface LightsailQueryStringObject {
  /**
   * @schema LightsailQueryStringObject#option
   */
  readonly option?: boolean;

  /**
   * @schema LightsailQueryStringObject#queryStringsAllowList
   */
  readonly queryStringsAllowList?: string[];

}

/**
 * Converts an object of type 'LightsailQueryStringObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailQueryStringObject(obj: LightsailQueryStringObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'option': obj.option,
    'queryStringsAllowList': obj.queryStringsAllowList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailOrigin
 */
export interface LightsailOrigin {
  /**
   * @schema LightsailOrigin#name
   */
  readonly name?: string;

  /**
   * @schema LightsailOrigin#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailOrigin#regionName
   */
  readonly regionName?: string;

  /**
   * @schema LightsailOrigin#protocolPolicy
   */
  readonly protocolPolicy?: string;

}

/**
 * Converts an object of type 'LightsailOrigin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailOrigin(obj: LightsailOrigin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'resourceType': obj.resourceType,
    'regionName': obj.regionName,
    'protocolPolicy': obj.protocolPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailMonitoredResourceInfo
 */
export interface LightsailMonitoredResourceInfo {
  /**
   * @schema LightsailMonitoredResourceInfo#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailMonitoredResourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema LightsailMonitoredResourceInfo#resourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'LightsailMonitoredResourceInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailMonitoredResourceInfo(obj: LightsailMonitoredResourceInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'resourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAttachedDisk
 */
export interface LightsailAttachedDisk {
  /**
   * @schema LightsailAttachedDisk#path
   */
  readonly path?: string;

  /**
   * @schema LightsailAttachedDisk#sizeInGb
   */
  readonly sizeInGb?: number;

}

/**
 * Converts an object of type 'LightsailAttachedDisk' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAttachedDisk(obj: LightsailAttachedDisk | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
    'sizeInGb': obj.sizeInGb,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailCloudFormationStackRecordSourceInfo
 */
export interface LightsailCloudFormationStackRecordSourceInfo {
  /**
   * @schema LightsailCloudFormationStackRecordSourceInfo#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailCloudFormationStackRecordSourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema LightsailCloudFormationStackRecordSourceInfo#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'LightsailCloudFormationStackRecordSourceInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailCloudFormationStackRecordSourceInfo(obj: LightsailCloudFormationStackRecordSourceInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'name': obj.name,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDestinationInfo
 */
export interface LightsailDestinationInfo {
  /**
   * @schema LightsailDestinationInfo#id
   */
  readonly id?: string;

  /**
   * @schema LightsailDestinationInfo#service
   */
  readonly service?: string;

}

/**
 * Converts an object of type 'LightsailDestinationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDestinationInfo(obj: LightsailDestinationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'service': obj.service,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailContainerServiceEndpoint
 */
export interface LightsailContainerServiceEndpoint {
  /**
   * @schema LightsailContainerServiceEndpoint#containerName
   */
  readonly containerName?: string;

  /**
   * @schema LightsailContainerServiceEndpoint#containerPort
   */
  readonly containerPort?: number;

  /**
   * @schema LightsailContainerServiceEndpoint#healthCheck
   */
  readonly healthCheck?: LightsailContainerServiceHealthCheckConfig;

}

/**
 * Converts an object of type 'LightsailContainerServiceEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailContainerServiceEndpoint(obj: LightsailContainerServiceEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerName': obj.containerName,
    'containerPort': obj.containerPort,
    'healthCheck': toJson_LightsailContainerServiceHealthCheckConfig(obj.healthCheck),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAddOn
 */
export interface LightsailAddOn {
  /**
   * @schema LightsailAddOn#name
   */
  readonly name?: string;

  /**
   * @schema LightsailAddOn#status
   */
  readonly status?: string;

  /**
   * @schema LightsailAddOn#snapshotTimeOfDay
   */
  readonly snapshotTimeOfDay?: string;

  /**
   * @schema LightsailAddOn#nextSnapshotTimeOfDay
   */
  readonly nextSnapshotTimeOfDay?: string;

}

/**
 * Converts an object of type 'LightsailAddOn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAddOn(obj: LightsailAddOn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'status': obj.status,
    'snapshotTimeOfDay': obj.snapshotTimeOfDay,
    'nextSnapshotTimeOfDay': obj.nextSnapshotTimeOfDay,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailExportSnapshotRecordSourceInfo
 */
export interface LightsailExportSnapshotRecordSourceInfo {
  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#arn
   */
  readonly arn?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#fromResourceName
   */
  readonly fromResourceName?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#fromResourceArn
   */
  readonly fromResourceArn?: string;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#instanceSnapshotInfo
   */
  readonly instanceSnapshotInfo?: LightsailInstanceSnapshotInfo;

  /**
   * @schema LightsailExportSnapshotRecordSourceInfo#diskSnapshotInfo
   */
  readonly diskSnapshotInfo?: LightsailDiskSnapshotInfo;

}

/**
 * Converts an object of type 'LightsailExportSnapshotRecordSourceInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailExportSnapshotRecordSourceInfo(obj: LightsailExportSnapshotRecordSourceInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'createdAt': obj.createdAt,
    'name': obj.name,
    'arn': obj.arn,
    'fromResourceName': obj.fromResourceName,
    'fromResourceArn': obj.fromResourceArn,
    'instanceSnapshotInfo': toJson_LightsailInstanceSnapshotInfo(obj.instanceSnapshotInfo),
    'diskSnapshotInfo': toJson_LightsailDiskSnapshotInfo(obj.diskSnapshotInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstanceHardware
 */
export interface LightsailInstanceHardware {
  /**
   * @schema LightsailInstanceHardware#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailInstanceHardware#disks
   */
  readonly disks?: LightsailDisk[];

  /**
   * @schema LightsailInstanceHardware#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

}

/**
 * Converts an object of type 'LightsailInstanceHardware' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstanceHardware(obj: LightsailInstanceHardware | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cpuCount': obj.cpuCount,
    'disks': obj.disks?.map(y => toJson_LightsailDisk(y)),
    'ramSizeInGb': obj.ramSizeInGb,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstanceNetworking
 */
export interface LightsailInstanceNetworking {
  /**
   * @schema LightsailInstanceNetworking#monthlyTransfer
   */
  readonly monthlyTransfer?: LightsailMonthlyTransfer;

  /**
   * @schema LightsailInstanceNetworking#ports
   */
  readonly ports?: LightsailInstancePortInfo[];

}

/**
 * Converts an object of type 'LightsailInstanceNetworking' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstanceNetworking(obj: LightsailInstanceNetworking | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'monthlyTransfer': toJson_LightsailMonthlyTransfer(obj.monthlyTransfer),
    'ports': obj.ports?.map(y => toJson_LightsailInstancePortInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPasswordData
 */
export interface LightsailPasswordData {
  /**
   * @schema LightsailPasswordData#ciphertext
   */
  readonly ciphertext?: string;

  /**
   * @schema LightsailPasswordData#keyPairName
   */
  readonly keyPairName?: string;

}

/**
 * Converts an object of type 'LightsailPasswordData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPasswordData(obj: LightsailPasswordData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ciphertext': obj.ciphertext,
    'keyPairName': obj.keyPairName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailHostKeyAttributes
 */
export interface LightsailHostKeyAttributes {
  /**
   * @schema LightsailHostKeyAttributes#algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema LightsailHostKeyAttributes#publicKey
   */
  readonly publicKey?: string;

  /**
   * @schema LightsailHostKeyAttributes#witnessedAt
   */
  readonly witnessedAt?: string;

  /**
   * @schema LightsailHostKeyAttributes#fingerprintSHA1
   */
  readonly fingerprintSha1?: string;

  /**
   * @schema LightsailHostKeyAttributes#fingerprintSHA256
   */
  readonly fingerprintSha256?: string;

  /**
   * @schema LightsailHostKeyAttributes#notValidBefore
   */
  readonly notValidBefore?: string;

  /**
   * @schema LightsailHostKeyAttributes#notValidAfter
   */
  readonly notValidAfter?: string;

}

/**
 * Converts an object of type 'LightsailHostKeyAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailHostKeyAttributes(obj: LightsailHostKeyAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'algorithm': obj.algorithm,
    'publicKey': obj.publicKey,
    'witnessedAt': obj.witnessedAt,
    'fingerprintSHA1': obj.fingerprintSha1,
    'fingerprintSHA256': obj.fingerprintSha256,
    'notValidBefore': obj.notValidBefore,
    'notValidAfter': obj.notValidAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstanceHealthSummary
 */
export interface LightsailInstanceHealthSummary {
  /**
   * @schema LightsailInstanceHealthSummary#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema LightsailInstanceHealthSummary#instanceHealth
   */
  readonly instanceHealth?: string;

  /**
   * @schema LightsailInstanceHealthSummary#instanceHealthReason
   */
  readonly instanceHealthReason?: string;

}

/**
 * Converts an object of type 'LightsailInstanceHealthSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstanceHealthSummary(obj: LightsailInstanceHealthSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
    'instanceHealth': obj.instanceHealth,
    'instanceHealthReason': obj.instanceHealthReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailLoadBalancerTlsCertificateSummary
 */
export interface LightsailLoadBalancerTlsCertificateSummary {
  /**
   * @schema LightsailLoadBalancerTlsCertificateSummary#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateSummary#isAttached
   */
  readonly isAttached?: boolean;

}

/**
 * Converts an object of type 'LightsailLoadBalancerTlsCertificateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailLoadBalancerTlsCertificateSummary(obj: LightsailLoadBalancerTlsCertificateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'isAttached': obj.isAttached,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord
 */
export interface LightsailLoadBalancerTlsCertificateDomainValidationRecord {
  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#name
   */
  readonly name?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#type
   */
  readonly type?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#value
   */
  readonly value?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#validationStatus
   */
  readonly validationStatus?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationRecord#domainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'LightsailLoadBalancerTlsCertificateDomainValidationRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailLoadBalancerTlsCertificateDomainValidationRecord(obj: LightsailLoadBalancerTlsCertificateDomainValidationRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
    'value': obj.value,
    'validationStatus': obj.validationStatus,
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailLoadBalancerTlsCertificateRenewalSummary
 */
export interface LightsailLoadBalancerTlsCertificateRenewalSummary {
  /**
   * @schema LightsailLoadBalancerTlsCertificateRenewalSummary#renewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateRenewalSummary#domainValidationOptions
   */
  readonly domainValidationOptions?: LightsailLoadBalancerTlsCertificateDomainValidationOption[];

}

/**
 * Converts an object of type 'LightsailLoadBalancerTlsCertificateRenewalSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailLoadBalancerTlsCertificateRenewalSummary(obj: LightsailLoadBalancerTlsCertificateRenewalSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'renewalStatus': obj.renewalStatus,
    'domainValidationOptions': obj.domainValidationOptions?.map(y => toJson_LightsailLoadBalancerTlsCertificateDomainValidationOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailAvailabilityZone
 */
export interface LightsailAvailabilityZone {
  /**
   * @schema LightsailAvailabilityZone#zoneName
   */
  readonly zoneName?: string;

  /**
   * @schema LightsailAvailabilityZone#state
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'LightsailAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailAvailabilityZone(obj: LightsailAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'zoneName': obj.zoneName,
    'state': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRelationalDatabaseHardware
 */
export interface LightsailRelationalDatabaseHardware {
  /**
   * @schema LightsailRelationalDatabaseHardware#cpuCount
   */
  readonly cpuCount?: number;

  /**
   * @schema LightsailRelationalDatabaseHardware#diskSizeInGb
   */
  readonly diskSizeInGb?: number;

  /**
   * @schema LightsailRelationalDatabaseHardware#ramSizeInGb
   */
  readonly ramSizeInGb?: number;

}

/**
 * Converts an object of type 'LightsailRelationalDatabaseHardware' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRelationalDatabaseHardware(obj: LightsailRelationalDatabaseHardware | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cpuCount': obj.cpuCount,
    'diskSizeInGb': obj.diskSizeInGb,
    'ramSizeInGb': obj.ramSizeInGb,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPendingModifiedRelationalDatabaseValues
 */
export interface LightsailPendingModifiedRelationalDatabaseValues {
  /**
   * @schema LightsailPendingModifiedRelationalDatabaseValues#masterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema LightsailPendingModifiedRelationalDatabaseValues#engineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema LightsailPendingModifiedRelationalDatabaseValues#backupRetentionEnabled
   */
  readonly backupRetentionEnabled?: boolean;

}

/**
 * Converts an object of type 'LightsailPendingModifiedRelationalDatabaseValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPendingModifiedRelationalDatabaseValues(obj: LightsailPendingModifiedRelationalDatabaseValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'masterUserPassword': obj.masterUserPassword,
    'engineVersion': obj.engineVersion,
    'backupRetentionEnabled': obj.backupRetentionEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRelationalDatabaseEndpoint
 */
export interface LightsailRelationalDatabaseEndpoint {
  /**
   * @schema LightsailRelationalDatabaseEndpoint#port
   */
  readonly port?: number;

  /**
   * @schema LightsailRelationalDatabaseEndpoint#address
   */
  readonly address?: string;

}

/**
 * Converts an object of type 'LightsailRelationalDatabaseEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRelationalDatabaseEndpoint(obj: LightsailRelationalDatabaseEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'port': obj.port,
    'address': obj.address,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailPendingMaintenanceAction
 */
export interface LightsailPendingMaintenanceAction {
  /**
   * @schema LightsailPendingMaintenanceAction#action
   */
  readonly action?: string;

  /**
   * @schema LightsailPendingMaintenanceAction#description
   */
  readonly description?: string;

  /**
   * @schema LightsailPendingMaintenanceAction#currentApplyDate
   */
  readonly currentApplyDate?: string;

}

/**
 * Converts an object of type 'LightsailPendingMaintenanceAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailPendingMaintenanceAction(obj: LightsailPendingMaintenanceAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'description': obj.description,
    'currentApplyDate': obj.currentApplyDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDomainValidationRecord
 */
export interface LightsailDomainValidationRecord {
  /**
   * @schema LightsailDomainValidationRecord#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailDomainValidationRecord#resourceRecord
   */
  readonly resourceRecord?: LightsailResourceRecord;

}

/**
 * Converts an object of type 'LightsailDomainValidationRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDomainValidationRecord(obj: LightsailDomainValidationRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'resourceRecord': toJson_LightsailResourceRecord(obj.resourceRecord),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailRenewalSummary
 */
export interface LightsailRenewalSummary {
  /**
   * @schema LightsailRenewalSummary#domainValidationRecords
   */
  readonly domainValidationRecords?: LightsailDomainValidationRecord[];

  /**
   * @schema LightsailRenewalSummary#renewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema LightsailRenewalSummary#renewalStatusReason
   */
  readonly renewalStatusReason?: string;

  /**
   * @schema LightsailRenewalSummary#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'LightsailRenewalSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailRenewalSummary(obj: LightsailRenewalSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainValidationRecords': obj.domainValidationRecords?.map(y => toJson_LightsailDomainValidationRecord(y)),
    'renewalStatus': obj.renewalStatus,
    'renewalStatusReason': obj.renewalStatusReason,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstanceSnapshotInfo
 */
export interface LightsailInstanceSnapshotInfo {
  /**
   * @schema LightsailInstanceSnapshotInfo#fromBundleId
   */
  readonly fromBundleId?: string;

  /**
   * @schema LightsailInstanceSnapshotInfo#fromBlueprintId
   */
  readonly fromBlueprintId?: string;

  /**
   * @schema LightsailInstanceSnapshotInfo#fromDiskInfo
   */
  readonly fromDiskInfo?: LightsailDiskInfo[];

}

/**
 * Converts an object of type 'LightsailInstanceSnapshotInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstanceSnapshotInfo(obj: LightsailInstanceSnapshotInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fromBundleId': obj.fromBundleId,
    'fromBlueprintId': obj.fromBlueprintId,
    'fromDiskInfo': obj.fromDiskInfo?.map(y => toJson_LightsailDiskInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDiskSnapshotInfo
 */
export interface LightsailDiskSnapshotInfo {
  /**
   * @schema LightsailDiskSnapshotInfo#sizeInGb
   */
  readonly sizeInGb?: number;

}

/**
 * Converts an object of type 'LightsailDiskSnapshotInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDiskSnapshotInfo(obj: LightsailDiskSnapshotInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sizeInGb': obj.sizeInGb,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailMonthlyTransfer
 */
export interface LightsailMonthlyTransfer {
  /**
   * @schema LightsailMonthlyTransfer#gbPerMonthAllocated
   */
  readonly gbPerMonthAllocated?: number;

}

/**
 * Converts an object of type 'LightsailMonthlyTransfer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailMonthlyTransfer(obj: LightsailMonthlyTransfer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gbPerMonthAllocated': obj.gbPerMonthAllocated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailInstancePortInfo
 */
export interface LightsailInstancePortInfo {
  /**
   * @schema LightsailInstancePortInfo#fromPort
   */
  readonly fromPort?: number;

  /**
   * @schema LightsailInstancePortInfo#toPort
   */
  readonly toPort?: number;

  /**
   * @schema LightsailInstancePortInfo#protocol
   */
  readonly protocol?: string;

  /**
   * @schema LightsailInstancePortInfo#accessFrom
   */
  readonly accessFrom?: string;

  /**
   * @schema LightsailInstancePortInfo#accessType
   */
  readonly accessType?: string;

  /**
   * @schema LightsailInstancePortInfo#commonName
   */
  readonly commonName?: string;

  /**
   * @schema LightsailInstancePortInfo#accessDirection
   */
  readonly accessDirection?: string;

  /**
   * @schema LightsailInstancePortInfo#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema LightsailInstancePortInfo#ipv6Cidrs
   */
  readonly ipv6Cidrs?: string[];

  /**
   * @schema LightsailInstancePortInfo#cidrListAliases
   */
  readonly cidrListAliases?: string[];

}

/**
 * Converts an object of type 'LightsailInstancePortInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailInstancePortInfo(obj: LightsailInstancePortInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fromPort': obj.fromPort,
    'toPort': obj.toPort,
    'protocol': obj.protocol,
    'accessFrom': obj.accessFrom,
    'accessType': obj.accessType,
    'commonName': obj.commonName,
    'accessDirection': obj.accessDirection,
    'cidrs': obj.cidrs?.map(y => y),
    'ipv6Cidrs': obj.ipv6Cidrs?.map(y => y),
    'cidrListAliases': obj.cidrListAliases?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailLoadBalancerTlsCertificateDomainValidationOption
 */
export interface LightsailLoadBalancerTlsCertificateDomainValidationOption {
  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationOption#domainName
   */
  readonly domainName?: string;

  /**
   * @schema LightsailLoadBalancerTlsCertificateDomainValidationOption#validationStatus
   */
  readonly validationStatus?: string;

}

/**
 * Converts an object of type 'LightsailLoadBalancerTlsCertificateDomainValidationOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailLoadBalancerTlsCertificateDomainValidationOption(obj: LightsailLoadBalancerTlsCertificateDomainValidationOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'validationStatus': obj.validationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailResourceRecord
 */
export interface LightsailResourceRecord {
  /**
   * @schema LightsailResourceRecord#name
   */
  readonly name?: string;

  /**
   * @schema LightsailResourceRecord#type
   */
  readonly type?: string;

  /**
   * @schema LightsailResourceRecord#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'LightsailResourceRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailResourceRecord(obj: LightsailResourceRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LightsailDiskInfo
 */
export interface LightsailDiskInfo {
  /**
   * @schema LightsailDiskInfo#name
   */
  readonly name?: string;

  /**
   * @schema LightsailDiskInfo#path
   */
  readonly path?: string;

  /**
   * @schema LightsailDiskInfo#sizeInGb
   */
  readonly sizeInGb?: number;

  /**
   * @schema LightsailDiskInfo#isSystemDisk
   */
  readonly isSystemDisk?: boolean;

}

/**
 * Converts an object of type 'LightsailDiskInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LightsailDiskInfo(obj: LightsailDiskInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'path': obj.path,
    'sizeInGb': obj.sizeInGb,
    'isSystemDisk': obj.isSystemDisk,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
