/**
 * @schema CodeArtifactAssociateExternalConnectionRequest
 */
export interface CodeArtifactAssociateExternalConnectionRequest {
  /**
   * @schema CodeArtifactAssociateExternalConnectionRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactAssociateExternalConnectionRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactAssociateExternalConnectionRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactAssociateExternalConnectionRequest#externalConnection
   */
  readonly externalConnection: string;

}

/**
 * Converts an object of type 'CodeArtifactAssociateExternalConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactAssociateExternalConnectionRequest(obj: CodeArtifactAssociateExternalConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'externalConnection': obj.externalConnection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactAssociateExternalConnectionResult
 */
export interface CodeArtifactAssociateExternalConnectionResult {
  /**
   * @schema CodeArtifactAssociateExternalConnectionResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * Converts an object of type 'CodeArtifactAssociateExternalConnectionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactAssociateExternalConnectionResult(obj: CodeArtifactAssociateExternalConnectionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_CodeArtifactRepositoryDescription(obj.repository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactCopyPackageVersionsRequest
 */
export interface CodeArtifactCopyPackageVersionsRequest {
  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#sourceRepository
   */
  readonly sourceRepository: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#destinationRepository
   */
  readonly destinationRepository: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#versions
   */
  readonly versions?: string[];

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#versionRevisions
   */
  readonly versionRevisions?: { [key: string]: string };

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#allowOverwrite
   */
  readonly allowOverwrite?: boolean;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#includeFromUpstream
   */
  readonly includeFromUpstream?: boolean;

}

/**
 * Converts an object of type 'CodeArtifactCopyPackageVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactCopyPackageVersionsRequest(obj: CodeArtifactCopyPackageVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'sourceRepository': obj.sourceRepository,
    'destinationRepository': obj.destinationRepository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'versions': obj.versions?.map(y => y),
    'versionRevisions': ((obj.versionRevisions) === undefined) ? undefined : (Object.entries(obj.versionRevisions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'allowOverwrite': obj.allowOverwrite,
    'includeFromUpstream': obj.includeFromUpstream,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactCopyPackageVersionsResult
 */
export interface CodeArtifactCopyPackageVersionsResult {
  /**
   * @schema CodeArtifactCopyPackageVersionsResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: CodeArtifactSuccessfulPackageVersionInfo };

  /**
   * @schema CodeArtifactCopyPackageVersionsResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: CodeArtifactPackageVersionError };

}

/**
 * Converts an object of type 'CodeArtifactCopyPackageVersionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactCopyPackageVersionsResult(obj: CodeArtifactCopyPackageVersionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'successfulVersions': ((obj.successfulVersions) === undefined) ? undefined : (Object.entries(obj.successfulVersions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CodeArtifactSuccessfulPackageVersionInfo(i[1]) }), {})),
    'failedVersions': ((obj.failedVersions) === undefined) ? undefined : (Object.entries(obj.failedVersions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CodeArtifactPackageVersionError(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactCreateDomainRequest
 */
export interface CodeArtifactCreateDomainRequest {
  /**
   * @schema CodeArtifactCreateDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactCreateDomainRequest#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeArtifactCreateDomainRequest#tags
   */
  readonly tags?: CodeArtifactTag[];

}

/**
 * Converts an object of type 'CodeArtifactCreateDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactCreateDomainRequest(obj: CodeArtifactCreateDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'encryptionKey': obj.encryptionKey,
    'tags': obj.tags?.map(y => toJson_CodeArtifactTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactCreateDomainResult
 */
export interface CodeArtifactCreateDomainResult {
  /**
   * @schema CodeArtifactCreateDomainResult#domain
   */
  readonly domain?: CodeArtifactDomainDescription;

}

/**
 * Converts an object of type 'CodeArtifactCreateDomainResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactCreateDomainResult(obj: CodeArtifactCreateDomainResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': toJson_CodeArtifactDomainDescription(obj.domain),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactCreateRepositoryRequest
 */
export interface CodeArtifactCreateRepositoryRequest {
  /**
   * @schema CodeArtifactCreateRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactCreateRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactCreateRepositoryRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactCreateRepositoryRequest#description
   */
  readonly description?: string;

  /**
   * @schema CodeArtifactCreateRepositoryRequest#upstreams
   */
  readonly upstreams?: CodeArtifactUpstreamRepository[];

  /**
   * @schema CodeArtifactCreateRepositoryRequest#tags
   */
  readonly tags?: CodeArtifactTag[];

}

/**
 * Converts an object of type 'CodeArtifactCreateRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactCreateRepositoryRequest(obj: CodeArtifactCreateRepositoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'description': obj.description,
    'upstreams': obj.upstreams?.map(y => toJson_CodeArtifactUpstreamRepository(y)),
    'tags': obj.tags?.map(y => toJson_CodeArtifactTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactCreateRepositoryResult
 */
export interface CodeArtifactCreateRepositoryResult {
  /**
   * @schema CodeArtifactCreateRepositoryResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * Converts an object of type 'CodeArtifactCreateRepositoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactCreateRepositoryResult(obj: CodeArtifactCreateRepositoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_CodeArtifactRepositoryDescription(obj.repository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeleteDomainRequest
 */
export interface CodeArtifactDeleteDomainRequest {
  /**
   * @schema CodeArtifactDeleteDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeleteDomainRequest#domainOwner
   */
  readonly domainOwner?: string;

}

/**
 * Converts an object of type 'CodeArtifactDeleteDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeleteDomainRequest(obj: CodeArtifactDeleteDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeleteDomainResult
 */
export interface CodeArtifactDeleteDomainResult {
  /**
   * @schema CodeArtifactDeleteDomainResult#domain
   */
  readonly domain?: CodeArtifactDomainDescription;

}

/**
 * Converts an object of type 'CodeArtifactDeleteDomainResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeleteDomainResult(obj: CodeArtifactDeleteDomainResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': toJson_CodeArtifactDomainDescription(obj.domain),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeleteDomainPermissionsPolicyRequest
 */
export interface CodeArtifactDeleteDomainPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactDeleteDomainPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeleteDomainPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDeleteDomainPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

}

/**
 * Converts an object of type 'CodeArtifactDeleteDomainPermissionsPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeleteDomainPermissionsPolicyRequest(obj: CodeArtifactDeleteDomainPermissionsPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'policyRevision': obj.policyRevision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeleteDomainPermissionsPolicyResult
 */
export interface CodeArtifactDeleteDomainPermissionsPolicyResult {
  /**
   * @schema CodeArtifactDeleteDomainPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * Converts an object of type 'CodeArtifactDeleteDomainPermissionsPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeleteDomainPermissionsPolicyResult(obj: CodeArtifactDeleteDomainPermissionsPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': toJson_CodeArtifactResourcePolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeletePackageVersionsRequest
 */
export interface CodeArtifactDeletePackageVersionsRequest {
  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#versions
   */
  readonly versions: string[];

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#expectedStatus
   */
  readonly expectedStatus?: string;

}

/**
 * Converts an object of type 'CodeArtifactDeletePackageVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeletePackageVersionsRequest(obj: CodeArtifactDeletePackageVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'versions': obj.versions?.map(y => y),
    'expectedStatus': obj.expectedStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeletePackageVersionsResult
 */
export interface CodeArtifactDeletePackageVersionsResult {
  /**
   * @schema CodeArtifactDeletePackageVersionsResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: CodeArtifactSuccessfulPackageVersionInfo };

  /**
   * @schema CodeArtifactDeletePackageVersionsResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: CodeArtifactPackageVersionError };

}

/**
 * Converts an object of type 'CodeArtifactDeletePackageVersionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeletePackageVersionsResult(obj: CodeArtifactDeletePackageVersionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'successfulVersions': ((obj.successfulVersions) === undefined) ? undefined : (Object.entries(obj.successfulVersions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CodeArtifactSuccessfulPackageVersionInfo(i[1]) }), {})),
    'failedVersions': ((obj.failedVersions) === undefined) ? undefined : (Object.entries(obj.failedVersions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CodeArtifactPackageVersionError(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeleteRepositoryRequest
 */
export interface CodeArtifactDeleteRepositoryRequest {
  /**
   * @schema CodeArtifactDeleteRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeleteRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDeleteRepositoryRequest#repository
   */
  readonly repository: string;

}

/**
 * Converts an object of type 'CodeArtifactDeleteRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeleteRepositoryRequest(obj: CodeArtifactDeleteRepositoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeleteRepositoryResult
 */
export interface CodeArtifactDeleteRepositoryResult {
  /**
   * @schema CodeArtifactDeleteRepositoryResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * Converts an object of type 'CodeArtifactDeleteRepositoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeleteRepositoryResult(obj: CodeArtifactDeleteRepositoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_CodeArtifactRepositoryDescription(obj.repository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest
 */
export interface CodeArtifactDeleteRepositoryPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

}

/**
 * Converts an object of type 'CodeArtifactDeleteRepositoryPermissionsPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeleteRepositoryPermissionsPolicyRequest(obj: CodeArtifactDeleteRepositoryPermissionsPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'policyRevision': obj.policyRevision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDeleteRepositoryPermissionsPolicyResult
 */
export interface CodeArtifactDeleteRepositoryPermissionsPolicyResult {
  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * Converts an object of type 'CodeArtifactDeleteRepositoryPermissionsPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDeleteRepositoryPermissionsPolicyResult(obj: CodeArtifactDeleteRepositoryPermissionsPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': toJson_CodeArtifactResourcePolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDescribeDomainRequest
 */
export interface CodeArtifactDescribeDomainRequest {
  /**
   * @schema CodeArtifactDescribeDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDescribeDomainRequest#domainOwner
   */
  readonly domainOwner?: string;

}

/**
 * Converts an object of type 'CodeArtifactDescribeDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDescribeDomainRequest(obj: CodeArtifactDescribeDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDescribeDomainResult
 */
export interface CodeArtifactDescribeDomainResult {
  /**
   * @schema CodeArtifactDescribeDomainResult#domain
   */
  readonly domain?: CodeArtifactDomainDescription;

}

/**
 * Converts an object of type 'CodeArtifactDescribeDomainResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDescribeDomainResult(obj: CodeArtifactDescribeDomainResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': toJson_CodeArtifactDomainDescription(obj.domain),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDescribePackageVersionRequest
 */
export interface CodeArtifactDescribePackageVersionRequest {
  /**
   * @schema CodeArtifactDescribePackageVersionRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#packageVersion
   */
  readonly packageVersion: string;

}

/**
 * Converts an object of type 'CodeArtifactDescribePackageVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDescribePackageVersionRequest(obj: CodeArtifactDescribePackageVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'packageVersion': obj.packageVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDescribePackageVersionResult
 */
export interface CodeArtifactDescribePackageVersionResult {
  /**
   * @schema CodeArtifactDescribePackageVersionResult#packageVersion
   */
  readonly packageVersion: CodeArtifactPackageVersionDescription;

}

/**
 * Converts an object of type 'CodeArtifactDescribePackageVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDescribePackageVersionResult(obj: CodeArtifactDescribePackageVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'packageVersion': toJson_CodeArtifactPackageVersionDescription(obj.packageVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDescribeRepositoryRequest
 */
export interface CodeArtifactDescribeRepositoryRequest {
  /**
   * @schema CodeArtifactDescribeRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDescribeRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDescribeRepositoryRequest#repository
   */
  readonly repository: string;

}

/**
 * Converts an object of type 'CodeArtifactDescribeRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDescribeRepositoryRequest(obj: CodeArtifactDescribeRepositoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDescribeRepositoryResult
 */
export interface CodeArtifactDescribeRepositoryResult {
  /**
   * @schema CodeArtifactDescribeRepositoryResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * Converts an object of type 'CodeArtifactDescribeRepositoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDescribeRepositoryResult(obj: CodeArtifactDescribeRepositoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_CodeArtifactRepositoryDescription(obj.repository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDisassociateExternalConnectionRequest
 */
export interface CodeArtifactDisassociateExternalConnectionRequest {
  /**
   * @schema CodeArtifactDisassociateExternalConnectionRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDisassociateExternalConnectionRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDisassociateExternalConnectionRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDisassociateExternalConnectionRequest#externalConnection
   */
  readonly externalConnection: string;

}

/**
 * Converts an object of type 'CodeArtifactDisassociateExternalConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDisassociateExternalConnectionRequest(obj: CodeArtifactDisassociateExternalConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'externalConnection': obj.externalConnection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDisassociateExternalConnectionResult
 */
export interface CodeArtifactDisassociateExternalConnectionResult {
  /**
   * @schema CodeArtifactDisassociateExternalConnectionResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * Converts an object of type 'CodeArtifactDisassociateExternalConnectionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDisassociateExternalConnectionResult(obj: CodeArtifactDisassociateExternalConnectionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_CodeArtifactRepositoryDescription(obj.repository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDisposePackageVersionsRequest
 */
export interface CodeArtifactDisposePackageVersionsRequest {
  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#versions
   */
  readonly versions: string[];

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#versionRevisions
   */
  readonly versionRevisions?: { [key: string]: string };

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#expectedStatus
   */
  readonly expectedStatus?: string;

}

/**
 * Converts an object of type 'CodeArtifactDisposePackageVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDisposePackageVersionsRequest(obj: CodeArtifactDisposePackageVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'versions': obj.versions?.map(y => y),
    'versionRevisions': ((obj.versionRevisions) === undefined) ? undefined : (Object.entries(obj.versionRevisions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'expectedStatus': obj.expectedStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDisposePackageVersionsResult
 */
export interface CodeArtifactDisposePackageVersionsResult {
  /**
   * @schema CodeArtifactDisposePackageVersionsResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: CodeArtifactSuccessfulPackageVersionInfo };

  /**
   * @schema CodeArtifactDisposePackageVersionsResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: CodeArtifactPackageVersionError };

}

/**
 * Converts an object of type 'CodeArtifactDisposePackageVersionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDisposePackageVersionsResult(obj: CodeArtifactDisposePackageVersionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'successfulVersions': ((obj.successfulVersions) === undefined) ? undefined : (Object.entries(obj.successfulVersions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CodeArtifactSuccessfulPackageVersionInfo(i[1]) }), {})),
    'failedVersions': ((obj.failedVersions) === undefined) ? undefined : (Object.entries(obj.failedVersions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CodeArtifactPackageVersionError(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetAuthorizationTokenRequest
 */
export interface CodeArtifactGetAuthorizationTokenRequest {
  /**
   * @schema CodeArtifactGetAuthorizationTokenRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetAuthorizationTokenRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetAuthorizationTokenRequest#durationSeconds
   */
  readonly durationSeconds?: number;

}

/**
 * Converts an object of type 'CodeArtifactGetAuthorizationTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetAuthorizationTokenRequest(obj: CodeArtifactGetAuthorizationTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'durationSeconds': obj.durationSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetAuthorizationTokenResult
 */
export interface CodeArtifactGetAuthorizationTokenResult {
  /**
   * @schema CodeArtifactGetAuthorizationTokenResult#authorizationToken
   */
  readonly authorizationToken?: string;

  /**
   * @schema CodeArtifactGetAuthorizationTokenResult#expiration
   */
  readonly expiration?: string;

}

/**
 * Converts an object of type 'CodeArtifactGetAuthorizationTokenResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetAuthorizationTokenResult(obj: CodeArtifactGetAuthorizationTokenResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizationToken': obj.authorizationToken,
    'expiration': obj.expiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetDomainPermissionsPolicyRequest
 */
export interface CodeArtifactGetDomainPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactGetDomainPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetDomainPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

}

/**
 * Converts an object of type 'CodeArtifactGetDomainPermissionsPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetDomainPermissionsPolicyRequest(obj: CodeArtifactGetDomainPermissionsPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetDomainPermissionsPolicyResult
 */
export interface CodeArtifactGetDomainPermissionsPolicyResult {
  /**
   * @schema CodeArtifactGetDomainPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * Converts an object of type 'CodeArtifactGetDomainPermissionsPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetDomainPermissionsPolicyResult(obj: CodeArtifactGetDomainPermissionsPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': toJson_CodeArtifactResourcePolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetPackageVersionAssetRequest
 */
export interface CodeArtifactGetPackageVersionAssetRequest {
  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#packageVersion
   */
  readonly packageVersion: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#asset
   */
  readonly asset: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#packageVersionRevision
   */
  readonly packageVersionRevision?: string;

}

/**
 * Converts an object of type 'CodeArtifactGetPackageVersionAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetPackageVersionAssetRequest(obj: CodeArtifactGetPackageVersionAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'packageVersion': obj.packageVersion,
    'asset': obj.asset,
    'packageVersionRevision': obj.packageVersionRevision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetPackageVersionAssetResult
 */
export interface CodeArtifactGetPackageVersionAssetResult {
  /**
   * @schema CodeArtifactGetPackageVersionAssetResult#asset
   */
  readonly asset?: any;

  /**
   * @schema CodeArtifactGetPackageVersionAssetResult#assetName
   */
  readonly assetName?: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetResult#packageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetResult#packageVersionRevision
   */
  readonly packageVersionRevision?: string;

}

/**
 * Converts an object of type 'CodeArtifactGetPackageVersionAssetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetPackageVersionAssetResult(obj: CodeArtifactGetPackageVersionAssetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'asset': obj.asset,
    'assetName': obj.assetName,
    'packageVersion': obj.packageVersion,
    'packageVersionRevision': obj.packageVersionRevision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetPackageVersionReadmeRequest
 */
export interface CodeArtifactGetPackageVersionReadmeRequest {
  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#packageVersion
   */
  readonly packageVersion: string;

}

/**
 * Converts an object of type 'CodeArtifactGetPackageVersionReadmeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetPackageVersionReadmeRequest(obj: CodeArtifactGetPackageVersionReadmeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'packageVersion': obj.packageVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetPackageVersionReadmeResult
 */
export interface CodeArtifactGetPackageVersionReadmeResult {
  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#version
   */
  readonly version?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#versionRevision
   */
  readonly versionRevision?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#readme
   */
  readonly readme?: string;

}

/**
 * Converts an object of type 'CodeArtifactGetPackageVersionReadmeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetPackageVersionReadmeResult(obj: CodeArtifactGetPackageVersionReadmeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'version': obj.version,
    'versionRevision': obj.versionRevision,
    'readme': obj.readme,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetRepositoryEndpointRequest
 */
export interface CodeArtifactGetRepositoryEndpointRequest {
  /**
   * @schema CodeArtifactGetRepositoryEndpointRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetRepositoryEndpointRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetRepositoryEndpointRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactGetRepositoryEndpointRequest#format
   */
  readonly format: string;

}

/**
 * Converts an object of type 'CodeArtifactGetRepositoryEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetRepositoryEndpointRequest(obj: CodeArtifactGetRepositoryEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetRepositoryEndpointResult
 */
export interface CodeArtifactGetRepositoryEndpointResult {
  /**
   * @schema CodeArtifactGetRepositoryEndpointResult#repositoryEndpoint
   */
  readonly repositoryEndpoint?: string;

}

/**
 * Converts an object of type 'CodeArtifactGetRepositoryEndpointResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetRepositoryEndpointResult(obj: CodeArtifactGetRepositoryEndpointResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryEndpoint': obj.repositoryEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetRepositoryPermissionsPolicyRequest
 */
export interface CodeArtifactGetRepositoryPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactGetRepositoryPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetRepositoryPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetRepositoryPermissionsPolicyRequest#repository
   */
  readonly repository: string;

}

/**
 * Converts an object of type 'CodeArtifactGetRepositoryPermissionsPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetRepositoryPermissionsPolicyRequest(obj: CodeArtifactGetRepositoryPermissionsPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactGetRepositoryPermissionsPolicyResult
 */
export interface CodeArtifactGetRepositoryPermissionsPolicyResult {
  /**
   * @schema CodeArtifactGetRepositoryPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * Converts an object of type 'CodeArtifactGetRepositoryPermissionsPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactGetRepositoryPermissionsPolicyResult(obj: CodeArtifactGetRepositoryPermissionsPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': toJson_CodeArtifactResourcePolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListDomainsRequest
 */
export interface CodeArtifactListDomainsRequest {
  /**
   * @schema CodeArtifactListDomainsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListDomainsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListDomainsRequest(obj: CodeArtifactListDomainsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListDomainsResult
 */
export interface CodeArtifactListDomainsResult {
  /**
   * @schema CodeArtifactListDomainsResult#domains
   */
  readonly domains?: CodeArtifactDomainSummary[];

  /**
   * @schema CodeArtifactListDomainsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListDomainsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListDomainsResult(obj: CodeArtifactListDomainsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domains': obj.domains?.map(y => toJson_CodeArtifactDomainSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListPackageVersionAssetsRequest
 */
export interface CodeArtifactListPackageVersionAssetsRequest {
  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#packageVersion
   */
  readonly packageVersion: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListPackageVersionAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListPackageVersionAssetsRequest(obj: CodeArtifactListPackageVersionAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'packageVersion': obj.packageVersion,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListPackageVersionAssetsResult
 */
export interface CodeArtifactListPackageVersionAssetsResult {
  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#version
   */
  readonly version?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#versionRevision
   */
  readonly versionRevision?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#assets
   */
  readonly assets?: CodeArtifactAssetSummary[];

}

/**
 * Converts an object of type 'CodeArtifactListPackageVersionAssetsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListPackageVersionAssetsResult(obj: CodeArtifactListPackageVersionAssetsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'version': obj.version,
    'versionRevision': obj.versionRevision,
    'nextToken': obj.nextToken,
    'assets': obj.assets?.map(y => toJson_CodeArtifactAssetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListPackageVersionDependenciesRequest
 */
export interface CodeArtifactListPackageVersionDependenciesRequest {
  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#packageVersion
   */
  readonly packageVersion: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListPackageVersionDependenciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListPackageVersionDependenciesRequest(obj: CodeArtifactListPackageVersionDependenciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'packageVersion': obj.packageVersion,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListPackageVersionDependenciesResult
 */
export interface CodeArtifactListPackageVersionDependenciesResult {
  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#version
   */
  readonly version?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#versionRevision
   */
  readonly versionRevision?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#dependencies
   */
  readonly dependencies?: CodeArtifactPackageDependency[];

}

/**
 * Converts an object of type 'CodeArtifactListPackageVersionDependenciesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListPackageVersionDependenciesResult(obj: CodeArtifactListPackageVersionDependenciesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'version': obj.version,
    'versionRevision': obj.versionRevision,
    'nextToken': obj.nextToken,
    'dependencies': obj.dependencies?.map(y => toJson_CodeArtifactPackageDependency(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListPackageVersionsRequest
 */
export interface CodeArtifactListPackageVersionsRequest {
  /**
   * @schema CodeArtifactListPackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListPackageVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListPackageVersionsRequest(obj: CodeArtifactListPackageVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'status': obj.status,
    'sortBy': obj.sortBy,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListPackageVersionsResult
 */
export interface CodeArtifactListPackageVersionsResult {
  /**
   * @schema CodeArtifactListPackageVersionsResult#defaultDisplayVersion
   */
  readonly defaultDisplayVersion?: string;

  /**
   * @schema CodeArtifactListPackageVersionsResult#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactListPackageVersionsResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionsResult#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactListPackageVersionsResult#versions
   */
  readonly versions?: CodeArtifactPackageVersionSummary[];

  /**
   * @schema CodeArtifactListPackageVersionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListPackageVersionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListPackageVersionsResult(obj: CodeArtifactListPackageVersionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultDisplayVersion': obj.defaultDisplayVersion,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'versions': obj.versions?.map(y => toJson_CodeArtifactPackageVersionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListPackagesRequest
 */
export interface CodeArtifactListPackagesRequest {
  /**
   * @schema CodeArtifactListPackagesRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListPackagesRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListPackagesRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactListPackagesRequest#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactListPackagesRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackagesRequest#packagePrefix
   */
  readonly packagePrefix?: string;

  /**
   * @schema CodeArtifactListPackagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListPackagesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListPackagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListPackagesRequest(obj: CodeArtifactListPackagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'packagePrefix': obj.packagePrefix,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListPackagesResult
 */
export interface CodeArtifactListPackagesResult {
  /**
   * @schema CodeArtifactListPackagesResult#packages
   */
  readonly packages?: CodeArtifactPackageSummary[];

  /**
   * @schema CodeArtifactListPackagesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListPackagesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListPackagesResult(obj: CodeArtifactListPackagesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'packages': obj.packages?.map(y => toJson_CodeArtifactPackageSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListRepositoriesRequest
 */
export interface CodeArtifactListRepositoriesRequest {
  /**
   * @schema CodeArtifactListRepositoriesRequest#repositoryPrefix
   */
  readonly repositoryPrefix?: string;

  /**
   * @schema CodeArtifactListRepositoriesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListRepositoriesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListRepositoriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListRepositoriesRequest(obj: CodeArtifactListRepositoriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryPrefix': obj.repositoryPrefix,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListRepositoriesResult
 */
export interface CodeArtifactListRepositoriesResult {
  /**
   * @schema CodeArtifactListRepositoriesResult#repositories
   */
  readonly repositories?: CodeArtifactRepositorySummary[];

  /**
   * @schema CodeArtifactListRepositoriesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListRepositoriesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListRepositoriesResult(obj: CodeArtifactListRepositoriesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositories': obj.repositories?.map(y => toJson_CodeArtifactRepositorySummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListRepositoriesInDomainRequest
 */
export interface CodeArtifactListRepositoriesInDomainRequest {
  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#administratorAccount
   */
  readonly administratorAccount?: string;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#repositoryPrefix
   */
  readonly repositoryPrefix?: string;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListRepositoriesInDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListRepositoriesInDomainRequest(obj: CodeArtifactListRepositoriesInDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'administratorAccount': obj.administratorAccount,
    'repositoryPrefix': obj.repositoryPrefix,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListRepositoriesInDomainResult
 */
export interface CodeArtifactListRepositoriesInDomainResult {
  /**
   * @schema CodeArtifactListRepositoriesInDomainResult#repositories
   */
  readonly repositories?: CodeArtifactRepositorySummary[];

  /**
   * @schema CodeArtifactListRepositoriesInDomainResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeArtifactListRepositoriesInDomainResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListRepositoriesInDomainResult(obj: CodeArtifactListRepositoriesInDomainResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositories': obj.repositories?.map(y => toJson_CodeArtifactRepositorySummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListTagsForResourceRequest
 */
export interface CodeArtifactListTagsForResourceRequest {
  /**
   * @schema CodeArtifactListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'CodeArtifactListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListTagsForResourceRequest(obj: CodeArtifactListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactListTagsForResourceResult
 */
export interface CodeArtifactListTagsForResourceResult {
  /**
   * @schema CodeArtifactListTagsForResourceResult#tags
   */
  readonly tags?: CodeArtifactTag[];

}

/**
 * Converts an object of type 'CodeArtifactListTagsForResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactListTagsForResourceResult(obj: CodeArtifactListTagsForResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_CodeArtifactTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactPutDomainPermissionsPolicyRequest
 */
export interface CodeArtifactPutDomainPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyRequest#policyDocument
   */
  readonly policyDocument: string;

}

/**
 * Converts an object of type 'CodeArtifactPutDomainPermissionsPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactPutDomainPermissionsPolicyRequest(obj: CodeArtifactPutDomainPermissionsPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'policyRevision': obj.policyRevision,
    'policyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactPutDomainPermissionsPolicyResult
 */
export interface CodeArtifactPutDomainPermissionsPolicyResult {
  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * Converts an object of type 'CodeArtifactPutDomainPermissionsPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactPutDomainPermissionsPolicyResult(obj: CodeArtifactPutDomainPermissionsPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': toJson_CodeArtifactResourcePolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest
 */
export interface CodeArtifactPutRepositoryPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#policyDocument
   */
  readonly policyDocument: string;

}

/**
 * Converts an object of type 'CodeArtifactPutRepositoryPermissionsPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactPutRepositoryPermissionsPolicyRequest(obj: CodeArtifactPutRepositoryPermissionsPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'policyRevision': obj.policyRevision,
    'policyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactPutRepositoryPermissionsPolicyResult
 */
export interface CodeArtifactPutRepositoryPermissionsPolicyResult {
  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * Converts an object of type 'CodeArtifactPutRepositoryPermissionsPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactPutRepositoryPermissionsPolicyResult(obj: CodeArtifactPutRepositoryPermissionsPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': toJson_CodeArtifactResourcePolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactTagResourceRequest
 */
export interface CodeArtifactTagResourceRequest {
  /**
   * @schema CodeArtifactTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeArtifactTagResourceRequest#tags
   */
  readonly tags: CodeArtifactTag[];

}

/**
 * Converts an object of type 'CodeArtifactTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactTagResourceRequest(obj: CodeArtifactTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_CodeArtifactTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactTagResourceResult
 */
export interface CodeArtifactTagResourceResult {
}

/**
 * Converts an object of type 'CodeArtifactTagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactTagResourceResult(obj: CodeArtifactTagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactUntagResourceRequest
 */
export interface CodeArtifactUntagResourceRequest {
  /**
   * @schema CodeArtifactUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeArtifactUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'CodeArtifactUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactUntagResourceRequest(obj: CodeArtifactUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactUntagResourceResult
 */
export interface CodeArtifactUntagResourceResult {
}

/**
 * Converts an object of type 'CodeArtifactUntagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactUntagResourceResult(obj: CodeArtifactUntagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactUpdatePackageVersionsStatusRequest
 */
export interface CodeArtifactUpdatePackageVersionsStatusRequest {
  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#versions
   */
  readonly versions: string[];

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#versionRevisions
   */
  readonly versionRevisions?: { [key: string]: string };

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#expectedStatus
   */
  readonly expectedStatus?: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#targetStatus
   */
  readonly targetStatus: string;

}

/**
 * Converts an object of type 'CodeArtifactUpdatePackageVersionsStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactUpdatePackageVersionsStatusRequest(obj: CodeArtifactUpdatePackageVersionsStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
    'versions': obj.versions?.map(y => y),
    'versionRevisions': ((obj.versionRevisions) === undefined) ? undefined : (Object.entries(obj.versionRevisions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'expectedStatus': obj.expectedStatus,
    'targetStatus': obj.targetStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactUpdatePackageVersionsStatusResult
 */
export interface CodeArtifactUpdatePackageVersionsStatusResult {
  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: CodeArtifactSuccessfulPackageVersionInfo };

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: CodeArtifactPackageVersionError };

}

/**
 * Converts an object of type 'CodeArtifactUpdatePackageVersionsStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactUpdatePackageVersionsStatusResult(obj: CodeArtifactUpdatePackageVersionsStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'successfulVersions': ((obj.successfulVersions) === undefined) ? undefined : (Object.entries(obj.successfulVersions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CodeArtifactSuccessfulPackageVersionInfo(i[1]) }), {})),
    'failedVersions': ((obj.failedVersions) === undefined) ? undefined : (Object.entries(obj.failedVersions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CodeArtifactPackageVersionError(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactUpdateRepositoryRequest
 */
export interface CodeArtifactUpdateRepositoryRequest {
  /**
   * @schema CodeArtifactUpdateRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactUpdateRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactUpdateRepositoryRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactUpdateRepositoryRequest#description
   */
  readonly description?: string;

  /**
   * @schema CodeArtifactUpdateRepositoryRequest#upstreams
   */
  readonly upstreams?: CodeArtifactUpstreamRepository[];

}

/**
 * Converts an object of type 'CodeArtifactUpdateRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactUpdateRepositoryRequest(obj: CodeArtifactUpdateRepositoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'domainOwner': obj.domainOwner,
    'repository': obj.repository,
    'description': obj.description,
    'upstreams': obj.upstreams?.map(y => toJson_CodeArtifactUpstreamRepository(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactUpdateRepositoryResult
 */
export interface CodeArtifactUpdateRepositoryResult {
  /**
   * @schema CodeArtifactUpdateRepositoryResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * Converts an object of type 'CodeArtifactUpdateRepositoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactUpdateRepositoryResult(obj: CodeArtifactUpdateRepositoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_CodeArtifactRepositoryDescription(obj.repository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactRepositoryDescription
 */
export interface CodeArtifactRepositoryDescription {
  /**
   * @schema CodeArtifactRepositoryDescription#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#administratorAccount
   */
  readonly administratorAccount?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#domainName
   */
  readonly domainName?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#description
   */
  readonly description?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#upstreams
   */
  readonly upstreams?: CodeArtifactUpstreamRepositoryInfo[];

  /**
   * @schema CodeArtifactRepositoryDescription#externalConnections
   */
  readonly externalConnections?: CodeArtifactRepositoryExternalConnectionInfo[];

}

/**
 * Converts an object of type 'CodeArtifactRepositoryDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactRepositoryDescription(obj: CodeArtifactRepositoryDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'administratorAccount': obj.administratorAccount,
    'domainName': obj.domainName,
    'domainOwner': obj.domainOwner,
    'arn': obj.arn,
    'description': obj.description,
    'upstreams': obj.upstreams?.map(y => toJson_CodeArtifactUpstreamRepositoryInfo(y)),
    'externalConnections': obj.externalConnections?.map(y => toJson_CodeArtifactRepositoryExternalConnectionInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactSuccessfulPackageVersionInfo
 */
export interface CodeArtifactSuccessfulPackageVersionInfo {
  /**
   * @schema CodeArtifactSuccessfulPackageVersionInfo#revision
   */
  readonly revision?: string;

  /**
   * @schema CodeArtifactSuccessfulPackageVersionInfo#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodeArtifactSuccessfulPackageVersionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactSuccessfulPackageVersionInfo(obj: CodeArtifactSuccessfulPackageVersionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revision': obj.revision,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactPackageVersionError
 */
export interface CodeArtifactPackageVersionError {
  /**
   * @schema CodeArtifactPackageVersionError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CodeArtifactPackageVersionError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'CodeArtifactPackageVersionError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactPackageVersionError(obj: CodeArtifactPackageVersionError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactTag
 */
export interface CodeArtifactTag {
  /**
   * @schema CodeArtifactTag#key
   */
  readonly key: string;

  /**
   * @schema CodeArtifactTag#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'CodeArtifactTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactTag(obj: CodeArtifactTag | undefined): Record<string, any> | undefined {
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
 * @schema CodeArtifactDomainDescription
 */
export interface CodeArtifactDomainDescription {
  /**
   * @schema CodeArtifactDomainDescription#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactDomainDescription#owner
   */
  readonly owner?: string;

  /**
   * @schema CodeArtifactDomainDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeArtifactDomainDescription#status
   */
  readonly status?: string;

  /**
   * @schema CodeArtifactDomainDescription#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema CodeArtifactDomainDescription#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeArtifactDomainDescription#repositoryCount
   */
  readonly repositoryCount?: number;

  /**
   * @schema CodeArtifactDomainDescription#assetSizeBytes
   */
  readonly assetSizeBytes?: number;

  /**
   * @schema CodeArtifactDomainDescription#s3BucketArn
   */
  readonly s3BucketArn?: string;

}

/**
 * Converts an object of type 'CodeArtifactDomainDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDomainDescription(obj: CodeArtifactDomainDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'owner': obj.owner,
    'arn': obj.arn,
    'status': obj.status,
    'createdTime': obj.createdTime,
    'encryptionKey': obj.encryptionKey,
    'repositoryCount': obj.repositoryCount,
    'assetSizeBytes': obj.assetSizeBytes,
    's3BucketArn': obj.s3BucketArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactUpstreamRepository
 */
export interface CodeArtifactUpstreamRepository {
  /**
   * @schema CodeArtifactUpstreamRepository#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'CodeArtifactUpstreamRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactUpstreamRepository(obj: CodeArtifactUpstreamRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactResourcePolicy
 */
export interface CodeArtifactResourcePolicy {
  /**
   * @schema CodeArtifactResourcePolicy#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CodeArtifactResourcePolicy#revision
   */
  readonly revision?: string;

  /**
   * @schema CodeArtifactResourcePolicy#document
   */
  readonly document?: string;

}

/**
 * Converts an object of type 'CodeArtifactResourcePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactResourcePolicy(obj: CodeArtifactResourcePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'revision': obj.revision,
    'document': obj.document,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactPackageVersionDescription
 */
export interface CodeArtifactPackageVersionDescription {
  /**
   * @schema CodeArtifactPackageVersionDescription#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#packageName
   */
  readonly packageName?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#displayName
   */
  readonly displayName?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#version
   */
  readonly version?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#summary
   */
  readonly summary?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#homePage
   */
  readonly homePage?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#sourceCodeRepository
   */
  readonly sourceCodeRepository?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#publishedTime
   */
  readonly publishedTime?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#licenses
   */
  readonly licenses?: CodeArtifactLicenseInfo[];

  /**
   * @schema CodeArtifactPackageVersionDescription#revision
   */
  readonly revision?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodeArtifactPackageVersionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactPackageVersionDescription(obj: CodeArtifactPackageVersionDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'format': obj.format,
    'namespace': obj.namespace,
    'packageName': obj.packageName,
    'displayName': obj.displayName,
    'version': obj.version,
    'summary': obj.summary,
    'homePage': obj.homePage,
    'sourceCodeRepository': obj.sourceCodeRepository,
    'publishedTime': obj.publishedTime,
    'licenses': obj.licenses?.map(y => toJson_CodeArtifactLicenseInfo(y)),
    'revision': obj.revision,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactDomainSummary
 */
export interface CodeArtifactDomainSummary {
  /**
   * @schema CodeArtifactDomainSummary#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactDomainSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema CodeArtifactDomainSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeArtifactDomainSummary#status
   */
  readonly status?: string;

  /**
   * @schema CodeArtifactDomainSummary#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema CodeArtifactDomainSummary#encryptionKey
   */
  readonly encryptionKey?: string;

}

/**
 * Converts an object of type 'CodeArtifactDomainSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactDomainSummary(obj: CodeArtifactDomainSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'owner': obj.owner,
    'arn': obj.arn,
    'status': obj.status,
    'createdTime': obj.createdTime,
    'encryptionKey': obj.encryptionKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactAssetSummary
 */
export interface CodeArtifactAssetSummary {
  /**
   * @schema CodeArtifactAssetSummary#name
   */
  readonly name: string;

  /**
   * @schema CodeArtifactAssetSummary#size
   */
  readonly size?: number;

  /**
   * @schema CodeArtifactAssetSummary#hashes
   */
  readonly hashes?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeArtifactAssetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactAssetSummary(obj: CodeArtifactAssetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'size': obj.size,
    'hashes': ((obj.hashes) === undefined) ? undefined : (Object.entries(obj.hashes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactPackageDependency
 */
export interface CodeArtifactPackageDependency {
  /**
   * @schema CodeArtifactPackageDependency#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactPackageDependency#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactPackageDependency#dependencyType
   */
  readonly dependencyType?: string;

  /**
   * @schema CodeArtifactPackageDependency#versionRequirement
   */
  readonly versionRequirement?: string;

}

/**
 * Converts an object of type 'CodeArtifactPackageDependency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactPackageDependency(obj: CodeArtifactPackageDependency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespace': obj.namespace,
    'package': obj.package,
    'dependencyType': obj.dependencyType,
    'versionRequirement': obj.versionRequirement,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactPackageVersionSummary
 */
export interface CodeArtifactPackageVersionSummary {
  /**
   * @schema CodeArtifactPackageVersionSummary#version
   */
  readonly version: string;

  /**
   * @schema CodeArtifactPackageVersionSummary#revision
   */
  readonly revision?: string;

  /**
   * @schema CodeArtifactPackageVersionSummary#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'CodeArtifactPackageVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactPackageVersionSummary(obj: CodeArtifactPackageVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'version': obj.version,
    'revision': obj.revision,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactPackageSummary
 */
export interface CodeArtifactPackageSummary {
  /**
   * @schema CodeArtifactPackageSummary#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactPackageSummary#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactPackageSummary#package
   */
  readonly package?: string;

}

/**
 * Converts an object of type 'CodeArtifactPackageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactPackageSummary(obj: CodeArtifactPackageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'format': obj.format,
    'namespace': obj.namespace,
    'package': obj.package,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactRepositorySummary
 */
export interface CodeArtifactRepositorySummary {
  /**
   * @schema CodeArtifactRepositorySummary#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactRepositorySummary#administratorAccount
   */
  readonly administratorAccount?: string;

  /**
   * @schema CodeArtifactRepositorySummary#domainName
   */
  readonly domainName?: string;

  /**
   * @schema CodeArtifactRepositorySummary#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactRepositorySummary#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeArtifactRepositorySummary#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'CodeArtifactRepositorySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactRepositorySummary(obj: CodeArtifactRepositorySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'administratorAccount': obj.administratorAccount,
    'domainName': obj.domainName,
    'domainOwner': obj.domainOwner,
    'arn': obj.arn,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactUpstreamRepositoryInfo
 */
export interface CodeArtifactUpstreamRepositoryInfo {
  /**
   * @schema CodeArtifactUpstreamRepositoryInfo#repositoryName
   */
  readonly repositoryName?: string;

}

/**
 * Converts an object of type 'CodeArtifactUpstreamRepositoryInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactUpstreamRepositoryInfo(obj: CodeArtifactUpstreamRepositoryInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactRepositoryExternalConnectionInfo
 */
export interface CodeArtifactRepositoryExternalConnectionInfo {
  /**
   * @schema CodeArtifactRepositoryExternalConnectionInfo#externalConnectionName
   */
  readonly externalConnectionName?: string;

  /**
   * @schema CodeArtifactRepositoryExternalConnectionInfo#packageFormat
   */
  readonly packageFormat?: string;

  /**
   * @schema CodeArtifactRepositoryExternalConnectionInfo#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodeArtifactRepositoryExternalConnectionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactRepositoryExternalConnectionInfo(obj: CodeArtifactRepositoryExternalConnectionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'externalConnectionName': obj.externalConnectionName,
    'packageFormat': obj.packageFormat,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeArtifactLicenseInfo
 */
export interface CodeArtifactLicenseInfo {
  /**
   * @schema CodeArtifactLicenseInfo#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactLicenseInfo#url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'CodeArtifactLicenseInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeArtifactLicenseInfo(obj: CodeArtifactLicenseInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
